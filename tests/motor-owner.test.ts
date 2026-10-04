import { expect, test } from "bun:test"
import { spawnSync } from "node:child_process"

test("serialized owner applies only fresh qualified contracts and revokes on faults", () => {
  const executable = "evidence/motor-owner-bun-test-A22"
  const modules = [
    "stm32_safe_gpio",
    "stm32_adc",
    "motor_measurement",
    "pd_policy",
    "pd_sequence",
    "stusb4500_rx",
    "stusb4500_startup",
    "stusb4500_request",
    "stusb4500_nvm",
    "motor_owner",
    "motor_owner_test",
  ]
  const compile = spawnSync(
    "cc",
    [
      "-std=c11",
      "-Wall",
      "-Wextra",
      "-Werror",
      "-Ifirmware/vendor/stm32g0/Include",
      "-Ifirmware/vendor/cmsis/Core/Include",
      ...modules.map((module) => `firmware/${module}.c`),
      "-o",
      executable,
    ],
    { encoding: "utf8" },
  )
  expect(compile.status, compile.stderr).toBe(0)
  const result = spawnSync(`./${executable}`, [], { encoding: "utf8" })
  expect(result.status, result.stderr).toBe(0)
  expect(result.stdout).toContain(
    "Serialized motor-owner integration/fault tests passed",
  )
})
