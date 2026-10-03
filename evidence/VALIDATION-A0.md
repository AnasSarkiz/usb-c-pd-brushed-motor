# A0 validation record

Board project: USB-C PD brushed motor controller. Revision A0 / package 0.0.1, reviewed 2026-10-02. **Incomplete engineering design; no product schematic, populated BOM, real component placement or routed output exists.** Physical hardware is untested.

The board-local Git repository is initialized on `main`, with no source commit yet. `evidence/source-manifest-A0.json` identifies the reviewed files and dependency lock by SHA-256. This task starts from requirements and the conversation reference, not an existing board revision.

## Stage status

| Stage | Status | Evidence and outstanding work |
|---|---|---|
| 1. Confirm requirements | in progress | Function, rails, current target, mechanical intent and conservative fabrication targets in docs/REQUIREMENTS.md. Actual motor, voltage-selection policy, control mechanics and final outline unresolved. |
| 2. Review schematic and BOM | blocked | B01 potentiometer import failure; B02 switch contact/stock review; B03 protection and motor envelope unresolved. Four semiconductor imports and one switch import preserved unchanged. docs/BOM.csv is a partial candidate list, not a completed fabrication BOM. |
| 3. Validate placement before routing | blocked | Dependent work stopped after B01 as required by parent AGENTS.md. docs/PLACEMENT.md is intent only. Required native checks are recorded as failures on the explicitly blocked entry point; no placement or schematic visual approval. |
| 4. Route and validate copper | not started | User explicitly prohibited routing. No generated copper. |
| 5. Automated and visual checks | not started | Project formatting/TypeScript and independent budget calculation are checked separately below; these do not complete routed-board validation. No snapshots generated or accepted. |
| 6. Approve prototype fabrication | not started | No fabrication output or order. |
| 7. Test physical prototype | not started | No physical board or measurements. |
| 8. Prepare store release | not started | No qualified package, photos, publication or hardware-tested claim. |

## Blockers

### B01 - required speed-control potentiometer import (stages 2 and 3)

The Bourns PTV09 family candidate **C6738614** failed the supported import:

```text
tsci import --jlcpcb --use-exact-footprint C6738614
Failed to import part
Component not found in EasyEDA library search for "C6738614".
A supplier catalog listing does not guarantee importable symbol/footprint data.
```

Evidence: `evidence/import-C6738614.log`, exit 1; no import file exists. The linked manufacturer family datasheet does not establish this candidate's exact orderable MPN or top-access shaft. Both must be resolved before selecting it. No locally authored symbol, footprint, pin mapping or generic substitute was used. Product schematic/placement work stops here under the mandatory import rule. Required next action is a correct, supported supplier import and verified exact control identity; do not manually patch or recreate the component.

### B02 - direction-switch review (stage 2)

**C5274491 / Kinghelm KH-SS23D03-G6** imported successfully. Its actual manufacturer drawing was downloaded from the manufacturer's page, rendered and visually inspected at `evidence/C5274491-manufacturer.png`. It shows a vertical through-hole switch, 16 x 6.7 mm body, 8 contact terminals plus four frame anchors, and a **shorting** contact scheme. The imported footprint's 8 mm contact span, 2/4 mm spacing, 2.5 mm row spacing and 15 x 6.2 mm anchor spacing correspond to the drawing's dimensional pattern. This is only a partial geometry review: the drawing is a bottom view and lacks numbered contact terminals, so imported pin-to-position assignments and the usable center-OFF wiring remain unverified.

The manufacturer's HTML incorrectly describes an SPDT SMT family. The actual PDF resolves the gross mechanical discrepancy, so it is not claimed that the imported body is wrong. LCSC lists this candidate out of stock. It is not approved for the BOM. Contact truth table, transition behavior and assembly availability must be verified with a supported exact supplier component before direction wiring.

### B03 - electrical design limits (stages 1 and 2)

No actual motor startup/stall current, winding energy, inertia or back-drive envelope was supplied. The 2 A target and 2.5 A preliminary peak budget do not establish safe reversal, stall duration or clamp energy. Input inrush/reverse blocking/transient coordination, motor-rail overvoltage protection, regenerative clamp, buck filter/loop/current limit and thermal performance have not been designed or approved. See docs/ARCHITECTURE.md. No protection-stage completion is claimed.

### Search limitation observed

`tsci search --jlcpcb --json PTV09` and `SS23D03` returned unrelated components; raw results are preserved in evidence/search-*.json. They were not used as compatible substitutes or availability evidence. This limits candidate discovery, but does not explain away the specific EasyEDA import failure or prove a CLI defect. Direct manufacturer/supplier references were used for read-only review.

## Toolchain and native API verification

Bun 1.3.9; tscircuit 0.0.2696; actual bundled CLI 0.1.2217; props 0.0.672; core 0.0.2025; eval 0.0.1499; circuit-json 0.0.507; TypeScript 5.9.3; Biome 2.5.14. Direct versions are pinned; transitive versions are locked in bun.lock. `node_modules/.bin/tsci` resolves to tscircuit/cli.mjs and executes tscircuit's nested CLI 0.1.2217. The separately installed CLI 0.1.2194 is not the executable used by these commands. `--version` prints the tscircuit version; both CLI identities were read from package metadata and the wrapper was inspected.

Installed help confirms all five required pre-route check commands and `build --routing-disabled --pcb-png --pcb-svgs --schematic-svgs`. Config schema confirms `build.routingDisabled`. Installed props confirm native `<schematicsheet name="..." sheetSize="A4">`, `<schematicsection name="..." displayName="...">`, component `schSheetName`/`schSectionName`, and `board.routingDisabled`. No completed sheet exists to inspect; API verification is not schematic validation.

The initializer's optional skill installation failed due connectivity. The actual tscircuit skill and current official handbook code/bootstrap guides were independently read before project edits, so instructions were not guessed. Initialization itself succeeded. Sandboxed dependency installation could not access its temp directory; the authorized installation succeeded with scoped escalation. No authentication or credentials were changed.

Dependency installation reported peer-version warnings for circuit-json, React/ReactDOM and alphabet. These are unresolved compatibility warnings; they are not accepted board warnings or waived checks. The blocked entry point prevents a full build-based compatibility assessment.

## Command/artifact ledger

- `tsci init -y --no-install`: completed, `init.log`.
- Five successful exact-footprint JLCPCB imports: unchanged files under imports; C1855818/C311983/C6986/C5274491 logs under evidence. STUSB4500 C2678061 imported successfully in this session; initial command output was inspected, but no contemporaneous log file was captured.
- C6738614 import: failed, `evidence/import-C6738614.log`; stages 2/3 blocked.
- Switch PDF: manufacturer PDF downloaded, rendered with Poppler and visually inspected. The first LCSC datasheet URL returned HTML, retained as `evidence/C5274491-datasheet-download.html`; it is not treated as a PDF.
- Supplier inventory read on 2026-10-02: C2678061=4905, C1855818=29522, C311983=62940, C6986=90315 shown by LCSC; C5274491 out of stock. These are page observations, not reservations or verified JLCPCB assembly inventory.
- `bun run format:check`, `bun run typecheck`, `bun run power:report`: all exited 0; results in evidence/project-checks.json and corresponding logs. These establish project formatting, static typing and a reproduced assumed budget only. Formatting excludes immutable imported definitions and evidence.
- Required `tsci check netlist`, `pin_specification`, `source`, `schematic-placement`, `placement`: individual logs and exit codes in evidence/preroute-checks.json. They fail because the explicit blocked source cannot produce a circuit; none passes.
- `bun run build`: exit 1, failure retained in evidence/build.log; zero successful circuits and no product render or circuit JSON delivered. Routing disabled in both command and config.
- No board test suite, snapshots, shorts analysis, fabrication outputs or physical tests exist because there is no implemented board to validate. Independent budgeting is not a substitute for any required check.

## References consulted

- [Reference product](https://www.amazon.com/dp/B09P6D5TMV)
- [STUSB4500 Rev 8](https://www.st.com/resource/en/datasheet/stusb4500.pdf): autonomous PDO matching, dead-battery pins, above-5-V power-path gating and POWER_OK detach behavior.
- [DRV8874 Rev A](https://www.ti.com/lit/ds/symlink/drv8874.pdf): physical pin identities, current regulation, protection and thermal/charge-pump requirements.
- [TPS54302 Rev C](https://www.ti.com/lit/ds/symlink/tps54302.pdf): supply/output limits, filter and thermal design obligations.
- [TLC555 manufacturer datasheet](https://www.ti.com/lit/ds/symlink/tlc555.pdf): hardware PWM candidate; complete timer network review pending.
- [Kinghelm switch page and linked PDF](https://www.kinghelm.com.cn/productDetail/12245238): the linked drawing was inspected; HTML prose conflicts with it.
- [Bourns PTV09 family sheet from LCSC](https://datasheet.lcsc.com/datasheet/pdf/1d1d757a52759324e8951c5f34284de0.pdf?productCode=C6738614): candidate discovery only; not exact-part approval.
- [JLCPCB capabilities](https://jlcpcb.com/capabilities/pcb-capabilities): manufacturing planning reference; final order stackup/DFM pending.

No warnings have been hidden, no imported definitions changed and no validation gate passed on the strength of an unperformed check.
