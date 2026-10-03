import { A_0603WAF2001T5E } from "../../imports/A_0603WAF2001T5E"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <A_0603WAF2001T5E
          name="R31"
          connections={{ pin1: "net.VM", pin2: "net.VREF2V5" }}
        />
      </schematicsheet>
    </board>
  )
}
