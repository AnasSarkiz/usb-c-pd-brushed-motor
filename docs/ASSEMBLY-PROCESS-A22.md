# A22 prototype assembly process

This process resolves the capacitor-land and THT-stencil questions for the first
engineering prototype. It does not claim physical fit, production yield, or
assembler acceptance. All purchased symbols/pads/imports remain unchanged.

## C18 / C178373 / Panasonic 35SVPK330M

Use the exact F12 manufacturer drawing and land recommendation retained in
`evidence/Panasonic-*` and the A10/A11 capacitor reviews. Body diameter is
10 +0.5 mm, base W/H 10.3 +0.2 mm, height 12.6 +0.1/-0.4 mm. Terminal width R is
0.8–1.1 mm; total terminal span C is 11.0 +0.2 mm. P=4.6 mm is a reference,
not a guaranteed terminal-gap interval.

The unchanged official import has two 4.5 × 1.65 mm SMT lands with 4.5 mm
inner gap / 13.5 mm total span. Panasonic recommends 4.4 × 1.9 mm lands with
4.3 mm gap / 13.1 mm span. The imported width is narrower than the recommendation.
At controlled lateral centering within ±0.10 mm, the maximum-width lead still
has (1.65−1.10)/2−0.10 = **0.175 mm** side margin. With maximum overall span
11.2 mm and ±0.10 mm longitudinal centering, toe margin is
13.5/2−11.2/2−0.10 = **1.05 mm**. These dimensions establish a useful hand-fit
screen; they do not establish a guaranteed inner-heel overlap because P is
reference-only.

**First prototype: omit C18 from automated placement, fit and hand-solder it
after SMT assembly.** Inspect both terminals for full visible contact, centered
placement, polarity and toe/side wetting before energizing. Reject a sample
whose heel/terminal does not make sound contact; do not bend leads or silently
alter the footprint. Panasonic's hand-solder condition is 400°C ±10°C for
at most 5 seconds. Follow its handling guidance and allow cooling between work.
The capacitor is an SMT part, never a wave-solder/THT part. Its unchanged
3.15 × 1.155 mm stencil apertures stay within the copper lands; omission from
assembly BOM/PnP must be explicit in the eventual assembler package.

Automatic C18 reflow remains unapproved for production until sample fit,
manufacturer/assembler land acceptance and reflow profiles are qualified.
Primary source: https://industrial.panasonic.com/ww/products/pt/os-con/models/35SVPK330M

## Through holes, thermal vias and printing

All 14 electrical THT pads remain in the board and have zero stencil apertures
through the supported `pcbPlatedHoleSolderPaste="none"` setting. Potentiometer,
center-off switch and motor terminal are installed after SMT. USB shield stakes
also require the defined manual-solder operation; its fine SMT signals remain
in the stencil. No electronic import was edited to obtain this result.

The 12 unchanged exposed-pad thermal vias are intentional electrical/thermal
features, not ordinary routed vias. Specify filled and copper-capped processing
for these holes before SMT reflow so solder cannot wick through the exposed pads.
The eventual fabrication drawing must identify each via by actual generated
coordinates and distinguish it from the 14 component holes and six NPTH holes.
Confirm the selected four-layer JLC04161H-7628 process accepts this option before ordering.
No new routed via is permitted inside a component pad.
Primary source: https://jlcpcb.com/help/article/pcb-via-covering

Use **1 oz outer / 0.5 oz nominal inner copper** on the selected four-layer stackup: unchanged fine-pitch and THT footprints must be
checked against that process; a 2 oz upgrade cannot be assumed compatible with
all imported annular rings. Final thermal/current-path acceptance still requires
measured routed geometry and bring-up temperatures.
Primary source: https://jlcpcb.com/capabilities/pcb-capabilities/

The imported outlines include 0.10 mm strokes. Native legends use 1.2 mm font
with approximately 0.108 mm stroke and >0.8 mm rendered character height.
Select JLC high-precision silkscreen (minimum line 0.10 mm / character 0.8 mm),
not the standard 0.15 mm line process. Recheck actual Gerber ink, clipping and
pad clearance before release. Both current unrouted layer renders were reviewed.
Primary source: https://www.jlc.com/portal/server_guide_10417.html

No fabrication order or supplier reservation has been made. Availability
snapshots establish current catalog/assembly eligibility, not reserved inventory.

## Remaining CAM and contact procurement acceptance

The unchanged USB stake slots include0.8×1.4 mm (length/width1.75), and
potentiometer mechanical slots include2.0×2.2 mm (ratio1.10). JLC's capability
page recommends slot length at least twice width. The actual short imported
slots must be reviewed by CAM before an order; no geometry patch is permitted.
Keystone C2906768 is in the assembly catalog with35 observed stock, but its
public procurement action is Pre-order with minimum33 (2026-10-04). Procure the exact SKU and manually
fit all seven contacts; do not claim automated assembly stock is reserved.

The2026-10-04 active BOM refresh covers all58 exact supplier codes and140
placements. STM32 C529330 lists4682 but offers Pre-order, minimum8 and an
estimated13-day lead time. Arrange the exact part before automatic assembly;
the displayed stock does not establish immediate turnkey availability.
All other active parts show a purchase action with positive stock. The lowest
observed stocked items are L1/117, potentiometer/123,5V LDO/162 and C18/241.
The evidence is `evidence/jlc-assembly-stock-oct04-A22.json`; nothing is reserved.
