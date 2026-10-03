# USB-C PD brushed DC motor controller — A12 firmware/tooling step

Connected tscircuit prototype for one 5/9/12 V brushed motor, targeting approximately 2 A continuous. One USB-C power input, regulated motor voltage, hardware speed potentiometer, FWD/OFF/REV switch, DRV8874 H-bridge, power/direction LEDs and one motor screw terminal. The user approved an MCU only for PD qualification; PWM remains hardware controlled.

**Not ready for placement, routing or fabrication.** All 55 active supplier models pass the electrical/pad/schema audit. The 12 imported thermal vias are accepted under the explicitly authorized checker policy; new routed via-in-pad remains prohibited. The explicit-coordinate defect remains in official packages. A12 independently validates the native numeric manual-placement API on a supplier-backed probe; unit-string manual placement still fails. Power/firmware qualification remains open. Selector mechanics and the simplification pass are documented. No physical hardware has been tested.

Use this task directory for every command. Entry point: index.circuit.tsx. Dependencies are pinned to tscircuit 0.0.2742 / CLI 0.1.2237 / core 0.0.2056. Every electronic component is an unchanged official JLCPCB import; no custom or patched component is used.

- docs/BOM.csv: current 129 components / 55 supplier parts, dates and pending approvals.
- VALIDATION.md: current gates, checks and historical evidence.
- docs/ARCHITECTURE.md: connected circuit and electrical limitations.
- docs/PD-QUALIFICATION.md: selector, voltage-aware contract policy and incomplete embedded port.
- docs/STUSB4500-RX.md: bounded receive handling, manufacturer-register discrepancies and pending target integration.
- docs/DIRECTION-CONTROL.md and docs/SIMPLIFICATION.md: implemented direct-PWM architecture and part-count review.
- dist/review/1-usb.svg through 8-pdhost.svg: eight native A4 schematic sheets, with warnings visible.

Viewed from above with ON at the top, both voltage DIP bits OFF select 5 V; right ON selects 9 V; left ON selects 12 V; both ON inhibit. Footprint-local numbering and nominal mechanics are reconciled; physical continuity/orientation still require prototype verification. Only adequate 15/20 V PD contracts may enable the motor. A 5 V-only or insufficient source leaves it off; native 12 V PD is not required. Do not assume any 45/60 W charger offers the exact accepted PDO/current profile. See the qualification policy.

Development checks: bun run format:check, bun run typecheck, bun run test and bun run power:report. For a schematic-only review use `bunx tsci build index.circuit.tsx --disable-pcb --routing-disabled --schematic-svgs`, then `bun scripts/audit-schematic.ts` and `bun scripts/render-schematic-sheets.ts`. Full board/placement validation currently fails and must not be bypassed. All supplier probes live under tests/supplier-audit; run each with the official single-file CLI and inspect evidence/active-import-audit-A11.json. Unused A10 candidates have a separate audit; C178373 is the active provisional C18.

A nominal 65 x 50 mm, two-layer, 1.6 mm board remains provisional. Four mounting holes, USB-C/motor-terminal opposite edges, top-access controls, clear silkscreen and SWD/NRST test pads are requirements for the future placement stage. Routing remains explicitly disabled in both the board and configuration. No Gerbers, assembly release or order is approved. WIP source pushes and package publication are authorized by the workspace instructions; no GitHub remote is configured yet.

A9 corrects buck input capacitance to two supplier-backed 10 µF/50 V X7R ceramics. See docs/REGULATOR-REVIEW.md, docs/SELECTOR-MECHANICS.md, docs/MCU-POWER-SEQUENCING.md and docs/TOOLING-ISSUES.md for evidence and remaining gates. Routing stays disabled.

A10 independently audits replacement output-capacitor candidates, records actual stock and unresolved paste/mechanical/ripple issues, and adds portable PD/rail power sequencing. Contract qualification is separated from the expected driver undervoltage fault at startup. Firmware host/target-object checks do not establish a flashable embedded port or measured PD negotiation. See docs/OUTPUT-CAPACITOR-REVIEW.md and docs/PD-QUALIFICATION.md. The A10 schematic/BOM use supplier-backed Panasonic C178373 for C18; dependencies remain official and unchanged. Its loop/thermal/land approval remains open. Product placement is not started.


A11 adds one supplier-backed 1 kΩ/0.5 W VM discharge resistor and a measured-decay sequence with a 3 s timeout. The power budget includes +5% rail tolerance and bleeder load; see docs/RAIL-DISCHARGE.md. BOM now 129 components/55 supplier codes. Placement and routing remain unstarted.

A12 adds host-tested bounded PD message capture: 531 C assertions and freestanding Cortex-M0+ compilation, with 17 configured tests/363 expects passing. No flashable controller or measured charger negotiation is claimed. Hardware/BOM remain A11. A numeric native placement probe passes strict schema, pad/port geometry and all five checks; it is not product placement. Explicit/unit-string defects and unsuccessful command attempts remain recorded. Neither GitHub nor tscircuit is published because the GitHub destination is still unknown.
