#include "motor_owner.h"
#include "stm32_clock.h"
#include "stm32_i2c.h"
extern const struct motor_owner_config motor_build_config;
extern const bool motor_environment_qualification_present;
/* SWD-visible diagnostics. Neither debugger writes nor raw samples grant
 * permission; qualification is bound to the linked read-only build config. */
struct motor_owner motor_application;
static struct motor_gpio gpio;
static struct motor_adc adc;
static struct motor_i2c i2c;
static volatile uint32_t first_alert_us;
static volatile bool alert_pending, alert_overrun;
static bool interrupt_pending(void *context) {
  (void)context;
  return alert_pending || alert_overrun || (EXTI->FPR1 & EXTI_FPR1_FPIF15);
}

static uint32_t enter_critical(void *context) {
  (void)context; uint32_t previous_mask=__get_PRIMASK(); __disable_irq();
  return previous_mask;
}
static void leave_critical(void *context, uint32_t previous_mask) {
  (void)context; __set_PRIMASK(previous_mask);
}
void motor_emergency_halt(void) {
  __disable_irq();
  struct motor_gpio emergency_gpio=motor_gpio_target();
  (void)motor_gpio_inhibit(&emergency_gpio);
  for (;;) __NOP(); /* Independent watchdog resets; never feed on a trap. */
}
void EXTI4_15_IRQHandler(void) {
  if (EXTI->FPR1 & EXTI_FPR1_FPIF15) {
    EXTI->FPR1=EXTI_FPR1_FPIF15;
    if (alert_pending) alert_overrun=true;
    else { first_alert_us=motor_time_us(0); alert_pending=true; }
  }
}
static bool alert_initialize(void) {
  EXTI->IMR1 &= ~EXTI_IMR1_IM15;
  EXTI->EXTICR[3]=(EXTI->EXTICR[3] & ~EXTI_EXTICR4_EXTI15) | EXTI_EXTICR4_EXTI15_1;
  EXTI->RTSR1 &= ~EXTI_RTSR1_RT15;
  EXTI->FTSR1 |= EXTI_FTSR1_FT15;
  EXTI->RPR1=EXTI_RPR1_RPIF15; EXTI->FPR1=EXTI_FPR1_FPIF15;
  NVIC_ClearPendingIRQ(EXTI4_15_IRQn); NVIC_SetPriority(EXTI4_15_IRQn,1);
  NVIC_EnableIRQ(EXTI4_15_IRQn); EXTI->IMR1 |= EXTI_IMR1_IM15;
  return (EXTI->EXTICR[3] & EXTI_EXTICR4_EXTI15)==EXTI_EXTICR4_EXTI15_1 &&
    (EXTI->IMR1 & EXTI_IMR1_IM15) && (EXTI->FTSR1 & EXTI_FTSR1_FT15) &&
    !(EXTI->RTSR1 & EXTI_RTSR1_RT15);
}
static struct motor_owner_event take_alert(void) {
  uint32_t previous_mask=__get_PRIMASK(); __disable_irq();
  struct motor_owner_event event={.alert_pending=alert_pending,
    .alert_overrun=alert_overrun,.alert_us=first_alert_us,
    .environment_qualified=motor_environment_qualification_present};
  alert_pending=alert_overrun=false;
  __set_PRIMASK(previous_mask);
  return event;
}
void motor_main(void) {
  __disable_irq();
  gpio=motor_gpio_target();
  if(!motor_gpio_inhibit(&gpio) || !motor_watchdog_initialize() ||
      !motor_clock_initialize() || !motor_gpio_initialize(&gpio)) motor_emergency_halt();
  const struct motor_adc_clock adc_clock={.now_us=motor_time_us};
  const struct motor_i2c_clock i2c_clock={.now_us=motor_time_us};
  adc=motor_adc_target(&gpio,&adc_clock); i2c=motor_i2c_target(&gpio,&i2c_clock);
  __enable_irq(); /* TIM3 epoch must run during all bounded peripheral waits. */
  if(!motor_adc_initialize(&adc) || !motor_i2c_initialize(&i2c) || !alert_initialize())
    motor_emergency_halt();
  motor_application.gpio=&gpio; motor_application.adc=&adc;
  motor_application.bus=motor_i2c_bus(&i2c); motor_application.config=motor_build_config;
  motor_application.pending_interrupt=interrupt_pending;
  motor_application.enter_critical=enter_critical;
  motor_application.leave_critical=leave_critical;
  (void)motor_owner_initialize(&motor_application);
  for (;;) {
    if(!motor_clock_valid() || TIM3->PSC!=31 || TIM3->ARR!=65535 ||
        TIM3->CR1!=TIM_CR1_CEN || TIM3->DIER!=TIM_DIER_UIE) motor_emergency_halt();
    const uint32_t started_us=motor_time_us(0);
    const struct motor_owner_event event=take_alert();
    motor_owner_step(&motor_application,&event);
    if(motor_time_us(0)-started_us>30000u) motor_emergency_halt();
    motor_watchdog_refresh();
  }
}
