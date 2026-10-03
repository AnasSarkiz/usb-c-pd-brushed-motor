import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"]
} as const

export const B_2100S04P_A110 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C124378"
  ]
}}
      manufacturerPartNumber="B-2100S04P-A110"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-3.81mm" pcbY="0mm" holeWidth="1.1000232mm" holeHeight="1.1000232mm" outerWidth="1.6999966mm" outerHeight="1.6999966mm" rectPad={true} pcbRotation="0deg" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="-1.27mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="1.27mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="3.81mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<silkscreenpath route={[{"x":-2.516479600000139,"y":1.2700000000000955},{"x":5.0799999999998136,"y":1.2700000000000955},{"x":5.0799999999998136,"y":-1.2699999999999818},{"x":-5.080000000000041,"y":-1.2699999999999818},{"x":-5.080000000000041,"y":1.2700000000000955},{"x":-2.516479600000139,"y":1.2700000000000955}]} />
<silkscreenpath route={[{"x":-2.516479600000139,"y":1.2700000000000955},{"x":-2.516479600000139,"y":-1.2699999999999818}]} />
<silkscreentext text="{NAME}" pcbX="-0.0127mm" pcbY="2.3208mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.3554000000000315,"y":1.570799999999963},{"x":5.3299999999998136,"y":1.570799999999963},{"x":5.3299999999998136,"y":-1.5961999999999534},{"x":-5.3554000000000315,"y":-1.5961999999999534},{"x":-5.3554000000000315,"y":1.570799999999963}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C124378.obj?uuid=62d1dd00f91344f487735a33792f8f57",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C124378.step?uuid=62d1dd00f91344f487735a33792f8f57",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.000005999999999950489 },
      }}
      {...props}
    />
  )
}