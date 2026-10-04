// Independent unchanged supplier-model audit, not product placement.
import { CL10C331JB8NNNC } from "../../imports/CL10C331JB8NNNC"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <CL10C331JB8NNNC
          name="C33"
          connections={{ pin1: "net.PROBE_0", pin2: "net.PROBE_1" }}
        />
      </schematicsheet>
    </board>
  )
}
