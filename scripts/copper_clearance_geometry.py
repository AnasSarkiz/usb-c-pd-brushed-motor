"""Physical wire copper in board-world mm; no electrical or geometric snapping.

Linear taper polygons follow the installed native renderer's boundary. Other
interpolation modes require independent support rather than a guessed width.
"""
import math
from shapely.geometry import LineString, Polygon
from shapely.affinity import rotate, translate
from ground_copper_geometry import RESOLUTION


def wire_copper_segments(trace):
    route = trace['route']
    mode = trace.get('route_thickness_mode', 'constant')
    if mode not in ('constant', 'interpolated'):
        raise ValueError('Unsupported trace thickness mode')
    if any(point['route_type'] not in ('wire', 'via') for point in route):
        raise ValueError('Unsupported route primitive')
    segments = []
    for first, second in zip(route, route[1:]):
        if not all(math.isfinite(point[axis]) for point in (first, second) for axis in ('x', 'y')):
            raise ValueError('Nonfinite copper coordinates')
        if (first['x'], first['y']) == (second['x'], second['y']):
            continue
        if first['route_type'] == second['route_type'] == 'via':
            raise ValueError('Wire is missing between displaced vias')
        layer = first['layer'] if first['route_type'] == 'wire' else first['to_layer']
        next_layer = second['layer'] if second['route_type'] == 'wire' else second['from_layer']
        if layer != next_layer:
            raise ValueError('Wire changes layer without a barrel')
        start_width_mm = first.get('start_width', first['width']) if first['route_type'] == 'wire' else second.get('start_width', second['width'])
        interpolation = first.get('width_interpolation_mode') if first['route_type'] == 'wire' else None
        if first['route_type'] == 'wire' and mode == 'interpolated' and interpolation is None:
            interpolation = 'linear'
        if interpolation not in (None, 'linear'):
            raise ValueError('Unsupported copper taper')
        if interpolation and second['route_type'] == 'via' and 'end_width' not in first:
            raise ValueError('Taper ending at barrel lacks its end width')
        end_width_mm = first.get('end_width', second.get('width')) if interpolation else start_width_mm
        if not all(isinstance(width, (int, float)) and math.isfinite(width) and width > 0 for width in (start_width_mm, end_width_mm)):
            raise ValueError('Invalid copper width')
        coordinates = [(point['x'], point['y']) for point in (first, second)]
        if interpolation:
            length_mm = math.dist(*coordinates)
            polygon = Polygon([(0, start_width_mm / 2), (length_mm, end_width_mm / 2), (length_mm, -end_width_mm / 2), (0, -start_width_mm / 2)])
            ccw_rotation_degrees = math.degrees(math.atan2(second['y'] - first['y'], second['x'] - first['x']))
            geometry = translate(rotate(polygon, ccw_rotation_degrees, origin=(0, 0)), first['x'], first['y'])
        else:
            geometry = LineString(coordinates).buffer(start_width_mm / 2, quad_segs=RESOLUTION)
        segments.append({'layer': layer, 'geometry': geometry, 'minimumWidthMm': min(start_width_mm, end_width_mm)})
    return segments
