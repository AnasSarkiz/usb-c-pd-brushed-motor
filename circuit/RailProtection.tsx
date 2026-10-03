import { CC0603KRX7R9BB104 } from "../imports/CC0603KRX7R9BB104"
import { A_0603WAF2001T5E } from "../imports/A_0603WAF2001T5E"
import { A_0603WAF1001T5E } from "../imports/A_0603WAF1001T5E"
import { A_0603WAF1004T5E } from "../imports/A_0603WAF1004T5E"
import { A_0603WAF2432T5E } from "../imports/A_0603WAF2432T5E"
import { TL431AIDBZR } from "../imports/TL431AIDBZR"
import { A_0603WAF2002T5E } from "../imports/A_0603WAF2002T5E"
import { LM393DR } from "../imports/LM393DR"
import { CRCW060310K0FKEA } from "../imports/CRCW060310K0FKEA"
import { B5819W_SL } from "../imports/B5819W_SL"

export function RailProtection() {
  return (
    <>
      {/* 2.495 V reference */}
      <TL431AIDBZR
        name="U8"
        schSheetName="protection"
        schX={-11.0}
        schY={8}
        connections={{
          CATHODE: "net.VREF2V5",
          REF: "net.VREF2V5",
          ANODE: "net.GND",
        }}
      />
      <schematictext
        text="U8 · TL431"
        schX={-10.2}
        schY={7.35}
        fontSize={0.15}
        anchor="bottom_left"
      />
      {/* Motor-rail-powered reference; remains alive after USB unplug */}
      <A_0603WAF2001T5E
        name="R31"
        schSheetName="protection"
        schX={-5.5}
        schY={8}
        schRotation={-90.0}
        connections={{
          pin1: "net.VM",
          pin2: "net.VREF2V5",
        }}
      />
      {/* Undervoltage motor disable and independent overvoltage dump */}
      <LM393DR
        name="U9"
        schSheetName="protection"
        schX={0.0}
        schY={8}
        connections={{
          "1OUT": "net.MOTOR_READY",
          "1IN_NEG": "net.UV_REF",
          "1IN_POS": "net.MOTOR_FB",
          GND: "net.GND",
          "2IN_POS": "net.OV_REF",
          "2IN_NEG": "net.MOTOR_FB",
          "2OUT": "net.OV_ACTIVE_N",
          VCC: "net.VM",
        }}
      />
      {/* 0.727 V undervoltage reference top */}
      <A_0603WAF2432T5E
        name="R32"
        schSheetName="protection"
        schX={5.5}
        schY={8}
        schRotation={-90.0}
        connections={{
          pin1: "net.VREF2V5",
          pin2: "net.UV_REF",
        }}
      />
      {/* Undervoltage reference bottom */}
      <CRCW060310K0FKEA
        name="R33"
        schSheetName="protection"
        schX={11.0}
        schY={8}
        schRotation={-90.0}
        connections={{
          pin1: "net.UV_REF",
          pin2: "net.GND",
        }}
      />
      {/* Motor readiness open-drain pull-up */}
      <A_0603WAF1001T5E
        name="R34"
        schSheetName="protection"
        schX={-11.0}
        schY={4}
        schRotation={-90.0}
        connections={{
          pin1: "net.VCC3V3",
          pin2: "net.MOTOR_READY",
        }}
      />
      {/* Input-PG interlock on motor readiness */}
      <B5819W_SL
        name="D8"
        schSheetName="protection"
        schX={-5.5}
        schY={4}
        connections={{
          anode: "net.MOTOR_READY",
          cathode: "net.INPUT_PG",
        }}
      />
      {/* OV hysteresis reference isolation */}
      <A_0603WAF2002T5E
        name="R39"
        schSheetName="protection"
        schX={-5.5}
        schY={0}
        schRotation={-90.0}
        connections={{
          pin1: "net.VREF2V5",
          pin2: "net.OV_REF",
        }}
      />
      {/* OV reference divider lower; about 0.83 V before hysteresis */}
      <CRCW060310K0FKEA
        name="R65"
        schSheetName="protection"
        schX={5.5}
        schY={4}
        connections={{ pin1: "net.OV_REF", pin2: "net.GND" }}
      />
      {/* OV hysteresis feedback */}
      <A_0603WAF1004T5E
        name="R40"
        schSheetName="protection"
        schX={0.0}
        schY={0}
        connections={{
          pin1: "net.OV_ACTIVE_N",
          pin2: "net.OV_REF",
        }}
      />
      {/* Monitor local bypass */}
      <CC0603KRX7R9BB104
        name="C25"
        schSheetName="protection"
        schX={5.5}
        schY={0}
        schRotation={-90.0}
        connections={{
          pin1: "net.VM",
          pin2: "net.GND",
        }}
      />
    </>
  )
}
