import { productPlacement } from "./product-placement"
import { CC0603KRX7R9BB104 } from "../imports/CC0603KRX7R9BB104"
import { TPS16630PWPR } from "../imports/TPS16630PWPR"
import { CL10B223KB8NNNC } from "../imports/CL10B223KB8NNNC"
import { SS54 } from "../imports/SS54"
import { A_0603WAF1623T5E } from "../imports/A_0603WAF1623T5E"
import { A_0603WAF6981T5E } from "../imports/A_0603WAF6981T5E"
import { A_0603WAF1003T5E } from "../imports/A_0603WAF1003T5E"
import { A_0603WAF2002T5E } from "../imports/A_0603WAF2002T5E"
import { MMBT3904 } from "../imports/MMBT3904"
import { GRM21BR71H105KA12L } from "../imports/GRM21BR71H105KA12L"
import { A_0603WAF4701T5E } from "../imports/A_0603WAF4701T5E"
import { CRCW060310K0FKEA } from "../imports/CRCW060310K0FKEA"

export function InputProtection() {
  return (
    <>
      {/* 5 A/40 V reverse-current blocking diode */}
      <SS54
        name="D4"
        pcbRotation={productPlacement.D4.ccwRotationDegrees}
        schSheetName="input"
        schX={-11.0}
        schY={8}
        connections={{
          anode: "net.VBUS",
          cathode: "net.EFUSE_IN",
        }}
      />
      {/* Input inrush, overload latch-off and UV/OV cut-off */}
      <TPS16630PWPR
        name="U4"
        pcbRotation={productPlacement.U4.ccwRotationDegrees}
        schSheetName="input"
        schX={-5.5}
        schY={8}
        noConnect={["pin4", "pin5", "pin12", "pin14", "pin15", "pin17"]}
        connections={{
          pin1: "net.EFUSE_IN",
          pin2: "net.EFUSE_IN",
          pin3: "net.EFUSE_IN",
          pin6: "net.EFUSE_IN",
          pin7: "net.INPUT_UV",
          pin8: "net.INPUT_OV",
          pin9: "net.GND",
          pin10: "net.SLEW",
          pin11: "net.INPUT_ILIM",
          pin13: "net.POWER_ENABLE",
          pin16: "net.INPUT_PG",
          pin18: "net.VIN_BUCK",
          pin19: "net.VIN_BUCK",
          pin20: "net.VIN_BUCK",
          pin21: "net.GND",
        }}
      />
      {/* Invert active-low PD enable; default inhibits motor path */}
      <MMBT3904
        name="Q1"
        pcbRotation={productPlacement.Q1.ccwRotationDegrees}
        schSheetName="input"
        schX={0.0}
        schY={8}
        connections={{
          B: "net.PD_INHIBIT",
          E: "net.GND",
          C: "net.POWER_ENABLE",
        }}
      />
      <schematictext
        text="Q1 · MMBT3904"
        schX={0.8}
        schY={7.35}
        fontSize={0.15}
        anchor="bottom_left"
      />
      {/* Default disable for PD output high impedance */}
      <A_0603WAF4701T5E
        name="R5"
        pcbRotation={productPlacement.R5.ccwRotationDegrees}
        schSheetName="input"
        schX={5.5}
        schY={8}
        schRotation={-90.0}
        connections={{
          pin1: "net.VCC3V3",
          pin2: "net.PD_ENABLE_N",
        }}
      />
      {/* NPN base-current limit */}
      <A_0603WAF2002T5E
        name="R6"
        pcbRotation={productPlacement.R6.ccwRotationDegrees}
        schSheetName="input"
        schX={11.0}
        schY={8}
        connections={{
          pin1: "net.PD_ENABLE_N",
          pin2: "net.PD_INHIBIT",
        }}
      />
      {/* eFuse enable pull-up */}
      <CRCW060310K0FKEA
        name="R7"
        pcbRotation={productPlacement.R7.ccwRotationDegrees}
        schSheetName="input"
        schX={-11.0}
        schY={4}
        schRotation={-90.0}
        connections={{
          pin1: "net.HOST_ALLOW",
          pin2: "net.POWER_ENABLE",
        }}
      />
      {/* 13.2 V input UV threshold top */}
      <A_0603WAF1003T5E
        name="R8"
        pcbRotation={productPlacement.R8.ccwRotationDegrees}
        schSheetName="input"
        schX={-5.5}
        schY={4}
        schRotation={-90.0}
        connections={{
          pin1: "net.EFUSE_IN",
          pin2: "net.INPUT_UV",
        }}
      />
      {/* Input UV threshold bottom */}
      <CRCW060310K0FKEA
        name="R9"
        pcbRotation={productPlacement.R9.ccwRotationDegrees}
        schSheetName="input"
        schX={0.0}
        schY={4}
        schRotation={-90.0}
        connections={{
          pin1: "net.INPUT_UV",
          pin2: "net.GND",
        }}
      />
      {/* OV divider top segment */}
      <A_0603WAF1623T5E
        name="R10"
        pcbRotation={productPlacement.R10.ccwRotationDegrees}
        schSheetName="input"
        schX={5.5}
        schY={4}
        schRotation={-90.0}
        connections={{
          pin1: "net.EFUSE_IN",
          pin2: "net.INPUT_OV_TOP",
        }}
      />
      {/* 23.04 V OV threshold top segment */}
      <A_0603WAF2002T5E
        name="R11"
        pcbRotation={productPlacement.R11.ccwRotationDegrees}
        schSheetName="input"
        schX={11.0}
        schY={4}
        connections={{
          pin1: "net.INPUT_OV_TOP",
          pin2: "net.INPUT_OV",
        }}
      />
      {/* OV divider bottom */}
      <CRCW060310K0FKEA
        name="R12"
        pcbRotation={productPlacement.R12.ccwRotationDegrees}
        schSheetName="input"
        schX={-11.0}
        schY={0}
        schRotation={-90.0}
        connections={{
          pin1: "net.INPUT_OV",
          pin2: "net.GND",
        }}
      />
      {/* 2.52 A nominal input current limit */}
      <A_0603WAF6981T5E
        name="R13"
        pcbRotation={productPlacement.R13.ccwRotationDegrees}
        schSheetName="input"
        schX={-5.5}
        schY={0}
        schRotation={-90.0}
        connections={{
          pin1: "net.INPUT_ILIM",
          pin2: "net.GND",
        }}
      />
      {/* PG open-drain pull-up */}
      <CRCW060310K0FKEA
        name="R16"
        pcbRotation={productPlacement.R16.ccwRotationDegrees}
        schSheetName="input"
        schX={0.0}
        schY={0}
        schRotation={-90.0}
        connections={{
          pin1: "net.VCC3V3",
          pin2: "net.INPUT_PG",
        }}
      />
      {/* 22 nF inrush slew control */}
      <CL10B223KB8NNNC
        name="C9"
        pcbRotation={productPlacement.C9.ccwRotationDegrees}
        schSheetName="input"
        schX={5.5}
        schY={0}
        schRotation={-90.0}
        connections={{
          pin1: "net.SLEW",
          pin2: "net.GND",
        }}
      />
      {/* eFuse local input bypass */}
      <CC0603KRX7R9BB104
        name="C10"
        pcbRotation={productPlacement.C10.ccwRotationDegrees}
        schSheetName="input"
        schX={11.0}
        schY={0}
        schRotation={-90.0}
        connections={{
          pin1: "net.EFUSE_IN",
          pin2: "net.GND",
        }}
      />
      {/* Protected input bulk */}
      <GRM21BR71H105KA12L
        name="C11"
        pcbRotation={productPlacement.C11.ccwRotationDegrees}
        schSheetName="input"
        schX={-11.0}
        schY={-4}
        schRotation={-90.0}
        connections={{
          pin1: "net.VIN_BUCK",
          pin2: "net.GND",
        }}
      />
    </>
  )
}
