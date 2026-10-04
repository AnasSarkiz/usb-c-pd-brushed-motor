# A22 conditional I2C timing screen

The target uses HSI16 (±3%), analog filter enabled, DNF0 and TIMINGR
0x00521018: PRESC0, SCLDEL5, SDADEL2, SCLH16, SCLL24. Increasing SCLDEL
from4 to5 gives a minimum364 ns setup delay against a300 ns requirement.
The complete independently evaluated inequalities are in
`evidence/i2c-timing-envelope-A22.json`; setup/hold/high/low/frequency checks pass.
Clock/filter corners produce258–346 kHz. Rise≤200 ns, fall≤60 ns and the
STUSB minimum40 ns hold requirement are explicit assumptions. A4.7 kΩ pull-up
with2% allowance permits≤49.24 pF bus capacitance at200 ns rise.

Equations come from ST AN4235, pages10–12, for the shared I2C v2 peripheral.
This is a conditional screen, not a substitute for G0 reference-manual review
or scope measurements. The exact G0 TIMINGR fields are verified against the
retained unchanged ST CMSIS/LL headers. RM0454 retrieval failed in the web tool
(size limit), HTTP2 download (stream error) and HTTP1 download (90s timeout,
zero bytes). These attempts are retained. Obtain the G0 manual and capture
SCL/SDA rise/fall, setup/hold, repeated START/STOP, stretch and error timing
before approving motor-enabled firmware. The inhibited diagnostic prototype
can be fabricated and used for these measurements.

Primary sources:
https://www.st.com/resource/en/application_note/an4235-i2c-timing-configuration-tool-for-stm32f3xxxx-and-stm32f0xxxx-microcontrollers-stmicroelectronics.pdf
https://www.st.com/resource/en/reference_manual/rm0454-stm32g0x0-advanced-armbased-32bit-mcus-stmicroelectronics.pdf
