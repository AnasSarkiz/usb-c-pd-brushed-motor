// Official supplier-model inspection only; not product placement.
import { BZT52C10 } from "../../imports/BZT52C10"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <BZT52C10
          name="D9"
          connections={{ cathode: "net.PROBE_0", anode: "net.PROBE_1" }}
        />
      </schematicsheet>
    </board>
  )
}
