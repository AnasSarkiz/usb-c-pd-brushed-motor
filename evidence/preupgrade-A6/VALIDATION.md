# A5 validation record

2026-10-02. This revision updates the official board-local dependencies and rechecks **C908270 / Dailywell 1MS3T1B1M2QES-5**, then **C908281 / Dailywell 2MS3T1B1M1QES-5**. Imports succeed. The previous generated THT paste schema failures are fixed, but both switch schematics still omit physical pin 3 and use SPST topology. Neither supplier switch is approved. No custom model, library patch, pin remapping or warning suppression is used.

The product source/BOM remains the withdrawn historical A1 assembly, 118 placements / 54 supplier codes. Direct-PWM simplification is defined in docs/DIRECTION-CONTROL.md and SIMPLIFICATION.md, not implemented with a failed model. A4 files and probe outputs are archived in evidence/preupgrade-A5/. A3 review documents and earlier evidence remain preserved. No source commit exists; current exact source/dependency/output hashes are recorded in evidence/source-manifest-A5.json.

## Stage ledger

| Stage | Status | Evidence / remaining work |
|---|---|---|
| 1. Confirm requirements | in progress | Broad 5/9/12 V brushed motors, approximately 2 A continuous; no single fixed motor required to draft the schematic. Requirements/mechanics remain recorded. Voltage-selector implementation and final power/current envelope still require resolution. |
| 2. Review schematic and BOM | blocked | Both Dailywell models fail schematic import audit. PD arbitration, exclusive voltage selector, labels/pin metadata and remaining current/energy/thermal qualification remain open. No dedicated timed-reversal hardware is required at this stage. |
| 3. Validate placement | blocked | Final supplier switch and complete schematic gate have not passed. Isolated import probes are model inspection only, not product placement. |
| 4. Route and validate copper | not started | Prohibited by user. Main source/config and probes have routing disabled; each current probe has zero PCB traces. |
| 5. Automated and visual checks | not started | Routed-board stage not reached. Development/model checks below do not complete it. |
| 6. Approve prototype fabrication | not started | No fabrication package or order. |
| 7. Test physical prototype | not started | No hardware measurements; mandatory rapid reversals/current/thermal/PD tests are in docs/PROTOTYPE-TEST-PLAN.md. Measurements decide whether a coast delay is needed. |
| 8. Prepare store release | not started | No publication or hardware-tested claim. |

## B09 — current Dailywell schematic import failures, stages 2/3

Official `tsci import CODE --jlcpcb --use-exact-footprint` was run for each exact SKU with the updated importer. Both generated components still emit native switches without an SPDT type; default core behavior renders SPST. Each output has exactly three source ports, PCB ports and distinct plated slots, but only two schematic ports. Physical pin 3 has no schematic connection. Native SPDT symbol inspection confirms its moving/common contact is still pin 1, conflicting with manufacturer common pin 2. Merely changing the instance type would not establish a correct mapping. The definitions remain unmodified.

Each strict audit exits **1 with two schematic failures**. All generated circuit elements now pass the full circuit-json schema. Six paste entries per switch changed from invalid `pill` to valid `rotated_pill` / rotation 0: the A4 schema blocker is **resolved for these two current probes**. This does not prove stencil appropriateness or fabrication approval. No unrelated historical component/schema blocker is declared resolved without a recheck.

The imports also change generated courtyards. Primary is approximately 7.36 × 12.70 mm, smaller than the projected 12 mm circular hardware graphic in one axis; hardware clearances require explicit mechanical review. Backup is approximately 6.50 × 8.64 mm. Lead slots/body/pitch remain unchanged. A4 manufacturer comparison remains applicable to unchanged geometry: C908270 nominal M2 lead clearance is plausible but finished-hole tolerances are unapproved; C908281 is the M1 solder-lug termination with direct-PCB fit unproven. No new stock check or final mechanical approval is claimed in A5.

Final native A4 schematic and PCB PNGs were actually inspected for both candidates. They confirm the two-terminal schematic and three physical pads. Build and all five native checks exit 0 with no reported candidate warnings; those checks miss the independently proven schematic defects. Native schematic-placement emits no findings. The probes contain zero routed copper traces.

Evidence: evidence/C908270-strict-audit-A5.json, evidence/C908281-strict-audit-A5.json, evidence/native-spdt-symbol-A5.json, import/build/netlist/native-check logs and dist/tests/dailywell-*-import-probe/*-A5.png. The audit validates every raw generated element without modifying it; schema errors are collected explicitly rather than hidden. Previous A4 audits retain their original failures.

The [workspace AGENTS.md](../../AGENTS.md) requires “stop dependent work” for an imported component issue and prohibits manually patching symbols, footprints or pin mappings. Correct official SPDT conversion/common mapping must pass the same audit before installing the switch, completing product schematic approval or starting placement. Routing remains disabled. No SP3T search or custom substitute is used.

## Toolchain update and checks

Official registry versions were freshly checked on 2026-10-02. Pinned tscircuit updated **0.0.2729 → 0.0.2734**, CLI **0.1.2228 → 0.1.2231**, resolved core **0.0.2050 → 0.0.2052**. Actual installed versions: props 0.0.676, circuit-json 0.0.509, circuit-to-svg 0.0.437, TypeScript 5.9.3, Biome 2.5.14, Bun 1.3.9. Full manifests and installed-version evidence are saved. Registry circuit-json latest 0.0.510 is outside the current umbrella dependency range; no unsupported override or schema downgrade was forced.

The upgrade installer emitted an unsuppressed circuit-json peer mismatch: published CLI expects ^0.0.489, while umbrella tscircuit resolves 0.0.509. It remains upstream dependency metadata debt, not a waived circuit validation error. Final imports/builds emit no supplier fetch or datasheet timeout warning.

Initial formatting reached task-local disposable dependency caches, and clean reinstall attempts exhausted disk space. Logs are retained. Formatting now excludes `.cache/` third-party files; electronic import/schema checks remain unchanged. Only this task's generated node_modules/cache directories were cleared. A final clean frozen-lockfile reinstall succeeded, and the final builds/checks below use untouched official packages. No other task files were modified.

| Check | Actual result / evidence |
|---|---|
| Official update and clean install | Pass; toolchain-upgrade-A5.log, clean-install-final-A5.log |
| Reimport C908270, then C908281 | Both exit 0; import-C908270-A5.log, import-C908281-A5.log |
| Probe netlist before build | Both exit 0; C908270-netlist-A5.log, C908281-netlist-A5.log |
| Probe build, routing disabled, PCB/schematic SVGs | Both exit 0; C908270-build-A5.log, C908281-build-A5.log |
| pin_specification / source / schematic-placement / placement | All eight calls exit 0; dailywell-1m/2m-*-A5.log |
| Full generated schema and pin/pad audit | Zero schema failures; two schematic failures each; both audit commands exit 1 |
| Final visual inspection | Both final native A4 schematic and PCB PNGs inspected; mechanical fit remains unapproved |
| `bun run format:check` | Pass; format-check-final-A5.log, 34 project files |
| `bun run typecheck` | Pass; typecheck-final-A5.log |
| `bun test` | 12 pass / 0 fail / 336 assertions; tests-final-A5.log |
| Revised complete product schematic/BOM/placement | Not performed/approved; supplier switch gate fails. Historical A1 output is not an A5 board approval. |

The existing tests cover historical calculations and analytical proposed PD/stress screening, not implemented PD policy or physical hardware. No snapshots were accepted to override import defects.

## Remaining architecture and qualification work

Direct PWM goes to physical switch common 2, with throws to DRV8874 IN1/IN2 and PMODE high. TI's internal 100 kΩ typical input pull-downs provide OFF/coast. The reviewed removal is U7/C24/R27/R28/R52/R53, six placements; no reduced assembled BOM is claimed. C5710902 and the 330 Ω / 5.6 nF timing network remain unchanged. LEDs follow commanded PWM brightness.

Retain DRV8874 VREF/IPROPI current regulation, OCP, thermal and motor-rail energy protection. Nominal R50=3.3 kΩ / VREF=3.3 V gives 2.222 A. The actual ±2% reference rail corrects the illustrative prior tolerance screen to approximately 2.044–2.423 A at the specified VM ≥5.5 V conditions, before overshoot. 5 V accuracy and actual peak duration/energy require prototype measurements. No dedicated timed-reversal circuit is added as requested; rapid FWD→REV and REV→FWD tests determine whether additional delay is necessary.

Selected-voltage-aware PD arbitration remains unimplemented (historical B07). The analytical policy qualifies 15/20 V voltage/current/headroom, inhibits inadequate/non-PD sources, and does not assume native 12 V. A1 static 20 V-first STUSB4500 NVM is withdrawn. Explicit exclusive 5/9/12 V selector and invalid-selection inhibition still need a validated implementation. Prior unresolved missing labels/power metadata/TVS orientation findings remain historical open issues, not revalidated by these switch probes. No particular motor is imposed as a schematic prerequisite; measured representative-motor and thermal/energy bounds will define the supported operating envelope.
