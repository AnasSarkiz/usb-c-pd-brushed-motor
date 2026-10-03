#include "stusb4500_startup.h"

/* Proposed deadline; actual STM32 scheduling/I2C timing must be measured. */
#define STARTUP_MAX_AGE_US 4000u
#define DOCUMENTED_ALERT_MASK 0x72u
struct startup_transaction {
  const struct stusb_bus *bus;
  uint32_t started_us;
};
static bool late(const struct startup_transaction *transaction) {
  return transaction->bus->now_us(transaction->bus->context) -
         transaction->started_us > STARTUP_MAX_AGE_US;
}
static enum stusb_startup_result read_checked(struct stusb_read *transfer,
                                             const struct startup_transaction *transaction) {
  if (late(transaction)) return STUSB_STARTUP_LATE;
  transfer->deadline_us = transaction->started_us + STARTUP_MAX_AGE_US;
  if (!transaction->bus->read(transaction->bus->context, transfer))
    return STUSB_STARTUP_IO_ERROR;
  return late(transaction) ? STUSB_STARTUP_LATE : STUSB_STARTUP_SENT;
}
static enum stusb_startup_result write_checked(struct stusb_write *transfer,
                                              const struct startup_transaction *transaction) {
  if (late(transaction)) return STUSB_STARTUP_LATE;
  transfer->deadline_us = transaction->started_us + STARTUP_MAX_AGE_US;
  if (!transaction->bus->write(transaction->bus->context, transfer))
    return STUSB_STARTUP_IO_ERROR;
  return late(transaction) ? STUSB_STARTUP_LATE : STUSB_STARTUP_SENT;
}
enum stusb_startup_result stusb_startup_acquire(const struct stusb_bus *bus,
                                              const struct stusb_startup *startup) {
  if (!startup || !startup->state) return STUSB_STARTUP_INVALID_ARGUMENT;
  struct stusb_startup_state *state = startup->state;
  if (state->faulted) return STUSB_STARTUP_LATCHED;
  state->completed_acquisition_id = 0;
  state->command_started_us = 0;
  state->snapshot_valid = false;
  for (unsigned i=0; i<sizeof state->old_status; ++i) state->old_status[i] = 0;
  enum stusb_startup_result result = STUSB_STARTUP_INVALID_ARGUMENT;
  if (!bus || !bus->read || !bus->write || !bus->now_us) goto failed;
  result = STUSB_STARTUP_REUSED_TOKEN;
  if (!startup->acquisition_id || startup->acquisition_id <= state->last_acquisition_id)
    goto failed;
  result = STUSB_STARTUP_UNSAFE_PRECONDITION;
  if (!startup->power_path_inhibited || !startup->bridge_inhibited ||
      !startup->provenance_invalidated) goto failed;
  state->last_acquisition_id = startup->acquisition_id;
  const struct startup_transaction transaction = {.bus=bus, .started_us=startup->started_us};
  uint8_t mask = 0, checked[4] = {0}, status = 0, count = 0;
  struct stusb_read mask_read = {.register_address=0x0c, .byte_count=1, .bytes=&mask};
  result = read_checked(&mask_read, &transaction);
  if (result != STUSB_STARTUP_SENT) goto failed;
  /* Only documented interrupt controls change; reserved bits are preserved. */
  uint8_t desired_mask = mask | DOCUMENTED_ALERT_MASK;
  struct stusb_write mask_write = {.register_address=0x0c, .byte_count=1, .bytes=&desired_mask};
  result = write_checked(&mask_write, &transaction);
  if (result != STUSB_STARTUP_SENT) goto failed;
  result = read_checked(&mask_read, &transaction);
  if (result != STUSB_STARTUP_SENT) goto failed;
  result = STUSB_STARTUP_READBACK_MISMATCH;
  if ((mask & DOCUMENTED_ALERT_MASK) != DOCUMENTED_ALERT_MASK) goto failed;

  /* UM2650 rev3 1.2: one10-byte read clears startup events. Preserve the
   * returned bytes for diagnostics. Never turn these stale events into
   * Source_Capabilities/Accept/PS_RDY or current source-generation evidence. */
  struct stusb_read old_read = {.register_address=0x0d, .byte_count=10, .bytes=state->old_status};
  result = read_checked(&old_read, &transaction);
  if (result != STUSB_STARTUP_SENT) goto failed;
  state->snapshot_valid = true;
  result = STUSB_STARTUP_PENDING_FAULT;
  if (state->old_status[6] & 0x90u) goto failed; /* 0x13 CC OVP/discharge fault. */
  result = STUSB_STARTUP_DETACHED;
  if (!(state->old_status[1] & 1u) || (state->old_status[1] & 8u)) goto failed;

  struct stusb_read count_read = {.register_address=0x70, .byte_count=1, .bytes=&count};
  result = read_checked(&count_read, &transaction);
  if (result != STUSB_STARTUP_SENT) goto failed;
  const uint8_t standby_count = (count & 0xf8u) | 1u;
  struct stusb_write count_write = {.register_address=0x70, .byte_count=1, .bytes=&standby_count};
  result = write_checked(&count_write, &transaction);
  if (result != STUSB_STARTUP_SENT) goto failed;
  result = read_checked(&count_read, &transaction);
  if (result != STUSB_STARTUP_SENT) goto failed;
  result = STUSB_STARTUP_READBACK_MISMATCH;
  if (count != standby_count) goto failed;

  const uint32_t standby_pdo = (100u<<10) | 300u;
  uint8_t standby_bytes[4];
  for (unsigned i=0; i<4; ++i) standby_bytes[i] = standby_pdo >> (8*i);
  struct stusb_write pdo_write = {.register_address=0x85, .byte_count=4, .bytes=standby_bytes};
  result = write_checked(&pdo_write, &transaction);
  if (result != STUSB_STARTUP_SENT) goto failed;
  struct stusb_read pdo_read = {.register_address=0x85, .byte_count=4, .bytes=checked};
  result = read_checked(&pdo_read, &transaction);
  if (result != STUSB_STARTUP_SENT) goto failed;
  result = STUSB_STARTUP_READBACK_MISMATCH;
  for (unsigned i=0; i<4; ++i) if (checked[i] != standby_bytes[i]) goto failed;

  const uint8_t header[2] = {0x0d, 0};
  struct stusb_write header_write = {.register_address=0x51, .byte_count=2, .bytes=header};
  result = write_checked(&header_write, &transaction);
  if (result != STUSB_STARTUP_SENT) goto failed;
  struct stusb_read header_read = {.register_address=0x51, .byte_count=2, .bytes=checked};
  result = read_checked(&header_read, &transaction);
  if (result != STUSB_STARTUP_SENT) goto failed;
  result = STUSB_STARTUP_READBACK_MISMATCH;
  if (checked[0] != header[0] || checked[1] != header[1]) goto failed;

  desired_mask = mask & (uint8_t)~DOCUMENTED_ALERT_MASK;
  result = write_checked(&mask_write, &transaction);
  if (result != STUSB_STARTUP_SENT) goto failed;
  result = read_checked(&mask_read, &transaction);
  if (result != STUSB_STARTUP_SENT) goto failed;
  result = STUSB_STARTUP_READBACK_MISMATCH;
  if (mask & DOCUMENTED_ALERT_MASK) goto failed;

  struct stusb_read port_read = {.register_address=0x0e, .byte_count=1, .bytes=&status};
  result = read_checked(&port_read, &transaction);
  if (result != STUSB_STARTUP_SENT) goto failed;
  result = STUSB_STARTUP_DETACHED;
  if (!(status & 1u) || (status & 8u)) goto failed;
  struct stusb_read alert_read = {.register_address=0x0b, .byte_count=1, .bytes=&status};
  result = read_checked(&alert_read, &transaction);
  if (result != STUSB_STARTUP_SENT) goto failed;
  result = STUSB_STARTUP_PENDING_FAULT;
  if (status & 0xfdu) goto failed; /* Only an old RX indication may be drained. */
  struct stusb_read protocol_read = {.register_address=0x16, .byte_count=1, .bytes=&status};
  result = read_checked(&protocol_read, &transaction);
  if (result != STUSB_STARTUP_SENT) goto failed;
  result = STUSB_STARTUP_PENDING_FAULT;
  if (status & 0x93u) goto failed; /* Reset/BIST plus conservative legacy guards. */

  state->command_started_us = bus->now_us(bus->context);
  const uint8_t command = 0x26;
  struct stusb_write command_write = {.register_address=0x1a, .byte_count=1, .bytes=&command};
  result = write_checked(&command_write, &transaction);
  if (result != STUSB_STARTUP_SENT) goto failed;
  state->completed_acquisition_id = startup->acquisition_id;
  return STUSB_STARTUP_SENT;
failed:
  state->faulted = true;
  state->completed_acquisition_id = 0;
  return result;
}
