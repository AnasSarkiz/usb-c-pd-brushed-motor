import type { SwitchProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"]
} as const

export const A_1103M2S3CQE2 = (props: SwitchProps) => {
  const { name = "SW1", ...restProps } = props

  return (
    <switch
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C221539"
  ]
}}
      manufacturerPartNumber="1103M2S3CQE2"
      footprint="jst3_zh_p4.7mm_pw1.524mm_pl2.2mm_id0.914mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C221539.obj?uuid=92c55af3af944c06a570ace97c67d60b",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C221539.step?uuid=92c55af3af944c06a570ace97c67d60b",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.3559872999999243, y: 0.000012699999956566899, z: -1.3500100000000002 },
      }}
      {...restProps}
    />
  )
}