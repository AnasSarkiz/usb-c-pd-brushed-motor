// Official supplier-model inspection only; not product placement.
import { TPS7A1633DGNR } from "../../imports/TPS7A1633DGNR"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <TPS7A1633DGNR
          name="U3"
          connections={{
            pin1: "net.PROBE_0",
            pin4: "net.PROBE_1",
            pin5: "net.PROBE_2",
            pin8: "net.PROBE_3",
            pin9: "net.PROBE_4",
          }}
          noConnect={["pin2", "pin3", "pin6", "pin7"]}
        />
      </schematicsheet>
    </board>
  )
}
