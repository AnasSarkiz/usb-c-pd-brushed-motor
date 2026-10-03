import { readFile, writeFile } from "node:fs/promises"
import { any_circuit_element, pcb_solder_paste, type AnyCircuitElement } from "circuit-json"
import { z } from "zod"

const supplierCode = z.enum(["C908270", "C908281"]).parse(process.argv[2])
const probeSlug = supplierCode === "C908270" ? "dailywell-1m-import-probe" : "dailywell-2m-import-probe"
const failures: string[] = []
const circuitJson: AnyCircuitElement[] = []
const invalidElements = []
const rawElements = z.array(z.unknown()).parse(JSON.parse(
  await readFile(`dist/tests/${probeSlug}/circuit.json`, "utf8"),
))
for (const [elementIndex, rawElement] of rawElements.entries()) {
  const result = any_circuit_element.safeParse(rawElement)
  if (result.success) {
    circuitJson.push(result.data)
    continue
  }
  const header = z.object({ type: z.string() }).parse(rawElement)
  const specific = header.type === "pcb_solder_paste" ? pcb_solder_paste.safeParse(rawElement) : result
  failures.push(`Element ${elementIndex} ${header.type}: circuit schema rejects generated element`)
  invalidElements.push({ elementIndex, rawElement, issues: specific.success ? [] : specific.error.issues })
}
const sourceComponent = circuitJson.find((element) => element.type === "source_component" && element.name === "SW1")
const pinReports = []
if (!sourceComponent || sourceComponent.type !== "source_component") {
  failures.push("Supplier switch source component missing")
} else {
  const sourcePorts = circuitJson.filter((element) => element.type === "source_port" && element.source_component_id === sourceComponent.source_component_id)
  if (sourcePorts.length !== 3) failures.push("Expected exactly three electrical source ports")
  const schematicComponent = circuitJson.find((element) => element.type === "schematic_component" && element.source_component_id === sourceComponent.source_component_id)
  if (schematicComponent?.type !== "schematic_component" || schematicComponent.symbol_name !== "spdt_switch_right") {
    failures.push("Generated symbol does not represent SPDT center-off or its common pin 2")
  }
  for (const pinNumber of [1, 2, 3]) {
    const sourcePort = sourcePorts.find((element) => element.type === "source_port" && element.pin_number === pinNumber)
    if (!sourcePort || sourcePort.type !== "source_port") {
      failures.push(`Electrical pin ${pinNumber}: source port missing`)
      continue
    }
    const schematicPort = circuitJson.find((element) => element.type === "schematic_port" && element.source_port_id === sourcePort.source_port_id)
    if (!schematicPort) failures.push(`Electrical pin ${pinNumber}: schematic port missing`)
    if (
      schematicComponent?.type === "schematic_component" &&
      schematicComponent.symbol_name === "spdt_switch_right" &&
      pinNumber === 2 &&
      schematicPort?.type === "schematic_port" &&
      schematicPort.facing_direction !== "left"
    ) failures.push("Physical common pin 2 is drawn as a throw instead of the moving common contact")
    const pcbPort = circuitJson.find((element) => element.type === "pcb_port" && element.source_port_id === sourcePort.source_port_id)
    const platedHole = pcbPort?.type === "pcb_port" ? circuitJson.find((element) => element.type === "pcb_plated_hole" && element.pcb_port_id === pcbPort.pcb_port_id) : undefined
    if (!platedHole) failures.push(`Electrical pin ${pinNumber}: physical pad missing`)
    pinReports.push({ pinNumber, sourcePort, schematicPort, pcbPort, platedHole })
  }
}
const warnings = circuitJson.filter((element) => /warning|error/.test(element.type))
if (warnings.length !== 0) failures.push(`${warnings.length} unsuppressed generated diagnostic entries require resolution`)
const pcbTraceCount = circuitJson.filter((element) => element.type === "pcb_trace").length
if (pcbTraceCount !== 0) failures.push("Routing unexpectedly present in import probe")
const report = { revision: "A4", supplierCode, approved: failures.length === 0, failures, invalidElements, pinReports, warnings, pcbTraceCount, physicalFitApproval: "Separate manufacturer mechanical review is mandatory; not inferred from this electrical/schema audit" }
await writeFile(`evidence/${supplierCode}-strict-audit-A4.json`, `${JSON.stringify(report, null, 2)}\n`)
console.log(JSON.stringify({ supplierCode, failures, pcbTraceCount }, null, 2))
if (failures.length !== 0) process.exitCode = 1
