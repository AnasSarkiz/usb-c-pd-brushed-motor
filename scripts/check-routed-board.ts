import { readFile, writeFile } from "node:fs/promises"
import { createHash } from "node:crypto"
import { any_circuit_element } from "circuit-json"
import { z } from "zod"
import { runAllRoutingChecks } from "@tscircuit/checks"
const artifact = await readFile("dist/index/circuit.json", "utf8")
const artifactSha256 = createHash("sha256").update(artifact).digest("hex")
const elements = z.array(any_circuit_element).parse(JSON.parse(artifact))
const purchased = elements.filter((e) => e.type === "source_component").length
const traces = elements.filter((e) => e.type === "pcb_trace").length
if (
  purchased !== 140 ||
  !elements.some((e) => e.type === "pcb_component") ||
  !traces
)
  throw new Error(
    "Routed checks require the complete140-part PCB and actual traces",
  )
const checks = await runAllRoutingChecks(elements)
await writeFile(
  "evidence/native-routed-checks-A22.json",
  JSON.stringify({ artifactSha256, purchased, traces, checks }, null, 2) + "\n",
)
console.log(
  JSON.stringify(
    {
      purchased,
      traces,
      diagnostics: checks.length,
      types: [...new Set(checks.map((check) => check.type))],
    },
    null,
    2,
  ),
)
if (checks.length) process.exitCode = 1
