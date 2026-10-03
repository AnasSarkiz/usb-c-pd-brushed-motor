// Official supplier-model inspection only; not product placement.
import { MMBT3904 } from "../../imports/MMBT3904"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <MMBT3904
          name="Q1"
          connections={{ B: "net.PROBE_0", E: "net.PROBE_1", C: "net.PROBE_2" }}
        />
      </schematicsheet>
    </board>
  )
}
