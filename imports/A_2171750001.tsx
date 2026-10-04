import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin7: ["EH"],
  pin8: ["GND1","A12"],
  pin9: ["VBUS1","A9"],
  pin10: ["CC2","B5"],
  pin11: ["CC1","A5"],
  pin12: ["VBUS2","B9"],
  pin13: ["GND2","B12"]
} as const

export const A_2171750001 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C3197922"
  ]
}}
      manufacturerPartNumber="2171750001"
      footprint={<footprint>
        <platedhole  portHints={["pin7"]} pcbX="-4.319905mm" pcbY="1.5850426mm" holeWidth="0.5999988mm" holeHeight="1.1999976mm" outerWidth="1.0999978mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin7"]} pcbX="4.319905mm" pcbY="1.5850426mm" holeWidth="0.5999988mm" holeHeight="1.1999976mm" outerWidth="1.0999978mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin7"]} pcbX="-4.319905mm" pcbY="-2.2150514mm" holeWidth="0.5999988mm" holeHeight="1.1999976mm" outerWidth="1.0999978mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin7"]} pcbX="4.319905mm" pcbY="-2.2150514mm" holeWidth="0.5999988mm" holeHeight="1.1999976mm" outerWidth="1.0999978mm" outerHeight="1.6999966mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="2.750185mm" pcbY="1.6650526mm" width="0.7999984mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.520063mm" pcbY="1.6650526mm" width="0.6999986mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="0.499999mm" pcbY="1.6650526mm" width="0.6999986mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-0.499999mm" pcbY="1.6650526mm" width="0.6999986mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-1.520063mm" pcbY="1.6650526mm" width="0.6999986mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-2.750185mm" pcbY="1.6650526mm" width="0.7999984mm" height="1.1999976mm" shape="rect" />
<silkscreenpath route={[{"x":-3.381222600000001,"y":1.9899948000000904},{"x":-3.5458653999997978,"y":1.9899948000000904}]} />
<silkscreenpath route={[{"x":-2.1011387999999442,"y":1.9899948000000904},{"x":-2.1189441999998735,"y":1.9899948000000904}]} />
<silkscreenpath route={[{"x":2.1189696000001277,"y":1.9899948000000904},{"x":2.1011387999999442,"y":1.9899948000000904}]} />
<silkscreenpath route={[{"x":3.545865400000025,"y":1.9899948000000904},{"x":3.381248000000028,"y":1.9899948000000904}]} />
<silkscreenpath route={[{"x":4.4699935999999525,"y":-1.14850540000009},{"x":4.4699935999999525,"y":0.5184965999999349}]} />
<silkscreenpath route={[{"x":-4.4699935999999525,"y":-3.2815974000000097},{"x":-4.4699935999999525,"y":-4.8149954000000434},{"x":4.4699935999999525,"y":-4.8149954000000434},{"x":4.4699935999999525,"y":-3.2815974000000097}]} />
<silkscreenpath route={[{"x":-4.4699935999999525,"y":0.5184965999999349},{"x":-4.4699935999999525,"y":-1.14850540000009}]} />
<silkscreentext text="{NAME}" pcbX="-0.005207mm" pcbY="3.4232426mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":-4.347997400000054,"y":-3.2799971999999116},{"x":-4.347997400000054,"y":-4.677987800000096},{"x":4.3429936,"y":-4.677987800000096},{"x":4.3429936,"y":-3.2699896000001445},{"x":4.469993600000066,"y":-3.396989600000097},{"x":4.596993600000019,"y":-3.2699896000001445},{"x":4.596993600000019,"y":-4.804987800000049},{"x":4.55979616121067,"y":-4.894790361210767},{"x":4.469993600000066,"y":-4.931987800000115},{"x":-4.474997400000007,"y":-4.931987800000115},{"x":-4.564799961210724,"y":-4.894790361210767},{"x":-4.601997399999959,"y":-4.804987800000049},{"x":-4.601997399999959,"y":-3.2799971999999116},{"x":-4.474997400000007,"y":-3.406997199999978},{"x":-4.347997400000054,"y":-3.2799971999999116}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-5.119903900000054,"y":2.68504089999999},{"x":5.119903900000054,"y":2.68504089999999},{"x":5.119903900000054,"y":-5.062988800000085},{"x":-5.119903900000054,"y":-5.062988800000085},{"x":-5.119903900000054,"y":2.68504089999999}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3197922.obj?uuid=da42531012c74aa4aeb271ad202c812d",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3197922.step?uuid=da42531012c74aa4aeb271ad202c812d",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 1.3629957000000559, z: -0.0000020000000000575113 },
      }}
      {...props}
    />
  )
}