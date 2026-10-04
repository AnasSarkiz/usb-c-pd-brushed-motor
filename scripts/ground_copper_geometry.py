"""Physical copper island graph. Net names select copper, never join islands.

Units are millimetres. Cross-layer connections require an actual plated barrel.
Unsupported/invalid geometry fails closed; no snapping or gap-closing tolerance.
"""
import math
from shapely.geometry import Point, LineString, Polygon, box
from shapely.affinity import rotate, translate
from shapely.ops import unary_union

RESOLUTION = 128


def checked_polygon(vertices):
    coordinates = [(point['x'], point['y']) for point in vertices]
    if not all(math.isfinite(n) for pair in coordinates for n in pair):
        raise ValueError('Nonfinite copper polygon')
    polygon = Polygon(coordinates)
    if not polygon.is_valid or polygon.area <= 0:
        raise ValueError('Invalid copper polygon')
    return polygon


def pad_geometry(element, drill=False):
    shape = element.get('hole_shape') if element['type'] == 'pcb_hole' else element['shape']
    if shape == 'polygon':
        if drill:
            raise ValueError('Polygon drill requires explicit geometry support')
        if element['type'] == 'pcb_smtpad':
            return checked_polygon(element['points'])
        geometry = checked_polygon(element['pad_outline'])
    elif shape == 'circle':
        diameter = element['hole_diameter'] if drill else element.get('outer_diameter', element.get('radius', 0) * 2)
        if not math.isfinite(diameter) or diameter <= 0:
            raise ValueError('Invalid circle diameter')
        geometry = Point(0, 0).buffer(diameter / 2, quad_segs=RESOLUTION)
    elif shape in ('rect', 'pill', 'rotated_pill'):
        width = element['hole_width'] if drill else element.get('outer_width', element.get('width'))
        height = element['hole_height'] if drill else element.get('outer_height', element.get('height'))
        if not all(math.isfinite(n) and n > 0 for n in (width, height)):
            raise ValueError('Invalid pad dimensions')
        if 'pill' in shape:
            radius = min(width, height) / 2
            if width == height:
                geometry = Point(0, 0).buffer(radius, quad_segs=RESOLUTION)
            else:
                endpoints = ((-width / 2 + radius, 0), (width / 2 - radius, 0)) if width > height else ((0, -height / 2 + radius), (0, height / 2 - radius))
                geometry = LineString(endpoints).buffer(radius, quad_segs=RESOLUTION)
        else:
            geometry = box(-width / 2, -height / 2, width / 2, height / 2)
    else:
        raise ValueError(f'Unsupported pad geometry {shape}')
    return translate(rotate(geometry, element.get('ccw_rotation', 0), origin=(0, 0)), element['x'], element['y'])


def pour_geometry(element):
    if element['shape'] != 'brep':
        raise ValueError('Unsupported copper pour shape')
    brep = element['brep_shape']
    outer = checked_polygon(brep['outer_ring']['vertices'])
    holes = [checked_polygon(ring['vertices']) for ring in brep['inner_rings']]
    return outer.difference(unary_union(holes))


def ground_islands(copper_by_layer, barrels):
    islands = []
    for layer, copper in copper_by_layer.items():
        merged = unary_union(copper)
        if not merged.is_valid:
            raise ValueError('Invalid combined copper')
        polygons = [merged] if merged.geom_type == 'Polygon' else list(merged.geoms)
        for polygon in polygons:
            if not polygon.is_empty:
                if polygon.geom_type != 'Polygon':
                    raise ValueError('Unexpected non-area copper')
                islands.append((layer, polygon))
    parent = list(range(len(islands)))
    for barrel in barrels:
        touching = [i for i, (layer, polygon) in enumerate(islands)
                    if layer in barrel['layers'] and polygon.intersection(barrel['geometry']).area > 0]
        roots = []
        for index in touching:
            while parent[index] != index:
                index = parent[index]
            roots.append(index)
        if roots:
            for root in roots[1:]:
                parent[root] = roots[0]
    roots = []
    for index in range(len(islands)):
        while parent[index] != index:
            index = parent[index]
        roots.append(index)
    return islands, roots


def pad_roots(pad, graph):
    islands, roots = graph
    return {roots[i] for i, (layer, polygon) in enumerate(islands)
            if layer in pad['layers'] and polygon.intersection(pad['geometry']).area > 0}
