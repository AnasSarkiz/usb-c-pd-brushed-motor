#ifndef MOTOR_OWNER_H
#define MOTOR_OWNER_H
#include "motor_measurement.h"
#include "stusb4500_nvm.h"
#include "stusb4500_request.h"
#include "stusb4500_startup.h"
enum motor_owner_fault {
  MOTOR_OWNER_OK, MOTOR_OWNER_CONFIGURATION_MISSING, MOTOR_OWNER_NVM,
  MOTOR_OWNER_GPIO, MOTOR_OWNER_ADC, MOTOR_OWNER_TIME, MOTOR_OWNER_TRANSPORT,
  MOTOR_OWNER_PD_EVENT, MOTOR_OWNER_PD_REQUEST, MOTOR_OWNER_MEASUREMENT
};
struct motor_owner_config {
  const struct stusb_nvm_image *nvm_image;
  const struct motor_measurement_profile *measurement_profile;
  uint32_t nvm_qualification_id, receive_path_qualification_id;
};
struct motor_owner {
  struct motor_gpio *gpio;
  struct motor_adc *adc;
  struct stusb_bus bus;
  struct motor_owner_config config;
  /* IRQs remain timestamp-only. This guard rejects an event arriving after
   * the foreground snapshot and before the physical permission commit. */
  void *interrupt_context;
  bool (*pending_interrupt)(void *context);
  uint32_t (*enter_critical)(void *context);
  void (*leave_critical)(void *context, uint32_t previous_mask);
  struct stusb_nvm_state nvm;
  struct stusb_startup_state startup;
  struct stusb_request_state request;
  struct pd_sequence sequence;
  struct motor_adc_sample last_raw_frame;
  struct motor_measurement last_measurement;
  uint32_t source_pdos[PD_MAX_OBJECTS], source_generation, acquisition_id;
  uint32_t ps_rdy_request_id, accept_request_id, accept_us;
  uint32_t last_step_us, uptime_ms, remainder_us;
  uint8_t source_count, selector_bits;
  bool initialized, acquiring, requested_capabilities, requested_accept;
  enum motor_owner_fault fault;
};
struct motor_owner_event {
  bool alert_pending, alert_overrun, brownout, environment_qualified;
  uint32_t alert_us;
};
/* Single foreground owner. IRQs timestamp only and never mutate PD/GPIO state.
 * All forty NVM bytes and both independently qualified measurement/receive
 * paths are mandatory. Missing evidence returns explicit failure and inhibition. */
bool motor_owner_initialize(struct motor_owner *owner);
void motor_owner_step(struct motor_owner *owner, const struct motor_owner_event *event);
void motor_owner_invalidate(struct motor_owner *owner, enum motor_owner_fault fault);
#endif
