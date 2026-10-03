// Official supplier-model inspection only; not product placement.
import { CL10B223KB8NNNC } from "../../imports/CL10B223KB8NNNC"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <CL10B223KB8NNNC
          name="C9"
          connections={{ pin1: "net.PROBE_0", pin2: "net.PROBE_1" }}
        />
      </schematicsheet>
    </board>
  )
}
