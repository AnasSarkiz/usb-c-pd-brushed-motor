/** AN4235 equations for ST's I2C v2 TIMINGR; actual G0 scope qualification
 * remains mandatory. Units are ns except resistance/capacitance/frequency.
 */
export function i2cTimingEnvelope({
  timingRegister = 0x00521018,
  riseMaximumNs = 200,
  fallMaximumNs = 60,
}: {
  timingRegister?: number
  riseMaximumNs?: number
  fallMaximumNs?: number
} = {}) {
  const prescaler = (timingRegister >>> 28) + 1
  const sclDelay = ((timingRegister >>> 20) & 15) + 1
  const sdaDelay = (timingRegister >>> 16) & 15
  const sclHigh = ((timingRegister >>> 8) & 255) + 1
  const sclLow = (timingRegister & 255) + 1
  const tickMinimumNs = 1e9 / (16e6 * 1.03),
    tickMaximumNs = 1e9 / (16e6 * 0.97)
  const setupMinimumNs = sclDelay * prescaler * tickMinimumNs
  const holdRegisterMinimumNs = sdaDelay * prescaler * tickMinimumNs
  const holdRegisterMaximumNs = sdaDelay * prescaler * tickMaximumNs
  const requiredHoldMinimumNs = fallMaximumNs + 40 - 50 - 3 * tickMinimumNs
  const permittedHoldMaximumNs = 900 - riseMaximumNs - 260 - 4 * tickMaximumNs
  const lowMinimumNs = (sclLow * prescaler + 2) * tickMinimumNs + 50
  const highMinimumNs = (sclHigh * prescaler + 2) * tickMinimumNs + 50
  const periodMaximumNs =
    ((sclLow + sclHigh) * prescaler + 6) * tickMaximumNs +
    520 +
    riseMaximumNs +
    fallMaximumNs
  const checks = {
    setup: setupMinimumNs >= riseMaximumNs + 100,
    holdMinimum: holdRegisterMinimumNs >= requiredHoldMinimumNs,
    holdMaximum: holdRegisterMaximumNs <= permittedHoldMaximumNs,
    low: lowMinimumNs >= 1300,
    high: highMinimumNs >= 600,
    frequency: 1e9 / (lowMinimumNs + highMinimumNs) <= 400000,
  }
  return {
    timingRegister: "0x" + timingRegister.toString(16).padStart(8, "0"),
    prescaler,
    sclDelay,
    sdaDelay,
    sclHigh,
    sclLow,
    tickMinimumNs,
    tickMaximumNs,
    setupMinimumNs,
    holdRegisterMinimumNs,
    holdRegisterMaximumNs,
    requiredHoldMinimumNs,
    permittedHoldMaximumNs,
    lowMinimumNs,
    highMinimumNs,
    minimumFrequencyHz: 1e9 / periodMaximumNs,
    maximumFrequencyHz: 1e9 / (lowMinimumNs + highMinimumNs),
    maximumBusCapacitancePf: (riseMaximumNs * 1e3) / (0.8473 * 4700 * 1.02),
    checks,
    passed: Object.values(checks).every(Boolean),
    status:
      "conditional AN4235 peripheral-equation screen; G0 timing and measured rise/fall must be qualified",
  }
}
