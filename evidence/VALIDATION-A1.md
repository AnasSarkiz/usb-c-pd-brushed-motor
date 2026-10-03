# A1 validation record

Revision A1, package 0.0.1, 2026-10-02. This continues A0 in the same task's board-local repository. No source commit exists yet; `evidence/source-manifest-A1.json` records exact source, supplier-import, dependency and reviewed-output checksums. **Connected engineering draft; schematic/BOM approval blocked, placement not started, routing disabled, hardware untested.**

## Gates

| Stage | Status | Current evidence / remaining work |
|---|---|---|
| 1. Confirm requirements | in progress | Reference/product review, intended 5/9/12 V and 2 A, two-layer rules and provisional 65 × 50 mm outline documented. Actual motor/reversal energy and final mechanical fit remain unknown. |
| 2. Review schematic and BOM | blocked | 118 components / 54 exact supplier parts; all show LCSC stock. Seven native A4 sheets build. Required switch ports are missing from the generated schematic; imported labels/metadata remain unresolved. Electrical calculations do not complete all datasheet/footprint/protection reviews. |
| 3. Validate placement before routing | blocked | Prerequisite stage 2 fails. No intentional PCB placement or holes instantiated. Current placement build/check is withheld under the user's explicit ordering rule. |
| 4. Route and validate copper | not started | Prohibited by user. Board and config both have routing disabled. Product circuit JSON has zero PCB traces. |
| 5. Automated and visual checks | not started | Development checks below ran, but this routed-output stage is not reached. No snapshots accepted; no shorts/copper validation claimed. |
| 6. Approve prototype fabrication | not started | No Gerbers, assembly package, fabrication approval or order. |
| 7. Test physical prototype | not started | No physical hardware, programmed NVM, PD analyzer evidence or measurements. |
| 8. Prepare store release | not started | No release, publication, photos or hardware-tested claim. |

## Superseded potentiometer issue

**C6738614 is not required and no longer blocks this design.** C5710902 / Bourns PTV09A-4015F-B103 imported successfully (`evidence/import-C5710902.log`), with LCSC showing 123 units. The manufacturer's ordering table and land-pattern drawing were rendered and inspected at `evidence/C5710902.png`. It is 10 kΩ linear, ±20%, 50 mW, a 15 mm flat insulated shaft and rear-mount/bushingless configuration. The TLC555 timing network was recalculated to 330 Ω end resistors and 5.6 nF C0G. Analytic nominal frequency is 19.4–20.9 kHz with approximately 3–97% duty; component corners and residual resistance are not bench-verified.

A0's narrative is retained in `evidence/VALIDATION-A0.md` for history. Do not use its candidate BOM or stopped-scaffold results as A1 evidence.

## B04 — multi-terminal switch import defect (stages 2 and 3)

Selected **C2848921 / G-Switch SS-23D03-G080** is stocked (535 observed), imports successfully and has eight physical contact terminals plus case anchors. The imported TSX emits `<switch>` with no switch type, so installed core defaults to SPST. Circuit JSON and SVG contain schematic ports only for pins 1 and 2. Required common, FWD and voltage-selector connections are absent from the rendered schematic.

The independent manifest-to-schematic-port audit fails on **11 required connections** across SW1/SW2: `evidence/schematic-port-audit-A1.json`. Native netlist checking nevertheless reports zero errors, demonstrating why its result alone is insufficient.

Stocked supplier alternatives were tried through the same supported workflow: **C5274495 / KH-SS23E06-G8** (910 observed) and **C5274498 / KH-SS23F06-G6** (320 observed). Both import but reproduce the same two-terminal schematic defect. `tests/switch-import-probe.circuit.tsx` is a nonfunctional diagnostic, not a substitute circuit; `evidence/switch-import-probe-A1.json` records the source versus schematic pins for all three candidates.

The previously imported C5274491 has a full custom symbol but is out of stock. Its manufacturer's HTML description also conflicts with its actual drawing; it is not approved as a replacement.

The board dependencies were then updated normally to official tscircuit 0.0.2725 / CLI 0.1.2226 / core 0.0.2047. Reimporting C2848921 produced byte-identical supplier source (`evidence/import-C2848921-cli2226.log`; prior source retained in `evidence/imports-pre-2226/`). The updated engine still omits the same 11 required ports. This is a confirmed importer/core limitation, rather than an unavailable potentiometer.

No switch definition, symbol, footprint or pin mapping was altered, and no generic stand-in was introduced. The parent AGENTS.md states: “If a required part cannot be imported, or an imported component has any issue, report it to the user explicitly as a blocking issue.” It also requires stopping dependent work. Thus placement cannot proceed. Proper resolution is a supported supplier import retaining every contact, with verified manufacturer contact mapping; then rerun schematic approval.

## B05 — imported symbol labels and metadata (stage 2)

The generated product circuit records **11 missing reference-designator styling warnings** on D1, D2, Q1, RV1, U8, Q2, Q3, Q4, Q5, D10 and D11. These affect C10214, C477999, C7420353, C5710902, C23892, C53444, C20917 and C211759. The importer emits custom symbols without `{REFDES}` text. Original imported definitions remain unchanged; adding local replacement symbols or patching them would violate the component rule.

The pin-specification check also reports 45 warnings for missing/underspecified imported power/ground metadata, and generated output records nine reference-prefix convention warnings because some supplier devices are emitted as chips. These are not waived or hidden. Numeric power/ground connections were checked in the source, but comprehensive per-pin/footprint approval is incomplete. Two custom TVS orientation suggestions remain from schematic-placement analysis after ordinary passive rotations and bypass clustering were corrected.

## Electrical review still required

- PD configuration intent is recorded in `docs/pd-profile.json`. No binary image, programming/readback or physical negotiation test has been completed. Factory defaults are unsuitable. The manufacturer algorithm and power-only-above-5-V behavior were reviewed; configuration must be validated on actual hardware before motor use.
- All 54 instantiated supplier codes showed nonzero primary LCSC inventory on 2026-10-02. Exact manufacturer/package/datasheet and page hashes are in `evidence/supplier-availability-A1.json`. This is not verified JLCPCB assembly inventory or a reservation.
- Out-of-stock parts were replaced by supplier imports: 10 kΩ resistors C844918, 1 µF/50 V capacitors C77083, NPN C7420353, 24 V zener C2109, LEDs C2986030, 80.6 kΩ C2933260. TPS16630 C1849461 replaces TPS26630; the different pinout was wired from the TI table. 105 kΩ feedback became 100 kΩ + 5.1 kΩ, and provisional compensation is 27 kΩ.
- Analytic tests support intended 2 A continuous budgeting with 15/20 V at 3 A. Worst-case 12 V peak margin is limited at 15 V; 20 V is preferred. Buck loop/ESR/DC-bias review, LDO/buck/bridge thermal design, current-limit accuracy at 5 V, dump pulse-energy capacity and contact/reversal behavior remain unapproved. See docs/ARCHITECTURE.md.

## Toolchain and checks

Final checked toolchain: Bun 1.3.9; tscircuit 0.0.2725; actual wrapper-selected and directly pinned CLI 0.1.2226; core 0.0.2047; props 0.0.676; circuit-json 0.0.509; circuit-to-svg 0.0.437; TypeScript 5.9.3; Biome 2.5.14. The previous CLI 0.1.2217 evidence is retained separately. The newer core deprecates schematic pin spacing; three ignored instance properties were removed before the final checks. Direct dependencies are pinned and transitive dependencies locked in bun.lock. Optional dependency peer warnings remain explicit compatibility observations.

Installed help/source was inspected for native A4 sheets, sheet membership, routing controls, all required checks, build and per-sheet SVG selection. Product electronics use unmodified JLCPCB imports; functional blocks only aggregate those imports and wiring. No purchased-component definitions were created locally.

| Current-source command | Result | Evidence |
|---|---|---|
| `bun run format:check` | exit 0 | format-check-A1-cli2226.log |
| `bun run typecheck` | exit 0 | typecheck-A1-cli2226.log |
| `bun test` | 5 passed; 318 assertions | test-A1-cli2226.log |
| `bun run power:report` | exit 0; explicitly assumed budget | power-report-A1-cli2226.log |
| `tsci check netlist index.circuit.tsx` | 0 errors / 0 warnings | netlist-A1-cli2226.log |
| `tsci check pin_specification index.circuit.tsx` | 0 errors / 45 unresolved warnings | pin-specification-A1-cli2226.log |
| `tsci check source index.circuit.tsx` | 0 errors / 0 warnings | source-A1-cli2226.log |
| `tsci check schematic-placement index.circuit.tsx` | XML analysis; 2 unresolved TVS orientation suggestions | schematic-placement-A1-cli2226.log |
| Schematic-only build with `--disable-pcb --routing-disabled --schematic-svgs` | exit 0; warnings remain; not schematic approval | schematic-build-A1-cli2226.log |
| `bun scripts/audit-schematic.ts` | exit 1; 11 missing required schematic ports | schematic-port-audit-A1.json; schematic-port-audit-A1-cli2226.log |
| `tsci check placement index.circuit.tsx` | not run on A1; prerequisites blocked | Stage 3 |
| PCB PNG/SVG build, snapshot, shorts, fabrication checks | not started; prerequisites blocked / routing prohibited | Stages 3–6 |

All seven final native A4 schematic outputs in `dist/review/` were visually inspected in this session: USB/PD, input, buck, controls, rail monitor, dump and bridge. Titles, boundaries, rail labels, ordinary passive orientations and bypass grouping were reviewed. Missing switch connections and imported reference-label callouts remain visible; some warning boxes obscure imported symbol labels. The native output records no out-of-sheet warnings. `evidence/visual-review-A1.json` identifies the reviewed PNGs and confirms their hashes match rendering the final checked SVGs. This is visual inspection with unresolved issues, not schematic approval. `evidence/check-results-A1.json` records each final command and exit code, including the failed independent audit. The stock switch drawing, Bourns ordering/footprint drawing and Chilisin inductor mechanical/current table were inspected. No body/courtyard/PCB clearance or 3D placement approval has occurred.

The workstation briefly ran out of space. Redundant source-map files only inside this task's installed dependencies were removed to allow saving sources; runtime files, imported components and checks were retained. Dependency installation can reproduce them. No other task or user files were deleted.

No errors or warnings have been suppressed, no fabrication outputs generated and no physical tests invented.
