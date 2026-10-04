"""Independent drill geometry in board-world millimetres, +X right/+Y up.

No transformation or unit repair is applied to exporter output. Parsed files
must already agree with Circuit JSON. Capsules include their round drill ends.
"""
import math
from gerbonara.graphic_objects import Flash, Line
from gerbonara.utils import MM
from shapely.geometry import Point, LineString
from shapely.affinity import rotate, translate


def parsed_drill_geometry(drill):
    if not isinstance(drill, (Flash, Line)):
        raise ValueError("Unsupported exported drill primitive; explicit review required")
    hole = drill.converted(MM)
    diameter_mm = MM(drill.aperture.diameter, drill.aperture.unit)
    if not math.isfinite(diameter_mm) or diameter_mm <= 0:
        raise ValueError("Invalid exported drill diameter")
    if isinstance(hole, Flash):
        return Point(hole.x, hole.y).buffer(diameter_mm / 2, quad_segs=128)
    if isinstance(hole, Line):
        return LineString([(hole.x1, hole.y1), (hole.x2, hole.y2)]).buffer(diameter_mm / 2, quad_segs=128)
    raise ValueError("Unsupported exported drill primitive; explicit review required")


def source_drill_geometry(hole):
    if hole["type"] == "pcb_via":
        shape = "circle"
    else:
        shape = hole["hole_shape"] if hole["type"] == "pcb_hole" else hole["shape"]
    if shape == "circle":
        geometry = Point(0, 0).buffer(hole["hole_diameter"] / 2, quad_segs=128)
    elif shape in ["pill", "rotated_pill"]:
        width_mm, height_mm = hole["hole_width"], hole["hole_height"]
        radius_mm = min(width_mm, height_mm) / 2
        if width_mm >= height_mm:
            ends = [(-width_mm / 2 + radius_mm, 0), (width_mm / 2 - radius_mm, 0)]
        else:
            ends = [(0, -height_mm / 2 + radius_mm), (0, height_mm / 2 - radius_mm)]
        geometry = LineString(ends).buffer(radius_mm, quad_segs=128)
    else:
        raise ValueError("Unsupported source drill shape; explicit review required")
    return translate(rotate(geometry, hole.get("ccw_rotation", 0), origin=(0, 0)), hole["x"], hole["y"])
