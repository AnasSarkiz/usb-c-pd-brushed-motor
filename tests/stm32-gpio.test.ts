import { expect, test } from "bun:test"
import { spawnSync } from "node:child_process"
import { readFileSync } from "node:fs"
import { createHash } from "node:crypto"

test("STM32 GPIO safety ordering and feedback preservation", () => {
  const executable = "evidence/stm32-gpio-bun-test-A19"
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
      "firmware/stm32_safe_gpio_test.c",
      "-o",
      executable,
    ],
    { encoding: "utf8" },
  )
  expect(compile.status, compile.stderr).toBe(0)
  const result = spawnSync(`./${executable}`, [], { encoding: "utf8" })
  expect(result.status, result.stderr).toBe(0)
  expect(result.stdout).toContain("STM32 safe GPIO host tests passed")
})

test("vendor MCU and CMSIS definitions remain byte-exact", () => {
  const manifest = JSON.parse(
    readFileSync("firmware/vendor/manifest.json", "utf8"),
  )
  for (const file of manifest.files) {
    const bytes = readFileSync(file.path)
    expect(createHash("sha256").update(bytes).digest("hex")).toBe(file.sha256)
    expect(
      createHash("sha1")
        .update(`blob ${bytes.length}\0`)
        .update(bytes)
        .digest("hex"),
    ).toBe(file.git_blob)
  }
})
