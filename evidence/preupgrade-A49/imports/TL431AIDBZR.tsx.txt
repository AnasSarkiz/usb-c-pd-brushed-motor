import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["CATHODE"],
  pin2: ["REF"],
  pin3: ["ANODE"]
} as const

export const TL431AIDBZR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicpath points={[{"x":-0.2,"y":-0.4},{"x":0.1,"y":-0.2},{"x":-0.2,"y":0},{"x":-0.2,"y":-0.4}]} strokeColor="#880000" />
          <port name="pin3" pinNumber={3} aliases={["ANODE"]} direction="left" schX={-0.7} schY={-0.2} schStemLength={0.4} />
          <port name="pin2" pinNumber={2} aliases={["REF"]} direction="up" schX={0} schY={0.3} schStemLength={0.3} />
          <port name="pin1" pinNumber={1} aliases={["CATHODE"]} direction="right" schX={0.6} schY={-0.2} schStemLength={0.4} />
          <schematicpath points={[{"x":0.2,"y":0},{"x":0.1,"y":0},{"x":0.1,"y":-0.4},{"x":0,"y":-0.4}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0,"y":0},{"x":0,"y":-0.12}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.3,"y":-0.2},{"x":-0.2,"y":-0.2}]} strokeColor="#000000" />
          <schematicpath points={[{"x":0.1,"y":-0.2},{"x":0.2,"y":-0.2}]} strokeColor="#000000" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C23892"
  ]
}}
      manufacturerPartNumber="TL431AIDBZR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="1.235075mm" pcbY="-0.94996mm" width="1.0700004mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="1.235075mm" pcbY="0.94996mm" width="1.0700004mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.235075mm" pcbY="0mm" width="1.0700004mm" height="0.5999988mm" shape="rect" />
<silkscreenpath route={[{"x":0.8760714000002281,"y":1.5361919999999145},{"x":-0.8763253999998142,"y":1.5361919999999145},{"x":-0.8763253999998142,"y":0.49458879999997407}]} />
<silkscreenpath route={[{"x":0.8760714000002281,"y":-1.5361920000000282},{"x":-0.8763253999998142,"y":-1.5361920000000282},{"x":-0.8763253999998142,"y":-0.49458879999997407}]} />
<silkscreenpath route={[{"x":0.8760714000002281,"y":0.45539659999997184},{"x":0.8760714000002281,"y":-0.45539659999985815}]} />
<silkscreentext text="{NAME}" pcbX="-0.012827mm" pcbY="2.524mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.0281269999999267,"y":1.774000000000001},{"x":2.0024730000002364,"y":1.774000000000001},{"x":2.0024730000002364,"y":-1.7993999999999915},{"x":-2.0281269999999267,"y":-1.7993999999999915},{"x":-2.0281269999999267,"y":1.774000000000001}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C23892.obj?uuid=cefd4596db214da394d9632b2b88f8f2",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C23892.step?uuid=cefd4596db214da394d9632b2b88f8f2",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.000012699999956566899, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}