import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin7: ["EH"],
  pin8: ["GND1","B12"],
  pin9: ["VBUS1","B9"],
  pin10: ["CC11","A5"],
  pin11: ["CC12","B5"],
  pin12: ["VBUS2","A9"],
  pin13: ["GND2","A12"]
} as const

export const TYPE_C_6PFS_4J_H7_5_IPX8 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C3020034"
  ]
}}
      manufacturerPartNumber="TYPE-C 6PFS 4J-H7.5 IPX8"
      footprint={<footprint>
        <hole pcbX="3.250057mm" pcbY="-0.25477465mm" diameter="0.999998mm" />
<hole pcbX="-3.250057mm" pcbY="-0.25477465mm" diameter="0.999998mm" />
<platedhole  portHints={["pin7"]} pcbX="4.900041mm" pcbY="-2.71527265mm" holeWidth="0.3999992mm" holeHeight="1.1999976mm" outerWidth="0.999998mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin7"]} pcbX="-4.900041mm" pcbY="-2.71476465mm" holeWidth="0.3999992mm" holeHeight="1.1999976mm" outerWidth="0.999998mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin7"]} pcbX="4.900041mm" pcbY="0.28522935mm" holeWidth="0.3999992mm" holeHeight="1.1999976mm" outerWidth="0.999998mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin7"]} pcbX="-4.900041mm" pcbY="0.28522935mm" holeWidth="0.3999992mm" holeHeight="1.1999976mm" outerWidth="0.999998mm" outerHeight="1.7999964mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="-2.999867mm" pcbY="2.24026735mm" width="0.8999982mm" height="1.0500106mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-1.799971mm" pcbY="2.24026735mm" width="0.8999982mm" height="1.0500106mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-0.600075mm" pcbY="2.24026735mm" width="0.8999982mm" height="1.0500106mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="0.600075mm" pcbY="2.24026735mm" width="0.8999982mm" height="1.0500106mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="1.799971mm" pcbY="2.24026735mm" width="0.8999982mm" height="1.0500106mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="3.000121mm" pcbY="2.24026735mm" width="0.8999982mm" height="1.0500106mm" shape="rect" />
<silkscreenpath route={[{"x":5.269991999999888,"y":1.9927951499998926},{"x":5.269991999999888,"y":1.1230229499998359}]} />
<silkscreenpath route={[{"x":-5.270017400000029,"y":1.1420475499999156},{"x":-5.270017400000029,"y":1.9927951499998926}]} />
<silkscreenpath route={[{"x":-5.270017400000029,"y":-3.744887050000102},{"x":-5.270017400000029,"y":-5.554205250000109}]} />
<silkscreenpath route={[{"x":-5.270017400000029,"y":-0.744893050000087},{"x":-5.270017400000029,"y":-1.6845406500000308}]} />
<silkscreenpath route={[{"x":5.206999999999994,"y":-3.7779578500001207},{"x":5.206999999999994,"y":-5.554205250000109}]} />
<silkscreenpath route={[{"x":5.206999999999994,"y":-0.7780400500000724},{"x":5.206999999999994,"y":-1.6513682500001323}]} />
<silkscreenpath route={[{"x":3.681145800000081,"y":1.9927951499998926},{"x":5.269991999999888,"y":1.9927951499998926}]} />
<silkscreenpath route={[{"x":-5.270017400000029,"y":1.9927951499998926},{"x":-3.6811204000000544,"y":1.9927951499998926}]} />
<silkscreenpath route={[{"x":-5.269992000000002,"y":-5.554205250000109},{"x":5.270017400000029,"y":-5.554205250000109}]} />
<silkscreencircle pcbX="-3.900043mm" pcbY="2.49020335mm" radius="0.199898mm" />
<silkscreentext text="{NAME}" pcbX="0.003175mm" pcbY="3.76985735mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.65003999999999,"y":3.015272649999929},{"x":5.650039999999876,"y":3.015272649999929},{"x":5.650039999999876,"y":-5.797499650000077},{"x":-5.65003999999999,"y":-5.797499650000077},{"x":-5.65003999999999,"y":3.015272649999929}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3020034.obj?uuid=eb079ec51a01456fa1febceab0980a87",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3020034.step?uuid=eb079ec51a01456fa1febceab0980a87",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 1.7975001500001873, z: -0.1400024000000002 },
      }}
      {...props}
    />
  )
}