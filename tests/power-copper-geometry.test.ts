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
from power_copper_geometry import measure_wire_segment, measure_trace_wire_segments
start = {"x":0,"y":0,"width":0.2}
end = {"x":10,"y":0,"width":2}
constant = measure_wire_segment([start, end])
assert math.isclose(constant["resistanceOhm"], 2e-8/35e-6*10/.2)
assert constant["lengthBelow1mm"] == 10
linear = measure_wire_segment([{**start,"width_interpolation_mode":"linear"}, end])
assert math.isclose(linear["resistanceOhm"], 2e-8/35e-6*10*math.log(10)/1.8)
assert math.isclose(linear["lengthBelow1mm"], 10*.8/1.8)
reverse = measure_wire_segment([{**end,"width_interpolation_mode":"linear"}, start])
assert math.isclose(linear["resistanceOhm"], reverse["resistanceOhm"])
assert math.isclose(linear["lengthBelow1mm"], reverse["lengthBelow1mm"])
interpolated = measure_wire_segment([start, end], {"routeThicknessMode":"interpolated"})
assert linear == interpolated
for invalid in [{**start,"width":0},{**start,"width_interpolation_mode":"quadratic"}]:
    try: measure_wire_segment([invalid, end])
    except ValueError: pass
    else: raise AssertionError("Invalid geometry was accepted")
route = {"route":[
 {"route_type":"wire","x":0,"y":0,"width":.2,"layer":"top"},
 {"route_type":"via","x":4,"y":0,"from_layer":"top","to_layer":"bottom"},
 {"route_type":"wire","x":7,"y":0,"width":.4,"layer":"bottom"}]}
sections = measure_trace_wire_segments(route)
assert len(sections) == 2
assert [s["lengthMm"] for s in sections] == [4,3]
assert [s["minimumWidthMm"] for s in sections] == [.2,.4]
assert [s["layer"] for s in sections] == ["top","bottom"]
assert math.isclose(sum(s["resistanceOhm"] for s in sections), 2e-8/35e-6*(4/.2+3/.4))
inner_route = {"route":[{**p,"layer":"inner1"} for p in [route["route"][0], {**route["route"][0],"x":4}]]}
inner_sections = measure_trace_wire_segments(inner_route)
assert inner_sections[0]["copperThicknessUm"] == 15.2
assert math.isclose(inner_sections[0]["resistanceOhm"], 2e-8/15.2e-6*4/.2)
assert inner_sections[0]["resistanceOhm"] > sections[0]["resistanceOhm"]*2
for thickness in [0,float("nan"),-1]:
    try: measure_wire_segment([start,end], {"copperThicknessUm":thickness})
    except ValueError: pass
    else: raise AssertionError("Invalid copper thickness was accepted")
for invalid in [
 {"route":[{**route["route"][0],"y":float("nan")},*route["route"][1:]]},
 {"route":[route["route"][0],{**route["route"][1],"from_layer":"bottom"},route["route"][2]]},
 {"route":[{**route["route"][0],"width_interpolation_mode":"linear"},*route["route"][1:]]},
 {"route":[{**route["route"][0],"route_type":"arc"},*route["route"][1:]]},
 {"route":[route["route"][0],{**route["route"][0],"layer":"bottom"}]}]:
    try: measure_trace_wire_segments(invalid)
    except ValueError: pass
    else: raise AssertionError("Unsupported power geometry accepted")
print("Copper segment geometry regressions passed")
`,
    ],
    { encoding: "utf8" },
  )
  expect(checks.status).toBe(0)
  expect(checks.stderr).toBe("")
})
