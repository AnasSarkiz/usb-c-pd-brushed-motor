/* Standby RAM setup and capability-acquisition command, not power approval. */
#ifndef MOTOR_STUSB4500_STARTUP_H
#define MOTOR_STUSB4500_STARTUP_H
#include "stusb4500_rx.h"

enum stusb_startup_result {
  STUSB_STARTUP_SENT,
  STUSB_STARTUP_INVALID_ARGUMENT,
  STUSB_STARTUP_UNSAFE_PRECONDITION,
  STUSB_STARTUP_REUSED_TOKEN,
  STUSB_STARTUP_LATCHED,
  STUSB_STARTUP_IO_ERROR,
  STUSB_STARTUP_LATE,
  STUSB_STARTUP_DETACHED,
  STUSB_STARTUP_READBACK_MISMATCH,
  STUSB_STARTUP_PENDING_FAULT
};
struct stusb_startup_state {
  uint32_t last_acquisition_id, completed_acquisition_id, command_started_us;
  /* Raw pre-initialization 0x0D..0x16 events, never negotiation evidence.
   * A failed/partial read leaves snapshot_valid false even if bytes changed. */
  uint8_t old_status[10];
  bool snapshot_valid, faulted;
};
struct stusb_startup {
  struct stusb_startup_state *state;
  uint32_t acquisition_id, started_us;
  /* Adapter must actually inhibit both outputs and invalidate all previous
   * attach/capability/request/PS_RDY evidence before clearing startup events. */
  bool power_path_inhibited, bridge_inhibited, provenance_invalidated;
};
/* Called after an attachment under inhibition. Configures one fixed5V/3A
 * RAM standby profile and unmasked documented alerts, then sends SoftReset
 * to acquire new source capabilities. Does not rewrite/verify NVM, force an
 * immediate5V rail, recover a latched state, or permit motor power. */
enum stusb_startup_result stusb_startup_acquire(const struct stusb_bus *bus,
                                              const struct stusb_startup *startup);
#endif
