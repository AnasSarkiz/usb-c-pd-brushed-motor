"""Propose native component placements using unchanged supplier courtyards.

This planning screen does not replace native PCB/functional/visual validation.
Run from the board directory with the recorded Shapely Python environment.
"""
import gzip,json,math
from pathlib import Path
from shapely.geometry import Polygon,box,Point
from shapely.affinity import rotate,translate
j=json.load(gzip.open('evidence/validated-preroute-circuit-A22.json.gz'))
placement=json.load(open('evidence/local-decoupling-original-A22.json'))
src={e['source_component_id']:e['name']for e in j if e['type']=='source_component'}
pc={e['pcb_component_id']:src.get(e.get('source_component_id'))for e in j if e['type']=='pcb_component'}
shapes={}
for e in j:
 if e['type'] not in ['pcb_courtyard_outline','pcb_courtyard_rect']:continue
 ref=pc.get(e.get('pcb_component_id'))
 if not ref:continue
 if 'outline'in e:shape=Polygon([(p['x'],p['y'])for p in e['outline']])
 else:
  c=e['center'];shape=box(c['x']-e['width']/2,c['y']-e['height']/2,c['x']+e['width']/2,c['y']+e['height']/2)
 old=placement[ref];shapes[ref]=rotate(translate(shape,xoff=-old['x'],yoff=-old['y']),-old['ccwRotationDegrees'],origin=(0,0))
requests=[
 ('R69',(-22,-29.5),None,[0],0),
 ('R70',(-12.5,-29.5),None,[0],0),
 ('R71',(-2,-29.5),None,[0],0),
 ('R72',(7.5,-29.5),None,[0],0),
 ('U1',(-24.4,4),None,[0],2),
 ('C18',(25.5,-14),None,[0],3),
 ('R2',(-14,6),(-22.4,2.7501264),[180],3),
 ('R3',(-13,8.25),(-22.4,3.2498736),[90,0,180,270],3),
 ('D3',(-17,6),None,[270],0),
 ('D2',(-22,8),None,[0,90,180,270],2),
 ('Q7',(-2,-10),None,[0,90,180,270],3),
 ('Q2',(35.5,-11),None,[0,90,180,270],2),
 ('Q3',(35.5,-15),None,[0,90,180,270],2),
 ('D9',(35,-20),None,[0,90,180,270],2),
 ('C6',(-29.2,6.5),(-26.4,4.2498736),[90,270],2),
 ('C7',(-29.2,1.6),(-26.4,3.2498936),[270,90],2),
 ('C8',(-25.2,-.2),(-26.4,2.7501264),[0,180],3),
 ('C4',(-28.6,11.5),(-29.86893,14.024895),[270,0,180,90],3),
 ('C5',(-22,11.5),(-22.86893,14.024895),[270,0,180,90],3),
 ('C2',(-36,14),(-34.13107,14.024895),[0,90,180,270],3),
 ('C3',(-26,11.5),(-27.13107,14.024895),[270,0,180,90],3),
 ('C16',(15.2,-16),(10.099965,-18.5),[0],3),
 ('C17',(15.2,-19.5),(10.099965,-18.5),[0],3),
 ('C15',(-6.7,-13.5),(-8.065,-16.230892),[180,270,0,90],2),
 ('C13',(-9.2,-10.6),(-8.065,-16.230892),[180,0],1),
 ('C9',(-25.8,-24),(-24.873248,-21.925078),[270,0,180,90],3),
 ('C10',(-27.5,-15.2),(-24.873248,-16.074922),[180,0,270,90],3),
 ('C11',(-18,-13.8),(-19.126752,-16.724922),[0,180,90,270],3),
 ('R4',(-21,0),(-23.1501264,2),[0,180,90,270],4),
 ('R56',(-17,-10.2),None,[0,180,90,270],3),
 ('R17',(-13.2,-14.3),(-10.605,-16.230892),[270,0,180,90],3),
 ('R7',(-28.3,-18.65),None,[180],1),
 ('R8',(-31,-23),None,[0,180,90,270],3),
 ('R9',(-27.5,-25.25),None,[0,180,90,270],3),
 ('R22',(-9.5,-24.95),(-9.335,-21.769108),[270],1),
 ('C20',(-13.3,-22.8),(-9.335,-21.769108),[180],.5),
 ('C19',(-12.35,-25.05),(-9.5,-25.65),[180],.5),
 ('R19',(-16.8,-24),(-10.605,-21.769108),[180],.5),
 ('R18',(-16.7,-16.75),None,[270,90],1),
 ('R55',(-16.7,-20.6),None,[270,90],1),
 ('R20',(-19.8,-25.4),(-10.605,-21.769108),[270,90,180,0],1),
 ('R21',(-16.1,-26.1),(-10.605,-21.769108),[180,0,270,90],1),
 ('C21',(5.9,13.9),(3.635,11.7051),[90,0,180,270],4),
 ('C22',(7.4,11.5),(4.905,11.7051),[0,180,90,270],4),
 ('C23',(-.9,13),(1.095,11.7051),[90,0,180,270],3),
 ('C26',(23.1,5.5),(24.024922,2.873248),[0],1),
 ('C27',(26,5.9),(25.325078,2.873248),[90,270],1),
 ('C28',(28.3,5.9),(25.975106,2.873248),[270],1),
 ('C25',(8.5,7.7),(11.095,7.7051),[180,0,90,270],4),
]
moving={r[0]for r in requests}
def position_shape(ref,p):return translate(rotate(shapes[ref],p['ccwRotationDegrees'],origin=(0,0)),xoff=p['x'],yoff=p['y'])
occupied={ref:position_shape(ref,p)for ref,p in placement.items()if ref not in moving}
keepouts=[Point(x,y).buffer(3.5)for x in [-35,35]for y in [-27.5,27.5]]
keepouts.extend([Point(-9,20.94).buffer(8),Point(10,21).buffer(6)])
board=box(-39.5,-32,39.5,32)
manifest={p['ref']:p for p in json.load(open('docs/design-manifest.json'))}
port_offsets={}
for ref in moving:
 probe=json.load(open('dist/tests/supplier-audit/'+manifest[ref]['code']+'/circuit.json'))
 port=next((e for e in probe if e['type']=='source_port'and e.get('pin_number')==1),None)
 pp=next((e for e in probe if e['type']=='pcb_port'and e['source_port_id']==port['source_port_id']),None)if port else None
 if pp:port_offsets[ref]=Point(pp['x'],pp['y'])
report=[]
for ref,preferred,target,rotations,radius in requests:
 candidates=[]
 preferred_shape=position_shape(ref,{'x':preferred[0],'y':preferred[1],'ccwRotationDegrees':rotations[0]})
 print('Preferred occupied',ref,[(n,round(preferred_shape.distance(sh),3))for n,sh in occupied.items()if preferred_shape.distance(sh)<.25],flush=True)
 for rot in rotations:
  for xi in range(-int(radius*4),int(radius*4)+1):
   for yi in range(-int(radius*4),int(radius*4)+1):
    x=preferred[0]+xi*.25;y=preferred[1]+yi*.25;p={'x':x,'y':y,'ccwRotationDegrees':rot};shape=position_shape(ref,p)
    if not board.contains(shape):continue
    if any(shape.distance(s)<.25-1e-8 for s in occupied.values()):continue
    if any(shape.distance(s)<.25-1e-8 for s in keepouts):continue
    if target is not None and ref not in port_offsets:
     raise RuntimeError('Required electrical pin missing from supplier probe: '+ref)
    pin=translate(rotate(port_offsets[ref],rot,origin=(0,0)),xoff=x,yoff=y)if target is not None else None
    pin_distance=pin.distance(Point(target))if target is not None else None
    cost=math.hypot(x-preferred[0],y-preferred[1])+.35*(pin_distance if pin_distance is not None else 0)+.02*rotations.index(rot)
    candidates.append((cost,p,shape,pin_distance))
 print(ref, 'candidates', len(candidates), flush=True)
 if not candidates:
  p={'x':preferred[0],'y':preferred[1],'ccwRotationDegrees':rotations[0]};shape=position_shape(ref,p)
  print('Preferred blockers',[(n,round(shape.distance(s),3))for n,s in occupied.items()if shape.distance(s)<.25], flush=True)
  raise RuntimeError('No legal native placement candidate for '+ref)
 cost,p,shape,pin_distance=min(candidates,key=lambda c:c[0]);placement[ref]=p;occupied[ref]=shape
 print('chosen',ref,p,pin_distance,flush=True)
 report.append({'ref':ref,'placement':p,'pinToTargetMm':pin_distance,'courtyardBounds':shape.bounds})
Path('.cache/placement-local-decoupling-proposed-A22.json').write_text(json.dumps(placement,indent=2)+'\n')
Path('evidence/local-decoupling-proposal-A22.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report,indent=2))
