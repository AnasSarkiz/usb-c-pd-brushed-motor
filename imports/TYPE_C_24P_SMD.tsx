import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin25: ["pin25"],
  pin26: ["GND1","B12"],
  pin27: ["SSRXp1","B11"],
  pin28: ["SSRXn1","B10"],
  pin29: ["VBUS1","B9"],
  pin30: ["SBU2","B8"],
  pin31: ["Dn2","B7"],
  pin32: ["Dp2","B6"],
  pin33: ["CC2","B5"],
  pin34: ["VBUS2","B4"],
  pin35: ["SSTXn2","B3"],
  pin36: ["SSTXp2","B2"],
  pin37: ["GND2","B1"],
  pin38: ["GND3","A12"],
  pin39: ["SSRXp2","A11"],
  pin40: ["SSRXn2","A10"],
  pin41: ["VBUS3","A9"],
  pin42: ["SBU1","A8"],
  pin43: ["Dn1","A7"],
  pin44: ["Dp1","A6"],
  pin45: ["CC1","A5"],
  pin46: ["VBUS4","A4"],
  pin47: ["SSTXn1","A3"],
  pin48: ["SSTXp1","A2"],
  pin49: ["GND4","A1"]
} as const

export const TYPE_C_24P_SMD = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C53207146"
  ]
}}
      manufacturerPartNumber="TYPE-C-24P-SMD"
      footprint={<footprint>
        <hole pcbX="3.39979mm" pcbY="0.36315655mm" diameter="0.5500116mm" />
<hole pcbX="-3.400044mm" pcbY="0.36315655mm" diameter="0.5500116mm" />
<platedhole  portHints={["pin25"]} pcbX="-4.08178mm" pcbY="1.21812055mm" holeWidth="0.5000244mm" holeHeight="1.1999976mm" outerWidth="0.999998mm" outerHeight="1.540002mm" pcbRotation="90deg" shape="pill" />
<platedhole  portHints={["pin25"]} pcbX="-4.318mm" pcbY="1.78200055mm" holeWidth="0.5999988mm" holeHeight="1.499997mm" outerWidth="0.999998mm" outerHeight="1.9500088mm" shape="pill" />
<platedhole  portHints={["pin25"]} pcbX="4.04622mm" pcbY="1.21812055mm" holeWidth="0.5000244mm" holeHeight="1.1999976mm" outerWidth="0.999998mm" outerHeight="1.540002mm" pcbRotation="90deg" shape="pill" />
<platedhole  portHints={["pin25"]} pcbX="4.318mm" pcbY="1.78200055mm" holeWidth="0.5999988mm" holeHeight="1.499997mm" outerWidth="0.999998mm" outerHeight="1.9500088mm" shape="pill" />
<platedhole  portHints={["pin4"]} pcbX="-4.320032mm" pcbY="-2.83749745mm" holeWidth="0.5999988mm" holeHeight="1.8999708mm" outerWidth="0.999998mm" outerHeight="2.2999954mm" shape="pill" />
<platedhole  portHints={["pin3"]} pcbX="4.320032mm" pcbY="-2.83749745mm" holeWidth="0.5999988mm" holeHeight="1.8999708mm" outerWidth="0.999998mm" outerHeight="2.2999954mm" shape="pill" />
<smtpad portHints={["pin26"]} pcbX="-2.875026mm" pcbY="1.03752655mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-2.375154mm" pcbY="1.03752655mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-1.875028mm" pcbY="1.03752655mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="-1.375156mm" pcbY="1.03752655mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="-0.87503mm" pcbY="1.03752655mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-0.375158mm" pcbY="1.03752655mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="0.124968mm" pcbY="1.03752655mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="0.62484mm" pcbY="1.03752655mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="1.124966mm" pcbY="1.03752655mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="1.624838mm" pcbY="1.03752655mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="2.124964mm" pcbY="1.03752655mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="2.624836mm" pcbY="1.03752655mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="2.875026mm" pcbY="2.33749855mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="2.3749mm" pcbY="2.33749855mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="1.875028mm" pcbY="2.33749855mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="1.374902mm" pcbY="2.33749855mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="0.87503mm" pcbY="2.33749855mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="0.374904mm" pcbY="2.33749855mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="-0.124968mm" pcbY="2.33749855mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin45"]} pcbX="-0.625094mm" pcbY="2.33749855mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin46"]} pcbX="-1.124966mm" pcbY="2.33749855mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin47"]} pcbX="-1.625092mm" pcbY="2.33749855mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin48"]} pcbX="-2.124964mm" pcbY="2.33749855mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin49"]} pcbX="-2.62509mm" pcbY="2.33749855mm" width="0.2999994mm" height="1.0999978mm" shape="rect" />
<silkscreenpath route={[{"x":3.25602600000002,"y":2.290000549999945},{"x":3.2732472000000143,"y":2.290000549999945}]} />
<silkscreenpath route={[{"x":-3.273145599999907,"y":2.290000549999945},{"x":-3.006242400000019,"y":2.290000549999945}]} />
<silkscreenpath route={[{"x":4.318762000000106,"y":-1.4563978500000303},{"x":4.318076200000064,"y":0.41141655000012634}]} />
<silkscreenpath route={[{"x":-4.31896519999998,"y":-1.4563978500000303},{"x":-4.3181015999998635,"y":0.41164515000014035}]} />
<silkscreenpath route={[{"x":4.319879600000149,"y":-5.537441249999915},{"x":4.319879600000149,"y":-4.218571649999944}]} />
<silkscreenpath route={[{"x":-4.3201336000000765,"y":-5.537441249999915},{"x":-4.3201336000000765,"y":-4.218571649999944}]} />
<silkscreenpath route={[{"x":4.319879600000149,"y":-5.537441249999915},{"x":-4.3201336000000765,"y":-5.537441249999915}]} />
<silkscreentext text="{NAME}" pcbX="0.011938mm" pcbY="3.88258255mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.10178099999996,"y":3.1374974499999553},{"x":5.070031000000085,"y":3.1374974499999553},{"x":5.070031000000085,"y":-5.750027049999858},{"x":-5.10178099999996,"y":-5.750027049999858},{"x":-5.10178099999996,"y":3.1374974499999553}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C53207146.obj?uuid=b29839c5ab8f476388e975dbed29e207",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C53207146.step?uuid=b29839c5ab8f476388e975dbed29e207",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000025399999913133797, y: 1.5500351499999625, z: -1.5800012000000003 },
      }}
      {...props}
    />
  )
}