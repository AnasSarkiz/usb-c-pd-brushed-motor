# Configure the Codex Cloud environment

Repository: https://github.com/AnasSarkiz/usb-c-pd-brushed-motor
Branch: `main`. The checkout root already is the isolated board directory.

Official UI workflow: create a task, choose **Work in → Cloud → Select environment →
Create environment**, select this GitHub repository, complete setup/testing, then
**Save and Publish** the environment. Existing environment users can select it and
refresh its repository. See https://learn.chatgpt.com/docs/environments/cloud-environments.
This repository does not create or publish a Cloud environment automatically.
Desktop app computer-use access was denied for Codex; activation needs these UI
steps. Do not work around that denial by scraping app internals or credentials.

## Install script

Set the Cloud environment's install script to:

```sh
bash scripts/codex/setup.sh
```

Linux apt/sudo access and Python ≥3.11 are required. The script installs exact Bun
1.4.2 with vendor release SHA256 verification, frozen-lockfile dependencies,
ARM compiler/binutils, host C/Clang, ngspice, PDF utilities and a pinned Python
geometry/Gerber environment. The native tools are invoked via PATH, not Homebrew. Host C tests explicitly
use CC=clang (the same compiler family as the prior macOS cc); -Wall/-Wextra/-Werror
remain enabled. ARM firmware continues to use arm-none-eabi-gcc. The measurement host test
explicitly links libm for Linux fmaxl; test assertions are unchanged. The initial
Linux default-GCC run failed six host tests in unchanged vendor CMSIS inline
32-bit-register pointer casts on a 64-bit host; that failure is retained.
APT tool versions depend on the cloud image; record them and rerun firmware/numerical
checks rather than assuming binaries are byte-identical to macOS results.
No credential, token, personal auth cache or `.env` is copied into the repository.

Use the environment's package-manager network access for apt, npm, PyPI and GitHub
release assets. Allow necessary official source/manufacturer/tscircuit hosts for
validation or public publishing, e.g. github.com, raw.githubusercontent.com,
api.github.com, objects.githubusercontent.com, release-assets.githubusercontent.com,
registry.npmjs.org, pypi.org, files.pythonhosted.org, docs.tscircuit.com,
api.tscircuit.com, tscircuit.com, lcsc.com, datasheet.lcsc.com and the exact official
manufacturer sites cited in this repo. Keep source verification/download failures
visible. Imports and canonical dependency tarballs are already committed.
GitHub/registry authentication must be configured through approved Cloud integrations
or secret settings when needed; keep secrets out of source, logs and handoff files.

## Start skill / task instructions

The Cloud Start skill should read `AGENTS.md`, `docs/cloud/HANDOFF.md`, the top of
`VALIDATION.md` and `.agents/skills/tscircuit/SKILL.md`, then run:

```sh
source .cache/codex-cloud/env.sh
python3 scripts/codex/verify-context.py
```

Use `docs/cloud/START-TASK.md` as the initial task prompt. The repo includes the
complete local tscircuit skill because personal skills do not automatically sync.
Do not start a development server or heavy board build in the install/start phase.
Start actual validation/routing only in the routing task.

## Resources and checks

Official documented default VM tiers are 8 GiB RAM for Plus/Edu Plus and 16 GiB
for Pro/Business/Enterprise (plan-dependent disk/CPU limits apply). Cloud is not
unlimited memory. Inspect `/proc/meminfo`, cgroup limits and free disk before work;
if a single solver cannot fit, preserve the failure and use a larger approved
Cloud environment or investigate the solver rather than restarting endlessly.
The script records one-command-at-a-time GNU `/usr/bin/time -v` reports, including
maximum resident memory and exit status. Do not parallelize the five native checks.

Run the guarded cloud workflow:

```sh
bash scripts/codex/route.sh cloud48
```

A failed command stops dependent work. Choose a new evidence prefix for retries;
preserve prior logs. Read HANDOFF.md for the remaining routed snapshot integration
and mandatory visual/postroute/fabrication checks. Do not mark the cloud setup as
passed until the install script actually succeeds in the chosen Linux environment.

## Safe Mac use

Mac defaults keep routing disabled. Use `bunx tsci build index.circuit.tsx
--routing-disabled` for an explicitly unrouted build. `scripts/codex/setup.sh` and
`route.sh` refuse macOS. Do not invoke `scripts/run-native-routing.py` locally;
all routing belongs in Cloud for this task.

The repository also has a manual GitHub Actions workflow, **Validate Codex Cloud
Linux setup**, to smoke-test this installer and lightweight checks on Ubuntu 24.04.
It generates a fresh unrouted artifact remotely and never runs the router. A passing workflow validates the portable installer on
that runner, not activation or memory sufficiency of your Codex Cloud VM.
