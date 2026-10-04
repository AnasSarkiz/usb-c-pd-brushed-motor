"""Measure real power-route widths, lengths and isolated 1 oz resistance screens.
Board-world millimetres: +X right, +Y up; layers describe Z. This is a geometry
screen, not a physical temperature-rise qualification or proof of return paths.
"""
import argparse,gzip,hashlib,json,math
from pathlib import Path
from power_copper_geometry import measure_trace_wire_segments
parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('--artifact',default='dist/index/circuit.json')
parser.add_argument('--net-map',default='evidence/copper-net-map-A22.json')
arguments=parser.parse_args()
artifact_path=Path(arguments.artifact)
artifact=artifact_path.read_bytes()
if artifact_path.suffix=='.gz':artifact=gzip.decompress(artifact)
elements=json.loads(artifact)
assert sum(e['type']=='source_component'for e in elements)==140
traces=[e for e in elements if e['type']=='pcb_trace']
assert traces,'Full routed artifact required'
stackup=json.loads(Path('docs/STACKUP-A31.json').read_text())
assert next(e for e in elements if e['type']=='pcb_board')['num_layers']==len(stackup['copperLayers'])
nets={e['source_net_id']:e['name']for e in elements if e['type']=='source_net'}
intent=json.loads(Path(arguments.net_map).read_text())
net_names_by_intent={}
for identifier,name in nets.items():
    if identifier not in intent:raise ValueError('Unknown source net ownership '+identifier)
    net_names_by_intent.setdefault(intent[identifier],set()).add(name)
critical={'VBUS','EFUSE_IN','VIN_BUCK','SWITCH_NODE','VM','MOTOR_P','MOTOR_N','DUMP_LOAD','DUMP_MID_A','DUMP_MID_B','DUMP_MID_C','DUMP_MID_D','GND'}
summary={n:{'traces':0,'wireLengthMm':0,'minimumWidthMm':math.inf,'lengthBelow1mm':0,'isolatedSeriesResistanceOhmAt60C':0,'viaTransitions':0,'layers':set(),'narrowSegments':[]}for n in critical}
for trace in traces:
    identifier=trace['pcb_trace_id']
    if identifier not in intent:raise ValueError('Unknown trace ownership '+identifier)
    candidates=net_names_by_intent.get(intent[identifier],set())&critical
    if not candidates:continue
    if len(candidates)!=1:raise ValueError('Ambiguous critical trace ownership '+identifier)
    name=next(iter(candidates))
    report=summary[name];report['traces']+=1
    report['viaTransitions']+=sum(point['route_type']=='via'for point in trace['route'])
    for metrics in measure_trace_wire_segments(trace):
        width=metrics['minimumWidthMm'];length=metrics['lengthMm']
        report['wireLengthMm']+=length;report['minimumWidthMm']=min(report['minimumWidthMm'],width);report['layers'].add(metrics['layer'])
        report['isolatedSeriesResistanceOhmAt60C']+=metrics['resistanceOhm']
        report['lengthBelow1mm']+=metrics['lengthBelow1mm']
        if width<1 and length>.5:
            report['narrowSegments'].append({'trace':trace['pcb_trace_id'],'widthMm':width,'lengthMm':length,'start':metrics['start'],'end':metrics['end'],'layer':metrics['layer']})

for name,report in summary.items():
    if not report['traces']:raise ValueError('Missing critical routed net '+name)
    report['layers']=sorted(report['layers'])
    report['isolated2ASeriesLossWatts']=4*report['isolatedSeriesResistanceOhmAt60C']
output={'revision':'A22','artifactSha256':hashlib.sha256(artifact).hexdigest(),'stackup':stackup,'criticalNets':summary,'basis':'35um outer/15.2um inner copper, JLC04161H-7628; resistivity2.0e-8 ohm m at elevated copper temperature. Individual segment resistance sums include branches and are not equivalent circuit resistance. Ground pours and via sharing require independent review. No ampacity or temperature-rise pass inferred.'}
Path('evidence/routed-power-paths-A22.json').write_text(json.dumps(output,indent=2)+'\n')
print(json.dumps({n:{k:r[k]for k in ['traces','minimumWidthMm','wireLengthMm','lengthBelow1mm','viaTransitions']}for n,r in summary.items()},indent=2))
