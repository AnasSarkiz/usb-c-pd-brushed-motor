import { createHash } from "node:crypto"
import { spawnSync } from "node:child_process"
import { mkdir, readFile, writeFile } from "node:fs/promises"
import { z } from "zod"

const mode = z.enum(["bringup", "qualified"]).parse(process.argv[2])
const provisioning = z.object({
  nvm_qualification_id: z.number().int().positive().max(4294967295),
  receive_path_qualification_id: z.number().int().positive().max(4294967295),
  nvm_image: z.array(z.number().int().min(0).max(255)).length(40),
  evidence: z.object({
    nvm: z.string().min(1),
    receive_path: z.string().min(1),
    measurement: z.string().min(1),
  }),
  measurement: z.object({
    qualification_id: z.number().int().positive().max(4294967295),
    factory_vref: z.number().int().min(33).max(4062),
    adc_error_half_counts: z.number().int().min(14).max(64),
    noise_half_counts: z.number().int().min(0).max(64),
    factory_error_half_counts: z.number().int().min(14).max(64),
    upper_divider_ppm: z.number().int().min(3000).max(20000),
    lower_divider_ppm: z.number().int().min(3000).max(20000),
    reference_drift_ppm: z.number().int().min(9000).max(20000),
    leakage_na: z.number().int().min(70).max(1000),
    filter_tau_us: z.number().int().min(1).max(2000),
    vdda_slew_uv_per_us: z.number().int().min(0).max(10000),
    rail_slew_uv_per_us: z.tuple([
      z.number().int().min(0).max(1000000),
      z.number().int().min(0).max(1000000),
    ]),
  }),
})
const directory = `dist/firmware/${mode}`
await mkdir(directory, { recursive: true })
let configurationSource =
  '#include "motor_owner.h"\nconst struct motor_owner_config motor_build_config={0};\nconst bool motor_environment_qualification_present=false;\n'
let provisioningHash: string | null = null
if (mode === "qualified") {
  if (!process.argv[3])
    throw new Error(
      "Qualified build blocked: independently approved 40-byte NVM, RX-path and measurement provisioning evidence is required; use explicit bringup mode for an inhibited diagnostic image.",
    )
  const bytes = await readFile(process.argv[3])
  const approved = provisioning.parse(JSON.parse(bytes.toString("utf8")))
  for (const evidence of Object.values(approved.evidence))
    await readFile(evidence)
  provisioningHash = createHash("sha256").update(bytes).digest("hex")
  const profileFields = Object.entries(approved.measurement)
    .map(
      ([field, contents]) =>
        `.${field}=${Array.isArray(contents) ? `{${contents.join(",")}}` : contents}`,
    )
    .join(",")
  configurationSource =
    '#include "motor_owner.h"\n' +
    `static const struct stusb_nvm_image image={.bytes={${approved.nvm_image.join(",")}}};\n` +
    `static const struct motor_measurement_profile profile={.approved=true,${profileFields}};\n` +
    `const struct motor_owner_config motor_build_config={.nvm_image=&image,.measurement_profile=&profile,.nvm_qualification_id=${approved.nvm_qualification_id},.receive_path_qualification_id=${approved.receive_path_qualification_id}};\n` +
    "const bool motor_environment_qualification_present=true;\n"
}
const configurationPath = `${directory}/build_configuration.c`
await writeFile(configurationPath, configurationSource)
const productionModules = [
  "pd_policy",
  "pd_sequence",
  "stm32_safe_gpio",
  "stm32_adc",
  "stm32_i2c",
  "stm32_clock",
  "motor_measurement",
  "stusb4500_rx",
  "stusb4500_startup",
  "stusb4500_request",
  "stusb4500_nvm",
  "motor_owner",
  "motor_main",
  "freestanding_memory",
]
const sourcePaths = [
  ...productionModules.map((name) => `firmware/${name}.c`),
  "firmware/startup_stm32g030f6.S",
  "firmware/stm32g030f6.ld",
  configurationPath,
]
const sourceHashes = await Promise.all(
  sourcePaths.map(async (path) => ({
    path,
    sha256: createHash("sha256")
      .update(await readFile(path))
      .digest("hex"),
  })),
)
const gcc = "/opt/homebrew/bin/arm-none-eabi-gcc"
const common = [
  "-mcpu=cortex-m0plus",
  "-mthumb",
  "-std=c11",
  "-Os",
  "-ffreestanding",
  "-fno-builtin",
  "-fno-common",
  "-ffunction-sections",
  "-fdata-sections",
  "-fno-unwind-tables",
  "-fno-asynchronous-unwind-tables",
  "-fstack-usage",
  "-Wall",
  "-Wextra",
  "-Werror",
  `-ffile-prefix-map=${process.cwd()}=.`,
  "-Ifirmware",
  "-Ifirmware/vendor/stm32g0/Include",
  "-Ifirmware/vendor/cmsis/Core/Include",
]
function run(command: string, argumentsList: string[]) {
  const result = spawnSync(command, argumentsList, { encoding: "utf8" })
  if (result.status !== 0)
    throw new Error(
      `${command} failed (${result.status}): ${result.stdout}${result.stderr}`,
    )
  return result.stdout + result.stderr
}
const objectPaths: string[] = []
for (const sourcePath of sourcePaths.filter((path) => !path.endsWith(".ld"))) {
  const objectPath = `${directory}/${sourcePath.split("/").slice(-1)[0]}.o`
  run(gcc, [...common, "-c", sourcePath, "-o", objectPath])
  objectPaths.push(objectPath)
}
const elfPath = `${directory}/motor-controller-A22.elf`,
  binPath = `${directory}/motor-controller-A22.bin`
run(gcc, [
  ...common,
  "-nostdlib",
  ...objectPaths,
  "-Tfirmware/stm32g030f6.ld",
  "-Wl,--gc-sections,--build-id=none,--fatal-warnings,-z,noexecstack",
  `-Wl,-Map=${directory}/motor-controller-A22.map`,
  "-lgcc",
  "-o",
  elfPath,
])
run("/opt/homebrew/bin/arm-none-eabi-objcopy", [
  "-O",
  "binary",
  elfPath,
  binPath,
])
const size = run("/opt/homebrew/bin/arm-none-eabi-size", [elfPath])
const columns = size.trim().split("\n").slice(-1)[0]?.trim().split(/\s+/)
const memory = z
  .object({
    text: z.number().int().nonnegative(),
    data: z.number().int().nonnegative(),
    bss: z.number().int().nonnegative(),
  })
  .parse({
    text: Number(columns?.[0]),
    data: Number(columns?.[1]),
    bss: Number(columns?.[2]),
  })
if (memory.text + memory.data > 32768 || memory.data + memory.bss + 2048 > 8192)
  throw new Error(
    "Firmware exceeds STM32G030F6 flash/RAM and 2KiB stack reservation",
  )
const binary = await readFile(binPath)
if (binary.readUInt32LE(0) !== 0x20002000 || !(binary.readUInt32LE(4) & 1))
  throw new Error("Invalid target reset vector/initial stack")
const symbols = run("/opt/homebrew/bin/arm-none-eabi-nm", ["-n", elfPath])
for (const [index, symbol] of [
  [16 + 16, "TIM3_IRQHandler"],
  [16 + 7, "EXTI4_15_IRQHandler"],
] as const) {
  const address = symbols
    .split("\n")
    .find((line) => line.endsWith(` ${symbol}`))
    ?.split(" ")[0]
  if (
    !address ||
    binary.readUInt32LE(index * 4) !== (Number.parseInt(address, 16) | 1)
  )
    throw new Error(`Vector does not bind ${symbol} to ST's IRQ position`)
}
await writeFile(`${directory}/symbols.txt`, symbols)
await writeFile(
  `${directory}/sections.txt`,
  run("/opt/homebrew/bin/arm-none-eabi-objdump", ["-h", elfPath]),
)
const artifacts = await Promise.all(
  [elfPath, binPath].map(async (path) => ({
    path,
    sha256: createHash("sha256")
      .update(await readFile(path))
      .digest("hex"),
  })),
)
const report = {
  revision: "A22",
  mode,
  status:
    mode === "bringup"
      ? "linked diagnostic image; motor qualification intentionally unavailable and inhibited"
      : "linked provisioned image; physical testing remains pending",
  provisioningHash,
  compiler: run(gcc, ["--version"]).split("\n")[0],
  memory: {
    ...memory,
    flashBytes: memory.text + memory.data,
    staticRamBytes: memory.data + memory.bss,
    reservedStackBytes: 2048,
  },
  sourceHashes,
  artifacts,
}
await writeFile(
  `${directory}/build-report.json`,
  JSON.stringify(report, null, 2) + "\n",
)
await writeFile(
  `evidence/firmware-linked-${mode}-A22.json`,
  JSON.stringify(report, null, 2) + "\n",
)
console.log(
  JSON.stringify(
    { mode, status: report.status, memory: report.memory, artifacts },
    null,
    2,
  ),
)
