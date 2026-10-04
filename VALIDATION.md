# A22 revision39 — enforce configured clearances in native routing

Revision38 was stopped after measured violations, not because routing was slow.
The retained partial output has three same-net ordinary drill-to-pad gaps of
0.150001–0.150995mm and25 foreign copper violations below the0.20mm rule.
The stopped full artifact is unchanged preroute SHA5600121e046098b3be6d245ab7ebd22658f404f26525c1680a2c6ea4c5c3f11c,
with140 purchased/152 PCB components and zero final traces. It is rejected as
routing evidence. All partial traces and failure diagnostics are retained.

Canonical capacity-autorouter source now propagates configured trace clearance
into Pipeline7 repair rather than hardcoding0.10mm. Canonical repair03 source
adds an explicit same-net via-to-pad enforcement option, enabled by the
existing no-via-in-pad routing policy. Legacy callers retain their prior behavior.
No imports, installed dependencies or generated Circuit JSON are patched.
Ten affected autorouter regressions/66 assertions, TypeScript, build and published
version guard pass. The repair full suite has110 passing tests and one unchanged
upstream golden-coordinate failure (about3e-17mm), independently reproduced on
the untouched upstream commit and both Bun1.3.9/1.4.2. It is retained unchanged;
the full repair suite is not claimed as passing. The new repair regression,
formatting and TypeScript pass. Source archives and exact package hashes bind
the local integration. Installing and revalidating this prototype is in progress.

Three native pad escape reservations will precede logic routing. Their candidate
preroute and physical/schematic equivalence audits pass. Full rerouting, actual
copper/drill checks, visual review and prototype fabrication export remain pending.
Hardware measurements and production PD provisioning remain external dependencies.

Fresh production-source preroute SHA d97422db3ea64b4a79f7c5af02b1014da7dd7595e6085672401ac611551fa674
contains140 purchased/152 PCB components and zero traces. All seven direct
prerequisite audits pass; all physical records and eight schematic sheets are
identical to revision38. Current formatting, TypeScript and41 board tests/466
assertions pass. The new independent all-net copper checker explicitly compares
wire/pad/via/pour copper by layer and handles linear taper boundaries; its
regression catches a0.15mm foreign gap and rejects unsupported geometry.
The fresh power report and linked bring-up firmware build pass with unchanged
ELF/BIN hashes. Motor-enabled provisioning and physical tests are not inferred.
All134 source/dependency/import hashes are bound in routing39-source-binding.
Canonical built/installed autorouter JS SHA f6c0321bc72b2457832c59effa8f2827692fe71a9af0d6a0132bffc3dc7a5340;
packed artifact SHA02729fa4d946a13bd4e662f5d3649caf794b68cdb0dad162a65d9f42ef42b814.
The initial sandboxed package installation is rejected by the temp-directory
permission boundary; the supported escalated install succeeds and matches the
built artifact byte-for-byte. The package is a local0.0.959-a39 prototype build,
not an upstream publication. Native prerequisites are still in progress. The four schematic-placement
style advisories are unchanged from revision38 and explicitly reviewed: the
horizontal second resistor in each dump series branch remains readable. The
actual dump A4 image was inspected; labels/values/connections are clear. Generic
vertical-rail suggestions do not identify connectivity or spacing defects.
See routing39-schematic-style-review-A22.json. No diagnostics are suppressed.

All five native prerequisites now exit0; placement reports0 errors/0 warnings.
The four explicitly accepted schematic style advisories remain visible. Every
one of the134 bound source/dependency/import hashes matches. Native39 full
routing started with a fresh CLI cache and retained per-phase native inputs,
outputs and logs. No partial output counts as accepted routed copper.

---

# A22 revision38 — explicit dump-current copper widths

Revision37's fresh unrouted build, seven direct prerequisite audits and38 board
tests/460 assertions pass. Before its five native checks started, validation
was deliberately stopped to correct the remaining dump-current width intent.
No native37 routed build or fabrication output is claimed.

DUMP_LOAD now has a2mm nominal width in the power phase. Each individual
DUMP_MID branch has0.5mm nominal width in the dump phase. These are supported
net-level width settings; the source net identifiers, wiring, components,
imports, geometry and clearance/drill constraints remain unchanged. Actual
widths can still taper around obstacles, so emitted sections, layer thickness,
barrels and branch currents require independent pulse and thermal review.
The established2A target and bounded regeneration envelope are unchanged.
Fresh build and all7 direct audits pass. The initial all-record equivalence
guard correctly rejects changed dump power labels/junctions. All physical PCB
record types and seven sheets remain byte-identical; the re-rendered dump A4
sheet was inspected and is readable. That rejection remains preserved. A new
conditional SI copper-pulse screen passes an independent energy-balance
regression; no continuous ampacity or pulse rating is inferred from it.
Formatting/TypeScript,39 board tests/462 assertions and all5 native
prerequisites pass with successful exits and zero reported errors. All129
source/dependency/import bindings remain unchanged. Native38 is authorized
and in progress. A fully local Pipeline4 diagnostic on the rejected original
44-net input also fails in14.672s with its iteration-limit error. The local
seven-net buck diagnostic solves with zero errors in486.576s on the same
obstacles/preloaded traces. Constructor work is outside the per-phase timing
report; the actual elapsed duration is retained. This is subset evidence only;
no partial output is accepted. The preceding uninstrumented attempt was
interrupted without a claimed result. The captured available-segment input
has66,765 nodes/197,229 edges, finite dimensions and no off-board nodes. Four-layer actual copper and manufacturing
validation remain in progress; hardware qualification is pending.

Native38's buck group completes with zero solver errors in792.2s; input
protection routing is now in progress. The final audit pipeline explicitly
includes actual routed artwork and supplier rotations, all13 critical power
nets, and a conditional dump-wire pulse calculation bound to the same checked
artifact. The pulse report cannot authorize the expanded regeneration envelope
or establish continuous ampacity. Its unrouted-artifact rejection is retained.

Independent native-export format diagnostics use a separate clearly marked
unrouted probe while the full routing process continues. Gerbonara1.6.3 parses
all12 Gerbers and both drill files; the isolated tooling versions are recorded.
The first relative output path fails because CLI resolves it beside the input;
an absolute output path succeeds. No export or Circuit JSON was patched.
The initial0.2um drill-equivalence assumption correctly rejects a0.327um slot
endpoint difference. CLI source proves G85 endpoints use3 decimal mm, ordinary
drill coordinates4 and tools6. A diagonal half-LSB plus tool-radius/polygon-sag
bound of0.727–0.738um accounts for that representation: all26 plated source
drills and6 NPTH drills match within the calculated bound. The original
rejection remains preserved. This is format evidence only; final routed
clearance checks, full manufacturing export and visual review remain pending.
Both parser G90-after-header diagnostics remain visible for explicit review;
none is suppressed or automatically approved. Rebuildable historical
publication staging caches were removed to recover disk space; sources,
imports and original validation/publication evidence remain untouched.
The manufacturing-unit/slot regression initially exposes an unsupported
primitive reaching unit conversion; the helper now rejects unsupported drills
explicitly before conversion. The original failure remains retained. The fixed
regression covers inch units,0/90/180/270-degree slots and displaced geometry.
Current formatting/TypeScript and all40 board tests/464 assertions pass;
all129 routing source/dependency/import hashes still match the checked source.


A diagnostic on the120 completed native38 traces independently measures83
unique ordinary via drills against every component pad and existing drill,
without constructing or modifying Circuit JSON. Drill-to-drill minimum is
0.339589mm. Three same-net via-to-pad gaps fail the0.20mm rule:
D3/VBUS_SENSE0.150995mm,TP1/SWDIO0.150333mm and
R57/HOST_INHIBIT_B0.150001mm. The partial native output is not accepted.
Later native phases may alter preloaded routes; final geometry must resolve
these exact issues rather than accepting same-net exceptions. Pipeline7's
high-density and repair constraint propagation is under investigation.
The first diagnostic implementation incorrectly treated opposite route
traversals as different via definitions; its rejection is retained and the
comparison now requires identical physical diameters. A second rejection
shows partial router routes lack consistent emitted layer-span records;
this diagnostic does not qualify spans. Final full-artifact span checks remain
mandatory. Source/import geometry and routing constraints are unchanged.


Native38's input group completes with zero solver errors in1,383.0s and
133 accumulated traces. Protection9 is now routing. All120 preceding traces
remain unchanged, including the three rejected same-net drill gaps.
An isolated source candidate introduces native fanout-phase pcbTracePaths,
covering D3.cathode,TP1.pin1 and R57.pin2 before quiet/interface routing.
Canonical source and its existing saved-fanout regression confirm that the
native phase continues from the supplied exit layers. Proposed drills have
0.574995,0.559997 and0.393398mm clearance to every component pad, respectively.
The first two planning variants conflict with later automatically routed
wires and remain rejected evidence. Planning against the57 traces actually
preceding the proposed phase passes: minimum foreign copper gaps
0.389510,2.530978 and0.865418mm. Later circuitry must regenerate around the
reservations; its previous paths are not accepted as compatible. An independent
candidate preroute build passes with140 purchased/152 PCB components,zero
traces/errors, and every compared physical record plus all8 sheets unchanged.
CandidateSHA157a0895ff571e9b448fd539ab94ad4d6d9b05bfcfc4cfe27add45484cdf6950.
This is source/placement planning only, not actual routed-copper validation.
The active native38 source and its index output are preserved unchanged.

---

# A22 revision37 — route analog circuitry in five functional groups

Native36 confirms the core fix: PD and MCU breakouts use Pipeline9 and pass;
Pipeline7 routes VCC3V3, four quiet nets and all19 interface nets with zero
solver errors. The combined44-net analog phase then hits an iteration limit.
Rejected artifact740df6edfece5787de1d4dace3e820b338a9e43b668754fcf11d1e4d5baaecd2
contains zero final traces and is retained. Source inspection shows Pipeline7
caps the failing subsolver effort at1, so increasing board effort cannot give
that stage more iterations.

Native phases now divide those44 analog nets into buck7, input8, protection9,
PWM/direction11 and dump9. Power and native ground fanout follow these groups.
This is explicit supported route ordering; component geometry, imports,
connectivity, clearance and drill constraints are unchanged. Every signal must
belong to a declared group; unknown names throw. Complete fresh prerequisite
checks are in progress before native37 routing.

Automatic approval review rejected a Pipeline5 diagnostic because its external
cache may upload private routing geometry/connectivity. Source inspection
confirms POST requests to hd-cache.tscircuit.com/solve. That diagnostic was not
executed. Work continues with the fully local Pipeline7; no rejected transfer
or network workaround is used. Optional reusable-path serialization warnings
from native36 remain preserved; no rejected copper is accepted.

---

# A22 revision36 — honor the breakout router version in canonical core

Revision35's native build ignored both breakout Pipeline9 selections and used
board Pipeline7 for the MCU escape. It failed with the coincident-via endpoint
repair error; rejected artifact
f5a478e1da7e162d81846efa6f503a4ac90665f5b49e661ce3f1843aed4590cc
has zero final traces. The failure remains preserved.

The canonical core routing-phase planner now carries each breakout's existing
autorouterVersion property through to solver selection. Omitted values retain
board inheritance. The regression fails before the fix (Pipeline7 twice) and
passes after it (Pipeline9 breakout, Pipeline7 remaining board). Its actual
PCB snapshot was inspected. Core formatting, TypeScript, build and package
binding pass;71 affected test files pass in fresh processes with unchanged
assertions/snapshots/default deadlines. Three existing skips remain explicit.
The two shared-runner attempts retain their sandbox socket/timing failures;
no assertions or timeouts were relaxed. Source patch, text archives, test logs
and the exact task-local core2090 tarball are retained in evidence/tooling.
Built, packed and installed JavaScript are byte-identical.

Fresh complete unrouted artifact
c7a20a566d226d751eb28f4525571bc8c4c06b7ab684049167556b8890d6ea4a
passes all7 direct schema/import/connectivity/placement/target/artwork/PnP
checks. All31 physical/schematic record types and8 A4 sheets are unchanged
from revision35. No supplier import or component definition was edited.
An initial board typecheck correctly rejected external core evidence copied
as compilable TS; those archives now use text extensions, with the failed
log preserved. Board formatting/TypeScript and38 tests/460 assertions pass.
All5 native prerequisites pass with successful exits and zero reported errors;
schematic-placement emits no diagnostics, complemented by the full-artifact
schematic audits. All129 source/dependency/import hashes remain unchanged.
Native routing36 is authorized and in progress.

On unchanged revision34 inputs, Pipeline7 additionally solves VCC3V3 in28.576s
and the four quiet nets in97.093s, complementing the78.198s interface result.
These remain diagnostic-only evidence. Actual full-board copper, drills,
ground, thermal paths, snapshots and fabrication remain in progress. Physical
qualification remains pending. All58 active supplier listings were refreshed
2026-10-04; MCU and test contacts have explicit pre-order constraints.

---

# A22 revision35 — explicit native Pipeline 7 board routing

The unchanged revision34 interface input is rejected by Pipeline9 static
reachability: the VOLTAGE_BIT12 breakout endpoint lies in a narrow bottom
region with zero exits. The native build and independent2x reproduction fail;
no resulting copper is accepted. On that exact input
430da9ac8535cdaec3bc60b4aff8c7ce6c66e25ac944882f504930c578611197,
the supported native Pipeline7 solves in78.198s with zero solver errors,
including its geometry improvement stages. Pipeline5 independently solves
in42.790s. These are diagnostic results, not complete board validation.

The board now explicitly selects beta_pipeline7. Both previously validated
IC breakouts explicitly retain beta_pipeline9. This is a supported routing
configuration, not an automatic fallback; trace, via, drill and clearance
requirements are unchanged. Official supplier imports are untouched.
Fresh unrouted artifact
e42521568233e50d703c623b787a6d38c710bc47d5553dae9edbefa36afff124
has140 purchased/152 PCB components,12 imported EP vias and zero PCB traces.
All7 direct prerequisite audits, formatting and TypeScript pass. Physical
records and all8 sheets are byte-identical to revision34. All5 native
prerequisite gates pass, with zero reported errors and successful exits;
schematic-placement emits no diagnostics. The complete-artifact schematic
audits complement that CLI result. Routing35 is authorized. All38 board tests
pass with460 assertions; power report and reproducible bring-up firmware
link also pass, with the exact earlier ELF/BIN hashes reproduced.
Actual full-board copper, ground, drills, power, snapshots and fabrication
remain in progress. Hardware qualification remains pending.

Assembly availability refreshed2026-10-04 for all58 active codes/140 parts,
with exact visible JLCPCB rows and positive displayed stock. C529330 remains
pre-order/minimum8/estimated13days; C2906768 pre-order/minimum33/manual fit.
BOM.csv and assembly instructions record these constraints. The prior stock
report and BOM are preserved. No import or board connection changed.

---

# A22 revision34 — reserve native reset and ADC paths before logic supply

Native33 loads the saved ADC tree and routes VCC3V3, then fails the static
reachability precheck for the reset breakout-to-C32 connection. Its exact
failed artifact72b31b73e672b4ef693e645300e54ac96c013dd6608ec8fb50bf79c23b078c3b
contains no final traces. Independent unchanged-input2x diagnosis reproduces
that failure in2.180s; both failures remain preserved.

Two supported native0.20mm reset paths now join C32.pin1 and TP3.pin1 to
the existing U11.pin6 top breakout endpoint before supply routing. They do
not add vias or alter components, supplier models, connectivity or DRC rules.
The exported native path schema passes. Independent planning against exact
component/ADC reservations and MCU fanouts measures0.350001mm foreign-pad
clearance,0.459171mm existing foreign-wire clearance and0.710616mm ADC-via
centre-to-all-pad clearance, with zero issues. The supply must reroute around
these fixed paths; this planning result is not accepted emitted copper.

Fresh unrouted artifact9fdd295d1d923b7afdbbf15ecb4e9a86d70784a87f57568b446cd09056892bea
has140 purchased/152 PCB components,12 unchanged full-stack imported EP
vias and zero PCB traces. Strict schema, all supplier transforms, derived
net isolation, full placement,31 breakout targets,163 labels and129 automatic
assembly rotations pass. Geometry equivalence confirms unchanged reviewed
bodies, pads, barrels, artwork and eight A4 sheets. Formatting and TypeScript
pass. All five required native prerequisites pass with zero errors. Native
routing34 is authorized. Actual copper, ground, drills, power, snapshots,
fabrication and hardware qualification remain pending.

Publication of exact Git73ab2a5 failed:818/828 files acknowledged, ten explicit
network timeouts, zero source-hash changes. The release is not marked ready.
The current workspace instructions require public destinations and matching
Circuit JSON. A signed-out browser check on2026-10-04 shows the known package
as404/may be private. Earlier private publications do not satisfy that rule;
GitHub remains blocked by the missing board repository/branch. Independent
board implementation continues.

---

# A22 revision33 — native ADC VBUS tree, prerequisites in progress

Native32 routes VCC3V3 and reset, then rejects ADC_VBUS/source_net_21_mst2
in the5-net sensing phase. Exact failed artifact
 ae690394503613b344e483be0219ee0ff479fad56ec917dce90f1787211b77bb
has no final PCB traces; failure and rejected regional output are preserved.

Three supported saved native0.20mm paths now connect the actual R60.pin2,
R61.pin1 and C33.pin1 supplier pads and the U11.pin7 bottom breakout target.
One0.60/0.30mm ordinary through via is planned at(-12,-6), outside all pads.
The tree is reserved in phase0 alongside the7 existing buck/motor paths;
remaining4 quiet nets stay in phase3. Components, imported models, net
connectivity and DRC rules are unchanged. This is routing intent, not accepted
copper. Independent planning uses the exported native paths and exact32
pads:zero foreign-pad clearance issues; planned via centre gap0.710616mm
exceeds0.50mm. Fresh artifacte9cda36a6134a2d2f05eb1444dd15d73e0c24ae8cdc46ecccf4dda15ceb7ea53
passes strict schema,140 supplier transforms/exact12 EP vias, derived-net
isolation, full140/152 placement,31 targets/163 labels and129 automatic
rotations. Formatting/TypeScript and all five native prerequisites pass with
zero errors. Body/pad/barrel/schematic geometry is unchanged. Native33 routing
is authorized; all actual copper/drill/ground/power/fabrication gates remain pending.

---

# A22 revision32 — functional routing phases, prerequisites in progress

Native31 passes every local IC escape, reset and5 quiet nets. The69-network
phase rejects its high-density/regional candidates; exact failed artifact
25616b68b83d243844bf02d8d8aed54923811d556fd4dc457ecc189184ac01c0
has no final PCB traces. Independent2x diagnosis reproduces failure in11.993s,
with VCC3V3,VM and selector/interface paths competing beside the MCU and
capacitors. All4 layers were available; no failed candidate is accepted.

Supported phases now reserve VCC3V3 first, reset second,5 quiet nets third,
19 interface nets fourth,44 analog signals fifth and5 remaining power nets
sixth. GND's phase7 matches the explicit native plane-fanout phase, avoiding
an additional shared ground-trunk stage. Physical ground continuity still
must pass the independent all4-layer island/barrel audit on actual copper.
The four-layer stackup, all components/pads/breakouts, connectivity and
trace/drill/edge rules remain unchanged. Fresh artifact
60ff10c94b0ce3f99642b0c0237903d5299b6a67b280702d1e0d57fb6af0d1d8
passes strict schema,140 supplier transforms/exact12 EP vias, derived-net
isolation, full140/152 placement,31 targets/163 labels and129 automatic
rotations. Geometry equivalence preserves full-stack barrels, reviewed
physical bodies and8 A4 sheets. Formatting/TypeScript and all five native
prerequisites pass with zero errors. Native32 routing is authorized; actual
copper, ground continuity, fabrication and physical gates remain pending.

---

# A22 revision31 — four-layer stackup, prerequisites in progress

Native30 solves reset alone and all5 other quiet nets. Main69-net routing
rejects VCC3V3/source_net_3_mst15 in cmn146 beside the MCU. Exact rejected
artifactd2e46a7041d78150327790e7794864ca58679588d0f0b95b475df20031b1eee8
contains no final accepted PCB traces. The failure remains preserved.

The permitted provisional-stackup adjustment selects four-layer1.6mm
JLC04161H-7628:35um outer/15.2um inner copper. All4 layers have native GND
pours. Ordinary0.60/0.30mm vias remain full-stack; blind/buried vias are
explicitly disabled. All12 imported EP barrels retain positions/sizes and
span the full stack through native rendering, without supplier edits.
Physical outline, bodies, pads, breakouts, nets and all DRC rules are unchanged.
Independent audits now verify layer count/span against the manufacturing
manifest, ground on all4 layers and thickness-specific power resistance.
New regressions cover missing inner barrel bonds and inner copper resistance.
Unrouted artifact210ef1d22f4270e43e6127cd3012ca7ee8213cc9eeed4119afdbd49964f4bac1
passes strict schema,140 supplier transforms/exact12 EP vias, derived-net
isolation, full140/152 placement,31 targets/163 labels and129 automatic
rotations. Native layer spans are independently verified for all12 imported
vias and14 PTH pads; bodies/pads/courtyards and8 A4 sheets remain identical
to the reviewed placement. Final formatting/TypeScript and38 board tests/460
assertions pass, including inner-copper and barrel-bond regressions. Core
four-layer focus:6 pass/18 assertions,1 pre-existing dense-routing test skipped.
The initial draft TypeScript enum lookup failed and was corrected without type
escapes; original failure and final passing logs remain preserved. All five
native prerequisites pass with zero errors. Native31 routing is authorized.
All4 emitted copper layers, routed checks and fabrication remain pending.
GitHub publication remains blocked: this independent main has no configured
remote. Known private tscircuit publication follows the validated source commit.

---

# A22 revision30 — reset routing priority, prerequisites in progress

Native29 passes all local IC escapes but rejects MCU_NRST in its6-net quiet
phase. Exact failed artifact27d73c4cbb98c4627117a73e101baed2eaaa95a69b957b61337803925337ea21
has no final PCB traces. Independent native2x diagnosis reproduces the failure
in2.631s. The affected region beside the MCU combines reset and both ADC
routes; the new pin10 escape is retained. No rejected copper is accepted.

Supported native phases now route MCU_NRST alone first, the5 remaining quiet
nets second, the69 other networks third and ground fourth. Final native
plane fanout moves to phase5. Electrical nets, component/pad geometry,
breakout targets, trace/via/edge rules and two-layer stackup are unchanged.
Fresh complete artifact03d21f7f2a6c2f54caf2a4e177a987b65e619cacbb0d99f05561b8b655051cff
passes strict schema,140 supplier transforms/exact12 EP vias, derived-net
isolation, full140/152 placement,31 targets/163 labels and129 automatic
rotations. Formatting/TypeScript and all five native prerequisite commands
pass with zero errors. Identical physical geometry preserves the reviewed
placement and8 A4 sheets. Native30 routing is authorized; final copper,
fabrication and physical gates remain pending.

---

# A22 revision29 — selector underside escape, prerequisites in progress

Native28 completes all6 quiet nets, then fails the remaining69-net phase on
VOLTAGE_BIT_12/source_net_24_mst0 in cmn146 beside the MCU. Exact failed artifact
7840cc5b5c841bc1a111789db06cb45ed510f675820c5e11e92961f9a92793d3
has zero final accepted copper; the earlier solved phases remain diagnostic
outputs only. Rejected primary/regional results are retained.

Pin10's target staggers to(-14.8,-3.075),1.07005mm from pin9(-15.65,-3.725),
and changes to bottom. Only MCU power pin4 and reset pin6 remain top. PD
enable/sense remain bottom. Existing component, pad, schematic and other
target coordinates are unchanged; all ordinary via/drill/edge rules remain.
The6-net quiet phase remains first,69 networks second,ground afterward.
Fresh complete-board audits pass on artifact SHA256
cb0f960ec6b07bde6ca20c0dcd9f2b2e6346f499d8a1d6f3a24243725a0db12d.
Strict schema,140 unchanged supplier transforms/exact12 EP vias, derived-net
isolation, full140/152 placement,31 targets/163 labels and129 automatic
rotations pass. All five native prerequisites pass with zero errors; the
complete-artifact audits verify physical board records. Formatting and
TypeScript pass. Geometry equivalence preserves the prior reviewed bodies,
pads, courtyards, artwork and all8 A4 sheets. Native29 routing is authorized;
final copper/fabrication/physical gates remain pending.

---

# A22 revision28 — quiet-net routing priority, prerequisites in progress

Native27 passes all local escapes but main routing still fails VBUS_SENSE
in cmn71. Exact failed artifact
fb547da4d947149ef9a83d7108cc0f55747302fc21692028c04d2f8a6c88f62e
has zero final copper; rejected primary/regional results stay preserved.

Supported native net priorities now route6 short sensing/reference nets first:
VBUS_SENSE,VREG_1V2,VREG_2V7,MCU_NRST,ADC_VBUS,ADC_VM. The69 remaining networks
follow together, then global ground. Local IC escapes and7 saved high-current
paths still precede these phases; final ground-plane fanout remains phase4.
No trace/drill/edge rule, electrical connection, component, pad or placement
is changed. The two-layer1oz stackup and2x native solver remain unchanged.
Fresh unrouted native build passes:SHA256
6012d89c7c76cbc6f9e031121e916a4468eaa7f1259b2b96aa309ea141bf464c.
Strict schema,140 supplier transforms/exact12 EP vias, derived-net isolation,
full140/152 placement,31 targets/163 labels and129 automatic rotations pass.
Body/pad/hole/via/artwork/courtyard/schematic geometry matches the reviewed
revision27/25. Formatting and TypeScript pass. All five native prerequisite checks
pass with zero errors. Complete-artifact placement independently confirms
140/152 PCB records. Native28 routing is now authorized under unchanged rules. Full copper/manufacturing/physical gates remain pending.

---

# A22 revision27 — PD sense underside escape, prerequisites in progress

Native26 passes all local escapes and fixed paths. Its main phase fails at
VBUS_SENSE/source_net_16_mst1; exact failed artifact
b5f9e0f588a59ebb80791a051fff5f3a2f95f615979a0380059aa5230e4021fd
has zero final PCB traces. Exact native2x diagnostic reproduces failure in
28.694s. Final rejected region cmn71 is3.050×2.075mm above the PD controller:
PD enable is bottom, VBUS sense starts top and must transition beside it.
Failure and validator rejection remain visible; no failed copper is accepted.

PD sense pin18 now escapes to bottom, alongside enable pin16. Unchanged
landings(-25.65,6.9)/(-24.65,7.5) are1.16619mm apart. The previously validated
1.150005mm upper corridor remains available for ordinary off-pad vias. MCU
escapes and all component/land/schematic geometry are unchanged. Routing
rules,2x native solver and electrical connections are unchanged. Fresh unrouted build passes:SHA256
bb1b3120faa378f52da56e7e2c3b5336de08a21debf615d1b248caf9dafc2e5e.
Strict schema,140 supplier transforms/exact12 EP vias, derived-net isolation,
full140/152 placement,31 landing targets,163 labels and129 automatic supplier
rotations pass. Physical component/artwork/schematic geometry matches reviewed
revision26/25 exactly; formatting and TypeScript pass. All five native prerequisite
checks pass with zero errors; complete-artifact guard independently confirms
140/152 PCB records. Native27 routing is now authorized with unchanged rules. No fabrication output yet.

---

# A22 revision26 — MCU underside escapes, prerequisites in progress

Native25 passes every local escape but fails main routing at VOLTAGE_DRIVE_9.
Both2x and5x exact-input diagnostic runs reproduce the same failed22-port
MCU-side region; rejected copper and validator failures remain preserved.
Revision25 source is committed as5a015d5a4b3d13922d1469dca2268680cebdb9b7.
Its verified private release is0.0.1-a22-adc-source-5a015d5-verified-ffe2435d:
565 acknowledgements/0 failures, all staged source hashes match Git after
publishing. Initial archive/per-file413 rejection and automatic-version
manifest mismatch are retained separately; neither counted as exact-source
publication. A fresh unique tag and excluded redundant oversized raw upload
log corrected publication integrity. GitHub remote is still absent.

All MCU signal targets except pins4/6/10 now use bottom, so controls can cross
beneath its body instead of wrapping congested side corridors. Existing
staggered target coordinates and the revised ADC pin8 target are retained.
Power pin4, NRST pin6 and closely spaced pin10 remain top. PD escapes stay
unchanged: only PD enable pin16 uses bottom. This yields16 bottom targets
and15 top targets; target pitch/all-pad planning rules remain unchanged and
require a fresh audit. Supplier components, PCB positions,8 sheets, electrical
connections, trace/drill/edge rules and native2x solver are unchanged.
Fresh unrouted native build passes:SHA256
1baad29865fc6baf468d18f34c445b1de835dbca916faae80b8b948b8a6b8770.
The140 source/152 PCB/exact12 imported vias/no-trace inventory, strict schema,
all supplier transforms, derived-net isolation, full placement,31 targets,
163 labels and129 automatic supplier rotations pass. All body/pad/hole/via/
artwork/courtyard/schematic geometry equals visually inspected revision25;
that review remains applicable. Formatting and TypeScript pass. All five fresh
native prerequisite checks pass with zero errors; complete-artifact placement
audit independently verifies140/152 PCB records. Native26 routing is now
authorized with unchanged copper/drill rules. Routing/fabrication/physical gates remain pending.

---

# A22 revision25 — ADC escape and fresh diode import, prerequisites in progress

Native24 routes all local escapes/fixed paths but fails main routing at ADC_VBUS.
Failed artifact6cc74f0600da7ab3c891955f349cb69d82363338e224180f686182cda397fb84;
no final PCB traces. Read-only native2x reproduction finds four unresolved
regions beside the MCU, including1.308×3.924mm cmn145 carrying both ADC routes.
It no longer merges CC1 and CC2. Failure and regional candidate rejection are
retained; no validation is suppressed and no failed copper is fabrication input.

Native routing intent now escapes MCU ADC pins7/8 to bottom, retaining actual
pad-row Y coordinates. Pin8's landing staggers outward to(-14.8,-4.375), giving
1.07005mm center spacing from pin7(-15.65,-5.025); both ordinary vias still
require independent routed drill/clearance acceptance. NRST filter C32 moves
1.6mm outward and0.55mm down to(-12.9,-4.35) to clear that landing and the shared signal corridor.
The first native25 prerouting build rejects a C32/R60 courtyard overlap; its
artifact efcc97565ba9a3947138d21a5acf79eb2ab472ca62faa8ef650b2fab7078d1c0
is preserved. Actual imported courtyards predict positive gaps of0.0464mm
to R60 and0.0418mm to C30 after this move; both courtyards already include
the manufacturer assembly envelope. This prediction requires fresh native
placement and off-pad-target validation. Other components, schematic
connections and all copper/drill rules are unchanged.

The independently audited fresh exact-footprint C477999 official import is now
adopted wholesale. Its three electrical copper pads are identical to the original;
generic C aliases are removed by the official importer and its generated courtyard
is narrower. Supplier identity/polarity stay unchanged; BOM remains140/58.
D2's four advisory reviews retain their messages/wiring and are bound to its new
source checksum. No symbol, land, alias or import is manually patched.
Fresh revised unrouted artifact c6999efe65be13991d4af21f940541befae2c226b9e459d56684b139486b1792
has140 source components/152 PCB components/no traces. Strict schema,140
supplier transforms/exact12 EP vias, derived-net isolation, full placement,
31 targets/163 labels and129 automatic supplier rotations pass. Seven manually
fitted single-pin contact rotation advisories remain visible. Both placement
faces inspected; all8 schematic PNGs byte-identical to inspected routing24
sheets. Formatting/TypeScript/38 tests460 assertions/assembly regression pass.
All five required native schematic/placement checks pass with zero errors.
The direct full-artifact audit independently verifies the140/152 PCB inventory,
including the empty schematic-placement CLI output. Prerouting gates pass;
native25 routing is now authorized under the unchanged manufacturing rules. Native25 subsequently passes all local escapes and fixed paths but fails the
main75-net phase at VOLTAGE_DRIVE_9/source_net_25_mst1. Exact failed artifact
a8d637a8046ed80852f9c812754e650f6f82bf8cf48b474f5981f62e02bce5b3
has zero final PCB traces. Independent2x and5x native diagnostics both
reproduce the same failure in13 seconds. Four failed regions sit beside MCU
rows; cmn146 has22 ports from9 nets in2.908×3.657mm. Increasing effort does
not resolve that geometry. The rejected regional result is retained, not
accepted fabrication input. Further routing-intent refinement continues.
Routing/fabrication/physical testing pending.

---

# A22 revision24 — CC isolation and prerouting passed, 2026-10-04

Implementation source committed as d734c6f1d51385379d4f64a462ec6490088f23bb.
Supported private publication succeeded:0.0.1-a22-cc-isolation-d734c6f,
475 files acknowledged/0 failed, all staged files match the commit.
GitHub push remains blocked by the absent repository remote; local work continues.
Native24 routing subsequently failed at ADC_VBUS; that exact failed output is
preserved as described in revision25, with zero accepted final copper.

Native23 completed the PD/MCU local escape and fixed power phases, but failed
main phase1 high-density routing on source_net_11_mst2 (CC2, not SDA).
Its failed artifact SHA256 is
17991d6e5b35103845da8719d895995a679ee7814dc3ef73b8f89d57dba0b4a8;
no final copper was committed. Numeric inspection of its native routing graph
found CC1 and CC2 sharing one conductive root. The generated source internal
connection links D2 pins1/2 because both imported symbol ports carry alias C.
Nexperia PESD24VS2UT datasheet (2023-04-13), pin table2, specifies independent
cathodes1/2 and common anode3:
https://assets.nexperia.com/documents/data-sheet/PESD24VS2UT.pdf .

This is a canonical core alias-inference defect, not a physical diode short.
The exact unchanged official C477999 import is copied into a regression fixture.
The original source fails the independent-cathode assertion; fixed source passes.
Symbol drawing aliases no longer imply conductive package connections; explicit
package pin labels and physical repeated-contact inference remain active.
Nine focused tests/75 assertions pass. A broader run exposed missing PCB-port
records returning undefined where the netless-routing filter expected null;
a direct regression reproduces that exception and the canonical filter now
excludes both absent-record forms. The final affected suite passes146 tests/2638
assertions across136 files, with four pre-existing skipped tests and no errors.
Canonical TypeScript and build pass. Local package2089 is built from canonical
source, with packed/installed byte equality checked. Current-board revalidation passes all five required native checks, strict
schema,140 imports/12 EP vias, connectivity/internal-net isolation, full
placement,31 routing targets,163 labels and129 automatic supplier rotations. No installed dependency or supplier definition is manually patched.

The schematic audit now independently rejects internal links between distinct
intended nets. It rejects the old artifact's CC1/CC2 link. Earlier individual
pin/trace checks did not detect that derived connection; their historical passing
results do not qualify CC isolation. Stage2 and prerouting placement gates pass against regenerated artifact
c3cd306c2ad8955bebdf74b2e2c39cbc56b9f0fa0d99a28372dd21e9fd68dcca.
All eight current A4 schematics were inspected; warnings remain visible with
exact accepted advisory evidence. Current38 board tests/460 assertions, assembly
split regression, formatting, TypeScript and reproducibly linked bring-up
firmware pass. ELF/BIN hashes match the previous inhibited build.
Native24 may now route; routed/copper/manufacturing validation remains pending.
Placement geometry, exact12 imported EP exceptions, clearance and via rules
remain unchanged. The independent official exact-footprint C477999 reimport
also passes three-pin/three-pad/schema/internal-net checks. Its three copper pads
are byte-identical, symbol alias C is removed and courtyard is slightly smaller.
It is audited separately and not yet adopted into this validated revision.
The initial default importer proposed a99.04% generic footprinter match; that
output was superseded by the explicit supported exact-footprint import.
No manufacturing output or fabrication approval is claimed.

---

# A22 PD via corridor revision23 — prerouting passed, 2026-10-04

Native22 fails the same PD local phase before committing copper. Exact failed
artifact830e094459eba8ef758754b93f4e2052fb9509aba4c4511c0b7bee1e34743943.
Diagnostic graph traversal identifies a disconnected top/bottom escape graph,
even before applying via-fit constraints. Source investigation then identifies
a geometric cause: the outer0.550005mm strip is below the native0.60mm via plus
clearance threshold, so no multilayer region exists inside the local routing
bounds. This does not establish a supplier-import or tooling-source defect.
No installed/canonical dependency or electronic definition was changed.

U1.pin16's native routing target moves from(-24.65,6.9) to(-24.65,7.5).
The upper escape corridor is now1.150005mm deep, exceeding the conservative
0.60+2×0.25=1.10mm requirement; its target clears all actual pads by0.924994mm.
An added planning check rejects the exact previous artifact and passes the
current one. This reserves real off-pad routing area without expanding or
altering a supplier footprint. Its native pd_pin_escape group follows the
new target extent; all other targets/components are unchanged.
Fresh unrouted SHA256:
64d7d2b827ecc20fcd833ea0c26aa6eb98d51bc006448680f7c561f268fe8664.
Strict schema,140 supplier transforms/12 EP vias, connectivity, full placement,
31 targets,163 labels and129 automatic supplier rotations pass. Only one
breakout Y, its generated native group bounds and source metadata differ from
the previous checked artifact; visual component/artwork/eight A4 schematic
reviews remain applicable. All five required native commands pass with zero errors.
Native23 may now route under the unchanged copper/drill rules. Current source formatting and
TypeScript pass; prior complete38tests/460assertions remain applicable to
unchanged firmware/logic.

Assembly preparation preserves a reproduced full-part rotation rejection for
the seven manually fitted nonpolar single-pin contacts. Structured advisories
stay visible; all129 automatic rotations pass. The assembly-file guard rejects
an unrouted input before creating any output. Native copper/drill/ground/power,
routed visual review and manufacturing export remain unfinished; no order.

---

# A22 selected bottom escape revision22 — prerouting passed, 2026-10-04

Native21's13 forced-bottom PD escapes fail in port-point pathing (iteration
limit), before any copper is committed. Exact failed artifact:
e4a936229de53e5f89f8d70a126b8ea381399a5f26d25b6c39553090143e3d59.
An untouched native5x diagnostic reproduces the iteration failure. This is
retained as a failed routing experiment, not manufacturing evidence.

Revision22 targets only PD_ENABLE_N endpoints U1.pin16/U11.pin15 on bottom;
other29 native targets stay top. Minimum bottom landing center spacing is
12.5786mm, and all31 targets retain0.50mm all-pad planning clearance. Native
routing combines the75 remaining networks after local escapes/fixed traces,
then routes global ground drops, allowing supply/control routes to be solved
in one stage. No component, connection, outline or copper rule changes.
Fresh unrouted SHA256:
ef65db3a8e18c840094766dc0eb7811c8f775cc3e090be07f61fa1230fa4d9b5.
All five required native commands pass, as do strict schema,140 imports/12 EP
vias, full placement, connectivity,31 targets and163 labels. The26 changed
breakout layers and source metadata are the only Circuit JSON differences from
revision21; its visual placement/eight A4 schematic reviews remain applicable.
Formatting, TypeScript and38tests/460assertions pass. Native22 may now route.

Manufacturing preparation adds tested native assembly row splitting, retaining
140 engineering parts and explicit129 automatic/11 manual operations. The
strict automatic supplier-orientation audit passes all129 parts. Seven exact
Keystone5015/C2906768 single-electrical-pin contacts lack pin1 rotation anchors;
their native warnings are retained, their exact identity/pin count verified,
and they remain outside automatic assembly. Their PCB rotations are manual-fit
intent; physical fit is a required prototype test. No electronic import changed.
The initial strict full140-part orientation audit failed on these contacts and
is not misreported as passing. New scripts never approve copper or fabrication.

Validated milestone52f7febe2d5905a33eec2f6ba1cbef24c8026ca8 published411 files,
zero failed, under exact registry version
0.0.1-0.0.1-a22-breakouts21-52f7feb. Cloud build unverified; GitHub remains blocked
by missing remote. Raw tool-log whitespace is preserved verbatim; source-only
Git whitespace check passes. Full routing/copper/drill/power/visual/fabrication
checks remain pending; no fabrication order or physical hardware claim.

---

# A22 bottom-layer escape revision21 — prerouting passed, 2026-10-04

Native20 routes all seven supply networks, then fails phase2 PD/host routing:
Pipeline9 cannot resolve immutable fixed VM route source_net_7_fixed_54_1.
Its untouched failed artifact SHA256 is
532112e3f99246f819f7b7c0f5bd52326e04ef0924cabf3da3a32e88bb7a8b24;
zero committed PCB traces. Independent native2x diagnostic reproduces this
failure in2780ms. No failed output is manufacturing evidence.

Revision21 uses the supported native breakoutpoint layer property:28 signal
escapes target bottom and MCU pins4/8/10 retain top targets. Exact supplier
pads remain unchanged. The independent planning audit now checks0.85mm minimum
bottom-target center spacing, reserving0.60mm via lands plus0.25mm copper
clearance; actual routed vias must still pass drill/pad checks including same-net
cases. Minimum planned center spacing is0.85mm. No purchased component is created,
modified or replaced; no routing or validation failure is suppressed.

Fresh unrouted artifact SHA256:
7bef4a1142dd2eebfaa82f7b0377043c631c03afab41f51d1697fa82409797b1.
Strict schema,140 imported transforms/12 original EP vias, connectivity, full
152-component placement,31 targets and163 labels pass. All nonmetadata records
except the31 intended breakout-layer properties equal revision20. Both placement
faces were visually inspected; the eight reviewed A4 schematic sheets remain
applicable to identical schematic records. React list elements now use keyed
Fragments rather than unsupported native-net keys or keyless arrays. Formatting,
TypeScript,38 board tests/460 assertions and native layer routing regression
(1test/13 assertions) pass. All five required native commands pass with zero errors. Native routing21
may now start with the unchanged trace/drill/edge rules.

Remaining: finish native routing, validate actual copper/drills/ground/power
geometry, inspect both routed faces and detail areas, then generate and review
one native manufacturing packet with manual assembly split and checksums.
GitHub remote remains unconfigured. Physical motor/thermal qualification and
manufacturer provisioning remain explicitly pending; no fabrication order.

---

# A22 native routing priority19 — prerequisites passed, 2026-10-04

Attempt18 clears the dump-gate corridor and reaches785/1063 high-density
regions, then fails PD_ENABLE_N/source_net_15_mst1. Its unchanged native result
has zero committed traces; SHA256:
801d0c88f2cc77b029142c0b162f1e032f5d9e45b37c094025368827d0546ea4.
Native2x diagnostic reproduces the failure. Failed artifacts stay diagnostic.

Supported native net priorities now retain local IC escapes/fixed power routes
first, route all remaining75 networks next, and place global ground drops last.
The79 named nets and all electronic components are unchanged. Explicit native
net declarations reorder serialized records and internal connectivity-group
metadata. All4978 records otherwise match the reviewed prerequisite artifact
after sorting; independent connectivity validation verifies every expected pin.
Fresh unrouted SHA256:9be52d72cccc33bb502388e5cdce27caacac484dd4104c9f55c41c47e4580bcd.
Schema, supplier transforms, connectivity and native placement pass.
The combined typecheck/format shell initially concealed a TypeScript exit2: an
unsupported React key on native net elements. Native19 was run as a diagnostic
before that failure was noticed; it is not validated routing evidence. The
failure is retained and corrected in iteration20, with failure-stop checks.
All five native prerequisite commands pass, with zero printed
errors. Previous schematic/placement visual reviews remain applicable: identical
schematic and PCB geometry. Board38tests/460assertions pass; linked firmware ELF/
BIN hashes reproduce. Power-budget/analog/thermal/regen screens rerun successfully.
These are analytic/geometry screens, not measured thermal or motor qualification.

Current JLC via-covering guidance (updated2026-09-09, checked2026-10-04) identifies
epoxy/copper fill for pad vias and recommends explicit hole-location instructions.
The12 unchanged0.3048mm imported holes are below its0.5mm filling limit. CAM
acceptance of the selected process and short slots remains required before order.
https://jlcpcb.com/help/article/pcb-via-covering

Native route19 is permitted with unchanged trace/drill/edge clearances. No
fabrication files are issued until actual generated copper passes its audits.

---

# A22 dump gate routing refinement18 — in progress, 2026-10-04

Starting from validated placement commit350f03c. Native attempt16 routes the
previously failing MCU reset connection and every local escape/ground drop,
but final routing fails DUMP_GATE/source_net_72_mst3. Native attempt17 at
supported2x effort reproduces the same failure. Its failed artifact is
944af2727068b0f725b86a9c14fe8e2d251967b1b117432f52fbb4bd2e88112a,
with zero committed traces. Separate native5x diagnostic on the untouched final
SRJ also fails; neither failed output is fabrication evidence. Diagnostics show
a1mm-wide top-layer corridor crossed by preloaded ground copper near Q3.

Q3's unchanged official AO3400A import rotates180 degrees at its existing
(35.5,-15) center so its gate faces the control circuitry. No supplier geometry,
pin mapping, component quantity or electrical connection is changed. Fresh
unrouted output SHA256:e6eaaf3946c7b0c4852467b8731cecdfbec36a0bc5e39e626a8d511beb920877.
Strict schema,140 supplier transforms, connectivity, full native placement,
31 breakout targets,163 labels and TypeScript pass. Both placement faces were
visually inspected. All five native checks pass with zero printed errors. All eight current A4
schematic sheets were rendered and visually reviewed; component labels and
accepted styling advisories remain readable within the sheet geometry. Source
SVGs contain the native A4 inner/outer borders, and PNG border pixels were
independently confirmed. Native route18 is now permitted.
Signal/drill/clearance rules and12 imported-via exceptions are unchanged.

Placement milestone350f03c publishes as0.0.1-a22-placement16-350f03c;
all381 files acknowledged, no upload failures. GitHub remote remains absent.

Remaining implementation: finish native routing; inspect and validate actual
copper, drills, ground continuity and power geometry; review8 schematic sheets
and both routed faces; generate/checksum native manufacturing files and manual
assembly split. External prerequisites before ordering remain CAM acceptance
of the imported short slots/thermal-via process, supplier procurement and the
manufacturer's PD provisioning workflow. Physical qualification remains pending.
No fabrication files or order are issued.

---

# A22 placement iteration16 — passed; native routing in progress, 2026-10-04

Starting from source commit d78470b. Native attempt15 completes the31 signal
escapes and95 ground drops but fails the final MCU reset connection. Native
connectivity maps all six reset identifiers to one net; no alias is missing.
The first TP3 candidate(-12.8,-4.5)/90 failed four imported courtyard checks:
C30, C32, R60 and R61. Its untouched native failure is retained as
placement16-failed-preroute-A22.json.gz; no gate was bypassed. Read-only polygon
search identifies a second candidate(-19.75,3.25)/90 above the MCU with
0.3746mm minimum existing-courtyard gap. Native placement and artwork validation
were completed after the label correction. Its operational label moves with the contact. All five native prerequisite
checks passed on the complete140-part/152-PCB artifact. The artwork audit found
one label-pad clearance failure; the front legend is shortened to NRST at
(-20.2,6.5), retaining TP3 on the underside. Fresh artwork validation passes:163 labels, zero issues. Both top and bottom
placement renders were inspected. Schema, all140 supplier transforms,
connectivity, full native placement and31 breakout targets pass. Board
formatting, TypeScript and38tests/460assertions pass. The complete unrouted
artifact SHA256 is988e545ccad69422e1868e56f5a3a38a839659a8bc7e8a126cde63a2c49bf14d.
Its4815 non-artwork/nonmetadata records exactly equal the complete artifact
that passed all five native checks; that evidence remains applicable.
An earlier sandboxed build failed140 supplier metadata requests withENOTFOUND;
its output is retained and rejected. A network-enabled rebuild restored all
supplier metadata and the unchanged91 reviewed advisories. No failure suppressed.
The proposed shorter reset interconnect avoids the long cross-package branch
to the previous contact at(-28.1,-11). Only board placement changes; the official
C2906768 import, pin mapping, supplier code, circuit and quantity remain intact.

Fresh full-board placement, pad clearance, contact access, labels and all five
native prerequisite checks must pass before native route16. Earlier failed
route15 output remains diagnostic evidence only. No fabrication files are issued.

Publication recovery uses an exact Git archive of the circuit, imported parts,
active dependencies, firmware, tests, scripts, documentation and current
validation. Historical research archives remain in Git. The earlier full-repo
archive timed out and file-by-file upload had failures; its incomplete status
is explicit. Recovered milestone d8caeec-source acknowledges all369 package files; published
version0.0.1-a22-router-d8caeec-source. No individual uploads failed. The archive
endpoint rejected the request withHTTP413; the supported individual-file workflow
then completed. Rotation milestone d78470b publication completed as
0.0.1-a22-rotation-d78470b-compressed: all377 files acknowledged, zero failures.
The first rotation publication failed one4.95MB plain source-diff upload with
HTTP413. The successful recovery replaces only that evidence file with its
203114-byte lossless gzip; executable circuit, imports, firmware and dependencies
remain exact Git bytes. PUBLICATION-MANIFEST.json binds both encodings and hashes.
Cloud build and physical hardware remain unverified.
GitHub publication remains blocked by the absent remote; local work continues.

---

# A22 rotated MCU pad bounds — passed; board routing in progress, 2026-10-04

Native routing attempt14 passed the13 PD signal escapes, five PD ground drops
and18 MCU signal escapes, then failed at the MCU ground phase. The exact failed
input and native phase outputs are retained under
`evidence/routing-fourteenth-debug-A22/`; the failed board output has zero
committed traces and is not fabrication evidence.

The source defect is in fanout component bounds: 90-degree pads were bounded
using their unrotated width/height. All20 actual MCU pads fit the unchanged
shared boundary. Canonical fanout source now shares rotation-aware pad bounds
with its spatial index, using transformation-matrix. The exact native-input
regression fails against the old source and passes with one ground termination
and zero independent copper DRC issues. A deliberately truncated boundary still
fails. Rectangles at0/45/90/180/270 degrees and circular bounds also pass.
The native SVG and detailed ground escape have been visually inspected.
No supplier model, board placement, boundary or clearance rule was changed.

Fanout typechecks/build and all316 tests/636960 assertions across273 files
pass, with zero failures. The canonical135-connection benchmark completes in
13.94seconds with its unchanged120-second deadline. Core2087/fanout83 candidates preserve all preceding changes; core
TypeScript/build and88 tests/2110 assertions pass with loopback access. The
sandbox run passed87 tests but could not start its canonical local test server;
that failure is retained and does not count as a pass. The two existing core
skips are unchanged. Fresh complete-board schema, supplier transforms, connectivity, native placement
and31 breakout targets pass. The140 purchased/152 PCB/12 original-via/0-trace
artifact SHA256 is6cb147ed86f770553766d7b7cdc0b3cc023b7dc3db8ff315e50ff49a6c82ef51.
All4978 nonmetadata records equal the preceding visually reviewed prerequisites.
Board formatting, TypeScript and38 tests/460 assertions pass. All five required native commands pass; printed error counts are zero, not
merely successful process exit codes. The full native placement checker returns
zero diagnostics on the complete152-record PCB. Native attempt15 passes every local escape and all95 ground drops. The final
75-net phase fails at MCU_NRST_mst1; its regional candidate is rejected for
via-to-pad conflicts. No partial route is accepted or committed to board output.
The140-part result has zero PCB traces; SHA256:
288a159b15f89a70fb1d40b79d52d2d4727bac8c5e0b0c95679b4b472d8e2cda.
Exact native input, phase logs, outputs and error are retained. All six reset-net
identifiers resolve to the same native connectivity group, ruling out a lost
preloaded-trace alias. Product placement/routing refinement continues. This section records the validated tooling fix and unfinished routing; it is
not fabrication approval. Stored upstream patch context retains intentional
blank context lines and original whitespace; board/source format commands pass.

Git source milestone d8caeec is committed locally. Its private package upload is
running; archive upload timed out and individual uploads have failures. Do not
claim publication success until remote acknowledgements are verified. No GitHub
remote is configured; independent local work continues.

---

# A22 validated native router toolchain — passed, 2026-10-04

Fanout0.0.82 passes all eight canonical partitions on official Bun1.4.2:
314 tests across271files, zero failures. Full log hashes and assertion totals
are bound in `evidence/fanout-source-fix-A22/bun142-full-suite.json`.
Source TypeScript/build/format pass (22 unchanged oversized-fixture formatting
advisories remain explicit). Core2086 passes88tests/2110assertions with two
pre-existing skips. Board38tests/460assertions and TypeScript pass; linked
firmware hashes reproduce. Native benchmark sample01 solves135/135 in25.18s
within its unchanged120s deadline. This is one benchmark sample, not72timed runs.
Every library file matches the immutable packed source; temporary diagnostic
instrumentation and interpreter flags are excluded from the accepted toolchain.

The compatibility condition behind the automatic-review routed-build rejection
is now resolved. Native board route14 proceeds after preserving the13MiB local
CLI cache outside the active cache directory to force fresh generation. No DRC,
schema, supplier model, test threshold or imported thermal-via geometry is changed.
Actual routed output and fabrication gates are still in progress.

---

# A22 runtime comparison and routing gate — in progress, 2026-10-04

The source-identical fanout0.0.82 native i.MX6ULL bottom-left regression fails
its complete-plan invariant on Bun1.3.9 and passes on checksum-verified official
Bun1.4.2 (24597 assertions,35.260 s, unchanged native snapshot). Instrumentation
also changes the failure, so no diagnostic-only code is retained as a fix.
All library files match the packed0.0.82 source exactly. Full canonical eight-
shard compatibility runs are now repeated on1.4.2 with normal optimization and
unchanged tests, deadlines, snapshots and manufacturing constraints. The older
unfinished shard7 and interpreter-only diagnostic were terminated explicitly;
neither is a passing check. Evidence: `accepted-prefix-runtime-comparison.json`
and `bun-runtime-candidate-A22.json`. The runtime is task-local; no global update.

Automatic approval review rejected the attempted routed build while the
compatibility failure remained unresolved. No routed build from that attempt
ran. Routing remains deferred until the current native compatibility gate passes.
The independent fresh2086 prerequisite artifact has140 purchased components,
152 PCB components,12 imported vias and0 traces. SHA256:
7f9f79e04b52b5cc55240e050ba615b2e19a7ad23409d59716f759a81bff8984.
Strict schema, supplier transforms, current A22 connectivity, full native placement
and31 exact breakout targets pass. Nonmetadata records equal the preceding
prerequisite-checked artifact; only the source-filesystem MD5 changed.
The first connectivity invocation incorrectly used the historical A19 default:
its failed output is preserved separately and the A19 report restored byte-exactly.
The explicitly configured A22 run passes; the failed default does not count.

Bun1.4.2 board TypeScript and38 tests/460 assertions pass. Rebuilt linked bring-up
ELF/BIN retain their preceding SHA256 values. Qualified motor operation remains
fail-closed pending independent manufacturer NVM, receive-path and measurement
provisioning evidence. No physical measurements or fabrication approval is claimed.

---

# A22 distinct-drill reservation correction — in progress, 2026-10-04

Untouched published fanout0.0.78 produces a complete102-connection native
solution which passes the new independent copper/drill checker with zero
issues. The final-stage corner-only source variant also passes the large
first-failing i.MX6ULL case (14729 assertions,81.425 seconds). These comparisons
retain the manufacturing rules and separate actual geometry from search defects.

A focused negative regression identifies two genuine source defects. The drill
helper previously compared an immutable via object to itself. Exact object
identity now denotes one drill; separate objects at identical or nearby
coordinates remain rejected, including same-net drills. Boundary finalization
also re-reserved accepted connections as new source prefixes. It now includes
accepted connection indices when reserving only unfinished prefixes, matching
the existing full-plan validation policy. The accepted route remains an obstacle.
The three-connection native regression fails before the caller fix and passes
after it with exactly three independently checked traces/vias. Its native SVG
has been inspected. The PD five-plane regression and separate-hole negative
checker still pass. No imported component or generated board geometry is edited.

Full source compatibility, final dependency integration, actual board routing
and fabrication validation remain in progress; no incomplete or rejected run
counts as a passed manufacturing gate. Diagnostic rejection traces and before/
after regression logs are retained under`evidence/fanout-source-fix-A22/`.

---

# A22 final-stage corner validation correction — in progress, 2026-10-04

The0.0.80 fanout candidate is not accepted. Its wider suite exposes an early
boundary contact in the K230 case and a substantial routing slowdown after
coincident vertices were removed during intermediate search. Both targeted
cases pass against untouched published0.0.78 (i.MX6ULL top-right155.48 s and
K230 top-center130.08 s). Original snapshot world-coordinate measurements show
no drill-rule or component-land overlap in either accepted baseline geometry;
there is no basis to weaken those constraints. Failure and interruption logs
are retained, including all43 tests of shard4 and all37 passing tests of shard8.

The root turn detector compared only neighboring segments, allowing a zero-length
segment to conceal a90-degree turn. New canonical source0.0.81 compares consecutive
real headings across such segments. Coincident-point cleanup is now applied only
to selected final source/target paths, leaving intermediate candidate normalization
byte-identical to the official source. Focused and larger regressions are running.
No electronic component, imported via, schema or manufacturing rule changes.

The source-built0.0.2085 candidate dependency passes88 core integration tests,
source TypeScript/build, frozen installation,38 board tests/460 assertions,
board TypeScript and formatting. Its fresh full unrouted artifact has140 purchased
components,152 PCB components, twelve original vias and zero traces; SHA256:
03ed29213c87954375b8cfb2cff555fa798a2d664de7bee3017c55fa547687ed.
Strict schema, supplier transforms, current connectivity, native full placement
and31 exact breakout targets pass. Every nonmetadata circuit record equals the
immediately preceding artifact whose five required CLI gates passed; that exact
equivalence is retained in`drill-corner-preroute-equivalence-A22.json`.
Routing acceptance remains pending the final source regression results. A routed
checker report now binds its results to the full artifact SHA256 to prevent
stale reports from being used by the future manufacturing packet.

---

# A22 physical PD ground ownership and drill constraints — in progress, 2026-10-04

Run13's remaining failed plane escape is U1 pin22 (VSYS wired to ground), not
its exposed pad. The canonical core fanout caller previously attributed a point
to the first same-net obstacle by an electrical alias; this could select an
unrelated USB-C pad and the wrong escape direction. Core0.0.2084 identifies the
physical containing component pad and its layer instead. Its negative regression
fails against the original source.88 focused compatibility tests/2110 assertions
pass with two pre-existing skips; full source TypeScript and build pass. The
native regression image has been inspected. Same-net joining is enabled only for
nonempty cohorts whose every bus terminates on a copper plane.

The PD fanout boundary uses2.0 mm padding. The fresh full unrouted board has140
purchased components,152 PCB components, twelve unchanged imported vias and zero
traces. SHA256:b70cd282ce9dcaccf3b0ec71d942a96c6d08a7dec9885a7c598611085c8f1a46.
Strict schema, all supplier transforms, current connectivity, full native
placement and31 exact signal targets pass. All five mandatory prerequisite CLI
checks finish with exit0; placement reports zero errors/warnings. The57 pin
advisories retain their individual review.38 board tests/460 assertions, board
TypeScript, formatting and frozen-lockfile installation pass.

Canonical fanout source now checks declared drill spacing before same-net copper
merge exemptions, checks all plan pairs and supplied trace vias, and independently
audits emitted holes. Its real five-pad PD regression clears all component pads
by at least0.20 mm and separates ordinary holes by at least0.25 mm. The old solver
places two holes with only0.203795 mm clearance and fails the regression. A
broader regression exposed coincident same-layer path vertices concealing a
90-degree corner; normalization now removes those numerical duplicates while
preserving layer transitions and exact terminals. The diagnostic reports zero
sharp corners. Both changed images were visually reviewed before updating their
snapshots through the repository's supported environment setting. The initial
CLI snapshot flag did not reach the matcher; its failure log is retained.

Full canonical fanout compatibility testing is in progress before installing
local fanout0.0.80 into the next core build and generating the next board route.
No failed routed artifact or incomplete test run counts as fabrication evidence.
All source patches, baseline comparisons and logs are retained in
`evidence/fanout-source-fix-A22/` and `evidence/core-source-fix-A22/`.
The fabrication exporter was verified in installed CLI source to accept a saved
Circuit JSON file directly; manufacturing files will be generated from the exact
validated routed artifact. Stages4–6 remain in progress. No order or physical
qualification is claimed.

---

# A22 PD ground escape space enlarged — in progress, 2026-10-04

Native run12 reaches actual PD component endpoints, then rejects the five ground
plane drops: only three escape inside the existing boundary, which has0.55 mm
minimum pad-edge margin. Its full failed artifact and input/error are retained;
zero output traces means it is not fabrication evidence. The source uses the
supported1.5 mm fanout boundary padding for the PD group. This reserves routing
search room without changing any purchased component, footprint, pad, placement,
connection or manufacturing clearance. Fresh full build, strict schema,140 supplier transforms,31 exact signal targets,
current A22 connectivity and native placement pass. Formatting/TypeScript pass.
All nonmetadata element records remain identical to the prior fully checked
unrouted artifact (`ground-padding-only-preroute-diff-A22.json`), so the five
mandatory prerequisite results remain applicable. No new warning is hidden.
Native run13 fails with four of five ground connections escaped. Its complete
failed artifact is retained; no generated copper is accepted. The remaining
connection is under independent solver diagnosis. U1 exposed pad25 has no
imported thermal vias: the twelve reviewed original vias are four each at U4, U5
and U10. The previous PinBreakouts comment incorrectly attributed vias to U1;
that comment is corrected. U1 still needs a genuine, checked plane connection.
Stage4 remains in progress; no fabrication or physical qualification is claimed.

---

# A22 fixed power-taper reservation repaired — in progress, 2026-10-04

Canonical core0.0.2083 preserves the full width of saved linear/quadratic tapers
when constructing fixed obstacles for later routing stages. The old function
reserves only the first wire width, exposing wide copper to subsequent routes.
The regression fails against the retained original function;9 focused tests/274
assertions and37 complete breakout tests/1900 assertions pass (two existing skips).
Source TypeScript and canonical build pass. Strict Circuit JSON validates the
regression fixture; its native obstacle snapshot was visually inspected. The
initial missing matcher/required schema fields are corrected and their failure
logs remain. No import, installed dependency or emitted Circuit JSON was patched.

The dependency is installed consistently through the reviewed source tarball and
Bun override; frozen installation passes. Fresh full-board revalidation passes: strict schema,140 supplier transforms,
31 exact signal targets, A22 connectivity and native placement.38 board tests/460
assertions, board TypeScript and formatting pass. All nonmetadata circuit records
are identical to the preceding checked ground-endpoint
artifact (`fixed-taper-only-preroute-diff-A22.json`). The five mandatory prerequisite
commands completed with exit0 immediately before this routing-only core correction;
their unchanged placement/connectivity/schematic evidence remains applicable.
Native routed run12 is in progress. Routing/fabrication remain unapproved until
actual generated copper passes.
No ordering or physical tests are claimed.

---

# A22 ground fanout endpoints retained — in progress, 2026-10-04

The eleventh native routing run stops in the PD ground stage before emitting
routed board copper. Its FanoutSolver requires an actual component pad endpoint;
a peripheral breakout coordinate has no matching pad. The failed full artifact
and native input/error are retained. It is not fabrication evidence.

The four PD ground pins and MCU ground pin now remain at their unchanged imported
component pads, allowing the documented native plane-termination fanout to own
their escapes and through barrels. Only the thirteen PD and eighteen MCU signal
pins have explicit peripheral targets. The target guard checks the exact pin sets
as well as pad clearance, imported MCU row order and target layers. No supplier
model, electrical connection, pad or component transform is changed.

The seven saved power paths pass an independent source-intent/pad/edge screen.
The MOTOR_P corridor moved from X29.1 to X30.5 mm to clear R41 and D11; this fixes
a real pad intersection. Native emitted copper must still pass full routing checks.
All five eleventh prerequisite checks completed with zero errors; the final path
waypoint change does not emit unrouted copper or alter placement/connectivity.
Fresh unrouted artifact SHA256:d760be976ff39ad0a4b63af140c2cf2299d54792e8219a1407613af3fd300852.
Strict schema,140 supplier transforms,31 exact signal targets, current A22
connectivity and full native placement pass. All five mandatory CLI gates complete
with exit0;57 pin advisories match the retained individual review.38 board
tests/460 assertions and fresh linked ELF/BIN rebuild pass with unchanged binary
hashes. The top placement render was inspected. A newly reproduced canonical
fixed-trace taper reservation defect is being repaired before the next route.

The current PD qualification document now explicitly distinguishes the A22
15 V preference for 5 V mode and 20 V requirement for both 9 V and 12 V modes
from the retained historical A17 text. Hardware current limits, linked inhibited
runtime and outstanding manufacturer/physical profiles are unchanged.
Stage4 remains in progress. No prototype fabrication approval or hardware rating
is claimed; physical testing and the missing GitHub destination remain pending.

---

# A22 route-reversal metadata fixed — in progress, 2026-10-04

Core0.0.2082 is a canonical source-built dependency, with props0.0.683 and native
capacity0.0.958. PCB route reversal now exchanges via from/to layer annotations;
physical barrels, wire coordinates, widths and imported electronics are unchanged.
The original canonical regression fails.5 reversal/taper/teardrop tests/52 assertions,
37 breakout tests/1900 assertions (two existing skips), full source TypeScript and
canonical build pass. No snapshot changed. Task-local npm packaging cache resolves
sandbox cache permissions; the rejected cache attempt is retained. Frozen board
installation, board TypeScript and38 tests/460 assertions pass.

A fresh unrouted artifact differs from the previous core version only in source
metadata (`reverse-via-only-preroute-diff-A22.json`), confirming that prerequisite
hardware/schematic geometry remains unchanged. The power copper screen now includes
wire-to-via and via-to-wire sections and checks layer continuity. Meaningful taper,
barrel-boundary, nonfinite, wrong-layer and unsupported-primitive regressions pass.
The old run10 fails this stricter screen on the reproduced reversed-via defect;
its copper is still rejected independently for shorts and clearances.

All peripheral breakout targets now remain on their component top layer. The
native bottom-GND phase owns the ground barrel transition; this avoids requesting
a redundant plane drop from an already-bottom source, which the supported fanout
API explicitly rejects. Fresh full-board and prerequisite revalidation are running.
No routed pass, prototype fabrication approval or physical rating is claimed.

---

# A22 MCU pin-row correction and explicit ground-plane routing — in progress, 2026-10-04

Native routed run10 produced341 traces/310 vias but failed:564 direct routing
checks,52 bitmap shorts and41 independent drill violations. Its95 required ground
pads form one physical connected copper group; this isolated result does not
approve the route. Full failed artifact, native checks, bitmap shorts, drill and
physical-ground reports are retained. No failed copper is fabrication evidence.

The MCU left escape targets incorrectly reversed the imported pin-row order.
Their source coordinates are corrected against the actual imported PCB ports.
A new planning guard checks row alignment against those ports; the original
artifact fails the guard. Supplier symbols, lands, pins and placement are unchanged.
The PD exposed pad no longer has an unnecessary top escape across its pin row;
its original plated thermal vias remain. All17 connected PD peripheral pins and19
MCU pins retain explicit targets. A native ground-plane routing phase now targets
the bottom GND pour; actual barrels and physical connectivity remain mandatory.

Fresh unrouted build:4984 records/140 purchased/152 PCB components/12 original EP
vias/zero traces. SHA256:479d38ce587d2f1b3feedb48f9e9b161f02699bb5988807f5b3c47fb09c2cf15.
Strict schema,140 supplier transforms,36 target positions/row order/layers, current
A22 connectivity and native full placement pass. An initial connectivity invocation
accidentally used historical A19/A7 defaults and reported stale TP reviews; the
retained current-config run verifies unchanged A22 imports/wiring and91 reviewed
advisories. No review record or threshold was altered to obtain that result.
Hardware and schematic element records are identical to the preceding validated
unrouted revision; only breakout records, their native group bounds and source
metadata changed. Formatting/TypeScript and38 board tests/460 assertions pass. All five mandatory
CLI gates completed with exit0 for the corrected row revision
(`ground-phase-eleventh-prerequisites-A22.log`).
Stage4 remains in progress; no fabrication approval or physical test claimed.

---

# A22 explicit physical breakout layers — in progress, 2026-10-04

Canonical source-built core0.0.2081/props0.0.683 preserve explicit breakout target
layers into Circuit JSON and both native routing phases. The MCU ground escape
now targets the bottom layer; the ordinary native router must produce the actual
via. Supplier import bytes, electrical connections and component placement remain
unchanged. No emitted copper has yet passed routing checks.

Original props/core regressions fail as expected;602 props tests/2072 assertions
and37 breakout tests/1900 assertions pass (two pre-existing skips). Three phase
compatibility tests/32 assertions pass (one pre-existing benchmark skip). Source
TypeScript, canonical builds and frozen board installation pass. New layer copper
snapshot and all seven restored/byte-identical PCB snapshots were inspected.
The changed routing-stage snapshot was inspected separately; no assertion or
snapshot threshold was weakened. Failed ownership cases are retained and repaired.
Six fixed dependency commits are verified through authenticated GitHub; Bun's Git
resolver failures were resolved with the exact same official commit archives.
No installed dependency or imported component is patched.

Fresh unrouted full-board build and38 board tests/460 assertions pass. Full schema, all140 supplier geometry/transforms, connectivity,37 target locations/
explicit layer and native full placement pass. Artifact SHA256:
`bada97505136a63252e98db2afde87eb045ffefe6875297a1dd331843b2d6184`.
The artifact differs only in the one intended target layer and source metadata;
all hardware geometry/schematic records remain identical to the preceding artifact.
All five required CLI gates pass with exit0 for this revision
(`breakout-layer-prerequisites-A22.log`): netlist, pin_specification, source,
schematic-placement and placement. The57 pin metadata advisories match the
individually reviewed retained record. Native routed run10 is in progress;
no routing or fabrication pass is claimed.
The immutable published c265655 staging archive now resides in
`.cache/publication-placement-c265655`; relocation preserves every file byte and
keeps its nested formatter configuration outside active-source discovery. Stage4 remains in progress; stages5–6 are not passed.
Physical qualification and the documented provisioning approvals remain pending.
GitHub publication still lacks a configured repository/branch. No order placed.

---

# A22 native breakout routing revision — in progress, 2026-10-04

Validated local milestone commit:c265655. Registry upload acknowledged464 files
and release `0.0.1-a22-placement-c265655` at
https://tscircuit.com/AnasSarkiz/usb-c-pd-brushed-motor . This is an explicitly
unrouted WIP prototype snapshot with exact source/artifact binding; the registry
server build has not been independently verified. GitHub push remains blocked by
missing configured repository/branch. Neither a GitHub link nor fully published
milestone is claimed. Local routing work continues.

Canonical core0.0.2080 now isolates local pad-escape cohorts from global plane
connections sharing the source trace. A failing original-source regression,
8 focused tests/70 assertions,27 phased tests/283 assertions and23 coordinate
checks/103 assertions are retained. Source TypeScript and canonical build pass;
the regression copper snapshot was inspected. Component display offsets now
serialize canonical millimetre strings. Strict schema and missing-port/dangling
checks remain enforced; imported electronics are unchanged.

Native route6 stopped on ambiguous two-face plane intent;7 exposed cohort mixing;
8 correctly reached the PD package and found no legal dogbone assignment under
current rules. All failed artifacts/inputs are retained and excluded from fabrication
approval. Native breakout points now use the ordinary router for this QFN/TSSOP
pad geometry. All ground terminals remain routing targets; the two ground pours
supplement actual routed copper rather than substituting implicit plane drops.

Fresh native-breakout-preroute-A22.log passes:4985 records,140 purchased/152 PCB
components,12 original EP vias and zero traces. Schema, supplier geometry,
connectivity and full native placement pass. A separate target-only planning
screen found5 insufficient clearances; source target positions were corrected.
The fresh final target screen has37 targets/zero issues; schema, supplier geometry,
connectivity and full native placement pass. All five required prerequisite CLI
commands completed with exit0 (`native-breakout-prerequisites-A22.log`).
The57 pin metadata advisories match the individually reviewed retained record.
Final unrouted SHA256:7d8318ab79a3845b9647d50bdfc1771e8098032503482ead220d8fc17a843956.
This does not assert that generated vias or copper pass. Native routed run9 failed in the global ground connection between the MCU
escape and C30; zero output traces, twelve original EP vias. Its full artifact,
inputs and canonical minimum-spanning-tree pair diagnosis are retained. It is
excluded from fabrication approval.

A new independent physical ground-copper graph keeps layer islands separate
unless actual plated copper connects them, preserves pour cutouts, and rejects
invalid geometry without snapping. Its island/layer/barrel/cutout regressions
pass (`ground-copper-regression-A22.log`); full routed-board evidence is pending.

Stages1–3:passed for the final native breakout revision; previous validated
hardware remains applicable. Stage4:in progress. Stages5–6:not started; no manufacturing
package approved. Stage7:not started; physical qualification pending. Stage8:
blocked for GitHub, registry WIP upload acknowledged as above. No order placed.

---

# A22 functional placement validated — 2026-10-04

Untested engineering prototype. All five native preroute commands pass on the
corrected component coordinates/rotations (`local-decoupling-all-preroute-accepted-A22.log`).
Pin-specification has57 individually reviewed supplier metadata advisories; no
unresolved error or geometric warning is suppressed. Final changes to three
operator labels are PCB text only and do not change these checked connections,
component geometry or schematic sheets.

Fresh full build (`local-decoupling-label-build-A22.log`) passes. Its SHA256 is
`f2125d20d7df28d03ad39f37ca5c87125816afe3000917c4297f63f2fb14be91`:4985 records,140 purchased/152 PCB components,
12 original imported EP vias, zero routed traces. Strict schema, supplier
transforms/pads/ports, native full-artifact placement, connectivity and163 artwork
labels pass; see `local-decoupling-label-{schema,geometry,native,connectivity,artwork}-A22.log`.
Both freshly rendered faces were visually inspected. All eight A4 sheets were
inspected after final component rotations; subsequent PCB text edits leave them
unchanged. Source/artifact binding is `local-decoupling-validation-binding-A22.json`.
Formatting and TypeScript pass; full suite37 tests/458 assertions passes.

Stages1–3:passed at the documented conditional prototype level. Stage4:in progress;
routing may now resume. Stages5–6:not started. Stage7:not started, physical tests
pending. Stage8:blocked by missing configured GitHub remote; neither remote push
nor package publication has succeeded. Local routing continues. Firmware remains
fail-closed until the documented external NVM/RX/measurement approvals exist.
No fabrication approval or hardware rating is claimed.

---

# A22 routing implementation in progress — 2026-10-04

The previous geometric placement milestone below remains historical evidence.
A subsequent functional review found distant bypass/compensation parts; their
placements are corrected in native source and require renewed full validation.
The current board uses native PD/MCU dogbone fanout groups; routing is temporarily
disabled while their full-board prerequisites are revalidated. No fabrication
approval, routed pass or physical rating is claimed.

Five native routing attempts were rejected: first72 DRC/14 bitmap shorts;
second and third endpoint-preservation failures with zero traces; fourth113 DRC/
44 bitmap shorts; pipeline7 fifth384 DRC. Actual fourth-run power-path measurements
also found long0.20 mm runs; nominal2 mm net settings are insufficient evidence.
Each failed artifact/log is retained in evidence. No failed copper is exported
as a fabrication-ready revision.

Canonical core source fixes preserve explicit router safety controls and cache
supplier geometry without hiding fetch failures. They also correct custom-symbol
port selectors, fanout discovery ordering/alias resolution, and transparent-group
schema metadata. Official imports remain untouched. Source-built core0.0.2079 is installed consistently through the frozen lockfile.
All five native source checks passed before the latest functional placement
revision. The revised coordinates are now being checked; see core-source-fix-A22/provenance.json and logs.

Local linked firmware, power calculations and140-part/58-code BOM are complete
at their documented conditional prototype level. Physical motor/PD/ADC/thermal
qualification remains pending. GitHub publication is blocked because this task's
Git repository has no configured remote; independent local implementation continues.

---

# A22 validated placement milestone — 2026-10-04

**Untested engineering prototype:140 purchased components/58 official supplier codes,
eight native A4 sheets,80×65 mm two-layer1 oz board. Prerequisites for local routing
passed. Physical motor/PD/ADC/thermal qualification remains pending.**

|Stage|Status|Evidence and limits|
|---|---|---|
|1 Requirements|passed|Explicit5/9/12 V selector,2 A intended target, declared0–40°C initial prototype envelope and manufacturing process. No measured rating.|
|2 Schematic/BOM|passed|58 fresh official probes pass strict schema/pin/pad checks;140-part connectivity audit passes;91 exact metadata advisories individually retained/reviewed; all8 sheets visually inspected. Prototype limits below remain explicit.|
|3 Placement|passed|All five required native checks pass; direct full4939-record artifact has152 PCB components,140 purchased sources,12 original EP vias and zero traces. Supplier transforms, pads/ports, mounting/access and162 artwork labels pass. Both faces inspected.|
|4 Routing|in progress|Prerequisites passed; source/config/build disable controls removed, local native router and two GND pours enabled. New routed via-in-pad prohibited. No routing success claimed yet.|
|5 Routed checks|not started|Await copper, shorts, geometry and visual review.|
|6 Fabrication|not started|Await reviewable exact-revision Gerber/drill/BOM/PnP package; no order.|
|7 Physical prototype|not started|No physical measurements invented. Inhibited diagnostic image allows first board bring-up.|
|8 Publication|blocked|Independent task Git main has no remote. No GitHub push or package publication succeeded; local implementation continues.|

Current tooling is tscircuit0.0.2743/CLI0.1.2237, source-built core0.0.2074 and
props0.0.682, strict official Circuit JSON0.0.511, Bun1.3.9/TS5.9.3/Biome2.5.14.
Canonical source patches/tarballs/tests/provenance are retained; imports remain
unchanged. Custom imported symbol rotation is fixed at its core graphics/port
root cause, with positive and negative regressions and visually inspected snapshot.

Latest actual checks:preroute-final-threshold-A22.log (all5),
schema-final-preroute-A22.log (4939 records/0 errors),
geometry-final-preroute-A22.log (140/140/12 vias/0 issues),
connectivity-final-preroute-A22.log (140/58/0 issues/91 reviewed advisories),
threshold-import-audit-A22.log (58/0 issues), threshold-artwork-final-A22.log
(162/0 issues),full-product-tests-A22.log (36 pass/0 fail/456 expects),
full-product-typecheck-A22.log and format-final-preroute-A22.log (pass).
R32/R65 changed to27 kΩ/11 kΩ after the real5 V comparator overlap defect;
all3×16,384 declared analog corners now pass. Six manufacturer-model switching
cases pass the declared±5% voltage screen; see POWER-PROTOTYPE-A22.md for
conditional assumptions, nonphysical ideal-source impulses and remaining tests.

The linked14-module STM32 diagnostic image occupies20,352 flash bytes and448
static RAM bytes;2,048-byte stack reservation exceeds the948-byte static call/
interrupt screen. Actual ELF/BIN/map/vector/source hashes are retained. Updated
I2C timing inequalities pass conditionally; exact G0 manual/captures remain
qualification evidence. The motor-enabled build correctly refuses absent
approved40-byte NVM/RX-path/measurement provisioning. The MCU keeps PWM and
direction entirely hardware controlled. No raw sample becomes voltage approval.

Prototype limitations:initial motor stored energy≤1 mJ, expanded braking tests
require measured clamp/SOA;5 V current regulation accuracy and2 A continuous
thermal behavior remain unqualified. C18 is fitted/hand-soldered after SMT,
all14 THT electrical pads have no paste,12 EP vias require filled/capped process,
seven Keystone contacts require procurement/manual fit (public action Pre-order).
Short imported plated slots and two-layer via-fill/cap options require CAM/process
acceptance before an order. These do not prevent preparing the prototype files.

Prior A22 working notes below are historical and superseded where stated above.

---

# A22 implementation — 2026-10-04 — in progress

**Unrouted WIP prototype; 140 purchased components / 58 supplier codes. Numeric product placement is implemented at 80 × 65 mm, with four 3.2 mm NPTH holes on 70 × 55 mm centers and 7 mm fastener clearance regions.** The outline was enlarged to fit the added power protection, dump bank and controls. Routing remains disabled in source, configuration and build commands.

| Stage | Status | Current evidence / remaining work |
|---|---|---|
| 1. Requirements | in progress | Product function retained; intended approximately 2 A output, 5/9/12 V selector; final thermal, current and regenerative energy envelope pending. |
| 2. Schematic/BOM | in progress | Fresh full board strict schema and electrical connectivity pass, 140 components / 58 supplier codes / eight A4 sheets; 91 individually bound metadata advisories retained. Current all-supplier revalidation and sheet/process/electrical/firmware closure continue. |
| 3. Product placement | in progress | Native numeric manualEdits, actual mounting holes/keepouts and connector/control reservations. Placement passed after rotations; visual review found artwork overlaps. Front artwork and probe placement now revised and require renewed checks. |
| 4. Routing | not started | Disabled; no routed traces or pours. Existing 12 imported EP vias retained; new routed via-in-pad prohibited. |
| 5. Routed validation | not started | No routed copper, shorts or final snapshot approval. |
| 6. Fabrication | not started | No reviewed Gerber/drill/PnP package or order. |
| 7. Physical prototype | not started | No measured motor, PD, ADC/noise, thermal, stall or reversal evidence. |
| 8. Store release | not started | GitHub remote absent; no publication succeeded. This does not halt local implementation. |

## Completed work and evidence so far

- Toolchain: tscircuit 0.0.2743, CLI 0.1.2237, source-built core base 0.0.2073 and props base 0.0.682. Official circuit-json 0.0.511 remains strict and unchanged. Core's existing getCoreVersion reports the next patch (0.0.2074); package/source/archive hashes identify the actual build. No imported electronic definition is patched.
- Core fixes: native mounting/plated-hole association normalization; standalone board text uses the existing Board-information association. Explicit pcbPlatedHoleSolderPaste assembly choice excludes hand-soldered THT from stencil, with legacy both-layer default preserved. Five focused core regressions / 344 assertions pass, source TypeScript and configured build pass; snapshots rendered and actually inspected. Props: all 601 tests / 2068 assertions pass, TypeScript/build and all four generation scripts pass. Source patches, exact bases, tests, snapshots and archive hashes are under evidence/{core,props}-source-fix-A22.
- Dependency reconciliation: clean frozen-lockfile installation plus explicit core/props overrides makes direct and umbrella consumers use the same source fix. Failed nested-package and network-limited builds are retained. Final network-enabled build contains no supplier-fetch warnings. No generated Circuit JSON rewrite was used.
- Fresh full board: schema-network-source-fixes-A22.log reports 4952 elements / zero schema errors. schematic-network-source-fixes-A22.log reports 140 components / 58 supplier codes / zero connectivity issues / 91 reviewed advisories / zero routes. 14 THT pads remain electrically intact with zero THT paste; SMT paste remains, and 12 original EP vias remain.
- Required preroute source checks completed before the latest artwork/placement adjustment; placement-transitive-fixes-A22.log also directly checks the full generated artifact with zero issues, zero errors and zero warnings. These are historical for the subsequent artwork/measurement-contact movement; rerun affected checks before accepting placement. A zero-PCB schematic-only artifact is never valid placement evidence.
- Board TypeScript and configured formatting pass after upstream test evidence was stored as text rather than compiled as board tests; local package-store files are excluded from the board formatter as installed tooling. Complete board suite: 31 tests / 429 assertions pass. Power report passes its stated analytic assumptions; it is not a transient/thermal rating.
- Hardware changes: official C23215 / 6.98 kΩ sets conservative input-current bounds with temperature allowance. Policy chooses 15 V for qualified 5 V mode and 20 V for 9/12 V, uses input reserve and refuses inadequate sources. Seven official C2906768 / Keystone 5015 contacts expose SWDIO/SWCLK/NRST/GND/3V3/VBUS/VM. JLC assembly eligibility/stock for the 58 current codes is archived in jlc-assembly-stock-A22.json.
- Regenerative bank now has eight unchanged C2991665 / 10 Ω 2 W resistors: four 20 Ω branches, effective 5 Ω, 16 W sum of component ratings. Tolerance/derating, worst independent component power and manufacturer two-second overload screening are implemented/tested. Sum-of-ratings is not continuous board dissipation approval; analog threshold/response, repetition/energy and thermal closure remain in progress.
- Firmware: actual GPIO permission/feedback application and idle ADC rearming are implemented with readback/fault/rollover tests. Qualified ADC intervals, linked target runtime and fresh PD/NVM integration remain unfinished. No object-only compile is described as a linked/flashable image.

See docs/IMPLEMENTATION-CHECKLIST.md for remaining implementation work. Current changes are uncommitted pending this implementation milestone's checks. Task Git HEAD remains 19e78be; no GitHub remote is configured and no tscircuit package update has succeeded. No hardware testing or fabrication readiness is claimed.

---

A21 and earlier records below are historical.

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
