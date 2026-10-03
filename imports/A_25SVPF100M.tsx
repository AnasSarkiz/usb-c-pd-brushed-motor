import type { CapacitorProps } from "@tscircuit/props"

export const A_25SVPF100M = (props: Omit<CapacitorProps, "capacitance">) => {
  const { name = "C1", ...restProps } = props

  return (
    <capacitor
      name={name}
      capacitance="100uF"
      polarized
      supplierPartNumbers={{
  "jlcpcb": [
    "C136279"
  ]
}}
      manufacturerPartNumber="25SVPF100M"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-3.267202mm" pcbY="0mm" width="4.1999916mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="3.267202mm" pcbY="0mm" width="4.1999916mm" height="1.3999972mm" shape="rect" />
<silkscreenpath route={[{"x":4.201236199999926,"y":-0.7823961999999938},{"x":4.201236199999926,"y":-4.2262298000000555},{"x":-2.464968400000089,"y":-4.2262298000000555},{"x":-4.201236200000039,"y":-2.4899619999999913},{"x":-4.201236200000039,"y":-0.7823961999999938}]} />
<silkscreenpath route={[{"x":4.201236199999926,"y":0.7823961999999938},{"x":4.201236199999926,"y":4.226229799999942},{"x":-2.464968400000089,"y":4.226229799999942},{"x":-4.201236200000039,"y":2.489962000000105},{"x":-4.201236200000039,"y":0.7823961999999938}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="5.1402mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":3.8759891999999354,"y":0.12451080000005277},{"x":3.8759891999999354,"y":-0.12451080000005277},{"x":2.8800043999999616,"y":-0.12451080000005277},{"x":2.8800043999999616,"y":0.12451080000005277},{"x":3.8759891999999354,"y":0.12451080000005277}]} strokeWidth="0.254mm" />
<fabricationnotepath route={[{"x":-3.875989200000049,"y":0.12451080000005277},{"x":-3.875989200000049,"y":-0.12451080000005277},{"x":-2.8800043999999616,"y":-0.12451080000005277},{"x":-2.8800043999999616,"y":0.12451080000005277},{"x":-3.875989200000049,"y":0.12451080000005277}]} strokeWidth="0.254mm" />
<fabricationnotepath route={[{"x":-3.502507600000058,"y":0.8299958000000061},{"x":-3.502507600000058,"y":-0.8299958000000061},{"x":-3.253511400000093,"y":-0.8299958000000061},{"x":-3.253511400000093,"y":0.8299958000000061},{"x":-3.502507600000058,"y":0.8299958000000061}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-5.617197799999985,"y":4.400004399999943},{"x":5.617197799999872,"y":4.400004399999943},{"x":5.617197799999872,"y":-4.399978999999917},{"x":-5.617197799999985,"y":-4.399978999999917},{"x":-5.617197799999985,"y":4.400004399999943}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C136279.obj?uuid=f548e9552e824ace98260ba2fd1affca",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C136279.step?uuid=f548e9552e824ace98260ba2fd1affca",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0, y: 0, z: 0.10000140000004198 },
      }}
      {...restProps}
    />
  )
}