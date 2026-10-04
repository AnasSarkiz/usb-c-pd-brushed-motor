"""Conservative static call-path screen of the linked ARM image, not a stack measurement."""
from pathlib import Path
import re,json,subprocess,hashlib
ROOT=Path.cwd();FOLDER=ROOT/'dist/firmware/bringup';ELF=FOLDER/'motor-controller-A22.elf'
assembly=subprocess.check_output(['/opt/homebrew/bin/arm-none-eabi-objdump','-d',str(ELF)],text=True)
(FOLDER/'disassembly.txt').write_text(assembly)
def canonical(name):return re.sub(r'\.(constprop|isra)\.\d+$',r'.\1',name)
frames={};origins={};issues=[]
for path in FOLDER.glob('*.su'):
 for line in path.read_text().splitlines():
  location,size,classification=line.split('\t');name=canonical(location.split(':')[-1])
  frames[name]=max(frames.get(name,0),int(size));origins.setdefault(name,set()).add(path.name)
  if classification!='static':issues.append(name+': nonstatic stack usage '+classification)
functions={};function=None
for line in assembly.splitlines():
 match=re.match(r'([0-9a-f]+) <([^>]+)>:',line)
 if match:
  function=canonical(match[2]);functions.setdefault(function,{'calls':set(),'assemblyStack':0,'indirect':False})
 elif function:
  block=functions[function]
  if re.search(r'\bblx\s+r\d+',line):block['indirect']=True
  call=re.search(r'\b(?:bl|b|b\.w)\s+[0-9a-f]+ <([^>]+)>',line)
  if call:
   destination=canonical(call[1].split('+')[0])
   if destination!=function:block['calls'].add(destination)
  push=re.search(r'\bpush\s+\{([^}]+)\}',line)
  if push:block['assemblyStack']+=4*len(push[1].split(','))
  allocation=re.search(r'\bsub\s+sp,\s*#(\d+)',line)
  if allocation:block['assemblyStack']+=int(allocation[1])
  if re.search(r'\bsub\s+sp,\s*r',line):issues.append(function+': register-sized stack allocation')
# Closed target callback assignments are in motor_main/stm32_{adc,i2c,safe_gpio}.
# Over-approximate every reachable callback within its production owner family.
for name,block in functions.items():
 if not block['indirect']:continue
 origin=' '.join(origins.get(name,[]))
 if 'stusb4500' in origin or name in ['hold_reset','late','read_checked','write_checked']:
  targets={'read_transfer','write_transfer','bus_time','motor_gpio_inhibit','motor_time_us'}
 elif 'motor_owner' in origin:targets={'read_transfer','write_transfer','bus_time','interrupt_pending','enter_critical','leave_critical'}
 elif 'stm32_safe_gpio' in origin:targets={'target_bsrr'}
 elif 'stm32_adc' in origin or 'stm32_i2c' in origin:targets={'target_write','motor_time_us'}
 else:issues.append(name+': indirect target family unresolved');targets=set()
 for target in targets:
  if target not in functions:issues.append(name+': missing callback '+target)
 block['calls'].update(targets)
for name,block in functions.items():
 block['frame']=frames.get(name,block['assemblyStack'])
 block['origin']=sorted(origins.get(name,[])) or ['linked assembly conservative push/allocation sum']
def bound(name,path):
 if name in path:raise RuntimeError('Recursive call graph: '+' -> '.join(path+[name]))
 if name not in functions:raise RuntimeError('Unresolved call target '+name)
 block=functions[name];children=[bound(child,path+[name])for child in block['calls']]
 longest=max(children,key=lambda item:item['bytes'],default={'bytes':0,'path':[]})
 return {'bytes':block['frame']+longest['bytes'],'path':[name]+longest['path']}
try:
 main=bound('motor_main',[]);exti=bound('EXTI4_15_IRQHandler',[]);timer=bound('TIM3_IRQHandler',[])
 # Cortex-M exception frames8 words each +up to4-byte alignment, EXTI can be
 # interrupted by higher-priority TIM3. No floating-point hardware state.
 combined=main['bytes']+exti['bytes']+timer['bytes']+2*(32+4)
 if combined>2048:issues.append('Bound exceeds reserved2KiB stack')
except RuntimeError as error:
 issues.append(str(error));main=exti=timer=None;combined=None
report={'revision':'A22','elfSha256':hashlib.sha256(ELF.read_bytes()).hexdigest(),'method':'compiler static frames/direct and closed indirect call paths; linked library assembly conservative allocation sum','foreground':main,'exti':exti,'timer':timer,'combinedUpperScreenBytes':combined,'reservedBytes':2048,'issues':issues,'functions':{name:{**block,'calls':sorted(block['calls'])}for name,block in functions.items()},'limitations':['Callbacks must remain the closed production target set; configuration changes require reanalysis','Static screen is not stack high-water evidence on a physical MCU','Latency/watchdog/interrupt-masking duration still require target captures']}
(ROOT/'evidence/firmware-stack-screen-A22.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps({k:report[k]for k in ['foreground','exti','timer','combinedUpperScreenBytes','reservedBytes','issues']},indent=2))
if issues:raise SystemExit(1)
