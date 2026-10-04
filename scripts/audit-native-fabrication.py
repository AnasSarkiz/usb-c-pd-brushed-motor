"""Parse and render native Gerber/Excellon output without changing its geometry.

Board-world mm, +X right/+Y up. Export must retain that frame on every layer
and drill file. This local review does not substitute for assembler CAM approval.
"""
import argparse
import hashlib
import json
import math
import warnings
import zipfile
from pathlib import Path
from gerbonara import GerberFile, ExcellonFile
from gerbonara.utils import MM
from shapely.ops import unary_union
from fabrication_drill_geometry import parsed_drill_geometry, source_drill_geometry

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--native-zip", required=True)
parser.add_argument("--output", required=True)
parser.add_argument("--artifact", default="dist/index/circuit.json")
arguments = parser.parse_args()
artifact = Path(arguments.artifact).read_bytes()
artifact_sha256 = hashlib.sha256(artifact).hexdigest()
elements = json.loads(artifact)
if sum(element["type"] == "source_component" for element in elements) != 140 or not any(element["type"] == "pcb_trace" for element in elements):
    raise ValueError("Fabrication review requires the complete140-part routed artifact")
checks = json.loads(Path("evidence/native-routed-checks-A22.json").read_text())
if checks["artifactSha256"] != artifact_sha256 or checks["purchased"] != 140 or checks["traces"] <= 0 or checks["checks"]:
    raise ValueError("Fabrication review requires the identical checked full routed circuit")
board = next(element for element in elements if element["type"] == "pcb_board")
if board["num_layers"] != 4 or board["width"] != 80 or board["height"] != 65:
    raise ValueError("Manufacturing stack or outline differs from the reviewed board")
output = Path(arguments.output)
if output.exists():
    raise ValueError("Keep prior fabrication reviews; use a fresh output directory")
output.mkdir(parents=True)
required_names = {
    "F_Cu.gbr", "In1_Cu.gbr", "In2_Cu.gbr", "B_Cu.gbr",
    "F_Mask.gbr", "B_Mask.gbr", "F_Paste.gbr", "B_Paste.gbr",
    "F_SilkScreen.gbr", "B_SilkScreen.gbr", "Edge_Cuts.gbr", "F_Fab.gbr",
    "drill-L1-L4.drl", "drill_npth.drl", "bom.csv", "pick_and_place.csv",
}
archive_path = Path(arguments.native_zip)
file_reports = []
parsed_drills = {}
with zipfile.ZipFile(archive_path) as archive:
    if set(archive.namelist()) != required_names or len(archive.namelist()) != len(required_names):
        raise ValueError("Native archive has missing, unexpected or different-span manufacturing files")
    for name in sorted(required_names):
        raw = archive.read(name)
        path = output / name
        path.write_bytes(raw)
        report = {"name": name, "sha256": hashlib.sha256(raw).hexdigest(), "bytes": len(raw)}
        if name.endswith((".gbr", ".drl")):
            with warnings.catch_warnings(record=True) as diagnostics:
                warnings.simplefilter("always")
                parsed = GerberFile.open(path) if name.endswith(".gbr") else ExcellonFile.open(path)
            report.update({"objectCount": len(parsed.objects), "boundsMm": parsed.bounding_box(MM), "parserDiagnostics": [str(diagnostic.message) for diagnostic in diagnostics]})
            svg = str(parsed.to_svg(force_bounds=((-41, -33.5), (41, 33.5)), arg_unit=MM, svg_unit=MM))
            (output / (name + ".svg")).write_text(svg)
            report["svgSha256"] = hashlib.sha256(svg.encode()).hexdigest()
            if name.endswith(".drl"):
                parsed_drills[name] = unary_union([parsed_drill_geometry(hole) for hole in parsed.objects])
        file_reports.append(report)

drill_reviews = []
for name, source_types in [("drill-L1-L4.drl", ["pcb_plated_hole", "pcb_via"]), ("drill_npth.drl", ["pcb_hole"])]:
    source_holes = [element for element in elements if element["type"] in source_types]
    source_shapes = [source_drill_geometry(hole) for hole in source_holes]
    source_geometry = unary_union(source_shapes)
    deviation_mm = source_geometry.hausdorff_distance(parsed_drills[name])
    largest_radius_mm = max(min(shape.bounds[2] - shape.bounds[0], shape.bounds[3] - shape.bounds[1]) / 2 for shape in source_shapes)
    # Native CLI0.1.2237 writes G85 ends to3 decimal mm, normal drill
    # centres to4 and tool diameters to6. The coordinate bound is diagonal
    # half-LSB at3 decimals; reserve tool-radius rounding plus polygon sag.
    # This bound describes representation rounding, not clearance acceptance.
    quantization_bound_mm = math.sqrt(2) * .0005 + .0000005 + largest_radius_mm * (1 - math.cos(math.pi / 512))
    if deviation_mm > quantization_bound_mm:
        raise ValueError("Exported drill geometry exceeds the native coordinate/tool quantization bound: " + name)
    drill_reviews.append({"name": name, "sourceDrillCount": len(source_holes), "hausdorffDeviationMm": deviation_mm, "maximumExportQuantizationDeviationMm": quantization_bound_mm, "basis": "sqrt(2)*0.0005mm G85 half-LSB +0.0000005mm tool-radius reserve +128-quadrant polygon sag; clearance checks remain separate"})

report = {
    "revision": "A22", "artifactSha256": artifact_sha256,
    "nativeZipSha256": hashlib.sha256(archive_path.read_bytes()).hexdigest(),
    "parser": "gerbonara1.6.3", "files": file_reports, "drillGeometry": drill_reviews,
    "status": "Parsed native files and source-equivalent drills; all SVGs require visual inspection and manufacturer CAM acceptance remains pending",
    "parserDiagnosticPolicy": "Every diagnostic retained for explicit review; none suppressed. Geometry matching does not approve a parser warning automatically.",
}
(output / "manufacturing-review.json").write_text(json.dumps(report, indent=2) + "\n")
print(json.dumps({"artifactSha256": artifact_sha256, "files": len(file_reports), "drillGeometry": drill_reviews, "status": report["status"]}, indent=2))
