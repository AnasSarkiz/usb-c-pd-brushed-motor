import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["C1"],
  pin2: ["C2"],
  pin3: ["A"]
} as const

export const PESD24VS2UT_215 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicpath points={[{"x":-0.2,"y":0.1},{"x":-0.2,"y":0.3},{"x":0.2,"y":0.3},{"x":0.2,"y":0.1}]} strokeColor="#880000" />
          <schematicpath svgPath="M 0.08 0.1 L 0.2 -0.1 L 0.34 0.1 Z" strokeColor="#880000" isFilled fillColor="#880000" />
          <port name="pin2" pinNumber={2} aliases={["C2"]} direction="down" schX={0.2} schY={-0.4} schStemLength={0.3} />
          <schematicpath svgPath="M -0.32 0.1 L -0.2 -0.1 L -0.06 0.1 Z" strokeColor="#880000" isFilled fillColor="#880000" />
          <schematicpath points={[{"x":-0.04,"y":-0.06},{"x":-0.04,"y":-0.06},{"x":-0.04,"y":-0.1},{"x":-0.34,"y":-0.1},{"x":-0.34,"y":-0.1},{"x":-0.34,"y":-0.1}]} strokeColor="#880000" />
          <port name="pin1" pinNumber={1} aliases={["C1"]} direction="down" schX={-0.2} schY={-0.4} schStemLength={0.3} />
          <port name="pin3" pinNumber={3} aliases={["A"]} direction="up" schX={0} schY={0.6} schStemLength={0.3} />
          <schematicpath points={[{"x":0.36,"y":-0.06},{"x":0.36,"y":-0.06},{"x":0.36,"y":-0.1},{"x":0.06,"y":-0.1},{"x":0.06,"y":-0.1},{"x":0.06,"y":-0.1}]} strokeColor="#880000" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C477999"
  ]
}}
      manufacturerPartNumber="PESD24VS2UT,215"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="0.999998mm" pcbY="-0.94996mm" width="0.999998mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="0.999998mm" pcbY="0.94996mm" width="0.999998mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.999998mm" pcbY="0mm" width="0.999998mm" height="0.6500114mm" shape="rect" />
<silkscreenpath route={[{"x":0.726211400000011,"y":1.5262098000000606},{"x":-0.726211400000011,"y":1.5262098000000606},{"x":-0.726211400000011,"y":0.49458879999997407}]} />
<silkscreenpath route={[{"x":0.726211400000011,"y":-1.5262097999999469},{"x":-0.726211400000011,"y":-1.5262097999999469},{"x":-0.726211400000011,"y":-0.49458879999997407}]} />
<silkscreenpath route={[{"x":0.726211400000011,"y":0.45539659999997184},{"x":0.726211400000011,"y":-0.45539659999985815}]} />
<silkscreentext text="{NAME}" pcbX="0.0254mm" pcbY="2.524mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-1.7499969999998939,"y":1.6999844000000621},{"x":1.7499969999998939,"y":1.6999844000000621},{"x":1.7499969999998939,"y":-1.7000097999999753},{"x":-1.7499969999998939,"y":-1.7000097999999753},{"x":-1.7499969999998939,"y":1.6999844000000621}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C477999.obj?uuid=d777607a152f4f3aac9bb0d0c14ed6fd",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C477999.step?uuid=d777607a152f4f3aac9bb0d0c14ed6fd",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0.000012700000070253736, y: -0.000012699999956566899, z: 0.050795 },
      }}
      {...props}
    />
  )
}