// Official supplier-model inspection only; not product placement.
import { TPS54360DDAR } from "../../imports/TPS54360DDAR"
export default function SupplierProbe() {
  return (
    <board
      width="40mm"
      height="40mm"
      routingDisabled
      isViaInPadAllowed={true}
      autorouter={{ allowViaInPad: false }}
    >
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <TPS54360DDAR
          name="U5"
          connections={{
            BOOT: "net.PROBE_0",
            VIN: "net.PROBE_1",
            EN: "net.PROBE_2",
            pin4: "net.PROBE_3",
            FB: "net.PROBE_4",
            COMP: "net.PROBE_5",
            GND: "net.PROBE_6",
            SW: "net.PROBE_7",
            EP: "net.PROBE_8",
          }}
        />
      </schematicsheet>
    </board>
  )
}
