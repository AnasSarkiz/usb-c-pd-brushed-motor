import { SS_23D03_G080 } from "../imports/SS_23D03_G080"
import { KH_SS23E06_G8 } from "../imports/KH_SS23E06_G8"
import { KH_SS23F06_G6 } from "../imports/KH_SS23F06_G6"

// Import-model diagnostic only. This is not a functional circuit or substitute.
export default function SwitchImportProbe() {
  return (
    <board width="65mm" height="50mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1} />
      <SS_23D03_G080
        name="SW_A"
        schSheetName="probe"
        schX={-6}
        schY={0}
        connections={{ pin3: "net.COMMON_A", pin4: "net.THROW_A" }}
      />
      <KH_SS23E06_G8
        name="SW_B"
        schSheetName="probe"
        schX={0}
        schY={0}
        connections={{ pin3: "net.COMMON_B", pin4: "net.THROW_B" }}
      />
      <KH_SS23F06_G6
        name="SW_C"
        schSheetName="probe"
        schX={6}
        schY={0}
        connections={{ pin3: "net.COMMON_C", pin4: "net.THROW_C" }}
      />
    </board>
  )
}
