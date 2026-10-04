"""Independent ordinary-drill/pad measurements on the full routed artifact.
Shapely2.1.2 uses mm geometry; original EP via exemptions bind exact archived
locations/sizes, not arbitrary same-net overlap or board-wide checker permission.
"""
import gzip,hashlib,json,math
from pathlib import Path
from shapely.geometry import Point,LineString,Polygon,box
from shapely.affinity import rotate,translate
from shapely.strtree import STRtree

RESOLUTION=128
EPS=1e-5

def rounded_shape(width,height):
    radius=min(width,height)/2
    if abs(width-height)<EPS:return Point(0,0).buffer(radius,quad_segs=RESOLUTION)
    endpoints=((-width/2+radius,0),(width/2-radius,0)) if width>height else ((0,-height/2+radius),(0,height/2-radius))
    return LineString(endpoints).buffer(radius,quad_segs=RESOLUTION)

def located_shape(element,drill=False):
    shape=element.get('hole_shape') if element['type']=='pcb_hole' else element['shape']
    if shape=='polygon' and element['type']=='pcb_smtpad':return Polygon([(p['x'],p['y'])for p in element['points']])
    x,y=element['x'],element['y']
    if shape=='polygon':
        geometry=Polygon([(p['x'],p['y'])for p in element['pad_outline']])
    elif shape=='circle':
        diameter=element.get('hole_diameter') if drill else element.get('outer_diameter',element.get('radius',0)*2)
        geometry=Point(0,0).buffer(diameter/2,quad_segs=RESOLUTION)
    else:
        if drill:width,height=element['hole_width'],element['hole_height']
        else:width,height=element.get('outer_width',element.get('width')),element.get('outer_height',element.get('height'))
        geometry=rounded_shape(width,height) if 'pill' in shape else box(-width/2,-height/2,width/2,height/2)
    return translate(rotate(geometry,element.get('ccw_rotation',0),origin=(0,0)),x,y)

artifact=Path('dist/index/circuit.json').read_bytes()
elements=json.loads(artifact)
assert sum(e['type']=='source_component'for e in elements)==140
assert any(e['type']=='pcb_trace'for e in elements)
original=json.loads(gzip.decompress(Path('evidence/validated-preroute-circuit-A22.json.gz').read_bytes()))
original_vias=[e for e in original if e['type']=='pcb_via']
assert len(original_vias)==12
pads=[e for e in elements if e['type']in ['pcb_smtpad','pcb_plated_hole']]
pad_geometries=[located_shape(e)for e in pads]
pad_tree=STRtree(pad_geometries)
drills=[]
issues=[]
ordinary_vias=0
minimum_drill_drill=math.inf
minimum_drill_pad=math.inf
for e in elements:
    if e['type']=='pcb_via':
        geometry=Point(e['x'],e['y']).buffer(e['hole_diameter']/2,quad_segs=RESOLUTION)
        is_original=any(abs(e['x']-o['x'])<EPS and abs(e['y']-o['y'])<EPS and abs(e['hole_diameter']-o['hole_diameter'])<EPS and abs(e['outer_diameter']-o['outer_diameter'])<EPS for o in original_vias)
        if not is_original:
            ordinary_vias+=1
            if abs(e['hole_diameter']-.3)>EPS or abs(e['outer_diameter']-.6)>EPS:issues.append({'rule':'ordinary_via_size','via':e['pcb_via_id']})
            if e['layers']!=['top','bottom']:issues.append({'rule':'ordinary_via_layer_span','via':e['pcb_via_id']})
            for index in pad_tree.query(geometry.buffer(.2)):
                distance=geometry.distance(pad_geometries[index]);minimum_drill_pad=min(minimum_drill_pad,distance)
                if distance+EPS<.2:issues.append({'rule':'ordinary_drill_to_component_pad','via':e['pcb_via_id'],'pad':pads[index].get('pcb_smtpad_id',pads[index].get('pcb_plated_hole_id')),'clearanceMm':distance})
        drills.append((e['pcb_via_id'],geometry,e))
    elif e['type']in ['pcb_plated_hole','pcb_hole']:
        if e.get('shape')=='polygon':raise ValueError('Polygon PTH drill requires explicit hole geometry support')
        drills.append((e.get('pcb_plated_hole_id',e.get('pcb_hole_id')),located_shape(e,True),e))
for index,(identifier,geometry,e)in enumerate(drills):
    for other_id,other_geometry,other in drills[index+1:]:
        distance=geometry.distance(other_geometry);minimum_drill_drill=min(minimum_drill_drill,distance)
        if distance+EPS<.25:issues.append({'rule':'drill_to_drill','first':identifier,'second':other_id,'clearanceMm':distance})
report={'revision':'A22','artifactSha256':hashlib.sha256(artifact).hexdigest(),'ordinaryVias':ordinary_vias,'originalThermalVias':12,'drills':len(drills),'minimumDrillDrillMm':minimum_drill_drill,'minimumOrdinaryDrillPadWithinSearchMm':minimum_drill_pad if math.isfinite(minimum_drill_pad) else None,'issues':issues,'limitations':'No source-net exception for ordinary via drills. Original EP exclusions bind exact coordinates and sizes. Other routed copper checks are separately mandatory.'}
Path('evidence/routed-drill-audit-A22.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps({key:report[key]for key in ['ordinaryVias','originalThermalVias','drills','minimumDrillDrillMm']}));print('issues',len(issues))
raise SystemExit(bool(issues))
