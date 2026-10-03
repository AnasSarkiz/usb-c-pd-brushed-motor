import { A_0603WAF4701T5E } from "../imports/A_0603WAF4701T5E"

// Isolated official-API tooling probe; no product placement is enabled.
export default function NativeManualPlacementProbe() {
  return (
    <board
      width="20mm"
      height="20mm"
      routingDisabled
      manualEdits={{
        pcb_placements: [
          { selector: "R1", center: { x: "-4mm", y: "3mm" } },
          { selector: "R2", center: { x: "4mm", y: "-3mm" } },
        ],
      }}
    >
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <A_0603WAF4701T5E
          name="R1"
          schX={-3}
          connections={{ pin1: "net.VCC3V3", pin2: "net.SCL" }}
        />
        <A_0603WAF4701T5E
          name="R2"
          schX={3}
          pcbRotation={90}
          connections={{ pin1: "net.SCL", pin2: "net.GND" }}
        />
      </schematicsheet>
    </board>
  )
}
