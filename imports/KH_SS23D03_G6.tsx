import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"]
} as const

export const KH_SS23D03_G6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicpath points={[{"x":0.2,"y":-0.24},{"x":0.2,"y":-0.2}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.2,"y":-0.32},{"x":0.2,"y":-0.28}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.2,"y":-0.08},{"x":0.2,"y":-0.16}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.12,"y":-0.08},{"x":0.2,"y":-0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.04,"y":-0.08},{"x":0.08,"y":-0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.04,"y":-0.08},{"x":0,"y":-0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.12,"y":-0.08},{"x":-0.08,"y":-0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.2,"y":-0.12},{"x":-0.2,"y":-0.08},{"x":-0.16,"y":-0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.2,"y":-0.2},{"x":-0.2,"y":-0.16}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.2,"y":-0.36},{"x":0.22,"y":-0.28}]} strokeColor="#880000" />
          <schematiccircle center={{ x: -0.6, y: -0.4 }} radius={0.04} strokeWidth={0.02} color="#880000" />
          <schematiccircle center={{ x: -0.2, y: -0.4 }} radius={0.04} strokeWidth={0.02} color="#880000" />
          <schematiccircle center={{ x: 0.2, y: -0.4 }} radius={0.04} strokeWidth={0.02} color="#880000" />
          <schematicpath points={[{"x":-0.6,"y":-0.36},{"x":-0.6,"y":-0.2},{"x":-0.2,"y":-0.2},{"x":-0.2,"y":-0.36}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.2,"y":-0.36},{"x":-0.18,"y":-0.28}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.2,"y":-0.36},{"x":-0.22,"y":-0.28}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.6,"y":-0.36},{"x":-0.58,"y":-0.28}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.6,"y":-0.36},{"x":-0.62,"y":-0.28}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.2,"y":-0.36},{"x":0.18,"y":-0.28}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.2,"y":0.24},{"x":0.2,"y":0.2}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.2,"y":0.32},{"x":0.2,"y":0.28}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.2,"y":0.08},{"x":0.2,"y":0.16}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.12,"y":0.08},{"x":0.2,"y":0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.04,"y":0.08},{"x":0.08,"y":0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.04,"y":0.08},{"x":0,"y":0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.12,"y":0.08},{"x":-0.08,"y":0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.2,"y":0.12},{"x":-0.2,"y":0.08},{"x":-0.16,"y":0.08}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.2,"y":0.2},{"x":-0.2,"y":0.16}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.2,"y":0.36},{"x":0.22,"y":0.28}]} strokeColor="#880000" />
          <schematiccircle center={{ x: -0.6, y: 0.4 }} radius={0.04} strokeWidth={0.02} color="#880000" />
          <schematiccircle center={{ x: -0.2, y: 0.4 }} radius={0.04} strokeWidth={0.02} color="#880000" />
          <schematiccircle center={{ x: 0.2, y: 0.4 }} radius={0.04} strokeWidth={0.02} color="#880000" />
          <schematicpath points={[{"x":-0.6,"y":0.36},{"x":-0.6,"y":0.2},{"x":-0.2,"y":0.2},{"x":-0.2,"y":0.36}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.2,"y":0.36},{"x":-0.18,"y":0.28}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.2,"y":0.36},{"x":-0.22,"y":0.28}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.6,"y":0.36},{"x":-0.58,"y":0.28}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.6,"y":0.36},{"x":-0.62,"y":0.28}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.2,"y":0.36},{"x":0.18,"y":0.28}]} strokeColor="#880000" />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="down" schX={-0.6} schY={-0.8} schStemLength={0.4} />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="down" schX={-0.2} schY={-0.8} schStemLength={0.4} />
          <port name="pin3" pinNumber={3} aliases={["3"]} direction="down" schX={0.2} schY={-0.8} schStemLength={0.4} />
          <port name="pin4" pinNumber={4} aliases={["4"]} direction="down" schX={0.6} schY={-0.8} schStemLength={0.4} />
          <port name="pin5" pinNumber={5} aliases={["5"]} direction="up" schX={0.6} schY={0.8} schStemLength={0.4} />
          <port name="pin6" pinNumber={6} aliases={["6"]} direction="up" schX={0.2} schY={0.8} schStemLength={0.4} />
          <port name="pin7" pinNumber={7} aliases={["7"]} direction="up" schX={-0.2} schY={0.8} schStemLength={0.4} />
          <port name="pin8" pinNumber={8} aliases={["8"]} direction="up" schX={-0.6} schY={0.8} schStemLength={0.4} />
          <schematicrect schX={0} schY={0} width={1.6} height={1.2} strokeWidth={0.02} color="#880000" />
          <schematiccircle center={{ x: 0.6, y: -0.4 }} radius={0.04} strokeWidth={0.02} color="#880000" />
          <schematiccircle center={{ x: 0.6, y: 0.4 }} radius={0.04} strokeWidth={0.02} color="#880000" />
          <schematicpath points={[{"x":0.2,"y":0.2},{"x":0.2,"y":0.04},{"x":0.6,"y":0.04},{"x":0.6,"y":0.36}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.2,"y":-0.08},{"x":0.2,"y":-0.02},{"x":0.6,"y":-0.02},{"x":0.6,"y":-0.36}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.6,"y":0.36},{"x":0.62,"y":0.28}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.6,"y":0.36},{"x":0.58,"y":0.28}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.6,"y":-0.36},{"x":0.58,"y":-0.28}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.6,"y":-0.36},{"x":0.62,"y":-0.28}]} strokeColor="#880000" />
          <port name="pin9" pinNumber={9} aliases={["9"]} direction="left" schX={-1.2} schY={0} schStemLength={0.4} />
          <port name="pin10" pinNumber={10} aliases={["10"]} direction="left" schX={-1.2} schY={-0.2} schStemLength={0.4} />
          <schematicrect schX={-0.12} schY={0.4} width={0.32} height={0.08} strokeWidth={0.02} color="#880000" isFilled fillColor="#880000" />
          <schematicpath points={[{"x":-0.4,"y":0.2},{"x":0,"y":0.2},{"x":0,"y":0.36}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0,"y":0.36},{"x":0.02,"y":0.28}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0,"y":0.36},{"x":-0.02,"y":0.28}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.4,"y":-0.2},{"x":0,"y":-0.2},{"x":0,"y":-0.36}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0,"y":-0.36},{"x":0.02,"y":-0.28}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0,"y":-0.36},{"x":-0.02,"y":-0.28}]} strokeColor="#880000" />
          <schematicrect schX={-0.12} schY={-0.4} width={0.32} height={0.08} strokeWidth={0.02} color="#880000" isFilled fillColor="#880000" />
          <port name="pin11" pinNumber={11} aliases={["11"]} direction="right" schX={1.2} schY={-0.2} schStemLength={0.4} />
          <port name="pin12" pinNumber={12} aliases={["12"]} direction="right" schX={1.2} schY={0} schStemLength={0.4} />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C5274491"
  ]
}}
      manufacturerPartNumber="KH-SS23D03-G6"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-3.999992mm" pcbY="-1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-1.999996mm" pcbY="-1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="0mm" pcbY="-1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="3.999992mm" pcbY="-1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="3.999992mm" pcbY="1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="0mm" pcbY="1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="-1.999996mm" pcbY="1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="-3.999992mm" pcbY="1.249934mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="-7.499985mm" pcbY="3.0999938mm" outerDiameter="2.0999958mm" holeDiameter="1.5000224mm" shape="circle" />
<platedhole  portHints={["pin12"]} pcbX="7.499985mm" pcbY="-3.0999938mm" outerDiameter="2.0999958mm" holeDiameter="1.5000224mm" shape="circle" />
<platedhole  portHints={["pin11"]} pcbX="7.499985mm" pcbY="3.0999938mm" outerDiameter="2.0999958mm" holeDiameter="1.5000224mm" shape="circle" />
<platedhole  portHints={["pin10"]} pcbX="-7.499985mm" pcbY="-3.0999938mm" outerDiameter="2.0999958mm" holeDiameter="1.5000224mm" shape="circle" />
<silkscreenpath route={[{"x":6.243523200000027,"y":-3.3500060000000076},{"x":-6.243523200000027,"y":-3.3500060000000076}]} />
<silkscreenpath route={[{"x":-6.243523200000027,"y":3.350005999999894},{"x":6.243523200000027,"y":3.350005999999894}]} />
<silkscreenpath route={[{"x":-7.99998400000004,"y":-1.9206718000000365},{"x":-7.99998400000004,"y":1.9206717999999228}]} />
<silkscreenpath route={[{"x":7.999983999999927,"y":1.9206717999999228},{"x":7.999983999999927,"y":-1.9206718000000365}]} />
<silkscreentext text="{NAME}" pcbX="-0.0127254mm" pcbY="5.191mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-8.860625400000117,"y":4.441000000000031},{"x":8.835174599999846,"y":4.441000000000031},{"x":8.835174599999846,"y":-4.466399999999908},{"x":-8.860625400000117,"y":-4.466399999999908},{"x":-8.860625400000117,"y":4.441000000000031}]} />
      </footprint>}
      
      {...props}
    />
  )
}