import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"]
} as const

export const TS_103 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicpath points={[{"x":-0.2,"y":0},{"x":-0.06,"y":0}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.2,"y":0},{"x":0.06,"y":0}]} strokeColor="#880000" />
          <schematiccircle center={{ x: -0.06, y: 0 }} radius={0.02} strokeWidth={0.02} color="#880000" />
          <schematiccircle center={{ x: 0.08, y: 0 }} radius={0.02} strokeWidth={0.02} color="#880000" />
          <schematicpath points={[{"x":0.06,"y":0.06},{"x":-0.06,"y":0}]} strokeColor="#880000" />
          <port name="pin4" pinNumber={4} aliases={["4"]} direction="up" schX={0.2} schY={0.4} schStemLength={0.4} />
          <port name="pin3" pinNumber={3} aliases={["3"]} direction="up" schX={-0.2} schY={0.4} schStemLength={0.4} />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="down" schX={0.2} schY={-0.4} schStemLength={0.4} />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="down" schX={-0.2} schY={-0.4} schStemLength={0.4} />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C668592"
  ]
}}
      manufacturerPartNumber="TS-103"
      footprint={<footprint>
        <hole pcbX="-0.9534398mm" pcbY="0mm" diameter="0.999998mm" />
<hole pcbX="1.5464282mm" pcbY="0mm" diameter="1.1000232mm" />
<smtpad portHints={["pin1"]} pcbX="1.5164562mm" pcbY="2.400046mm" width="0.8999982mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="1.5164562mm" pcbY="-2.400046mm" width="0.8999982mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.8835898mm" pcbY="2.400046mm" width="0.8999982mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-0.8835898mm" pcbY="-2.400046mm" width="0.8999982mm" height="0.7999984mm" shape="rect" />
<silkscreenpath route={[{"x":2.023567200000116,"y":1.7780508000000737},{"x":2.6914602000002787,"y":1.7780508000000737}]} />
<silkscreenpath route={[{"x":-0.37642799999980525,"y":1.7780508000000737},{"x":1.009345200000098,"y":1.7780508000000737}]} />
<silkscreenpath route={[{"x":-2.096541399999751,"y":1.7780508000000737},{"x":-1.3906499999998232,"y":1.7780508000000737}]} />
<silkscreenpath route={[{"x":2.023567200000116,"y":-1.77794920000008},{"x":2.6914602000002787,"y":-1.77794920000008}]} />
<silkscreenpath route={[{"x":-0.37642799999980525,"y":-1.77794920000008},{"x":1.009345200000098,"y":-1.77794920000008}]} />
<silkscreenpath route={[{"x":-2.096541399999751,"y":1.7780508000000737},{"x":-2.096541399999751,"y":-1.77794920000008},{"x":-1.3906499999998232,"y":-1.77794920000008}]} />
<silkscreenpath route={[{"x":2.6914602000002787,"y":1.8000471999999945},{"x":2.6914602000002787,"y":-1.7999456000001146}]} />
<silkscreenrect pcbX="-0.8899398mm" pcbY="0mm" width="2.413mm" height="1.778mm" strokeWidth="0.254mm" />
<silkscreentext text="{NAME}" pcbX="0.2464562mm" pcbY="3.806446mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":-2.2235667999997304,"y":-1.0160000000000764},{"x":-2.2235667999997304,"y":0.88900000000001},{"x":-2.2235667999997304,"y":-1.0160000000000764}]} strokeWidth="0.254mm" />
<fabricationnotepath route={[{"x":-2.2235667999997304,"y":0.88900000000001},{"x":-2.2235667999997304,"y":1.0159999999999627},{"x":-2.096566799999664,"y":1.0159999999999627},{"x":-2.096566799999664,"y":0.88900000000001},{"x":-2.2235667999997304,"y":0.88900000000001}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-2.467343799999753,"y":3.056446000000051},{"x":2.960256200000231,"y":3.056446000000051},{"x":2.960256200000231,"y":-3.0315540000000283},{"x":-2.467343799999753,"y":-3.0315540000000283},{"x":-2.467343799999753,"y":3.056446000000051}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C668592.obj?uuid=0c88dda95ddc4c8faf0015f1f599dcb5",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C668592.step?uuid=0c88dda95ddc4c8faf0015f1f599dcb5",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.31645860000026005, y: -0.00005080000005364127, z: -2.150001 },
      }}
      {...props}
    />
  )
}