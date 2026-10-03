import { readFile, writeFile } from "node:fs/promises"
import {
  any_circuit_element,
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
      await readFile("dist/tests/spdt-import-probe/circuit.json", "utf8"),
    ),
  )
for (const [elementIndex, rawElement] of rawElements.entries()) {
  const result = any_circuit_element.safeParse(rawElement)
  if (result.success) {
    circuitJson.push(result.data)
    continue
  }
  const header = z.object({ type: z.string() }).safeParse(rawElement)
  const elementType = header.success ? header.data.type : "unknown"
  const specific =
    elementType === "pcb_solder_paste"
      ? pcb_solder_paste.safeParse(rawElement)
      : result
  failures.push(
    `Element ${elementIndex} ${elementType}: ${
      specific.success
        ? "element union mismatch"
        : specific.error.issues
            .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
            .join("; ")
    }`,
  )
}

const pinReports = []
for (const componentName of ["SW_DEFAULT", "SW_SPDT"]) {
  const component = circuitJson.find(
    (element) =>
      element.type === "source_component" && element.name === componentName,
  )
  if (!component || component.type !== "source_component") {
    failures.push(`${componentName}: source component missing`)
    continue
  }
  const sourcePorts = circuitJson.filter(
    (element) =>
      element.type === "source_port" &&
      element.source_component_id === component.source_component_id,
  )
  if (sourcePorts.length !== 3)
    failures.push(`${componentName}: expected exactly three source ports`)
  for (const pinNumber of [1, 2, 3]) {
    const sourcePort = sourcePorts.find(
      (element) =>
        element.type === "source_port" && element.pin_number === pinNumber,
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
    const pcbPort = circuitJson.find(
      (element) =>
        element.type === "pcb_port" &&
        element.source_port_id === sourcePort.source_port_id,
    )
    const pad =
      pcbPort?.type === "pcb_port"
        ? circuitJson.find(
            (element) =>
              element.type === "pcb_plated_hole" &&
              element.pcb_port_id === pcbPort.pcb_port_id,
          )
        : undefined
    if (!schematicPort)
      failures.push(`${componentName} pin${pinNumber}: schematic port missing`)
    if (!pad)
      failures.push(`${componentName} pin${pinNumber}: footprint pad missing`)
    // This native right-facing SPDT symbol has its moving contact on the left.
    // The manufacturer specifies physical pin 2 as common; no remapping is made.
    if (
      componentName === "SW_SPDT" &&
      pinNumber === 2 &&
      schematicPort?.type === "schematic_port" &&
      schematicPort.facing_direction !== "left"
    ) {
      failures.push(
        `${componentName}: physical common pin 2 is drawn as a throw; native common is pin 1`,
      )
    }
    if (
      pad?.type === "pcb_plated_hole" &&
      pinNumber === 1 &&
      "hole_width" in pad &&
      "hole_height" in pad &&
      typeof pad.hole_width === "number" &&
      typeof pad.hole_height === "number" &&
      Math.max(pad.hole_width, pad.hole_height) < 1.27
    ) {
      failures.push(
        `${componentName} pin1: hole ${pad.hole_width} × ${pad.hole_height} mm cannot fit nominal 1.27 mm-wide terminal`,
      )
    }
    pinReports.push({
      componentName,
      pinNumber,
      sourcePort,
      schematicPort,
      pcbPort,
      pad,
    })
  }
}

const pcbTraceCount = circuitJson.filter(
  (element) => element.type === "pcb_trace",
).length
if (pcbTraceCount !== 0)
  failures.push("Import probe unexpectedly contains routing")
const report = {
  revision: "A3 C221539 exact-footprint import probe",
  supplierCode: "C221539",
  approved: failures.length === 0,
  failures,
  pcbTraceCount,
  pinReports,
  manufacturerReference: "https://www.ckswitches.com/media/1429/1000.pdf",
  manufacturerCommonPin: 2,
  manufacturerStates: ["1–2", "open", "2–3"],
  manufacturerBodyMm: [12.7, 6.6],
  manufacturerPitchMm: 4.7,
  manufacturerRecommendedRoundDrillMm: 1.85,
  mechanicalMountingFeatures:
    "M2 has no mounting tabs; all three plated pads are electrical",
}
await writeFile(
  "evidence/spdt-pin-pad-check-A3.json",
  `${JSON.stringify(report, null, 2)}\n`,
)
console.log(JSON.stringify({ ...report, pinReports: undefined }, null, 2))
if (failures.length > 0) process.exitCode = 1
