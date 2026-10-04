import { expect, test } from "bun:test"
import { spawnSync } from "node:child_process"

test("actual sequencing outputs revoke before feedback changes and preserve charged rails", () => {
  const executable = "evidence/stm32-gpio-outputs-host-A22"
  const compile = spawnSync(
    "cc",
    [
      "-std=c11",
      "-Wall",
      "-Wextra",
      "-Werror",
      "-Ifirmware/vendor/stm32g0/Include",
      "-Ifirmware/vendor/cmsis/Core/Include",
      "firmware/stm32_safe_gpio.c",
      "firmware/stm32_gpio_outputs_test.c",
      "-o",
      executable,
    ],
    { encoding: "utf8" },
  )
  expect(compile.status, compile.stderr).toBe(0)
  const result = spawnSync(`./${executable}`, [], { encoding: "utf8" })
  expect(result.status, result.stderr).toBe(0)
  expect(result.stdout).toContain("STM32 sequencing output tests passed")
})
