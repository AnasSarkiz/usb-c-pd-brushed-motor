// Official supplier-model inspection only; not product placement.
import { DSHP02TSGER } from "../../imports/DSHP02TSGER"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <DSHP02TSGER
          name="SW2"
          connections={{
            pin1: "net.PROBE_0",
            pin2: "net.PROBE_1",
            pin3: "net.PROBE_2",
            pin4: "net.PROBE_3",
          }}
        />
      </schematicsheet>
    </board>
  )
}
