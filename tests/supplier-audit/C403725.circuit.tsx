// Official supplier-model inspection only; not product placement.
import { GRM31CR61E476ME44L } from "../../imports/GRM31CR61E476ME44L"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <GRM31CR61E476ME44L
          name="C16"
          connections={{ pin1: "net.PROBE_0", pin2: "net.PROBE_1" }}
        />
      </schematicsheet>
    </board>
  )
}
