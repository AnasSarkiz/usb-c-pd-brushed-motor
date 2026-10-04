import { MechanicalFeatures } from "./circuit/MechanicalFeatures"
import { pcbPlacements } from "./circuit/product-placement"
import { PdQualification } from "./circuit/PdQualification"
import { UsbInput } from "./circuit/UsbInput"
import { InputProtection } from "./circuit/InputProtection"
import { MotorSupply } from "./circuit/MotorSupply"
import { PwmControls } from "./circuit/PwmControls"
import { RailProtection } from "./circuit/RailProtection"
import { EnergyDump } from "./circuit/EnergyDump"
import { MotorBridge } from "./circuit/MotorBridge"
import { PowerRouting } from "./circuit/PowerRouting"

export default function UsbCPdBrushedMotorController() {
  return (
    <board
      width="80mm"
      height="65mm"
      thickness="1.6mm"
      layers={2}
      minTraceWidth={0.2}
      minTraceToPadEdgeClearance={0.2}
      minPadEdgeToPadEdgeClearance={0.2}
      minTraceToHoleEdgeClearance={0.28}
      minBoardEdgeClearance={0.5}
      minViaHoleDiameter={0.3}
      minViaPadDiameter={0.6}
      minViaHoleEdgeToViaHoleEdgeClearance={0.25}
      minPlatedHoleDrillEdgeToDrillEdgeClearance={0.45}
      minViaEdgeToPadEdgeClearance={0.2}
      manualEdits={{ pcb_placements: pcbPlacements }}
      isViaInPadAllowed={true}
      pcbPlatedHoleSolderPaste="none"
      autorouter={{
        preset: "auto_local",
        allowViaInPad: false,
        traceClearance: 0.25,
      }}
      autorouterEffortLevel="1x"
      pcbSx={{
        "& footprint silkscreentext[text='ON']": { visibility: "hidden" },
        "& footprint silkscreentext[text='{NAME}']": { visibility: "hidden" },
      }}
      defaultTraceWidth={0.2}
      schLayout={{ layoutMode: "relative" }}
    >
      <MechanicalFeatures />
      <PowerRouting />
      <copperpour
        name="ground_top"
        layer="top"
        connectsTo="net.GND"
        clearance={0.2}
        boardEdgeMargin={0.5}
        useThermalReliefs={false}
      />
      <copperpour
        name="ground_bottom"
        layer="bottom"
        connectsTo="net.GND"
        clearance={0.2}
        boardEdgeMargin={0.5}
        useThermalReliefs={false}
      />
      <net name="GND" isGroundNet routingPhaseIndex={1} />
      <net name="VBUS" isPowerNet nominalTraceWidth="2mm" />
      <net name="VDD5" isPowerNet />
      <net name="VCC3V3" isPowerNet />
      <net name="EFUSE_IN" isPowerNet nominalTraceWidth="2mm" />
      <net name="VIN_BUCK" isPowerNet nominalTraceWidth="2mm" />
      <net
        name="SWITCH_NODE"
        isPowerNet
        nominalTraceWidth="2mm"
        routingPhaseIndex={0}
      />
      <net name="VM" isPowerNet nominalTraceWidth="2mm" />
      <net name="MOTOR_P" nominalTraceWidth="2mm" routingPhaseIndex={0} />
      <net name="MOTOR_N" nominalTraceWidth="2mm" routingPhaseIndex={0} />
      <schematicsheet
        name="usb"
        displayName="USB-C PD and quiet supplies · A22"
        sheetSize="A4"
        sheetIndex={1}
      >
        <schematictext
          text="A22 PROTOTYPE | USB-C PD and quiet supplies · A22 | 1/8"
          schX={0}
          schY={10.2}
          fontSize={0.3}
        />
        <schematictext
          text="PROTOTYPE — motor qualification and physical testing pending"
          schX={0}
          schY={-9.5}
          fontSize={0.2}
        />
        <UsbInput />
      </schematicsheet>
      <schematicsheet
        name="pdhost"
        displayName="PD power qualification and voltage selection · A22"
        sheetSize="A4"
        sheetIndex={8}
      >
        <schematictext
          text="A22 PROTOTYPE | PD qualification / voltage selection | 8/8"
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
        displayName="Contract-controlled input protection · A22"
        sheetSize="A4"
        sheetIndex={2}
      >
        <schematictext
          text="A22 PROTOTYPE | Contract-controlled input protection · A22 | 2/8"
          schX={0}
          schY={10.2}
          fontSize={0.3}
        />
        <schematictext
          text="PROTOTYPE — motor qualification and physical testing pending"
          schX={0}
          schY={-9.5}
          fontSize={0.2}
        />
        <InputProtection />
      </schematicsheet>
      <schematicsheet
        name="buck"
        displayName="Regulated 5 / 9 / 12 V motor supply · A22"
        sheetSize="A4"
        sheetIndex={3}
      >
        <schematictext
          text="A22 PROTOTYPE | Regulated 5 / 9 / 12 V motor supply · A22 | 3/8"
          schX={0}
          schY={10.2}
          fontSize={0.3}
        />
        <schematictext
          text="PROTOTYPE — motor qualification and physical testing pending"
          schX={0}
          schY={-9.5}
          fontSize={0.2}
        />
        <MotorSupply />
      </schematicsheet>
      <schematicsheet
        name="controls"
        displayName="Hardware PWM and REV / OFF / FWD · A22"
        sheetSize="A4"
        sheetIndex={4}
      >
        <schematictext
          text="A22 PROTOTYPE | Hardware PWM and REV / OFF / FWD · A22 | 4/8"
          schX={0}
          schY={10.2}
          fontSize={0.3}
        />
        <schematictext
          text="PROTOTYPE — motor qualification and physical testing pending"
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
        displayName="Motor rail UV / OV monitoring · A22"
        sheetSize="A4"
        sheetIndex={5}
      >
        <schematictext
          text="A22 PROTOTYPE | Motor rail UV / OV monitoring · A22 | 5/8"
          schX={0}
          schY={10.2}
          fontSize={0.3}
        />
        <schematictext
          text="PROTOTYPE — motor qualification and physical testing pending"
          schX={0}
          schY={-9.5}
          fontSize={0.2}
        />
        <RailProtection />
      </schematicsheet>
      <schematicsheet
        name="motor"
        displayName="Integrated H-bridge and motor output · A22"
        sheetSize="A4"
        sheetIndex={7}
      >
        <schematictext
          text="A22 PROTOTYPE | Integrated H-bridge and motor output · A22 | 7/8"
          schX={0}
          schY={10.2}
          fontSize={0.3}
        />
        <schematictext
          text="PROTOTYPE — motor qualification and physical testing pending"
          schX={0}
          schY={-9.5}
          fontSize={0.2}
        />
        <MotorBridge />
      </schematicsheet>
      <schematicsheet
        name="dump"
        displayName="Regenerative energy dump · A22"
        sheetSize="A4"
        sheetIndex={6}
      >
        <schematictext
          text="A22 PROTOTYPE | Regenerative energy dump · A22 | 6/8"
          schX={0}
          schY={10.2}
          fontSize={0.3}
        />
        <schematictext
          text="PROTOTYPE — motor qualification and physical testing pending"
          schX={0}
          schY={-9.5}
          fontSize={0.2}
        />
        <EnergyDump />
      </schematicsheet>
    </board>
  )
}
