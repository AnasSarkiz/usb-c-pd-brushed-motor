# A49 official update and supplier re-import audit — WIP prototype

2026-10-23. Baseline: GitHub main9d8b45b, published board sourcec41d79a/A48.
The requested latest **official** toolchain is installed in this board directory.
The full board migration is **blocked**, not approved. Original active imports,
including the user's twelve USB-C pad corrections, remain unchanged. Fresh
supplier definitions are staged under `tooling/supplier-reimports-A49/`; none
has been silently substituted into the board. Routing stays disabled.

## Actual versions

| Package | Prior | Candidate installed |
| --- | --- | --- |
| tscircuit |0.0.2744|0.0.3008|
| CLI |0.1.2237|0.1.2402|
| core |0.0.2091-a41 local canonical package|0.0.2199 official|
| props |0.0.683 local canonical package|0.0.709 official|
| Capacity Autorouter |0.0.960-a42 local canonical package|0.0.1003 official|
| Circuit JSON |0.0.517|0.0.534|

Bun remains the checksum-verified1.4.2. Official registry observations and exact
installed versions are in toolchain-registry-A49.json and toolchain-installed-A49.json.
The installer printed peer dependency notices for circuit-to-svg, React/React DOM,
Circuit JSON and alphabet. The original install log is retained; nothing is
suppressed or forced to an unsupported peer version to obtain a pass.

## Re-import results

All **58/58 active supplier SKUs** imported through the current official CLI:
`tsci import CODE --jlcpcb --use-exact-footprint`. Each ran in its own isolated
supplier directory, then built an A4 probe with the original reviewed pin wiring,
routing disabled and native PCB/schematic SVG output. All58 builds exited0.
The independent full Circuit JSON/schema and source-pin/schematic-pin/PCB-port/
land audit passes for all58, with zero errors and zero PCB traces. The fresh
component/probe TypeScript project passes separately from the board.

C908270/Dailywell has three source ports, three schematic ports and three
plated slots; pin2 is at the original common-terminal location. Its supplier
source is byte-for-byte identical to the previous approved import, so the
manufacturer common2/topology and mechanical-dimension review remain applicable.
There are no switch THT paste entries. C5710902 also passes with all five source/
schematic/physical terminals and no THT paste. Its added schematic reference
label does not change the approved10kΩ/330Ω/5.6nF PWM values or network.
All five native checks were also run on each of C908270, C5710902 and C5184243:
15 commands exit0. Their visible advisories remain retained. This is isolated
supplier validation, not full-board schematic/placement approval.

There are **46 textually changed imports**. The change report and per-part
diffs preserve metadata, courtyard and label changes. Text differences do not
by themselves prove changed physical geometry: independent same-compiler
baseline/fresh builds show C529330's20 MCU copper pads and CAD component are
equivalent after rounding floating coordinates to1e-9mm. The CAD URLs, model
orientation and origin are unchanged. C25950 changes from the official importer's
rounded footprinter string to its exact EasyEDA pad dimensions; its pad centers
shift0.000014mm and width changes0.0000246mm. Full-board revalidation would still
be required before adoption; the clearance rule is not relaxed.

Peak sampled import/build process-tree RSS was **1182592KiB**
(approximately1.13GiB). Every expensive command ran sequentially with a2GiB
cap and a timeout; no router or unbounded full-board build ran on the Mac.

## Blocking issues and retained warnings

1. **Whole-board TypeScript/API migration, stages2/3:** official props/core
   still lack the previous project-local `pcbPlatedHoleSolderPaste` board option
   and typed per-breakout-point `layer` support. The configured board typecheck
   fails at index.circuit.tsx:40 and circuit/PinBreakouts.tsx:62. These were local
   canonical features, so this is an incomplete migration to published packages,
   not evidence that the latest upstream release removed public APIs.
   Removing these settings would lose manufacturing/routing intent; no removal,
   cast, suppression or component patch was used. Port/upstream the necessary
   features, or establish an equivalent supported API with regression evidence,
   before adopting the official toolchain and running full-board gates.
2. **C5184243 unchanged raw model, stages2/3:** six adjacent copper gaps are below
   the strict0.20mm requirement; minimum0.1998472mm. Current importer output does
   not fix this numerical footprint discrepancy. The active, user-approved
   adjusted import is preserved and still measures0.20005mm in its prior review.
   The new pure official runtime generates eight valid-schema paste apertures
   centered on the four through-hole USB shell slots (top and bottom), in addition
   to the12 SMT apertures. No invalid paste schema is observed, but the intended
   board-level suppression is unavailable. Stencil/assembly acceptance remains
   unapproved; do not publish this candidate as manufacturing validated.
3. **Supplier notices require separate review:** the fresh builds retain
   38 availability warnings,12 underspecified-pin warnings,
   6 missing-trace warnings and the other diagnostics in the JSON report.
   Standalone probes intentionally omit some NC connections and rail context.
   No blanket waiver is applied. The core availability path also turns request
   failures into a negative availability result, so a warning is not independent
   proof that a part is out of stock. Existing BOM stock dates are retained;
   re-import date/status/evidence have separate columns. No new supplier-stock
   guarantee or full-board metadata review is claimed.

## Validation and publication boundary

The configured board TypeScript check fails with the two API diagnostics above.
Do not mark the whole-board schematic/BOM/placement gates passed or run routing.
The58 fresh probe builds/TypeScript/electrical/schema audits and15 native probe
checks are independent completed checks. Review `VALIDATION.md` for final
formatting/test outcomes recorded after this report was prepared.

The tracked `dist/index/circuit.json` is deliberately the **previous A48 artifact**,
SHA256ed522500985229393c04e1bb92896e717fa7501595cdb34358a52598c50c5cf3.
It is not relabeled as regenerated by this candidate. Public package publication
is blocked by whole-board validation and absence of a valid matching fresh board
artifact. The registry package remains the last public A48 build. GitHub may
receive this explicitly blocked diagnostic revision; that is not synchronized
publication of an approved updated board. No routing, fabricated board, new
component placement or physical-test pass is claimed.

## Reproduction

From this task's board directory, use the pinned Bun runtime and frozen lockfile.
The commands and unmodified generated outputs are retained with per-process
resource records under evidence/supplier-reimports-A49/.

- `bun run typecheck`: reproduces the board API blockers.
- `bunx tsc --noEmit --project tooling/supplier-reimports-A49/tsconfig.json`:
  checks all58 fresh imports/probes.
- `bun scripts/audit-active-imports.ts evidence/reimport-audit-config-A49.json`:
  audits every schema element and expected electrical terminal/land.
- `python3 scripts/audit-reimport-deltas.py --manifest evidence/active-supplier-inspection-manifest-A22.json --evidence evidence/supplier-reimports-A49 --report evidence/reimport-delta-audit-A49.json`:
  reproduces textual change inventory; compiled comparisons are separate.
- For a new complete re-import, choose unused stage/evidence directories with
  scripts/reimport-suppliers.py; it refuses to overwrite previous attempts.

The generic bounded-command runner requires process-monitor access before
starting a child. Its2GiB limit is a safeguard, not evidence of routing memory
requirements or capacity in an actual Codex Cloud VM.

## Public synchronization result

The public GitHub diagnostic source is7aad816f5e224b7c193ada1f3a61522a0a293630. No new registry package was
published. Current anonymous registry metadata confirms public visibility; the
old named A48 download succeeds but differs from committed bytes only in its
source_filesystem_md5_hash project metadata. All remaining JSON elements are
identical. Strict byte identity still fails. Initial403/TLS failures and the
corrected bodyless-GET header error remain recorded, not presented as persistent
private visibility or an electrical failure. See evidence/public-audit-final-A49.json.
