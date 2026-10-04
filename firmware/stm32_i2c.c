#include "stm32_i2c.h"
#define ADDRESS_7BIT 0x28u
#define MAX_TRANSACTION_US 30000u
#define MAX_POLLS 50000u
#define ERRORS (I2C_ISR_NACKF | I2C_ISR_BERR | I2C_ISR_ARLO | I2C_ISR_OVR | \
                I2C_ISR_TIMEOUT | I2C_ISR_ALERT)
#define COMMAND_FIELDS (I2C_CR2_SADD | I2C_CR2_RD_WRN | I2C_CR2_ADD10 | \
  I2C_CR2_NBYTES | I2C_CR2_AUTOEND | I2C_CR2_RELOAD | I2C_CR2_PECBYTE)
static void target_write(void *context, const struct motor_i2c_write *op) {
  (void)context; *op->reg = op->contents;
}
static uint8_t target_read(void *context) {
  struct motor_i2c *port = context;
  return (uint8_t)port->i2c->RXDR;
}
struct motor_i2c motor_i2c_target(struct motor_gpio *gpio,
                                const struct motor_i2c_clock *clock) {
  struct motor_i2c port = {.gpio = gpio, .i2c = I2C1, .write = target_write};
  if (clock) { port.context = clock->context; port.now_us = clock->now_us; }
  /* Target RXDR read is direct below; a model can supply its FIFO callback. */
  return port;
}
static bool fail(struct motor_i2c *p) {
  if (p) {
    p->faulted = true; p->initialized = false; p->busy = false;
    (void)motor_gpio_inhibit(p->gpio);
    if (p->i2c && p->write)
      p->write(p->context, &(struct motor_i2c_write){&p->i2c->CR1, 0});
  }
  return false;
}
static bool configured(const struct motor_i2c *p) {
  return p && p->gpio && p->gpio->rcc && p->gpio->b && p->i2c &&
    p->now_us && p->write && p->gpio->initialized && !p->gpio->faulted &&
    (p->gpio->rcc->CR & (RCC_CR_HSION | RCC_CR_HSIRDY)) ==
      (RCC_CR_HSION | RCC_CR_HSIRDY) &&
    (p->gpio->rcc->APBENR1 & RCC_APBENR1_I2C1EN) &&
    (p->gpio->rcc->CCIPR & RCC_CCIPR_I2C1SEL) == RCC_CCIPR_I2C1SEL_1 &&
    p->i2c->CR1 == I2C_CR1_PE && p->i2c->TIMINGR == MOTOR_I2C_TIMING &&
    (p->gpio->b->MODER & UINT32_C(0xf0000)) == UINT32_C(0xa0000) &&
    (p->gpio->b->OTYPER & UINT32_C(0x300)) == UINT32_C(0x300) &&
    (p->gpio->b->AFR[1] & 0xffu) == 0x66u;
}
static void write_reg(struct motor_i2c *p, const struct motor_i2c_write op) {
  p->write(p->context, &op);
}
bool motor_i2c_initialize(struct motor_i2c *p) {
  if (!p || !p->gpio || !p->gpio->rcc || !p->i2c || !p->write ||
      !p->now_us || p->faulted || !motor_gpio_inhibit(p->gpio)) return fail(p);
  if (p->i2c->CR1 & I2C_CR1_PE || p->i2c->ISR & I2C_ISR_BUSY) return fail(p);
  p->gpio->rcc->APBENR1 |= RCC_APBENR1_I2C1EN;
  p->gpio->rcc->CCIPR = (p->gpio->rcc->CCIPR & ~RCC_CCIPR_I2C1SEL) |
    RCC_CCIPR_I2C1SEL_1; /* ST LL_RCC_I2C1_CLKSOURCE_HSI */
  write_reg(p, (struct motor_i2c_write){&p->i2c->CR1, 0});
  write_reg(p, (struct motor_i2c_write){&p->i2c->CR2, 0});
  write_reg(p, (struct motor_i2c_write){&p->i2c->TIMINGR, MOTOR_I2C_TIMING});
  write_reg(p, (struct motor_i2c_write){&p->i2c->ICR,
    I2C_ICR_NACKCF | I2C_ICR_STOPCF | I2C_ICR_BERRCF | I2C_ICR_ARLOCF |
    I2C_ICR_OVRCF | I2C_ICR_TIMOUTCF | I2C_ICR_ALERTCF});
  write_reg(p, (struct motor_i2c_write){&p->i2c->CR1, I2C_CR1_PE});
  if (!configured(p) || p->i2c->CR2 || p->i2c->ISR & (ERRORS | I2C_ISR_BUSY | I2C_ISR_STOPF))
    return fail(p);
  p->initialized = true;
  return true;
}
struct wait_for { uint32_t status_mask, deadline_us; bool allow_stop; };
static bool wait_status(struct motor_i2c *p, const struct wait_for wait) {
  for (unsigned n = 0; n < MAX_POLLS; ++n) {
    uint32_t remaining = wait.deadline_us - p->now_us(p->context);
    if (!remaining || remaining > MAX_TRANSACTION_US || !configured(p)) return false;
    uint32_t status = p->i2c->ISR;
    if (status & ERRORS || (!wait.allow_stop && status & I2C_ISR_STOPF)) return false;
    if ((status & wait.status_mask) == wait.status_mask) return true;
  }
  return false;
}
struct command { uint32_t byte_count, deadline_us; bool read, automatic_stop; };
static bool start(struct motor_i2c *p, const struct command command) {
  const uint32_t control = (ADDRESS_7BIT << 1) |
    (command.byte_count << I2C_CR2_NBYTES_Pos) |
    (command.read ? I2C_CR2_RD_WRN : 0) |
    (command.automatic_stop ? I2C_CR2_AUTOEND : 0);
  write_reg(p, (struct motor_i2c_write){&p->i2c->CR2, control | I2C_CR2_START});
  return (p->i2c->CR2 & COMMAND_FIELDS) == control &&
    wait_status(p, (struct wait_for){command.read ? I2C_ISR_RXNE : I2C_ISR_TXIS,
      command.deadline_us, false});
}
static bool begin(struct motor_i2c *p, uint32_t deadline_us) {
  if (!p || !p->initialized || p->faulted || p->busy || !configured(p)) return false;
  p->busy = true;
  if (p->i2c->ISR & (ERRORS | I2C_ISR_STOPF)) return false;
  for (unsigned n = 0; n < MAX_POLLS; ++n) {
    uint32_t remaining = deadline_us - p->now_us(p->context);
    if (!remaining || remaining > MAX_TRANSACTION_US || !configured(p)) return false;
    if (!(p->i2c->ISR & I2C_ISR_BUSY)) return true;
    if (p->i2c->ISR & ERRORS) return false;
  }
  return false;
}
static bool complete(struct motor_i2c *p, uint32_t deadline_us) {
  if (!wait_status(p, (struct wait_for){I2C_ISR_STOPF, deadline_us, true})) return false;
  write_reg(p, (struct motor_i2c_write){&p->i2c->ICR, I2C_ICR_STOPCF});
  if (p->i2c->ISR & (ERRORS | I2C_ISR_STOPF | I2C_ISR_BUSY)) return false;
  p->busy = false;
  return true;
}
static bool read_transfer(void *context, const struct stusb_read *transfer) {
  struct motor_i2c *p = context;
  if (!transfer || !transfer->bytes || !transfer->byte_count) return fail(p);
  for (unsigned i = 0; i < transfer->byte_count; ++i) transfer->bytes[i] = 0;
  const uint32_t deadline = transfer->deadline_us;
  if (!begin(p, deadline) || !start(p, (struct command){1, deadline, false, false}))
    goto failed;
  write_reg(p, (struct motor_i2c_write){&p->i2c->TXDR, transfer->register_address});
  if (!wait_status(p, (struct wait_for){I2C_ISR_TC, deadline, false}) ||
      !start(p, (struct command){transfer->byte_count, deadline, true, true})) goto failed;
  for (unsigned i = 0; i < transfer->byte_count; ++i) {
    if (!wait_status(p, (struct wait_for){I2C_ISR_RXNE, deadline, true})) goto failed;
    transfer->bytes[i] = p->read_byte ? p->read_byte(p->context) : target_read(p);
  }
  if (complete(p, deadline)) return true;
failed:
  for (unsigned i = 0; i < transfer->byte_count; ++i) transfer->bytes[i] = 0;
  return fail(p);
}
static bool write_transfer(void *context, const struct stusb_write *transfer) {
  struct motor_i2c *p = context;
  if (!transfer || !transfer->bytes || !transfer->byte_count || transfer->byte_count == 255)
    return fail(p);
  const uint32_t deadline = transfer->deadline_us;
  if (!begin(p, deadline) ||
      !start(p, (struct command){transfer->byte_count + 1u, deadline, false, true}))
    return fail(p);
  write_reg(p, (struct motor_i2c_write){&p->i2c->TXDR, transfer->register_address});
  for (unsigned i = 0; i < transfer->byte_count; ++i) {
    if (!wait_status(p, (struct wait_for){I2C_ISR_TXIS, deadline, false})) return fail(p);
    write_reg(p, (struct motor_i2c_write){&p->i2c->TXDR, transfer->bytes[i]});
  }
  return complete(p, deadline) ? true : fail(p);
}
static uint32_t bus_time(void *context) {
  struct motor_i2c *p = context;
  return p->now_us(p->context);
}
struct stusb_bus motor_i2c_bus(struct motor_i2c *p) {
  return (struct stusb_bus){.context = p, .read = read_transfer,
    .write = write_transfer, .now_us = bus_time};
}
