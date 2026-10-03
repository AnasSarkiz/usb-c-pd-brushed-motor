# A3 validation record

2026-10-02. **A3 corrects the direction topology and validates an import candidate; it is not a completed revised board.** Direction now requires SPDT ON-OFF-ON, not SP3T. C221539 imports but fails independent symbol/common-pin, physical fit and generated-paste validation. It is not a production part or an approved replacement. The A1 product source remains a withdrawn historical baseline; C2848921 is rejected and is not being pursued. A1 source/documentation and A2 review documents are preserved in `evidence/revisions/`. BOM.csv is still historical and is not updated to pretend that an invalid switch was selected. No custom model or pin remapping is created. Product placement and routing remain unstarted.

## Stage ledger

| Stage | Status | Evidence / remaining work |
|---|---|---|
| 1. Confirm requirements | in progress | Intended rails/current/mechanics retained. Selected motor/load and safe startup/reversal energy are unknown; user information requested. Explicit selector proposal and invalid-state behavior are documented, but not implemented/approved. |
| 2. Review schematic and BOM | blocked | C221539 fails the actual SPDT import audit; exact stocked Dailywell 2MS3 SKU remains unverified. SP3T proposals retired. Simplification review updated, but revised BOM not finalized. Runtime motor-aware PD arbitration, reversal inhibit, 5 V current-limit accuracy, labels and power metadata remain unresolved. |
| 3. Validate placement | blocked | None of the six user prerequisites passes as a complete gate. Supplier footprint probe is isolated inspection, not motor-board placement. |
| 4. Route and validate copper | not started | Prohibited. Source/config routing disabled; isolated probe has zero PCB traces. |
| 5. Automated and visual checks | not started | Routed-board stage not reached. Development calculations/model checks below do not complete it. |
| 6. Approve prototype fabrication | not started | No fabrication outputs or order. |
| 7. Test physical prototype | not started | No physical prototype. All requested cases are in docs/PROTOTYPE-TEST-PLAN.md with explicit pending statuses. |
| 8. Prepare store release | not started | No publication or hardware-tested claim. |

## B08 — C221539 SPDT import candidate fails (stages 2/3)

The official import command succeeds both normally and with supported `--use-exact-footprint`. The default model emits SPST with two schematic pins despite three source pins/pads. Documented instance `type="spdt"` exposes three pins without editing the definition, but native symbol common is pin 1 whereas physical common is pin 2. This discrepancy is not remapped or accepted. All electrical pads 1/2/3 exist; M2 has no case/mounting terminals. Exact-model body outline/pitch match the manufacturer drawing, but pin 1's 0.9139936 mm hole is smaller than the nominal 1.27 mm terminal width, and differs from the recommended 1.85 mm round drill. Eight generated paste entries use unsupported `shape="pill"` and fail full circuit schema validation; paste positions also fail to follow packed component positions. Default footprinter substitution loses the real switch body outline and slot dimensions. Full audit exits 1 with twelve failures. No failed geometry was edited, filtered out of approval, or suppressed.

The native candidate build and all five requested candidate checks exit 0 with zero reported errors/warnings; schematic-placement emits no findings. This does not establish correctness: the independent audit catches defects those checks miss. Both generated candidate schematic/PCB renders and manufacturer's function/C-terminal drawings were actually inspected. One native A4 sheet is present and zero PCB traces are generated. The isolated packed probe is supplier-model inspection, not placement of the product board.

Fresh supplier HTML reports 69 stock / USD 5.1720 at quantity 1 and 4.4275 at quantity 10. This is not verified JLC assembly stock; C221539 is unapproved regardless of stock. Dailywell manufacturer catalog confirms 2MS3 ON-OFF-ON, common 2. No exact stocked 2MS3 SKU/JLC code was verified. Loose official importer searches returned unrelated C48687540 and C597349; those files are not instantiated or selected. Neither import success nor unrelated retail stock is substituted for identity/stock evidence.

Evidence and contact/driver truth-table details: `docs/DIRECTION-CONTROL.md`, `evidence/spdt-pin-pad-check-A3.json`, `evidence/spdt-strict-audit-A3.log`, `evidence/spdt-*-A3.log`, `evidence/native-spdt-symbol-A3.json`, supplier HTML, manufacturer mirror PDF/PNGs, and `dist/tests/spdt-import-probe/`. Default and exact official outputs are retained separately. Source/dependency/artifact hashes identify the checked revision in `evidence/source-manifest-A3.json`.

The [workspace AGENTS.md](../../AGENTS.md) requires “stop dependent work” for an imported component issue and prohibits manually patching symbols, footprints and pin mappings. Proper resolution is a supported correct supplier/official-importer model and valid generated THT output, then the same full audit. Final switch installation, completed revised schematic approval and product placement are blocked. Independent architecture/documentation review continues; SP3T searching does not.

## Direction mapping and transition gate

DRV8874 PWM mode has two PWM/direction inputs, no independent EN. Retain U7 dual PWM steering and C24 bypass with the SPDT command pull-downs; center commands yield IN1=IN2=0/coast, FWD gives PWM/0 and REV gives 0/PWM. This follows TI's table 4. Its PH/EN table 3 brakes at EN=0, so the user's preferred direct mapping is incompatible with this IC. No redundant SP3T decoder exists in A1 to delete. C5710902 and the validated 330 Ω / 5.6 nF network stay unchanged.

Automatic dead time handles half-bridge shoot-through, not contact bounce qualification or safe rotor reversal. The planned regenerative dump/current limit is retained, but timed transition inhibit/OFF re-arm hardware is not implemented or validated. Safe immediate reversal is not claimed. Actual motor/load bounds and physical current/energy tests remain pending. See `docs/DIRECTION-CONTROL.md` and `docs/PROTOTYPE-TEST-PLAN.md`.

## B06 — historical SP3T failures; direction topology superseded

Official CLI 0.1.2226 imports were tested in order:

1. **C160871 / ALPS SSSS211900:** command succeeds, four source pins and four actual plated-hole pads exist. Schematic exposes only pin1/pin2; manufacturer common pin3 and throw pin4 are missing. Imported transverse pad spacing is 3.400044 mm versus manufacturer 3.3 mm; drill 1.2 mm versus recommended 0.8 mm. Differences are not approved. Stock observed: 489.
2. **C221831 / C&K OS103011MS8QP1:** command succeeds, four electrical pads plus two case pads exist. Schematic exposes only pin1/pin2; electrical pins3/4 are missing. Manufacturer common is pin2. Imported plated slots are not identical to manufacturer's recommended round holes; fit remains unapproved. Stock observed: 458.
3. **C2857677 / ROCPU SK-13D07-5:** command exits 1, “Component not found in EasyEDA library search”. Stock observed: 4140; stock does not establish model validity.

The independent source-to-schematic-and-pad audit fails on four missing electrical schematic ports. Full circuit schema validation additionally rejects two generated PCB component offset fields (numeric offsets where the installed schema requires strings) and twelve generated C221831 solder-paste entries with shape `pill`; the installed paste schema does not accept that generated representation. Both are recorded as failures, with no output repair or waiver. Every expected physical pin has a distinct connected pad; no routing is present. Both success-path models still emit a default SPST switch. The official raw import option for C160871 produces identical source and is not a remedy. No imported definitions were edited and no checks disabled.

Evidence: import logs, `evidence/sp3t-import-audit-A2.json`, `evidence/sp3t-pin-pad-check-A2.json`, stock/page hashes and manufacturer drawings. Both isolated schematic and PCB PNGs were inspected; visible symbols are two-terminal, despite the complete physical-pad sets. Native A4 probe frame is present.

These are retained historical A2 failures, not current direction candidates. The user withdrew the SP3T topology; B08 now governs the SPDT replacement gate. No further SP3T imports were attempted in A3.

## B07 — selected-voltage-aware PD policy is not implemented (stage 2)

A1's static 20 V-first policy no longer satisfies the requested architecture. New calculations explicitly evaluate load, minimum input current limit and maximum fault draw. For a **proposed**, unimplemented 7.15 kΩ eFuse resistor, 5/9 V at 2.4 A peaks fit qualified 15 V, while the 12 V peak envelope requires qualified 20 V. Weak-current and non-PD sources are rejected. The A1 6.8 kΩ upper current tolerance plus a conservative 1 W upstream budget slightly exceeds 3 A at minimum 15 V; no current-limit change has been silently applied to the frozen circuit.

STUSB4500's autonomous NVM priority cannot change with the motor selector by itself. HUSB238's hardware resistor settings were reviewed but do not implement the required lower-voltage-first/fallback policy directly, and its default GATE timing is unsuitable as a qualified-contract interlock. No MCU or unqualified controller substituted. Calculations are not evidence of implemented arbitration. A1 docs/pd-profile.json is marked withdrawn.

## Simplification, selector and warnings

`docs/SIMPLIFICATION.md` records exact counts, removable J3/R51, possible buck/driver simplifications and the unsafe 28-part protection deletion shortcut. The implemented historical count is still 118 / 54; no smaller assembled BOM is claimed. A 1×4 header / one-shunt motor selector is defined with 9 / 5 / 12 positions and safe default intent; multiple-shunt inhibition or an exclusive mechanical implementation remains required. Selector supplier models are not selected/imported yet.

C5710902 and the 10 kΩ / 330 Ω / 5.6 nF network remain unchanged in source. The prior successful import and nominal PWM tests remain applicable. This does not waive its missing reference-label issue.

Nine prefix advisories are explicitly accepted as harmless naming diagnostics after inspecting core's warning-only implementation and required pin coverage. The exact references and reasoning are in docs/WARNING-REVIEW.md and evidence/refdes-warning-review-A2.json. Eleven missing labels, 45 power/ground/pin-metadata warnings and two TVS orientation issues remain unresolved. No blanket warning acceptance, definition patch or suppression occurred.

## Checks and reviewed artifacts

Toolchain: Bun 1.3.9; tscircuit 0.0.2725; official CLI 0.1.2226; core 0.0.2047; props 0.0.676; circuit-json 0.0.509; circuit-to-svg 0.0.437; TS 5.9.3; Biome 2.5.14. Board-local pinned dependencies/bun.lock remain. Final source/dependency/output hashes are in evidence/source-manifest-A2.json; no source commit exists.

A3 uses the same versions; hashes are recorded in `evidence/source-manifest-A3.json`. Formatting and TypeScript pass; 12 calculation tests / 336 assertions pass. Candidate build plus native netlist/pin_specification/source/schematic-placement/placement pass; the strict supplier audit fails and stays failed. Logs use the A3 suffix. These are development/model checks, not product schematic/placement approval or physical tests. The following table is historical A2 evidence and remains applicable only to unchanged archived circuitry/calculations.

| Command / review | Result |
|---|---|
| `bun run format:check` | Pass; evidence/format-check-A2.log |
| `bun run typecheck` | Pass; evidence/typecheck-A2.log |
| `bun test` | 12 tests pass, 336 assertions; five historical A1 calculation tests plus seven A2 analytical tests. No physical/controller-policy implementation claim. |
| Official imports C160871/C221831 | Command exit 0, but functional model audit fails |
| Official import C2857677 | Exit 1; model unavailable |
| `tsci build tests/sp3t-import-probe.circuit.tsx --routing-disabled --schematic-svgs --pcb-svgs` | Exit 0 after narrowly scoped network access; supplier fetch succeeds. Warnings not hidden. |
| Native netlist, pin_specification, source checks on isolated probe | Run; see evidence/sp3t-*-A2.log. Their success does not detect omitted electrical schematic pins. |
| Native schematic-placement check on isolated probe | Run; see evidence/sp3t-schematic-placement-A2.log. Not complete product schematic review. |
| `bun scripts/audit-sp3t-imports.ts` | Exit 1: pin3/pin4 missing from both electrical schematics; two offset-schema and twelve paste-schema failures; all expected physical pads present; zero PCB traces |
| Visual model review | Actual A4 schematic, physical pad render, ALPS common-pin/spacing drawing and C&K contact/pad drawing inspected |
| Revised product schematic/build/placement | Withheld because no candidate passes import gate. A1 outputs are historical, not an A2 validation result. |
| Motor startup/stall, thermal, unplug/replug, direction transitions, dead time, braking | Calculations/datasheet review and explicit physical-test plan added. Actual measurements not performed. |

The motor stress example is hypothetical. It demonstrates that startup torque, reversal overshoot and mechanical energy cannot be approved from a 2 A nameplate target alone. Thermal geometry, current-limit accuracy at 5 V, clamp pulse energy and real rotor/load bounds remain prerequisites. No order, publication or external message sent.
