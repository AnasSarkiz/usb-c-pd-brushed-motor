import { writeFile } from "node:fs/promises"
import { fanoutTracePath } from "@tscircuit/props"
import { z } from "zod"
import { PowerRouting } from "../circuit/PowerRouting"

// Inspect the supported native phase props, without evaluating or rewriting
// supplier definitions or replacing the native routing implementation.
const phases = z
  .object({
    props: z.object({
      children: z.array(
        z.object({
          props: z.object({
            pcbTracePaths: z.array(fanoutTracePath).optional(),
          }),
        }),
      ),
    }),
  })
  .parse(PowerRouting())
const paths = phases.props.children.flatMap(
  (phase) => phase.props.pcbTracePaths ?? [],
)
if (paths.length !== 7)
  throw new Error(
    "Expected the seven declared native switching/motor backbones",
  )
await writeFile(
  "evidence/native-power-routing-intent-A22.json",
  JSON.stringify(paths, null, 2) + "\n",
)
console.log(
  `Exported ${paths.length} native saved power paths for planning review`,
)
