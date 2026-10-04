import { writeFile } from "node:fs/promises"
import { i2cTimingEnvelope } from "./i2c-timing-envelope"
const report = i2cTimingEnvelope()
await writeFile(
  "evidence/i2c-timing-envelope-A22.json",
  JSON.stringify(report, null, 2) + "\n",
)
console.log(JSON.stringify(report, null, 2))
if (!report.passed) process.exitCode = 1
