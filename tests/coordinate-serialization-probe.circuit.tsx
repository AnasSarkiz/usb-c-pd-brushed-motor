import { A_0603WAF4701T5E } from "../imports/A_0603WAF4701T5E"

// Isolated tooling reproduction; NOT product component placement.
export default function CoordinateSerializationProbe() {
  return (
    <board width="20mm" height="20mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <A_0603WAF4701T5E
          name="R2"
          pcbX="2mm"
          pcbY="-2mm"
          connections={{ pin1: "net.VCC3V3", pin2: "net.SCL" }}
        />
      </schematicsheet>
    </board>
  )
}
