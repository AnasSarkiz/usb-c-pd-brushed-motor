import { readFile, writeFile } from "node:fs/promises"
import { createHash } from "node:crypto"
import { any_circuit_element } from "circuit-json"
import { z } from "zod"
const manifest = z
  .array(
    z.object({
      ref: z.string(),
      code: z.string(),
      import_path: z.string(),
      pins: z.record(z.string(), z.string()),
      nc: z.array(z.string()),
    }),
  )
  .parse(
    JSON.parse(
      await readFile(
        "evidence/active-supplier-inspection-manifest-A9.json",
        "utf8",
      ),
    ),
  )
const issues: string[] = []
const parts = []
let totalPcbTraces = 0
for (const part of manifest) {
  const path = `dist/tests/supplier-audit/${part.code}/circuit.json`
  const raw: unknown = JSON.parse(await readFile(path, "utf8"))
  const parsed = z.array(any_circuit_element).safeParse(raw)
  const sourceSha256 = createHash("sha256")
    .update(await readFile(part.import_path))
    .digest("hex")
  if (!parsed.success) {
    parts.push({
      code: part.code,
      ref: part.ref,
      sourceSha256,
      path,
      schemaIssues: parsed.error.issues,
      status: "failed",
    })
    issues.push(`${part.code}: generated circuit-json schema failure`)
    continue
  }
  const elements = parsed.data
  const localIssues: string[] = []
  const source = elements.find(
    (e) => e.type === "source_component" && e.name === part.ref,
  )
  const ports = []
  if (elements.filter((e) => e.type === "source_component").length !== 1)
    localIssues.push("Probe does not contain exactly one supplier component")
  const sheet = elements.find(
    (e) => e.type === "schematic_sheet" && e.name === "probe",
  )
  if (sheet?.type !== "schematic_sheet" || sheet.sheet_size !== "a4")
    localIssues.push("Required native A4 sheet absent")
  if (source?.type !== "source_component")
    localIssues.push("source component absent")
  else {
    if (!source.supplier_part_numbers?.jlcpcb?.includes(part.code))
      localIssues.push("supplier identity mismatch")
    const sourcePortCount = elements.filter(
      (e) =>
        e.type === "source_port" &&
        e.source_component_id === source.source_component_id,
    ).length
    if (sourcePortCount !== Object.keys(part.pins).length + part.nc.length)
      localIssues.push(
        "Extra or missing electrical source pins outside the reviewed manifest",
      )
    for (const alias of [...Object.keys(part.pins), ...part.nc]) {
      const port = elements.find(
        (e) =>
          e.type === "source_port" &&
          e.source_component_id === source.source_component_id &&
          (e.name === alias || e.port_hints?.includes(alias)),
      )
      if (port?.type !== "source_port") {
        localIssues.push(`${alias}: source port absent`)
        continue
      }
      const pcbPort = elements.find(
        (e) =>
          e.type === "pcb_port" && e.source_port_id === port.source_port_id,
      )
      if (pcbPort?.type !== "pcb_port") {
        localIssues.push(`${alias}: PCB port absent`)
        continue
      }
      const pads = elements.filter(
        (e) =>
          (e.type === "pcb_smtpad" || e.type === "pcb_plated_hole") &&
          e.pcb_port_id === pcbPort.pcb_port_id,
      )
      if (!pads.length)
        localIssues.push(`${alias}: electrical footprint pad absent`)
      if (
        part.pins[alias] &&
        !elements.some(
          (e) =>
            e.type === "schematic_port" &&
            e.source_port_id === port.source_port_id,
        )
      )
        localIssues.push(`${alias}: schematic port absent`)
      ports.push({
        alias,
        pinNumber: port.pin_number,
        pcbPortId: pcbPort.pcb_port_id,
        pads,
      })
    }
  }
  const pcbTraceCount = elements.filter((e) => e.type === "pcb_trace").length
  totalPcbTraces += pcbTraceCount
  if (pcbTraceCount) localIssues.push("Unexpected routed copper")
  const diagnostics = elements.filter(
    (e) => e.type.includes("warning") || e.type.includes("error"),
  )
  if (diagnostics.some((e) => e.type.includes("error")))
    localIssues.push("Native generated error diagnostics remain")
  parts.push({
    code: part.code,
    ref: part.ref,
    sourceSha256,
    path,
    ports,
    pcbTraceCount,
    diagnostics,
    issues: localIssues,
    status: localIssues.length
      ? "failed"
      : "electrical/schema pass; metadata and mechanical approval separate",
  })
  issues.push(...localIssues.map((i) => `${part.code} ${part.ref}: ${i}`))
}
const report = {
  revision: "A9",
  supplierCount: parts.length,
  totalPcbTraces,
  issues,
  parts,
}
await writeFile(
  "evidence/active-import-audit-A9.json",
  JSON.stringify(report, null, 2) + "\n",
)
console.log(
  JSON.stringify(
    { supplierCount: parts.length, totalPcbTraces, issues },
    null,
    2,
  ),
)
if (issues.length) process.exitCode = 1
