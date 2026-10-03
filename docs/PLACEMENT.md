# A9 placement intent — placement not started

The required order is supplier/BOM/schematic/power approval, then component placement, then routing review. All 54 independent imports now pass. Product placement remains blocked by the official coordinate-schema defect and incomplete power/firmware qualification; the isolated library fix has not replaced the official board dependency. No product PCB coordinates or copper have been authored.

Provisional outline: **65 × 50 mm**, 2 layers, 1.6 mm FR-4. This replaces the earlier unproven 55 × 40 mm estimate. Four proposed 3.2 mm NPTH holes are at (±27.5, ±20) mm: 55 × 40 mm hole spacing. Reserve 7 mm diameter screw/washer clearance and check enclosure mechanics. These are intended dimensions, not instantiated or validated holes.

| Area | Placement intent |
|---|---|
| USB-C | Left edge, cable exits left, clear of mounting hardware |
| Motor terminal | Right edge, wires exit right, screwdriver access above |
| Speed knob | Upper left/center; actual Bourns body/tab/shaft and knob clearances |
| Direction switch | Upper right/center; top access and REV / OFF / FWD markings |
| Voltage selector | Two-slider service DIP: 5=both OFF, 9=right ON, 12=left ON, both ON=inhibit; change only unplugged |
| LEDs | Visible near controls; POWER / FWD / REV labels |
| Buck | Central lower region; short switch/current loops and quiet feedback |
| Bridge | Close to motor terminal; exposed-pad ground/thermal area |
| PD and LDOs | Near input, with separated quiet supply/CC routing and native programming-pad access |
| Dump resistors | Away from controls/shaft/enclosure contact; pulse-energy/heat spacing |

Actual bodies and courtyards, bottom solder tails, fastener clearance, shaft height, connector shroud and assembly accessibility must be reviewed before fitting everything into this outline. The added PD, buck, bridge and protection make this materially larger/more populated than the simple reference module. A smaller outline is not proven.

Future silkscreen: USB-C PD INPUT; SPEED / MIN / MAX; REV / OFF / FWD; POWER / FWD / REV; MOTOR+ / MOTOR−; 5 / 9 / 12 selector legend; A9 PROTOTYPE. State that motor terminal polarity is defined for forward and reverses in reverse.

No copper-width or thermal claim can be made from these reservations. Routing remains disabled in the source and config.
