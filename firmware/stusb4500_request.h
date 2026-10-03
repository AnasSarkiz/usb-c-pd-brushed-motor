/* RAM-PDO transaction only: success is not a negotiated power contract. */
#ifndef MOTOR_STUSB4500_REQUEST_H
#define MOTOR_STUSB4500_REQUEST_H
#include "stusb4500_rx.h"

enum stusb_request_result {
  STUSB_REQUEST_SENT,
  STUSB_REQUEST_INVALID_ARGUMENT,
  STUSB_REQUEST_UNSAFE_PRECONDITION,
  STUSB_REQUEST_REUSED_TOKEN,
  STUSB_REQUEST_LATCHED,
  STUSB_REQUEST_IO_ERROR,
  STUSB_REQUEST_LATE,
  STUSB_REQUEST_DETACHED,
  STUSB_REQUEST_READBACK_MISMATCH,
  STUSB_REQUEST_PENDING_FAULT
};
struct stusb_request_state {
  uint32_t last_request_id, completed_request_id, command_started_us;
  bool faulted;
};
struct stusb_request {
  struct stusb_request_state *state;
  const struct pd_plan *plan;
  uint32_t request_id, source_generation, started_us;
  uint8_t selector_bits;
  /* Supplied by the target adapter after actual safe GPIO ordering.
   * These flags are not electrical measurements or proof of inhibition. */
  bool power_path_inhibited, bridge_inhibited, feedback_settled;
};
/* Start with zero state. A failed/ambiguous transaction latches this state;
 * a recovery must explicitly reset PD provenance with motor power inhibited.
 * Success only means RAM readback and SEND_COMMAND acknowledgement. Fresh
 * Source_Capabilities/Accept/PS_RDY plus RDO/PE/ADC checks remain required. */
enum stusb_request_result stusb_request_contract(const struct stusb_bus *bus,
                                                const struct stusb_request *request);
#endif
