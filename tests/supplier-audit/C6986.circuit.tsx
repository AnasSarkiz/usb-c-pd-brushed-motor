// Official supplier-model inspection only; not product placement.
import { TLC555CDR } from "../../imports/TLC555CDR"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <TLC555CDR
          name="U6"
          connections={{
            GND: "net.PROBE_0",
            TRIG: "net.PROBE_1",
            OUT: "net.PROBE_2",
            RESET: "net.PROBE_3",
            CONT: "net.PROBE_4",
            THRES: "net.PROBE_5",
            DISCH: "net.PROBE_6",
            VDD: "net.PROBE_7",
          }}
        />
      </schematicsheet>
    </board>
  )
}
