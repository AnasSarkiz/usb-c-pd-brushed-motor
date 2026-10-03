#include "stm32_adc.h"

#define RS (ADC_CR_ADCAL | ADC_CR_ADEN | ADC_CR_ADDIS | ADC_CR_ADSTART | ADC_CR_ADSTP)
#define FLAGS (ADC_ISR_ADRDY | ADC_ISR_EOSMP | ADC_ISR_EOC | ADC_ISR_EOS | \
               ADC_ISR_OVR | ADC_ISR_AWD1 | ADC_ISR_AWD2 | ADC_ISR_AWD3 | \
               ADC_ISR_EOCAL | ADC_ISR_CCRDY)
#define CONVERSION_FLAGS (ADC_ISR_EOSMP | ADC_ISR_EOC | ADC_ISR_EOS | ADC_ISR_OVR | ADC_ISR_CCRDY)
#define COMMON (ADC_CCR_PRESC_0 | ADC_CCR_VREFEN)
#define POLL_LIMIT 4096u
#define INIT_LIMIT_US 1000u
#define CAPTURE_LIMIT_US 500u

static void target_write(void *context, const struct motor_adc_write *op) {
  (void)context;
  *op->reg = op->value;
}
struct motor_adc motor_adc_target(struct motor_gpio *gpio,
                                 const struct motor_adc_clock *clock) {
  struct motor_adc port = {.gpio = gpio, .adc = ADC1, .common = ADC1_COMMON,
    .factory_vref = (const volatile uint16_t *)UINT32_C(0x1fff75aa),
    .write = target_write};
  if (clock) { port.context = clock->context; port.now_us = clock->now_us; }
  return port;
}
static bool context_valid(const struct motor_adc *p) {
  return p && p->gpio && p->gpio->rcc && p->gpio->syscfg && p->gpio->a &&
    p->gpio->b && p->gpio->c && p->gpio->write_bsrr &&
    p->adc && p->common && p->factory_vref && p->now_us && p->write;
}
static bool fail(struct motor_adc *p) {
  if (p) {
    p->faulted = true; p->initialized = false;
    (void)motor_gpio_inhibit(p->gpio);
  }
  return false;
}
static void write_reg(struct motor_adc *p, const struct motor_adc_write op) {
  p->write(p->context, &op);
}
struct wait_condition {
  volatile uint32_t *reg;
  uint32_t mask, value, started, limit;
};
/* Time subtraction permits one uint32 wrap. A stalled clock still terminates. */
static bool wait_bits(struct motor_adc *p, const struct wait_condition c) {
  for (unsigned n = 0; n < POLL_LIMIT; ++n) {
    if ((uint32_t)(p->now_us(p->context) - c.started) >= c.limit) return false;
    if ((*c.reg & c.mask) == c.value) return true;
  }
  return false;
}
struct delay_condition { uint32_t started, delay, operation_started, limit; };
static bool delay_us(struct motor_adc *p, const struct delay_condition c) {
  for (unsigned n = 0; n < POLL_LIMIT; ++n) {
    uint32_t now = p->now_us(p->context);
    if ((uint32_t)(now - c.operation_started) >= c.limit) return false;
    if ((uint32_t)(now - c.started) >= c.delay) return true;
  }
  return false;
}
static bool pins_valid(const struct motor_adc *p) {
  return p->gpio->initialized && !p->gpio->faulted &&
    (p->gpio->rcc->IOPENR & RCC_IOPENR_GPIOAEN) != 0 &&
    (p->gpio->rcc->APBENR2 & RCC_APBENR2_SYSCFGEN) != 0 &&
    (p->gpio->a->MODER & UINT32_C(0xf)) == UINT32_C(0xf) &&
    (p->gpio->a->PUPDR & UINT32_C(0xf)) == 0 &&
    (p->gpio->syscfg->CFGR2 & SYSCFG_CFGR2_PA1_CDEN) == 0;
}
static bool settings_valid(const struct motor_adc *p) {
  return pins_valid(p) && (p->gpio->rcc->CR & (RCC_CR_HSION | RCC_CR_HSIRDY)) ==
    (RCC_CR_HSION | RCC_CR_HSIRDY) &&
    (p->gpio->rcc->APBENR2 & RCC_APBENR2_ADCEN) != 0 &&
    (p->gpio->rcc->CCIPR & RCC_CCIPR_ADCSEL) == RCC_CCIPR_ADCSEL_1 &&
    p->common->CCR == COMMON && p->adc->CFGR1 == 0 && p->adc->CFGR2 == 0 &&
    p->adc->SMPR == ADC_SMPR_SMP1 && p->adc->IER == 0;
}
static bool configured(const struct motor_adc *p) {
  return settings_valid(p) &&
    (p->adc->CR & (RS | ADC_CR_ADVREGEN)) == (ADC_CR_ADEN | ADC_CR_ADVREGEN) &&
    *p->factory_vref == p->factory_code;
}
bool motor_adc_initialize(struct motor_adc *p) {
  /* Even a malformed ADC context attempts the separate GPIO safety path. */
  if (!p) return false;
  bool inhibited = motor_gpio_inhibit(p->gpio);
  p->initialized = false;
  if (!inhibited || !context_valid(p) || p->faulted || !pins_valid(p)) return fail(p);
  uint32_t started = p->now_us(p->context);
  write_reg(p, (struct motor_adc_write){&p->gpio->rcc->APBENR2,
    p->gpio->rcc->APBENR2 | RCC_APBENR2_ADCEN});
  if (!(p->gpio->rcc->APBENR2 & RCC_APBENR2_ADCEN) || (p->adc->CR & RS)) return fail(p);
  write_reg(p, (struct motor_adc_write){&p->gpio->rcc->CR,
    p->gpio->rcc->CR | RCC_CR_HSION});
  if (!wait_bits(p, (struct wait_condition){&p->gpio->rcc->CR, RCC_CR_HSIRDY,
      RCC_CR_HSIRDY, started, INIT_LIMIT_US})) return fail(p);
  write_reg(p, (struct motor_adc_write){&p->gpio->rcc->CCIPR,
    (p->gpio->rcc->CCIPR & ~RCC_CCIPR_ADCSEL) | RCC_CCIPR_ADCSEL_1});
  write_reg(p, (struct motor_adc_write){&p->adc->IER, 0});
  write_reg(p, (struct motor_adc_write){&p->adc->CFGR1, 0});
  write_reg(p, (struct motor_adc_write){&p->adc->CFGR2, 0});
  write_reg(p, (struct motor_adc_write){&p->adc->SMPR, ADC_SMPR_SMP1});
  write_reg(p, (struct motor_adc_write){&p->common->CCR, COMMON});
  write_reg(p, (struct motor_adc_write){&p->adc->ISR, FLAGS});
  write_reg(p, (struct motor_adc_write){&p->adc->CR, ADC_CR_ADVREGEN});
  /* Calibration is forbidden with DMA/auto-off enabled. Verify all owned
   * settings BEFORE commanding it, not merely after the ADC is enabled. */
  if (!settings_valid(p) || (p->adc->CR & (RS | ADC_CR_ADVREGEN)) != ADC_CR_ADVREGEN ||
      (p->adc->ISR & FLAGS)) return fail(p);
  uint32_t regulator_start = p->now_us(p->context);
  if (!delay_us(p, (struct delay_condition){regulator_start, 20, started, INIT_LIMIT_US})) return fail(p);
  write_reg(p, (struct motor_adc_write){&p->adc->CR, ADC_CR_ADVREGEN | ADC_CR_ADCAL});
  if (!wait_bits(p, (struct wait_condition){&p->adc->CR, ADC_CR_ADCAL, 0, started, INIT_LIMIT_US}) ||
      !(p->adc->ISR & ADC_ISR_EOCAL)) return fail(p);
  uint32_t calibrated = p->now_us(p->context);
  /* 1 us exceeds the required two ADC clocks at the nominal 8 MHz. */
  if (!delay_us(p, (struct delay_condition){calibrated, 1, started, INIT_LIMIT_US})) return fail(p);
  write_reg(p, (struct motor_adc_write){&p->adc->ISR, ADC_ISR_ADRDY});
  write_reg(p, (struct motor_adc_write){&p->adc->CR, ADC_CR_ADVREGEN | ADC_CR_ADEN});
  if (!wait_bits(p, (struct wait_condition){&p->adc->ISR, ADC_ISR_ADRDY,
      ADC_ISR_ADRDY, started, INIT_LIMIT_US})) return fail(p);
  /* Conservatively wait reference startup again after ADC ready. */
  uint32_t reference_start = p->now_us(p->context);
  if (!delay_us(p, (struct delay_condition){reference_start, 12, started, INIT_LIMIT_US})) return fail(p);
  p->factory_code = *p->factory_vref;
  if (!p->factory_code || p->factory_code >= 4096 || !configured(p)) return fail(p);
  p->initialized = true;
  return true;
}
struct channel_capture { uint32_t channel, started; uint16_t code; uint32_t completed; };
static bool capture_channel(struct motor_adc *p, struct channel_capture *c) {
  if (!configured(p) || (p->adc->ISR & ADC_ISR_OVR)) return false;
  write_reg(p, (struct motor_adc_write){&p->adc->ISR, CONVERSION_FLAGS});
  if (p->adc->ISR & CONVERSION_FLAGS) return false;
  write_reg(p, (struct motor_adc_write){&p->adc->CHSELR, c->channel});
  if (!wait_bits(p, (struct wait_condition){&p->adc->ISR, ADC_ISR_CCRDY,
      ADC_ISR_CCRDY, c->started, CAPTURE_LIMIT_US}) || p->adc->CHSELR != c->channel)
    return false;
  write_reg(p, (struct motor_adc_write){&p->adc->CR,
    ADC_CR_ADVREGEN | ADC_CR_ADSTART});
  if (!wait_bits(p, (struct wait_condition){&p->adc->ISR, ADC_ISR_EOC | ADC_ISR_EOS,
      ADC_ISR_EOC | ADC_ISR_EOS, c->started, CAPTURE_LIMIT_US}) ||
      (p->adc->ISR & ADC_ISR_OVR) || !configured(p)) return false;
  uint32_t code = p->adc->DR; /* Hardware DR read clears EOC. Explicit W1C also follows. */
  c->completed = p->now_us(p->context);
  if (code >= 4096 || (p->adc->ISR & ADC_ISR_OVR) || !configured(p) ||
      (uint32_t)(c->completed - c->started) >= CAPTURE_LIMIT_US) return false;
  c->code = (uint16_t)code;
  write_reg(p, (struct motor_adc_write){&p->adc->ISR, CONVERSION_FLAGS});
  return (p->adc->ISR & CONVERSION_FLAGS) == 0;
}
struct motor_adc_sample motor_adc_capture(struct motor_adc *p) {
  const struct motor_adc_sample invalid = {0};
  if (!context_valid(p) || !p->initialized || p->faulted || !configured(p)) {
    (void)fail(p); return invalid;
  }
  struct motor_adc_sample result = {.factory_vref = p->factory_code,
    .started_us = p->now_us(p->context)};
  const uint32_t channels[3] = {ADC_CHSELR_CHSEL0, ADC_CHSELR_CHSEL1, ADC_CHSELR_CHSEL13};
  uint16_t codes[3];
  for (unsigned i = 0; i < 3; ++i) {
    struct channel_capture c = {.channel = channels[i], .started = result.started_us};
    if (!capture_channel(p, &c)) { (void)fail(p); return invalid; }
    codes[i] = c.code; result.channel_completed_us[i] = c.completed;
  }
  result.completed_us = p->now_us(p->context);
  if (!codes[2] || !configured(p) || (p->adc->ISR & ADC_ISR_OVR) ||
      (uint32_t)(result.completed_us - result.started_us) >= CAPTURE_LIMIT_US) {
    (void)fail(p); return invalid;
  }
  result.vbus = codes[0]; result.vm = codes[1]; result.vrefint = codes[2]; result.valid = true;
  return result;
}
