# A7 direction control — 2026-10-03

Implemented in circuit/PwmControls.tsx and circuit/MotorBridge.tsx. C908270 / Dailywell 1MS3T1B1M2QES-5 is the supplier-backed PC-through-hole SPDT ON-OFF-ON switch. Fresh official imports on tscircuit 0.0.2742 / CLI 0.1.2235 retain exactly three electrical schematic ports and three plated footprint pads. Pin 2 is common; manufacturer contacts are 2–3 / OPEN / 2–1. No imported model was patched.

| Position | Physical connections | DRV8874 input states | Behavior |
|---|---|---|---|
| FWD | 2–1 | IN1=PWM, IN2=low | Forward while PWM high; coast while low |
| OFF | Both throws open | IN1=low, IN2=low | Coast / Hi-Z |
| REV | 2–3 | IN1=low, IN2=PWM | Reverse while PWM high; coast while low |

PMODE is high for PWM mode. The timer output feeds physical common 2. Throws 1/3 connect directly to IN1/IN2. [TI DRV8874 datasheet](https://www.ti.com/lit/ds/symlink/drv8874.pdf), PWM truth table and input characteristics, specifies 00=coast and internal input pull-downs of 100 kOhm typical. These are not guaranteed minimum/maximum resistances. No external pull-downs are added in this revision; startup, leakage and EMI robustness remain prototype tests. A temporary 11 state is brake, not a command to short the bridge supply. Internal dead time is 100 ns typical; it does not create a motor coast interval.

U7/C24/R27/R28 and R52/R53 are removed. The FWD/REV LEDs are fed from IN1/IN2 and their brightness follows PWM duty. They show commanded direction, not measured rotation or proof that the bridge is enabled. The imported C5710902 10 kOhm Bourns potentiometer and 330 Ohm / 5.6 nF network are unchanged: approximately 19.4–20.9 kHz and 2.9–96.7% duty nominal under the documented diode-drop assumptions.

VREF=3.3 V and IPROPI=3.3 kOhm give 2.22 A nominal hardware chopping current. The stated tolerance screen is approximately 2.044–2.423 A at VM >=5.5 V. The manufacturer's quoted mirror accuracy does not cover a 5 V motor rail. The minimum limit leaves little margin above 2 A; motor startup success and continuous average current are not guaranteed for arbitrary motors. The MCU qualifies USB power/voltage only and does not generate PWM or interpret direction.

Keep OCP and thermal protection. OCP is approximately 6–10 A, substantially above the intended regulation limit. Thermal shutdown is 160/175/190 C min/typ/max, while recommended junction temperature is limited to 150 C; shutdown is not a continuous operating rating. No timed reversal circuit is installed.

Mandatory prototype tests: OFF→FWD, OFF→REV, both rapid reversals, contact bounce, low-inductance startup/stall, input current, driver peak current, regenerative VM overshoot and resistor temperatures. Begin with a current-limited supply and low-energy motor; expand the measured operating envelope before advertising ratings. Determine from measured reversal current/energy whether a fixed coast delay is required.

C908270 nominal slot/body fit was reviewed in A6. The current exact source/pin/pad audit is evidence/active-import-audit-A7.json. Finished slot/plating/maximum lead tolerances and stencil processing remain mechanical/fabrication qualification items. C908281 is a solder-lug backup, not an approved PCB termination. SP3T candidates and C2848921 are absent from the active circuit.
