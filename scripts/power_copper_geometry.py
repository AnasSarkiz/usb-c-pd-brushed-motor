"""Outgoing PCB wire segment metrics; widths/lengths in board-world millimetres.

Stackup-specific copper thickness, resistivity 2e-8 ohm m at the declared elevated copper temperature.
This isolated segment resistance screen does not establish temperature rise.
"""
import math
import json
from pathlib import Path

STACKUP = json.loads((Path(__file__).resolve().parent.parent / "docs/STACKUP-A31.json").read_text())
COPPER_THICKNESS_UM = {layer["name"]: layer["thicknessUm"] for layer in STACKUP["copperLayers"]}


def measure_wire_segment(segment, options=None):
    first, second = segment
    options = options or {}
    route_thickness_mode = options.get("routeThicknessMode", "constant")
    thickness_um = options.get("copperThicknessUm", 35)
    if not math.isfinite(thickness_um) or thickness_um <= 0:
        raise ValueError("Copper thickness must be finite and positive")
    length_mm = math.hypot(second["x"] - first["x"], second["y"] - first["y"])
    interpolation = first.get("width_interpolation_mode")
    if interpolation is None and route_thickness_mode == "interpolated":
        interpolation = "linear"
    if interpolation not in (None, "linear"):
        raise ValueError("Unsupported width interpolation; do not infer ampacity")
    start_width_mm = first.get("start_width", first["width"])
    end_width_mm = first.get("end_width", second["width"]) if interpolation else start_width_mm
    if not all(math.isfinite(w) and w > 0 for w in (start_width_mm, end_width_mm)):
        raise ValueError("Copper widths must be finite and positive")
    width_change_mm = end_width_mm - start_width_mm
    resistance_ohm = (2e-8 / (thickness_um * 1e-6)) * length_mm * (
        1 / start_width_mm if abs(width_change_mm) < 1e-12
        else math.log(end_width_mm / start_width_mm) / width_change_mm
    )
    if min(start_width_mm, end_width_mm) >= 1:
        length_below_1mm = 0
    elif max(start_width_mm, end_width_mm) <= 1:
        length_below_1mm = length_mm
    else:
        crossing_fraction = (1 - start_width_mm) / width_change_mm
        length_below_1mm = length_mm * (crossing_fraction if width_change_mm > 0 else 1 - crossing_fraction)
    return {
        "lengthMm": length_mm,
        "minimumWidthMm": min(start_width_mm, end_width_mm),
        "lengthBelow1mm": length_below_1mm,
        "resistanceOhm": resistance_ohm,
        "copperThicknessUm": thickness_um,
    }


def measure_trace_wire_segments(trace):
    """Measure all physical wire sections, including wire/barrel boundaries.

    Barrels themselves require a separate via resistance/ampacity screen. A
    taper ending at a barrel must specify its end width; no width is guessed.
    """
    mode = trace.get("route_thickness_mode", "constant")
    if mode not in ("constant", "interpolated"):
        raise ValueError("Unsupported trace thickness mode")
    route = trace["route"]
    if any(point["route_type"] not in ("wire", "via") for point in route):
        raise ValueError("Unsupported power copper primitive")
    measured = []
    for first, second in zip(route, route[1:]):
        if not all(math.isfinite(point[axis]) for point in (first, second) for axis in ("x", "y")):
            raise ValueError("Power copper coordinates must be finite")
        same_position = (first["x"], first["y"]) == (second["x"], second["y"])
        if first["route_type"] == second["route_type"] == "via":
            if same_position:
                continue
            raise ValueError("Power route moves between barrels without wire")
        start_layer = first["layer"] if first["route_type"] == "wire" else first["to_layer"]
        end_layer = second["layer"] if second["route_type"] == "wire" else second["from_layer"]
        if start_layer != end_layer:
            raise ValueError("Power wire changes layer without barrel")
        if same_position:
            continue
        start = first
        end = second
        if first["route_type"] == "via":
            start = {"x": first["x"], "y": first["y"], "width": second.get("start_width", second["width"])}
            # The following wire defines the constant copper at its barrel
            # entrance. Its own taper begins at that wire's outgoing segment.
            segment_mode = "constant"
        else:
            segment_mode = mode
        if second["route_type"] == "via":
            if (first.get("width_interpolation_mode") or mode == "interpolated") and "end_width" not in first:
                raise ValueError("Taper ending at barrel lacks end width")
            end = {"x": second["x"], "y": second["y"], "width": first.get("end_width", first["width"])}
        measured.append({"layer": start_layer, "start": {"x": first["x"], "y": first["y"]}, "end": {"x": second["x"], "y": second["y"]}, **measure_wire_segment([start, end], {"routeThicknessMode": segment_mode, "copperThicknessUm": COPPER_THICKNESS_UM[start_layer]})})
    return measured
