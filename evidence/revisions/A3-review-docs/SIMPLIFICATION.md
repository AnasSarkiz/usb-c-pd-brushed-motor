# A3 architecture simplification review

2026-10-02. **Review only, not a revised approved assembly.** Direction control requires SPDT ON-OFF-ON with three electrical terminals; all SP3T direction proposals are superseded and no longer being searched. C2848921 is withdrawn. C221539 was imported and audited but fails, including after the official exact-footprint option. A1 is preserved in `evidence/revisions/A1-source.zip`; A2 review documents are preserved in `evidence/revisions/A2-review-docs/`. The product schematic remains historical. Placement and routing remain unstarted.

## Center-off direction simplification

Use one true SPDT center-off switch, common to 3.3 V and two command throws with 10 kΩ pull-downs. No unused middle electrical throw, second switch pole or SP3T direction decoder is needed. With DRV8874 PMODE high, retain U7's two AND gates to steer PWM to IN1/IN2: 00 coasts, 10 forward, 01 reverse. The driver does not provide a separate PWM-enable input in this mode. PH/EN mode's EN=0 brakes, so it cannot silently replace this coast mapping. U7/C24 are necessary PWM steering and bypass, not redundant decoding. The steady FWD/REV LEDs remain command-driven. There are no additional direction-decoding parts in A1 to remove; changing one switch to another does not itself reduce assembly count.

[DIRECTION-CONTROL.md](DIRECTION-CONTROL.md) contains the complete truth-table review, C221539 pin/pad/fit/paste failures and Dailywell 2MS3 family search. No final supplier switch passes. Internal dead time prevents transistor overlap but supplies no timed coast/re-arm interval; the regenerative dump and current regulation are retained, and qualified reversal-transition protection remains an unresolved schematic gate. No safety mechanism is removed to reduce the count.

## Part-count accounting

The actual A1 manifest has 118 placements / 54 supplier codes: USB/PD 20, input protection 16, buck 22, PWM/direction 18, rail monitor 14, dump 14, bridge/output 14. This count includes required passives and protection, rather than just ICs. The high population is real and needs reduction.

| Review decision | A1 references / effect | Conditions |
|---|---|---|
| Remove unused fault readout | R51; one part | nFAULT can be left unconnected per the driver table; no fault sensor/debug feature is requested. |
| Remove assembled PD service header | J3; one part | Retain manufacturing access for provisioning STUSB4500, if retained, as supported native PCB pads after the placement gate; this does not remove its I²C pull-ups. |
| Replace DP3T direction control | SW1; still one switch | A valid supplier-backed **SPDT ON-OFF-ON, three electrical terminals** is mandatory. No motor current passes through it. C221539 fails; not installed. |
| Simplify voltage control | SW2 replaced by one four-position header and one shunt, or equivalent exclusive three-state selector | Selection must be mechanically unambiguous; not a saving in purchased-piece count for the header/shunt option. See below. |
| Consider a synchronous, internally compensated buck | U5, D5, R17, R22, C19, C20 and feedback values affected | Candidate family LMR33630; removes catch diode, RT and external compensation, but adds required VCC bypass/PG circuitry. Exact supplier import and net count not validated. |
| Consider removing redundant driver pull-downs | R52/R53; up to two parts | Requires proof of AND-gate power-down behavior, driver input bias and unplug/reset states. Not yet approved. |
| Consolidate rail/dump control | 28 parts across monitor and dump | Reuse regulator PG for UV; evaluate direct 3.3 V gate control and a simpler OV detector. Preserve startup default-off and pulse-energy capacity. Sharing feedback loses independence from feedback faults unless compensated by a separate check. No final circuit/count approved. |
| Reject deleting protection merely to reach a count | Input protection, bypass, charge pump, VM clamp, current-setting resistor and necessary dump load | Motor current chopping and IC thermal shutdown do not absorb rotor energy or guarantee board thermal performance. |

The two unused assembled parts can be removed in the next implementable revision. That alone gives 116 placements, not a meaningful final simplification. Removing the complete 28-part monitor/dump plus those two parts would yield 88, **but is not approved**: the energy analysis below shows why that shortcut is unsafe without a bounded motor/load and revised protection. Replacement circuitry adds parts, so 88 is not a promised final BOM. No reduced population or supplier count is claimed before implementation and validation.

[TI's LMR33630 datasheet](https://www.ti.com/lit/ds/symlink/lmr33630.pdf) describes a synchronous 3 A, 36 V buck with internal compensation and power-good. It is a relevant simplification candidate, not a selected/imported replacement. Its 1 V reference requires a different divider; the A1 0.8 V divider cannot be copied unchanged. Input-clamp tolerances, output-capacitance/inductance windows, all rail modes and thermal/current margin require review before substitution.

## Historical SP3T imports — withdrawn topology

Retained as A2 evidence only. These parts are no longer direction candidates and no more SP3T imports are pursued. Tested in the then-requested order with official CLI 0.1.2226. Stock was checked directly at LCSC on 2026-10-02; this does not reserve parts or prove assembler stock.

| Code | Exact identity / stock | Actual import and pin/pad audit |
|---|---|---|
| C160871 | ALPS SSSS211900; 489 | Imports, source ports 1–4 and four plated holes, but schematic ports only 1/2. Manufacturer common is pin 3. Imported row spacing 3.400044 mm versus manufacturer 3.3 mm; 1.2 mm drills versus recommended 0.8 mm. Mechanical differences unapproved. |
| C221831 | C&K OS103011MS8QP1; 458 | Imports, source ports 1–6, four electrical pads plus two case tabs, but schematic ports only 1/2. Manufacturer common is pin 2; throw pairs are 1–2, 2–3 and 2–4. Generated slots differ from recommended round holes; fit remains unapproved. |
| C2857677 | ROCPU SK-13D07-5; 4140 | Import exits 1: “Component not found in EasyEDA library search”. No generated model to approve. |

Both successful commands emit a native `<switch>` without a type; core defaults to SPST. The isolated probe connects every physical pin to a separate net and proves that required electrical pins 3/4 are absent from the rendered schematic. A build exit code of zero does not prove a valid model. Full circuit schema validation also rejects two generated component position-metadata entries and twelve C221831-generated plated-slot solder-paste entries (`shape=pill`); this remains a separate generated-output defect. C160871's official raw import option produced identical source and did not repair the defect; no check was disabled and no definition was edited.

Evidence: `evidence/sp3t-import-audit-A2.json`, import/build logs, stock page hashes, manufacturer drawings and `dist/tests/sp3t-import-probe/`. The probe has zero copper traces and is supplier-model inspection, not placement of the motor board. Manufacturer references: [ALPS drawing 2](https://tech.alpsalpine.com/cms.media/product_catalog_sw_02_ssss2_en_5f16103499.pdf), [C&K OS datasheet](https://www.ckswitches.com/media/1428/os.pdf).

## Motor-voltage selection definition

Motor rating is selected explicitly; it is never inferred from speed or load. Proposed minimal selector: one 1×4 header and **exactly one** adjacent-pair shunt. Header nets in physical order are SELECT_9, GND, GND, SELECT_12. A single shunt occupies 1–2 for 9 V, 2–3 for 5 V, or 3–4 for 12 V. No shunt defaults electrically to 5 V, but the shipped configuration should include the center 5 V shunt and labels 9 / 5 / 12.

For the existing 0.8 V buck calculation, 105.1 kΩ upper / 20 kΩ lower gives 5.004 V; 21 kΩ in parallel gives 9.008 V; 12 kΩ in parallel gives 12.011 V. Change selection only unplugged, with discharged VM and direction OFF. A different buck requires new feedback values.

Installing two outer shunts simultaneously is an invalid assembly: it would select approximately 16.015 V. It must never be sold as a supported setting. A captive/exclusive selector or proven invalid-configuration inhibition is required before approval. The header/shunt is not yet imported or instantiated; do not interpret this definition as finished selection hardware. This replaces the DP3T concept, not its imported definition.

## PD selection and inhibition

Preserve the 10 kΩ C5710902 and 330 Ω / 5.6 nF TLC555 network at 3.3 V. No MCU, display, sensing feature or extra communications interface is added.

The A1 autonomous 20 V-first profile is superseded as a design policy. The A2 analytical policy evaluates **selected motor voltage, 2 A continuous, provisional 2.4 A peak, minimum input current limit, maximum fault draw, regulator headroom and source current**. For a proposed 7.15 kΩ eFuse ILIM resistor, the assumed ±10% IC / ±1% resistor bounds are approximately 2.243–2.797 A. The 6.8 kΩ A1 upper bound plus the conservative 1 W upstream auxiliary budget can exceed a 3 A contract slightly at minimum 15 V input; it needs correction or a proven smaller auxiliary-current bound.

With the explicit A1 efficiency/drop assumptions, prefer qualified 15 V for 5/9 V modes, use qualified 20 V when 15 V is unavailable, and require 20 V for the provisional 12 V/2.4 A peak envelope. A 15 V/3 A contract only barely fits the 12 V/2 A continuous calculation with the proposed resistor and must not be called a qualified 12 V peak supply. Qualification also reserves worst-case eFuse fault current plus upstream auxiliary current. A nominally powerful 20 V/2.25 A source is rejected with this fixed current-limit architecture. No native 12 V PDO is required.

`scripts/motor-validation-calculations.ts` tests this policy **as analysis only**. It does not configure a PD controller. The [STUSB4500 datasheet](https://www.st.com/resource/en/datasheet/stusb4500.pdf) documents static autonomous NVM priorities, not runtime motor-selector-aware arbitration. Reversing its static priorities would reject a valid 20 V option in some 12 V cases, rather than implement the required policy.

HUSB238 was reviewed as a hardware-configurable alternative. Its manufacturer datasheet (`evidence/HUSB238-review-A2.pdf`, pages 9–10) offers VSET/ISET resistors and current matching, but scans highest matching voltage first. Setting a 15 V ceiling excludes a 20 V fallback; setting 20 V scans 20 V first. GATE defaults to assertion after POR, not necessarily after a qualified explicit contract. It is **not approved as a drop-in solution**. No MCU or unqualified trigger was substituted. A supported hardware policy remains an architecture blocker.

On 5 V-only/non-PD sources, failed matching, reset, detach, or inadequate contract: both the motor power path and bridge enable must stay off. POWER_OK pins alone are insufficient detach interlocks because ST documents that they can retain asserted state until the next attach/reset; VBUS_EN_SNK must also gate the path. Provisioning/readback and PD analyzer tests remain mandatory.

## Startup, stall, thermal and energy screening

The DRV8874 nominal 3.3 V / (450 µA/A × 3.3 kΩ) limit is 2.222 A. At rails ≥5.5 V, the quoted ±5.5% mirror error, ±1% resistor and illustrative ±1% reference allowance imply about 2.064–2.399 A. The 5 V current-sense accuracy lies outside that datasheet guarantee and needs measured characterization. OCP at 6–10 A is a fault backstop, not the intended motor current limit.

An **example**, not the chosen motor, with R=1.5 Ω, L=150 µH and 12 V back EMF has unrestricted startup/stall demand 8 A and reversal demand 16 A. A first-order 3.3 µs assumed regulation delay permits about 0.528 A extra reversal-current rise before losses; this is not a worst-case guarantee. Current chopping may prevent a loaded motor from starting. Actual resistance, inductance, inertia, back EMF and startup torque are still needed.

For 2.4 A output, 21 V input, 540 kHz, and combined illustrative 20% inductance tolerance / 30% saturation reduction, the 8.2 µH buck screening peak stays below its 4.5 A minimum switch limit in all three rail modes. This does not approve short-circuit overshoot, loop stability or temperatures.

At 12 V/2 A, assumed bridge conduction loss is 1.2 W, with approximately 0.072 W switching loss and 0.096 W VM quiescent loss: roughly 1.37 W. A 40°C ambient / 125°C design target would need effective driver thermal resistance below about 62°C/W. [TI](https://www.ti.com/lit/ds/symlink/drv8874.pdf) gives 36°C/W for a reference board and explicitly warns that actual copper/stackup changes this value; using 80°C/W would approach 150°C. The present compact board has no validated thermal geometry. The 85% buck assumption implies roughly 4.45 W total converter-stage loss at this load, distributed among regulator, diode and inductor; this is not all IC loss or a temperature measurement.

280 µF effective capacitance stores only about 6.85 mJ between 12 V and the A1 13.89 V dump threshold. A hypothetical rotor with J=10⁻⁵ kg·m² at 300 rad/s has 0.45 J mechanical energy. Capacitors alone cannot absorb that example; winding dissipation, clamp pulse energy and braking current matter. The dump's approximately 19 W instantaneous load and individual resistor pulse ratings remain unapproved. Internal H-bridge dead time prevents MOSFET overlap; it does not provide a coast delay or guarantee safe motor reversal. See the prototype test plan.

## Review outcome

The simplification pass identifies concrete removals, a smaller regulator topology and the dominant protection tradeoff. **The simplified BOM is not finalized**, because switch models, selected-voltage-aware PD hardware, invalid selector behavior, 5 V current-limit accuracy and motor energy remain unresolved. No placement gate is passed.
