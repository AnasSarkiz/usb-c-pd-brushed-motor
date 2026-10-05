"""Verify the transferable context manifest; do not rebuild or route a board."""
import hashlib
import json
from pathlib import Path


def verify():
    manifest = json.loads(Path('docs/cloud/CONTEXT-MANIFEST.json').read_text())
    mismatches = []
    for record in manifest['files']:
        path = Path(record['path'])
        if not path.is_file() or hashlib.sha256(path.read_bytes()).hexdigest() != record['sha256']:
            mismatches.append(str(path))
    if mismatches:
        raise ValueError('Cloud context is missing or changed: ' + ', '.join(mismatches))
    print(json.dumps({'verifiedContextFiles': len(manifest['files']), 'sourceBaseline': manifest['source_baseline'], 'routingRun': False}))


if __name__ == '__main__':
    verify()
