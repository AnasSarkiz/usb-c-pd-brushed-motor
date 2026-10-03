# Requirements and reference review

Review date: 2026-10-03 (A9). Scope: schematic, manufacturer/JLCPCB BOM and unrouted component placement for one reversible brushed DC motor. This document records intent; it does not establish tested operating ratings.

## Product reference

[Amazon B09P6D5TMV](https://www.amazon.com/dp/B09P6D5TMV) identifies a BOJACK 1803BK/1803B PWM speed controller. The listing describes a switched potentiometer, startup LED, 2 A continuous output, a resettable fuse and 30 W maximum output. Its descriptive supply range is 2.2-15 V, while the title mentions lower voltages; these are seller claims, not verified performance. No reliable bare-board outline dimensions or mounting drawing were obtained. Package dimensions must not be used as board dimensions.

Our intended function remains simple motor speed and direction control. The added USB-C PD circuitry, regulator, bridge and protection consume more area than the reference's simple one-direction power stage.

## Intended board

| Requirement | Intended implementation or open decision |
|---|---|
| Motor | One brushed DC motor; selected rated voltage 5, 9 or 12 V |
| Continuous current | Approximately 2 A target; thermal and current-path validation required |
| Peak margin | Nominal 2.22 A driver chopping limit; qualified contract selected by power/current screen; 5 V accuracy and peak duration untested |
| Input | Exactly one USB-C receptacle; power input only; no USB programming interface |
| PD | STUSB4500 with approved qualification MCU; accept adequate 15/20 V contracts and regulate down; no dependence on a 12 V PDO |
| Motor output | Two-pin screw terminal wired directly to the integrated H-bridge |
| Controls | Top-access speed potentiometer and REV/OFF/FWD three-position switch |
| Indicators | Power, FWD, REV; direction indications represent commands, not measured shaft motion |
| Mechanical | Provisional 65 x 50 mm; four 3.2 mm NPTH holes on 55 x 40 mm centers; placement/fit not proven |
| Layout | USB-C left edge, motor terminal right edge, all controls on top |
| Layers | Initial two-layer FR-4, 1.6 mm thickness, 1 oz outer copper; increase area or layer/copper weight if thermal review requires it |
| Temperature | Initial supervised bench-prototype planning range 0-40 C ambient, not a verified rating |
| Simplicity | Hardware PWM; MCU only for PD/voltage qualification; no display, radio, CAN or motor sensors |
| Schematic | Eight native A4 sheets: USB/PD, input protection, buck, controls, rail monitor, dump, bridge, qualification |
| Current stage | Schematic/BOM validation; no product placement, routing, copper pours, fabrication exports or ordering |

Motor voltage is explicitly selected by the two-slider SW2 DIP: both OFF=5 V, right ON=9 V, left ON=12 V, both ON=invalid/inhibit, viewed from above with ON at the top. See SELECTOR-MECHANICS.md for the manufacturer's unnumbered lands and imported footprint mapping. Change settings only with USB unplugged. A fresh adequate fixed high-voltage contract and correct measured VM are required before drive. Turning PWM down does not replace selecting the motor's rated voltage.

## Initial fabrication rules

[JLCPCB capabilities](https://jlcpcb.com/capabilities/pcb-capabilities) was consulted. Use the following conservative project targets, not the manufacturer's extreme minimums: 0.20 mm signal trace width and copper clearance; 0.60/0.30 mm through vias; 0.30 mm ordinary minimum plated drill; 0.25 mm drill-to-drill clearance; 0.20 mm drill-to-unrelated-pad clearance; 0.50 mm copper-to-board-edge clearance. Four 3.2 mm non-plated mounting holes need 7 mm diameter fastener/body clearance regions. No blind or buried vias.

Motor and input power paths reserve 2 mm nominal copper and short lengths, plus broad ground/thermal regions after routing is authorized. This is a planning width, not an ampacity result. Actual neckdowns, pad entries, copper thickness, ambient and temperature rise must be evaluated before claiming 2 A continuous. Exact final stackup, hole tolerances and assembler eligibility remain unapproved.

## Remaining design-critical requirements

- All 54 active supplier probes build successfully on CLI 0.1.2237 and pass strict electrical-port, footprint-pad and schema checks. C5710902 and C908270 remain the unchanged supplier controls. Availability dates and exact SKU stock observations are in BOM.csv; they do not reserve JLCPCB assembly inventory.
- Imported thermal vias are accepted under the authorized board checker policy; new routed via-in-pad remains prohibited. Copper/assembler processing is still required.
- Reference-label and optional pin-metadata advisories remain individually reviewed in WARNING-REVIEW.md; the audit rejects unknown or stale advisories. No imported definition is patched.
- Official core 0.0.2069 still emits invalid display offsets. An isolated source fix passes the coordinate regression; it is not a published dependency. Product placement remains gated.
- Source capability parsing, contract generation and RDO qualification are implemented/tested as a portable policy. A complete embedded STM32/STUSB4500 port and prototype negotiation tests remain required. A 5 V-only/non-PD or insufficient source inhibits the motor.
- The power screen selects 15 V/3 A for 5/9 V, 20 V/3 A for 12 V, and permits adequate 20 V fallback for lower modes. A native 12 V PDO is never assumed. Peak input demand is checked against eFuse tolerance and source current, rather than choosing 20 V blindly.
- Buck input capacitance was corrected to two 10 µF/50 V X7R C138687 ceramics: the old nominal 2 µF bank violated TI's 3 µF effective minimum. The manufacturer-curve screen gives approximately 6.06 µF at the recorded worst-input assumptions. Output capacitance, compensation, current/thermal and load-transient qualification remain open.
- Actual motor startup/stall behavior, 5 V current-regulation accuracy, winding/inertia/back-drive bounds, both reversal directions and regenerative dump energy need prototype evidence. No universal startup/reversal guarantee or continuous braking rating is claimed.
- The 65 × 50 mm envelope is provisional. Four holes, connector/control access, bodies/courtyards and current-path widths will be checked at placement after its gates pass.

Requirements confirmation remains in progress. The continuous-current target is not a measured operating rating.
