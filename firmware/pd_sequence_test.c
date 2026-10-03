#include "pd_sequence.h"
#include <assert.h>
#include <stdio.h>

static unsigned checks;
#define CHECK(condition) do { ++checks; assert(condition); } while (0)

static void tick(struct pd_sequence *sequence, struct pd_sequence_sample *sample) {
  sample->adc_sample_ms = sample->now_ms;
  pd_sequence_step(sequence, sample);
  sample->now_ms++;
}

static void make_ready(struct pd_sequence *sequence, struct pd_sequence_sample *sample) {
  const uint32_t source_pdos[] = {(100u << 10) | 300u, (300u << 10) | 300u,
                                 (400u << 10) | 300u};
  const struct pd_sequence_request request = {
    .plan=pd_make_plan(sample->selector_bits, &(struct pd_capabilities){.source_pdos=source_pdos, .count=3, .source_generation=1}), .now_ms=0
  };
  *sequence = (struct pd_sequence){0};
  sample->now_ms = 0;
  sample->adc_valid = true;
  sample->observation = (struct pd_observation){
    .attached=true, .communication_ok=true, .fresh_ps_rdy=true,
    .pe_fsm_state=0x18, .source_generation=1,
    .rdo=((uint32_t)request.plan.source_object_position << 28) | (300u << 10) | 300u,
    .vbus_mv=request.plan.voltage_mv, .motor_rail_mv=5000, .motor_fault=true
  };
  CHECK(pd_sequence_begin(sequence, &request));
  for (unsigned i=0; i<5; ++i) tick(sequence, sample);
  CHECK(sequence->state == PD_SEQUENCE_DECAY);
  CHECK(!sequence->outputs.host_allow && !sequence->outputs.release_bridge);
  CHECK(!sequence->outputs.drive_9v && !sequence->outputs.drive_12v);
  sample->observation.motor_rail_mv = 0;
  tick(sequence, sample);
  CHECK(sequence->state == PD_SEQUENCE_FEEDBACK);
  CHECK(sequence->outputs.drive_9v == (sample->selector_bits == 1));
  CHECK(sequence->outputs.drive_12v == (sample->selector_bits == 2));
  for (unsigned i=0; i<6; ++i) tick(sequence, sample);
  CHECK(sequence->state == PD_SEQUENCE_REQUEST && sequence->outputs.request_contract);
  CHECK(!sequence->outputs.host_allow);
  sample->completed_request_id = sequence->outputs.request_id;
  tick(sequence, sample);
  CHECK(sequence->state == PD_SEQUENCE_CONTRACT);
  /* A PS_RDY from another request must not enable power. */
  sample->ps_rdy_request_id = 0;
  tick(sequence, sample);
  CHECK(!sequence->outputs.host_allow);
  sample->ps_rdy_request_id = sequence->outputs.request_id;
  tick(sequence, sample);
  CHECK(sequence->state == PD_SEQUENCE_RAIL && sequence->outputs.host_allow);
  CHECK(!sequence->outputs.release_bridge); /* UVLO fault must not deadlock power-up. */
  sample->observation.motor_rail_mv = request.plan.motor_voltage_v * 1000u;
  sample->observation.motor_fault = false;
  for (unsigned i=0; i<11; ++i) tick(sequence, sample);
  CHECK(sequence->state == PD_SEQUENCE_WAKE && sequence->outputs.release_bridge);
  sample->observation.motor_fault = true; /* TI Fig28 transient at wake. */
  tick(sequence, sample);
  CHECK(sequence->state == PD_SEQUENCE_WAKE && sequence->outputs.release_bridge);
  sample->observation.motor_fault = false;
  tick(sequence, sample);
  CHECK(sequence->state == PD_SEQUENCE_READY && sequence->outputs.release_bridge);
}

static void check_slow_discharge(uint8_t bits) {
  const uint32_t source_pdos[] = {(100u<<10)|300u, (300u<<10)|300u, (400u<<10)|300u};
  struct pd_sequence sequence = {0};
  const struct pd_sequence_request request = {.plan=pd_make_plan(bits, &(struct pd_capabilities){.source_pdos=source_pdos, .count=3, .source_generation=1})};
  struct pd_sequence_sample sample = {.selector_bits=bits, .adc_valid=true, .observation={
    .attached=true, .communication_ok=true, .source_generation=1, .motor_fault=true
  }};
  CHECK(pd_sequence_begin(&sequence, &request));
  /* 650uF, 1060ohm screen. Euler's 1ms step is only a host load model;
   * qualification uses the independently supplied VM observation, not a timer. */
  double rail_mv = 15000;
  while (sequence.state == PD_SEQUENCE_DECAY && sample.now_ms < 3000) {
    sample.observation.motor_rail_mv = (uint16_t)(rail_mv + 1);
    tick(&sequence, &sample);
    CHECK(!sequence.outputs.host_allow && !sequence.outputs.release_bridge);
    if (sample.observation.motor_rail_mv > 1000)
      CHECK(!sequence.outputs.drive_9v && !sequence.outputs.drive_12v);
    rail_mv *= 1.0 - 1.0 / (1060 * 650e-6 * 1000);
  }
  CHECK(sample.now_ms > 1000 && sample.now_ms < 3000);
  CHECK(sequence.state == PD_SEQUENCE_FEEDBACK);
  CHECK(sequence.outputs.drive_9v == (bits==1));
  CHECK(sequence.outputs.drive_12v == (bits==2));
}

static void check_ready_five_amp_source(uint8_t bits) {
  const uint32_t source_pdos[]={(100u<<10)|300u,(400u<<10)|500u};
  const struct pd_capabilities capabilities={.source_pdos=source_pdos,.count=2,.source_generation=77};
  const struct pd_sequence_request request={.plan=pd_make_plan(bits,&capabilities)};
  struct pd_sequence sequence={0};
  struct pd_sequence_sample sample={.selector_bits=bits,.adc_valid=true,.observation={
    .attached=true,.communication_ok=true,.fresh_ps_rdy=true,.pe_fsm_state=0x18,
    .source_generation=77,.vbus_mv=20000,.rdo=(2u<<28)|(300u<<10)|500u,.motor_fault=true
  }};
  CHECK(pd_sequence_begin(&sequence,&request));
  for (unsigned ms=0;ms<40;++ms) {
    if (sequence.state == PD_SEQUENCE_REQUEST)
      sample.completed_request_id=sequence.outputs.request_id;
    if (sequence.state == PD_SEQUENCE_CONTRACT)
      sample.ps_rdy_request_id=sequence.outputs.request_id;
    if (sequence.outputs.host_allow) {
      sample.observation.motor_rail_mv=request.plan.motor_voltage_v*1000u;
      sample.observation.motor_fault=false;
    }
    tick(&sequence,&sample);
  }
  CHECK(sequence.state == PD_SEQUENCE_READY && sequence.outputs.host_allow && sequence.outputs.release_bridge);
  CHECK(sequence.plan.current_ma == 3000 && (sequence.plan.source_pdo & 1023u) == 500u);
  sample.observation.rdo=(2u<<28)|(300u<<10)|300u; /* Wrong maximum for this advertisement. */
  tick(&sequence,&sample);
  CHECK(sequence.state == PD_SEQUENCE_FAULT && !sequence.outputs.host_allow && !sequence.outputs.release_bridge);
}
int main(void) {
  for (uint8_t bits=0; bits<3; ++bits) {
    check_ready_five_amp_source(bits);
    check_slow_discharge(bits);
    struct pd_sequence sequence = {0};
    struct pd_sequence_sample sample = {.selector_bits=bits};
    make_ready(&sequence, &sample);
    for (unsigned fault=0; fault<12; ++fault) {
      struct pd_sequence failed = sequence;
      struct pd_sequence_sample bad = sample;
      bad.adc_sample_ms = bad.now_ms;
      switch (fault) {
      case 0: bad.observation.attached=false; break;
      case 1: bad.observation.communication_ok=false; break;
      case 2: bad.hard_reset=true; break;
      case 3: bad.observation.source_generation++; break;
      case 4: bad.selector_bits=3; break;
      case 5: bad.adc_valid=false; break;
      case 6: bad.adc_sample_ms=bad.now_ms-6u; break;
      case 7: bad.adc_sample_ms=bad.now_ms+1u; break;
      case 8: bad.now_ms+=6u; bad.adc_sample_ms=bad.now_ms; break;
      case 9: bad.observation.motor_fault=true; break;
      case 10: bad.observation.motor_rail_mv=0; break;
      case 11: bad.observation.rdo=(1u<<28)|(300u<<10)|300u; break;
      }
      pd_sequence_step(&failed, &bad);
      CHECK(failed.state == PD_SEQUENCE_FAULT);
      CHECK(!failed.outputs.host_allow && !failed.outputs.release_bridge);
      CHECK(failed.outputs.drive_9v == sequence.outputs.drive_9v);
      CHECK(failed.outputs.drive_12v == sequence.outputs.drive_12v);
      tick(&failed, &sample);
      CHECK(failed.state == PD_SEQUENCE_FAULT); /* No automatic fault restart. */
    }
    const struct pd_sequence_request request = {.plan=sequence.plan, .now_ms=sample.now_ms};
    CHECK(!pd_sequence_begin(&sequence, &request)); /* Abort before replanning. */
    pd_sequence_abort(&sequence);
    sample.completed_request_id = sequence.outputs.request_id;
    sample.ps_rdy_request_id = sequence.outputs.request_id;
    const uint32_t old_request_id = sequence.outputs.request_id;
    CHECK(pd_sequence_begin(&sequence, &request));
    CHECK(sequence.outputs.request_id == old_request_id+1);
    const bool retained_9v = sequence.outputs.drive_9v;
    const bool retained_12v = sequence.outputs.drive_12v;
    for (unsigned i=0; i<3001; ++i) tick(&sequence, &sample);
    CHECK(sequence.state == PD_SEQUENCE_FAULT); /* Charged rail must decay first. */
    CHECK(sequence.outputs.drive_9v == retained_9v && sequence.outputs.drive_12v == retained_12v);
  }
  /* An apparently valid but unsafe 12 V / 15 V plan cannot bypass power policy. */
  struct pd_sequence sequence = {0};
  struct pd_sequence_request request = {.plan={
    .valid=true, .motor_voltage_v=12, .voltage_mv=15000, .current_ma=3000,
    .source_generation=1, .source_object_position=2, .sink_pdo=(300u<<10)|300u,
    .source_pdo=(300u<<10)|300u
  }};
  CHECK(!pd_sequence_begin(&sequence, &request));
  request.plan.motor_voltage_v=9;
  CHECK(pd_sequence_begin(&sequence, &request));
  struct pd_sequence_sample sample = {.adc_valid=true, .selector_bits=1,
    .observation={.attached=true, .communication_ok=true, .source_generation=1}};
  for (unsigned i=0; i<2010; ++i) tick(&sequence, &sample);
  CHECK(sequence.state == PD_SEQUENCE_FAULT && !sequence.outputs.host_allow);
  sample=(struct pd_sequence_sample){.selector_bits=2};
  make_ready(&sequence, &sample);
  struct pd_sequence starting=sequence;
  starting.state=PD_SEQUENCE_RAIL;
  starting.outputs.release_bridge=false;
  starting.entered_ms=sample.now_ms;
  starting.rail_stable=false;
  sample.observation.motor_rail_mv=0;
  sample.observation.motor_fault=true;
  for (unsigned i=0; i<201; ++i) tick(&starting, &sample);
  CHECK(starting.state==PD_SEQUENCE_FAULT && !starting.outputs.host_allow);
  sample=(struct pd_sequence_sample){.selector_bits=2};
  make_ready(&sequence, &sample);
  starting=sequence;
  starting.state=PD_SEQUENCE_WAKE;
  starting.entered_ms=sample.now_ms-2u;
  sample.observation.motor_fault=true;
  tick(&starting, &sample);
  CHECK(starting.state==PD_SEQUENCE_FAULT && !starting.outputs.release_bridge);
  sample=(struct pd_sequence_sample){.selector_bits=1};
  make_ready(&sequence, &sample);
  sample.observation.motor_rail_mv=9541;
  tick(&sequence, &sample);
  CHECK(sequence.state==PD_SEQUENCE_FAULT && !sequence.outputs.host_allow);
  sequence.outputs.request_id=UINT32_MAX;
  request.plan.motor_voltage_v=9;
  CHECK(!pd_sequence_begin(&sequence, &request)); /* Never reuse request token zero. */
  printf("PD sequence host tests passed: %u assertions; embedded and physical tests pending\n", checks);
  return 0;
}
