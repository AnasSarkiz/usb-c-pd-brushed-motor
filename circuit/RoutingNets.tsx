import { Fragment } from "react"

// Reserve short sensing/reference routes before the remaining shared networks.
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

const quietNetNames = [
  "VBUS_SENSE",
  "VREG_1V2",
  "VREG_2V7",
  "ADC_VBUS",
  "ADC_VM",
]

export function RoutingNets() {
  return (
    <>
      <net name="GND" isGroundNet routingPhaseIndex={4} />
      <net
        name="VBUS"
        isPowerNet
        nominalTraceWidth="2mm"
        routingPhaseIndex={3}
      />
      <net name="VDD5" isPowerNet routingPhaseIndex={3} />
      <net name="VCC3V3" isPowerNet routingPhaseIndex={3} />
      <net
        name="EFUSE_IN"
        isPowerNet
        nominalTraceWidth="2mm"
        routingPhaseIndex={3}
      />
      <net
        name="VIN_BUCK"
        isPowerNet
        nominalTraceWidth="2mm"
        routingPhaseIndex={3}
      />
      <net
        name="SWITCH_NODE"
        isPowerNet
        nominalTraceWidth="2mm"
        routingPhaseIndex={0}
      />
      <net name="VM" isPowerNet nominalTraceWidth="2mm" routingPhaseIndex={3} />
      <net name="MOTOR_P" nominalTraceWidth="2mm" routingPhaseIndex={0} />
      <net name="MOTOR_N" nominalTraceWidth="2mm" routingPhaseIndex={0} />
      {signalNetNames.map((name) => (
        <Fragment key={name}>
          <net
            name={name}
            routingPhaseIndex={
              name === "MCU_NRST" ? 1 : quietNetNames.includes(name) ? 2 : 3
            }
          />
        </Fragment>
      ))}
    </>
  )
}
