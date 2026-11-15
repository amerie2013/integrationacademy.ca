#!/usr/bin/env bash
# Loads the whole French MCR3U (MCR3U-FR) from scripts/mcr3u-fr-ch1..ch8. Run from the repo root:
#   bash scripts/mcr3u-fr/load-all.sh            (all chapters)
#   bash scripts/mcr3u-fr/load-all.sh 4 5 6 7    (resume from some chapters, then cleanup + written)
# Every publisher updates in place, so rerunning after a network error is safe.
set -euo pipefail
CHS=("$@"); [ ${#CHS[@]} -eq 0 ] && CHS=(1 2 3 4 5 6 7 8)
for n in "${CHS[@]}"; do
  d=scripts/mcr3u-fr-ch$n
  echo "================ chapter $n"
  node $d/lessons-publish.mjs --all --apply
  node $d/ws/build.mjs --all --apply
  node $d/bank/publish.mjs --all --apply
  node $d/asg/publish.mjs --apply
done
echo "================ publish + description"
node scripts/mcr3u-fr/description.mjs --apply
for n in 1 2 3 4 5 6 7 8; do
  echo "================ written $n"
  node scripts/mcr3u-fr-ch$n/written.mjs --apply
done
node scripts/mcr3u-fr/positions.mjs --apply
node scripts/mcr3u-fr/verify-live.mjs
