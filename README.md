# USB-C PD brushed DC motor controller — A22 prototype

One5/9/12 V brushed motor, approximately2 A continuous target, one USB-C PD
input, regulated motor voltage, hardware10 kΩ speed potentiometer,
FWD/OFF/REV switch, DRV8874, three LEDs and one motor terminal. The MCU only
qualifies PD power and rail voltage; speed and direction remain hardware controlled.

**Four-layer placement is implemented; routing is blocked by USB-C land spacing.**
The80×65×1.6 mm board has140 purchased components/58 unchanged official
JLCPCB imports and four3.2 mm mounting holes. Revision31 selects
JLC04161H-7628 with35um outer/15.2um inner copper and ordinary through vias;
see docs/STACKUP-A31.md. Prior placement and8 A4 reviews remain evidence for
unchanged bodies/pads/sheets. Fresh layer-span/import/connectivity/placement
audits, all5 native prerequisites, formatting/TypeScript and41 board tests pass.
Canonical revision41 repairs distinguish component lands from fixed routed
copper and enforce connected-pad clearance for ordinary vias. Native MCU
escape paths are independently screened; fresh integration gates are pending. Its repair dependency retains one independently reproduced upstream
floating-coordinate test failure. Actual routed copper and manufacturing checks remain pending. No physical
hardware or continuous-current rating is verified.

Run every command from this directory with Bun1.4.2 (pinned in package.json).
The checksum-verified local runtime is `tooling/bun-1.4.2/bun-darwin-aarch64/bun`;
put its directory first in PATH for this task. Bun1.3.9 exhibits a native routing
regression that passes with source-identical1.4.2. Install with
`bun install --frozen-lockfile`.
Use `bun run format:check`, `bun run typecheck`, `bun run test`, `bun run power:report`
and `bun run build`. Both board and CLI defaults keep routing disabled while
the USB-C prerequisite is blocked. Re-enable them only after the replacement
component and all current prerequisite gates pass. Task-local canonical core preserves independent symbol terminals, each
breakout's router version and physical fixed-copper ownership. Its71 affected routing test files
pass71 tests/2200 assertions with three existing skips; the earlier core2089
146-test isolation suite remains historical evidence for unchanged behavior. The current board audit
also checks derived internal links against distinct intended nets.
Core/props source fixes are reproducible tarballs with patches,
upstream bases and regression evidence; no installed dependency or supplier part
was patched. Use explicit A22 audit configurations to avoid overwriting history.
The isolated Python manufacturing-review environment is
`tooling/power-review-venv`; its pinned packages are recorded in
`evidence/manufacturing-python-requirements-A22.txt`. It includes Shapely for
physical copper/drill checks and Gerbonara for independent Gerber/Excellon
parsing. Final exports use absolute output paths and retain parser diagnostics.

- `VALIDATION.md`: current gates and exact evidence.
- `docs/BOM.csv`:140 purchased components/58 supplier codes and dated assembly stock.
- `docs/PLACEMENT.md`:80×65 mm actual controls, access, holes and clearance.
- `docs/POWER-PROTOTYPE-A22.md`:corrected analog thresholds, PD reserve,
  six switching-model cases, thermal and bounded regeneration requirements.
- `docs/STM32-RUNTIME-A22.md` and `docs/I2C-TIMING.md`:linked timestamped runtime,
  conservative intervals, permission ordering and transport qualification.
- `docs/ASSEMBLY-PROCESS-A22.md`:hand-fit C18/THT/contacts, EP fill/cap and
  short-slot CAM acceptance before an order.
- `docs/PROTOTYPE-TEST-PLAN.md`:physical qualification remains pending.

With ON at the left in the placed product, both voltage bits OFF select5 V,
9 ON selects9 V,12 ON selects12 V,both ON inhibit.5 V prefers adequate15 V,
9/12 V require adequate20 V under the conservative budget; native12 V is not
required. Non-PD and insufficient sources leave the motor off.

`bun run firmware:bringup` links the inhibited diagnostic ELF/BIN/map with20,352
flash bytes,448 static RAM bytes and2 KiB stack. `firmware:qualified` requires
independently approved complete40-byte NVM, receive-path and measured ADC
provisioning. No synthetic approval or motor-enabled image is provided.
Initial motor tests are limited to≤1 mJ stored energy; further braking,5 V current
regulation and2 A thermal ratings require prototype measurements.

No fabrication order has been placed. This independent Git main has no remote;
GitHub publication remains blocked by the missing repository/branch.
The existing [tscircuit package](https://tscircuit.com/AnasSarkiz/usb-c-pd-brushed-motor)
was independently verified public in revision41 and must remain public only.
Its latest attempted committed69ff9a9 publication is incomplete: the official
compressed upload returned413 and the individual upload recorded28 failures.
No successful current publication, cloud build or matching remote circuit JSON
is claimed. Local design work continues while these publication issues remain
explicit. Earlier private releases do not satisfy the public publication rule.

## Historical implementation notes

Earlier part counts, unplaced geometry and missing runtime claims below refer to
their original revisions and are superseded by the current A22 evidence.

A9 corrects buck input capacitance to two supplier-backed 10 µF/50 V X7R ceramics. See docs/REGULATOR-REVIEW.md, docs/SELECTOR-MECHANICS.md, docs/MCU-POWER-SEQUENCING.md and docs/TOOLING-ISSUES.md for evidence and remaining gates. Routing stays disabled.

A10 independently audits replacement output-capacitor candidates, records actual stock and unresolved paste/mechanical/ripple issues, and adds portable PD/rail power sequencing. Contract qualification is separated from the expected driver undervoltage fault at startup. Firmware host/target-object checks do not establish a flashable embedded port or measured PD negotiation. See docs/OUTPUT-CAPACITOR-REVIEW.md and docs/PD-QUALIFICATION.md. The A10 schematic/BOM use supplier-backed Panasonic C178373 for C18; dependencies remain official and unchanged. Its loop/thermal/land approval remains open. Product placement is not started.


A11 adds one supplier-backed 1 kΩ/0.5 W VM discharge resistor and a measured-decay sequence with a 3 s timeout. The power budget includes +5% rail tolerance and bleeder load; see docs/RAIL-DISCHARGE.md. BOM now 129 components/55 supplier codes. Placement and routing remain unstarted.

A12 adds host-tested bounded PD message capture: 531 C assertions and freestanding Cortex-M0+ compilation, with 17 configured tests/363 expects passing. No flashable controller or measured charger negotiation is claimed. Hardware/BOM remain A11. A numeric native placement probe passes strict schema, pad/port geometry and all five checks; it is not product placement. Explicit/unit-string defects and unsuccessful command attempts remain recorded. Neither GitHub nor tscircuit is published because the GitHub destination is still unknown.

A13 adds a bounded, verified RAM-PDO/SoftReset write transaction: 969 host assertions, renewed531 receive assertions and Cortex-M0+ objects. All18 configured tests/366 expects pass. Errors and ambiguous commands latch completion off without retry. A successful write is not a fresh negotiated contract; response provenance and the actual STM32 port remain open. Hardware/BOM are unchanged and neither placement nor routing starts.

A14 uses the exact Panasonic model: all12,960 CCM sensitivity cases pass unchanged thresholds, while full converter/temperature/bias/transient/thermal approval remains open. The current ST guide also corrects alert-clearing semantics in the register mocks/documentation; request tests now pass974 assertions. All18 configured tests/366 expects pass. Hardware/BOM stay129/55, and product placement/routing remain unstarted.

A15 implements checked standby initialization/capability acquisition:13,969 simulated C assertions and a Cortex-M0+ object, with19 configured tests/369 expects passing. NVM, fresh-response ownership and the STM32 target port remain incomplete. Hardware/BOM stay129/55; placement and routing are still unstarted.

A16 adds complete NVM readback transport:20,639 simulated assertions and a Cortex-M0+ object;20 configured tests/372 expects pass. No approved manufacturing binary or actual programming/readback is available. The RDO current-field handling for sources above3 A needs correction. Placement/routing remain unstarted.

A17 corrects RDO current qualification for3–5 A sources while keeping3 A operating/hardware limits, and rejects reserved/malformed fields.60,202 policy/11,518 sequence/1,037 request assertions and22 configured tests/382 expects pass. All six portable target objects compile; no flashable MCU or physical result is claimed. Product placement/routing remain unstarted.

A18 adds the actual STM32 GPIO backend with open-drain bridge inhibition, safe startup ordering and preserved feedback/SWD state.24 configured tests/403 expects and10,289,863 GPIO-model assertions pass; all seven Cortex-M0+ objects compile. A flashable MCU image and remaining PD/peripheral/power gates are incomplete; product placement and routing remain unstarted.

A19 replaces four ADC-divider resistors with validated0.1% JLCPCB imports.129 placements/57 supplier codes; static rail-error screening passes261,568 independent corners and creates a5 V acceptance window. Actual ADC calibration/peripheral/noise/transient qualification remains open. Product placement and routing are still unstarted.

A20 adds the actual ADC1 MMIO acquisition layer with bounded calibration and timestamped VBUS/VM/VREFINT frames. Raw counts do not qualify motor power. Monotonic target timing, calibrated uncertainty integration and the remaining embedded/PD/physical gates are pending; hardware/BOM stay A19,129 parts/57 suppliers.

A20 source revision `5ccf142f12b49cfc26265af407ea83206467fa20` is committed locally. GitHub repository/branch/remote remains unspecified, so neither GitHub nor the tscircuit package has been updated.

A21 replaces scalar voltage decisions with complete uncertainty intervals and aborts if VM rises during the PD request/contract wait. Calibrated measurement integration and actual target execution remain pending; hardware/BOM stay A19.

A21 source revision `a7c5cde7d30d4f7a67a9579bbfe1e9993af97809` is committed locally. No configured GitHub repository/branch/remote exists, so neither remote update is complete.
