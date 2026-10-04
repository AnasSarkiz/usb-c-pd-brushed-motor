import { createHash } from "node:crypto"
import { readFile, writeFile } from "node:fs/promises"
import { any_circuit_element } from "circuit-json"
import { z } from "zod"
import {
  convertCircuitJsonToPickAndPlaceCsv,
  convertCircuitJsonToPickAndPlaceRows,
  type PickAndPlaceRotationWarning,
} from "circuit-json-to-pnp-csv"

const artifact = await readFile("dist/index/circuit.json", "utf8")
const elements = z.array(any_circuit_element).parse(JSON.parse(artifact))
const expectedReferences = elements
  .filter((element) => element.type === "source_component")
  .map((element) => element.name)
  .sort()
if (expectedReferences.length !== 140)
  throw new Error("Supplier orientation audit requires the full140-part board")
const manualReferences = new Set([
  "C18",
  "RV1",
  "SW1",
  "J2",
  "TP1",
  "TP2",
  "TP3",
  "TP4",
  "TP5",
  "TP6",
  "TP7",
])
const sources = elements.filter(
  (element) => element.type === "source_component",
)
// This converter input selects the documented SMT assembly operation only.
// The full native artifact and every supplier definition remain unchanged.
const automaticElements = elements.filter(
  (element) =>
    element.type !== "pcb_component" ||
    !manualReferences.has(
      sources.find(
        (source) => source.source_component_id === element.source_component_id,
      )?.name ?? "",
    ),
)
const automaticRows = convertCircuitJsonToPickAndPlaceRows(automaticElements, {
  supplier: "jlcpcb",
  requireSupplierRotation: true,
})
if (automaticRows.length !== 129)
  throw new Error("The documented SMT operation must contain129 parts")
const warnings: PickAndPlaceRotationWarning[] = []
const options = {
  supplier: "jlcpcb",
  onRotationWarning: (warning: PickAndPlaceRotationWarning) => {
    warnings.push(warning)
    console.warn(warning.message)
  },
} as const
const rows = convertCircuitJsonToPickAndPlaceRows(elements, options)
for (const warning of warnings) {
  if (
    !/^TP[1-7]$/.test(warning.designator) ||
    warning.reason !== "missing_pin1_location"
  )
    throw new Error(`Unreviewed supplier orientation: ${warning.message}`)
}
for (const warning of warnings) {
  const source = sources.find((source) => source.name === warning.designator)
  if (
    !source ||
    source.manufacturer_part_number !== "5015" ||
    JSON.stringify(source.supplier_part_numbers?.jlcpcb) !==
      JSON.stringify(["C2906768"])
  )
    throw new Error(
      "Accepted manual orientation must refer to the exact Keystone5015 import",
    )
  const ports = elements
    .filter((element) => element.type === "source_port")
    .filter((port) => port.source_component_id === source.source_component_id)
  if (ports.length !== 1 || ports[0].pin_number !== 1)
    throw new Error(
      "A manual contact orientation advisory requires exactly one electrical pin",
    )
}
const actualAutomaticRows = rows.filter(
  (row) => !manualReferences.has(row.designator),
)
if (JSON.stringify(actualAutomaticRows) !== JSON.stringify(automaticRows))
  throw new Error(
    "Full native export differs from verified automatic assembly rows",
  )
const references = rows.map((row) => row.designator).sort()
if (JSON.stringify(references) !== JSON.stringify(expectedReferences))
  throw new Error("Native pick-and-place reference set differs from the board")
for (const row of rows) {
  if (
    !Number.isFinite(row.mid_x) ||
    !Number.isFinite(row.mid_y) ||
    !Number.isFinite(row.rotation) ||
    row.rotation < 0 ||
    row.rotation >= 360
  )
    throw new Error(`${row.designator}: invalid native placement coordinates`)
}
const csv = convertCircuitJsonToPickAndPlaceCsv(elements, options)
await writeFile("evidence/supplier-pnp-preview-A22.csv", csv)
await writeFile(
  "evidence/supplier-pnp-audit-A22.json",
  JSON.stringify(
    {
      artifactSha256: createHash("sha256").update(artifact).digest("hex"),
      csvSha256: createHash("sha256").update(csv).digest("hex"),
      referenceCount: rows.length,
      supplier: options.supplier,
      automaticReferenceCount: automaticRows.length,
      automaticSupplierRotationsVerified: true,
      acceptedManualRotationWarnings: warnings,
      manualOrientationReview:
        "TP1..TP7 are single-electrical-pin, nonpolar contacts, omitted from automatic assembly; board rotation is the documented manual-fit intent; mechanical fit requires the prototype test plan",
      rows,
      status:
        "Orientation and placement data only; copper/fabrication approval requires all routed checks",
    },
    null,
    2,
  ) + "\n",
)
console.log(
  `All${automaticRows.length} automatic supplier rotations verified; seven manual contact advisories retained`,
)
