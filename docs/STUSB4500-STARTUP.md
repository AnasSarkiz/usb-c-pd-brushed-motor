# A15 standby initialization and capability acquisition

2026-10-03. Hardware, BOM and supplier imports remain A11. The portable startup helper implements the manufacturer initialization operations and a checked standby SoftReset transaction. It does not enable the motor, validate NVM, establish fresh response provenance or produce a flashable STM32 image.

The target must physically inhibit the bridge and eFuse, invalidate all old negotiation records and serialize interrupt/event access before entering this helper. Adapter booleans describe those preconditions; they do not prove GPIO state. Start after a valid attachment; there is no automatic recovery or silent retry on errors.

## Checked transaction

| Step | Operation | Safety behavior |
|---|---|---|
| 1–3 | Read mask0x0C, mask documented controls0x72, verify them | Preserve reserved bits; only documented mask bits determine readback qualification. |
| 4 | Read ten bytes0x0D–0x16 | Retain raw startup events with a validity flag; never promote them to current Source_Capabilities/Accept/PS_RDY evidence. Reject persistent CC OVP/discharge faults and unattached/non-sink state. |
| 5–7 | Select one active RAM PDO at0x70 and verify | Preserve reserved upper count bits. Existing high-voltage contract is not assumed to disappear immediately. |
| 8–9 | Write/read PDO1 at0x85–0x88 | Exact fixed5 V/3 A profile, consistent with the existing request helper. PDO2/3 remain unchanged and inactive. |
| 10–11 | Write/read header0x000D at0x51–0x52 | Verify both bytes before SEND_COMMAND. |
| 12–13 | Unmask documented controls and verify | Port, monitoring, hardware-fault and protocol interrupts enabled; preserve unrelated mask bits. |
| 14–16 | Recheck attachment, alert summary and protocol status | Reject newly pending port/monitor/hardware/reset/BIST events. Drain only an old receive indication while previous provenance remains invalid. |
| 17 | Write0x26 to0x1A | Acknowledgement publishes only completed_acquisition_id. It is not a motor-power permission or a high-voltage request token. |

The new acquisition token is consumed before bus access. Every failure, ambiguous transfer, invalid precondition, reused/wrapped token, readback discrepancy or exceeded deadline clears completion and latches the state. Even a command that reached the controller without an acknowledgement must not be retried. A partial read may clear hardware events: snapshot_valid remains false unless the complete ten-byte read finishes within the deadline. Diagnostic bytes remain available but cannot establish current negotiation state. Masking interrupts does not stop the autonomous PD engine or prevent RX-buffer replacement.

The proposed whole-transaction limit is4 ms, checked around all17 operations with wrap-safe elapsed time. Transfer callbacks must enforce the absolute deadline internally. The approximately1.8 ms wire-time estimate at400 kHz excludes stretching, START/STOP and software overhead. No actual STM32 timing or interrupt latency is claimed. After command completion the target must immediately service new protocol events within the separate capture deadline; the current RX reader cannot reconstruct a missed or overwritten frame.

## Qualification boundaries

This helper addresses initial capability loss by initiating a new standby negotiation after startup cleanup. It must not treat an old RDO, VBUS value, startup reset acknowledgement or command completion as fresh Source_Capabilities. The target still needs a verified event owner and fresh response association, SOP behavior, generation handling, current RDO/PE/ADC checks, actual STM32 peripherals/startup/watchdog and NVM verification. No initial5 V/3 A request permits motor output; a source below that current can mismatch/reject and remains inhibited. Non-PD sources cannot qualify the motor.

The required manufacturing profile remains one standby PDO, POWER_ONLY_ABOVE_5V=1 and source-current flexibility disabled. RAM initialization does not replace that profile or its full readback. The withdrawn A1 JSON with three factory-like profiles is retained as historical evidence, not a current configuration. No binary NVM image is approved.

Current UM2650 has an internal discrepancy: its0x16 diagram labels a BIST indication while the accompanying prose calls the high field reserved. A15 conservatively rejects bit4 along with the documented reset and the previously recorded legacy bit1/7 guards. No reserved flag is used to enable power. The old ten-register snapshot is intentionally invalidated startup history; runtime alerts cannot be cleared using this startup path while power is allowed.

## Evidence

Host C11 Wall/Wextra/Werror harness:13,969 assertions, including all256 initial masks, all17 failed/late transfer positions, partial clearing/writes, all profile/header readback bytes, detached/non-sink state, persistent/new faults, old/new RX, timer wrap/future timestamps, missing callbacks, unsafe preconditions and token reuse/wrap. Configured suite:19 tests/369 expects; formatting and TypeScript pass. Startup compiles freestanding for Cortex-M0+; no linked firmware or live charger test is claimed. The unchanged A11 supplier/schematic checks and A12 numeric placement probe remain applicable; product placement/routing remain unstarted.

Primary sources: [current ST programming guide, UM2650 rev3](https://www.st.com/resource/en/user_manual/um2650-the-stusb4500-software-programing-guide-stmicroelectronics.pdf), sections1.2–1.6/1.11 and register descriptions; [official ST reference source](https://github.com/usb-c/STUSB4500/blob/master/Firmware/Project/Src/USB_PD_core.c), retained in evidence. Current-guide text was read through the official PDF; the prior local download failures and lack of a local rev3 visual review remain recorded. Earlier retained rev2 PDF/visual evidence is separate.
