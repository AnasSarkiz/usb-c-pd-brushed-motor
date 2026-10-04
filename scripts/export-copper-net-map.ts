import { readFile, writeFile } from "node:fs/promises"
import { z } from "zod"
import { any_circuit_element } from "circuit-json"
import { getFullConnectivityMapFromCircuitJson } from "circuit-json-to-connectivity-map"
const elements = z
  .array(any_circuit_element)
  .parse(JSON.parse(await readFile("dist/index/circuit.json", "utf8")))
const routingPhase = z
  .enum(["routed", "unrouted"])
  .parse(process.argv[2] ?? "routed")
const outputPath = process.argv[3] ?? "evidence/copper-net-map-A22.json"
if (
  elements.filter((e) => e.type === "source_component").length !== 140 ||
  elements.some((e) => e.type === "pcb_trace") !== (routingPhase === "routed")
)
  throw new Error(`Full ${routingPhase} board required`)
const connectivity = getFullConnectivityMapFromCircuitJson(elements)
await writeFile(
  outputPath,
  JSON.stringify(connectivity.idToNetMap, null, 2) + "\n",
)
