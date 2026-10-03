import type { CapacitorProps } from "@tscircuit/props"

export const A_25SVPF330M = (props: Omit<CapacitorProps, "capacitance">) => {
  const { name = "C1", ...restProps } = props

  return (
    <capacitor
      name={name}
      capacitance="330uF"
      polarized
      supplierPartNumbers={{
  "jlcpcb": [
    "C178367"
  ]
}}
      manufacturerPartNumber="25SVPF330M"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="4.499991mm" pcbY="0mm" width="4.499991mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-4.499991mm" pcbY="0mm" width="4.499991mm" height="1.6500094mm" shape="rect" />
<silkscreenpath route={[{"x":5.226126199999953,"y":0.852398600000015},{"x":5.226126199999953,"y":5.226202400000034},{"x":-3.090087799999992,"y":5.226202400000034},{"x":-5.226329400000168,"y":3.0899608000000853},{"x":-5.226329400000168,"y":0.852398600000015}]} />
<silkscreenpath route={[{"x":5.226126199999953,"y":-0.8524494000000686},{"x":5.226126199999953,"y":-5.226253199999974},{"x":-3.090087799999992,"y":-5.226253199999974},{"x":-5.226329400000168,"y":-3.0900115999999116},{"x":-5.226329400000168,"y":-0.8524494000000686}]} />
<silkscreentext text="{NAME}" pcbX="0.005715mm" pcbY="6.236972mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":-4.377613800000063,"y":1.0299700000000485},{"x":-4.377613800000063,"y":-1.0300207999998747},{"x":-4.068597400000158,"y":-1.0300207999998747},{"x":-4.068597400000158,"y":1.0299700000000485},{"x":-4.377613800000063,"y":1.0299700000000485}]} strokeWidth="0.254mm" />
<fabricationnotepath route={[{"x":-4.841113000000064,"y":0.15448280000009618},{"x":-4.841113000000064,"y":-0.15453360000003613},{"x":-3.605098200000157,"y":-0.15453360000003613},{"x":-3.605098200000157,"y":0.15448280000009618},{"x":-4.841113000000064,"y":0.15448280000009618}]} strokeWidth="0.254mm" />
<fabricationnotepath route={[{"x":4.840909799999963,"y":0.15448280000009618},{"x":4.840909799999963,"y":-0.15453360000003613},{"x":3.6048949999998285,"y":-0.15453360000003613},{"x":3.6048949999998285,"y":0.15448280000009618},{"x":4.840909799999963,"y":0.15448280000009618}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-6.999986499999977,"y":5.399977000000035},{"x":6.999986499999977,"y":5.399977000000035},{"x":6.999986499999977,"y":-5.4000023999999485},{"x":-6.999986499999977,"y":-5.4000023999999485},{"x":-6.999986499999977,"y":5.399977000000035}]} />
      </footprint>}
      
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C178367.obj?uuid=1fa4382425c748b8a3230d143d7cd83e",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C178367.step?uuid=1fa4382425c748b8a3230d143d7cd83e",
        pcbRotationOffset: 90,
        modelOriginPosition: {"x":0,"y":0,"z":6.599988399999999},
      
      }}
      
      {...restProps}
    />
  )
}