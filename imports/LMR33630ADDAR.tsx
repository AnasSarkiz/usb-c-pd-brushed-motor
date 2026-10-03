import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["PGND"],
  pin2: ["VIN"],
  pin3: ["EN"],
  pin4: ["PG"],
  pin5: ["FB"],
  pin6: ["VCC"],
  pin7: ["BOOT"],
  pin8: ["SW"],
  pin9: ["EP"]
} as const

const pinAttributes = {
  pin1: {requiresGround: true},
  pin2: {requiresPower: true},
  pin6: {requiresPower: true}
} as const

export const LMR33630ADDAR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C841384"
  ]
}}
      manufacturerPartNumber="LMR33630ADDAR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.699893mm" pcbY="1.905mm" width="1.2999974mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.699893mm" pcbY="0.635mm" width="1.2999974mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-2.699893mm" pcbY="-0.635mm" width="1.2999974mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-2.699893mm" pcbY="-1.905mm" width="1.2999974mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="2.699893mm" pcbY="-1.905mm" width="1.2999974mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="2.699893mm" pcbY="-0.635mm" width="1.2999974mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="2.699893mm" pcbY="0.635mm" width="1.2999974mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="2.699893mm" pcbY="1.905mm" width="1.2999974mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="0.000127mm" pcbY="0mm" width="2.499995mm" height="3.499993mm" shape="rect" />
<silkscreenpath route={[{"x":-2.0500339999999824,"y":-2.436139400000016},{"x":-2.0500339999999824,"y":-2.549779000000001}]} />
<silkscreenpath route={[{"x":-2.0500339999999824,"y":-1.16613940000002},{"x":-2.0500339999999824,"y":-1.3738606000000146}]} />
<silkscreenpath route={[{"x":-2.0500339999999824,"y":0.1038605999999902},{"x":-2.0500339999999824,"y":-0.10386060000001862}]} />
<silkscreenpath route={[{"x":-2.0500339999999824,"y":1.3738605999999862},{"x":-2.0500339999999824,"y":1.1661393999999916}]} />
<silkscreenpath route={[{"x":-2.0500339999999824,"y":2.550032999999985},{"x":-2.0500339999999824,"y":2.4361393999999876}]} />
<silkscreenpath route={[{"x":2.050034000000011,"y":-2.436139400000016},{"x":2.050034000000011,"y":-2.549779000000001}]} />
<silkscreenpath route={[{"x":2.050034000000011,"y":-1.16613940000002},{"x":2.050034000000011,"y":-1.3738606000000146}]} />
<silkscreenpath route={[{"x":2.050034000000011,"y":0.1038605999999902},{"x":2.050034000000011,"y":-0.10386060000001862}]} />
<silkscreenpath route={[{"x":2.050034000000011,"y":1.3738605999999862},{"x":2.050034000000011,"y":1.1661393999999916}]} />
<silkscreenpath route={[{"x":2.050034000000011,"y":2.550032999999985},{"x":2.050034000000011,"y":2.4361393999999876}]} />
<silkscreenpath route={[{"x":0.8001000000000147,"y":2.550032999999985},{"x":2.050034000000011,"y":2.550032999999985}]} />
<silkscreenpath route={[{"x":2.050034000000011,"y":-2.549779000000001},{"x":-2.0500339999999824,"y":-2.549779000000001}]} />
<silkscreenpath route={[{"x":-0.8001000000000005,"y":2.550032999999985},{"x":-2.0500339999999824,"y":2.550032999999985}]} />
<silkscreenpath route={[{"x":0.8001000000000147,"y":2.4999949999999984},{"x":0.6634482479307735,"y":2.2914697000865516},{"x":0.47399546154059635,"y":2.1294075398622425},{"x":0.24681938518639868,"y":2.0267063598305555},{"x":1.4210854715202004e-14,"y":1.9915397116566993},{"x":-0.24681938518639868,"y":2.0267063598305555},{"x":-0.4739954615405537,"y":2.1294075398622567},{"x":-0.6634482479307593,"y":2.291469700086566},{"x":-0.8001000000000005,"y":2.4999949999999984}]} />
<silkscreencircle pcbX="-2.499995mm" pcbY="3.029966mm" radius="0.17018mm" />
<silkscreentext text="{NAME}" pcbX="-0.132207mm" pcbY="4.19532mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.5998916999999864,"y":2.699982399999982},{"x":3.5998917000000006,"y":2.699982399999982},{"x":3.5998917000000006,"y":-2.7000078000000087},{"x":-3.5998916999999864,"y":-2.7000078000000087},{"x":-3.5998916999999864,"y":2.699982399999982}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C841384.obj?uuid=f5377fc2ccbb41ff8aa998b5ab8a4f05",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C841384.step?uuid=f5377fc2ccbb41ff8aa998b5ab8a4f05",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012700000013410317, z: -0.825 },
      }}
      {...props}
    />
  )
}