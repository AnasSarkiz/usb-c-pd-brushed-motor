// Official supplier-model inspection only; not product placement.
import { B5819W_SL } from "../../imports/B5819W_SL"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <B5819W_SL
          name="D6"
          connections={{ anode: "net.PROBE_0", cathode: "net.PROBE_1" }}
        />
      </schematicsheet>
    </board>
  )
}
