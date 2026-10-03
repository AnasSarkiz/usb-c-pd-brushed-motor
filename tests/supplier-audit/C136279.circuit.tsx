// Official supplier-model inspection only; not product placement or BOM approval.
import { A_25SVPF100M } from "../../imports/A_25SVPF100M"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <A_25SVPF100M
          name="C18"
          connections={{ pin1: "net.PROBE_0", pin2: "net.PROBE_1" }}
        />
      </schematicsheet>
    </board>
  )
}
