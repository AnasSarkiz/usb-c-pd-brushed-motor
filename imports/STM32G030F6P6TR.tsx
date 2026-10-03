import { type ChipProps } from "tscircuit"
const pinLabels = {
  "pin1": [
    "PB7",
    "PB8"
  ],
  "pin2": [
    "PB9",
    "PC14_OSC32_IN"
  ],
  "pin3": [
    "PC15_OSC32_OUT"
  ],
  "pin4": [
    "VDDA",
    "DDA"
  ],
  "pin5": [
    "VSSA",
    "SSA"
  ],
  "pin6": [
    "NRST"
  ],
  "pin7": [
    "PA0"
  ],
  "pin8": [
    "PA1"
  ],
  "pin9": [
    "PA2"
  ],
  "pin10": [
    "PA3"
  ],
  "pin20": [
    "PB3",
    "PB4",
    "PB5",
    "PB6"
  ],
  "pin19": [
    "PA15",
    "PA14_BOOT0"
  ],
  "pin18": [
    "PA13"
  ],
  "pin17": [
    "PA12_PA10_"
  ],
  "pin16": [
    "PA11_PA9_"
  ],
  "pin15": [
    "PB0",
    "PB1",
    "PB2",
    "PA8"
  ],
  "pin14": [
    "PA7"
  ],
  "pin13": [
    "PA6"
  ],
  "pin12": [
    "PA5"
  ],
  "pin11": [
    "PA4"
  ]
} as const
export const STM32G030F6P6TR = (props: ChipProps<typeof pinLabels>) => (
  <chip
    footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.925064000000134mm" pcbY="-2.870961999999963mm" layer="top" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin2"]} pcbX="-2.2750780000000077mm" pcbY="-2.870961999999963mm" layer="top" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="-1.6250920000001088mm" pcbY="-2.870961999999963mm" layer="top" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin4"]} pcbX="-0.9751059999999825mm" pcbY="-2.870961999999963mm" layer="top" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="-0.32486600000004273mm" pcbY="-2.870961999999963mm" layer="top" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin6"]} pcbX="0.32512000000008356mm" pcbY="-2.870961999999963mm" layer="top" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin7"]} pcbX="0.9751059999999825mm" pcbY="-2.870961999999963mm" layer="top" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="1.625091999999995mm" pcbY="-2.870961999999963mm" layer="top" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin9"]} pcbX="2.2750780000000077mm" pcbY="-2.870961999999963mm" layer="top" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin10"]} pcbX="2.9250640000000203mm" pcbY="-2.870961999999963mm" layer="top" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin20"]} pcbX="-2.925064000000134mm" pcbY="2.870961999999963mm" layer="top" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin19"]} pcbX="-2.2750780000000077mm" pcbY="2.870961999999963mm" layer="top" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin18"]} pcbX="-1.6250920000001088mm" pcbY="2.870961999999963mm" layer="top" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin17"]} pcbX="-0.9751059999999825mm" pcbY="2.870961999999963mm" layer="top" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin16"]} pcbX="-0.32486600000004273mm" pcbY="2.870961999999963mm" layer="top" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin15"]} pcbX="0.32512000000008356mm" pcbY="2.870961999999963mm" layer="top" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin14"]} pcbX="0.9751059999999825mm" pcbY="2.870961999999963mm" layer="top" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin13"]} pcbX="1.625091999999995mm" pcbY="2.870961999999963mm" layer="top" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin12"]} pcbX="2.2750780000000077mm" pcbY="2.870961999999963mm" layer="top" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin11"]} pcbX="2.9250640000000203mm" pcbY="2.870961999999963mm" layer="top" width="0.3640074mm" height="1.7420082mm" radius="0.1820037mm" shape="pill" />
<silkscreenpath route={[{"x":-3.326206200000115,"y":-1.7713960000000952},{"x":-3.326206200000115,"y":1.7713959999999815},{"x":3.3262061999998878,"y":1.7713959999999815},{"x":3.3262061999998878,"y":-1.7713960000000952},{"x":-3.326206200000115,"y":-1.7713960000000952}]} strokeWidth={0.15239999999999998} />
<silkscreencircle pcbX={-2.9250640000000203} pcbY={-1.019047999999998} radius={0.150114} layer="top" strokeWidth={0.29999939999999997} />
<silkscreencircle pcbX={-3.559302000000116} pcbY={-2.870961999999963} radius={0.150114} layer="top" strokeWidth={0.29999939999999997} />
<courtyardoutline outline={[{"x":-3.499980800000003,"y":3.9919661000000133},{"x":3.50000620000003,"y":3.9919661000000133},{"x":3.50000620000003,"y":-3.9919661000000133},{"x":-3.499980800000003,"y":-3.9919661000000133},{"x":-3.499980800000003,"y":3.9919661000000133}]} layer="top" />
      </footprint>}
    pinLabels={pinLabels}
    pinAttributes={{
  "pin1": {
    "isInput": true,
    "isOutput": true,
    "isBidirectional": true,
    "canUseTriState": true,
    "isGpio": true,
    "canUseInternalPullup": true,
    "canUseInternalPulldown": true,
    "canUseOpenDrain": true,
    "canUsePushPull": true,
    "capabilities": [
      "i2c_sda",
      "i2c_scl",
      "spi_mosi",
      "spi_sck",
      "uart_rx"
    ]
  },
  "pin2": {
    "isInput": true,
    "isOutput": true,
    "isBidirectional": true,
    "canUseTriState": true,
    "isGpio": true,
    "canUseInternalPullup": true,
    "canUseInternalPulldown": true,
    "canUseOpenDrain": true,
    "canUsePushPull": true,
    "capabilities": [
      "i2c_sda",
      "spi_cs"
    ]
  },
  "pin3": {
    "isInput": true,
    "isOutput": true,
    "isBidirectional": true,
    "canUseTriState": true,
    "isGpio": true,
    "canUseInternalPullup": true,
    "canUseInternalPulldown": true,
    "canUseOpenDrain": true,
    "canUsePushPull": true
  },
  "pin4": {
    "isInput": true,
    "mustBeConnected": true,
    "requiresPower": true,
    "includeInBoardPinout": false,
    "shouldHaveDecouplingCapacitor": true
  },
  "pin5": {
    "mustBeConnected": true,
    "requiresGround": true,
    "requiresVoltage": 0,
    "includeInBoardPinout": false
  },
  "pin6": {
    "isInput": true,
    "isOutput": true,
    "isBidirectional": true,
    "canUseInternalPullup": true,
    "canUseOpenDrain": true
  },
  "pin7": {
    "isInput": true,
    "isOutput": true,
    "isBidirectional": true,
    "canUseTriState": true,
    "isGpio": true,
    "canUseInternalPullup": true,
    "canUseInternalPulldown": true,
    "canUseOpenDrain": true,
    "canUsePushPull": true,
    "capabilities": [
      "spi_sck"
    ]
  },
  "pin8": {
    "isInput": true,
    "isOutput": true,
    "isBidirectional": true,
    "canUseTriState": true,
    "isGpio": true,
    "canUseInternalPullup": true,
    "canUseInternalPulldown": true,
    "canUseOpenDrain": true,
    "canUsePushPull": true,
    "capabilities": [
      "spi_sck"
    ]
  },
  "pin9": {
    "isInput": true,
    "isOutput": true,
    "isBidirectional": true,
    "canUseTriState": true,
    "isGpio": true,
    "canUseInternalPullup": true,
    "canUseInternalPulldown": true,
    "canUseOpenDrain": true,
    "canUsePushPull": true,
    "capabilities": [
      "spi_mosi",
      "uart_tx"
    ]
  },
  "pin10": {
    "isInput": true,
    "isOutput": true,
    "isBidirectional": true,
    "canUseTriState": true,
    "isGpio": true,
    "canUseInternalPullup": true,
    "canUseInternalPulldown": true,
    "canUseOpenDrain": true,
    "canUsePushPull": true,
    "capabilities": [
      "spi_miso",
      "uart_rx"
    ]
  },
  "pin20": {
    "isInput": true,
    "isOutput": true,
    "isBidirectional": true,
    "canUseTriState": true,
    "isGpio": true,
    "canUseInternalPullup": true,
    "canUseInternalPulldown": true,
    "canUseOpenDrain": true,
    "canUsePushPull": true,
    "capabilities": [
      "i2c_scl",
      "spi_mosi",
      "spi_miso",
      "spi_sck",
      "uart_tx"
    ]
  },
  "pin19": {
    "isInput": true,
    "isOutput": true,
    "isBidirectional": true,
    "canUseTriState": true,
    "isGpio": true,
    "canUseInternalPullup": true,
    "canUseInternalPulldown": true,
    "canUseOpenDrain": true,
    "canUsePushPull": true,
    "capabilities": [
      "spi_cs",
      "uart_tx",
      "uart_rx"
    ]
  },
  "pin18": {
    "isInput": true,
    "isOutput": true,
    "isBidirectional": true,
    "canUseTriState": true,
    "isGpio": true,
    "canUseInternalPullup": true,
    "canUseInternalPulldown": true,
    "canUseOpenDrain": true,
    "canUsePushPull": true
  },
  "pin17": {
    "isInput": true,
    "isOutput": true,
    "isBidirectional": true,
    "canUseTriState": true,
    "isGpio": true,
    "canUseInternalPullup": true,
    "canUseInternalPulldown": true,
    "canUseOpenDrain": true,
    "canUsePushPull": true,
    "capabilities": [
      "i2c_sda",
      "spi_mosi",
      "uart_rx"
    ]
  },
  "pin16": {
    "isInput": true,
    "isOutput": true,
    "isBidirectional": true,
    "canUseTriState": true,
    "isGpio": true,
    "canUseInternalPullup": true,
    "canUseInternalPulldown": true,
    "canUseOpenDrain": true,
    "canUsePushPull": true,
    "capabilities": [
      "i2c_scl",
      "spi_miso",
      "uart_tx"
    ]
  },
  "pin15": {
    "isInput": true,
    "isOutput": true,
    "isBidirectional": true,
    "canUseTriState": true,
    "isGpio": true,
    "canUseInternalPullup": true,
    "canUseInternalPulldown": true,
    "canUseOpenDrain": true,
    "canUsePushPull": true,
    "capabilities": [
      "spi_miso",
      "spi_cs"
    ]
  },
  "pin14": {
    "isInput": true,
    "isOutput": true,
    "isBidirectional": true,
    "canUseTriState": true,
    "isGpio": true,
    "canUseInternalPullup": true,
    "canUseInternalPulldown": true,
    "canUseOpenDrain": true,
    "canUsePushPull": true,
    "capabilities": [
      "spi_mosi"
    ]
  },
  "pin13": {
    "isInput": true,
    "isOutput": true,
    "isBidirectional": true,
    "canUseTriState": true,
    "isGpio": true,
    "canUseInternalPullup": true,
    "canUseInternalPulldown": true,
    "canUseOpenDrain": true,
    "canUsePushPull": true,
    "capabilities": [
      "spi_miso"
    ]
  },
  "pin12": {
    "isInput": true,
    "isOutput": true,
    "isBidirectional": true,
    "canUseTriState": true,
    "isGpio": true,
    "canUseInternalPullup": true,
    "canUseInternalPulldown": true,
    "canUseOpenDrain": true,
    "canUsePushPull": true,
    "capabilities": [
      "spi_sck"
    ]
  },
  "pin11": {
    "isInput": true,
    "isOutput": true,
    "isBidirectional": true,
    "canUseTriState": true,
    "isGpio": true,
    "canUseInternalPullup": true,
    "canUseInternalPulldown": true,
    "canUseOpenDrain": true,
    "canUsePushPull": true,
    "capabilities": [
      "spi_mosi",
      "spi_cs"
    ]
  }
}}
    supplierPartNumbers={{
  "jlcpcb": [
    "C529330"
  ]
}}
    manufacturerPartNumber="STM32G030F6P6TR"
    cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C529330.obj?uuid=f8ba5b4174b9490d8c445fbe2ed40b80",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C529330.step?uuid=f8ba5b4174b9490d8c445fbe2ed40b80",
        pcbRotationOffset: 90,
        modelOriginPosition: {"x":0,"y":0.000012700000070253736,"z":-0.019205},
    }}
    {...props}
  />
)