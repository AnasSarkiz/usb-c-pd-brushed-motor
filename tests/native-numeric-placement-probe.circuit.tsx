import { A_0603WAF4701T5E } from "../imports/A_0603WAF4701T5E"

// Independent documented numeric-coordinate API probe, not product placement.
export default function NativeNumericPlacementProbe() {
  return (
    <board
      width="20mm"
      height="20mm"
      routingDisabled
      manualEdits={{
        pcb_placements: [
          { selector: "R1", center: { x: -4, y: 3 } },
          { selector: "R2", center: { x: 4, y: -3 } },
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
