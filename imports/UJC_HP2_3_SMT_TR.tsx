import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin7: ["EH3"],
  pin8: ["EH2"],
  pin9: ["EH1"],
  pin10: ["EH4"],
  pin11: ["GND1","B12"],
  pin12: ["GND2","A12"],
  pin13: ["VBUS1","B9"],
  pin14: ["VBUS2","A9"],
  pin15: ["CC2","B5"],
  pin16: ["CC1","A5"]
} as const

export const UJC_HP2_3_SMT_TR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C20611612"
  ]
}}
      manufacturerPartNumber="UJC-HP2-3-SMT-TR"
      footprint={<footprint>
        <platedhole  portHints={["pin9"]} pcbX="-4.320032mm" pcbY="-2.3699152mm" holeWidth="1.2999974mm" holeHeight="0.649986mm" outerWidth="1.5999968mm" outerHeight="0.999998mm" pcbRotation="90deg" shape="pill" />
<platedhole  portHints={["pin8"]} pcbX="4.320032mm" pcbY="-2.3699152mm" holeWidth="1.2999974mm" holeHeight="0.649986mm" outerWidth="1.5999968mm" outerHeight="0.999998mm" pcbRotation="90deg" shape="pill" />
<platedhole  portHints={["pin7"]} pcbX="4.320032mm" pcbY="1.4299248mm" holeWidth="1.3000228mm" holeHeight="0.649986mm" outerWidth="1.5999968mm" outerHeight="0.999998mm" pcbRotation="90deg" shape="pill" />
<platedhole  portHints={["pin10"]} pcbX="-4.320032mm" pcbY="1.4299248mm" holeWidth="1.2999974mm" holeHeight="0.649986mm" outerWidth="1.5999968mm" outerHeight="0.999998mm" pcbRotation="90deg" shape="pill" />
<smtpad portHints={["pin11"]} pcbX="-2.722626mm" pcbY="1.7199166mm" width="0.7999984mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="2.77749mm" pcbY="1.7199166mm" width="0.7999984mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-1.492504mm" pcbY="1.7199166mm" width="0.7599934mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="1.547368mm" pcbY="1.7199166mm" width="0.7599934mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="0.527304mm" pcbY="1.7199166mm" width="0.6999986mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-0.472694mm" pcbY="1.7199166mm" width="0.6999986mm" height="1.3999972mm" shape="rect" />
<silkscreenpath route={[{"x":4.499991000000023,"y":-1.2887895999999728},{"x":4.499991000000023,"y":0.3487737999998899}]} />
<silkscreenpath route={[{"x":4.499991000000023,"y":-4.970011600000021},{"x":4.499991000000023,"y":-3.4510662000001275}]} />
<silkscreenpath route={[{"x":-4.499991000000023,"y":-1.2887642000001733},{"x":-4.499991000000023,"y":0.3487991999999167}]} />
<silkscreenpath route={[{"x":-4.499991000000023,"y":-4.970011600000021},{"x":-4.499991000000023,"y":-3.451040799999987}]} />
<silkscreenpath route={[{"x":4.499991000000023,"y":-4.970011600000021},{"x":-4.499991000000023,"y":-4.970011600000021}]} />
<silkscreentext text="{NAME}" pcbX="-0.108458mm" pcbY="3.4195088mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":-4.399991199999931,"y":-4.72500320000006},{"x":4.399991200000045,"y":-4.72500320000006},{"x":4.399991200000045,"y":-0.32501200000012886},{"x":3.99999200000002,"y":-0.32501200000012886},{"x":3.99999200000002,"y":-4.325004000000149},{"x":-3.99999200000002,"y":-4.325004000000149},{"x":-3.99999200000002,"y":-0.32501200000012886},{"x":-4.399991199999931,"y":-0.32501200000012886},{"x":-4.399991199999931,"y":-4.72500320000006}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-5.032057999999893,"y":2.669508800000017},{"x":4.815142000000037,"y":2.669508800000017},{"x":4.815142000000037,"y":-5.247291200000063},{"x":-5.032057999999893,"y":-5.247291200000063},{"x":-5.032057999999893,"y":2.669508800000017}]} />
      </footprint>}
      
      {...props}
    />
  )
}