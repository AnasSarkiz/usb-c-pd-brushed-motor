"""Intentionally update cloud context bindings after reviewing source changes."""
import argparse
import hashlib
import json
from pathlib import Path

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--revision')
parser.add_argument('--source-baseline')
parser.add_argument('--additional-root', type=Path, action='append', default=[])
parser.add_argument('--additional-glob', action='append', default=[])
options = parser.parse_args()

roots = ['.github', '.agents', 'circuit', 'checks', 'docs', 'firmware', 'imports', 'scripts', 'tests']
paths = {Path(name) for name in ['AGENTS.md', 'README.md', 'VALIDATION.md', 'package.json', 'bun.lock', 'biome.json', 'tsconfig.json', 'tscircuit.config.json', 'index.circuit.tsx']}
for root in roots:
    paths.update(path for path in Path(root).rglob('*') if path.is_file() and '__pycache__' not in path.parts and path.suffix != '.pyc' and path.name != '.DS_Store')
previous = json.loads(Path('evidence/usb-c-replacement-source-binding-A45.json').read_text())
paths.update(Path(row['path']) for row in previous['records'])
paths.update(Path('tooling').glob('*.tgz'))
for root in options.additional_root:
    paths.update(path for path in root.rglob('*') if path.is_file() and not {'.tscircuit', '.cache', 'node_modules', '__pycache__'}.intersection(path.parts))
for pattern in options.additional_glob:
    paths.update(path for path in Path('.').glob(pattern) if path.is_file())
paths.update(Path(path) for path in ['evidence/main-warning-review-A45.json', 'evidence/active-supplier-inspection-manifest-A22.json', 'evidence/validated-preroute-circuit-A22.json.gz', 'evidence/routing47-pipeline-policy-A47.json', 'evidence/routing46-interrupted-prerequisites-A46.json', 'evidence/routing47-interrupted-prerequisites-A47.json'])
paths.discard(Path('docs/cloud/CONTEXT-MANIFEST.json'))
records = [{'path': str(path), 'bytes': path.stat().st_size, 'sha256': hashlib.sha256(path.read_bytes()).hexdigest()} for path in sorted(paths)]
manifest = {'revision': options.revision or 'A48 cloud handoff; setup checks only, fresh cloud/native validation pending', 'source_baseline': options.source_baseline or 'A45 implementation 7a869ef36fb6a9dd78c24e613d3e3f2f301296e8; publication receipt 6dce7c7605c03ac29513557ccebf2a532ee196d2', 'files': records, 'policy': 'Transfer/identity evidence only, not design validation. Update explicitly after reviewing intended edits; never auto-rebind to hide missing or changed files.'}
Path('docs/cloud/CONTEXT-MANIFEST.json').write_text(json.dumps(manifest, indent=2) + '\n')
print(f'Bound {len(records)} context files')
