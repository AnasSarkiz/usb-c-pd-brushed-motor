import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin7: ["EH1"],
  pin8: ["EH2"],
  pin9: ["EH3"],
  pin10: ["EH4"],
  pin11: ["GND1","A12"],
  pin12: ["VBUS1","A9"],
  pin13: ["CC2","B5"],
  pin14: ["CC1","A5"],
  pin15: ["VBUS2","B9"],
  pin16: ["GND2","B12"]
} as const

export const TYPE_C_31_E_07 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C970566"
  ]
}}
      manufacturerPartNumber="TYPE-C-31-E-07"
      footprint={<footprint>
        <platedhole  portHints={["pin7"]} pcbX="-4.600067mm" pcbY="-1.1999849mm" holeWidth="0.700024mm" holeHeight="1.5999968mm" outerWidth="1.0999978mm" outerHeight="1.999996mm" pcbRotation="180deg" shape="pill" />
<platedhole  portHints={["pin8"]} pcbX="-1.999869mm" pcbY="-1.1999849mm" outerDiameter="1.3999972mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="2.000123mm" pcbY="-1.1999849mm" outerDiameter="1.3999972mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin10"]} pcbX="4.600067mm" pcbY="-1.1999849mm" holeWidth="0.700024mm" holeHeight="1.5999968mm" outerWidth="1.0999978mm" outerHeight="1.999996mm" pcbRotation="180deg" shape="pill" />
<smtpad portHints={["pin11"]} pcbX="3.000121mm" pcbY="1.0999851mm" width="0.7999984mm" height="1.5999968mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="1.799971mm" pcbY="1.0999851mm" width="0.7999984mm" height="1.5999968mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="0.600075mm" pcbY="1.0999851mm" width="0.7999984mm" height="1.5999968mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-0.600075mm" pcbY="1.0999851mm" width="0.7999984mm" height="1.5999968mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-1.799971mm" pcbY="1.0999851mm" width="0.7999984mm" height="1.5999968mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-2.999867mm" pcbY="1.0999851mm" width="0.7999984mm" height="1.5999968mm" shape="rect" />
<silkscreenpath route={[{"x":2.9999939999997878,"y":-5.199900700000171},{"x":2.9999939999997878,"y":-6.14986070000009},{"x":-2.999994000000129,"y":-6.14986070000009},{"x":-2.999994000000129,"y":-5.199900700000171}]} />
<silkscreenpath route={[{"x":-5.020030600000041,"y":-5.199900700000171},{"x":5.019903599999907,"y":-5.199900700000171}]} />
<silkscreenpath route={[{"x":5.019903599999907,"y":-0.09168130000011843},{"x":5.019903599999907,"y":0.5000878999998122}]} />
<silkscreenpath route={[{"x":5.019903599999907,"y":-5.1998499000001175},{"x":5.019903599999907,"y":-2.3081107000001566}]} />
<silkscreenpath route={[{"x":-5.020030600000041,"y":-0.0917575000000852},{"x":-5.020030600000041,"y":0.5000878999998122}]} />
<silkscreenpath route={[{"x":-5.020030600000041,"y":-5.1998499000001175},{"x":-5.020030600000041,"y":-2.3080598999999893}]} />
<silkscreenpath route={[{"x":-3.631158600000049,"y":0.5000878999998122},{"x":-5.020030600000041,"y":0.5000878999998122}]} />
<silkscreenpath route={[{"x":5.019903599999907,"y":0.5000878999998122},{"x":3.631158599999935,"y":0.5000878999998122}]} />
<silkscreentext text="{NAME}" pcbX="-0.000127mm" pcbY="2.8891631mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":3.0999937999998792,"y":-5.199900700000171},{"x":3.0999937999998792,"y":-6.14986070000009},{"x":3.070704536697235,"y":-6.220571236697424},{"x":2.9999939999999015,"y":-6.249860500000182},{"x":-2.999994000000129,"y":-6.249860500000068},{"x":-3.0707045366974626,"y":-6.220571236697424},{"x":-3.0999938000001066,"y":-6.14986070000009},{"x":-3.0999938000001066,"y":-5.199900700000171},{"x":-2.8999942000000374,"y":-5.199900700000171},{"x":-2.8999942000000374,"y":-6.049860899999999},{"x":2.8999941999999237,"y":-6.049860899999999},{"x":2.8999941999999237,"y":-5.199900700000171},{"x":2.9999939999999015,"y":-5.099900986298621},{"x":3.0999937999998792,"y":-5.199900700000171}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-5.400065900000072,"y":2.149983499999962},{"x":5.400065899999959,"y":2.149983499999962},{"x":5.400065899999959,"y":-6.924878700000136},{"x":-5.400065900000072,"y":-6.924878700000136},{"x":-5.400065900000072,"y":2.149983499999962}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C970566.obj?uuid=0178bd0b07994835bda87be5c6469ab9",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C970566.step?uuid=0178bd0b07994835bda87be5c6469ab9",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999956566899, y: 5.724892900000077, z: -1.5300016000000003 },
      }}
      {...props}
    />
  )
}