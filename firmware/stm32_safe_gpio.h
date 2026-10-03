/* Board A11 digital safety port. Does not qualify a PD contract or motor rail. */
#ifndef MOTOR_STM32_SAFE_GPIO_H
#define MOTOR_STM32_SAFE_GPIO_H
#include <stdbool.h>
#include <stdint.h>
#include "stm32g030xx.h"

struct motor_gpio {
  RCC_TypeDef *rcc;
  SYSCFG_TypeDef *syscfg;
  GPIO_TypeDef *a, *b, *c;
  /* Required atomic write. Target writes BSRR; a host register model also
   * emulates its documented ODR side effect. No silent callback fallback. */
  void (*write_bsrr)(GPIO_TypeDef *port, uint32_t bits);
  bool initialized, faulted;
};
struct motor_gpio_inputs {
  uint8_t selector_bits;
  bool pd_alert, motor_fault, pd_enabled;
};
/* Actual MMIO addresses and BSRR operation, using unmodified ST definitions. */
struct motor_gpio motor_gpio_target(void);
/* Single owner, interrupts serialized and old PD provenance invalidated by
 * caller. Inhibits both power paths first; never changes PA4/PA5 feedback.
 * LSE must already be disabled. Leaves PD RESET deasserted; no reset pulse. */
bool motor_gpio_initialize(struct motor_gpio *gpio);
/* May be called before initialization. Does not change the voltage selection.
 * A failed readback latches faulted; a new initialize cannot clear that latch. */
bool motor_gpio_inhibit(struct motor_gpio *gpio);
/* Invalid/uninitialized/faulted ports return selector=3 and asserted faults. */
struct motor_gpio_inputs motor_gpio_read_inputs(struct motor_gpio *gpio);
#endif
