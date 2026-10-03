# USB-C PD brushed motor controller

A2 architecture review, 2026-10-02. The A1 circuit is retained as a withdrawn historical baseline; C2848921 is not being pursued. **Schematic approval is blocked by supplier-import rendering defects. Component placement has not started. Routing is disabled. No fabrication-ready or hardware-tested claim is made.**

The failed C6738614 potentiometer is superseded by **Bourns PTV09A-4015F-B103 / C5710902**, imported successfully through JLCPCB. The 10 kΩ pot uses a revised 330 Ω / 5.6 nF diode-steered TLC555 network, approximately 19–21 kHz and 3–97% nominal duty. All electronic components come from unmodified supplier imports; no local symbols, footprints or pin mappings were created.

The historical A1 circuit contains 118 components / 54 unique supplier parts across seven native A4 sheets. A finalized simplified A2 schematic/BOM does not yet exist. It implements an STUSB4500 PD sink, TPS16630 protected input, TPS54360 selectable 5/9/12 V buck, DRV8874 reversible bridge, hardware PWM, direction and voltage selectors, three LEDs, motor screw terminal, transient suppression and a monitored regenerative dump. No MCU is used.

## A2 review artifacts

- [SP3T audit and simplification decisions](docs/SIMPLIFICATION.md).
- [Startup, stall, thermal, PD and reversal validation plan](docs/PROTOTYPE-TEST-PLAN.md).
- [Warning-by-warning review](docs/WARNING-REVIEW.md).
- [Exact SP3T source/schematic/pad audit](evidence/sp3t-import-audit-A2.json).
- A1 source archive: `evidence/revisions/A1-source.zip`; original BOM: `docs/BOM-A1.csv`.

## Historical A1 artifacts

- [Schematic entry point](index.circuit.tsx) and functional blocks in `circuit/`.
- [Complete draft BOM](docs/BOM.csv): exact MPNs, manufacturer, package, stock observations, datasheet links and approval status.
- [Power/control calculations and tradeoffs](docs/ARCHITECTURE.md).
- [Requirements and reference review](docs/REQUIREMENTS.md).
- [Placement intent](docs/PLACEMENT.md), explicitly not a placement deliverable.
- [Validation record](VALIDATION.md), including current blockers and check results.
- Seven individually rendered sheets in `dist/review/`: `1-usb.svg` through `7-motor.svg`, with PNGs for visual review. These are marked DRAFT and retain warnings.

With official tscircuit 0.0.2725 / CLI 0.1.2226, formatting, TypeScript and five electrical calculation tests pass; the schematic-only build succeeds. This does **not** establish schematic correctness: the switch imports render only two terminals while the real parts require eight contact terminals. The independent port-coverage audit fails on 11 required connections. Several imported symbols also lack their reference labels. See VALIDATION.md before using any schematic or BOM for fabrication.

## Power and operation intent

The historical A1 profile requests 20 V first, then 15 V, at 3 A; this policy is superseded. A2 analysis prefers qualified 15 V for the 5/9 V peak envelope and qualified 20 V for the 12 V peak envelope, with fallback only after current/headroom checks. No runtime hardware implements the revised policy yet. A supported autonomous solution remains an architecture blocker. Neither design relies on a native 12 V PDO.

The archived A1 `docs/pd-profile.json` is not an approved A2 provisioning profile. PD NVM must be correctly programmed and read back after the controller/policy is finalized, before the motor power stage is used. The file is configuration intent, not a binary programming image. Factory-default NVM is unsuitable for the power budget.

The A2 voltage-selector definition uses one adjacent-pair shunt on a four-position header: 1–2 = 9 V, 2–3 = 5 V, 3–4 = 12 V. The header/shunt and invalid-selection inhibition are not implemented. Configure only with USB unplugged, VM discharged and direction OFF. Do not install multiple shunts. Stop the motor and allow it to coast before reversing. Do not assume safe reversal under arbitrary inertia or external back-driving: clamp energy, temperatures and current limits still require physical validation.

At 12 V, 20 V contracts have the better guaranteed input-current margin. A 15 V contract fits the assumed 2 A continuous budget, but worst-case peak margin is limited. Intended operating current is not a measured hardware rating.

## Development

Formatting, TypeScript and 12 calculation tests pass for the current sources. Five tests cover the historical A1 calculations; seven cover the proposed A2 policy and stress screening. These do not validate a physically implemented A2 board. The isolated SP3T model probe builds with routing disabled but fails the independent pin audit. No new product-board schematic/placement approval is claimed.

Run commands from this board directory, never the workspace root:

```sh
bun install --frozen-lockfile
bun run format:check
bun run typecheck
bun test
bun run power:report
tsci check netlist index.circuit.tsx
tsci check pin_specification index.circuit.tsx
tsci check source index.circuit.tsx
tsci check schematic-placement index.circuit.tsx
tsci build index.circuit.tsx --disable-pcb --routing-disabled --schematic-svgs
bun scripts/render-schematic-sheets.ts
bun scripts/audit-schematic.ts
```

The last command currently fails on the real missing-port defect; no checks are suppressed. The PCB build / placement command must wait for the schematic and BOM gate. `routingDisabled` is present in the board and project config. Do not enable routing during this review stage.

This task continues the same board-local repository and A0 scaffold. It did not copy another task's board, modify the store application, publish, push or place an order. Failed and unused candidate imports remain for audit; only parts in the manifest/BOM are instantiated in the product circuit.
