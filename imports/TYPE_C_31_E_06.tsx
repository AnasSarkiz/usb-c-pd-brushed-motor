import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin7: ["EH1"],
  pin8: ["EH2"],
  pin9: ["CC1","A5"],
  pin10: ["CC2","B5"],
  pin11: ["VBUS1","A9"],
  pin12: ["VBUS2","B9"],
  pin13: ["GND1","B12"],
  pin14: ["GND2","A12"]
} as const

export const TYPE_C_31_E_06 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C961732"
  ]
}}
      manufacturerPartNumber="TYPE-C-31-E-06"
      footprint={<footprint>
        <smtpad portHints={["pin9"]} pcbX="-0.6049899mm" pcbY="2.52503305mm" width="0.7999984mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="0.5949061mm" pcbY="2.52503305mm" width="0.7999984mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="1.7950561mm" pcbY="2.52503305mm" width="0.7999984mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-1.8051399mm" pcbY="2.52503305mm" width="0.7999984mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-3.0050359mm" pcbY="2.52503305mm" width="0.7999984mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="2.9949521mm" pcbY="2.52503305mm" width="0.7999984mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin7"]} points={[{x: "-4.9450117mm", y: "-3.27503155mm"}, {x: "-6.3050039mm", y: "-3.27503155mm"}, {x: "-6.3050039mm", y: "0.72496045mm"}, {x: "-4.9549939mm", y: "0.72496045mm"}, {x: "-4.9549939mm", y: "-0.91504135mm"}, {x: "-5.1249961mm", y: "-0.91504135mm"}, {x: "-5.7549923mm", y: "-0.91504135mm"}, {x: "-5.9649995mm", y: "-0.92504895mm"}, {x: "-6.1450093mm", y: "-1.08504355mm"}, {x: "-6.1450093mm", y: "-1.40503275mm"}, {x: "-5.9350021mm", y: "-1.53502995mm"}, {x: "-4.9549939mm", y: "-1.54503755mm"}]} shape="polygon" />
<smtpad portHints={["pin8"]} points={[{x: "4.9450117mm", y: "0.72490965mm"}, {x: "6.3050039mm", y: "0.72490965mm"}, {x: "6.3050039mm", y: "-3.27500615mm"}, {x: "4.9549177mm", y: "-3.27500615mm"}, {x: "4.9549177mm", y: "-1.63502975mm"}, {x: "5.1249707mm", y: "-1.63502975mm"}, {x: "5.7549415mm", y: "-1.63502975mm"}, {x: "5.9649741mm", y: "-1.62504755mm"}, {x: "6.1449585mm", y: "-1.46502755mm"}, {x: "6.1449585mm", y: "-1.14506375mm"}, {x: "5.9349259mm", y: "-1.01504115mm"}, {x: "4.9549177mm", y: "-1.00500815mm"}]} shape="polygon" />
<silkscreenpath route={[{"x":-5.025047100000052,"y":-4.925015549999898},{"x":5.01501410000003,"y":-4.925015549999898}]} />
<silkscreenpath route={[{"x":5.01501410000003,"y":1.924983450000127},{"x":3.6261420999999245,"y":1.924983450000127}]} />
<silkscreenpath route={[{"x":-5.025047100000052,"y":0.9560496500000681},{"x":-5.025047100000052,"y":1.924983450000127},{"x":-3.636175099999946,"y":1.924983450000127}]} />
<silkscreenpath route={[{"x":-5.025047100000052,"y":-4.925015549999898},{"x":-5.025047100000052,"y":-3.506196950000003}]} />
<silkscreenpath route={[{"x":5.01501410000003,"y":0.9561004500001218},{"x":5.01501410000003,"y":1.924983450000127}]} />
<silkscreenpath route={[{"x":5.01501410000003,"y":-4.925015549999898},{"x":5.01501410000003,"y":-3.5061207499999227}]} />
<silkscreentext text="{NAME}" pcbX="-0.0050419mm" pcbY="4.26722105mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":-4.90000289999989,"y":-3.4649981499999285},{"x":-5.10000249999996,"y":-3.4649981499999285},{"x":-5.10000249999996,"y":-4.964995149999936},{"x":5.0999771000000464,"y":-4.964995149999936},{"x":5.0999771000000464,"y":-3.4649981499999285},{"x":4.899977499999977,"y":-3.4649981499999285},{"x":4.899977499999977,"y":-4.764995549999867},{"x":-4.90000289999989,"y":-4.764995549999867},{"x":-4.90000289999989,"y":-3.4649981499999285}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-6.555003899999974,"y":3.525031550000108},{"x":6.555003900000088,"y":3.525031550000108},{"x":6.555003900000088,"y":-3.571030950000022},{"x":-6.555003899999974,"y":-3.571030950000022},{"x":-6.555003899999974,"y":3.525031550000108}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C961732.obj?uuid=24c5a965116a41849bc1cc6d02c0e7e4",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C961732.step?uuid=24c5a965116a41849bc1cc6d02c0e7e4",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.005003799999940384, y: 4.996033049999933, z: -0.8300026 },
      }}
      {...props}
    />
  )
}