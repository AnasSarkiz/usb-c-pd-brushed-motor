#ifndef MOTOR_STUSB4500_NVM_H
#define MOTOR_STUSB4500_NVM_H
#include "stusb4500_rx.h"
#define STUSB_NVM_BYTES 40
struct stusb_nvm_image { uint8_t bytes[STUSB_NVM_BYTES]; };
enum stusb_nvm_result {
  STUSB_NVM_VERIFIED,
  STUSB_NVM_INVALID_ARGUMENT,
  STUSB_NVM_UNSAFE_PRECONDITION,
  STUSB_NVM_LATCHED,
  STUSB_NVM_IO_ERROR,
  STUSB_NVM_LATE,
  STUSB_NVM_TIMER_STALLED,
  STUSB_NVM_BUSY_TIMEOUT,
  STUSB_NVM_CONTROLLER_STATE,
  STUSB_NVM_MISMATCH
};
struct stusb_nvm_state {
  struct stusb_nvm_image observed_image;
  bool read_complete, image_matches, faulted;
};
struct stusb_nvm_check {
  struct stusb_nvm_state *state;
  /* Exact manufacturer-tool image independently approved for this board and
   * device revision. No default image, incomplete mask or guessed decoder. */
  const struct stusb_nvm_image *expected_image;
  uint32_t started_us;
  bool power_path_inhibited, bridge_inhibited, provenance_invalidated;
};
/* Read operations only: no erase/program/load opcode or buffer write.
 * A failure can leave customer mode unlocked; latch outputs off, then recover
 * explicitly by resetting/reinitializing the controller under inhibition.
 * Verified bytes do not establish their configuration meaning, RAM state,
 * source capabilities, a power contract or physical startup timing. */
enum stusb_nvm_result stusb_nvm_verify(const struct stusb_bus *bus,
                                      const struct stusb_nvm_check *check);
#endif
