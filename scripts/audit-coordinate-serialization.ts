import { readFile, writeFile } from "node:fs/promises"
import { pcb_component, any_circuit_element } from "circuit-json"
import { z } from "zod"
const raw = z
  .array(z.unknown())
  .parse(
    JSON.parse(
      await readFile(
        "dist/tests/coordinate-serialization-probe/circuit.json",
        "utf8",
      ),
    ),
  )
const failures = []
for (const [index, element] of raw.entries()) {
  const header = z.object({ type: z.string() }).parse(element)
  const parsed =
    header.type === "pcb_component"
      ? pcb_component.safeParse(element)
      : any_circuit_element.safeParse(element)
  if (!parsed.success)
    failures.push({ index, element, issues: parsed.error.issues })
}
const report = {
  revision: "A8",
  source: "tests/coordinate-serialization-probe.circuit.tsx",
  inputCoordinates: { pcbX: "2mm", pcbY: "-2mm" },
  status: failures.length ? "blocked: generated schema failure" : "passed",
  failures,
}
await writeFile(
  "evidence/coordinate-serialization-A8.json",
  JSON.stringify(report, null, 2) + "\n",
)
console.log(JSON.stringify(report, null, 2))
if (failures.length) process.exitCode = 1
