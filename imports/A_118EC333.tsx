import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const A_118EC333 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicpath points={[{"x":-0.04,"y":0.14},{"x":-0.04,"y":-0.14}]} strokeColor="#880000" />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="left" schX={-0.4} schY={0} schStemLength={0.2} />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="right" schX={0.4} schY={0} schStemLength={0.2} />
          <schematicpath points={[{"x":-0.2,"y":0},{"x":-0.04,"y":0}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.04,"y":0},{"x":0.2,"y":0}]} strokeColor="#880000" />
          <schematicpath svgPath="M 0.0888 -0.138 A 0.2 0.2 0 0 0 0.0906 0.1406" strokeColor="#880000" />
          <schematicpath points={[{"x":-0.18,"y":0.1},{"x":-0.1,"y":0.1}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.14,"y":0.14},{"x":-0.14,"y":0.06}]} strokeColor="#880000" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C19191929"
  ]
}}
      manufacturerPartNumber="118EC333"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-3.294888mm" pcbY="0mm" width="3.6100004mm" height="1.2599924mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="3.294888mm" pcbY="0mm" width="3.6100004mm" height="1.2599924mm" shape="rect" />
<silkscreenpath route={[{"x":4.226229799999942,"y":0.7823961999999938},{"x":4.226229799999942,"y":4.2262298000000555},{"x":-2.489962000000105,"y":4.2262298000000555},{"x":-4.2262298000000555,"y":2.4899619999999913},{"x":-4.2262298000000555,"y":0.7823961999999938}]} />
<silkscreenpath route={[{"x":4.226229799999942,"y":-0.7823961999999938},{"x":4.226229799999942,"y":-4.226229799999942},{"x":-2.489962000000105,"y":-4.226229799999942},{"x":-4.2262298000000555,"y":-2.489962000000105},{"x":-4.2262298000000555,"y":-0.7823961999999938}]} />
<silkscreentext text="{NAME}" pcbX="-0.00635mm" pcbY="5.2164mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":3.9010081999998647,"y":-0.12451080000005277},{"x":3.9010081999998647,"y":0.12451079999993908},{"x":2.9049979999999778,"y":0.12451079999993908},{"x":2.9049979999999778,"y":-0.12451080000005277},{"x":3.9010081999998647,"y":-0.12451080000005277}]} strokeWidth="0.254mm" />
<fabricationnotepath route={[{"x":-3.9010081999999784,"y":-0.12451080000005277},{"x":-3.9010081999999784,"y":0.12451079999993908},{"x":-2.9049980000000915,"y":0.12451079999993908},{"x":-2.9049980000000915,"y":-0.12451080000005277},{"x":-3.9010081999999784,"y":-0.12451080000005277}]} strokeWidth="0.254mm" />
<fabricationnotepath route={[{"x":-3.527501200000188,"y":-0.8299958000001197},{"x":-3.527501200000188,"y":0.8299957999998924},{"x":-3.2785049999999956,"y":0.8299957999998924},{"x":-3.2785049999999956,"y":-0.8299958000001197},{"x":-3.527501200000188,"y":-0.8299958000001197}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-5.349888200000123,"y":4.40008059999991},{"x":5.349888200000009,"y":4.40008059999991},{"x":5.349888200000009,"y":-4.3999028000000635},{"x":-5.349888200000123,"y":-4.3999028000000635},{"x":-5.349888200000123,"y":4.40008059999991}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C19191929.obj?uuid=5b26db6f3cf84e33b02fe588aa61bd9a",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C19191929.step?uuid=5b26db6f3cf84e33b02fe588aa61bd9a",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.00008889999992334197, y: -0.0000889000000370288, z: -0.8 },
      }}
      {...props}
    />
  )
}