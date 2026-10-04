import { productPlacement } from "./product-placement"
import { ESR18EZPF1001 } from "../imports/ESR18EZPF1001"
import { CC0603KRX7R9BB104 } from "../imports/CC0603KRX7R9BB104"
import { CL10C220JB8NNNC } from "../imports/CL10C220JB8NNNC"
import { CL10B223KB8NNNC } from "../imports/CL10B223KB8NNNC"
import { SS54 } from "../imports/SS54"
import { A_0603WAF1202T5E } from "../imports/A_0603WAF1202T5E"
import { A_0603WAF1623T5E } from "../imports/A_0603WAF1623T5E"
import { A_0603WAF2102T5E } from "../imports/A_0603WAF2102T5E"
import { A_0603WAF2702T5E } from "../imports/A_0603WAF2702T5E"
import { A_0603WAF5101T5E } from "../imports/A_0603WAF5101T5E"
import { A_0603WAF1003T5E } from "../imports/A_0603WAF1003T5E"
import { MHCC10040_8R2M_R7 } from "../imports/MHCC10040_8R2M_R7"
import { A_35SVPK330M } from "../imports/A_35SVPK330M"
import { GRM31CR61E476ME44L } from "../imports/GRM31CR61E476ME44L"
import { A_0603WAF2002T5E } from "../imports/A_0603WAF2002T5E"
import { TPS54360DDAR } from "../imports/TPS54360DDAR"
import { CL32B106KBJNNNE } from "../imports/CL32B106KBJNNNE"
import { CRCW060310K0FKEA } from "../imports/CRCW060310K0FKEA"

export function MotorSupply() {
  return (
    <>
      {/* 60 V / 3.5 A buck regulator */}
      <TPS54360DDAR
        name="U5"
        pcbRotation={productPlacement.U5.ccwRotationDegrees}
        schSheetName="buck"
        schX={-11.0}
        schY={8}
        connections={{
          BOOT: "net.BOOT",
          VIN: "net.VIN_BUCK",
          EN: "net.BUCK_EN",
          pin4: "net.RT",
          FB: "net.MOTOR_FB",
          COMP: "net.COMP",
          GND: "net.GND",
          SW: "net.SWITCH_NODE",
          EP: "net.GND",
        }}
      />
      {/* 5 A catch rectifier */}
      <SS54
        name="D5"
        pcbRotation={productPlacement.D5.ccwRotationDegrees}
        schSheetName="buck"
        schX={-5.5}
        schY={8}
        schRotation={90.0}
        connections={{
          anode: "net.GND",
          cathode: "net.SWITCH_NODE",
        }}
      />
      {/* 8.2 uH power inductor */}
      <MHCC10040_8R2M_R7
        name="L1"
        pcbRotation={productPlacement.L1.ccwRotationDegrees}
        schSheetName="buck"
        schX={0.0}
        schY={8}
        connections={{
          pin1: "net.SWITCH_NODE",
          pin2: "net.VM",
        }}
      />
      {/* Bootstrap capacitor */}
      <CC0603KRX7R9BB104
        name="C12"
        schRotation={90}
        pcbRotation={productPlacement.C12.ccwRotationDegrees}
        schSheetName="buck"
        schX={5.5}
        schY={8}
        connections={{
          pin1: "net.BOOT",
          pin2: "net.SWITCH_NODE",
        }}
      />
      {/* Buck input ceramic 1 */}
      <CL32B106KBJNNNE
        name="C13"
        pcbRotation={productPlacement.C13.ccwRotationDegrees}
        schSheetName="buck"
        schX={-8}
        schY={4}
        schRotation={-90.0}
        connections={{
          pin1: "net.VIN_BUCK",
          pin2: "net.GND",
        }}
      />
      {/* Buck input ceramic 2 */}
      <CL32B106KBJNNNE
        name="C14"
        pcbRotation={productPlacement.C14.ccwRotationDegrees}
        schSheetName="buck"
        schX={-6}
        schY={4}
        schRotation={-90.0}
        connections={{
          pin1: "net.VIN_BUCK",
          pin2: "net.GND",
        }}
      />
      {/* Buck HF input bypass */}
      <CC0603KRX7R9BB104
        name="C15"
        pcbRotation={productPlacement.C15.ccwRotationDegrees}
        schSheetName="buck"
        schX={-4}
        schY={4}
        schRotation={-90.0}
        connections={{
          pin1: "net.VIN_BUCK",
          pin2: "net.GND",
        }}
      />
      {/* 47 uF/25 V output ceramic 1 */}
      <GRM31CR61E476ME44L
        name="C16"
        pcbRotation={productPlacement.C16.ccwRotationDegrees}
        schSheetName="buck"
        schX={1}
        schY={4}
        schRotation={-90.0}
        connections={{
          pin1: "net.VM",
          pin2: "net.GND",
        }}
      />
      {/* 47 uF/25 V output ceramic 2 */}
      <GRM31CR61E476ME44L
        name="C17"
        pcbRotation={productPlacement.C17.ccwRotationDegrees}
        schSheetName="buck"
        schX={3}
        schY={4}
        schRotation={-90.0}
        connections={{
          pin1: "net.VM",
          pin2: "net.GND",
        }}
      />
      {/* 330 uF/35 V polymer bulk; compensation/thermal qualification pending */}
      <A_35SVPK330M
        name="C18"
        pcbRotation={productPlacement.C18.ccwRotationDegrees}
        schSheetName="buck"
        schX={5}
        schY={4}
        schRotation={-90.0}
        connections={{
          pin1: "net.VM",
          pin2: "net.GND",
        }}
      />
      {/* About 600 kHz switching frequency */}
      <A_0603WAF1623T5E
        name="R17"
        pcbRotation={productPlacement.R17.ccwRotationDegrees}
        schSheetName="buck"
        schX={-11.0}
        schY={0}
        schRotation={-90.0}
        connections={{
          pin1: "net.RT",
          pin2: "net.GND",
        }}
      />
      {/* 100 k feedback upper segment */}
      <A_0603WAF1003T5E
        name="R18"
        pcbRotation={productPlacement.R18.ccwRotationDegrees}
        schSheetName="buck"
        schX={-5.5}
        schY={0}
        schRotation={-90.0}
        connections={{
          pin1: "net.VM",
          pin2: "net.FB_TOP_MID",
        }}
      />
      {/* 5.1 k feedback upper segment; total 105.1 k */}
      <A_0603WAF5101T5E
        name="R55"
        pcbRotation={productPlacement.R55.ccwRotationDegrees}
        schSheetName="buck"
        schX={0.0}
        schY={0}
        connections={{
          pin1: "net.FB_TOP_MID",
          pin2: "net.MOTOR_FB",
        }}
      />
      {/* 20 k default lower: 5.004 V */}
      <A_0603WAF2002T5E
        name="R19"
        pcbRotation={productPlacement.R19.ccwRotationDegrees}
        schSheetName="buck"
        schX={5.5}
        schY={0}
        schRotation={-90.0}
        connections={{
          pin1: "net.MOTOR_FB",
          pin2: "net.GND",
        }}
      />
      {/* 21 k parallel lower: 9.008 V */}
      <A_0603WAF2102T5E
        name="R20"
        pcbRotation={productPlacement.R20.ccwRotationDegrees}
        schSheetName="buck"
        schX={11.0}
        schY={0}
        connections={{
          pin1: "net.MOTOR_FB",
          pin2: "net.SELECT_9",
        }}
      />
      {/* 12 k parallel lower: 12.011 V */}
      <A_0603WAF1202T5E
        name="R21"
        pcbRotation={productPlacement.R21.ccwRotationDegrees}
        schSheetName="buck"
        schX={-11.0}
        schY={-4}
        connections={{
          pin1: "net.MOTOR_FB",
          pin2: "net.SELECT_12",
        }}
      />
      {/* 27 k type-II compensation */}
      <A_0603WAF2702T5E
        name="R22"
        pcbRotation={productPlacement.R22.ccwRotationDegrees}
        schSheetName="buck"
        schX={-5.5}
        schY={-4}
        connections={{
          pin1: "net.COMP",
          pin2: "net.COMP_ZERO",
        }}
      />
      {/* 22 nF compensation zero */}
      <CL10B223KB8NNNC
        name="C19"
        pcbRotation={productPlacement.C19.ccwRotationDegrees}
        schSheetName="buck"
        schX={0.0}
        schY={-4}
        schRotation={-90.0}
        connections={{
          pin1: "net.COMP_ZERO",
          pin2: "net.GND",
        }}
      />
      {/* 22 pF HF compensation pole */}
      <CL10C220JB8NNNC
        name="C20"
        pcbRotation={productPlacement.C20.ccwRotationDegrees}
        schSheetName="buck"
        schX={5.5}
        schY={-4}
        schRotation={-90.0}
        connections={{
          pin1: "net.COMP",
          pin2: "net.GND",
        }}
      />
      {/* Enable isolation resistor */}
      <CRCW060310K0FKEA
        name="R23"
        pcbRotation={productPlacement.R23.ccwRotationDegrees}
        schSheetName="buck"
        schX={11.0}
        schY={-4}
        connections={{
          pin1: "net.INPUT_PG",
          pin2: "net.BUCK_EN",
        }}
      />
      {/* Defined motor-rail discharge, independent of motor/IC load */}
      <ESR18EZPF1001
        name="R68"
        pcbRotation={productPlacement.R68.ccwRotationDegrees}
        schSheetName="buck"
        schX={-5.5}
        schY={-8}
        schRotation={-90}
        connections={{ pin1: "net.VM", pin2: "net.GND" }}
      />
      {/* Default buck disabled */}
      <A_0603WAF1003T5E
        name="R24"
        pcbRotation={productPlacement.R24.ccwRotationDegrees}
        schSheetName="buck"
        schX={-11.0}
        schY={-8}
        schRotation={-90.0}
        connections={{
          pin1: "net.BUCK_EN",
          pin2: "net.GND",
        }}
      />
    </>
  )
}
