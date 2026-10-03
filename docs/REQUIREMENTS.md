# Requirements and reference review

Review date: 2026-10-02. Scope: schematic, manufacturer/JLCPCB BOM and unrouted component placement for one reversible brushed DC motor. This document records intent; it does not establish tested operating ratings.

## Product reference

[Amazon B09P6D5TMV](https://www.amazon.com/dp/B09P6D5TMV) identifies a BOJACK 1803BK/1803B PWM speed controller. The listing describes a switched potentiometer, startup LED, 2 A continuous output, a resettable fuse and 30 W maximum output. Its descriptive supply range is 2.2-15 V, while the title mentions lower voltages; these are seller claims, not verified performance. No reliable bare-board outline dimensions or mounting drawing were obtained. Package dimensions must not be used as board dimensions.

Our intended function remains simple motor speed and direction control. The added USB-C PD circuitry, regulator, bridge and protection consume more area than the reference's simple one-direction power stage.

## Intended board

| Requirement | Intended implementation or open decision |
|---|---|
| Motor | One brushed DC motor; selected rated voltage 5, 9 or 12 V |
| Continuous current | Approximately 2 A target; thermal and current-path validation required |
| Peak margin | Nominal 2.22 A driver chopping limit; 20 V PD preferred for peak margin; accuracy and duration untested |
| Input | Exactly one USB-C receptacle; power input only; no USB programming interface |
| PD | Autonomous controller; accept adequate 15/20 V contracts and regulate down; no dependence on a 12 V PDO |
| Motor output | Two-pin screw terminal wired directly to the integrated H-bridge |
| Controls | Top-access speed potentiometer and REV/OFF/FWD three-position switch |
| Indicators | Power, FWD, REV; direction indications represent commands, not measured shaft motion |
| Mechanical | Provisional 65 x 50 mm; four 3.2 mm NPTH holes on 55 x 40 mm centers; placement/fit not proven |
| Layout | USB-C left edge, motor terminal right edge, all controls on top |
| Layers | Initial two-layer FR-4, 1.6 mm thickness, 1 oz outer copper; increase area or layer/copper weight if thermal review requires it |
| Temperature | Initial supervised bench-prototype planning range 0-40 C ambient, not a verified rating |
| Simplicity | Hardware PWM preferred; no MCU currently proposed; no display, radio, CAN or sensors |
| Schematic | Seven native A4 sheets: USB/PD, input protection, buck, controls, rail monitor, dump, bridge |
| Current stage | No routing, copper pours, fabrication exports, ordering or publication |

The draft adds a 9 / 5 / 12 V three-position selector, center/default 5 V, with a separate pole tracking the overvoltage threshold. Change the selector only with USB unplugged. All motor modes require a qualified high-voltage 3 A PD contract. Turning PWM down does not replace selecting the correct motor voltage.

## Initial fabrication rules

[JLCPCB capabilities](https://jlcpcb.com/capabilities/pcb-capabilities) was consulted. Use the following conservative project targets, not the manufacturer's extreme minimums: 0.20 mm signal trace width and copper clearance; 0.60/0.30 mm through vias; 0.30 mm ordinary minimum plated drill; 0.25 mm drill-to-drill clearance; 0.20 mm drill-to-unrelated-pad clearance; 0.50 mm copper-to-board-edge clearance. Four 3.2 mm non-plated mounting holes need 7 mm diameter fastener/body clearance regions. No blind or buried vias.

Motor and input power paths reserve 2 mm nominal copper and short lengths, plus broad ground/thermal regions after routing is authorized. This is a planning width, not an ampacity result. Actual neckdowns, pad entries, copper thickness, ambient and temperature rise must be evaluated before claiming 2 A continuous. Exact final stackup, hole tolerances and assembler eligibility remain unapproved.

## Remaining design-critical requirements

- The failed C6738614 candidate is superseded by successfully imported C5710902. Its exact 10 kΩ linear identity and manufacturer rear-mount geometry have been reviewed; knob/enclosure fit remains pending.
- All 54 instantiated supplier parts showed nonzero LCSC stock on 2026-10-02. This does not establish JLCPCB assembly stock or eligibility, particularly for through-hole controls.
- Multi-terminal switch imports currently omit required schematic ports. Replacement candidates were tried; the defect must be resolved through a supported importer/component model before schematic approval or placement.
- Missing reference labels and incomplete pin-attribute metadata in supplier imports remain explicit validation issues; no hand-authored substitutions are allowed.
- Actual motor startup/stall current, inductance, inertia and external back-driving are unknown. Do not approve clamp energy, reversal or fault behavior without these bounds and tests.
- PD NVM must be provisioned/read back; adequate 15/20 V at 3 A is required. Other chargers deliberately leave the motor disabled.
- 12 V/2 A continuous is an analytic target. Peak margin at 15 V is limited at worst-case input-current tolerance; 20 V is preferred.
- Buck loop/ESR/DC-bias review, exposed-pad/thermal design and all actual footprint/body/courtyard checks remain incomplete.
- The 65 × 50 mm mechanical envelope is provisional. Component placement and four physical holes are not yet instantiated.

Requirements confirmation remains in progress. No physical operating rating is established.
