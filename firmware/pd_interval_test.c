#include "pd_sequence.h"
#include <assert.h>
#include <stdio.h>
static unsigned checks;
#define CHECK(c) do { ++checks; assert(c); } while (0)
static struct pd_voltage_interval range(uint32_t lower, uint32_t upper) {
  return (struct pd_voltage_interval){.lower_mv=lower,.upper_mv=upper,.valid=true};
}
static struct pd_plan plan(uint8_t bits) {
  const uint32_t caps[]={(100u<<10)|300u,(300u<<10)|300u,(400u<<10)|300u};
  const struct pd_capabilities c={.source_pdos=caps,.count=3,.source_generation=1};
  return pd_make_plan(bits,&c);
}
static struct pd_observation observation(const struct pd_plan *p) {
  return (struct pd_observation){.attached=true,.communication_ok=true,.fresh_ps_rdy=true,
    .pe_fsm_state=0x18,.source_generation=1,
    .rdo=((uint32_t)p->source_object_position<<28)|(300u<<10)|300u,
    .vbus=range(p->voltage_mv,p->voltage_mv),
    .motor_rail=range(p->motor_voltage_v*1000u,p->motor_voltage_v*1000u)};
}
static void check_boundaries(void) {
  CHECK(!pd_voltage_interval_valid(NULL));
  CHECK(!pd_voltage_interval_valid(&(struct pd_voltage_interval){0}));
  for (uint8_t bits=0;bits<3;++bits) {
    struct pd_plan p=plan(bits);
    struct pd_observation o=observation(&p);
    const struct pd_rail_check check={.plan=&p,.observation=&o,.selector_bits=bits};
    uint32_t lo=p.motor_voltage_v*950u,hi=p.motor_voltage_v*1050u;
    /* Exhaust every endpoint from0 through65535 mV. This covers reversed
     * intervals, exact boundaries, saturation-like ranges and midpoint traps. */
    for (uint32_t mv=0;mv<65536;++mv) {
      o.motor_rail=range(mv,hi);
      CHECK(pd_motor_qualified(&check) == (mv>=lo && mv<=hi));
      o.motor_rail=range(lo,mv);
      CHECK(pd_motor_qualified(&check) == (mv>=lo && mv<=hi));
    }
    o.motor_rail=range(lo,hi); CHECK(pd_motor_qualified(&check));
    o.motor_rail=range(lo-1,hi+1); CHECK(!pd_motor_qualified(&check));
    o.motor_rail=range(lo,hi); o.motor_rail.valid=false; CHECK(!pd_motor_qualified(&check));
    o.motor_rail=range(lo,hi); o.vbus.valid=false; CHECK(!pd_motor_qualified(&check));
    o.vbus=range(p.voltage_mv*95u/100u,p.voltage_mv*105u/100u);
    CHECK(pd_motor_qualified(&check));
    o.vbus.lower_mv--; CHECK(!pd_contract_qualified(&p,&o));
    o.vbus.lower_mv++; o.vbus.upper_mv++; CHECK(!pd_contract_qualified(&p,&o));
    o.vbus=range(UINT32_MAX-1,UINT32_MAX); CHECK(!pd_contract_qualified(&p,&o));
    o.vbus=range(0,UINT32_MAX); CHECK(!pd_contract_qualified(&p,&o));
    o=observation(&p); o.motor_rail=range(UINT32_MAX-1,UINT32_MAX); CHECK(!pd_motor_qualified(&check));
  }
  struct pd_plan p=plan(0); struct pd_observation o=observation(&p);
  const struct pd_rail_check check={.plan=&p,.observation=&o,.selector_bits=0};
  /* Independent A19 static-screen examples, not a measurement port or
   * fabricated calibration/physical evidence. Both scenarios are conditional. */
  o.motor_rail=range(4804,5197); CHECK(pd_motor_qualified(&check));
  o.motor_rail=range(4769,5236); CHECK(pd_motor_qualified(&check));
  o.motor_rail=range(4743,5264); CHECK(!pd_motor_qualified(&check));
}
static struct pd_sequence_sample sample(const struct pd_plan *p) {
  return (struct pd_sequence_sample){.observation=observation(p),.now_ms=100,.adc_sample_ms=100,
    .completed_request_id=1,.ps_rdy_request_id=1,.selector_bits=0,.adc_valid=true};
}
static struct pd_sequence sequence(enum pd_sequence_state state) {
  return (struct pd_sequence){.state=state,.plan=plan(0),.entered_ms=100,.last_step_ms=100,
    .outputs={.request_id=1,.drive_9v=true,.host_allow=state>=PD_SEQUENCE_RAIL,
      .release_bridge=state>=PD_SEQUENCE_WAKE,.request_contract=state==PD_SEQUENCE_REQUEST}};
}
static void check_sequence_ranges(void) {
  for (enum pd_sequence_state state=PD_SEQUENCE_DECAY;state<=PD_SEQUENCE_READY;++state) {
    for (unsigned fault=0;fault<4;++fault) {
      struct pd_sequence s=sequence(state); struct pd_sequence_sample input=sample(&s.plan);
      switch(fault) {
        case 0: input.observation.vbus.valid=false; break;
        case 1: input.observation.motor_rail.valid=false; break;
        case 2: input.observation.vbus=range(20000,19000); break;
        default: input.observation.motor_rail=range(1001,1000); break;
      }
      pd_sequence_step(&s,&input);
      CHECK(s.state==PD_SEQUENCE_FAULT);
      CHECK(!s.outputs.host_allow && !s.outputs.release_bridge && !s.outputs.request_contract);
      CHECK(s.outputs.drive_9v); /* Preserve existing feedback even on invalid measurement. */
    }
  }
  for (enum pd_sequence_state state=PD_SEQUENCE_DECAY;state<=PD_SEQUENCE_CONTRACT;++state) {
    struct pd_sequence s=sequence(state); struct pd_sequence_sample input=sample(&s.plan);
    input.observation.motor_rail=range(0,1001); /* Midpoint<1V, upper bound still unsafe. */
    pd_sequence_step(&s,&input);
    CHECK(s.state==(state==PD_SEQUENCE_DECAY ? PD_SEQUENCE_DECAY : PD_SEQUENCE_FAULT));
    CHECK(!s.outputs.host_allow && !s.outputs.release_bridge);
    CHECK(s.outputs.drive_9v);
  }
  struct pd_sequence s=sequence(PD_SEQUENCE_DECAY); struct pd_sequence_sample input=sample(&s.plan);
  input.observation.motor_rail=range(0,1000); pd_sequence_step(&s,&input);
  CHECK(s.state==PD_SEQUENCE_FEEDBACK && !s.outputs.drive_9v && !s.outputs.drive_12v);
  /* A valid interval spanning more than the final +/-5% window does not
   * build stability at RAIL, and immediately revokes an already-awake bridge. */
  for (enum pd_sequence_state state=PD_SEQUENCE_RAIL;state<=PD_SEQUENCE_READY;++state) {
    s=sequence(state); input=sample(&s.plan);
    input.observation.motor_rail=range(4749,5250);
    s.rail_stable=true;
    pd_sequence_step(&s,&input);
    CHECK(state==PD_SEQUENCE_RAIL ? !s.rail_stable : s.state==PD_SEQUENCE_FAULT);
    if(state!=PD_SEQUENCE_RAIL) CHECK(!s.outputs.host_allow && !s.outputs.release_bridge);
    s=sequence(state); input=sample(&s.plan);
    input.observation.motor_rail=range(4750,5251);
    pd_sequence_step(&s,&input);
    CHECK(s.state==PD_SEQUENCE_FAULT && !s.outputs.host_allow && !s.outputs.release_bridge);
  }
}
int main(void) {
  check_boundaries(); check_sequence_ranges();
  printf("PD interval host tests passed: %u assertions; no calibrated measurement adapter implied\n",checks);
  return 0;
}
