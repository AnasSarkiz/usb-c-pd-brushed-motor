import type { SwitchProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"]
} as const

export const A_1103M2S3CQE2 = (props: SwitchProps) => {
  const { name = "SW1", ...restProps } = props

  return (
    <switch
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C221539"
  ]
}}
      manufacturerPartNumber="1103M2S3CQE2"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-4.344016mm" pcbY="0mm" holeWidth="0.9139936mm" holeHeight="0.9139936mm" outerWidth="1.524mm" outerHeight="2.1999956mm" rectPad={true} pcbRotation="0deg" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="0.356mm" pcbY="0mm" holeWidth="0.9139936mm" holeHeight="1.5899892mm" outerWidth="1.524mm" outerHeight="2.1999956mm" shape="pill" />
<platedhole  portHints={["pin3"]} pcbX="5.056016mm" pcbY="0mm" holeWidth="0.9139936mm" holeHeight="1.5899892mm" outerWidth="1.524mm" outerHeight="2.1999956mm" shape="pill" />
<silkscreenpath route={[{"x":1.6259999999999764,"y":3.302000000000021},{"x":6.705999999999904,"y":3.302000000000021},{"x":6.705999999999904,"y":-3.3019999999999072},{"x":-5.994000000000142,"y":-3.3019999999999072}]} />
<silkscreenpath route={[{"x":-1.1680000000000064,"y":3.302000000000021},{"x":-5.994000000000142,"y":3.302000000000021},{"x":-5.994000000000142,"y":-3.3019999999999072}]} />
<silkscreenpath route={[{"x":-1.0410000000000537,"y":-3.3019999999999072},{"x":0.9909999999998718,"y":-3.3019999999999072}]} />
<silkscreenpath route={[{"x":-1.1680000000000064,"y":3.302000000000021},{"x":1.6259999999999764,"y":3.302000000000021}]} />
<silkscreentext text="{NAME}" pcbX="0.342284mm" pcbY="4.429mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-6.397416000000021,"y":3.6789999999999736},{"x":7.08198399999992,"y":3.6789999999999736},{"x":7.08198399999992,"y":-3.704399999999964},{"x":-6.397416000000021,"y":-3.704399999999964},{"x":-6.397416000000021,"y":3.6789999999999736}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C221539.obj?uuid=92c55af3af944c06a570ace97c67d60b",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C221539.step?uuid=92c55af3af944c06a570ace97c67d60b",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.3559872999999243, y: 0.000012699999956566899, z: -1.3500100000000002 },
      }}
      {...restProps}
    />
  )
}