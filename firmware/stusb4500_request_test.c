#include "stusb4500_request.h"
#include <assert.h>
#include <stdio.h>
#include <string.h>

static unsigned checks;
#define CHECK(condition) do { ++checks; assert(condition); } while (0)
struct mock_bus {
  uint8_t registers[256];
  uint32_t now_us, transfer_time_us, expected_deadline_us;
  unsigned calls, fail_call, corrupt_call, corrupt_byte, detach_call, commands;
  bool apply_failed_write;
};
struct test_request {
  struct mock_bus mock;
  struct pd_plan plan;
  struct stusb_request_state state;
  struct stusb_request request;
  struct stusb_bus bus;
};

static uint32_t now_us(void *context) {
  return ((struct mock_bus *)context)->now_us;
}
static void transfer_started(struct mock_bus *mock, uint32_t deadline_us) {
  CHECK(deadline_us == mock->expected_deadline_us);
  mock->calls++;
  mock->now_us += mock->transfer_time_us;
  if (mock->calls == mock->detach_call) mock->registers[0x0e] = 0;
}
static bool read_register(void *context, const struct stusb_read *transfer) {
  struct mock_bus *mock = context;
  transfer_started(mock, transfer->deadline_us);
  if (mock->calls == mock->fail_call) return false;
  memcpy(transfer->bytes, &mock->registers[transfer->register_address], transfer->byte_count);
  if (mock->calls == mock->corrupt_call) transfer->bytes[mock->corrupt_byte] ^= 1u;
  /* UM2650 rev3 1.11: reading the alert summary does not acknowledge it.
   * Only its associated read-clear status register clears that event. */
  if (transfer->register_address == 0x16) {
    mock->registers[0x16] = 0;
    mock->registers[0x0b] &= (uint8_t)~2u;
  }
  return true;
}
static bool write_register(void *context, const struct stusb_write *transfer) {
  struct mock_bus *mock = context;
  transfer_started(mock, transfer->deadline_us);
  const bool failed = mock->calls == mock->fail_call;
  if (failed && !mock->apply_failed_write) return false;
  if (transfer->register_address == 0x1a) {
    CHECK(transfer->byte_count == 1 && transfer->bytes[0] == 0x26);
    CHECK(mock->registers[0x70] == 0xa2);
    CHECK(mock->registers[0x51] == 0x0d && mock->registers[0x52] == 0);
    mock->commands++;
  }
  memcpy(&mock->registers[transfer->register_address], transfer->bytes, transfer->byte_count);
  return !failed;
}
static void initialize(struct test_request *test, uint8_t selector) {
  *test = (struct test_request){0};
  test->mock.now_us = 100;
  test->mock.transfer_time_us = 100;
  test->mock.expected_deadline_us = 4100;
  test->mock.registers[0x0e] = 1;
  test->mock.registers[0x70] = 0xa3; /* Reserved upper bits are not count bits. */
  test->mock.registers[0x0b] = 2; /* Old protocol alert. */
  test->mock.registers[0x16] = 4; /* Old RX must be cleared before SEND. */
  memset(&test->mock.registers[0x8d], 0xa5, 4); /* Old PDO3 must stay inactive. */
  const uint32_t source_pdos[] = {(100u<<10)|300u, (300u<<10)|300u, (400u<<10)|300u};
  test->plan = pd_make_plan(selector, source_pdos, 3, 77);
  CHECK(test->plan.valid);
  test->request = (struct stusb_request){
    .state=&test->state, .plan=&test->plan, .request_id=8, .source_generation=77,
    .started_us=100, .selector_bits=selector, .power_path_inhibited=true,
    .bridge_inhibited=true, .feedback_settled=true
  };
  test->bus = (struct stusb_bus){.context=&test->mock, .read=read_register,
                               .write=write_register, .now_us=now_us};
}
static enum stusb_request_result execute(struct test_request *test) {
  return stusb_request_contract(&test->bus, &test->request);
}
static uint32_t pdo_at(const struct mock_bus *mock, uint8_t address) {
  const uint8_t *bytes = &mock->registers[address];
  return (uint32_t)bytes[0] | (uint32_t)bytes[1]<<8 |
         (uint32_t)bytes[2]<<16 | (uint32_t)bytes[3]<<24;
}
static void check_fault(struct test_request *test) {
  CHECK(test->state.faulted && test->state.completed_request_id == 0);
  const unsigned calls = test->mock.calls;
  test->request.request_id++;
  CHECK(execute(test) == STUSB_REQUEST_LATCHED);
  CHECK(test->mock.calls == calls); /* No implicit bus retry, even with a new token. */
}

int main(void) {
  struct test_request test;
  for (uint8_t selector=0; selector<3; ++selector) {
    initialize(&test, selector);
    CHECK(execute(&test) == STUSB_REQUEST_SENT);
    CHECK(test.mock.calls == 14 && test.mock.commands == 1);
    CHECK(test.state.last_request_id == 8 && test.state.completed_request_id == 8);
    CHECK(!test.state.faulted && test.state.command_started_us == 1400);
    CHECK(pdo_at(&test.mock, 0x85) == ((100u<<10)|300u));
    CHECK(pdo_at(&test.mock, 0x89) == test.plan.sink_pdo);
    CHECK(pdo_at(&test.mock, 0x8d) == 0xa5a5a5a5u);
    CHECK(test.mock.registers[0x70] == 0xa2);
    CHECK(test.mock.registers[0x0b] == 0 && test.mock.registers[0x16] == 0);
    CHECK(execute(&test) == STUSB_REQUEST_REUSED_TOKEN);
    CHECK(test.mock.commands == 1); check_fault(&test);
  }
  for (unsigned failed=1; failed<=14; ++failed) {
    initialize(&test, 1); test.mock.fail_call=failed;
    test.state.completed_request_id=3; /* A failure cannot preserve old success. */
    CHECK(execute(&test) == STUSB_REQUEST_IO_ERROR);
    CHECK(test.mock.commands == 0 && test.mock.calls == failed); check_fault(&test);
  }
  /* SEND might reach the controller even though its bus acknowledgement fails. */
  initialize(&test, 2); test.mock.fail_call=14; test.mock.apply_failed_write=true;
  CHECK(execute(&test) == STUSB_REQUEST_IO_ERROR);
  CHECK(test.mock.commands == 1); check_fault(&test);
  const unsigned ambiguous_writes[] = {3,5,7,9};
  for (unsigned i=0; i<4; ++i) {
    initialize(&test, 0); test.mock.fail_call=ambiguous_writes[i];
    test.mock.apply_failed_write=true;
    CHECK(execute(&test) == STUSB_REQUEST_IO_ERROR);
    CHECK(test.mock.commands == 0); check_fault(&test);
  }
  for (unsigned byte=0; byte<8; ++byte) {
    initialize(&test, 0); test.mock.corrupt_call=6; test.mock.corrupt_byte=byte;
    CHECK(execute(&test) == STUSB_REQUEST_READBACK_MISMATCH);
    CHECK(test.mock.commands == 0); check_fault(&test);
  }
  const unsigned corrupted_reads[] = {4,8,10};
  for (unsigned i=0; i<3; ++i) {
    initialize(&test, 0); test.mock.corrupt_call=corrupted_reads[i];
    CHECK(execute(&test) == STUSB_REQUEST_READBACK_MISMATCH);
    CHECK(test.mock.commands == 0); check_fault(&test);
  }
  initialize(&test, 0); test.mock.corrupt_call=10; test.mock.corrupt_byte=1;
  CHECK(execute(&test) == STUSB_REQUEST_READBACK_MISMATCH); check_fault(&test);
  const unsigned detached_at[] = {1,11};
  for (unsigned i=0; i<2; ++i) {
    initialize(&test, 2); test.mock.detach_call=detached_at[i];
    CHECK(execute(&test) == STUSB_REQUEST_DETACHED);
    CHECK(test.mock.commands == 0); check_fault(&test);
  }
  initialize(&test, 0); test.mock.registers[0x0e] = 9; /* Must be a sink. */
  CHECK(execute(&test) == STUSB_REQUEST_DETACHED); check_fault(&test);
  for (unsigned bit=3; bit<8; ++bit) {
    initialize(&test, 1); test.mock.registers[0x0b] |= 1u<<bit;
    CHECK(execute(&test) == STUSB_REQUEST_PENDING_FAULT);
    CHECK(test.mock.registers[0x0b] & (1u<<bit)); /* Summary read cannot clear this event. */
    CHECK(test.mock.commands == 0); check_fault(&test);
  }
  for (unsigned bit=0; bit<8; ++bit) {
    if (!(0x83u & (1u<<bit))) continue;
    initialize(&test, 0); test.mock.registers[0x16] |= 1u<<bit;
    CHECK(execute(&test) == STUSB_REQUEST_PENDING_FAULT); check_fault(&test);
  }
  for (unsigned operation=1; operation<=14; ++operation) {
    initialize(&test, 2); test.mock.transfer_time_us=4000u/operation+1u;
    CHECK(execute(&test) == STUSB_REQUEST_LATE); check_fault(&test);
  }
  initialize(&test, 0); test.mock.now_us=4101;
  CHECK(execute(&test) == STUSB_REQUEST_LATE && test.mock.calls == 0); check_fault(&test);
  initialize(&test, 0); test.mock.now_us=99;
  CHECK(execute(&test) == STUSB_REQUEST_LATE && test.mock.calls == 0); check_fault(&test);
  initialize(&test, 1); test.request.started_us=UINT32_MAX-499u;
  test.mock.now_us=test.request.started_us; test.mock.expected_deadline_us=3500;
  CHECK(execute(&test) == STUSB_REQUEST_SENT); CHECK(test.mock.now_us == 900);

  for (unsigned invalid=0; invalid<9; ++invalid) {
    initialize(&test, 1);
    switch (invalid) {
    case 0:test.request.power_path_inhibited=false;break;
    case 1:test.request.bridge_inhibited=false;break;
    case 2:test.request.feedback_settled=false;break;
    case 3:test.request.source_generation++;break;
    case 4:test.request.selector_bits=2;break;
    case 5:test.request.selector_bits=3;break;
    case 6:test.plan.current_ma=2250;break;
    case 7:test.plan.sink_pdo^=1u;break;
    case 8:test.request.plan=NULL;break;
    }
    CHECK(execute(&test) == STUSB_REQUEST_UNSAFE_PRECONDITION);
    CHECK(test.mock.calls == 0); check_fault(&test);
  }
  for (unsigned missing=0; missing<3; ++missing) {
    initialize(&test, 0);
    if (missing == 0) test.bus.read=NULL;
    if (missing == 1) test.bus.write=NULL;
    if (missing == 2) test.bus.now_us=NULL;
    CHECK(execute(&test) == STUSB_REQUEST_INVALID_ARGUMENT); check_fault(&test);
  }
  initialize(&test, 0); test.request.request_id=0;
  CHECK(execute(&test) == STUSB_REQUEST_REUSED_TOKEN); check_fault(&test);
  initialize(&test, 0); test.state.last_request_id=UINT32_MAX;
  CHECK(execute(&test) == STUSB_REQUEST_REUSED_TOKEN); check_fault(&test);
  CHECK(stusb_request_contract(NULL,NULL) == STUSB_REQUEST_INVALID_ARGUMENT);
  printf("STUSB4500 request host tests passed: %u assertions; live negotiation/target integration pending\n", checks);
}
