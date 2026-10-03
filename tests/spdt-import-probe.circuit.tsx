import { A_1103M2S3CQE2 } from "../imports/A_1103M2S3CQE2"

// Supplier-model inspection only. Neither instance is motor-board placement.
export default function SpdtImportProbe() {
  return (
    <board width="70mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1} />
      <A_1103M2S3CQE2
        name="SW_DEFAULT"
        schSheetName="probe"
        schX={-6}
        connections={{
          pin1: "net.DEFAULT_FWD",
          pin2: "net.DEFAULT_COMMON",
          pin3: "net.DEFAULT_REV",
        }}
      />
      <A_1103M2S3CQE2
        name="SW_SPDT"
        type="spdt"
        schSheetName="probe"
        schX={6}
        connections={{
          pin1: "net.SPDT_FWD",
          pin2: "net.SPDT_COMMON",
          pin3: "net.SPDT_REV",
        }}
      />
    </board>
  )
}
