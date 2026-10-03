# A10 current warning status

The A2 record below is historical. Current active-board metadata acceptance is per exact diagnostic signature, supplier source hash, reference and reviewed connection map in evidence/main-warning-review-A7.json. The A10 strict schematic audit matches all 84 active raw advisories to that ledger and rejects new/stale/unreviewed diagnostics; no warning is hidden. Active switch electrical-pin failures recorded at A2 have been replaced and independently revalidated. Additional schematic text supplies readable reference labels without editing imported symbols. Naming/classification and pin-annotation advisories are accepted only within their recorded datasheet/connection proof, not as footprint or power approval.

The active C178373 network-enabled probe build has no diagnostics. Unused A10 capacitor-probe advisories remain raw and unapproved; they do not inherit active-board acceptance. A positive-size paste aperture passing schema is not evidence that a THT stencil process is correct. See OUTPUT-CAPACITOR-REVIEW.md for the C133439 process blocker and remaining mechanical/ripple reviews. Native probe checks do not complete product placement or manufacturing review.

---

# A2 historical warning review

2026-10-02. The user permits warnings to be accepted only when explicitly proven harmless. No checks or warning rendering have been disabled, and no imported definitions were edited.

## Accepted naming advisories, with limited scope

Nine A1 `source_refdes_convention_warning` messages refer to J1/J3/J2, Q1/Q2/Q3/Q4/Q5 and RV1. The official imports classify their enclosing element as `simple_chip`, although their manufacturer identities are connectors, transistors and a potentiometer. Conventional J/Q/RV names correctly identify those physical parts.

The installed core's `NormalComponent_doInitialCheckRefDesConvention` only compares a prefix with component type and inserts a warning. It does not change ports, connectivity, supplier identity or geometry. The product's independent pin-coverage audit confirms every required source and schematic pin for these nine references; the missing-port failures belong to the switches. `evidence/refdes-warning-review-A2.json` records exact supplier identities and messages.

These nine warnings are therefore accepted **only as naming advisories**. The decision is not a claim that all footprints, thermal behavior or electrical connections are approved. Renaming physical transistors to U or connectors to U would reduce useful identification without correcting the importer classification.

## Unresolved warnings

- Eleven missing-reference-label warnings remain actionable: D1, D2, Q1, RV1, U8, Q2, Q3, Q4, Q5, D10 and D11. An unlabeled symbol cannot be treated as fully readable merely because a separate manifest identifies it. No custom label was inserted inside a supplier symbol.
- Forty-five pin-specification warnings remain unapproved. Some power-pin requirements are inapplicable to passive devices, but powered ICs U2/U3/U4/U10 also lack the required annotations. Per-pin datasheet/connectivity proof has not been completed for every affected model; no blanket passive-device waiver applies.
- Two custom TVS orientation suggestions remain. Complete port geometry and readable rail direction must be validated before acceptance.
- Switch pins 3/4 missing from C160871/C221831 are real functional omissions, not warning-only metadata issues. They remain stage-2 blockers regardless of build exit status.

None of the placement prerequisites is relaxed by this review. See VALIDATION.md for the complete gate ledger.
