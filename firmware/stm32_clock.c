#include "stm32_clock.h"

static volatile uint32_t timer_epoch_us;
#define CLOCK_POLLS 100000u
static bool wait_register(volatile uint32_t *reg, uint32_t mask) {
  for (unsigned n = 0; n < CLOCK_POLLS; ++n)
    if ((*reg & mask) == mask) return true;
  return false;
}
bool motor_clock_valid(void) {
  return (RCC->CR & (RCC_CR_HSION | RCC_CR_HSIRDY | RCC_CR_PLLON | RCC_CR_PLLRDY |
                    RCC_CR_HSIDIV)) ==
      (RCC_CR_HSION | RCC_CR_HSIRDY | RCC_CR_PLLON | RCC_CR_PLLRDY) &&
    RCC->PLLCFGR == MOTOR_PLL_CONFIG &&
    (RCC->CFGR & (RCC_CFGR_SW | RCC_CFGR_SWS | RCC_CFGR_HPRE | RCC_CFGR_PPRE)) ==
      (RCC_CFGR_SW_PLLRCLK | RCC_CFGR_SWS_PLLRCLK) &&
    (FLASH->ACR & FLASH_ACR_LATENCY) == FLASH_ACR_LATENCY_0 &&
    (PWR->CR1 & PWR_CR1_VOS) == PWR_CR1_VOS_0;
}
bool motor_clock_initialize(void) {
  /* Reset owner must inhibit GPIO first. No live PLL reconfiguration. */
  if ((RCC->CFGR & RCC_CFGR_SWS) != RCC_CFGR_SWS_HSISYS ||
      (RCC->CR & (RCC_CR_PLLON | RCC_CR_PLLRDY)) || (RCC->BDCR & RCC_BDCR_LSEON))
    return false;
  RCC->CR = (RCC->CR & ~RCC_CR_HSIDIV) | RCC_CR_HSION;
  if (!wait_register(&RCC->CR, RCC_CR_HSIRDY)) return false;
  RCC->APBENR1 |= RCC_APBENR1_PWREN;
  if (!(RCC->APBENR1 & RCC_APBENR1_PWREN)) return false;
  PWR->CR1 = (PWR->CR1 & ~PWR_CR1_VOS) | PWR_CR1_VOS_0;
  for (unsigned n = 0; (PWR->SR2 & PWR_SR2_VOSF); ++n)
    if (n >= CLOCK_POLLS) return false;
  FLASH->ACR = (FLASH->ACR & ~FLASH_ACR_LATENCY) | FLASH_ACR_LATENCY_0;
  if ((FLASH->ACR & FLASH_ACR_LATENCY) != FLASH_ACR_LATENCY_0) return false;
  RCC->PLLCFGR = MOTOR_PLL_CONFIG;
  if (RCC->PLLCFGR != MOTOR_PLL_CONFIG) return false;
  RCC->CR |= RCC_CR_PLLON;
  if (!wait_register(&RCC->CR, RCC_CR_PLLRDY)) return false;
  RCC->CFGR = (RCC->CFGR & ~(RCC_CFGR_SW | RCC_CFGR_HPRE | RCC_CFGR_PPRE)) |
    RCC_CFGR_SW_PLLRCLK;
  for (unsigned n = 0; !motor_clock_valid(); ++n)
    if (n >= CLOCK_POLLS) return false;
  RCC->APBENR1 |= RCC_APBENR1_TIM3EN;
  if (!(RCC->APBENR1 & RCC_APBENR1_TIM3EN)) return false;
  TIM3->CR1 = 0; TIM3->DIER = 0;
  TIM3->PSC = 31; TIM3->ARR = 65535; TIM3->EGR = TIM_EGR_UG;
  TIM3->SR = 0; TIM3->CNT = 0; timer_epoch_us = 0;
  TIM3->DIER = TIM_DIER_UIE;
  NVIC_ClearPendingIRQ(TIM3_IRQn);
  NVIC_SetPriority(TIM3_IRQn, 0);
  NVIC_EnableIRQ(TIM3_IRQn);
  TIM3->CR1 = TIM_CR1_CEN;
  return TIM3->PSC == 31 && TIM3->ARR == 65535 &&
    TIM3->DIER == TIM_DIER_UIE && TIM3->CR1 == TIM_CR1_CEN;
}
void TIM3_IRQHandler(void) {
  if (TIM3->SR & TIM_SR_UIF) {
    TIM3->SR = ~TIM_SR_UIF;
    timer_epoch_us += 65536u;
  }
}
uint32_t motor_time_us(void *context) {
  (void)context;
  uint32_t previous_mask = __get_PRIMASK();
  __disable_irq();
  uint32_t epoch = timer_epoch_us, count = TIM3->CNT;
  /* An overflow after CNT was sampled belongs to the next epoch. It is
   * consumed by the IRQ later; this reader never clears the pending event. */
  if (TIM3->SR & TIM_SR_UIF) { epoch += 65536u; count = TIM3->CNT; }
  __set_PRIMASK(previous_mask);
  return epoch + count;
}
bool motor_watchdog_initialize(void) {
  /* LSI29.5..34 kHz; DIV32*(127+1):120.5..138.9 ms. Deliberately not
   * debug-frozen. Feed only after one bounded complete foreground iteration. */
  IWDG->KR = 0xcccc; IWDG->KR = 0x5555;
  IWDG->PR = 3; IWDG->RLR = 127;
  for (unsigned n = 0; IWDG->SR; ++n)
    if (n >= CLOCK_POLLS) return false;
  IWDG->KR = 0xaaaa;
  return IWDG->PR == 3 && IWDG->RLR == 127;
}
void motor_watchdog_refresh(void) { IWDG->KR = 0xaaaa; }
