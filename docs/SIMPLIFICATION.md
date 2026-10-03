# A7 architecture simplification — 2026-10-03

The user approved a small MCU for PD qualification. Hardware PWM and the mechanical direction switch remain independent of it. The active BOM contains **128 placements / 53 supplier part numbers**, compared with the historical 118 / 54 assembly. This is a connected prototype draft; simplification is **in progress**, not passed.

| Change from the historical assembly | Placement change |
|---|---:|
| Direct switch-fed DRV8874 PWM; remove U7/C24/R27/R28/R52/R53 | -6 |
| Remove service header J3 | -1 |
| Remove old multi-pole voltage selector | -1 |
| Share buck feedback with analog OV monitor: remove R35–R38, add R65 | -3 |
| Add MCU qualification and explicit 2-bit selector block | +21 |
| Net change | +10 |

The 21-part qualification block contains one STM32G030, one two-pole DIP selector, local decoupling, default-off interlocks, two isolated feedback switches, two rail ADC dividers/filters and the PD alert pull-up. These functions are required by the selected fail-closed architecture. No MCU PWM, communication feature, display, sensor or debug header was added. Future programming uses etched SWD/NRST/3.3 V/GND pads during the placement stage; these pads are not yet authored.

SW2 has explicit user selection: both OFF=5 V; 9 V bit alone=9 V; 12 V bit alone=12 V; both ON=inhibit. Firmware must qualify actual VM independently. The DIP's manufacturer contact diagram and imported pad numbering need final mechanical reconciliation before its physical 9/12 slider labels are approved. No automatic motor-voltage inference is used.

R13 changes to 7.15 kOhm to bound input current below a 3 A contract, including a 1 W auxiliary allowance. R2/R3 change to supplier-backed 4.7 kOhm for I2C rise time. C5710902 and its validated 330 Ohm / 5.6 nF hardware timing network remain unchanged.

The analog rail monitor now derives power from VM with a 2 kOhm TL431 bias resistor. This keeps the regenerative clamp alive after USB removal without a backup LDO or diode-OR power network. The quiet 5 V LDO remains for the PD controller. ST's datasheet says VDD-only supply is required for its VBUS monitoring; removing that supply without further qualification would sacrifice the independent PD interlock. Sharing the OV feedback removes a selector pole but cannot detect a wrong feedback branch; the independent MCU VM ADC provides that qualification while USB is present.

A synchronous LMR33630ADDAR / C841384 was imported as a possible replacement for TPS54360, removing its catch diode and external compensation. It is **not installed**. The change requires its 1 V feedback network, input capacitance/DC-bias review, current-limit/headroom calculations and renewed schematic/import validation. An unqualified substitution is not counted as a completed simplification. The existing TPS54360 compensation is still provisional.

The analog regeneration dump remains because generic motors can return much more energy than the capacitors store. Four 2 W resistors are not a validated indefinite braking load. Removing the dump or replacing it with a TVS alone requires an established motor-energy envelope. Further part reduction and the target 2 A operating envelope remain review items.

Placement remains blocked by three native supplier-footprint errors and incomplete power/firmware/selector qualification. Routing remains disabled. Historical documents are preserved in evidence/historical-documentation-before-A7.zip.

## A8 policy update

The authorized checker permission accepts the 12 existing imported thermal vias; the router still prohibits creating new vias in pads and routing stays disabled. No components were added or removed: 128 placements / 53 supplier codes. This resolves the three native supplier-probe errors without changing models. It does not complete the pending simplification, thermal, firmware or selector approval.
