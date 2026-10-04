# A22 implementation checklist — in progress

The intended endpoint is a routed prototype and reviewed fabrication package.
This checklist records remaining work; it does not grant routing or fabrication approval.

- [x] Update tscircuit to 0.0.2743 and recheck supplier imports.
- [x] Fix native mounting-hole and board-label associations in core source; preserve strict schemas.
- [x] Add typed board assembly intent for plated-hole paste; preserve SMT paste and original models.
- [x] Build/test core and props source fixes; install reproducible tarballs consistently for transitive consumers.
- [x] Reconcile 140 components / 58 exact supplier codes; add seven supplier-backed programming/measurement contacts.
- [x] Correct input-current margin with validated C23215 / 6.98 kΩ and conservative PD policy.
- [x] Expand regenerative bank to four parallel 20 Ω branches; implement component tolerance/derating/pulse screens.
- [x] Implement actual sequencer GPIO outputs with inhibition, readback and feedback-state protection.
- [x] Rearm ADC after idle; exercise stale flags, stuck state, lost writes and rollover.
- [x] Revalidate functional capacitor/compensation/feedback placement and artwork: all5 native checks, full artifact audits,163 labels and both-face/all8-sheet visual review pass.
- [x] Complete current 58-part import audit, all eight A4 sheet reviews and metadata warning reconciliation.
- [x] Close C18 terminal/land/process envelope; define hand-solder assembly instructions.
- [x] Close converter transient/DCM/thermal/MLCC/ripple-sharing and regenerative energy envelope.
- [x] Implement qualified timestamped ADC intervals; justify clock/accuracy/reference/filter assumptions.
- [x] Implement bounded target I2C, timebase, clock, watchdog, startup/vector/linker and serialized runtime.
- [x] Link ELF/BIN, measure flash/RAM, and run integrated fault regressions.
- [ ] Establish documented fresh PD-message provenance ; independently manufacturer-approved40-byte NVM and measured RX-path approval remain external bring-up dependencies.
- [x] Pass fresh complete-board prerequisite checks with physical pad ownership,2 mm PD fanout margin and unchanged supplier models.
- [x] Finish canonical fanout drill/corner regression suite; integrate validated source-built core2086/fanout82 and checksum-verified Bun1.4.2.
- [ ] Complete native routing and pours; measure actual geometry/current paths.
- [ ] Run routed strict checks, shorts, snapshots and visual copper review.
- [ ] Generate and review Gerber/drill/BOM/PnP outputs bound to exact source/firmware/dependency hashes.
- [ ] Commit and publish each validated milestone to known destinations; continue implementation afterward.

Potential external dependencies to exhaust: manufacturer NVM export tool and undocumented
PD response provenance. No unsupported bytes or SOP encodings have been invented.
Physical ADC/noise/thermal/stall/reversal measurements remain pending prototype tests.
The task repository has no GitHub remote; local work continues without inventing one.
