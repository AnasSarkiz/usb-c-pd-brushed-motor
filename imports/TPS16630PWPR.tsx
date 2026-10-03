import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["IN1"],
  pin2: ["IN2"],
  pin3: ["IN3"],
  pin4: ["N_C1"],
  pin5: ["N_C2"],
  pin6: ["P_IN"],
  pin7: ["UVLO"],
  pin8: ["OVP"],
  pin9: ["GND"],
  pin10: ["dVdT"],
  pin11: ["ILIM"],
  pin12: ["MODE"],
  pin13: ["N_SHDN"],
  pin14: ["IMON"],
  pin15: ["N_FLT"],
  pin16: ["PGOOD"],
  pin17: ["N_C3"],
  pin18: ["OUT3"],
  pin19: ["OUT2"],
  pin20: ["OUT1"],
  pin21: ["EP"]
} as const

const pinAttributes = {
  pin9: {requiresGround: true}
} as const

export const TPS16630PWPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C1849461"
  ]
}}
      manufacturerPartNumber="TPS16630PWPR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.873248mm" pcbY="2.925064mm" width="1.747012mm" height="0.3430016mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin2"]} pcbX="-2.873248mm" pcbY="2.275078mm" width="1.747012mm" height="0.3430016mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="-2.873248mm" pcbY="1.625092mm" width="1.747012mm" height="0.3430016mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin4"]} pcbX="-2.873248mm" pcbY="0.975106mm" width="1.747012mm" height="0.3430016mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="-2.873248mm" pcbY="0.324866mm" width="1.747012mm" height="0.3430016mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin6"]} pcbX="-2.873248mm" pcbY="-0.32512mm" width="1.747012mm" height="0.3430016mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin7"]} pcbX="-2.873248mm" pcbY="-0.975106mm" width="1.747012mm" height="0.3430016mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="-2.873248mm" pcbY="-1.625092mm" width="1.747012mm" height="0.3430016mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin9"]} pcbX="-2.873248mm" pcbY="-2.275078mm" width="1.747012mm" height="0.3430016mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin10"]} pcbX="-2.873248mm" pcbY="-2.925064mm" width="1.747012mm" height="0.3430016mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin20"]} pcbX="2.873248mm" pcbY="2.925064mm" width="1.747012mm" height="0.3430016mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin19"]} pcbX="2.873248mm" pcbY="2.275078mm" width="1.747012mm" height="0.3430016mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin18"]} pcbX="2.873248mm" pcbY="1.625092mm" width="1.747012mm" height="0.3430016mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin17"]} pcbX="2.873248mm" pcbY="0.975106mm" width="1.747012mm" height="0.3430016mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin16"]} pcbX="2.873248mm" pcbY="0.324866mm" width="1.747012mm" height="0.3430016mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin15"]} pcbX="2.873248mm" pcbY="-0.32512mm" width="1.747012mm" height="0.3430016mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin14"]} pcbX="2.873248mm" pcbY="-0.975106mm" width="1.747012mm" height="0.3430016mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin13"]} pcbX="2.873248mm" pcbY="-1.625092mm" width="1.747012mm" height="0.3430016mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin12"]} pcbX="2.873248mm" pcbY="-2.275078mm" width="1.747012mm" height="0.3430016mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin11"]} pcbX="2.873248mm" pcbY="-2.925064mm" width="1.747012mm" height="0.3430016mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin21"]} pcbX="0mm" pcbY="0mm" width="2.5850088mm" height="2.5850088mm" shape="rect" />
<via pcbX="0.599948mm" pcbY="-0.599948mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" layers={["top","bottom"]} />
<via pcbX="0.599948mm" pcbY="0.599948mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" layers={["top","bottom"]} />
<via pcbX="-0.599948mm" pcbY="0.599948mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" layers={["top","bottom"]} />
<via pcbX="-0.599948mm" pcbY="-0.599948mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" layers={["top","bottom"]} />
<silkscreenpath route={[{"x":-1.7714214000000084,"y":3.3261808000000883},{"x":1.7714214000000084,"y":3.3261808000000883},{"x":1.7714214000000084,"y":-3.3261808000000883},{"x":-1.7714214000000084,"y":-3.3261808000000883},{"x":-1.7714214000000084,"y":3.3261808000000883}]} />
<silkscreencircle pcbX="-2.873248mm" pcbY="3.548888mm" radius="0.150114mm" />
<silkscreentext text="{NAME}" pcbX="-0.0979678mm" pcbY="4.6966398mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.99675400000001,"y":3.499980800000003},{"x":3.99675400000001,"y":3.499980800000003},{"x":3.99675400000001,"y":-3.50000620000003},{"x":-3.99675400000001,"y":-3.50000620000003},{"x":-3.99675400000001,"y":3.499980800000003}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C1849461.obj?uuid=8e6015adf3634b5f88b85fbae678277b",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C1849461.step?uuid=8e6015adf3634b5f88b85fbae678277b",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0.000012699999956566899, z: -0.099083 },
      }}
      {...props}
    />
  )
}