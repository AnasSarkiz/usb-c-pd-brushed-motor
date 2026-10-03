import { expect, test } from "bun:test"
import { spawnSync } from "node:child_process"

test("PD profile transaction rejects partial writes and never repeats an uncertain command", () => {
  const executable = "evidence/stusb4500-request-host-A14"
  const compiled = spawnSync(
    "cc",
    [
      "-std=c11",
      "-Wall",
      "-Wextra",
      "-Werror",
      "firmware/pd_policy.c",
      "firmware/stusb4500_request.c",
      "firmware/stusb4500_request_test.c",
      "-o",
      executable,
    ],
    { encoding: "utf8" },
  )
  expect(compiled.status, compiled.stderr).toBe(0)
  const result = spawnSync(`./${executable}`, [], { encoding: "utf8" })
  expect(result.status, result.stderr).toBe(0)
  expect(result.stdout).toContain("STUSB4500 request host tests passed")
})
