/* Board A7 PD qualification policy. No GPIO/I2C driver is implied by this file. */
#ifndef MOTOR_PD_POLICY_H
#define MOTOR_PD_POLICY_H
#include <stdbool.h>
#include <stddef.h>
#include <stdint.h>
#define PD_MAX_OBJECTS 7
struct pd_plan {
  bool valid;
  uint8_t source_object_position;
  uint8_t motor_voltage_v;
  uint32_t source_generation;
  uint16_t voltage_mv;
  uint16_t current_ma;
  uint32_t sink_pdo;
};
struct pd_observation {
  bool attached, communication_ok, fresh_ps_rdy, motor_fault;
  uint8_t pe_fsm_state;
  uint32_t source_generation, rdo;
  uint16_t vbus_mv, motor_rail_mv;
};
/* 00=5 V; bit 0=9 V; bit 1=12 V; 11=invalid. */
uint8_t pd_motor_voltage(uint8_t selector_bits);
struct pd_plan pd_make_plan(uint8_t selector_bits, const uint32_t *source_pdos,
                           size_t count, uint32_t source_generation);
bool pd_contract_qualified(const struct pd_plan *plan,
                           const struct pd_observation *observation);
bool pd_motor_qualified(const struct pd_plan *plan,
                       const struct pd_observation *observation,
                       uint8_t current_selector_bits);
#endif
