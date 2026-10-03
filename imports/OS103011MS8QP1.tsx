import type { SwitchProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"]
} as const

export const OS103011MS8QP1 = (props: SwitchProps) => {
  const { name = "SW1", ...restProps } = props

  return (
    <switch
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C221831"
  ]
}}
      manufacturerPartNumber="OS103011MS8QP1"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-3.999992mm" pcbY="0mm" holeWidth="1.100074mm" holeHeight="0.8001mm" outerWidth="1.599946mm" outerHeight="1.299972mm" pcbRotation="180deg" shape="pill" />
<platedhole  portHints={["pin3"]} pcbX="1.999996mm" pcbY="0mm" holeWidth="1.100074mm" holeHeight="0.8001mm" outerWidth="1.599946mm" outerHeight="1.299972mm" pcbRotation="180deg" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="-0.006604mm" pcbY="0mm" holeWidth="1.100074mm" holeHeight="0.8001mm" outerWidth="1.599946mm" outerHeight="1.299972mm" pcbRotation="180deg" shape="pill" />
<platedhole  portHints={["pin6"]} pcbX="6.100064mm" pcbY="0mm" holeWidth="2.1000212mm" holeHeight="1.1000232mm" outerWidth="2.999994mm" outerHeight="1.999996mm" pcbRotation="270deg" shape="pill" />
<platedhole  portHints={["pin5"]} pcbX="-6.100064mm" pcbY="0mm" holeWidth="2.1000212mm" holeHeight="1.1000232mm" outerWidth="2.999994mm" outerHeight="1.999996mm" pcbRotation="270deg" shape="pill" />
<platedhole  portHints={["pin4"]} pcbX="3.999992mm" pcbY="0mm" holeWidth="1.100074mm" holeHeight="0.8001mm" outerWidth="1.599946mm" outerHeight="1.299972mm" pcbRotation="180deg" shape="pill" />
<silkscreenpath route={[{"x":2.7863800000000083,"y":-0.7620000000000573},{"x":2.7863800000000083,"y":0.7619999999999436},{"x":1.770379999999932,"y":0.7619999999999436},{"x":-1.7856200000001081,"y":0.7619999999999436},{"x":-2.801620000000071,"y":0.7619999999999436},{"x":-2.801620000000071,"y":-0.7620000000000573},{"x":-1.7856200000001081,"y":-0.7620000000000573},{"x":1.770379999999932,"y":-0.7620000000000573},{"x":2.7863800000000083,"y":-0.7620000000000573}]} />
<silkscreenpath route={[{"x":0,"y":-2.286000000000058},{"x":6.299200000000042,"y":-2.286000000000058}]} />
<silkscreenpath route={[{"x":0,"y":2.2859999999999445},{"x":6.350000000000023,"y":2.2859999999999445}]} />
<silkscreenpath route={[{"x":0,"y":2.2859999999999445},{"x":-6.350000000000136,"y":2.2859999999999445}]} />
<silkscreenpath route={[{"x":0,"y":-2.286000000000058},{"x":-6.350000000000136,"y":-2.286000000000058}]} />
<silkscreenpath route={[{"x":6.350000000000023,"y":2.2859999999999445},{"x":6.350000000000023,"y":1.7054575999999315}]} />
<silkscreenpath route={[{"x":6.350000000000023,"y":-1.7054576000000452},{"x":6.350000000000023,"y":-2.286000000000058}]} />
<silkscreenpath route={[{"x":-6.350000000000136,"y":2.2859999999999445},{"x":-6.350000000000136,"y":1.7054575999999315}]} />
<silkscreenpath route={[{"x":-6.350000000000136,"y":-1.7054576000000452},{"x":-6.350000000000136,"y":-2.286000000000058}]} />
<silkscreentext text="{NAME}" pcbX="-0.0254mm" pcbY="3.413mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-7.387400000000071,"y":2.663000000000011},{"x":7.3366000000000895,"y":2.663000000000011},{"x":7.3366000000000895,"y":-2.6884000000000015},{"x":-7.387400000000071,"y":-2.6884000000000015},{"x":-7.387400000000071,"y":2.663000000000011}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C221831.obj?uuid=3a4a3e30362b436a9523150fffc679ab",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C221831.step?uuid=3a4a3e30362b436a9523150fffc679ab",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.14896970000007048, y: 0.004178700000070146, z: -2.1514409999999997 },
      }}
      {...restProps}
    />
  )
}