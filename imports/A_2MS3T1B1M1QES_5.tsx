import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"]
} as const

export const A_2MS3T1B1M1QES_5 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C908281"
  ]
}}
      manufacturerPartNumber="2MS3T1B1M1QES-5"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="0mm" pcbY="-2.54mm" holeWidth="1.6999966mm" holeHeight="0.700024mm" outerWidth="2.2999954mm" outerHeight="1.2999974mm" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="0mm" pcbY="0mm" holeWidth="1.6999966mm" holeHeight="0.700024mm" outerWidth="2.2999954mm" outerHeight="1.2999974mm" shape="pill" />
<platedhole  portHints={["pin3"]} pcbX="0mm" pcbY="2.54mm" holeWidth="1.6999966mm" holeHeight="0.700024mm" outerWidth="2.2999954mm" outerHeight="1.2999974mm" shape="pill" />
<silkscreenpath route={[{"x":2.5399999999999636,"y":4.099966399999971},{"x":2.5399999999999636,"y":-4.099991799999998}]} />
<silkscreenpath route={[{"x":-2.5400000000000773,"y":-4.099991799999998},{"x":2.5399999999999636,"y":-4.099991799999998}]} />
<silkscreenpath route={[{"x":-2.5400000000000773,"y":4.099966399999971},{"x":-2.5400000000000773,"y":-4.099991799999998}]} />
<silkscreenpath route={[{"x":-2.5400000000000773,"y":4.099991800000112},{"x":2.5399999999999636,"y":4.099991800000112}]} />
<silkscreencircle pcbX="0mm" pcbY="0mm" radius="1.448054mm" />
<silkscreentext text="{NAME}" pcbX="0.0127mm" pcbY="5.2164mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.249994000000129,"y":4.319994400000041},{"x":3.249994000000015,"y":4.319994400000041},{"x":3.249994000000015,"y":-4.319994399999928},{"x":-3.249994000000129,"y":-4.319994399999928},{"x":-3.249994000000129,"y":4.319994400000041}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C908281.obj?uuid=2dd80f0c2a054cda96be1dbca5341625",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C908281.step?uuid=2dd80f0c2a054cda96be1dbca5341625",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -1.0600079999999998 },
      }}
      {...props}
    />
  )
}