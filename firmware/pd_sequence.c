#include "pd_sequence.h"

/* Proposed timing/ADC windows require prototype verification. These timings
 * govern power/voltage changes only; no direction/reversal timer is introduced. */
#define SAMPLE_MAX_AGE_MS 5u
#define DECAY_TIMEOUT_MS 1000u
#define FEEDBACK_SETTLE_MS 5u
#define CONTRACT_TIMEOUT_MS 2000u
#define RAIL_TIMEOUT_MS 200u
#define RAIL_STABLE_MS 10u
#define BRIDGE_WAKE_MS 2u /* TI tWAKE max 1 ms; review actual scheduling margin. */
#define DECAY_THRESHOLD_MV 1000u

void pd_sequence_abort(struct pd_sequence *sequence) {
  sequence->state = PD_SEQUENCE_FAULT;
  sequence->outputs.host_allow = false;
  sequence->outputs.release_bridge = false;
  sequence->outputs.request_contract = false;
  /* Preserve the existing feedback branch while VM may retain motor energy. */
}

static void enter_state(struct pd_sequence *sequence,
                        const struct pd_sequence_sample *sample) {
  sequence->entered_ms = sample->now_ms;
  sequence->rail_stable = false;
}

bool pd_sequence_begin(struct pd_sequence *sequence,
                       const struct pd_sequence_request *request) {
  if (!sequence || !request ||
      (sequence->state != PD_SEQUENCE_IDLE && sequence->state != PD_SEQUENCE_FAULT) ||
      sequence->outputs.host_allow || sequence->outputs.release_bridge ||
      sequence->outputs.request_id == UINT32_MAX || !pd_plan_valid(&request->plan)) return false;
  sequence->plan = request->plan;
  sequence->outputs.request_id++;
  sequence->outputs.request_contract = false;
  sequence->state = PD_SEQUENCE_DECAY;
  sequence->entered_ms = request->now_ms;
  sequence->last_step_ms = request->now_ms;
  sequence->rail_stable = false;
  return true;
}

void pd_sequence_step(struct pd_sequence *sequence,
                      const struct pd_sequence_sample *sample) {
  if (!sequence || !sample) return;
  if (sequence->state == PD_SEQUENCE_IDLE || sequence->state == PD_SEQUENCE_FAULT)
    return;
  const struct pd_observation *observation = &sample->observation;
  const struct pd_rail_check rail_check = {
    .plan=&sequence->plan, .observation=observation, .selector_bits=sample->selector_bits
  };
  if (!sample->adc_valid || sample->hard_reset || !observation->attached ||
      !observation->communication_ok ||
      observation->source_generation != sequence->plan.source_generation ||
      pd_motor_voltage(sample->selector_bits) != sequence->plan.motor_voltage_v ||
      sample->now_ms - sample->adc_sample_ms > SAMPLE_MAX_AGE_MS ||
      sample->now_ms - sequence->last_step_ms > SAMPLE_MAX_AGE_MS) {
    pd_sequence_abort(sequence);
    return;
  }
  sequence->last_step_ms = sample->now_ms;
  const uint32_t elapsed_ms = sample->now_ms - sequence->entered_ms;
  switch (sequence->state) {
  case PD_SEQUENCE_DECAY:
    if (elapsed_ms >= DECAY_TIMEOUT_MS) {
      pd_sequence_abort(sequence);
    } else if (observation->motor_rail_mv <= DECAY_THRESHOLD_MV) {
      sequence->outputs.drive_9v = sequence->plan.motor_voltage_v == 9;
      sequence->outputs.drive_12v = sequence->plan.motor_voltage_v == 12;
      sequence->state = PD_SEQUENCE_FEEDBACK;
      enter_state(sequence, sample);
    }
    break;
  case PD_SEQUENCE_FEEDBACK:
    if (observation->motor_rail_mv > DECAY_THRESHOLD_MV) {
      pd_sequence_abort(sequence);
    } else if (elapsed_ms >= FEEDBACK_SETTLE_MS) {
      sequence->outputs.request_contract = true;
      sequence->state = PD_SEQUENCE_REQUEST;
      enter_state(sequence, sample);
    }
    break;
  case PD_SEQUENCE_REQUEST:
    if (elapsed_ms >= CONTRACT_TIMEOUT_MS) {
      pd_sequence_abort(sequence);
    } else if (sample->completed_request_id == sequence->outputs.request_id) {
      sequence->outputs.request_contract = false;
      sequence->state = PD_SEQUENCE_CONTRACT;
      enter_state(sequence, sample);
    }
    break;
  case PD_SEQUENCE_CONTRACT:
    if (elapsed_ms >= CONTRACT_TIMEOUT_MS) {
      pd_sequence_abort(sequence);
    } else if (sample->ps_rdy_request_id == sequence->outputs.request_id &&
               pd_contract_qualified(&sequence->plan, observation)) {
      sequence->outputs.host_allow = true;
      sequence->state = PD_SEQUENCE_RAIL;
      enter_state(sequence, sample);
    }
    break;
  case PD_SEQUENCE_RAIL:
  case PD_SEQUENCE_WAKE:
  case PD_SEQUENCE_READY:
    if (sample->ps_rdy_request_id != sequence->outputs.request_id ||
        !pd_contract_qualified(&sequence->plan, observation) ||
        (uint32_t)observation->motor_rail_mv * 100u >
            (uint32_t)sequence->plan.motor_voltage_v * 1000u * 105u) {
      pd_sequence_abort(sequence);
      break;
    }
    if (sequence->state == PD_SEQUENCE_RAIL) {
      if (elapsed_ms >= RAIL_TIMEOUT_MS) {
        pd_sequence_abort(sequence);
      } else if (pd_motor_qualified(&sequence->plan, observation, sample->selector_bits)) {
        if (!sequence->rail_stable) {
          sequence->rail_stable = true;
          sequence->rail_stable_since_ms = sample->now_ms;
        } else if (sample->now_ms - sequence->rail_stable_since_ms >= RAIL_STABLE_MS) {
          sequence->outputs.release_bridge = true;
          sequence->state = PD_SEQUENCE_WAKE;
          enter_state(sequence, sample);
        }
      } else {
        sequence->rail_stable = false;
      }
    } else if (!pd_motor_rail_qualified(&rail_check)) {
      pd_sequence_abort(sequence);
    } else if (sequence->state == PD_SEQUENCE_WAKE && elapsed_ms < BRIDGE_WAKE_MS) {
      /* nFAULT can pulse low at wake (TI Fig28). Hardware UVLO/OCP/TSD
       * remain active; only the bounded software fault decision is delayed. */
    } else if (observation->motor_fault) {
      pd_sequence_abort(sequence);
    } else {
      sequence->state = PD_SEQUENCE_READY;
    }
    break;
  default:
    pd_sequence_abort(sequence);
    break;
  }
}
