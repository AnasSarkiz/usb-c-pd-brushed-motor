import { Fragment } from "react"

// Native priorities route the75 remaining networks together after local escapes.
// Global ground drops follow so fixed supply branches do not partition signals.
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

export function RoutingNets() {
  return (
    <>
      <net name="GND" isGroundNet routingPhaseIndex={2} />
      <net
        name="VBUS"
        isPowerNet
        nominalTraceWidth="2mm"
        routingPhaseIndex={1}
      />
      <net name="VDD5" isPowerNet routingPhaseIndex={1} />
      <net name="VCC3V3" isPowerNet routingPhaseIndex={1} />
      <net
        name="EFUSE_IN"
        isPowerNet
        nominalTraceWidth="2mm"
        routingPhaseIndex={1}
      />
      <net
        name="VIN_BUCK"
        isPowerNet
        nominalTraceWidth="2mm"
        routingPhaseIndex={1}
      />
      <net
        name="SWITCH_NODE"
        isPowerNet
        nominalTraceWidth="2mm"
        routingPhaseIndex={0}
      />
      <net name="VM" isPowerNet nominalTraceWidth="2mm" routingPhaseIndex={1} />
      <net name="MOTOR_P" nominalTraceWidth="2mm" routingPhaseIndex={0} />
      <net name="MOTOR_N" nominalTraceWidth="2mm" routingPhaseIndex={0} />
      {signalNetNames.map((name) => (
        <Fragment key={name}>
          <net name={name} routingPhaseIndex={1} />
        </Fragment>
      ))}
    </>
  )
}
