import {
  motorInputCurrentA,
  pwmTiming,
  regulatedMotorVoltageV,
} from "./electrical-calculations"

import { reviewMotorContracts } from "./motor-validation-calculations"

const inputLimitNominalA = 18_000 / 7_150
const inputLimitMinimumA = (inputLimitNominalA * 0.9) / 1.01
const inputLimitMaximumA = (inputLimitNominalA * 1.1) / 0.99
console.log({
  revision: "A9 draft",
  warning:
    "Analytic assumptions; physical efficiency/thermal/peak tests pending",
  inputLimitNominalA,
  inputLimitMinimumA,
  inputLimitMaximumA,
  regulatedVoltagesV: [
    regulatedMotorVoltageV(),
    regulatedMotorVoltageV(21_000),
    regulatedMotorVoltageV(12_000),
  ],
  pwmAtMinimum: pwmTiming({ fraction: 0 }),
  pwmAtMidpoint: pwmTiming({ fraction: 0.5 }),
  pwmAtMaximum: pwmTiming({ fraction: 1 }),
})
for (const motorVoltageV of [5, 9, 12]) {
  for (const contractVoltageV of [15, 20]) {
    for (const motorCurrentA of [2, 2.22, 2.4]) {
      const requiredInputCurrentA = motorInputCurrentA({
        motorVoltageV,
        motorCurrentA,
        contractVoltageV,
      })
      console.log({
        motorVoltageV,
        contractVoltageV,
        motorCurrentA,
        requiredInputCurrentA,
        minimumInputLimitMarginA: inputLimitMinimumA - requiredInputCurrentA,
      })
    }
  }
}

for (const motorVoltageV of [5, 9, 12] as const)
  console.log(
    reviewMotorContracts({
      motorVoltageV,
      peakMotorCurrentA: 2.423,
      sourceCapabilities: [
        { voltageV: 15, currentA: 3 },
        { voltageV: 20, currentA: 3 },
      ],
    }),
  )

import { railMonitorThresholdsV } from "./motor-validation-calculations"
for (const branch of [undefined, 21_000, 12_000])
  console.log(railMonitorThresholdsV(branch))
