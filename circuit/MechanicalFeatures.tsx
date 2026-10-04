import { Fragment } from "react"
import { productPlacement } from "./product-placement"

import { undersideLabelOffsets } from "./underside-label-offsets"

export function MechanicalFeatures() {
  return (
    <>
      <silkscreentext text="USB-C PD" pcbX={-33.8} pcbY={22.3} fontSize={1.2} />
      <silkscreentext text="INPUT" pcbX={-33} pcbY={21} fontSize={1.2} />
      <silkscreentext text="MOTOR" pcbX={36} pcbY={14.8} fontSize={1.2} />
      <silkscreentext text="SPEED" pcbX={-9} pcbY={30.1} fontSize={1.2} />
      <silkscreentext
        text="FWD / OFF / REV"
        pcbX={10}
        pcbY={28.6}
        fontSize={1.2}
      />
      <silkscreentext
        text="5V BOTH OFF / 9V 9 ON / 12V 12 ON"
        pcbX={-3}
        pcbY={31.3}
        fontSize={1.2}
      />
      <silkscreentext
        text="BOTH ON: STOP"
        pcbX={26}
        pcbY={31.3}
        fontSize={1.2}
      />
      <silkscreentext
        text="SELECT: ON LEFT"
        pcbX={-23}
        pcbY={29.8}
        fontSize={1.2}
      />
      <silkscreentext text="9" pcbX={-29.5} pcbY={25} fontSize={1.2} />
      <silkscreentext text="12" pcbX={-29.5} pcbY={23} fontSize={1.2} />
      <silkscreentext text="+" pcbX={38.5} pcbY={5.5} fontSize={1.2} />
      <silkscreentext text="-" pcbX={38.5} pcbY={10.5} fontSize={1.2} />
      <silkscreentext text="TP1 SWDIO" pcbX={-34} pcbY={-1.6} fontSize={1.2} />
      <silkscreentext text="TP2 CLK" pcbX={-27.5} pcbY={-5.25} fontSize={1.2} />
      <silkscreentext
        text="TP3 NRST"
        pcbX={-28.1}
        pcbY={-9.25}
        fontSize={1.2}
      />
      <silkscreentext text="TP4 GND" pcbX={-23} pcbY={-10.75} fontSize={1.2} />
      <silkscreentext text="TP5 3V3" pcbX={-22.5} pcbY={21} fontSize={1.2} />
      <silkscreentext text="TP6 VBUS" pcbX={-17.3} pcbY={10.1} fontSize={1.2} />
      <silkscreentext text="TP7 VM" pcbX={20} pcbY={15} fontSize={1.2} />
      <silkscreentext text="POWER" pcbX={25} pcbY={26.4} fontSize={1.2} />
      <silkscreentext text="FWD" pcbX={20} pcbY={26.4} fontSize={1.2} />
      <silkscreentext text="REV" pcbX={20} pcbY={17} fontSize={1.2} />
      <silkscreentext
        text="A22 PROTOTYPE"
        pcbX={0}
        pcbY={31.5}
        fontSize={1.2}
        layers={["bottom"]}
      />

      {Object.entries(productPlacement).map(([reference, placement]) => (
        <Fragment key={reference}>
          <silkscreentext
            text={reference}
            layers={["bottom"]}
            pcbX={placement.x + (undersideLabelOffsets[reference]?.x ?? 0)}
            pcbY={placement.y + (undersideLabelOffsets[reference]?.y ?? 0)}
            fontSize={1.2}
          />
        </Fragment>
      ))}

      {[-35, 35].flatMap((x) =>
        [-27.5, 27.5].map((y) => (
          <Fragment key={`${x}/${y}`}>
            <hole diameter="3.2mm" pcbX={x} pcbY={y} />
            <keepout
              shape="circle"
              radius="3.5mm"
              pcbX={x}
              pcbY={y}
              layer="top"
            />
            <keepout
              shape="circle"
              radius="3.5mm"
              pcbX={x}
              pcbY={y}
              layer="bottom"
            />
          </Fragment>
        )),
      )}
    </>
  )
}
