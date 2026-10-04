#ifndef MOTOR_STM32_CLOCK_H
#define MOTOR_STM32_CLOCK_H
#include "stm32g030xx.h"
#include <stdbool.h>
/* HSI16 /2 *16 =128 MHz VCO; P/2=64 MHz; ADC/2=32 MHz;
 * R/4=32 MHz CPU/APB/timers. Divisors use ST's DIV(n)=n-1 encoding.
 * Preserve factory HSI trim. Conservative +/-3% envelope: ADC <35 MHz,
 * SYSCLK <48 MHz at FLASH latency1, PLL input within2.66..16 MHz. */
#define MOTOR_PLL_CONFIG (RCC_PLLCFGR_PLLSRC_HSI | RCC_PLLCFGR_PLLM_0 | \
  (16u << RCC_PLLCFGR_PLLN_Pos) | RCC_PLLCFGR_PLLP_0 | \
  RCC_PLLCFGR_PLLPEN | RCC_PLLCFGR_PLLR_0 | RCC_PLLCFGR_PLLR_1 | RCC_PLLCFGR_PLLREN)
bool motor_clock_initialize(void);
bool motor_clock_valid(void);
uint32_t motor_time_us(void *context);
void TIM3_IRQHandler(void);
bool motor_watchdog_initialize(void);
void motor_watchdog_refresh(void);
#endif
