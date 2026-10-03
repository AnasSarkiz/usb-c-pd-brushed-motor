import type { SwitchProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"]
} as const

export const KH_SS23E06_G8 = (props: SwitchProps) => {
  const { name = "SW1", ...restProps } = props

  return (
    <switch
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5274495"
  ]
}}
      manufacturerPartNumber="KH-SS23E06-G8"
      footprint={<footprint>
        <platedhole  portHints={["pin8"]} pcbX="-4.99999mm" pcbY="1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="0mm" pcbY="1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="2.500122mm" pcbY="1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="4.99999mm" pcbY="1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="4.99999mm" pcbY="-1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="2.500122mm" pcbY="-1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="0mm" pcbY="-1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-4.99999mm" pcbY="-1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<silkscreenpath route={[{"x":-8.849969599999895,"y":-3.099993799999993},{"x":6.750024600000074,"y":-3.099993799999993}]} />
<silkscreenpath route={[{"x":-8.849969599999895,"y":3.0999937999998792},{"x":6.750024600000074,"y":3.0999937999998792}]} />
<silkscreenpath route={[{"x":-8.849969599999895,"y":3.0999937999998792},{"x":-8.849969599999895,"y":-3.099993799999993}]} />
<silkscreenpath route={[{"x":6.750024600000074,"y":3.0999937999998792},{"x":6.750024600000074,"y":-3.099993799999993}]} />
<silkscreentext text="{NAME}" pcbX="-1.054608mm" pcbY="4.169666mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":-8.889999999999986,"y":3.1749999999999545},{"x":6.749999199999934,"y":3.1749999999999545},{"x":6.839801761210651,"y":3.1378025612106057},{"x":6.8769991999998865,"y":3.047999999999888},{"x":6.8769991999998865,"y":-3.0999938000001066},{"x":6.839801761210651,"y":-3.1897963612107105},{"x":6.749999199999934,"y":-3.2269938000000593},{"x":-8.799982399999976,"y":-3.2269938000000593},{"x":-8.88978496121058,"y":-3.1897963612107105},{"x":-8.926982399999929,"y":-3.0999938000001066},{"x":-8.926982399999929,"y":2.749981799999887},{"x":-8.799982399999976,"y":2.622981799999934},{"x":-8.67298239999991,"y":2.749981799999887},{"x":-8.67298239999991,"y":-2.97299380000004},{"x":6.622999199999981,"y":-2.97299380000004},{"x":6.622999199999981,"y":2.9209999999999354},{"x":-8.889999999999986,"y":2.9209999999999354},{"x":-8.763000000000034,"y":3.047999999999888},{"x":-8.889999999999986,"y":3.1749999999999545}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-9.254807999999912,"y":3.4196660000000065},{"x":7.1455920000001925,"y":3.4196660000000065},{"x":7.1455920000001925,"y":-3.4811339999999973},{"x":-9.254807999999912,"y":-3.4811339999999973},{"x":-9.254807999999912,"y":3.4196660000000065}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5274495.obj?uuid=7f20c4daaa044a5483a267367b7310c4",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5274495.step?uuid=7f20c4daaa044a5483a267367b7310c4",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 1.0499852000000374, y: -0.004999999999886207, z: -5.5000100000000005 },
      }}
      {...restProps}
    />
  )
}