import { createHash } from "node:crypto"
import { readFile, writeFile } from "node:fs/promises"
import { any_circuit_element } from "circuit-json"
import { runAllPlacementChecks } from "@tscircuit/checks"
import { z } from "zod"

const serialized = await readFile("dist/index/circuit.json", "utf8")
const elements = z.array(any_circuit_element).parse(JSON.parse(serialized))
const sources = elements.filter(
  (element) => element.type === "source_component",
)
const components = elements.filter(
  (element) => element.type === "pcb_component",
)
if (
  sources.length !== 140 ||
  components.length !== 152 ||
  sources.some(
    (source) =>
      components.filter(
        (component) =>
          component.source_component_id === source.source_component_id,
      ).length !== 1,
  )
)
  throw new Error("Native placement checks require the complete140-part PCB")

const checks = await runAllPlacementChecks(elements)
const report = {
  artifactSha256: createHash("sha256").update(serialized).digest("hex"),
  purchased: sources.length,
  pcbComponents: components.length,
  checks,
}
await writeFile(
  "evidence/full-placement-checks-A22.json",
  JSON.stringify(report, null, 2) + "\n",
)
console.log(JSON.stringify({ ...report, checks: checks.length }, null, 2))
if (checks.length) process.exitCode = 1
