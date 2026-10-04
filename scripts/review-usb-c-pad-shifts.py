"""Independently review the user-authorized C165948 pad translations.

Compare against the archived official import, preserve shapes and electrical
identity, and measure all adjacent copper lands without reducing clearance.
The manufacturer's20V rating is a separate unresolved power qualification.
"""
import argparse
import hashlib
import json
import re
from decimal import Decimal
from pathlib import Path

from shapely.geometry import Polygon, box


def read_footprint(source):
    pads = {}
    outside = []
    for line in source.splitlines():
        match = re.search(r'<smtpad portHints=\{\["pin(\d+)"\]\}', line)
        if not match:
            outside.append(line)
            continue
        pin = int(match.group(1))
        if 'shape="polygon"' in line:
            points = [(Decimal(x), Decimal(y)) for x, y in re.findall(r'\{x: "([-.0-9]+)mm", y: "([-.0-9]+)mm"\}', line)]
            shape = Polygon([(float(x), float(y)) for x, y in points])
            protected = re.sub(r'x: "[-.0-9]+mm"', 'x: "POSITION"', line)
            xs = [point[0] for point in points]
        else:
            attributes = dict(re.findall(r'(pcbX|pcbY|width|height)="([-.0-9]+)mm"', line))
            x, y, width, height = (Decimal(attributes[key]) for key in ('pcbX', 'pcbY', 'width', 'height'))
            shape = box(float(x - width / 2), float(y - height / 2), float(x + width / 2), float(y + height / 2))
            protected = re.sub(r'pcbX="[-.0-9]+mm"', 'pcbX="POSITION"', line)
            xs = [x]
        if pin in pads or not shape.is_valid:
            raise ValueError('Duplicate pin or invalid copper geometry')
        pads[pin] = {'xs': xs, 'shape': shape, 'protected': protected}
    return pads, outside


def review(source_path):
    original_path = Path('evidence/usb-c-C165948-original-import-A44.tsx.txt')
    original_bytes = original_path.read_bytes()
    if hashlib.sha256(original_bytes).hexdigest() != '7d3f0afe8f5b014edcfb3716ccf542929ae9d45550701aaa8bc63f2700c77bda':
        raise ValueError('Original official import evidence changed')
    original, original_outside = read_footprint(original_bytes.decode())
    current_bytes = source_path.read_bytes()
    current, current_outside = read_footprint(current_bytes.decode())
    if current_outside != original_outside or set(current) != set(original):
        raise ValueError('Identity, holes, CAD model or electrical pin inventory changed')
    shifts = []
    wide_nominals = {13: -3.2, 14: 3.2, 15: 2.4, 16: -2.4}
    for pin, pad in current.items():
        baseline = original[pin]
        if pad['protected'] != baseline['protected'] or len(pad['xs']) != len(baseline['xs']):
            raise ValueError(f'pin{pin}: size, shape, Y coordinate or assignment changed')
        translations = {new - old for new, old in zip(pad['xs'], baseline['xs'])}
        if len(translations) != 1:
            raise ValueError(f'pin{pin}: polygon was distorted rather than translated')
        shift = translations.pop()
        nominal_x_mm = -1.75 + (pin - 5) * 0.5 if pin <= 12 else wide_nominals[pin]
        center_x_mm = (pad['shape'].bounds[0] + pad['shape'].bounds[2]) / 2
        if abs(shift) > Decimal('0.001') or abs(center_x_mm - nominal_x_mm) > 0.05:
            raise ValueError(f'pin{pin}: excessive movement or manufacturer-layout mismatch')
        shifts.append({'pin': pin, 'translation_x_mm': float(shift), 'nominal_center_error_mm': center_x_mm - nominal_x_mm})
    ordered = sorted(current, key=lambda pin: current[pin]['shape'].bounds[0])
    gaps = [{'first_pin': first, 'second_pin': second, 'clearance_mm': current[first]['shape'].distance(current[second]['shape'])} for first, second in zip(ordered, ordered[1:])]
    if any(gap['clearance_mm'] < 0.2 for gap in gaps):
        raise ValueError('An actual adjacent-pad gap remains below0.20mm')
    return {'source': str(source_path), 'source_sha256': hashlib.sha256(current_bytes).hexdigest(), 'original_sha256': hashlib.sha256(original_bytes).hexdigest(), 'pads': len(current), 'changes_are_translations_only': True, 'minimum_adjacent_clearance_mm': min(gap['clearance_mm'] for gap in gaps), 'manufacturer_layout_tolerance_mm': 0.05, 'shifts': shifts, 'adjacent_gaps': gaps, 'power_qualification': 'Blocked: manufacturer20V rating does not establish21V maximum PD operation'}


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source', type=Path, default=Path('imports/TYPE_C_31_M_12.tsx'))
    parser.add_argument('--report', type=Path)
    options = parser.parse_args()
    report = review(options.source)
    if options.report:
        options.report.write_text(json.dumps(report, indent=2) + '\n')
    print(json.dumps(report))
