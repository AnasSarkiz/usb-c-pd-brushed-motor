# A19 architecture simplification — 2026-10-03

The user approved a small MCU for PD qualification. Hardware PWM and the mechanical direction switch remain independent of it. The active BOM contains **129 placements / 57 supplier part numbers**, compared with the historical 118 / 54 assembly. This is a connected prototype draft; the A9 simplification review is retained; A11 adds one required rail-discharge resistor, with the part-count tradeoff below retained for review. This does not pass electrical, placement or hardware gates.

| Change from the historical assembly | Placement change |
|---|---:|
| Direct switch-fed DRV8874 PWM; remove U7/C24/R27/R28/R52/R53 | -6 |
| Remove service header J3 | -1 |
| Remove old multi-pole voltage selector | -1 |
| Share buck feedback with analog OV monitor: remove R35–R38, add R65 | -3 |
| Add MCU qualification and explicit 2-bit selector block | +21 |
| Net change | +10 |

The 21-part qualification block contains one STM32G030, one two-pole DIP selector, local decoupling, default-off interlocks, two isolated feedback switches, two rail ADC dividers/filters and the PD alert pull-up. These functions are required by the selected fail-closed architecture. No MCU PWM, communication feature, display, sensor or debug header was added. Future programming uses etched SWD/NRST/3.3 V/GND pads during the placement stage; these pads are not yet authored.

SW2 has explicit user selection: both OFF=5 V; 9 V bit alone=9 V; 12 V bit alone=12 V; both ON=inhibit. Firmware must qualify actual VM independently. The manufacturer's unnumbered vertical contact pairs and imported pad geometry are reconciled in SELECTOR-MECHANICS.md; physical continuity and assembly orientation remain prototype checks. No automatic motor-voltage inference is used.

R13 changes to 7.15 kOhm to bound input current below a 3 A contract, including a 1 W auxiliary allowance. R2/R3 change to supplier-backed 4.7 kOhm for I2C rise time. C5710902 and its validated 330 Ohm / 5.6 nF hardware timing network remain unchanged.

The analog rail monitor now derives power from VM with a 2 kOhm TL431 bias resistor. This keeps the regenerative clamp alive after USB removal without a backup LDO or diode-OR power network. The quiet 5 V LDO remains for the PD controller. ST's datasheet says VDD-only supply is required for its VBUS monitoring; removing that supply without further qualification would sacrifice the independent PD interlock. Sharing the OV feedback removes a selector pole but cannot detect a wrong feedback branch; the independent MCU VM ADC provides that qualification while USB is present.

A synchronous LMR33630ADDAR / C841384 was imported as a possible replacement for TPS54360, removing its catch diode and external compensation. It is **not installed**. The change requires its 1 V feedback network, input capacitance/DC-bias review, current-limit/headroom calculations and renewed schematic/import validation. An unqualified substitution is not counted as a completed simplification. The existing TPS54360 compensation is still provisional.

The analog regeneration dump remains because generic motors can return much more energy than the capacitors store. Four 2 W resistors are not a validated indefinite braking load. Removing the dump or replacing it with a TVS alone requires an established motor-energy envelope. Further part reduction and the target 2 A operating envelope remain review items.

A8 cleared the three thermal-via supplier errors. Placement remains gated by tooling and incomplete electrical qualification. Routing remains disabled. Historical documents are preserved in evidence/historical-documentation-before-A7.zip.

## A8 policy update

The authorized checker permission accepts the 12 existing imported thermal vias; the router still prohibits creating new vias in pads and routing stays disabled. No components were added or removed: 128 placements / 53 supplier codes. This resolves the three native supplier-probe errors without changing models. It does not complete the pending simplification, thermal, firmware or selector approval.

## A9 input network review

Two 1 uF buck input parts fail TI's minimum 3 uF effective requirement even before DC-bias loss. They are replaced by two supplier-backed C138687 / CL32B106KBJNNNE 10 uF / 50 V X7R parts. The screened effective capacitance is 6.06 uF at 21 V with tolerance/temperature/aging reserve. This essential correction keeps 128 placements and increases distinct supplier codes to 54. C13585 imported successfully but is not used: its measured typical 21 V bias loss leaves insufficient effective capacitance in the two-part network.

Retain TPS54360 for this revision: its 4.5 A minimum peak limit leaves more current margin than the 3 A synchronous candidate, and the existing 8.2 uH network is already connected. A synchronous redesign might remove four parts, but would require changed feedback, analog protection thresholds, inductor, bootstrap/VCC bypass and renewed current validation. It is not counted as a completed reduction. No display, communications feature or direction logic is added.

## A9 final simplification decision

| Functional sheet | Components |
|---|---:|
| USB input, PD controller, two quiet supplies and bypass/protection | 19 |
| Input isolation, eFuse and qualification interlocks | 16 |
| Selectable buck and compensation | 21 |
| Hardware speed PWM, single direction switch and indicators | 14 |
| Motor-rail reference and UV/OV monitor | 11 |
| Regeneration dump and command inhibit | 14 |
| Integrated bridge, current regulation, terminal and local protection | 12 |
| Approved PD MCU, user voltage selection and measurement/feedback interfaces | 21 |
| Total | 128 |

The source-to-manifest count was reconciled for every functional sheet. The two PWM gating/decoding paths and supplier debug/service header are removed. No replacement direction logic, timed-reversal circuit, MCU PWM, display, radio, motor sensor or communications connector is added. The 5 V LDO powers the STUSB4500 VDD-only configuration; the hardware PWM already uses 3.3 V, so changing its supply cannot remove that LDO. The VM-powered analog clamp must remain active after USB and MCU power disappear. Removing those circuits merely because the MCU can sample a powered rail would change the fault behavior.

Retain this connected architecture for electrical qualification. A synchronous buck redesign is the concrete remaining reduction opportunity, but its current-limit and three-mode feedback/monitor behavior require a fresh design rather than a part-only substitution. No reduction is claimed until that alternative is validated. The greater count and provisional 65 × 50 mm size are explicit tradeoffs of regulated multi-voltage PD power and protection for unspecified motors; reference-like compactness is still unproven.


## A11 essential discharge addition

One R68/C2074262 1 kΩ/0.5 W passive VM bleeder makes rail decay independent of the attached motor and uncertain below-range IC loading. It avoids a discharge transistor/driver network, adds one part, and retains hardware PWM/direct direction switching. Current total: 129 purchased components/55 supplier codes; buck sheet 22, other sheet counts unchanged. No debug/sensor/communication/reversal-delay circuit is added. See RAIL-DISCHARGE.md for calculations, stock and independent import audit. The portable voltage-change sequence waits for measured decay and still inhibits on timeout; actual operating limits remain unapproved.

A19 replaces the four existing ADC divider resistors with0.1% supplier-backed parts: no placement-count increase, two additional supplier codes. This is required by the conservative voltage-error screen, not extra sensing circuitry. See ADC-SENSING.md. The imported10 kΩ speed potentiometer/330 Ω/5.6 nF network and direct switch-fed H-bridge remain unchanged.
