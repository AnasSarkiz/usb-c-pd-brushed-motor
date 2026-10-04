import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["EP4"],
  pin2: ["EP3"],
  pin3: ["EP1"],
  pin4: ["EP2"],
  pin5: ["GND1","A1"],
  pin6: ["GND2","B12"],
  pin7: ["VBUS1","A4"],
  pin8: ["VBUS2","B9"],
  pin9: ["SBU2","B8"],
  pin10: ["CC1","A5"],
  pin11: ["DN2","B7"],
  pin12: ["DP1","A6"],
  pin13: ["DN1","A7"],
  pin14: ["DP2","B6"],
  pin15: ["CC2","B5"],
  pin16: ["GND3","B1"],
  pin17: ["GND4","A12"],
  pin18: ["SBU1","A8"],
  pin19: ["VBUS3","B4"],
  pin20: ["VBUS4","A9"]
} as const

export const KH_TYPE_C_16P = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C709357"
  ]
}}
      manufacturerPartNumber="KH-TYPE-C-16P"
      footprint={<footprint>
        <hole pcbX="-2.890012mm" pcbY="0.93493595mm" diameter="0.700024mm" />
<hole pcbX="2.890012mm" pcbY="0.93493595mm" diameter="0.700024mm" />
<platedhole  portHints={["pin3"]} pcbX="-4.320032mm" pcbY="-2.71504405mm" holeWidth="0.5999988mm" holeHeight="1.3999972mm" outerWidth="0.999998mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin4"]} pcbX="4.320032mm" pcbY="-2.71504405mm" holeWidth="0.5999988mm" holeHeight="1.3999972mm" outerWidth="0.999998mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="4.320032mm" pcbY="1.46503395mm" holeWidth="0.5999988mm" holeHeight="1.6999966mm" outerWidth="0.999998mm" outerHeight="1.999996mm" shape="pill" />
<platedhole  portHints={["pin1"]} pcbX="-4.320032mm" pcbY="1.46503395mm" holeWidth="0.5999988mm" holeHeight="1.6999966mm" outerWidth="0.999998mm" outerHeight="1.999996mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="-3.350006mm" pcbY="2.11501995mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-3.050032mm" pcbY="2.11501995mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-2.549906mm" pcbY="2.11501995mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-2.249932mm" pcbY="2.11501995mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-1.75006mm" pcbY="2.11501995mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-1.249934mm" pcbY="2.11501995mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-0.750062mm" pcbY="2.11501995mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-0.249936mm" pcbY="2.11501995mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="0.249936mm" pcbY="2.11501995mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="0.750062mm" pcbY="2.11501995mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="1.75006mm" pcbY="2.11501995mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="3.050032mm" pcbY="2.11501995mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="3.350006mm" pcbY="2.11501995mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="1.24968mm" pcbY="2.11501995mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="2.2499066mm" pcbY="2.11504535mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="2.5498806mm" pcbY="2.11504535mm" width="0.2999994mm" height="1.2999974mm" shape="rect" />
<silkscreenpath route={[{"x":4.57197460000009,"y":-1.6232250499999736},{"x":4.57197460000009,"y":0.27306275000000824}]} />
<silkscreenpath route={[{"x":-4.572025399999916,"y":-3.8070154499999944},{"x":-4.572025399999916,"y":-5.380088249999972},{"x":4.57197460000009,"y":-5.380088249999972},{"x":4.57197460000009,"y":-3.8070154499999944}]} />
<silkscreenpath route={[{"x":-4.572025399999916,"y":0.27306275000000824},{"x":-4.572025399999916,"y":-1.6232250499999736}]} />
<silkscreentext text="{NAME}" pcbX="0.002794mm" pcbY="3.75586195mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.070031000000085,"y":3.0150440500000286},{"x":5.070031000000085,"y":3.0150440500000286},{"x":5.070031000000085,"y":-5.605018449999989},{"x":-5.070031000000085,"y":-5.605018449999989},{"x":-5.070031000000085,"y":3.0150440500000286}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C709357.obj?uuid=954b2a5828604707b62aef0fe6e7695f",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C709357.step?uuid=954b2a5828604707b62aef0fe6e7695f",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 1.6800224500000058, z: -0.09000220000000003 },
      }}
      {...props}
    />
  )
}