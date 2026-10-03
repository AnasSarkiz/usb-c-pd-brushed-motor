import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin5: ["pin5"]
} as const

export const GEO_3F_12MS3F = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <port name="pin5" pinNumber={5} aliases={["5"]} direction="down" schX={1} schY={-0.8} schStemLength={0.4} />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="left" schX={-1.2} schY={0.2} schStemLength={0.4} />
          <port name="pin3" pinNumber={3} aliases={["3"]} direction="left" schX={-1.2} schY={-0.2} schStemLength={0.4} />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="left" schX={-1.2} schY={0.6} schStemLength={0.4} />
          <schematiccircle center={{ x: -0.7, y: 0.7 }} radius={0.03} strokeWidth={0.02} color="#880000" isFilled fillColor="#880000" />
          <schematicrect schX={0.2} schY={0.2} width={2} height={1.2} strokeWidth={0.02} color="#880000" />
          <schematicpath points={[{"x":-0.4,"y":0.4},{"x":-0.4,"y":0},{"x":-0.2,"y":0},{"x":-0.2,"y":0.4},{"x":-0.4,"y":0.4}]} strokeColor="#000000" />
          <schematicpath points={[{"x":-0.8,"y":0.6},{"x":-0.3,"y":0.6},{"x":-0.3,"y":0.4}]} strokeColor="#000000" />
          <schematicpath points={[{"x":-0.8,"y":-0.2},{"x":-0.3,"y":-0.2},{"x":-0.3,"y":0}]} strokeColor="#000000" />
          <schematicpath points={[{"x":1,"y":-0.4},{"x":1,"y":-0.2},{"x":0.6,"y":-0.2},{"x":0.6,"y":0}]} strokeColor="#000000" />
          <schematicpath points={[{"x":-0.8,"y":0.2},{"x":0.2,"y":0.2},{"x":0.8,"y":0.4}]} strokeColor="#000000" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C48687540"
  ]
}}
      manufacturerPartNumber="GEO 3F-12MS3F"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-6.0000388mm" pcbY="5.999988mm" holeWidth="1.3000228mm" holeHeight="1.3000228mm" outerWidth="2.2999954mm" outerHeight="2.2999954mm" rectPad={true} pcbRotation="0deg" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="-8.0000348mm" pcbY="0mm" outerDiameter="2.2999954mm" holeDiameter="1.3000228mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="-6.0000388mm" pcbY="-5.999988mm" outerDiameter="2.2999954mm" holeDiameter="1.3000228mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="6.2000892mm" pcbY="-5.999988mm" outerDiameter="2.2999954mm" holeDiameter="1.3000228mm" shape="circle" />
<silkscreenpath route={[{"x":-3.4400236000001314,"y":2.5399999999999636},{"x":-0.9000236000001678,"y":2.5399999999999636},{"x":-0.9000236000001678,"y":-2.5399999999999636},{"x":-3.4400236000001314,"y":-2.5399999999999636},{"x":-3.4400236000001314,"y":2.5399999999999636}]} />
<silkscreenpath route={[{"x":-4.5830236000001605,"y":5.969000000000051},{"x":-2.1700236000001496,"y":5.969000000000051},{"x":-2.1700236000001496,"y":2.5399999999999636}]} />
<silkscreenpath route={[{"x":-4.62224120000019,"y":-6.096000000000004},{"x":-2.1700236000001496,"y":-6.096000000000004},{"x":-2.1700236000001496,"y":-2.66700000000003}]} />
<silkscreenpath route={[{"x":-6.61888440000007,"y":0},{"x":1.8939763999999286,"y":0},{"x":5.068976399999656,"y":3.175000000000068}]} />
<silkscreenpath route={[{"x":6.211976399999685,"y":-4.618913799999973},{"x":6.211976399999685,"y":-3.55600000000004},{"x":4.941976399999703,"y":-3.55600000000004},{"x":4.941976399999703,"y":-1.3969999999999345}]} />
<silkscreencircle pcbX="-6.199886mm" pcbY="8.4499704mm" radius="0.1999996mm" />
<silkscreenrect pcbX="0mm" pcbY="0mm" width="19.200114mm" height="15.500096mm" strokeWidth="0.254mm" />
<silkscreentext text="{NAME}" pcbX="-0.0269748mm" pcbY="9.642096mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-9.890874800000006,"y":8.892096000000038},{"x":9.836925199999769,"y":8.892096000000038},{"x":9.836925199999769,"y":-8.016303999999991},{"x":-9.890874800000006,"y":-8.016303999999991},{"x":-9.890874800000006,"y":8.892096000000038}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C48687540.obj?uuid=d74e18eae45f44a293db0e3ccf1550a3",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C48687540.step?uuid=d74e18eae45f44a293db0e3ccf1550a3",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000025400000367881148, y: 0.000012699999956566899, z: -0.000006999999999646178 },
      }}
      {...props}
    />
  )
}