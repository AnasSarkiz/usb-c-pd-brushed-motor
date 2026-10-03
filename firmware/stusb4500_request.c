#include "stusb4500_request.h"

/* Proposed bound: keep request programming below the sequencer's 5ms
 * observation-gap ceiling. Actual peripheral/interrupt timing is unmeasured. */
#define REQUEST_MAX_AGE_US 4000u
struct transaction {
  const struct stusb_bus *bus;
  uint32_t started_us;
};

static bool late(const struct transaction *transaction) {
  return transaction->bus->now_us(transaction->bus->context) -
         transaction->started_us > REQUEST_MAX_AGE_US;
}

static enum stusb_request_result read_checked(struct stusb_read *transfer,
                                              const struct transaction *transaction) {
  if (late(transaction)) return STUSB_REQUEST_LATE;
  transfer->deadline_us = transaction->started_us + REQUEST_MAX_AGE_US;
  if (!transaction->bus->read(transaction->bus->context, transfer))
    return STUSB_REQUEST_IO_ERROR;
  return late(transaction) ? STUSB_REQUEST_LATE : STUSB_REQUEST_SENT;
}

static enum stusb_request_result write_checked(struct stusb_write *transfer,
                                               const struct transaction *transaction) {
  if (late(transaction)) return STUSB_REQUEST_LATE;
  transfer->deadline_us = transaction->started_us + REQUEST_MAX_AGE_US;
  if (!transaction->bus->write(transaction->bus->context, transfer))
    return STUSB_REQUEST_IO_ERROR;
  return late(transaction) ? STUSB_REQUEST_LATE : STUSB_REQUEST_SENT;
}

static void little_endian_pdo(uint8_t *bytes, uint32_t pdo) {
  for (unsigned i=0; i<4; ++i) bytes[i] = pdo >> (8*i);
}

enum stusb_request_result stusb_request_contract(const struct stusb_bus *bus,
                                                const struct stusb_request *request) {
  if (!request || !request->state) return STUSB_REQUEST_INVALID_ARGUMENT;
  struct stusb_request_state *state = request->state;
  if (state->faulted) return STUSB_REQUEST_LATCHED;
  state->completed_request_id = 0;
  state->command_started_us = 0;
  enum stusb_request_result result = STUSB_REQUEST_INVALID_ARGUMENT;
  if (!bus || !bus->read || !bus->write || !bus->now_us) goto failed;
  result = STUSB_REQUEST_REUSED_TOKEN;
  if (!request->request_id || request->request_id <= state->last_request_id) goto failed;
  result = STUSB_REQUEST_UNSAFE_PRECONDITION;
  if (!pd_plan_valid(request->plan) ||
      request->source_generation != request->plan->source_generation ||
      pd_motor_voltage(request->selector_bits) != request->plan->motor_voltage_v ||
      !request->power_path_inhibited || !request->bridge_inhibited ||
      !request->feedback_settled) goto failed;
  /* Consume before any I2C operation: an uncertain SEND_COMMAND must never
   * be retried under the same token. All errors latch power qualification off. */
  state->last_request_id = request->request_id;
  const struct transaction transaction = {.bus=bus, .started_us=request->started_us};
  uint8_t status = 0, current_count = 0, checked[8] = {0}, profiles[8] = {0};
  struct stusb_read port_read = {.register_address=0x0e, .byte_count=1, .bytes=&status};
  result = read_checked(&port_read, &transaction);
  if (result != STUSB_REQUEST_SENT) goto failed;
  result = STUSB_REQUEST_DETACHED;
  if (!(status & 1u) || (status & 8u)) goto failed;

  struct stusb_read count_read = {.register_address=0x70, .byte_count=1, .bytes=&current_count};
  result = read_checked(&count_read, &transaction);
  if (result != STUSB_REQUEST_SENT) goto failed;
  /* UM2650 3.60: count bits2:0, reserved read-only upper bits preserved.
   * Keep only standby PDO1 active while rewriting the two RAM profiles. */
  uint8_t desired_count = (current_count & 0xf8u) | 1u;
  struct stusb_write count_write = {.register_address=0x70, .byte_count=1, .bytes=&desired_count};
  result = write_checked(&count_write, &transaction);
  if (result != STUSB_REQUEST_SENT) goto failed;
  result = read_checked(&count_read, &transaction);
  if (result != STUSB_REQUEST_SENT) goto failed;
  result = STUSB_REQUEST_READBACK_MISMATCH;
  if (current_count != desired_count) goto failed;

  little_endian_pdo(profiles, (100u<<10)|300u); /* Mandatory fixed5V PDO1. */
  little_endian_pdo(&profiles[4], request->plan->sink_pdo);
  struct stusb_write profiles_write = {.register_address=0x85, .byte_count=8, .bytes=profiles};
  result = write_checked(&profiles_write, &transaction);
  if (result != STUSB_REQUEST_SENT) goto failed;
  struct stusb_read profiles_read = {.register_address=0x85, .byte_count=8, .bytes=checked};
  result = read_checked(&profiles_read, &transaction);
  if (result != STUSB_REQUEST_SENT) goto failed;
  result = STUSB_REQUEST_READBACK_MISMATCH;
  for (unsigned i=0; i<8; ++i) if (checked[i] != profiles[i]) goto failed;

  desired_count = (current_count & 0xf8u) | 2u;
  result = write_checked(&count_write, &transaction);
  if (result != STUSB_REQUEST_SENT) goto failed;
  result = read_checked(&count_read, &transaction);
  if (result != STUSB_REQUEST_SENT) goto failed;
  result = STUSB_REQUEST_READBACK_MISMATCH;
  if (current_count != desired_count) goto failed;

  const uint8_t soft_reset_header[2] = {0x0d, 0x00};
  struct stusb_write header_write = {.register_address=0x51, .byte_count=2, .bytes=soft_reset_header};
  result = write_checked(&header_write, &transaction);
  if (result != STUSB_REQUEST_SENT) goto failed;
  struct stusb_read header_read = {.register_address=0x51, .byte_count=2, .bytes=checked};
  result = read_checked(&header_read, &transaction);
  if (result != STUSB_REQUEST_SENT) goto failed;
  result = STUSB_REQUEST_READBACK_MISMATCH;
  if (checked[0] != 0x0d || checked[1] != 0x00) goto failed;

  result = read_checked(&port_read, &transaction);
  if (result != STUSB_REQUEST_SENT) goto failed;
  result = STUSB_REQUEST_DETACHED;
  if (!(status & 1u) || (status & 8u)) goto failed;
  struct stusb_read alert_read = {.register_address=0x0b, .byte_count=1, .bytes=&status};
  result = read_checked(&alert_read, &transaction);
  if (result != STUSB_REQUEST_SENT) goto failed;
  result = STUSB_REQUEST_PENDING_FAULT;
  if (status & 0xf8u) goto failed; /* Reset/port/monitor/hardware/type-C event. */
  struct stusb_read protocol_read = {.register_address=0x16, .byte_count=1, .bytes=&status};
  result = read_checked(&protocol_read, &transaction);
  if (result != STUSB_REQUEST_SENT) goto failed;
  result = STUSB_REQUEST_PENDING_FAULT;
  if (status & 0x83u) goto failed; /* Documented reset plus conservative legacy guards. */

  /* Drain stale RX before the command; this timestamp is merely a lower
   * bound for a new handshake, not PS_RDY or a contract identity proof. */
  state->command_started_us = bus->now_us(bus->context);
  const uint8_t send_command = 0x26;
  struct stusb_write command_write = {.register_address=0x1a, .byte_count=1, .bytes=&send_command};
  result = write_checked(&command_write, &transaction);
  if (result != STUSB_REQUEST_SENT) goto failed;
  state->completed_request_id = request->request_id;
  return STUSB_REQUEST_SENT;

failed:
  state->faulted = true;
  state->completed_request_id = 0;
  return result;
}
