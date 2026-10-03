import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"]
} as const

export const PTV09A_4015F_B103 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="up" schX={-0.04} schY={0.2} schStemLength={0.2} />
          <schematiccircle center={{ x: 0.18, y: -0.14 }} radius={0.02} strokeWidth={0.02} color="#A00000" />
          <schematicpath points={[{"x":-0.08,"y":0},{"x":-0.04,"y":-0.08},{"x":0,"y":0},{"x":-0.08,"y":0}]} strokeColor="#880000" />
          <port name="pin3" pinNumber={3} aliases={["3"]} direction="right" schX={0.36} schY={-0.2} schStemLength={0.2} />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="left" schX={-0.44} schY={-0.2} schStemLength={0.2} />
          <schematicpath points={[{"x":-0.04,"y":0},{"x":-0.04,"y":-0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.14,"y":-0.28},{"x":0.16,"y":-0.2}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.08,"y":-0.12},{"x":0.14,"y":-0.28}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.04,"y":-0.28},{"x":0.08,"y":-0.12}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-0.02,"y":-0.12},{"x":0.04,"y":-0.28}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-0.06,"y":-0.28},{"x":-0.02,"y":-0.12}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-0.1,"y":-0.12},{"x":-0.06,"y":-0.28}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-0.16,"y":-0.28},{"x":-0.1,"y":-0.12}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-0.2,"y":-0.12},{"x":-0.16,"y":-0.28}]} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-0.24,"y":-0.2},{"x":-0.2,"y":-0.12}]} strokeColor="#8D2323" />
          <port name="pin4" pinNumber={4} aliases={["4"]} direction="left" schX={-0.44} schY={0} schStemLength={0.2} />
          <port name="pin5" pinNumber={5} aliases={["5"]} direction="right" schX={0.36} schY={0} schStemLength={0.2} />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C5710902"
  ]
}}
      manufacturerPartNumber="PTV09A-4015F-B103"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-2.499995mm" pcbY="-3.04999395mm" outerDiameter="1.8999962mm" holeDiameter="1.3000228mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="0.000127mm" pcbY="-3.04999395mm" outerDiameter="1.8999962mm" holeDiameter="1.3000228mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="2.499995mm" pcbY="-3.04999395mm" outerDiameter="1.8999962mm" holeDiameter="1.3000228mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="-4.300093mm" pcbY="3.94999205mm" holeWidth="1.999996mm" holeHeight="2.1999956mm" outerWidth="2.7999944mm" outerHeight="2.999994mm" shape="pill" />
<platedhole  portHints={["pin5"]} pcbX="4.300093mm" pcbY="3.94999205mm" holeWidth="1.999996mm" holeHeight="2.1999956mm" outerWidth="2.7999944mm" outerHeight="2.999994mm" shape="pill" />
<silkscreenpath route={[{"x":-5.029987399999982,"y":2.1300058500000887},{"x":-4.999990000000139,"y":-2.539987349999933},{"x":-3.5650678000000653,"y":-2.539987349999933}]} />
<silkscreenpath route={[{"x":3.5650677999999516,"y":-2.539987349999933},{"x":5.009997599999906,"y":-2.539987349999933},{"x":4.980000200000063,"y":2.1000084500000185}]} />
<silkscreenpath route={[{"x":-4.999990000000139,"y":5.7999756500000785},{"x":-4.999990000000139,"y":9.459988650000128},{"x":4.999989999999912,"y":9.459988650000128},{"x":4.999989999999912,"y":5.749988450000046}]} />
<silkscreenpath route={[{"x":1.0651997999999594,"y":-2.539987349999933},{"x":1.43492219999996,"y":-2.539987349999933}]} />
<silkscreenpath route={[{"x":-1.43492219999996,"y":-2.539987349999933},{"x":-1.0649457999999186,"y":-2.539987349999933}]} />
<silkscreencircle pcbX="0.040005mm" pcbY="3.94008605mm" radius="2.37998mm" />
<silkscreencircle pcbX="0.040005mm" pcbY="3.94008605mm" radius="1.925066mm" />
<silkscreencircle pcbX="-3.479927mm" pcbY="8.24005205mm" radius="0.384302mm" />
<silkscreencircle pcbX="3.630041mm" pcbY="-0.48992795mm" radius="0.384302mm" />
<silkscreentext text="{NAME}" pcbX="-0.014605mm" pcbY="10.47220605mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.950090200000091,"y":9.706966050000005},{"x":5.950090200000091,"y":9.706966050000005},{"x":5.950090200000091,"y":-4.24999205000006},{"x":-5.950090200000091,"y":-4.24999205000006},{"x":-5.950090200000091,"y":9.706966050000005}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5710902.obj?uuid=03bf1a40fea8419db0ff1a7ac8acc150",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5710902.step?uuid=03bf1a40fea8419db0ff1a7ac8acc150",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -3.9569350499999123, z: 0.013156999999999641 },
      }}
      {...props}
    />
  )
}