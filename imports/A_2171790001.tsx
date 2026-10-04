import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SHELL"],
  pin2: ["GND1","A1B12"],
  pin3: ["VBUS1","A4B9"],
  pin4: ["GND2","B1A12"],
  pin5: ["VBUS2","B4A9"],
  pin6: ["CC2","B5"],
  pin7: ["SBU2","B8"],
  pin8: ["D_POS1","B6"],
  pin9: ["D_NEG1","A7"],
  pin10: ["D_POS2","A6"],
  pin11: ["D_NEG2","B7"],
  pin12: ["CC1","A5"],
  pin13: ["SBU1","A8"]
} as const

export const A_2171790001 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C3197684"
  ]
}}
      manufacturerPartNumber="2171790001"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="4.320032mm" pcbY="-2.5498996mm" holeWidth="0.5999988mm" holeHeight="1.7999964mm" outerWidth="0.999998mm" outerHeight="2.1999956mm" shape="pill" />
<platedhole  portHints={["pin1"]} pcbX="-4.320032mm" pcbY="-2.5498996mm" holeWidth="0.5999988mm" holeHeight="1.7999964mm" outerWidth="0.999998mm" outerHeight="2.1999956mm" shape="pill" />
<platedhole  portHints={["pin1"]} pcbX="4.320032mm" pcbY="1.4498384mm" holeWidth="0.5999988mm" holeHeight="1.3999972mm" outerWidth="0.999998mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin1"]} pcbX="-4.320032mm" pcbY="1.4495844mm" holeWidth="0.5999988mm" holeHeight="1.3999718mm" outerWidth="0.999998mm" outerHeight="1.7999964mm" shape="pill" />
<smtpad portHints={["pin2"]} pcbX="-3.200146mm" pcbY="2.0248944mm" width="0.5999988mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-2.400046mm" pcbY="2.0248944mm" width="0.5999988mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="3.199892mm" pcbY="2.0248944mm" width="0.5999988mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="2.400046mm" pcbY="2.0248944mm" width="0.5999988mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="1.75006mm" pcbY="2.0248944mm" width="0.2999994mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-1.75006mm" pcbY="2.0248944mm" width="0.2999994mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0.750062mm" pcbY="2.0248944mm" width="0.2999994mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="0.249936mm" pcbY="2.0248944mm" width="0.2999994mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-0.249936mm" pcbY="2.0248944mm" width="0.2999994mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-0.750062mm" pcbY="2.0248944mm" width="0.2999994mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-1.249934mm" pcbY="2.0248944mm" width="0.2999994mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="1.249934mm" pcbY="2.0248944mm" width="0.2999994mm" height="1.1500104mm" shape="rect" />
<silkscreenpath route={[{"x":4.499990999999909,"y":-1.241215400000101},{"x":4.499990999999909,"y":0.3413315999999895}]} />
<silkscreenpath route={[{"x":4.499990999999909,"y":-4.6497684000000845},{"x":4.499990999999909,"y":-3.8583298000000923}]} />
<silkscreenpath route={[{"x":-4.499991000000023,"y":-1.241215400000101},{"x":-4.499991000000023,"y":0.34105220000003555}]} />
<silkscreenpath route={[{"x":-4.499991000000023,"y":-4.6497684000000845},{"x":-4.499991000000023,"y":-3.8583298000000923}]} />
<silkscreenpath route={[{"x":4.499990999999909,"y":-4.6497684000000845},{"x":-4.499991000000023,"y":-4.6497684000000845}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="3.6078244mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.070031000000085,"y":2.849899599999958},{"x":5.070030999999972,"y":2.849899599999958},{"x":5.070030999999972,"y":-3.899897399999986},{"x":-5.070031000000085,"y":-3.899897399999986},{"x":-5.070031000000085,"y":2.849899599999958}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3197684.obj?uuid=31d3fdbe69ae4dffb5472e30c7b71123",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3197684.step?uuid=31d3fdbe69ae4dffb5472e30c7b71123",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.004060999999999648, y: 0.9217014999999911, z: -1.1680028000000002 },
      }}
      {...props}
    />
  )
}