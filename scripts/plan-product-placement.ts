import { readFile, writeFile } from "node:fs/promises"
import { applyToPoint, rotateDEG } from "transformation-matrix"
import { z } from "zod"

type Reference = string
interface Placement {
  x: number
  y: number
  ccwRotationDegrees: number
}
interface Bounds {
  left: number
  right: number
  bottom: number
  top: number
}
const inventory = z
  .array(
    z.object({
      ref: z.string(),
      sheet: z.string(),
      width: z.number(),
      height: z.number(),
      courtyard: z.array(
        z.object({
          outline: z.array(z.object({ x: z.number(), y: z.number() })),
        }),
      ),
    }),
  )
  .parse(
    JSON.parse(await readFile("evidence/placement-inventory-A22.json", "utf8")),
  )
const manifest = z
  .array(z.object({ ref: z.string(), pins: z.record(z.string(), z.string()) }))
  .parse(JSON.parse(await readFile("docs/design-manifest.json", "utf8")))

// Board-level placement only. Official supplier components remain unchanged.
const fixed: Record<Reference, Placement> = {
  TP1: { x: -28.1, y: -3, ccwRotationDegrees: 0 },
  TP2: { x: -28.1, y: -7, ccwRotationDegrees: 0 },
  TP3: { x: -28.1, y: -11, ccwRotationDegrees: 0 },
  TP4: { x: -23, y: -12.5, ccwRotationDegrees: 0 },
  TP5: { x: -20, y: 18, ccwRotationDegrees: 90 },
  TP6: { x: -20, y: 12.5, ccwRotationDegrees: 90 },
  TP7: { x: 20, y: 12, ccwRotationDegrees: 90 },
  C29: { x: 25, y: 11, ccwRotationDegrees: 0 },
  C28: { x: 27.5, y: 8, ccwRotationDegrees: 0 },
  C27: { x: 27.5, y: 5.5, ccwRotationDegrees: 0 },
  C26: { x: 23.5, y: 5.5, ccwRotationDegrees: 0 },
  C22: { x: 2, y: 18, ccwRotationDegrees: 90 },
  C23: { x: 3, y: 14.2, ccwRotationDegrees: 0 },
  C34: { x: -8.4, y: 2, ccwRotationDegrees: 0 },
  R67: { x: -12, y: 2, ccwRotationDegrees: 0 },
  R66: { x: -12, y: 0, ccwRotationDegrees: 0 },
  C33: { x: -10, y: -7.2, ccwRotationDegrees: 0 },
  R61: { x: -10.5, y: -4.8, ccwRotationDegrees: 0 },
  R60: { x: -11.5, y: -2, ccwRotationDegrees: 0 },
  C32: { x: -14.5, y: -3.8, ccwRotationDegrees: 90 },
  C31: { x: -14.2, y: -10.7, ccwRotationDegrees: 90 },
  C30: { x: -13.8, y: -7, ccwRotationDegrees: 0 },
  C15: { x: -6.7, y: -13.5, ccwRotationDegrees: 0 },
  C12: { x: -3.2, y: -16, ccwRotationDegrees: 90 },
  J1: { x: -34, y: 4, ccwRotationDegrees: -90 },
  J2: { x: 34, y: 8, ccwRotationDegrees: 90 },
  RV1: { x: -9, y: 17, ccwRotationDegrees: 0 },
  SW1: { x: 10, y: 21, ccwRotationDegrees: 0 },
  SW2: { x: -23, y: 24, ccwRotationDegrees: 90 },
  U1: { x: -26, y: 4, ccwRotationDegrees: 0 },
  U2: { x: -32, y: 15, ccwRotationDegrees: 90 },
  U3: { x: -25, y: 15, ccwRotationDegrees: 90 },
  U11: { x: -20, y: -6, ccwRotationDegrees: 90 },
  U4: { x: -22, y: -19, ccwRotationDegrees: 0 },
  U5: { x: -8.7, y: -19, ccwRotationDegrees: 180 },
  U6: { x: 3, y: 9, ccwRotationDegrees: 0 },
  U8: { x: 13, y: -3, ccwRotationDegrees: 0 },
  U9: { x: 13, y: 5, ccwRotationDegrees: 0 },
  U10: { x: 25, y: 0, ccwRotationDegrees: 0 },
  L1: { x: 5.3, y: -18.5, ccwRotationDegrees: 0 },
  C18: { x: 23, y: -14, ccwRotationDegrees: 0 },
  D1: { x: -33, y: -7, ccwRotationDegrees: 90 },
  D4: { x: -32, y: -17, ccwRotationDegrees: 90 },
  D5: { x: -3.7, y: -22.5, ccwRotationDegrees: 90 },
  D10: { x: 31, y: 18, ccwRotationDegrees: 90 },
  D11: { x: 33, y: -3, ccwRotationDegrees: 90 },
  C13: { x: -9.8, y: -10.4, ccwRotationDegrees: 0 },
  C14: { x: -13.5, y: -19, ccwRotationDegrees: 90 },
  Q3: { x: 33, y: -19, ccwRotationDegrees: 0 },
  R45: { x: 17, y: -29, ccwRotationDegrees: 0 },
  R46: { x: 26.5, y: -29, ccwRotationDegrees: 0 },
  R47: { x: 17, y: -24, ccwRotationDegrees: 0 },
  R48: { x: 26.5, y: -24, ccwRotationDegrees: 0 },
  R69: { x: -22, y: -29, ccwRotationDegrees: 0 },
  R70: { x: -12.5, y: -29, ccwRotationDegrees: 0 },
  R71: { x: -2, y: -29, ccwRotationDegrees: 0 },
  R72: { x: 7.5, y: -29, ccwRotationDegrees: 0 },
  LED1: { x: 25, y: 24, ccwRotationDegrees: 0 },
  LED2: { x: 20, y: 24, ccwRotationDegrees: 0 },
  LED3: { x: 20, y: 19, ccwRotationDegrees: 0 },
}
const clusterCenters: Record<string, { x: number; y: number }> = {
  usb: { x: -27, y: 8 },
  pdhost: { x: -19, y: -4 },
  input: { x: -24, y: -19 },
  buck: { x: -5, y: -18 },
  controls: { x: -1, y: 9 },
  protection: { x: 12, y: 3 },
  motor: { x: 25, y: 2 },
  dump: { x: 24, y: -23 },
}
function componentBounds(reference: Reference, placement: Placement): Bounds {
  const part = inventory.find((entry) => entry.ref === reference)
  if (!part) throw new Error(`Missing inventory: ${reference}`)
  const points = part.courtyard.flatMap((court) => court.outline)
  points.push(
    ...[
      { x: -part.width / 2, y: -part.height / 2 },
      { x: part.width / 2, y: part.height / 2 },
    ],
  )
  const componentToBoardRotation = rotateDEG(placement.ccwRotationDegrees)
  const rotated = points.map((point) =>
    applyToPoint(componentToBoardRotation, point),
  )
  return {
    left: Math.min(...rotated.map((point) => point.x)) + placement.x,
    right: Math.max(...rotated.map((point) => point.x)) + placement.x,
    bottom: Math.min(...rotated.map((point) => point.y)) + placement.y,
    top: Math.max(...rotated.map((point) => point.y)) + placement.y,
  }
}
function overlaps(first: Bounds, second: Bounds) {
  const gapMm = 0.45
  return (
    first.left < second.right + gapMm &&
    first.right + gapMm > second.left &&
    first.bottom < second.top + gapMm &&
    first.top + gapMm > second.bottom
  )
}
const occupied = new Map<Reference, Bounds>()
for (const [reference, placement] of Object.entries(fixed)) {
  const bounds = componentBounds(reference, placement)
  for (const [otherReference, otherBounds] of occupied) {
    if (overlaps(bounds, otherBounds))
      throw new Error(
        `Fixed overlap: ${reference}/${otherReference} ${JSON.stringify(bounds)} ${JSON.stringify(otherBounds)}`,
      )
  }
  occupied.set(reference, bounds)
}
const mechanicalReservations: Bounds[] = [
  // Native front-panel and probe legends, board-space mm (+Y toward top).
  // Conservative text envelopes; final generated ink is separately reviewed.
  { left: -39, right: -21.5, bottom: 10.3, top: 12.1 },
  { left: -32, right: -14, bottom: 28.9, top: 30.7 },
  { left: -12, right: -6, bottom: 29.5, top: 30.7 },
  { left: 1, right: 19, bottom: 27.7, top: 29.5 },
  { left: -15, right: 15, bottom: 31, top: 32.2 },
  { left: -32.8, right: -23.4, bottom: -1.85, top: -0.65 },
  { left: -32.8, right: -23.4, bottom: -5.85, top: -4.65 },
  { left: -32.8, right: -23.4, bottom: -9.85, top: -8.65 },
  { left: -26.6, right: -19.4, bottom: -11.35, top: -10.15 },
  { left: -26.5, right: -18.5, bottom: 20.4, top: 21.6 },
  { left: -26.5, right: -18.5, bottom: 9.2, top: 10.4 },
  { left: 16.5, right: 23.5, bottom: 14.4, top: 15.6 },
  { left: 33, right: 39, bottom: 14.2, top: 15.4 },
  { left: -31, right: -28, bottom: 24.2, top: 25.8 },
  { left: -31, right: -28, bottom: 22.2, top: 23.8 },
  { left: 22, right: 28, bottom: 25.8, top: 27 },
  { left: 18, right: 22, bottom: 25.8, top: 27 },
  { left: 18, right: 22, bottom: 16.4, top: 17.6 },
  // Shaft centre is offset +3.94 mm from the imported pot placement centre.
  { left: -17, right: -1, bottom: 12.94, top: 28.94 },
  { left: 4, right: 16, bottom: 15, top: 27 },
  ...[-35, 35].flatMap((x) =>
    [-27.5, 27.5].map((y) => ({
      left: x - 3.5,
      right: x + 3.5,
      bottom: y - 3.5,
      top: y + 3.5,
    })),
  ),
]
const unplaced = inventory
  .filter((part) => !fixed[part.ref])
  .sort(
    (first, second) =>
      second.width * second.height - first.width * first.height,
  )
for (const part of unplaced) {
  const centre = clusterCenters[part.sheet]
  const nets = new Set(
    Object.values(
      manifest.find((entry) => entry.ref === part.ref)?.pins ?? {},
    ).filter(
      (net) =>
        ![
          "GND",
          "VM",
          "VCC3V3",
          "VDD5",
          "VBUS",
          "EFUSE_IN",
          "VIN_BUCK",
        ].includes(net),
    ),
  )
  const neighbors = manifest.filter(
    (entry) =>
      fixed[entry.ref] &&
      Object.values(entry.pins).some((net) => nets.has(net)),
  )
  let best: { placement: Placement; score: number; bounds: Bounds } | undefined
  for (const ccwRotationDegrees of [0, 90]) {
    for (let x = -36; x <= 36; x += 1) {
      for (let y = -29; y <= 29; y += 1) {
        const placement = { x, y, ccwRotationDegrees }
        const bounds = componentBounds(part.ref, placement)
        if (
          bounds.left < -39 ||
          bounds.right > 39 ||
          bounds.bottom < -31.5 ||
          bounds.top > 31.5 ||
          mechanicalReservations.some((reservation) =>
            overlaps(bounds, reservation),
          ) ||
          [...occupied.values()].some((otherBounds) =>
            overlaps(bounds, otherBounds),
          )
        )
          continue
        const score =
          0.35 * Math.hypot(x - centre.x, y - centre.y) +
          neighbors.reduce(
            (sum, entry) =>
              sum + Math.hypot(x - fixed[entry.ref].x, y - fixed[entry.ref].y),
            0,
          ) /
            Math.max(neighbors.length, 1)
        if (!best || score < best.score) best = { placement, score, bounds }
      }
    }
  }
  if (!best) throw new Error(`No mechanically clear location for ${part.ref}`)
  fixed[part.ref] = best.placement
  occupied.set(part.ref, best.bounds)
}
for (const reference of [
  "C8",
  "C4",
  "C5",
  "R2",
  "R3",
  "R66",
  "R6",
  "R10",
  "R16",
  "C12",
  "C15",
  "R24",
  "R33",
  "R51",
  "C28",
  "Q5",
  "C25",
  "R50",
  "R5",
  "R11",
  "R13",
  "C11",
  "R21",
  "D7",
  "R39",
  "R49",
  "R19",
  "R23",
  "R41",
  "R42",
  "R43",
  "R54",
]) {
  fixed[reference].ccwRotationDegrees =
    (fixed[reference].ccwRotationDegrees + 180) % 360
}

await writeFile(
  "circuit/product-placement.ts",
  `// A22: numeric millimetre centres through native manualEdits; official imports untouched.\n` +
    `export const productPlacement = ${JSON.stringify(fixed, null, 2)}\n\n` +
    `export const pcbPlacements = Object.entries(productPlacement).map(([selector, placement]) => ({\n` +
    `  selector, center: { x: placement.x, y: placement.y },\n}))\n`,
)
console.log(
  `Planned ${occupied.size} components; 80 × 65 mm outline, four mounting keepouts.`,
)
