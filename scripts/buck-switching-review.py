"""Conditional A22 screen using unchanged TI and Panasonic manufacturer models.
Models are typical; engineering parasitic/capacitance assumptions are explicit.
Native adaptive-step measurements capture extrema before 1us plot decimation.
"""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import hashlib,json,re,subprocess
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
ROOT=Path.cwd()
TI=ROOT/'evidence/TI-TPS54360-model-A22/TPS54360_PSPICE_TRANS/TPS54360_TRANS.LIB'
PAN=ROOT/'evidence/Panasonic-model-A14/35SVPK330M/35SVPK330M.lib'
OUT=ROOT/'evidence/buck-switching-A22';OUT.mkdir(exist_ok=True)
CACHE=ROOT/'.cache/buck-switching-review-A22';CACHE.mkdir(exist_ok=True)
CASES=[{'name':'5V-15V-step','vin':14.7,'bottom':20000,'voltage':5,'pwm':False},
{'name':'5V-20V-step','vin':19.45,'bottom':20000,'voltage':5,'pwm':False},
{'name':'9V-20V-step','vin':19.45,'bottom':1/(1/20000+1/21000),'voltage':9,'pwm':False},
{'name':'12V-20V-step','vin':19.45,'bottom':7500,'voltage':12,'pwm':False},
{'name':'5V-15V-PWM','vin':14.7,'bottom':20000,'voltage':5,'pwm':True},
{'name':'12V-20V-PWM','vin':19.45,'bottom':7500,'voltage':12,'pwm':True}]
def sha(path):return hashlib.sha256(path.read_bytes()).hexdigest()
def deck(case):
 load='PULSE(0 2 3m 1u 1u 24u 50u)' if case['pwm'] else 'PWL(0 0 3m 0 3.001m 2 5m 2 5.001m 0 7m 0)'
 return f'''A22 conditional typical switching model {case['name']}
.include "{TI}"
.include "{PAN}"
VIN vin 0 PWL(0 0 10u {case['vin']})
VEN en 0 PWL(0 0 20u 0 21u 3.3)
CIN vin 0 6.06u
XU boot comp en 0 sw rt vin fb 0 TPS54360_TRANS
CB boot sw 100n
RT rt 0 162k
LPOWER sw lx 8.2u
RL lx out 27m
DCATCH 0 sw SCHOTTKY
.model SCHOTTKY D(IS=10u N=1 RS=30m CJO=300p BV=40 IBV=1m)
VPOL out poly 0
XCP poly 0 35SVPK330M
RMLCC out ceramic 5m
CMLCC ceramic creturn 40u
VCS creturn 0 0
RTOP out fb 105.1k
RBOT fb 0 {case['bottom']}
RCOMP comp cz 27k
CCOMP cz 0 22n
CHF comp 0 22p
RBLEED out 0 1k
ILOAD out 0 {load}
.save v(out) i(LPOWER) v(sw) i(VPOL) i(VCS) i(VIN)
.options method=gear reltol=0.003 abstol=1e-9 chgtol=1e-14
.control
tran 1u 7m 0 100n
meas tran startup_peak MAX v(out) FROM=0 TO=3m
meas tran step_min MIN v(out) FROM=3m TO=3.5m
meas tran loaded_max MAX v(out) FROM=4m TO=5m
meas tran loaded_min MIN v(out) FROM=4m TO=5m
meas tran unload_peak MAX v(out) FROM=5m TO=7m
meas tran inductor_peak MAX i(LPOWER) FROM=0 TO=7m
meas tran poly_rms RMS i(VPOL) FROM=4m TO=5m
meas tran ceramic_rms RMS i(VCS) FROM=4m TO=5m
meas tran source_peak MIN i(VIN) FROM=3m TO=7m
linearize v(out) i(LPOWER) i(VPOL) i(VCS) i(VIN)
set wr_singlescale
set wr_vecnames
wrdata summary.txt v(out) i(LPOWER) i(VPOL) i(VCS) i(VIN)
quit
.endc
.end
'''
def run(case):
 folder=CACHE/case['name'];folder.mkdir(exist_ok=True)
 (folder/'.spiceinit').write_text('set ngbehavior=ps\n')
 source=deck(case);path=OUT/(case['name']+'.cir');path.write_text(source)
 cache=OUT/(case['name']+'.json')
 provenance={'deck':sha(path),'TI':sha(TI),'Panasonic':sha(PAN)}
 if cache.exists():
  existing=json.loads(cache.read_text())
  if existing.get('provenance')==provenance and existing.get('completed'):return existing
 print('Simulating '+case['name'],flush=True)
 log=OUT/(case['name']+'.log')
 with log.open('w')as handle:
  result=subprocess.run(['/opt/homebrew/bin/ngspice','-b',str(path)],cwd=folder,stdout=handle,stderr=subprocess.STDOUT,timeout=7200)
 text=log.read_text(errors='replace')
 if result.returncode or 'Error:' in text:raise RuntimeError(f'{case["name"]}: failed; inspect {log}')
 measurements={}
 for name in ['startup_peak','step_min','loaded_max','loaded_min','unload_peak','inductor_peak','poly_rms','ceramic_rms','source_peak']:
  match=re.search(r'^'+name+r'\s*=\s*([-+\deE.]+)',text,re.M)
  if not match:raise RuntimeError(case['name']+': missing measurement '+name)
  measurements[name]=float(match[1])
 samples=np.loadtxt(folder/'summary.txt',skiprows=1)
 if abs(samples[-1,0]-.007)>1e-12 or len(samples)<7000:raise RuntimeError('Incomplete transient')
 np.savetxt(OUT/(case['name']+'-samples.csv'),samples,delimiter=',',header='time_s,output_v,inductor_a,polymer_a,ceramic_a,source_sink_a',comments='')
 report={'case':case,'provenance':provenance,'completed':True,'measurements':measurements,'plot_samples':len(samples),'status':'conditional typical-model screen; not a hardware rating',
 'voltage_window_screen':measurements['step_min']>=case['voltage']*.95 and measurements['unload_peak']<=case['voltage']*1.05,
 'limitations':['TI and Panasonic models are typical; diode uses stated engineering model, not manufacturer corners','40uF effective MLCC and 5mOhm ESR assumed; minimum over bias/temperature must be qualified','Vin includes an engineering path-drop allowance, not charger/cable dynamics','2A chopped current is a conservative load waveform, not an electromagnetic motor or reversal model','Native RMS covers modeled mixed-frequency content; manufacturer polymer correction above500kHz is unspecified','Inductor startup peak is model-only; current limit delay and physical overshoot require measurement','Layout ESL, hot polymer ESR, thermal rise, back-drive and dump energy are outside this simulation']}
 cache.write_text(json.dumps(report,indent=2)+'\n')
 print('Completed '+case['name']+': '+json.dumps(measurements),flush=True)
 return report
with ThreadPoolExecutor(max_workers=2)as executor:reports=list(executor.map(run,CASES))
fig,axes=plt.subplots(3,2,figsize=(12,10),sharex=True)
for ax,report in zip(axes.flat,reports):
 case=report['case'];samples=np.loadtxt(OUT/(case['name']+'-samples.csv'),delimiter=',',skiprows=1)
 ax.plot(samples[:,0]*1000,samples[:,1]);ax.axhline(case['voltage']*.95,color='r',ls='--');ax.axhline(case['voltage']*1.05,color='r',ls='--');ax.set_title(case['name']);ax.set_ylabel('Motor supply (V)');ax.grid(alpha=.3)
axes[-1,0].set_xlabel('Time (ms)');axes[-1,1].set_xlabel('Time (ms)');fig.suptitle('A22 conditional TI/Panasonic switching models — no physical qualification');fig.tight_layout();fig.savefig(OUT/'transients.png',dpi=160)
(OUT/'report.json').write_text(json.dumps({'revision':'A22','models':{'TI':sha(TI),'Panasonic':sha(PAN)},'cases':reports},indent=2)+'\n')
print('All six conditional switching cases completed',flush=True)
