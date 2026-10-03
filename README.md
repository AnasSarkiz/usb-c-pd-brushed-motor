# USB-C PD brushed DC motor controller — A9 prototype

Connected tscircuit prototype for one 5/9/12 V brushed motor, targeting approximately 2 A continuous. One USB-C power input, regulated motor voltage, hardware speed potentiometer, FWD/OFF/REV switch, DRV8874 H-bridge, power/direction LEDs and one motor screw terminal. The user approved an MCU only for PD qualification; PWM remains hardware controlled.

**Not ready for placement, routing or fabrication.** All 54 active supplier models pass the electrical/pad/schema audit. The 12 imported thermal vias are accepted under the explicitly authorized checker policy; new routed via-in-pad remains prohibited. The explicit-coordinate defect remains in official packages; an isolated source fix passes the probe and 26 related tests, with whole-source tooling issues still recorded. Power/firmware qualification remains open. Selector mechanics and the simplification pass are documented. No physical hardware has been tested.

Use this task directory for every command. Entry point: index.circuit.tsx. Dependencies are pinned to tscircuit 0.0.2742 / CLI 0.1.2237 / core 0.0.2056. Every electronic component is an unchanged official JLCPCB import; no custom or patched component is used.

- docs/BOM.csv: current 128 components / 54 supplier parts, dates and pending approvals.
- VALIDATION.md: current gates, checks and historical evidence.
- docs/ARCHITECTURE.md: connected circuit and electrical limitations.
- docs/PD-QUALIFICATION.md: selector, voltage-aware contract policy and incomplete embedded port.
- docs/DIRECTION-CONTROL.md and docs/SIMPLIFICATION.md: implemented direct-PWM architecture and part-count review.
- dist/review/1-usb.svg through 8-pdhost.svg: eight native A4 schematic sheets, with warnings visible.

Both voltage DIP bits OFF select 5 V; 9 or 12 alone select their named voltage; both ON inhibit. Physical slider labeling needs final mechanical reconciliation. Only adequate 15/20 V PD contracts may enable the motor. A 5 V-only or insufficient source leaves it off; native 12 V PD is not required. Do not assume any 45/60 W charger offers the exact accepted PDO/current profile. See the qualification policy.

Development checks: bun run format:check, bun run typecheck, bun test and bun run power:report. For a schematic-only review use `bunx tsci build index.circuit.tsx --disable-pcb --routing-disabled --schematic-svgs`, then `bun scripts/audit-schematic.ts` and `bun scripts/render-schematic-sheets.ts`. Full board/placement validation currently fails and must not be bypassed. All supplier probes live under tests/supplier-audit; run each with the official single-file CLI and inspect evidence/active-import-audit-A8.json.

A nominal 65 x 50 mm, two-layer, 1.6 mm board remains provisional. Four mounting holes, USB-C/motor-terminal opposite edges, top-access controls, clear silkscreen and SWD/NRST test pads are requirements for the future placement stage. Routing remains explicitly disabled in both the board and configuration. No Gerbers, assembly release or order is approved. WIP source pushes and package publication are authorized by the workspace instructions; no GitHub remote is configured yet.

A9 corrects buck input capacitance to two supplier-backed 10 µF/50 V X7R ceramics. See docs/REGULATOR-REVIEW.md, docs/SELECTOR-MECHANICS.md, docs/MCU-POWER-SEQUENCING.md and docs/TOOLING-ISSUES.md for evidence and remaining gates. Routing stays disabled.
