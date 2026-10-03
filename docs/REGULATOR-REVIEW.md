# A9 regulator input and power review

C13/C14 were two nominal 1 µF/50 V ceramics. Their 2 µF nominal total cannot satisfy TPS54360's minimum 3 µF effective input capacitance even before DC-bias losses. Both are now unchanged official C138687 / Samsung CL32B106KBJNNNE 10 µF/50 V X7R 1210 imports. Component count remains 128; distinct supplier codes increase to 54.

The exact SKU had 16,700 LCSC stock observed on 2026-10-03. Stock is neither reserved nor proof of JLCPCB assembly eligibility. The manufacturer's exact CL32B106KBJNNN characterization is retained with its checksum. Using the measured DC-bias point just above the 21 V input envelope gives 9.90 µF for the pair. Applying 10% initial tolerance, 15% temperature loss and an additional 20% aging/design reserve gives 6.06 µF, approximately twice TI's minimum. These are typical manufacturer curves plus engineering reserves, not guaranteed tested minima.

At 2.423 A screened peak output, worst-case buck input ripple is approximately 1.212 A RMS for the bank. A 55/45 sharing assumption puts 0.666 A on one capacitor. Manufacturer ripple-characterization points cover greater currents at 10/100/500/1000 kHz under their stated temperature-rise characterization. Actual sharing and heating must be measured with the final layout. The independently imported C13585 X5R alternative is not used: its stronger DC-bias loss leaves inadequate effective capacitance after the same reserves.

The portable PD policy uses conservative 85% buck efficiency, hot bridge resistance, series-diode loss and 1 W auxiliaries. With the 7.15 kΩ eFuse limit tolerances it accepts 15 V/3 A for 5/9 V motors and 20 V/3 A for 12 V; adequate 20 V is a fallback for lower modes. Predicted peak source currents are approximately 1.292/2.124/2.041 A respectively. A 15 V-only source is rejected in 12 V mode under this screen. See PD-QUALIFICATION.md and power-report-A9.log. A complete embedded transport and measured source/current behavior remain required.

## Remaining power gates

The 27 kΩ/22 nF/22 pF compensation is not approved by the input-capacitor correction. Output MLCC DC bias, electrolytic ESR/tolerance, full loop response at each voltage, light-load operation and PWM load transients require further manufacturer/model review and subsequent measurements. No full-loop simulation or measured phase margin is claimed.

The 8.2 µH inductor screen uses its tolerance, low switching frequency and peak load to check headroom against the TPS54360 minimum peak limit. Actual inductor saturation, thermal rise, catch-diode heating, exposed-pad copper and narrow current paths must be checked. The approximate 2 A output and bounded peak target are not validated hardware ratings.

The 12 V regenerative dump can dissipate approximately 18.9 W instantaneously at its nominal trip, exceeding the four-resistor bank's 8 W aggregate continuous component rating. It must be qualified for pulse energy/duty and the declared motor inertia. Driver OCP/thermal protection does not establish a continuous braking envelope or prevent the mechanical hazards of running reversal. Rapid reversal in both directions and 5 V current-limit accuracy remain mandatory prototype cases.

References: [TI TPS54360](https://www.ti.com/lit/ds/symlink/tps54360.pdf), §8.2.2.6; [Samsung exact characterization](https://product.samsungsem.com/mlcc/CL32B106KBJNNN.do); [LCSC exact SKU](https://www.lcsc.com/product-detail/C138687.html). Calculations and raw data are in evidence/buck-input-review-A9.json and evidence/C138687-characteristics-A9.json.
