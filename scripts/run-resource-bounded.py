"""Run one validation command with a measured process-tree memory limit."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import signal
import subprocess
import time


def process_tree_rss_kib(root_pid):
    rows = [tuple(map(int, row.split())) for row in subprocess.check_output(
        ['ps', '-axo', 'pid,ppid,rss'], text=True
    ).splitlines()[1:]]
    descendants = {root_pid}
    while True:
        children = {pid for pid, parent, _ in rows if parent in descendants}
        if children <= descendants:
            break
        descendants.update(children)
    return sum(rss for pid, _, rss in rows if pid in descendants)


def run(options):
    # Check monitor access before launching a potentially expensive child.
    process_tree_rss_kib(os.getpid())
    started = time.monotonic()
    peak_kib = 0
    stop_reason = None
    with options.log.open('w') as stream:
        child = subprocess.Popen(options.command, cwd=options.cwd,
                                 stdout=stream, stderr=subprocess.STDOUT,
                                 start_new_session=True)
        try:
            while child.poll() is None:
                rss_kib = process_tree_rss_kib(child.pid)
                peak_kib = max(peak_kib, rss_kib)
                if rss_kib > options.limit_mib * 1024:
                    stop_reason = 'process-tree memory limit'
                    break
                if time.monotonic() - started > options.timeout_seconds:
                    stop_reason = 'timeout'
                    break
                time.sleep(0.5)
        finally:
            if child.poll() is None:
                os.killpg(child.pid, signal.SIGTERM)
                try:
                    child.wait(timeout=10)
                except subprocess.TimeoutExpired:
                    os.killpg(child.pid, signal.SIGKILL)
                    child.wait()
    report = {
        'command': options.command, 'cwd': str(options.cwd),
        'exit_code': child.returncode, 'stop_reason': stop_reason,
        'sampled_process_tree_peak_rss_kib': peak_kib,
        'limit_mib': options.limit_mib,
        'elapsed_seconds': round(time.monotonic() - started, 2),
        'log': str(options.log),
        'log_sha256': hashlib.sha256(options.log.read_bytes()).hexdigest(),
    }
    options.report.write_text(json.dumps(report, indent=2) + '\n')
    print(json.dumps(report), flush=True)
    return child.returncode or (1 if stop_reason else 0)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--cwd', type=Path, default=Path.cwd())
    parser.add_argument('--log', type=Path, required=True)
    parser.add_argument('--report', type=Path, required=True)
    parser.add_argument('--limit-mib', type=int, default=2048)
    parser.add_argument('--timeout-seconds', type=int, default=300)
    parser.add_argument('command', nargs=argparse.REMAINDER)
    arguments = parser.parse_args()
    if arguments.command[:1] == ['--']:
        arguments.command = arguments.command[1:]
    if not arguments.command:
        parser.error('a validation command is required')
    raise SystemExit(run(arguments))
