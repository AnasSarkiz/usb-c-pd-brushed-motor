import { productPlacement } from "./product-placement"
import { AO3400A } from "../imports/AO3400A"
import { BZT52C10 } from "../imports/BZT52C10"
import { A_0603WAF1001T5E } from "../imports/A_0603WAF1001T5E"
import { RPL_12K10R0FT } from "../imports/RPL_12K10R0FT"
import { MMBT3906LT1G } from "../imports/MMBT3906LT1G"
import { MMBT3904 } from "../imports/MMBT3904"
import { CRCW060310K0FKEA } from "../imports/CRCW060310K0FKEA"

export function EnergyDump() {
  return (
    <>
      {/* Dump MOSFET gate driver */}
      <MMBT3906LT1G
        name="Q2"
        pcbRotation={productPlacement.Q2.ccwRotationDegrees}
        schSheetName="dump"
        schX={-11.0}
        schY={8}
        connections={{
          B: "net.DUMP_BASE",
          E: "net.VM",
          C: "net.DUMP_DRIVE",
        }}
      />
      <schematictext
        text="Q2 · MMBT3906"
        schX={-10.2}
        schY={7.35}
        fontSize={0.15}
        anchor="bottom_left"
      />
      {/* PNP default off */}
      <CRCW060310K0FKEA
        name="R41"
        pcbRotation={productPlacement.R41.ccwRotationDegrees}
        schSheetName="dump"
        schX={-5.5}
        schY={8}
        schRotation={-90.0}
        connections={{
          pin1: "net.VM",
          pin2: "net.DUMP_BASE",
        }}
      />
      {/* Comparator sink-current limit */}
      <CRCW060310K0FKEA
        name="R42"
        pcbRotation={productPlacement.R42.ccwRotationDegrees}
        schSheetName="dump"
        schX={0.0}
        schY={8}
        connections={{
          pin1: "net.DUMP_BASE",
          pin2: "net.OV_ACTIVE_N",
        }}
      />
      {/* Dump gate slew and zener-current limit */}
      <A_0603WAF1001T5E
        name="R43"
        pcbRotation={productPlacement.R43.ccwRotationDegrees}
        schSheetName="dump"
        schX={5.5}
        schY={8}
        connections={{
          pin1: "net.DUMP_DRIVE",
          pin2: "net.DUMP_GATE",
        }}
      />
      {/* Dump gate default low */}
      <CRCW060310K0FKEA
        name="R44"
        pcbRotation={productPlacement.R44.ccwRotationDegrees}
        schSheetName="dump"
        schX={11.0}
        schY={8}
        schRotation={-90.0}
        connections={{
          pin1: "net.DUMP_GATE",
          pin2: "net.GND",
        }}
      />
      {/* 10 V gate protection */}
      <BZT52C10
        name="D9"
        pcbRotation={productPlacement.D9.ccwRotationDegrees}
        schSheetName="dump"
        schX={-11.0}
        schY={4}
        schRotation={90.0}
        connections={{
          cathode: "net.DUMP_GATE",
          anode: "net.GND",
        }}
      />
      {/* Switched regenerative energy dump */}
      <AO3400A
        name="Q3"
        pcbRotation={productPlacement.Q3.ccwRotationDegrees}
        schSheetName="dump"
        schX={-5.5}
        schY={4}
        connections={{
          G: "net.DUMP_GATE",
          S: "net.GND",
          D: "net.DUMP_LOAD",
        }}
      />
      <schematictext
        text="Q3 · AO3400A"
        schX={-4.6}
        schY={3.35}
        fontSize={0.15}
        anchor="bottom_left"
      />
      {/* 10 ohm/2 W; four 20 ohm parallel branches */}
      <RPL_12K10R0FT
        name="R45"
        pcbRotation={productPlacement.R45.ccwRotationDegrees}
        schSheetName="dump"
        schX={0.0}
        schY={4}
        schRotation={-90.0}
        connections={{
          pin1: "net.VM",
          pin2: "net.DUMP_MID_A",
        }}
      />
      {/* 10 ohm/2 W; four 20 ohm parallel branches */}
      <RPL_12K10R0FT
        name="R46"
        pcbRotation={productPlacement.R46.ccwRotationDegrees}
        schSheetName="dump"
        schX={5.5}
        schY={4}
        schRotation={-90}
        connections={{
          pin1: "net.DUMP_MID_A",
          pin2: "net.DUMP_LOAD",
        }}
      />
      {/* 10 ohm/2 W; four 20 ohm parallel branches */}
      <RPL_12K10R0FT
        name="R47"
        pcbRotation={productPlacement.R47.ccwRotationDegrees}
        schSheetName="dump"
        schX={11.0}
        schY={4}
        schRotation={-90.0}
        connections={{
          pin1: "net.VM",
          pin2: "net.DUMP_MID_B",
        }}
      />
      {/* 10 ohm/2 W; four 20 ohm parallel branches */}
      <RPL_12K10R0FT
        name="R48"
        pcbRotation={productPlacement.R48.ccwRotationDegrees}
        schSheetName="dump"
        schX={-11.0}
        schY={0}
        schRotation={-90}
        connections={{
          pin1: "net.DUMP_MID_B",
          pin2: "net.DUMP_LOAD",
        }}
      />
      {/* 10 ohm/2 W; four 20 ohm parallel dump branches */}
      <RPL_12K10R0FT
        name="R69"
        pcbRotation={productPlacement.R69.ccwRotationDegrees}
        schSheetName="dump"
        schX={-11}
        schY={-4}
        schRotation={-90}
        connections={{ pin1: "net.VM", pin2: "net.DUMP_MID_C" }}
      />
      {/* 10 ohm/2 W; four 20 ohm parallel dump branches */}
      <RPL_12K10R0FT
        name="R70"
        pcbRotation={productPlacement.R70.ccwRotationDegrees}
        schSheetName="dump"
        schX={-5.5}
        schY={-4}
        schRotation={-90}
        connections={{ pin1: "net.DUMP_MID_C", pin2: "net.DUMP_LOAD" }}
      />
      {/* 10 ohm/2 W; four 20 ohm parallel dump branches */}
      <RPL_12K10R0FT
        name="R71"
        pcbRotation={productPlacement.R71.ccwRotationDegrees}
        schSheetName="dump"
        schX={0}
        schY={-4}
        schRotation={-90}
        connections={{ pin1: "net.VM", pin2: "net.DUMP_MID_D" }}
      />
      {/* 10 ohm/2 W; four 20 ohm parallel dump branches */}
      <RPL_12K10R0FT
        name="R72"
        pcbRotation={productPlacement.R72.ccwRotationDegrees}
        schSheetName="dump"
        schX={5.5}
        schY={-4}
        schRotation={-90}
        connections={{ pin1: "net.DUMP_MID_D", pin2: "net.DUMP_LOAD" }}
      />
      {/* Disable bridge while energy clamp conducts */}
      <MMBT3904
        name="Q4"
        pcbRotation={productPlacement.Q4.ccwRotationDegrees}
        schSheetName="dump"
        schX={-5.5}
        schY={0}
        connections={{
          B: "net.OV_INHIBIT",
          E: "net.GND",
          C: "net.MOTOR_READY",
        }}
      />
      <schematictext
        text="Q4 · MMBT3904"
        schX={-4.6}
        schY={-0.65}
        fontSize={0.15}
        anchor="bottom_left"
      />
      {/* OV inhibit base-current limit */}
      <CRCW060310K0FKEA
        name="R49"
        pcbRotation={productPlacement.R49.ccwRotationDegrees}
        schSheetName="dump"
        schX={0.0}
        schY={0}
        connections={{
          pin1: "net.DUMP_GATE",
          pin2: "net.OV_INHIBIT",
        }}
      />
      {/* Disable buck during motor overvoltage */}
      <MMBT3904
        name="Q5"
        pcbRotation={productPlacement.Q5.ccwRotationDegrees}
        schSheetName="dump"
        schX={5.5}
        schY={0}
        connections={{
          B: "net.OV_INHIBIT",
          E: "net.GND",
          C: "net.BUCK_EN",
        }}
      />
      <schematictext
        text="Q5 · MMBT3904"
        schX={6.3}
        schY={-0.65}
        fontSize={0.15}
        anchor="bottom_left"
      />
    </>
  )
}
