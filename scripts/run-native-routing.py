"""Run native routing only after current prerequisite and copper gates pass.

Run from the board directory with the reviewed evidence prefix, for example
--evidence-prefix routing42. Failed checks remain recorded and stop routing.
"""
import argparse
import gzip
import hashlib
import json
import subprocess
from pathlib import Path


def sha256(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def require_recorded_log(record):
    if record['exit_code'] != 0 or sha256(Path(record['log'])) != record['sha256']:
        raise ValueError('Failed or changed prerequisite: ' + record['log'])


def run(configuration):
    prefix = configuration.evidence_prefix
    if not prefix.replace('-', '').isalnum():
        raise ValueError('Evidence prefix must contain only letters, numbers and hyphens')
    artifact_path = Path('dist/index/circuit.json')
    artifact_sha256 = sha256(artifact_path)
    elements = json.loads(artifact_path.read_text())
    if sum(item['type'] == 'source_component' for item in elements) != 140 or sum(item['type'] == 'pcb_component' for item in elements) != 152 or any(item['type'] == 'pcb_trace' for item in elements):
        raise ValueError('Full current140-part/152-placement unrouted board is required')
    ownership_path = Path(f'evidence/{prefix}-routing-gate-ownership-A22.json')
    copper_report_path = Path(f'evidence/{prefix}-routing-gate-copper-A22.json')
    commands = [
        ['bun', 'scripts/export-copper-net-map.ts', 'unrouted', str(ownership_path)],
        ['tooling/power-review-venv/bin/python', 'scripts/audit-routed-copper-clearances.py', '--preroute', '--ownership', str(ownership_path), '--report', str(copper_report_path)],
    ]
    for index, command in enumerate(commands):
        log_path = Path(f'evidence/{prefix}-routing-gate-{index}-A22.log')
        with log_path.open('w') as log:
            result = subprocess.run(command, stdout=log, stderr=subprocess.STDOUT)
        if result.returncode:
            raise ValueError(f'Routing blocked by current copper prerequisite: {log_path}; {copper_report_path}')
    copper_report = json.loads(copper_report_path.read_text())
    if copper_report['artifactSha256'] != artifact_sha256 or copper_report['issues'] or copper_report['routingPhase'] != 'unrouted':
        raise ValueError('Preroute physical copper report does not approve the current artifact')
    binding = json.loads(Path(f'evidence/{prefix}-source-binding-A22.json').read_text())
    if binding['artifact_preroute_sha256'] != artifact_sha256:
        raise ValueError('Source binding identifies a different preroute artifact')
    for record in binding['records']:
        if sha256(Path(record['path'])) != record['sha256']:
            raise ValueError('Source/dependency changed: ' + record['path'])
    direct = json.loads(Path(f'evidence/{prefix}-direct-prerequisites-A22.json').read_text())
    expected_direct_checks = {'schema', 'import-transforms', 'connectivity', 'full-placement', 'targets', 'artwork', 'pnp'}
    if direct['artifact_sha256'] != artifact_sha256 or len(direct['results']) != 7 or {record['name'] for record in direct['results']} != expected_direct_checks:
        raise ValueError('All seven independent prerequisite results are required')
    for record in direct['results']:
        require_recorded_log(record)
    gates = json.loads(Path(f'evidence/{prefix}-five-native-gates-A22.json').read_text())
    if gates['artifact_sha256'] != artifact_sha256 or len(gates['results']) != 5:
        raise ValueError('All five native checks must bind the current preroute artifact')
    expected_native_checks = {'netlist', 'pin_specification', 'source', 'schematic-placement', 'placement'}
    if {tuple(record['command']) for record in gates['results']} != {('bunx', 'tsci', 'check', check, 'index.circuit.tsx') for check in expected_native_checks}:
        raise ValueError('All distinct required native check commands must be present')
    for record in gates['results']:
        require_recorded_log(record)
        if any(record['errors']):
            raise ValueError('Native prerequisite has unresolved errors: ' + record['log'])
    if sha256(artifact_path) != artifact_sha256:
        raise ValueError('The circuit artifact changed during prerequisite review')
    Path(f'evidence/{prefix}-reviewed-preroute-A22.json.gz').write_bytes(gzip.compress(artifact_path.read_bytes(), mtime=0))
    command = ['bunx', 'tsci', 'build', 'index.circuit.tsx', '--pcb-png', '--pcb-svgs', '--schematic-svgs', '--autorouter-debug', '--autorouter-dump-srj', 'all', '--autorouter-debug-dir', f'evidence/{prefix}-debug-A22']
    with Path(f'evidence/{prefix}-native-build-A22.log').open('w') as log:
        result = subprocess.run(command, stdout=log, stderr=subprocess.STDOUT)
    raw = artifact_path.read_bytes()
    Path(f'evidence/{prefix}-native-result-A22.json.gz').write_bytes(gzip.compress(raw, mtime=0))
    routed = json.loads(raw)
    print(json.dumps({'exit_code': result.returncode, 'artifact_sha256': sha256(artifact_path), 'pcb_traces': sum(item['type'] == 'pcb_trace' for item in routed), 'autorouting_errors': [item.get('message') for item in routed if item['type'] == 'pcb_autorouting_error'], 'physical_postroute_review': 'required; solver success does not approve fabrication'}))
    return result.returncode


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--evidence-prefix', required=True)
    raise SystemExit(run(parser.parse_args()))
