#include "pd_policy.h"
#include <assert.h>
#include <stdio.h>
static uint32_t fixed(unsigned mv, unsigned ma) {
  return ((mv / 50u) << 10) | (ma / 10u);
}
int main(void) {
  uint32_t caps[] = {fixed(5000,3000),fixed(15000,3000),fixed(20000,3000)};
  struct pd_plan p = pd_make_plan(0,caps,3,1);
  assert(p.valid && p.voltage_mv==15000 && p.source_object_position==2);
  assert(pd_make_plan(1,caps,3,1).voltage_mv==15000);
  p=pd_make_plan(2,caps,3,1);
  assert(p.valid && p.voltage_mv==20000 && p.source_object_position==3);
  assert(!pd_make_plan(3,caps,3,1).valid);
  assert(!pd_make_plan(0,caps,1,1).valid);
  caps[2]=fixed(20000,2250);
  assert(!pd_make_plan(2,caps,3,1).valid);
  caps[2]=fixed(20000,3000);
  struct pd_observation o = {.attached=true,.communication_ok=true,
    .fresh_ps_rdy=true,.pe_fsm_state=0x18,.source_generation=1,
    .rdo=(3u<<28)|(300u<<10)|300u,.vbus_mv=20000,.motor_rail_mv=12000};
  assert(pd_motor_qualified(&p,&o,2));
  o.fresh_ps_rdy=false;assert(!pd_motor_qualified(&p,&o,2));o.fresh_ps_rdy=true;
  o.source_generation=2;assert(!pd_motor_qualified(&p,&o,2));o.source_generation=1;
  o.rdo |= 1u<<26;assert(!pd_motor_qualified(&p,&o,2));o.rdo &= ~(1u<<26);
  o.rdo=(2u<<28)|(300u<<10)|300u;assert(!pd_motor_qualified(&p,&o,2));
  o.rdo=(3u<<28)|(225u<<10)|225u;assert(!pd_motor_qualified(&p,&o,2));
  o.rdo=(3u<<28)|(300u<<10)|300u;
  o.attached=false;assert(!pd_motor_qualified(&p,&o,2));o.attached=true;
  o.communication_ok=false;assert(!pd_motor_qualified(&p,&o,2));o.communication_ok=true;
  o.motor_rail_mv=9000;assert(!pd_motor_qualified(&p,&o,2));o.motor_rail_mv=12000;
  assert(!pd_motor_qualified(&p,&o,1));
  o.vbus_mv=5000;assert(!pd_motor_qualified(&p,&o,2));o.vbus_mv=20000;
  o.motor_fault=true;assert(!pd_motor_qualified(&p,&o,2));
  puts("PD policy host tests passed; embedded transport and physical tests remain pending");
  return 0;
}
