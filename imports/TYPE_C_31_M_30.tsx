import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin25: ["EH"],
  pin26: ["GND1","A1"],
  pin27: ["TX1_POS","A2"],
  pin28: ["TX1_NEG","A3"],
  pin29: ["VBUS1","A4"],
  pin30: ["CC1","A5"],
  pin31: ["D_POS1","A6"],
  pin32: ["D_NEG1","A7"],
  pin33: ["SUB1","A8"],
  pin34: ["VBUS2","A9"],
  pin35: ["RX2_NEG","A10"],
  pin36: ["RX2_POS","A11"],
  pin37: ["GND2","A12"],
  pin38: ["GND3","B14"],
  pin39: ["RX1_NEG","B11"],
  pin40: ["VBUS3","B10"],
  pin41: ["SUB2","B9"],
  pin42: ["D_NEG2","B8"],
  pin43: ["D_POS2","B7"],
  pin44: ["CC2","B6"],
  pin45: ["VBUS4","B5"],
  pin46: ["TX2_NEG","B4"],
  pin47: ["TX2_POS","B3"],
  pin48: ["GND4","B2"],
  pin49: ["RX1_POS","B12"],
  pin50: ["GND5","B13"],
  pin51: ["GND6","B1"]
} as const

export const TYPE_C_31_M_30 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2689970"
  ]
}}
      manufacturerPartNumber="TYPE-C-31-M-30"
      footprint={<footprint>
        <platedhole  portHints={["pin25"]} pcbX="4.320032mm" pcbY="2.32500175mm" holeWidth="0.5999988mm" holeHeight="1.5999968mm" outerWidth="1.0999978mm" outerHeight="2.0999958mm" shape="pill" />
<platedhole  portHints={["pin25"]} pcbX="-4.320032mm" pcbY="2.32497635mm" holeWidth="0.5999988mm" holeHeight="1.5999968mm" outerWidth="1.0999978mm" outerHeight="2.0999958mm" shape="pill" />
<platedhole  portHints={["pin25"]} pcbX="-4.320032mm" pcbY="-3.03493165mm" holeWidth="0.7999984mm" holeHeight="2.0999704mm" outerWidth="1.1999976mm" outerHeight="2.499995mm" shape="pill" />
<platedhole  portHints={["pin25"]} pcbX="4.320032mm" pcbY="-3.03493165mm" holeWidth="0.7999984mm" holeHeight="2.0999958mm" outerWidth="1.1999976mm" outerHeight="2.499995mm" shape="pill" />
<smtpad portHints={["pin26"]} pcbX="-2.999994mm" pcbY="2.73493235mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-2.499868mm" pcbY="2.73493235mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-1.999996mm" pcbY="2.73493235mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="-1.497838mm" pcbY="2.73493235mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="-0.997966mm" pcbY="2.73493235mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-0.498094mm" pcbY="2.73493235mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="0.502158mm" pcbY="2.73493235mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="1.00203mm" pcbY="2.73493235mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="1.502156mm" pcbY="2.73493235mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="2.002028mm" pcbY="2.73493235mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="2.502154mm" pcbY="2.73493235mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="3.002026mm" pcbY="2.73493235mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="-3.299968mm" pcbY="1.43496035mm" width="0.3999992mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="-1.75006mm" pcbY="1.43496035mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="-1.249934mm" pcbY="1.43496035mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="-0.750062mm" pcbY="1.43496035mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="-0.249936mm" pcbY="1.43496035mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="0.249936mm" pcbY="1.43496035mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="0.750062mm" pcbY="1.43496035mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin45"]} pcbX="1.249934mm" pcbY="1.43496035mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin46"]} pcbX="1.75006mm" pcbY="1.43496035mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin47"]} pcbX="2.249932mm" pcbY="1.43496035mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin48"]} pcbX="2.750058mm" pcbY="1.43496035mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin49"]} pcbX="-2.249932mm" pcbY="1.43496035mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin50"]} pcbX="-2.750058mm" pcbY="1.43496035mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin51"]} pcbX="3.299968mm" pcbY="1.43496035mm" width="0.3999992mm" height="0.6999986mm" shape="rect" />
<silkscreenpath route={[{"x":3.383178399999906,"y":2.835008349999839},{"x":3.4999930000000177,"y":2.835008349999839}]} />
<silkscreenpath route={[{"x":-0.11684000000013839,"y":2.835008349999839},{"x":0.12098019999984899,"y":2.835008349999839}]} />
<silkscreenpath route={[{"x":-3.538956600000006,"y":2.835008349999839},{"x":-3.3810702000000674,"y":2.835008349999839}]} />
<silkscreenpath route={[{"x":4.469993599999839,"y":-1.5674974500001326},{"x":4.469993599999839,"y":-1.5538068499998872}]} />
<silkscreenpath route={[{"x":-4.4699935999999525,"y":-4.50239124999996},{"x":-4.4699935999999525,"y":-4.974983649999899},{"x":4.469993599999839,"y":-4.974983649999899},{"x":4.469993599999839,"y":-4.5023658500000465}]} />
<silkscreenpath route={[{"x":-4.4699935999999525,"y":-1.5538068499998872},{"x":-4.4699935999999525,"y":-1.5674720499999921}]} />
<silkscreenpath route={[{"x":4.469993599999839,"y":0.9938385500000777},{"x":4.469993599999839,"y":-1.5538068499998872}]} />
<silkscreenpath route={[{"x":-4.4699935999999525,"y":-1.5538068499998872},{"x":-4.4699935999999525,"y":0.9938385500000777}]} />
<silkscreentext text="{NAME}" pcbX="-0.0127mm" pcbY="4.36637635mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":0,"y":-2.943999650000137},{"x":-1.3970000000000482,"y":-4.340999650000072},{"x":1.2699999999999818,"y":-4.340999650000072},{"x":0,"y":-2.943999650000137}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-5.170030800000063,"y":3.6249996500000634},{"x":5.1700307999999495,"y":3.6249996500000634},{"x":5.1700307999999495,"y":-5.22399304999999},{"x":-5.170030800000063,"y":-5.22399304999999},{"x":-5.170030800000063,"y":3.6249996500000634}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2689970.obj?uuid=4a5bb9ed9a5d481c9863027a6f1cd80c",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2689970.step?uuid=4a5bb9ed9a5d481c9863027a6f1cd80c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 1.0690009500000726, z: -1.5800016000000001 },
      }}
      {...props}
    />
  )
}