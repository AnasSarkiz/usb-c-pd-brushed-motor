"""Review C5184243 pin/land correspondence and the authorized X-only correction.

The archived official import is immutable evidence. GCT revisionB3 specifies
48VDC/5A, the following recommended land dimensions and +/-0.05mm tolerance.
"""
import argparse
import hashlib
import json
from decimal import Decimal
from pathlib import Path
from importlib.util import module_from_spec, spec_from_file_location
geometry_spec = spec_from_file_location("pad_review", Path(__file__).with_name("review-usb-c-pad-shifts.py"))
if geometry_spec is None or geometry_spec.loader is None:
    raise RuntimeError("Historical pad geometry reader unavailable")
geometry_module = module_from_spec(geometry_spec)
geometry_spec.loader.exec_module(geometry_module)
read_footprint = geometry_module.read_footprint
from ground_copper_geometry import pad_geometry

# Import the existing geometry reader without changing the historical A44 audit.

def review(source):
    original = Path('evidence/usb-c-C5184243-original-import-A45.tsx.txt').read_bytes()
    original_sha = hashlib.sha256(original).hexdigest()
    if original_sha != 'bfc396fc889c4dd3a1e8d5977c482db3060ed772cbd913a62b0fcb4959d3fc29':
        raise ValueError('Archived official import has changed')
    pads, protected = read_footprint(source.read_text())
    original_pads, original_protected = read_footprint(original.decode())
    if protected != original_protected or set(pads) != set(range(5, 17)):
        raise ValueError('Protected supplier definition or pin inventory changed')
    nominal_x = {5:3.2,6:2.4,7:-3.2,8:-2.4,9:1.75,10:1.25,11:.75,12:.25,13:-.25,14:-.75,15:-1.25,16:-1.75}
    shifts = []
    for pin, pad in pads.items():
        old = original_pads[pin]
        if old['protected'] != pad['protected']:
            raise ValueError('Supplier geometry changed outside SMT X positions')
        shift = pad['xs'][0] - old['xs'][0]
        if abs(shift) > Decimal('.001') or abs(float(pad['xs'][0])-nominal_x[pin]) > .05:
            raise ValueError('Movement exceeds authorized precision correction or drawing tolerance')
        bounds = pad['shape'].bounds
        if abs(bounds[2]-bounds[0]-(.6 if pin<=8 else .3)) > .05 or abs(bounds[3]-bounds[1]-1.15) > .05:
            raise ValueError('SMT land differs from the manufacturer drawing')
        shifts.append({'pin':pin,'shift_mm':float(shift)})
    ordered = sorted(pads,key=lambda pin:pads[pin]['shape'].bounds[0])
    gaps = [{'first_pin':first,'second_pin':second,'clearance_mm':pads[first]['shape'].distance(pads[second]['shape'])} for first,second in zip(ordered,ordered[1:])]
    if min(g['clearance_mm'] for g in gaps)<.2:
        raise ValueError('An actual adjacent-pad gap remains below0.20mm')
    probe_path = Path('dist/tests/supplier-audit/C5184243/circuit.json')
    probe = json.loads(probe_path.read_text())
    ports = [e for e in probe if e['type']=='source_port']
    if len(ports)!=16 or sorted(int(e['pin_number']) for e in ports)!=list(range(1,17)):
        raise ValueError('Missing or extra electrical pins')
    expected_hints={1:'EH4',2:'EH2',3:'EH1',4:'EH3',5:'GND1',6:'VBUS1',7:'GND2',8:'VBUS2',9:'CC2',10:'SBU1',11:'Dp2',12:'Dn1',13:'Dp1',14:'Dn2',15:'CC1',16:'SBU2'}
    for port in ports:
        pin=int(port['pin_number'])
        if expected_hints[pin] not in port['port_hints']:
            raise ValueError('Importer pin labeling disagrees with drawing review')
        pcb_port=next(e for e in probe if e['type']=='pcb_port' and e['source_port_id']==port['source_port_id'])
        lands=[e for e in probe if e['type'] in ('pcb_smtpad','pcb_plated_hole') and e.get('pcb_port_id')==pcb_port['pcb_port_id']]
        if len(lands)!=1 or f'pin{pin}' not in lands[0]['port_hints']:
            raise ValueError('Electrical pin to footprint correspondence fails')
    holes=[e for e in probe if e['type']=='pcb_hole']
    if len(holes)!=2 or any(e.get('pcb_port_id') or abs(e['hole_diameter']-.65)>.05 or abs(abs(e['x'])-2.89)>.05 for e in holes):
        raise ValueError('Locating holes do not match the drawing or are electrical')
    plated=[e for e in probe if e['type']=='pcb_plated_hole']
    for hole in plated:
        if abs(abs(hole['x'])-4.32)>.05 or abs(hole['hole_width']-.6)>.05 or abs(hole['outer_width']-1.)>.05:
            raise ValueError('Shell slot width/span differs from drawing')
        front=hole['y']<0
        if abs(hole['hole_height']-(1.4 if front else 1.7))>.05 or abs(hole['outer_height']-(1.8 if front else 2.1))>.05:
            raise ValueError('Shell slot length differs from drawing')
        if abs((2.1150644-hole['y'])-(7.35-2.6 if front else 7.35-2.6-4.18))>.05:
            raise ValueError('Shell slot longitudinal position differs from drawing')
    # Relative hole separation4.18mm and peg separation5.78mm are independent of origin.
    if abs(max(e['y'] for e in plated)-min(e['y'] for e in plated)-4.18)>.05:
        raise ValueError('Shell slot pitch mismatch')
    diagnostics=[e for e in probe if 'warning' in e['type'] or 'error' in e['type']]
    allowed={'source_refdes_convention_warning','source_no_power_pin_defined_warning','source_no_ground_pin_defined_warning'}
    if len(diagnostics)!=3 or any(e['type'] not in allowed for e in diagnostics) or any(e['type']=='pcb_trace' for e in probe):
        raise ValueError('Unexpected diagnostics or routing in the supplier probe')
    return {'source':str(source),'source_sha256':hashlib.sha256(source.read_bytes()).hexdigest(),'original_sha256':original_sha,'probe_sha256':hashlib.sha256(probe_path.read_bytes()).hexdigest(),'supplier':'C5184243','electrical_pins':16,'smt_lands':12,'grounded_shell_slots':4,'non_electrical_locating_holes':2,'protected_supplier_definition_unchanged':True,'minimum_clearance_mm':min(g['clearance_mm'] for g in gaps),'gaps':gaps,'shifts':shifts,'voltage_rating_v_dc':48,'collective_vbus_current_a':5,'maximum_contract_budget_v':21,'manufacturer_drawing':'evidence/usb-c-C5184243-manufacturer-drawing-A45.pdf','manufacturer_pcb_layout_tolerance_mm':.05,'diagnostics_retained':diagnostics,'limitations':'THT paste export and full-board placement/3D/copper reviewed separately; no physical qualification implied.'}

if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source',type=Path,default=Path('imports/USB4105_GF_A_120.tsx'))
    parser.add_argument('--report',type=Path)
    options=parser.parse_args();report=review(options.source)
    if options.report:options.report.write_text(json.dumps(report,indent=2)+'\n')
    print(json.dumps(report))
