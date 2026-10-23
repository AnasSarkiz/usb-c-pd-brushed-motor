import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["PB7","PB8"],
  pin2: ["PB9","PC14_OSC32_IN"],
  pin3: ["PC15_OSC32_OUT"],
  pin4: ["VDDA","DDA"],
  pin5: ["VSSA","SSA"],
  pin6: ["NRST"],
  pin7: ["PA0"],
  pin8: ["PA1"],
  pin9: ["PA2"],
  pin10: ["PA3"],
  pin11: ["PA4"],
  pin12: ["PA5"],
  pin13: ["PA6"],
  pin14: ["PA7"],
  pin15: ["PB0","PB1","PB2","PA8"],
  pin16: ["PA11_PA9_"],
  pin17: ["PA12_PA10_"],
  pin18: ["PA13"],
  pin19: ["PA15","PA14_BOOT0"],
  pin20: ["PB3","PB4","PB5","PB6"]
} as const

const pinAttributes = {
  pin1: {isInput: true, isOutput: true, isBidirectional: true, canUseTriState: true, capabilities: ["i2c_sda","i2c_scl","spi_sck","spi_mosi","uart_rx"], canUseInternalPullup: true, canUseInternalPulldown: true, canUseOpenDrain: true, canUsePushPull: true, isGpio: true},
  pin2: {isInput: true, isOutput: true, isBidirectional: true, canUseTriState: true, capabilities: ["i2c_sda","spi_cs"], canUseInternalPullup: true, canUseInternalPulldown: true, canUseOpenDrain: true, canUsePushPull: true, isGpio: true},
  pin3: {isInput: true, isOutput: true, isBidirectional: true, canUseTriState: true, capabilities: [], canUseInternalPullup: true, canUseInternalPulldown: true, canUseOpenDrain: true, canUsePushPull: true, isGpio: true},
  pin4: {isInput: true, capabilities: [], requiresPower: true, includeInBoardPinout: false, mustBeConnected: true, shouldHaveDecouplingCapacitor: true},
  pin5: {capabilities: [], requiresGround: true, requiresVoltage: 0, includeInBoardPinout: false, mustBeConnected: true},
  pin6: {isInput: true, isOutput: true, isBidirectional: true, capabilities: [], canUseInternalPullup: true, canUseOpenDrain: true},
  pin7: {isInput: true, isOutput: true, isBidirectional: true, canUseTriState: true, capabilities: ["spi_sck"], canUseInternalPullup: true, canUseInternalPulldown: true, canUseOpenDrain: true, canUsePushPull: true, isGpio: true},
  pin8: {isInput: true, isOutput: true, isBidirectional: true, canUseTriState: true, capabilities: ["spi_sck"], canUseInternalPullup: true, canUseInternalPulldown: true, canUseOpenDrain: true, canUsePushPull: true, isGpio: true},
  pin9: {isInput: true, isOutput: true, isBidirectional: true, canUseTriState: true, capabilities: ["spi_mosi","uart_tx"], canUseInternalPullup: true, canUseInternalPulldown: true, canUseOpenDrain: true, canUsePushPull: true, isGpio: true},
  pin10: {isInput: true, isOutput: true, isBidirectional: true, canUseTriState: true, capabilities: ["spi_miso","uart_rx"], canUseInternalPullup: true, canUseInternalPulldown: true, canUseOpenDrain: true, canUsePushPull: true, isGpio: true},
  pin20: {isInput: true, isOutput: true, isBidirectional: true, canUseTriState: true, capabilities: ["i2c_scl","spi_sck","spi_mosi","spi_miso","uart_tx"], canUseInternalPullup: true, canUseInternalPulldown: true, canUseOpenDrain: true, canUsePushPull: true, isGpio: true},
  pin19: {isInput: true, isOutput: true, isBidirectional: true, canUseTriState: true, capabilities: ["spi_cs","uart_tx","uart_rx"], canUseInternalPullup: true, canUseInternalPulldown: true, canUseOpenDrain: true, canUsePushPull: true, isGpio: true},
  pin18: {isInput: true, isOutput: true, isBidirectional: true, canUseTriState: true, capabilities: [], canUseInternalPullup: true, canUseInternalPulldown: true, canUseOpenDrain: true, canUsePushPull: true, isGpio: true},
  pin17: {isInput: true, isOutput: true, isBidirectional: true, canUseTriState: true, capabilities: ["i2c_sda","spi_mosi","uart_rx"], canUseInternalPullup: true, canUseInternalPulldown: true, canUseOpenDrain: true, canUsePushPull: true, isGpio: true},
  pin16: {isInput: true, isOutput: true, isBidirectional: true, canUseTriState: true, capabilities: ["i2c_scl","spi_miso","uart_tx"], canUseInternalPullup: true, canUseInternalPulldown: true, canUseOpenDrain: true, canUsePushPull: true, isGpio: true},
  pin15: {isInput: true, isOutput: true, isBidirectional: true, canUseTriState: true, capabilities: ["spi_cs","spi_miso"], canUseInternalPullup: true, canUseInternalPulldown: true, canUseOpenDrain: true, canUsePushPull: true, isGpio: true},
  pin14: {isInput: true, isOutput: true, isBidirectional: true, canUseTriState: true, capabilities: ["spi_mosi"], canUseInternalPullup: true, canUseInternalPulldown: true, canUseOpenDrain: true, canUsePushPull: true, isGpio: true},
  pin13: {isInput: true, isOutput: true, isBidirectional: true, canUseTriState: true, capabilities: ["spi_miso"], canUseInternalPullup: true, canUseInternalPulldown: true, canUseOpenDrain: true, canUsePushPull: true, isGpio: true},
  pin12: {isInput: true, isOutput: true, isBidirectional: true, canUseTriState: true, capabilities: ["spi_sck"], canUseInternalPullup: true, canUseInternalPulldown: true, canUseOpenDrain: true, canUsePushPull: true, isGpio: true},
  pin11: {isInput: true, isOutput: true, isBidirectional: true, canUseTriState: true, capabilities: ["spi_cs","spi_mosi"], canUseInternalPullup: true, canUseInternalPulldown: true, canUseOpenDrain: true, canUsePushPull: true, isGpio: true}
} satisfies NonNullable<ChipProps["pinAttributes"]>

export const STM32G030F6P6TR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C529330"
  ]
}}
      manufacturerPartNumber="STM32G030F6P6TR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.925064mm" pcbY="-2.870962mm" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin2"]} pcbX="-2.275078mm" pcbY="-2.870962mm" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="-1.625092mm" pcbY="-2.870962mm" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin4"]} pcbX="-0.975106mm" pcbY="-2.870962mm" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="-0.324866mm" pcbY="-2.870962mm" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin6"]} pcbX="0.32512mm" pcbY="-2.870962mm" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin7"]} pcbX="0.975106mm" pcbY="-2.870962mm" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="1.625092mm" pcbY="-2.870962mm" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin9"]} pcbX="2.275078mm" pcbY="-2.870962mm" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin10"]} pcbX="2.925064mm" pcbY="-2.870962mm" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin20"]} pcbX="-2.925064mm" pcbY="2.870962mm" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin19"]} pcbX="-2.275078mm" pcbY="2.870962mm" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin18"]} pcbX="-1.625092mm" pcbY="2.870962mm" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin17"]} pcbX="-0.975106mm" pcbY="2.870962mm" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin16"]} pcbX="-0.324866mm" pcbY="2.870962mm" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin15"]} pcbX="0.32512mm" pcbY="2.870962mm" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin14"]} pcbX="0.975106mm" pcbY="2.870962mm" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin13"]} pcbX="1.625092mm" pcbY="2.870962mm" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin12"]} pcbX="2.275078mm" pcbY="2.870962mm" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin11"]} pcbX="2.925064mm" pcbY="2.870962mm" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<silkscreenpath route={[{"x":-3.326206200000115,"y":-1.7713960000000952},{"x":-3.326206200000115,"y":1.7713959999999815},{"x":3.3262061999998878,"y":1.7713959999999815},{"x":3.3262061999998878,"y":-1.7713960000000952},{"x":-3.326206200000115,"y":-1.7713960000000952}]} />
<silkscreencircle pcbX="-2.925064mm" pcbY="-1.019048mm" radius="0.150114mm" />
<silkscreencircle pcbX="-3.559302mm" pcbY="-2.870962mm" radius="0.150114mm" />
<silkscreentext text="{NAME}" pcbX="-0.1905mm" pcbY="4.556mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.499980800000003,"y":3.9919661000000133},{"x":3.50000620000003,"y":3.9919661000000133},{"x":3.50000620000003,"y":-3.9919661000000133},{"x":-3.499980800000003,"y":-3.9919661000000133},{"x":-3.499980800000003,"y":3.9919661000000133}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C529330.obj?uuid=f8ba5b4174b9490d8c445fbe2ed40b80",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C529330.step?uuid=f8ba5b4174b9490d8c445fbe2ed40b80",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.000012700000070253736, z: -0.019205 },
      }}
      {...props}
    />
  )
}