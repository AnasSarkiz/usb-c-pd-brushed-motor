/* Board A11 digital safety port. Does not qualify a PD contract or motor rail. */
#ifndef MOTOR_STM32_SAFE_GPIO_H
#define MOTOR_STM32_SAFE_GPIO_H
#include <stdbool.h>
#include <stdint.h>
#include "stm32g030xx.h"
#include "pd_sequence.h"

struct motor_gpio {
  RCC_TypeDef *rcc;
  SYSCFG_TypeDef *syscfg;
  GPIO_TypeDef *a, *b, *c;
  /* Required atomic write. Target writes BSRR; a host register model also
   * emulates its documented ODR side effect. No silent callback fallback. */
  void (*write_bsrr)(GPIO_TypeDef *port, uint32_t bits);
  bool initialized, faulted;
  bool host_allow, release_bridge, feedback_known, drive_9v, drive_12v;
};
struct motor_gpio_inputs {
  uint8_t selector_bits;
  bool pd_alert, motor_fault, pd_enabled;
};
struct motor_gpio_command {
  struct pd_sequence_outputs outputs;
  struct pd_voltage_interval motor_rail;
  uint32_t oldest_sample_us, now_us;
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
/* Single serialized sequencing owner only. This applies, but does not itself
 * qualify, a PD contract. Feedback changes require an outward-rounded fresh
 * motor-rail interval entirely below 1 V, with both permissions inhibited.
 * Any mismatch revokes power without changing feedback under stored energy. */
bool motor_gpio_apply(struct motor_gpio *gpio,
                      const struct motor_gpio_command *command);
#endif
