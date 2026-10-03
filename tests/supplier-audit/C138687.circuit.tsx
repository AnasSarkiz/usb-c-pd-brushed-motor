// Official supplier-model inspection only; not product placement.
import { CL32B106KBJNNNE } from "../../imports/CL32B106KBJNNNE"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <CL32B106KBJNNNE
          name="C13"
          connections={{ pin1: "net.PROBE_0", pin2: "net.PROBE_1" }}
        />
      </schematicsheet>
    </board>
  )
}
