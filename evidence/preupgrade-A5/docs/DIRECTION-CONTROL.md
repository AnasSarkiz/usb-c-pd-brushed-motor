# A4 direct-PWM direction control review

2026-10-02. The user-selected architecture below supersedes A3. It is reviewed against manufacturer datasheets, but the revised product schematic is **not implemented or approved**, because neither requested Dailywell import passes. A3 documents are preserved in `evidence/revisions/A3-review-docs/`. No imported model, pin map or footprint is edited.

## Required wiring and states

Use one SPDT ON-OFF-ON switch. Both Dailywell manufacturer tables specify common pin 2; one end closes 2–3, center opens, and the other end closes 2–1. Assign physical pin 1 to IN1/FWD and pin 3 to IN2/REV; reconcile actuator travel with the silkscreen at mechanical review. Motor wire polarity determines actual rotation.

Hardware PWM OUT connects directly to common pin 2. Pin 1 connects to DRV8874 IN1 (IC pin 1); pin 3 connects to IN2 (IC pin 2). PMODE (IC pin 16) connects to VCC3V3 for PWM mode, and must be high when nSLEEP is released because the mode is latched then. There is no separate PWM-enable input in this mode.

| Switch state | IN1 | IN2 | Bridge state |
|---|---|---|---|
| FWD, 2–1 | PWM | Low | Forward during PWM high; coast during low |
| OFF, open | Low | Low | Coast / Hi-Z |
| REV, 2–3 | Low | PWM | Reverse during PWM high; coast during low |
| Any state with nSLEEP low | Either | Either | Hi-Z |

[TI DRV8874 datasheet](https://www.ti.com/lit/ds/symlink/drv8874.pdf), electrical characteristics and section 7.3.2/table 4, confirms this mapping. IN1/IN2 have internal **100 kΩ typical** pull-downs; no minimum/maximum resistance is specified. TI explicitly describes unasserted inputs as low and allows logic before VM. Use these bias resistors with short local traces, a shared ground and default-low nSLEEP/MOTOR_READY. External input pull-downs are not required for the intended local control; OFF-state noise and startup must be measured in the prototype. An unqualified rail/source keeps timer RESET and nSLEEP low. Logic-high threshold is 1.5 V minimum; logic low must remain below 0.7 V for VM below 5 V, or 0.8 V at/above 5 V.

Remove U7, C24, command pull-downs R27/R28 and redundant external input pull-downs R52/R53 in the next valid revision. This removes six placements. Keep the C5710902 10 kΩ potentiometer, two 330 Ω timing resistors and 5.6 nF capacitor: approximately 19–21 kHz and 3–97% nominal duty at 3.3 V. No new direction decoder or timed-reversal circuit is proposed.

FWD/REV LED resistor inputs move to IN1/IN2. Their brightness follows PWM duty; OFF and inhibited states are dark. These show commanded direction, not measured rotor motion. Keep the existing power indicator. Verify TLC555 loaded VOH and indicator brightness at the minimum/maximum rail, temperature and duty before approval. [TI TLC555 datasheet](https://www.ti.com/lit/ds/symlink/tlc555.pdf) has no explicit TLC555CDR 3.3 V / 1 mA worst-case VOH row; its typical drive capability is not a guaranteed margin. Do not add gating logic solely to restore steady LED brightness.

## Current regulation and reversal qualification

Keep DRV8874 VREF (pin 5) at the 3.3 V rail, IPROPI (pin 6) through R50 = 3.3 kΩ to ground, and IMODE (pin 7) low for fixed-off-time regulation. With AIPROPI = 450 µA/A, the nominal chopping threshold is **2.222 A**. Keep the driver charge-pump capacitors, local bypass, bulk capacitance, current regulation, OCP, thermal protection and planned motor-rail overvoltage/energy protection. OCP's 6–10 A threshold is a fault backstop, not normal motor-current regulation.

The actual TPS7A1633 rail has ±2% overall accuracy ([TI TPS7A16 electrical table](https://www.ti.com/lit/ds/symlink/tps7a16.pdf)); the prior illustrative ±1% reference calculation is superseded. Combining ±2% rail, ±1% R50 and ±5.5% mirror error gives approximately **2.044–2.423 A**, before response overshoot. The mirror error specification applies at VM ≥5.5 V and the stated datasheet conditions; it does not establish a guaranteed 5 V current-limit bound. `evidence/current-power-review-A4.json` records the revised corner calculation and repeats analytical PD/inductor screening at that upper corner. It still selects qualified 15 V for 5/9 V and 20 V for 12 V under the stated assumptions. Hardware PD arbitration is still unimplemented. The historical 2.4 A screening allowance is not a guaranteed peak cap.

DRV8874 generates internal MOSFET dead time (100 ns typical), preventing high/low-side overlap. This does not stop a rotor or guarantee a mechanical coast interval. **No dedicated coast timer is added or required as a pre-prototype architecture gate.** Mandatory prototype tests cover rapid FWD→REV and REV→FWD, switch bounce, current overshoot, rail regeneration and temperatures. Measurements determine whether a fixed coast delay is needed. No unrestricted reversal or arbitrary back-driving rating is claimed before those tests.

This remains a broad 5–12 V, approximately 2 A motor controller. A single fixed motor is not required to draft the schematic. Qualify representative motors and publish measured startup, stall, inertia/energy and thermal limits; motors unable to start within the available current envelope are outside the supported operating conditions.

## Independent supplier audit

Imported C908270 first, then C908281 after failure, using the official command `tsci import CODE --jlcpcb --use-exact-footprint`. Both commands succeeded. Repeated both with published tscircuit 0.0.2729 / CLI 0.1.2228 / core 0.0.2050 / circuit-json 0.0.509. Imported files are byte-for-byte identical before/after upgrade; no supported fix was obtained.

| Check | C908270 — 1MS3T1B1M2QES-5 | C908281 — 2MS3T1B1M1QES-5 |
|---|---|---|
| Identity / fresh LCSC stock, 2026-10-02 | Exact SKU; 1314 pieces; USD 1.4176 qty 1 / 1.1784 qty 10 | Exact SKU; 19 pieces; USD 1.3390 qty 1 / 1.0735 qty 10 |
| Source and electrical pads | Exactly three source ports, three PCB ports and three distinct plated slots, pins 1/2/3 | Same coverage passes |
| Schematic | Import emits default SPST; only pins 1/2 render, physical common 2 and second throw are not correctly represented. Fail | Same failure |
| Mechanical electrical features | Only three electrical plated pads; circles/body graphics are not fictitious mounting terminals | Same |
| Body and pitch | Body 6.8599812 × 12.7 mm, pitch 4.700016 mm agree with 6.86 × 12.70 / 4.70 mm manufacturer dimensions | Body 5.08 × 8.19998 mm versus 5.08 × 8.13 mm nominal; pitch 2.54 mm agrees. Small outline difference is recorded, not assumed a fit defect |
| Hole/lead review | Slots 2.70002 × 1.1000232 mm; manufacturer M2 terminal nominal 1.27 × 0.76 mm, length 6.60 mm. Nominal clearance is plausible, but finished-slot tolerances/maximum lead dimensions are not provided for approval | Slots 1.700022 × 0.700024 mm; M1 is a **solder-lug** termination, nominal 1.52 × 0.51 mm. Capsule corner clearance and direct-PCB suitability are not demonstrated |
| Generated THT paste / schema | Six top/bottom paste entries use unsupported `shape="pill"`; six schema errors. Fail | Same six errors |
| Native build and five checks | Build, netlist, pin_specification, source, schematic-placement, placement exit 0. They miss the independently proven defects | Same |
| Strict independent audit | Exit 1; eight failures, zero routed copper traces | Same |

Stock evidence is direct supplier HTML, not a JLC assembly reservation. Manufacturer 1M/2M function/body/termination PDF pages and final probe PCB/A4 schematic renders were visually inspected. The primary M2 drawing does **not** specify the M6 right-angle recommended PCB drill; no incorrect M6 comparison is used. Generic catalogs do not independently resolve any undocumented `-5` variant tolerance. Neither part has final mechanical approval.

The latest C908270 import emitted a datasheet API timeout warning; its generated source remained identical. Dependency installation emitted an incorrect circuit-json peer warning: published CLI expects ^0.0.489 while tscircuit depends on ^0.0.509. Both warnings are recorded, unsuppressed. Initial sandbox supplier-fetch failure was rerun with permitted network access; final builds contain no fetch failure.

Audit evidence: `scripts/audit-dailywell-import.ts`, `evidence/C908270-strict-audit-A4.json`, `evidence/C908281-strict-audit-A4.json`, supplier HTML/PDF/PNGs and `dist/tests/dailywell-*-import-probe/`. The independent audit validates every generated element before examining source-to-schematic-to-pad coverage. It does not repair invalid output or infer mechanical approval from electrical coverage. Prior native SPDT configuration testing exposed common pin 1 rather than physical common 2; merely requesting SPDT cannot constitute approval.

These are official conversion/core/schema defects, not lack of LCSC stock. Both candidates are rejected for this revision. A correct official supplier import and valid THT generation must pass this same audit before installing the direction switch. No custom component, model patch, pin remapping, warning suppression or SP3T substitution is used. Product schematic completion and placement remain blocked; routing remains disabled.
