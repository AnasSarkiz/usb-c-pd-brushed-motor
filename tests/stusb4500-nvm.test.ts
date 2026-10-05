import { expect, test } from "bun:test"
import { spawnSync } from "node:child_process"

test("NVM readback requires every approved byte and never programs memory", () => {
  const executable = "evidence/stusb4500-nvm-host-A22"
  const compiled = spawnSync(
    process.env.CC ?? "clang",
    [
      "-std=c11",
      "-Wall",
      "-Wextra",
      "-Werror",
      "firmware/stusb4500_nvm.c",
      "firmware/stusb4500_nvm_test.c",
      "-o",
      executable,
    ],
    { encoding: "utf8" },
  )
  expect(compiled.status, compiled.stderr).toBe(0)
  const result = spawnSync(`./${executable}`, [], { encoding: "utf8" })
  expect(result.status, result.stderr).toBe(0)
  expect(result.stdout).toContain("STUSB4500 NVM host tests passed")
})
