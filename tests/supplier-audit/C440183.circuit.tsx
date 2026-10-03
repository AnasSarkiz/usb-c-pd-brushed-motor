// Official supplier-model inspection only; not product placement.
import { GRM1885C1H562JA01D } from "../../imports/GRM1885C1H562JA01D"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <GRM1885C1H562JA01D
          name="C21"
          connections={{ pin1: "net.PROBE_0", pin2: "net.PROBE_1" }}
        />
      </schematicsheet>
    </board>
  )
}
