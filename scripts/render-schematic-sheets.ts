import { mkdir, readFile, writeFile } from "node:fs/promises"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"
import { any_circuit_element } from "circuit-json"
import { z } from "zod"

const circuitJson = z
  .array(any_circuit_element)
  .parse(JSON.parse(await readFile("dist/index/circuit.json", "utf8")))
await mkdir("dist/review", { recursive: true })
for (const element of circuitJson) {
  if (element.type !== "schematic_sheet") continue
  await writeFile(
    `dist/review/${element.sheet_index}-${element.name}.svg`,
    convertCircuitJsonToSchematicSvg(circuitJson, {
      schematicSheetId: element.schematic_sheet_id,
      width: 1600,
      height: 1131,
      shouldDrawWarnings: true,
    }),
  )
}
