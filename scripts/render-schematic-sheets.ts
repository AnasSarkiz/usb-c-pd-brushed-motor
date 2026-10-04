import { mkdir, readFile, writeFile } from "node:fs/promises"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"
import { Resvg } from "@resvg/resvg-js"
import { any_circuit_element } from "circuit-json"
import { z } from "zod"

const circuitJson = z
  .array(any_circuit_element)
  .parse(JSON.parse(await readFile("dist/index/circuit.json", "utf8")))
await mkdir("dist/review", { recursive: true })
for (const element of circuitJson) {
  if (element.type !== "schematic_sheet") continue
  const svg = convertCircuitJsonToSchematicSvg(circuitJson, {
    schematicSheetId: element.schematic_sheet_id,
    width: 1600,
    height: 1131,
    shouldDrawWarnings: true,
  })
  const base = `dist/review/${element.sheet_index}-${element.name}`
  await writeFile(`${base}.svg`, svg)
  await writeFile(`${base}-A22.png`, new Resvg(svg).render().asPng())
}
