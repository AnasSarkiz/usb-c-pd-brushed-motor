export interface PdCapability {
  voltageV: number
  currentA: number
}

// A7 host policy: prefer the lowest adequate fixed-voltage contract.
// Conservative engineering screen; hardware efficiency/thermal measurements pending.
export function chooseMotorContract(
  sourceCapabilities: PdCapability[],
  motorVoltageV: 5 | 9 | 12,
  peakMotorCurrentA = 2.423,
) {
  const minimumLimitA = ((18_000 / 7_150) * 0.9) / 1.01
  const maximumLimitA = ((18_000 / 7_150) * 1.1) / 0.99
  const adequate = sourceCapabilities
    .filter(
      (source) =>
        (source.voltageV === 15 || source.voltageV === 20) &&
        source.currentA >= 3 &&
        source.currentA >= maximumLimitA + 1 / (source.voltageV * 0.95) &&
        motorInputCurrentA({
          motorVoltageV,
          motorCurrentA: peakMotorCurrentA,
          contractVoltageV: source.voltageV,
        }) <= minimumLimitA,
    )
    .sort((a, b) => a.voltageV - b.voltageV)[0]
  return adequate ? { voltageV: adequate.voltageV, currentA: 3 } : null
}

export function motorInputCurrentA({
  motorVoltageV,
  motorCurrentA,
  contractVoltageV,
}: {
  motorVoltageV: number
  motorCurrentA: number
  contractVoltageV: number
}) {
  const minimumSourceVoltageV = contractVoltageV * 0.95
  const assumedDiodeDropV = 0.55
  const assumedBridgeResistanceOhms = 0.36
  const assumedBuckEfficiency = 0.85
  const assumedAuxiliaryPowerW = 1
  const maximumMotorRailV = motorVoltageV * 1.05
  const bleederPowerW = maximumMotorRailV ** 2 / 940
  const bridgeLossW = motorCurrentA ** 2 * assumedBridgeResistanceOhms
  return (
    (maximumMotorRailV * motorCurrentA + bridgeLossW + bleederPowerW) /
      assumedBuckEfficiency /
      (minimumSourceVoltageV - assumedDiodeDropV) +
    assumedAuxiliaryPowerW / minimumSourceVoltageV
  )
}

export function regulatedMotorVoltageV(parallelBranchOhms?: number) {
  const feedbackTopOhms = 100_000 + 5_100
  const feedbackBottomOhms = parallelBranchOhms
    ? 1 / (1 / 20_000 + 1 / parallelBranchOhms)
    : 20_000
  return 0.8 * (1 + feedbackTopOhms / feedbackBottomOhms)
}

export function pwmTiming({
  fraction,
  potResistanceOhms = 10_000,
  timingCapacitanceF = 5.6e-9,
}: {
  fraction: number
  potResistanceOhms?: number
  timingCapacitanceF?: number
}) {
  // Analytic estimate including diode and discharge transistor drops.
  // These nominal drops are assumptions; no simulated/bench guarantee.
  const supplyV = 3.3
  const diodeDropV = 0.2
  const dischargeDropV = 0.1
  const lowerThresholdV = supplyV / 3
  const upperThresholdV = (supplyV * 2) / 3
  const chargeTimeS =
    timingCapacitanceF *
    (330 + fraction * potResistanceOhms) *
    Math.log(
      (supplyV - diodeDropV - lowerThresholdV) /
        (supplyV - diodeDropV - upperThresholdV),
    )
  const dischargeTimeS =
    timingCapacitanceF *
    (330 + (1 - fraction) * potResistanceOhms) *
    Math.log(
      (upperThresholdV - diodeDropV - dischargeDropV) /
        (lowerThresholdV - diodeDropV - dischargeDropV),
    )
  return {
    frequencyHz: 1 / (chargeTimeS + dischargeTimeS),
    dutyFraction: chargeTimeS / (chargeTimeS + dischargeTimeS),
  }
}
