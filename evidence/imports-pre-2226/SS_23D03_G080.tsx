import type { SwitchProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"]
} as const

export const SS_23D03_G080 = (props: SwitchProps) => {
  const { name = "SW1", ...restProps } = props

  return (
    <switch
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2848921"
  ]
}}
      manufacturerPartNumber="SS-23D03-G080"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-3.999992mm" pcbY="-1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-1.999996mm" pcbY="-1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="0mm" pcbY="-1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="3.999992mm" pcbY="-1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="3.999992mm" pcbY="1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="0mm" pcbY="1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="-1.999996mm" pcbY="1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="-3.999992mm" pcbY="1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="-7.500112mm" pcbY="3.10007mm" outerDiameter="1.999996mm" holeDiameter="1.3999972mm" shape="circle" />
<platedhole  portHints={["pin10"]} pcbX="7.500112mm" pcbY="3.10007mm" outerDiameter="1.999996mm" holeDiameter="1.3999972mm" shape="circle" />
<platedhole  portHints={["pin10"]} pcbX="7.500112mm" pcbY="-3.10007mm" outerDiameter="1.999996mm" holeDiameter="1.3999972mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="-7.500112mm" pcbY="-3.10007mm" outerDiameter="1.999996mm" holeDiameter="1.3999972mm" shape="circle" />
<silkscreenpath route={[{"x":1.3970000000000482,"y":2.5399999999999636},{"x":1.3970000000000482,"y":-2.286000000000058}]} />
<silkscreenpath route={[{"x":2.4129999999998972,"y":0},{"x":2.4129999999998972,"y":2.5399999999999636},{"x":-3.048000000000002,"y":2.5399999999999636},{"x":-3.048000000000002,"y":-2.286000000000058},{"x":2.4129999999998972,"y":-2.286000000000058},{"x":2.4129999999998972,"y":0}]} />
<silkscreenpath route={[{"x":-6.285585600000104,"y":-3.3019999999999072},{"x":6.285585599999877,"y":-3.3019999999999072}]} />
<silkscreenpath route={[{"x":-6.285585600000104,"y":3.302000000000021},{"x":6.285585599999877,"y":3.302000000000021}]} />
<silkscreenpath route={[{"x":8.000009399999954,"y":1.9752055999999811},{"x":8.000009399999954,"y":-1.9752055999999811}]} />
<silkscreenpath route={[{"x":-8.000009400000067,"y":1.9752055999999811},{"x":-8.000009400000067,"y":-1.9752055999999811}]} />
<silkscreentext text="{NAME}" pcbX="-0.015494mm" pcbY="5.146804mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":1.3969999999999345,"y":-2.286000000000058},{"x":2.413000000000011,"y":-2.286000000000058},{"x":2.413000000000011,"y":2.5399999999999636},{"x":1.3969999999999345,"y":2.5399999999999636},{"x":1.3969999999999345,"y":-2.286000000000058}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-8.81259399999999,"y":4.396803999999975},{"x":8.78160600000001,"y":4.396803999999975},{"x":8.78160600000001,"y":-4.408995999999888},{"x":-8.81259399999999,"y":-4.408995999999888},{"x":-8.81259399999999,"y":4.396803999999975}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2848921.obj?uuid=800a72cc5a914182bedd932cfb077937",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2848921.step?uuid=800a72cc5a914182bedd932cfb077937",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012699999956566899, z: -1.2937369999999997 },
      }}
      {...restProps}
    />
  )
}