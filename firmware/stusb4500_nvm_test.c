#include "stusb4500_nvm.h"
#include <assert.h>
#include <stdio.h>
#include <string.h>
static unsigned checks;
#define CHECK(condition) do { ++checks; assert(condition); } while (0)
struct mock_nvm {
  uint8_t registers[256], nvm[40];
  uint32_t now_us, expected_deadline_us;
  unsigned calls, fail_call, late_call, wrong_state_call;
  unsigned busy_reads, busy_remaining, sectors_requested, reset_count;
  bool apply_failed_write, apply_failed_read, stuck_busy, stopped_timer, unlocked;
};
struct nvm_test {
  struct mock_nvm mock;
  struct stusb_nvm_image expected;
  struct stusb_nvm_state state;
  struct stusb_nvm_check check;
  struct stusb_bus bus;
};
static uint32_t now_us(void *context) {
  struct mock_nvm *mock = context;
  const uint32_t stamp = mock->now_us;
  if (!mock->stopped_timer) ++mock->now_us;
  return stamp;
}
static void transfer_started(struct mock_nvm *mock, uint32_t deadline_us) {
  CHECK(deadline_us == mock->expected_deadline_us);
  ++mock->calls;
  mock->now_us += 100;
  if (mock->calls == mock->late_call) mock->now_us=deadline_us+1;
}
static bool read_register(void *context, const struct stusb_read *transfer) {
  struct mock_nvm *mock = context;
  CHECK(mock->unlocked);
  CHECK((transfer->register_address == 0x96 && transfer->byte_count == 1) ||
        (transfer->register_address == 0x53 && transfer->byte_count == 8));
  transfer_started(mock, transfer->deadline_us);
  const bool failed = mock->calls == mock->fail_call;
  if (failed && !mock->apply_failed_read) return false;
  if (transfer->register_address == 0x96 && !mock->stuck_busy) {
    if (mock->busy_remaining) --mock->busy_remaining;
    else {
      mock->registers[0x96] &= (uint8_t)~0x10u;
      const unsigned sector = mock->registers[0x96] & 7u;
      CHECK(sector < 5);
      memcpy(&mock->registers[0x53], &mock->nvm[sector*8], 8);
    }
  }
  if (transfer->register_address == 0x53) CHECK(!(mock->registers[0x96] & 0x10u));
  memcpy(transfer->bytes, &mock->registers[transfer->register_address], transfer->byte_count);
  if (mock->calls == mock->wrong_state_call) transfer->bytes[0] ^= 1u;
  return !failed;
}
static bool write_register(void *context, const struct stusb_write *transfer) {
  struct mock_nvm *mock = context;
  CHECK(transfer->register_address == 0x95 || transfer->register_address == 0x96 ||
        transfer->register_address == 0x97);
  CHECK(transfer->byte_count == 1 ||
        (transfer->register_address == 0x96 && transfer->byte_count == 2));
  if (transfer->register_address == 0x97) CHECK(transfer->bytes[0] == 0); /* No program/erase. */
  if (transfer->byte_count == 2) CHECK(transfer->bytes[0] == 0x40 && transfer->bytes[1] == 0);
  transfer_started(mock, transfer->deadline_us);
  const bool failed = mock->calls == mock->fail_call;
  if (failed && !mock->apply_failed_write) return false;
  if (transfer->register_address == 0x95) {
    CHECK(transfer->bytes[0] == 0x47 || transfer->bytes[0] == 0);
    mock->unlocked = transfer->bytes[0] == 0x47;
  } else {
    CHECK(mock->unlocked);
    if (transfer->register_address == 0x96 && (transfer->bytes[0] & 0x10u)) {
      CHECK(mock->registers[0x97] == 0);
      CHECK((transfer->bytes[0] & 7u) == mock->sectors_requested);
      ++mock->sectors_requested;
      mock->busy_remaining=mock->busy_reads;
    }
    if (transfer->register_address == 0x96 && transfer->bytes[0] == 0)
      ++mock->reset_count;
  }
  memcpy(&mock->registers[transfer->register_address], transfer->bytes, transfer->byte_count);
  return !failed;
}
static void initialize(struct nvm_test *test) {
  *test=(struct nvm_test){0};
  test->mock.now_us=100; test->mock.expected_deadline_us=20100; test->mock.busy_reads=1;
  for (unsigned i=0; i<40; ++i) {
    test->expected.bytes[i]=(uint8_t)(3u*i+9u);
    test->mock.nvm[i]=test->expected.bytes[i];
  }
  test->check=(struct stusb_nvm_check){.state=&test->state, .expected_image=&test->expected,
    .started_us=100, .power_path_inhibited=true, .bridge_inhibited=true,
    .provenance_invalidated=true};
  test->bus=(struct stusb_bus){.context=&test->mock, .read=read_register,
    .write=write_register, .now_us=now_us};
}
static enum stusb_nvm_result execute(struct nvm_test *test) {
  return stusb_nvm_verify(&test->bus, &test->check);
}
static void check_fault(struct nvm_test *test) {
  CHECK(test->state.faulted && !test->state.image_matches);
  const unsigned calls=test->mock.calls;
  CHECK(execute(test) == STUSB_NVM_LATCHED);
  CHECK(test->mock.calls == calls);
}
static void check_success(struct nvm_test *test) {
  CHECK(test->state.read_complete && test->state.image_matches && !test->state.faulted);
  CHECK(!test->mock.unlocked && test->mock.sectors_requested == 5);
  CHECK(test->mock.reset_count == 6 && test->mock.registers[0x96] == 0x40);
  CHECK(test->mock.registers[0x97] == 0 && test->mock.registers[0x95] == 0);
  for (unsigned i=0; i<40; ++i) CHECK(test->state.observed_image.bytes[i] == test->expected.bytes[i]);
}
int main(void) {
  struct nvm_test test;
  initialize(&test); CHECK(execute(&test) == STUSB_NVM_VERIFIED);
  CHECK(test.mock.calls == 40); check_success(&test);
  /* All40 compared bytes are required, including reserved configuration. */
  for (unsigned byte=0; byte<40; ++byte) {
    initialize(&test); test.mock.nvm[byte] ^= 1u;
    CHECK(execute(&test) == STUSB_NVM_MISMATCH);
    CHECK(test.state.read_complete && !test.mock.unlocked);
    CHECK(test.state.observed_image.bytes[byte] == test.mock.nvm[byte]); check_fault(&test);
  }
  for (unsigned call=1; call<=40; ++call) {
    for (unsigned apply=0; apply<2; ++apply) {
      initialize(&test); test.mock.fail_call=call;
      test.mock.apply_failed_read=apply; test.mock.apply_failed_write=apply;
      CHECK(execute(&test) == STUSB_NVM_IO_ERROR);
      CHECK(!test.state.read_complete && test.mock.calls == call); check_fault(&test);
    }
    initialize(&test); test.mock.late_call=call;
    CHECK(execute(&test) == STUSB_NVM_LATE);
    CHECK(!test.state.read_complete && test.mock.calls == call); check_fault(&test);
  }
  for (unsigned sector=0; sector<5; ++sector) {
    initialize(&test); test.mock.wrong_state_call=8u+sector*7u;
    CHECK(execute(&test) == STUSB_NVM_CONTROLLER_STATE);
    CHECK(!test.state.read_complete); check_fault(&test);
  }
  initialize(&test); test.mock.stuck_busy=true;
  CHECK(execute(&test) == STUSB_NVM_BUSY_TIMEOUT);
  CHECK(test.mock.calls == 70 && !test.state.read_complete); check_fault(&test);
  initialize(&test); test.mock.busy_reads=30;
  CHECK(execute(&test) == STUSB_NVM_VERIFIED); check_success(&test);
  initialize(&test); test.mock.busy_reads=40;
  CHECK(execute(&test) == STUSB_NVM_LATE && !test.state.read_complete); check_fault(&test);
  initialize(&test); test.mock.stopped_timer=true;
  CHECK(execute(&test) == STUSB_NVM_TIMER_STALLED);
  CHECK(test.mock.calls == 2); check_fault(&test);
  for (unsigned unsafe=0; unsafe<3; ++unsafe) {
    initialize(&test);
    if (unsafe == 0) test.check.power_path_inhibited=false;
    if (unsafe == 1) test.check.bridge_inhibited=false;
    if (unsafe == 2) test.check.provenance_invalidated=false;
    CHECK(execute(&test) == STUSB_NVM_UNSAFE_PRECONDITION);
    CHECK(test.mock.calls == 0); check_fault(&test);
  }
  initialize(&test); test.check.expected_image=NULL;
  CHECK(execute(&test) == STUSB_NVM_INVALID_ARGUMENT && test.mock.calls == 0); check_fault(&test);
  initialize(&test); test.check.expected_image=&test.state.observed_image;
  CHECK(execute(&test) == STUSB_NVM_INVALID_ARGUMENT && test.mock.calls == 0); check_fault(&test);
  initialize(&test); test.mock.now_us=20101;
  CHECK(execute(&test) == STUSB_NVM_LATE && test.mock.calls == 0); check_fault(&test);
  initialize(&test); test.check.started_us=101;
  CHECK(execute(&test) == STUSB_NVM_LATE && test.mock.calls == 0); check_fault(&test);
  initialize(&test); test.mock.now_us=UINT32_MAX-1000;
  test.check.started_us=test.mock.now_us; test.mock.expected_deadline_us=test.mock.now_us+20000;
  CHECK(execute(&test) == STUSB_NVM_VERIFIED); check_success(&test);
  initialize(&test); test.bus.read=NULL;
  CHECK(execute(&test) == STUSB_NVM_INVALID_ARGUMENT); check_fault(&test);
  initialize(&test); test.bus.write=NULL;
  CHECK(execute(&test) == STUSB_NVM_INVALID_ARGUMENT); check_fault(&test);
  initialize(&test); test.bus.now_us=NULL;
  CHECK(execute(&test) == STUSB_NVM_INVALID_ARGUMENT); check_fault(&test);
  initialize(&test); test.check.state=NULL;
  CHECK(execute(&test) == STUSB_NVM_INVALID_ARGUMENT && test.mock.calls == 0);
  CHECK(stusb_nvm_verify(NULL,NULL) == STUSB_NVM_INVALID_ARGUMENT);
  printf("STUSB4500 NVM host tests passed (%u assertions)\n", checks);
  return 0;
}
