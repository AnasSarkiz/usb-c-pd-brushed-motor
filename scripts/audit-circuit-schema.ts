import { readFile, writeFile } from "node:fs/promises"
import { any_circuit_element } from "circuit-json"
import { z } from "zod"
import { relevantSchemaIssues } from "./relevant-schema-issues"

const inputPath = process.argv[2] ?? "dist/index/circuit.json"
const reportPath = process.argv[3] ?? "evidence/circuit-schema-A22.json"
const raw = z
  .array(z.object({ type: z.string() }).passthrough())
  .parse(JSON.parse(await readFile(inputPath, "utf8")))
const errors = []
for (const [index, element] of raw.entries()) {
  const result = any_circuit_element.safeParse(element)
  if (result.success) continue
  const directIssues = relevantSchemaIssues(element, result.error)
  errors.push({ index, type: element.type, issues: directIssues })
}
const counts = Object.fromEntries(
  [...new Set(raw.map((element) => element.type))].map((type) => [
    type,
    raw.filter((element) => element.type === type).length,
  ]),
)
await writeFile(
  reportPath,
  JSON.stringify({ inputPath, counts, errors }, null, 2) + "\n",
)
console.log(
  JSON.stringify(
    {
      elementCount: raw.length,
      errorCount: errors.length,
      reportPath,
      errors: errors.slice(0, 12).map((error) => ({
        type: error.type,
        issues: error.issues
          .slice(0, 12)
          .map((issue) => ({ path: issue.path, message: issue.message })),
      })),
    },
    null,
    2,
  ),
)
if (errors.length) process.exitCode = 1
