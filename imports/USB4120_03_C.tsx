import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND1","B12"],
  pin2: ["VBUS1","B9"],
  pin3: ["SBU2","B8"],
  pin4: ["Dn2","B7"],
  pin5: ["Dp2","B6"],
  pin6: ["CC2","B5"],
  pin7: ["VBUS2","B4"],
  pin8: ["GND2","A12"],
  pin9: ["VBUS3","A9"],
  pin10: ["SBU1","A8"],
  pin11: ["Dn1","A7"],
  pin12: ["Dp1","A6"],
  pin13: ["CC1","A5"],
  pin14: ["VBUS4","A4"],
  pin15: ["GND3","B1"],
  pin16: ["GND4","A1"],
  pin17: ["pin17"]
} as const

export const USB4120_03_C = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C3445864"
  ]
}}
      manufacturerPartNumber="USB4120-03-C"
      footprint={<footprint>
        <hole pcbX="-3.750056mm" pcbY="-0.000127mm" diameter="0.5999988mm" />
<hole pcbX="3.750056mm" pcbY="-0.000127mm" diameter="0.5999988mm" />
<platedhole  portHints={["pin17"]} pcbX="-2.400046mm" pcbY="-2.149983mm" holeWidth="0.5999988mm" holeHeight="0.8499856mm" outerWidth="1.0999978mm" outerHeight="1.35001mm" pcbRotation="270deg" shape="pill" />
<platedhole  portHints={["pin17"]} pcbX="2.400046mm" pcbY="-2.149983mm" holeWidth="0.5999988mm" holeHeight="0.8499856mm" outerWidth="1.0999978mm" outerHeight="1.35001mm" pcbRotation="270deg" shape="pill" />
<platedhole  portHints={["pin17"]} pcbX="2.400046mm" pcbY="2.149983mm" holeWidth="0.5999988mm" holeHeight="0.8499856mm" outerWidth="1.0999978mm" outerHeight="1.35001mm" pcbRotation="270deg" shape="pill" />
<platedhole  portHints={["pin17"]} pcbX="-2.400046mm" pcbY="2.149983mm" holeWidth="0.5999988mm" holeHeight="0.8499856mm" outerWidth="1.0999978mm" outerHeight="1.35001mm" pcbRotation="270deg" shape="pill" />
<smtpad portHints={["pin1"]} pcbX="-2.750058mm" pcbY="-0.799973mm" width="0.2999994mm" height="0.8700008mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.249934mm" pcbY="-0.799973mm" width="0.2999994mm" height="0.8700008mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.750062mm" pcbY="-0.799973mm" width="0.2999994mm" height="0.8700008mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-0.249936mm" pcbY="-0.799973mm" width="0.2999994mm" height="0.8700008mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.249936mm" pcbY="-0.799973mm" width="0.2999994mm" height="0.8700008mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.750062mm" pcbY="-0.799973mm" width="0.2999994mm" height="0.8700008mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.249934mm" pcbY="-0.799973mm" width="0.2999994mm" height="0.8700008mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="2.750058mm" pcbY="0.799973mm" width="0.2999994mm" height="0.8700008mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.249934mm" pcbY="0.799973mm" width="0.2999994mm" height="0.8700008mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="0.750062mm" pcbY="0.799973mm" width="0.2999994mm" height="0.8700008mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="0.249936mm" pcbY="0.799973mm" width="0.2999994mm" height="0.8700008mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-0.249936mm" pcbY="0.799973mm" width="0.2999994mm" height="0.8700008mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-0.750062mm" pcbY="0.799973mm" width="0.2999994mm" height="0.8700008mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-1.249934mm" pcbY="0.799973mm" width="0.2999994mm" height="0.8700008mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="2.750058mm" pcbY="-0.799973mm" width="0.2999994mm" height="0.8700008mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-2.750058mm" pcbY="0.799973mm" width="0.2999994mm" height="0.8700008mm" shape="rect" />
<silkscreenpath route={[{"x":3.0580075999999963,"y":1.5800070000000233},{"x":4.4699935999999525,"y":1.5800070000000233}]} />
<silkscreenpath route={[{"x":-1.742084400000067,"y":1.5800070000000233},{"x":1.742084400000067,"y":1.5800070000000233}]} />
<silkscreenpath route={[{"x":-3.05800760000011,"y":-1.5800070000000233},{"x":-4.469993600000066,"y":-1.5800070000000233},{"x":-4.469993600000066,"y":1.5800070000000233},{"x":-3.05800760000011,"y":1.5800070000000233}]} />
<silkscreenpath route={[{"x":1.742084400000067,"y":-1.5800070000000233},{"x":-1.742084400000067,"y":-1.5800070000000233}]} />
<silkscreenpath route={[{"x":4.4699935999999525,"y":1.5800070000000233},{"x":4.4699935999999525,"y":-1.5800070000000233},{"x":3.0580075999999963,"y":-1.5800070000000233}]} />
<silkscreentext text="{NAME}" pcbX="-0.025146mm" pcbY="3.708783mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-4.719993600000066,"y":2.9499819000000116},{"x":4.7199935999999525,"y":2.9499819000000116},{"x":4.7199935999999525,"y":-2.9499819000000116},{"x":-4.719993600000066,"y":-2.9499819000000116},{"x":-4.719993600000066,"y":2.9499819000000116}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3445864.obj?uuid=0dfda3e48fbf49868b9180670f282692",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3445864.step?uuid=0dfda3e48fbf49868b9180670f282692",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -6.4500020000000005 },
      }}
      {...props}
    />
  )
}