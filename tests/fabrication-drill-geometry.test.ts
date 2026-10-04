import { expect, test } from "bun:test"
import { spawnSync } from "node:child_process"

test("manufacturing drill comparison preserves slots, rotations and physical units", () => {
  const regression = spawnSync(
    "tooling/power-review-venv/bin/python",
    [
      "-c",
      `
import math, sys
sys.path.insert(0, "scripts")
from fabrication_drill_geometry import source_drill_geometry, parsed_drill_geometry
from gerbonara.graphic_objects import Flash, Line, Region
from gerbonara.apertures import ExcellonTool
from gerbonara.utils import MM, Inch

# A one-inch centre must remain25.4mm after both position and tool conversion.
inch_flash = Flash(x=1, y=-2, aperture=ExcellonTool(diameter=.1, unit=Inch), unit=Inch)
circle = parsed_drill_geometry(inch_flash)
assert all(math.isclose(a,b) for a,b in zip(circle.bounds,(24.13,-52.07,26.67,-49.53)))
assert math.isclose(circle.centroid.x,25.4) and math.isclose(circle.centroid.y,-50.8)

# Independently specified drill trajectories on the two principal axes.
centre_x, centre_y = -3.7,2.1
for rotation, ends in [
 (0,[(centre_x,centre_y-.4),(centre_x,centre_y+.4)]),
 (90,[(centre_x-.4,centre_y),(centre_x+.4,centre_y)]),
 (180,[(centre_x,centre_y-.4),(centre_x,centre_y+.4)]),
 (270,[(centre_x-.4,centre_y),(centre_x+.4,centre_y)])]:
    source = dict(type="pcb_plated_hole", shape="pill", hole_width=.8,
                  hole_height=1.6, x=centre_x, y=centre_y, ccw_rotation=rotation)
    slot = Line(x1=ends[0][0],y1=ends[0][1],x2=ends[1][0],y2=ends[1][1],
                aperture=ExcellonTool(diameter=.8,unit=MM),unit=MM)
    expected = source_drill_geometry(source)
    exported = parsed_drill_geometry(slot)
    assert expected.hausdorff_distance(exported)<1e-12
    assert math.isclose(exported.area,.8*.8+math.pi*.4**2,rel_tol=2e-5)
    displaced = parsed_drill_geometry(Line(x1=ends[0][0]+.01,y1=ends[0][1],
                      x2=ends[1][0]+.01,y2=ends[1][1],aperture=slot.aperture,unit=MM))
    assert expected.hausdorff_distance(displaced)>.009

try: source_drill_geometry({**source,"shape":"rect"})
except ValueError: pass
else: raise AssertionError("Unsupported source drill accepted")
try: parsed_drill_geometry(Region(unit=MM))
except ValueError: pass
else: raise AssertionError("Unsupported exported drill accepted")
print("Manufacturing unit, slot and orientation regressions passed")
`,
    ],
    { encoding: "utf8" },
  )
  expect(regression.status).toBe(0)
  expect(regression.stderr).toBe("")
})
