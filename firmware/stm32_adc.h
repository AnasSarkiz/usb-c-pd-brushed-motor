/* Raw acquisition only. Does not grant motor power or qualify a voltage. */
#ifndef MOTOR_STM32_ADC_H
#define MOTOR_STM32_ADC_H
#include "stm32_safe_gpio.h"

struct motor_adc_write { volatile uint32_t *reg; uint32_t value; };
struct motor_adc {
  struct motor_gpio *gpio;
  ADC_TypeDef *adc;
  ADC_Common_TypeDef *common;
  const volatile uint16_t *factory_vref;
  void *context;
  uint32_t (*now_us)(void *context);
  /* Target performs the actual MMIO write. Tests emulate W1C/RS properties. */
  void (*write)(void *context, const struct motor_adc_write *operation);
  uint16_t factory_code;
  bool initialized, faulted;
};
struct motor_adc_clock { void *context; uint32_t (*now_us)(void *context); };
struct motor_adc_sample {
  uint16_t vbus, vm, vrefint, factory_vref;
  uint32_t started_us, completed_us, channel_completed_us[3];
  bool valid;
};
/* Requires a proven monotonic microsecond clock; no CPU-loop time substitute. */
struct motor_adc motor_adc_target(struct motor_gpio *gpio,
                                 const struct motor_adc_clock *clock);
/* Caller serializes access and invalidates old contract/measurement provenance.
 * Physically commands both power permissions off before touching ADC state.
 * Rejects a busy/enabled ADC instead of reconfiguring a live acquisition. */
bool motor_adc_initialize(struct motor_adc *port);
/* Bounded fresh single conversions: PA0/VBUS, PA1/VM, channel13/VREFINT.
 * Any error returns an all-zero invalid sample and latches motor inhibition.
 * No implicit retry/reset can clear that latch. Caller controls sample cadence. */
struct motor_adc_sample motor_adc_capture(struct motor_adc *port);
#endif
