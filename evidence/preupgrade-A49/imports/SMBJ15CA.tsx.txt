import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const SMBJ15CA = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicpath svgPath="M -0.2 -0.14 L 0 0 L -0.2 0.14 Z" strokeColor="#880000" />
          <schematicpath svgPath="M 0.2 0.14 L 0 0 L 0.2 -0.14 Z" strokeColor="#880000" />
          <schematicpath points={[{"x":-0.04,"y":0.16},{"x":0,"y":0.12},{"x":0,"y":-0.12},{"x":0.04,"y":-0.16}]} strokeColor="#880000" />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="left" schX={-0.4} schY={0} schStemLength={0.2} />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="right" schX={0.4} schY={0} schStemLength={0.2} />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C211759"
  ]
}}
      manufacturerPartNumber="SMBJ15CA"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="2.390902mm" pcbY="0mm" width="2.047494mm" height="2.3999952mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-2.390902mm" pcbY="0mm" width="2.047494mm" height="2.3999952mm" shape="rect" />
<silkscreenpath route={[{"x":2.666974600000003,"y":-1.9049999999999727},{"x":-2.599309000000062,"y":-1.8903695999999854}]} />
<silkscreenpath route={[{"x":2.6627581999999848,"y":1.9049999999999727},{"x":-2.5907999999999447,"y":1.8871945999999298}]} />
<silkscreentext text="{NAME}" pcbX="0.013208mm" pcbY="2.905mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":0.7619999999999436,"y":-0.7619999999999436},{"x":-1.1368683772161603e-13,"y":0},{"x":0.7619999999999436,"y":0.7620000000000573},{"x":0.7619999999999436,"y":-0.7619999999999436}]} strokeWidth="0.254mm" />
<fabricationnotepath route={[{"x":-0.7620000000000573,"y":-0.7619999999999436},{"x":-0.7620000000000573,"y":0.7620000000000573},{"x":-1.1368683772161603e-13,"y":0},{"x":-0.7620000000000573,"y":-0.7619999999999436}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-3.653092000000015,"y":2.1549999999999727},{"x":3.6795080000000553,"y":2.1549999999999727},{"x":3.6795080000000553,"y":-2.1549999999999727},{"x":-3.653092000000015,"y":-2.1549999999999727},{"x":-3.653092000000015,"y":2.1549999999999727}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C211759.obj?uuid=dfcbf83754944015b911a9e368f2919e",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C211759.step?uuid=dfcbf83754944015b911a9e368f2919e",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.1 },
      }}
      {...props}
    />
  )
}