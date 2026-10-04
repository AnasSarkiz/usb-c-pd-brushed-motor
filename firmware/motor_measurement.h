#ifndef MOTOR_MEASUREMENT_H
#define MOTOR_MEASUREMENT_H
#include "stm32_adc.h"
/* An independently qualified board/ADC profile is required. There is no
 * factory/default approval or nominal-count fallback. Half-count fields
 * include quantization; ppm values are nonstatistical outward error bounds. */
struct motor_measurement_profile {
  uint32_t qualification_id;
  bool approved;
  uint16_t factory_vref, adc_error_half_counts, noise_half_counts;
  uint16_t factory_error_half_counts, upper_divider_ppm, lower_divider_ppm;
  uint16_t reference_drift_ppm, leakage_na, filter_tau_us;
  uint32_t vdda_slew_uv_per_us, rail_slew_uv_per_us[2];
};
struct motor_measurement_context {
  const struct motor_measurement_profile *profile;
  uint32_t now_us;
  bool reference_stable, environment_qualified, brownout;
};
struct motor_measurement {
  struct pd_voltage_interval vbus, motor_rail;
  uint32_t oldest_sample_us;
  bool valid;
};
struct motor_measurement motor_measurement_convert(const struct motor_adc_sample *frame,
                         const struct motor_measurement_context *conditions);
#endif
