// Official supplier-model inspection only; not product placement.
import { LM393DR } from "../../imports/LM393DR"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <LM393DR
          name="U9"
          connections={{
            "1OUT": "net.PROBE_0",
            "1IN_NEG": "net.PROBE_1",
            "1IN_POS": "net.PROBE_2",
            GND: "net.PROBE_3",
            "2IN_POS": "net.PROBE_4",
            "2IN_NEG": "net.PROBE_5",
            "2OUT": "net.PROBE_6",
            VCC: "net.PROBE_7",
          }}
        />
      </schematicsheet>
    </board>
  )
}
