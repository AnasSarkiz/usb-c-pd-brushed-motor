import { expect, test } from "bun:test"
import { spawnSync } from "node:child_process"

test("PD startup drains old events under inhibition and verifies standby acquisition", () => {
  const executable = "evidence/stusb4500-startup-host-A19"
  const compiled = spawnSync(
    "cc",
    [
      "-std=c11",
      "-Wall",
      "-Wextra",
      "-Werror",
      "firmware/stusb4500_startup.c",
      "firmware/stusb4500_startup_test.c",
      "-o",
      executable,
    ],
    { encoding: "utf8" },
  )
  expect(compiled.status, compiled.stderr).toBe(0)
  const result = spawnSync(`./${executable}`, [], { encoding: "utf8" })
  expect(result.status, result.stderr).toBe(0)
  expect(result.stdout).toContain("STUSB4500 startup host tests passed")
})
