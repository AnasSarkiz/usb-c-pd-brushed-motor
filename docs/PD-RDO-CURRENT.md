# A17 source and operating-current qualification

2026-10-03. Hardware/BOM/imports remain A11. The portable plan now retains the exact selected source PDO, so contract qualification can distinguish requested operating current from the controller's maximum-current field. This corrects a compatibility defect for adequate sources above3 A and adds malformed-RDO rejection.

The current STUSB4500 datasheet, DS12499 rev8 §3.3.2/3.3.3 and Table9, defines a matched RDO with sink operating current and source maximum current. With the required REQ_SRC_CURRENT=0, a20 V/5 A source matching our20 V/3 A sink profile produces3 A operating and5 A maximum. The prior policy required3 A in both fields and would leave such a source inhibited. A higher maximum does not increase the operating request or the board's eFuse/motor current settings.

The fixed high-profile acceptance range is3–5 A, within the controller/USB-C scope. Plan validation checks the exact selected source word's fixed type, voltage and current range; a malformed first5 V PDO or over5 A advertisement is rejected. Native12 V/PPS/variable/battery support is not added.15 V remains preferred when the existing power screen fits;12 V peak mode requires20 V. Input/motor assumptions, hardware current limits and the narrow9 V/15 V margin are unchanged.

Qualification requires3 A operating current and maximum current exactly matching the selected source PDO. It still requires matching object/generation, fresh PS_RDY, ready policy engine and actual VBUS; those provenance/measurement inputs are not inferred here. Reserved RDO31/23:20, mismatch and GiveBack are rejected. Communication/NoSuspend flags do not alter current qualification. The host engineering reports now expose requestedOperatingCurrentA and expectedMaximumCurrentA separately and reject malformed/over5 A currents.

Internal portable APIs use named capability/rail structures with at most two arguments; all board-local callers and tests are updated. This unpublished prototype has no linked external firmware interface. No backward-compatibility shim or transport fallback is supplied. The request transaction still programs exactly3 A in the sink PDO for a5 A source.

## Evidence

The retained A16 baseline harness/binary exits1 with six discrepancies: adequate5 A source inhibited and five reserved RDO bits accepted. It was compiled against A16 before changes; the historical harness intentionally retains the old API signature. Reproduction source revision is ad7406b01ca18132bc09a3556319074530fb4906. No failure log is deleted or suppressed.

The current policy harness passes60,202 assertions: every10-bit source-current field for each motor mode and15/20 V; all10-bit operating/maximum-current fields on representative3/3.01/4.5/5 A sources; reserved/mismatch/GiveBack flags; selected-source voltage/type; malformed first profile, null snapshots and missing rail inputs. The original fault/current/voltage tests remain. Maximum-current and reserved-bit checks are exercised independently, including3 A sources, so one rejection does not hide another.

The sequence harness passes11,518 assertions, including complete simulated startup for all three motor modes with a20 V/5 A source and immediate inhibition on a changed maximum field. The request harness passes1,037 assertions and confirms3 A sink writes for5 A advertisements. Initial suite failure was an incomplete manually constructed test plan missing the new source_pdo field; the fixture now includes its actual15 V/3 A advertisement, retaining the original unsafe12 V/15 V rejection and valid9 V/15 V timeout check. The failed log is retained separately.

Configured formatting, TypeScript and22 tests/382 expects pass. All six portable modules compile freestanding for Cortex-M0+; power-report runs successfully. No live charger, linked firmware, hardware test or product placement/routing is claimed. Hardware/BOM/dependencies are unchanged, so prior electrical/import/schematic evidence remains applicable; all remaining NVM/fresh-response/STM32/power/assembly gates persist.

Primary references: [current STUSB4500 datasheet](https://www.st.com/resource/en/datasheet/stusb4500.pdf), §3.3.2/3.3.3/Table9; [current ST programming guide](https://www.st.com/resource/en/user_manual/um2650-the-stusb4500-software-programing-guide-stmicroelectronics.pdf), fixed RDO field table. Current documents were read via their official PDF text; no new local PDF visual review is claimed.
