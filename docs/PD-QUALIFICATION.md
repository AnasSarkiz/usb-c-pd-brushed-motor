# A9 PD qualification and voltage policy

2026-10-03. The user approved the MCU architecture. U11 is supplier-imported STM32G030F6P6TR / C529330, used only for power qualification. firmware/pd_policy.c is a portable policy library, tested on the host and compiled to a Cortex-M0+ object. It is **not a complete flashable firmware image**: STM32 startup, clocks, GPIO/ADC/I2C, STUSB4500 transport, watchdog, option bytes and programming-pad implementation remain open.

## User voltage selection

SW2 / C3293142 is a two-pole DIP. Logical bits: 00=5 V, 01=9 V, 10=12 V, 11=invalid/inhibit (bit 0 is the 9 V input). The schematic note names the two bits rather than guessing physical slider numbering. Pin 1/3 connect to 3.3 V; pin 2/4 to pull-down-equipped GPIO inputs. The manufacturer depicts two independent sliders aligned with two vertical terminal pairs; its land-pattern drawing does not number pads. The official imported footprint labels left bottom/top as pin1/pin4 and right bottom/top as pin2/pin3. Each physical vertical pair has exactly one 3.3 V terminal and one input: left slider reads the 12 V bit; right slider reads the 9 V bit, viewed from the component side with ON at the top. These are footprint-local labels; do not claim they equal the unnumbered manufacturer land identifiers. Physical continuity/assembly orientation must still be tested on the prototype. See SELECTOR-MECHANICS.md.

Q7/Q8 independently ground the selected feedback branches; their gates default low. They isolate the feedback rail from unpowered MCU pins. Both off defaults to 5 V. Both on must never be commanded. Nominal regulated rails are 5.004 / 9.008 / 12.011 V. This explicitly selects a motor rating; the board does not discover it.

## Contract selection and power screen

Only fixed 15/20 V PDOs advertising at least 3 A are accepted. No native 12 V PDO is assumed; PPS/variable/battery PDOs are ignored. Mandatory source PDO1 must be fixed 5 V. Prefer the lowest adequate voltage using source current, conservative eFuse bounds and peak output power. The current screen selects 15 V for 5/9 V motors and 20 V for a 12 V motor. A 20 V-only qualified source is a valid fallback for 5/9 V. A 15 V-only source is inhibited in 12 V mode because its peak input demand exceeds the minimum eFuse current limit. A 5 V-only/non-PD source powers control circuitry only.

The 7.15 kOhm eFuse resistor gives 2.517 A nominal, 2.243 A minimum and 2.797 A maximum with the recorded IC/resistor tolerance assumptions. Auxiliary fault budget is <=2.867 A total at 15 V. A 20 V/2.25 A source is rejected even when nominal watts appear adequate, because hardware fault current could exceed that contract.

Assumptions: source -5%, series diode 0.55 V, buck 85% efficiency, hot bridge 0.36 Ohm, auxiliaries 1 W, peak motor current 2.423 A. Estimated selected-contract peak input currents are 1.292 A (5/15), 2.124 A (9/15), 2.041 A (12/20). These are engineering screens, not measured efficiency/current/temperature guarantees. The 5 V driver-limit accuracy and the narrow worst-case margin above 2 A remain qualification limits.

## Required embedded sequence

1. GPIO defaults hold HOST_ALLOW low and Q6 bridge inhibit asserted. Set PA7 as open drain: high/Hi-Z asserts inhibition; sinking its base releases it. Hardware PD_ENABLE_N/Q1 and input PG remain independent interlocks.
2. Wait for valid 3.3 V and ST NVM-load completion; verify NVM/required registers. Provision a 5 V standby PDO only, POWER_ONLY_ABOVE_5V=1 and source-current flexibility disabled. Do not rely on factory high-voltage/current profiles.
3. Capture fresh Source_Capabilities via ALERT before the RX buffer can be overwritten (ST example warns approximately 3 ms). Re-request capabilities with motor inhibited if the initial message was missed. Bound I2C retries/timeouts and fail closed.
4. Increment a connection/capability generation on detach, hard reset or changed capabilities. Decode fixed PDOs; call pd_make_plan. No candidate means HOST_ALLOW remains low and bridge remains inhibited.
5. Program the selected 15/20 V, 3 A sink PDO through RAM and request renegotiation. The manufacturer's example writes SoftReset header 0x000D to 0x51 and command 0x26 to 0x1A. Sink PDO count is 0x70, sink objects start at 0x85, RDO at 0x91. Source RX header/data are 0x31/0x33; PE state is 0x29. These are checked against the retained official ST reference source.
6. Require fresh PS_RDY, PE_SNK_READY=0x18, matching source object/generation, no capability mismatch/giveback, 3 A RDO operating/maximum current and valid measured VBUS. A voltage reading or POWER_OK flag alone is insufficient. The policy rejects stale/incorrect contracts.
7. With bridge inhibited and eFuse off, wait for VM to decay before changing feedback branch. Apply only the selected branch; enable the eFuse after contract qualification. Require actual VM in the selected acceptance window before releasing Q6. ADC dividers are 11:1; filters have approximately 0.91 ms time constants.
8. Detach, hard reset, selector change/invalid bits, lost contract, stale/invalid ADC, I2C failure, driver fault or out-of-range VM must inhibit the bridge and power path before further negotiation. A watchdog/reset must return GPIOs to the default-off hardware state. Transport must validate ADC calibration/sample age and fresh PS_RDY provenance; policy parameters are not substitutes for those checks.

R2/R3 are 4.7 kOhm. A 400 kHz rise-time calculation requires total bus capacitance <=75 pF; actual bus timing and the capability-capture deadline must be measured. ADC calibration, GPIO alternate functions/bonded aliases and safe option bytes need the actual STM32 port. No MCU firmware controls direction or adds a reversal timer.

## Evidence and remaining work

Host C tests exercise source voltage/current selection, invalid selectors, missing PD power, stale generation/PS_RDY, RDO mismatch/current, detach, I2C failure, wrong rail and driver fault. The portable library compiles with -ffreestanding -mcpu=cortex-m0plus -mthumb; this proves target compilation of the policy, not an executable firmware image or live PD negotiation. Fourteen board calculation tests pass. Actual charger negotiation, USB unplug/replug, brownout, watchdog, inrush and source faults remain prototype tests.

References: [STUSB4500 datasheet](https://www.st.com/resource/en/datasheet/stusb4500.pdf); [official ST PD reference firmware](https://github.com/usb-c/STUSB4500); [STM32G0 CMSIS device definitions](https://github.com/STMicroelectronics/cmsis-device-g0). Retained source files in evidence identify the register operations reviewed. No NVM or hardware programming is claimed.

The PD-enable input has a 4.7 kOhm pull-up and 20 kOhm Q1 base resistor. The old 10 kOhm/10 kOhm network loaded the inactive signal to about 2 V, below a conservative 0.7*VDD MCU high threshold. The revised nominal inactive level is about 2.8 V while retaining sufficient transistor base drive. A resistor/supply/VBE/leakage screen is recorded in the board tests; actual startup timing remains a measurement.

A9 pin-power review: PA1_CDEN (SYSCFG_CFGR2 bit 16) resets disabled and must remain disabled; PA0/PA1 stay analog/no-pull. Above-VDD stress tolerance does not qualify ADC samples during brownout. See MCU-POWER-SEQUENCING.md for calculations and required unplug/replug measurements.
