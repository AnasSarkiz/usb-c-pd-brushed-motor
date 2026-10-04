"""Conditional pulse screen of emitted dump wires in board-world mm, +Y up.

Uses minimum taper cross sections without heat-spreading credit. It does not
qualify via barrels, pad current crowding, repeated pulses or continuous loads.
"""
import hashlib
import json
from pathlib import Path
from copper_pulse_geometry import adiabatic_trace_rise
from power_copper_geometry import measure_trace_wire_segments

artifact = Path("dist/index/circuit.json").read_bytes()
artifact_sha256 = hashlib.sha256(artifact).hexdigest()
elements = json.loads(artifact)
if sum(element["type"] == "source_component" for element in elements) != 140 or not any(element["type"] == "pcb_trace" for element in elements):
    raise ValueError("Pulse review requires the complete140-part routed artifact")
checks = json.loads(Path("evidence/native-routed-checks-A22.json").read_text())
connectivity = json.loads(Path("evidence/schematic-connectivity-audit-A22.json").read_text())
power_paths = json.loads(Path("evidence/routed-power-paths-A22.json").read_text())
for report in [checks, connectivity, power_paths]:
    if report["artifactSha256"] != artifact_sha256:
        raise ValueError("Pulse review requires identical routed-artifact evidence")
if checks["purchased"] != 140 or checks["traces"] <= 0 or checks["checks"] or connectivity["issues"]:
    raise ValueError("Pulse review requires the complete checked routed circuit")

manifest = json.loads(Path("docs/design-manifest.json").read_text())
branches = {
    "DUMP_MID_A": ("R45", "R46"),
    "DUMP_MID_B": ("R47", "R48"),
    "DUMP_MID_C": ("R69", "R70"),
    "DUMP_MID_D": ("R71", "R72"),
}
for mid_net, (first_ref, second_ref) in branches.items():
    first = next(part for part in manifest if part["ref"] == first_ref)
    second = next(part for part in manifest if part["ref"] == second_ref)
    if first["code"] != "C2991665" or second["code"] != "C2991665":
        raise ValueError("Pulse branch supplier changed; reassess resistor bounds")
    if first["pins"] != {"pin1": "VM", "pin2": mid_net} or second["pins"] != {"pin1": mid_net, "pin2": "DUMP_LOAD"}:
        raise ValueError("Pulse branch topology differs from the four-series-pair bank")

envelope_bytes = Path("evidence/power-prototype-envelope-A22.json").read_bytes()
regeneration = json.loads(envelope_bytes)["regeneration"]
shared_current_a = regeneration["bank"]["maximumSinkCurrentA"]
# All four exact resistor pairs have the same declared minimum resistance.
# V / R_pair_min = I_bank_max / 4, also bounding one low-tolerance branch
# when the other branches have a different tolerance.
branch_current_a = shared_current_a / len(branches)
net_currents_a = {"DUMP_LOAD": shared_current_a, **{net: branch_current_a for net in branches}}
intent = json.loads(Path("evidence/copper-net-map-A22.json").read_text())
net_names_by_intent = {}
for net in elements:
    if net["type"] == "source_net":
        net_names_by_intent.setdefault(intent[net["source_net_id"]], set()).add(net["name"])

sections_by_net = {net: [] for net in net_currents_a}
for trace in elements:
    if trace["type"] != "pcb_trace":
        continue
    candidates = net_names_by_intent[intent[trace["pcb_trace_id"]]] & net_currents_a.keys()
    if not candidates:
        continue
    if len(candidates) != 1:
        raise ValueError("Ambiguous dump-wire net ownership")
    net = next(iter(candidates))
    for section in measure_trace_wire_segments(trace):
        pulse = {
            "currentA": net_currents_a[net],
            "durationSeconds": regeneration["pulseS"],
            "widthMm": section["minimumWidthMm"],
            "thicknessUm": section["copperThicknessUm"],
            "resistivityOhmMetre": 3e-8,
            "densityKgPerCubicMetre": 8800,
            "specificHeatJPerKgK": 375,
            "widthFactor": .8,
            "thicknessFactor": .8,
        }
        sections_by_net[net].append({
            "trace": trace["pcb_trace_id"],
            "section": section,
            "pulse": pulse,
            "screen": adiabatic_trace_rise(pulse),
        })
for net, sections in sections_by_net.items():
    if not sections:
        raise ValueError("Missing emitted dump-wire sections: " + net)

report = {
    "revision": "A22",
    "artifactSha256": artifact_sha256,
    "powerEnvelopeSha256": hashlib.sha256(envelope_bytes).hexdigest(),
    "sharedCurrentA": shared_current_a,
    "maximumBranchCurrentA": branch_current_a,
    "maximumWireRiseKByNet": {net: max(section["screen"]["adiabaticTemperatureRiseK"] for section in sections) for net, sections in sections_by_net.items()},
    "sectionsByNet": sections_by_net,
    "sharedReturnBound": "Full bank current on every DUMP_LOAD section conservatively overbounds branch-only sections; no current-division credit",
    "status": "Conditional wire-only calculation; thermal, barrel, pad-entry, clamp-timing and repetitive braking qualification pending",
    "limitations": "Initial stored motor energy remains <=1mJ. The expanded 0.5J/20ms/10s envelope requires physical qualification; this report cannot grant it or establish continuous ampacity. Material/process reserves are engineering assumptions, not manufacturing guarantees.",
}
Path("evidence/routed-dump-pulse-A22.json").write_text(json.dumps(report, indent=2) + "\n")
print(json.dumps({key: report[key] for key in ["artifactSha256", "sharedCurrentA", "maximumBranchCurrentA", "maximumWireRiseKByNet", "status"]}, indent=2))
