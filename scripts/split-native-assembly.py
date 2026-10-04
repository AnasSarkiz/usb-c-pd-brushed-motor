"""Prepare assembly subsets from a native export of the checked routed artifact.

The original native ZIP and engineering BOM remain untouched. This is an
assembly operation list, not physical qualification or fabrication approval.
"""
import argparse
import csv
import hashlib
import json
from pathlib import Path
import zipfile
from assembly_packet import read_export_rows, split_assembly_rows, write_export_rows

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--native-zip', required=True)
parser.add_argument('--artifact', default='dist/index/circuit.json')
parser.add_argument('--routed-checks', default='evidence/native-routed-checks-A22.json')
parser.add_argument('--supplier-pnp-audit', default='evidence/supplier-pnp-audit-A22.json')
parser.add_argument('--engineering-bom', default='docs/BOM.csv')
parser.add_argument('--output', required=True)
arguments = parser.parse_args()
artifact = Path(arguments.artifact).read_bytes()
artifact_sha256 = hashlib.sha256(artifact).hexdigest()
checks = json.loads(Path(arguments.routed_checks).read_text())
if checks['artifactSha256'] != artifact_sha256 or checks['purchased'] != 140 or checks['traces'] <= 0 or checks['checks']:
    raise ValueError('Assembly files require the identical full routed artifact with zero native routing errors')
orientation = json.loads(Path(arguments.supplier_pnp_audit).read_text())
if orientation['artifactSha256'] != artifact_sha256 or orientation['referenceCount'] != 140 or orientation['automaticSupplierRotationsVerified'] is not True or orientation['automaticReferenceCount'] != 129:
    raise ValueError('Supplier orientation audit does not qualify this routed artifact')
engineering_bom_bytes = Path(arguments.engineering_bom).read_bytes()
engineering_rows = list(csv.DictReader(engineering_bom_bytes.decode().splitlines()))
supplier_by_reference = {}
for row in engineering_rows:
    references = row['References'].split(',')
    if len(references) != int(row['Quantity']):
        raise ValueError('Engineering BOM quantity mismatch')
    for reference in references:
        if reference in supplier_by_reference:
            raise ValueError('Duplicate engineering BOM reference')
        supplier_by_reference[reference] = row['JLCPCB_LCSC_Number']
if len(supplier_by_reference) != 140:
    raise ValueError('Expected all140 engineering BOM references')
export_zip = Path(arguments.native_zip).read_bytes()
with zipfile.ZipFile(arguments.native_zip) as archive:
    bom_csv = archive.read('bom.csv').decode('utf8')
    pnp_csv = archive.read('pick_and_place.csv').decode('utf8')
if hashlib.sha256(pnp_csv.encode()).hexdigest() != orientation['csvSha256']:
    raise ValueError('Native ZIP placement differs from the strict supplier orientation audit')
headers, bom_rows = read_export_rows(bom_csv)
for row in bom_rows:
    if row['JLCPCB Part #'] != supplier_by_reference.get(row['Designator']):
        raise ValueError('Native BOM supplier differs from the exact engineering part')
automatic_bom, manual_bom = split_assembly_rows(bom_rows, set(supplier_by_reference))
pnp_headers, pnp_rows = read_export_rows(pnp_csv)
automatic_pnp, manual_pnp = split_assembly_rows(pnp_rows, set(supplier_by_reference))
output = Path(arguments.output)
if output.exists():
    raise ValueError('Assembly destination exists; retain prior evidence and use a fresh revision directory')
output.mkdir(parents=True)
files = {
    'automatic-bom.csv': write_export_rows(headers, automatic_bom),
    'manual-install-bom.csv': write_export_rows(headers, manual_bom),
    'automatic-pick-and-place.csv': write_export_rows(pnp_headers, automatic_pnp),
    'manual-pick-and-place.csv': write_export_rows(pnp_headers, manual_pnp),
}
for name, serialized in files.items():
    (output / name).write_bytes(serialized.encode())
manifest = {
    'artifactSha256': artifact_sha256,
    'nativeZipSha256': hashlib.sha256(export_zip).hexdigest(),
    'engineeringBomSha256': hashlib.sha256(engineering_bom_bytes).hexdigest(),
    'automaticCount': len(automatic_bom),
    'manualInstallCount': len(manual_bom),
    'manualReferences': [row['Designator'] for row in manual_bom],
    'sourceRowsUnchanged': True,
    'nativeZipAndEngineeringBomUnmodified': True,
    'assemblyProcess': 'docs/ASSEMBLY-PROCESS-A22.md; C18/RV1/SW1/J2/TP1..TP7 manual; USB stakes manual after SMT',
    'files': {name: hashlib.sha256(serialized.encode()).hexdigest() for name, serialized in files.items()},
    'status': 'Assembly subsets only; all manufacturing checks and CAM approval remain separate requirements',
}
(output / 'assembly-manifest.json').write_text(json.dumps(manifest, indent=2) + '\n')
print(json.dumps(manifest, indent=2))
