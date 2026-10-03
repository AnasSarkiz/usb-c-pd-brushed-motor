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
import { RVT1E221M0607 } from "../imports/RVT1E221M0607"
import { GRM31CR61E476ME44L } from "../imports/GRM31CR61E476ME44L"
import { A_0603WAF2002T5E } from "../imports/A_0603WAF2002T5E"
import { TPS54360DDAR } from "../imports/TPS54360DDAR"
import { GRM21BR71H105KA12L } from "../imports/GRM21BR71H105KA12L"
import { CRCW060310K0FKEA } from "../imports/CRCW060310K0FKEA"

export function MotorSupply() {
  return (
    <>
      {/* 60 V / 3.5 A buck regulator */}
      <TPS54360DDAR
        name="U5"
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
        schSheetName="buck"
        schX={5.5}
        schY={8}
        connections={{
          pin1: "net.BOOT",
          pin2: "net.SWITCH_NODE",
        }}
      />
      {/* Buck input ceramic 1 */}
      <GRM21BR71H105KA12L
        name="C13"
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
      <GRM21BR71H105KA12L
        name="C14"
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
        schSheetName="buck"
        schX={3}
        schY={4}
        schRotation={-90.0}
        connections={{
          pin1: "net.VM",
          pin2: "net.GND",
        }}
      />
      {/* 220 uF/25 V motor bulk */}
      <RVT1E221M0607
        name="C18"
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
        schSheetName="buck"
        schX={11.0}
        schY={-4}
        connections={{
          pin1: "net.INPUT_PG",
          pin2: "net.BUCK_EN",
        }}
      />
      {/* Default buck disabled */}
      <A_0603WAF1003T5E
        name="R24"
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
