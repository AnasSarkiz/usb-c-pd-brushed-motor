# A22 power-stage prototype screens and qualification limits

This is an untested engineering prototype targeting5/9/12 V and approximately
2 A continuous, with current regulation nominal2.22 A and a2.423 A corner
screen. These remain intended ratings. The initial ambient envelope is0–40°C;
actual copper and temperature tests determine the supported continuous limit.

PD policy now requires a sufficient fixed15/20 V contract advertising3–5 A.
5 V prefers15 V when adequate, otherwise20 V;9/12 V require20 V under the
5% reserve screen. No native12 V PDO is assumed. Insufficient/non-PD sources,
invalid selectors, missing NVM/RX/measurement approval and stale/fault states
inhibit motor power. R13 is officialC23215/6.98 kΩ; initial tolerance plus TCR
puts the eFuse screen at2.275–2.895 A. This removes the former17 mA9 V/15 V
margin by selecting a contract with adequate reserve, not by lowering the target.

## Analog protection correction

R32 is27 kΩ/C22967 and R65 is11 kΩ/C25950. The latter independently passed
the official import, strict schema, two-pin/pad and all five native checks;
JLC assembly UI showed323,637 stock on2026-10-04. The previous24.3 kΩ/10 kΩ
network overlapped normal buck FB limits at adverse corners in5 V mode.
The correction removes that real overlap. Each selection now passes16,384
corners in `power-prototype-envelope-A22.json`, using widened resistor2%,
reference initial/temperature/bias, comparator±9 mV/±400 nA and FB±900 nA
engineering allowances. Buck FB screen0.788–0.812 V is wider than the
0.792–0.808 V datasheet band. Reference validity is required only after
independently qualified VM≥4.75/8.55/11.4 V; startup low-VM reference behavior
never authorizes the motor. FB current and hot behavior still require measurement.

Worst computed dump trip ranges are5.09–6.45,9.54–12.03 and13.09–16.52 V.
Release ranges are4.88–6.19,8.84–11.10 and11.81–14.77 V, respectively.
Each paired corner has positive hysteresis. No guaranteed maximum comparator
or total gate response delay is available; do not turn these static results
into a transient clamp guarantee.

## Switching-model and thermal evidence

Six native-adaptive ngspice46 switching cases use TI's untouched TPS54360
model and Panasonic's exact35SVPK330M model.5 V at15/20 V,9/12 V at20 V
startup/load/unload and5/12 V20 kHz50% PWM cases pass the declared±5%
voltage screen. Reports retain deck/model hashes, external vector extrema and
RMS currents. Peak simulated inductor current is4.736 A during12 V startup,
above the minimum4.5 A switch limit; this typical-model startup is not a
worst-case startup guarantee. Maximum TI all-input switch-limit bound is6.8 A.
The9 A saturation-rated inductor still needs delay/overshoot and hot-loss tests.

The reported negative106–140 A instantaneous source peaks are ideal-source/
switching-model impulses. They are not physical PD-current evidence. Cable,
charger impedance, inrush and bus sag must be measured. Catch diode model,
40 µF effective MLCC credit, input capacitance and parasitics are declared
engineering assumptions. A14's12,960-case conditional CCM screen includes
zero ceramic credit and remains applicable to unchanged compensation.
Low-load startup exercises the vendor Eco-mode model; sampled current does
not independently establish every physical DCM switching cycle.

The worst PWM capacitor model RMS is0.848 A. The exact Panasonic20 kHz
multiplier0.7 gives3.08 A at≤105°C and0.973 A at105–125°C, but the600 kHz
multiplier above the published range is unspecified. Mixed-frequency hot ripple
rating remains a measurement requirement. No guaranteed MLCC bias minimum
has been invented. Thermal loss allowances and required effective thermal
resistances for buck, diodes, inductor, eFuse, bridge, LDO and bleeder are
recorded per selection. They are layout/test requirements, not our board's
measured θJA.2 A continuous remains unqualified until temperature testing.

## Regeneration and reset

The eight exact10 Ω/2 W resistors form four parallel20 Ω branches:5 Ω nominal,
16 W sum of individual continuous ratings. This does not approve16 W
continuous board heat. At18 V worst bank power is approximately67.9 W;
per-resistor single-pulse screening is below the manufacturer two-second
single-overload limit, but repeated pulses, MOSFET switching/linear SOA and
hot layout are not established by that inequality.

Start supervised motor tests with total winding plus mechanical stored energy
≤1 mJ. Even without dump action,264 µF minimum reservoir at12.6 V rises only
to approximately12.90 V for1 mJ. Expand toward0.5 J/≤20 ms/≥10 s spacing
only after measuring clamp delay/peak, MOSFET gate/current/SOA and resistor
pulse temperatures.18 V is an expanded test ceiling, not a guaranteed clamp.
Do not externally power back-drive or use unknown motor inertia initially.
TVS protection is a transient backup, not steady braking regulation.

Foreground shutdown retains the established feedback branch until VM decays.
Reset/brownout instead force both selection GPIOs off, returning the buck to
5 V while hardware eFuse/nSLEEP defaults inhibit it. Charged-rail reset,
remaining EN/PG delay and the dump's changed reference must be scope-tested.
The capacitor's stored12.6→5 V energy is approximately0.022 J nominal, but
external back-drive is unbounded and excluded from initial operation.
5 V DRV8874 regulation accuracy is outside its characterized5.5 V minimum;
measure startup/stall/reversal current in5 V mode before granting that rating.

Primary sources: TI TPS54360/TPS16630/DRV8874/LM393/TL431 datasheets;
Panasonic exact35SVPK330M product/model; Fenghua RPL resistor overload drawing.
The untouched source files, simulations, declared assumptions and failed
historical screens are retained in `evidence/`. No physical results are claimed.
