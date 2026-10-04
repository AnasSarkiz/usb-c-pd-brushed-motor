# A22 revision42 — connector orientation reviewed; routing blocked

Current board:80 ×65 ×1.6mm, four layers,140 purchased components and152
native PCB components. The earlier two-layer records below are historical.
Native 3D inspection confirms USB-C opens toward the left edge and the motor
terminal toward the right, with top access to screws and controls. Source
rotations−90°/+90° are correct. See `CONNECTOR-ORIENTATION-A42.md`.

The strict current preroute copper gate fails five C165948/J1 pad gaps below
the required0.20mm clearance. Component-body placement and orientation do not
resolve those imported-land violations. Revision42 remains unrouted while a
qualified supplier replacement is sought; there is no accepted fabrication
package. The new gate prevents stale placement reports from enabling routing.

---

# A22 functional placement validated — historical review

All five native preroute checks, strict full-artifact schema, unchanged supplier
geometry, full native placement, connectivity and163 text labels pass.
Both faces and all8 A4 sheets were visually inspected. Fresh full-artifact binding
and logs are listed in the newest VALIDATION.md entry. Native component moves and
rotations reduce bypass-loop distance and keep compensation/feedback on the quiet
side of the buck. Actual routed parasitics, return paths and ampacity remain pending.

---

# A22 functional placement revision — validation in progress

The earlier geometric placement pass below is historical. A power-path review
found multiple bypass/compensation parts far from their ICs. Native placements
now relocate those parts, group the buck feedback network, and move output
ceramics beside L1. The outline, controls and supplier imports are unchanged.

The deterministic proposal screens unchanged supplier courtyards against a
0.25 mm separation, fastener reservations and control-access regions. Actual
supply-pin distances and chosen positions are recorded in
`evidence/local-decoupling-proposal-A22.json`. This is planning evidence, not
a routed parasitic or thermal pass. The 100 nF buck input bypass is 2.486 mm
from VIN; the two output ceramics are 3.647/4.307 mm from L1 output; the
bridge VM bypass is 4.392 mm from its supply pin. The wider input ceramics
remain bulk branches; their real switching-loop return paths need copper review.

Fresh native source checks, full-artifact audits, labels and both-face visual
review are required before routing resumes.

---

# A22 product placement — validated before routing

Native numeric manualEdits place all 140 purchased components on an 80 × 65 mm,
2-layer, 1.6 mm board. This enlarges the former unplaced 65 × 50 mm estimate for
actual body, shaft, switch, dump-bank and probe clearance. Four native 3.2 mm
NPTH holes are at (±35, ±27.5) mm: 70 × 55 mm centers, with 7 mm top/bottom
fastener reservations. Supplier definitions remain byte-exact imports.

USB-C faces the left edge, the motor terminal faces right, speed/direction/voltage
controls and three LEDs face upward. Actual knob clearance reserves 16 mm around
the offset shaft center; switch access reserves 12 mm. Buck diode, inductor,
bootstrap/input/bypass capacitors and H-bridge bypass have explicit nearby
coordinates. Dump resistors occupy the lower perimeter away from controls.

Seven supplier-backed contacts expose programming/reset/GND and 3V3/VBUS/VM.
Probe and operator legend regions are reserved before placing remaining parts.
Imported reference artwork is moved by native board styling to a complete bottom
reference map; front operational legends are enlarged and separated. No imported
symbol, footprint, pin map or copper is manually changed.

All140 purchased components, four mounting holes and12 original EP vias pass
fresh native checks and strict supplier-transform/pad/port geometry checks.
The final board contains4939 records, including152 PCB component records
(140 purchased plus12 imported via-associated records) and six NPTH features.
162 legends pass ink/pad/edge checks. Both placement faces and all eight current
schematic sheets were actually inspected. Accepted imported metadata advisories
remain bound to exact messages and import hashes. The prerequisite artifact
is archived with zero PCB traces.

Routing may now begin for the explicitly limited diagnostic engineering prototype.
No measured continuous-current/thermal rating is claimed. New routed via-in-pad
remains prohibited; imported EP vias use the declared fill/cap assembly process.

NRST contact refinement (A22 iteration16, validation passed): the close
(-12.8,-4.5)/90 candidate failed unchanged supplier courtyard checks and was
rejected. The new candidate is(-19.75,3.25)/90 above the MCU, with its operator
NRST label at(-20.2,6.5), with TP3 retained on the underside. All other component placements remain unchanged.
