// Official supplier-model inspection only; not product placement.
import { SS54 } from "../../imports/SS54"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <SS54
          name="D4"
          connections={{ anode: "net.PROBE_0", cathode: "net.PROBE_1" }}
        />
      </schematicsheet>
    </board>
  )
}
