import { readFile, writeFile } from "node:fs/promises"
import { createHash } from "node:crypto"
import {
  any_circuit_element,
  pcb_solder_paste,
  type AnyCircuitElement,
} from "circuit-json"
import { z } from "zod"

const supplierCode = z.enum(["C908270", "C908281"]).parse(process.argv[2])
const revision = z.enum(["A4", "A5", "A6"]).parse(process.argv[3] ?? "A4")
const probeSlug =
  supplierCode === "C908270"
    ? "dailywell-1m-import-probe"
    : "dailywell-2m-import-probe"
const failures: string[] = []
const expectedManufacturerPartNumber =
  supplierCode === "C908270" ? "1MS3T1B1M2QES-5" : "2MS3T1B1M1QES-5"
const importedSourceSha256 = createHash("sha256")
  .update(
    await readFile(
      `imports/A_${expectedManufacturerPartNumber.replace(/-/g, "_")}.tsx`,
    ),
  )
  .digest("hex")
const circuitJson: AnyCircuitElement[] = []
const invalidElements = []
const rawElements = z
  .array(z.unknown())
  .parse(
    JSON.parse(await readFile(`dist/tests/${probeSlug}/circuit.json`, "utf8")),
  )
for (const [elementIndex, rawElement] of rawElements.entries()) {
  const result = any_circuit_element.safeParse(rawElement)
  if (result.success) {
    circuitJson.push(result.data)
    continue
  }
  const header = z.object({ type: z.string() }).parse(rawElement)
  const specific =
    header.type === "pcb_solder_paste"
      ? pcb_solder_paste.safeParse(rawElement)
      : result
  failures.push(
    `Element ${elementIndex} ${header.type}: circuit schema rejects generated element`,
  )
  invalidElements.push({
    elementIndex,
    rawElement,
    issues: specific.success ? [] : specific.error.issues,
  })
}
const sourceComponent = circuitJson.find(
  (element) => element.type === "source_component" && element.name === "SW1",
)
const pinReports = []
const probeSheet = circuitJson.find(
  (element) => element.type === "schematic_sheet" && element.name === "probe",
)
if (probeSheet?.type !== "schematic_sheet" || probeSheet.sheet_size !== "a4")
  failures.push("Import probe lacks its required native A4 sheet")
if (!sourceComponent || sourceComponent.type !== "source_component") {
  failures.push("Supplier switch source component missing")
} else {
  const sourcePorts = circuitJson.filter(
    (element) =>
      element.type === "source_port" &&
      element.source_component_id === sourceComponent.source_component_id,
  )
  if (sourcePorts.length !== 3)
    failures.push("Expected exactly three electrical source ports")
  const schematicComponent = circuitJson.find(
    (element) =>
      element.type === "schematic_component" &&
      element.source_component_id === sourceComponent.source_component_id,
  )
  const supplierBox =
    sourceComponent.ftype === "simple_chip" &&
    sourceComponent.manufacturer_part_number ===
      expectedManufacturerPartNumber &&
    sourceComponent.supplier_part_numbers?.jlcpcb?.includes(supplierCode) &&
    schematicComponent?.type === "schematic_component" &&
    !schematicComponent.symbol_name
  if (
    schematicComponent?.type !== "schematic_component" ||
    probeSheet?.type !== "schematic_sheet" ||
    schematicComponent.schematic_sheet_id !== probeSheet.schematic_sheet_id
  )
    failures.push("Supplier component is not rendered on the reviewed A4 sheet")
  if (
    !supplierBox &&
    (schematicComponent?.type !== "schematic_component" ||
      schematicComponent.symbol_name !== "spdt_switch_right")
  ) {
    failures.push(
      "Generated symbol does not represent SPDT center-off or its common pin 2",
    )
  }
  for (const pinNumber of [1, 2, 3]) {
    const sourcePort = sourcePorts.find(
      (element) =>
        element.type === "source_port" && element.pin_number === pinNumber,
    )
    if (!sourcePort || sourcePort.type !== "source_port") {
      failures.push(`Electrical pin ${pinNumber}: source port missing`)
      continue
    }
    const schematicPort = circuitJson.find(
      (element) =>
        element.type === "schematic_port" &&
        element.source_port_id === sourcePort.source_port_id,
    )
    if (!schematicPort)
      failures.push(`Electrical pin ${pinNumber}: schematic port missing`)
    if (
      schematicPort?.type === "schematic_port" &&
      schematicPort.pin_number !== undefined &&
      schematicPort.pin_number !== pinNumber
    )
      failures.push(
        `Electrical pin ${pinNumber}: schematic numbering disagrees with supplier source pin`,
      )
    const expectedNetName =
      pinNumber === 1 ? "IN1" : pinNumber === 2 ? "PWM" : "IN2"
    const expectedNet = circuitJson.find(
      (element) =>
        element.type === "source_net" && element.name === expectedNetName,
    )
    const sourceTrace = circuitJson.find(
      (element) =>
        element.type === "source_trace" &&
        element.connected_source_port_ids.includes(sourcePort.source_port_id),
    )
    if (
      expectedNet?.type !== "source_net" ||
      sourceTrace?.type !== "source_trace" ||
      !sourceTrace.connected_source_net_ids.includes(
        expectedNet.source_net_id,
      ) ||
      sourceTrace.connected_source_port_ids.length !== 1 ||
      sourceTrace.connected_source_net_ids.length !== 1
    )
      failures.push(
        `Electrical pin ${pinNumber}: expected isolated ${expectedNetName} association missing or shorted`,
      )
    if (
      schematicComponent?.type === "schematic_component" &&
      schematicComponent.symbol_name === "spdt_switch_right" &&
      pinNumber === 2 &&
      schematicPort?.type === "schematic_port" &&
      schematicPort.facing_direction !== "left"
    )
      failures.push(
        "Physical common pin 2 is drawn as a throw instead of the moving common contact",
      )
    const pcbPort = circuitJson.find(
      (element) =>
        element.type === "pcb_port" &&
        element.source_port_id === sourcePort.source_port_id,
    )
    const platedHole =
      pcbPort?.type === "pcb_port"
        ? circuitJson.find(
            (element) =>
              element.type === "pcb_plated_hole" &&
              element.pcb_port_id === pcbPort.pcb_port_id,
          )
        : undefined
    if (!platedHole)
      failures.push(`Electrical pin ${pinNumber}: physical pad missing`)
    pinReports.push({
      pinNumber,
      sourcePort,
      schematicPort,
      pcbPort,
      platedHole,
    })
  }
}
const warnings = circuitJson.filter((element) =>
  /warning|error/.test(element.type),
)
const reviewedWarnings =
  revision === "A6"
    ? z
        .array(
          z.object({
            supplierCode: z.string(),
            importedSourceSha256: z.string(),
            type: z.string(),
            message: z.string(),
            source_component_id: z.string(),
            reason: z.string(),
            evidence: z.array(z.string()),
          }),
        )
        .parse(
          JSON.parse(
            await readFile("evidence/dailywell-warning-review-A6.json", "utf8"),
          ),
        )
    : []
const acceptedWarnings = []
const unresolvedWarnings = []
for (const warning of warnings) {
  const reviewed = reviewedWarnings.find(
    (entry) =>
      entry.supplierCode === supplierCode &&
      entry.importedSourceSha256 === importedSourceSha256 &&
      entry.type === warning.type &&
      "message" in warning &&
      entry.message === warning.message &&
      "source_component_id" in warning &&
      entry.source_component_id === warning.source_component_id,
  )
  if (reviewed) acceptedWarnings.push({ warning, review: reviewed })
  else unresolvedWarnings.push(warning)
}
if (unresolvedWarnings.length !== 0)
  failures.push(
    `${unresolvedWarnings.length} unsuppressed generated diagnostic entries require resolution`,
  )
const pcbTraceCount = circuitJson.filter(
  (element) => element.type === "pcb_trace",
).length
if (pcbTraceCount !== 0)
  failures.push("Routing unexpectedly present in import probe")
const report = {
  revision,
  supplierCode,
  approved: failures.length === 0,
  auditScope:
    "Supplier identity, electrical pin coverage/numbering, common-2 PWM net association, generated schema and reviewed diagnostics. Mechanical assembly/stencil qualification is separate.",
  failures,
  invalidElements,
  pinReports,
  warnings,
  acceptedWarnings,
  unresolvedWarnings,
  importedSourceSha256,
  manufacturerContacts: {
    commonPin: 2,
    endPositions: [
      [2, 3],
      [2, 1],
    ],
    center: "open",
  },
  pcbTraceCount,
  physicalFitApproval:
    "Separate manufacturer mechanical review is mandatory; not inferred from this electrical/schema audit",
}
await writeFile(
  `evidence/${supplierCode}-strict-audit-${revision}.json`,
  `${JSON.stringify(report, null, 2)}\n`,
)
console.log(JSON.stringify({ supplierCode, failures, pcbTraceCount }, null, 2))
if (failures.length !== 0) process.exitCode = 1
