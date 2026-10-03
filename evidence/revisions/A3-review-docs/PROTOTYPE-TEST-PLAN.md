# Motor-controller validation matrix

A2 review, 2026-10-02. **No physical tests have been performed.** This plan adds the requested cases; calculations and datasheet review are separately identified. Do not energize the current unapproved schematic. Use the eventual validated revision, programmed PD configuration and declared motor/load envelope.

## Setup and evidence

Record motor model and rated voltage, cold/hot winding resistance, inductance, no-load/startup/stall current, load inertia and external back-driving conditions. Use a PD analyzer/source emulator, current-limited bench setup, differential motor/VM probes, current probe, thermocouples and guarded load fixture. Never ground an oscilloscope lead to a motor terminal. Log board revision, cable/source capabilities, settings, captures, temperatures and fault results.

The provisional screening assumptions are 2 A continuous, 2.4 A peak, 0–40°C ambient and 125°C target junction temperature. They are not measured operating ratings. Exact permitted peak duration and rotor energy must be established before interpreting a test as a pass.

| Case | Required observation / acceptance basis | Current status |
|---|---|---|
| Voltage selection | Verify 5/9/12 V at no-load and full load; check default, missing shunt and invalid multiple selections. An invalid setting must not enable an overvoltage motor rail. Labels and assembly must make the setting unambiguous. | Nominal divider calculations pass; selector and invalid-state protection unimplemented. |
| Adequate PD | Verify selected rail requests/accepts a qualified contract, matching advertised voltage AND current. Check 15 V and 20 V sources individually and together. Verify controller's actual RDO/current limit, not just VBUS voltage. | A2 policy calculations pass; hardware arbitration unresolved. |
| Insufficient PD / non-PD | Test 5 V-only, 9/12 V-only, insufficient 15/20 V current, failed negotiation, charger foldback and weak/long cable. Motor remains disabled; no sustained undervoltage operation. | Analytical qualification tested; no physical evidence. |
| USB unplug/replug | Test unplug while OFF and loaded in either direction; short and long replug, hard reset and PD renegotiation. Capture eFuse, buck, nSLEEP, VM and outputs. No stale power-good signal may keep the motor path enabled. Define whether replug requires OFF re-arming; do not imply an interlock exists before it is implemented. | VBUS_EN_SNK/detach behavior reviewed; restart/arming policy incomplete. |
| OFF → FWD | At minimum/mid/max PWM, cold and hot motor, verify commanded polarity, current limit, supply droop and correct indicator. No bridge drive before qualified power and regulated rail. | Datasheet truth table reviewed; untested. |
| OFF → REV | Same checks for opposite polarity and REV indicator. | Datasheet truth table reviewed; untested. |
| FWD → REV | First test only after coasting to rest. Then characterize guarded direct transition at bounded speed/load. Measure current overshoot, braking energy, VM rise, protection and switch bounce. Do not approve arbitrary running reversal from an OFF-to-direction test. | First-order example shows up to twice unrestricted startup demand; safe running-reversal envelope unresolved. |
| REV → FWD | Repeat with reverse initial direction, maximum declared inertia and hot winding. | Untested. |
| Startup current | Capture current/time for each voltage at minimum/mid/max knob settings and worst declared mechanical load. Motor must start within the approved peak duration without charger/eFuse collapse or repeated retries. | Motor-specific data missing; no startup guarantee. |
| Stall/current limit | With a guarded, time-limited stall, characterize chopping threshold and overshoot at each rail and temperature. Verify dissipation and restart behavior. End the test at the declared thermal/energy limit; OCP is not the normal regulating threshold. | Nominal 2.222 A reviewed; 5 V accuracy and measured tolerances pending. |
| Regulator current/thermal | Full continuous load and bounded peak in every rail/contract mode; measure buck IC, catch diode, inductor, eFuse, LDOs and bridge temperatures. Verify input-capacitance DC bias, output ripple, stability and actual junction estimates against the design target. | Inductor screening passes under stated assumptions; loop/thermal tests unperformed. |
| Dead time / shoot-through | Scope bridge transitions in both directions, including bounce and overlapping commands. Separate reverse-polarity current from supply shoot-through. Compare timing and current spikes with manufacturer limits. | TI documents internal dead-time generation and 100 ns typical dead time; no physical confirmation or guaranteed external coast interval. |
| Braking / regeneration | Test commanded brake states, current-chop decay, turning OFF under load and declared external back-drive. Measure VM peaks, absorbed energy, clamp/dump waveforms and resistor/TVS temperatures. No component may exceed its pulse/absolute limits; no sustained back-drive rating without sustained-energy proof. | Capacitor/rotor screening shows why energy protection cannot be deleted blindly; hardware untested. |

## Control-state basis

[DRV8874 PWM mode](https://www.ti.com/lit/ds/symlink/drv8874.pdf), PMODE high: IN1/IN2=00 coasts, 10 drives forward, 01 drives reverse, and 11 brakes through the low-side devices. nSLEEP=0 makes the bridge Hi-Z. The SP3T must assert exactly one outer logic command, with the center throw unused and both commands pulled low in OFF. Manufacturer non-shorting timing helps avoid overlap but does not guarantee a mechanical stopping interval. The integrated driver generates MOSFET dead time; it is not an external reversal controller.

Reject a prototype that only passes netlist/build or no-load spin tests. Physical stage 7 remains not started until dated measurements are recorded for the declared conditions.
