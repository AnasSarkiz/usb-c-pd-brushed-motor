import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND1"],
  pin2: ["SSTXp1"],
  pin3: ["SSTXn1"],
  pin4: ["VBUS1"],
  pin5: ["CC1"],
  pin6: ["Dp1"],
  pin7: ["Dn1"],
  pin8: ["SBU1"],
  pin9: ["VBUS2"],
  pin10: ["SSRXn2"],
  pin11: ["SSRXp2"],
  pin12: ["GND2"],
  pin13: ["GND3"],
  pin14: ["SSTXp2"],
  pin15: ["SSTXn2"],
  pin16: ["VBUS3"],
  pin17: ["CC2"],
  pin18: ["Dp2"],
  pin19: ["Dn2"],
  pin20: ["SBU2"],
  pin21: ["VBUS4"],
  pin22: ["SSRXn1"],
  pin23: ["SSRXp1"],
  pin24: ["GND5"],
  pin25: ["GND4"],
  pin26: ["SHELL1"],
  pin27: ["SHELL2"]
} as const

const pinAttributes = {
  pin1: {requiresGround: true},
  pin4: {requiresPower: true},
  pin9: {requiresPower: true},
  pin12: {requiresGround: true},
  pin13: {requiresGround: true},
  pin16: {requiresPower: true},
  pin21: {requiresPower: true},
  pin24: {requiresGround: true},
  pin25: {requiresGround: true}
} as const

export const A_632723300011 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2830802"
  ]
}}
      manufacturerPartNumber="632723300011"
      footprint={<footprint>
        <platedhole  portHints={["pin13"]} pcbX="2.800096mm" pcbY="2.539873mm" holeWidth="0.40005mm" holeHeight="0.399796mm" outerWidth="0.649986mm" outerHeight="0.649986mm" shape="pill" />
<platedhole  portHints={["pin14"]} pcbX="2.400046mm" pcbY="1.839849mm" holeWidth="0.40005mm" holeHeight="0.399796mm" outerWidth="0.649986mm" outerHeight="0.649986mm" shape="pill" />
<platedhole  portHints={["pin25"]} pcbX="1.999996mm" pcbY="2.539873mm" holeWidth="0.40005mm" holeHeight="0.399796mm" outerWidth="0.649986mm" outerHeight="0.649986mm" shape="pill" />
<platedhole  portHints={["pin15"]} pcbX="1.599946mm" pcbY="1.839849mm" holeWidth="0.40005mm" holeHeight="0.399796mm" outerWidth="0.649986mm" outerHeight="0.649986mm" shape="pill" />
<platedhole  portHints={["pin16"]} pcbX="1.199896mm" pcbY="2.539873mm" holeWidth="0.40005mm" holeHeight="0.399796mm" outerWidth="0.649986mm" outerHeight="0.649986mm" shape="pill" />
<platedhole  portHints={["pin17"]} pcbX="0.8001mm" pcbY="1.839849mm" holeWidth="0.40005mm" holeHeight="0.399796mm" outerWidth="0.649986mm" outerHeight="0.649986mm" shape="pill" />
<platedhole  portHints={["pin18"]} pcbX="0.40005mm" pcbY="2.539873mm" holeWidth="0.40005mm" holeHeight="0.399796mm" outerWidth="0.649986mm" outerHeight="0.649986mm" shape="pill" />
<platedhole  portHints={["pin19"]} pcbX="-0.40005mm" pcbY="2.539873mm" holeWidth="0.40005mm" holeHeight="0.399796mm" outerWidth="0.649986mm" outerHeight="0.649986mm" shape="pill" />
<platedhole  portHints={["pin20"]} pcbX="-0.8001mm" pcbY="1.829943mm" holeWidth="0.40005mm" holeHeight="0.399796mm" outerWidth="0.649986mm" outerHeight="0.649986mm" shape="pill" />
<platedhole  portHints={["pin21"]} pcbX="-1.199896mm" pcbY="2.539873mm" holeWidth="0.40005mm" holeHeight="0.399796mm" outerWidth="0.649986mm" outerHeight="0.649986mm" shape="pill" />
<platedhole  portHints={["pin22"]} pcbX="-1.599946mm" pcbY="1.839849mm" holeWidth="0.40005mm" holeHeight="0.399796mm" outerWidth="0.649986mm" outerHeight="0.649986mm" shape="pill" />
<platedhole  portHints={["pin23"]} pcbX="-2.400046mm" pcbY="1.839849mm" holeWidth="0.40005mm" holeHeight="0.399796mm" outerWidth="0.649986mm" outerHeight="0.649986mm" shape="pill" />
<platedhole  portHints={["pin24"]} pcbX="-2.800096mm" pcbY="2.539873mm" holeWidth="0.40005mm" holeHeight="0.399796mm" outerWidth="0.649986mm" outerHeight="0.649986mm" shape="pill" />
<platedhole  portHints={["pin25"]} pcbX="-1.999996mm" pcbY="2.539873mm" holeWidth="0.40005mm" holeHeight="0.399796mm" outerWidth="0.649986mm" outerHeight="0.649986mm" shape="pill" />
<platedhole  portHints={["pin26"]} pcbX="4.269994mm" pcbY="1.390015mm" holeWidth="0.599948mm" holeHeight="1.199896mm" outerWidth="0.999998mm" outerHeight="1.599946mm" shape="pill" />
<platedhole  portHints={["pin26"]} pcbX="4.269994mm" pcbY="-3.339973mm" holeWidth="0.599948mm" holeHeight="1.199896mm" outerWidth="0.999998mm" outerHeight="1.599946mm" shape="pill" />
<platedhole  portHints={["pin26"]} pcbX="-4.269994mm" pcbY="1.390015mm" holeWidth="0.599948mm" holeHeight="1.199896mm" outerWidth="0.999998mm" outerHeight="1.599946mm" shape="pill" />
<platedhole  portHints={["pin26"]} pcbX="-4.269994mm" pcbY="-3.339973mm" holeWidth="0.599948mm" holeHeight="1.199896mm" outerWidth="0.999998mm" outerHeight="1.599946mm" shape="pill" />
<smtpad portHints={["pin1"]} points={[{x: "-2.899918mm", y: "4.390009mm"}, {x: "-2.599944mm", y: "4.390009mm"}, {x: "-2.599944mm", y: "3.189859mm"}, {x: "-2.899918mm", y: "3.189859mm"}]} shape="polygon" />
<smtpad portHints={["pin2"]} points={[{x: "-2.400046mm", y: "4.390009mm"}, {x: "-2.100072mm", y: "4.390009mm"}, {x: "-2.100072mm", y: "3.189859mm"}, {x: "-2.400046mm", y: "3.189859mm"}]} shape="polygon" />
<smtpad portHints={["pin3"]} points={[{x: "-1.89992mm", y: "4.390009mm"}, {x: "-1.599946mm", y: "4.390009mm"}, {x: "-1.599946mm", y: "3.189859mm"}, {x: "-1.89992mm", y: "3.189859mm"}]} shape="polygon" />
<smtpad portHints={["pin4"]} points={[{x: "-1.400048mm", y: "4.390009mm"}, {x: "-1.100074mm", y: "4.390009mm"}, {x: "-1.100074mm", y: "3.189859mm"}, {x: "-1.400048mm", y: "3.189859mm"}]} shape="polygon" />
<smtpad portHints={["pin5"]} points={[{x: "-0.899922mm", y: "4.390009mm"}, {x: "-0.599948mm", y: "4.390009mm"}, {x: "-0.599948mm", y: "3.189859mm"}, {x: "-0.899922mm", y: "3.189859mm"}]} shape="polygon" />
<smtpad portHints={["pin6"]} points={[{x: "-0.40005mm", y: "4.390009mm"}, {x: "-0.100076mm", y: "4.390009mm"}, {x: "-0.100076mm", y: "3.189859mm"}, {x: "-0.40005mm", y: "3.189859mm"}]} shape="polygon" />
<smtpad portHints={["pin7"]} points={[{x: "0.100076mm", y: "4.390009mm"}, {x: "0.40005mm", y: "4.390009mm"}, {x: "0.40005mm", y: "3.189859mm"}, {x: "0.100076mm", y: "3.189859mm"}]} shape="polygon" />
<smtpad portHints={["pin8"]} points={[{x: "0.599948mm", y: "4.390009mm"}, {x: "0.899922mm", y: "4.390009mm"}, {x: "0.899922mm", y: "3.189859mm"}, {x: "0.599948mm", y: "3.189859mm"}]} shape="polygon" />
<smtpad portHints={["pin9"]} points={[{x: "1.100074mm", y: "4.390009mm"}, {x: "1.400048mm", y: "4.390009mm"}, {x: "1.400048mm", y: "3.189859mm"}, {x: "1.100074mm", y: "3.189859mm"}]} shape="polygon" />
<smtpad portHints={["pin10"]} points={[{x: "1.599946mm", y: "4.390009mm"}, {x: "1.89992mm", y: "4.390009mm"}, {x: "1.89992mm", y: "3.189859mm"}, {x: "1.599946mm", y: "3.189859mm"}]} shape="polygon" />
<smtpad portHints={["pin11"]} points={[{x: "2.100072mm", y: "4.390009mm"}, {x: "2.400046mm", y: "4.390009mm"}, {x: "2.400046mm", y: "3.189859mm"}, {x: "2.100072mm", y: "3.189859mm"}]} shape="polygon" />
<smtpad portHints={["pin12"]} points={[{x: "2.599944mm", y: "4.390009mm"}, {x: "2.899918mm", y: "4.390009mm"}, {x: "2.899918mm", y: "3.189859mm"}, {x: "2.599944mm", y: "3.189859mm"}]} shape="polygon" />
<smtpad portHints={["pin27"]} points={[{x: "-0.100076mm", y: "-0.289941mm"}, {x: "0.100076mm", y: "-0.289941mm"}, {x: "0.100076mm", y: "-1.289939mm"}, {x: "-0.100076mm", y: "-1.289939mm"}]} shape="polygon" />
<smtpad portHints={["pin27"]} points={[{x: "-0.100076mm", y: "-3.390011mm"}, {x: "0.100076mm", y: "-3.390011mm"}, {x: "0.100076mm", y: "-4.390009mm"}, {x: "-0.100076mm", y: "-4.390009mm"}]} shape="polygon" />
<silkscreenpath route={[{"x":4.370069999999998,"y":-7.740015000000014},{"x":-4.370069999999984,"y":-7.740015000000014},{"x":-4.370069999999984,"y":3.5899089999999916},{"x":4.370069999999998,"y":3.5899089999999916},{"x":4.370069999999998,"y":-7.740015000000014}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="5.385945mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-4.669599999999988,"y":4.635944999999992},{"x":4.669600000000003,"y":4.635944999999992},{"x":4.669600000000003,"y":-8.005255000000005},{"x":-4.669599999999988,"y":-8.005255000000005},{"x":-4.669599999999988,"y":4.635944999999992}]} />
      </footprint>}
      
      {...props}
    />
  )
}