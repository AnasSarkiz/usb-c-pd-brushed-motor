import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const DB126V_5_0_2P_GN_P = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C395849"
  ]
}}
      manufacturerPartNumber="DB126V-5.0-2P-GN-P"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-2.499868mm" pcbY="-0.099949mm" outerDiameter="2.499995mm" holeDiameter="1.5999968mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="2.500122mm" pcbY="-0.099949mm" outerDiameter="2.499995mm" holeDiameter="1.5999968mm" shape="circle" />
<silkscreenpath route={[{"x":-3.810000000000059,"y":-3.7829490000000305},{"x":-3.810000000000059,"y":-2.0049490000000105},{"x":-1.143000000000029,"y":-2.0049490000000105},{"x":-1.143000000000029,"y":-3.7829490000000305}]} />
<silkscreenpath route={[{"x":1.1429999999999154,"y":-3.7829490000000305},{"x":1.1429999999999154,"y":-2.0049490000000105},{"x":3.8099999999999454,"y":-2.0049490000000105},{"x":3.8099999999999454,"y":-3.7829490000000305}]} />
<silkscreenrect pcbX="0mm" pcbY="0mm" width="9.99998mm" height="7.800086mm" strokeWidth="0.254mm" />
<silkscreentext text="{NAME}" pcbX="-0.1397mm" pcbY="5.014851mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.660200000000032,"y":4.264850999999908},{"x":5.380799999999908,"y":4.264850999999908},{"x":5.380799999999908,"y":-4.312349000000154},{"x":-5.660200000000032,"y":-4.312349000000154},{"x":-5.660200000000032,"y":4.264850999999908}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C395849.obj?uuid=6da7a3e4055f4f749492a0377ad92fa1",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C395849.step?uuid=6da7a3e4055f4f749492a0377ad92fa1",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: -2.490965599999935, y: -0.11496059999999497, z: -0.000006999999999646178 },
      }}
      {...props}
    />
  )
}