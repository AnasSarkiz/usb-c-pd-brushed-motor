import { expect, test } from "bun:test"
import { analogRailCorners } from "../scripts/power-prototype-envelope"
import { i2cTimingEnvelope } from "../scripts/i2c-timing-envelope"
test("every declared analog corner remains separated from the conservative buck FB window", () => {
  for (const branch of [undefined, 21000, 12000]) {
    const limits = analogRailCorners(branch)
    expect(limits.cases).toBe(16384)
    expect(limits.uvFbMax).toBeLessThan(0.788)
    expect(limits.ovFbMin).toBeGreaterThan(0.812)
    expect(limits.minHysteresis).toBeGreaterThan(0)
    expect(limits.minReferenceBiasA).toBeGreaterThanOrEqual(0.0007)
  }
})
test("I2C timing accepts its declared envelope and rejects excessive rise time", () => {
  expect(i2cTimingEnvelope().passed).toBe(true)
  expect(i2cTimingEnvelope({ riseMaximumNs: 350 }).passed).toBe(false)
  expect(i2cTimingEnvelope({ timingRegister: 0x00000000 }).passed).toBe(false)
})
