import type { InductorProps } from "@tscircuit/props"

export const MHCC10040_8R2M_R7 = (props: Omit<InductorProps, "inductance">) => {
  return (
    <inductor
      inductance="8.2uH"
      supplierPartNumbers={{
  "jlcpcb": [
    "C285788"
  ]
}}
      manufacturerPartNumber="MHCC10040-8R2M-R7"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-4.799965mm" pcbY="0mm" width="3.499993mm" height="3.999992mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="4.799965mm" pcbY="0mm" width="3.499993mm" height="3.999992mm" shape="rect" />
<silkscreenpath route={[{"x":5.800013799999874,"y":-5.049977199999944},{"x":-5.799962999999934,"y":-5.050002599999971}]} />
<silkscreenpath route={[{"x":-5.800217000000089,"y":5.049977200000058},{"x":5.799962999999934,"y":5.050002599999971}]} />
<silkscreenpath route={[{"x":-5.799962999999934,"y":-5.050002599999971},{"x":-5.799962999999934,"y":-2.2311359999998785}]} />
<silkscreenpath route={[{"x":-5.799962999999934,"y":2.2311359999999922},{"x":-5.799962999999934,"y":5.049977200000058}]} />
<silkscreenpath route={[{"x":5.799962999999934,"y":5.050002599999971},{"x":5.799962999999934,"y":2.2311359999999922}]} />
<silkscreenpath route={[{"x":5.799962999999934,"y":-2.2311359999998785},{"x":5.799962999999934,"y":-5.049977199999944}]} />
<silkscreentext text="{NAME}" pcbX="-0.000127mm" pcbY="6.0546mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-6.803327000000081,"y":5.304600000000164},{"x":6.803072999999813,"y":5.304600000000164},{"x":6.803072999999813,"y":-5.329999999999927},{"x":-6.803327000000081,"y":-5.329999999999927},{"x":-6.803327000000081,"y":5.304600000000164}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C285788.obj?uuid=09b06ecf0e944d06b4c387b4a681df1b",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C285788.step?uuid=09b06ecf0e944d06b4c387b4a681df1b",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.00048729999992991324, z: 0 },
      }}
      {...props}
    />
  )
}