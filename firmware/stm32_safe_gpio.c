#include "stm32_safe_gpio.h"

#define BIT(pin) (UINT32_C(1) << (pin))
#define MODE(pin, value) ((uint32_t)(value) << (2u * (pin)))
#define FIELD(pin) MODE(pin, 3u)
#define PA_SAFETY (BIT(6) | BIT(7))
#define PA_OUTPUT (PA_SAFETY | BIT(11))
#define PA_OWNED (FIELD(0) | FIELD(1) | FIELD(2) | FIELD(3) | FIELD(6) | \
                  FIELD(7) | FIELD(8) | FIELD(9) | FIELD(10) | FIELD(11) | \
                  FIELD(12) | FIELD(15))
#define PA_MODES (MODE(0, 3) | MODE(1, 3) | MODE(6, 1) | MODE(7, 1) | \
                  MODE(9, 3) | MODE(10, 3) | MODE(11, 1) | MODE(15, 3))
#define PB_OWNED UINT32_C(0x000fffff)
#define PB_MODES UINT32_C(0x000affff)
#define PC_OWNED (FIELD(14) | FIELD(15))
#define PC_MODES MODE(14, 3)
#define PORT_CLOCKS (RCC_IOPENR_GPIOAEN | RCC_IOPENR_GPIOBEN | RCC_IOPENR_GPIOCEN)

static bool valid(const struct motor_gpio *g) {
  return g && g->rcc && g->syscfg && g->a && g->b && g->c && g->write_bsrr;
}
static void target_bsrr(GPIO_TypeDef *port, uint32_t bits) { port->BSRR = bits; }
struct motor_gpio motor_gpio_target(void) {
  return (struct motor_gpio){.rcc = RCC, .syscfg = SYSCFG, .a = GPIOA,
                            .b = GPIOB, .c = GPIOC, .write_bsrr = target_bsrr};
}
static bool safety_readback(const struct motor_gpio *g) {
  return (g->rcc->IOPENR & PORT_CLOCKS) == PORT_CLOCKS &&
    (g->a->MODER & (FIELD(6) | FIELD(7))) == (MODE(6, 1) | MODE(7, 1)) &&
    (g->a->OTYPER & PA_SAFETY) == BIT(7) &&
    (g->a->PUPDR & (FIELD(6) | FIELD(7))) == 0 &&
    (g->a->ODR & PA_SAFETY) ==
      ((g->host_allow ? BIT(6) : 0) | (g->release_bridge ? 0 : BIT(7)));
}
bool motor_gpio_inhibit(struct motor_gpio *g) {
  if (!valid(g)) {
    if (g) { g->faulted = true; g->initialized = false; }
    return false;
  }
  g->rcc->IOPENR |= PORT_CLOCKS;
  /* Read back clock enable before accessing GPIO registers. */
  if ((g->rcc->IOPENR & PORT_CLOCKS) != PORT_CLOCKS) {
    g->faulted = true; g->initialized = false; return false;
  }
  /* Remove power permission before changing any other peripheral or pin. */
  g->write_bsrr(g->a, BIT(6) << 16);
  g->a->OTYPER &= ~BIT(6);
  g->a->PUPDR &= ~FIELD(6);
  g->a->MODER = (g->a->MODER & ~FIELD(6)) | MODE(6, 1);
  /* Q6 base is directly on PA7. Open drain BEFORE setting the high latch:
   * a push-pull high would source unresisted current into that B-E junction. */
  g->a->OTYPER |= BIT(7);
  g->write_bsrr(g->a, BIT(7));
  g->a->PUPDR &= ~FIELD(7);
  g->a->MODER = (g->a->MODER & ~FIELD(7)) | MODE(7, 1);
  g->host_allow = false;
  g->release_bridge = false;
  if (!safety_readback(g)) {
    g->faulted = true; g->initialized = false; return false;
  }
  return true;
}
static bool feedback_readback(const struct motor_gpio *g);
static bool configuration_readback(const struct motor_gpio *g) {
  return safety_readback(g) &&
    (g->rcc->APBENR2 & RCC_APBENR2_SYSCFGEN) != 0 &&
    (g->rcc->BDCR & RCC_BDCR_LSEON) == 0 &&
    (g->syscfg->CFGR1 & (SYSCFG_CFGR1_PA11_RMP | SYSCFG_CFGR1_PA12_RMP)) == 0 &&
    (g->syscfg->CFGR2 & SYSCFG_CFGR2_PA1_CDEN) == 0 &&
    (g->a->MODER & PA_OWNED) == PA_MODES &&
    (g->a->PUPDR & PA_OWNED) == 0 &&
    (g->a->OSPEEDR & (FIELD(6) | FIELD(7) | FIELD(11))) == 0 &&
    (g->a->OTYPER & PA_OUTPUT) == BIT(7) && (g->a->ODR & BIT(11)) == 0 &&
    (g->b->MODER & PB_OWNED) == PB_MODES && (g->b->PUPDR & PB_OWNED) == 0 &&
    (g->b->OTYPER & (BIT(8) | BIT(9))) == (BIT(8) | BIT(9)) &&
    (g->b->OSPEEDR & (FIELD(8) | FIELD(9))) == 0 &&
    (g->b->AFR[1] & UINT32_C(0xff)) == UINT32_C(0x66) &&
    (g->c->MODER & PC_OWNED) == PC_MODES && (g->c->PUPDR & PC_OWNED) == 0 &&
    feedback_readback(g);
}
bool motor_gpio_initialize(struct motor_gpio *g) {
  if (!motor_gpio_inhibit(g)) return false;
  g->initialized = false;
  if (g->faulted || (g->rcc->BDCR & RCC_BDCR_LSEON)) {
    g->faulted = true; return false;
  }
  g->rcc->APBENR2 |= RCC_APBENR2_SYSCFGEN;
  if (!(g->rcc->APBENR2 & RCC_APBENR2_SYSCFGEN)) {
    g->faulted = true; return false;
  }
  /* Disable bonded aliases first. Never touch feedback PA4/PA5 or SWD13/14. */
  g->a->MODER = (g->a->MODER & ~(FIELD(9) | FIELD(10) | FIELD(15))) |
    MODE(9, 3) | MODE(10, 3) | MODE(15, 3);
  g->a->PUPDR &= ~(FIELD(9) | FIELD(10) | FIELD(15));
  g->b->MODER = (g->b->MODER & ~UINT32_C(0xffff)) | UINT32_C(0xffff);
  g->b->PUPDR &= ~UINT32_C(0xffff);
  g->c->MODER = (g->c->MODER & ~FIELD(14)) | MODE(14, 3);
  g->c->PUPDR &= ~FIELD(14);
  g->syscfg->CFGR1 &= ~(SYSCFG_CFGR1_PA11_RMP | SYSCFG_CFGR1_PA12_RMP);
  g->syscfg->CFGR2 &= ~SYSCFG_CFGR2_PA1_CDEN;
  /* Active-high RESET remains low. A bounded pulse belongs to a later owner. */
  g->write_bsrr(g->a, BIT(11) << 16);
  g->a->OTYPER &= ~BIT(11);
  g->a->OSPEEDR &= ~(FIELD(6) | FIELD(7) | FIELD(11));
  g->a->PUPDR &= ~PA_OWNED;
  g->a->MODER = (g->a->MODER & ~PA_OWNED) | PA_MODES;
  /* I2C1: PB8/PB9 AF6, open drain, external pull-ups. */
  g->b->OTYPER |= BIT(8) | BIT(9);
  g->write_bsrr(g->b, BIT(8) | BIT(9));
  g->b->AFR[1] = (g->b->AFR[1] & ~UINT32_C(0xff)) | UINT32_C(0x66);
  g->b->PUPDR &= ~PB_OWNED;
  g->b->OSPEEDR &= ~(FIELD(8) | FIELD(9));
  g->b->MODER = (g->b->MODER & ~PB_OWNED) | PB_MODES;
  g->c->PUPDR &= ~PC_OWNED;
  g->c->MODER = (g->c->MODER & ~PC_OWNED) | PC_MODES;
  if (!configuration_readback(g)) {
    g->faulted = true;
    (void)motor_gpio_inhibit(g);
    return false;
  }
  g->initialized = true;
  return true;
}
struct motor_gpio_inputs motor_gpio_read_inputs(struct motor_gpio *g) {
  struct motor_gpio_inputs result = {.selector_bits = 3, .pd_alert = true,
                                    .motor_fault = true, .pd_enabled = false};
  if (!valid(g) || !g->initialized || g->faulted) return result;
  if (!configuration_readback(g)) {
    g->faulted = true; g->initialized = false;
    (void)motor_gpio_inhibit(g);
    return result;
  }
  uint32_t a = g->a->IDR;
  result.selector_bits = (uint8_t)((a >> 2) & 3u);
  result.motor_fault = (a & BIT(12)) == 0;
  result.pd_enabled = (a & BIT(8)) == 0;
  result.pd_alert = (g->c->IDR & BIT(15)) == 0;
  return result;
}

static bool feedback_readback(const struct motor_gpio *g) {
  return !g->feedback_known ||
    ((g->a->MODER & (FIELD(4) | FIELD(5))) == (MODE(4, 1) | MODE(5, 1)) &&
     (g->a->OTYPER & (BIT(4) | BIT(5))) == 0 &&
     (g->a->PUPDR & (FIELD(4) | FIELD(5))) == 0 &&
     (g->a->OSPEEDR & (FIELD(4) | FIELD(5))) == 0 &&
     (g->a->ODR & (BIT(4) | BIT(5))) ==
       ((g->drive_9v ? BIT(4) : 0) | (g->drive_12v ? BIT(5) : 0)));
}

static bool apply_failure(struct motor_gpio *g) {
  if (g) {
    g->faulted = true;
    g->initialized = false;
    (void)motor_gpio_inhibit(g);
  }
  return false;
}

bool motor_gpio_apply(struct motor_gpio *g, const struct motor_gpio_command *command) {
  if (!valid(g) || !command || !g->initialized || g->faulted ||
      !configuration_readback(g))
    return apply_failure(g);
  const struct pd_sequence_outputs *outputs = &command->outputs;
  if ((outputs->drive_9v && outputs->drive_12v) ||
      (outputs->release_bridge && !outputs->host_allow)) return apply_failure(g);
  if (outputs->host_allow && (!command->motor_rail.valid ||
      command->motor_rail.lower_mv > command->motor_rail.upper_mv ||
      (uint32_t)(command->now_us - command->oldest_sample_us) > 5000))
    return apply_failure(g);
  const bool feedback_change = !g->feedback_known ||
    outputs->drive_9v != g->drive_9v || outputs->drive_12v != g->drive_12v;
  if (feedback_change) {
    /* Revoke permissions before touching a voltage-selection transistor. */
    if (!motor_gpio_inhibit(g)) return apply_failure(g);
    if (outputs->host_allow || outputs->release_bridge || !command->motor_rail.valid ||
        command->motor_rail.lower_mv > command->motor_rail.upper_mv ||
        command->motor_rail.upper_mv > 1000 ||
        (uint32_t)(command->now_us - command->oldest_sample_us) > 5000)
      return apply_failure(g);
    const uint32_t feedback_latches = (outputs->drive_9v ? BIT(4) : BIT(4) << 16) |
                                     (outputs->drive_12v ? BIT(5) : BIT(5) << 16);
    g->write_bsrr(g->a, feedback_latches);
    g->a->OTYPER &= ~(BIT(4) | BIT(5));
    g->a->PUPDR &= ~(FIELD(4) | FIELD(5));
    g->a->OSPEEDR &= ~(FIELD(4) | FIELD(5));
    g->a->MODER = (g->a->MODER & ~(FIELD(4) | FIELD(5))) | MODE(4, 1) | MODE(5, 1);
    g->drive_9v = outputs->drive_9v;
    g->drive_12v = outputs->drive_12v;
    g->feedback_known = true;
    if (!feedback_readback(g)) return apply_failure(g);
  }
  if (!outputs->host_allow) return motor_gpio_inhibit(g);
  /* Power permission rises only after feedback is established. Q6 remains
   * inhibited until the sequencing owner explicitly commands bridge wake. */
  g->write_bsrr(g->a, BIT(6) | (outputs->release_bridge ? BIT(7) << 16 : BIT(7)));
  g->host_allow = outputs->host_allow;
  g->release_bridge = outputs->release_bridge;
  if (!configuration_readback(g)) return apply_failure(g);
  return true;
}
