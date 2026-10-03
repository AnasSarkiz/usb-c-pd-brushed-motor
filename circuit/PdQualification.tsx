import { STM32G030F6P6TR } from "../imports/STM32G030F6P6TR"
import { DSHP02TSGER } from "../imports/DSHP02TSGER"
import { CC0603KRX7R9BB104 } from "../imports/CC0603KRX7R9BB104"
import { GRM21BR71H105KA12L } from "../imports/GRM21BR71H105KA12L"
import { A_0603WAF1003T5E } from "../imports/A_0603WAF1003T5E"
import { CRCW060310K0FKEA } from "../imports/CRCW060310K0FKEA"
import { MMBT3904 } from "../imports/MMBT3904"
import { AO3400A } from "../imports/AO3400A"

export function PdQualification() {
  return (
    <>
      {/* PD qualification only; hardware PWM independent */}
      <STM32G030F6P6TR
        name="U11"
        schSheetName="pdhost"
        schX={-6.5}
        schY={8}
        noConnect={["pin20"]}
        connections={{
          pin1: "net.SCL",
          pin2: "net.SDA",
          pin3: "net.PD_ALERT_N",
          pin4: "net.VCC3V3",
          pin5: "net.GND",
          pin6: "net.MCU_NRST",
          pin7: "net.ADC_VBUS",
          pin8: "net.ADC_VM",
          pin9: "net.VOLTAGE_BIT_9",
          pin10: "net.VOLTAGE_BIT_12",
          pin11: "net.VOLTAGE_DRIVE_9",
          pin12: "net.VOLTAGE_DRIVE_12",
          pin13: "net.HOST_ALLOW",
          pin14: "net.HOST_INHIBIT_B",
          pin15: "net.PD_ENABLE_N",
          pin16: "net.PD_RESET",
          pin17: "net.MOTOR_FAULT_N",
          pin18: "net.SWDIO",
          pin19: "net.SWCLK",
        }}
      />
      {/* DIP voltage selector: 00=5 V / bit 0=9 V / bit 1=12 V / both=inhibit */}
      <DSHP02TSGER
        name="SW2"
        schSheetName="pdhost"
        schX={-1.5}
        schY={8}
        connections={{
          pin1: "net.VCC3V3",
          pin2: "net.VOLTAGE_BIT_9",
          pin3: "net.VCC3V3",
          pin4: "net.VOLTAGE_BIT_12",
        }}
      />
      {/* MCU local decoupling */}
      <CC0603KRX7R9BB104
        name="C30"
        schSheetName="pdhost"
        schX={3}
        schY={8}
        connections={{ pin1: "net.VCC3V3", pin2: "net.GND" }}
      />
      {/* MCU local bulk */}
      <GRM21BR71H105KA12L
        name="C31"
        schSheetName="pdhost"
        schX={7}
        schY={8}
        connections={{ pin1: "net.VCC3V3", pin2: "net.GND" }}
      />
      {/* NRST noise filtering */}
      <CC0603KRX7R9BB104
        name="C32"
        schSheetName="pdhost"
        schX={11.0}
        schY={8}
        connections={{ pin1: "net.MCU_NRST", pin2: "net.GND" }}
      />
      {/* Default-off eFuse host enable */}
      <A_0603WAF1003T5E
        name="R56"
        schSheetName="pdhost"
        schX={-11.0}
        schY={4}
        connections={{ pin1: "net.HOST_ALLOW", pin2: "net.GND" }}
      />
      {/* Bridge inhibit defaults asserted until MCU sinks base */}
      <CRCW060310K0FKEA
        name="R57"
        schSheetName="pdhost"
        schX={-5.5}
        schY={4}
        connections={{ pin1: "net.VCC3V3", pin2: "net.HOST_INHIBIT_B" }}
      />
      {/* Fail-safe bridge inhibit; GPIO open drain releases motor only after qualification */}
      <MMBT3904
        name="Q6"
        schSheetName="pdhost"
        schX={0.0}
        schY={4}
        connections={{
          B: "net.HOST_INHIBIT_B",
          E: "net.GND",
          C: "net.MOTOR_READY",
        }}
      />
      <schematictext
        text="Q6 · MMBT3904"
        schX={0.8}
        schY={3.35}
        fontSize={0.15}
        anchor="bottom_left"
      />
      {/* Selector 9 V bit default low */}
      <A_0603WAF1003T5E
        name="R58"
        schSheetName="pdhost"
        schX={5.5}
        schY={4}
        connections={{ pin1: "net.VOLTAGE_BIT_9", pin2: "net.GND" }}
      />
      {/* Selector 12 V bit default low */}
      <A_0603WAF1003T5E
        name="R59"
        schSheetName="pdhost"
        schX={11.0}
        schY={4}
        connections={{ pin1: "net.VOLTAGE_BIT_12", pin2: "net.GND" }}
      />
      {/* VBUS ADC divider upper */}
      <A_0603WAF1003T5E
        name="R60"
        schSheetName="pdhost"
        schX={-11.0}
        schY={0}
        connections={{ pin1: "net.VBUS", pin2: "net.ADC_VBUS" }}
      />
      {/* VBUS ADC divider lower; 11:1 scale */}
      <CRCW060310K0FKEA
        name="R61"
        schSheetName="pdhost"
        schX={-5.5}
        schY={0}
        connections={{ pin1: "net.ADC_VBUS", pin2: "net.GND" }}
      />
      {/* VBUS ADC filtering; about 0.91 ms */}
      <CC0603KRX7R9BB104
        name="C33"
        schSheetName="pdhost"
        schX={0.0}
        schY={0}
        connections={{ pin1: "net.ADC_VBUS", pin2: "net.GND" }}
      />
      {/* PD alert open-drain pull-up */}
      <CRCW060310K0FKEA
        name="R62"
        schSheetName="pdhost"
        schX={5.5}
        schY={0}
        connections={{ pin1: "net.VCC3V3", pin2: "net.PD_ALERT_N" }}
      />
      {/* 9 V feedback branch switch; isolates analog node from MCU */}
      <AO3400A
        name="Q7"
        schSheetName="pdhost"
        schX={11.0}
        schY={0}
        connections={{
          G: "net.VOLTAGE_DRIVE_9",
          S: "net.GND",
          D: "net.SELECT_9",
        }}
      />
      <schematictext
        text="Q7 · AO3400A"
        schX={11.8}
        schY={-0.65}
        fontSize={0.15}
        anchor="bottom_left"
      />
      {/* 12 V feedback branch switch; isolates analog node from MCU */}
      <AO3400A
        name="Q8"
        schSheetName="pdhost"
        schX={-11.0}
        schY={-4}
        connections={{
          G: "net.VOLTAGE_DRIVE_12",
          S: "net.GND",
          D: "net.SELECT_12",
        }}
      />
      <schematictext
        text="Q8 · AO3400A"
        schX={-10.2}
        schY={-4.65}
        fontSize={0.15}
        anchor="bottom_left"
      />
      {/* 9 V feedback branch default off */}
      <A_0603WAF1003T5E
        name="R63"
        schSheetName="pdhost"
        schX={-5.5}
        schY={-4}
        connections={{ pin1: "net.VOLTAGE_DRIVE_9", pin2: "net.GND" }}
      />
      {/* 12 V feedback branch default off */}
      <A_0603WAF1003T5E
        name="R64"
        schSheetName="pdhost"
        schX={0.0}
        schY={-4}
        connections={{ pin1: "net.VOLTAGE_DRIVE_12", pin2: "net.GND" }}
      />
      {/* Motor-rail ADC divider upper */}
      <A_0603WAF1003T5E
        name="R66"
        schSheetName="pdhost"
        schX={5.5}
        schY={-4}
        connections={{ pin1: "net.VM", pin2: "net.ADC_VM" }}
      />
      {/* Motor-rail ADC divider lower; independent absolute-rail qualification */}
      <CRCW060310K0FKEA
        name="R67"
        schSheetName="pdhost"
        schX={11.0}
        schY={-4}
        connections={{ pin1: "net.ADC_VM", pin2: "net.GND" }}
      />
      {/* Motor-rail ADC filtering; about 0.91 ms */}
      <CC0603KRX7R9BB104
        name="C34"
        schSheetName="pdhost"
        schX={-11.0}
        schY={-8}
        connections={{ pin1: "net.ADC_VM", pin2: "net.GND" }}
      />
    </>
  )
}
