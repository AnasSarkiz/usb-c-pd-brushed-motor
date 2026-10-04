import { readFile, writeFile, mkdir } from "node:fs/promises"
import { z } from "zod"
const supplierParts = z
  .array(z.object({ code: z.string() }))
  .parse(
    JSON.parse(
      await readFile(
        "evidence/active-supplier-inspection-manifest-A22.json",
        "utf8",
      ),
    ),
  )
await mkdir("evidence/current-import-builds-A22", { recursive: true })
const results = []
for (const { code } of supplierParts) {
  const process = Bun.spawn(
    [
      "bunx",
      "tsci",
      "build",
      `tests/supplier-audit/${code}.circuit.tsx`,
      "--routing-disabled",
    ],
    { stdout: "pipe", stderr: "pipe" },
  )
  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(process.stdout).text(),
    new Response(process.stderr).text(),
    process.exited,
  ])
  await writeFile(
    `evidence/current-import-builds-A22/${code}.log`,
    stdout + stderr,
  )
  results.push({ code, exitCode })
  console.log(`${code}: ${exitCode === 0 ? "built" : "FAILED"}`)
}
await writeFile(
  "evidence/current-import-builds-A22/report.json",
  JSON.stringify({ coreVersion: "0.0.2074", results }, null, 2) + "\n",
)
if (results.some((result) => result.exitCode !== 0)) process.exitCode = 1
