# A9 coordinate serialization investigation

## Official packages

The board keeps official tscircuit 0.0.2742, core 0.0.2056, props 0.0.677 and circuit-json 0.0.510. CLI is updated to 0.1.2237. No dependency override or supplier-model patch is installed.

An independent project also tests official core 0.0.2069 with official circuit-json 0.0.512 and React 19.2.0. The unchanged C23162 supplier probe specifies pcbX="2mm", pcbY="-2mm". Both official combinations still emit numeric display_offset_x/y, failing the unmodified schema. The latest official package was restored and the failure reproduced again after the experimental test.

Evidence: coordinate-serialization-A9.json; official-core-coordinate-A9.json; official-core-restored-coordinate-A9.log. No coercion, schema downgrade or warning suppression is used.

## Isolated source fix

Source: tscircuit/core at 24d72602641a1bccb3516d6ab9fad7b95ec523bd, version 0.0.2069. The patch is evidence/core-coordinate-fix-A9.patch. Numeric resolved PCB offsets are serialized as millimeter strings at the database boundary. Existing group expressions remain text. An absent group anchor is omitted rather than serialized as invalid null. No coordinates, transforms, geometry or imported models are rewritten.

A regression fixture validates the entire emitted document and checks numeric/unit/one-axis/calc/edge/nested-group placements against actual geometry. It fails on unmodified source and passes with the patch. The related positioning suite passes: 26 tests across 22 files, five existing snapshots, zero failures. Both ESM and declaration builds pass.

A task-local yalc store was used to test the built package against the actual unchanged supplier probe: strict full-document schema validation passes. The local package signature was 0.0.2069+b45d5d11. The link was removed and the official package reinstalled. Main board dependencies were never linked to this package. This is an experimental fix, not an upstream publication or released toolchain.

## Outstanding source-tooling checks

The upstream canonical dependency installation fails resolving its pinned pcb-trace-linter GitHub dependency. A separate diagnostic environment supplies official runtime and declared test dependencies; it is recorded in tooling/core-recheck-A9/package.json and bun.lock. It is not described as a successful canonical installation.

Whole-source TypeScript checking remains failed with eight pre-existing diagnostics: schematic-match-adapt return-type mismatch and six TI fixture symbol-type incompatibilities in this nested environment. The unchanged source and patched source produce exactly the same eight diagnostics; see core-typecheck-comparison-A9.json and both complete logs. None are suppressed or excluded from the source-project check. Board formatting, TypeScript and board tests are checked separately. No all-core-tests pass is claimed.

Product placement remains blocked until a validated board toolchain and the remaining schematic/power gates pass. A local regression result does not authorize routing. No core PR or upstream publication was created.


## A10 CLI cache mode issue

CLI 0.1.2237's getOrGenerateCircuitJson cache is keyed by source file hashes, without the requested build mode. A placement check run after a schematic-only build therefore reused an artifact with zero PCB components and falsely returned success. That result is withdrawn in main-native-checks-schematic-cache-A10.json and main-placement-schematic-cache-A10.log. It is not accepted as placement evidence.

A fresh full unrouted build was generated and archived as evidence/full-build-output-A10.circuit.json, with 128 purchased source components, 140 generated PCB-component records and zero PCB traces. Checks were then run sequentially against that full build. Netlist/pin_specification/source/schematic-placement pass; placement fails on the default overlaps. An additional official placement check directly reads the archived circuit.json-compatible filename and also fails. The unsupported arbitrary .json filename attempt is retained separately. Neither CLI source nor validation thresholds were modified.

When reviewing schematic-only output, never accept subsequent cached placement results. Check that the artifact contains all expected PCB components, and directly check the archived full circuit.json. Coordinate-schema and power/firmware prerequisites remain unresolved; product placement remains unstarted.
