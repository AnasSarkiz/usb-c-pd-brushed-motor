"""Static uncertainty screen. Not a calibrated ADC port or transient proof."""
import json, math
from fractions import Fraction as F
from pathlib import Path

VREF_MIN, VREF_MAX = F(3234), F(3366)  # A11 TPS7A1633 +/-2%; ripple not qualified
ADC_ERROR = F(7)  # characterized6.5LSB +0.5 quantization, after calibration
LEAK_NA = F(70)  # DS12991 table48, powered analog pin below VDD, clamp disabled
PROFILES = {
    'A11_initial_1_percent': (F('0.01'), F('0.01')),
    'A11_initial_plus_80C_TCR': (F('0.018'), F('0.018')),
    'A19_initial_plus_80C_TCR': (F('0.003'), F('0.003')),
    # AT0.1%initial+0.2%TCR+0.3%125C endurance; RT0.1+0.2+0.5+0.05ohm.
    # Reserve bottom to0.81%; no sum of unlimited independent aging tests claimed.
    'A19_single_endurance_screen': (F('0.006'), F('0.0081')),
}

def voltage_interval(code, tolerances):
    top_t, bottom_t = tolerances
    top_lo, top_hi = 100000*(1-top_t), 100000*(1+top_t)
    bottom_lo, bottom_hi = 10000*(1-bottom_t), 10000*(1+bottom_t)
    gain_lo, gain_hi = 1+top_lo/bottom_hi, 1+top_hi/bottom_lo
    leakage_mv = LEAK_NA*top_hi/F(1000000)
    lo = max(F(0), (F(code)-ADC_ERROR)*VREF_MIN*gain_lo/4096-leakage_mv)
    hi = (F(code)+ADC_ERROR)*VREF_MAX*gain_hi/4096+leakage_mv
    return math.floor(lo), math.ceil(hi)

rows = []
for name, tolerances in PROFILES.items():
    item={'profile':name,'top_tolerance':float(tolerances[0]),'bottom_tolerance':float(tolerances[1]),'rails':[]}
    for voltage in [5000,9000,12000,15000,20000]:
        # Whole computed interval must fit acceptance window; never midpoint-only.
        passing=[n for n in range(4095) if (lambda bounds:bounds[0]>=voltage*95//100 and bounds[1]<=voltage*105//100)(voltage_interval(n,tolerances))]
        code=round(voltage*4096/(3300*11))
        bounds=voltage_interval(code,tolerances)
        item['rails'].append({'nominal_mv':voltage,'nominal_code':code,'nominal_interval_mv':bounds,'accept_code_min':min(passing) if passing else None,'accept_code_max':max(passing) if passing else None,'accept_code_count':len(passing),'nominal_accepted':code in passing})
    item['decay_code_max']=max(n for n in range(4095) if voltage_interval(n,tolerances)[1]<=1000)
    rows.append(item)
assert rows[0]['rails'][0]['accept_code_count']==0
assert rows[1]['rails'][0]['accept_code_count']==0
for row in rows[2:]:
    assert all(r['nominal_accepted'] for r in row['rails'])
# All corners independently calculate physical rail for sample/reference/tolerance/leakage;
# include ADC-error extremes and ensure outward rounded intervals enclose them.
corner_checks=0
for tolerances in PROFILES.values():
 for n in range(8,4095):
    bounds=voltage_interval(n,tolerances)
    for sign in [-1,1]:
     rt=100000*(1+sign*tolerances[0]);rb=10000*(1-sign*tolerances[1])
     for ref in [VREF_MIN,VREF_MAX]:
      for error in [-ADC_ERROR,ADC_ERROR]:
       for leak in [-LEAK_NA,LEAK_NA]:
        actual=(F(n)+error)*ref/4096*(rt+rb)/rb + leak*rt/1000000
        assert bounds[0]<=actual<=bounds[1]
        corner_checks+=1
report={'revision':'A19','status':'conditional static screening only','adc_error_lsb':float(ADC_ERROR),'vdda_mv':[int(VREF_MIN),int(VREF_MAX)],'input_leakage_na':int(LEAK_NA),'corner_checks':corner_checks,'profiles':rows,'limitations':['No actual ADC conversion/calibration/peripheral/sample provenance','Characterized TUE at35MHz; target clock/sample-rate accuracy and noise remain unqualified','VDD ripple and reference sampling must be bounded; interval is not valid during brownout','Divider capacitor leakage/PCB contamination and tolerance accumulation require measurement','ADC filter dynamics and back-drive are not represented by static intervals','Real component corners can safely inhibit a nominal rail; live reference calibration needed for robust yield','Single-endurance screen does not prove cumulative field aging or lifetime reliability']}
Path('evidence/adc-sensing-review-A19.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps({'corner_checks':corner_checks,'profiles':rows},indent=2))
