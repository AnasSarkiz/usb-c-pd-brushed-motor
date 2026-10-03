// Official supplier-model inspection only; not product placement.
import { TL431AIDBZR } from "../../imports/TL431AIDBZR"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <TL431AIDBZR
          name="U8"
          connections={{
            CATHODE: "net.PROBE_0",
            REF: "net.PROBE_1",
            ANODE: "net.PROBE_2",
          }}
        />
      </schematicsheet>
    </board>
  )
}
