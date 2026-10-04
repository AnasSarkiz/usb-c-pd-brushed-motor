"""Measure the official exported connector models and bind a visual review.

Run from the board directory. This review applies only while the connector
source, footprint, CAD transform and model URLs match the reviewed artifact.
Model bounds alone cannot determine which face is a connector opening.
"""
import gzip
import hashlib
import json
import struct
from pathlib import Path

import numpy as np


def connector_records(elements, reference):
    source = next(item for item in elements if item['type'] == 'source_component' and item['name'] == reference)
    pcb = next(item for item in elements if item['type'] == 'pcb_component' and item['source_component_id'] == source['source_component_id'])
    cad = next(item for item in elements if item['type'] == 'cad_component' and item['pcb_component_id'] == pcb['pcb_component_id'])
    footprint = [item for item in elements if item['type'] in ('pcb_smtpad', 'pcb_plated_hole', 'pcb_hole', 'pcb_port', 'pcb_courtyard_outline') and item.get('pcb_component_id') == pcb['pcb_component_id']]
    return {'source': source, 'pcb': pcb, 'cad': cad, 'footprint': footprint}


def model_bounds(configuration):
    node = next(item for item in configuration['gltf']['nodes'] if item.get('name') == configuration['reference'])
    if node.get('matrix') or node.get('rotation', [0, 0, 0, 1]) != [0, 0, 0, 1] or node.get('scale', [1, 1, 1]) != [1, 1, 1]:
        raise ValueError('Unexpected node transform: measure it explicitly before review')
    vertices = []
    for primitive in configuration['gltf']['meshes'][node['mesh']]['primitives']:
        accessor = configuration['gltf']['accessors'][primitive['attributes']['POSITION']]
        if accessor['type'] != 'VEC3' or accessor['componentType'] != 5126 or 'sparse' in accessor:
            raise ValueError('Unsupported position accessor')
        view = configuration['gltf']['bufferViews'][accessor['bufferView']]
        if view['buffer'] != 0:
            raise ValueError('Expected the official GLB embedded buffer')
        offset = view.get('byteOffset', 0) + accessor.get('byteOffset', 0)
        positions = np.ndarray((accessor['count'], 3), dtype='<f4', buffer=configuration['binary'], offset=offset, strides=(view.get('byteStride', 12), 4)).astype(np.float64)
        positions += np.asarray(node.get('translation', [0, 0, 0]))
        # Official toGltfTranslation is [-pcbX, height, pcbY].
        vertices.append(np.column_stack((-positions[:, 0], positions[:, 2], positions[:, 1])))
    positions = np.concatenate(vertices)
    if not np.isfinite(positions).all():
        raise ValueError('Non-finite model coordinates')
    return {'minimumPcbXyzMm': positions.min(axis=0).tolist(), 'maximumPcbXyzMm': positions.max(axis=0).tolist(), 'vertices': len(positions)}


def review():
    artifact_path = Path('dist/index/circuit.json')
    baseline_raw = gzip.decompress(Path('evidence/routing41-preroute-A22.json.gz').read_bytes())
    baseline_sha256 = hashlib.sha256(baseline_raw).hexdigest()
    if baseline_sha256 != '2154d1fabbbb878543f4a1128380edc76300aaaadc9ab5e6c4a76d4be479615a':
        raise ValueError('The exported model baseline changed')
    baseline = json.loads(baseline_raw)
    current_raw = artifact_path.read_bytes()
    current = json.loads(current_raw)
    glb_raw = Path('evidence/connector-orientation-baseline-A42.glb').read_bytes()
    if hashlib.sha256(glb_raw).hexdigest() != 'a8bee5da558157612d3b389cf87a6d717f44d72550edf27e39923aa40c9b273b':
        raise ValueError('The visually reviewed GLB changed')
    magic, version, length = struct.unpack_from('<III', glb_raw)
    json_length, json_kind = struct.unpack_from('<II', glb_raw, 12)
    binary_length, binary_kind = struct.unpack_from('<II', glb_raw, 20 + json_length)
    if (magic, version, length, json_kind, binary_kind) != (0x46546c67, 2, len(glb_raw), 0x4e4f534a, 0x004e4942):
        raise ValueError('Invalid official GLB structure')
    gltf = json.loads(glb_raw[20:20 + json_length])
    binary = glb_raw[28 + json_length:28 + json_length + binary_length]
    board = next(item for item in current if item['type'] == 'pcb_board')
    if board['width'] != 80 or board['height'] != 65 or board['center'] != {'x': 0, 'y': 0}:
        raise ValueError('Board outline changed: repeat edge-access review')
    reviewed_connectors = []
    for reference, side, observed_direction in [('J1', 'left', 'negative_x'), ('J2', 'right', 'positive_x')]:
        records = connector_records(current, reference)
        if records != connector_records(baseline, reference):
            raise ValueError(reference + ': supplier/footprint/placement/model changed; new 3D review required')
        bounds = model_bounds({'gltf': gltf, 'binary': binary, 'reference': reference})
        inset_mm = bounds['minimumPcbXyzMm'][0] + 40 if side == 'left' else 40 - bounds['maximumPcbXyzMm'][0]
        reviewed_connectors.append({'reference': reference, 'supplierCodes': records['source']['supplier_part_numbers']['jlcpcb'], 'pcbCenterMm': records['pcb']['center'], 'pcbCcwRotationDegrees': records['pcb']['rotation'], 'cadRotationDegrees': records['cad']['rotation'], 'modelObjUrl': records['cad']['model_obj_url'], **bounds, 'outwardFaceInsetFromBoardEdgeMm': inset_mm, 'openingDirectionObservedInNativeViewer': observed_direction, 'mechanicalFingerprintSha256': hashlib.sha256(json.dumps(records, sort_keys=True).encode()).hexdigest()})
    report = {'reviewedOn': '2026-10-04', 'artifactSha256': hashlib.sha256(current_raw).hexdigest(), 'modelBaselineArtifactSha256': baseline_sha256, 'glbSha256': hashlib.sha256(glb_raw).hexdigest(), 'currentConnectorRecordsMatchReviewedBaseline': True, 'exporterCoordinateMapping': 'PCB(x,y,z) = (-GLB.x, GLB.z, GLB.y)', 'visualReview': 'Native 3D viewer: USB mouth outward from left edge; both motor wire openings outward from right edge; top screw access clear. Rotated isometric and connector-facing views inspected.', 'connectors': reviewed_connectors, 'limitations': 'Mesh extents and visual orientation are checked. Plug overmold, wire insertion, enclosure and actual supplier sample fit require physical tests. J1 has a separate unresolved land-spacing blocker; this model review does not approve its footprint.'}
    Path('evidence/connector-orientation-A42.json').write_text(json.dumps(report, indent=2) + '\n')
    print(json.dumps({'matchingReviewedConnectors': len(reviewed_connectors), 'artifactSha256': report['artifactSha256'], 'edgeInsetsMm': [item['outwardFaceInsetFromBoardEdgeMm'] for item in reviewed_connectors]}))


if __name__ == '__main__':
    review()
