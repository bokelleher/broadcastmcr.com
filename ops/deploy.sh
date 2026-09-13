#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIST="$ROOT/dist"
DEST="${1:-${DEST:-}}"
if [[ -z "$DEST" ]]; then echo "Set DEST e.g. root@vm100:/var/www/broadcastmcr.com"; exit 1; fi
if [[ ! -d "$DIST" ]]; then echo "Build first"; exit 1; fi
rsync -avz --delete "$DIST/" "$DEST/"
