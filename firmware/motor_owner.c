#include "motor_owner.h"

void motor_owner_invalidate(struct motor_owner *o, enum motor_owner_fault fault) {
  if (!o) return;
  /* Permission is physically revoked before clearing provenance or changing
   * sequencing state. Feedback remains at its last established setting. */
  (void)motor_gpio_inhibit(o->gpio);
  pd_sequence_abort(&o->sequence);
  o->ps_rdy_request_id = o->accept_request_id = 0;
  o->source_count = 0; o->acquiring = false;
  o->requested_capabilities = o->requested_accept = false;
  if (fault != MOTOR_OWNER_OK) { o->fault = fault; o->initialized = false; }
}
static bool owner_valid(const struct motor_owner *o) {
  return o && o->gpio && o->adc && o->bus.read && o->bus.write && o->bus.now_us &&
    o->pending_interrupt && o->enter_critical && o->leave_critical;
}
bool motor_owner_initialize(struct motor_owner *o) {
  if (!owner_valid(o)) { motor_owner_invalidate(o, MOTOR_OWNER_CONFIGURATION_MISSING); return false; }
  if (o->fault != MOTOR_OWNER_OK || o->initialized || !motor_gpio_inhibit(o->gpio)) {
    motor_owner_invalidate(o, MOTOR_OWNER_GPIO); return false;
  }
  if (!o->config.nvm_image || !o->config.nvm_qualification_id ||
      !o->config.receive_path_qualification_id || !o->config.measurement_profile ||
      !o->config.measurement_profile->approved ||
      !o->config.measurement_profile->qualification_id) {
    motor_owner_invalidate(o, MOTOR_OWNER_CONFIGURATION_MISSING); return false;
  }
  const struct stusb_nvm_check check = {.state=&o->nvm,
    .expected_image=o->config.nvm_image,.started_us=o->bus.now_us(o->bus.context),
    .power_path_inhibited=true,.bridge_inhibited=true,.provenance_invalidated=true};
  if (stusb_nvm_verify(&o->bus,&check) != STUSB_NVM_VERIFIED) {
    motor_owner_invalidate(o,MOTOR_OWNER_NVM); return false;
  }
  o->last_step_us=o->bus.now_us(o->bus.context); o->selector_bits=3;
  o->initialized=true;
  return true;
}
struct read_byte { uint8_t address; uint8_t *byte; uint32_t deadline_us; };
static bool advance_time(struct motor_owner *o, uint32_t now_us) {
  const uint32_t elapsed_us=now_us-o->last_step_us;
  if(elapsed_us>5000u) return false;
  o->last_step_us=now_us;
  o->remainder_us+=elapsed_us;
  o->uptime_ms+=o->remainder_us/1000u; o->remainder_us%=1000u;
  return true;
}
static bool read_checked_byte(struct motor_owner *o, const struct read_byte command) {
  const struct stusb_read read={.register_address=command.address,.byte_count=1,
    .bytes=command.byte,.deadline_us=command.deadline_us};
  return o->bus.read(o->bus.context,&read);
}
static bool acquire(struct motor_owner *o, uint32_t now_us) {
  motor_owner_invalidate(o,MOTOR_OWNER_OK);
  if (o->acquisition_id==UINT32_MAX) return false;
  const struct stusb_startup startup={.state=&o->startup,
    .acquisition_id=++o->acquisition_id,.started_us=now_us,
    .power_path_inhibited=true,.bridge_inhibited=true,.provenance_invalidated=true};
  if (stusb_startup_acquire(&o->bus,&startup)!=STUSB_STARTUP_SENT) return false;
  o->sequence.state=PD_SEQUENCE_IDLE;
  o->acquiring=true;
  return true;
}
static bool source_equal(const struct motor_owner *o, const struct stusb_message *m) {
  if(m->object_count!=o->source_count) return false;
  for(unsigned i=0;i<o->source_count;++i) if(m->source_pdos[i]!=o->source_pdos[i]) return false;
  return true;
}
static bool apply_message(struct motor_owner *o, const struct stusb_message *m) {
  /* The independently qualified receive path must establish SOP, RX atomicity
   * and ALERT ordering. No undocumented PHY_STATUS encoding is read here. */
  if (!o->config.receive_path_qualification_id) return false;
  if (m->kind==STUSB_MESSAGE_SOFT_RESET || m->kind==STUSB_MESSAGE_REJECT ||
      m->kind==STUSB_MESSAGE_WAIT) return false;
  if (o->acquiring) {
    if ((uint32_t)(m->alert_us-o->startup.command_started_us)>=UINT32_C(0x80000000)) return false;
    if(m->kind!=STUSB_MESSAGE_SOURCE_CAPABILITIES) return true; /* SoftReset Accept is not Request Accept. */
    if (!m->object_count || o->source_generation==UINT32_MAX) return false;
    for(unsigned i=0;i<m->object_count;++i) o->source_pdos[i]=m->source_pdos[i];
    o->source_count=m->object_count; ++o->source_generation; o->acquiring=false;
    const struct pd_capabilities capabilities={.source_pdos=o->source_pdos,
      .count=o->source_count,.source_generation=o->source_generation};
    const struct pd_sequence_request request={.plan=pd_make_plan(o->selector_bits,&capabilities),
      .now_ms=o->uptime_ms};
    return pd_sequence_begin(&o->sequence,&request);
  }
  if (o->request.completed_request_id != o->sequence.outputs.request_id ||
      !o->request.completed_request_id ||
      (uint32_t)(m->alert_us-o->request.command_started_us)>=UINT32_C(0x80000000)) {
    /* An unsolicited capability update invalidates the old contract. */
    return m->kind!=STUSB_MESSAGE_SOURCE_CAPABILITIES && m->kind!=STUSB_MESSAGE_PS_RDY;
  }
  if(m->kind==STUSB_MESSAGE_SOURCE_CAPABILITIES) {
    if(!source_equal(o,m) || o->requested_capabilities || o->requested_accept) return false;
    o->requested_capabilities=true;
  } else if(m->kind==STUSB_MESSAGE_ACCEPT) {
    if(!o->requested_capabilities) return true; /* Accept of the host SoftReset. */
    if(o->requested_accept) return false;
    o->requested_accept=true; o->accept_request_id=o->request.completed_request_id;
    o->accept_us=m->captured_us;
  } else if(m->kind==STUSB_MESSAGE_PS_RDY) {
    if(!o->requested_capabilities || !o->requested_accept ||
        o->accept_request_id!=o->sequence.outputs.request_id ||
        (uint32_t)(m->alert_us-o->accept_us)>=UINT32_C(0x80000000) ||
        o->ps_rdy_request_id) return false;
    o->ps_rdy_request_id=o->accept_request_id;
  }
  return true;
}
void motor_owner_step(struct motor_owner *o, const struct motor_owner_event *event) {
  if (!owner_valid(o) || !event) { motor_owner_invalidate(o,MOTOR_OWNER_CONFIGURATION_MISSING); return; }
  if (!o->initialized || o->fault!=MOTOR_OWNER_OK) {
    (void)motor_gpio_inhibit(o->gpio);
    /* A failed qualification remains inhibited. Bring-up raw diagnostics do
     * not become valid physical intervals or permit feedback changes. */
    if (o->adc->initialized && !o->adc->faulted) o->last_raw_frame=motor_adc_capture(o->adc);
    return;
  }
  uint32_t now=o->bus.now_us(o->bus.context);
  if(!advance_time(o,now)) { motor_owner_invalidate(o,MOTOR_OWNER_TIME); return; }
  if(event->alert_overrun || event->brownout) { motor_owner_invalidate(o,MOTOR_OWNER_PD_EVENT); return; }
  struct motor_gpio_inputs inputs=motor_gpio_read_inputs(o->gpio);
  if(o->gpio->faulted) { motor_owner_invalidate(o,MOTOR_OWNER_GPIO); return; }
  uint8_t status=0, summary=0;
  uint32_t deadline=now+2500u;
  if (!read_checked_byte(o,(struct read_byte){0x0e,&status,deadline}) ||
      !read_checked_byte(o,(struct read_byte){0x0b,&summary,deadline})) {
    motor_owner_invalidate(o,MOTOR_OWNER_TRANSPORT); return;
  }
  if(!(status&1u) || status&8u || summary&0xfdu) {
    motor_owner_invalidate(o,MOTOR_OWNER_PD_EVENT); return;
  }
  if(inputs.selector_bits!=o->selector_bits) {
    o->selector_bits=inputs.selector_bits;
    motor_owner_invalidate(o,MOTOR_OWNER_OK);
    if(inputs.selector_bits!=3 && !acquire(o,o->bus.now_us(o->bus.context)))
      motor_owner_invalidate(o,MOTOR_OWNER_PD_REQUEST);
    return;
  }
  if(inputs.selector_bits==3) { (void)motor_gpio_inhibit(o->gpio); return; }
  if(event->alert_pending) {
    struct stusb_message message;
    const struct stusb_capture capture={.alert_us=event->alert_us,.message=&message};
    enum stusb_rx_result result=stusb_capture_message(&o->bus,&capture);
    if(result!=STUSB_RX_NO_MESSAGE && (result!=STUSB_RX_OK || !apply_message(o,&message))) {
      motor_owner_invalidate(o,MOTOR_OWNER_PD_EVENT); return;
    }
  } else if(summary&2u) {
    /* A message without its original edge timestamp is ambiguous/stale. */
    motor_owner_invalidate(o,MOTOR_OWNER_PD_EVENT); return;
  }
  uint8_t pe_state=0, rdo_bytes[4]={0};
  now=o->bus.now_us(o->bus.context); deadline=now+2000;
  const struct stusb_read rdo_read={.register_address=0x91,.byte_count=4,
    .bytes=rdo_bytes,.deadline_us=deadline};
  if(!read_checked_byte(o,(struct read_byte){0x29,&pe_state,deadline}) ||
      !o->bus.read(o->bus.context,&rdo_read)) {
    motor_owner_invalidate(o,MOTOR_OWNER_TRANSPORT); return;
  }
  o->last_raw_frame=motor_adc_capture(o->adc);
  if(!o->last_raw_frame.valid) { motor_owner_invalidate(o,MOTOR_OWNER_ADC); return; }
  const struct motor_measurement_context conditions={.profile=o->config.measurement_profile,
    .now_us=o->bus.now_us(o->bus.context),.reference_stable=true,
    .environment_qualified=event->environment_qualified,.brownout=event->brownout};
  o->last_measurement=motor_measurement_convert(&o->last_raw_frame,&conditions);
  if(!o->last_measurement.valid) { motor_owner_invalidate(o,MOTOR_OWNER_MEASUREMENT); return; }
  now=o->bus.now_us(o->bus.context);
  if(!advance_time(o,now)) { motor_owner_invalidate(o,MOTOR_OWNER_TIME); return; }
  const struct motor_gpio_inputs checked_inputs=motor_gpio_read_inputs(o->gpio);
  if(o->gpio->faulted || checked_inputs.selector_bits!=inputs.selector_bits ||
      (o->sequence.outputs.host_allow && !checked_inputs.pd_enabled)) {
    motor_owner_invalidate(o,MOTOR_OWNER_GPIO); return;
  }
  const struct pd_sequence_sample sample={.observation={
    .attached=true,.communication_ok=true,.fresh_ps_rdy=o->ps_rdy_request_id!=0,
    .motor_fault=checked_inputs.motor_fault,.pe_fsm_state=pe_state,.source_generation=o->source_generation,
    .rdo=(uint32_t)rdo_bytes[0]|(uint32_t)rdo_bytes[1]<<8|(uint32_t)rdo_bytes[2]<<16|
      (uint32_t)rdo_bytes[3]<<24,.vbus=o->last_measurement.vbus,
    .motor_rail=o->last_measurement.motor_rail},
    .now_ms=o->uptime_ms,.adc_sample_ms=o->uptime_ms-
      ((now-o->last_measurement.oldest_sample_us+999u)/1000u),
    .completed_request_id=o->request.completed_request_id,.ps_rdy_request_id=o->ps_rdy_request_id,
    .selector_bits=inputs.selector_bits,.adc_valid=true};
  pd_sequence_step(&o->sequence,&sample);
  if(o->sequence.state==PD_SEQUENCE_FAULT) {
    motor_owner_invalidate(o,MOTOR_OWNER_PD_EVENT); return;
  }
  if(o->acquiring || o->sequence.state==PD_SEQUENCE_IDLE ||
      o->sequence.state==PD_SEQUENCE_DECAY) {
    /* Charged/back-driven VM is a normal reason to wait in DECAY. Do not
     * initialize or change feedback until its entire interval is <=1V. */
    (void)motor_gpio_inhibit(o->gpio); return;
  }
  /* Commit permissions in a bounded IRQ-masked section. Hardware pending flags
   * are checked on both sides of the writes; events during the commit revoke
   * permission before restoring the previous interrupt mask. IRQs themselves
   * retain timestamp-only ownership. An event after this section is handled
   * by the next foreground pass and the independent hardware inhibit path. */
  const uint32_t previous_mask=o->enter_critical(o->interrupt_context);
  const struct motor_gpio_inputs commit_inputs=motor_gpio_read_inputs(o->gpio);
  enum motor_owner_fault commit_fault=MOTOR_OWNER_OK;
  if(o->gpio->faulted || commit_inputs.selector_bits!=inputs.selector_bits)
    commit_fault=MOTOR_OWNER_GPIO;
  else if(o->sequence.outputs.host_allow && (!commit_inputs.pd_enabled ||
      commit_inputs.motor_fault || o->pending_interrupt(o->interrupt_context)))
    commit_fault=MOTOR_OWNER_PD_EVENT;
  const struct motor_gpio_command gpio_command={.outputs=o->sequence.outputs,
    .motor_rail=o->last_measurement.motor_rail,.oldest_sample_us=o->last_measurement.oldest_sample_us,
    .now_us=o->bus.now_us(o->bus.context)};
  if(commit_fault==MOTOR_OWNER_OK && !motor_gpio_apply(o->gpio,&gpio_command))
    commit_fault=MOTOR_OWNER_GPIO;
  if(commit_fault==MOTOR_OWNER_OK && o->sequence.outputs.host_allow &&
      o->pending_interrupt(o->interrupt_context)) commit_fault=MOTOR_OWNER_PD_EVENT;
  if(commit_fault!=MOTOR_OWNER_OK) motor_owner_invalidate(o,commit_fault);
  o->leave_critical(o->interrupt_context,previous_mask);
  if(commit_fault!=MOTOR_OWNER_OK) return;
  if(o->sequence.outputs.request_contract &&
      o->request.completed_request_id!=o->sequence.outputs.request_id) {
    o->requested_capabilities=o->requested_accept=false; o->ps_rdy_request_id=o->accept_request_id=0;
    const struct stusb_request request={.state=&o->request,.plan=&o->sequence.plan,
      .request_id=o->sequence.outputs.request_id,.source_generation=o->source_generation,
      .started_us=o->bus.now_us(o->bus.context),.selector_bits=inputs.selector_bits,
      .power_path_inhibited=!o->gpio->host_allow,.bridge_inhibited=!o->gpio->release_bridge,
      .feedback_settled=o->gpio->feedback_known};
    if(stusb_request_contract(&o->bus,&request)!=STUSB_REQUEST_SENT)
      motor_owner_invalidate(o,MOTOR_OWNER_PD_REQUEST);
  }
}
