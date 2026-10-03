import { motorInputCurrentA } from "./electrical-calculations"

export type MotorVoltageV = 5 | 9 | 12

// A7 engineering screen: approved MCU architecture, 7.15 kOhm eFuse implemented.
// Embedded PD transport and physical qualification remain required.
export function reviewMotorContracts({
  motorVoltageV,
  peakMotorCurrentA,
  sourceCapabilities,
}: {
  motorVoltageV: MotorVoltageV
  peakMotorCurrentA: number
  sourceCapabilities: { voltageV: number; currentA: number }[]
}) {
  const nominalInputLimitA = 18_000 / 7_150
  const minimumInputLimitA = (nominalInputLimitA * 0.9) / 1.01
  const maximumInputLimitA = (nominalInputLimitA * 1.1) / 0.99
  const candidates = sourceCapabilities.map((source) => {
    const requiredInputCurrentA = motorInputCurrentA({
      motorVoltageV,
      motorCurrentA: peakMotorCurrentA,
      contractVoltageV: source.voltageV,
    })
    const maximumTotalFaultCurrentA =
      maximumInputLimitA + 1 / (source.voltageV * 0.95)
    const rejectionReasons: string[] = []
    if (source.voltageV !== 15 && source.voltageV !== 20)
      rejectionReasons.push("Only qualified 15/20 V fixed PDOs are allowed")
    if (source.currentA < 3 || source.currentA < maximumTotalFaultCurrentA)
      rejectionReasons.push("Source current is below worst-case fault demand")
    if (!Number.isFinite(source.currentA) || source.currentA > 5)
      rejectionReasons.push(
        "Source current is outside the supported fixed-PDO range",
      )
    if (requiredInputCurrentA > minimumInputLimitA)
      rejectionReasons.push("Peak load exceeds minimum input current limit")
    return {
      ...source,
      requestedOperatingCurrentA: 3,
      expectedMaximumCurrentA: source.currentA,
      requiredInputCurrentA,
      maximumTotalFaultCurrentA,
      rejectionReasons,
      qualified: rejectionReasons.length === 0,
    }
  })
  const selectedContract =
    candidates
      .filter((candidate) => candidate.qualified)
      .sort((left, right) => left.voltageV - right.voltageV)[0] ?? null
  return {
    implementationStatus:
      "MCU qualification wired; embedded transport/prototype validation pending",
    nominalInputLimitA,
    minimumInputLimitA,
    maximumInputLimitA,
    candidates,
    selectedContract,
    motorMustRemainInhibited: selectedContract === null,
  }
}

export function motorTransientEnvelope({
  motorVoltageV,
  windingResistanceOhms,
  windingInductanceH,
  backEmfV,
  currentRegulationDelayS,
  currentLimitA,
}: {
  motorVoltageV: number
  windingResistanceOhms: number
  windingInductanceH: number
  backEmfV: number
  currentRegulationDelayS: number
  currentLimitA: number
}) {
  const reversingVoltageV = motorVoltageV + Math.abs(backEmfV)
  return {
    unrestrictedStartupCurrentA: motorVoltageV / windingResistanceOhms,
    unrestrictedReversalCurrentA: reversingVoltageV / windingResistanceOhms,
    windingEnergyAtCurrentLimitJ: 0.5 * windingInductanceH * currentLimitA ** 2,
    // First-order upper slope ignoring resistance; delay is an explicit
    // assumed total and is not a manufacturer worst-case timing guarantee.
    possibleReversalOvershootA:
      (reversingVoltageV / windingInductanceH) * currentRegulationDelayS,
  }
}

export function capacitorEnergyMarginJ({
  effectiveCapacitanceF,
  initialRailV,
  maximumRailV,
}: {
  effectiveCapacitanceF: number
  initialRailV: number
  maximumRailV: number
}) {
  return 0.5 * effectiveCapacitanceF * (maximumRailV ** 2 - initialRailV ** 2)
}

export function buckInductorPeakA({
  inputVoltageV,
  outputVoltageV,
  loadCurrentA,
  minimumInductanceH,
  minimumSwitchingFrequencyHz,
}: {
  inputVoltageV: number
  outputVoltageV: number
  loadCurrentA: number
  minimumInductanceH: number
  minimumSwitchingFrequencyHz: number
}) {
  const rippleCurrentA =
    ((inputVoltageV - outputVoltageV) * outputVoltageV) /
    inputVoltageV /
    minimumInductanceH /
    minimumSwitchingFrequencyHz
  return loadCurrentA + rippleCurrentA / 2
}

export function railMonitorThresholdsV(branchOhms?: number) {
  const gain = 1 + 105_100 / 20_000 + (branchOhms ? 105_100 / branchOhms : 0)
  const referenceV = 2.495
  // Inactive PNP: R41 + R42 = 20 kOhm between VM and the open output.
  // R40 then feeds OV_REF. No assumed 0.6 V PNP drop while it is off.
  const highFeedbackConductance = 1 / 1_020_000
  const referenceConductance = 1 / 20_000
  const groundConductance = 1 / 10_000
  const tripV =
    (referenceV * referenceConductance) /
    ((referenceConductance + groundConductance + highFeedbackConductance) /
      gain -
      highFeedbackConductance)
  const releaseFeedbackV =
    (referenceV * referenceConductance + 0.2 / 1_000_000) /
    (referenceConductance + groundConductance + 1 / 1_000_000)
  return {
    nominalRailV: 0.8 * gain,
    uvV: ((referenceV * 10_000) / 34_300) * gain,
    ovTripV: tripV,
    ovReleaseV: releaseFeedbackV * gain,
    referenceBiasAtNominalA: (0.8 * gain - referenceV) / 2_000,
    referenceBiasResistorPowerAtTripW: (tripV - referenceV) ** 2 / 2_000,
    instantaneousDumpPowerAtTripW: tripV ** 2 / 10,
  }
}
