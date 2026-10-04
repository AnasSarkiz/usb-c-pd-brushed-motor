#ifndef MOTOR_STM32_I2C_H
#define MOTOR_STM32_I2C_H
#include "stm32_safe_gpio.h"
#include "stusb4500_rx.h"
struct motor_i2c_write { volatile uint32_t *reg; uint32_t contents; };
struct motor_i2c {
  struct motor_gpio *gpio;
  I2C_TypeDef *i2c;
  void *context;
  uint32_t (*now_us)(void *context);
  void (*write)(void *context, const struct motor_i2c_write *operation);
  uint8_t (*read_byte)(void *context);
  bool initialized, faulted, busy;
};
struct motor_i2c_clock { void *context; uint32_t (*now_us)(void *context); };
struct motor_i2c motor_i2c_target(struct motor_gpio *gpio,
                                const struct motor_i2c_clock *clock);
bool motor_i2c_initialize(struct motor_i2c *port);
struct stusb_bus motor_i2c_bus(struct motor_i2c *port);
/* HSI16 kernel; analog filter enabled/DNF0. See I2C-TIMING.md for the
 * explicit rise/fall/clock envelope and required prototype oscilloscope test. */
#define MOTOR_I2C_TIMING UINT32_C(0x00521018)
#endif
