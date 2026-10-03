#include "stm32_safe_gpio.h"
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define BIT(pin) (UINT32_C(1) << (pin))
#define CHECK(x) do { ++assertions; if (!(x)) { fprintf(stderr, "line%d: %s\n", __LINE__, #x); exit(1); } } while (0)
static unsigned assertions, writes, drop_write, corrupt_write;
static RCC_TypeDef rcc;
static SYSCFG_TypeDef syscfg;
static GPIO_TypeDef a, b, c;
static struct motor_gpio g;
static uint32_t feedback[6], swd[6];
static const uint32_t feedback_mask[6] = {0xf00, 0x30, 0xf00, 0xf00, 0x30, 0xff0000};
static const uint32_t swd_mask[6] = {0x3c000000, 0x6000, 0x3c000000, 0x3c000000, 0x6000, 0x0ff00000};
static void preserved(void) {
  const uint32_t values[6] = {a.MODER, a.OTYPER, a.OSPEEDR, a.PUPDR, a.ODR, a.AFR[0]};
  const uint32_t swd_values[6] = {a.MODER, a.OTYPER, a.OSPEEDR, a.PUPDR, a.ODR, a.AFR[1]};
  for (unsigned i = 0; i < 6; ++i) {
    CHECK((values[i] & feedback_mask[i]) == feedback[i]);
    CHECK((swd_values[i] & swd_mask[i]) == swd[i]);
  }
}
static void write_bsrr(GPIO_TypeDef *port, uint32_t bits) {
  ++writes;
  CHECK((rcc.IOPENR & 7u) == 7u);
  if (port == &a && (bits & BIT(7))) {
    CHECK((a.OTYPER & BIT(7)) != 0); /* never unresisted push-pull high */
    CHECK((a.MODER & (3u << 12)) == (1u << 12));
    CHECK((a.ODR & BIT(6)) == 0 || drop_write == 1);
  }
  if (port == &a && (bits & (BIT(11) << 16))) {
    CHECK((a.ODR & (BIT(6) | BIT(7))) == BIT(7));
  }
  if (port == &b) CHECK((b.OTYPER & (BIT(8) | BIT(9))) == (BIT(8) | BIT(9)));
  if (writes != drop_write) {
    port->BSRR = bits;
    port->ODR = (port->ODR | (bits & 0xffffu)) & ~(bits >> 16);
  }
  if (writes == corrupt_write) syscfg.CFGR2 |= SYSCFG_CFGR2_PA1_CDEN;
  preserved();
}
static void setup(uint32_t pattern) {
  memset(&rcc, 0, sizeof rcc); memset(&syscfg, 0, sizeof syscfg);
  memset(&a, 0, sizeof a); memset(&b, 0, sizeof b); memset(&c, 0, sizeof c);
  a.MODER = b.MODER = c.MODER = pattern;
  a.OTYPER = b.OTYPER = c.OTYPER = pattern;
  a.PUPDR = b.PUPDR = c.PUPDR = pattern;
  a.OSPEEDR = b.OSPEEDR = c.OSPEEDR = pattern;
  a.ODR = b.ODR = c.ODR = pattern;
  a.AFR[0] = a.AFR[1] = b.AFR[0] = b.AFR[1] = pattern;
  syscfg.CFGR1 = pattern; syscfg.CFGR2 = pattern;
  const uint32_t values[6] = {a.MODER, a.OTYPER, a.OSPEEDR, a.PUPDR, a.ODR, a.AFR[0]};
  const uint32_t swd_values[6] = {a.MODER, a.OTYPER, a.OSPEEDR, a.PUPDR, a.ODR, a.AFR[1]};
  for (unsigned i = 0; i < 6; ++i) {
    feedback[i] = values[i] & feedback_mask[i];
    swd[i] = swd_values[i] & swd_mask[i];
  }
  g = (struct motor_gpio){.rcc=&rcc, .syscfg=&syscfg, .a=&a, .b=&b, .c=&c, .write_bsrr=write_bsrr};
  writes=drop_write=corrupt_write=0;
}
static void inhibited(void) {
  CHECK((a.MODER & 0xf000u) == 0x5000u);
  CHECK((a.OTYPER & 0xc0u) == 0x80u);
  CHECK((a.ODR & 0xc0u) == 0x80u);
  preserved();
}
static void unsafe_inputs(void) {
  struct motor_gpio_inputs in = motor_gpio_read_inputs(&g);
  CHECK(in.selector_bits == 3 && in.pd_alert && in.motor_fault && !in.pd_enabled);
}
int main(void) {
  struct motor_gpio target = motor_gpio_target();
  CHECK(target.a == GPIOA && target.b == GPIOB && target.c == GPIOC);
  CHECK(target.rcc == RCC && target.syscfg == SYSCFG && target.write_bsrr != NULL);
  CHECK(!target.initialized && !target.faulted);
  CHECK(!motor_gpio_initialize(NULL)); CHECK(!motor_gpio_inhibit(NULL));
  for (unsigned kind=0; kind<6; ++kind) {
    setup(0); switch(kind) {
      case 0:g.rcc=NULL;break; case 1:g.syscfg=NULL;break; case 2:g.a=NULL;break;
      case 3:g.b=NULL;break; case 4:g.c=NULL;break; default:g.write_bsrr=NULL;break;
    }
    CHECK(!motor_gpio_initialize(&g)); CHECK(g.faulted && !g.initialized);
    CHECK(writes==0); unsafe_inputs();
  }
  /* Every 16-bit pattern and its inverse cover all per-pin mode/pull/AF/
   * feedback/SWD configurations, not just cold-reset values. */
  for (uint32_t n=0; n<65536; ++n) {
    setup(n | ((~n & 0xffffu) << 16));
    unsafe_inputs();
    CHECK(motor_gpio_initialize(&g)); CHECK(g.initialized && !g.faulted);
    CHECK(writes==4); inhibited();
    CHECK((a.MODER & 0xc3fff0ffu) == 0xc07c500fu);
    CHECK((a.PUPDR & 0xc3fff0ffu) == 0);
    CHECK((b.MODER & 0xfffffu) == 0xaffffu);
    CHECK((b.PUPDR & 0xfffffu) == 0);
    CHECK((c.MODER & 0xf0000000u) == 0x30000000u);
    CHECK((c.PUPDR & 0xf0000000u) == 0);
    CHECK((syscfg.CFGR1 & 0x18u) == 0 && (syscfg.CFGR2 & BIT(16)) == 0);
    CHECK(motor_gpio_initialize(&g)); CHECK(writes==8); inhibited();
  }
  setup(0); CHECK(motor_gpio_initialize(&g));
  for (unsigned v=0; v<32; ++v) {
    a.IDR=((v&3u)<<2) | ((v&4u)?BIT(8):0) | ((v&8u)?BIT(12):0);
    c.IDR=(v&16u)?BIT(15):0;
    struct motor_gpio_inputs in=motor_gpio_read_inputs(&g);
    CHECK(in.selector_bits==(v&3u)); CHECK(in.pd_enabled==!(v&4u));
    CHECK(in.motor_fault==!(v&8u)); CHECK(in.pd_alert==!(v&16u));
  }
  setup(UINT32_MAX); rcc.BDCR=RCC_BDCR_LSEON;
  CHECK(!motor_gpio_initialize(&g)); CHECK(g.faulted && !g.initialized);
  CHECK(writes==2); inhibited();
  rcc.BDCR=0; CHECK(!motor_gpio_initialize(&g)); unsafe_inputs();
  /* Simulate output-latch write failures and an actual configuration mismatch. */
  setup(UINT32_MAX); drop_write=1;
  /* A failed first write must still attempt to inhibit the bridge. The model
   * must not require an impossible prior HOST_ALLOW readback for that case. */
  CHECK(!motor_gpio_initialize(&g)); CHECK(g.faulted && !g.initialized);
  setup(0); drop_write=2;
  CHECK(!motor_gpio_initialize(&g)); CHECK(g.faulted && !g.initialized); unsafe_inputs();
  setup(UINT32_MAX); drop_write=3;
  CHECK(!motor_gpio_initialize(&g)); CHECK(g.faulted && !g.initialized); inhibited();
  setup(0); corrupt_write=4;
  CHECK(!motor_gpio_initialize(&g)); CHECK(g.faulted && !g.initialized); inhibited();
  setup(0); CHECK(motor_gpio_initialize(&g));
  a.ODR |= BIT(6); /* unexpected permission latch corruption */
  unsafe_inputs(); CHECK(g.faulted && !g.initialized); inhibited();
  CHECK(!motor_gpio_initialize(&g)); inhibited();
  printf("STM32 safe GPIO host tests passed: %u assertions\n", assertions);
  return 0;
}
