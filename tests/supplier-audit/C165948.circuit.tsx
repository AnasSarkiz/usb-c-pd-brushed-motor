// Supplier C165948 with user-authorized A44 pad translations; not product placement.
import { TYPE_C_31_M_12 } from "../../imports/TYPE_C_31_M_12"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <TYPE_C_31_M_12
          name="J1"
          connections={{
            pin1: "net.PROBE_0",
            pin2: "net.PROBE_1",
            pin3: "net.PROBE_2",
            pin4: "net.PROBE_3",
            pin6: "net.PROBE_4",
            pin12: "net.PROBE_5",
            pin13: "net.PROBE_6",
            pin14: "net.PROBE_7",
            pin15: "net.PROBE_8",
            pin16: "net.PROBE_9",
          }}
          noConnect={["pin5", "pin7", "pin8", "pin9", "pin10", "pin11"]}
        />
      </schematicsheet>
    </board>
  )
}
