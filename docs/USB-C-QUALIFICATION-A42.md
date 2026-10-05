# A45 current status

C5184243 GCT USB4105-GF-A-120 replaces C165948. Manufacturer48VDC/5A
rating resolves the21V input-budget uncertainty. User-authorized SMT X-only
translations preserve land sizes/pins and pass0.20mm clearance. Complete
schematic/placement checks pass; routing stays disabled. CAD is reviewed for
orientation and the manufacturer drawing governs precise fit; shell-slot
stencil/assembly and physical tests remain pending. See
[USB-C-REPLACEMENT-A45.md](USB-C-REPLACEMENT-A45.md).

Earlier A44/A42 records below are historical.

# A44 current status

The user authorized manual movement of individual USB-C SMT pads. C165948 now
has a locally adjusted supplier footprint; original source/hash and every shift
are preserved. Current full-board copper, native connectivity/schema/placement,
supplier electrical/pad-transform checks and43 tests pass. Minimum source gap
is0.20005mm, with zero full-board clearance issues. The original revision42
results below are historical and do not describe the corrected gap geometry.

The manufacturer drawing rates C165948 at20V, while the worst-case PD input
budget is21V. This separate voltage qualification remains blocked, and both
routing controls stay disabled. See docs/USB-C-PAD-CORRECTION-A44.md and current
VALIDATION.md. GitHub main is now public at
https://github.com/AnasSarkiz/usb-c-pd-brushed-motor; the tscircuit package is
public. New step receipts verify their exact source/artifact/version.

# USB-C supplier qualification — revision42 WIP

The active connector is still C165948. Its orientation passes the actual
native 3D review, but five imported copper gaps fail the required0.20mm
clearance. Revision42 remains unrouted. No fabrication package is approved.

The current artifact has140 purchased components and152 PCB components.
Increasing native pour clearance to0.23mm removes138 measured pour-spacing
violations without changing the0.20mm acceptance rule. The five connector
violations remain visible. The new routing entry point first reruns official
electrical ownership and strict physical copper checks, and then requires
current hash-bound independent and native prerequisite results. Its actual
failed run leaves the artifact unchanged and starts no router.

Candidate disposition is recorded individually in
`evidence/usb-c-*-candidate-status-A42.json`. These are screening results,
not full component approvals. Successfully importing a symbol is insufficient.

| Candidate | Result preventing adoption |
| --- | --- |
| C3197922 Molex2171750001 | VBUS land width differs from the manufacturer recommended pattern beyond its drawing allowance; unchanged import retained. |
| C5246813 GCTUSB4125-GF-A-0190 | Imported pattern similarly differs from the GCT recommended VBUS land width. |
| C5438410 GCTUSB4135-GF-A | Both importer searches fail; actual JLC library preview states that no library currently exists. |
| C45082808 CUIUJC-H-G-SMT-P6-TR | Supplier-code import fails. Manufacturer-name query returns unrelated C42459724 and is rejected. |
| C5407555 Amphenol10164359-00011LF | Supplier-code import fails. Manufacturer-name query returns unrelated C4550712 and is rejected. Manufacturer page30V rating differs from the linked older20V family specification. |
| C52989298 HOAUC HYCW376-USBC06-750B | Exact-code import fails. Actual JLC listing has20 stock/order20; reviewed manufacturer drawing rates30V but specifies0.8–1.0mm PCB rather than1.6mm. |
| C5414498 Amphenol10165429-00011LF | Exact supplier-code import fails. |
| C54829840 YUWENFAPTCFW-H22D-019 | Exact supplier-code import fails. |
| C970566 HROTYPE-C-31-E-07 | Native copper screen passes, but recommended mounting lands differ; midmount edge cutout and DC working-voltage evidence remain unqualified. |
| C961732 HROTYPE-C-31-E-06 | Midmount fit, DC rating and power-contact current grouping remain unqualified. |
| C2830802 Würth632723300011 | Updated manufacturer drawing confirms48VDC/5A and1.6mm fit, but imported fine-pad spacing is below0.20mm. JLC stock77/order67 observed. |
| C2689970 HROTYPE-C-31-M-30 | Malformed electrical contact labels plus sub-rule fine-pad spacing. |
| C53207146 BXCONNTYPE-C-24P-SMD | Imported fine-pad spacing is below0.20mm. |
| C134092 Molex1054500101 | Imported fine-pad spacing is below0.20mm. |
| C3197684 Molex2171790001 | Imported fine-pad spacing is below0.20mm; remaining mechanical review incomplete. |
| C3445864 GCTUSB4120-03-C | Manufacturer confirms vertical top entry, incompatible with edge-facing cable access. |
| C456014 SHOUHANBF90 | Actual catalog/import/PDF identify USB Type-B; stale search-result title suggested Type-C. Rejected. |

No supplier definition, pin mapping or footprint is patched. No spacing rule
is reduced, and no failed candidate is hidden. Rejected unrelated imports are
retained as evidence text rather than board components. Inactive candidates
do not change the active BOM or circuit connections.

A proper next qualification result must establish exact part identity,
stock and assembly eligibility, PD voltage/current rating, mechanical fit,
pin/pad correspondence, valid native schema, absence of THT paste, and actual
foreign-copper spacing. A new connector requires a fresh full-board 3D export
and visual review; another model's CAD rotation offset cannot be assumed.

Primary sources inspected include the
[Würth drawing](https://www.we-online.com/components/products/datasheet/632723300011.pdf),
[Amphenol product page](https://www.amphenol-cs.com/product/1016435900011lf.html),
[its linked family specification](https://cdn.amphenol-cs.com/media/wysiwyg/files/documentation/gs-12-1351.pdf),
and [GCT USB4120](https://gct.co/connector/usb4120). The prior supplier audit
records and manufacturer PDFs remain available; historical ratings are not
treated as permanent blockers when current manufacturer evidence supersedes them.

External release status is separate: the authenticated GitHub connector is
AnasSarkiz, but this repository has no remote and the focused board-repository
search finds no destination. The existing tscircuit package is public; the
prior upload failed and a current public release has not yet been verified.
There is no hardware qualification or fabrication order.
