// Official supplier-model inspection only; not product placement.
import { A_1MS3T1B1M2QES_5 } from "../../imports/A_1MS3T1B1M2QES_5"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <A_1MS3T1B1M2QES_5
          name="SW1"
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
