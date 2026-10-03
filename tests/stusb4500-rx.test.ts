import { expect, test } from "bun:test"
import { spawnSync } from "node:child_process"

test("STUSB4500 capture rejects late, changed and malformed PD messages", () => {
  const executable = "evidence/stusb4500-rx-host-A12"
  const compiled = spawnSync(
    "cc",
    [
      "-std=c11",
      "-Wall",
      "-Wextra",
      "-Werror",
      "firmware/pd_policy.c",
      "firmware/stusb4500_rx.c",
      "firmware/stusb4500_rx_test.c",
      "-o",
      executable,
    ],
    { encoding: "utf8" },
  )
  expect(compiled.status, compiled.stderr).toBe(0)
  const result = spawnSync(`./${executable}`, [], { encoding: "utf8" })
  expect(result.status, result.stderr).toBe(0)
  expect(result.stdout).toContain("STUSB4500 RX host tests passed")
})
