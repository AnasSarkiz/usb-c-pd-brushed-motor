# A48 — Codex Cloud handoff

Read this first, then `AGENTS.md`, `SETUP.md`, `START-TASK.md`, the current top of
`VALIDATION.md`, and `.agents/skills/tscircuit/SKILL.md`. This is the dedicated
public board repository, not the store application. Commands run at its root.

## Current instruction and reason for moving

The user's Mac runs out of memory while routing. Continue on Codex Cloud Linux,
using **Pipeline9**. Do not start native routing on the Mac. User approval to
route supersedes the earlier placement-only instruction, but all validation
gates still apply. No fabrication order, merge or hardware-tested claim is
approved. Publish completed steps to both public destinations under AGENTS.md.

GitHub: https://github.com/AnasSarkiz/usb-c-pd-brushed-motor, branch `main`.
Package: https://tscircuit.com/AnasSarkiz/usb-c-pd-brushed-motor.
Use account `AnasSarkiz`; never copy Mac Keychain credentials or local auth caches.
The full committed history, design documents, source, firmware, imports, tests,
evidence and locally maintained dependency archives are available in GitHub.

## Revision and validation boundary

A45 implementation `7a869ef36fb6a9dd78c24e613d3e3f2f301296e8` passed all five
native prerequisite checks, independent import/schematic/placement/copper audits,
formatting, TypeScript and 44 tests/476 assertions. Receipt commit
`6dce7c7605c03ac29513557ccebf2a532ee196d2` records public source and package
verification. Its unrouted artifact SHA256 is
`ef7db1d278365d982e844ba166444354492dee501ae500b747d1919e13b1d1fe`.
Published version: `0.0.1-a45-48v-usb-unrouted-7a869ef-04bbbc95`.

A46 updated tscircuit to 0.0.2744 and circuit-json to 0.0.517. A47 selects
`beta_pipeline9`; its fresh unrouted artifact SHA256 was
`7f3f36c59271d4ec0989b6602f665975947b8b2e3552feba72027a69eb9fc20e`.
Both attempts passed 12 independent/test prerequisites, but the expensive native
check drivers were interrupted by user steering. **None of the fresh five native
checks has a completed passing result. Neither attempt started the router.**
Do not reinterpret empty interrupted logs as passes. Historical failed routing
attempts and their geometry remain diagnostic evidence, not accepted copper.

A48 adds the portable cloud workflow. Root `routingEnabled` defaults false;
CLI build routing is disabled by default. Only the guarded cloud runner injects
`routingEnabled=true` with supported CLI build flags, after fresh prerequisites.
Any current A48 build/check results and publication status are recorded at the
beginning of VALIDATION.md; the historical sections do not supersede them.

## Preserve these design decisions

- One brushed motor, selectable nominal 5/9/12 V, approximately 2 A continuous
  **target**, with regulated supply and peak-current protection. Broad motors
  require a measured operating envelope; arbitrary startup/stall success is not
  guaranteed. No motor rating inference.
- One USB-C power connector; no second USB, display, wireless, communication
  feature or MCU-generated speed control. STM32G030F6P6TR/C529330 is approved
  solely for PD/voltage qualification.
- 140 purchased placements, 58 supplier SKUs, 152 PCB components including native
  structures; 80 × 65 × 1.6 mm, four layers, JLC04161H-7628, outer 35 µm/inner
  15.2 µm copper. Four 3.2 mm mounting holes; eight native A4 schematic sheets.
- USB-C faces outward at the left edge, motor terminal at the right edge; speed
  knob and direction/voltage controls are top accessible. Drawing-based placement
  and actual GLB inspection are already recorded. CAD origin/stakes are approximate;
  manufacturer drawings, lands and drills govern exact assembly dimensions.
- C5710902/Bourns PTV09A-4015F-B103 is the validated 10 kΩ speed potentiometer.
  Preserve 330 Ω/5.6 nF hardware PWM: nominal approximately 19.4–20.9 kHz,
  2.9–96.7% duty under the documented diode assumptions.
- C908270/Dailywell 1MS3T1B1M2QES-5 is the validated 3-terminal SPDT ON-OFF-ON.
  Pin 2 is PWM common; FWD 2–1→DRV8874 IN1; REV 2–3→IN2; center both open.
  DRV8874 PMODE high selects PWM mode; 00 is coast. Internal input pulldowns
  are 100 kΩ typical. LEDs show commanded PWM direction, not measured rotation.
  No SP3T, two-gate direction decoder or timed reversal circuit. Rapid reversal,
  bounce, leakage/EMI and whether added coast delay is needed are prototype tests.
- DRV8874 VREF 3.3 V/IPROPI 3.3 kΩ gives nominal chopping 2.22 A and a documented
  2.044–2.423 A tolerance screen at VM≥5.5 V. Accuracy at 5 V is not guaranteed.
  Keep OCP/thermal/energy protection; thermal shutdown is not a continuous rating.
- SW2 explicit voltage selector: logical 00=5 V, 01=9 V, 10=12 V, 11=inhibit.
  Read SELECTOR-MECHANICS.md for physical slider orientation. Default rail branch
  is 5 V with motor power and bridge inhibited, not automatically energized.
- PD: fixed 15/20 V, source advertisement 3–5 A; operating RDO 3 A and maximum
  equal to source advertisement. Use adequate 15 V for 5 V motor, 20 V fallback;
  current conservative headroom policy requires 20 V for 9/12 V. Never assume a
  native 12 V PDO or blindly choose 20 V. 5 V-only, non-PD, insufficient, malformed
  or stale contracts inhibit motor power. Keep bounded ADC/rail/contract provenance.
- Firmware has linked inhibited bring-up ELF/BIN. Qualified operation requires
  independently approved manufacturer 40-byte NVM and measured RX/ADC profiles;
  absent physical approval stays fail-closed. Compiler results are not live PD tests.
- J1 is C5184243/GCT USB4105-GF-A-120, 48 VDC/5 A. The user explicitly authorized
  twelve SMT X translations ≤0.000381 mm to obtain ≥0.20005 mm gaps. This is the
  **sole imported-definition modification exception**; sizes/pins/holes remain
  unchanged and original official import is archived. Do not generalize it.
- Every other electronic component is an unchanged supported JLCPCB import.
  Old failed inactive C6738614/DP3T/SP3T candidates are historical, not active
  board blockers. Do not create substitutes, alter pin mappings or suppress errors.
- Keep `isViaInPadAllowed=true` for the exact 12 imported thermal vias and
  `autorouter.allowViaInPad=false` for new routed vias. Independent drill audit
  permits only documented original exceptions, including same-net checks.
- Preserve 0.20 mm required clearance, stackup/via/current-path constraints and
  all routing groups. Pipeline9 is the local PreloadedTraceGraph solver inside
  the cloud VM, not a remote tscircuit routing endpoint. Canonical core/props/
  capacity patches are needed; do not replace them with an unreviewed reinstall.

## Context index

| Area | Authoritative repository files |
| --- | --- |
| User original implementation continuation | CONTINUATION-REQUEST.txt; later corrections summarized above |
| Scope, BOM, simplification | docs/REQUIREMENTS.md, docs/BOM.csv, docs/ARCHITECTURE.md, docs/SIMPLIFICATION.md, docs/design-manifest.json |
| Direction and PWM | docs/DIRECTION-CONTROL.md, circuit/PwmControls.tsx, circuit/MotorBridge.tsx |
| Power/PD/current policy | docs/POWER-PROTOTYPE-A22.md, docs/PD-QUALIFICATION.md, docs/PD-RDO-CURRENT.md, docs/REGULATOR-REVIEW.md, docs/OUTPUT-CAPACITOR-REVIEW.md |
| Selector/ADC/discharge | docs/SELECTOR-MECHANICS.md, docs/ADC-SENSING.md, docs/PD-VOLTAGE-INTERVALS.md, docs/RAIL-DISCHARGE.md |
| Firmware safety/provisioning | firmware/, docs/STM32-RUNTIME-A22.md, docs/STM32-SAFE-GPIO.md, docs/STM32-ADC.md, docs/STUSB4500-*.md, docs/pd-manufacturing-profile.json |
| Connector orientation and exception | docs/USB-C-REPLACEMENT-A45.md, docs/CONNECTOR-ORIENTATION-A42.md, docs/USB-C-PAD-CORRECTION-A44.md, evidence/usb-c-C5184243-original-import-A45.tsx.txt |
| Placement/stackup/artwork | docs/PLACEMENT.md, docs/STACKUP-A31.json, docs/STACKUP-A31.md, circuit/ProductArtwork.tsx |
| Warnings and active supplier audit | docs/WARNING-REVIEW.md, evidence/main-warning-review-A45.json, evidence/active-supplier-inspection-manifest-A22.json, tests/supplier-audit/ |
| Tooling provenance | package.json, bun.lock, tooling/*.tgz, evidence/routing47-pipeline-policy-A47.json, docs/TOOLING-ISSUES.md |
| Assembly and hardware qualification | docs/ASSEMBLY-PROCESS-A22.md, docs/PROTOTYPE-TEST-PLAN.md, docs/COPPER-PULSE-REVIEW-A38.md |
| Stages and remote receipts | top of VALIDATION.md; evidence/publication-*.json and github-public-*.json |

The entire repo supplies older supporting evidence; read current summaries before
large historic debug images. CONTEXT-MANIFEST.json binds transferable source and
critical evidence, not every historical image. `verify-context.py` verifies bytes;
it does not certify schematic correctness. After intended reviewed edits, explicitly
update the manifest with `python3 scripts/codex/update-context.py` and review its diff.

## Continue in Cloud

1. Complete Linux setup per SETUP.md. Record compiler/tool versions and actual VM
   memory/disk limits. Run checks sequentially; never use the old three-worker cache
   drivers. Setup installs dependencies only and does not route automatically.
2. Run `bash scripts/codex/route.sh cloud48` (choose a fresh prefix on retries).
   It rebuilds all 58 supplier probes, rebinds only unchanged A45 warning messages
   and diagnostic fields, runs fresh independent/five native gates, binds source
   hashes, independently checks preroute copper, then routes with Pipeline9.
   It stops on any failure and retains logs and GNU time memory reports.
3. Independently inspect every trace connection, shorts, widths/tapers, layer spans,
   keepouts, drill-to-pad distances, imported-via exceptions, ground connectivity
   and power-path current basis. Inspect eight schematic sheets and four copper
   layers, detailed USB-C/buck/bridge/MCU areas and connector CAD as required.
   Generator configuration is not proof of manufactured copper compliance.
4. **Native snapshot integration still needs completion in Cloud.** CLI 0.1.2237
   `snapshot` does not accept build's `--inject-props`/`--ignore-config` options.
   A default snapshot of index currently remains unrouted. Do not label it routed
   or silently substitute it. Resolve a supported routed-index snapshot path,
   rerun `tsci build index.circuit.tsx --pcb-png --pcb-svgs --schematic-svgs` and
   `tsci snapshot index.circuit.tsx` against the same routed source/configuration,
   verify routed traces and hashes, and inspect changes before acceptance. Any
   permanent routing-stage source change must retain an explicit safe local
   unrouted command and receive the required fresh prerequisite/source bindings.
5. Preserve reviewed 91 metadata advisories and 57 native pin notices; any new or
   changed diagnostic requires explicit investigation. No blanket suppression.
6. Update stage records and publish exact committed source plus fresh circuit JSON
   to public GitHub/main and public tscircuit package. Verify anonymous visibility
   and matching artifact bytes. Do not publish stale output or private packages.
7. Stencil/pin-in-paste approval, precise sample mechanical fit, actual PD chargers,
   unplug/replug, startup/stall/current limits, thermal operation and rapid reversal/
   braking energy remain physical prototype work. Published WIP is not permission
   to order or advertise hardware-tested/guaranteed arbitrary 2 A motors.

Cloud setup and Pipeline9 execution have not yet run in a real Linux VM as of
handoff creation. Local syntax/context/unit checks do not prove cloud installation,
RAM sufficiency, routing success, physical tests or fabrication readiness.
