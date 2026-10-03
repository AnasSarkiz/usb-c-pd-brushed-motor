// Official supplier-model inspection only; not product placement.
import { A_0603WAF2432T5E } from "../../imports/A_0603WAF2432T5E"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <A_0603WAF2432T5E
          name="R32"
          connections={{ pin1: "net.PROBE_0", pin2: "net.PROBE_1" }}
        />
      </schematicsheet>
    </board>
  )
}
