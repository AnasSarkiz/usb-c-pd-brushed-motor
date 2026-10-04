import { expect, test } from "bun:test"
import { spawnSync } from "node:child_process"

test("PD qualification contains whole voltage intervals and rejects back-drive", () => {
  const executable = "evidence/pd-interval-bun-test-A22"
  const compile = spawnSync(
    "cc",
    [
      "-std=c11",
      "-Wall",
      "-Wextra",
      "-Werror",
      "firmware/pd_policy.c",
      "firmware/pd_sequence.c",
      "firmware/pd_interval_test.c",
      "-o",
      executable,
    ],
    { encoding: "utf8" },
  )
  expect(compile.status, compile.stderr).toBe(0)
  const result = spawnSync(`./${executable}`, [], { encoding: "utf8" })
  expect(result.status, result.stderr).toBe(0)
  expect(result.stdout).toContain("PD interval host tests passed")
})
