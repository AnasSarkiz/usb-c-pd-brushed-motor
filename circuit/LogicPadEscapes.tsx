import type { FanoutTracePath } from "@tscircuit/core"

// Native board source, in world mm (+X right, +Y up). These are routing
// reservations, not supplier components or edits to generated artifacts.
const logicPadEscapePaths: FanoutTracePath[] = [
  {
    connection: "D3.cathode",
    route: [
      { route_type: "wire", x: -17, y: 7.692402, width: 0.2, layer: "top" },
      { route_type: "wire", x: -18.3, y: 7.692402, width: 0.2, layer: "top" },
      {
        route_type: "via",
        x: -18.3,
        y: 7.692402,
        from_layer: "top",
        to_layer: "bottom",
        via_diameter: 0.6,
        via_hole_diameter: 0.3,
      },
    ],
  },
  {
    connection: "TP1.pin1",
    route: [
      { route_type: "wire", x: -28.1, y: -3, width: 0.2, layer: "top" },
      { route_type: "wire", x: -28.1, y: -4.6, width: 0.2, layer: "top" },
      {
        route_type: "via",
        x: -28.1,
        y: -4.6,
        from_layer: "top",
        to_layer: "bottom",
        via_diameter: 0.6,
        via_hole_diameter: 0.3,
      },
    ],
  },
  {
    connection: "R57.pin2",
    route: [
      { route_type: "wire", x: -8, y: -1.246636, width: 0.2, layer: "top" },
      { route_type: "wire", x: -8, y: -0.3, width: 0.2, layer: "top" },
      {
        route_type: "via",
        x: -8,
        y: -0.3,
        from_layer: "top",
        to_layer: "inner1",
        via_diameter: 0.6,
        via_hole_diameter: 0.3,
      },
    ],
  },
]

export function LogicPadEscapes() {
  return (
    <autoroutingphase
      name="logic-pad-clearance-escapes"
      phaseIndex={2}
      autorouter={{
        preset: "fanout",
        allowViaInPad: false,
        traceClearance: 0.25,
      }}
      connections={["net.VBUS_SENSE", "net.SWDIO", "net.HOST_INHIBIT_B"]}
      pcbTracePaths={logicPadEscapePaths}
    />
  )
}
