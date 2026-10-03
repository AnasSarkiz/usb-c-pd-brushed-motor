#include "stusb4500_nvm.h"

#define NVM_MAX_AGE_US 20000u
#define NVM_MAX_POLLS 64u
struct nvm_transaction { const struct stusb_bus *bus; uint32_t started_us; };
struct nvm_byte { uint8_t address, byte; };
struct nvm_sector { uint8_t index, *bytes; };
static bool late(const struct nvm_transaction *transaction) {
  return transaction->bus->now_us(transaction->bus->context) -
         transaction->started_us > NVM_MAX_AGE_US;
}
static enum stusb_nvm_result read_checked(struct stusb_read *transfer,
                                         const struct nvm_transaction *transaction) {
  if (late(transaction)) return STUSB_NVM_LATE;
  transfer->deadline_us = transaction->started_us + NVM_MAX_AGE_US;
  if (!transaction->bus->read(transaction->bus->context, transfer)) return STUSB_NVM_IO_ERROR;
  return late(transaction) ? STUSB_NVM_LATE : STUSB_NVM_VERIFIED;
}
static enum stusb_nvm_result write_checked(struct stusb_write *transfer,
                                          const struct nvm_transaction *transaction) {
  if (late(transaction)) return STUSB_NVM_LATE;
  transfer->deadline_us = transaction->started_us + NVM_MAX_AGE_US;
  if (!transaction->bus->write(transaction->bus->context, transfer)) return STUSB_NVM_IO_ERROR;
  return late(transaction) ? STUSB_NVM_LATE : STUSB_NVM_VERIFIED;
}
static enum stusb_nvm_result write_byte(struct nvm_byte command,
                                       const struct nvm_transaction *transaction) {
  struct stusb_write transfer = {.register_address=command.address, .byte_count=1, .bytes=&command.byte};
  return write_checked(&transfer, transaction);
}
/* Proposed3us minimum reset hold, in addition to I2C wire time. A finite
 * iteration ceiling avoids hanging if the required monotonic timer stops.
 * Exact target timing and manufacturer reset constraints remain to qualify. */
static enum stusb_nvm_result hold_reset(const struct nvm_transaction *transaction) {
  const uint32_t reset_us = transaction->bus->now_us(transaction->bus->context);
  for (unsigned spin=0; spin<256; ++spin) {
    if (late(transaction)) return STUSB_NVM_LATE;
    if (transaction->bus->now_us(transaction->bus->context) - reset_us >= 3u)
      return STUSB_NVM_VERIFIED;
  }
  return STUSB_NVM_TIMER_STALLED;
}
static enum stusb_nvm_result read_sector(const struct nvm_sector *sector,
                                        const struct nvm_transaction *transaction) {
  enum stusb_nvm_result result = write_byte((struct nvm_byte){0x96,0xc0}, transaction);
  if (result != STUSB_NVM_VERIFIED) return result;
  result = write_byte((struct nvm_byte){0x97,0x00}, transaction); /* READ only. */
  if (result != STUSB_NVM_VERIFIED) return result;
  result = write_byte((struct nvm_byte){0x96,(uint8_t)(0xd0u|sector->index)}, transaction);
  if (result != STUSB_NVM_VERIFIED) return result;
  uint8_t status = 0;
  struct stusb_read poll = {.register_address=0x96, .byte_count=1, .bytes=&status};
  bool complete = false;
  for (unsigned attempt=0; attempt<NVM_MAX_POLLS; ++attempt) {
    result = read_checked(&poll, transaction);
    if (result != STUSB_NVM_VERIFIED) return result;
    if (!(status & 0x10u)) { complete = true; break; }
  }
  if (!complete) return STUSB_NVM_BUSY_TIMEOUT;
  if ((status & 0x47u) != (uint8_t)(0x40u|sector->index)) return STUSB_NVM_CONTROLLER_STATE;
  struct stusb_read sector_read = {.register_address=0x53, .byte_count=8, .bytes=sector->bytes};
  result = read_checked(&sector_read, transaction);
  if (result != STUSB_NVM_VERIFIED) return result;
  result = write_byte((struct nvm_byte){0x96,0x00}, transaction);
  return result == STUSB_NVM_VERIFIED ? hold_reset(transaction) : result;
}
enum stusb_nvm_result stusb_nvm_verify(const struct stusb_bus *bus,
                                      const struct stusb_nvm_check *check) {
  if (!check || !check->state) return STUSB_NVM_INVALID_ARGUMENT;
  struct stusb_nvm_state *state = check->state;
  if (state->faulted) return STUSB_NVM_LATCHED;
  state->read_complete = state->image_matches = false;
  for (unsigned i=0; i<STUSB_NVM_BYTES; ++i) state->observed_image.bytes[i] = 0;
  enum stusb_nvm_result result = STUSB_NVM_INVALID_ARGUMENT;
  if (!bus || !bus->read || !bus->write || !bus->now_us || !check->expected_image ||
      check->expected_image == &state->observed_image) goto failed;
  result = STUSB_NVM_UNSAFE_PRECONDITION;
  if (!check->power_path_inhibited || !check->bridge_inhibited ||
      !check->provenance_invalidated) goto failed;
  const struct nvm_transaction transaction = {.bus=bus, .started_us=check->started_us};
  result = write_byte((struct nvm_byte){0x95,0x47}, &transaction);
  if (result != STUSB_NVM_VERIFIED) goto failed;
  result = write_byte((struct nvm_byte){0x96,0x00}, &transaction);
  if (result != STUSB_NVM_VERIFIED) goto failed;
  result = hold_reset(&transaction);
  if (result != STUSB_NVM_VERIFIED) goto failed;
  result = write_byte((struct nvm_byte){0x96,0xc0}, &transaction);
  if (result != STUSB_NVM_VERIFIED) goto failed;
  for (uint8_t sector=0; sector<5; ++sector) {
    const struct nvm_sector sector_read = {.index=sector,
      .bytes=&state->observed_image.bytes[sector*8]};
    result = read_sector(&sector_read, &transaction);
    if (result != STUSB_NVM_VERIFIED) goto failed;
  }
  const uint8_t exit_controls[2] = {0x40,0x00};
  struct stusb_write exit_write = {.register_address=0x96, .byte_count=2, .bytes=exit_controls};
  result = write_checked(&exit_write, &transaction);
  if (result != STUSB_NVM_VERIFIED) goto failed;
  result = write_byte((struct nvm_byte){0x95,0x00}, &transaction);
  if (result != STUSB_NVM_VERIFIED) goto failed;
  state->read_complete = true;
  result = STUSB_NVM_MISMATCH;
  for (unsigned i=0; i<STUSB_NVM_BYTES; ++i)
    if (state->observed_image.bytes[i] != check->expected_image->bytes[i]) goto failed;
  state->image_matches = true;
  return STUSB_NVM_VERIFIED;
failed:
  state->faulted = true;
  state->image_matches = false;
  return result;
}
