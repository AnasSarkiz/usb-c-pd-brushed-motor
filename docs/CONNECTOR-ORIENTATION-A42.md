# Connector orientation — revision42 mechanical review

Reviewed 2026-10-04 in the native tscircuit 3D viewer, including low-angle
views from both connector edges. The official full-board GLB is retained as
`evidence/connector-orientation-baseline-A42.glb`. This is a rendered model,
not a physical prototype. Both current connector rotations are correct;
no rotation or position change is needed for their outward-facing direction.

| Connector | Supplier part | Source placement (mm) | PCB rotation | Cable/wire opening | Model inset from edge |
| --- | --- | --- | --- | --- | --- |
| J1 USB-C | C165948, TYPE-C-31-M-12 | x−34, y4 | −90° / 270° | Left, PCB −X | 0.225 mm |
| J2 motor terminal | C395849, DB126V-5.0-2P-GN-P | x34, y8 | +90° | Right, PCB +X | 1.985 mm |

The USB-C mouth faces the left edge. The motor terminal's two wire-entry
openings face the opposite edge and stand above the board; both screw heads
are accessible from above. The speed potentiometer shaft and direction lever
also remain accessible from above. The terminal may sit slightly inside the
edge because its wire openings are elevated. A flush body is not required
for the bare board; an enclosure must provide its own connector cutouts.
Actual USB plug overmold clearance, wire insertion and screwdriver access
must be checked on the physical prototype and any eventual enclosure.

J2 pin1 is MOTOR_P at PCB y≈5.50013; pin2 is MOTOR_N at y≈10.50012.
The board's + label at y5.5 and − label at y10.5 correspond to those pins.
These labels name the outputs for forward operation; reversal swaps the
electrical polarity, as required for the H-bridge.

The imported CAD models have a 180° rotation offset relative to their
footprints. Consequently J1's CAD rotation is90° and J2's is270° even though
their PCB rotations are270° and90°. The 3D openings, rather than the numerical
CAD angle alone, determine the outward direction. Native PCB centers differ
slightly from placement origins because footprint pad bounds are asymmetric.

The official GLB exporter maps PCB(x,y,z) to GLB(−x,z,y). Measured physical
model bounds are:

| Connector | PCB X range (mm) | PCB Y range (mm) | Height coordinate range (mm) |
| --- | --- | --- | --- |
| J1 | −39.7751 to−31.8751 | −0.4700 to8.4700 | −0.0500 to4.0510 |
| J2 | 30.2149 to38.0149 | 2.5913 to13.0092 | −2.7000 to11.0000 |

The board spans PCB x−40 to40. Bounds come from the transformed actual
mesh vertices, not a footprint bounding box. The opening directions are
separately established by the visual review.

Run `tooling/power-review-venv/bin/python scripts/review-connector-model-bounds.py`
to reproduce the measurements and confirm that the current connector records
still match the reviewed build. The script binds the exact GLB, baseline
circuit JSON and current connector source/footprint/model records. It fails
if a supplier model, footprint, position, rotation or board outline changes;
such a change requires another official model export and visual review.
Results: `evidence/connector-orientation-A42.json` and its companion log.

This review does not approve C165948 for fabrication: five existing imported
land gaps remain below the unchanged0.20 mm copper-clearance rule. Its supplier
replacement must pass import, datasheet, geometry and fresh 3D orientation
checks before routing. Do not inherit J1's rotation for another supplier model
without checking that model's offset and actual cable mouth.
