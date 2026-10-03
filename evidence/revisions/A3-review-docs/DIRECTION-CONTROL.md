# A3 SPDT direction control review

2026-10-02. **Required topology defined; revised product schematic not implemented or approved.** No SP3T is a direction-control candidate. C2848921 is withdrawn. C221539 is an import-validation candidate only and fails the audit below; it is not in the approved assembly.

## Correct contact topology

One SPDT ON-OFF-ON switch with exactly three electrical terminals provides FWD / OFF / REV. For C&K 1103M2S3CQE2, physical pin 2 is common, pin 1 is the FWD throw and pin 3 is the REV throw. Manufacturer position 1 connects 1–2, center opens both contacts, and position 3 connects 2–3. Connect common to VCC3V3 and put the existing 10 kΩ pull-downs R28/R27 on FWD_CMD/REV_CMD respectively. No motor current passes through the switch. Physical actuator travel and FWD/REV silkscreen must be reconciled at placement; actual motor rotation depends on the two motor wire connections.

Source: [C&K 1000 manufacturer datasheet](https://www.ckswitches.com/media/1429/1000.pdf), function table and C/M2 mechanical drawings. The supplier mirror, `evidence/C221539-manufacturer-mirror-A3.pdf`, is an older manufacturer catalog whose relevant drawings were visually reviewed. The manufacturer's current 2025 document was read through the web tool; direct download returned HTTP 403, recorded without substituting invented evidence.

## DRV8874 compatibility

[TI DRV8874 datasheet](https://www.ti.com/lit/ds/symlink/drv8874.pdf), section 7.3.2 and tables 2–4: PMODE high selects PWM mode. IN1/IN2 = 00 coasts, 10 drives forward, 01 drives reverse and 11 brakes. This mode has no separate EN/PWM terminal. The two shared input pins become EN/PH only with PMODE low; in that mode EN=0 brakes rather than coasts.

Therefore the user's preferred independent direction pins plus separate PWM input cannot be wired directly to this driver. Retain the existing supplier-imported SN74LVC2G08 dual AND gate U7 and its bypass C24 for this driver:

| Switch | Commands FWD / REV | IN1 / IN2 when PWM=1 | IN1 / IN2 when PWM=0 | Result |
|---|---|---|---|---|
| FWD, 1–2 | 1 / 0 | 1 / 0 | 0 / 0 | Forward / coast PWM |
| OFF, open | 0 / 0 | 0 / 0 | 0 / 0 | Coast |
| REV, 2–3 | 0 / 1 | 0 / 1 | 0 / 0 | Reverse / coast PWM |

IN1 = PWM AND FWD_CMD; IN2 = PWM AND REV_CMD. MOTOR_READY retains control of timer reset and driver nSLEEP. The steady direction LEDs remain on the command nets. U7 is PWM steering, not redundant SP3T decoding. Connecting switch common directly to PWM would save U7/C24 but also change the steady LED behavior and require a new transient/state review; that alternative is not silently implemented. The C5710902 10 kΩ pot, 330 Ω resistors and 5.6 nF timing capacitor remain unchanged at 3.3 V.

## Transition protection remains a gate

TI documents automatic half-bridge dead time, typically 100 ns, preventing overlap of a half-bridge's high/low MOSFETs. This is not a debounce timer or a safe mechanical reversal interval. Center-off does not specify how long a fast operator transition spends open. Contact bounce can alternate drive and coast; reversal at nonzero speed can regenerate energy or exceed the motor/current regulator envelope. Neither the native switch symbol nor its contact type proves safe transient behavior.

Retain the planned VM regenerative dump, VM overvoltage shutdown, driver current regulation and default-off interlocks. These are necessary but not sufficient evidence for unrestricted rapid reversal. A qualified hardware transition inhibit/re-arm circuit is still missing. It must remove drive immediately on command change or invalid simultaneous commands, require a stable allowed command after a proven coast interval, and require OFF re-arm after attach/fault. The required interval must be derived from a bounded motor/load and tested in both directions; no fixed delay is asserted safe for arbitrary inertia. The input-current/rotor-energy analysis and `PROTOTYPE-TEST-PLAN.md` remain applicable. No immediate-reversal safety claim is made.

## C221539 actual import audit

Official CLI 0.1.2226 imported C221539 both normally and with its supported `--use-exact-footprint` option. No imported definition or pin map was hand-edited. The ordinary import substitutes a connector footprinter by 99.83% copper IoU, losing the switch body outline and reducing the slot geometry. The exact import preserves the 12.7 × 6.604 mm silkscreen outline and a surrounding courtyard; use of the official exact option is not a manual footprint patch.

| Required check | Observed result |
|---|---|
| Exactly three schematic pins | Default import emits SPST: pin 3 is missing. Supported instance `type="spdt"` exposes 1/2/3, but draws common as physical pin 1, contradicting manufacturer's common pin 2. Fail. |
| Electrical pads 1/2/3 | All three source ports link to distinct PCB ports/plated holes, with pitch 4.700016 mm in exact output. Coverage passes; fit does not. |
| Mechanical features non-electrical | M2 has no mounting tabs. Exact import contains only three electrical plated pads, no fictitious case pins. This subcheck passes. |
| Mechanical drawing match | Body outline and pitch agree within imported coordinate rounding. Pad 1's 0.9139936 × 0.9139936 mm hole cannot accept the nominal 1.27 mm terminal width; manufacturer recommends 1.85 mm round PCB holes. Pads 2/3 use 0.9139936 × 1.5899892 mm slots instead of that recommendation. No fit approval. |
| Valid THT paste | Eight `pcb_solder_paste` entries across two probe instances use unsupported `shape="pill"`; all eight fail the installed circuit schema. Paste coordinates also remain local instead of following the packed pad positions. Fail; no geometry repaired or suppressed. |
| Native build and five checks | Build exits 0; netlist, pin_specification, source, schematic-placement and placement exit 0. These checks miss the common-pin error, fit problem and invalid paste. They do not override the failed independent audit. |

`scripts/audit-spdt-imports.ts` records all schema failures and electrical/common/fit failures and exits 1. `evidence/spdt-pin-pad-check-A3.json` contains exact source-to-schematic-to-pad associations. Both actual schematic/PCB renders were inspected. The native A4 frame is present and the probe contains zero PCB copper traces. This probe is supplier-model inspection only; product-board placement remains unstarted.

Fresh LCSC HTML on 2026-10-02 reports **69** pieces and USD **5.1720** at quantity 1 / **4.4275** at quantity 10. A web-cache view reported 86; the saved direct response is the evidence for 69. This is supplier stock, not confirmed JLC assembly inventory or a reservation. C221539 remains unsuitable as the final part independently of stock.

## Dailywell search

[Dailywell's 2M manufacturer page](https://www.dailywell.com.tw/en/product/Sub-miniature-toggle-switches_2M-Series.html) confirms the SPDT/DPDT family. Its manufacturer catalog, mirrored by LCSC in `evidence/Dailywell-2M-manufacturer-mirror-A3.pdf`, specifies **2MS3 = ON-OFF-ON, common 2, contacts 2–3 / open / 2–1**. M2 is PC through-hole; M6/M7 have different right-angle mechanics and must be checked individually.

No stocked exact 2MS3 SKU/JLC code was verified. The official importer query `2MS3` returned unrelated GEO 3F-12MS3F / C48687540, and the refined `Dailywell 2MS3` query returned unrelated capacitor C597349. Both generated files are retained solely as evidence of loose search matching; neither is a switch candidate, instantiated component or BOM substitute. The supplier search URL returned an empty catalog page and cannot establish availability. Indexed C545201/C545202 are **2MS1 ON-NONE-ON**, so they are not center-off substitutes. No third-party retail availability is presented as JLCPCB stock.

C221539 has not passed, so the user's conditional production-equivalent approval step has not been reached. An exact stocked center-off SKU with a correct supplier symbol/footprint and valid official output is still required; the same full audit must pass before it replaces SW1. No custom model, pin remapping, library patch, failure waiver or SP3T substitution is used.
