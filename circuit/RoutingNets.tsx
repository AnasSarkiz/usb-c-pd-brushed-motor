import { Fragment } from "react"

// Reserve reset/sensing paths, then supply, interfaces and functional analog groups.
// Ground uses one native plane-fanout phase after the signal and power networks.
// Names match the existing schematic; no electrical components are defined here.
const signalNetNames = [
  "CC1",
  "CC2",
  "PD_RESET",
  "SCL",
  "SDA",
  "PD_ENABLE_N",
  "VBUS_SENSE",
  "PD_ALERT_N",
  "VREG_1V2",
  "VREG_2V7",
  "MCU_NRST",
  "ADC_VBUS",
  "ADC_VM",
  "VOLTAGE_BIT_9",
  "VOLTAGE_BIT_12",
  "VOLTAGE_DRIVE_9",
  "VOLTAGE_DRIVE_12",
  "HOST_ALLOW",
  "HOST_INHIBIT_B",
  "MOTOR_FAULT_N",
  "SWDIO",
  "SWCLK",
  "MOTOR_READY",
  "SELECT_9",
  "SELECT_12",
  "INPUT_UV",
  "INPUT_OV",
  "SLEW",
  "INPUT_ILIM",
  "POWER_ENABLE",
  "INPUT_PG",
  "PD_INHIBIT",
  "INPUT_OV_TOP",
  "BOOT",
  "BUCK_EN",
  "RT",
  "MOTOR_FB",
  "COMP",
  "FB_TOP_MID",
  "COMP_ZERO",
  "TIMING",
  "PWM",
  "TIMER_CONT",
  "WIPER",
  "POT_CHARGE",
  "POT_DISCHARGE",
  "DISCHARGE_END",
  "IN1",
  "IN2",
  "R29_LED",
  "R30_LED",
  "VREF2V5",
  "UV_REF",
  "OV_REF",
  "OV_ACTIVE_N",
  "IPROPI",
  "VCP",
  "CPH",
  "CPL",
  "POWER_LED",
  "DUMP_BASE",
  "DUMP_DRIVE",
  "DUMP_GATE",
  "DUMP_LOAD",
  "DUMP_MID_A",
  "DUMP_MID_B",
  "DUMP_MID_C",
  "DUMP_MID_D",
  "OV_INHIBIT",
]

const quietNetNames = [
  "VBUS_SENSE",
  "VREG_1V2",
  "VREG_2V7",
  "ADC_VBUS",
  "ADC_VM",
]

const interfaceNetNames = [
  "CC1",
  "CC2",
  "PD_RESET",
  "SCL",
  "SDA",
  "PD_ENABLE_N",
  "PD_ALERT_N",
  "VOLTAGE_BIT_9",
  "VOLTAGE_BIT_12",
  "VOLTAGE_DRIVE_9",
  "VOLTAGE_DRIVE_12",
  "HOST_ALLOW",
  "HOST_INHIBIT_B",
  "MOTOR_FAULT_N",
  "SWDIO",
  "SWCLK",
  "MOTOR_READY",
  "SELECT_9",
  "SELECT_12",
]

const analogRoutingGroups = [
  ["BOOT", "BUCK_EN", "RT", "MOTOR_FB", "COMP", "FB_TOP_MID", "COMP_ZERO"],
  [
    "INPUT_UV",
    "INPUT_OV",
    "SLEW",
    "INPUT_ILIM",
    "POWER_ENABLE",
    "INPUT_PG",
    "PD_INHIBIT",
    "INPUT_OV_TOP",
  ],
  [
    "VREF2V5",
    "UV_REF",
    "OV_REF",
    "OV_ACTIVE_N",
    "IPROPI",
    "VCP",
    "CPH",
    "CPL",
    "POWER_LED",
  ],
  [
    "TIMING",
    "PWM",
    "TIMER_CONT",
    "WIPER",
    "POT_CHARGE",
    "POT_DISCHARGE",
    "DISCHARGE_END",
    "IN1",
    "IN2",
    "R29_LED",
    "R30_LED",
  ],
  [
    "DUMP_BASE",
    "DUMP_DRIVE",
    "DUMP_GATE",
    "DUMP_LOAD",
    "DUMP_MID_A",
    "DUMP_MID_B",
    "DUMP_MID_C",
    "DUMP_MID_D",
    "OV_INHIBIT",
  ],
]

function signalRoutingPhase(name: string) {
  if (name === "ADC_VBUS") return 0
  if (name === "MCU_NRST") return 0
  if (["VBUS_SENSE", "SWDIO", "HOST_INHIBIT_B"].includes(name)) return 2
  if (quietNetNames.includes(name)) return 3
  if (interfaceNetNames.includes(name)) return 4
  const groupIndex = analogRoutingGroups.findIndex((group) =>
    group.includes(name),
  )
  if (groupIndex === -1) throw new Error(`Missing routing group for ${name}`)
  return 5 + groupIndex
}

export function RoutingNets() {
  return (
    <>
      <net name="GND" isGroundNet routingPhaseIndex={11} />
      <net
        name="VBUS"
        isPowerNet
        nominalTraceWidth="2mm"
        routingPhaseIndex={10}
      />
      <net name="VDD5" isPowerNet routingPhaseIndex={10} />
      <net name="VCC3V3" isPowerNet routingPhaseIndex={1} />
      <net
        name="EFUSE_IN"
        isPowerNet
        nominalTraceWidth="2mm"
        routingPhaseIndex={10}
      />
      <net
        name="VIN_BUCK"
        isPowerNet
        nominalTraceWidth="2mm"
        routingPhaseIndex={10}
      />
      <net
        name="SWITCH_NODE"
        isPowerNet
        nominalTraceWidth="2mm"
        routingPhaseIndex={0}
      />
      <net
        name="VM"
        isPowerNet
        nominalTraceWidth="2mm"
        routingPhaseIndex={10}
      />
      <net name="MOTOR_P" nominalTraceWidth="2mm" routingPhaseIndex={0} />
      <net name="MOTOR_N" nominalTraceWidth="2mm" routingPhaseIndex={0} />
      {signalNetNames.map((name) => (
        <Fragment key={name}>
          <net
            name={name}
            routingPhaseIndex={
              name === "DUMP_LOAD" ? 10 : signalRoutingPhase(name)
            }
            nominalTraceWidth={
              name === "DUMP_LOAD"
                ? "2mm"
                : name.startsWith("DUMP_MID_")
                  ? "0.5mm"
                  : undefined
            }
            isPowerNet={
              name === "DUMP_LOAD" || name.startsWith("DUMP_MID_")
                ? true
                : undefined
            }
          />
        </Fragment>
      ))}
    </>
  )
}
