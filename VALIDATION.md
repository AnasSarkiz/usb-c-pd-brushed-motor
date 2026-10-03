# A21 validation — 2026-10-03

**Unrouted WIP prototype; hardware/BOM remain A19,129 purchased components/57 supplier codes. Product placement is unstarted.** PD/VM decisions now contain entire explicit voltage-uncertainty intervals, and VM rise during request/contract waiting aborts power permission. No calibrated physical measurement adapter or hardware qualification is implied.

|Stage|Status|Current evidence /remaining work|
|---|---|---|
|1. Requirements|in progress|Explicit5/9/12 V selector and approximately2 A target retained; final mechanical/thermal/operating envelope open.|
|2. Schematic/BOM|blocked|All57 imports and schematic connectivity retain A19 validity under identical source/dependency hashes. ADC interval interface is now enforced; qualified conversion/reference/filter bounds, actual timer/I2C/fresh-response owner, approved NVM image and outstanding converter/thermal/current-sharing/land/energy qualification remain open.|
|3. Product placement|blocked|No product coordinates/mounting holes; full A19 unplaced geometry errors remain unresolved.|
|4. Routing|not started|Explicitly disabled; no new routed via-in-pad permitted.|
|5. Routed checks|not started|No routed output/shorts/snapshot approval.|
|6. Fabrication|not started|No assembler/process approval/release/order.|
|7. Physical prototype|not started|No measured motor/PD/ADC/noise/thermal/reversal evidence.|
|8. Store release|not started|GitHub destination absent; neither remote published.|

## Completed A21 step

Removes scalar physical-voltage fields from pd_observation and requires valid lower/upper bounds. No midpoint or raw-ADC compatibility fallback. VBUS and VM must each fit their entire relevant±5% window. All active sequence states reject invalid/reversed measurements; VM upper bound≤1 V is enforced through feedback, request and contract wait. Back-drive while waiting therefore cannot silently proceed to HOST_ALLOW.64-bit comparisons reject extreme values without multiplication overflow. Existing current/RDO/freshness/token/rail stability and feedback-preservation rules remain intact; no direction logic or reversal timer added.

|Check|Actual result/evidence|
|---|---|
|Independent interval/state regressions|393,356 C assertions pass: all0..65535 mV motor endpoints for5/9/12 V, exact boundaries, midpoint traps, VBUS bounds, invalid/reversed/extreme ranges, conditional A19 examples, all active states and back-drive. pd-interval-assertions-A21.log.|
|Existing policy and sequence C tests|60,202/11,518 assertions pass using explicitly synthetic exact intervals, not a production ADC-to-voltage shim. Separate A21 binaries/host logs preserved.|
|Configured tests|26 pass/0 fail/409 expects; tests-final-A21.log. All prior GPIO/ADC/transport/NVM/startup/request regressions rerun.|
|Formatting/TypeScript|Pass; format-check-final-A21.log/typecheck-final-A21.log.|
|Target compilation|All8 production modules pass freestanding Cortex-M0+ ARM GCC16.1 strict compilation; target-compile-A21.json and logs. No linked/executed image.|
|Power report|Configured report passes unchanged conditional assumptions; power-report-final-A21.log. Thermal/transient and narrow9 V/15 V margin remain open.|
|Hardware evidence reuse|Diff to A20 bookkeeping41164d4 confirms identical circuits/import/BOM/dependencies. hardware-evidence-reuse-A21.json binds A19 outputs. All57 supplier/schema and schematic results, plus unresolved actual unplaced-board overlap/clearance errors, remain applicable. No unnecessary new board build/visual/stock claim.|

Versions unchanged:tscircuit0.0.2742/CLI0.1.2237/core0.0.2056/props0.0.677/circuit-json0.0.510; Bun1.3.9/TypeScript5.9.3/Biome2.5.14. This finishes the interval-consuming policy boundary only. A20 raw ADC valid cannot set qualified interval validity; the actual adapter must establish the accuracy/noise/filter/clock conditions and preserve oldest sample age. Actual GPIO output application, fresh SOP/event provenance, I2C/timebase/NVM integration and prototype tests remain pending. See docs/PD-VOLTAGE-INTERVALS.md.

## Revision and publication

Exact hashes: evidence/source-manifest-A21.json. Source commit a7c5cde7d30d4f7a67a9579bbfe1e9993af97809. **Publication blocker:** task branch main still has no GitHub remote; destination repository/branch remains unspecified. Standing authorization exists; neither GitHub push nor tscircuit package update succeeded. Source is committed locally only. No destination, credentials or physical results are invented.

---

A20 and earlier records below are historical; unchanged hardware findings remain applicable.

# A20 validation — 2026-10-03

**Unrouted WIP prototype; hardware/BOM remain A19,129 purchased components/57 supplier codes. Product placement is unstarted.** Adds bounded real-ADC1 raw acquisition/calibration, timestamps and fault inhibition. Raw counts do not qualify a motor voltage or PD contract.

|Stage|Status|Current evidence /remaining work|
|---|---|---|
|1. Requirements|in progress|Explicit5/9/12 V selector and approximately2 A target retained; final mechanical/thermal/operating envelope open.|
|2. Schematic/BOM|blocked|All57 active imported parts and connectivity remain validated under identical A19 circuit/source/dependency hashes. Raw ADC backend now exists; proven clock, calibrated intervals/noise/filter dynamics, actual I2C/event ownership, approved NVM image, converter/thermal/current-sharing, capacitor land process and regeneration envelope remain open.|
|3. Product placement|blocked|No product coordinates/mounting holes. Actual full A19 unplaced-board overlap/clearance failures remain unresolved; no schematic-only cached pass accepted.|
|4. Routing|not started|Explicitly disabled; no new routed via-in-pad permitted.|
|5. Routed checks|not started|No routed output/shorts/snapshot approval.|
|6. Fabrication|not started|No assembler/process approval/release/order.|
|7. Physical prototype|not started|No measured motor/PD/ADC/noise/thermal/reversal evidence.|
|8. Store release|not started|Destination repository/branch absent; neither remote published.|

## Completed A20 step

firmware/stm32_adc.{c,h} uses the unchanged ST register structures and actual ADC1/ADC1_COMMON/factory-word addresses. Initialization commands power/bridge inhibition first, verifies analog pins, chooses HSI16/2 asynchronous ADC clock, verifies settings before calibration, and observes bounded regulator/calibration/ready/reference delays. Each fresh PA0/PA1/VREFINT conversion waits for CCRDY/EOC/EOS, checks overrun/configuration/range and timestamps the complete frame. Invalid contexts, ambiguous/lost state or deadlines return all-zero invalid data and latch inhibition. There is no permission-setting API or motor/direction control in this module.

|Check|Actual result/evidence|
|---|---|
|Primary-source acquisition|Unchanged ST LL ADC/RCC reference headers archived with Git-blob/SHA-256 provenance. Existing compiled vendor/CMSIS definitions remain byte-exact and configured integrity tests pass. No model/library patch.|
|Strict C host ADC model|104,923 assertions pass; all4096 rail counts, fresh frames, every lost MMIO write, corrupted settings, missing flags, overrun/data/factory faults, stopped/backwards/late time, bounded polls and natural rollover. Evidence/stm32-adc-assertions-A20.log; test source remains inspectable.|
|Configured tests|25 pass/0 fail/406 expects; tests-final-A20.log. Existing GPIO and portable PD/startup/request/NVM/sequence regressions rerun with separate A20 binaries.|
|Formatting and TypeScript|Pass; format-check-final-A20.log/typecheck-final-A20.log. No imported definitions formatted or changed.|
|Freestanding target compilation|All8 production Cortex-M0+ objects pass ARM GCC16.1 -Wall -Wextra -Werror; target-compile-A20.json and individual logs. Not linked, flashed or executed.|
|Power calculations|Configured power report passes unchanged conditional assumptions; power-report-final-A20.log. Existing17 mA9 V/15 V margin and thermal/transient uncertainties remain unresolved.|
|Prior board evidence reuse|Git comparison to d0c562e confirms circuit/import/BOM/dependency/audit sources unchanged; hardware-evidence-reuse-A20.json binds archived artifact hashes. No unnecessary new board build or visual/supplier/stock claim. A19 schema/connectivity/import and unplaced-board findings remain applicable.|
|Failures retained|Lost-write testing found calibration lacked prior setting readback; production corrected. Rollover fixture artificially changed time backwards; corrected to natural rollover. First/second/third ADC logs retained. Initial target-command heredoc redirection failed before compilation; rerun succeeds and failure record remains. No failure suppressed.|

Versions unchanged:tscircuit0.0.2742/CLI0.1.2237/core0.0.2056/props0.0.677/circuit-json0.0.510; Bun1.3.9/TypeScript5.9.3/Biome2.5.14. ADC timing uses a caller-supplied monotonic microsecond clock with no fallback; that actual clock, startup/watchdog/I2C and fresh PD-response owner still require integration.8 MHz ADC accuracy is not established by the35 MHz characterized datasheet error alone. VREFINT calibration supply/temperature/drift and divider/filter/noise intervals remain qualification work. See docs/STM32-ADC.md.

## Revision and publication

Exact hashes: evidence/source-manifest-A20.json. Source commit 5ccf142f12b49cfc26265af407ea83206467fa20. **Publication blocker:** task branch main still has no GitHub remote; destination repository/branch is unspecified. Standing push/package authorization exists, but no destination is invented. Neither GitHub push nor tscircuit package update succeeded; this step is locally committed only. This missing destination is independent of continuing design work.

---

A19 and earlier records below are historical; their hardware findings remain applicable where unchanged.

# A19 validation — 2026-10-03

**Unrouted WIP prototype. Product placement is unstarted.** Replaces four existing ADC divider resistors with0.1% official supplier imports;129 purchased parts/57 supplier codes. Nominal values, PWM, current limits, regulated voltages and direction topology remain unchanged.

|Stage|Status|Current evidence /remaining work|
|---|---|---|
|1. Requirements|in progress|Explicit5/9/12 V selector, approximately2 A target and voltage-aware15/20 V policy retained; final mechanical/thermal/operating envelope open.|
|2. Schematic/BOM|blocked|All57 active supplier electrical/pad/schema audits pass; product schematic connectivity passes. Actual ADC calibration/reference/filter dynamics, approved NVM image, fresh-response ownership/STM32 integration, complete converter/thermal/current-sharing, capacitor land process and regeneration envelope remain open.|
|3. Product placement|blocked|No product coordinates/mounting holes. Full unplaced board fails actual overlap/clearance checks; no cached schematic-only pass is accepted. A12 native numeric placement probe remains applicable.|
|4. Routing|not started|Explicitly disabled; no new routed via-in-pad permitted.|
|5. Routed checks|not started|No routed output/shorts/snapshot approval.|
|6. Fabrication|not started|No assembler/process approval/release/order.|
|7. Physical prototype|not started|No measured motor/PD/ADC/noise/thermal/reversal evidence.|
|8. Store release|not started|GitHub destination absent; neither remote published.|

## Completed A19 step

R60/R66=C855559/YAGEO AT0603BRD07100KL100 kΩ; R61/R67=C95204/YAGEO RT0603BRD0710KL10 kΩ. Both0.1%/25 ppm/°C. Four replacements, zero added placements, two supplier codes. Both import unchanged using the official exact-footprint workflow; BOM/design/import manifests and simplification documentation updated. Source-backed static interval screening shows the old1%5 V acceptance window is empty and the new initial/TCR window is558–56912-bit counts; nominal-code bounds4.804–5.197 V. See docs/ADC-SENSING.md for full assumptions and physical/integration limits.

|Check|Actual result/evidence|
|---|---|
|Official imports|both pass network-enabled import; first sandbox C855559 network failure retained. No custom definition/model patch/suppression.|
|Stock/specification evidence|raw catalog pages/PDFs retained with hashes:7,670/392,640 observed LCSC stock on2026-10-03. JLC assembly eligibility/stock remains unconfirmed.|
|Each new isolated probe build and five native checks|both builds/all10 checks exit0. Strict schema/pin/pad/paste audit passes. Exactly2 open-pin warnings per unwired probe retained and explained; not product connectivity failures.|
|All active supplier audit|57 pass, zero issues/zero routes.55 unchanged A11 probe outputs reused under identical imported-source hashes/dependencies, plus2 new A19 outputs.|
|Full product schematic/connectivity|pass:129 components/57 suppliers/zero issues/zero copper routes.84 raw diagnostics match exact prior source/hash/wiring warning reviews; none suppressed or implicitly accepted.|
|Native A4 visual review|all8 final A19 rendered sheets inspected; correct prototype revision, readable symbols/net labels, retained advisory overlays. Supplier native pads/detail views and manufacturer mechanical pages inspected.|
|ADC static uncertainty screen|pass:261,568 independent corner checks; initial/TCR and separate single-endurance scenarios. No ADC peripheral/physical or lifetime qualification claim.|
|Configured formatting/TypeScript/Bun/power report|pass:24 tests/403 expects, zero failures; named A19 logs. Power report remains conditional on prior assumptions.|
|Full native unrouted build|exit1, actual PCB artifact generated. Strict schema passes;129 source/141 PCB components/0 routed traces.6301 footprint overlaps/297 pad-clearance/1955 courtyard overlaps from intentional default unplacement remain unresolved.|
|Five required main source checks|netlist/pin_specification/source/schematic-placement exit0; placement exit1. Explicit archived full-artifact placement check also exits1. Full-build/placement failures retained, no fabricated approval.|
|Disk-space failure and cache recovery|first final full build failed ENOSPC and left old schematic-only output. The early audit/copy is withdrawn as board evidence and renamed stale-schematic-cache-*. Only this task's disposable .cache/bun dependency cache removed; network dependencies/sources unchanged. Fresh full rerun produces the actual141-PCB artifact and unresolved placement findings. Raw failure/check logs retained.|
|BOM authoring/reconciliation|Artifact Tool edits verified all129 unique references/57 codes, quantities and supplier identity; untouched rows preserved exactly. Before/after changed ranges inspected. Raw CSV correctly preserves0603 identifiers even where preview displays603. CSV export API unavailable; RFC4180 serialized verified range.values. No extra XLSX deliverable.|

Versions unchanged:tscircuit0.0.2742/CLI0.1.2237/core0.0.2056/props0.0.677/circuit-json0.0.510; Bun1.3.9/TypeScript5.9.3/Biome2.5.14. A18 GPIO/software checks remain applicable; no firmware behavior changed. A14 converter and other A11 evidence remain applicable to unchanged regulator/current/PWM/energy parts, with their limitations intact. The previous1% divider accuracy/stress calculations are superseded by A19 where applicable; above-VDD/brownout/injection/filter qualifications remain open.

## Revision and publication

Exact hashes: evidence/source-manifest-A19.json. Source commit 4f4903790068f97a56025937fc1bc1ef2d74494e. **Publication blocker:** task branch main has no GitHub remote; destination repository/branch remains unspecified. Standing authorization exists, but neither GitHub push nor tscircuit package update succeeded. No remote completion, placement, fabrication or physical approval is implied.

---

A18 and earlier records below are historical. A19 supersedes the four ADC sensing parts, corresponding schematic/BOM and current checks only. Prior unresolved electrical/assembly/tooling/physical limitations remain explicit.

# A18 historical validation — 2026-10-03

**Unrouted WIP prototype; hardware/BOM remain A11. Product placement is unstarted.** Adds actual STM32 GPIO initialization/inhibition and digital reads; no motor-enable/feedback-changing API or flashable image.

| Stage | Status | Current evidence /remaining work |
|---|---|---|
|1. Requirements|in progress|Explicit5/9/12 V selector and approximately2 A target retained; final mechanical/thermal/operating envelope open.|
|2. Schematic/BOM|blocked|129 parts/55 supplier codes unchanged. A18 GPIO safety passes host/target-object checks; approved NVM image, fresh-response ownership, STM32 startup/clock/ADC/I2C/watchdog integration, full converter/thermal/current-sharing, capacitor land process and regeneration envelope remain open.|
|3. Product placement|blocked|No product coordinates or mounting holes. A12 numeric native placement probe remains applicable; prior electrical/assembly gates remain.|
|4. Routing|not started|Explicitly disabled; new routed via-in-pad prohibited.|
|5. Routed checks|not started|No routed output/shorts/snapshot approval.|
|6. Fabrication|not started|No assembly approval/release/order.|
|7. Physical prototype|not started|No measured PD/motor/thermal/reversal/pin-transition evidence.|
|8. Store release|not started|GitHub destination absent; neither remote published.|

## Completed A18 step and checks

The exact ST/CMSIS definitions compile unchanged on host and ARM. GPIO initialization first removes power permission, configures the transistor-base inhibit pin open-drain before raising its latch, and preserves charged-rail feedback and SWD state. Bonded aliases/remaps/ADC clamp/I2C AF/digital inputs and mandatory readback are implemented. LSE-active/configuration/write failures latch off. See docs/STM32-SAFE-GPIO.md for actual pin mapping, ownership requirements, source references and remaining boundaries.

|Check|Actual result/evidence|
|---|---|
|Configured formatting/TypeScript|pass; format-check-A18.log/typecheck-A18.log.|
|Configured Bun suite|pass:24 tests/403 expects, zero failures; tests-final-A18.log.|
|GPIO C11 Wall/Wextra/Werror|pass:10,289,863 assertions; stm32-gpio-final-A18.log. Register-model execution only.|
|Unmodified vendor definitions/licenses|all9 file SHA256/Git-blob identities checked in the suite.|
|All seven Cortex-M0+ objects|pass; target-objects-A18.log, ARM GCC strict freestanding compilation, no linked/executed image.|
|Power report|pass as calculation; power-report-A18.log. Prior assumptions/physical limits remain.|
|Initial host/compiler/test failures|retained:cmsis-host-probe-A18.log,cmsis-host-normal-A18.log,stm32-gpio-initial-A18.log. Corrected canonical include dependency/test expectation; no vendor patch or suppression.|
|A11 hardware/import/BOM/schematic|unchanged; hardware-unchanged-A18.diff empty. Previous schematic/import evidence remains applicable; no repeated product build/visual/placement approval claim.|

Versions unchanged:tscircuit0.0.2742/CLI0.1.2237/core0.0.2056/props0.0.677/circuit-json0.0.510; Bun1.3.9/TypeScript5.9.3/Biome2.5.14. No purchased component, imported definition, hardware value, dependency, checker or threshold changed. All prior power/assembly/tooling failures remain explicit.

## Revision and publication

Exact hashes: evidence/source-manifest-A18.json. Source commit ee2b14af5814266e0b186ebdf5713df6c7ce911a; hardware revision0f2693738e630c4997942d8536b3d913cb1bd5e5. **Publication blocker:** task Git branch main has no remote; destination repository/branch remains unanswered. Neither GitHub push nor tscircuit package update succeeded. Standing authorization is recorded; no destination is invented and no fabrication/hardware approval is implied.

---

A17 and earlier records below are historical. A18 supersedes GPIO/current software checks only; prior electrical/assembly/tooling/physical limitations remain applicable.

# A17 historical validation — 2026-10-03

**Unrouted WIP prototype; hardware/BOM remain A11. Product placement is unstarted.** Corrects source/operating RDO current qualification and adds malformed-field rejection. No hardware current limit is increased.

| Stage | Status | Current evidence /remaining work |
|---|---|---|
| 1. Requirements | in progress | Explicit5/9/12 V selector, approximately2 A target and voltage-aware15/20 V policy retained; final operating/thermal/mechanical envelope open. |
| 2. Schematic/BOM | blocked |129 parts/55 supplier codes; A11 electrical/import/schema unchanged, A14 conditional CCM screen passes. A17 resolves RDO compatibility for3–5 A sources. Approved NVM image, fresh-response/STM32 integration, full converter/thermal/current-sharing, land process and regeneration envelope remain open. |
| 3. Product placement | blocked | No product coordinates/mounting holes. A12 numeric native placement probe remains valid; prior required gates remain open. |
| 4. Routing | not started | Explicitly disabled; no new routed via-in-pad allowed. |
| 5. Routed checks | not started | No routed output/shorts/snapshot approval. |
| 6. Fabrication | not started | No process approval/release/order. |
| 7. Physical prototype | not started | No measured PD/motor/thermal/decay/reversal/NVM evidence. |
| 8. Store release | not started | GitHub repository/branch/remote absent; neither remote published. |

## Completed A17 step

The portable plan retains the exact selected source PDO. Qualification requires3 A operating and maximum matching its3–5 A source advertisement, consistent with current manufacturer behavior. Reserved RDO31/23:20, mismatch/GiveBack and malformed source profiles are rejected. The sink write remains3 A. Named capability/rail API structures replace excess positional arguments; all local callers are updated. Host reports distinguish operating from maximum current. See docs/PD-RDO-CURRENT.md.

The baseline reproduces six discrepancies and remains retained. Initial suite failure from a manually constructed fixture missing source_pdo was corrected by adding its real15 V/3 A advertisement; the original unsafe12 V rejection and valid9 V timeout assertions remain. This does not complete freshness, target integration or electrical/physical approval.

| Check | Result |
|---|---|
| A16 baseline reproduction | expected failure, exit1:six current/reserved-bit discrepancies retained with source revision and binary. |
| Configured formatting /TypeScript /Bun suite | pass:22 tests/382 expects, zero failures; initial fixture failure retained separately. |
| Policy C11 Wall/Wextra/Werror harness | pass:60,202 assertions; all source/current-field codes, modes/voltages, reserved/mismatch/GiveBack and malformed-profile cases. Simulated observations only. |
| Sequence/request host harnesses | pass:11,518/1,037 assertions; full startup on5 A source for all modes, changed maximum inhibits, sink writes remain3 A. |
| RX/startup/NVM host harnesses | pass through renewed configured suite; capture/event/NVM physical limits remain. |
| All six portable Cortex-M0+ objects | pass; no linked/flashable image. |
| Power report | pass as an engineering calculation; unchanged input/current/thermal assumptions, no physical qualification. |
| A11 hardware/import/BOM/schematic and A12/A14 evidence | unchanged and applicable, including unresolved layout/assembly/power/tooling failures. No repeated product build/visual review/placement claim. |

Versions unchanged:tscircuit0.0.2742 /CLI0.1.2237 /core0.0.2056 /props0.0.677 /circuit-json0.0.510; Bun1.3.9 /TS5.9.3 /Biome2.5.14. No purchased component, imported definition, hardware value, dependency, checker/schema or threshold changed. Any wider charger compatibility requires actual fresh negotiation and prototype evidence.

## Revision and publication

A17 hashes are recorded in evidence/source-manifest-A17.json; source commit da6828547ea114c403ab5633a356dfa3b3a6f520. Hardware source remains0f2693738e630c4997942d8536b3d913cb1bd5e5. GitHub repository/branch/remote still unknown. Standing authorization exists but missing destination blocks completing publication. Neither GitHub nor tscircuit remote update succeeded. No physical/fabrication approval is implied.

---

A16 and earlier records below are historical. A17 supersedes RDO current handling/current software checks only; remaining hardware/assembly/power/tooling/physical limits remain applicable.

# A16 historical validation — 2026-10-03

**Unrouted WIP prototype; hardware/BOM remain A11. Product placement is unstarted.** Adds full NVM readback transport, not a completed provisioning gate or flashable MCU.

| Stage | Status | Current evidence /remaining work |
|---|---|---|
| 1. Requirements | in progress | Explicit5/9/12 V selector, approximately2 A target and voltage-aware15/20 V policy retained; final operating/thermal/mechanical envelope open. |
| 2. Schematic/BOM | blocked |129 parts/55 supplier codes; A11 electrical/import/schema evidence unchanged, A14 conditional CCM screen passes. Approved NVM image, fresh-response/STM32 integration, full regulator/thermal/current sharing, land process and regeneration envelope open. Current RDO maximum-current comparison unnecessarily inhibits source profiles above3 A; correction pending. |
| 3. Product placement | blocked | No product coordinates/mounting holes. A12 numeric native placement probe remains valid; required prior gates remain open. |
| 4. Routing | not started | Explicitly disabled; no new routed via-in-pad allowed. |
| 5. Routed checks | not started | No routed output/shorts/snapshot approval. |
| 6. Fabrication | not started | No process approval/release/order. |
| 7. Physical prototype | not started | No measured PD/motor/thermal/decay/reversal/NVM evidence. |
| 8. Store release | not started | GitHub repository/branch/remote absent; neither remote published. |

## Completed A16 step

firmware/stusb4500_nvm.c/.h implements the manufacturer's customer-sector READ procedure with complete40-byte comparison, no erase/program opcodes and no buffer writes. Inhibition/provenance-invalidated adapter preconditions are mandatory; all faults/partial transfers/deadlines/controller-state/image mismatches latch approval off without implicit retry. A finite busy loop and timer-stall guard prevent unbounded waits. Null expected image is rejected; there is no guessed production image or factory fallback. See docs/STUSB4500-NVM.md.

No approved manufacturer-tool image or physical readback/programming is available. The current JSON is configuration intent only. Exact equality still requires independent image review, actual cold-start NVM/PD behavior and target implementation. A16 source review additionally found the RDO-maximum-current issue for sources above3 A; the existing policy remains unchanged pending a tested correction. All earlier remaining power/assembly/firmware/tooling gates persist.

| Check | Result |
|---|---|
| Configured formatting /TypeScript /Bun suite | pass:20 tests/372 expects, zero failures. |
| NVM C11 Wall/Wextra/Werror harness | pass:20,639 assertions; all40 comparison bytes and all40 failed/late normal transfer positions, partial side effects, each sector-state mismatch, busy/clock faults, timing/wrap/callback/image/precondition rejection. Synthetic test memory only. |
| Freestanding Cortex-M0+ NVM object | pass; no linked/flashable image. |
| Prior policy/sequence/RX/request/startup harnesses | pass in renewed configured suite; A16 executable paths preserve prior artifacts. |
| Manufacturer source review | both official NVM readers/constants retained byte-exact and Git-blob hashes checked; actual0x95/0x96/0x97/0x53 and READ-only operations agree. |
| Attempted community PDF | failed as evidence retrieval: HTTP command0 returned HTML redirect, not PDF. Raw HTML retained losslessly compressed; no PDF/visual approval claimed. |
| A11 hardware/import/BOM/schematic and A12/A14 evidence | unchanged and applicable, including unresolved layout/assembly/power/tooling failures. No repeated product build/visual review/placement claim. |

Versions unchanged:tscircuit0.0.2742 /CLI0.1.2237 /core0.0.2056 /props0.0.677 /circuit-json0.0.510; Bun1.3.9 /TS5.9.3 /Biome2.5.14. No imported component, hardware value, dependency, schema, checker or threshold changed. Manufacturer timing/customer-mode lock and actual transport behavior remain physical qualifications.

## Revision and publication

A16 hashes are recorded in evidence/source-manifest-A16.json; source commit ad7406b01ca18132bc09a3556319074530fb4906. Hardware source remains0f2693738e630c4997942d8536b3d913cb1bd5e5. GitHub repository/branch/remote still unknown. Standing authorization exists but missing destination blocks completing publication. Neither GitHub nor tscircuit remote update succeeded. No physical/fabrication approval is implied.

---

A15 and earlier records below are historical. A16 supersedes NVM transport/current software checks only; remaining hardware/assembly/power/tooling/physical limits remain applicable.

# A15 historical validation — 2026-10-03

**Unrouted WIP prototype; hardware/BOM remain A11. Product placement is unstarted.** Adds bounded standby RAM initialization and a capability-acquisition SoftReset transaction. Completed command acknowledgement does not qualify motor power.

| Stage | Status | Current evidence /remaining work |
|---|---|---|
| 1. Requirements | in progress | Explicit5/9/12 V selector, approximately2 A target and voltage-aware15/20 V policy retained; final operating/thermal/mechanical envelope open. |
| 2. Schematic/BOM | blocked |129 parts/55 supplier codes; A11 electrical/import/schema evidence unchanged. A14 conditional CCM screen passes. NVM/fresh-response/STM32 integration, full regulator/thermal/current sharing, capacitor land process and regeneration envelope remain open. |
| 3. Product placement | blocked | No product coordinates or mounting holes authored. A12 native numeric placement probe remains valid; electrical/assembly/firmware gates remain. |
| 4. Routing | not started | Explicitly disabled; no new via-in-pad allowed. |
| 5. Routed checks | not started | No routed output/shorts/snapshot approval. |
| 6. Fabrication | not started | No process approval/release/order. |
| 7. Physical prototype | not started | No measured PD/motor/thermal/decay/reversal evidence. |
| 8. Store release | not started | GitHub repository/branch/remote still absent; neither remote published. |

## Completed A15 step

firmware/stusb4500_startup.c/.h implements a checked17-operation startup transaction under explicit motor-power/bridge inhibition and invalidated old provenance. It temporarily masks documented interrupts, retains/clears ten startup status bytes, checks persistent faults and attachment, verifies one fixed5 V/3 A RAM standby PDO and SoftReset header, unmasks alerts with readback and rechecks new events before SEND_COMMAND. Only completion of the acquisition command is published. Ambiguous I2C/partial clearing/deadlines/readback/precondition/token failures latch completion off and cannot retry implicitly. See docs/STUSB4500-STARTUP.md for operation boundaries, manufacturer discrepancies and remaining target work.

The NVM requirement remains unchanged. RAM writes neither verify the manufacturing image nor instantly turn an existing contract into5 V. Boolean adapter preconditions are not physical GPIO proof. Fresh response association, SOP/event ownership, actual STM32 startup/peripherals/watchdog, complete converter/thermal/assembly approval and prototype measurements remain required. There is no new MCU direction/PWM logic or timed reversal circuit.

| Check | Result |
|---|---|
| Configured formatting /TypeScript /Bun suite | pass:19 tests/369 expects, zero failures. |
| Startup C11 Wall/Wextra/Werror harness | pass:13,969 assertions; all256 masks, all17 failed/late transfers, partial/ambiguous writes and clearing, readback bytes, detach/fault/events/old RX, deadlines/wrap/callbacks/preconditions/tokens. Mock bus only. |
| Freestanding Cortex-M0+ startup object | pass; not a linked/flashable image. |
| Existing policy/sequence/RX/request harnesses | pass in renewed configured suite; A15 executable paths preserve A14 artifacts. |
| A11 hardware/import/BOM/schematic and A12/A14 evidence | unchanged and still applicable, including unresolved layout/assembly/power/tooling failures. No repeated product build/visual review or product placement claim. |

Versions unchanged:tscircuit0.0.2742 /CLI0.1.2237 /core0.0.2056 /props0.0.677 /circuit-json0.0.510; Bun1.3.9 /TS5.9.3 /Biome2.5.14. No imported definition, hardware component, dependency, checker, schema or threshold changed. Current ST guide text was consulted; prior local download failures and unperformed rev3 visual review remain explicit.

## Revision and publication

A15 source/evidence hashes are recorded in evidence/source-manifest-A15.json; source commit daac655276f3a9bf2dfce586c9781168cc290421. Hardware source remains0f2693738e630c4997942d8536b3d913cb1bd5e5. GitHub repository/branch/remote is still unknown. Standing publication authorization exists, but the missing destination blocks completing publication. Neither GitHub nor tscircuit remote update succeeded. No physical/fabrication approval is implied.

---

A14 and earlier records below are historical. A15 supersedes portable startup/current software checks only; all remaining hardware/assembly/power/tooling/physical limits remain applicable.

# A14 current validation — 2026-10-03

**Unrouted WIP prototype; hardware/BOM remain A11. Product placement is unstarted.** Exact Panasonic frequency-dependent model gives a passing CCM loop screen. Current ST guide corrects alert-clearing semantics in mocks/documentation. No supplier model, emitted schema, checker or threshold is patched or suppressed.

| Stage | Status | Current evidence /remaining work |
|---|---|---|
| 1. Requirements | in progress | Explicit5/9/12 V user selection, approximately2 A target and voltage-aware15/20 V policy retained; final thermal/mechanical/manufacturing envelope open. |
| 2. Schematic/BOM | blocked |129 parts/55 suppliers and eight A4 sheets pass earlier electrical/import/schema audits. CCM screen now passes. Full switching/temperature/bias/thermal/current sharing, land-process approval, regenerative-energy limits and complete STM32/PD fresh negotiation remain open. |
| 3. Product placement | blocked | No product coordinates or mounting holes authored. A12 numeric native API remains validated for its isolated probe; electrical/assembly/firmware gates remain. |
| 4. Routing | not started | Explicitly disabled, zero product PCB traces, no new via-in-pad allowed. |
| 5. Routed checks | not started | No routed output/snapshot/shorts approval. |
| 6. Fabrication | not started | No process/release approval or order. |
| 7. Physical prototype | not started | No actual charger/motor/thermal/decay/reversal evidence. |
| 8. Store release | not started | No configured GitHub destination/remote; neither GitHub nor tscircuit published. |

## A14 completed model and register review

The exact35SVPK330M manufacturer ZIP contains an unchanged20 C/0 V SPICE library, separate series-connected S-parameters and curve PDF. Generic nodal analysis preserves all20 passive elements and checks current residuals. Model-vs-two-port complex impedance agrees within0.21945% across the complete published S-parameter set, passing1% consistency. The raw characteristic viewer/arrays are also preserved; up to48 kHz model-vs-published-curve differences reach9.23% magnitude/22.99% ESR. Missing temperature curves remain explicit. No guaranteed model/temperature equivalence is claimed.

The existing27 kΩ/22 nF/22 pF compensation with1 kΩ bleed and exact capacitor impedance passes12,960 CCM sensitivity cases under unchanged≥45° /≤48 kHz thresholds. Worst77.77° at1.042 kHz; highest crossover31.848 kHz. R/C/GM/delay scalings remain engineering assumptions; zero ceramic credit is included. Historical constant-ESR1,570 failures remain retained. This conditional screen does not complete DCM/Eco-mode, full switching/slope compensation, actual DC-bias/temperature/aging, current sharing, final-layout parasitics or prototype measurements. See docs/BUCK-MODEL.md.

Current UM2650 rev3(January2023)§1.11 clarifies0x0B summary reads do not clear events; associated0x0D/0x0F/0x12/0x16 do. Request mocks now preserve non-protocol alarms and clear only the protocol summary bit when0x16 is consumed. Production request/receive functions already read protocol status; no motor-enable logic changes. Pending port/fault/monitor events remain inhibited. A13's broader alarm-clearing prose is corrected. Current primary PDF text was read through the browser research tool; failed local main/mirror downloads and terminated stalled task-owned read are recorded. No local Rev3 PDF or complete PDF visual review claimed.

| Check | Result |
|---|---|
| Configured formatting /TypeScript /Bun suite | pass:18 tests/366 expects, zero failures. |
| Current request C host harness | pass:974 assertions with corrected read-clear mocks and retained pending-alarm tests. Mock evidence only. |
| Current receive C host harness | pass:531 assertions; live capture/provenance/peripheral measurements remain open. |
| Request/receive Cortex-M0+ object compilation | pass; no linked/flashable STM32 image. |
| Manufacturer-model analysis/S-parameter consistency | pass under stated scope;12,960 cases/zero threshold failures. No compensation-value or PCB-component change. |
| A11 hardware/import/schematic/power and A12 native placement checks | unchanged and applicable, including unresolved errors. No repeat product build/visual review or product placement claimed. |

Visual review: manufacturer model curve PDF rendering and current generated Bode plot inspected. Artifact paths/source hashes/model conditions/axes/differences/remaining limits are in buck-manufacturer-model-A14.json/log/png and retained Panasonic sources. Initial graph printing encountered null temperature arrays; those are explicitly recorded as unavailable, never fabricated. All unsuccessful source-download attempts remain documented.

Official versions unchanged:tscircuit0.0.2742 /CLI0.1.2237 /core0.0.2056 /props0.0.677 /circuit-json0.0.510; Bun1.3.9 /TS5.9.3 /Biome2.5.14. Unchanged imports/PCB/BOM verified against A11; no current product placement/routing or fabrication claim.

## Revision and publication

A14 source/evidence hashes are recorded in evidence/source-manifest-A14.json; source commit 0043efe65c49d99623e0190574272916fde2acf2. Hardware source remains0f2693738e630c4997942d8536b3d913cb1bd5e5. Manufacturer files remain unchanged even where raw CRLF/trailing spaces produce whitespace advisories. GitHub repository/branch/remote remains unknown. Standing publication authorization exists, but missing destination and incomplete gates block a fully published step. Neither GitHub nor tscircuit remote update succeeded. No physical/fabrication approval implied.

---

A13 and earlier records below are historical. A14 supersedes the current CCM screen and alert-model documentation only; remaining hardware/assembly/firmware/tooling/physical limits remain applicable.

# A13 historical validation — 2026-10-03

**Unrouted WIP prototype; hardware/BOM remain A11. Product placement is unstarted.** Implements a bounded RAM profile-write/readback and SoftReset transaction. Successful programming does not qualify motor power or complete the embedded controller.

| Stage | Status | Current evidence /remaining work |
|---|---|---|
| 1. Requirements | in progress | Explicit5/9/12 V selection, approximately2 A target, voltage-aware15/20 V policy retained; final thermal/mechanical/manufacturing limits open. |
| 2. Schematic/BOM | blocked | A11 hardware129 components/55 supplier codes; electrical/import/schema checks remain applicable. Buck loop/thermal/current sharing, capacitor land process, regeneration envelope, NVM/fresh negotiation and STM32 target port remain open. |
| 3. Product placement | blocked | No product coordinates or mounting holes authored. A12 numeric native API probe remains valid; standard explicit/unit-string defects retained. Electrical/assembly/firmware gates remain. |
| 4. Routing | not started | Explicitly disabled; zero product PCB traces, no new via-in-pad permitted. |
| 5. Routed checks | not started | No routed output/snapshot/shorts approval. |
| 6. Fabrication | not started | No process approval, release or order. |
| 7. Physical prototype | not started | No actual charger/motor/thermal/decay/reversal evidence. |
| 8. Store release | not started | No configured GitHub repository/branch/remote; neither GitHub nor tscircuit published. |

## Completed A13 step and evidence

firmware/stusb4500_request.c/.h programs exactly mandatory5 V/3 A standby PDO1 plus the policy-chosen15/20 V/3 A PDO2. Count1 contains profile replacement; then count2 keeps old PDO3 inactive. Every PDO/count/header write is read back; attached sink and pending alarms are rechecked before0x26. Request tokens are consumed before I2C. Every failure, reused token or ambiguous command latches off and clears completion; no silent bus retry. Proposed4 ms whole-transaction deadline is checked around every transfer. The bus interface gains an explicit write callback; receive behavior is separately renewed.

The caller must already inhibit power and the bridge and settle feedback. Boolean adapter preconditions do not prove actual GPIO/VM behavior. completed_request_id proves checked programming/command acknowledgement only, not fresh PS_RDY or a contract. NVM initialization, event ownership, fresh Source_Capabilities/Accept/PS_RDY/RDO/PE/ADC provenance, actual STM32 peripheral/startup/watchdog implementation and a linked image remain required. Legacy/public reserved-bit discrepancies are retained. See docs/STUSB4500-REQUEST.md.

| Check | Result |
|---|---|
| Configured format /TypeScript /Bun suite | pass:18 tests/366 expects, zero failures. Initial formatting error corrected; initial/final logs retained. |
| Request host C11 Wall/Wextra/Werror | pass:969 assertions. All14 transfer failures, partial/ambiguous writes including an actually transmitted unacknowledged command, every readback byte, detach/fault/alarm/deadline/token/precondition cases exercised. Mock registers only. |
| Receive host harness with expanded bus interface | pass:531 assertions; no live packet-capture evidence. |
| Freestanding Cortex-M0+ request and receive objects | pass; not linked/flashable firmware. |
| Unchanged policy/sequence | pass in configured suite with A13 executable paths preserving historical A12 artifacts. |
| Manufacturer programming/count review | UM2650 pages3/39 visually inspected; addresses/count/header agree with retained reference operations. |
| A11 hardware/import/schematic/power and A12 native placement evidence | unchanged and still applicable, including unresolved failures. No repeat product build/visual review or product placement is claimed. |

Versions unchanged:tscircuit0.0.2742 /CLI0.1.2237 /core0.0.2056 /props0.0.677 /circuit-json0.0.510; Bun1.3.9 /TS5.9.3 /Biome2.5.14. No supplier definition, schema, checker or threshold changed. RDO/voltage-only or old power-ready status can never substitute for the still-unimplemented fresh handshake.

## Revision and publication

A13 hashes/dependencies/evidence are recorded in evidence/source-manifest-A13.json; source commit 3fda417c558ba0293f72b84010cc75b1d01f9b47. A11 hardware source remains0f2693738e630c4997942d8536b3d913cb1bd5e5. Git remote/destination remains unknown. Standing publication authorization exists, but missing repository/branch and incomplete gates block fully publishing this step. Neither GitHub nor tscircuit remote update succeeded. No fabrication/hardware approval implied.

---

A12 and earlier records below are historical. A13 supersedes portable profile-write and current software checks only; unresolved hardware/tooling/physical limitations remain applicable.

# A12 historical validation — 2026-10-03

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

A12 source and evidence hashes are recorded in evidence/source-manifest-A12.json; source commit 05cb4c0d6c0cf72e0810f0c61d3146364fb37717. A11 hardware source is0f2693738e630c4997942d8536b3d913cb1bd5e5. Raw vendor PDF/text evidence is preserved byte-for-byte, including any source whitespace. GitHub remote/destination remains absent. Standing publication authorization exists, but unknown destination plus incomplete gates block fully publishing this step. Neither GitHub nor tscircuit update succeeded. This is not fabrication or hardware approval.

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
