# A45 USB-C input replacement — unrouted engineering prototype

2026-10-05. J1 now uses GCT USB4105-GF-A-120, C5184243. The manufacturer's
revisionB3 drawing specifies48VDC and5A collectively for VBUS. This resolves
C165948's undocumented21V qualification: the existing maximum fixed-PD
budget is21V. The board continues requesting only qualified15/20V contracts;
48V connector capability does not enable EPR or change motor/current limits.
The5/9/12V selector, hardware PWM, bridge, protection and PD policy are unchanged.

Primary drawing:
https://datasheet.lcsc.com/datasheet/pdf/687e8b71770b993c45d88a98b2aa83d3.pdf?productCode=C5184243
Manufacturer specification: https://gct.co/connector/usb4105
Assembly listing: https://jlcpcb.com/partdetail/GCT-USB4105_GF_A120/C5184243
JLC lists Economic/Standard SMT and high assembly difficulty. The official
importer's search service observes4592 available; LCSC observes1134 on the
same date. These are separate snapshots, not reserved stock or an order.

## Electrical mapping and supplier geometry

The official exact-footprint import succeeds with16 electrical pins: four
shell contacts, two combined GND contacts, two combined VBUS contacts, CC1/CC2,
and six intentionally unused data/SBU contacts. Board mapping:

| Pins | Connection |
| --- | --- |
| 1–4 | Shell → GND |
| 5,7 | Combined GND contacts → GND |
| 6,8 | Combined VBUS contacts → VBUS |
| 9 | CC2 |
| 15 | CC1 |
| 10,11,12,13,14,16 | Deliberately NC |

Every electrical pin has its expected native PCB port and land. Two0.65mm
locating holes are non-electrical. Four shell slots match the manufacturer's
0.60mm width,1.40/1.70mm hole lengths,1.00mm land width,1.80/2.10mm land
lengths,8.64mm lateral span and4.18mm longitudinal pitch. Manufacturer PCB
layout tolerance is±0.05mm. Independent source/probe review checks these
measurements and preserves the manufacturer's contact assignments.

The earlier user instruction to move individual USB-C pads is applied to this
replacement connector as well. The unmodified official import is archived with
SHA256bfc396fc889c4dd3a1e8d5977c482db3060ed772cbd913a62b0fcb4959d3fc29.
Only twelve SMT X coordinates move, by at most0.000381mm. All sizes, shapes,
Y positions, pin mappings, holes, shell slots and imported CAD definition stay
unchanged. Minimum adjacent gap is0.20005mm. The0.20mm rule is unchanged;
the archived original must fail the regression. This is openly a locally
adjusted supplier footprint, not an unchanged official import. Other active
supplier definitions stay unchanged. C165948 remains archived/inactive for
historical evidence and its existing regression.

## Placement and 3D review

J1's source pose is X−34.7650644mm,Y4mm,rotation−90°. This places the
manufacturer-recommended board edge7.35mm ahead of the SMT land row exactly at
PCB X−40mm. The USB mouth faces negativeX/left; J2 remains positiveX/right
with screws accessible above. Current native PCB rendering and native GLB
triangle views were inspected. All other component placements are unchanged.

An initial comparison incorrectly treated overall model extents as housing
size. The7.90mm length includes contact tails and the4.10mm height includes
mounting stakes. The metal shell is7.30mm long and3.10mm above the PCB,
consistent with the drawing's7.35/3.31mm within its general±0.30mm tolerance.
The model's stake depth and approximately0.425mm origin offset are approximate;
it is accepted for orientation and surrounding-body review only. The exact120
SKU drawing specifies1.20±0.15mm stakes. Imported PCB lands/drills and the
manufacturer drawing govern precise assembly/edge fit, independently of CAD.
No model is patched. Plug/enclosure/sample fit still requires physical review.
The final build regenerates identifiers; connector source, GLB node poses and
rotations are independently verified unchanged from the exported model review.

## Paste and assembly limits

The native probe contains12 SMT paste shapes and8 positive shell-slot paste
shapes, four per side. Strict Circuit JSON schema passes; no negative dimensions
or invalid pill radius remains. Independent Gerbonara parsing of both native
paste files produces no diagnostics. These are valid geometry, not the former
solder-paste importer defect. Final stencil-side selection and shell-tab
reflow/pin-in-paste processing require assembly review before fabrication.
Probe Gerbers are diagnostic evidence, not an approved fabrication package.

## Validation and remaining stages

The full140-part/58-supplier,152-placement board stays routing-disabled with
zero PCB traces.44 configured tests/476 assertions, formatting, TypeScript,
power calculations, all five required native checks and eight independent
schema/import/transform/connectivity/placement/target/artwork/PnP checks pass.
All91 generated metadata advisories and57 pin-specification notices remain
visible. The three J1 metadata advisories are reviewed against the actual
passive-connector pin roles. Regenerated identifiers are retained; warning
content/roles are compared rather than treating stale identifiers as approval.
An initial missing warning-review attempt and a stopped long audit driver are
recorded; connectivity and placement were subsequently completed independently.

Final native artifact SHA256:
ef7db1d278365d982e844ba166444354492dee501ae500b747d1919e13b1d1fe.
Fresh full-board copper review has505 primitives and zero clearance issues.
Physical measurements, motor startup/stall/reversal/thermal tests, assembly
approval, complete approved motor-enabled firmware provisioning and fabrication
outputs remain pending. Neither connector qualification nor publication proves
2A continuous hardware operation. Routing remains disabled as instructed.
