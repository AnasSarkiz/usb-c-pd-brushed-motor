// Official supplier-model inspection only; not product placement.
import { A_19_217_G7C_AN1P2_6T } from "../../imports/A_19_217_G7C_AN1P2_6T"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <A_19_217_G7C_AN1P2_6T
          name="LED2"
          connections={{ anode: "net.PROBE_0", cathode: "net.PROBE_1" }}
        />
      </schematicsheet>
    </board>
  )
}
