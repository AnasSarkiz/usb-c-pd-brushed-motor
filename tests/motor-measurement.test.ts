import { expect, test } from "bun:test"
import { spawnSync } from "node:child_process"

test("Measurement conversion encloses physical corners and never approves raw validity", () => {
  const executable = "evidence/motor-measurement-host-A22"
  const compile = spawnSync(
    process.env.CC ?? "clang",
    [
      "-std=c11",
      "-Wall",
      "-Wextra",
      "-Werror",
      "-Ifirmware/vendor/stm32g0/Include",
      "-Ifirmware/vendor/cmsis/Core/Include",
      "firmware/motor_measurement.c",
      "firmware/motor_measurement_test.c",
      "-o",
      executable,
    ],
    { encoding: "utf8" },
  )
  expect(compile.status, compile.stderr).toBe(0)
  const result = spawnSync(`./${executable}`, [], { encoding: "utf8" })
  expect(result.status, result.stderr).toBe(0)
  expect(result.stdout).toContain(
    "Qualified measurement interval arithmetic tests passed",
  )
})
