// Official supplier-model inspection only; not product placement or BOM approval.
import { A_35SVPK330M } from "../../imports/A_35SVPK330M"

export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <A_35SVPK330M
          name="C18"
          connections={{ pin1: "net.PROBE_0", pin2: "net.PROBE_1" }}
        />
      </schematicsheet>
    </board>
  )
}
