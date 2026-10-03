// Official supplier-model inspection only; not product placement.
import { CC0603KRX7R9BB104 } from "../../imports/CC0603KRX7R9BB104"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <CC0603KRX7R9BB104
          name="C2"
          connections={{ pin1: "net.PROBE_0", pin2: "net.PROBE_1" }}
        />
      </schematicsheet>
    </board>
  )
}
