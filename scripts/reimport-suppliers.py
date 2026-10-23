"""Independently re-import and build each active supplier SKU without adoption.

Only the official CLI writes supplier definitions. Probes use the existing
reviewed wiring. Failures remain explicit and do not block independent SKUs.
"""
import argparse
import hashlib
import json
from pathlib import Path
import re
import subprocess
import sys


def bounded_command(options, task):
    log = options.evidence / f'{task["code"]}-{task["phase"]}.log'
    report = log.with_name(log.stem + '-resources.json')
    command = [sys.executable, 'scripts/run-resource-bounded.py',
               '--cwd', str(task['cwd']), '--log', str(log),
               '--report', str(report), '--timeout-seconds', '240',
               '--', *task['command']]
    completed = subprocess.run(command, stdout=subprocess.PIPE, text=True)
    print(completed.stdout.strip(), flush=True)
    return json.loads(report.read_text())


def reimport_part(options, part):
    code = part['code']
    if not re.fullmatch(r'C[0-9]+', code):
        raise ValueError('Invalid supplier code: ' + code)
    directory = options.stage / code
    directory.mkdir(exist_ok=False)
    (directory / 'package.json').write_text(json.dumps({
        'name': f'supplier-audit-{code.lower()}', 'private': True
    }, indent=2) + '\n')
    imported = bounded_command(options, {
        'code': code, 'phase': 'import', 'cwd': directory,
        'command': ['bunx', 'tsci', 'import', code,
                    '--jlcpcb', '--use-exact-footprint'],
    })
    record = {'code': code, 'import': imported}
    if imported['exit_code'] or imported['stop_reason']:
        return record
    files = list((directory / 'imports').glob('*.tsx'))
    if len(files) != 1:
        record['failure'] = 'Expected exactly one generated component file'
        return record
    generated = files[0]
    original = Path(part['import_path'])
    exports = re.findall(r'export const (\w+)\s*=', generated.read_text())
    if len(exports) != 1:
        record['failure'] = 'Expected exactly one generated component export'
        return record
    # Preserve probe wiring; adjust only its module reference and import name.
    probe = Path(f'tests/supplier-audit/{code}.circuit.tsx').read_text()
    match = re.search(r'import \{ (\w+) \} from "[^"]+"', probe)
    if match is None:
        raise ValueError('Reviewed probe has no supplier import: ' + code)
    previous_export = match.group(1)
    probe = probe[:match.start()] + (
        f'import {{ {exports[0]} }} from "./imports/{generated.stem}"'
    ) + probe[match.end():]
    probe = re.sub(r'(?<=<)' + re.escape(previous_export) + r'\b',
                   exports[0], probe)
    (directory / 'probe.circuit.tsx').write_text(probe)
    built = bounded_command(options, {
        'code': code, 'phase': 'build', 'cwd': directory,
        'command': ['bunx', 'tsci', 'build', 'probe.circuit.tsx',
                    '--routing-disabled', '--schematic-svgs', '--pcb-svgs'],
    })
    record.update({
        'build': built, 'import_path': str(generated.relative_to(Path.cwd())),
        'sha256': hashlib.sha256(generated.read_bytes()).hexdigest(),
        'previous_sha256': hashlib.sha256(original.read_bytes()).hexdigest(),
        'byte_identical_to_active': generated.read_bytes() == original.read_bytes(),
        'probe_path': str((directory / 'dist/probe/circuit.json').relative_to(Path.cwd())),
    })
    return record


def run(options):
    options.stage = options.stage.resolve()
    options.evidence = options.evidence.resolve()
    options.stage.mkdir(exist_ok=False)
    options.evidence.mkdir(exist_ok=False)
    parts = json.loads(options.manifest.read_text())
    priority = ['C908270', 'C5710902', 'C5184243', 'C2678061', 'C44377']
    parts.sort(key=lambda part: (
        priority.index(part['code']) if part['code'] in priority else len(priority),
        part['code'],
    ))
    records = []
    for index, part in enumerate(parts):
        print(f'{index + 1}/{len(parts)}: {part["code"]}', flush=True)
        record = reimport_part(options, part)
        records.append(record)
        (options.evidence / 'results.json').write_text(
            json.dumps(records, indent=2) + '\n')
    probe_manifest = [{**part, 'import_path': record['import_path'],
                       'probe_path': record['probe_path']}
                      for part, record in zip(parts, records)
                      if 'probe_path' in record and record['build']['exit_code'] == 0
                      and not record['build']['stop_reason']]
    (options.evidence / 'manifest.json').write_text(
        json.dumps(probe_manifest, indent=2) + '\n')
    complete = len(probe_manifest) == len(parts)
    print(json.dumps({'requested': len(parts), 'built': len(probe_manifest),
                      'complete': complete}), flush=True)
    return 0 if complete else 1


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--manifest', type=Path, required=True)
    parser.add_argument('--stage', type=Path, required=True)
    parser.add_argument('--evidence', type=Path, required=True)
    raise SystemExit(run(parser.parse_args()))
