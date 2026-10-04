import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["SBU2","B8"],
  pin22: ["CC11","A5"],
  pin23: ["D_NEG1","B7"],
  pin24: ["D_POS1","A6"],
  pin25: ["D_NEG2","A7"],
  pin26: ["D_POS2","B6"],
  pin27: ["SBU1","A8"],
  pin28: ["CC12","B5"],
  pin29: ["VBUS1","B4A9"],
  pin30: ["GND1","B1A12"],
  pin31: ["VBUS2","A4B9"],
  pin32: ["GND2","A1B12"]
} as const

export const A_12402012E212A = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5150972"
  ]
}}
      manufacturerPartNumber="12402012E212A"
      footprint={<footprint>
        <hole pcbX="2.890012mm" pcbY="1.0652824mm" diameter="0.649986mm" />
<hole pcbX="-2.890012mm" pcbY="1.0652824mm" diameter="0.649986mm" />
<platedhole  portHints={["pin20"]} pcbX="4.325112mm" pcbY="-2.6151776mm" holeWidth="0.649986mm" holeHeight="1.3999972mm" outerWidth="1.3999972mm" outerHeight="2.0999958mm" shape="pill" />
<platedhole  portHints={["pin19"]} pcbX="-4.325112mm" pcbY="-2.6151776mm" holeWidth="0.649986mm" holeHeight="1.3999972mm" outerWidth="1.3999972mm" outerHeight="2.0999958mm" shape="pill" />
<platedhole  portHints={["pin18"]} pcbX="4.325112mm" pcbY="1.5651544mm" holeWidth="0.649986mm" holeHeight="1.700022mm" outerWidth="1.2500102mm" outerHeight="2.3999952mm" shape="pill" />
<platedhole  portHints={["pin17"]} pcbX="-4.325112mm" pcbY="1.5651544mm" holeWidth="0.649986mm" holeHeight="1.700022mm" outerWidth="1.2500102mm" outerHeight="2.3999952mm" shape="pill" />
<smtpad portHints={["pin21"]} pcbX="-1.75006mm" pcbY="2.0901724mm" width="0.2999994mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-1.249934mm" pcbY="2.0901724mm" width="0.2999994mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-0.750062mm" pcbY="2.0901724mm" width="0.2999994mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-0.249936mm" pcbY="2.0901724mm" width="0.2999994mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="0.249936mm" pcbY="2.0901724mm" width="0.2999994mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="0.750062mm" pcbY="2.0901724mm" width="0.2999994mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="1.249934mm" pcbY="2.0901724mm" width="0.2999994mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="1.75006mm" pcbY="2.0901724mm" width="0.2999994mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="2.400046mm" pcbY="2.0901724mm" width="0.5999988mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="3.199892mm" pcbY="2.0901724mm" width="0.5999988mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-2.400046mm" pcbY="2.0901724mm" width="0.5999988mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="-3.199892mm" pcbY="2.0901724mm" width="0.5999988mm" height="1.1500104mm" shape="rect" />
<silkscreenpath route={[{"x":4.5000164000000495,"y":-1.3200062000000798},{"x":4.5000164000000495,"y":0.2027491999998574}]} />
<silkscreenpath route={[{"x":4.5000164000000495,"y":-5.335009600000035},{"x":4.5000164000000495,"y":-3.949668200000133}]} />
<silkscreenpath route={[{"x":-4.500016399999936,"y":-3.949668200000133},{"x":-4.500016399999936,"y":-5.335009600000035},{"x":4.5000164000000495,"y":-5.335009600000035}]} />
<silkscreenpath route={[{"x":-4.500016399999936,"y":0.10211439999989125},{"x":-4.500016399999936,"y":-1.4206410000001597}]} />
<silkscreentext text="{NAME}" pcbX="-0.007112mm" pcbY="3.8613164mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.275110599999948,"y":3.0151519999999437},{"x":5.275110600000062,"y":3.0151519999999437},{"x":5.275110600000062,"y":-5.462530800000081},{"x":-5.275110599999948,"y":-5.462530800000081},{"x":-5.275110599999948,"y":3.0151519999999437}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5150972.obj?uuid=0382ee059d0444ffbfcfa05e10eb137a",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5150972.step?uuid=0382ee059d0444ffbfcfa05e10eb137a",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0, y: -1.3125448000001143, z: -0.09000220000000003 },
      }}
      {...props}
    />
  )
}