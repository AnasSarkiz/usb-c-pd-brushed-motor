import { createHash } from "node:crypto"
import { readFile, writeFile } from "node:fs/promises"
import {
  applyToPoint,
  compose,
  rotateDEG,
  translate,
} from "transformation-matrix"
import { any_circuit_element } from "circuit-json"
import { z } from "zod"
import { productPlacement } from "../circuit/product-placement"
import stackup from "../docs/STACKUP-A31.json"
const routingPhase = z
  .enum(["unrouted", "routed"])
  .parse(process.argv[2] ?? "unrouted")
const artifact = await readFile("dist/index/circuit.json", "utf8")
const elements = z.array(any_circuit_element).parse(JSON.parse(artifact))
const board = elements.find((element) => element.type === "pcb_board")
const copperLayers = z
  .array(z.enum(["top", "inner1", "inner2", "bottom"]))
  .parse(stackup.copperLayers.map((layer) => layer.name))
if (board?.num_layers !== copperLayers.length)
  throw new Error("Native board layer count differs from manufacturing stackup")
const manifest = z
  .array(
    z.object({
      ref: z.string(),
      code: z.string(),
      pins: z.record(z.string(), z.string()),
      nc: z.array(z.string()),
    }),
  )
  .parse(JSON.parse(await readFile("docs/design-manifest.json", "utf8")))
const sources = elements.filter((e) => e.type === "source_component")
const issues: string[] = []
const inspected = []
let expectedVias = 0
const close = (a: number, b: number) => Math.abs(a - b) < 1e-6
if (
  sources.length !== manifest.length ||
  Object.keys(productPlacement).length !== manifest.length
)
  issues.push("Incomplete source/placement inventory")
for (const part of manifest) {
  const placement = Object.entries(productPlacement).find(
    ([reference]) => reference === part.ref,
  )?.[1]
  const source = sources.find((e) => e.name === part.ref)
  const pcb = elements.find(
    (e) =>
      e.type === "pcb_component" &&
      e.source_component_id === source?.source_component_id,
  )
  if (!placement || !source || pcb?.type !== "pcb_component") {
    issues.push(`${part.ref}: missing placement/PCB/source`)
    continue
  }
  const probe = z
    .array(any_circuit_element)
    .parse(
      JSON.parse(
        await readFile(
          `dist/tests/supplier-audit/${part.code}/circuit.json`,
          "utf8",
        ),
      ),
    )
  const originSource = probe.find((e) => e.type === "source_component")
  const origin = probe.find(
    (e) =>
      e.type === "pcb_component" &&
      e.source_component_id === originSource?.source_component_id,
  )
  if (origin?.type !== "pcb_component") {
    issues.push(`${part.ref}: missing validated supplier PCB`)
    continue
  }
  const footprintToBoard = compose(
    translate(placement.x, placement.y),
    rotateDEG(placement.ccwRotationDegrees),
  )
  const expectedCenter = applyToPoint(footprintToBoard, origin.center)
  const rotation = ((placement.ccwRotationDegrees % 360) + 360) % 360
  if (
    !close(pcb.center.x, expectedCenter.x) ||
    !close(pcb.center.y, expectedCenter.y) ||
    !close(pcb.rotation ?? 0, rotation)
  )
    issues.push(`${part.ref}: wrong component transform`)
  const sideways = rotation === 90 || rotation === 270
  if (
    !close(pcb.width, sideways ? origin.height : origin.width) ||
    !close(pcb.height, sideways ? origin.width : origin.height)
  )
    issues.push(`${part.ref}: wrong footprint bounds`)
  for (const alias of [...Object.keys(part.pins), ...part.nc]) {
    const findSourcePort = (collection: typeof elements, componentId: string) =>
      collection.find(
        (e) =>
          e.type === "source_port" &&
          e.source_component_id === componentId &&
          (e.name === alias || e.port_hints?.includes(alias)),
      )
    const targetSourcePort = findSourcePort(
      elements,
      source.source_component_id,
    )
    const originSourcePort = findSourcePort(probe, origin.source_component_id)
    if (
      targetSourcePort?.type !== "source_port" ||
      originSourcePort?.type !== "source_port"
    ) {
      issues.push(`${part.ref}.${alias}: missing source port`)
      continue
    }
    const targetPort = elements.find(
      (e) =>
        e.type === "pcb_port" &&
        e.source_port_id === targetSourcePort?.source_port_id,
    )
    const originPort = probe.find(
      (e) =>
        e.type === "pcb_port" &&
        e.source_port_id === originSourcePort?.source_port_id,
    )
    if (targetPort?.type !== "pcb_port" || originPort?.type !== "pcb_port") {
      issues.push(`${part.ref}.${alias}: missing electrical PCB port`)
      continue
    }
    const expected = applyToPoint(footprintToBoard, originPort)
    if (!close(targetPort.x, expected.x) || !close(targetPort.y, expected.y))
      issues.push(`${part.ref}.${alias}: wrong port transform`)
    const targetPads = elements.filter(
      (e) =>
        (e.type === "pcb_smtpad" || e.type === "pcb_plated_hole") &&
        e.pcb_port_id === targetPort.pcb_port_id,
    )
    const originPads = probe.filter(
      (e) =>
        (e.type === "pcb_smtpad" || e.type === "pcb_plated_hole") &&
        e.pcb_port_id === originPort.pcb_port_id,
    )
    if (targetPads.length !== originPads.length || !targetPads.length)
      issues.push(`${part.ref}.${alias}: pad/port association mismatch`)
    for (const [index, pad] of targetPads.entries()) {
      const original = originPads[index]
      if (!original || original.type !== pad.type) {
        issues.push(`${part.ref}.${alias}: pad type mismatch`)
        continue
      }
      if (
        pad.type === "pcb_smtpad" &&
        original.type === "pcb_smtpad" &&
        pad.shape === "polygon" &&
        original.shape === "polygon"
      ) {
        if (pad.points.length !== original.points.length)
          issues.push(`${part.ref}.${alias}: polygon size mismatch`)
        for (const [pointIndex, point] of pad.points.entries()) {
          const originalPoint = original.points[pointIndex]
          if (!originalPoint) continue
          const expectedPoint = applyToPoint(footprintToBoard, originalPoint)
          if (
            !close(point.x, expectedPoint.x) ||
            !close(point.y, expectedPoint.y)
          )
            issues.push(`${part.ref}.${alias}: polygon transform mismatch`)
        }
      } else if (
        "x" in pad &&
        "x" in original &&
        "y" in pad &&
        "y" in original
      ) {
        const expectedPad = applyToPoint(footprintToBoard, {
          x: original.x,
          y: original.y,
        })
        if (!close(pad.x, expectedPad.x) || !close(pad.y, expectedPad.y))
          issues.push(`${part.ref}.${alias}: pad transform mismatch`)
      } else issues.push(`${part.ref}.${alias}: unsupported pad geometry`)
    }
  }
  const originalVias = probe.filter((e) => e.type === "pcb_via")
  expectedVias += originalVias.length
  for (const via of originalVias) {
    const layerIndices = via.layers.map((layer) =>
      copperLayers.findIndex((candidate) => candidate === layer),
    )
    if (layerIndices.some((index) => index < 0))
      throw new Error(`${part.ref}: unsupported imported via layer`)
    const physicalLayers = copperLayers.slice(
      Math.min(...layerIndices),
      Math.max(...layerIndices) + 1,
    )
    const expected = applyToPoint(footprintToBoard, via)
    const actual = elements.find(
      (e) =>
        e.type === "pcb_via" &&
        close(e.x, expected.x) &&
        close(e.y, expected.y),
    )
    if (
      actual?.type !== "pcb_via" ||
      !close(actual.hole_diameter, via.hole_diameter) ||
      !close(actual.outer_diameter, via.outer_diameter) ||
      JSON.stringify(actual.layers) !== JSON.stringify(physicalLayers)
    )
      issues.push(`${part.ref}: missing/changed original thermal via`)
  }
  inspected.push({
    ref: part.ref,
    code: part.code,
    footprintAnchorMm: placement,
    actualCenterMm: pcb.center,
    electricalPins: Object.keys(part.pins).length + part.nc.length,
    originalVias: originalVias.length,
  })
}
const vias = elements.filter((e) => e.type === "pcb_via")
if (
  expectedVias !== 12 ||
  vias.length < expectedVias ||
  (routingPhase === "unrouted" && vias.length !== expectedVias)
)
  issues.push("Original EP via inventory mismatch or unexpected new via")
const routedTraceCount = elements.filter((e) => e.type === "pcb_trace").length
if (routingPhase === "routed" && routedTraceCount === 0)
  issues.push("Routed audit requires actual copper traces")
if (routingPhase === "unrouted" && routedTraceCount > 0)
  issues.push("Unexpected routed copper before gate")
for (const x of [-35, 35])
  for (const y of [-27.5, 27.5])
    if (
      !elements.some(
        (e) =>
          e.type === "pcb_hole" &&
          close(e.x, x) &&
          close(e.y, y) &&
          e.hole_shape === "circle" &&
          close(e.hole_diameter, 3.2),
      )
    )
      issues.push(`Missing 3.2mm mounting hole ${x},${y}`)
const paste = elements.filter((e) => e.type === "pcb_solder_paste")
if (paste.some((e) => "pcb_plated_hole_id" in e && e.pcb_plated_hole_id))
  issues.push("THT stencil aperture generated")
if (!paste.length) issues.push("SMT paste unexpectedly absent")
const report = {
  revision: "A22",
  routingPhase,
  routedTraceCount,
  artifactSha256: createHash("sha256").update(artifact).digest("hex"),
  purchasedComponentCount: manifest.length,
  inspectedCount: inspected.length,
  importedThermalVias: expectedVias,
  thtPasteCount: paste.filter(
    (e) => "pcb_plated_hole_id" in e && e.pcb_plated_hole_id,
  ).length,
  inspected,
  issues,
}
await writeFile(
  `evidence/product-placement-audit-${routingPhase}-A22.json`,
  JSON.stringify(report, null, 2) + "\n",
)
console.log(
  JSON.stringify(
    {
      purchased: manifest.length,
      inspected: inspected.length,
      thermalVias: expectedVias,
      issues,
    },
    null,
    2,
  ),
)
if (issues.length) process.exitCode = 1
