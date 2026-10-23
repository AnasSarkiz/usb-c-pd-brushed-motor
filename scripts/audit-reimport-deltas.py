"""Describe fresh supplier-model changes without approving or adopting them."""
import argparse
from collections import Counter
import difflib
import hashlib
import json
from pathlib import Path
import re


def source_features(source):
    patterns = {
        'copper_holes_and_vias': r'<(?:smtpad|platedhole|hole|via)\b[^>]*>',
        'courtyards': r'<courtyard\w*\b[^>]*>',
        'schematic_ports': r'<port\b[^>]*>',
        'cad_model': r'cadModel=\{\{[\s\S]*?\}\}',
        'pin_labels': r'const pinLabels = [\s\S]*?as const',
    }
    return {name: re.findall(pattern, source) for name, pattern in patterns.items()}


def review_part(original, imported):
    fresh_path = Path(imported['import_path'])
    previous_path = Path(original['import_path'])
    fresh = fresh_path.read_text()
    previous = previous_path.read_text()
    fresh_features = source_features(fresh)
    previous_features = source_features(previous)
    elements = json.loads(Path(imported['probe_path']).read_text())
    counts = Counter(element['type'] for element in elements)
    through_holes = [element for element in elements
                     if element['type'] == 'pcb_plated_hole']
    paste_on_tht = [paste for paste in elements
                    if paste['type'] == 'pcb_solder_paste'
                    and any(abs(paste['x'] - hole['x']) < 1e-8
                            and abs(paste['y'] - hole['y']) < 1e-8
                            for hole in through_holes)]
    diagnostics = [element for element in elements
                   if 'warning' in element['type'] or 'error' in element['type']]
    return {
        'code': original['code'], 'ref': original['ref'],
        'active_path': str(previous_path), 'candidate_path': str(fresh_path),
        'active_sha256': hashlib.sha256(previous_path.read_bytes()).hexdigest(),
        'candidate_sha256': hashlib.sha256(fresh_path.read_bytes()).hexdigest(),
        'byte_identical': previous == fresh,
        'feature_comparisons': {
            name: {'identical': fresh_features[name] == previous_features[name],
                   'active_count': len(previous_features[name]),
                   'candidate_count': len(fresh_features[name])}
            for name in fresh_features
        },
        'element_counts': dict(counts),
        'native_diagnostics': diagnostics,
        'paste_centered_on_tht': paste_on_tht,
        'limitations': 'Source/probe comparison only. Stock, manufacturer fit, '
                       'whole-board validation and stencil approval are separate.',
    }


def run(options):
    manifest = json.loads(options.manifest.read_text())
    records = json.loads((options.evidence / 'results.json').read_text())
    by_code = {part['code']: part for part in manifest}
    reviewed = []
    failures = []
    for record in records:
        if (record.get('failure') or record['import']['exit_code']
                or 'build' not in record or record['build']['exit_code']
                or record['build']['stop_reason']):
            failures.append(record)
            continue
        part = review_part(by_code[record['code']], record)
        reviewed.append(part)
        patch = ''.join(difflib.unified_diff(
            Path(part['active_path']).read_text().splitlines(keepends=True),
            Path(part['candidate_path']).read_text().splitlines(keepends=True),
            fromfile=part['active_path'], tofile=part['candidate_path'],
        ))
        (options.evidence / f'{record["code"]}-delta.patch.txt').write_text(patch)
    report = {
        'revision': 'A49', 'requested_supplier_count': len(manifest),
        'reviewed_supplier_count': len(reviewed), 'command_failures': failures,
        'changed_sources': [part['code'] for part in reviewed
                            if not part['byte_identical']],
        'textually_changed_copper_definitions': [part['code'] for part in reviewed
            if not part['feature_comparisons']['copper_holes_and_vias']['identical']],
        'textually_changed_cad_definitions': [part['code'] for part in reviewed
            if not part['feature_comparisons']['cad_model']['identical']],
        'parts': reviewed,
        'sampled_peak_rss_kib': max((step['sampled_process_tree_peak_rss_kib']
            for record in records for phase in ['import', 'build']
            if (step := record.get(phase))), default=0),
        'adopted_into_production': False, 'routing_enabled': False,
    }
    options.report.write_text(json.dumps(report, indent=2) + '\n')
    print(json.dumps({key: report[key] for key in [
        'requested_supplier_count', 'reviewed_supplier_count',
        'changed_sources', 'textually_changed_copper_definitions', 'textually_changed_cad_definitions',
        'sampled_peak_rss_kib',
    ]}), flush=True)
    return 1 if failures or len(reviewed) != len(manifest) else 0


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--manifest', type=Path, required=True)
    parser.add_argument('--evidence', type=Path, required=True)
    parser.add_argument('--report', type=Path, required=True)
    raise SystemExit(run(parser.parse_args()))
