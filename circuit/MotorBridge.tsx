import { CC0603KRX7R9BB104 } from "../imports/CC0603KRX7R9BB104"
import { DRV8874PWPR } from "../imports/DRV8874PWPR"
import { CL10B223KB8NNNC } from "../imports/CL10B223KB8NNNC"
import { SMBJ15CA } from "../imports/SMBJ15CA"
import { A_0402WGF3301TCE } from "../imports/A_0402WGF3301TCE"
import { A_19_217_G7C_AN1P2_6T } from "../imports/A_19_217_G7C_AN1P2_6T"
import { DB126V_5_0_2P_GN_P } from "../imports/DB126V_5_0_2P_GN_P"
import { GRM31CR61E476ME44L } from "../imports/GRM31CR61E476ME44L"
import { CRCW060310K0FKEA } from "../imports/CRCW060310K0FKEA"

export function MotorBridge() {
  return (
    <>
      {/* Integrated PWM-mode H bridge, nominal 2.22 A chopping */}
      <DRV8874PWPR
        name="U10"
        schSheetName="motor"
        schX={-11.0}
        schY={8}
        connections={{
          pin1: "net.IN1",
          pin2: "net.IN2",
          pin3: "net.MOTOR_READY",
          pin4: "net.MOTOR_FAULT_N",
          pin5: "net.VCC3V3",
          pin6: "net.IPROPI",
          pin7: "net.GND",
          pin8: "net.MOTOR_P",
          pin9: "net.GND",
          pin10: "net.MOTOR_N",
          pin11: "net.VM",
          pin12: "net.VCP",
          pin13: "net.CPH",
          pin14: "net.CPL",
          pin15: "net.GND",
          pin16: "net.VCC3V3",
          pin17: "net.GND",
        }}
      />
      {/* 3.3 k current-sense resistor */}
      <A_0402WGF3301TCE
        name="R50"
        schSheetName="motor"
        schX={-5.5}
        schY={8}
        schRotation={-90.0}
        connections={{
          pin1: "net.IPROPI",
          pin2: "net.GND",
        }}
      />
      {/* Fault test output pull-up */}
      <CRCW060310K0FKEA
        name="R51"
        schSheetName="motor"
        schX={0.0}
        schY={8}
        schRotation={-90.0}
        connections={{
          pin1: "net.VCC3V3",
          pin2: "net.MOTOR_FAULT_N",
        }}
      />
      {/* 22 nF charge-pump flying capacitor */}
      <CL10B223KB8NNNC
        name="C26"
        schSheetName="motor"
        schX={-11.0}
        schY={4}
        connections={{
          pin1: "net.CPH",
          pin2: "net.CPL",
        }}
      />
      {/* Charge-pump reservoir differential capacitor */}
      <CC0603KRX7R9BB104
        name="C27"
        schSheetName="motor"
        schX={-5.5}
        schY={4}
        schRotation={-90.0}
        connections={{
          pin1: "net.VCP",
          pin2: "net.VM",
        }}
      />
      {/* Bridge local HF bypass */}
      <CC0603KRX7R9BB104
        name="C28"
        schSheetName="motor"
        schX={0.0}
        schY={4}
        schRotation={-90.0}
        connections={{
          pin1: "net.VM",
          pin2: "net.GND",
        }}
      />
      {/* Local bridge ceramic bulk */}
      <GRM31CR61E476ME44L
        name="C29"
        schSheetName="motor"
        schX={2}
        schY={4}
        schRotation={-90.0}
        connections={{
          pin1: "net.VM",
          pin2: "net.GND",
        }}
      />
      {/* Bidirectional motor terminal TVS, 24.4 V nominal surge clamp */}
      <SMBJ15CA
        name="D10"
        schSheetName="motor"
        schX={11.0}
        schY={4}
        connections={{
          pin1: "net.MOTOR_P",
          pin2: "net.MOTOR_N",
        }}
      />
      <schematictext
        text="D10 · SMBJ15CA"
        schX={11.8}
        schY={3.35}
        fontSize={0.15}
        anchor="bottom_left"
      />
      {/* Backup motor-rail TVS; primary clamp tracks selected rail */}
      <SMBJ15CA
        name="D11"
        schSheetName="motor"
        schX={-11.0}
        schY={0}
        schRotation={90.0}
        connections={{
          pin1: "net.VM",
          pin2: "net.GND",
        }}
      />
      <schematictext
        text="D11 · SMBJ15CA"
        schX={-10.2}
        schY={-0.65}
        fontSize={0.15}
        anchor="bottom_left"
      />
      {/* Direct 2-pin 5 mm motor screw terminal */}
      <DB126V_5_0_2P_GN_P
        name="J2"
        schSheetName="motor"
        schX={-5.5}
        schY={0}
        connections={{
          pin1: "net.MOTOR_P",
          pin2: "net.MOTOR_N",
        }}
      />
      {/* Power LED current limit */}
      <A_0402WGF3301TCE
        name="R54"
        schSheetName="motor"
        schX={0.0}
        schY={0}
        schRotation={-90.0}
        connections={{
          pin1: "net.VM",
          pin2: "net.POWER_LED",
        }}
      />
      {/* Regulated motor power indicator */}
      <A_19_217_G7C_AN1P2_6T
        name="LED1"
        schSheetName="motor"
        schX={5.5}
        schY={0}
        schRotation={-90.0}
        connections={{
          anode: "net.POWER_LED",
          cathode: "net.GND",
        }}
      />
    </>
  )
}
