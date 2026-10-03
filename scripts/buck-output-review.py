"""A10 engineering screen using TI's CCM equivalent model, not hardware approval."""
import argparse
import itertools
import json
import math
from pathlib import Path
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--candidate', choices=['C133439', 'C178373'], default='C178373')
args = parser.parse_args()
profile = {
    'C133439': dict(part='APSG250ELL331MJB5S', esr_ohms=.014, rating_a=5, pwm_factor=.6,
                    low_factor=.35, status='unused candidate, THT paste blocker'),
    'C178373': dict(part='35SVPK330M', esr_ohms=.018, rating_a=4.4, pwm_factor=.7,
                    low_factor=.3, status='active C18, provisional; Tx <=105 C only'),
}[args.candidate]
output_prefix = f'evidence/buck-output-{args.candidate}-A10'

FREQUENCY_HZ = np.geomspace(1, 300_000, 800)
S = 2j * np.pi * FREQUENCY_HZ
GM_EA_A_PER_V = 350e-6
GM_PS_A_PER_V = 12
R_O_OHMS = 10_000 / GM_EA_A_PER_V
C_O_F = GM_EA_A_PER_V / (2 * np.pi * 2.5e6)
R_COMP_OHMS = 27_000
C_COMP_F = 22e-9
C_POLE_F = 22e-12


def loop_response(case):
    z_comp_ohms = 1 / (1 / R_O_OHMS + S * C_O_F + S * C_POLE_F +
                      1 / (R_COMP_OHMS + 1 / (S * C_COMP_F)))
    load_ohms = case['motor_voltage_v'] / case['load_current_a']
    admittance_siemens = 1 / load_ohms + S * case['bulk_capacitance_f'] / (
        1 + S * case['bulk_capacitance_f'] * case['bulk_esr_ohms'])
    admittance_siemens += S * case['ceramic_capacitance_f'] / (
        1 + S * case['ceramic_capacitance_f'] * case['ceramic_esr_ohms'])
    feedback_ratio = 0.8 / case['motor_voltage_v']
    return (GM_EA_A_PER_V * GM_PS_A_PER_V * case['gm_product_factor'] *
            z_comp_ohms / admittance_siemens * feedback_ratio *
            np.exp(-S * case['sample_delay_s']))


def crossovers(case):
    response = loop_response(case)
    gain_db = 20 * np.log10(np.abs(response))
    phase_degrees = np.unwrap(np.angle(response)) * 180 / np.pi
    crossings = np.flatnonzero(np.diff(np.sign(gain_db)))
    results = []
    for index in crossings:
        fraction = -gain_db[index] / (gain_db[index + 1] - gain_db[index])
        frequency_hz = math.exp(np.log(FREQUENCY_HZ[index]) + fraction *
                                np.log(FREQUENCY_HZ[index + 1] / FREQUENCY_HZ[index]))
        phase_margin_degrees = 180 + phase_degrees[index] + fraction * (
            phase_degrees[index + 1] - phase_degrees[index])
        results.append(dict(frequency_hz=frequency_hz,
                            phase_margin_degrees=phase_margin_degrees))
    return results


# Each varied ESR/derating/GM/delay is a sensitivity assumption, NOT a guaranteed
# capacitor/IC limit. No MLCC minimum is invented: sweep includes zero credit.
case_keys = ['motor_voltage_v', 'load_current_a', 'bulk_capacitance_f',
             'ceramic_capacitance_f', 'bulk_esr_ohms', 'ceramic_esr_ohms',
             'gm_product_factor', 'sample_delay_s']
case_axes = [[5, 9, 12], [1, 2, 2.423], [211.2e-6, 264e-6, 330e-6, 396e-6, 475.2e-6],
             [0, 40e-6, 112.8e-6, 169.2e-6], [0, profile["esr_ohms"], 1.5 * profile["esr_ohms"], .1, .6],
             [.001, .005, .02], [.75**2, 1, 1.25**2], [0, 1 / (2 * 480_000)]]
worst_margin = None
maximum_crossover = None
violations = []
case_count = 0
for combination in itertools.product(*case_axes):
    case = dict(zip(case_keys, combination))
    crossings = crossovers(case)
    case_count += 1
    if len(crossings) != 1:
        violations.append(dict(case=case,reason='not exactly one crossover',crossovers=crossings))
    for crossing in crossings:
        reviewed = dict(case=case, **crossing)
        if worst_margin is None or crossing['phase_margin_degrees'] < worst_margin['phase_margin_degrees']:
            worst_margin = reviewed
        if maximum_crossover is None or crossing['frequency_hz'] > maximum_crossover['frequency_hz']:
            maximum_crossover = reviewed
        if crossing['phase_margin_degrees'] < 45 or crossing['frequency_hz'] > 480_000 / 10:
            violations.append(dict(case=case,reason='CCM screening threshold',**crossing))

# Independent limiting-case checks: ideal single-capacitor stage equals TI Eq11;
# capacitor RMS triangle equals delta-I / sqrt(12), not half peak ripple.
for voltage_v in [5, 9, 12]:
    load_ohms = voltage_v / 2
    capacitance_f = 330e-6
    for frequency_hz in [100, 1000, 10000]:
        direct = GM_PS_A_PER_V / (1 / load_ohms + 2j * np.pi * frequency_hz * capacitance_f)
        equation_11 = GM_PS_A_PER_V * load_ohms / (
            1 + 2j * np.pi * frequency_hz * load_ohms * capacitance_f)
        assert abs(direct - equation_11) < 1e-10

ripple_cases = []
for input_voltage_v, output_voltage_v in itertools.product([14.25 - .55, 21 - .55], [5, 9, 12]):
    inductor_ripple_a = (input_voltage_v - output_voltage_v) * output_voltage_v / (
        input_voltage_v * 6.56e-6 * 480_000)
    ripple_cases.append(dict(input_voltage_v=input_voltage_v, output_voltage_v=output_voltage_v,
                             inductor_ripple_a=inductor_ripple_a,
                             capacitor_switch_ripple_rms_a=inductor_ripple_a / math.sqrt(12)))
max_switch_ripple_a = max(c['capacitor_switch_ripple_rms_a'] for c in ripple_cases)
# A signed +/-I motor waveform can approach I RMS at 50% duty. It is not
# conservatively represented by unidirectional I*sqrt(D*(1-D)). Slow mechanical
# envelopes/startup/reversal are outside this stationary PWM ripple screen.
peak_motor_current_a = 2.423
screened_pwm_rms_a = peak_motor_current_a
combined_rms_a = math.hypot(screened_pwm_rms_a, max_switch_ripple_a)
report = dict(
    revision='A10 candidate review', model='TI TPS54360 Sections 7.3.14-16 CCM equivalent circuit',
    status='conditional engineering screen only; no placement or hardware approval',
    candidate=f'{args.candidate} / {profile["part"]}', candidate_status=profile['status'],
    interpretation={
        'sweep_kind': 'deliberately broad sensitivity envelope, not guaranteed component corners',
        'high_esr_cases': f'constant 0.1/0.6 ohm models contradict the {profile["esr_ohms"] * 1000:g} milliohm 100-300 kHz specification; these sensitivity assumptions do not describe real full-band capacitor behavior',
        'frequency_limit': 'crossovers above 48 kHz are outside the screening model design range; their phase margins do not establish hardware instability',
        'threshold_result': 'violations retained; no compensation approval or component rejection solely from this sweep',
    },
    case_axes=dict(zip(case_keys,case_axes)),case_count=case_count,
    worst_phase_margin=worst_margin, maximum_crossover=maximum_crossover,
    violations=violations, ripple_cases=ripple_cases,
    capacitor_ripple=dict(motor_pwm_rms_a=screened_pwm_rms_a,
                         buck_switch_rms_a=max_switch_ripple_a,
                         combined_rms_a=combined_rms_a,
                         conservative_10khz_rating_a=profile['rating_a'] * profile['pwm_factor'],
                         rating_temperature_limit='Tx <=105 C for C178373; not a 125 C motor rating',
                         below_10khz_behavior=f'must qualify separately; 1 kHz multiplier {profile["low_factor"]:g}',
                         above_500khz_behavior='manufacturer multiplier unspecified; ceramics and measurements required'),
    exclusions=['DCM/Eco-mode','slope-compensation full model','switch parasitics and layout',
                'guaranteed GM/ESR across temperature','MLCC DC-bias qualification',
                'transient current sharing','600 kHz ripple multiplier','startup/stall/reversal measurements'],
    equation_11_crosscheck='9 comparisons passed')
Path(output_prefix + '-review.json').write_text(json.dumps(report,indent=2)+'\n')
fig, axes = plt.subplots(2,1,figsize=(9,6),sharex=True,layout='constrained')
for voltage_v in [5,9,12]:
    nominal = dict(motor_voltage_v=voltage_v,load_current_a=2,bulk_capacitance_f=330e-6,
                   ceramic_capacitance_f=40e-6,bulk_esr_ohms=profile['esr_ohms'],ceramic_esr_ohms=.005,
                   gm_product_factor=1,sample_delay_s=1/(2*600_000))
    response = loop_response(nominal)
    axes[0].semilogx(FREQUENCY_HZ,20*np.log10(abs(response)),label=f'{voltage_v} V')
    axes[1].semilogx(FREQUENCY_HZ,np.unwrap(np.angle(response))*180/np.pi,label=f'{voltage_v} V')
axes[0].axhline(0,color='gray',linewidth=.8)
axes[1].axhline(-135,color='gray',linewidth=.8,linestyle='--')
axes[0].set_ylabel('Loop gain (dB)'); axes[1].set_ylabel('Loop phase (degrees)')
axes[1].set_xlabel('Frequency (Hz)')
axes[0].set_ylim(-40,80); axes[1].set_ylim(-220,-30)
for axis in axes: axis.grid(True,which='both',alpha=.2); axis.legend(); axis.set_xlim(10,100_000)
fig.suptitle('Candidate output bank: preliminary CCM screen\nTypical IC model and assumed capacitor parameters; measurements pending',fontsize=11)
fig.savefig(output_prefix + '-ccm.png',dpi=160)
print(json.dumps(dict(case_count=case_count,worst_phase_margin=worst_margin,
                      maximum_crossover=maximum_crossover,violations=len(violations),
                      combined_rms_a=combined_rms_a),indent=2))
raise SystemExit(bool(violations))
