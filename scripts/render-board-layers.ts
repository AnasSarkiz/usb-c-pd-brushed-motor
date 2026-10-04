import { mkdir, readFile, writeFile } from "node:fs/promises"
import { any_circuit_element } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { Resvg } from "@resvg/resvg-js"
import { z } from "zod"

const circuitJson = z
  .array(any_circuit_element)
  .parse(JSON.parse(await readFile("dist/index/circuit.json", "utf8")))
const manifest = z
  .array(z.object({ ref: z.string() }))
  .parse(JSON.parse(await readFile("docs/design-manifest.json", "utf8")))
const sources = circuitJson.filter(
  (element) => element.type === "source_component",
)
const pcbComponents = circuitJson.filter(
  (element) => element.type === "pcb_component",
)
if (sources.length !== manifest.length || !pcbComponents.length)
  throw new Error(
    "A schematic-only or incomplete artifact cannot be a board-layer review",
  )
for (const source of sources) {
  if (
    !manifest.some((part) => part.ref === source.name) ||
    pcbComponents.filter(
      (pcb) => pcb.source_component_id === source.source_component_id,
    ).length !== 1
  )
    throw new Error(`Missing or duplicate board placement for ${source.name}`)
}
await mkdir("dist/review", { recursive: true })
for (const layer of ["top", "bottom"] as const) {
  const svg = convertCircuitJsonToPcbSvg(circuitJson, {
    layer,
    width: 1800,
    height: 1462,
    hiddenLayerOpacity: 0,
    showCourtyards: true,
    shouldDrawWarnings: true,
    showSolderPaste: true,
    showFabricationNotes: false,
  })
  const path = `dist/review/pcb-${layer}-A22`
  await writeFile(`${path}.svg`, svg)
  await writeFile(`${path}.png`, new Resvg(svg).render().asPng())
}
console.log(
  `Rendered both layers with ${sources.length} verified component placements.`,
)
