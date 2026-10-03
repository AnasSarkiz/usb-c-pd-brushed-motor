// Official supplier-model inspection only; not product placement.
import { DB126V_5_0_2P_GN_P } from "../../imports/DB126V_5_0_2P_GN_P"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <DB126V_5_0_2P_GN_P
          name="J2"
          connections={{ pin1: "net.PROBE_0", pin2: "net.PROBE_1" }}
        />
      </schematicsheet>
    </board>
  )
}
