// Official supplier-model inspection only; not product placement.
import { DRV8874PWPR } from "../../imports/DRV8874PWPR"
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
        <DRV8874PWPR
          name="U10"
          connections={{
            pin1: "net.PROBE_0",
            pin2: "net.PROBE_1",
            pin3: "net.PROBE_2",
            pin4: "net.PROBE_3",
            pin5: "net.PROBE_4",
            pin6: "net.PROBE_5",
            pin7: "net.PROBE_6",
            pin8: "net.PROBE_7",
            pin9: "net.PROBE_8",
            pin10: "net.PROBE_9",
            pin11: "net.PROBE_10",
            pin12: "net.PROBE_11",
            pin13: "net.PROBE_12",
            pin14: "net.PROBE_13",
            pin15: "net.PROBE_14",
            pin16: "net.PROBE_15",
            pin17: "net.PROBE_16",
          }}
        />
      </schematicsheet>
    </board>
  )
}
