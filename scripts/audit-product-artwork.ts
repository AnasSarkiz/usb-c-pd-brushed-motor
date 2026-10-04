import { readFile, writeFile } from "node:fs/promises"
import { createHash } from "node:crypto"
import { any_circuit_element } from "circuit-json"
import { z } from "zod"
import { applyToPoint, rotateDEG } from "transformation-matrix"
import { inkBounds, type Bounds } from "./silkscreen-geometry"
const artifact = await readFile("dist/index/circuit.json", "utf8")
const elements = z.array(any_circuit_element).parse(JSON.parse(artifact))
const texts = elements.filter((e) => e.type === "pcb_silkscreen_text")
const issues: string[] = []
const evaluated = texts.map((text) => {
  const local = inkBounds({
    text: text.text,
    fontSize: text.font_size,
    x: 0,
    y: 0,
  })
  const matrix = rotateDEG(text.ccw_rotation ?? 0)
  const points = [
    { x: local.left, y: local.bottom },
    { x: local.left, y: local.top },
    { x: local.right, y: local.bottom },
    { x: local.right, y: local.top },
  ].map((p) => applyToPoint(matrix, p))
  const bounds = {
    left: Math.min(...points.map((p) => p.x)) + text.anchor_position.x,
    right: Math.max(...points.map((p) => p.x)) + text.anchor_position.x,
    bottom: Math.min(...points.map((p) => p.y)) + text.anchor_position.y,
    top: Math.max(...points.map((p) => p.y)) + text.anchor_position.y,
  }
  if (
    bounds.left < -39.5 ||
    bounds.right > 39.5 ||
    bounds.bottom < -32 ||
    bounds.top > 32
  )
    issues.push(`${text.layer}:${text.text}: ink closer than0.5mm to edge`)
  if (text.font_size < 1.2) issues.push(`${text.text}: unqualified small font`)
  return { label: text.text, layer: text.layer, bounds }
})
function overlap(a: Bounds, b: Bounds) {
  return (
    a.left < b.right + 0.15 &&
    a.right + 0.15 > b.left &&
    a.bottom < b.top + 0.15 &&
    a.top + 0.15 > b.bottom
  )
}
for (const [index, text] of evaluated.entries())
  for (const other of evaluated.slice(index + 1))
    if (text.layer === other.layer && overlap(text.bounds, other.bounds))
      issues.push(
        `${text.layer}:${text.label}/${other.label}: ink overlap/clearance`,
      )
for (const text of evaluated)
  for (const pad of elements) {
    let bounds: Bounds | undefined
    if (pad.type === "pcb_smtpad" && pad.layer === text.layer) {
      if (pad.shape === "polygon")
        bounds = {
          left: Math.min(...pad.points.map((p) => p.x)),
          right: Math.max(...pad.points.map((p) => p.x)),
          bottom: Math.min(...pad.points.map((p) => p.y)),
          top: Math.max(...pad.points.map((p) => p.y)),
        }
      else if (pad.shape === "circle")
        bounds = {
          left: pad.x - pad.radius,
          right: pad.x + pad.radius,
          bottom: pad.y - pad.radius,
          top: pad.y + pad.radius,
        }
      else if (pad.shape === "rect" || pad.shape === "pill")
        bounds = {
          left: pad.x - pad.width / 2,
          right: pad.x + pad.width / 2,
          bottom: pad.y - pad.height / 2,
          top: pad.y + pad.height / 2,
        }
      else if (pad.shape === "rotated_rect" || pad.shape === "rotated_pill") {
        const matrix = rotateDEG(pad.ccw_rotation)
        const corners = [
          { x: -pad.width / 2, y: -pad.height / 2 },
          { x: -pad.width / 2, y: pad.height / 2 },
          { x: pad.width / 2, y: -pad.height / 2 },
          { x: pad.width / 2, y: pad.height / 2 },
        ].map((p) => applyToPoint(matrix, p))
        bounds = {
          left: pad.x + Math.min(...corners.map((p) => p.x)),
          right: pad.x + Math.max(...corners.map((p) => p.x)),
          bottom: pad.y + Math.min(...corners.map((p) => p.y)),
          top: pad.y + Math.max(...corners.map((p) => p.y)),
        }
      } else throw new Error("Unaudited SMT shape")
    } else if (pad.type === "pcb_via")
      bounds = {
        left: pad.x - pad.outer_diameter / 2,
        right: pad.x + pad.outer_diameter / 2,
        bottom: pad.y - pad.outer_diameter / 2,
        top: pad.y + pad.outer_diameter / 2,
      }
    else if (pad.type === "pcb_hole" && pad.hole_shape === "circle")
      bounds = {
        left: pad.x - pad.hole_diameter / 2,
        right: pad.x + pad.hole_diameter / 2,
        bottom: pad.y - pad.hole_diameter / 2,
        top: pad.y + pad.hole_diameter / 2,
      }
    else if (pad.type === "pcb_plated_hole") {
      if (pad.shape === "circle")
        bounds = {
          left: pad.x - pad.outer_diameter / 2,
          right: pad.x + pad.outer_diameter / 2,
          bottom: pad.y - pad.outer_diameter / 2,
          top: pad.y + pad.outer_diameter / 2,
        }
      else if (pad.shape === "pill") {
        const matrix = rotateDEG(pad.ccw_rotation ?? 0)
        const corners = [
          { x: -pad.outer_width / 2, y: -pad.outer_height / 2 },
          { x: -pad.outer_width / 2, y: pad.outer_height / 2 },
          { x: pad.outer_width / 2, y: -pad.outer_height / 2 },
          { x: pad.outer_width / 2, y: pad.outer_height / 2 },
        ].map((p) => applyToPoint(matrix, p))
        bounds = {
          left: pad.x + Math.min(...corners.map((p) => p.x)),
          right: pad.x + Math.max(...corners.map((p) => p.x)),
          bottom: pad.y + Math.min(...corners.map((p) => p.y)),
          top: pad.y + Math.max(...corners.map((p) => p.y)),
        }
      } else throw new Error(`Unaudited PTH shape ${pad.shape}`)
    }
    if (bounds && overlap(text.bounds, bounds))
      issues.push(
        `${text.layer}:${text.label}: exposed pad/drill ink clearance (${pad.type} ${JSON.stringify(bounds)})`,
      )
  }
const report = {
  revision: "A22",
  artifactSha256: createHash("sha256").update(artifact).digest("hex"),
  highPrecisionSilkscreenRequired: true,
  texts: evaluated,
  issues,
}
await writeFile(
  "evidence/product-artwork-audit-A22.json",
  JSON.stringify(report, null, 2) + "\n",
)
console.log(JSON.stringify({ labels: texts.length, issues }, null, 2))
if (issues.length) process.exitCode = 1
