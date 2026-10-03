// Official supplier-model inspection only; not product placement.
import { CRCW060310K0FKEA } from "../../imports/CRCW060310K0FKEA"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <CRCW060310K0FKEA
          name="R5"
          connections={{ pin1: "net.PROBE_0", pin2: "net.PROBE_1" }}
        />
      </schematicsheet>
    </board>
  )
}
