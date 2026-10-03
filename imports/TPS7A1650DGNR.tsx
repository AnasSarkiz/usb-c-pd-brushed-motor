import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["OUT"],
  pin2: ["pin2"],
  pin3: ["PG"],
  pin4: ["GND"],
  pin5: ["EN"],
  pin6: ["NC"],
  pin7: ["DELAY"],
  pin8: ["IN"],
  pin9: ["EP"]
} as const

const pinAttributes = {
  pin4: {requiresGround: true},
  pin6: {doNotConnect: true}
} as const

export const TPS7A1650DGNR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C468238"
  ]
}}
      manufacturerPartNumber="TPS7A1650DGNR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.975106mm" pcbY="-2.13106mm" width="0.3640074mm" height="1.6619982mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin2"]} pcbX="-0.324866mm" pcbY="-2.13106mm" width="0.3640074mm" height="1.6619982mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="0.32512mm" pcbY="-2.13106mm" width="0.3640074mm" height="1.6619982mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin4"]} pcbX="0.975106mm" pcbY="-2.13106mm" width="0.3640074mm" height="1.6619982mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="-0.975106mm" pcbY="2.13106mm" width="0.3640074mm" height="1.6619982mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin7"]} pcbX="-0.324866mm" pcbY="2.13106mm" width="0.3640074mm" height="1.6619982mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin6"]} pcbX="0.32512mm" pcbY="2.13106mm" width="0.3640074mm" height="1.6619982mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="0.975106mm" pcbY="2.13106mm" width="0.3640074mm" height="1.6619982mm" radius="0.1820037mm" shape="pill" />
<smtpad portHints={["pin9"]} pcbX="0mm" pcbY="0mm" width="1.7999964mm" height="1.499997mm" shape="rect" />
<silkscreenpath route={[{"x":-1.5761970000000929,"y":-1.0713974000000235},{"x":-1.5761970000000929,"y":1.0713974000000235},{"x":1.5761969999998655,"y":1.0713974000000235},{"x":1.5761969999998655,"y":-1.0713974000000235},{"x":-1.5761970000000929,"y":-1.0713974000000235}]} />
<silkscreencircle pcbX="-1.609344mm" pcbY="-2.13106mm" radius="0.150114mm" />
<silkscreentext text="{NAME}" pcbX="-0.0889mm" pcbY="3.7686mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.0026000000000295,"y":3.018600000000106},{"x":1.8247999999998683,"y":3.018600000000106},{"x":1.8247999999998683,"y":-3.2725999999998976},{"x":-2.0026000000000295,"y":-3.2725999999998976},{"x":-2.0026000000000295,"y":3.018600000000106}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C468238.obj?uuid=579554954b0946ca87bf676d9e26a8a1",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C468238.step?uuid=579554954b0946ca87bf676d9e26a8a1",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}