# A19 precision rail sensing — conditional engineering screen

R60/R66 now use unchanged official imports of YAGEO AT0603BRD07100KL/C855559 (100 kΩ,0.1%,25 ppm/°C). R61/R67 use YAGEO RT0603BRD0710KL/C95204 (10 kΩ,0.1%,25 ppm/°C). Nominal11:1 scaling and100 nF filters stay the same. Four parts are replaced; total remains129 placements, now57 supplier codes. The hardware PWM network, direction switch, regulator settings and current limits are unchanged.

## Reason for the change

The portable policy requires the motor rail and VBUS inside±5%. Treating a nominal ADC conversion as an exact voltage could approve an out-of-range rail. The static screen includes the existing3.3 V reference supply±2%, a7-count ADC allowance (characterized6.5-LSB TUE plus0.5-count quantization after internal calibration), exact divider corners and70 nA powered-pin leakage. Bounds are rounded outward. Acceptance requires the **entire interval** inside the voltage window; decay requires its upper bound at most1 V.

With the old1% dividers, even initial-tolerance5 V qualification has no accepted code: nominal code564 gives4.743–5.264 V. Adding an80°C/100 ppm TCR screen leaves no accepted code at any target voltage. The precision replacements create a usable static window without raising power limits or adding parts.

| Rail | Initial +80°C precision TCR: accepted12-bit codes | Nominal-code interval |
|---|---|---|
|5 V|558–569|4.804–5.197 V|
|9 V|998–1031|8.708–9.306 V|
|12 V|1328–1378|11.628–12.378 V|
|15 V input|1658–1725|14.556–15.459 V|
|20 V input|2208–2302|19.428–20.585 V|

A conservative single-endurance screen reserves upper resistor±0.6% and lower±0.81%, including initial/TCR and manufacturer test drift. Its5 V window narrows to562–565; nominal code564 bounds4.769–5.236 V. This is not cumulative field-aging/lifetime qualification. Full proposed temperature is still subject to regulator, capacitor and board thermal limits; no validated operating-temperature rating is declared.

Source-backed calculation: scripts/adc-sensing-review.py and evidence/adc-sensing-review-A19.json/.log. **261,568 independent corner checks pass**. No firmware ADC conversion uses this report yet. The existing policy receives engineering millivolts; its actual STM32 adapter remains incomplete.

## Supplier and mechanical validation

On2026-10-03 raw LCSC pages observed7,670 C855559 and392,640 C95204. Different web caches showed7,720/7,670 for C855559; the BOM uses the locally retrieved page count. JLCPCB assembly eligibility/current assembly stock remains unconfirmed; LCSC stock is not an assembly reservation.

Both official exact-footprint imports pass strict circuit-json, two electrical/schematic/PCB pin checks, distinct two top SMD pads and two positive paste apertures entirely inside them. There are no holes/vias or generated routes. All ten native probe checks pass. Exactly two missing-trace advisories per isolated unwired probe are retained and harmless for import inspection: both pins are present and connected in the product. No importer/model/schema patch or warning suppression occurs.

Manufacturer dimensions for both0603 series:1.60±0.10 ×0.80±0.10 ×0.45±0.10 mm, end terminations0.25±0.15 mm. Imported pads are0.8064754 ×0.8640064 mm centered±0.753364 mm, gap0.7002526 and outer span2.3132034 mm. Centered minimum longitudinal terminal overlap screens0.10 mm. Body width can exceed pad width at its maximum; solder fillets, finished paste, placement tolerance and the assembler's process still require review. Native SVG/detail views and manufacturer dimension pages were inspected. Both imported footprint geometry strings are identical except reference text; independent pin/paste/schema checks verify each SKU.

Sources: [C855559 catalog](https://www.lcsc.com/product-detail/C855559.html), [C95204 catalog](https://www.lcsc.com/product-detail/C95204.html), retained raw pages/hash records and manufacturer PDFs in evidence/. AT specificationApril15,2021 V6; RT specificationMay06,2025 V16. [STM32 DS12991](https://www.st.com/resource/en/datasheet/stm32g030f6.pdf) table48 gives powered input leakage with PA1 clamp disabled; table58 gives characterized TUE after internal calibration at35 MHz, not a production-tested bound for an arbitrary clock/sample setup.

## Remaining measurement limits

- Actual ADC clock/calibration/acquisition time, reference/supply qualification, conversion completion, channel/sample timestamp and bounds still need the target port.
- A static interval does not cover the approximately0.91 ms filter's transient lag, contamination/capacitor leakage, injected current, switching noise or brownout. These must not be hidden in an apparently fresh sample timestamp.
- A real component/reference corner can conservatively inhibit a physically nominal rail. Live reference calibration and measured noise/transients are needed for reliable assembly yield and broad charger/motor behavior.
- For the initial precision screen, the decay upper-bound check allows codes≤102; the single-endurance screen allows≤101. Neither is implemented as a new nominal-point threshold. The actual adapter must deliver conservative bounds to the sequence; the sequencer's current millivolt model alone does not establish this.
- No energy/current/thermal/assembly/physical requirement is declared passed by this change. Placement and routing remain disabled.

A20 adds raw ADC1 acquisition and timestamping in firmware/stm32_adc.{c,h}; see STM32-ADC.md. The static intervals above are not yet integrated with raw counts/reference calibration or qualified at the selected8 MHz clock.
