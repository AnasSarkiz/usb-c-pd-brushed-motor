// Official supplier-model inspection only; not product placement.
import { SMBJ22A } from "../../imports/SMBJ22A"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <SMBJ22A
          name="D1"
          connections={{ K: "net.PROBE_0", A: "net.PROBE_1" }}
        />
      </schematicsheet>
    </board>
  )
}
