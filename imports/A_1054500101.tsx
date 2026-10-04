import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND1","A1"],
  pin2: ["TX1_POS","A2"],
  pin3: ["TX1_NEG","A3"],
  pin4: ["VBUS1","A4"],
  pin5: ["CC1","A5"],
  pin6: ["D_POS1","A6"],
  pin7: ["D_NEG1","A7"],
  pin8: ["SBU1","A8"],
  pin9: ["VBUS2","A9"],
  pin10: ["RX2_NEG","A10"],
  pin11: ["RX2_POS","A11"],
  pin12: ["GND2","A12"],
  pin13: ["GND3","B12"],
  pin14: ["RX1_POS","B11"],
  pin15: ["RX1_NEG","B10"],
  pin16: ["VBUS3","B9"],
  pin17: ["SBU2","B8"],
  pin18: ["D_NEG2","B7"],
  pin19: ["D_POS2","B6"],
  pin20: ["CC2","B5"],
  pin21: ["VBUS4","B4"],
  pin22: ["TX2_NEG","B3"],
  pin23: ["TX2_POS","B2"],
  pin24: ["GND4","B1"],
  pin25: ["pin25"]
} as const

export const A_1054500101 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C134092"
  ]
}}
      manufacturerPartNumber="1054500101"
      footprint={<footprint>
        <platedhole  portHints={["pin25"]} pcbX="4.320032mm" pcbY="2.2749574mm" holeWidth="0.5999988mm" holeHeight="1.5999968mm" outerWidth="0.999998mm" outerHeight="2.0999958mm" shape="pill" />
<platedhole  portHints={["pin25"]} pcbX="-4.320032mm" pcbY="2.2749574mm" holeWidth="0.5999988mm" holeHeight="1.5999968mm" outerWidth="0.999998mm" outerHeight="2.0999958mm" shape="pill" />
<platedhole  portHints={["pin25"]} pcbX="-4.320032mm" pcbY="-3.0849506mm" holeWidth="0.5999988mm" holeHeight="2.0999704mm" outerWidth="0.999998mm" outerHeight="2.5999948mm" shape="pill" />
<platedhole  portHints={["pin25"]} pcbX="4.320032mm" pcbY="-3.0849506mm" holeWidth="0.5999988mm" holeHeight="2.0999958mm" outerWidth="0.999998mm" outerHeight="2.5999948mm" shape="pill" />
<smtpad portHints={["pin1"]} pcbX="-2.999994mm" pcbY="2.7349514mm" width="0.2999994mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.499868mm" pcbY="2.7349514mm" width="0.2999994mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.999996mm" pcbY="2.7349514mm" width="0.2999994mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.49987mm" pcbY="2.7349514mm" width="0.2999994mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.999998mm" pcbY="2.7349514mm" width="0.2999994mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.499872mm" pcbY="2.7349514mm" width="0.2999994mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.500126mm" pcbY="2.7349514mm" width="0.2999994mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0.999998mm" pcbY="2.7349514mm" width="0.2999994mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.500124mm" pcbY="2.7349514mm" width="0.2999994mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="1.999996mm" pcbY="2.7349514mm" width="0.2999994mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="2.500122mm" pcbY="2.7349514mm" width="0.2999994mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="2.999994mm" pcbY="2.7349514mm" width="0.2999994mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-3.10007mm" pcbY="1.3849414mm" width="0.999998mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-2.249932mm" pcbY="1.3849414mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-1.75006mm" pcbY="1.3849414mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-1.249934mm" pcbY="1.3849414mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="-0.750062mm" pcbY="1.3849414mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="-0.249936mm" pcbY="1.3849414mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="0.249936mm" pcbY="1.3849414mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="0.750062mm" pcbY="1.3849414mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="1.249934mm" pcbY="1.3849414mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="1.75006mm" pcbY="1.3849414mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="2.249932mm" pcbY="1.3849414mm" width="0.2999994mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="3.10007mm" pcbY="1.3849414mm" width="0.999998mm" height="0.6999986mm" shape="rect" />
<silkscreenpath route={[{"x":4.319981200000029,"y":-4.855025800000021},{"x":-4.319981199999916,"y":-4.855025800000021}]} />
<silkscreenpath route={[{"x":-3.488893200000007,"y":2.299976400000105},{"x":-3.376371199999994,"y":2.299976400000105}]} />
<silkscreenpath route={[{"x":-0.12151360000007116,"y":2.299976400000105},{"x":0.12565380000000914,"y":2.299976400000105}]} />
<silkscreenpath route={[{"x":3.3784793999999465,"y":2.299976400000105},{"x":3.488893199999893,"y":2.299976400000105}]} />
<silkscreenpath route={[{"x":4.319981200000029,"y":0.9438196000000971},{"x":4.319981200000029,"y":-1.6038257999998677}]} />
<silkscreenpath route={[{"x":4.319981200000029,"y":-4.5660753999999315},{"x":4.319981200000029,"y":-4.855025800000021}]} />
<silkscreenpath route={[{"x":-4.319981199999916,"y":-4.855025800000021},{"x":-4.319981199999916,"y":-4.5660753999999315}]} />
<silkscreenpath route={[{"x":-4.319981199999916,"y":-1.6038257999998677},{"x":-4.319981199999916,"y":0.9438196000000971}]} />
<silkscreencircle pcbX="-3.459988mm" pcbY="3.335001mm" radius="0.1500124mm" />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="4.4941574mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.070031000000085,"y":3.5749552999999423},{"x":5.070030999999972,"y":3.5749552999999423},{"x":5.070030999999972,"y":-5.300021599999923},{"x":-5.070031000000085,"y":-5.300021599999923},{"x":-5.070031000000085,"y":3.5749552999999423}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C134092.obj?uuid=753ec1c05a40429c836855bddae44cbc",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C134092.step?uuid=753ec1c05a40429c836855bddae44cbc",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0, y: -1.1050295000000052, z: -0.0000020000000000575113 },
      }}
      {...props}
    />
  )
}