#include "stusb4500_startup.h"
#include <assert.h>
#include <stdio.h>
#include <string.h>

static unsigned checks;
#define CHECK(condition) do { ++checks; assert(condition); } while (0)
struct mock_bus {
  uint8_t registers[256], initial_status[10];
  uint32_t now_us, expected_deadline_us;
  unsigned calls, fail_call, late_call, corrupt_call, corrupt_byte;
  unsigned detach_call, event_call, commands;
  uint8_t event_alert, event_protocol;
  bool apply_failed_write, apply_failed_read;
};
struct startup_test {
  struct mock_bus mock;
  struct stusb_startup_state state;
  struct stusb_startup startup;
  struct stusb_bus bus;
};
static uint32_t now_us(void *context) {
  return ((struct mock_bus *)context)->now_us;
}
static void transfer_started(struct mock_bus *mock, uint32_t deadline_us) {
  CHECK(deadline_us == mock->expected_deadline_us);
  ++mock->calls;
  mock->now_us += 100;
  if (mock->calls == mock->late_call) mock->now_us = deadline_us + 1;
  if (mock->calls == mock->detach_call) mock->registers[0x0e] = 0;
  if (mock->calls == mock->event_call) {
    mock->registers[0x0b] |= mock->event_alert;
    mock->registers[0x16] |= mock->event_protocol;
  }
}
static void clear_status(struct mock_bus *mock, uint8_t address) {
  uint8_t summary_bit = 0;
  switch (address) {
  case 0x0d: summary_bit = 0x40; break;
  case 0x0f: summary_bit = 0x20; break;
  case 0x12: summary_bit = 0x10; break;
  case 0x14: mock->registers[address] &= 0xf0u; return;
  case 0x16: summary_bit = 0x02; break;
  default: return;
  }
  mock->registers[address] = 0;
  mock->registers[0x0b] &= (uint8_t)~summary_bit;
}
static bool read_register(void *context, const struct stusb_read *transfer) {
  struct mock_bus *mock = context;
  transfer_started(mock, transfer->deadline_us);
  const bool failed = mock->calls == mock->fail_call;
  if (failed && !mock->apply_failed_read) return false;
  memcpy(transfer->bytes, &mock->registers[transfer->register_address], transfer->byte_count);
  for (unsigned i=0; i<transfer->byte_count; ++i)
    clear_status(mock, transfer->register_address + i);
  if (mock->calls == mock->corrupt_call)
    transfer->bytes[mock->corrupt_byte] ^= transfer->register_address == 0x0c ? 2u : 1u;
  return !failed;
}
static bool write_register(void *context, const struct stusb_write *transfer) {
  struct mock_bus *mock = context;
  transfer_started(mock, transfer->deadline_us);
  const bool failed = mock->calls == mock->fail_call;
  if (failed && !mock->apply_failed_write) return false;
  if (transfer->register_address == 0x1a) {
    CHECK(transfer->byte_count == 1 && transfer->bytes[0] == 0x26);
    CHECK((mock->registers[0x70] & 7u) == 1);
    CHECK(mock->registers[0x85] == 0x2c && mock->registers[0x86] == 0x91);
    CHECK(mock->registers[0x87] == 1 && mock->registers[0x88] == 0);
    CHECK(mock->registers[0x51] == 0x0d && mock->registers[0x52] == 0);
    CHECK((mock->registers[0x0c] & 0x72u) == 0);
    CHECK(mock->registers[0x16] == 0);
    ++mock->commands;
  }
  memcpy(&mock->registers[transfer->register_address], transfer->bytes, transfer->byte_count);
  return !failed;
}
static void initialize(struct startup_test *test) {
  *test = (struct startup_test){0};
  test->mock.now_us = 100;
  test->mock.expected_deadline_us = 4100;
  test->mock.registers[0x0b] = 0x72;
  test->mock.registers[0x0c] = 0xfb;
  test->mock.registers[0x0d] = 1;
  test->mock.registers[0x0e] = 1;
  test->mock.registers[0x0f] = 0x0e;
  test->mock.registers[0x10] = 0x0a;
  test->mock.registers[0x11] = 0x13;
  test->mock.registers[0x12] = 0x10;
  test->mock.registers[0x13] = 0x40;
  test->mock.registers[0x14] = 8;
  test->mock.registers[0x15] = 2;
  test->mock.registers[0x16] = 5; /* Old RX/reset cannot qualify the new request. */
  test->mock.registers[0x70] = 0xa3;
  memset(&test->mock.registers[0x89], 0xa5, 8);
  memcpy(test->mock.initial_status, &test->mock.registers[0x0d], 10);
  test->startup = (struct stusb_startup){.state=&test->state,
    .acquisition_id=8, .started_us=100, .power_path_inhibited=true,
    .bridge_inhibited=true, .provenance_invalidated=true};
  test->bus = (struct stusb_bus){.context=&test->mock, .read=read_register,
    .write=write_register, .now_us=now_us};
}
static enum stusb_startup_result execute(struct startup_test *test) {
  return stusb_startup_acquire(&test->bus, &test->startup);
}
static void check_fault(struct startup_test *test) {
  CHECK(test->state.faulted && test->state.completed_acquisition_id == 0);
  const unsigned calls = test->mock.calls;
  ++test->startup.acquisition_id;
  CHECK(execute(test) == STUSB_STARTUP_LATCHED);
  CHECK(test->mock.calls == calls);
}
static void check_success(struct startup_test *test) {
  CHECK(!test->state.faulted && test->state.completed_acquisition_id == 8);
  CHECK(test->state.last_acquisition_id == 8 && test->state.snapshot_valid);
  CHECK(test->state.command_started_us == test->startup.started_us + 1600);
  CHECK(test->mock.calls == 17 && test->mock.commands == 1);
  CHECK(test->mock.registers[0x70] == 0xa1);
  for (unsigned i=0; i<10; ++i) CHECK(test->state.old_status[i] == test->mock.initial_status[i]);
  for (unsigned i=0; i<8; ++i) CHECK(test->mock.registers[0x89+i] == 0xa5);
}
int main(void) {
  struct startup_test test;
  initialize(&test); CHECK(execute(&test) == STUSB_STARTUP_SENT); check_success(&test);
  CHECK(test.mock.registers[0x0c] == 0x89);
  /* Every possible initial mask: only defined bits change, reserved preserved. */
  for (unsigned mask=0; mask<256; ++mask) {
    initialize(&test); test.mock.registers[0x0c] = mask;
    CHECK(execute(&test) == STUSB_STARTUP_SENT);
    check_success(&test);
    CHECK(test.mock.registers[0x0c] == (mask & 0x8du));
  }
  for (unsigned call=1; call<=17; ++call) {
    for (unsigned apply=0; apply<2; ++apply) {
      initialize(&test); test.mock.fail_call=call;
      test.mock.apply_failed_write=apply; test.mock.apply_failed_read=apply;
      CHECK(execute(&test) == STUSB_STARTUP_IO_ERROR);
      CHECK(test.mock.calls == call && test.state.last_acquisition_id == 8);
      CHECK(test.state.snapshot_valid == (call > 4));
      CHECK(test.mock.commands == (call == 17 && apply ? 1u : 0u));
      check_fault(&test);
    }
    initialize(&test); test.mock.late_call=call;
    CHECK(execute(&test) == STUSB_STARTUP_LATE);
    CHECK(test.mock.calls == call && test.state.snapshot_valid == (call > 4));
    CHECK(test.mock.commands == (call == 17 ? 1u : 0u));
    check_fault(&test);
  }
  const unsigned readback_calls[] = {3, 7, 9, 11, 13};
  for (unsigned i=0; i<5; ++i) {
    const unsigned bytes = readback_calls[i] == 9 ? 4 : readback_calls[i] == 11 ? 2 : 1;
    for (unsigned byte=0; byte<bytes; ++byte) {
      initialize(&test); test.mock.corrupt_call=readback_calls[i]; test.mock.corrupt_byte=byte;
      CHECK(execute(&test) == STUSB_STARTUP_READBACK_MISMATCH);
      CHECK(test.mock.commands == 0); check_fault(&test);
    }
  }
  initialize(&test); test.mock.detach_call=4;
  CHECK(execute(&test) == STUSB_STARTUP_DETACHED); check_fault(&test);
  initialize(&test); test.mock.detach_call=14;
  CHECK(execute(&test) == STUSB_STARTUP_DETACHED); check_fault(&test);
  initialize(&test); test.mock.registers[0x0e] |= 8;
  CHECK(execute(&test) == STUSB_STARTUP_DETACHED); check_fault(&test);
  const uint8_t hardware_faults[] = {0x10, 0x80, 0x90};
  for (unsigned i=0; i<3; ++i) {
    initialize(&test); test.mock.registers[0x13] |= hardware_faults[i];
    CHECK(execute(&test) == STUSB_STARTUP_PENDING_FAULT);
    CHECK(test.state.snapshot_valid && (test.state.old_status[6] & hardware_faults[i]));
    CHECK(test.mock.commands == 0); check_fault(&test);
  }
  /* A transition reasserted after the bulk drain invalidates acquisition. */
  for (unsigned bit=0; bit<8; ++bit) {
    if (bit == 1) continue;
    initialize(&test); test.mock.event_call=15; test.mock.event_alert=1u<<bit;
    CHECK(execute(&test) == STUSB_STARTUP_PENDING_FAULT);
    CHECK(test.mock.commands == 0); check_fault(&test);
  }
  const uint8_t protocol_faults[] = {1, 2, 0x10, 0x80};
  for (unsigned i=0; i<4; ++i) {
    initialize(&test); test.mock.event_call=16; test.mock.event_protocol=protocol_faults[i];
    CHECK(execute(&test) == STUSB_STARTUP_PENDING_FAULT); check_fault(&test);
  }
  initialize(&test); test.mock.event_call=15; test.mock.event_alert=2; test.mock.event_protocol=4;
  CHECK(execute(&test) == STUSB_STARTUP_SENT); check_success(&test);
  /* Drained source data are not captured or promoted by initialization. */
  CHECK(test.mock.registers[0x16] == 0 && test.mock.registers[0x0b] == 0);
  for (unsigned unsafe=0; unsafe<3; ++unsafe) {
    initialize(&test);
    if (unsafe == 0) test.startup.power_path_inhibited=false;
    if (unsafe == 1) test.startup.bridge_inhibited=false;
    if (unsafe == 2) test.startup.provenance_invalidated=false;
    CHECK(execute(&test) == STUSB_STARTUP_UNSAFE_PRECONDITION);
    CHECK(test.mock.calls == 0 && test.state.last_acquisition_id == 0); check_fault(&test);
  }
  const uint32_t invalid_tokens[] = {0, 7, 8};
  for (unsigned i=0; i<3; ++i) {
    initialize(&test); test.state.last_acquisition_id=8;
    test.startup.acquisition_id=invalid_tokens[i];
    CHECK(execute(&test) == STUSB_STARTUP_REUSED_TOKEN);
    CHECK(test.mock.calls == 0); check_fault(&test);
  }
  initialize(&test); test.state.last_acquisition_id=UINT32_MAX;
  CHECK(execute(&test) == STUSB_STARTUP_REUSED_TOKEN); check_fault(&test);
  initialize(&test); test.mock.now_us=4101;
  CHECK(execute(&test) == STUSB_STARTUP_LATE && test.mock.calls == 0); check_fault(&test);
  initialize(&test); test.startup.started_us=101;
  CHECK(execute(&test) == STUSB_STARTUP_LATE && test.mock.calls == 0); check_fault(&test);
  initialize(&test); test.mock.now_us=UINT32_MAX-1000;
  test.startup.started_us=test.mock.now_us;
  test.mock.expected_deadline_us=test.mock.now_us+4000;
  CHECK(execute(&test) == STUSB_STARTUP_SENT); check_success(&test);
  initialize(&test); test.bus.read=NULL;
  CHECK(execute(&test) == STUSB_STARTUP_INVALID_ARGUMENT); check_fault(&test);
  initialize(&test); test.bus.write=NULL;
  CHECK(execute(&test) == STUSB_STARTUP_INVALID_ARGUMENT); check_fault(&test);
  initialize(&test); test.bus.now_us=NULL;
  CHECK(execute(&test) == STUSB_STARTUP_INVALID_ARGUMENT); check_fault(&test);
  initialize(&test); test.startup.state=NULL;
  CHECK(execute(&test) == STUSB_STARTUP_INVALID_ARGUMENT && test.mock.calls == 0);
  CHECK(stusb_startup_acquire(NULL, NULL) == STUSB_STARTUP_INVALID_ARGUMENT);
  printf("STUSB4500 startup host tests passed (%u assertions)\n", checks);
  return 0;
}
