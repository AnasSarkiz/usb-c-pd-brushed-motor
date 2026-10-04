#include "stm32_adc.h"
#include "stm32_clock.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

static unsigned assertions;
#define CHECK(x) do { ++assertions; if (!(x)) { fprintf(stderr, "%s:%d: %s\n", __FILE__, __LINE__, #x); exit(1); } } while (0)
enum fault { NONE, HSI_STUCK, CAL_STUCK, READY_STUCK, CHANNEL_STUCK, CONVERSION_STUCK,
             OVERRUN, NO_EOS, BAD_DATA, ZERO_REFERENCE, CAL_NO_FLAG, BACKWARDS,
             STALLED_TIME, JUMP_TIME, DISABLE_STUCK };
struct model {
  RCC_TypeDef rcc; SYSCFG_TypeDef syscfg;
  GPIO_TypeDef a, b, c;
  ADC_TypeDef adc; ADC_Common_TypeDef common;
  uint16_t factory, codes[3];
  uint32_t now, hsi_due, cal_due, ready_due, channel_due, conversion_due;
  uint32_t regulator_at, calibration_done, reference_at;
  unsigned rearms;
  unsigned writes, drop_write, calls, channels, corrupt_at;
  enum fault fault;
  bool hsi, cal, ready, channel, converting;
  struct motor_gpio gpio;
  struct motor_adc port;
};
static struct model *active;
static void bsrr(GPIO_TypeDef *port, uint32_t bits) {
  port->BSRR = bits;
  port->ODR = (port->ODR & ~(bits >> 16)) | (bits & UINT32_C(0xffff));
}
static bool due(uint32_t now, uint32_t time) { return (uint32_t)(now - time) < UINT32_C(0x80000000); }
static uint32_t now_us(void *context) {
  struct model *m = context;
  ++m->calls;
  if (m->fault == BACKWARDS) --m->now;
  else if (m->fault == JUMP_TIME) m->now += 1001;
  else if (m->fault != STALLED_TIME) ++m->now;
  if (m->hsi && due(m->now, m->hsi_due) && m->fault != HSI_STUCK) {
    m->rcc.CR |= RCC_CR_HSIRDY; m->hsi = false;
  }
  if (m->cal && due(m->now, m->cal_due) && m->fault != CAL_STUCK) {
    m->adc.CR &= ~ADC_CR_ADCAL;
    if (m->fault != CAL_NO_FLAG) m->adc.ISR |= ADC_ISR_EOCAL;
    m->cal = false; m->calibration_done = m->now;
  }
  if (m->ready && due(m->now, m->ready_due) && m->fault != READY_STUCK) {
    m->adc.ISR |= ADC_ISR_ADRDY; m->ready = false;
  }
  if (m->channel && due(m->now, m->channel_due) && m->fault != CHANNEL_STUCK) {
    m->adc.ISR |= ADC_ISR_CCRDY; m->channel = false;
  }
  if (m->converting && due(m->now, m->conversion_due) && m->fault != CONVERSION_STUCK) {
    unsigned i = m->adc.CHSELR == ADC_CHSELR_CHSEL0 ? 0 :
      m->adc.CHSELR == ADC_CHSELR_CHSEL1 ? 1 : 2;
    m->adc.DR = m->fault == BAD_DATA ? 4096u :
      (m->fault == ZERO_REFERENCE && i == 2) ? 0u : m->codes[i];
    m->adc.ISR |= ADC_ISR_EOC;
    if (m->fault != NO_EOS) m->adc.ISR |= ADC_ISR_EOS;
    if (m->fault == OVERRUN) m->adc.ISR |= ADC_ISR_OVR;
    m->adc.CR &= ~ADC_CR_ADSTART; m->converting = false;
  }
  if (m->corrupt_at && m->calls == m->corrupt_at) m->adc.CFGR2 = ADC_CFGR2_CKMODE;
  return m->now;
}
static void write_mmio(void *context, const struct motor_adc_write *op) {
  struct model *m = context;
  ++m->writes;
  if (!m->port.initialized) {
    CHECK((m->a.ODR & ((1u << 6) | (1u << 7))) == (1u << 7));
    CHECK((m->a.OTYPER & ((1u << 6) | (1u << 7))) == (1u << 7));
  }
  if (m->drop_write == m->writes) return;
  if (op->reg == &m->adc.ISR) { m->adc.ISR &= ~op->value; return; }
  if (op->reg == &m->adc.CR) {
    const uint32_t rs = ADC_CR_ADEN | ADC_CR_ADDIS | ADC_CR_ADSTART | ADC_CR_ADSTP | ADC_CR_ADCAL;
    uint32_t previous = m->adc.CR;
    m->adc.CR = (op->value & ~rs) | ((op->value | previous) & rs);
    if ((op->value & ADC_CR_ADVREGEN) && !(previous & ADC_CR_ADVREGEN)) m->regulator_at = m->now;
    if (op->value & ADC_CR_ADDIS) {
      CHECK((previous & rs) == ADC_CR_ADEN);
      ++m->rearms;
      if (m->fault != DISABLE_STUCK) m->adc.CR &= ~(ADC_CR_ADEN | ADC_CR_ADDIS);
    }
    if (op->value & ADC_CR_ADCAL) {
      CHECK(!(previous & rs)); CHECK((uint32_t)(m->now - m->regulator_at) >= 20);
      CHECK(m->adc.CFGR1 == 0); CHECK(m->adc.CFGR2 == 0);
      m->cal = true; m->cal_due = m->now + 14;
    }
    if (op->value & ADC_CR_ADEN) {
      CHECK(!(previous & rs)); CHECK((uint32_t)(m->now - m->calibration_done) >= 1);
      m->ready = true; m->ready_due = m->now + 3;
    }
    if (op->value & ADC_CR_ADSTART) {
      CHECK((previous & rs) == ADC_CR_ADEN);
      CHECK(m->adc.ISR & ADC_ISR_CCRDY);
      CHECK(!(m->adc.ISR & (ADC_ISR_EOC | ADC_ISR_EOS | ADC_ISR_OVR)));
      CHECK((uint32_t)(m->now - m->reference_at) >= 12);
      CHECK(m->adc.SMPR == ADC_SMPR_SMP1);
      ++m->channels; m->converting = true; m->conversion_due = m->now + 22;
    }
    return;
  }
  *op->reg = op->value;
  if (op->reg == &m->rcc.CR && (op->value & RCC_CR_HSION)) {
    m->hsi = true; m->hsi_due = m->now + 4;
  }
  if (op->reg == &m->common.CCR) m->reference_at = m->now;
  if (op->reg == &m->adc.CHSELR) { m->channel = true; m->channel_due = m->now + 2; }
}
static void setup(struct model *m) {
  memset(m, 0, sizeof(*m)); active = m;
  m->factory = 1650; m->codes[0] = 2250; m->codes[1] = 1350; m->codes[2] = 1500;
  m->a.MODER = UINT32_C(0xabcdefab); m->a.ODR = UINT32_C(0xffff);
  m->rcc.CCIPR = UINT32_C(0x12345678);
  m->rcc.CR = RCC_CR_PLLON | RCC_CR_PLLRDY;
  m->rcc.PLLCFGR = MOTOR_PLL_CONFIG;
  m->gpio = (struct motor_gpio){.rcc=&m->rcc, .syscfg=&m->syscfg, .a=&m->a,
    .b=&m->b, .c=&m->c, .write_bsrr=bsrr};
  CHECK(motor_gpio_initialize(&m->gpio));
  m->adc.CFGR1 = ADC_CFGR1_CONT | ADC_CFGR1_AUTOFF | ADC_CFGR1_DMAEN;
  m->adc.CFGR2 = ADC_CFGR2_CKMODE; m->adc.SMPR = 0;
  m->adc.IER = ADC_IER_EOCIE;
  m->adc.ISR = ADC_ISR_ADRDY | ADC_ISR_EOCAL | ADC_ISR_EOC | ADC_ISR_EOS | ADC_ISR_CCRDY;
  m->port = (struct motor_adc){.gpio=&m->gpio, .adc=&m->adc, .common=&m->common,
    .factory_vref=&m->factory, .context=m, .now_us=now_us, .write=write_mmio};
}
static void check_off(struct model *m) {
  CHECK(m->port.faulted); CHECK(!m->port.initialized);
  CHECK((m->a.ODR & UINT32_C(0xc0)) == UINT32_C(0x80));
  CHECK((m->a.OTYPER & UINT32_C(0xc0)) == UINT32_C(0x80));
  unsigned writes = m->writes;
  CHECK(!motor_adc_initialize(&m->port)); CHECK(m->writes == writes);
}
static void invalid_sample(struct model *m) {
  struct motor_adc_sample sample = motor_adc_capture(&m->port);
  CHECK(!sample.valid); CHECK(!sample.vbus && !sample.vm && !sample.vrefint && !sample.factory_vref);
  CHECK(!sample.started_us && !sample.completed_us);
  for (unsigned i = 0; i < 3; ++i) { CHECK(!sample.channel_completed_us[i]); CHECK(!sample.channel_started_us[i]); }
  check_off(m);
}
static void valid_sample(struct model *m) {
  struct motor_adc_sample sample = motor_adc_capture(&m->port);
  CHECK(sample.valid); CHECK(sample.vbus == m->codes[0]); CHECK(sample.vm == m->codes[1]);
  CHECK(sample.vrefint == m->codes[2]); CHECK(sample.factory_vref == m->factory);
  CHECK((uint32_t)(sample.completed_us - sample.started_us) < 500);
  uint32_t last = sample.started_us;
  const unsigned order[3]={2,0,1};
  for (unsigned position = 0; position < 3; ++position) {
    const unsigned i=order[position];
    CHECK((uint32_t)(sample.channel_started_us[i] - last) < 500);
    CHECK((uint32_t)(sample.channel_completed_us[i] - sample.channel_started_us[i]) >= 22);
    last = sample.channel_completed_us[i];
  }
}
int main(void) {
  struct model m;
  setup(&m); uint32_t feedback_mode = m.a.MODER & UINT32_C(0xf00);
  uint32_t feedback_odr = m.a.ODR & UINT32_C(0x30);
  CHECK(motor_adc_initialize(&m.port));
  CHECK((m.rcc.CCIPR & ~RCC_CCIPR_ADCSEL) == (UINT32_C(0x12345678) & ~RCC_CCIPR_ADCSEL));
  CHECK((m.a.MODER & UINT32_C(0xf00)) == feedback_mode);
  CHECK((m.a.ODR & UINT32_C(0x30)) == feedback_odr);
  for (unsigned i = 0; i < 4096; ++i) {
    m.codes[0] = i; m.codes[1] = 4095u - i; m.codes[2] = 1200u + i % 300u;
    valid_sample(&m);
  }
  CHECK(m.channels == 3u * 4096);
  unsigned baseline_writes;
  setup(&m); CHECK(motor_adc_initialize(&m.port)); valid_sample(&m); baseline_writes = m.writes;
  /* Every MMIO write may be lost. Benign writes of an already-correct value
   * need not fault; a returned valid frame must still match fresh hardware. */
  for (unsigned i = 1; i <= baseline_writes; ++i) {
    setup(&m); m.drop_write = i;
    if (!motor_adc_initialize(&m.port)) check_off(&m);
    else {
      struct motor_adc_sample s = motor_adc_capture(&m.port);
      if (s.valid) { CHECK(s.vbus == m.codes[0]); CHECK(s.vm == m.codes[1]); CHECK(s.vrefint == m.codes[2]); }
      else check_off(&m);
    }
  }
  for (enum fault f = HSI_STUCK; f <= JUMP_TIME; f++) {
    setup(&m);
    bool capture_fault = f == CHANNEL_STUCK || f == CONVERSION_STUCK || f == OVERRUN ||
      f == NO_EOS || f == BAD_DATA || f == ZERO_REFERENCE;
    if (capture_fault) CHECK(motor_adc_initialize(&m.port));
    m.fault = f;
    if (capture_fault) invalid_sample(&m);
    else { CHECK(!motor_adc_initialize(&m.port)); check_off(&m); }
    CHECK(m.calls < 9000);
  }
  /* Faults after startup, including frozen/backwards clocks, fail closed. */
  for (enum fault f = BACKWARDS; f <= JUMP_TIME; f++) {
    setup(&m); CHECK(motor_adc_initialize(&m.port)); m.fault = f; invalid_sample(&m);
    CHECK(m.calls < 9000);
  }
  const uint32_t busy[] = {ADC_CR_ADEN, ADC_CR_ADCAL, ADC_CR_ADSTART, ADC_CR_ADSTP, ADC_CR_ADDIS};
  for (unsigned i = 0; i < sizeof(busy)/sizeof(busy[0]); ++i) {
    setup(&m); m.adc.CR = busy[i]; CHECK(!motor_adc_initialize(&m.port)); check_off(&m);
  }
  for (unsigned i = 0; i < 3; ++i) {
    setup(&m); m.factory = i == 0 ? 0 : i == 1 ? 4096 : UINT16_MAX;
    CHECK(!motor_adc_initialize(&m.port)); check_off(&m);
  }
  /* Detect corrupted owned configuration before using a frame. */
  for (unsigned i = 0; i < 13; ++i) {
    setup(&m); CHECK(motor_adc_initialize(&m.port));
    switch (i) {
      case 0: m.adc.CFGR1 = ADC_CFGR1_DMAEN; break;
      case 1: m.adc.CFGR2 = ADC_CFGR2_CKMODE; break;
      case 2: m.adc.SMPR = 0; break;
      case 3: m.adc.IER = ADC_IER_EOCIE; break;
      case 4: m.common.CCR = ADC_CCR_PRESC_0; break;
      case 5: m.rcc.CCIPR &= ~RCC_CCIPR_ADCSEL; break;
      case 6: m.rcc.APBENR2 &= ~RCC_APBENR2_ADCEN; break;
      case 7: m.rcc.CR &= ~RCC_CR_HSIRDY; break;
      case 8: m.adc.CR |= ADC_CR_ADCAL; break;
      case 9: m.a.MODER &= ~UINT32_C(0xf); break;
      case 10: m.a.PUPDR |= 1; break;
      case 11: m.syscfg.CFGR2 |= SYSCFG_CFGR2_PA1_CDEN; break;
      default: ++m.factory; break;
    }
    invalid_sample(&m);
  }
  setup(&m); CHECK(motor_adc_initialize(&m.port));
  for (unsigned i = 1; i < 82; ++i) {
    setup(&m); CHECK(motor_adc_initialize(&m.port)); m.corrupt_at = m.calls + i;
    struct motor_adc_sample s = motor_adc_capture(&m.port);
    if (!s.valid) check_off(&m);
    else CHECK(m.calls < m.corrupt_at);
  }
  setup(&m); m.now = UINT32_MAX - 20; CHECK(motor_adc_initialize(&m.port)); valid_sample(&m);
  setup(&m); m.now = UINT32_MAX - 100; CHECK(motor_adc_initialize(&m.port)); valid_sample(&m);
  setup(&m); m.port.now_us = NULL; CHECK(!motor_adc_initialize(&m.port)); check_off(&m);
  setup(&m); m.port.write = NULL; CHECK(!motor_adc_initialize(&m.port)); check_off(&m);
  /* A frame after a long idle must rearm before using a conversion. */
  setup(&m); CHECK(motor_adc_initialize(&m.port)); valid_sample(&m);
  CHECK(m.rearms == 0);
  m.now += 1000u;
  m.a.ODR = (m.a.ODR & ~UINT32_C(0xc0)) | UINT32_C(0x40);
  uint32_t allowed_outputs = m.a.ODR & UINT32_C(0xc0);
  valid_sample(&m); CHECK(m.rearms == 1);
  CHECK((m.a.ODR & UINT32_C(0xc0)) == allowed_outputs);
  valid_sample(&m); CHECK(m.rearms == 1);
  for (enum fault f = READY_STUCK; f <= DISABLE_STUCK; f++) {
    if (f != READY_STUCK && f != DISABLE_STUCK) continue;
    setup(&m); CHECK(motor_adc_initialize(&m.port)); m.now += 1000u;
    m.fault = f; invalid_sample(&m); CHECK(m.rearms == 1); CHECK(m.calls < 9000);
  }
  /* Lost disable/ready-clear/enable writes each fail closed on the rearm path. */
  for (unsigned i = 1; i <= 3; ++i) {
    setup(&m); CHECK(motor_adc_initialize(&m.port)); m.now += 1000u;
    m.drop_write = m.writes + i; invalid_sample(&m); CHECK(m.calls < 9000);
  }
  setup(&m); m.now = UINT32_MAX - 500u; CHECK(motor_adc_initialize(&m.port));
  m.now += 1000u; valid_sample(&m); CHECK(m.rearms == 1);
  CHECK(!motor_adc_initialize(NULL)); CHECK(!motor_adc_capture(NULL).valid);
  struct motor_adc_clock clock = {.context=&m, .now_us=now_us};
  struct motor_adc target = motor_adc_target(&m.gpio, &clock);
  CHECK(target.adc == ADC1 && target.common == ADC1_COMMON);
  CHECK((uintptr_t)target.factory_vref == UINT32_C(0x1fff75aa));
  CHECK(target.now_us == now_us && target.context == &m && target.write);
  CHECK(active == &m);
  printf("STM32 bounded ADC host tests passed: %u assertions; raw acquisition only\n", assertions);
  return 0;
}
