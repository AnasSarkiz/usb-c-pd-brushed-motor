import { createHash } from "node:crypto"
import { readFile, writeFile } from "node:fs/promises"
import { gzipSync } from "node:zlib"
import { any_circuit_element } from "circuit-json"
import { z } from "zod"

const probes = [
  "coordinate-serialization-probe",
  "native-manual-placement-probe",
  "native-numeric-placement-probe",
]
const reports = []
for (const probe of probes) {
  const sourcePath = `tests/${probe}.circuit.tsx`
  const outputPath = `dist/tests/${probe}/circuit.json`
  const serialized = await readFile(outputPath, "utf8")
  await writeFile(`evidence/${probe}-A12.circuit.json`, serialized)
  const raw: unknown = JSON.parse(serialized)
  const parsed = z.array(any_circuit_element).safeParse(raw)
  const issues: string[] = []
  const components = []
  if (parsed.success) {
    const elements = parsed.data
    for (const element of elements) {
      if (element.type.endsWith("_error") || element.type.endsWith("_warning"))
        issues.push(`Unresolved ${element.type}`)
      if (element.type === "pcb_trace") issues.push("Unexpected routed copper")
      if (element.type !== "pcb_component") continue
      const source = elements.find(
        (candidate) =>
          candidate.type === "source_component" &&
          candidate.source_component_id === element.source_component_id,
      )
      if (source?.type !== "source_component") {
        issues.push("PCB component has no source")
        continue
      }
      if (!source.supplier_part_numbers?.jlcpcb?.includes("C23162"))
        issues.push(`${source.name}: unexpected supplier identity`)
      const expected =
        source.name === "R1"
          ? { x: -4, y: 3, rotation: 0 }
          : { x: 4, y: -3, rotation: 90 }
      if (
        probe === "native-numeric-placement-probe" &&
        (element.center.x !== expected.x ||
          element.center.y !== expected.y ||
          element.rotation !== expected.rotation)
      )
        issues.push(`${source.name}: component transform does not match input`)
      const pads = elements.filter(
        (candidate) =>
          candidate.type === "pcb_smtpad" &&
          candidate.pcb_component_id === element.pcb_component_id,
      )
      const ports = elements.filter(
        (candidate) =>
          candidate.type === "pcb_port" &&
          candidate.pcb_component_id === element.pcb_component_id,
      )
      if (pads.length !== 2 || ports.length !== 2)
        issues.push(`${source.name}: expected two electrical pads and ports`)
      for (const pad of pads) {
        if (pad.type !== "pcb_smtpad") continue
        if (pad.shape !== "rect") {
          issues.push(`${source.name}: unexpected pad shape`)
          continue
        }
        if (Math.hypot(pad.x - element.center.x, pad.y - element.center.y) > 1)
          issues.push(
            `${source.name}: pad lost its component-relative position`,
          )
        const expectedWidth = element.rotation === 90 ? 0.8640064 : 0.8064754
        const expectedHeight = element.rotation === 90 ? 0.8064754 : 0.8640064
        if (
          Math.abs(pad.width - expectedWidth) > 1e-8 ||
          Math.abs(pad.height - expectedHeight) > 1e-8
        )
          issues.push(`${source.name}: pad rotation or dimension changed`)
      }
      for (const port of ports) {
        if (port.type !== "pcb_port") continue
        const pad = pads.find(
          (candidate) =>
            candidate.type === "pcb_smtpad" &&
            candidate.pcb_port_id === port.pcb_port_id,
        )
        if (
          pad?.type !== "pcb_smtpad" ||
          pad.shape !== "rect" ||
          Math.hypot(pad.x - port.x, pad.y - port.y) > 1e-8
        )
          issues.push(`${source.name}: electrical port and pad disagree`)
      }
      components.push({ name: source.name, pcb: element, pads, ports })
    }
    if (probe === "native-numeric-placement-probe" && components.length !== 2)
      issues.push("Expected exactly two supplier components")
  }
  reports.push({
    probe,
    sourcePath,
    sourceSha256: createHash("sha256")
      .update(await readFile(sourcePath))
      .digest("hex"),
    outputSha256: createHash("sha256").update(serialized).digest("hex"),
    status:
      parsed.success && issues.length === 0 ? "passed" : "failed: retained",
    schemaIssues: parsed.success ? [] : parsed.error.issues,
    issues,
    components,
  })
}
const report = {
  revision: "A12",
  productPlacementStarted: false,
  officialDependenciesUnchanged: true,
  reports,
}
// Preserve complete union-schema diagnostics in a lossless archive rather
// than repeating hundreds of thousands of union branches in review JSON.
const serializedReport = JSON.stringify(report, null, 2) + "\n"
const completeReportPath = "evidence/native-placement-audit-A12-full.json.gz"
await writeFile(completeReportPath, gzipSync(serializedReport))
await writeFile(
  "evidence/native-placement-audit-A12.json",
  JSON.stringify(
    {
      revision: report.revision,
      productPlacementStarted: false,
      officialDependenciesUnchanged: true,
      completeReportPath,
      completeReportSha256: createHash("sha256")
        .update(serializedReport)
        .digest("hex"),
      reports: reports.map(({ schemaIssues, ...probeReport }) => ({
        ...probeReport,
        schemaIssueCount: schemaIssues.length,
        schemaDiagnostics: "Complete unfiltered issues in lossless archive",
      })),
    },
    null,
    2,
  ) + "\n",
)
console.log(
  JSON.stringify(
    reports.map(({ probe, status, schemaIssues, issues }) => ({
      probe,
      status,
      schemaIssueCount: schemaIssues.length,
      issues,
    })),
    null,
    2,
  ),
)
if (reports.some(({ status }) => status !== "passed")) process.exitCode = 1
