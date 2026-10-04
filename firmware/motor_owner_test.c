/* Reuse the ADC peripheral simulator and its independent regression entry.
 * It implements real W1C/self-clearing MMIO behavior, not an ADC-result stub. */
#define main adc_regression_main
#include "stm32_adc_test.c"
#undef main
#include "motor_owner.h"
struct harness {
  struct model m;
  struct motor_owner owner;
  struct motor_measurement_profile profile;
  struct stusb_nvm_image image;
  uint8_t registers[256];
  unsigned transfers, fail_transfer, commands;
  bool new_alert;
};
static uint32_t bus_now(void *context) { return now_us(&((struct harness *)context)->m); }
static bool owner_read(void *context, const struct stusb_read *r) {
  struct harness *h=context;
  ++h->transfers; h->m.now+=30;
  if(h->fail_transfer==h->transfers) return false;
  CHECK((uint32_t)(r->deadline_us-h->m.now)<UINT32_C(0x80000000));
  if(r->register_address==0x96) {
    h->registers[0x96]&=(uint8_t)~0x10u;
    unsigned sector=h->registers[0x96]&7u; CHECK(sector<5);
    memcpy(h->registers+0x53,h->image.bytes+sector*8,8);
  }
  memcpy(r->bytes,h->registers+r->register_address,r->byte_count);
  if(r->register_address==0x16) {
    h->registers[0x16]=0; h->registers[0x0b]&=(uint8_t)~2u;
  }
  return true;
}
static bool owner_write(void *context, const struct stusb_write *w) {
  struct harness *h=context;
  CHECK(!h->m.gpio.host_allow && !h->m.gpio.release_bridge);
  ++h->transfers; h->m.now+=30;
  if(h->fail_transfer==h->transfers) return false;
  CHECK((uint32_t)(w->deadline_us-h->m.now)<UINT32_C(0x80000000));
  memcpy(h->registers+w->register_address,w->bytes,w->byte_count);
  if(w->register_address==0x1a) ++h->commands;
  return true;
}
static bool critical_active;
static unsigned pending_calls, inject_pending_at;
static bool pending(void *context) {
  CHECK(critical_active);
  ++pending_calls;
  return ((struct harness *)context)->new_alert ||
    (inject_pending_at && pending_calls>=inject_pending_at);
}
static uint32_t enter_critical(void *context) {
  (void)context; CHECK(!critical_active); critical_active=true; return 0x1234;
}
static void leave_critical(void *context, uint32_t previous_mask) {
  (void)context; CHECK(critical_active && previous_mask==0x1234); critical_active=false;
}
static void owner_setup(struct harness *h) {
  critical_active=false; pending_calls=inject_pending_at=0;
  memset(h,0,sizeof *h); setup(&h->m); CHECK(motor_adc_initialize(&h->m.port));
  h->m.codes[0]=2257; h->m.codes[1]=1354;
  h->m.a.IDR=(2u<<2)|(1u<<12); h->m.c.IDR=1u<<15;
  /* Synthetic qualification verifies integration only. It is never exported
   * as a manufacturing profile or proof of the receiver's SOP behavior. */
  h->profile=(struct motor_measurement_profile){.approved=true,.qualification_id=1,
    .factory_vref=1650,.adc_error_half_counts=14,.factory_error_half_counts=14,
    .noise_half_counts=4,.upper_divider_ppm=6000,.lower_divider_ppm=8100,
    .reference_drift_ppm=9000,.leakage_na=70,.filter_tau_us=1100};
  for(unsigned i=0;i<40;++i) h->image.bytes[i]=(uint8_t)(i+27);
  h->registers[0x0e]=1; h->registers[0x29]=0x18;
  uint32_t rdo=(2u<<28)|(300u<<10)|300u;
  for(unsigned i=0;i<4;++i) h->registers[0x91+i]=(uint8_t)(rdo>>(8*i));
  h->owner=(struct motor_owner){.gpio=&h->m.gpio,.adc=&h->m.port,
    .bus={.context=h,.now_us=bus_now,.read=owner_read,.write=owner_write},
    .config={.nvm_image=&h->image,.measurement_profile=&h->profile,
      .nvm_qualification_id=1,.receive_path_qualification_id=1},
    .pending_interrupt=pending,.interrupt_context=h,
    .enter_critical=enter_critical,.leave_critical=leave_critical};
}
static void check_owner_off(struct harness *h) {
  CHECK(!h->m.gpio.host_allow && !h->m.gpio.release_bridge);
  CHECK((h->m.a.ODR&0xc0u)==0x80u);
}
static void step(struct harness *h) {
  const struct motor_owner_event event={.environment_qualified=true};
  motor_owner_step(&h->owner,&event);
}
static void send_message(struct harness *h,unsigned type,bool capabilities) {
  uint16_t header=0x140u|type|(capabilities?2u<<12:0);
  h->registers[0x30]=capabilities?8:0;
  h->registers[0x31]=(uint8_t)header; h->registers[0x32]=(uint8_t)(header>>8);
  uint32_t pdos[2]={(100u<<10)|300u,(400u<<10)|300u};
  for(unsigned i=0;i<8;++i) h->registers[0x33+i]=(uint8_t)(pdos[i/4]>>(8*(i%4)));
  h->registers[0x16]=4; h->registers[0x0b]=2;
  const struct motor_owner_event event={.alert_pending=true,.alert_us=h->m.now,
    .environment_qualified=true};
  motor_owner_step(&h->owner,&event);
}
static void acquire_and_request(struct harness *h) {
  CHECK(motor_owner_initialize(&h->owner)); CHECK(h->owner.nvm.image_matches);
  step(h); CHECK(h->owner.acquiring && h->commands==1);
  send_message(h,3,false); CHECK(h->owner.acquiring); /* SoftReset Accept. */
  send_message(h,1,true); CHECK(!h->owner.acquiring);
  CHECK(h->owner.sequence.state==PD_SEQUENCE_DECAY);
  CHECK(!h->m.gpio.feedback_known); check_owner_off(h);
  /* A high/back-driven VM is safe waiting, not a feedback-change attempt. */
  step(h); CHECK(h->owner.fault==MOTOR_OWNER_OK); CHECK(!h->m.gpio.feedback_known);
  h->m.codes[1]=56; step(h); CHECK(h->owner.sequence.state==PD_SEQUENCE_FEEDBACK);
  CHECK(h->m.gpio.feedback_known && h->m.gpio.drive_12v);
  for(unsigned i=0;i<20 && !h->owner.request.completed_request_id;++i) {
    h->m.now+=500; step(h); CHECK(h->owner.fault==MOTOR_OWNER_OK); check_owner_off(h);
  }
  CHECK(h->owner.request.completed_request_id==1 && h->commands==2);
  step(h); CHECK(h->owner.sequence.state==PD_SEQUENCE_CONTRACT);
}
static void qualify_contract(struct harness *h) {
  send_message(h,3,false); CHECK(!h->owner.requested_accept);
  send_message(h,1,true); CHECK(h->owner.requested_capabilities);
  send_message(h,3,false); CHECK(h->owner.accept_request_id==1);
  send_message(h,6,false);
}
static void ready(struct harness *h) {
  acquire_and_request(h); qualify_contract(h);
  CHECK(h->owner.fault==MOTOR_OWNER_OK && h->owner.sequence.state==PD_SEQUENCE_RAIL);
  CHECK(h->m.gpio.host_allow && !h->m.gpio.release_bridge);
  h->m.codes[1]=1354;
  for(unsigned i=0;i<40 && h->owner.sequence.state!=PD_SEQUENCE_READY;++i) {
    h->m.now+=500; step(h); CHECK(h->owner.fault==MOTOR_OWNER_OK);
  }
  CHECK(h->owner.sequence.state==PD_SEQUENCE_READY && h->m.gpio.release_bridge);
}
int main(void) {
  struct harness h;
  for(unsigned i=0;i<6;++i) {
    owner_setup(&h);
    switch(i) {
      case 0: h.owner.config.nvm_image=NULL; break;
      case 1: h.owner.config.nvm_qualification_id=0; break;
      case 2: h.owner.config.receive_path_qualification_id=0; break;
      case 3: h.owner.config.measurement_profile=NULL; break;
      case 4: h.profile.approved=false; break;
      default: h.profile.qualification_id=0; break;
    }
    CHECK(!motor_owner_initialize(&h.owner)); CHECK(h.owner.fault==MOTOR_OWNER_CONFIGURATION_MISSING);
    unsigned transfers=h.transfers; step(&h); CHECK(h.transfers==transfers);
    CHECK(!h.owner.last_measurement.valid); check_owner_off(&h);
  }
  owner_setup(&h); ready(&h);
  /* Detach, hardware alert, protocol reset, missing original edge, I2C,
   * ADC, clock gap, brownout, qualification loss and new pending IRQ. */
  for(unsigned i=0;i<10;++i) {
    owner_setup(&h); ready(&h);
    struct motor_owner_event e={.environment_qualified=true};
    switch(i) {
      case 0: h.registers[0x0e]=0; break;
      case 1: h.registers[0x0b]=0x20; break;
      case 2: h.registers[0x16]=0x80; e.alert_pending=true; e.alert_us=h.m.now; break;
      case 3: h.registers[0x0b]=2; break;
      case 4: h.fail_transfer=h.transfers+1; break;
      case 5: h.m.fault=OVERRUN; break;
      case 6: h.m.now+=5001; break;
      case 7: e.brownout=true; break;
      case 8: e.environment_qualified=false; break;
      default: h.new_alert=true; break;
    }
    motor_owner_step(&h.owner,&e); CHECK(h.owner.fault!=MOTOR_OWNER_OK); check_owner_off(&h);
    CHECK(h.m.gpio.drive_12v); /* Charged-rail feedback retained. */
  }
  /* Event arriving between precheck and postcheck must revoke before unmask. */
  owner_setup(&h); ready(&h); inject_pending_at=pending_calls+2;
  step(&h); CHECK(h.owner.fault==MOTOR_OWNER_PD_EVENT); check_owner_off(&h);
  CHECK(!critical_active);
  owner_setup(&h); acquire_and_request(&h); h.m.a.IDR|=1u<<8;
  qualify_contract(&h); CHECK(h.owner.fault!=MOTOR_OWNER_OK); check_owner_off(&h);
  owner_setup(&h); ready(&h); h.m.a.IDR=(1u<<2)|(1u<<12);
  step(&h); check_owner_off(&h); CHECK(h.m.gpio.drive_12v && h.owner.acquiring);
  send_message(&h,1,true); CHECK(h.owner.sequence.state==PD_SEQUENCE_DECAY);
  CHECK(h.m.gpio.drive_12v); /* 9V feedback cannot change at charged12V. */
  owner_setup(&h); acquire_and_request(&h); send_message(&h,6,false);
  CHECK(h.owner.fault==MOTOR_OWNER_PD_EVENT); check_owner_off(&h);
  owner_setup(&h); h.m.now=UINT32_MAX-12000u; ready(&h);
  CHECK(h.owner.uptime_ms<100 && h.owner.fault==MOTOR_OWNER_OK);
  puts("Serialized motor-owner integration/fault tests passed");
  printf("%u assertions\n",assertions);
  return 0;
}
