// Official supplier-model inspection only; not product placement.
import { PTV09A_4015F_B103 } from "../../imports/PTV09A_4015F_B103"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <PTV09A_4015F_B103
          name="RV1"
          connections={{
            pin1: "net.PROBE_0",
            pin2: "net.PROBE_1",
            pin3: "net.PROBE_2",
            pin4: "net.PROBE_3",
            pin5: "net.PROBE_4",
          }}
        />
      </schematicsheet>
    </board>
  )
}
