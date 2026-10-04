"""Independent physical GND island screen of the full generated routed board.

Run export-copper-net-map.ts immediately before this audit. That official map
selects ground-intended primitives only. It never creates physical graph edges.
This does not establish return impedance, temperature rise or via ampacity.
"""
import hashlib
import json
import math
from pathlib import Path
from shapely.geometry import Point, LineString
from shapely.ops import unary_union
from ground_copper_geometry import pad_geometry, pour_geometry, ground_islands, pad_roots, RESOLUTION


def trace_copper(trace):
    if trace.get('route_thickness_mode', 'constant') != 'constant':
        raise ValueError('Ground trace interpolation requires explicit geometric support')
    segments = []
    route = trace['route']
    if any(point['route_type'] not in ('wire', 'via') for point in route):
        raise ValueError('Unsupported ground route primitive')
    for first, second in zip(route, route[1:]):
        coordinates = [(first['x'], first['y']), (second['x'], second['y'])]
        if coordinates[0] == coordinates[1]:
            continue
        if first['route_type'] == second['route_type'] == 'via':
            raise ValueError('Ground route changes position between vias without a wire')
        first_layer = first['layer'] if first['route_type'] == 'wire' else first['to_layer']
        second_layer = second['layer'] if second['route_type'] == 'wire' else second['from_layer']
        if first_layer != second_layer:
            raise ValueError('Wire changes layer without a barrel')
        if first.get('width_interpolation_mode') or first.get('start_width') or first.get('end_width'):
            raise ValueError('Ground taper requires explicit geometric support')
        # Matches the native constant-wire segment boundary: outgoing wire
        # width, or the following wire width immediately after a via.
        width_mm = first['width'] if first['route_type'] == 'wire' else second['width']
        if not all(math.isfinite(n) for pair in coordinates for n in pair) or not math.isfinite(width_mm) or width_mm <= 0:
            raise ValueError('Invalid ground wire')
        segments.append((first_layer, LineString(coordinates).buffer(width_mm / 2, quad_segs=RESOLUTION)))
    return segments


def audit():
    artifact = Path('dist/index/circuit.json').read_bytes()
    elements = json.loads(artifact)
    if sum(e['type'] == 'source_component' for e in elements) != 140 or not any(e['type'] == 'pcb_trace' for e in elements):
        raise ValueError('Full routed 140-part artifact required')
    intent = json.loads(Path('evidence/copper-net-map-A22.json').read_text())
    ground_ids = [e['source_net_id'] for e in elements if e['type'] == 'source_net' and e['name'] == 'GND']
    if len(ground_ids) != 1 or ground_ids[0] not in intent:
        raise ValueError('Exactly one known ground net required')
    ground_intent = intent[ground_ids[0]]
    copper_by_layer = {'top': [], 'bottom': []}
    barrels = []
    pads = []
    drills = []
    for element in elements:
        kind = element['type']
        if kind not in ('pcb_smtpad', 'pcb_plated_hole', 'pcb_via', 'pcb_trace', 'pcb_copper_pour', 'pcb_hole'):
            continue
        identifier = element[f'{kind}_id']
        if kind in ('pcb_plated_hole', 'pcb_hole'):
            drills.append(pad_geometry(element, drill=True))
        elif kind == 'pcb_via':
            drills.append(Point(element['x'], element['y']).buffer(element['hole_diameter'] / 2, quad_segs=RESOLUTION))
        if kind == 'pcb_hole':
            continue
        ownership_id = element.get('source_net_id', element.get('source_trace_id', identifier))
        if ownership_id not in intent:
            raise ValueError(f'Unknown copper ownership {identifier}: {ownership_id}')
        if intent[ownership_id] != ground_intent:
            continue
        if kind == 'pcb_trace':
            for layer, geometry in trace_copper(element):
                copper_by_layer[layer].append(geometry)
            continue
        if kind == 'pcb_copper_pour':
            copper_by_layer[element['layer']].append(pour_geometry(element))
            continue
        layers = [element['layer']] if kind == 'pcb_smtpad' else element['layers']
        if kind == 'pcb_via':
            geometry = Point(element['x'], element['y']).buffer(element['outer_diameter'] / 2, quad_segs=RESOLUTION)
            geometry = geometry.difference(Point(element['x'], element['y']).buffer(element['hole_diameter'] / 2, quad_segs=RESOLUTION))
        else:
            geometry = pad_geometry(element)
            if kind == 'pcb_plated_hole':
                geometry = geometry.difference(pad_geometry(element, drill=True))
            pads.append({'id': identifier, 'geometry': geometry, 'layers': layers, 'pcb_port_id': element.get('pcb_port_id')})
        for layer in layers:
            copper_by_layer[layer].append(geometry)
        if kind in ('pcb_via', 'pcb_plated_hole'):
            barrels.append({'id': identifier, 'layers': layers, 'geometry': geometry})
    voids = unary_union(drills)
    copper_by_layer = {layer: [geometry.difference(voids) for geometry in copper] for layer, copper in copper_by_layer.items()}
    graph = ground_islands(copper_by_layer, barrels)
    resolved = [{'id': pad['id'], 'pcb_port_id': pad['pcb_port_id'], 'roots': sorted(pad_roots(pad, graph))} for pad in pads]
    all_roots = {root for pad in resolved for root in pad['roots']}
    issues = [{'rule': 'ground_pad_has_no_copper', **pad} for pad in resolved if not pad['roots']]
    if len(all_roots) != 1:
        issues.append({'rule': 'required_ground_pads_span_disconnected_islands', 'roots': sorted(all_roots)})
    report = {'revision': 'A22', 'artifactSha256': hashlib.sha256(artifact).hexdigest(), 'groundPads': len(pads), 'platedGroundBarrels': len(barrels), 'copperIslands': len(graph[0]), 'physicalIslandGroups': len(set(graph[1])), 'requiredPadGroups': len(all_roots), 'pads': resolved, 'issues': issues, 'limitations': 'Geometric connectivity only; no logical net-name graph edges, snapping or gap closing. Return impedance, thermal rise and barrel ampacity remain separate checks.'}
    Path('evidence/ground-copper-audit-A22.json').write_text(json.dumps(report, indent=2) + '\n')
    print(json.dumps({key: report[key] for key in ('groundPads', 'platedGroundBarrels', 'copperIslands', 'physicalIslandGroups', 'requiredPadGroups')}))
    print('issues', len(issues))
    return bool(issues)


if __name__ == '__main__':
    raise SystemExit(audit())
