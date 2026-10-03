import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["IN2"],
  pin2: ["IN1"],
  pin3: ["B_GATE"],
  pin4: ["DRV"],
  pin5: ["IN_SYS"],
  pin6: ["UVLO"],
  pin7: ["OVP"],
  pin8: ["GND"],
  pin9: ["dVdT"],
  pin10: ["ILIM"],
  pin11: ["MODE"],
  pin12: ["N_SHDN"],
  pin13: ["IMON"],
  pin14: ["N_FLT"],
  pin15: ["PGTH"],
  pin16: ["PGOOD"],
  pin17: ["OUT2"],
  pin18: ["OUT1"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["pin23"],
  pin24: ["pin24"],
  pin25: ["EP"]
} as const

const pinAttributes = {
  pin8: {requiresGround: true}
} as const

export const TPS26630RGER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C1850276"
  ]
}}
      manufacturerPartNumber="TPS26630RGER"
      footprint={<footprint>
        <smtpad portHints={["pin25"]} pcbX="0mm" pcbY="0mm" width="2.6999946mm" height="2.6999946mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-1.249934mm" pcbY="1.911604mm" width="0.2800096mm" height="0.6329934mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-0.750062mm" pcbY="1.911604mm" width="0.2800096mm" height="0.6329934mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-0.249936mm" pcbY="1.911604mm" width="0.2800096mm" height="0.6329934mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="0.249936mm" pcbY="1.911604mm" width="0.2800096mm" height="0.6329934mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="0.750062mm" pcbY="1.911604mm" width="0.2800096mm" height="0.6329934mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="1.249934mm" pcbY="1.911604mm" width="0.2800096mm" height="0.6329934mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="1.911604mm" pcbY="1.249934mm" width="0.6329934mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="1.911604mm" pcbY="0.750062mm" width="0.6329934mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="1.911604mm" pcbY="0.249936mm" width="0.6329934mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="1.911604mm" pcbY="-0.249936mm" width="0.6329934mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="1.911604mm" pcbY="-0.750062mm" width="0.6329934mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="1.911604mm" pcbY="-1.249934mm" width="0.6329934mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="1.249934mm" pcbY="-1.911604mm" width="0.2800096mm" height="0.6329934mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="0.750062mm" pcbY="-1.911604mm" width="0.2800096mm" height="0.6329934mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="0.249936mm" pcbY="-1.911604mm" width="0.2800096mm" height="0.6329934mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-0.249936mm" pcbY="-1.911604mm" width="0.2800096mm" height="0.6329934mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-0.750062mm" pcbY="-1.911604mm" width="0.2800096mm" height="0.6329934mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-1.249934mm" pcbY="-1.911604mm" width="0.2800096mm" height="0.6329934mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-1.911604mm" pcbY="-1.249934mm" width="0.6329934mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-1.911604mm" pcbY="-0.750062mm" width="0.6329934mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.911604mm" pcbY="-0.249936mm" width="0.6329934mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.911604mm" pcbY="0.249936mm" width="0.6329934mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.911604mm" pcbY="0.750062mm" width="0.6329934mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.911604mm" pcbY="1.249934mm" width="0.6329934mm" height="0.2800096mm" shape="rect" />
<silkscreenpath route={[{"x":1.5805912000000717,"y":2.0762214000001222},{"x":2.0763229999998885,"y":2.0762214000001222},{"x":2.0763229999998885,"y":1.5804896000001918}]} />
<silkscreenpath route={[{"x":1.5805912000000717,"y":-2.076221399999895},{"x":2.0763229999998885,"y":-2.076221399999895},{"x":2.0763229999998885,"y":-1.5804895999998507}]} />
<silkscreenpath route={[{"x":-1.5803880000000845,"y":2.0762214000001222},{"x":-1.7131029999999328,"y":2.0762214000001222},{"x":-2.076119800000015,"y":1.7132046000001537}]} />
<silkscreenpath route={[{"x":-1.5803880000000845,"y":2.0762214000001222},{"x":-2.076119800000015,"y":2.0762214000001222},{"x":-2.076119800000015,"y":1.5804896000001918}]} />
<silkscreenpath route={[{"x":-1.5803880000000845,"y":-2.076221399999895},{"x":-2.076119800000015,"y":-2.076221399999895},{"x":-2.076119800000015,"y":-1.5804895999998507}]} />
<silkscreencircle pcbX="-2.350008mm" pcbY="1.649984mm" radius="0.07493mm" />
<silkscreentext text="{NAME}" pcbX="-0.094488mm" pcbY="3.228596mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":-1.5803879999999708,"y":2.0761960000000954},{"x":-2.0760943999998744,"y":2.0761960000000954},{"x":-2.0760943999998744,"y":1.6999966000000768},{"x":-1.5803879999999708,"y":2.0761960000000954}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-2.6685880000001134,"y":2.4785960000001523},{"x":2.479611999999861,"y":2.4785960000001523},{"x":2.479611999999861,"y":-2.466403999999784},{"x":-2.6685880000001134,"y":-2.466403999999784},{"x":-2.6685880000001134,"y":2.4785960000001523}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C1850276.obj?uuid=1265dd8b7b8c4a2f9161079a5a7b672c",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C1850276.step?uuid=1265dd8b7b8c4a2f9161079a5a7b672c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.00010159999987990886, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}