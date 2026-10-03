# A18 STM32G030 safe GPIO port — unrouted prototype

The board now has a real memory-mapped GPIO backend and a host register-model test for initialization, inhibition and digital inputs. It remains unlinked: no startup/vector table, clock/timebase, ADC conversion, I2C peripheral, watchdog, event owner or flashable image is supplied by this step. GPIO readback is configuration evidence, not a measured transistor, rail or PD contract.

## Pin mapping and behavior

Mapping is for unchanged A11 U11, STM32G030F6P6TR/C529330, TSSOP20. GPIO numbers below are manufacturer port names, not package pin numbers.

| Package pin | GPIO | Role /initial configuration |
|---|---|---|
|1|PB8|I2C1 SCL, AF6, open drain, external pull-up; bonded PB7 analog/no pull.|
|2|PB9|I2C1 SDA, AF6, open drain; bonded PC14 analog/no pull, LSE must be off.|
|3|PC15|PD_ALERT_N input; external pull-up.|
|7/8|PA0/PA1|ADC VBUS/VM analog/no pull; optional PA1 clamp explicitly disabled.|
|9/10|PA2/PA3|9 V/12 V selector inputs; external pull-downs. Both high is invalid.|
|11/12|PA4/PA5|Regulator-feedback drives; initialization and inhibition preserve all mode/pull/type/speed/latch/AF state.|
|13|PA6|HOST_ALLOW push-pull low: remove power permission first.|
|14|PA7|HOST_INHIBIT_B open drain, high latch: release GPIO and let external R57 bias Q6 to inhibit bridge.|
|15|PA8|PD_ENABLE_N input; bonded PB0/PB1/PB2 analog/no pull.|
|16|PA11|PD_RESET push-pull low, deasserted; PA11 remap disabled and PA9 alias analog/no pull.|
|17|PA12|MOTOR_FAULT_N input; PA12 remap disabled and PA10 alias analog/no pull.|
|18/19|PA13/PA14|Preserve SWD modes/pulls/type/speed/latch/AF; bonded PA15 analog/no pull.|
|20|PB3/PB4/PB5/PB6|All bonded and NC on board; analog/no pull.|

PA7 connects directly to Q6's base. Open-drain type is set **before** a high output latch, including warm initialization; push-pull high would drive the base without a series resistor. PA6 permission is removed before other initialization changes. Actual pin transitions still require oscilloscope review on a prototype.

No automatic voltage-selection reset occurs. For a warm restart, PA4/PA5 could be holding an existing high rail; retaining their state prevents raising/changing the feedback target while its capacitor remains charged. A future sequencer adapter must first inhibit, measure VM decay to at most1 V, then change the feedback. This module offers no motor-enable or feedback-change API. Initialization requires one serialized register owner with interrupts controlled and previous PD provenance invalidated.

LSE already enabled is a latched error after both inhibit outputs are requested. The code does not write the protected backup domain or silently commandeer an oscillator sharing the SDA pad. The target clock setup must explicitly leave LSE off. PD RESET is deasserted, not held high indefinitely: ST specifies CC becomes Hi-Z during reset, which can remove USB power. A later bounded reset transaction must invalidate negotiation evidence and enforce inhibition.

Owned pin modes, pulls, output type/latch, I2C AF, clock gates, remap and clamp configuration are read back. Mismatch returns unsafe selector/fault defaults and attempts inhibition. Fault latches cannot be cleared by simply calling initialize again; actual reset/recovery belongs to a later reviewed owner. Input samples are digital observations, not debounced/fresh PD or ADC qualification.

## Sources and checks

- [STM32G030 datasheet DS12991](https://www.st.com/resource/en/datasheet/stm32g030f6.pdf), TSSOP20 bonded aliases and AF table.
- [ST reference manual RM0454](https://www.st.com/resource/en/reference_manual/rm0454-stm32g0b0-advanced-armbased-32bit-mcus-stmicroelectronics.pdf), GPIO, clock gates, SYSCFG remaps and PA1 clamp.
- Byte-exact ST device/system headers and ARM CMSIS5.9.0 definitions with licenses are in firmware/vendor/. Hashes and exact Git blob IDs are in its manifest; the configured suite verifies every vendor file unchanged.
- ST's official LL system header confirms PA11_RMP maps to PA9 and PA12_RMP maps to PA10. Unchanged source/hash evidence: evidence/stm32-ll-system-reference-A18.h/.json.
- Host C11 Wall/Wextra/Werror test passes **10,289,863 assertions** across every16-bit register pattern/inverse, warm reinitialization, feedback/SWD preservation, all32 digital-input combinations, output ordering, missing contexts, failed output writes, register corruption and LSE/fault-latch behavior. Fake BSRR updates model only its documented ODR effect.
- Actual freestanding Cortex-M0+ GPIO object compiles with ARM GCC; all six earlier modules also compile. This is not a linked or executed firmware image.
- Early __CMSIS_GENERIC host probe failed because it omits register qualifiers; a normal probe then exposed a missing canonical mpu_armv7.h include. Adding that byte-exact CMSIS dependency resolves the complete normal host compile. No vendor macro patch, warning suppression or generic register substitute is used; failed logs are retained.
- Initial test failed due to a mistaken expected mode-mask literal. Corrected the independently specified mask/value; original failure retained. Injected failed HOST_ALLOW write is allowed to reach the bridge-inhibit attempt, then actual readback must latch failure. The successful-path requirement remains unchanged.

Hardware/BOM/imports/dependencies remain A11. Product placement and routing remain disabled. Remaining embedded and electrical gates are listed in VALIDATION.md; neither remote publication is complete while the GitHub destination remains unspecified.
