import { readFile, writeFile } from "node:fs/promises"
import {
  any_circuit_element,
  pcb_component,
  pcb_solder_paste,
  type AnyCircuitElement,
} from "circuit-json"
import { z } from "zod"

const failures: string[] = []
const circuitJson: AnyCircuitElement[] = []
const rawElements = z
  .array(z.unknown())
  .parse(
    JSON.parse(
      await readFile("dist/tests/sp3t-import-probe/circuit.json", "utf8"),
    ),
  )
for (const [elementIndex, rawElement] of rawElements.entries()) {
  const parsedElement = any_circuit_element.safeParse(rawElement)
  if (parsedElement.success) {
    circuitJson.push(parsedElement.data)
    continue
  }
  const header = z.object({ type: z.string() }).safeParse(rawElement)
  const elementType = header.success ? header.data.type : "unknown"
  const specificResult =
    elementType === "pcb_component"
      ? pcb_component.safeParse(rawElement)
      : elementType === "pcb_solder_paste"
        ? pcb_solder_paste.safeParse(rawElement)
        : parsedElement
  const issueSummary = specificResult.success
    ? "element union mismatch"
    : specificResult.error.issues
        .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
        .join("; ")
  // Retain every schema failure as a blocking result while also auditing the
  // valid port/pad elements; malformed geometry is never repaired or waived.
  failures.push(`Element ${elementIndex} ${elementType}: ${issueSummary}`)
}
for (const componentName of ["SW_ALPS", "SW_CK"]) {
  const component = circuitJson.find(
    (element) =>
      element.type === "source_component" && element.name === componentName,
  )
  if (!component || component.type !== "source_component") {
    failures.push(`${componentName}: source component missing`)
    continue
  }
  const expectedPinCount = componentName === "SW_ALPS" ? 4 : 6
  for (let pinNumber = 1; pinNumber <= expectedPinCount; pinNumber++) {
    const sourcePort = circuitJson.find(
      (element) =>
        element.type === "source_port" &&
        element.source_component_id === component.source_component_id &&
        element.name === `pin${pinNumber}`,
    )
    if (!sourcePort || sourcePort.type !== "source_port") {
      failures.push(`${componentName} pin${pinNumber}: source port missing`)
      continue
    }
    const schematicPort = circuitJson.find(
      (element) =>
        element.type === "schematic_port" &&
        element.source_port_id === sourcePort.source_port_id,
    )
    if (pinNumber <= 4 && !schematicPort)
      failures.push(
        `${componentName} pin${pinNumber}: electrical schematic port missing`,
      )
    const pcbPort = circuitJson.find(
      (element) =>
        element.type === "pcb_port" &&
        element.source_port_id === sourcePort.source_port_id,
    )
    if (
      !pcbPort ||
      pcbPort.type !== "pcb_port" ||
      !circuitJson.some(
        (element) =>
          element.type === "pcb_plated_hole" &&
          element.pcb_port_id === pcbPort.pcb_port_id,
      )
    )
      failures.push(`${componentName} pin${pinNumber}: physical pad missing`)
  }
}
const pcbTraceCount = circuitJson.filter(
  (element) => element.type === "pcb_trace",
).length
if (pcbTraceCount > 0)
  failures.push("Import probe unexpectedly contains routing")
const report = { revision: "A2 import probe", failures, pcbTraceCount }
await writeFile(
  "evidence/sp3t-pin-pad-check-A2.json",
  `${JSON.stringify(report, null, 2)}\n`,
)
console.log(JSON.stringify(report, null, 2))
if (failures.length > 0) process.exitCode = 1
