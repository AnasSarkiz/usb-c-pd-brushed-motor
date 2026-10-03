import type { SwitchProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"]
} as const

export const A_1MS3T1B1M2QES_5 = (props: SwitchProps) => {
  const { name = "SW1", ...restProps } = props

  return (
    <switch
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C908270"
  ]
}}
      manufacturerPartNumber="1MS3T1B1M2QES-5"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="0mm" pcbY="-4.700016mm" holeWidth="2.70002mm" holeHeight="1.1000232mm" outerWidth="3.3999932mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="0mm" pcbY="0mm" holeWidth="2.70002mm" holeHeight="1.1000232mm" outerWidth="3.3999932mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin3"]} pcbX="0mm" pcbY="4.700016mm" holeWidth="2.70002mm" holeHeight="1.1000232mm" outerWidth="3.3999932mm" outerHeight="1.7999964mm" shape="pill" />
<silkscreenpath route={[{"x":3.42999060000011,"y":6.350000000000023},{"x":3.42999060000011,"y":-6.349999999999909}]} />
<silkscreenpath route={[{"x":-3.4299905999999964,"y":6.350000000000023},{"x":-3.4299905999999964,"y":-6.349999999999909}]} />
<silkscreenpath route={[{"x":-3.4299905999999964,"y":-6.349999999999909},{"x":3.42999060000011,"y":-6.349999999999909}]} />
<silkscreenpath route={[{"x":-3.4299905999999964,"y":6.350000000000023},{"x":3.42999060000011,"y":6.350000000000023}]} />
<silkscreencircle pcbX="0mm" pcbY="0mm" radius="3.144266mm" />
<silkscreencircle pcbX="0mm" pcbY="0mm" radius="2.785364mm" />
<silkscreencircle pcbX="0mm" pcbY="0mm" radius="5.999988mm" />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="7.35mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-6.2444000000000415,"y":6.600000000000023},{"x":6.244399999999928,"y":6.600000000000023},{"x":6.244399999999928,"y":-6.6253999999999},{"x":-6.2444000000000415,"y":-6.6253999999999},{"x":-6.2444000000000415,"y":6.600000000000023}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C908270.obj?uuid=efe9926226eb4e16aaffad72dde97a93",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C908270.step?uuid=efe9926226eb4e16aaffad72dde97a93",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.45765699999999976 },
      }}
      {...restProps}
    />
  )
}