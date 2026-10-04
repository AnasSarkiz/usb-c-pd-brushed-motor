import { readFile, writeFile } from "node:fs/promises"
import { z } from "zod"
import { any_circuit_element } from "circuit-json"
import { getFullConnectivityMapFromCircuitJson } from "circuit-json-to-connectivity-map"
const elements = z
  .array(any_circuit_element)
  .parse(JSON.parse(await readFile("dist/index/circuit.json", "utf8")))
if (
  elements.filter((e) => e.type === "source_component").length !== 140 ||
  !elements.some((e) => e.type === "pcb_trace")
)
  throw new Error("Full routed board required")
const connectivity = getFullConnectivityMapFromCircuitJson(elements)
await writeFile(
  "evidence/copper-net-map-A22.json",
  JSON.stringify(connectivity.idToNetMap, null, 2) + "\n",
)
