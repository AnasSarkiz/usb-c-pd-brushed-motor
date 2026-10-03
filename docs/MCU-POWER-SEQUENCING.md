# A9 MCU power sequencing review

The STM32G030F6P6TR uses PA0 / pin 7 (FT_a) for VBUS measurement and PA1 / pin 8 (FT_ea) for VM measurement. Each input has a 100 kΩ / 10 kΩ divider and 100 nF filter. These are voltage qualification inputs, not motor sensors or PWM controls.

ST RM0454 Rev 5, §7.1.2, defines SYSCFG_CFGR2.PA1_CDEN at bit 16. The register resets to zero; zero disconnects the optional clamp diode to VDD. The retained official STM32G030 CMSIS header independently defines the same bit. The embedded port must keep PA1_CDEN clear and both ADC pins in analog mode with internal pulls disabled. Do not substitute a UCPD register: this device has no UCPD peripheral.

The datasheet distinguishes above-VDD input tolerance from valid ADC operation. These dividers can remain energized after the MCU supply falls. No conversion or motor qualification is valid below the specified supply range. Reset/brownout must restore bridge and eFuse inhibition; a stale ADC value must never qualify a contract.

At 21 V VBUS the nominal ADC input is 1.909 V. At the nominal 12 V-mode regeneration trip, 13.745 V VM gives 1.250 V. With 1% divider tolerances, the upper scaling factor is 10.1/(99+10.1)=0.092576: 1.944 V and 1.272 V respectively. These remain below the datasheet's 4 V analog-pin absolute envelope; that comparison is an electrical stress screen, not a guarantee of accurate conversion or zero back-power. ADC accuracy requires powered calibration, supply/reference qualification and settling. The approximately 0.91 ms divider-filter time constant requires an explicit sample-age policy.

Prototype measurements must capture VDD, both ADC pins, VM, HOST_ALLOW and nSLEEP during unplug, hard reset and rapid replug. Check residual supply injection/leakage and unintended MCU restart while the motor or dump circuit holds VM up. Also verify Q7/Q8 return to their default-off feedback states and the VM-powered analog clamp remains active. No diode-OR backup or extra parts are added solely on an unproven back-power assumption.

Evidence: evidence/STM32G030-registers-A7.h. RM0454 register definition was read from the official indexed manual; full-manual download attempts failed and are not claimed as a local PDF review. The complete embedded GPIO/ADC/I2C/watchdog port remains required; the current portable PD policy is not flashable firmware.

References: [ST reference manual RM0454](https://www.st.com/resource/en/reference_manual/rm0454-stm32g0b0-advanced-armbased-32bit-mcus-stmicroelectronics.pdf), [STM32G030 datasheet](https://www.st.com/resource/en/datasheet/stm32g030f6.pdf), [official CMSIS device header](https://github.com/STMicroelectronics/cmsis-device-g0/blob/master/Include/stm32g030xx.h).
