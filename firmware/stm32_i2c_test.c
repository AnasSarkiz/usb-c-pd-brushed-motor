#include "stm32_i2c.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
static unsigned assertions;
#define CHECK(x) do { ++assertions; if (!(x)) { fprintf(stderr,"%s:%d:%s\n",__FILE__,__LINE__,#x); exit(1); } } while(0)
struct model {
  RCC_TypeDef rcc; SYSCFG_TypeDef syscfg; GPIO_TypeDef a,b,c;
  I2C_TypeDef i2c; struct motor_gpio gpio; struct motor_i2c port;
  uint32_t now, event_at, event, polls;
  unsigned writes, drop, nack, rx_reads;
  uint8_t memory[256], address, remaining;
  bool read, automatic, address_byte, stalled, early_stop, busy_stuck;
};
static void bsrr(GPIO_TypeDef *port, uint32_t bits) {
  port->ODR = (port->ODR & ~(bits >> 16)) | (bits & 65535u);
}
static void schedule(struct model *m, uint32_t event) {
  m->event_at = m->now + 30; m->event = event;
}
static uint32_t now_us(void *context) {
  struct model *m = context; ++m->polls;
  if (!m->stalled) ++m->now;
  if (m->event && (uint32_t)(m->now - m->event_at) < UINT32_C(0x80000000)) {
    m->i2c.ISR |= m->event;
    if (m->event & I2C_ISR_STOPF) m->i2c.ISR &= ~I2C_ISR_BUSY;
    m->event = 0;
  }
  return m->now;
}
static void write_mmio(void *context, const struct motor_i2c_write *op) {
  struct model *m = context; ++m->writes;
  if (m->writes == m->drop) return;
  if (op->reg == &m->i2c.ICR) {
    m->i2c.ISR &= ~op->contents; return;
  }
  if (op->reg == &m->i2c.CR2 && op->contents & I2C_CR2_START) {
    CHECK((op->contents & I2C_CR2_SADD) == 0x50u);
    m->i2c.CR2 = op->contents & ~I2C_CR2_START;
    m->remaining = (uint8_t)(op->contents >> I2C_CR2_NBYTES_Pos);
    CHECK(m->remaining > 0);
    m->read = (op->contents & I2C_CR2_RD_WRN) != 0;
    m->automatic = (op->contents & I2C_CR2_AUTOEND) != 0;
    m->address_byte = !m->read;
    m->i2c.ISR = I2C_ISR_BUSY;
    schedule(m, m->read ? I2C_ISR_RXNE : I2C_ISR_TXIS);
  } else if (op->reg == &m->i2c.TXDR) {
    CHECK(!m->read && m->remaining && m->i2c.ISR & I2C_ISR_TXIS);
    m->i2c.ISR &= ~I2C_ISR_TXIS;
    if (m->address_byte) { m->address = (uint8_t)op->contents; m->address_byte = false; }
    else m->memory[m->address++] = (uint8_t)op->contents;
    --m->remaining;
    schedule(m, m->remaining ? I2C_ISR_TXIS :
      m->automatic ? I2C_ISR_STOPF : I2C_ISR_TC);
  } else *op->reg = op->contents;
  if (m->writes == m->nack) m->i2c.ISR |= I2C_ISR_NACKF;
}
static uint8_t read_byte(void *context) {
  struct model *m = context;
  CHECK(m->read && m->remaining && m->i2c.ISR & I2C_ISR_RXNE);
  ++m->rx_reads;
  uint8_t byte = m->memory[m->address++]; --m->remaining;
  m->i2c.ISR &= ~I2C_ISR_RXNE;
  if (m->early_stop && m->remaining) { m->i2c.ISR = I2C_ISR_STOPF; m->event = 0; }
  else schedule(m, m->remaining ? I2C_ISR_RXNE : I2C_ISR_STOPF);
  return byte;
}
static void setup(struct model *m) {
  memset(m, 0, sizeof *m);
  m->rcc.CR = RCC_CR_HSION | RCC_CR_HSIRDY;
  m->gpio = (struct motor_gpio){.rcc=&m->rcc,.syscfg=&m->syscfg,.a=&m->a,
    .b=&m->b,.c=&m->c,.write_bsrr=bsrr};
  CHECK(motor_gpio_initialize(&m->gpio));
  m->port = (struct motor_i2c){.gpio=&m->gpio,.i2c=&m->i2c,.context=m,
    .now_us=now_us,.write=write_mmio,.read_byte=read_byte};
  for(unsigned n=0;n<256;++n) m->memory[n]=(uint8_t)(n^0xa5u);
}
static void off(struct model *m) {
  CHECK(m->port.faulted && !m->port.initialized && !m->port.busy);
  CHECK((m->a.ODR & 0xc0u) == 0x80u);
  CHECK(!m->i2c.CR1);
  CHECK(!motor_i2c_initialize(&m->port));
}
int main(void) {
  struct model m; uint8_t buffer[40];
  for (unsigned count=1; count<=40; ++count) {
    setup(&m); CHECK(motor_i2c_initialize(&m.port));
    struct stusb_bus bus = motor_i2c_bus(&m.port);
    m.now = UINT32_MAX - 100;
    struct stusb_read r = {.register_address=0x30,.byte_count=count,.bytes=buffer,
      .deadline_us=m.now+2500};
    CHECK(bus.read(bus.context,&r)); CHECK(m.rx_reads==count);
    for(unsigned i=0;i<count;++i) CHECK(buffer[i]==((0x30u+i)^0xa5u));
    struct stusb_write w = {.register_address=0x60,.byte_count=count,.bytes=buffer,
      .deadline_us=m.now+4000};
    CHECK(bus.write(bus.context,&w));
    for(unsigned i=0;i<count;++i) CHECK(m.memory[0x60u+i]==buffer[i]);
  }
  for(unsigned dropped=1;dropped<=5;++dropped) {
    setup(&m); m.drop=dropped;
    if (!motor_i2c_initialize(&m.port)) off(&m);
    else { /* Dropping an already-zero CR/ICR is observably harmless. */
      CHECK(m.i2c.CR1==I2C_CR1_PE && m.i2c.TIMINGR==MOTOR_I2C_TIMING);
    }
  }
  for(unsigned injection=6;injection<=8;++injection) {
    setup(&m); CHECK(motor_i2c_initialize(&m.port)); m.nack=injection;
    struct stusb_bus bus=motor_i2c_bus(&m.port);
    memset(buffer,0xee,sizeof buffer);
    struct stusb_read r={.register_address=0x30,.byte_count=31,.bytes=buffer,.deadline_us=2500};
    CHECK(!bus.read(bus.context,&r)); off(&m);
    for(unsigned i=0;i<31;++i) CHECK(buffer[i]==0);
  }
  for(unsigned fault=0;fault<8;++fault) {
    setup(&m); CHECK(motor_i2c_initialize(&m.port));
    if(fault==0) m.stalled=true;
    if(fault==1) m.early_stop=true;
    if(fault==2) m.i2c.ISR=I2C_ISR_BUSY;
    if(fault==3) m.i2c.ISR=I2C_ISR_ARLO;
    if(fault==4) m.i2c.TIMINGR=0;
    if(fault==5) m.port.busy=true;
    if(fault==6) m.drop=m.writes+1;
    struct stusb_bus bus=motor_i2c_bus(&m.port);
    struct stusb_read r={.register_address=0x30,.byte_count=31,.bytes=buffer,
      .deadline_us=fault==7 ? UINT32_MAX : 2500};
    CHECK(!bus.read(bus.context,&r)); off(&m); CHECK(m.polls<=55000);
    for(unsigned i=0;i<31;++i) CHECK(buffer[i]==0);
  }
  puts("STM32 bounded I2C host tests passed"); printf("%u assertions\n",assertions);
}
