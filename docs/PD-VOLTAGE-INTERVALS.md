# PD voltage uncertainty integration — A21

PD policy and power sequencing now require valid, outward-rounded physical voltage intervals for both VBUS and VM. The former scalar vbus_mv/motor_rail_mv fields are removed; there is no compatibility fallback that silently treats a raw count or midpoint as exact. All production callers must use the new interface.

## Qualification behavior

An interval is valid only when its explicit validity flag is set and lower_mv≤upper_mv. A contract requires the entire VBUS interval inside95–105% of the selected15/20 V PDO, in addition to the existing generation, fresh PS_RDY, PE state, exact RDO/source-current and power-budget checks. An operating motor additionally requires the entire VM interval inside95–105% of selected5/9/12 V.64-bit products prevent unsigned32-bit overflow from turning extreme malformed voltages into passing limits.

Every active sequence state rejects invalid or reversed intervals immediately, commands both software permissions off and retains the current feedback branch. DECAY may change feedback only when VM upper_mv≤1000 mV; an acceptable midpoint is insufficient. The same upper bound is required during FEEDBACK and now during REQUEST and CONTRACT. A back-driven motor raising VM while the PD request is pending aborts before granting HOST_ALLOW. No timed reversal circuit or MCU direction control is added.

During RAIL, an interval whose lower bound is below the allowed minimum cannot accumulate the10 ms stability window. An upper bound exceeding the allowed maximum faults immediately. WAKE/READY revoke permission on any interval that leaves the complete motor window. The proposed5 ms freshness/scheduling, wake grace, token ownership and other sequence rules remain unchanged.

## Measurement boundary

A20 raw ADC valid means conversions completed coherently; it does not mean physical voltage uncertainty has been bounded. A future adapter must include calibrated ADC/reference error, divider tolerance/TCR/endurance, leakage, supply/noise, external-filter lag and sample skew. It must set the interval valid flag only under its qualified operating conditions, invalidate on brownout/reset and preserve the oldest rail sample timestamp. It must not stamp completion time onto older filtered evidence to bypass freshness.

No actual adapter, approved accuracy profile, target timebase or flashable owner is supplied by this step. A19 static-screen intervals remain conditional examples, not physical measurements or blanket lifetime bounds. Host test fixtures explicitly synthesize point intervals for historical transport/state regressions and nonzero intervals for new boundary tests. This is not a production route from unqualified raw ADC data to motor enable.

## Validation

The new host test sweeps all0..65535 mV lower and upper motor endpoints for each5/9/12 V selection; it checks exact inclusive boundaries, midpoint traps, invalid/reversed intervals, extreme UINT32_MAX ranges, full VBUS bounds, conditional A19 screens, all active sequence states and back-drive during the request/contract wait. Existing malformed-source/RDO/freshness/current and sequencing tests continue to pass. Strict target-object compilation, configured formatting/TypeScript/tests and the power report are rerun.

Hardware, BOM, imports and official dependencies remain A19. No new board build or visual/model/stock review is claimed; hash-bound A19 schematic and full unplaced-board findings remain applicable. Product placement and routing stay disabled. No physical ADC/charger/motor evidence is implied.
