#!/usr/bin/env bash
# Loads the whole French MCV4U (MCV4U-FR) from scripts/mcv4u-fr-ch1..ch8. Run from the repo root:
#   bash scripts/mcv4u-fr/load-all.sh            (all chapters)
#   bash scripts/mcv4u-fr/load-all.sh 4 5 6 7    (resume from some chapters, then cleanup + written)
# Every publisher updates in place, so rerunning after a network error is safe.
set -euo pipefail
CHS=("$@"); [ ${#CHS[@]} -eq 0 ] && CHS=(1 2 3 4 5 6 7 8)
for n in "${CHS[@]}"; do
  d=scripts/mcv4u-fr-ch$n
  echo "================ chapter $n"
  node $d/lessons-publish.mjs --all --apply
  node $d/ws/build.mjs --all --apply
  node $d/bank/publish.mjs --all --apply
  node $d/asg/publish.mjs --apply
done
echo "================ publish + description"
node scripts/mcv4u-fr/description.mjs --apply
for n in 1 2 3 4 5 6 7 8; do
  echo "================ written $n"
  node scripts/mcv4u-fr-ch$n/written.mjs --apply
done
node scripts/mcv4u-fr/positions.mjs --apply
node scripts/mcv4u-fr/verify-live.mjs
