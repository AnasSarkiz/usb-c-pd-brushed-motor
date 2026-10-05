// C5184243 diagnostic probe with user-authorized SMT pad translations.
import { USB4105_GF_A_120 } from "../../imports/USB4105_GF_A_120"
export default function SupplierProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <USB4105_GF_A_120
          name="J1"
          connections={{
            pin1: "net.PROBE_SHELL_1",
            pin2: "net.PROBE_SHELL_2",
            pin3: "net.PROBE_SHELL_3",
            pin4: "net.PROBE_SHELL_4",
            pin5: "net.PROBE_GND_1",
            pin6: "net.PROBE_VBUS_1",
            pin7: "net.PROBE_GND_2",
            pin8: "net.PROBE_VBUS_2",
            pin9: "net.PROBE_CC2",
            pin15: "net.PROBE_CC1",
          }}
          noConnect={["pin10", "pin11", "pin12", "pin13", "pin14", "pin16"]}
        />
      </schematicsheet>
    </board>
  )
}
