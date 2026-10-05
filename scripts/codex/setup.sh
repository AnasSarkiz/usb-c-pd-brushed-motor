#!/usr/bin/env bash
set -euo pipefail

board_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$board_root"
if [[ "$(uname -s)" != Linux ]]; then
  echo "This bootstrap is for the Linux cloud environment; it does not install or route on macOS." >&2
  exit 1
fi

if [[ "$(id -u)" == 0 ]]; then
  privileged=()
else
  privileged=(sudo)
fi
"${privileged[@]}" apt-get update
"${privileged[@]}" apt-get install -y --no-install-recommends \
  ca-certificates curl unzip git time build-essential clang pkg-config \
  python3 python3-venv python3-dev gcc-arm-none-eabi binutils-arm-none-eabi \
  ngspice poppler-utils

cloud_tools="$board_root/.cache/codex-cloud"
mkdir -p "$cloud_tools"
case "$(uname -m)" in
  x86_64)
    bun_platform=linux-x64
    bun_sha256=36368faef7527875d5ffa52e53cd48021741f2a83eb6208a8dd64068d422a913
    ;;
  aarch64|arm64)
    bun_platform=linux-aarch64
    bun_sha256=54328bbc2d9c8e0c9f892c544d66c57a83b84139e34909e5ee81758f1ac8fda7
    ;;
  *) echo "Unsupported Linux architecture: $(uname -m)" >&2; exit 1 ;;
esac
bun_binary="$cloud_tools/bun-$bun_platform/bun"
if [[ ! -x "$bun_binary" ]]; then
  curl -fL "https://github.com/oven-sh/bun/releases/download/bun-v1.4.2/bun-$bun_platform.zip" \
    -o "$cloud_tools/bun.zip"
  printf '%s  %s\n' "$bun_sha256" "$cloud_tools/bun.zip" | sha256sum -c -
  unzip -o "$cloud_tools/bun.zip" -d "$cloud_tools"
fi
[[ "$($bun_binary --version)" == 1.4.2 ]]
ln -sf bun "$(dirname "$bun_binary")/bunx"
[[ "$("$(dirname "$bun_binary")/bunx" --version)" == 1.4.2 ]]
export PATH="$(dirname "$bun_binary"):$PATH"
bun install --frozen-lockfile

python3 -c 'import sys; assert sys.version_info >= (3, 11), "Python >=3.11 is required"'
python3 -m venv tooling/power-review-venv
tooling/power-review-venv/bin/python -m pip install \
  -r scripts/codex/requirements.txt
for executable in clang cc arm-none-eabi-gcc arm-none-eabi-objcopy \
  arm-none-eabi-size arm-none-eabi-nm arm-none-eabi-objdump ngspice pdftoppm; do
  command -v "$executable"
done
tooling/power-review-venv/bin/python -c 'import shapely, numpy, matplotlib, gerbonara; print("Cloud geometry dependencies imported")'
python3 scripts/codex/verify-context.py

# Persist PATH for independent task shells. No routing/build/check commands run here.
printf 'export PATH=%q:"$PATH"\nexport CC=clang\n' "$(dirname "$bun_binary")" > "$cloud_tools/env.sh"
echo "Cloud dependencies prepared. Source .cache/codex-cloud/env.sh before commands."
echo "No native board build or autorouter has run during setup."
