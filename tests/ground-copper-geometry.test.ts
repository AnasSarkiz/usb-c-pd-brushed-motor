import { expect, test } from "bun:test"
import { spawnSync } from "node:child_process"

test("physical ground connectivity preserves islands, layers and pour cutouts", () => {
  const regression = spawnSync(
    "tooling/power-review-venv/bin/python",
    [
      "-c",
      `
import sys
sys.path.insert(0, 'scripts')
from ground_copper_geometry import ground_islands, pad_roots, pour_geometry, checked_polygon
import importlib.util
spec = importlib.util.spec_from_file_location('ground_audit', 'scripts/audit-ground-copper.py')
ground_audit = importlib.util.module_from_spec(spec)
spec.loader.exec_module(ground_audit)
from shapely.geometry import box, Point
left = box(-2,-1,-1,1)
right = box(1,-1,2,1)
pad = {'layers':['top'], 'geometry':left}
isolated = ground_islands({'top':[left,right]}, [])
assert len(set(isolated[1])) == 2
assert len(pad_roots(pad, isolated)) == 1
separate_layers = ground_islands({'top':[left], 'bottom':[left]}, [])
assert len(set(separate_layers[1])) == 2
barrel = {'layers':['top','bottom'], 'geometry':Point(-1.5,0).buffer(.3).difference(Point(-1.5,0).buffer(.15))}
joined = ground_islands({'top':[left], 'bottom':[left]}, [barrel])
assert len(set(joined[1])) == 1
four_layers = {layer:[left] for layer in ['top','inner1','inner2','bottom']}
incomplete_barrel = ground_islands(four_layers, [barrel])
assert len(set(incomplete_barrel[1])) == 3
through_barrel = {**barrel, 'layers':list(four_layers)}
complete_stack = ground_islands(four_layers, [through_barrel])
assert len(set(complete_stack[1])) == 1
assert pad_roots({'layers':['inner1'], 'geometry':left}, complete_stack) == pad_roots(pad, complete_stack)
missed = ground_islands({'top':[left], 'bottom':[right]}, [barrel])
assert len(set(missed[1])) == 2
vertices = lambda pts: [{'x':x,'y':y} for x,y in pts]
pour = pour_geometry({'shape':'brep','brep_shape':{'outer_ring':{'vertices':vertices([(-2,-2),(2,-2),(2,2),(-2,2)])}, 'inner_rings':[{'vertices':vertices([(-1,-1),(1,-1),(1,1),(-1,1)])}]}})
assert pour.area == 12 and not pour.intersects(Point(0,0))
for invalid in [[(0,0),(1,1),(0,1),(1,0)], [(0,0),(float('nan'),1),(1,0)]]:
    try: checked_polygon(vertices(invalid))
    except ValueError: pass
    else: raise AssertionError('Invalid polygon accepted')
wire = {'route_type':'wire','x':0,'y':0,'width':.2,'layer':'top'}
via = {'route_type':'via','x':1,'y':0,'from_layer':'top','to_layer':'bottom'}
finish = {'route_type':'wire','x':2,'y':0,'width':.2,'layer':'bottom'}
segments = ground_audit.trace_copper({'route':[wire,via,finish]})
assert [layer for layer, copper in segments] == ['top','bottom']
assert all(copper.area > .2 for layer, copper in segments)
for invalid in [
    {'route':[wire, {**finish,'layer':'bottom'}]},
    {'route':[wire, {**via,'route_type':'arc'}]},
    {'route':[wire,via,{**finish,'width':0}]},
    {'route':[wire,via,finish], 'route_thickness_mode':'interpolated'},
]:
    try: ground_audit.trace_copper(invalid)
    except ValueError: pass
    else: raise AssertionError('Unsupported or invalid ground route accepted')
print('Physical ground connectivity regressions passed')
`,
    ],
    { encoding: "utf8" },
  )
  expect(regression.status).toBe(0)
  expect(regression.stderr).toBe("")
})
