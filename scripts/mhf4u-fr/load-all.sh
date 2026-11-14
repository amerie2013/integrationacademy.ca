#!/usr/bin/env bash
# Loads the whole French MHF4U (MHF4U-FR) from scripts/mhf4u-fr-ch1..ch8. Run from the repo root:
#   bash scripts/mhf4u-fr/load-all.sh
# 1) lessons, worksheets, bank, assignments for every chapter
# 2) remove the old 7-unit French lessons/assignments (refuses unless all 51 new lessons exist)
# 3) written questions (they link to lessons by title — old rows share some titles, so this runs after step 2)
# 4) re-sort lesson positions
set -euo pipefail
for n in 1 2 3 4 5 6 7 8; do
  d=scripts/mhf4u-fr-ch$n
  echo "================ chapter $n"
  node $d/lessons-publish.mjs --all --apply
  node $d/ws/build.mjs --all --apply
  node $d/bank/publish.mjs --all --apply
  node $d/asg/publish.mjs --apply
done
echo "================ remove old French course rows"
node scripts/mhf4u-fr/remove-old.mjs --apply
for n in 1 2 3 4 5 6 7 8; do
  echo "================ written $n"
  node scripts/mhf4u-fr-ch$n/written.mjs --apply
done
node scripts/mhf4u-fr/positions.mjs --apply
