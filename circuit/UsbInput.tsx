import { SMBJ22A } from "../imports/SMBJ22A"
import { CC0603KRX7R9BB104 } from "../imports/CC0603KRX7R9BB104"
import { TYPE_C_31_M_12 } from "../imports/TYPE_C_31_M_12"
import { TPS7A1633DGNR } from "../imports/TPS7A1633DGNR"
import { CL10A475KO8NNNC } from "../imports/CL10A475KO8NNNC"
import { BZT52C24 } from "../imports/BZT52C24"
import { A_0603WAF1001T5E } from "../imports/A_0603WAF1001T5E"
import { A_0603WAF1003T5E } from "../imports/A_0603WAF1003T5E"
import { STUSB4500QTR } from "../imports/STUSB4500QTR"
import { TPS7A1650DGNR } from "../imports/TPS7A1650DGNR"
import { PESD24VS2UT_215 } from "../imports/PESD24VS2UT_215"
import { GRM21BR71H105KA12L } from "../imports/GRM21BR71H105KA12L"
import { A_0603WAF4701T5E } from "../imports/A_0603WAF4701T5E"

export function UsbInput() {
  return (
    <>
      {/* Single USB-C power input */}
      <TYPE_C_31_M_12
        name="J1"
        schSheetName="usb"
        schX={-11.0}
        schY={8}
        noConnect={["pin5", "pin7", "pin8", "pin9", "pin10", "pin11"]}
        connections={{
          pin1: "net.GND",
          pin2: "net.GND",
          pin3: "net.GND",
          pin4: "net.GND",
          pin6: "net.CC1",
          pin12: "net.CC2",
          pin13: "net.GND",
          pin14: "net.GND",
          pin15: "net.VBUS",
          pin16: "net.VBUS",
        }}
      />
      {/* Autonomous PD sink; NVM provisioning mandatory */}
      <STUSB4500QTR
        name="U1"
        schSheetName="usb"
        schX={-5.5}
        schY={8}
        noConnect={[
          "pin3",
          "pin9",
          "pin11",
          "pin14",
          "pin15",
          "pin17",

          "pin20",
        ]}
        connections={{
          pin1: "net.CC1",
          pin2: "net.CC1",
          pin4: "net.CC2",
          pin5: "net.CC2",
          pin6: "net.PD_RESET",
          pin7: "net.SCL",
          pin8: "net.SDA",
          pin10: "net.GND",
          pin12: "net.GND",
          pin13: "net.GND",
          pin16: "net.PD_ENABLE_N",
          pin18: "net.VBUS_SENSE",
          pin19: "net.PD_ALERT_N",
          pin21: "net.VREG_1V2",
          pin22: "net.GND",
          pin23: "net.VREG_2V7",
          pin24: "net.VDD5",
          pin25: "net.GND",
        }}
      />
      {/* 60 V rated 5 V PD/monitor supply */}
      <TPS7A1650DGNR
        name="U2"
        schSheetName="usb"
        schX={0.0}
        schY={8}
        noConnect={["pin2", "pin3", "pin6", "pin7"]}
        connections={{
          pin1: "net.VDD5",
          pin4: "net.GND",
          pin5: "net.VBUS",
          pin8: "net.VBUS",
          pin9: "net.GND",
        }}
      />
      {/* 60 V rated logic supply */}
      <TPS7A1633DGNR
        name="U3"
        schSheetName="usb"
        schX={5.5}
        schY={8}
        noConnect={["pin2", "pin3", "pin6", "pin7"]}
        connections={{
          pin1: "net.VCC3V3",
          pin4: "net.GND",
          pin5: "net.VBUS",
          pin8: "net.VBUS",
          pin9: "net.GND",
        }}
      />
      {/* 22 V standoff input TVS; main ICs rated 60 V */}
      <SMBJ22A
        name="D1"
        schSheetName="usb"
        schX={11.0}
        schY={8}
        schRotation={-90.0}
        connections={{
          K: "net.VBUS",
          A: "net.GND",
        }}
      />
      <schematictext
        text="D1 · SMBJ22A"
        schX={11.8}
        schY={7.35}
        fontSize={0.15}
        anchor="bottom_left"
      />
      {/* Dual CC ESD protection */}
      <PESD24VS2UT_215
        name="D2"
        schSheetName="usb"
        schX={-11.0}
        schY={4}
        connections={{
          pin1: "net.CC1",
          pin2: "net.CC2",
          pin3: "net.GND",
        }}
      />
      <schematictext
        text="D2 · PESD24VS2UT"
        schX={-10.2}
        schY={3.35}
        fontSize={0.15}
        anchor="bottom_left"
      />
      {/* VBUS sense/discharge current limiting */}
      <A_0603WAF1001T5E
        name="R1"
        schSheetName="usb"
        schX={-5.5}
        schY={4}
        schRotation={-90.0}
        connections={{
          pin1: "net.VBUS",
          pin2: "net.VBUS_SENSE",
        }}
      />
      {/* 24 V local PD-sense transient clamp */}
      <BZT52C24
        name="D3"
        schSheetName="usb"
        schX={0.0}
        schY={4}
        schRotation={90.0}
        connections={{
          cathode: "net.VBUS_SENSE",
          anode: "net.GND",
        }}
      />
      {/* Connector bulk, 1 uF/50 V */}
      <GRM21BR71H105KA12L
        name="C1"
        schSheetName="usb"
        schX={-9}
        schY={0}
        schRotation={-90.0}
        connections={{
          pin1: "net.VBUS",
          pin2: "net.GND",
        }}
      />
      {/* U2 input bypass */}
      <CC0603KRX7R9BB104
        name="C2"
        schSheetName="usb"
        schX={-7}
        schY={0}
        schRotation={-90.0}
        connections={{
          pin1: "net.VBUS",
          pin2: "net.GND",
        }}
      />
      {/* U3 input bypass */}
      <CC0603KRX7R9BB104
        name="C3"
        schSheetName="usb"
        schX={-5}
        schY={0}
        schRotation={-90.0}
        connections={{
          pin1: "net.VBUS",
          pin2: "net.GND",
        }}
      />
      {/* 5 V LDO stability */}
      <CL10A475KO8NNNC
        name="C4"
        schSheetName="usb"
        schX={-2}
        schY={0}
        schRotation={-90.0}
        connections={{
          pin1: "net.VDD5",
          pin2: "net.GND",
        }}
      />
      {/* 3.3 V LDO stability */}
      <CL10A475KO8NNNC
        name="C5"
        schSheetName="usb"
        schX={3}
        schY={0}
        schRotation={-90.0}
        connections={{
          pin1: "net.VCC3V3",
          pin2: "net.GND",
        }}
      />
      {/* PD internal regulator bypass */}
      <GRM21BR71H105KA12L
        name="C6"
        schSheetName="usb"
        schX={5.5}
        schY={0}
        schRotation={-90.0}
        connections={{
          pin1: "net.VREG_1V2",
          pin2: "net.GND",
        }}
      />
      {/* PD internal regulator bypass */}
      <GRM21BR71H105KA12L
        name="C7"
        schSheetName="usb"
        schX={11.0}
        schY={0}
        schRotation={-90.0}
        connections={{
          pin1: "net.VREG_2V7",
          pin2: "net.GND",
        }}
      />
      {/* PD local decoupling */}
      <CC0603KRX7R9BB104
        name="C8"
        schSheetName="usb"
        schX={0}
        schY={0}
        schRotation={-90.0}
        connections={{
          pin1: "net.VDD5",
          pin2: "net.GND",
        }}
      />
      {/* I2C pull-up */}
      <A_0603WAF4701T5E
        name="R2"
        schSheetName="usb"
        schX={-5.5}
        schY={-4}
        schRotation={-90.0}
        connections={{
          pin1: "net.VCC3V3",
          pin2: "net.SCL",
        }}
      />
      {/* I2C pull-up */}
      <A_0603WAF4701T5E
        name="R3"
        schSheetName="usb"
        schX={0.0}
        schY={-4}
        schRotation={-90.0}
        connections={{
          pin1: "net.VCC3V3",
          pin2: "net.SDA",
        }}
      />
      {/* Default run/reset low */}
      <A_0603WAF1003T5E
        name="R4"
        schSheetName="usb"
        schX={5.5}
        schY={-4}
        schRotation={-90.0}
        connections={{
          pin1: "net.PD_RESET",
          pin2: "net.GND",
        }}
      />
    </>
  )
}
