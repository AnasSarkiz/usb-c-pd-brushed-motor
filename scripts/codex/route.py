"""Sequential cloud prerequisite gates and guarded Pipeline9 routing.

This launches routing only after fresh supplier probes, independent audits and
all five native checks pass. It never approves snapshots or fabrication.
"""
import argparse
import hashlib
import json
import os
import re
import subprocess
import sys
from pathlib import Path


def digest(path):
    return hashlib.sha256(Path(path).read_bytes()).hexdigest()


def save(path, value):
    Path(path).write_text(json.dumps(value, indent=2) + '\n')


def execute(prefix, name, command):
    log = Path(f'evidence/{prefix}-{name}-A48.log')
    resources = Path(f'evidence/{prefix}-{name}-resources-A48.txt')
    print(f'Running {name}; one process at a time', flush=True)
    with log.open('w') as stream:
        result = subprocess.run(['/usr/bin/time', '-v', '-o', str(resources), '--', *command], stdout=stream, stderr=subprocess.STDOUT)
    record = {'name': name, 'command': command, 'exit_code': result.returncode, 'log': str(log), 'sha256': digest(log), 'resources': str(resources)}
    if name.startswith('native-'):
        text = log.read_text()
        errors = [int(value) for value in re.findall(r'Errors:\s*(\d+)', text)]
        if name == 'native-schematic-placement' and not text.strip() and result.returncode == 0:
            errors = [0]
        record['errors'] = errors
        if result.returncode == 0 and (not errors or any(errors)):
            save(f'evidence/{prefix}-failed-result-A48.json', record)
            raise ValueError(f'Missing or failing native result: {log}')
    if result.returncode:
        save(f'evidence/{prefix}-failed-result-A48.json', record)
        raise ValueError(f'{name} failed; review {log} and {resources}. Routing/approval stops here.')
    return record


def prepare_reviews(prefix, elements, artifact_sha):
    review = json.loads(Path('evidence/main-warning-review-A45.json').read_text())
    warnings = [item for item in elements if 'warning' in item['type']]
    if len(warnings) != review['rawWarningCount']:
        raise ValueError('Warnings changed; independently review before routing')
    for row in review['reviewedAdvisories']:
        source = next(item for item in elements if item['type'] == 'source_component' and item['name'] == row['ref'])
        matches = [item for item in warnings if item['type'] == row['type'] and item.get('source_component_id') == source['source_component_id'] and item['message'] == row['message']]
        normalize = lambda item: {key: value for key, value in item.items() if not key.endswith(('_id', '_ids'))}
        if len(matches) != 1 or normalize(matches[0]) != normalize(row['rawDiagnostic']):
            raise ValueError('Warning differs from reviewed A45 diagnostic: ' + row['ref'])
        row['previousRawDiagnosticA45'] = row['rawDiagnostic']
        row['rawDiagnostic'] = matches[0]
    warning_path = f'evidence/{prefix}-warning-review-A48.json'
    schematic_path = f'evidence/{prefix}-schematic-config-A48.json'
    imports_path = f'evidence/{prefix}-import-config-A48.json'
    review.update(revision=prefix, artifactSha256=artifact_sha)
    save(warning_path, review)
    save(schematic_path, {'revision': prefix, 'importManifestPath': 'evidence/active-supplier-inspection-manifest-A22.json', 'reportPath': f'evidence/{prefix}-connectivity-A48.json', 'warningReviewPath': warning_path})
    save(imports_path, {'revision': prefix, 'manifestPath': 'evidence/active-supplier-inspection-manifest-A22.json', 'reportPath': f'evidence/{prefix}-active-imports-A48.json'})
    return warning_path, schematic_path, imports_path


def run(prefix):
    if sys.platform != 'linux':
        raise ValueError('Cloud Linux only; do not route on the Mac')
    if not re.fullmatch(r'[A-Za-z0-9-]+', prefix):
        raise ValueError('Use an alphanumeric evidence prefix with optional hyphens')
    if Path(f'evidence/{prefix}-all-prerequisites-A48.json').exists():
        raise ValueError('This evidence prefix already exists; preserve it and choose a new prefix')
    resources = {'platform': sys.platform, 'cpu_count': os.cpu_count(), 'meminfo': Path('/proc/meminfo').read_text(), 'cgroup': {str(path): path.read_text() for path in (Path('/sys/fs/cgroup/memory.max'), Path('/sys/fs/cgroup/memory.peak')) if path.exists()}, 'concurrency': 1}
    save(f'evidence/{prefix}-environment-A48.json', resources)
    results = [execute(prefix, 'preroute-build', ['bunx', 'tsci', 'build', 'index.circuit.tsx', '--routing-disabled'])]
    artifact_path = Path('dist/index/circuit.json')
    artifact_sha = digest(artifact_path)
    elements = json.loads(artifact_path.read_text())
    if sum(item['type'] == 'source_component' for item in elements) != 140 or sum(item['type'] == 'pcb_component' for item in elements) != 152 or any(item['type'] == 'pcb_trace' for item in elements):
        raise ValueError('Require the complete 140-part/152-placement unrouted board')
    warning, schematic, imports = prepare_reviews(prefix, elements, artifact_sha)
    manifest = json.loads(Path('evidence/active-supplier-inspection-manifest-A22.json').read_text())
    for code in sorted({row['code'] for row in manifest}):
        results.append(execute(prefix, f'supplier-probe-{code}', ['bunx', 'tsci', 'build', f'tests/supplier-audit/{code}.circuit.tsx', '--routing-disabled']))
    commands = [
        ('format', ['bun', 'run', 'format:check']),
        ('typecheck', ['bun', 'run', 'typecheck']),
        ('tests', ['bun', 'run', 'test']),
        ('power', ['bun', 'run', 'power:report']),
        ('supplier-imports', ['bun', 'scripts/audit-active-imports.ts', imports]),
        ('schema', ['bun', 'scripts/audit-circuit-schema.ts', str(artifact_path), f'evidence/{prefix}-schema-A48.json']),
        ('import-transforms', ['bun', 'scripts/audit-product-placement.ts', 'unrouted']),
        ('connectivity', ['bun', 'scripts/audit-schematic.ts', schematic]),
        ('full-placement', ['bun', 'scripts/check-full-placement.ts']),
        ('targets', ['tooling/power-review-venv/bin/python', 'scripts/audit-breakout-targets.py']),
        ('artwork', ['bun', 'scripts/audit-product-artwork.ts']),
        ('pnp', ['bun', 'scripts/audit-supplier-pnp.ts']),
    ]
    commands += [('native-' + check, ['bunx', 'tsci', 'check', check, 'index.circuit.tsx']) for check in ('netlist', 'pin_specification', 'source', 'schematic-placement', 'placement')]
    for name, command in commands:
        results.append(execute(prefix, name, command))
    if digest(artifact_path) != artifact_sha:
        raise ValueError('Prerequisite checks changed the preroute artifact')
    save(f'evidence/{prefix}-all-prerequisites-A48.json', {'artifact_sha256': artifact_sha, 'results': results})
    direct_names = {'schema', 'import-transforms', 'connectivity', 'full-placement', 'targets', 'artwork', 'pnp'}
    save(f'evidence/{prefix}-direct-prerequisites-A22.json', {'artifact_sha256': artifact_sha, 'results': [row for row in results if row['name'] in direct_names]})
    save(f'evidence/{prefix}-five-native-gates-A22.json', {'artifact_sha256': artifact_sha, 'results': [row for row in results if row['name'].startswith('native-')]})
    context = json.loads(Path('docs/cloud/CONTEXT-MANIFEST.json').read_text())
    previous = json.loads(Path('evidence/usb-c-replacement-source-binding-A45.json').read_text())
    paths = {row['path'] for row in context['files']} | {row['path'] for row in previous['records']} | {warning, schematic, imports, 'docs/cloud/CONTEXT-MANIFEST.json'}
    save(f'evidence/{prefix}-source-binding-A22.json', {'revision': prefix, 'artifact_preroute_sha256': artifact_sha, 'records': [{'path': path, 'sha256': digest(path)} for path in sorted(paths)]})
    execute(prefix, 'guarded-native-routing', ['python3', 'scripts/run-native-routing.py', '--evidence-prefix', prefix])
    routed = json.loads(artifact_path.read_text())
    if not any(item['type'] == 'pcb_trace' for item in routed) or any('error' in item['type'] for item in routed):
        raise ValueError('Routed artifact has no traces or unresolved generated errors; preserve and review it')
    execute(prefix, 'shorts', ['bunx', 'tsci', 'check', 'shorts', str(artifact_path)])
    execute(prefix, 'routed-schema', ['bun', 'scripts/audit-circuit-schema.ts', str(artifact_path), f'evidence/{prefix}-routed-schema-A48.json'])
    execute(prefix, 'routed-placement', ['bun', 'scripts/audit-product-placement.ts', 'routed'])
    execute(prefix, 'routed-net-map', ['bun', 'scripts/export-copper-net-map.ts', 'routed', 'evidence/copper-net-map-A22.json'])
    execute(prefix, 'routed-clearances', ['tooling/power-review-venv/bin/python', 'scripts/audit-routed-copper-clearances.py', '--ownership', 'evidence/copper-net-map-A22.json', '--report', f'evidence/{prefix}-routed-clearances-A48.json'])
    for name, script in [('routed-drills', 'audit-routed-drills.py'), ('ground', 'audit-ground-copper.py'), ('power-paths', 'review-routed-power-paths.py')]:
        execute(prefix, name, ['tooling/power-review-venv/bin/python', f'scripts/{script}'])
    execute(prefix, 'copper-renders', ['bun', 'scripts/render-board-layers.ts'])
    execute(prefix, 'schematic-renders', ['bun', 'scripts/render-schematic-sheets.ts'])
    print('Routing output generated and automated checks completed. Read HANDOFF.md: visual review, routed native snapshots and fabrication review remain mandatory. This is an untested prototype.', flush=True)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--evidence-prefix', required=True)
    run(parser.parse_args().evidence_prefix)
