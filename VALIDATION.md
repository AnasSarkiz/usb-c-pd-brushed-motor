# A12 current validation — 2026-10-03

**Unrouted WIP prototype; hardware/BOM remain A11. Product placement is unstarted.** Adds bounded PD receive handling and independently audits the supported numeric manual-placement API. No imported electronic definition, output schema or checker is patched or suppressed.

| Stage | Status | Current evidence / remaining work |
|---|---|---|
| 1. Requirements | in progress | Explicit 5/9/12 V selection, approximately2 A target and qualified15/20 V policy retained. Final thermal/mechanical/manufacturing envelope remains open. |
| 2. Schematic/BOM | blocked | A11:129 purchased components/55 supplier codes, eight A4 sheets and passing electrical/schema audits. Buck loop/current-sharing/thermal, land-process approval, regeneration limits and complete STM32/STUSB4500 integration remain unresolved. |
| 3. Product placement | blocked | No product coordinates/mounting holes authored. Numeric manual API passes its isolated full-geometry probe; explicit/unit-string APIs still fail. Electrical/assembly/firmware gates remain. |
| 4. Routing | not started | routingDisabled retained, new via-in-pad prohibited, zero product PCB traces. |
| 5. Routed checks | not started | No routed output or snapshot/shorts approval. |
| 6. Fabrication | not started | No process approval or fabrication release/order. |
| 7. Physical prototype | not started | No measured charger, motor, decay, thermal or reversal evidence. |
| 8. Store release | not started | GitHub repository/branch missing, no task remote. Neither GitHub nor tscircuit published. |

## Completed A12 implementation and checks

firmware/stusb4500_rx.c/.h implements bounded source-capability/control capture through an explicit bus interface. Data remain little-endian and source PDO indices unchanged. Four reads check initial protocol status, RX frame, stable prefix and absence of a new protocol event. Changed/late/malformed/unsupported messages, reset/error indications and failed reads leave the output zero. Zero-object controls tolerate an old count byte without interpreting stale objects. Header IDs are not request tokens. The module does not issue a contract request, qualify SOP provenance, publish fresh_ps_rdy or enable HOST_ALLOW. See docs/STUSB4500-RX.md for manufacturer discrepancies and pending target integration.

UM2650 rev2 and the official register map were downloaded and retained with extracted text. Guide pages5/22 were visually inspected. The public guide reserves PHY_STATUS/RX_BYTE_CNT and protocol bits1/7 that older ST reference source names; no SOP encoding is guessed. The implemented RX count behavior follows the active manufacturer reference. A proposed2.5 ms deadline and read-to-clear consistency guards require actual interrupt/I2C/buffer-ordering measurements. Cortex-M0+ object compilation is not linked firmware or live negotiation.

| Check | Result |
|---|---|
| Configured formatting /TypeScript /Bun tests | pass:17 tests/363 expects, zero failures. |
| Receive C11 Wall/Wextra/Werror compile +host harness | pass:531 assertions, including stale control data, all four read failures, reset/new receive during capture, malformed headers, late/future timestamps and timer wrap. Simulated registers only. |
| Freestanding Cortex-M0+ RX object | pass; target transport/startup/peripherals/watchdog and linked image pending. |
| Unchanged policy/sequence host tests | pass in configured suite; A12 executable names preserve prior A11 evidence. |
| Numeric native manual-placement network build +strict full JSON/geometry audit | pass on isolated two-component supplier-backed probe:correct centers/rotation/pad-port coincidence, zero errors/warnings/traces. |
| Numeric probe native netlist/pin_specification/source/schematic-placement/placement | pass; netlist consumes source, other four full archived artifact. PCB rendering visually inspected. |
| Explicit pcbX/Y and unit-string manual placement strict audit | fail retained:1 and24 top-level schema issues respectively. Combined diagnostic exits1. Native explicit build exit0 does not imply strict schema validity; unit-string build exits1. |
| Earlier sandbox network warnings /netlist-JSON attempt | unsuccessful/superseded, retained separately; not accepted as passes. Correct network builds and source netlist check recorded. |

Official versions unchanged:tscircuit0.0.2742 /CLI0.1.2237 /core0.0.2056 /props0.0.677 /circuit-json0.0.510; Bun1.3.9 /TS5.9.3 /Biome2.5.14. Numeric manual placement is a public API option proven for this probe, not a claim that the explicit-coordinate defect is fixed. No product placement begins. docs/TOOLING-ISSUES.md records raw-vs-parsed-center root cause and all retained failed attempts.

The unchanged A11 schematic/BOM/supplier/thermal-via and power evidence remains applicable because circuit/import/dependency sources are unchanged. Full unplaced product build/placement failures and84 reviewed schematic advisories remain visible; no cached schematic-only placement result is accepted. No repeat product build or new schematic visual review is claimed for A12.

## Revision and publication

A12 source and evidence hashes are recorded in evidence/source-manifest-A12.json; source commit recorded after implementation commit. A11 hardware source is0f2693738e630c4997942d8536b3d913cb1bd5e5. Raw vendor PDF/text evidence is preserved byte-for-byte, including any source whitespace. GitHub remote/destination remains absent. Standing publication authorization exists, but unknown destination plus incomplete gates block fully publishing this step. Neither GitHub nor tscircuit update succeeded. This is not fabrication or hardware approval.

---

A11 and earlier entries below are historical. A12 supersedes receive/tooling and current software checks only; unresolved hardware, assembly, electrical and physical gates remain applicable.

# A11 historical validation — 2026-10-03

**Unrouted WIP engineering prototype; product placement is unstarted.** Adds a supplier-backed passive VM discharge resistor and corrects the power-change timeout/budget. All 55 active supplier audits and the connected 129-part schematic pass their electrical/schema checks. Complete power/assembly/firmware approval remains blocked.

| Stage | Status | Current evidence / remaining work |
|---|---|---|
| 1. Requirements | in progress | Explicit 5/9/12 V selection, 2 A target, single USB-C and qualified 15/20 V contracts retained. Final thermal/mechanical/manufacturing envelope open. |
| 2. Schematic/BOM | blocked | 129 purchased parts / 55 supplier codes, eight native A4 sheets; zero connectivity/schema issues. Discharge screen passes. Buck loop/MLCC bias/thermal/current sharing, capacitor land-process approval, regeneration energy and flashable MCU/STUSB4500 port still open. |
| 3. Product placement | blocked | No product coordinates or mounting-hole placement authored. Official coordinate-schema defect persists; default unplaced geometry fails native placement checks. |
| 4. Routing | not started | routingDisabled, new via-in-pad router prohibition retained. Zero PCB traces. |
| 5. Routed checks | not started | No routed output/snapshot/shorts approval. |
| 6. Fabrication | not started | Assembly/thermal-via/paste processes unapproved; no release or order. |
| 7. Physical prototype | not started | No measured charger/motor/thermal/decay/reversal evidence. |
| 8. Store release | not started | GitHub destination repository/branch missing; no remote configured. Neither GitHub nor tscircuit package updated. |

## Completed A11 step and checks

R68/C2074262/ROHM ESR18EZPF1001 is an unchanged official exact-footprint 1 kΩ/0.5 W 1206 import. Live exact-SKU stock observed 101,150; raw page/hash/date retained. Exactly two electrical pins/pads, positive SMD paste, strict schema, native build and all five independent checks pass. The zero-stock Yageo candidate remains unused. Manufacturer body/land/derating pages and generated ROHM probe were visually inspected; no component definition or imported model was edited.

A11 supplies defined passive discharge independent of uncertain low-voltage IC or motor loading. With ≤650 µF and ≤1060 Ω, 15→1 V screens 1.866 s; the software decay timeout becomes 3 s. A fresh VM≤1 V measurement still gates feedback changes. External back-drive that maintains VM latches inhibition at timeout. R68 screens 169 mW at 12.6 V and 222 mW at nominal OV trip plus 5%, below 294 mW derated rating at the declared 105°C local-ambient ceiling. Actual capacitance, temperature, decay and continuous-energy behavior must be measured; no physical result is claimed. See docs/RAIL-DISCHARGE.md.

PD calculations in both C and host policy now include +5% motor-rail voltage and worst 940 Ω bleeder load outside the 1 W auxiliary allowance. Selected 2.423 A-peak cases screen 1.347 A(5/15), 2.226 A(9/15), 2.145 A(12/20), versus 2.243 A minimum eFuse limit. The 9 V/15 V corner has only 17 mA margin; transient/current/thermal qualification remains mandatory. No native 12 V PDO assumed; insufficient 5 V/non-PD sources remain inhibited. No timed direction/reversal logic is added.

Versions unchanged: tscircuit 0.0.2742 / CLI 0.1.2237 / core 0.0.2056 / props 0.0.677 / circuit-json 0.0.510; Bun 1.3.9 / TS 5.9.3 / Biome 2.5.14. Official dependencies only. A10/A9 importer coordinate defect and current limitations remain applicable.

| Check | Result |
|---|---|
| Formatting /TypeScript /configured Bun suite | pass; 16 tests, 360 expects, zero failures. |
| C sequencer host harness | pass; 11,506 assertions including slow modeled RC decay and persistent charged-rail timeout. Simulated observations, not measured decay. |
| Cortex-M0+ policy and sequence objects | pass; no linked/flashable firmware image. |
| Strict active supplier import/pin/pad/schema audit | pass; 55 parts, zero issues/traces. New C2074262 freshly rebuilt ; 54 unchanged prior probes remain applicable under unchanged dependencies. |
| Thermal-via source/hash/EP policy | pass;12 existing imported vias, zero issues. No new routed via in a pad. |
| Official schematic-only build and strict full schematic/BOM/A4/NC audit | pass;129 parts/ 55codes/ 84 exact-signature reviewed advisories, zero PCB traces. |
| Native netlist/pin_specification/source/schematic-placement | pass, sequential against full archived PCB artifact. |
| Full unrouted build and native/explicit-artifact placement check | fail: 6,301 footprint overlaps, 297 pad-clearance errors, 1,955 courtyard overlaps. Default unplaced layout; errors retained. 129 source components/ 141 PCB records/zero traces. |
| Defined discharge/resistor derating screen | pass under stated bounds; source and bridge off/no external energy, actual temperatures and VM measurement still required. |
| Updated C178373 CCM profile including 1 kΩ load | exits 1; 1,570 sensitivity-threshold failures retained. No loop or current-sharing approval. |

Visual review: all eight sheets in schematic-overview-A11.png, updated buck full-resolution dist/review/3-buck-A11.png, supplier PCB and manufacturer dimension/derating pages, BOM R68-A11.png and C18-A11.png. Labels/polarity/R68 wiring fit A4; warnings remain visible. Artifact-tool BOM reconciliation gives129/ 55 and no duplicate references. The full build was archived as full-build-output-A11.circuit.json before schematic-only regeneration; the CLI cache false-pass is not accepted.

## Revision and publication

A11 source hashes/dependencies/evidence are recorded in evidence/source-manifest-A11.json; source commit 0f2693738e630c4997942d8536b3d913cb1bd5e5. Raw manufacturer HTML/text evidence remains unchanged even where Git's whitespace review reports source CRLF/trailing spaces; source formatting passes. Stage results are limited to the evidence above. Git remote remains absent. Standing publish authorization exists, but unknown GitHub repository/branch plus incomplete validation block completing GitHub/package publication. Neither remote succeeded. No fabrication/hardware approval is implied.

---

A10 and earlier records below are historical; affected current results are superseded by A11. Unresolved blockers remain applicable.

# A10 historical validation — 2026-10-03

**WIP engineering prototype. Product placement has not started; routing remains disabled.** C18 is now an unchanged official Panasonic polymer import, and the portable PD/rail startup sequence is implemented. The active supplier and schematic audits pass; power/assembly qualification and the flashable MCU port remain blocked. No component model, schema, diagnostic or checker threshold was patched or suppressed.

## Current gates

| Stage | Status | Evidence / remaining work |
|---|---|---|
| 1. Requirements | in progress | One motor, explicit 5/9/12 V selection, 2 A target and qualified 15/20 V policy documented. 65 ×50 mm/two layers provisional; final thermal/mechanical/manufacturing envelope unproven. |
| 2. Schematic and BOM | blocked | 54/54 active strict supplier audits pass. Eight connected A4 sheets, 128 purchased components. C178373 input/polarity/paste checks pass, but its recommended-land variation needs assembly approval. Buck loop/MLCC bias/current sharing/thermal, regeneration pulse-energy and embedded MCU/STUSB4500 port remain open. |
| 3. Product placement | blocked | No product coordinates/mounting holes authored. Official coordinate-schema defect remains; full default geometry has native overlaps. The CLI cached-schematic false pass is withdrawn. |
| 4. Routing | not started | routingDisabled=true; existing imported thermal vias allowed only by checker; autorouter.allowViaInPad=false. Zero PCB traces in current main/probes. |
| 5. Routed checks | not started | Development checks below do not approve routed output. |
| 6. Fabrication | not started | Land/paste/thermal-via/assembly processes unapproved. No fabrication release or order. |
| 7. Physical prototype | not started | No actual startup/stall/PD/unplug/replug/reversal/bounce/thermal measurements. |
| 8. Store release | not started | Publication blocker: task Git main has no configured remote or destination repository/branch. No GitHub or tscircuit remote update. Validation remains incomplete. |

## A10 implementation and versions

Official main dependencies remain tscircuit 0.0.2742 / CLI 0.1.2237 / core 0.0.2056 / props 0.0.677 / circuit-json 0.0.510; Bun 1.3.9 / TypeScript 5.9.3 / Biome 2.5.14. Latest registry checks still observe tscircuit 0.0.2742/core 0.0.2069/CLI 0.1.2237, already investigated in A9. No local core or dependency override is installed. A9 source/tooling patch evidence remains historical and applicable to the unchanged coordinate defect.

C18 replaces C2918361 with **C178373 / Panasonic 35SVPK330M, 330 µF/35 V**, imported through the official exact-footprint workflow. Direct LCSC stock: 251 at 2026-10-03T11:27:43Z; not reserved and not an assertion of turnkey JLC assembly availability. The native polarized capacitor has two correct electrical pins/pads and positive pin1. All five native single-part checks, warning-free network-enabled build, strict full schema and electrical coverage pass. Body/mechanical and ripple datasheet pages and the generated footprint were inspected. Manufacturer F12 lands differ from the untouched import; actual terminals fit nominally, but tolerance/process approval remains a stage-2 blocker. Details: docs/OUTPUT-CAPACITOR-REVIEW.md and polymer-geometry-A10.json. Failed/unstocked/contradictory unused candidates are retained independently rather than substituted with custom models.

The active capacitor's 10–100 kHz factor gives **3.08 A allowable ripple at PWM frequency**, conditional on manufacturer's Tx ≤105°C. The motor/buck screen is approximately 2.467 A RMS. Above 105°C the rating drops below this load; no 125°C motor rating is claimed. The active 18 mΩ CCM profile retains 1,570 sensitivity-threshold failures out of 16,200 assumed cases. These are not guaranteed hardware corners or proof of actual instability. The unapproved compensation stays 27 kΩ/22 nF/22 pF; full-band models, DCM, 600 kHz current sharing and measured transient/thermal behavior remain required. The unused C133439 sweep remains separately identifiable.

firmware/pd_sequence.c implements bounded, measured-rail power sequencing: inhibit bridge, wait for VM decay, settle the selected feedback branch, request a fresh contract, require matching request/PS_RDY provenance, enable power, qualify VM, then wake the driver. Stale ADC/communication/contract, invalid selector, source generation/reset, bad rail and faults inhibit. A real startup bug was corrected: expected DRV8874 undervoltage while VM is off must not block PD contract qualification. Persistent driver fault after the documented wake interval still latches off. No PWM/direction/reversal timer is introduced. Proposed timing/ADC windows and discharge behavior need hardware review. Both modules compile for Cortex-M0+; **not a linked or flashable MCU image**. Actual GPIO/ADC/I2C/STUSB4500 transport, clocks/startup/watchdog/option bytes and programming pads remain open.

## Checks and reviewed artifacts

| Check | Result |
|---|---|
| Configured format / TypeScript / Bun tests | pass; 16 tests, 360 expect calls, zero failures. Sequencer C harness additionally reports 298 assertions. |
| Active supplier strict full-document/schema/pin/pad audit | pass; 54 parts, zero issues/PCB traces. Unchanged A9 generated probes reused except new freshly built C178373; dependencies unchanged. |
| Thermal-via policy/hash/EP association audit | pass; 12 existing imported vias unchanged, zero issues. No new routed via permitted in pads. |
| Schematic-only official build / strict connectivity/A4/BOM/NC audit | pass; 128 components, 54 supplier codes, 84 exact-signature reviewed advisories, zero PCB traces. |
| tsci check netlist / pin_specification / source / schematic-placement | pass, sequentially against full PCB build. |
| tsci build current full unrouted board | fail; 6,193 footprint overlaps, 297 pad-clearance errors, 1,935 courtyard overlaps in default unplaced geometry. All retained. 128 source components /140 PCB records/zero traces. |
| tsci check placement, including explicit archived full .circuit.json | fail on native default overlaps. Earlier schematic-cache exit-zero result withdrawn, never counted as passed. |
| Active capacitor sensitivity/ripple screen | conditional PWM ripple margin only; sweep exits 1 with 1,570 retained threshold violations. Not compensation/thermal approval. |
| Portable C host and Cortex-M0+ object checks | pass; no linked embedded image/live negotiation asserted. |

All eight sheets were inspected in evidence/schematic-overview-A10.png; the updated buck sheet was additionally inspected at full resolution (dist/review/3-buck-A10.png). A10 titles remain within A4, C18 clearly shows 330 µF and positive polarity, and warnings remain visible. BOM preview C18-A10.png confirms the exact part/value/package; artifact-tool reconciliation reports 128/54 and no duplicate references. Active supplier source hashes and current source/dependency/evidence hashes are recorded in source-manifest-A10.json. README/VALIDATION bookkeeping is outside the checksum map.

Git whitespace review reports CRLF/trailing spaces in preserved raw manufacturer HTML/text downloads. These are source evidence retained byte-for-byte for hash verification, not executable-source defects; no raw data is normalized to hide that result. Configured source formatting passes.

The mode-insensitive CLI cache can reuse schematic-only output for a placement check. docs/TOOLING-ISSUES.md records the traced cause, withdrawn result and full-artifact recheck. Full PCB evidence is archived under full-build-output-A10.circuit.json before regenerating schematic-only output. Do not accept a placement result without inspecting artifact PCB coverage.

## Publication status

Local A10 implementation source commit: 924dbb21d83ec7619323d4d9ec1481e179e1259a. GitHub destination repository/branch remains unknown; git remote -v returns no entries. Configured package @tsci/AnasSarkiz.usb-c-pd-brushed-motor remains version0.0.1/private. Standing authorization exists, but neither remote has been updated. This is a publication blocking issue, not fabrication approval or a request to stop independent design work.

---

A9 and earlier sections below are historical; A10 supersedes active C18 and portable sequence evidence only. Unresolved electrical/tooling/mechanical/physical tests remain applicable.

# A9 historical validation — 2026-10-03

**WIP engineering prototype; placement and routing remain disabled.** Corrected a real TPS54360 input-capacitance shortfall, updated the official CLI, rebuilt every active supplier probe, completed the selector/simplification reviews, and tested an isolated coordinate-serialization fix. No electronic component definition, schema or diagnostic was patched or suppressed. The experimental library package was removed after testing; the main board keeps official dependencies.

## Current gates

| Stage | Status | Evidence / remaining work |
|---|---|---|
| 1. Requirements | in progress | Current requirements, explicit two-slider 5/9/12 V selection and qualified 15/20 V policy documented. Reference board dimensions, final thermal/manufacturing envelope and mechanical fit remain unproven. |
| 2. Schematic and BOM | blocked | 54/54 fresh supplier builds and strict electrical/pad/schema audits pass; eight A4 sheets and 128-component BOM reconcile. Input-capacitance correction, selector nominal mechanics and simplification review complete. Output-capacitance/loop/current/thermal qualification and complete embedded MCU/STUSB4500 port remain open. |
| 3. Product placement | blocked | Official coordinate schema defect persists. A local core fix passes the probe and positioning suite but is not a validated published toolchain. No product placement authored; native placement/full build report default overlaps. |
| 4. Routing | not started | routingDisabled remains set in source/config; autorouter.allowViaInPad=false. Main/probe outputs contain zero pcb_trace elements. |
| 5. Routed checks | not started | Development checks do not approve routed output. |
| 6. Fabrication | not started | Thermal copper, solder-wicking, filling/capping/tenting and assembler process remain to review. No fabrication files or order. |
| 7. Physical prototype | not started | No measured PD, voltage/current, temperature, startup/stall, bounce, unplug/replug or reversal evidence. |
| 8. Store release | not started | Publication blocked: task repository has no remote/known destination branch, and validation gates remain incomplete. Neither GitHub nor tscircuit package updated. |

## A9 implementation and versions

Main project: tscircuit 0.0.2742 / CLI **0.1.2237** / core 0.0.2056 / props 0.0.677 / circuit-json 0.0.510; Bun 1.3.9 / TypeScript 5.9.3 / Biome 2.5.14. Exact dependencies and source checksums identify this revision. evidence/prechange-A9.zip preserves the prior manifest/docs/dependency state. The published peer-dependency warning remains recorded; no main dependency override is forced.

C13/C14 change from two nominal 1 µF ceramics to unchanged supplier import C138687 / Samsung CL32B106KBJNNNE, two 10 µF/50 V X7R 1210 parts. TI requires at least 3 µF effective input capacitance, so the old 2 µF nominal bank fails even before DC bias. Manufacturer characterization plus recorded tolerance/temperature/aging reserves screens the replacement at **6.06 µF** at the 21 V envelope. Ripple-current sharing and actual temperature still require layout/prototype review. The successfully imported C13585 X5R candidate is not used because its bias loss fails that capacitance screen. BOM: **128 components / 54 supplier codes**. See REGULATOR-REVIEW.md and buck-input-review-A9.json.

Every active supplier probe was freshly built on CLI 0.1.2237 with routing disabled: **54 exit-zero builds**, recorded individually and in supplier-build-results-A9.json. Strict full-document schema, expected source/schematic/PCB electrical ports and electrical-pad coverage pass in active-import-audit-A9.json. No component is counted as approved solely because a model exists. C5710902 potentiometer and C908270 SPDT ON-OFF-ON remain unchanged. Their earlier independent datasheet audits remain applicable; fresh builds/schema/pad checks are renewed. THT paste/pin failures are resolved.

The authorized board checker/router policy remains: isViaInPadAllowed=true accepts the 12 existing imported thermal vias; autorouter.allowViaInPad=false prohibits new ones in pads. Fresh A9 output is rechecked against the A7 supplier SHA-256 values in thermal-via-policy-A9.json. No model changes; existing EP/net associations remain. This is a board-wide checker permission, not a new per-via exception or an approved assembler process.

The SW2 mechanical contact columns and imported footprint-local pad labels are reconciled in SELECTOR-MECHANICS.md. Viewed from above with ON at the top: both OFF=5 V, right ON=9 V, left ON=12 V, both ON=inhibit. Manufacturer lands are unnumbered; physical continuity and assembly orientation remain prototype checks. All current documentation/BOM uses this explicit selection. The architecture simplification pass is complete for A9; SIMPLIFICATION.md records per-sheet counts and the retained 128-part tradeoff. A synchronous buck redesign is considered, not silently substituted or claimed as a completed reduction.

MCU-POWER-SEQUENCING.md verifies PA1_CDEN, its disabled reset state, no-pull analog configuration and divider stress calculations. Above-VDD tolerance does not establish zero leakage, valid brownout ADC values or a complete firmware port. No speculative backup circuit was added. The portable PD policy remains tested; it is not flashable firmware or evidence of charger negotiation.

## Tooling investigation

An independent official core 0.0.2069 / circuit-json 0.0.512 probe still emits numeric display_offset_x/y. The unchanged board probe fails the schema on the main official toolchain as well. evidence/coordinate-serialization-A9.json and official-core-coordinate-A9.json retain the failures. No coercion or ignored error.

An isolated core source patch at upstream commit 24d72602641a1bccb3516d6ab9fad7b95ec523bd serializes numeric offsets as millimeter strings and omits an absent group anchor instead of invalid null. Full emitted-document regression fails before and passes after; **26 related tests / five existing snapshots pass**, and ESM/declaration builds pass. The yalc-built package passes the actual unchanged supplier-coordinate probe. It was removed and official core restored, reproducing the official failure. Main board dependencies never used the local link. Reviewed patch: evidence/core-coordinate-fix-A9.patch; detail: TOOLING-ISSUES.md.

Canonical upstream dependency installation fails resolving its pinned Git dependency. The separate diagnostic environment is explicit, not represented as a successful canonical install. Whole-source TypeScript checking fails with **eight identical baseline and patched diagnostics** (matcher return type and TI fixture type identities); none are suppressed. See core-typecheck-comparison-A9.json and both full logs. A source fix is not claimed production-ready or published, and no upstream PR was created.

## Checks and visual review

| Check | Actual result |
|---|---|
| Configured formatting / format check / board TypeScript | pass |
| Configured board tests (`bun test ./tests`) | pass: 15 tests, 357 assertions |
| tsci check netlist / pin_specification / source / schematic-placement | pass; individual A9 logs |
| tsci check placement | fail: default unplaced component/courtyard overlaps; retained |
| Schematic-only build, --disable-pcb --routing-disabled --schematic-svgs | pass |
| Strict schematic connectivity / A4 / supplier / NC / reviewed-advisory audit | pass: 128 components, 54 suppliers, zero issues, 84 individually reviewed raw advisories |
| Full configured board build | fail: 6,286 footprint overlaps, 297 pad-clearance errors, 1,842 courtyard overlaps in default unplaced output; zero routed traces. full-build-diagnostics-A9.json and complete log retained. |
| Independent supplier native builds + strict audit | pass: 54/54; zero routed traces |
| BOM quantities/metadata/import paths | pass: 128/54, no duplicate references or missing required fields |
| Official explicit-coordinate schema check | fail, reproduced after restoring official core |
| Isolated core regression / positioning suite / ESM+DTS build | pass; whole-source TypeScript remains failed as described above |

Source-only Git whitespace checks pass. Raw vendor HTML preserves CRLF, patch context preserves blank lines and diagnostic logs preserve tool whitespace; their whitespace-only Git advisories are harmless evidence formatting, not altered circuit content. Board checks and independent library checks have separate project scopes. The board's TypeScript/format configuration excludes tooling/; the upstream source project receives its own complete TypeScript check and failures remain recorded. An early `bun test tests` filter also selected nested library tests and was stopped; that log is retained as withdrawn, not a board-suite pass. The final configured `bun test ./tests` checks the board tests only.

A7 advisory signatures remain applicable: unchanged supplier hashes/messages and wiring for those warnings; the strict audit rejects new/stale reviews. No warning is hidden. All eight regenerated A9 A4 sheets were inspected in evidence/schematic-overview-A9.png; the changed buck sheet was additionally inspected at full resolution in dist/review/3-buck-A9.png. C13/C14 show 10 µF, titles/labels fit the sheet boundary, and advisories remain visible. The BOM preview/reconciliation and exact metadata were reviewed. No unplaced PCB rendering is treated as placement approval.

## Publication and revision status

Task-local Git repository: main, no configured remote. Package configured as @tsci/AnasSarkiz.usb-c-pd-brushed-motor, version 0.0.1. Registry identity was previously verified as AnasSarkiz without exposing credentials. The pending request for the GitHub repository/branch remains unanswered. **Blocking issue:** no destination for the required GitHub push, plus incomplete validation prevents claiming a fully published step. Neither remote update succeeded. A9 source commit: 1910f114542c6a7a1b03397d5ed3015a2fb1a3c7. Local source commit is recorded after capture; a local commit does not satisfy publication. No merge, fabrication order or hardware approval is implied.

---

A8 and earlier records below are historical; this A9 section controls current status.

# A8 current validation — 2026-10-03

**WIP engineering prototype.** Applied the user-authorized existing settings: `isViaInPadAllowed={true}` and `autorouter={{ allowViaInPad: false }}` with `routingDisabled` retained. This accepts existing imported vias in the checker and prohibits the router from creating new via-in-pad routes. It is a board-wide checker permission, not the proposed future per-via thermal exception. No supplier model, schema or diagnostic was patched or suppressed.

## Current gates

| Stage | Status | Evidence / remaining work |
|---|---|---|
| 1. Requirements | in progress | A7 electrical targets retained; thermal/manufacturing envelope remains open. |
| 2. Schematic and BOM | blocked | 53/53 active supplier electrical/pad/schema probes now pass. Selector mechanics, power-loop/thermal/current qualification, embedded MCU port and simplification remain open. |
| 3. Product placement | blocked | No product placement authored. Explicit-coordinate schema defect persists; schematic/BOM/power gates incomplete. Native placement reports overlapping provisional unplaced bodies/courtyards. |
| 4. Routing | not started | Both board and configuration disable routing. Router allowViaInPad=false. All 53 supplier probes contain zero pcb_trace elements. |
| 5. Routed checks | not started | Development checks do not approve routed output. |
| 6. Fabrication | not started | Imported thermal vias need copper, solder-wicking, filling/capping/tenting and assembler-process review; no order. |
| 7. Physical prototype | not started | No measured current/temperature/PD/reversal results. |
| 8. Store release | not started | Standing authorization exists for WIP publishing; completion blocked by unknown GitHub destination and outstanding validation. No remote update yet. |

## Completed implementation step

A8 thermal-via checker/router policy. Versions unchanged: tscircuit 0.0.2742 / CLI 0.1.2235 / core 0.0.2056 / props 0.0.677 / circuit-json 0.0.510; Bun 1.3.9 / TypeScript 5.9.3 / Biome 2.5.14. Board circuit values, nets, imported models, MCU policy and component count are unchanged. BOM remains 128 components / 53 supplier codes. A7 failed results remain historical evidence. Prechange source/documents are preserved in evidence/prechange-A8.zip.

Fresh official single-file builds for C1849461 (TPS16630/U4), C44377 (TPS54360/U5), C1855818 (DRV8874/U10) exit 0. The former four EP-hole overlap errors per chip clear under the authorized policy. Fifty unaffected A7 supplier builds remain applicable because their source/dependencies/configuration did not change. The full 53-part audit is rerun in evidence/active-import-audit-A8.json: no errors, full pin/pad coverage, strict Circuit JSON schema validation, zero PCB traces. Metadata and mechanical review remain separate.

scripts/audit-thermal-via-policy.ts verifies all three supplier source SHA-256 values are identical to A7, each serialized board permits checker via-in-pad, exactly four existing vias per model remain, each generated via is associated via its source trace with EP, and main/probe sources retain routingDisabled and router allowViaInPad=false. Report: evidence/thermal-via-policy-A8.json, 12 reviewed existing vias, zero issues. Existing core net association is verified in output; this is not an assertion that the importer has a new explicit per-via exception API. Thermal copper/planes have not been routed or approved.

Independent explicit-coordinate schema audit remains blocked: core emits numeric display_offset_x/y where installed Circuit JSON requires strings. A7 coordinate probe output and unchanged dependencies/source are re-audited as A8; no coercion. See evidence/coordinate-serialization-A8.json. No product placement is started to evade this gate.

## Checks and evidence

| Check | Result |
|---|---|
| Configured format / TypeScript / Bun tests | pass; 15 tests, zero failures |
| tsci check netlist / pin_specification / source / schematic-placement | pass |
| tsci check placement | fail: default unplaced component/courtyard overlap; all diagnostics retained in evidence/main-placement-A8.log |
| Schematic-only build, --disable-pcb --routing-disabled --schematic-svgs | pass |
| Strict full schematic connectivity / A4 / supplier / NC audit | pass: 128 components, 53 supplier codes, 84 individually reviewed raw advisories, zero PCB traces |
| Independent supplier audit | pass: 53 supplier codes; 12 authorized imported thermal vias |
| Explicit-coordinate schema audit | fail: numeric display offsets |

A7's individually reviewed warning signatures remain applicable: supplier hashes, messages and wiring are unchanged; the strict schematic audit rejects new/stale warning reviews. No warnings are hidden. All electrical power/firmware/mechanical limitations and physical test matrix below remain unresolved. Changing a checker policy does not validate 2 A thermal operation, compensation, motor startup, PD firmware or assembler processes.

All eight regenerated A8 sheets were inspected in evidence/schematic-overview-A8.png: title revisions fit their A4 boundaries, symbols/annotations remain in their A7 relative positions and warnings remain visible. The BOM render evidence/bom-authoring/after-A8.png was inspected; totals and references reconcile. This is schematic/BOM review, not product PCB placement.

## Publication status

Local task Git repository: main branch, no configured remote. A8 implementation source commit: e1eb848a8cf4b9e14f5b91f32bccee9f0afb3957. Documentation-only bookkeeping follows that source commit; circuit/import/dependency files are unchanged. Configured package: @tsci/AnasSarkiz.usb-c-pd-brushed-motor, version 0.0.1. Existing registry identity @AnasSarkiz verified without exposing credentials. GitHub repository/branch requested from the user. Neither GitHub nor package remote has been updated; a source-only local commit does not fulfill the publication requirement. Publication must retain WIP labels and the recorded validation blockers. No fabrication/hardware approval is implied.

---

A7 and earlier records below are historical. A8 supersedes the three thermal-via import blockers only; other unresolved requirements remain current.

# A7 current validation — 2026-10-03

**Rechecked on the latest observed official releases: tscircuit 0.0.2742 / CLI 0.1.2235 / core 0.0.2056.** The old Dailywell missing-pin/common-symbol and THT solder-paste schema blockers are resolved. Three power-IC footprint errors and a coordinate-serialization defect still remain. No custom component, imported-model patch, schema downgrade or suppressed diagnostic is used. Product placement and routing remain disabled.

## Current stage gates

| Stage | Status | Evidence / remaining work |
|---|---|---|
| 1. Requirements | in progress | One motor, 5/9/12 V, approximately 2 A target, one USB-C input, hardware PWM/direction and approved PD MCU recorded. 65 x 50 mm / two layers / 1.6 mm provisional. Thermal envelope and final manufacturer/mechanical limits remain open. |
| 2. Schematic and BOM | blocked | Full connected eight-sheet A4 draft and reconciled BOM exist. Connectivity and exact supplier identity pass. Three supplier footprints retain native errors; selector mechanics, power-loop/thermal/current qualification, MCU port and final simplification remain open. |
| 3. Product placement | blocked | No product placement authored or approved. All import/BOM/schematic/power gates must pass first. Coordinate serialization also fails strict generated-schema validation. |
| 4. Routing | not started | Board routingDisabled and configuration remain true. Current main and every independent supplier probe contain zero pcb_trace elements. |
| 5. Routed checks | not started | Development checks below are not routed-output approval. |
| 6. Fabrication | not started | No Gerbers/assembly release, order or prototype-fabrication approval. |
| 7. Physical prototype | not started | No hardware measurements or tested rating. |
| 8. Store release | not started | No publication. |

There is no source commit for this untracked task-local design. evidence/source-manifest-A7.json identifies exact source, dependencies, imports and reviewed artifacts by SHA-256. Earlier source/dependency/imports are archived in evidence/prechange-A7.zip and preupgrade-A7.zip; historical documents in historical-documentation-before-A7.zip. Only this task directory was edited.

## Dependency and importer recheck

Installed versions: tscircuit 0.0.2742, CLI 0.1.2235, core 0.0.2056, props 0.0.677, circuit-json 0.0.510; TypeScript 5.9.3, Biome 2.5.14, Bun 1.3.9. Registry versions were queried immediately before the final upgrade. The published circuit-json peer warning remains visible in evidence/toolchain-upgrade-final-A7.log; no dependency override was forced.

Fresh official `tsci import CODE --jlcpcb --use-exact-footprint` calls were made for C908270, C5710902, C1849461, C44377, C1855818, C529330 and C3293142 on the final CLI, plus new supplier-backed resistors C25980, C23162 and C22975. Exact import logs are retained. Every active supplier part was then built as its own one-component A4 probe with PCB generation and routing disabled. CLI help confirms a single-file argument; unsuitable batching/multiple-root trials are withdrawn and preserved, not counted as successful coverage.

**53 supplier codes independently audited:** full generated circuit-json schemas pass, every required/unused electrical source pin has a corresponding electrical footprint pad, and every required schematic pin is present. Fifty probes have no native generated errors. Three probes fail native placement checks. This electrical/schema audit is not blanket mechanical or assembler approval. See evidence/active-import-audit-A7.json and individual supplier-CODE-build-A7.log files. No invalid THT paste schema is generated; THT stencil/process suitability is a later fabrication review.

C908270 has exactly pins 1/2/3 and separate footprint pads. Pin 2 is common per the manufacturer; current product wiring is 1=IN1, 2=PWM, 3=IN2. Stock observed 2026-10-03: 1,314. C5710902 retains its five electrical/mounting contacts and correct supplier identity. Its hardware timing network is unchanged. Nominal Dailywell hole/body and Bourns shaft/land-pattern reviews remain applicable; finished hole/plating/lead and enclosure fit are untested.

### Remaining imported-footprint blockers

| Supplier part | Active component | Native error |
|---|---|---|
| C1849461 / TPS16630PWPR | U4 input eFuse | Four imported via holes overlap U4.EP |
| C44377 / TPS54360DDAR | U5 buck regulator | Four imported via holes overlap U5.EP |
| C1855818 / DRV8874PWPR | U10 H-bridge | Four imported via holes overlap U10.EP |

The geometry resembles a thermal-via pattern, but the imported via definitions lack an explicit reviewed electrical/thermal exception. Intent and assembler processing have not been proved. The native builds and independent audit still fail; these 12 errors are not accepted as harmless. Exact messages, imported-source hashes and affected stage are in evidence/import-blockers-A7.json. Dependent placement is stopped. Appropriate official supplier-model fixes or fully audited substitutes are required; no model is manually patched.

### Remaining tooling blocker

A minimal C23162 resistor probe uses supported pcbX="2mm" / pcbY="-2mm". Core emits numeric display_offset_x=2 and display_offset_y=-2, while the installed circuit-json schema requires strings. The CLI build exits 0, but the independent strict schema audit exits 1. This remains reproducible on the final dependencies. See tests/coordinate-serialization-probe.circuit.tsx, scripts/audit-coordinate-serialization.ts and evidence/coordinate-serialization-A7.json. Those fields are not removed or coerced. Default-position supplier probes isolate model checks from this tooling error; they do not prove coordinate-based placement valid.

## Connected circuit and BOM

All functional blocks are connected on eight native A4 sheets. Product schematic layout is explicitly relative so source positions and native reference annotations stay aligned. MCU pin labels/wiring, hardware interlocks, isolated feedback switches and independent VBUS/VM dividers are in the new qualification block. SW2 is a logical two-bit voltage selector: neither ON=5 V, only 9 ON=9 V, only 12 ON=12 V, both ON=inhibit. Its physical slider/pad numbering needs final reconciliation with the manufacturer's unnumbered mechanical drawing before silkscreen approval. This is not an approved physical selector merely because its import succeeds.

The direct switch-fed PWM architecture removes the old gates/decoding and external driver pull-downs. DRV8874 PMODE is high; OFF is 00/coast. Hardware current regulation, OCP/TSD and analog regeneration protection remain. No dedicated reversal timer is installed. The approved MCU handles only voltage/contract qualification. C5710902 / 330 Ohm / 5.6 nF remains unchanged.

BOM.csv is now **128 placements / 53 supplier parts**. The independent BOM audit checks every reference, quantity, code and import identity. Stock dates are explicit: newly checked parts use 2026-10-03; unchanged supplier observations retain 2026-10-02. LCSC stock is not an assembly-stock reservation or universal JLCPCB eligibility claim. JLC assembly confirmation remains open. Stock/MPN/datasheet records and page hashes are retained under evidence/supplier-CODE-A7.json. The simplification review is still in progress, not passed because the distinct-part count fell by one.

Analog TL431/LM393 protection now powers from VM through a 2 kOhm bias network, retaining clamp operation after USB unplug. R5/R6 change to 4.7 kOhm/20 kOhm to preserve the MCU's high-level margin on the inactive PD-enable signal while Q1 still defaults to inhibit. No backup supply, second USB connector or extra debug header is added. Future SWD/NRST/logic/GND etched pads and mounting/edge-control placement remain unstarted.

## Actual checks and visual review

| Check | Result |
|---|---|
| Configured formatting and TypeScript | pass; final logs retained |
| Configured bun test | 15 pass / 0 fail: fourteen board calculation cases plus compiled C qualification-policy regression |
| Portable C policy host execution | pass; stale/insufficient contracts and faults rejected |
| Cortex-M0+ policy compilation | pass with -ffreestanding; object only, not complete flash firmware |
| Schematic build with --disable-pcb --routing-disabled --schematic-svgs | pass; complete PCB generation is not validated by this command |
| Independent schematic connectivity/supplier/A4/NC audit | pass, 128 components, 53 codes, zero PCB traces |
| tsci check netlist / pin_specification / source / schematic-placement | pass on current source |
| tsci check placement | fail: imported via errors plus overlapping provisional/unplaced components and courtyards; no product placement approval |
| Independent supplier PCB/pin/schema audit | fail overall: three power-IC native footprint errors; full schemas/pad coverage pass |
| Independent explicit-coordinate schema audit | fail: numeric display-offset fields |

All eight current A4 PNG/SVG sheets were visually inspected with diagnostics displayed: dist/review/1-usb through 8-pdhost. An out-of-frame MCU-label issue was corrected by layout changes; no current sheet-boundary diagnostics remain. Fourteen imported symbols still lack internal REFDES text, so native board-level reference/value text is placed adjacent below their symbols. These annotations were inspected; no imported definition changed. All 84 raw advisories (reference category, passive/analog pin metadata, explicit supply-pin metadata and styling) are individually bound to supplier-source SHA, exact message and actual wiring in evidence/main-warning-review-A7.json. No diagnostics are hidden. The connectivity audit rejects new or stale reviews. These advisory reviews do not waive the 12 footprint errors, selector mechanics or power-stage limitations.

PCB inspection grids and supplier probes are tooling/model inspection artifacts, not product placement. The final successful coverage uses separate single-component files. The product's default unplaced geometry still overlaps and is not presented as a layout. No snapshot acceptance, routed geometry, copper-width compliance or fabrication export is claimed.

## Power and mandatory prototype qualification

The implemented 7.15 kOhm eFuse screen gives 2.243–2.797 A with recorded tolerance assumptions. Source qualification considers fault current as well as normal/peak watts. The current policy chooses 15 V/3 A for 5/9 V and 20 V/3 A for 12 V peak operation; it rejects 5 V-only, inadequate-current and 12 V-only sources. It does not assume a native 12 V PDO or blindly prefer 20 V. PD-QUALIFICATION.md records the fresh-capability/RDO/PS_RDY checks and remaining STM32 transport, ADC calibration, watchdog and NVM work. No live PD negotiation or programmed board is claimed.

Power/current calculations pass their stated engineering assumptions: 85% efficiency, 0.36 Ohm hot bridge, -5% measured input, 0.55 V diode, 1 W auxiliaries and 2.423 A peak. This does not complete the power gate. Buck compensation/DC bias/ESR and thermal layout, full protection tolerance, narrow current-regulation margin above 2 A, 5 V current-mirror accuracy, generic-motor startup and braking/dump pulse energy remain unapproved. No arbitrary 2 A motor startup guarantee or tested continuous rating is claimed.

| Physical test | Required evidence; status |
|---|---|
| Startup / inrush | All 5/9/12 V modes, light/heavy loads, rail overshoot, PD current and acceleration; pending |
| Stall / current limit | Chopping peaks/average, OCP, eFuse latch-off and 5 V accuracy; pending |
| Regulator/driver/LDO thermal | Steady 2 A, ambient range, all modes and representative copper; pending |
| Insufficient source / non-PD | Output remains inhibited across weak/native-12/5-only sources and capability changes; pending |
| USB unplug/replug / resets | Safe inhibit, no backfeed, motor-powered clamp, ADC injection, fresh requalification and watchdog/brownout; pending |
| OFF→FWD / OFF→REV | Coast startup and useful PWM range, loaded logic thresholds and input pull-down robustness; pending |
| FWD→REV / REV→FWD | Bounce, reversal peaks, VM regeneration, driver dead time, braking current and dump energy; pending |

Manufacturer datasheet/dead-time review is not a measured shoot-through or reversal test. Hardware tests are needed to decide whether additional coast delay or a revised current-limit/power envelope is required. Complete the unresolved schematic/import/power/simplification gates before product placement; keep routing disabled afterward until the requested review.

---

The A6 and earlier records below are historical and do not describe the active A7 assembly.

# A6 fresh supplier-import recheck — 2026-10-03

**The previous missing-pin/common-symbol import blocker is resolved in fresh imports.** Updated to official tscircuit 0.0.2736 / CLI 0.1.2232. The published umbrella still resolves core 0.0.2052 (its ^0.0.2052 dependency); registry core 0.0.2053 was observed but not forced through an incompatible override. props 0.0.676 / circuit-json 0.0.509 / circuit-to-svg 0.0.437 remain. package.json and bun.lock are pinned; prior files/outputs are archived in evidence/preupgrade-A6/.

Both C908270 and C908281 now import as official supplier-backed `chip` pinout boxes, with exactly three source pins, schematic ports and electrical footprint pads. This is importer output, not a locally authored generic replacement. Physical pin numbering is preserved. Manufacturer tables identify pin 2 as common, with 2–3 / OPEN / 2–1 contacts. Probe nets explicitly prove pin 1→IN1, pin 2→PWM, pin 3→IN2, with separate source traces. Native sheet notes state the contact table. There is no misleading native SPDT glyph assigning common to pin 1. No component definition, footprint or pin mapping was patched.

The original audit also required one particular native SPDT glyph. That requirement was inappropriate for the new complete supplier pinout box and was corrected to accept a box only when exact manufacturer/supplier identity matches. Required pin count, port-to-pad association, numbering, isolated common/PWM wiring, full generated schema and native A4-sheet membership remain checked. Missing ports, wrong numbers, shared/shorted nets, wrong part identity, schema failures or an incorrect common on a drawn SPDT symbol still fail. This is not an assertion that the boxed component simulates mechanical contacts; contact behavior is manufacturer-reviewed.

Four diagnostics per part remain visible and are individually proven harmless for these passive switches: SW reference prefix versus chip category, passive pin attributes unspecified, no dedicated power pin, and no dedicated ground pin. Inspected core/checks source confirms these are chip-category metadata advisories. A mechanical switch has three passive bidirectional contacts, no required supply or ground. Reviews are bound to exact supplier code, imported-source SHA-256, warning type, message and component ID in evidence/dailywell-warning-review-A6.json. New/unreviewed warnings still fail; raw warnings are preserved in each audit. Nothing is suppressed.

## Current gates and limits

| Stage | Status | Current meaning |
|---|---|---|
| 1. Requirements | in progress | Broad 5/9/12 V, approximately 2 A target retained; final selector/power envelope unresolved. |
| 2. Complete schematic and BOM | blocked | Switch electrical/schema import blocker resolved. Full revised board, PD policy, selector, remaining imports/metadata and mechanical qualification are not approved by these isolated probes. |
| 3. Product placement | blocked | Complete board gate has not passed. Model probes are not product placement. |
| 4. Routing | not started | Routing remains disabled; each current probe has zero copper traces. |
| 5. Routed automated/visual checks | not started | Development checks below do not complete this stage. |
| 6. Fabrication | not started | No fabrication approval or order. |
| 7. Physical prototype | not started | No measurements. |
| 8. Store release | not started | No publication. |

C908270 remains the preferred PC-through-hole candidate. Its imported slots changed from 2.70002 × 1.1000232 mm to **2.54 × 1.1000232 mm**. Body outline remains approximately 6.86 × 12.70 mm and pin pitch 4.700016 mm, matching nominal manufacturer dimensions. All three electrical pads are present; graphics are not fictitious electrical mounting terminals. Manufacturer M2 leads are nominally 1.27 mm wide × 0.76 mm thick. Capsule geometry clears that nominal rectangular lead: available slot width at its thickest corner is about 2.24 mm, greater than 1.27 mm. Finished-hole plating/tool tolerances, maximum lead dimensions and the generic catalog's undocumented -5 variant are not independently established; physical fit remains a qualification item, not a claimed tested result. The 12 mm hardware projection must be considered during placement beyond the body courtyard.

C908281 electrical/schema coverage also passes, but it is an M1 solder-lug part, not the preferred direct-PCB termination. Nominal capsule corner clearance is not established for its 1.52 × 0.51 mm lug in the 1.6999966 × 0.700024 mm slots. It is not approved as the production fallback. No stock recheck is claimed; supplier observations remain dated 2026-10-02.

Each output has six valid `rotated_pill` paste records, with zero schema errors. Stencil suitability for a through-hole assembler process still needs fabrication-stage review; schema validity is not stencil approval. The dependency installer still reports its published circuit-json peer mismatch, recorded unsuppressed in evidence/toolchain-upgrade-A6.log.

## Recheck evidence

Fresh imports, netlists, unrouted probe builds and all five native checks were run again. Independent electrical/schema audits pass with all original generated warnings retained and explained. Formatting, TypeScript and 12 calculation tests pass. Native A4 schematic/PCB renders and manufacturer termination/body drawings were inspected. No complete product-board validation, new reduced BOM, tested current rating or placement approval is claimed.

- evidence/C908270-strict-audit-A6.json and C908281-strict-audit-A6.json: all three source/schematic/pad associations, exact roles, zero schema errors, raw/reviewed warnings, zero copper traces.
- evidence/import-C908270-A6.log and import-C908281-A6.log: fresh official imports.
- evidence/dailywell-1m/2m-final-netlist-A6.log, final-build-A6.log and native-check logs: actual command results.
- evidence/installed-versions-A6.json and published-tool-*-A6.json: actual versus published versions.
- evidence/format-check-A6.log, typecheck-A6.log and tests-A6.log: development checks.
- evidence/source-manifest-A6.json: source/dependency/artifact checksums; no source commit exists.

The A5 report below is retained as historical evidence and does not describe the new imported switches.

---

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
