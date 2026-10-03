import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["BOOT"],
  pin2: ["VIN"],
  pin3: ["EN"],
  pin4: ["RT","CLK"],
  pin5: ["FB"],
  pin6: ["COMP"],
  pin7: ["GND"],
  pin8: ["SW"],
  pin9: ["EP"]
} as const

const pinAttributes = {
  pin2: {requiresPower: true},
  pin7: {requiresGround: true}
} as const

export const TPS54360DDAR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C44377"
  ]
}}
      manufacturerPartNumber="TPS54360DDAR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="-2.769108mm" width="0.5739892mm" height="2.0379944mm" radius="0.2869946mm" shape="pill" />
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-2.769108mm" width="0.5739892mm" height="2.0379944mm" radius="0.2869946mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="-2.769108mm" width="0.5739892mm" height="2.0379944mm" radius="0.2869946mm" shape="pill" />
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="-2.769108mm" width="0.5739892mm" height="2.0379944mm" radius="0.2869946mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="-1.905mm" pcbY="2.769108mm" width="0.5739892mm" height="2.0379944mm" radius="0.2869946mm" shape="pill" />
<smtpad portHints={["pin7"]} pcbX="-0.635mm" pcbY="2.769108mm" width="0.5739892mm" height="2.0379944mm" radius="0.2869946mm" shape="pill" />
<smtpad portHints={["pin6"]} pcbX="0.635mm" pcbY="2.769108mm" width="0.5739892mm" height="2.0379944mm" radius="0.2869946mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="1.905mm" pcbY="2.769108mm" width="0.5739892mm" height="2.0379944mm" radius="0.2869946mm" shape="pill" />
<smtpad portHints={["pin9"]} pcbX="0mm" pcbY="0mm" width="1.999996mm" height="1.999996mm" shape="rect" />
<via pcbX="0.500126mm" pcbY="0.499872mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" layers={["top","bottom"]} />
<via pcbX="-0.499872mm" pcbY="0.499872mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" layers={["top","bottom"]} />
<via pcbX="-0.499872mm" pcbY="-0.500126mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" layers={["top","bottom"]} />
<via pcbX="0.500126mm" pcbY="-0.500126mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" layers={["top","bottom"]} />
<silkscreenpath route={[{"x":-2.5262078000000656,"y":-1.5214091999999937},{"x":-2.5262078000000656,"y":1.5214092000001074},{"x":2.526207799999952,"y":1.5214092000001074},{"x":2.526207799999952,"y":-1.5214091999999937},{"x":-2.5262078000000656,"y":-1.5214091999999937}]} />
<silkscreencircle pcbX="-1.905mm" pcbY="-0.769112mm" radius="0.150114mm" />
<silkscreencircle pcbX="-2.644394mm" pcbY="-2.769108mm" radius="0.150114mm" />
<silkscreentext text="{NAME}" pcbX="-0.1397mm" pcbY="4.5052mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.700007800000094,"y":4.038105200000018},{"x":2.6999823999999535,"y":4.038105200000018},{"x":2.6999823999999535,"y":-4.0381051999999045},{"x":-2.700007800000094,"y":-4.0381051999999045},{"x":-2.700007800000094,"y":4.038105200000018}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C44377.obj?uuid=d3dfb165ce8644e793b750cd6f375e75",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C44377.step?uuid=d3dfb165ce8644e793b750cd6f375e75",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}