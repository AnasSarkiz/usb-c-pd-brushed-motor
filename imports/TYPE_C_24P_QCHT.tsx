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
  pin33: ["SBU1","A8"],
  pin34: ["VBUS2","A9"],
  pin35: ["RX2_NEG","A10"],
  pin36: ["RX2_POS","A11"],
  pin37: ["GND2","A12"],
  pin38: ["GND3","B12"],
  pin39: ["GND4","B1"],
  pin40: ["TX2_POS","B2"],
  pin41: ["RX1_POS","B11"],
  pin42: ["TX2_NEG","B3"],
  pin43: ["RX1_NEG","B10"],
  pin44: ["CC2","B5"],
  pin45: ["SBU2","B8"],
  pin46: ["VBUS3","B4"],
  pin47: ["VBUS4","B9"],
  pin48: ["D_POS2","B6"],
  pin49: ["D_NEG2","B7"]
} as const

export const TYPE_C_24P_QCHT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C456013"
  ]
}}
      manufacturerPartNumber="TYPE-C 24P QCHT"
      footprint={<footprint>
        <hole pcbX="-3.674999mm" pcbY="2.19547445mm" diameter="0.7999984mm" />
<hole pcbX="3.674999mm" pcbY="2.19547445mm" diameter="0.7999984mm" />
<platedhole  portHints={["pin38"]} pcbX="-2.799969mm" pcbY="1.54498045mm" outerDiameter="0.5999988mm" holeDiameter="0.3999992mm" shape="circle" />
<platedhole  portHints={["pin39"]} pcbX="2.799969mm" pcbY="1.54498045mm" outerDiameter="0.5999988mm" holeDiameter="0.3999992mm" shape="circle" />
<platedhole  portHints={["pin40"]} pcbX="2.400173mm" pcbY="0.84495645mm" outerDiameter="0.5999988mm" holeDiameter="0.3999992mm" shape="circle" />
<platedhole  portHints={["pin41"]} pcbX="-2.399919mm" pcbY="0.84495645mm" outerDiameter="0.5999988mm" holeDiameter="0.3999992mm" shape="circle" />
<platedhole  portHints={["pin42"]} pcbX="1.600327mm" pcbY="0.84495645mm" outerDiameter="0.5999988mm" holeDiameter="0.3999992mm" shape="circle" />
<platedhole  portHints={["pin43"]} pcbX="-1.599819mm" pcbY="0.84495645mm" outerDiameter="0.5999988mm" holeDiameter="0.3999992mm" shape="circle" />
<platedhole  portHints={["pin44"]} pcbX="0.800227mm" pcbY="0.84495645mm" outerDiameter="0.5999988mm" holeDiameter="0.3999992mm" shape="circle" />
<platedhole  portHints={["pin45"]} pcbX="-0.799973mm" pcbY="0.84495645mm" outerDiameter="0.5999988mm" holeDiameter="0.3999992mm" shape="circle" />
<platedhole  portHints={["pin46"]} pcbX="1.200023mm" pcbY="1.54498045mm" outerDiameter="0.5999988mm" holeDiameter="0.3999992mm" shape="circle" />
<platedhole  portHints={["pin47"]} pcbX="-1.199769mm" pcbY="1.54498045mm" outerDiameter="0.5999988mm" holeDiameter="0.3999992mm" shape="circle" />
<platedhole  portHints={["pin48"]} pcbX="0.400177mm" pcbY="1.54498045mm" outerDiameter="0.5999988mm" holeDiameter="0.3999992mm" shape="circle" />
<platedhole  portHints={["pin49"]} pcbX="-0.399923mm" pcbY="1.54498045mm" outerDiameter="0.5999988mm" holeDiameter="0.3999992mm" shape="circle" />
<platedhole  portHints={["pin25"]} pcbX="4.129913mm" pcbY="0.94503245mm" holeWidth="0.5999988mm" holeHeight="1.1999976mm" outerWidth="0.999998mm" outerHeight="1.5999968mm" shape="pill" />
<platedhole  portHints={["pin25"]} pcbX="-4.129913mm" pcbY="0.94503245mm" holeWidth="0.5999988mm" holeHeight="1.1999976mm" outerWidth="0.999998mm" outerHeight="1.5999968mm" shape="pill" />
<platedhole  portHints={["pin25"]} pcbX="4.490085mm" pcbY="-3.44510355mm" holeWidth="0.5999988mm" holeHeight="1.1999468mm" outerWidth="0.999998mm" outerHeight="1.5999968mm" shape="pill" />
<platedhole  portHints={["pin25"]} pcbX="-4.490085mm" pcbY="-3.44510355mm" holeWidth="0.5999988mm" holeHeight="1.1999468mm" outerWidth="0.999998mm" outerHeight="1.5999968mm" shape="pill" />
<smtpad portHints={["pin26"]} pcbX="-2.790063mm" pcbY="2.87009845mm" width="0.2750058mm" height="1.2500102mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-2.250059mm" pcbY="2.87009845mm" width="0.2750058mm" height="1.2500102mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-1.749933mm" pcbY="2.87009845mm" width="0.2750058mm" height="1.2500102mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="-1.250061mm" pcbY="2.87009845mm" width="0.2750058mm" height="1.2500102mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="-0.749935mm" pcbY="2.87009845mm" width="0.2750058mm" height="1.2500102mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-0.250063mm" pcbY="2.87009845mm" width="0.2750058mm" height="1.2500102mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="0.250063mm" pcbY="2.87009845mm" width="0.2750058mm" height="1.2500102mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="0.749935mm" pcbY="2.87009845mm" width="0.2750058mm" height="1.2500102mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="1.250061mm" pcbY="2.87009845mm" width="0.2750058mm" height="1.2500102mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="1.749933mm" pcbY="2.87009845mm" width="0.2750058mm" height="1.2500102mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="2.250059mm" pcbY="2.87009845mm" width="0.2750058mm" height="1.2500102mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="2.749931mm" pcbY="2.87009845mm" width="0.2750058mm" height="1.2500102mm" shape="rect" />
<silkscreenpath route={[{"x":-4.460011399999871,"y":-5.975019750000001},{"x":4.4600622000000385,"y":-5.975019750000001}]} />
<silkscreenpath route={[{"x":-4.460011399999871,"y":3.8749732499999254},{"x":4.4600622000000385,"y":3.8749732499999254}]} />
<silkscreenpath route={[{"x":4.4600622000000385,"y":3.8749732499999254},{"x":4.4600622000000385,"y":1.8970752500000572}]} />
<silkscreenpath route={[{"x":4.4600622000000385,"y":-0.007111950000080469},{"x":4.4600622000000385,"y":-2.414498549999962}]} />
<silkscreenpath route={[{"x":4.4600622000000385,"y":-4.4755561499999885},{"x":4.4600622000000385,"y":-5.975019750000001}]} />
<silkscreenpath route={[{"x":-4.460011399999871,"y":3.8749732499999254},{"x":-4.460011399999871,"y":1.8971006499999703}]} />
<silkscreenpath route={[{"x":-4.460011399999871,"y":-0.007137349999879916},{"x":-4.460011399999871,"y":-2.414498549999962}]} />
<silkscreenpath route={[{"x":-4.460011399999871,"y":-4.4755561499999885},{"x":-4.460011399999871,"y":-5.975019750000001}]} />
<silkscreenpath route={[{"x":-3.4398965999998836,"y":0.40388544999996157},{"x":-2.7370023999999376,"y":0.40388544999996157}]} />
<silkscreenpath route={[{"x":-2.0627847999999176,"y":0.40388544999996157},{"x":-1.9370040000000017,"y":0.40388544999996157}]} />
<silkscreenpath route={[{"x":-1.2627864000000955,"y":0.40388544999996157},{"x":-1.1370055999999522,"y":0.40388544999996157}]} />
<silkscreenpath route={[{"x":-0.46278799999993225,"y":0.40388544999996157},{"x":0.46301660000017364,"y":0.40388544999996157}]} />
<silkscreenpath route={[{"x":1.13723420000008,"y":0.40388544999996157},{"x":1.2631165999999894,"y":0.40388544999996157}]} />
<silkscreenpath route={[{"x":1.9373342000000093,"y":0.40388544999996157},{"x":2.063115000000039,"y":0.40388544999996157}]} />
<silkscreenpath route={[{"x":2.737332600000059,"y":0.40388544999996157},{"x":3.439896600000111,"y":0.40388544999996157}]} />
<silkscreentext text="{NAME}" pcbX="0.012573mm" pcbY="4.88000245mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.240084000000024,"y":4.124439849999931},{"x":5.240084000000024,"y":4.124439849999931},{"x":5.240084000000024,"y":-6.225527749999969},{"x":-5.240084000000024,"y":-6.225527749999969},{"x":-5.240084000000024,"y":4.124439849999931}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C456013.obj?uuid=756d3d9b8bdc4358a408f9f2def65b46",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C456013.step?uuid=756d3d9b8bdc4358a408f9f2def65b46",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999956566899, y: 1.0505439499999056, z: -1.6300024000000002 },
      }}
      {...props}
    />
  )
}