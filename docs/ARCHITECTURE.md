# A7 connected prototype architecture

2026-10-03. One USB-C power input, STUSB4500 PD sink, approved STM32G030 qualification MCU, protected buck supply, hardware TLC555 PWM, direct SPDT direction switch, integrated DRV8874 bridge and one two-pin motor terminal. Routing is disabled. Component placement is not approved or authored.

Input protection includes CC ESD, 22 V input TVS, protected VBUS sensing, reverse blocking SS54 and TPS16630 eFuse with UV/OV, controlled inrush and latch-off. The two 60 V TPS7A16 LDOs supply the PD controller and 3.3 V logic before the motor power gate. Firmware/HW interlocks default off; non-PD or insufficient sources leave the motor disabled. See PD-QUALIFICATION.md for the explicit selector and contract policy.

TPS54360 regulates 5.004/9.008/12.011 V using a 105.1 kOhm top and 20 kOhm bottom feedback divider with switched 21/12 kOhm branches. Q7/Q8 are isolated analog branch switches controlled only after motor inhibition. The 8.2 uH inductor, catch diode, ceramics/electrolytic bulk and 600 kHz nominal switching remain. The 27 kOhm / 22 nF / 22 pF compensation network is provisional: effective capacitance/DC bias, ESR, Eco-mode, all voltage modes and PWM load stability remain unapproved.

C5710902 / Bourns PTV09A-4015F-B103 is a 10 kOhm linear, top-access 15 mm flat shaft potentiometer. The bushingless part needs PCB/enclosure support rather than assuming a panel nut. Its 330 Ohm / 5.6 nF hardware network remains approximately 19–21 kHz and 3–97% duty nominal. OFF comes from the mechanical switch. DIRECTION-CONTROL.md records the DRV8874 truth table, internal pull-downs, current regulation and mandatory reversal tests.

Power LED indicates VM; forward/reverse LEDs indicate PWM command and vary in brightness. MOTOR+ / MOTOR- both reverse polarity; neither is a ground terminal. Local bridge charge-pump capacitors, 47 uF/100 nF bypass and bidirectional motor/rail TVSs remain.

TL431/LM393 UV/OV monitoring now powers directly from VM, so the analog regeneration clamp remains active when USB disappears. R31=2 kOhm supplies at least 1.25 mA at nominal 5 V; dissipation at the highest nominal trip is approximately 63 mW versus the resistor's 100 mW rating. The shared feedback monitor follows the selected rail. Independent MCU VM measurement catches a wrong feedback branch while USB power is present. The feedback branch defaults to 5 V after MCU supply loss, lowering the clamp setpoint; this transition requires measurement.

| Mode | UV threshold | OV trip | OV release | Dump power at trip |
|---|---:|---:|---:|---:|
| 5 V | 4.550 V | 5.387 V | 5.176 V | 2.90 W |
| 9 V | 8.190 V | 10.037 V | 9.317 V | 10.08 W |
| 12 V | 10.921 V | 13.745 V | 12.423 V | 18.89 W |

These are nominal network calculations, including R41+R42 pull-up loading and 0.2 V assumed comparator-low voltage. Full reference/resistor/offset/leakage tolerance and dynamic behavior remain open. Four 10 Ohm / 2 W resistors form a 10 Ohm, 8 W aggregate component load; 9/12 V clamp operation therefore requires pulse-energy/duty/thermal qualification. TVSs are backup transient devices, not continuous braking loads. Capacitor energy alone cannot absorb an arbitrary rotor's kinetic energy.

The broad ~2 A rating is a target, not measured hardware performance. Current-limit tolerance leaves limited worst-case peak margin; 5 V current-sense accuracy is outside the cited datasheet condition. Buck loop/thermal/current, LDO loss, motor-start/stall, ADC injection/back-power after unplug, contact bounce, both reversal directions and dump energy need qualification. A8 accepts the 12 existing imported thermal vias with isViaInPadAllowed=true, while autorouter.allowViaInPad=false prohibits new routed vias in pads. Routing stays disabled. All three affected native probes pass; thermal copper and assembler processing remain open. No model patch, custom symbol/footprint or suppressed check is used.

Primary references: [DRV8874](https://www.ti.com/lit/ds/symlink/drv8874.pdf), [TPS54360](https://www.ti.com/lit/ds/symlink/tps54360.pdf), [TPS1663](https://www.ti.com/lit/ds/symlink/tps1663.pdf), [TPS7A16](https://www.ti.com/lit/ds/symlink/tps7a16.pdf), [STUSB4500](https://www.st.com/resource/en/datasheet/stusb4500.pdf). Exact supplier/manufacturer links, stock observation dates and quantities are in BOM.csv. Historical architecture is archived in evidence/historical-documentation-before-A7.zip.

The PD-enable input has a 4.7 kOhm pull-up and 20 kOhm Q1 base resistor. The old 10 kOhm/10 kOhm network loaded the inactive signal to about 2 V, below a conservative 0.7*VDD MCU high threshold. The revised nominal inactive level is about 2.8 V while retaining sufficient transistor base drive. A resistor/supply/VBE/leakage screen is recorded in the board tests; actual startup timing remains a measurement.
