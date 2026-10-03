import type { SwitchProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"]
} as const

export const KH_SS23F06_G6 = (props: SwitchProps) => {
  const { name = "SW1", ...restProps } = props

  return (
    <switch
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5274498"
  ]
}}
      manufacturerPartNumber="KH-SS23F06-G6"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-4.499991mm" pcbY="-2.649982mm" holeWidth="1.3000228mm" holeHeight="0.700024mm" outerWidth="1.999996mm" outerHeight="1.3999972mm" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="-1.499997mm" pcbY="-2.649982mm" holeWidth="1.3000228mm" holeHeight="0.700024mm" outerWidth="1.999996mm" outerHeight="1.3999972mm" shape="pill" />
<platedhole  portHints={["pin3"]} pcbX="1.499997mm" pcbY="-2.649982mm" holeWidth="1.3000228mm" holeHeight="0.700024mm" outerWidth="1.999996mm" outerHeight="1.3999972mm" shape="pill" />
<platedhole  portHints={["pin4"]} pcbX="4.499991mm" pcbY="-2.649982mm" holeWidth="1.3000228mm" holeHeight="0.700024mm" outerWidth="1.999996mm" outerHeight="1.3999972mm" shape="pill" />
<platedhole  portHints={["pin5"]} pcbX="-4.499991mm" pcbY="2.649982mm" holeWidth="1.3000228mm" holeHeight="0.700024mm" outerWidth="1.999996mm" outerHeight="1.3999972mm" shape="pill" />
<platedhole  portHints={["pin6"]} pcbX="-1.499997mm" pcbY="2.649982mm" holeWidth="1.3000228mm" holeHeight="0.700024mm" outerWidth="1.999996mm" outerHeight="1.3999972mm" shape="pill" />
<platedhole  portHints={["pin7"]} pcbX="1.499997mm" pcbY="2.649982mm" holeWidth="1.3000228mm" holeHeight="0.700024mm" outerWidth="1.999996mm" outerHeight="1.3999972mm" shape="pill" />
<platedhole  portHints={["pin8"]} pcbX="4.499991mm" pcbY="2.649982mm" holeWidth="1.3000228mm" holeHeight="0.700024mm" outerWidth="1.999996mm" outerHeight="1.3999972mm" shape="pill" />
<platedhole  portHints={["pin9"]} pcbX="5.799963mm" pcbY="4.750054mm" holeWidth="1.3000228mm" holeHeight="0.700024mm" outerWidth="1.999996mm" outerHeight="1.3999972mm" shape="pill" />
<platedhole  portHints={["pin10"]} pcbX="-5.799963mm" pcbY="-4.750054mm" holeWidth="1.3000228mm" holeHeight="0.700024mm" outerWidth="1.999996mm" outerHeight="1.3999972mm" shape="pill" />
<silkscreenpath route={[{"x":-6.899986200000058,"y":4.999990000000025},{"x":6.899986199999944,"y":4.999990000000025},{"x":6.899986199999944,"y":-4.999990000000025},{"x":-6.899986200000058,"y":-4.999990000000025},{"x":-6.899986200000058,"y":4.8999902000000475}]} />
<silkscreenpath route={[{"x":-3.99999200000002,"y":0.9999979999998914},{"x":3.9999919999999065,"y":0.9999979999998914},{"x":3.9999919999999065,"y":-0.999998000000005},{"x":-3.99999200000002,"y":-0.999998000000005},{"x":-3.99999200000002,"y":0.9999979999998914}]} />
<silkscreentext text="{NAME}" pcbX="-0.029591mm" pcbY="5.995418mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":-3.999992000000134,"y":0.9999979999998914},{"x":3.999992000000134,"y":0.9999979999998914},{"x":3.999992000000134,"y":-0.999998000000005},{"x":-3.999992000000134,"y":-0.999998000000005},{"x":-3.999992000000134,"y":0.9999979999998914}]} strokeWidth="0.254mm" />
<fabricationnotepath route={[{"x":-3.999992000000134,"y":0.9999979999998914},{"x":-1.99999600000001,"y":0.9999979999998914},{"x":-1.99999600000001,"y":-0.999998000000005},{"x":-3.999992000000134,"y":-0.999998000000005},{"x":-3.999992000000134,"y":0.9999979999998914}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-7.188391000000024,"y":5.245417999999859},{"x":7.12920900000006,"y":5.245417999999859},{"x":7.12920900000006,"y":-5.287582000000043},{"x":-7.188391000000024,"y":-5.287582000000043},{"x":-7.188391000000024,"y":5.245417999999859}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5274498.obj?uuid=83a3b8c919fe401995dc87e3dd9eb80d",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5274498.step?uuid=83a3b8c919fe401995dc87e3dd9eb80d",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000500000000000167, z: -0.0000054000000004883475 },
      }}
      {...restProps}
    />
  )
}