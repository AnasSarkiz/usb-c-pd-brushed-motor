"""Conditional adiabatic copper pulse screen, SI units at the boundary.

Joule energy / isolated copper heat capacity gives an upper screen without
credit for laminate, pads, planes or longitudinal heat spreading. This screen
cannot establish continuous ampacity, terminal/via current crowding or repeated
pulse temperature. Material reserves and manufacturing dimensions are explicit.
Primary material sources are recorded in docs/COPPER-PULSE-REVIEW-A38.md.
"""
import math


def adiabatic_trace_rise(pulse):
    required = ["currentA", "durationSeconds", "widthMm", "thicknessUm",
                "resistivityOhmMetre", "densityKgPerCubicMetre", "specificHeatJPerKgK",
                "widthFactor", "thicknessFactor"]
    for field in required:
        magnitude = pulse[field]
        if not math.isfinite(magnitude) or magnitude <= 0:
            raise ValueError("Positive finite copper pulse input required: " + field)
    if pulse["widthFactor"] > 1 or pulse["thicknessFactor"] > 1:
        raise ValueError("Manufacturing reserves cannot enlarge copper")
    area_square_metres = (pulse["widthMm"] * 1e-3 * pulse["widthFactor"] *
                          pulse["thicknessUm"] * 1e-6 * pulse["thicknessFactor"])
    rise_kelvin = (pulse["currentA"] ** 2 * pulse["durationSeconds"] *
                   pulse["resistivityOhmMetre"] /
                   (pulse["densityKgPerCubicMetre"] * pulse["specificHeatJPerKgK"] *
                    area_square_metres ** 2))
    return {"crossSectionSquareMetres": area_square_metres,
            "adiabaticTemperatureRiseK": rise_kelvin}
