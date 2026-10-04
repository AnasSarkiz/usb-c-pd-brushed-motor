# USB-C pad-position correction — A44 prototype

The user explicitly authorized manual movement of individual C165948 USB-C pads,
overriding the previous no-edit requirement for this operation. All other
supplier imports retain that requirement. This part remains the same purchased
HRO TYPE-C-31-M-12; its active PCB footprint is now locally adjusted and must
not be described as an unchanged official supplier model.

The archived official source, original/adjusted hashes and every translation
are in evidence/usb-c-C165948-original-import-A44.tsx.txt and
usb-c-C165948-pad-shifts-A44.json. Twelve existing SMT lands move along footprint
X only, by at most0.000445mm. Pad size/shape/Y, solder-mask/paste derivation,
electrical mappings, mounting holes, CAD model and board connector position and
rotation are unchanged. The fine lands use0.50005mm pitch; wide power/ground
lands are translated without deforming their polygons.

The manufacturer drawing, visually reviewed on2026-10-04, specifies0.50mm fine
pitch and±0.05mm PCB-layout tolerance. All corrected pad centers remain within
that tolerance. Independent Shapely measurements find≥0.20005mm for every
adjacent land. Native full-board measurements are required separately; the
clearance threshold is still0.20mm. The original sub-rule footprint remains a
negative regression fixture rather than being silently rewritten.

Primary drawing:
https://datasheet.lcsc.com/datasheet/pdf/9e56b777c022540fcce7c7f67825f55e.pdf?productCode=C165948
Local PDF/PNG: evidence/usb-c-C165948-manufacturer-drawing-A44.*. Poppler emits
"Unknown character collection 'PDFAUTOCAD-Indentity0'"; the rendered engineering
layout, dimension labels, pin table and20V/5A rating were visually inspected.
The PDF parser diagnostic is retained; it does not invalidate the visible labels.

The drawing's20V rating does not establish21V operation under the board's20V-PD
upper tolerance budget. This remains a separate power qualification blocker.
Routing stays disabled. A pad clearance pass does not approve fabrication or
physical motor/connector operation. The body/CAD orientation remains the prior
edge-facing arrangement, while the changed footprint requires fresh inspection.
