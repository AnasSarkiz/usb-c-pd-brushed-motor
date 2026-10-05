#!/usr/bin/env bash
set -euo pipefail
board_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$board_root"
if [[ "$(uname -s)" != Linux ]]; then
  echo "Run Pipeline9 in the cloud Linux checkout, not on this Mac." >&2
  exit 1
fi
source .cache/codex-cloud/env.sh
[[ "$(bun --version)" == 1.4.2 ]]
python3 scripts/codex/verify-context.py
python3 scripts/codex/route.py --evidence-prefix "${1:-cloud48}"
