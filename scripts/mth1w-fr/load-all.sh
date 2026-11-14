#!/usr/bin/env bash
# Loads the whole French MTH1W (MTH1W-FR) from scripts/mth1w-fr-ch1..ch7. Run from the repo root:
#   bash scripts/mth1w-fr/load-all.sh            (all chapters)
#   bash scripts/mth1w-fr/load-all.sh 4 5 6 7    (resume from some chapters, then cleanup + written)
# Every publisher updates in place, so rerunning after a network error is safe.
set -euo pipefail
CHS=("$@"); [ ${#CHS[@]} -eq 0 ] && CHS=(1 2 3 4 5 6 7)
for n in "${CHS[@]}"; do
  d=scripts/mth1w-fr-ch$n
  echo "================ chapter $n"
  node $d/lessons-publish.mjs --all --apply
  node $d/ws/build.mjs --all --apply
  node $d/bank/publish.mjs --all --apply
  node $d/asg/publish.mjs --apply
done
echo "================ remove old French rows"
node scripts/mth1w-fr/remove-old.mjs --apply
for n in 1 2 3 4 5 6 7; do
  echo "================ written $n"
  node scripts/mth1w-fr-ch$n/written.mjs --apply
done
node scripts/mth1w-fr/positions.mjs --apply
node scripts/mth1w-fr/verify-live.mjs
