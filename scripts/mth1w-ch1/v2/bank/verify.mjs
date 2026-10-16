// node scripts/mth1w-ch1/v2/bank/verify.mjs — recomputes every "Evaluate $expr$" question (numeric and fill-in)
// and compares the result with the stored answer. Questions it cannot evaluate are counted, not failed.
import { pathToFileURL } from "url";
import path from "path";

function evalMath(src) {
  let s = src.replace(/\\(?:,|;|!|quad|qquad)|\\ /g, "").replace(/\\left|\\right|\\displaystyle/g, "").replace(/−/g, "-");
  if (/\\(sqrt|pi|ldots|dots|overline|approx|text)|[<>:=]/.test(s)) return NaN;
  s = s.replace(/(\d+)\\[dt]?frac\{(\d+)\}\{(\d+)\}/g, "($1+$2/$3)");
  for (let i = 0; i < 12; i++) s = s.replace(/\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/g, "(($1)/($2))");
  s = s.replace(/\\times|\\cdot/g, "*").replace(/\\div/g, "/").replace(/\[/g, "(").replace(/\]/g, ")").replace(/\{/g, "(").replace(/\}/g, ")");
  s = s.replace(/\^\(([^()]*)\)/g, "**($1)").replace(/\^(-?\d+)/g, "**($1)");
  s = s.replace(/(^|[^\d)\w.])-(\d+(?:\.\d+)?)\*\*/g, "$1(-1)*($2)**").replace(/(\d|\))\s*\(/g, "$1*(").replace(/\)\s*(\d)/g, ")*$1");
  if (/[a-zA-Z\\_&]/.test(s)) return NaN;
  try { const v = Function(`"use strict";return(${s})`)(); return Number.isFinite(v) ? v : NaN; } catch { return NaN; }
}
const plain = (a) => { const t = String(a).trim().replace(/−/g, "-"); let m = t.match(/^(-?)(\d+) (\d+)\/(\d+)$/); if (m) return (m[1] ? -1 : 1) * (+m[2] + m[3] / m[4]); m = t.match(/^(-?\d+)\/(\d+)$/); if (m) return m[1] / m[2]; return /^-?\d*\.?\d+$/.test(t) ? +t : NaN; };

let checked = 0, skipped = 0, bad = 0;
for (const n of ["1_1", "1_2", "1_3", "1_4", "1_5", "1_6", "1_7", "1_8", "1_9", "1_10"]) {
  const h = await import(pathToFileURL(path.resolve(`scripts/mth1w-ch1/v2/bank/h${n}.mjs`)).href);
  const em = await import(pathToFileURL(path.resolve(`scripts/mth1w-ch1/v2/bank/em${n}.mjs`)).href);
  for (const [d, S] of [["easy", em.E], ["medium", em.M], ["hard", h.Q]]) S.forEach((q, i) => {
    const m = q.prompt.match(/^Evaluate \$([^$]+)\$/);
    if (!m || !["numeric", "fill_blank"].includes(q.kind)) return;
    const v = evalMath(m[1]);
    const stored = q.kind === "numeric" ? q.answer : plain(q.answer[0]);
    if (Number.isNaN(v) || Number.isNaN(stored)) { skipped++; return; }
    checked++;
    if (Math.abs(v - stored) > Math.max(1e-6, q.tolerance ?? 0) && Math.abs(v - stored) > 0.005 * Math.abs(v)) { bad++; console.log(`FAIL ${n} ${d} Q${i + 1}: ${m[1]} = ${v}, stored ${q.answer}`); }
  });
}
console.log(`${checked} answers recomputed, ${skipped} not evaluable; ${bad ? bad + " PROBLEMS" : "all match"}`);
