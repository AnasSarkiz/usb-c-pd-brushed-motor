# A31 four-layer prototype stackup

The two-layer routing attempts 24–30 repeatedly fail in the MCU escape region.
Reset and all five remaining sensing/reference nets route in attempt30, but the
69-network phase rejects VCC3V3 in cmn146. No rejected copper is accepted.
Four layers provide additional signal corridors beneath the two outer pad rows
while preserving the 80 × 65 mm outline, 1.6 mm thickness and unchanged imports.
This is an allowed stackup adjustment under the implementation request.

The selected [JLCPCB JLC04161H-7628 stackup](https://jlcpcb.com/impedance)
has 35 µm outer copper and 15.2 µm inner copper, separated by
0.2104 / 1.065 / 0.2104 mm dielectric. Exact numeric intent is in
STACKUP-A31.json. Through vias remain 0.60 / 0.30 mm, with blind and buried
vias explicitly disabled. The original 12 thermal vias span all four copper
layers at their unchanged positions and diameters. The importer models remain
byte-exact; native via span expansion is verified against the two-layer supplier
probes. No new via-in-pad is permitted.

All four layers receive native GND pours; the signal router may use inner layers
and their cutouts must be inspected after generation. The saved buck switching
and motor terminal paths remain on top. Inner power-route resistance is
calculated using 15.2 µm, never the outer 35 µm value. Actual barrel sharing,
return continuity, power neckdowns and thermal adequacy remain required checks.

[JLCPCB capabilities](https://jlcpcb.com/capabilities/Capab) were checked
2026-10-04. The existing 0.20 mm signal/clearance, 0.25 mm drill-to-drill,
0.20 mm ordinary drill-to-pad and 0.50 mm edge rules are retained.
The extra layers raise fabrication cost. CAM acceptance of the 12 filled/capped
EP vias, short slots and manual assembly remains required before any order.
No fabrication files or hardware qualification are approved by this change.
