"""A14 CCM sensitivity screen using the unchanged exact Panasonic SPICE model.

This is not a temperature/bias-qualified switching model or hardware approval.
"""
import hashlib
import itertools
import json
import math
from pathlib import Path
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

MODEL_PATH = Path('evidence/Panasonic-model-A14/35SVPK330M/35SVPK330M.lib')
S_PARAMETER_PATH = MODEL_PATH.with_name('35SVPK330M_series.s2p')
components = []
for line in MODEL_PATH.read_text().splitlines():
    fields = line.split()
    if not fields or fields[0].startswith('*'):
        continue
    if fields[0].upper() == '.SUBCKT':
        if fields[1:] != ['35SVPK330M', '1', '2']:
            raise ValueError('Unexpected exact-part model or terminal mapping')
        continue
    if fields[0].upper() == '.ENDS':
        continue
    if len(fields) != 4 or fields[0][0] not in 'RCL':
        raise ValueError(f'Unsupported manufacturer model statement: {line}')
    magnitude = float(fields[3])
    if not math.isfinite(magnitude) or magnitude <= 0:
        raise ValueError(f'Invalid passive element: {line}')
    components.append((fields[0], int(fields[1]), int(fields[2]), magnitude))
if len({row[0] for row in components}) != len(components):
    raise ValueError('Duplicate manufacturer element identifier')
nodes = sorted({node for row in components for node in row[1:3]} - {2})
node_indices = {node: index for index, node in enumerate(nodes)}


def capacitor_impedance(case):
    frequencies_hz = np.asarray(case['frequencies_hz'])
    s = 2j * np.pi * frequencies_hz
    admittance = np.zeros((len(s), len(nodes), len(nodes)), dtype=complex)
    for name, first, second, magnitude in components:
        kind = name[0]
        branch = (np.full(len(s), 1 / (magnitude * case['r_scale'])) if kind == 'R'
                  else s * magnitude * case['c_scale'] if kind == 'C'
                  else 1 / (s * magnitude))
        if first != 2:
            admittance[:, node_indices[first], node_indices[first]] += branch
        if second != 2:
            admittance[:, node_indices[second], node_indices[second]] += branch
        if first != 2 and second != 2:
            admittance[:, node_indices[first], node_indices[second]] -= branch
            admittance[:, node_indices[second], node_indices[first]] -= branch
    injection = np.zeros((len(s), len(nodes)), dtype=complex)
    injection[:, node_indices[1]] = 1
    voltages = np.linalg.solve(admittance, injection[..., None])[..., 0]
    residual = np.einsum('fij,fj->fi', admittance, voltages) - injection
    if np.max(np.abs(residual)) > 1e-5:
        raise ValueError('Manufacturer model nodal current residual exceeded bound')
    return voltages[:, node_indices[1]]


# Independent two-port relation for a series impedance, Z=2*Z0*S11/S21.
parameter_rows = []
for line in S_PARAMETER_PATH.read_text().splitlines():
    if line.startswith('#') and line.split() != ['#', 'Hz', 'S', 'RI', 'R', '50']:
        raise ValueError('Unexpected S-parameter frequency/encoding/reference impedance')
    if not line.strip() or line.startswith(('!', '#')):
        continue
    row = [float(field) for field in line.split()]
    if len(row) != 9:
        raise ValueError('Unexpected two-port parameter row')
    parameter_rows.append(row)
parameters = np.asarray(parameter_rows)
manufacturer_z = 100 * (parameters[:, 1] + 1j * parameters[:, 2]) / (
    parameters[:, 3] + 1j * parameters[:, 4])
model_z = capacitor_impedance(dict(frequencies_hz=parameters[:, 0], r_scale=1, c_scale=1))
relative_error = np.abs(model_z - manufacturer_z) / np.abs(manufacturer_z)
if np.max(relative_error) > .01:
    raise ValueError(f'Model/S-parameter disagreement: {np.max(relative_error):g}')

frequency_hz = np.geomspace(100, 300_000, 1000)
s = 2j * np.pi * frequency_hz
gmea = 350e-6
gmps = 12
zcomp = 1 / (gmea / 10_000 + s * gmea / (2 * np.pi * 2.5e6) +
             s * 22e-12 + 1 / (27_000 + 1 / (s * 22e-9)))
impedances = {}
for r_scale, c_scale in itertools.product([.75, 1, 1.5, 2], [.6, .8, 1, 1.2, 1.5]):
    impedances[(r_scale, c_scale)] = capacitor_impedance(
        dict(frequencies_hz=frequency_hz, r_scale=r_scale, c_scale=c_scale))


def loop_response(case):
    admittance = (case['load_a'] / case['voltage_v'] + 1 / 1000 +
                  1 / impedances[(case['r_scale'], case['c_scale'])] +
                  s * case['ceramic_f'] / (1 + s * case['ceramic_f'] * case['ceramic_r']))
    return (gmea * gmps * case['gm_scale'] * zcomp / admittance *
            .8 / case['voltage_v'] * np.exp(-s * case['delay_s']))


def crossings(response):
    gain_db = 20 * np.log10(np.abs(response))
    phase_deg = np.unwrap(np.angle(response)) * 180 / np.pi
    results = []
    for index in np.flatnonzero(np.diff(np.sign(gain_db))):
        fraction = -gain_db[index] / (gain_db[index + 1] - gain_db[index])
        crossover_hz = math.exp(np.log(frequency_hz[index]) + fraction *
                                np.log(frequency_hz[index + 1] / frequency_hz[index]))
        phase_margin_deg = 180 + phase_deg[index] + fraction * (
            phase_deg[index + 1] - phase_deg[index])
        results.append(dict(crossover_hz=crossover_hz, phase_margin_deg=phase_margin_deg))
    return results


keys = ['voltage_v', 'load_a', 'r_scale', 'c_scale', 'ceramic_f',
        'ceramic_r', 'gm_scale', 'delay_s']
axes = [[5, 9, 12], [1, 2, 2.423], [.75, 1, 1.5, 2], [.6, .8, 1, 1.2, 1.5],
        [0, 40e-6, 112.8e-6, 169.2e-6], [.001, .005, .02],
        [.75**2, 1, 1.25**2], [0, 1 / (2 * 480_000)]]
failures = []
worst_margin = None
highest_crossover = None
case_count = 0
for combination in itertools.product(*axes):
    case = dict(zip(keys, combination))
    found = crossings(loop_response(case))
    case_count += 1
    if len(found) != 1:
        failures.append(dict(case=case, reason='not exactly one crossover', crossings=found))
    for crossing in found:
        reviewed = dict(case=case, **crossing)
        if worst_margin is None or crossing['phase_margin_deg'] < worst_margin['phase_margin_deg']:
            worst_margin = reviewed
        if highest_crossover is None or crossing['crossover_hz'] > highest_crossover['crossover_hz']:
            highest_crossover = reviewed
        if crossing['phase_margin_deg'] < 45 or crossing['crossover_hz'] > 48_000:
            failures.append(dict(case=case, reason='unchanged CCM thresholds', **crossing))

sample_hz = np.asarray([120, 1000, 10000, 20000, 100000, 600000])
sample_z = capacitor_impedance(dict(frequencies_hz=sample_hz, r_scale=1, c_scale=1))
published_curves = json.loads(Path('evidence/Panasonic-35SVPK330M-curves-A14.json').read_text())
graph_z = np.asarray(published_curves['curves']['Z'])
graph_esr = np.asarray(published_curves['curves']['ESR'])
if not np.array_equal(graph_z[:, 0], graph_esr[:, 0]):
    raise ValueError('Manufacturer magnitude/ESR frequency samples differ')
in_loop_band = graph_z[:, 0] * 1e6 <= 48_000
graph_z = graph_z[in_loop_band]
graph_esr = graph_esr[in_loop_band]
graph_model_z = capacitor_impedance(dict(frequencies_hz=graph_z[:, 0]*1e6, r_scale=1, c_scale=1))
graph_comparison = dict(
    point_count=len(graph_z), frequency_units='MHz converted to Hz',
    maximum_magnitude_relative_difference=float(np.max(abs(abs(graph_model_z)-graph_z[:, 1])/graph_z[:, 1])),
    maximum_esr_relative_difference=float(np.max(abs(graph_model_z.real-graph_esr[:, 1])/graph_esr[:, 1])),
    temperature_data_status='CC/TanD/TESR absent in published characteristic source',
    interpretation='Typical model and published characteristic are not guaranteed identical; no temperature limits inferred')
report = dict(
    revision='A14', manufacturer_part='35SVPK330M', model_conditions='20C,0V DC bias',
    source_model_sha256=hashlib.sha256(MODEL_PATH.read_bytes()).hexdigest(),
    source_s_parameter_sha256=hashlib.sha256(S_PARAMETER_PATH.read_bytes()).hexdigest(),
    passive_element_count=len(components), s_parameter_row_count=len(parameters),
    maximum_model_s_parameter_relative_error=float(np.max(relative_error)),
    published_graph_comparison=graph_comparison,
    samples=[dict(frequency_hz=int(f), esr_ohms=float(z.real), magnitude_ohms=float(abs(z)))
             for f, z in zip(sample_hz, sample_z)],
    case_axes=dict(zip(keys, axes)), case_count=case_count, failures=failures,
    worst_phase_margin=worst_margin, highest_crossover=highest_crossover,
    status='conditional CCM sensitivity screen; not hardware/temperature/bias approval',
    thresholds=dict(minimum_phase_margin_deg=45, maximum_crossover_hz=48_000),
    variation_status='R/C/GM/delay scalings are sensitivity assumptions, not manufacturer guarantees',
    remaining=['DCM/Eco-mode', 'full switching/slope compensation model',
               'actual temperature/bias/aging bounds', 'ceramic bias and current sharing',
               'layout parasitics', 'startup/stall/reversal/transient/thermal measurements'])
Path('evidence/buck-manufacturer-model-A14.json').write_text(json.dumps(report, indent=2)+'\n')
fig, axes_plot = plt.subplots(2, 1, figsize=(9, 6), sharex=True, layout='constrained')
for voltage_v in [5, 9, 12]:
    response = loop_response(dict(voltage_v=voltage_v, load_a=2, r_scale=1,
                                  c_scale=1, ceramic_f=40e-6, ceramic_r=.005,
                                  gm_scale=1, delay_s=1/(2*600_000)))
    axes_plot[0].semilogx(frequency_hz, 20*np.log10(abs(response)), label=f'{voltage_v}V')
    axes_plot[1].semilogx(frequency_hz, np.unwrap(np.angle(response))*180/np.pi)
axes_plot[0].axhline(0, color='black', linewidth=.8)
axes_plot[1].axhline(-135, color='black', linewidth=.8)
axes_plot[0].set_ylabel('Loop gain (dB)')
axes_plot[1].set_ylabel('Loop phase (degrees)')
axes_plot[1].set_xlabel('Frequency (Hz)')
axes_plot[0].set_title('A14 CCM screen: exact Panasonic model, typical 20 C / 0 V data')
axes_plot[0].legend()
for axis in axes_plot:
    axis.grid(True, which='both', alpha=.25)
fig.savefig('evidence/buck-manufacturer-model-A14.png', dpi=150)
plt.close(fig)
print(json.dumps({key: report[key] for key in (
    'case_count', 'maximum_model_s_parameter_relative_error', 'worst_phase_margin',
    'highest_crossover', 'samples')}, indent=2))
print(f'Unchanged threshold failures: {len(failures)}; hardware/model exclusions remain')
if failures:
    raise SystemExit(1)
