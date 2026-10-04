import { readFile, writeFile } from "node:fs/promises"
import { any_circuit_element } from "circuit-json"
import { inkBounds } from "./silkscreen-geometry"
import { z } from "zod"
import { productPlacement } from "../circuit/product-placement"

interface Bounds {
  left: number
  right: number
  bottom: number
  top: number
}
const elements = z
  .array(any_circuit_element)
  .parse(JSON.parse(await readFile("dist/index/circuit.json", "utf8")))
if (
  elements.filter((e) => e.type === "source_component").length !== 140 ||
  elements.filter((e) => e.type === "pcb_component").length < 140
)
  throw new Error("Incomplete PCB cannot plan printing")
function collide(a: Bounds, b: Bounds) {
  const gap = 0.2
  return (
    a.left < b.right + gap &&
    a.right + gap > b.left &&
    a.bottom < b.top + gap &&
    a.top + gap > b.bottom
  )
}
const obstacles: Bounds[] = elements.flatMap((e) => {
  if (e.type === "pcb_via")
    return [
      {
        left: e.x - e.outer_diameter / 2,
        right: e.x + e.outer_diameter / 2,
        bottom: e.y - e.outer_diameter / 2,
        top: e.y + e.outer_diameter / 2,
      },
    ]
  if (e.type === "pcb_hole" && e.hole_shape === "circle")
    return [
      {
        left: e.x - e.hole_diameter / 2,
        right: e.x + e.hole_diameter / 2,
        bottom: e.y - e.hole_diameter / 2,
        top: e.y + e.hole_diameter / 2,
      },
    ]
  if (e.type !== "pcb_plated_hole") return []
  if (e.shape === "circle")
    return [
      {
        left: e.x - e.outer_diameter / 2,
        right: e.x + e.outer_diameter / 2,
        bottom: e.y - e.outer_diameter / 2,
        top: e.y + e.outer_diameter / 2,
      },
    ]
  if (e.shape !== "pill") throw new Error(`Unreviewed hole shape ${e.shape}`)
  const theta = ((e.ccw_rotation ?? 0) * Math.PI) / 180
  const w =
    Math.abs(Math.cos(theta)) * e.outer_width +
    Math.abs(Math.sin(theta)) * e.outer_height
  const h =
    Math.abs(Math.sin(theta)) * e.outer_width +
    Math.abs(Math.cos(theta)) * e.outer_height
  return [
    {
      left: e.x - w / 2,
      right: e.x + w / 2,
      bottom: e.y - h / 2,
      top: e.y + h / 2,
    },
  ]
})
const accepted = [
  inkBounds({ text: "A22 PROTOTYPE", fontSize: 1.2, x: 0, y: 31.5 }),
]
const offsets: Record<string, { x: number; y: number }> = {}
const preferred: Record<string, { x: number; y: number }> = {
  SW1: { x: 7, y: 0 },
  U4: { x: 0, y: -6.5 },
  U5: { x: 0, y: -4.9 },
  U10: { x: 0, y: -4.8 },
}
for (const [reference, placement] of Object.entries(productPlacement)) {
  const origin = preferred[reference] ?? { x: 0, y: 0 }
  const candidates = []
  for (let x = -4; x <= 4; x += 0.5)
    for (let y = -4; y <= 4; y += 0.5)
      candidates.push({
        x: origin.x + x,
        y: origin.y + y,
        cost: Math.hypot(x, y) + 0.1 * Math.abs(x),
      })
  candidates.sort((a, b) => a.cost - b.cost)
  const candidate = candidates.find((c) => {
    const b = inkBounds({
      text: reference,
      fontSize: 1.2,
      x: placement.x + c.x,
      y: placement.y + c.y,
    })
    return (
      b.left >= -39.5 &&
      b.right <= 39.5 &&
      b.bottom >= -32 &&
      b.top <= 32 &&
      ![...accepted, ...obstacles].some((other) => collide(b, other))
    )
  })
  if (!candidate) throw new Error(`No clear underside reference ${reference}`)
  offsets[reference] = { x: candidate.x, y: candidate.y }
  accepted.push(
    inkBounds({
      text: reference,
      fontSize: 1.2,
      x: placement.x + candidate.x,
      y: placement.y + candidate.y,
    }),
  )
}
await writeFile(
  "circuit/underside-label-offsets.ts",
  `// Board artwork only: 0.2mm ink/pad/hole gaps, unchanged supplier definitions.\nexport const undersideLabelOffsets: Record<string,{x:number;y:number}>=${JSON.stringify(offsets, null, 2)}\n`,
)
await writeFile(
  "evidence/underside-label-plan-A22.json",
  JSON.stringify(
    {
      fontSizeMm: 1.2,
      strokeWidthMm: 0.108,
      process:
        "JLC high-precision printing; >=0.1mm strokes, >=0.8mm glyph height",
      count: Object.keys(offsets).length,
      offsets,
    },
    null,
    2,
  ) + "\n",
)
console.log(
  `Placed ${Object.keys(offsets).length} underside references clear of drills and each other.`,
)
