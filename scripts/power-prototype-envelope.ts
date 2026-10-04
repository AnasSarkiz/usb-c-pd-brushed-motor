import {
  dumpResistorEnvelope,
  reviewMotorContracts,
} from "./motor-validation-calculations"

/** Static tolerance screen; rail gain is shared with the buck feedback loop.
 * Comparator input current directions are widened deliberately to ±400nA.
 * Reference bounds include 1% initial, 34mV full-temperature deviation and
 * 5mV cathode-current allowance. Resistors reserve 1% initial +1% TCR.
 */
export function analogRailCorners(branchOhms?: number) {
  const limits = {
    uvFbMin: Infinity,
    uvFbMax: -Infinity,
    ovFbMin: Infinity,
    ovFbMax: -Infinity,
    tripMin: Infinity,
    tripMax: -Infinity,
    releaseMin: Infinity,
    releaseMax: -Infinity,
    minHysteresis: Infinity,
    minReferenceBiasA: Infinity,
  }
  const nominal = [
    105100,
    20000,
    branchOhms ?? Infinity,
    27000,
    10000,
    20000,
    11000,
    1000000,
    20000,
  ]
  for (let mask = 0; mask < 2 ** 9; mask++) {
    const r = nominal.map(
      (resistance, index) => resistance * (mask & (1 << index) ? 1.02 : 0.98),
    )
    const [
      top,
      bottom,
      branch,
      uvTop,
      uvBottom,
      ovTop,
      ovBottom,
      hysteresis,
      pullup,
    ] = r
    const gain = 1 + top / bottom + top / branch
    const fbResistance = 1 / (1 / top + 1 / bottom + 1 / branch)
    for (const ref of [2.47 - 0.034 - 0.005, 2.52 + 0.034 + 0.005])
      for (const offset of [-0.009, 0.009])
        for (const bias of [-400e-9, 400e-9])
          for (const fbBias of [-900e-9, 900e-9])
            for (const outputLowV of [0, 0.7]) {
              const uv =
                (ref * uvBottom) / (uvTop + uvBottom) +
                offset +
                bias / (1 / uvTop + 1 / uvBottom)
              const conductance =
                1 / ovTop + 1 / ovBottom + 1 / (hysteresis + pullup)
              const feedbackErrorV = fbBias * fbResistance
              const trip =
                (ref / ovTop +
                  bias +
                  offset * conductance -
                  feedbackErrorV * conductance) /
                (conductance / gain - 1 / (hysteresis + pullup))
              const release =
                (ref / ovTop + outputLowV / hysteresis + bias) /
                  (1 / ovTop + 1 / ovBottom + 1 / hysteresis) +
                offset -
                feedbackErrorV
              const uvFb = uv - feedbackErrorV
              const tripFb = trip / gain
              limits.uvFbMin = Math.min(limits.uvFbMin, uvFb)
              limits.uvFbMax = Math.max(limits.uvFbMax, uvFb)
              limits.ovFbMin = Math.min(limits.ovFbMin, tripFb)
              limits.ovFbMax = Math.max(limits.ovFbMax, tripFb)
              limits.tripMin = Math.min(limits.tripMin, trip)
              limits.tripMax = Math.max(limits.tripMax, trip)
              limits.releaseMin = Math.min(limits.releaseMin, release * gain)
              limits.releaseMax = Math.max(limits.releaseMax, release * gain)
              limits.minHysteresis = Math.min(
                limits.minHysteresis,
                trip - release * gain,
              )
              // Reference bias is valid only once the independently qualified rail minimum is reached.
              const minimumQualifiedVmV =
                branchOhms === undefined
                  ? 4.75
                  : branchOhms === 21000
                    ? 8.55
                    : 11.4
              const biasSupply =
                (minimumQualifiedVmV - ref) / 2040 - ref / 26460 - ref / 19600
              limits.minReferenceBiasA = Math.min(
                limits.minReferenceBiasA,
                biasSupply,
              )
            }
  }
  return {
    ...limits,
    cases: 512 * 32,
    referenceMinBiasRequiredA: 0.0007,
    commonModeMaximumInputV: 1.1,
    minimumQualifiedRailV:
      branchOhms === undefined ? 4.75 : branchOhms === 21000 ? 8.55 : 11.4,
    uvBelowBuckMinimumFb: limits.uvFbMax < 0.788,
    ovAboveBuckMaximumFb: limits.ovFbMin > 0.812,
    hysteresisPositive: limits.minHysteresis > 0,
    referenceBiasScreen: limits.minReferenceBiasA >= 0.0007,
    status:
      "conditional component-bound screen; no response-delay maximum guaranteed",
  }
}

/** Loss allowances are requirements for the routed prototype and thermal tests,
 * not guaranteed hot values or use of datasheet θJA as our board's θJA.
 */
export function prototypeThermalRequirements(motorVoltageV: 5 | 9 | 12) {
  const source = reviewMotorContracts({
    motorVoltageV,
    peakMotorCurrentA: 2.423,
    sourceCapabilities: [
      { voltageV: 15, currentA: 3 },
      { voltageV: 20, currentA: 3 },
    ],
  }).selectedContract
  if (!source) throw new Error("No acceptable prototype source")
  const inputVoltageV = source.voltageV - 0.55
  const duty = motorVoltageV / inputVoltageV
  const outputCurrentA = 2
  const rippleA = ((inputVoltageV - motorVoltageV) * duty) / (6.56e-6 * 480000)
  const inductorRmsSquared = outputCurrentA ** 2 + rippleA ** 2 / 12
  const losses = {
    buck:
      0.19 * inductorRmsSquared * duty +
      (inputVoltageV * outputCurrentA * 100e-9 * 600000) / 2 +
      0.03,
    catchDiode: 0.55 * outputCurrentA * (1 - duty),
    inductorCopper: 0.03 * inductorRmsSquared,
    efuse: 0.045 * source.requiredInputCurrentA ** 2,
    seriesDiode: 0.55 * source.requiredInputCurrentA,
    bridge: 0.36 * outputCurrentA ** 2,
    ldos:
      (source.voltageV * 1.05 - 3.3) * 0.015 +
      (source.voltageV * 1.05 - 5) * 0.005,
    bleeder: (motorVoltageV * 1.05) ** 2 / 940,
  }
  return {
    motorVoltageV,
    contractVoltageV: source.voltageV,
    ambientMaximumC: 40,
    junctionScreenC: 125,
    assumptions:
      "buck100ns switching edge; bridge0.36ohm hot; diode0.55V;15mA3V3/5mA5V aggregate; inductor core loss absent; measured effective θ/efficiency required",
    lossesW: losses,
    maximumEffectiveThetaCPerW: Object.fromEntries(
      Object.entries(losses).map(([part, lossW]) => [part, 85 / lossW]),
    ),
    totalSemiconductorAllowanceW: Object.values(losses).reduce(
      (sum, loss) => sum + loss,
      0,
    ),
    continuous2AStatus: "target; not thermally qualified",
  }
}
export function prototypeRegenScreen() {
  const railCeilingV = 18
  const pulseS = 0.02
  const periodS = 10
  return {
    railCeilingV,
    pulseS,
    periodS,
    energyCeilingJ: 0.5,
    initialMotorEnergyCeilingJ: 0.001,
    initialCapacitorOnlyMaximumV: Math.sqrt(12.6 ** 2 + (2 * 0.001) / 264e-6),
    bank: dumpResistorEnvelope({
      railV: railCeilingV,
      ambientC: 40,
      pulseS,
      periodS,
    }),
    minimumBankCurrentAtCeilingA: railCeilingV / 5.225,
    mosfetFullyOnLossW: (railCeilingV / 4.775) ** 2 * 0.06,
    mosfetHotResistanceAssumptionOhms: 0.06,
    capacitorEnergyUntilDumpJ: 0.5 * 264e-6 * (railCeilingV ** 2 - 12.6 ** 2),
    status:
      "conditional expanded test ceiling only after measured clamp timing/SOA; initial motor stored energy <=1mJ; no repetitive braking guarantee",
    exclusions: [
      "externally powered back-drive",
      "unmeasured motor inertia",
      "operation beyond20ms dump event",
      "TVS clamp as steady voltage regulation",
      "unqualified5V current regulation",
    ],
  }
}
