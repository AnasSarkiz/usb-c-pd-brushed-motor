import { expect, test } from "bun:test"
import { spawnSync } from "node:child_process"

test("power copper metrics integrate tapers and reject unsupported geometry", () => {
  const checks = spawnSync(
    "python3",
    [
      "-c",
      `
import sys, math
sys.path.insert(0, "scripts")
from power_copper_geometry import measure_wire_segment
start = {"x":0,"y":0,"width":0.2}
end = {"x":10,"y":0,"width":2}
constant = measure_wire_segment(start, end)
assert math.isclose(constant["resistanceOhm"], 2e-8/35e-6*10/.2)
assert constant["lengthBelow1mm"] == 10
linear = measure_wire_segment({**start,"width_interpolation_mode":"linear"}, end)
assert math.isclose(linear["resistanceOhm"], 2e-8/35e-6*10*math.log(10)/1.8)
assert math.isclose(linear["lengthBelow1mm"], 10*.8/1.8)
reverse = measure_wire_segment({**end,"width_interpolation_mode":"linear"}, start)
assert math.isclose(linear["resistanceOhm"], reverse["resistanceOhm"])
assert math.isclose(linear["lengthBelow1mm"], reverse["lengthBelow1mm"])
interpolated = measure_wire_segment(start, end, "interpolated")
assert linear == interpolated
for invalid in [{**start,"width":0},{**start,"width_interpolation_mode":"quadratic"}]:
    try: measure_wire_segment(invalid, end)
    except ValueError: pass
    else: raise AssertionError("Invalid geometry was accepted")
print("Copper segment geometry regressions passed")
`,
    ],
    { encoding: "utf8" },
  )
  expect(checks.status).toBe(0)
  expect(checks.stderr).toBe("")
})
