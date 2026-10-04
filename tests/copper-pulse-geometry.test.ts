import { expect, test } from "bun:test"
import { spawnSync } from "node:child_process"

test("pulse copper screen preserves SI energy balance and rejects invalid manufacturing inputs", () => {
  const regression = spawnSync(
    "python3",
    [
      "-c",
      `
import sys, math
sys.path.insert(0, "scripts")
from copper_pulse_geometry import adiabatic_trace_rise
pulse = dict(currentA=4, durationSeconds=.02, widthMm=.5, thicknessUm=35,
             resistivityOhmMetre=3e-8, densityKgPerCubicMetre=8800,
             specificHeatJPerKgK=375, widthFactor=.8, thicknessFactor=.8)
report = adiabatic_trace_rise(pulse)
# Independent one-millimetre specimen: electrical Joule energy / copper mass heat.
area = .0004 * .000028
resistance = 3e-8 * .001 / area
mass = 8800 * area * .001
rise = 4**2 * resistance * .02 / (mass * 375)
assert math.isclose(report["crossSectionSquareMetres"], area)
assert math.isclose(report["adiabaticTemperatureRiseK"], rise)
inner = adiabatic_trace_rise({**pulse,"thicknessUm":15.2})
assert inner["adiabaticTemperatureRiseK"] > rise * 5
for field in pulse:
    for invalid in [0,-1,float("nan"),float("inf")]:
        try: adiabatic_trace_rise({**pulse,field:invalid})
        except ValueError: pass
        else: raise AssertionError("Invalid pulse input accepted: " + field)
for field in ["widthFactor","thicknessFactor"]:
    try: adiabatic_trace_rise({**pulse,field:1.01})
    except ValueError: pass
    else: raise AssertionError("Manufacturing reserve enlarged copper")
print("Independent SI pulse-energy regression passed")
`,
    ],
    { encoding: "utf8" },
  )
  expect(regression.status).toBe(0)
  expect(regression.stderr).toBe("")
})
