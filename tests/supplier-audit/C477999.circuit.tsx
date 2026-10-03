// Official supplier-model inspection only; not product placement.
import { PESD24VS2UT_215 } from "../../imports/PESD24VS2UT_215"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <PESD24VS2UT_215
          name="D2"
          connections={{
            pin1: "net.PROBE_0",
            pin2: "net.PROBE_1",
            pin3: "net.PROBE_2",
          }}
        />
      </schematicsheet>
    </board>
  )
}
