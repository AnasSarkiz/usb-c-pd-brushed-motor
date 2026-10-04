// Official supplier-model inspection only; not product placement.
import { A_5015 } from "../../imports/A_5015"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <A_5015 name="TP1" connections={{ pin1: "net.PROBE_0" }} />
      </schematicsheet>
    </board>
  )
}
