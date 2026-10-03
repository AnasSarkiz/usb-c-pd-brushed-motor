import { expect, test } from "bun:test"
import { spawnSync } from "node:child_process"

test("STM32 ADC fresh bounded conversions and failure inhibition", () => {
  const executable = "evidence/stm32-adc-bun-test-A21"
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
      "firmware/stm32_adc.c",
      "firmware/stm32_adc_test.c",
      "-o",
      executable,
    ],
    { encoding: "utf8" },
  )
  expect(compile.status, compile.stderr).toBe(0)
  const result = spawnSync(`./${executable}`, [], { encoding: "utf8" })
  expect(result.status, result.stderr).toBe(0)
  expect(result.stdout).toContain("STM32 bounded ADC host tests passed")
})
