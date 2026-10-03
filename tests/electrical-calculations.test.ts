import { describe, expect, test } from "bun:test"
import {
  chooseMotorContract,
  motorInputCurrentA,
  pwmTiming,
  regulatedMotorVoltageV,
} from "../scripts/electrical-calculations"

describe("PD power qualification", () => {
  test("rejects insufficient chargers including native 12 V", () => {
    for (const capability of [
      { voltageV: 5, currentA: 3 },
      { voltageV: 9, currentA: 3 },
      { voltageV: 12, currentA: 3 },
      { voltageV: 15, currentA: 2 },
      { voltageV: 20, currentA: 2.25 },
    ]) {
      expect(
        chooseMotorContract([capability], { motorVoltageV: 12 }),
      ).toBeNull()
    }
  })
  test("selects 20 V for 12 V peaks and 15 V for 9 V peaks", () => {
    expect(
      chooseMotorContract(
        [
          { voltageV: 15, currentA: 3 },
          { voltageV: 20, currentA: 3 },
        ],
        { motorVoltageV: 12 },
      ),
    ).toEqual({ voltageV: 20, currentA: 3 })
    expect(
      chooseMotorContract([{ voltageV: 15, currentA: 3 }], {
        motorVoltageV: 9,
      }),
    ).toEqual({
      voltageV: 15,
      currentA: 3,
    })
  })
  test("a 5 A source retains a 3 A operating request and malformed currents fail", () => {
    expect(
      chooseMotorContract([{ voltageV: 20, currentA: 5 }], {
        motorVoltageV: 12,
      }),
    ).toEqual({
      voltageV: 20,
      currentA: 3,
    })
    for (const currentA of [5.01, Number.POSITIVE_INFINITY, Number.NaN])
      expect(
        chooseMotorContract([{ voltageV: 20, currentA }], {
          motorVoltageV: 12,
        }),
      ).toBeNull()
  })
  test("worst assumed 12 V continuous input fits minimum eFuse limit", () => {
    const minimumLimitA = ((18_000 / 7_150) * 0.9) / 1.01
    expect(
      motorInputCurrentA({
        motorVoltageV: 12,
        motorCurrentA: 2,
        contractVoltageV: 20,
      }),
    ).toBeLessThan(minimumLimitA)
    // Record the real limitation instead of asserting a fictitious peak margin.
    expect(
      motorInputCurrentA({
        motorVoltageV: 12,
        motorCurrentA: 2.4,
        contractVoltageV: 15,
      }),
    ).toBeGreaterThan(minimumLimitA)
    expect(
      motorInputCurrentA({
        motorVoltageV: 12,
        motorCurrentA: 2.4,
        contractVoltageV: 20,
      }),
    ).toBeLessThan(minimumLimitA)
  })
})

describe("10 k potentiometer and selected motor rail", () => {
  test("regulates all three modes within 0.1 percent nominal", () => {
    for (const [branchOhms, voltageV] of [
      [undefined, 5],
      [21_000, 9],
      [12_000, 12],
    ] as const) {
      expect(
        Math.abs(regulatedMotorVoltageV(branchOhms) - voltageV) / voltageV,
      ).toBeLessThan(0.0011)
    }
  })
  test("PWM has useful monotonically increasing range with finite end times", () => {
    let previousDuty = 0
    for (let step = 0; step <= 100; step++) {
      const timing = pwmTiming({ fraction: step / 100 })
      expect(timing.frequencyHz).toBeGreaterThan(19_000)
      expect(timing.frequencyHz).toBeLessThan(22_000)
      expect(timing.dutyFraction).toBeGreaterThan(previousDuty)
      previousDuty = timing.dutyFraction
    }
    expect(pwmTiming({ fraction: 0 }).dutyFraction).toBeLessThan(0.04)
    expect(pwmTiming({ fraction: 1 }).dutyFraction).toBeGreaterThan(0.96)
  })
})

test("PD-enable default high survives transistor base loading", () => {
  // Conservative -2% logic rail, +/-1% resistors, 0.55 V base junction,
  // and 5 uA combined leakage. Compare with 0.7*VDD GPIO high threshold.
  const supply = 3.3 * 0.98
  const pullup = 4_700 * 1.01
  const baseResistance = 20_000 * 0.99
  const unloadedHigh =
    (supply * baseResistance + 0.55 * pullup) / (pullup + baseResistance)
  const thevenin = 1 / (1 / pullup + 1 / baseResistance)
  expect(unloadedHigh - 5e-6 * thevenin).toBeGreaterThan(supply * 0.7 + 0.3)
  const minimumBaseCurrent = (supply - 0.9) / ((4_700 + 20_000) * 1.01)
  const maximumCollectorCurrent = (3.3 * 1.02) / (10_000 * 0.99)
  expect(minimumBaseCurrent * 10).toBeGreaterThan(maximumCollectorCurrent)
})
