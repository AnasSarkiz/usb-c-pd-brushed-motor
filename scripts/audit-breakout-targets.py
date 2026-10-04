"""Screen native breakout targets in board-world mm (+X right, +Y up).
Targets are routing intent, not manufactured copper. The0.50mm all-pad
planning gap reserves a0.60mm via plus0.20mm copper clearance; actual routing
still requires independent drill/copper checks, including same-net drills.
"""
import argparse,gzip,hashlib,json,math
from pathlib import Path
from shapely.geometry import Point,LineString,Polygon,box
from shapely.affinity import rotate,translate


def pad_shape(pad):
    if pad['shape']=='polygon':
        outline=pad['points']if pad['type']=='pcb_smtpad'else pad['pad_outline']
        return Polygon([(p['x'],p['y'])for p in outline])
    if pad['shape']=='circle':
        radius=pad['radius']if pad['type']=='pcb_smtpad'else pad['outer_diameter']/2
        local=Point(0,0).buffer(radius,quad_segs=128)
    else:
        width,height=pad.get('width',pad.get('outer_width')),pad.get('height',pad.get('outer_height'))
        if 'pill' in pad['shape']:
            radius=min(width,height)/2
            ends=[(-width/2+radius,0),(width/2-radius,0)]if width>height else[(0,-height/2+radius),(0,height/2-radius)]
            local=LineString(ends).buffer(radius,quad_segs=128)if ends[0]!=ends[1]else Point(0,0).buffer(radius,quad_segs=128)
        else:local=box(-width/2,-height/2,width/2,height/2)
    return translate(rotate(local,pad.get('ccw_rotation',0),origin=(0,0)),pad['x'],pad['y'])

parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('--artifact',default='dist/index/circuit.json')
arguments=parser.parse_args()
artifact_path=Path(arguments.artifact)
artifact=artifact_path.read_bytes()
if artifact_path.suffix=='.gz':artifact=gzip.decompress(artifact)
elements=json.loads(artifact)
assert sum(e['type']=='source_component'for e in elements)==140
sources={e['source_component_id']:e['name']for e in elements if e['type']=='source_component'}
ports={e['source_port_id']:e for e in elements if e['type']=='source_port'}
purchased={e['pcb_component_id']:sources.get(e.get('source_component_id'),'native')for e in elements if e['type']=='pcb_component'}
pads=[e for e in elements if e['type']in['pcb_smtpad','pcb_plated_hole']and e.get('pcb_port_id')]
# Component plated holes in this board are pills/rectangles; circular vias are
# inspected by the routed drill audit and are not component pads here.
shapes=[pad_shape(pad)for pad in pads]
issues=[];targets=[]
for target in [e for e in elements if e['type']=='pcb_breakout_point']:
    port=ports[target['source_port_id']];reference=sources[port['source_component_id']]
    assert reference in ['U1','U11']
    point=Point(target['x'],target['y'])
    nearest=min(zip(pads,shapes),key=lambda pair:point.distance(pair[1]));gap=point.distance(nearest[1])
    pin=port.get('name',port.get('pin_number'))
    actual_port=next(e for e in elements if e['type']=='pcb_port'and e['source_port_id']==target['source_port_id'])
    if reference=='U11'and abs(target['y']-actual_port['y'])>0.001:issues.append({'reference':reference,'pin':pin,'issue':'MCU target crosses the imported pin-row order','actualPadYMm':actual_port['y'],'targetYMm':target['y']})
    if reference=='U1' and int(port['pin_number'])==16:
        pd_top_pad_edge=max(shape.bounds[3] for pad,shape in zip(pads,shapes) if purchased[pad['pcb_component_id']]=='U1')
        corridor_depth_mm=target['y']-pd_top_pad_edge
        required_via_corridor_mm=0.60+2*0.25
        if corridor_depth_mm<=required_via_corridor_mm+1e-5:issues.append({'reference':reference,'pin':pin,'issue':'PD upper escape corridor cannot reserve the routed via plus two clearances','corridorDepthMm':corridor_depth_mm,'requiredDepthMm':required_via_corridor_mm})
    expected_layer="bottom" if (reference=="U1" and int(port["pin_number"])==16) or (reference=="U11" and int(port["pin_number"])in[7,8,15]) else "top"
    if target.get('layer')!=expected_layer:issues.append({'reference':reference,'pin':pin,'issue':'breakout target layer differs from intended escape','expectedLayer':expected_layer,'actualLayer':target.get('layer')})
    if gap<0.5-1e-5:issues.append({'reference':reference,'pin':pin,'xMm':target['x'],'yMm':target['y'],'gapMm':gap,'nearestComponent':purchased[nearest[0]['pcb_component_id']]})
    if abs(target['x'])>39.5 or abs(target['y'])>32:issues.append({'reference':reference,'pin':pin,'issue':'target outside usable board'})
    if any(point.distance(Point(x,y))<3.5 for x in[-35,35]for y in[-27.5,27.5]):issues.append({'reference':reference,'pin':pin,'issue':'target inside mounting reservation'})
    targets.append({'reference':reference,'pin':pin,'xMm':target['x'],'yMm':target['y'],'minimumPadGapMm':gap,'layer':target.get('layer')})
# Bottom targets require via landing space; this is conservative routing intent,
# not a substitute for auditing the actual native routed drills and copper.
minimum_bottom_target_pitch_mm=math.inf
bottom_targets=[target for target in targets if target['layer']=='bottom']
for index,target in enumerate(bottom_targets):
    for other in bottom_targets[index+1:]:
        pitch_mm=math.hypot(target['xMm']-other['xMm'],target['yMm']-other['yMm'])
        minimum_bottom_target_pitch_mm=min(minimum_bottom_target_pitch_mm,pitch_mm)
        if pitch_mm<0.85-1e-5:issues.append({'issue':'Bottom breakout targets cannot reserve 0.60mm vias with 0.25mm copper clearance','first':target,'second':other,'centerPitchMm':pitch_mm})
expected_pins={'U1' :{1,2,4,5,6,7,8,16,18,19,21,23,24},'U11':set(range(1,20))-{5}}
for reference,pin_numbers in expected_pins.items():
    actual_pins={int(ports[e['source_port_id']]['pin_number']) for e in elements if e['type']=='pcb_breakout_point' and sources[ports[e['source_port_id']]['source_component_id']]==reference}
    if actual_pins!=pin_numbers:issues.append({'issue':'Unexpected peripheral breakout pin set; ground must remain at component pads','reference':reference,'expectedPins':sorted(pin_numbers),'actualPins':sorted(actual_pins)})
if len(targets)!=31:issues.append({'issue':'Expected13 PD peripheral and18 MCU signal targets; ground retains actual component endpoints','expectedTargets':31,'actualTargets':len(targets)})
report={'minimumBottomTargetPitchMm':minimum_bottom_target_pitch_mm,'bottomTargets':len(bottom_targets),'artifactSha256':hashlib.sha256(artifact).hexdigest(),'targets':targets,'issues':issues,'basis':'Planning only; does not prove native routes, actual vias, current capacity or ground-plane connectivity.'}
Path('evidence/native-breakout-target-audit-A22.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps({'targets':len(targets),'issues':issues},indent=2))
if issues:raise SystemExit(1)
