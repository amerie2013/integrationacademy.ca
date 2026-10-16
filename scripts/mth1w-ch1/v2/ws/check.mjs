// node scripts/mth1w-ch1/v2/ws/check.mjs — verifies arithmetic equalities written in every chapter 1 worksheet
import { pathToFileURL } from "url";
import path from "path";

let bad = 0, n = 0;
function evalMath(src) {
  let s = src.replace(/\\(?:,|;|:|!|quad|qquad)|\\ /g, "").replace(/\\left|\\right|\\mathbf|\\displaystyle/g, "").replace(/−/g, "-").replace(/(\d+(?:\.\d+)?)\s*\\%/g, "($1/100)");
  if (/\\(approx|ne|neq|le|ge|lt|gt|text|sqrt|pi|ldots|dots|cdots|infty|in|mathbb|circ|overline|subset|Rightarrow|to|pm|leftrightarrow|cancel|checkmark)|[<>:]/.test(s)) return NaN;
  s = s.replace(/(\d+)\s*\\[dt]?frac\{(\d+)\}\{(\d+)\}/g, "($1+$2/$3)").replace(/(\d+)\\[dt]?frac(\d)(\d)/g, "($1+$2/$3)");
  for (let i = 0; i < 12; i++) s = s.replace(/\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/g, "(($1)/($2))");
  s = s.replace(/\\[dt]?frac(\d)(\d)/g, "($1/$2)").replace(/\\[dt]?frac\{([^{}]*)\}(\d)/g, "(($1)/$2)").replace(/\\[dt]?frac(\d)\{([^{}]*)\}/g, "($1/($2))");
  s = s.replace(/\\times|\\cdot/g, "*").replace(/\\div/g, "/").replace(/\{/g, "(").replace(/\}/g, ")");
  s = s.replace(/\^\(([^()]*)\)/g, "**($1)").replace(/\^(-?\d+)/g, "**($1)");
  s = s.replace(/(^|[^\d)\w.])-(\d+(?:\.\d+)?)\*\*/g, "$1(-1)*($2)**").replace(/(\d|\))\s*\(/g, "$1*(").replace(/\)\s*(\d)/g, ")*$1").replace(/(\d)\s+(\d)/g, "$1$2");
  if (/[a-zA-Z\\_&]/.test(s)) return NaN;
  try { const v = Function(`"use strict";return(${s})`)(); return Number.isFinite(v) ? v : NaN; } catch { return NaN; }
}
function check(label, span) {
  for (const st of span.split(/,(?![^(){}]*[)}])|;|\\qquad|\\quad|\\text\{[^}]*\}|\\\\/)) {
    const parts = st.split(/(?<![<>!])=/).map((p) => p.trim().replace(/[.,]$/, ""));
    if (parts.length < 2) continue;
    const v = parts.map(evalMath).filter((x) => !Number.isNaN(x));
    if (v.length < 2) continue;
    n++;
    if (v.some((x) => Math.abs(x - v[0]) > 1e-6 * Math.max(1, Math.abs(v[0])))) { bad++; console.log(`FAIL ${label}: ${st.trim().slice(0, 100)} -> ${v.join(" | ")}`); }
  }
}
const walk = (o, label) => {
  if (typeof o === "string") { for (const m of o.matchAll(/\$([^$]+)\$|\\\[([\s\S]+?)\\\]/g)) check(label, m[1] ?? m[2]); }
  else if (Array.isArray(o)) o.forEach((x) => walk(x, label));
  else if (o && typeof o === "object") for (const k of Object.keys(o)) walk(o[k], label + "." + k);
};
for (const c of ["1_1", "1_2", "1_3", "1_4", "1_5", "1_6", "1_7", "1_8", "1_9", "1_10"]) {
  const { WS } = await import(pathToFileURL(path.resolve(`scripts/mth1w-ch1/v2/ws/w${c}.mjs`)).href);
  walk({ concepts: WS.concepts, examples: WS.examples, problems: WS.problems, tips: WS.tips }, WS.code);
}
console.log(`${n} equalities checked; ${bad ? bad + " PROBLEMS" : "all true"}`);
