import { expect, test } from "bun:test"
import { spawnSync } from "node:child_process"

test("STM32 I2C bounded whole transfers, faults and rollover", () => {
  const executable = "evidence/stm32-i2c-host-A22"
  const compile = spawnSync(
    process.env.CC ?? "clang",
    [
      "-std=c11",
      "-Wall",
      "-Wextra",
      "-Werror",
      "-Ifirmware/vendor/stm32g0/Include",
      "-Ifirmware/vendor/cmsis/Core/Include",
      "firmware/stm32_safe_gpio.c",
      "firmware/stm32_i2c.c",
      "firmware/stm32_i2c_test.c",
      "-o",
      executable,
    ],
    { encoding: "utf8" },
  )
  expect(compile.status, compile.stderr).toBe(0)
  const result = spawnSync(`./${executable}`, [], { encoding: "utf8" })
  expect(result.status, result.stderr).toBe(0)
  expect(result.stdout).toContain("STM32 bounded I2C host tests passed")
})
