"""Outgoing PCB wire segment metrics; widths/lengths in board-world millimetres.

35 um copper, resistivity 2e-8 ohm m at the declared elevated copper temperature.
This isolated segment resistance screen does not establish temperature rise.
"""
import math


def measure_wire_segment(first, second, route_thickness_mode="constant"):
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
    resistance_ohm = (2e-8 / 35e-6) * length_mm * (
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
    }
