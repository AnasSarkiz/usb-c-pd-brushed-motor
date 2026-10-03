import { SSSS211900 } from "../imports/SSSS211900"
import { OS103011MS8QP1 } from "../imports/OS103011MS8QP1"

// Isolated supplier-model audit; this is not motor-board placement.
export default function Sp3tImportProbe() {
  return (
    <board width="70mm" height="30mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1} />
      <SSSS211900
        name="SW_ALPS"
        schSheetName="probe"
        schX={-6}
        pcbX="-16mm"
        pcbY="0mm"
        connections={{
          pin1: "net.ALPS_1",
          pin2: "net.ALPS_2",
          pin3: "net.ALPS_3",
          pin4: "net.ALPS_4",
        }}
      />
      <OS103011MS8QP1
        name="SW_CK"
        schSheetName="probe"
        schX={6}
        pcbX="16mm"
        pcbY="0mm"
        connections={{
          pin1: "net.CK_1",
          pin2: "net.CK_2",
          pin3: "net.CK_3",
          pin4: "net.CK_4",
          pin5: "net.CK_CASE_5",
          pin6: "net.CK_CASE_6",
        }}
      />
    </board>
  )
}
