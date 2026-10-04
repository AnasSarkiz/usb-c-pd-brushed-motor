import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["EH3"],
  pin2: ["EH1"],
  pin3: ["EH2"],
  pin4: ["EH4"],
  pin5: ["GND1","B12"],
  pin6: ["VBUS1","B9"],
  pin7: ["CC1","A5"],
  pin8: ["CC2","B5"],
  pin9: ["VBUS2","A9"],
  pin10: ["GND2","A12"]
} as const

export const USB4515_GF_A = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C7374563"
  ]
}}
      manufacturerPartNumber="USB4515-GF-A"
      footprint={<footprint>
        <cutout shape="polygon" points={[{"x":4.619955199999936,"y":-3.550069100000087},{"x":4.619955199999936,"y":2.1499194999998963},{"x":-4.620056799999929,"y":2.1499194999998963},{"x":-4.620056799999929,"y":-3.550069100000087}]} />
<platedhole  portHints={["pin2"]} pcbX="5.620004mm" pcbY="-2.0001357mm" holeWidth="0.5999988mm" holeHeight="1.5999968mm" outerWidth="1.0999978mm" outerHeight="2.1999956mm" shape="pill" />
<platedhole  portHints={["pin3"]} pcbX="-5.620004mm" pcbY="-2.0001357mm" holeWidth="0.5999988mm" holeHeight="1.5999968mm" outerWidth="1.0999978mm" outerHeight="2.1999956mm" shape="pill" />
<platedhole  portHints={["pin1"]} pcbX="5.620004mm" pcbY="2.0001103mm" holeWidth="0.5999988mm" holeHeight="1.1999976mm" outerWidth="1.0999978mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin4"]} pcbX="-5.620004mm" pcbY="2.0001103mm" holeWidth="0.5999988mm" holeHeight="1.1999976mm" outerWidth="1.0999978mm" outerHeight="1.6999966mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="-2.750058mm" pcbY="2.9500703mm" width="0.7999984mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-1.52019mm" pcbY="2.9500703mm" width="0.7599934mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-0.500126mm" pcbY="2.9500703mm" width="0.6999986mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0.499872mm" pcbY="2.9500703mm" width="0.6999986mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.519936mm" pcbY="2.9500703mm" width="0.7599934mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="2.750058mm" pcbY="2.9500703mm" width="0.7999984mm" height="1.1999976mm" shape="rect" />
<silkscreenpath route={[{"x":-3.3812734000000546,"y":2.506992699999955},{"x":-4.572050800000056,"y":2.506992699999955},{"x":-4.572050800000056,"y":-4.478007300000058},{"x":4.571949199999949,"y":-4.478007300000058},{"x":4.571949199999949,"y":2.506992699999955},{"x":3.3811971999998605,"y":2.506992699999955}]} />
<silkscreentext text="{NAME}" pcbX="0.003556mm" pcbY="4.5545903mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":-3.3812734000000546,"y":2.3799927000000025},{"x":-4.445050800000104,"y":2.3799927000000025},{"x":-4.445050800000104,"y":-4.351007299999992},{"x":4.444949199999883,"y":-4.351007299999992},{"x":4.444949199999883,"y":2.3799927000000025},{"x":3.381197199999974,"y":2.3799927000000025},{"x":3.508197199999927,"y":2.506992699999955},{"x":3.381197199999974,"y":2.6339927000000216},{"x":4.571949199999949,"y":2.6339927000000216},{"x":4.661751761210553,"y":2.596795261210673},{"x":4.698949199999902,"y":2.506992699999955},{"x":4.698949199999902,"y":-4.478007300000058},{"x":4.661751761210553,"y":-4.567809861210776},{"x":4.571949199999949,"y":-4.605007300000011},{"x":-4.572050800000056,"y":-4.605007300000011},{"x":-4.661853361210774,"y":-4.567809861210776},{"x":-4.699050800000123,"y":-4.478007300000058},{"x":-4.699050800000123,"y":2.506992699999955},{"x":-4.661853361210774,"y":2.596795261210673},{"x":-4.572050800000056,"y":2.6339927000000216},{"x":-3.3812734000000546,"y":2.6339927000000216},{"x":-3.5082734000000073,"y":2.506992699999955},{"x":-3.3812734000000546,"y":2.3799927000000025}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-6.420002899999986,"y":3.8000690999999733},{"x":6.420002899999986,"y":3.8000690999999733},{"x":6.420002899999986,"y":-4.625010300000099},{"x":-6.420002899999986,"y":-4.625010300000099},{"x":-6.420002899999986,"y":3.8000690999999733}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7374563.obj?uuid=a0347ae27b5a4e52898ab65c80c6e02c",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7374563.step?uuid=a0347ae27b5a4e52898ab65c80c6e02c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.00005080000005364127, y: 4.375017800000023, z: -0.0000032000000003140627 },
      }}
      {...props}
    />
  )
}