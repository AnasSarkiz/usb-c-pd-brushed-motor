#include "stm32_safe_gpio.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define BIT(pin) (UINT32_C(1) << (pin))
#define CHECK(condition) do { ++assertions; if (!(condition)) { fprintf(stderr,"line %d: %s\n",__LINE__,#condition); exit(1); } } while (0)
static unsigned assertions, writes, lost_write;
static RCC_TypeDef rcc;
static SYSCFG_TypeDef syscfg;
static GPIO_TypeDef a,b,c;
static struct motor_gpio gpio;
static void write_bsrr(GPIO_TypeDef *port, uint32_t bits) {
  ++writes;
  if (port==&a && (bits & BIT(7))) CHECK(a.OTYPER & BIT(7));
  if (port==&a && (bits & (BIT(4)|BIT(5)|(BIT(4)<<16)|(BIT(5)<<16))))
    CHECK((a.ODR & (BIT(6)|BIT(7)))==BIT(7));
  if(writes!=lost_write) port->ODR=(port->ODR | (bits & 0xffffu)) & ~(bits>>16);
}
static void setup(void) {
  memset(&rcc,0,sizeof rcc);memset(&syscfg,0,sizeof syscfg);
  memset(&a,0,sizeof a);memset(&b,0,sizeof b);memset(&c,0,sizeof c);
  a.MODER=(2u<<26)|(2u<<28);a.AFR[1]=0x0ff00000;
  gpio=(struct motor_gpio){.rcc=&rcc,.syscfg=&syscfg,.a=&a,.b=&b,.c=&c,.write_bsrr=write_bsrr};
  writes=lost_write=0;CHECK(motor_gpio_initialize(&gpio));
}
static struct motor_gpio_command command(bool nine, bool twelve) {
  return (struct motor_gpio_command){.outputs={.drive_9v=nine,.drive_12v=twelve},
    .motor_rail={.valid=true,.lower_mv=0,.upper_mv=1000},.oldest_sample_us=100,.now_us=5100};
}
static void revoked(void) {
  CHECK(gpio.faulted && !gpio.initialized);
  CHECK((a.ODR & (BIT(6)|BIT(7)))==BIT(7));
}
int main(void) {
  CHECK(!motor_gpio_apply(NULL,NULL));
  for(unsigned mode=0;mode<3;++mode) {
    setup();struct motor_gpio_command request=command(mode==1,mode==2);
    CHECK(motor_gpio_apply(&gpio,&request));CHECK(gpio.feedback_known);
    const uint32_t selection=a.ODR & (BIT(4)|BIT(5));
    request.motor_rail.upper_mv=12600;request.outputs.host_allow=true;
    CHECK(motor_gpio_apply(&gpio,&request));CHECK(gpio.host_allow && !gpio.release_bridge);
    request.outputs.release_bridge=true;
    CHECK(motor_gpio_apply(&gpio,&request));CHECK(gpio.release_bridge);
    a.IDR=BIT(12);c.IDR=BIT(15);
    CHECK(motor_gpio_read_inputs(&gpio).selector_bits==0);CHECK(!gpio.faulted);
    request.outputs=(struct pd_sequence_outputs){.drive_9v=mode==1,.drive_12v=mode==2};
    CHECK(motor_gpio_apply(&gpio,&request));
    CHECK((a.ODR & (BIT(6)|BIT(7)))==BIT(7));CHECK((a.ODR & (BIT(4)|BIT(5)))==selection);
    CHECK((a.MODER & 0x3c000000u)==((2u<<26)|(2u<<28)));
    CHECK(a.AFR[1]==0x0ff00000);
  }
  for(unsigned fault=0;fault<7;++fault) {
    setup();struct motor_gpio_command request=command(false,false);
    CHECK(motor_gpio_apply(&gpio,&request));
    const uint32_t previous=a.ODR & (BIT(4)|BIT(5));
    request.outputs.drive_12v=true;
    switch(fault) {
      case 0:request.motor_rail.valid=false;break;
      case 1:request.motor_rail.upper_mv=1001;break;
      case 2:request.now_us=5101;break;
      case 3:request.motor_rail.lower_mv=1001;break;
      case 4:request.outputs.drive_9v=true;break;
      case 5:request.outputs.host_allow=true;break;
      default:request.outputs.release_bridge=true;break;
    }
    CHECK(!motor_gpio_apply(&gpio,&request));revoked();
    CHECK((a.ODR & (BIT(4)|BIT(5)))==previous);
    CHECK(!motor_gpio_apply(&gpio,&request));
  }
  setup();struct motor_gpio_command request=command(true,false);
  request.oldest_sample_us=UINT32_MAX-99;request.now_us=4900;
  CHECK(motor_gpio_apply(&gpio,&request)); /* exactly 5000 us across wrap */
  request.outputs.host_allow=true;request.now_us=4901;
  CHECK(!motor_gpio_apply(&gpio,&request));revoked();
  setup();request=command(true,false);CHECK(motor_gpio_apply(&gpio,&request));
  a.ODR^=BIT(4);CHECK(motor_gpio_read_inputs(&gpio).selector_bits==3);revoked();
  setup();request=command(false,false);CHECK(motor_gpio_apply(&gpio,&request));
  lost_write=writes+1;request.outputs.host_allow=true;
  CHECK(!motor_gpio_apply(&gpio,&request));revoked();
  setup();request=command(false,false);CHECK(motor_gpio_apply(&gpio,&request));
  lost_write=writes+3;request.outputs.drive_12v=true;
  CHECK(!motor_gpio_apply(&gpio,&request));revoked();
  printf("STM32 sequencing output tests passed: %u assertions\n",assertions);
}
