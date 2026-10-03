import { writeFile } from "node:fs/promises"

const capacitanceUpperF = 650e-6
// 1% initial, 0.8% TCR and 3% endurance variation are covered by a 6% reserve.
const resistanceMinimumOhms = 940
const resistanceMaximumOhms = 1060
const localAmbientMaximumC = 105
const ratedPowerAt70CW = 0.5
const deratedPowerW =
  (ratedPowerAt70CW * (155 - localAmbientMaximumC)) / (155 - 70)
const cases = [5.25, 9.45, 12.6, 13.745 * 1.05, 15].map((initialVoltageV) => ({
  initialVoltageV,
  dischargeTo1VSeconds:
    resistanceMaximumOhms * capacitanceUpperF * Math.log(initialVoltageV),
  maximumInitialPowerW: initialVoltageV ** 2 / resistanceMinimumOhms,
  storedEnergyJ: 0.5 * capacitanceUpperF * initialVoltageV ** 2,
}))
const report = {
  revision: "A11",
  assumptions: {
    capacitanceUpperF,
    resistanceMinimumOhms,
    resistanceMaximumOhms,
    localAmbientMaximumC,
    programmedTimeoutSeconds: 3,
    limitation:
      "Source and bridge inhibited, no external regenerative energy; actual temperature and decay must be measured",
  },
  capacitorBasis:
    "330uF *1.2 initial *1.2 temperature + three 47uF *1.2 plus bypass reserve <650uF; not a measured bank value",
  oldPassiveTailSeconds:
    ((125100 * 110000) / (125100 + 110000)) * capacitanceUpperF * Math.log(2.5),
  deratedPowerW,
  cases,
  issues: cases.flatMap((review) => [
    ...(review.dischargeTo1VSeconds >= 3 ? ["Timeout too short"] : []),
    ...(review.maximumInitialPowerW > deratedPowerW
      ? ["Declared local-ambient power exceeds derated resistor rating"]
      : []),
  ]),
}
await writeFile(
  "evidence/discharge-review-A11.json",
  JSON.stringify(report, null, 2) + "\n",
)
console.log(JSON.stringify(report, null, 2))
if (report.issues.length) process.exitCode = 1
