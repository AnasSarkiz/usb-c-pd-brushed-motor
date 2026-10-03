import { readFile, writeFile } from "node:fs/promises"
import { createHash } from "node:crypto"
import { any_circuit_element } from "circuit-json"
import { z } from "zod"

const previousAudit = z
  .object({
    parts: z.array(z.object({ code: z.string(), sourceSha256: z.string() })),
  })
  .parse(
    JSON.parse(await readFile("evidence/active-import-audit-A7.json", "utf8")),
  )
const manifest = z
  .array(
    z.object({
      code: z.string(),
      ref: z.string(),
      import_path: z.string(),
    }),
  )
  .parse(
    JSON.parse(
      await readFile(
        "evidence/active-supplier-inspection-manifest-A7.json",
        "utf8",
      ),
    ),
  )
const issues: string[] = []
const reviewedVias = []
for (const code of ["C1849461", "C44377", "C1855818"]) {
  const part = manifest.find((entry) => entry.code === code)
  if (!part) throw new Error(`Supplier manifest missing ${code}`)
  const importedSha256 = createHash("sha256")
    .update(await readFile(part.import_path))
    .digest("hex")
  if (
    importedSha256 !==
    previousAudit.parts.find((entry) => entry.code === code)?.sourceSha256
  )
    issues.push(`${code}: supplier model changed`)
  const elements = z
    .array(any_circuit_element)
    .parse(
      JSON.parse(
        await readFile(
          `dist/tests/supplier-audit/${code}/circuit.json`,
          "utf8",
        ),
      ),
    )
  const board = elements.find((entry) => entry.type === "pcb_board")
  if (board?.type !== "pcb_board" || board.is_via_in_pad_allowed !== true)
    issues.push(`${code}: checker permission not serialized`)
  const ep = elements.find(
    (entry) =>
      entry.type === "source_port" &&
      (entry.name === "EP" || entry.port_hints?.includes("EP")),
  )
  if (ep?.type !== "source_port") throw new Error(`${code}: EP absent`)
  const vias = elements.filter((entry) => entry.type === "pcb_via")
  if (vias.length !== 4)
    issues.push(`${code}: expected four existing imported vias`)
  for (const via of vias) {
    const trace = elements.find(
      (entry) =>
        entry.type === "source_trace" &&
        entry.source_trace_id === via.source_trace_id,
    )
    if (
      trace?.type !== "source_trace" ||
      !trace.connected_source_port_ids.includes(ep.source_port_id)
    )
      issues.push(`${code} ${via.pcb_via_id}: EP connectivity missing`)
  }
  reviewedVias.push({ code, ref: part.ref, importedSha256, vias })
  const source = await readFile(
    `tests/supplier-audit/${code}.circuit.tsx`,
    "utf8",
  )
  if (
    !source.includes("routingDisabled") ||
    !source.includes("autorouter={{ allowViaInPad: false }}")
  )
    issues.push(`${code}: disabled routing / router prohibition missing`)
}
const mainSource = await readFile("index.circuit.tsx", "utf8")
if (
  !mainSource.includes("routingDisabled") ||
  !mainSource.includes("isViaInPadAllowed={true}") ||
  !mainSource.includes("autorouter={{ allowViaInPad: false }}")
)
  issues.push("Main board policy mismatch")
const report = {
  revision: "A9",
  issues,
  reviewedVias,
  limitation:
    "Board-wide checker permission, not a per-via exception. No routing executed; assembler process and thermal copper still require review.",
}
await writeFile(
  "evidence/thermal-via-policy-A9.json",
  JSON.stringify(report, null, 2) + "\n",
)
console.log(
  JSON.stringify(
    {
      issues,
      reviewedImportedViaCount: reviewedVias.reduce(
        (count, part) => count + part.vias.length,
        0,
      ),
    },
    null,
    2,
  ),
)
if (issues.length) process.exitCode = 1
