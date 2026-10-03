# A9 voltage selector drawing review

SW2 is C3293142 / Kongshen DSHP02TSGER. The manufacturer's top view places slider 1 on the left and slider 2 on the right, ON at the top; each slider connects the two terminals along its own vertical column. Nominal body width 4.14 mm, length 5.40 mm, height 2.30 mm; column pitch 1.27 mm. Recommended PCB lands: 0.76 mm width, total span 8.89 mm, inner separation 6.35 mm, giving land length 1.27 mm and center span 7.62 mm.

The official import pads have x=±0.635 mm and y=±3.81 mm, width 0.762 mm and length 1.524 mm. Pitch and center span agree with the manufacturer's land pattern. Imported lands are 0.254 mm longer, extending 0.127 mm at each end: more solder area, no inward bridging; inner gap remains 6.096 mm and column edge gap 0.508 mm. Body outline 4.20×5.40 mm encloses nominal 4.14×5.40 mm; placement must include the maximum 4.44×5.70 mm body envelope. Courtyard about 4.64×9.64 mm leaves space beyond land span and maximum width. These are nominal geometric checks, not an assembly test.

The manufacturer schematic names its two contacts 1–2 and 3–4, but does not bind those numbers to the mechanical lands. The imported supplier model uses sequential perimeter footprint identifiers. Do not equate the two numbering schemes without continuity evidence. Wiring is independently evaluated by actual physical columns:

| Component-side terminal position, ON legend at top | Imported pad | Net |
|---|---|---|
| Left bottom | pin1 | 3.3 V |
| Left top | pin4 | 12 V selector bit |
| Right bottom | pin2 | 9 V selector bit |
| Right top | pin3 | 3.3 V |

Therefore left ON = 12 V, right ON = 9 V, neither ON = 5 V and both ON = invalid/inhibit. This inference follows slider/terminal alignment in the manufacturer top and side views, not an invented electrical pin mapping. No imported definition is patched. Placement silkscreen should put 12 next to the left slider and 9 next to the right slider in this orientation, with the complete truth table nearby. Any PCB rotation must rotate these labels with the component.

Each closed selector carries only about 33 µA through its 100 kOhm pull-down, below the 25 mA/24 V switching rating. Prototype continuity, contact resistance/bounce, reflow orientation and slider-label correspondence remain required. Manufacturer/source: https://datasheet.lcsc.com/datasheet/pdf/99e3bb70ed5b8a6be13dec873d9ccd66.pdf?productCode=C3293142 . Reviewed artifacts: evidence/C3293142-drawing-A7.png, original PDF and imports/DSHP02TSGER.tsx (unchanged).
