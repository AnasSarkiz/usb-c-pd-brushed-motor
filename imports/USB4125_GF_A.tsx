import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SHELL2"],
  pin2: ["SHELL1"],
  pin3: ["GND1","A12"],
  pin4: ["VBUS1","A9"],
  pin5: ["CC2","B5"],
  pin6: ["CC1","A5"],
  pin7: ["VBUS2","B9"],
  pin8: ["GND2","B12"]
} as const

export const USB4125_GF_A = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C3151650"
  ]
}}
      manufacturerPartNumber="USB4125-GF-A"
      footprint={<footprint>
        <platedhole  portHints={["pin2"]} pcbX="4.320032mm" pcbY="-2.1500655mm" holeWidth="0.5999988mm" holeHeight="1.4000226mm" outerWidth="0.999998mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin1"]} pcbX="-4.320032mm" pcbY="-2.1500655mm" holeWidth="0.5999988mm" holeHeight="1.4000226mm" outerWidth="0.999998mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin1"]} pcbX="-4.320032mm" pcbY="1.6500285mm" holeWidth="0.5999988mm" holeHeight="1.3999972mm" outerWidth="0.999998mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="4.320032mm" pcbY="1.6500285mm" holeWidth="0.5999988mm" holeHeight="1.3999972mm" outerWidth="0.999998mm" outerHeight="1.7999964mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="2.701036mm" pcbY="1.7000665mm" width="0.7999984mm" height="0.999998mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="1.500886mm" pcbY="1.7000665mm" width="0.7500112mm" height="0.999998mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.501142mm" pcbY="1.7000665mm" width="0.6999986mm" height="0.999998mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.498856mm" pcbY="1.7000665mm" width="0.6999986mm" height="0.999998mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-1.498854mm" pcbY="1.7000665mm" width="0.7500112mm" height="0.999998mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-2.699004mm" pcbY="1.7000665mm" width="0.7999984mm" height="0.999998mm" shape="rect" />
<silkscreenpath route={[{"x":3.319576799999936,"y":2.274995499999932},{"x":3.6245038000000704,"y":2.274995499999932}]} />
<silkscreenpath route={[{"x":-3.6245038000000704,"y":2.274995499999932},{"x":-3.3175447999999506,"y":2.274995499999932}]} />
<silkscreenpath route={[{"x":4.4699935999999525,"y":-1.0343959000001632},{"x":4.4699935999999525,"y":0.5345112999998491}]} />
<silkscreenpath route={[{"x":4.4699935999999525,"y":-4.749933300000066},{"x":4.4699935999999525,"y":-3.265481100000102}]} />
<silkscreenpath route={[{"x":-4.4699935999999525,"y":-1.0343959000001632},{"x":-4.4699935999999525,"y":0.5345112999998491}]} />
<silkscreenpath route={[{"x":-4.4699935999999525,"y":-4.749933300000066},{"x":-4.4699935999999525,"y":-3.265481100000102}]} />
<silkscreenpath route={[{"x":4.4699935999999525,"y":-4.749933300000066},{"x":-4.4699935999999525,"y":-4.749933300000066}]} />
<silkscreentext text="{NAME}" pcbX="-0.005842mm" pcbY="3.5382665mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":-3.499992999999904,"y":-4.224915300000134},{"x":-3.499992999999904,"y":0.775074699999891},{"x":-2.9999939999999015,"y":0.775074699999891},{"x":-2.9999939999999015,"y":-4.224915300000134},{"x":-3.499992999999904,"y":-4.224915300000134}]} strokeWidth="0.254mm" />
<fabricationnotepath route={[{"x":3.4999930000000177,"y":-4.224915300000134},{"x":2.9999939999999015,"y":-4.224915300000134},{"x":2.9999939999999015,"y":0.775074699999891},{"x":3.4999930000000177,"y":0.775074699999891},{"x":3.4999930000000177,"y":-4.224915300000134}]} strokeWidth="0.254mm" />
<fabricationnotepath route={[{"x":-2.9999939999999015,"y":0.775074699999891},{"x":2.9999939999999015,"y":0.775074699999891},{"x":2.9999939999999015,"y":-0.22492330000011407},{"x":-2.9999939999999015,"y":-0.22492330000011407},{"x":-2.9999939999999015,"y":0.775074699999891}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-5.070030999999972,"y":2.8000266999998757},{"x":5.070030999999972,"y":2.8000266999998757},{"x":5.070030999999972,"y":-4.971993300000122},{"x":-5.070030999999972,"y":-4.971993300000122},{"x":-5.070030999999972,"y":2.8000266999998757}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3151650.obj?uuid=0b9d934878ba4d768065a82648ded081",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3151650.step?uuid=0b9d934878ba4d768065a82648ded081",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 1.322000100000082, z: -1.5300019999999999 },
      }}
      {...props}
    />
  )
}