import { readFile, writeFile } from "node:fs/promises"
import { createHash } from "node:crypto"
import { any_circuit_element } from "circuit-json"
import { z } from "zod"

const raw = JSON.parse(await readFile("dist/index/circuit.json", "utf8"))
const circuitJson = z.array(any_circuit_element).parse(raw)
const manifest = z
  .array(
    z.object({
      ref: z.string(),
      code: z.string(),
      sheet: z.string(),
      pins: z.record(z.string(), z.string()),
      nc: z.array(z.string()),
    }),
  )
  .parse(JSON.parse(await readFile("docs/design-manifest.json", "utf8")))
const issues: string[] = []
const sources = circuitJson.filter(
  (e): e is Extract<typeof e, { type: "source_component" }> =>
    e.type === "source_component",
)
if (sources.length !== manifest.length)
  issues.push("Source component count differs from manifest")
if (new Set(manifest.map((p) => p.ref)).size !== manifest.length)
  issues.push("Duplicate manifest reference")
for (const part of manifest) {
  const source = sources.find((e) => e.name === part.ref)
  if (!source) {
    issues.push(`${part.ref}: missing source`)
    continue
  }
  if (!source.supplier_part_numbers?.jlcpcb?.includes(part.code))
    issues.push(`${part.ref}: supplier identity mismatch`)
  const sheet = circuitJson.find(
    (e) => e.type === "schematic_sheet" && e.name === part.sheet,
  )
  const schematic = circuitJson.find(
    (e) =>
      e.type === "schematic_component" &&
      e.source_component_id === source.source_component_id,
  )
  if (
    sheet?.type !== "schematic_sheet" ||
    sheet.sheet_size !== "a4" ||
    schematic?.type !== "schematic_component" ||
    schematic.schematic_sheet_id !== sheet.schematic_sheet_id
  )
    issues.push(
      `${part.ref}: expected A4 sheet ${part.sheet} membership missing`,
    )
  const ports = circuitJson.filter(
    (e): e is Extract<typeof e, { type: "source_port" }> =>
      e.type === "source_port" &&
      e.source_component_id === source.source_component_id,
  )
  for (const [alias, expectedNet] of Object.entries(part.pins)) {
    const matches = ports.filter(
      (e) => e.name === alias || e.port_hints?.includes(alias),
    )
    if (matches.length !== 1) {
      issues.push(
        `${part.ref}.${alias}: expected one port, found ${matches.length}`,
      )
      continue
    }
    const port = matches[0]
    const net = circuitJson.find(
      (e) =>
        e.type === "source_net" && e.name === expectedNet.replace(/^net\./, ""),
    )
    const traces = circuitJson.filter(
      (e): e is Extract<typeof e, { type: "source_trace" }> =>
        e.type === "source_trace" &&
        e.connected_source_port_ids.includes(port.source_port_id),
    )
    if (
      net?.type !== "source_net" ||
      traces.length !== 1 ||
      traces[0].connected_source_net_ids.length !== 1 ||
      traces[0].connected_source_net_ids[0] !== net.source_net_id ||
      traces[0].connected_source_port_ids.length !== 1
    )
      issues.push(
        `${part.ref}.${alias}: wrong, missing or ambiguous ${expectedNet} connection`,
      )
    const schematicPort = circuitJson.find(
      (e) =>
        e.type === "schematic_port" && e.source_port_id === port.source_port_id,
    )
    if (
      schematicPort?.type !== "schematic_port" ||
      schematic?.type !== "schematic_component" ||
      schematicPort.schematic_component_id !== schematic.schematic_component_id
    )
      issues.push(
        `${part.ref}.${alias}: schematic port missing or wrong symbol`,
      )
  }
  for (const alias of part.nc) {
    const port = ports.find(
      (e) => e.name === alias || e.port_hints?.includes(alias),
    )
    if (!port) issues.push(`${part.ref}.${alias}: no-connect pin missing`)
    else if (
      circuitJson.some(
        (e) =>
          e.type === "source_trace" &&
          e.connected_source_port_ids.includes(port.source_port_id),
      )
    )
      issues.push(`${part.ref}.${alias}: no-connect pin has wiring`)
  }
}
const pcbTraceCount = circuitJson.filter((e) => e.type === "pcb_trace").length
if (pcbTraceCount !== 0)
  issues.push("Copper routing was generated while routing is disabled")
const diagnostics = circuitJson.filter(
  (e) => e.type.includes("warning") || e.type.includes("error"),
)
const warningReview = z
  .object({
    reviewedAdvisories: z.array(
      z.object({
        ref: z.string(),
        code: z.string(),
        type: z.string(),
        message: z.string(),
        importSha256: z.string(),
        wiredPins: z.record(z.string(), z.string()),
      }),
    ),
    unreviewedWarnings: z.array(z.unknown()),
  })
  .parse(
    JSON.parse(await readFile("evidence/main-warning-review-A7.json", "utf8")),
  )
const importManifest = z
  .array(z.object({ code: z.string(), import_path: z.string() }))
  .parse(
    JSON.parse(
      await readFile(
        "evidence/active-supplier-inspection-manifest-A9.json",
        "utf8",
      ),
    ),
  )
if (warningReview.unreviewedWarnings.length)
  issues.push("Manual diagnostic review has unreviewed warnings")
for (const diagnostic of diagnostics) {
  if (diagnostic.type.includes("error")) {
    issues.push(`Generated error ${diagnostic.type}`)
    continue
  }
  const warning = z
    .object({ source_component_id: z.string(), message: z.string() })
    .parse(diagnostic)
  const source = sources.find(
    (e) => e.source_component_id === warning.source_component_id,
  )
  const part = manifest.find((p) => p.ref === source?.name)
  const imported = importManifest.find((p) => p.code === part?.code)
  const sha = imported
    ? createHash("sha256")
        .update(await readFile(imported.import_path))
        .digest("hex")
    : ""
  const reviewed = warningReview.reviewedAdvisories.find(
    (r) =>
      r.ref === part?.ref &&
      r.code === part?.code &&
      r.type === diagnostic.type &&
      r.message === warning.message &&
      r.importSha256 === sha &&
      JSON.stringify(r.wiredPins) === JSON.stringify(part?.pins),
  )
  if (!reviewed)
    issues.push(
      `${source?.name}: new or stale warning review for ${diagnostic.type}`,
    )
}
const report = {
  revision: "A9",
  artifactSha256: createHash("sha256")
    .update(JSON.stringify(raw))
    .digest("hex"),
  componentCount: manifest.length,
  supplierPartCount: new Set(manifest.map((p) => p.code)).size,
  issues,
  pcbTraceCount,
  diagnostics,
  metadataReviewStatus:
    "Raw diagnostics retained; exact source, message and wiring reviewed in main-warning-review-A7.json",
}
await writeFile(
  "evidence/schematic-connectivity-audit-A9.json",
  JSON.stringify(report, null, 2) + "\n",
)
console.log(
  JSON.stringify(
    {
      componentCount: report.componentCount,
      supplierPartCount: report.supplierPartCount,
      issues,
      pcbTraceCount,
      diagnostics: diagnostics.length,
    },
    null,
    2,
  ),
)
if (issues.length) process.exitCode = 1
