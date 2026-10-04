import { describe, expect, test } from "bun:test"
import {
  buckInductorPeakA,
  capacitorEnergyMarginJ,
  motorTransientEnvelope,
  reviewMotorContracts,
} from "../scripts/motor-validation-calculations"

describe("A7 voltage-aware PD policy engineering screen", () => {
  test("5 A advertisements remain separate from the 3 A operating request", () => {
    const review = reviewMotorContracts({
      motorVoltageV: 12,
      peakMotorCurrentA: 2.423,
      sourceCapabilities: [{ voltageV: 20, currentA: 5 }],
    })
    expect(review.motorMustRemainInhibited).toBe(false)
    expect(review.selectedContract?.requestedOperatingCurrentA).toBe(3)
    expect(review.selectedContract?.expectedMaximumCurrentA).toBe(5)
    for (const currentA of [5.01, Number.POSITIVE_INFINITY, Number.NaN])
      expect(
        reviewMotorContracts({
          motorVoltageV: 12,
          peakMotorCurrentA: 2.423,
          sourceCapabilities: [{ voltageV: 20, currentA }],
        }).motorMustRemainInhibited,
      ).toBe(true)
  })
  test("5 V uses 15 V; 9/12 V retain reserve with 20 V", () => {
    for (const motorVoltageV of [5, 9, 12] as const) {
      const review = reviewMotorContracts({
        motorVoltageV,
        peakMotorCurrentA: 2.4,
        sourceCapabilities: [
          { voltageV: 15, currentA: 3 },
          { voltageV: 20, currentA: 3 },
        ],
      })
      expect(review.selectedContract?.voltageV).toBe(
        motorVoltageV === 5 ? 15 : 20,
      )
    }
  })
  test("a low-power 20 V source fails despite enough nominal output watts", () => {
    expect(
      reviewMotorContracts({
        motorVoltageV: 5,
        peakMotorCurrentA: 2.4,
        sourceCapabilities: [{ voltageV: 20, currentA: 2.25 }],
      }).motorMustRemainInhibited,
    ).toBe(true)
  })
  test("5 V-only, native 12 V-only and unplugged sources inhibit", () => {
    for (const sourceCapabilities of [
      [],
      [{ voltageV: 5, currentA: 3 }],
      [{ voltageV: 12, currentA: 3 }],
      [{ voltageV: 15, currentA: 2 }],
    ]) {
      expect(
        reviewMotorContracts({
          motorVoltageV: 12,
          peakMotorCurrentA: 2.4,
          sourceCapabilities,
        }).motorMustRemainInhibited,
      ).toBe(true)
    }
  })
  test("20 V fallback fits a 9 V motor when 15 V is unavailable", () => {
    expect(
      reviewMotorContracts({
        motorVoltageV: 9,
        peakMotorCurrentA: 2.4,
        sourceCapabilities: [{ voltageV: 20, currentA: 3 }],
      }).selectedContract?.voltageV,
    ).toBe(20)
  })
})

describe("Motor and converter stress screening", () => {
  test("running reversal can double unrestricted startup current", () => {
    const envelope = motorTransientEnvelope({
      motorVoltageV: 12,
      windingResistanceOhms: 1.5,
      windingInductanceH: 150e-6,
      backEmfV: 12,
      currentRegulationDelayS: 3.3e-6,
      currentLimitA: 2.4,
    })
    expect(envelope.unrestrictedStartupCurrentA).toBe(8)
    expect(envelope.unrestrictedReversalCurrentA).toBe(16)
    expect(envelope.possibleReversalOvershootA).toBeCloseTo(0.528)
    expect(envelope.windingEnergyAtCurrentLimitJ).toBeCloseTo(0.000432, 6)
  })
  test("output capacitance cannot absorb the example rotor energy", () => {
    const capacitorMarginJ = capacitorEnergyMarginJ({
      effectiveCapacitanceF: 280e-6,
      initialRailV: 12,
      maximumRailV: 13.89,
    })
    const exampleRotorEnergyJ = 0.5 * 1e-5 * 300 ** 2
    expect(capacitorMarginJ).toBeCloseTo(0.00685, 5)
    expect(exampleRotorEnergyJ).toBeGreaterThan(capacitorMarginJ * 50)
  })
  test("screened inductor peaks remain below the 4.5 A minimum buck limit", () => {
    for (const outputVoltageV of [5, 9, 12]) {
      expect(
        buckInductorPeakA({
          inputVoltageV: 21,
          outputVoltageV,
          loadCurrentA: 2.4,
          minimumInductanceH: 8.2e-6 * 0.8 * 0.7,
          minimumSwitchingFrequencyHz: 600_000 * 0.9,
        }),
      ).toBeLessThan(4.5)
    }
  })
})

import { railMonitorThresholdsV } from "../scripts/motor-validation-calculations"
describe("A7 motor-rail-powered analog clamp", () => {
  test("reference stays biased and clamp has hysteresis in all selected modes", () => {
    for (const branch of [undefined, 21_000, 12_000]) {
      const result = railMonitorThresholdsV(branch)
      expect(result.referenceBiasAtNominalA).toBeGreaterThan(0.001)
      expect(result.referenceBiasResistorPowerAtTripW).toBeLessThan(0.1)
      expect(result.ovTripV).toBeGreaterThan(result.ovReleaseV)
      expect(result.ovReleaseV).toBeGreaterThan(result.nominalRailV)
      expect(result.uvV).toBeLessThan(result.nominalRailV)
      // Eight 2 W resistors still require a bounded pulse/repetition envelope.
      if (branch === 12_000)
        expect(result.instantaneousDumpPowerAtTripW).toBeGreaterThan(16)
    }
  })
})

import { dumpResistorEnvelope } from "../scripts/motor-validation-calculations"
describe("Four-branch regenerative resistor screen", () => {
  test("current headroom is retained even at the lowest clamp release", () => {
    const lowerRelease12V = railMonitorThresholdsV(12_000).ovReleaseV * 0.94
    const bank = dumpResistorEnvelope({
      railV: lowerRelease12V,
      ambientC: 70,
      pulseS: 0.1,
      periodS: 1,
    })
    expect(bank.minimumSinkCurrentA).toBeGreaterThan(2.222)
    expect(bank.maximumSinkCurrentA).toBeLessThan(4)
    expect(bank.manufacturerSingleOverloadScreenPasses).toBe(true)
    expect(bank.averageComponentScreenPasses).toBe(true)
  })
  test("a 15 V, 100 ms pulse fits the component overload screen", () => {
    const bank = dumpResistorEnvelope({
      railV: 15,
      ambientC: 70,
      pulseS: 0.1,
      periodS: 1,
    })
    expect(bank.minimumSinkCurrentA).toBeGreaterThan(2.423)
    expect(bank.worstResistorPowerW).toBeLessThan(bank.overloadPerResistorW)
    expect(bank.worstResistorAveragePowerW).toBeLessThan(2)
    expect(bank.worstResistorPulseEnergyJ).toBeLessThan(0.6)
    expect(bank.repetitivePulseHardwareQualification).toBe("pending")
  })
  test("continuous braking and excessive pulse length are rejected", () => {
    expect(
      dumpResistorEnvelope({ railV: 15, ambientC: 70, pulseS: 1, periodS: 1 })
        .averageComponentScreenPasses,
    ).toBe(false)
    expect(
      dumpResistorEnvelope({
        railV: 15,
        ambientC: 70,
        pulseS: 2.001,
        periodS: 30,
      }).manufacturerSingleOverloadScreenPasses,
    ).toBe(false)
    expect(() =>
      dumpResistorEnvelope({
        railV: 15,
        ambientC: 155,
        pulseS: 0.1,
        periodS: 1,
      }),
    ).toThrow()
  })
})
