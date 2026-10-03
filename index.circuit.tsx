import { PdQualification } from "./circuit/PdQualification"
import { UsbInput } from "./circuit/UsbInput"
import { InputProtection } from "./circuit/InputProtection"
import { MotorSupply } from "./circuit/MotorSupply"
import { PwmControls } from "./circuit/PwmControls"
import { RailProtection } from "./circuit/RailProtection"
import { EnergyDump } from "./circuit/EnergyDump"
import { MotorBridge } from "./circuit/MotorBridge"

export default function UsbCPdBrushedMotorController() {
  return (
    <board
      width="65mm"
      height="50mm"
      thickness="1.6mm"
      layers={2}
      routingDisabled
      isViaInPadAllowed={true}
      autorouter={{ allowViaInPad: false }}
      schLayout={{ layoutMode: "relative" }}
    >
      <net name="GND" isGroundNet />
      <net name="VBUS" isPowerNet nominalTraceWidth="2mm" />
      <net name="VDD5" isPowerNet />
      <net name="VCC3V3" isPowerNet />
      <net name="EFUSE_IN" isPowerNet nominalTraceWidth="2mm" />
      <net name="VIN_BUCK" isPowerNet nominalTraceWidth="2mm" />
      <net name="VM" isPowerNet nominalTraceWidth="2mm" />
      <net name="MOTOR_P" nominalTraceWidth="2mm" />
      <net name="MOTOR_N" nominalTraceWidth="2mm" />
      <schematicsheet
        name="usb"
        displayName="USB-C PD and quiet supplies · A10"
        sheetSize="A4"
        sheetIndex={1}
      >
        <schematictext
          text="A10 PROTOTYPE | USB-C PD and quiet supplies · A10 | 1/8"
          schX={0}
          schY={10.2}
          fontSize={0.3}
        />
        <schematictext
          text="DRAFT — schematic validation incomplete — routing disabled"
          schX={0}
          schY={-9.5}
          fontSize={0.2}
        />
        <UsbInput />
      </schematicsheet>
      <schematicsheet
        name="pdhost"
        displayName="PD power qualification and voltage selection · A10"
        sheetSize="A4"
        sheetIndex={8}
      >
        <schematictext
          text="A10 PROTOTYPE | PD qualification / voltage selection | 8/8"
          schY={10.2}
          fontSize={0.3}
        />
        <schematictext
          text="SW2: both OFF = 5 V; 9 ON = 9 V; 12 ON = 12 V; both ON = INHIBIT"
          schY={-10}
          fontSize={0.2}
        />
        <PdQualification />
      </schematicsheet>
      <schematicsheet
        name="input"
        displayName="Contract-controlled input protection · A10"
        sheetSize="A4"
        sheetIndex={2}
      >
        <schematictext
          text="A10 PROTOTYPE | Contract-controlled input protection · A10 | 2/8"
          schX={0}
          schY={10.2}
          fontSize={0.3}
        />
        <schematictext
          text="DRAFT — schematic validation incomplete — routing disabled"
          schX={0}
          schY={-9.5}
          fontSize={0.2}
        />
        <InputProtection />
      </schematicsheet>
      <schematicsheet
        name="buck"
        displayName="Regulated 5 / 9 / 12 V motor supply · A10"
        sheetSize="A4"
        sheetIndex={3}
      >
        <schematictext
          text="A10 PROTOTYPE | Regulated 5 / 9 / 12 V motor supply · A10 | 3/8"
          schX={0}
          schY={10.2}
          fontSize={0.3}
        />
        <schematictext
          text="DRAFT — schematic validation incomplete — routing disabled"
          schX={0}
          schY={-9.5}
          fontSize={0.2}
        />
        <MotorSupply />
      </schematicsheet>
      <schematicsheet
        name="controls"
        displayName="Hardware PWM and REV / OFF / FWD · A10"
        sheetSize="A4"
        sheetIndex={4}
      >
        <schematictext
          text="A10 PROTOTYPE | Hardware PWM and REV / OFF / FWD · A10 | 4/8"
          schX={0}
          schY={10.2}
          fontSize={0.3}
        />
        <schematictext
          text="DRAFT — schematic validation incomplete — routing disabled"
          schX={0}
          schY={-9.5}
          fontSize={0.2}
        />
        <PwmControls />
        <schematictext
          text="SW1 physical pin 2 = PWM common; 2-1 FWD / OPEN OFF / 2-3 REV"
          schX={0}
          schY={-7}
          fontSize={0.2}
        />
      </schematicsheet>
      <schematicsheet
        name="protection"
        displayName="Motor rail UV / OV monitoring · A10"
        sheetSize="A4"
        sheetIndex={5}
      >
        <schematictext
          text="A10 PROTOTYPE | Motor rail UV / OV monitoring · A10 | 5/8"
          schX={0}
          schY={10.2}
          fontSize={0.3}
        />
        <schematictext
          text="DRAFT — schematic validation incomplete — routing disabled"
          schX={0}
          schY={-9.5}
          fontSize={0.2}
        />
        <RailProtection />
      </schematicsheet>
      <schematicsheet
        name="motor"
        displayName="Integrated H-bridge and motor output · A10"
        sheetSize="A4"
        sheetIndex={7}
      >
        <schematictext
          text="A10 PROTOTYPE | Integrated H-bridge and motor output · A10 | 7/8"
          schX={0}
          schY={10.2}
          fontSize={0.3}
        />
        <schematictext
          text="DRAFT — schematic validation incomplete — routing disabled"
          schX={0}
          schY={-9.5}
          fontSize={0.2}
        />
        <MotorBridge />
      </schematicsheet>
      <schematicsheet
        name="dump"
        displayName="Regenerative energy dump · A10"
        sheetSize="A4"
        sheetIndex={6}
      >
        <schematictext
          text="A10 PROTOTYPE | Regenerative energy dump · A10 | 6/8"
          schX={0}
          schY={10.2}
          fontSize={0.3}
        />
        <schematictext
          text="DRAFT — schematic validation incomplete — routing disabled"
          schX={0}
          schY={-9.5}
          fontSize={0.2}
        />
        <EnergyDump />
      </schematicsheet>
    </board>
  )
}
