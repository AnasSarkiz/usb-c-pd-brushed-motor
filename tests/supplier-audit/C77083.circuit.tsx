// Official supplier-model inspection only; not product placement.
import { GRM21BR71H105KA12L } from "../../imports/GRM21BR71H105KA12L"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <GRM21BR71H105KA12L
          name="C1"
          connections={{ pin1: "net.PROBE_0", pin2: "net.PROBE_1" }}
        />
      </schematicsheet>
    </board>
  )
}
