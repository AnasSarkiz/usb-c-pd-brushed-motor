"""Independent all-net copper spacing/width/edge review of the native artifact.

Ownership is selected by the official connectivity map. Different nets are
always compared on their actual layers, including pours, pads and via annuli.
Ordinary drill-to-pad and drill-to-drill geometry is checked separately.
"""
import hashlib
import json
import math
from pathlib import Path
from shapely.geometry import Point, box
from shapely.strtree import STRtree
from ground_copper_geometry import pad_geometry, pour_geometry, RESOLUTION
from copper_clearance_geometry import wire_copper_segments

EPS_MM = 1e-5  # Circular polygon sag at radius0.3mm/128 quadrants is <6e-6mm.


def audit():
    raw = Path('dist/index/circuit.json').read_bytes()
    elements = json.loads(raw)
    if sum(element['type'] == 'source_component' for element in elements) != 140 or not any(element['type'] == 'pcb_trace' for element in elements):
        raise ValueError('The complete routed140-part artifact is required')
    ownership = json.loads(Path('evidence/copper-net-map-A22.json').read_text())
    board = next(element for element in elements if element['type'] == 'pcb_board')
    if board['num_layers'] != 4 or board.get('outline'):
        raise ValueError('Review requires the recorded rectangular four-layer outline')
    outline = box(board['center']['x'] - board['width']/2, board['center']['y'] - board['height']/2, board['center']['x'] + board['width']/2, board['center']['y'] + board['height']/2)
    copper = []
    issues = []
    for element in elements:
        kind = element['type']
        if kind not in ('pcb_trace', 'pcb_smtpad', 'pcb_plated_hole', 'pcb_via', 'pcb_copper_pour'):
            continue
        identifier = element[kind + '_id']
        owner_id = element.get('source_net_id', element.get('source_trace_id', identifier))
        if owner_id not in ownership:
            raise ValueError('Unknown electrical ownership: ' + identifier)
        if kind == 'pcb_trace':
            shapes = wire_copper_segments(element)
            for segment in shapes:
                if segment['minimumWidthMm'] + EPS_MM < .2:
                    issues.append({'rule': 'wire_width', 'id': identifier, 'widthMm': segment['minimumWidthMm']})
        else:
            layers = [element['layer']] if kind in ('pcb_smtpad', 'pcb_copper_pour') else element['layers']
            if kind == 'pcb_copper_pour':
                geometry = pour_geometry(element)
            elif kind == 'pcb_via':
                geometry = Point(element['x'], element['y']).buffer(element['outer_diameter']/2, quad_segs=RESOLUTION).difference(Point(element['x'], element['y']).buffer(element['hole_diameter']/2, quad_segs=RESOLUTION))
            else:
                geometry = pad_geometry(element)
                if kind == 'pcb_plated_hole':
                    geometry = geometry.difference(pad_geometry(element, drill=True))
            shapes = [{'layer': layer, 'geometry': geometry} for layer in layers]
        for segment in shapes:
            geometry = segment['geometry']
            if not geometry.is_valid or geometry.is_empty:
                raise ValueError('Invalid copper: ' + identifier)
            edge_gap_mm = geometry.distance(outline.boundary)
            if not outline.covers(geometry) or edge_gap_mm + EPS_MM < .5:
                issues.append({'rule': 'copper_to_edge', 'id': identifier, 'layer': segment['layer'], 'clearanceMm': edge_gap_mm})
            copper.append({'id': identifier, 'kind': kind, 'net': ownership[owner_id], **segment})
    comparisons = 0
    for layer in ('top', 'inner1', 'inner2', 'bottom'):
        selected = [primitive for primitive in copper if primitive['layer'] == layer]
        tree = STRtree([primitive['geometry'] for primitive in selected])
        for index, primitive in enumerate(selected):
            for other_index in tree.query(primitive['geometry'].buffer(.2)):
                if other_index <= index:
                    continue
                other = selected[other_index]
                if primitive['net'] == other['net']:
                    continue
                comparisons += 1
                gap_mm = primitive['geometry'].distance(other['geometry'])
                if gap_mm + EPS_MM < .2:
                    issues.append({'rule': 'foreign_copper_clearance', 'first': primitive['id'], 'second': other['id'], 'firstKind': primitive['kind'], 'secondKind': other['kind'], 'layer': layer, 'clearanceMm': gap_mm})
    report = {'artifactSha256': hashlib.sha256(raw).hexdigest(), 'copperPrimitives': len(copper), 'nearbyForeignComparisons': comparisons, 'rulesMm': {'width': .2, 'foreignCopper': .2, 'edge': .5}, 'issues': issues, 'limitations': 'Physical geometric spacing only. No electrical, thermal or power rating is inferred. Unsupported route interpolation is rejected.'}
    Path('evidence/routed-copper-clearance-A39.json').write_text(json.dumps(report, indent=2) + '\n')
    print(json.dumps({'copperPrimitives': len(copper), 'nearbyForeignComparisons': comparisons, 'issues': len(issues)}))
    return bool(issues)


if __name__ == '__main__':
    raise SystemExit(audit())
