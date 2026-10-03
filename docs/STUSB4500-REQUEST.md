# A13 verified RAM profile-write transaction

2026-10-03. Hardware/BOM remain A11. firmware/stusb4500_request.c implements one bounded RAM-PDO write/readback and SoftReset SEND_COMMAND transaction. It does not establish a contract, create fresh_ps_rdy, enable motor power or program NVM. The STM32 peripheral and fresh-response integration remain incomplete.

## Transaction behavior

The caller must supply a valid voltage-aware plan, matching source generation and selector, a new nonzero request token and explicit safe-state preconditions. Power-path inhibition, bridge inhibition and settled feedback flags are adapter inputs; they are not proof that physical GPIOs or VM are safe. The target must perform and verify ordering before calling this module. Only the existing policy's qualified 15/20 V, 3 A plans are accepted. A 5 V-only or insufficient source has no valid plan and cannot reach bus writes.

The transaction follows these manufacturer register operations:

| Operation | Register | Guard |
|---|---|---|
| Check attached sink state | 0x0E | ATTACH set, POWER_MODE zero |
| Read/temporarily select standby PDO1 | 0x70 | Count bits2:0 become1; reserved read-only upper bits preserved; readback exact |
| Write/read the first two RAM PDOs | 0x85–0x8C | Mandatory fixed5 V/3 A PDO1 plus chosen15/20 V/3 A PDO2, little-endian; every byte checked |
| Activate exactly two profiles | 0x70 | Count2 checked; old PDO3 remains untouched and inactive |
| Write/read SoftReset header | 0x51–0x52 | Exact0x000D as in ST reference; no stale high header byte |
| Recheck attachment and pending alarms | 0x0E,0x0B,0x16 | Detach/port/reset/monitor/hardware events abort; old RX indication drained before command |
| Send SoftReset | 0x1A | Exact0x26; acknowledge before publishing completed_request_id |

UM2650 rev2 §1.3–1.6 documents RAM profile replacement and SoftReset renegotiation; §3.60 defines the three-bit count. Count1 is temporary programming containment, not proof that an existing high-voltage contract has reverted to5 V. Only a new negotiation changes the contract. Motor power remains inhibited throughout. The code never depends on a native12 V source PDO.

Request tokens are consumed before the first transfer. Every bus failure, deadline violation, unsafe condition, readback mismatch or ambiguous command latches the transport state and clears completion. The function does not retry. A SEND_COMMAND may reach the controller even when its acknowledgement fails: that token must never be retried and any resulting response must not qualify power. Explicit recovery requires inhibition and reset of negotiation provenance; merely incrementing the token does not clear the fault. Reusing or wrapping a token is rejected.

The proposed whole-transaction deadline is4 ms, below the sequencer's5 ms observation-gap ceiling; every callback receives the same absolute deadline and the helper checks elapsed time before/after it. It still requires a monotonic timer, internal peripheral timeout and measured interrupt/ADC scheduling. The 14 transfers require approximately1.5 ms wire time at400 kHz before stretching/software overhead. A late final command may already have been transmitted, so timeout still clears completion and latches inhibition. No physical latency is claimed.

## Fresh negotiation remains a separate gate

completed_request_id proves only checked RAM and successful command acknowledgement. command_started_us is only a lower timestamp bound. Neither is PS_RDY, source identity or contract evidence. The target must capture and validate a fresh Source_Capabilities/Accept/PS_RDY sequence after this request, maintain attach/capability/reset generation, verify SOP routing, and match RDO/PE_SNK_READY/actual VBUS against the plan before passing freshness to pd_sequence. A three-bit PD header message ID is not the monotonically assigned token. Old PS_RDY or RDO values are never sufficient.

The reader drains old receive status immediately before SEND_COMMAND. The higher-level adapter must serialize that drain with interrupt/event ownership, clear stale software events, and reject any pending capability-generation change. Incoming Source_Capabilities while profiles are being changed must never qualify the later request. Reading an alarm consumes it, so an error must invalidate provenance and trigger explicit recovery rather than continuing with old status. These application operations are not yet implemented.

UM2650 reserves ALERT bits7/3 and protocol bits1/7 that the legacy reference names hard-reset/type-C and reset-done/TX-error. Their rejection is conservative, following the existing receive guards; exact semantics remain unqualified. Documented port/monitor/hardware alert bits6/5/4 are rejected. No reserved field or alarm is used to enable power. NVM-only standby/current-flexibility/power-output settings and their verification remain open; this RAM helper does not replace provisioning.

## Validation evidence

The host C11 Wall/Wextra/Werror harness passes969 assertions: all three voltage-mode plans, little-endian PDO values, inactive old PDO3, both count readbacks, all eight profile bytes, both header bytes, failed transfers at all14 operations, ambiguous writes including a command that actually reaches the controller, detach at both attachment checks, alarm/reset cases, late transfers at every operation, timer wrap/future start time, unsafe selector/generation/GPIO preconditions, missing callbacks and token reuse/wrap. All failures clear completion and prevent implicit retry. Receive harness still passes531 assertions with the expanded bus interface.

Both modules compile freestanding for Cortex-M0+. Configured board checks pass18 tests/366 expects. These are simulated register/flow checks and target objects, not live charger negotiation, GPIO response, NVM programming or a linked/flashable image. Hardware/import/BOM sources are unchanged from A11, and product placement/routing remain disabled.

Primary manufacturer evidence: [UM2650 rev2](https://github.com/usb-c/STUSB4500/blob/master/Doc/User_manuals/um2650-the-stusb4500-software-programing-guide-stmicroelectronics_v2.pdf), retained as evidence/STUSB4500-programming-guide-A12.pdf/text, with pages3/39 visually inspected and retained as A13 PNGs. [Official ST reference](https://github.com/usb-c/STUSB4500/blob/master/Firmware/Project/Src/USB_PD_core.c), retained earlier, independently confirms PDO addresses/count and two-byte SoftReset header followed by SEND_COMMAND. Source hashes and logs identify the checked revision.
