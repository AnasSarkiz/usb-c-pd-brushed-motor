"""Measure real power-route widths, lengths and isolated 1 oz resistance screens.
Board-world millimetres: +X right, +Y up; layers describe Z. This is a geometry
screen, not a physical temperature-rise qualification or proof of return paths.
"""
import hashlib,json,math
from pathlib import Path
from power_copper_geometry import measure_wire_segment
artifact=Path('dist/index/circuit.json').read_bytes()
elements=json.loads(artifact)
assert sum(e['type']=='source_component'for e in elements)==140
traces=[e for e in elements if e['type']=='pcb_trace']
assert traces,'Full routed artifact required'
nets={e['source_net_id']:e['name']for e in elements if e['type']=='source_net'}
critical={'VBUS','EFUSE_IN','VIN_BUCK','SWITCH_NODE','VM','MOTOR_P','MOTOR_N','DUMP_LOAD','GND'}
summary={n:{'traces':0,'wireLengthMm':0,'minimumWidthMm':math.inf,'lengthBelow1mm':0,'isolatedSeriesResistanceOhmAt60C':0,'viaTransitions':0,'layers':set(),'narrowSegments':[]}for n in critical}
for trace in traces:
    name=nets.get(trace.get('connection_name'))
    if name not in critical:continue
    report=summary[name];report['traces']+=1
    for first,second in zip(trace['route'],trace['route'][1:]):
        if first['route_type']=='via':report['viaTransitions']+=1;continue
        if second['route_type']!='wire' or first['layer']!=second['layer']:continue
        metrics = measure_wire_segment(first, second, trace.get('route_thickness_mode', 'constant'))
        width=metrics['minimumWidthMm'];length=metrics['lengthMm']
        report['wireLengthMm']+=length;report['minimumWidthMm']=min(report['minimumWidthMm'],width);report['layers'].add(first['layer'])
        report['isolatedSeriesResistanceOhmAt60C']+=metrics['resistanceOhm']
        report['lengthBelow1mm']+=metrics['lengthBelow1mm']
        if width<1 and length>.5:
            report['narrowSegments'].append({'trace':trace['pcb_trace_id'],'widthMm':width,'lengthMm':length,'start':{'x':first['x'],'y':first['y']},'end':{'x':second['x'],'y':second['y']},'layer':first['layer']})
for name,report in summary.items():
    if not report['traces']:raise ValueError('Missing critical routed net '+name)
    report['layers']=sorted(report['layers'])
    report['isolated2ASeriesLossWatts']=4*report['isolatedSeriesResistanceOhmAt60C']
output={'revision':'A22','artifactSha256':hashlib.sha256(artifact).hexdigest(),'criticalNets':summary,'basis':'35um copper; resistivity2.0e-8 ohm m at elevated copper temperature. Individual segment resistance sums include branches and are not equivalent circuit resistance. Ground pours and via sharing require independent review. No ampacity or temperature-rise pass inferred.'}
Path('evidence/routed-power-paths-A22.json').write_text(json.dumps(output,indent=2)+'\n')
print(json.dumps({n:{k:r[k]for k in ['traces','minimumWidthMm','wireLengthMm','lengthBelow1mm','viaTransitions']}for n,r in summary.items()},indent=2))
