// Official supplier-model inspection only; not product placement.
import { MHCC10040_8R2M_R7 } from "../../imports/MHCC10040_8R2M_R7"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <MHCC10040_8R2M_R7
          name="L1"
          connections={{ pin1: "net.PROBE_0", pin2: "net.PROBE_1" }}
        />
      </schematicsheet>
    </board>
  )
}
