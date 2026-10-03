// Official supplier-model inspection only; not product placement.
import { RVT1E221M0607 } from "../../imports/RVT1E221M0607"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <RVT1E221M0607
          name="C18"
          connections={{ pin1: "net.PROBE_0", pin2: "net.PROBE_1" }}
        />
      </schematicsheet>
    </board>
  )
}
