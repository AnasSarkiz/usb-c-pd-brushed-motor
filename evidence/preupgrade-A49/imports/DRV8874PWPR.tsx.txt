import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["EN","IN1"],
  pin2: ["PH","IN2"],
  pin3: ["nSLEEP"],
  pin4: ["nFAULT"],
  pin5: ["VREF"],
  pin6: ["IPROPI"],
  pin7: ["IMODE"],
  pin8: ["OUT1"],
  pin9: ["PGND"],
  pin10: ["OUT2"],
  pin11: ["VM"],
  pin12: ["VCP"],
  pin13: ["CPH"],
  pin14: ["CPL"],
  pin15: ["GND"],
  pin16: ["PMODE"],
  pin17: ["EP"]
} as const

const pinAttributes = {
  pin9: {requiresGround: true},
  pin15: {requiresGround: true}
} as const

export const DRV8874PWPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C1855818"
  ]
}}
      manufacturerPartNumber="DRV8874PWPR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.275078mm" pcbY="-2.873248mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin2"]} pcbX="-1.625092mm" pcbY="-2.873248mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="-0.975106mm" pcbY="-2.873248mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin4"]} pcbX="-0.324866mm" pcbY="-2.873248mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="0.32512mm" pcbY="-2.873248mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin6"]} pcbX="0.975106mm" pcbY="-2.873248mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin7"]} pcbX="1.625092mm" pcbY="-2.873248mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="2.275078mm" pcbY="-2.873248mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin16"]} pcbX="-2.275078mm" pcbY="2.873248mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin15"]} pcbX="-1.625092mm" pcbY="2.873248mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin14"]} pcbX="-0.975106mm" pcbY="2.873248mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin13"]} pcbX="-0.324866mm" pcbY="2.873248mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin12"]} pcbX="0.32512mm" pcbY="2.873248mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin11"]} pcbX="0.975106mm" pcbY="2.873248mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin10"]} pcbX="1.625092mm" pcbY="2.873248mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin9"]} pcbX="2.275078mm" pcbY="2.873248mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin17"]} pcbX="0mm" pcbY="0mm" width="3.5500056mm" height="2.45999mm" shape="rect" />
<via pcbX="-0.499872mm" pcbY="0.499872mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" layers={["top","bottom"]} />
<via pcbX="0.500126mm" pcbY="0.499872mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" layers={["top","bottom"]} />
<via pcbX="-0.499872mm" pcbY="-0.500126mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" layers={["top","bottom"]} />
<via pcbX="0.500126mm" pcbY="-0.500126mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" layers={["top","bottom"]} />
<silkscreenpath route={[{"x":-2.5761949999999842,"y":-1.7713960000000952},{"x":-2.5761949999999842,"y":1.7713959999999815},{"x":2.5761949999999842,"y":1.7713959999999815},{"x":2.5761949999999842,"y":-1.7713960000000952},{"x":-2.5761949999999842,"y":-1.7713960000000952}]} />
<silkscreencircle pcbX="-2.275078mm" pcbY="-1.019048mm" radius="0.150114mm" />
<silkscreencircle pcbX="-2.898902mm" pcbY="-2.873248mm" radius="0.150114mm" />
<silkscreentext text="{NAME}" pcbX="-0.2413mm" pcbY="4.5814mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.7499950000001263,"y":3.996499999999969},{"x":2.749994999999899,"y":3.996499999999969},{"x":2.749994999999899,"y":-3.996499999999969},{"x":-2.7499950000001263,"y":-3.996499999999969},{"x":-2.7499950000001263,"y":3.996499999999969}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C1855818.obj?uuid=89f85af05c9045c798a6d7a53851085c",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C1855818.step?uuid=89f85af05c9045c798a6d7a53851085c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}