import { createHash } from "node:crypto"
import { readFile, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { Resvg } from "@resvg/resvg-js"
import { z } from "zod"

const directory = z.string().min(1).parse(process.argv[2])
const manifest = z
  .object({
    artifactSha256: z.string(),
    files: z.array(
      z.object({
        name: z.string(),
        sha256: z.string(),
        svgSha256: z.string().optional(),
      }),
    ),
  })
  .parse(
    JSON.parse(
      await readFile(join(directory, "manufacturing-review.json"), "utf8"),
    ),
  )
const renders = []
for (const file of manifest.files) {
  if (!file.name.endsWith(".gbr") && !file.name.endsWith(".drl")) continue
  const source = await readFile(join(directory, file.name))
  const svg = await readFile(join(directory, `${file.name}.svg`))
  if (
    createHash("sha256").update(source).digest("hex") !== file.sha256 ||
    createHash("sha256").update(svg).digest("hex") !== file.svgSha256
  )
    throw new Error(`Manufacturing render source differs: ${file.name}`)
  const png = new Resvg(svg, {
    background: "white",
    fitTo: { mode: "width", value: 1800 },
  })
    .render()
    .asPng()
  await writeFile(join(directory, `${file.name}.png`), png)
  renders.push({
    name: `${file.name}.png`,
    sourceSha256: file.sha256,
    svgSha256: file.svgSha256,
    pngSha256: createHash("sha256").update(png).digest("hex"),
  })
}
if (renders.length !== 14)
  throw new Error("Expected all12 Gerber layers and both drill renders")
await writeFile(
  join(directory, "manufacturing-render-manifest.json"),
  JSON.stringify(
    { artifactSha256: manifest.artifactSha256, renders },
    null,
    2,
  ) + "\n",
)
console.log(`Rendered all${renders.length} native manufacturing files`)
