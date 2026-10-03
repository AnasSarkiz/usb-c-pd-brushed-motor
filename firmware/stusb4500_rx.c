#include "stusb4500_rx.h"

/* ST's reference warns of about 3ms before Accept overwrites RX_DATA_OBJ.
 * 2.5ms is a proposed conservative software deadline, not a measured guarantee. */
#define CAPTURE_MAX_AGE_US 2500u
#define PRT_STATUS_REG 0x16u
#define RX_BYTE_COUNT_REG 0x30u
#define PRT_RECEIVED_MASK 0x04u
/* Bits 1/7 are named in ST's reference header but reserved in UM2650.
 * Conservatively reject them; do not treat their semantics as qualified. */
#define PRT_RESET_TX_ERROR_MASK 0x83u

static uint16_t little_endian_header(const uint8_t *bytes) {
  return (uint16_t)((uint16_t)bytes[0] | (uint16_t)bytes[1] << 8);
}

static uint32_t little_endian_pdo(const uint8_t *bytes) {
  return (uint32_t)bytes[0] | (uint32_t)bytes[1] << 8 |
         (uint32_t)bytes[2] << 16 | (uint32_t)bytes[3] << 24;
}

static enum stusb_message_kind message_kind(uint16_t header) {
  const uint8_t type = header & 31u;
  const uint8_t count = (header >> 12) & 7u;
  if (count) return type == 1 ? STUSB_MESSAGE_SOURCE_CAPABILITIES : STUSB_MESSAGE_OTHER;
  switch (type) {
  case 3: return STUSB_MESSAGE_ACCEPT;
  case 4: return STUSB_MESSAGE_REJECT;
  case 6: return STUSB_MESSAGE_PS_RDY;
  case 12: return STUSB_MESSAGE_WAIT;
  case 13: return STUSB_MESSAGE_SOFT_RESET;
  default: return STUSB_MESSAGE_OTHER;
  }
}

enum stusb_rx_result stusb_capture_message(const struct stusb_bus *bus,
                                          const struct stusb_capture *capture) {
  if (!capture || !capture->message) return STUSB_RX_INVALID_ARGUMENT;
  *capture->message = (struct stusb_message){0};
  if (!bus || !bus->read || !bus->now_us) return STUSB_RX_INVALID_ARGUMENT;
  if (bus->now_us(bus->context) - capture->alert_us > CAPTURE_MAX_AGE_US)
    return STUSB_RX_LATE;
  const uint32_t deadline_us = capture->alert_us + CAPTURE_MAX_AGE_US;
  uint8_t protocol_status = 0;
  const struct stusb_read protocol_read = {
    .register_address=PRT_STATUS_REG, .byte_count=1,
    .bytes=&protocol_status, .deadline_us=deadline_us
  };
  if (!bus->read(bus->context, &protocol_read)) return STUSB_RX_IO_ERROR;
  if (bus->now_us(bus->context) - capture->alert_us > CAPTURE_MAX_AGE_US)
    return STUSB_RX_LATE;
  if (protocol_status & PRT_RESET_TX_ERROR_MASK) return STUSB_RX_RESET_OR_TX_ERROR;
  if (!(protocol_status & PRT_RECEIVED_MASK)) return STUSB_RX_NO_MESSAGE;

  /* One contiguous burst: byte count, 16-bit header, and all seven objects.
   * 0x30..0x4e avoids the incorrect OBJ5/6 aliases in ST's older header. */
  uint8_t received_bytes[3 + 4 * PD_MAX_OBJECTS] = {0};
  const struct stusb_read frame_read = {
    .register_address=RX_BYTE_COUNT_REG, .byte_count=sizeof received_bytes,
    .bytes=received_bytes, .deadline_us=deadline_us
  };
  if (!bus->read(bus->context, &frame_read)) return STUSB_RX_IO_ERROR;
  if (bus->now_us(bus->context) - capture->alert_us > CAPTURE_MAX_AGE_US)
    return STUSB_RX_LATE;
  uint8_t checked_prefix[3] = {0};
  const struct stusb_read prefix_read = {
    .register_address=RX_BYTE_COUNT_REG, .byte_count=sizeof checked_prefix,
    .bytes=checked_prefix, .deadline_us=deadline_us
  };
  if (!bus->read(bus->context, &prefix_read)) return STUSB_RX_IO_ERROR;
  const uint32_t captured_us = bus->now_us(bus->context);
  if (captured_us - capture->alert_us > CAPTURE_MAX_AGE_US) return STUSB_RX_LATE;
  for (unsigned i=0; i<sizeof checked_prefix; ++i)
    if (checked_prefix[i] != received_bytes[i]) return STUSB_RX_CHANGED;

  /* PRT_STATUS is read-to-clear (UM2650 rev2, 3.17). A new receive
   * indication since the first read invalidates even an identical header.
   * This guards same-header payload replacement; hardware timing still
   * requires validation. Do not infer atomic RX-buffer reads from it. */
  if (!bus->read(bus->context, &protocol_read)) return STUSB_RX_IO_ERROR;
  const uint32_t validated_us = bus->now_us(bus->context);
  if (validated_us - capture->alert_us > CAPTURE_MAX_AGE_US) return STUSB_RX_LATE;
  if (protocol_status & PRT_RESET_TX_ERROR_MASK) return STUSB_RX_RESET_OR_TX_ERROR;
  if (protocol_status & PRT_RECEIVED_MASK) return STUSB_RX_CHANGED;

  const uint16_t header = little_endian_header(&received_bytes[1]);
  const uint8_t object_count = (header >> 12) & 7u;
  const uint8_t revision = (header >> 6) & 3u;
  /* ST's reference checks RX_BYTE_CNT only for data messages. Its reset
   * behavior for a zero-object control frame is not documented in UM2650;
   * stale count/object bytes must never become control-message payload. */
  if (object_count && received_bytes[0] != object_count * 4u)
    return STUSB_RX_MALFORMED;
  /* Accept source-role non-extended PD2/PD3 headers only. This does not
   * establish SOP routing: UM2650 reserves PHY_STATUS at 0x17. Packet
   * routing, ALERT clearing and attach/reset provenance remain adapter work. */
  if ((header & 0x8000u) || (revision != 1 && revision != 2))
    return STUSB_RX_UNSUPPORTED;
  if (!(header & 0x0100u)) return STUSB_RX_MALFORMED;
  struct stusb_message message = {
    .kind=message_kind(header), .header=header,
    .message_id=(header >> 9) & 7u, .object_count=object_count,
    .alert_us=capture->alert_us, .captured_us=validated_us
  };
  if (message.kind == STUSB_MESSAGE_SOURCE_CAPABILITIES)
    for (unsigned i=0; i<object_count; ++i)
      message.source_pdos[i] = little_endian_pdo(&received_bytes[3 + i*4]);
  *capture->message = message;
  return STUSB_RX_OK;
}
