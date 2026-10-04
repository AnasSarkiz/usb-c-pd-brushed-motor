import { productPlacement } from "./product-placement"
import { CC0603KRX7R9BB104 } from "../imports/CC0603KRX7R9BB104"
import { A_0603WAF1001T5E } from "../imports/A_0603WAF1001T5E"
import { A_0603WAF3300T5E } from "../imports/A_0603WAF3300T5E"
import { A_1MS3T1B1M2QES_5 } from "../imports/A_1MS3T1B1M2QES_5"
import { A_19_217_G7C_AN1P2_6T } from "../imports/A_19_217_G7C_AN1P2_6T"
import { GRM1885C1H562JA01D } from "../imports/GRM1885C1H562JA01D"
import { PTV09A_4015F_B103 } from "../imports/PTV09A_4015F_B103"
import { A_0603B103K500NT } from "../imports/A_0603B103K500NT"
import { TLC555CDR } from "../imports/TLC555CDR"
import { B5819W_SL } from "../imports/B5819W_SL"

export function PwmControls() {
  return (
    <>
      {/* Hardware potentiometer PWM */}
      <TLC555CDR
        name="U6"
        pcbRotation={productPlacement.U6.ccwRotationDegrees}
        schSheetName="controls"
        schX={-11.0}
        schY={8}
        connections={{
          GND: "net.GND",
          TRIG: "net.TIMING",
          OUT: "net.PWM",
          RESET: "net.MOTOR_READY",
          CONT: "net.TIMER_CONT",
          THRES: "net.TIMING",
          DISCH: "net.WIPER",
          VDD: "net.VCC3V3",
        }}
      />
      {/* Bourns vertical 10 k linear speed pot */}
      <PTV09A_4015F_B103
        name="RV1"
        pcbRotation={productPlacement.RV1.ccwRotationDegrees}
        schSheetName="controls"
        schX={-5.5}
        schY={8}
        connections={{
          pin1: "net.POT_CHARGE",
          pin2: "net.WIPER",
          pin3: "net.POT_DISCHARGE",
          pin4: "net.GND",
          pin5: "net.GND",
        }}
      />
      <schematictext
        text="RV1 · 10 kOhm speed"
        schX={-4.7}
        schY={7.35}
        fontSize={0.15}
        anchor="bottom_left"
      />
      {/* Charge end resistance */}
      <A_0603WAF3300T5E
        name="R25"
        pcbRotation={productPlacement.R25.ccwRotationDegrees}
        schSheetName="controls"
        schX={0.0}
        schY={8}
        schRotation={-90.0}
        connections={{
          pin1: "net.VCC3V3",
          pin2: "net.WIPER",
        }}
      />
      {/* Steer charging through one pot segment */}
      <B5819W_SL
        name="D6"
        pcbRotation={productPlacement.D6.ccwRotationDegrees}
        schSheetName="controls"
        schX={5.5}
        schY={8}
        connections={{
          anode: "net.POT_CHARGE",
          cathode: "net.TIMING",
        }}
      />
      {/* Steer discharging through opposite segment */}
      <B5819W_SL
        name="D7"
        pcbRotation={productPlacement.D7.ccwRotationDegrees}
        schSheetName="controls"
        schX={11.0}
        schY={8}
        connections={{
          anode: "net.TIMING",
          cathode: "net.DISCHARGE_END",
        }}
      />
      {/* Discharge end resistance */}
      <A_0603WAF3300T5E
        name="R26"
        pcbRotation={productPlacement.R26.ccwRotationDegrees}
        schSheetName="controls"
        schX={-11.0}
        schY={4}
        connections={{
          pin1: "net.DISCHARGE_END",
          pin2: "net.POT_DISCHARGE",
        }}
      />
      {/* 5.6 nF C0G PWM timing */}
      <GRM1885C1H562JA01D
        name="C21"
        pcbRotation={productPlacement.C21.ccwRotationDegrees}
        schSheetName="controls"
        schX={-5.5}
        schY={4}
        schRotation={-90.0}
        connections={{
          pin1: "net.TIMING",
          pin2: "net.GND",
        }}
      />
      {/* Timer threshold bypass */}
      <A_0603B103K500NT
        name="C22"
        pcbRotation={productPlacement.C22.ccwRotationDegrees}
        schSheetName="controls"
        schX={0.0}
        schY={4}
        schRotation={-90.0}
        connections={{
          pin1: "net.TIMER_CONT",
          pin2: "net.GND",
        }}
      />
      {/* Timer local bypass */}
      <CC0603KRX7R9BB104
        name="C23"
        pcbRotation={productPlacement.C23.ccwRotationDegrees}
        schSheetName="controls"
        schX={5.5}
        schY={4}
        schRotation={-90.0}
        connections={{
          pin1: "net.VCC3V3",
          pin2: "net.GND",
        }}
      />
      {/* Manufacturer contact table: 2-3 / OPEN / 2-1; pin 2 is common. */}
      <A_1MS3T1B1M2QES_5
        name="SW1"
        pcbRotation={productPlacement.SW1.ccwRotationDegrees}
        schSheetName="controls"
        schX={11}
        schY={4}
        connections={{
          pin1: "net.IN1",
          pin2: "net.PWM",
          pin3: "net.IN2",
        }}
      />
      {/* LED current limit */}
      <A_0603WAF1001T5E
        name="R29"
        pcbRotation={productPlacement.R29.ccwRotationDegrees}
        schSheetName="controls"
        schX={11.0}
        schY={0}
        connections={{
          pin1: "net.IN1",
          pin2: "net.R29_LED",
        }}
      />
      {/* LED current limit */}
      <A_0603WAF1001T5E
        name="R30"
        pcbRotation={productPlacement.R30.ccwRotationDegrees}
        schSheetName="controls"
        schX={-11.0}
        schY={-4}
        connections={{
          pin1: "net.IN2",
          pin2: "net.R30_LED",
        }}
      />
      {/* Forward PWM indicator; brightness follows duty */}
      <A_19_217_G7C_AN1P2_6T
        name="LED2"
        pcbRotation={productPlacement.LED2.ccwRotationDegrees}
        schSheetName="controls"
        schX={-5.5}
        schY={-4}
        schRotation={-90.0}
        connections={{
          anode: "net.R29_LED",
          cathode: "net.GND",
        }}
      />
      {/* Reverse PWM indicator; brightness follows duty */}
      <A_19_217_G7C_AN1P2_6T
        name="LED3"
        pcbRotation={productPlacement.LED3.ccwRotationDegrees}
        schSheetName="controls"
        schX={0.0}
        schY={-4}
        schRotation={-90.0}
        connections={{
          anode: "net.R30_LED",
          cathode: "net.GND",
        }}
      />
    </>
  )
}
