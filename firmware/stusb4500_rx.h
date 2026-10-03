/* Bounded STUSB4500 RX capture. No I2C peripheral or PD handshake is implied. */
#ifndef MOTOR_STUSB4500_RX_H
#define MOTOR_STUSB4500_RX_H
#include <stdbool.h>
#include <stdint.h>
#include "pd_policy.h"

struct stusb_read {
  uint8_t register_address, byte_count;
  uint8_t *bytes;
  uint32_t deadline_us;
};
struct stusb_bus {
  void *context;
  /* Return false on NACK, short transfer, arbitration, timeout or bus fault.
   * The target adapter must enforce deadline_us inside the peripheral wait. */
  bool (*read)(void *context, const struct stusb_read *transfer);
  uint32_t (*now_us)(void *context);
};
enum stusb_rx_result {
  STUSB_RX_OK,
  STUSB_RX_NO_MESSAGE,
  STUSB_RX_IO_ERROR,
  STUSB_RX_LATE,
  STUSB_RX_CHANGED,
  STUSB_RX_MALFORMED,
  STUSB_RX_UNSUPPORTED,
  STUSB_RX_RESET_OR_TX_ERROR,
  STUSB_RX_INVALID_ARGUMENT
};
enum stusb_message_kind {
  STUSB_MESSAGE_OTHER,
  STUSB_MESSAGE_SOURCE_CAPABILITIES,
  STUSB_MESSAGE_ACCEPT,
  STUSB_MESSAGE_PS_RDY,
  STUSB_MESSAGE_REJECT,
  STUSB_MESSAGE_WAIT,
  STUSB_MESSAGE_SOFT_RESET
};
struct stusb_message {
  enum stusb_message_kind kind;
  uint16_t header;
  uint8_t message_id, object_count;
  uint32_t source_pdos[PD_MAX_OBJECTS];
  uint32_t alert_us, captured_us;
};
struct stusb_capture {
  uint32_t alert_us;
  struct stusb_message *message;
};
/* Zeroes the output before reading. Only STUSB_RX_OK produces a usable frame.
 * A captured PS_RDY alone does NOT qualify a contract or prove request identity. */
enum stusb_rx_result stusb_capture_message(const struct stusb_bus *bus,
                                          const struct stusb_capture *capture);
#endif
