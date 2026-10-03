#include "pd_policy.h"

uint8_t pd_motor_voltage(uint8_t bits) {
  static const uint8_t voltage[4] = {5, 9, 12, 0};
  return bits < 4 ? voltage[bits] : 0;
}

/* Engineering assumptions match the A11 power report: 2.423 A peak,
 * 0.36 ohm hot bridge bound, 85% buck efficiency, 0.55 V diode,
 * 1 W auxiliaries plus worst bleeder load, +5% output / -5% source voltage. 5 V current-limit accuracy
 * is not guaranteed by the driver; it needs prototype characterization. */
static bool power_budget_fits(uint8_t motor_v, uint16_t source_mv) {
  const float current = 2.423f;
  const float minimum_input_limit = (18000.0f / 7150.0f) * 0.9f / 1.01f;
  const float minimum_vbus = source_mv / 1000.0f * 0.95f;
  const float input_current =
      (motor_v * 1.05f * current + current * current * 0.36f +
       motor_v * motor_v * 1.05f * 1.05f / 940.0f) /
          (0.85f * (minimum_vbus - 0.55f)) +
      1.0f / minimum_vbus;
  return input_current <= minimum_input_limit;
}

struct pd_plan pd_make_plan(uint8_t bits, const struct pd_capabilities *capabilities) {
  struct pd_plan result = {0};
  const uint8_t motor_v = pd_motor_voltage(bits);
  if (!motor_v || !capabilities || !capabilities->source_pdos ||
      !capabilities->count || capabilities->count > PD_MAX_OBJECTS ||
      !capabilities->source_generation)
    return result;
  const uint32_t *pdos = capabilities->source_pdos;
  const size_t count = capabilities->count;
  /* Mandatory first fixed 5 V PDO. Reject malformed source advertisements. */
  if ((pdos[0] >> 30) != 0 || ((pdos[0] >> 10) & 1023u) != 100u ||
      !(pdos[0] & 1023u) || (pdos[0] & 1023u) > 500u)
    return result;
  for (size_t i = 0; i < count; ++i) {
    const uint32_t pdo = pdos[i];
    if ((pdo >> 30) != 0) continue; /* No PPS, battery or variable PDO support. */
    const uint16_t mv = (uint16_t)(((pdo >> 10) & 1023u) * 50u);
    const uint16_t ma = (uint16_t)((pdo & 1023u) * 10u);
    if ((mv != 15000 && mv != 20000) || ma < 3000 || ma > 5000 ||
        !power_budget_fits(motor_v, mv)) continue;
    if (!result.valid || mv < result.voltage_mv) {
      result.valid = true;
      result.source_object_position = (uint8_t)(i + 1);
      result.motor_voltage_v = motor_v;
      result.source_generation = capabilities->source_generation;
      result.source_pdo = pdo;
      result.voltage_mv = mv;
      result.current_ma = 3000;
      /* Fixed sink PDO, voltage 50 mV units, current 10 mA units. */
      result.sink_pdo = ((uint32_t)(mv / 50u) << 10) | (3000u / 10u);
    }
  }
  return result;
}

bool pd_plan_valid(const struct pd_plan *p) {
  return p && p->valid && p->source_generation &&
         p->source_object_position >= 2 && p->source_object_position <= PD_MAX_OBJECTS &&
         (p->motor_voltage_v == 5 || p->motor_voltage_v == 9 || p->motor_voltage_v == 12) &&
         (p->voltage_mv == 15000 || p->voltage_mv == 20000) && p->current_ma == 3000 &&
         (p->source_pdo >> 30) == 0 &&
         ((p->source_pdo >> 10) & 1023u) * 50u == p->voltage_mv &&
         (p->source_pdo & 1023u) >= 300u && (p->source_pdo & 1023u) <= 500u &&
         p->sink_pdo == (((uint32_t)(p->voltage_mv / 50u) << 10) | 300u) &&
         power_budget_fits(p->motor_voltage_v, p->voltage_mv);
}

bool pd_contract_qualified(const struct pd_plan *p,
                           const struct pd_observation *o) {
  if (!pd_plan_valid(p) || !o || !o->attached || !o->communication_ok ||
      !o->fresh_ps_rdy || o->pe_fsm_state != 0x18 ||
      o->source_generation != p->source_generation ||
      ((o->rdo >> 28) & 7u) != p->source_object_position ||
      (o->rdo & 0x8cf00000u)) return false; /* Reserved31/23:20, mismatch, GiveBack. */
  const uint16_t operating_ma = (uint16_t)(((o->rdo >> 10) & 1023u) * 10u);
  const uint16_t maximum_ma = (uint16_t)((o->rdo & 1023u) * 10u);
  /* DS12499 rev8 3.3.2: operating = I(SNK_PDO), maximum = I(SRC_PDO).
   * REQ_SRC_CURRENT=0 is mandatory. A source above3A must not increase the
   * operating request or the board's hardware motor/input current limits. */
  if (operating_ma != p->current_ma || maximum_ma != (p->source_pdo & 1023u) * 10u)
    return false;
  /* ADC scaling/calibration/error must be established before using these
   * physical limits. The transport must fail closed on stale samples. */
  return (uint32_t)o->vbus_mv * 100u >= (uint32_t)p->voltage_mv * 95u &&
         (uint32_t)o->vbus_mv * 100u <= (uint32_t)p->voltage_mv * 105u;
}

bool pd_motor_rail_qualified(const struct pd_rail_check *check) {
  if (!check) return false;
  const struct pd_plan *p = check->plan;
  const struct pd_observation *o = check->observation;
  if (!pd_contract_qualified(p, o) ||
      pd_motor_voltage(check->selector_bits) != p->motor_voltage_v) return false;
  /* Independent VM measurement catches a wrong feedback branch or selector.
   * +/-5% is a proposed acceptance window, not a measured board tolerance. */
  const uint32_t target_mv = (uint32_t)p->motor_voltage_v * 1000u;
  return (uint32_t)o->motor_rail_mv * 100u >= target_mv * 95u &&
         (uint32_t)o->motor_rail_mv * 100u <= target_mv * 105u;
}

bool pd_motor_qualified(const struct pd_rail_check *check) {
  return pd_motor_rail_qualified(check) && !check->observation->motor_fault;
}
