// Official supplier-model inspection only; not product placement.
import { AO3400A } from "../../imports/AO3400A"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <AO3400A
          name="Q3"
          connections={{ G: "net.PROBE_0", S: "net.PROBE_1", D: "net.PROBE_2" }}
        />
      </schematicsheet>
    </board>
  )
}
