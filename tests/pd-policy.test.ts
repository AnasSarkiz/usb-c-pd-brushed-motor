import { expect, test } from "bun:test"
import { spawnSync } from "node:child_process"

test("compiled C PD policy rejects unsafe contracts and stale qualification", () => {
  const executable = "evidence/pd-policy-bun-test-A22"
  const compile = spawnSync(
    "cc",
    [
      "-std=c11",
      "-Wall",
      "-Wextra",
      "-Werror",
      "firmware/pd_policy.c",
      "firmware/pd_policy_test.c",
      "-o",
      executable,
    ],
    { encoding: "utf8" },
  )
  expect(compile.status, compile.stderr).toBe(0)
  const result = spawnSync(`./${executable}`, [], { encoding: "utf8" })
  expect(result.status, result.stderr).toBe(0)
  expect(result.stdout).toContain("PD policy host tests passed")
})
