Continue this USB-C PD brushed-motor controller in Codex Cloud Linux. My Mac runs
out of memory while routing. Use Pipeline9 and run all checks sequentially.

Read AGENTS.md, docs/cloud/HANDOFF.md, docs/cloud/SETUP.md, current VALIDATION.md,
and .agents/skills/tscircuit/SKILL.md first. The repository contains the full source,
BOM, supplier imports, firmware, patches, validation evidence and design decisions.
Preserve the approved hardware PWM/Dailywell SPDT/DRV8874 architecture and the
qualification-only MCU. Keep all existing manufacturing/current/PD protections.
Do not create or patch supplier parts beyond the documented user-authorized J1
pad translations. Do not suppress errors or blindly accept warnings/snapshots.

Verify/install the Linux environment. Record versions, available RAM/disk and
maximum resident memory per command. Run scripts/codex/route.sh with a fresh
cloud evidence prefix. Rebuild supplier probes and perform all prerequisite gates
before enabling routing. No completed fresh native prerequisite pass is assumed
from interrupted A46/A47 logs. If any check fails, investigate and fix the actual
cause while retaining its evidence; do not restart heavy local Mac routing.

After routing, finish actual copper/drill/power/connectivity audits, inspect all
four copper layers/eight A4 sheets/critical areas, and resolve the documented
routed-index native snapshot integration before claiming routed validation passed.
Do not approve fabrication or physical testing without evidence. The firmware
must remain inhibited without approved NVM and measured qualification profiles.

For each completed implementation step, commit/push main to the public
AnasSarkiz/usb-c-pd-brushed-motor repository and publish the same fresh circuit JSON
and source to the public tscircuit package under the standing AGENTS.md authority.
Verify anonymous public visibility and matching source/artifact bytes. Never copy
local credentials, publish private, merge a PR or place a fabrication order.
Report completed work, measured resource use and concrete remaining blockers.
