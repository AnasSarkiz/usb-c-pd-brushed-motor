import { expect, test } from "bun:test"
import { spawnSync } from "node:child_process"

test("physical copper spacing preserves layers, via boundaries and linear tapers", () => {
  const regression = spawnSync(
    "tooling/power-review-venv/bin/python",
    [
      "-c",
      `
import sys, math
sys.path.insert(0, 'scripts')
from copper_clearance_geometry import wire_copper_segments
wire = lambda x,y,width,layer: dict(route_type='wire',x=x,y=y,width=width,layer=layer)
horizontal = {'route':[wire(0,0,.2,'top'),wire(2,0,.2,'top')]}
parallel = {'route':[wire(0,.35,.2,'top'),wire(2,.35,.2,'top')]}
first = wire_copper_segments(horizontal)[0]
second = wire_copper_segments(parallel)[0]
assert math.isclose(first['geometry'].distance(second['geometry']), .15)
taper = {'route':[dict(**wire(0,0,.2,'top'),start_width=.2,end_width=1,width_interpolation_mode='linear'),wire(2,0,1,'top')]}
shape = wire_copper_segments(taper)[0]
assert math.isclose(shape['geometry'].area, 1.2)
assert shape['minimumWidthMm'] == .2
rotated = {'route':[dict(**wire(0,0,.2,'top'),start_width=.2,end_width=1,width_interpolation_mode='linear'),wire(0,2,1,'top')]}
assert math.isclose(wire_copper_segments(rotated)[0]['geometry'].area, 1.2)
via = dict(route_type='via',x=1,y=0,from_layer='top',to_layer='bottom')
segments = wire_copper_segments({'route':[wire(0,0,.2,'top'),via,wire(2,0,.4,'bottom')]})
assert [segment['layer'] for segment in segments] == ['top','bottom']
assert [segment['minimumWidthMm'] for segment in segments] == [.2,.4]
for invalid in [
    {'route':[wire(0,0,.2,'top'),wire(1,0,.2,'bottom')]},
    {'route':[wire(0,0,float('nan'),'top'),wire(1,0,.2,'top')]},
    {'route':[dict(**wire(0,0,.2,'top'),start_width=.2,end_width=1,width_interpolation_mode='quadratic'),wire(1,0,1,'top')]},
    {'route':[dict(**wire(0,0,.2,'top'),start_width=.2,width_interpolation_mode='linear'),via]},
]:
    try: wire_copper_segments(invalid)
    except ValueError: pass
    else: raise AssertionError('Invalid or unsupported copper was accepted')
print('Physical copper clearance regression passed')
`,
    ],
    { encoding: "utf8" },
  )
  expect(regression.status).toBe(0)
  expect(regression.stderr).toBe("")
})
