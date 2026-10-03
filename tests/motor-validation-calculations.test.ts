import { describe, expect, test } from "bun:test"
import {
  buckInductorPeakA,
  capacitorEnergyMarginJ,
  motorTransientEnvelope,
  reviewMotorContracts,
} from "../scripts/motor-validation-calculations"

describe("A7 voltage-aware PD policy engineering screen", () => {
  test("5/9 V peaks fit 15 V while 12 V peaks require 20 V", () => {
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
        motorVoltageV === 12 ? 20 : 15,
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
      // Four 2 W resistors require pulse-energy qualification at 12 V.
      if (branch === 12_000)
        expect(result.instantaneousDumpPowerAtTripW).toBeGreaterThan(8)
    }
  })
})
