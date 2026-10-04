#include "motor_measurement.h"
#define PPM UINT64_C(1000000)
static uint64_t ceil_div(uint64_t numerator, uint64_t denominator) {
  return numerator / denominator + (numerator % denominator != 0);
}
static bool profile_valid(const struct motor_measurement_profile *p) {
  /* Reject nonsensical, overflowing, under-specified or zero identity limits.
   * DS12991 characterized error is NOT automatic approval at32 MHz. */
  return p && p->approved && p->qualification_id && p->factory_vref > 32 &&
    p->factory_vref < 4063 && p->adc_error_half_counts >= 14 &&
    p->adc_error_half_counts <= 64 && p->noise_half_counts <= 64 &&
    p->factory_error_half_counts >= 14 && p->factory_error_half_counts <= 64 &&
    p->upper_divider_ppm >= 3000 && p->upper_divider_ppm <= 20000 &&
    p->lower_divider_ppm >= 3000 && p->lower_divider_ppm <= 20000 &&
    p->reference_drift_ppm >= 9000 && p->reference_drift_ppm <= 20000 &&
    p->leakage_na >= 70 && p->leakage_na <= 1000 && p->filter_tau_us > 0 &&
    p->filter_tau_us <= 2000 && p->vdda_slew_uv_per_us <= 10000 &&
    p->rail_slew_uv_per_us[0] <= 1000000 && p->rail_slew_uv_per_us[1] <= 1000000;
}
struct rail_conversion {
  uint16_t code;
  uint64_t vdda_lower_uv, vdda_upper_uv;
  uint32_t dynamic_error_mv;
};
static struct pd_voltage_interval convert_rail(const struct rail_conversion *rail,
                               const struct motor_measurement_profile *p) {
  const uint64_t gain_lower_ppm = PPM +
    10u * PPM * (PPM - p->upper_divider_ppm) / (PPM + p->lower_divider_ppm);
  const uint64_t gain_upper_ppm = PPM +
    ceil_div(10u * PPM * (PPM + p->upper_divider_ppm), PPM - p->lower_divider_ppm);
  const uint32_t count_error = p->adc_error_half_counts + p->noise_half_counts;
  uint64_t half_code = (uint32_t)rail->code * 2u;
  uint64_t lower_half_code = half_code > count_error ? half_code - count_error : 0;
  uint64_t lower_mv = lower_half_code * rail->vdda_lower_uv * gain_lower_ppm /
    (8192u * UINT64_C(1000000000));
  uint64_t upper_mv = ceil_div((half_code + count_error) * rail->vdda_upper_uv *
    gain_upper_ppm, 8192u * UINT64_C(1000000000));
  const uint64_t leakage_mv = ceil_div((uint64_t)p->leakage_na * 100000u *
    (PPM + p->upper_divider_ppm), PPM * PPM);
  const uint64_t absolute_error_mv = leakage_mv + rail->dynamic_error_mv;
  lower_mv = lower_mv > absolute_error_mv ? lower_mv - absolute_error_mv : 0;
  upper_mv += absolute_error_mv;
  return (struct pd_voltage_interval){.lower_mv = (uint32_t)lower_mv,
    .upper_mv = (uint32_t)upper_mv, .valid = true};
}
struct motor_measurement motor_measurement_convert(const struct motor_adc_sample *frame,
                         const struct motor_measurement_context *conditions) {
  const struct motor_measurement invalid = {0};
  if (!conditions || !frame || !frame->valid || !profile_valid(conditions->profile) ||
      !conditions->reference_stable || !conditions->environment_qualified ||
      conditions->brownout) return invalid;
  const struct motor_measurement_profile *p = conditions->profile;
  if (frame->factory_vref != p->factory_vref || frame->vbus >= 4095 ||
      frame->vm >= 4095 || frame->vrefint >= 4095) return invalid;
  uint32_t last = frame->started_us;
  const unsigned order[3] = {2, 0, 1};
  for (unsigned position = 0; position < 3; ++position) {
    const unsigned i = order[position];
    uint32_t gap = frame->channel_started_us[i] - last;
    uint32_t elapsed = frame->channel_completed_us[i] - frame->channel_started_us[i];
    if (gap > 500u || !elapsed || elapsed > 500u) return invalid;
    last = frame->channel_completed_us[i];
  }
  if ((uint32_t)(frame->completed_us - last) > 500u ||
      (uint32_t)(frame->completed_us - frame->started_us) >= 500u ||
      (uint32_t)(conditions->now_us - frame->started_us) > 5000u) return invalid;
  const uint64_t factory_half = (uint32_t)frame->factory_vref * 2u;
  const uint32_t reference_count_error = p->adc_error_half_counts + p->noise_half_counts;
  const uint64_t reference_half = (uint32_t)frame->vrefint * 2u;
  if (reference_half <= reference_count_error) return invalid;
  /* DS12991 factory supply3.0 V +/-10mV. Include calibration count error,
   * current reference acquisition error, temperature/aging/supply drift. */
  uint64_t vdda_lower_uv = UINT64_C(2990000) *
    (factory_half - p->factory_error_half_counts) * (PPM - p->reference_drift_ppm) /
    ((reference_half + reference_count_error) * PPM);
  uint64_t vdda_upper_uv = ceil_div(UINT64_C(3010000) *
    (factory_half + p->factory_error_half_counts) * (PPM + p->reference_drift_ppm),
    (reference_half - reference_count_error) * PPM);
  /* VREFINT and rail acquisitions are sequential. Bound supply motion since
   * the earliest acquisition, including a conservatively slow3% timebase. */
  uint64_t frame_age_us = ceil_div((uint64_t)(conditions->now_us - frame->started_us) * 100u, 97u);
  uint64_t vdda_motion_uv = frame_age_us * p->vdda_slew_uv_per_us;
  if (vdda_lower_uv < vdda_motion_uv) return invalid;
  vdda_lower_uv -= vdda_motion_uv; vdda_upper_uv += vdda_motion_uv;
  if (vdda_lower_uv < 2400000u || vdda_upper_uv >= 3600000u) return invalid;
  const uint16_t codes[2] = {frame->vbus, frame->vm};
  struct pd_voltage_interval intervals[2];
  for (unsigned i = 0; i < 2; ++i) {
    /* First-order RC lag <= tau*max(|dV/dt|) for a qualified slew envelope.
     * A constant-looking filtered history alone never proves that envelope.
     * Using each conversion START bounds the unknown sampling instant;
     * frame START still governs reference skew and whole-frame freshness. */
    const uint64_t channel_age_us = ceil_div((uint64_t)(conditions->now_us -
      frame->channel_started_us[i]) * 100u, 97u);
    uint64_t dynamic_error_mv = ceil_div((channel_age_us + p->filter_tau_us) *
      p->rail_slew_uv_per_us[i], 1000u);
    intervals[i] = convert_rail(&(struct rail_conversion){codes[i], vdda_lower_uv,
      vdda_upper_uv, (uint32_t)dynamic_error_mv}, p);
  }
  return (struct motor_measurement){.vbus = intervals[0], .motor_rail = intervals[1],
    .oldest_sample_us = frame->started_us, .valid = true};
}
