# Current A22 update

A22 adds six passing conditional TI/Panasonic full switching startup/load/PWM cases. Older outstanding full-switching claims below are historical. See POWER-PROTOTYPE-A22.md and evidence/buck-switching-A22/report.json; physical DCM/thermal/ripple qualification remains pending.

---

# A14 exact-manufacturer capacitor and CCM loop screen

2026-10-03. C18/C178373/Panasonic35SVPK330M and the connected27 kΩ/22 nF/22 pF compensation are unchanged. This step replaces unsupported broadband constant-ESR assumptions with Panasonic's exact frequency-dependent model for analysis. No PCB component definition or manufacturer model is edited. Hardware, imports, dependencies and BOM remain A11.

## Sources and independent arithmetic checks

Panasonic's exact product page links its simulation ZIP and characteristic viewer. The ZIP is retained byte-for-byte, containing the20 C/0 V SPICE library, a separate series-connected50 Ω-reference S-parameter file and an impedance/ESR PDF. All20 R/C/L elements are parsed without replacing their definitions. Nodal admittance analysis injects1 A between manufacturer terminals1/2; a current-residual bound checks every solve. The original model is independently compared with Z=2×50×S11/S21 from the published two-port data. Maximum complex-impedance difference is0.21945%; the1% arithmetic/model consistency criterion passes.

The characteristic viewer's raw HTML and frequency arrays are also retained. Frequencies are explicitly MHz, converted toHz for comparison. Across215 points up to48 kHz, the published typical curve and the nominal SPICE model differ by at most9.23% in impedance magnitude and22.99% in ESR. These are separate manufacturer representations, not guaranteed-identical datasets. The model does not become a guaranteed worst-case part from matching the S-parameter file. Temperature curves CC/TanD/TESR are absent/null in the exact viewer; no temperature bound is inferred.

At120 Hz/1 kHz/10 kHz/20 kHz/100 kHz/600 kHz, model ESR is approximately74.6/19.0/13.1/12.7/10.1/9.53 mΩ. At100 kHz the manufacturer's guaranteed20 C ESR maximum remains18 mΩ. A constant0.6 Ω at every frequency is not an actual description of this part. The earlier broad constant-ESR sweep and all1,570 failed assumptions remain intact; none is silently discarded or declared a hardware fault.

## Current loop screen and limits

scripts/buck-manufacturer-model-review.py uses TI TPS54360 §7.3.14–16 CCM equivalent gain, the existing compensation and1 kΩ bleeder, with the exact capacitor impedance in the output admittance. The screen covers5/9/12 V;1/2/2.423 A loads; capacitor R scales0.75/1/1.5/2 and C scales0.6/0.8/1/1.2/1.5; zero/40/112.8/169.2 µF ceramic credit;1/5/20 mΩ ceramic ESR; GM products0.75²/1/1.25² and zero or half-period delay at480 kHz. These are declared sensitivity assumptions, not guaranteed temperature/bias/aging/GM bounds. Zero ceramic credit remains included. The widened capacitor scales cover the model-fit difference but do not invent absent manufacturer limits.

All12,960 cases have exactly one unity-gain crossing and pass the unchanged≥45° phase-margin /≤48 kHz crossover thresholds. Worst margin is77.77° at approximately1.042 kHz; highest crossover is31.848 kHz. The model remains conditional CCM analysis. It does not establish DCM/Eco-mode behavior, full switching/slope compensation, DC-bias/temperature/aging extremes, PWM/startup/reversal transients, mixed-frequency current sharing, final-layout parasitics or actual temperatures. No measured phase margin or physical operating limit is claimed.

The27 kΩ/22 nF/22 pF network therefore has a passing manufacturer-based CCM design screen. Full converter/thermal/prototype approval remains open. The600 kHz ripple multiplier and ceramic DC-bias/current-sharing review remain unresolved; a low nominal ESR alone does not establish a mixed-frequency thermal rating. Land/paste/assembly-process review and the complete PD/STM32 port still gate product placement.

The manufacturer curve PDF and generated current Bode plot were visually inspected. Both are simulation/characteristic artifacts, not prototype measurements. JSON/logs contain complete axes, source hashes, comparison differences, thresholds and remaining limits. Archived failed historical screens retain their original outputs. Python runtime/dependencies remain the existing isolated power-review environment.

Sources: [exact Panasonic part](https://industrial.panasonic.com/ww/products/pt/os-con/models/35SVPK330M), [manufacturer simulation ZIP](https://industrial.panasonic.com/content/data/CP/files/35SVPK330M.zip), [exact characteristic viewer](https://util01.industrial.panasonic.com/ww/utilities/ds/chr-vw/35SVPK330M), [TI TPS54360](https://www.ti.com/lit/ds/symlink/tps54360.pdf). Evidence: Panasonic-35SVPK330M-model-A14.zip, untouched extracted files, raw viewer/curves, Panasonic-model-curve-A14.png and buck-manufacturer-model-A14.json/log/png.
