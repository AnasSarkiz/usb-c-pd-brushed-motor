// Official supplier-model inspection only; not product placement.
import { RPL_12K10R0FT } from "../../imports/RPL_12K10R0FT"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <RPL_12K10R0FT
          name="R45"
          connections={{ pin1: "net.PROBE_0", pin2: "net.PROBE_1" }}
        />
      </schematicsheet>
    </board>
  )
}
