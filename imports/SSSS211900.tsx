import type { SwitchProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"]
} as const

export const SSSS211900 = (props: SwitchProps) => {
  const { name = "SW1", ...restProps } = props

  return (
    <switch
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C160871"
  ]
}}
      manufacturerPartNumber="SSSS211900"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-3.999992mm" pcbY="1.700022mm" outerDiameter="1.7999964mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-1.999996mm" pcbY="-1.700022mm" outerDiameter="1.7999964mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="1.999996mm" pcbY="-1.700022mm" outerDiameter="1.7999964mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="3.999992mm" pcbY="1.700022mm" outerDiameter="1.7999964mm" holeDiameter="1.1999976mm" shape="circle" />
<silkscreenpath route={[{"x":6.500012399999832,"y":1.7499584000000823},{"x":6.500012399999832,"y":-1.7500091999999086}]} />
<silkscreenpath route={[{"x":-6.50001240000006,"y":-1.750034600000049},{"x":-6.50001240000006,"y":1.7499837999999954}]} />
<silkscreenpath route={[{"x":-3.048000000000002,"y":0.5080000000000382},{"x":-2.032000000000039,"y":0.5080000000000382},{"x":-1.2699999999999818,"y":0.5080000000000382},{"x":-1.2699999999999818,"y":-0.5080000000000382},{"x":-3.048000000000002,"y":-0.5080000000000382},{"x":-3.048000000000002,"y":0.5080000000000382}]} />
<silkscreenpath route={[{"x":-6.50001240000006,"y":1.7499837999999954},{"x":-5.130012599999986,"y":1.7499837999999954}]} />
<silkscreenpath route={[{"x":-2.869971400000054,"y":1.7499837999999954},{"x":2.869971400000054,"y":1.7499837999999954}]} />
<silkscreenpath route={[{"x":5.130012599999873,"y":1.7499837999999954},{"x":6.500012399999832,"y":1.7499837999999954}]} />
<silkscreenpath route={[{"x":6.500012399999832,"y":-1.750034600000049},{"x":3.1300165999998626,"y":-1.750034600000049}]} />
<silkscreenpath route={[{"x":0.8699753999999302,"y":-1.750034600000049},{"x":-0.8699754000000439,"y":-1.750034600000049}]} />
<silkscreenpath route={[{"x":-3.13001660000009,"y":-1.750034600000049},{"x":-6.50001240000006,"y":-1.750034600000049}]} />
<silkscreenpath route={[{"x":-3.810000000000059,"y":-1.0159999999999627},{"x":-2.9002228000000514,"y":-1.0159999999999627}]} />
<silkscreenpath route={[{"x":-1.0997691999999688,"y":-1.0159999999999627},{"x":1.0997691999998551,"y":-1.0159999999999627}]} />
<silkscreenpath route={[{"x":2.9002227999999377,"y":-1.0159999999999627},{"x":3.8099999999999454,"y":-1.0159999999999627}]} />
<silkscreenpath route={[{"x":3.8099999999999454,"y":-1.0159999999999627},{"x":3.8099999999999454,"y":0.5849874000000455}]} />
<silkscreenpath route={[{"x":-3.810000000000059,"y":-1.0159999999999627},{"x":-3.810000000000059,"y":0.5849874000000455}]} />
<silkscreenpath route={[{"x":-3.099765199999979,"y":1.0160000000000764},{"x":3.099765199999865,"y":1.0160000000000764}]} />
<silkscreentext text="{NAME}" pcbX="-0.0127mm" pcbY="3.6416mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-6.904799999999909,"y":2.8916000000000395},{"x":6.879400000000032,"y":2.8916000000000395},{"x":6.879400000000032,"y":-2.840799999999831},{"x":-6.904799999999909,"y":-2.840799999999831},{"x":-6.904799999999909,"y":2.8916000000000395}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C160871.obj?uuid=987216e83a0b4963a6b188ae79b23ff6",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C160871.step?uuid=987216e83a0b4963a6b188ae79b23ff6",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012700000070253736, z: -3.500006 },
      }}
      {...restProps}
    />
  )
}