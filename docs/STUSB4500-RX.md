# A12 bounded PD receive capture

2026-10-03. Hardware schematic and BOM remain A11 (129 components /55 supplier codes). This implementation is an independently tested portable receive module, not a complete STM32 port, negotiation transaction or motor-enable implementation.

## Supported operations and invariants

firmware/stusb4500_rx.c reads PRT_STATUS (0x16), then a contiguous 31-byte burst from 0x30 through 0x4E, checks its prefix again and rechecks PRT_STATUS. Little-endian decoding retains the original source PDO order, so the policy's source-object position remains the actual RDO object index. Only Source_Capabilities data messages populate the PDO array. Control messages cannot reinterpret old object bytes as capabilities. Extended messages, PD1/reserved revisions, wrong source-role headers, malformed data lengths, reset/error indications, read failures and late/changed captures return explicit errors and leave the output zeroed.

UM2650 rev2 §1.9 describes RX buffer replacement on every incoming message and §3.17 marks PRT_STATUS read-to-clear. A new receive flag during capture invalidates even an identical header. A second prefix read detects changed count/header bytes. These guards do not establish atomic RX access: actual buffer/flag ordering and I2C timing still require hardware qualification. The module never publishes fresh_ps_rdy or a request token, writes a PDO, changes feedback, or enables the motor rail.

The official ST reference's ALARM_MANAGEMENT checks RX_BYTE_CNT only for data messages. Its control-message reset behavior is unspecified in UM2650. Therefore zero-object controls accept a retained count byte while keeping all PDO words zero. Source-capability data still require count=4×NDO. A regression uses the old 28-byte count and seven stale object words for every control kind.

The proposed deadline is 2.5 ms from the original ALERT timestamp, with wrap-safe unsigned elapsed-time checks before/after bus operations. ST's reference warns of approximately 3 ms before Accept overwrites Source_Capabilities; this is not a guaranteed hardware timing bound. Each peripheral transfer must enforce the same absolute deadline internally and reject partial/NACK/arbitration/timeout transactions. The mock deliberately also tests an adapter that overruns its deadline, ensuring output rejection. Four reads carry 36 returned bytes plus approximately12 address/register byte slots: about1.08 ms nominal at400kHz, before interrupt/driver/stretch overhead. Bus capacitance/rise time and total worst latency remain unmeasured; polling once per millisecond alone cannot establish this bound.

## Manufacturer discrepancies retained

The older public register map and UM2650 reserve0x17 and0x30, while ST's reference header names PHY_STATUS/SOP_RX_Type and RX_BYTE_CNT. The reference actively uses0x30 and validates its count; the contiguous receive helper follows that reference. No encoded SOP_RX_Type values were found in the primary material. The code does not guess an encoding or read0x17. Source-role header validation is not proof of SOP provenance, and the target adapter must establish that routing before passing events to negotiation qualification.

PRT_STATUS bit0 hardware-reset-received and bit2 message-received are documented. Bits1/7 are named hardware-reset-done/TX-error in the reference header but reserved in UM2650. This module conservatively rejects them and records that discrepancy; their exact semantics/reset behavior are not qualified. The guide's bit4 BIST drawing and its[7:3] reserved prose also differ. No undocumented field is used to enable power. Hardware initialization and observed register behavior must resolve these discrepancies before the MCU port is approved.

## Checks and remaining integration

The C harness passes531 assertions, covering seven-word endian/index decoding, policy selection for all voltage modes, stale control payloads, I2C failure in all four reads, prefix changes, a new receive with identical header, reset/error during capture, malformed/unsupported headers, no-message handling, deadline expiry at each operation, future ALERT timestamps, timer wrap and invalid arguments. Host compilation uses C11 with Wall/Wextra/Werror; the module separately compiles freestanding for Cortex-M0+. The configured board suite passes17 tests/363 expects. Simulated registers and target object compilation do not prove live capture, linked firmware or charger negotiation.

Still required: STM32 startup/clocks/GPIO/ADC/I2C/watchdog, verified ST NVM setup and ALERT clearing, attached/reset/capability generation, bounded RAM-PDO programming/readback, fresh request/Accept/PS_RDY provenance, matching RDO/PE-ready/ADC observations and GPIO command ordering. Header message IDs are only three bits and may wrap; they must never substitute for the monotonically assigned request token. A captured PS_RDY alone is insufficient to enable HOST_ALLOW. Disconnect/reset/I2C/deadline failures must inhibit first, then explicitly restart qualification. No timed motor reversal or software PWM is introduced.

Primary sources, retrieved2026-10-03:

- [ST official firmware, USB_PD_core.c](https://github.com/usb-c/STUSB4500/blob/master/Firmware/Project/Src/USB_PD_core.c): ALARM_MANAGEMENT, approximately3ms warning and RX count check; retained earlier source in evidence/STUSB4500-reference-A7.c.
- [ST UM2650 rev2 programming guide](https://github.com/usb-c/STUSB4500/blob/master/Doc/User_manuals/um2650-the-stusb4500-software-programing-guide-stmicroelectronics_v2.pdf): initialization§1.2, receive§1.9, register map§2 and PRT_STATUS§3.17. PDF/text and visually inspected pages5/22 retained as STUSB4500-programming-guide-A12 and associated PNGs.
- [ST public register map](https://github.com/usb-c/STUSB4500/blob/master/Firmware/Doc/STUSB45%20Register%20Map%20-%20Public.pdf): retained PDF/text, discrepancies above recorded rather than silently assuming unsupported fields.

Routing and product placement remain disabled. All unchanged A11 electrical/import/geometry evidence remains applicable; this module does not close the power, assembly or full-firmware gates.
