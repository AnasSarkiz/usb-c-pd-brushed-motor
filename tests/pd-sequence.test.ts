import { expect, test } from "bun:test"
import { spawnSync } from "node:child_process"

test("compiled C power sequence inhibits stale contracts and unsafe voltage changes", () => {
  const executable = "evidence/pd-sequence-bun-test-A16"
  const compile = spawnSync(
    "cc",
    [
      "-std=c11",
      "-Wall",
      "-Wextra",
      "-Werror",
      "firmware/pd_policy.c",
      "firmware/pd_sequence.c",
      "firmware/pd_sequence_test.c",
      "-o",
      executable,
    ],
    { encoding: "utf8" },
  )
  expect(compile.status, compile.stderr).toBe(0)
  const result = spawnSync(`./${executable}`, [], { encoding: "utf8" })
  expect(result.status, result.stderr).toBe(0)
  expect(result.stdout).toContain("PD sequence host tests passed")
})
