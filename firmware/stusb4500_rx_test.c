#include "stusb4500_rx.h"
#include <assert.h>
#include <stdio.h>
#include <string.h>

static unsigned checks;
#define CHECK(condition) do { ++checks; assert(condition); } while (0)
struct mock_bus {
  uint8_t bytes[31], protocol_status, protocol_status_after;
  uint32_t now_us, transfer_time_us, expected_deadline_us;
  unsigned calls, fail_call, change_prefix_byte;
  bool change_prefix;
};

static uint32_t now_us(void *context) {
  return ((struct mock_bus *)context)->now_us;
}

static bool read_register(void *context, const struct stusb_read *transfer) {
  struct mock_bus *mock = context;
  mock->calls++;
  CHECK(transfer->deadline_us == mock->expected_deadline_us);
  mock->now_us += mock->transfer_time_us;
  if (mock->calls == mock->fail_call) return false;
  if (mock->calls == 1) {
    CHECK(transfer->register_address == 0x16 && transfer->byte_count == 1);
    transfer->bytes[0] = mock->protocol_status;
  } else if (mock->calls == 2) {
    CHECK(transfer->register_address == 0x30 && transfer->byte_count == 31);
    memcpy(transfer->bytes, mock->bytes, transfer->byte_count);
    if (mock->change_prefix) mock->bytes[mock->change_prefix_byte] ^= 1u;
  } else if (mock->calls == 3) {
    CHECK(transfer->register_address == 0x30 && transfer->byte_count == 3);
    memcpy(transfer->bytes, mock->bytes, transfer->byte_count);
  } else {
    CHECK(mock->calls == 4);
    CHECK(transfer->register_address == 0x16 && transfer->byte_count == 1);
    transfer->bytes[0] = mock->protocol_status_after;
  }
  return true;
}

static void set_header(struct mock_bus *mock, uint16_t header) {
  mock->bytes[0] = ((header >> 12) & 7u) * 4u;
  mock->bytes[1] = header & 255u;
  mock->bytes[2] = header >> 8;
}

static struct mock_bus source_capabilities(void) {
  struct mock_bus mock = {.protocol_status=4, .now_us=100, .transfer_time_us=200,
                          .expected_deadline_us=2600};
  set_header(&mock, (7u<<12) | (5u<<9) | 0x100u | (1u<<6) | 1u);
  const uint32_t pdos[] = {(100u<<10)|300u, (180u<<10)|300u,
                          (240u<<10)|300u, (300u<<10)|300u,
                          (400u<<10)|300u, 0xc1234567u, 0x81234567u};
  for (unsigned i=0; i<7; ++i)
    for (unsigned byte=0; byte<4; ++byte)
      mock.bytes[3+i*4+byte] = pdos[i] >> (8*byte);
  return mock;
}

static enum stusb_rx_result capture(struct mock_bus *mock, struct stusb_message *message) {
  const struct stusb_bus bus = {.context=mock, .read=read_register, .now_us=now_us};
  const struct stusb_capture request = {
    .alert_us=mock->expected_deadline_us-2500u, .message=message
  };
  return stusb_capture_message(&bus, &request);
}

static void check_zero_message(const struct stusb_message *message) {
  CHECK(message->header == 0 && message->object_count == 0 && message->captured_us == 0);
  for (unsigned i=0; i<7; ++i) CHECK(message->source_pdos[i] == 0);
}

int main(void) {
  struct mock_bus mock = source_capabilities();
  struct stusb_message message = {0};
  CHECK(capture(&mock, &message) == STUSB_RX_OK);
  CHECK(mock.calls == 4 && message.object_count == 7 && message.message_id == 5);
  CHECK(message.kind == STUSB_MESSAGE_SOURCE_CAPABILITIES);
  CHECK(message.alert_us == 100 && message.captured_us == 900);
  CHECK(message.source_pdos[0] == ((100u<<10)|300u));
  CHECK(message.source_pdos[5] == 0xc1234567u && message.source_pdos[6] == 0x81234567u);
  for (uint8_t selector=0; selector<3; ++selector) {
    const struct pd_plan plan = pd_make_plan(selector, &(struct pd_capabilities){.source_pdos=message.source_pdos, .count=message.object_count, .source_generation=77});
    CHECK(plan.valid && plan.source_generation == 77);
    CHECK(plan.source_object_position == (selector == 2 ? 5 : 4));
    CHECK(plan.voltage_mv == (selector == 2 ? 20000 : 15000));
  }
  /* A control header must never decode stale source-object bytes as PDOs. */
  const uint8_t controls[] = {3,4,6,12,13,1};
  const enum stusb_message_kind kinds[] = {STUSB_MESSAGE_ACCEPT, STUSB_MESSAGE_REJECT,
    STUSB_MESSAGE_PS_RDY, STUSB_MESSAGE_WAIT, STUSB_MESSAGE_SOFT_RESET, STUSB_MESSAGE_OTHER};
  for (unsigned i=0; i<sizeof controls; ++i) {
    mock = source_capabilities();
    set_header(&mock, 0x100u | (2u<<6) | controls[i]);
    mock.bytes[0] = 28; /* Control count may retain the prior data count. */
    CHECK(capture(&mock, &message) == STUSB_RX_OK);
    CHECK(message.kind == kinds[i] && message.object_count == 0);
    for (unsigned j=0; j<7; ++j) CHECK(message.source_pdos[j] == 0);
  }
  for (unsigned failed=1; failed<=4; ++failed) {
    mock = source_capabilities(); mock.fail_call=failed;
    CHECK(capture(&mock, &message) == STUSB_RX_IO_ERROR);
    check_zero_message(&message);
  }
  for (unsigned byte=0; byte<3; ++byte) {
    mock = source_capabilities(); mock.change_prefix=true; mock.change_prefix_byte=byte;
    CHECK(capture(&mock, &message) == STUSB_RX_CHANGED);
    check_zero_message(&message);
  }
  mock = source_capabilities(); mock.protocol_status_after = 4;
  CHECK(capture(&mock, &message) == STUSB_RX_CHANGED); check_zero_message(&message);
  for (unsigned bit=0; bit<8; ++bit) {
    if (!(0x83u & (1u<<bit))) continue;
    mock = source_capabilities(); mock.protocol_status_after = 1u<<bit;
    CHECK(capture(&mock, &message) == STUSB_RX_RESET_OR_TX_ERROR); check_zero_message(&message);
  }
  mock = source_capabilities(); mock.bytes[0]--;
  CHECK(capture(&mock, &message) == STUSB_RX_MALFORMED); check_zero_message(&message);
  mock = source_capabilities(); mock.bytes[2] |= 0x80u;
  CHECK(capture(&mock, &message) == STUSB_RX_UNSUPPORTED); check_zero_message(&message);
  mock = source_capabilities(); mock.bytes[1] &= ~0xc0u;
  CHECK(capture(&mock, &message) == STUSB_RX_UNSUPPORTED); check_zero_message(&message);
  mock = source_capabilities(); mock.bytes[1] |= 0xc0u;
  CHECK(capture(&mock, &message) == STUSB_RX_UNSUPPORTED); check_zero_message(&message);
  mock = source_capabilities(); mock.bytes[2] &= ~1u;
  CHECK(capture(&mock, &message) == STUSB_RX_MALFORMED); check_zero_message(&message);
  mock = source_capabilities(); mock.protocol_status=0;
  CHECK(capture(&mock, &message) == STUSB_RX_NO_MESSAGE); check_zero_message(&message);
  for (unsigned bit=0; bit<8; ++bit) {
    if (!(0x83u & (1u<<bit))) continue;
    mock = source_capabilities(); mock.protocol_status |= 1u<<bit;
    CHECK(capture(&mock, &message) == STUSB_RX_RESET_OR_TX_ERROR); check_zero_message(&message);
  }
  mock = source_capabilities(); mock.now_us=2601;
  CHECK(capture(&mock, &message) == STUSB_RX_LATE && mock.calls == 0);
  check_zero_message(&message);
  mock = source_capabilities(); mock.now_us=99; /* Future ALERT timestamp. */
  CHECK(capture(&mock, &message) == STUSB_RX_LATE); check_zero_message(&message);
  for (unsigned transfer=1; transfer<=4; ++transfer) {
    mock = source_capabilities(); mock.transfer_time_us=2501u/transfer+1u;
    CHECK(capture(&mock, &message) == STUSB_RX_LATE); check_zero_message(&message);
  }
  mock = source_capabilities(); mock.expected_deadline_us=2000;
  mock.now_us=UINT32_MAX-499u; /* Correct unsigned timer wrap. */
  CHECK(capture(&mock, &message) == STUSB_RX_OK);
  CHECK(message.captured_us == 300);
  struct stusb_capture request = {.message=&message};
  CHECK(stusb_capture_message(NULL, &request) == STUSB_RX_INVALID_ARGUMENT);
  check_zero_message(&message);
  CHECK(stusb_capture_message(NULL, NULL) == STUSB_RX_INVALID_ARGUMENT);
  printf("STUSB4500 RX host tests passed: %u assertions; target peripheral/handshake/hardware pending\n", checks);
}
