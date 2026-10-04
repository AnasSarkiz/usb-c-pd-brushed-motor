import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin7: ["EH"],
  pin8: ["GND1","A12"],
  pin9: ["VBUS1","A9"],
  pin10: ["CC2","B5"],
  pin11: ["CC1","A5"],
  pin12: ["VBUS2","B9"],
  pin13: ["GND2","B12"]
} as const

export const TYPE_C_6P_073_ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C668623"
  ]
}}
      manufacturerPartNumber="TYPE-C 6P(073)"
      footprint={<footprint>
        <platedhole  portHints={["pin7"]} pcbX="-4.319905mm" pcbY="1.4000036mm" holeWidth="0.5000244mm" holeHeight="1.1999976mm" outerWidth="0.999998mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin7"]} pcbX="4.319905mm" pcbY="1.4000036mm" holeWidth="0.5000244mm" holeHeight="1.1999976mm" outerWidth="0.999998mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin7"]} pcbX="-4.319905mm" pcbY="-2.4000904mm" holeWidth="0.5000244mm" holeHeight="1.1999976mm" outerWidth="0.999998mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin7"]} pcbX="4.319905mm" pcbY="-2.4000904mm" holeWidth="0.5000244mm" holeHeight="1.1999976mm" outerWidth="0.999998mm" outerHeight="1.6999966mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="2.750058mm" pcbY="1.8500916mm" width="0.7999984mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.5199868mm" pcbY="1.8500916mm" width="0.6999986mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="0.499999mm" pcbY="1.8500916mm" width="0.6999986mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-0.499999mm" pcbY="1.8500916mm" width="0.6999986mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-1.5199868mm" pcbY="1.8500916mm" width="0.6999986mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-2.749931mm" pcbY="1.8500916mm" width="0.7999984mm" height="1.1999976mm" shape="rect" />
<silkscreenpath route={[{"x":3.331083000000035,"y":1.8000281999998151},{"x":3.540810800000031,"y":1.8000281999998151}]} />
<silkscreenpath route={[{"x":-3.329101800000103,"y":1.8000281999998151},{"x":-3.3309814000000415,"y":1.8000281999998151}]} />
<silkscreenpath route={[{"x":3.3291525999999294,"y":1.8000281999998151},{"x":3.540810800000031,"y":1.8000281999998151}]} />
<silkscreenpath route={[{"x":-3.5406838000000107,"y":1.8000281999998151},{"x":-3.329101800000103,"y":1.8000281999998151}]} />
<silkscreenpath route={[{"x":-4.499940200000083,"y":0.20000599999980295},{"x":-4.499940200000083,"y":0.2421191999999337}]} />
<silkscreenpath route={[{"x":-4.499940200000083,"y":0.20000599999980295},{"x":-4.499940200000083,"y":-1.2422568000001775}]} />
<silkscreenpath route={[{"x":4.500067199999876,"y":-1.1999658000000863},{"x":4.500067199999876,"y":0.25009479999994255}]} />
<silkscreenpath route={[{"x":-4.500676800000065,"y":-3.6011802000000444},{"x":-4.500676800000065,"y":-3.5783202000000074},{"x":-4.500676800000065,"y":-5.000745600000073},{"x":4.501057800000012,"y":-5.000745600000073},{"x":4.501057800000012,"y":-3.6011802000000444}]} />
<silkscreentext text="{NAME}" pcbX="0.013843mm" pcbY="3.4612156mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":0.00005080000005364127,"y":-4.4999592000001485},{"x":-0.09994900000003781,"y":-4.4999592000001485},{"x":-0.09994900000003781,"y":-2.4999632000001384},{"x":0.10005060000003141,"y":-2.4999632000001384},{"x":0.10005060000003141,"y":-4.4999592000001485},{"x":0.00005080000005364127,"y":-4.4999592000001485}]} strokeWidth="0.254mm" />
<fabricationnotepath route={[{"x":-0.49994820000006257,"y":-4.4999592000001485},{"x":0.5000498000000562,"y":-4.4999592000001485},{"x":0.00005080000005364127,"y":-4.999958200000151},{"x":-0.49994820000006257,"y":-4.4999592000001485}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-5.069904000000065,"y":2.700090399999908},{"x":5.069903999999951,"y":2.700090399999908},{"x":5.069903999999951,"y":-5.292960400000197},{"x":-5.069904000000065,"y":-5.292960400000197},{"x":-5.069904000000065,"y":2.700090399999908}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C668623.obj?uuid=5572357f2a5242b0b12e4512f7b213ab",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C668623.step?uuid=5572357f2a5242b0b12e4512f7b213ab",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.00005030000005357138, y: 1.842960700000218, z: -0.030008000000000035 },
      }}
      {...props}
    />
  )
}