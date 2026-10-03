/* Host-tested power sequencing, not an STM32 peripheral/transport port. */
#ifndef MOTOR_PD_SEQUENCE_H
#define MOTOR_PD_SEQUENCE_H
#include "pd_policy.h"

enum pd_sequence_state {
  PD_SEQUENCE_IDLE,
  PD_SEQUENCE_DECAY,
  PD_SEQUENCE_FEEDBACK,
  PD_SEQUENCE_REQUEST,
  PD_SEQUENCE_CONTRACT,
  PD_SEQUENCE_RAIL,
  PD_SEQUENCE_WAKE,
  PD_SEQUENCE_READY,
  PD_SEQUENCE_FAULT
};

struct pd_sequence_outputs {
  bool host_allow, release_bridge, drive_9v, drive_12v, request_contract;
  uint32_t request_id;
};

struct pd_sequence {
  enum pd_sequence_state state;
  struct pd_plan plan;
  struct pd_sequence_outputs outputs;
  uint32_t entered_ms, last_step_ms, rail_stable_since_ms;
  bool rail_stable;
};

struct pd_sequence_request {
  struct pd_plan plan;
  uint32_t now_ms;
};

struct pd_sequence_sample {
  struct pd_observation observation;
  uint32_t now_ms, adc_sample_ms, completed_request_id, ps_rdy_request_id;
  uint8_t selector_bits;
  bool adc_valid, hard_reset;
};

/* Begin from an all-zero structure. Abort before changing an active plan.
 * The embedded adapter must apply inhibition before power-off/branch changes. */
bool pd_sequence_begin(struct pd_sequence *sequence,
                       const struct pd_sequence_request *request);
void pd_sequence_step(struct pd_sequence *sequence,
                      const struct pd_sequence_sample *sample);
void pd_sequence_abort(struct pd_sequence *sequence);
#endif
