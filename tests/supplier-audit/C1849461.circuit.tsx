// Official supplier-model inspection only; not product placement.
import { TPS16630PWPR } from "../../imports/TPS16630PWPR"
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
        <TPS16630PWPR
          name="U4"
          connections={{
            pin1: "net.PROBE_0",
            pin2: "net.PROBE_1",
            pin3: "net.PROBE_2",
            pin6: "net.PROBE_3",
            pin7: "net.PROBE_4",
            pin8: "net.PROBE_5",
            pin9: "net.PROBE_6",
            pin10: "net.PROBE_7",
            pin11: "net.PROBE_8",
            pin13: "net.PROBE_9",
            pin16: "net.PROBE_10",
            pin18: "net.PROBE_11",
            pin19: "net.PROBE_12",
            pin20: "net.PROBE_13",
            pin21: "net.PROBE_14",
          }}
          noConnect={["pin4", "pin5", "pin12", "pin14", "pin15", "pin17"]}
        />
      </schematicsheet>
    </board>
  )
}
