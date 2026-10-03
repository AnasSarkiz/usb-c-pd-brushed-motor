import { readFile, writeFile } from "node:fs/promises"
import { z } from "zod"

const charts = z
  .array(
    z.object({
      graphType: z.string(),
      selectPartsList: z.array(
        z.object({
          partsName: z.string(),
          chartList: z.array(
            z.object({
              rippleFreq: z.string().optional(),
              data: z.array(
                z.object({ x: z.coerce.number(), y: z.coerce.number() }),
              ),
            }),
          ),
        }),
      ),
    }),
  )
  .parse(
    JSON.parse(
      await readFile("evidence/C138687-characteristics-A9.json", "utf8"),
    ),
  )
const dcBias = charts.find((chart) => chart.graphType === "DCBias")
  ?.selectPartsList[0]
if (dcBias?.partsName !== "CL32B106KBJNNN")
  throw new Error("Exact manufacturer curve missing")
const maximumInputVoltageV = 21
// Use the next measured curve point above the maximum input voltage.
const upperBiasPoint = dcBias.chartList[0].data.find(
  (point) => point.x >= maximumInputVoltageV,
)
if (!upperBiasPoint)
  throw new Error("DC-bias curve does not cover the input envelope")
const nominalInputCapacitanceF = 2 * 10e-6
const nominalBiasedCapacitanceF =
  nominalInputCapacitanceF * (1 + upperBiasPoint.y / 100)
const screenedEffectiveCapacitanceF =
  nominalBiasedCapacitanceF * 0.9 * 0.85 * 0.8
const peakOutputCurrentA = 2.423
const maximumInputRippleCurrentA = peakOutputCurrentA * 0.5
const worstSharedRipplePerCapacitorA = maximumInputRippleCurrentA * 0.55
const rippleCurves = charts.find((chart) => chart.graphType === "RippleCurr")
  ?.selectPartsList[0].chartList
if (!rippleCurves)
  throw new Error("Manufacturer ripple characterization missing")
const report = {
  revision: "A9",
  part: "C138687 / CL32B106KBJNNNE",
  references: ["C13", "C14"],
  maximumInputVoltageV,
  upperBiasPoint,
  nominalInputCapacitanceF,
  nominalBiasedCapacitanceF,
  screenedEffectiveCapacitanceF,
  requiredEffectiveCapacitanceF: 3e-6,
  effectiveCapacitanceMargin: screenedEffectiveCapacitanceF / 3e-6,
  maximumInputRippleCurrentA,
  worstSharedRipplePerCapacitorA,
  rippleCharacterizationLowPoints: rippleCurves.map((curve) => ({
    frequencyKhz: curve.rippleFreq,
    firstPoint: curve.data[0],
  })),
  oldInputNominalCapacitanceF: 2e-6,
  capacitanceScreenPass: screenedEffectiveCapacitanceF >= 3e-6,
  interpretation:
    "Manufacturer curves are typical, not guaranteed minima. 10% initial tolerance, 15% temperature loss, and an additional 20% aging/design reserve are combined for engineering screening. Ripple sharing assumes 55/45 maximum imbalance; measure with the completed layout. This is not a measured capacitor or converter thermal rating.",
}
await writeFile(
  "evidence/buck-input-review-A9.json",
  JSON.stringify(report, null, 2) + "\n",
)
console.log(JSON.stringify(report, null, 2))
if (!report.capacitanceScreenPass) process.exitCode = 1
