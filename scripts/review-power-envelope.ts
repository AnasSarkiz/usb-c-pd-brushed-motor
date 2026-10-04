import { writeFile } from "node:fs/promises"
import {
  analogRailCorners,
  prototypeThermalRequirements,
  prototypeRegenScreen,
} from "./power-prototype-envelope"
const analog = [undefined, 21000, 12000].map((branchOhms) => ({
  branchOhms,
  limits: analogRailCorners(branchOhms),
}))
const report = {
  revision: "A22",
  analog,
  thermal: ([5, 9, 12] as const).map(prototypeThermalRequirements),
  regeneration: prototypeRegenScreen(),
}
await writeFile(
  "evidence/power-prototype-envelope-A22.json",
  JSON.stringify(report, null, 2) + "\n",
)
console.log(JSON.stringify(report, null, 2))
if (
  analog.some(
    ({ limits }) =>
      !limits.uvBelowBuckMinimumFb ||
      !limits.ovAboveBuckMaximumFb ||
      !limits.hysteresisPositive ||
      !limits.referenceBiasScreen,
  )
)
  process.exitCode = 1
