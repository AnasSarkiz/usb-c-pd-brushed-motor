import type { FanoutTracePath } from "@tscircuit/core"

// Native saved routing paths, in board-world mm (+X right, +Y up).
// Intentional short IC pad escapes widen outside neighbouring pad rows.
// These paths are not fabrication evidence until the emitted copper passes DRC.
const powerPaths: FanoutTracePath[] = [
  {
    connection: "U5.SW",
    route: [
      {
        route_type: "wire",
        x: -6.795,
        y: -21.769108,
        width: 0.5,
        layer: "top",
      },
      {
        route_type: "wire",
        x: -6.795,
        y: -23.35,
        width: 0.5,
        layer: "top",
        width_interpolation_mode: "linear",
      },
      { route_type: "wire", x: -5.4, y: -24.5, width: 1.3, layer: "top" },
      { route_type: "wire", x: -3.7, y: -25.003678, width: 1.3, layer: "top" },
    ],
  },
  {
    connection: "C12.pin2",
    route: [
      { route_type: "wire", x: -3.2, y: -16.7, width: 0.2, layer: "top" },
      { route_type: "wire", x: -1.5, y: -16.7, width: 0.2, layer: "top" },
      { route_type: "wire", x: 0.500035, y: -18.5, width: 0.2, layer: "top" },
    ],
  },
  {
    connection: "D5.cathode",
    route: [
      {
        route_type: "wire",
        x: -3.7,
        y: -25.003678,
        width: 1.3,
        layer: "top",
        width_interpolation_mode: "linear",
      },
      { route_type: "wire", x: -1.5, y: -25.003678, width: 2, layer: "top" },
      { route_type: "wire", x: 0.500035, y: -23.5, width: 2, layer: "top" },
      { route_type: "wire", x: 0.500035, y: -18.5, width: 2, layer: "top" },
    ],
  },
  {
    connection: "U10.pin8",
    route: [
      {
        route_type: "wire",
        x: 27.275078,
        y: -2.873248,
        width: 0.3,
        layer: "top",
      },
      {
        route_type: "wire",
        x: 27.275078,
        y: -4.1,
        width: 0.3,
        layer: "top",
        width_interpolation_mode: "linear",
      },
      { route_type: "wire", x: 30.5, y: -5.2, width: 2, layer: "top" },
      { route_type: "wire", x: 30.5, y: -7.9, width: 2, layer: "top" },
      { route_type: "wire", x: 38, y: -7.9, width: 2, layer: "top" },
      { route_type: "wire", x: 38, y: 5.50006, width: 2, layer: "top" },
      { route_type: "wire", x: 34.09995, y: 5.50006, width: 2, layer: "top" },
    ],
  },
  {
    connection: "D10.pin1",
    route: [
      { route_type: "wire", x: 31, y: 15.609098, width: 1.3, layer: "top" },
      { route_type: "wire", x: 38, y: 15.609098, width: 1.3, layer: "top" },
      { route_type: "wire", x: 38, y: 5.50006, width: 1.3, layer: "top" },
      { route_type: "wire", x: 34.09995, y: 5.50006, width: 1.3, layer: "top" },
    ],
  },
  {
    connection: "U10.pin10",
    route: [
      {
        route_type: "wire",
        x: 26.625092,
        y: 2.873248,
        width: 0.3,
        layer: "top",
      },
      {
        route_type: "wire",
        x: 26.625092,
        y: 4.2,
        width: 0.3,
        layer: "top",
        width_interpolation_mode: "linear",
      },
      {
        route_type: "wire",
        x: 29.6,
        y: 4.2,
        width: 0.6,
        layer: "top",
        width_interpolation_mode: "linear",
      },
      { route_type: "wire", x: 30.2, y: 6.5, width: 2, layer: "top" },
      { route_type: "wire", x: 30.2, y: 10.50005, width: 2, layer: "top" },
      { route_type: "wire", x: 34.09995, y: 10.50005, width: 2, layer: "top" },
    ],
  },
  {
    connection: "D10.pin2",
    route: [
      { route_type: "wire", x: 31, y: 20.390902, width: 1.3, layer: "top" },
      { route_type: "wire", x: 28.5, y: 20.390902, width: 1.3, layer: "top" },
      { route_type: "wire", x: 28.5, y: 10.50005, width: 1.3, layer: "top" },
      {
        route_type: "wire",
        x: 34.09995,
        y: 10.50005,
        width: 1.3,
        layer: "top",
      },
    ],
  },
]

export function PowerRouting() {
  return (
    <>
      <autoroutingphase
        phaseIndex={0}
        // Fixed high-current paths precede the ground and signal routing stages.
        fanoutPourNetMap={{}}
        connections={["net.SWITCH_NODE", "net.MOTOR_P", "net.MOTOR_N"]}
        pcbTracePaths={powerPaths}
      />
      <autoroutingphase
        name="ground-plane-connections"
        phaseIndex={5}
        autorouter={{
          preset: "fanout",
          allowViaInPad: false,
          traceClearance: 0.25,
        }}
        connections={["net.GND"]}
        fanoutPourNetMap={{ bottom: "GND" }}
      />
    </>
  )
}
