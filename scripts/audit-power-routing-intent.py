"""Conservative pad/edge screen of native saved power-routing intent.

This does not inspect manufactured copper or establish ampacity. Linear-width
segments use the convex hull of their endpoint copper discs, a conservative
capsule envelope. Actual routed-artifact DRC remains mandatory.
"""
import hashlib,json,math
from pathlib import Path
from shapely.geometry import Point,LineString,box
from shapely.ops import unary_union
from ground_copper_geometry import pad_geometry,RESOLUTION

artifact=Path('dist/index/circuit.json').read_bytes();elements=json.loads(artifact)
assert sum(e['type']=='source_component'for e in elements)==140
references={e['source_component_id']:e['name']for e in elements if e['type']=='source_component'}
source_ports={e['source_port_id']:e for e in elements if e['type']=='source_port'}
pcb_ports={e['pcb_port_id']:e for e in elements if e['type']=='pcb_port'}
pads=[e for e in elements if e['type']in('pcb_smtpad','pcb_plated_hole')]
shapes=[pad_geometry(pad)for pad in pads]
paths=json.loads(Path('evidence/native-power-routing-intent-A22.json').read_text())
assert len(paths)==7
issues=[];reviews=[]
for path in paths:
    reference,alias=path['connection'].split('.')
    candidates=[port for port in source_ports.values()if references.get(port['source_component_id'])==reference and alias in port['port_hints']]
    if len(candidates)!=1:raise ValueError('Ambiguous saved-path source port '+path['connection'])
    source_port=candidates[0]
    physical_ports=[port for port in pcb_ports.values()if port['source_port_id']==source_port['source_port_id']]
    if len(physical_ports)!=1:raise ValueError('Missing physical saved-path anchor '+path['connection'])
    anchor=physical_ports[0];route=path['route']
    if math.hypot(route[0]['x']-anchor['x'],route[0]['y']-anchor['y'])>1e-4:
        issues.append({'connection':path['connection'],'rule':'saved_anchor_mismatch','actualPort':anchor,'firstPoint':route[0]})
    copper=[]
    for first,second in zip(route,route[1:]):
        if first['route_type']!='wire'or second['route_type']!='wire'or first['layer']!=second['layer']:
            raise ValueError('Power intent screen requires same-layer wire segments')
        start_width=first['width'];mode=first.get('width_interpolation_mode')
        if mode not in(None,'linear'):raise ValueError('Unsupported power intent width interpolation')
        end_width=second['width']if mode=='linear'else start_width
        if not all(math.isfinite(n)for n in[first['x'],first['y'],second['x'],second['y'],start_width,end_width])or min(start_width,end_width)<=0:
            raise ValueError('Invalid power intent geometry')
        discs=[Point(point['x'],point['y']).buffer(width/2,quad_segs=RESOLUTION)for point,width in[(first,start_width),(second,end_width)]]
        copper.append(unary_union(discs).convex_hull)
    geometry=unary_union(copper)
    if not box(-39.5,-32,39.5,32).covers(geometry):issues.append({'connection':path['connection'],'rule':'copper_to_board_edge'})
    minimum_gap=math.inf
    for pad,shape in zip(pads,shapes):
        port=pcb_ports.get(pad.get('pcb_port_id'))
        owner=source_ports.get(port['source_port_id'])if port else None
        if owner and owner.get('subcircuit_connectivity_map_key')==source_port['subcircuit_connectivity_map_key']:
            continue
        gap=geometry.distance(shape);minimum_gap=min(minimum_gap,gap)
        if gap<.2-1e-5:issues.append({'connection':path['connection'],'rule':'conservative_unrelated_pad_gap','pad':pad.get('pcb_smtpad_id',pad.get('pcb_plated_hole_id')),'gapMm':gap})
    reviews.append({'connection':path['connection'],'minimumConservativeUnrelatedPadGapMm':minimum_gap})
report={'artifactSha256':hashlib.sha256(artifact).hexdigest(),'paths':reviews,'issues':issues,'limitations':__doc__}
Path('evidence/power-routing-intent-audit-A22.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps({'paths':len(paths),'reviews':reviews,'issues':issues},indent=2))
raise SystemExit(bool(issues))
