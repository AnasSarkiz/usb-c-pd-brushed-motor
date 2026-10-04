import { Fragment } from "react"

// Native routing targets in board-world millimetres (+X right, +Y up).
// These are PCB features; supplier symbols, pin maps and lands are untouched.
// The native router must solve each pad-to-target route and its vias under DRC.
// Ground pins remain at their real component pads for native plane fanout.
// FanoutSolver requires component endpoints and cannot start at an escaped point.
// U1 EP pin25 has no imported thermal vias and requires a real ground escape.
// The twelve accepted imported vias belong to U4, U5 and U10 only.
// The native solver must clear peripheral pads and prohibit new via-in-pad.
const pdEscapePositions = [
  { pinNumber: 1, xMm: -26.25, yMm: 1.2 },
  { pinNumber: 2, xMm: -25.4, yMm: 1.2 },
  { pinNumber: 4, xMm: -24.1, yMm: 1.1 },
  { pinNumber: 5, xMm: -23.25, yMm: 1.1 },
  { pinNumber: 6, xMm: -22.4, yMm: 1.2 },
  { pinNumber: 7, xMm: -21.5, yMm: 2.3 },
  { pinNumber: 8, xMm: -21.5, yMm: 3.15 },
  { pinNumber: 16, xMm: -24.65, yMm: 7.5 },
  { pinNumber: 18, xMm: -25.65, yMm: 6.9 },
  { pinNumber: 19, xMm: -27.3, yMm: 5.8 },
  { pinNumber: 21, xMm: -27.3, yMm: 4.6 },
  { pinNumber: 23, xMm: -27.3, yMm: 2.9 },
  { pinNumber: 24, xMm: -27.3, yMm: 2.05 },
]

const mcuEscapePositions = [
  { pinNumber: 1, xMm: -15.65, yMm: -8.925 },
  { pinNumber: 2, xMm: -14.8, yMm: -8.275 },
  { pinNumber: 3, xMm: -15.65, yMm: -7.625 },
  { pinNumber: 4, xMm: -15.65, yMm: -6.975 },
  { pinNumber: 6, xMm: -14.8, yMm: -5.675 },
  { pinNumber: 7, xMm: -15.65, yMm: -5.025 },
  { pinNumber: 8, xMm: -15.65, yMm: -4.375 },
  { pinNumber: 9, xMm: -15.65, yMm: -3.725 },
  { pinNumber: 10, xMm: -15.65, yMm: -3.075 },
  { pinNumber: 11, xMm: -24.35, yMm: -3.075 },
  { pinNumber: 12, xMm: -25.2, yMm: -3.725 },
  { pinNumber: 13, xMm: -24.35, yMm: -4.375 },
  { pinNumber: 14, xMm: -25.2, yMm: -5.025 },
  { pinNumber: 15, xMm: -24.35, yMm: -5.675 },
  { pinNumber: 16, xMm: -25.2, yMm: -6.325 },
  { pinNumber: 17, xMm: -24.35, yMm: -6.975 },
  { pinNumber: 18, xMm: -25.2, yMm: -7.625 },
  { pinNumber: 19, xMm: -24.35, yMm: -8.275 },
]

export function PinBreakoutPoints({ reference }: { reference: "U1" | "U11" }) {
  const positions = reference === "U1" ? pdEscapePositions : mcuEscapePositions
  return (
    <>
      {positions.map(({ pinNumber, xMm, yMm }) => (
        <Fragment key={pinNumber}>
          <breakoutpoint
            connection={`${reference}.pin${pinNumber}`}
            pcbX={xMm}
            pcbY={yMm}
            // PD_ENABLE_N crosses the supply corridor on bottom; remaining
            // local escapes stay on top so the fine-pitch pad rows retain
            // their proven ordering and do not force unnecessary vias.
            layer={
              (reference === "U1" && pinNumber === 16) ||
              (reference === "U11" && pinNumber === 15)
                ? "bottom"
                : "top"
            }
          />
        </Fragment>
      ))}
    </>
  )
}
