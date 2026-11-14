// node scripts/mth1w-fr-ch2/ws/check.mjs — French worksheet checks:
//   * the English arithmetic-equality check (../../mth1w-ch2/ws/check.mjs logic) on every French worksheet
//   * the math of each French example / problem / answer equals the English one (same multiset of $…$ spans; lone letters ignored)
//   * same counts: 9 examples, 13 problems (3 + 5 + 5), same levels and figure presence
import { pathToFileURL } from "url";
import path from "path";

let bad = 0, n = 0;
const fail = (m) => { bad++; console.log("FAIL", m); };
// deliberate false statements ("no solution" lines) that the English check also flags
const KNOWN_FALSE = new Set(["5=2", "-8=-3", "-3=4"]);
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
    if (!KNOWN_FALSE.has(st.trim().replace(/s+/g, "")) && v.some((x) => Math.abs(x - v[0]) > 1e-6 * Math.max(1, Math.abs(v[0])))) fail(`${label}: ${st.trim().slice(0, 100)} -> ${v.join(" | ")}`);
  }
}
const RE = /\$([^$]+)\$|\\\[([\s\S]+?)\\\]/g;
const walk = (o, label) => {
  if (typeof o === "string") { for (const m of o.matchAll(RE)) check(label, m[1] ?? m[2]); }
  else if (Array.isArray(o)) o.forEach((x) => walk(x, label));
  else if (o && typeof o === "object") for (const k of Object.keys(o)) walk(o[k], label + "." + k);
};
// math spans of a string, figures stripped (figure TikZ code is compared separately for identical numbers)
const spans = (s) => [...String(s ?? "").replace(/\$/g, "USD").replace(/\\begin\{center\}[\s\S]*?\\end\{center\}/g, "").matchAll(RE)].map((m) => (m[1] ?? m[2]).replace(/\s+/g, "").replace(/\\text\{[^}]*\}/g, "T")).filter((x) => x.length > 1).sort(); // French word order differs; a lone letter may become a word
const nums = (s) => (String(s ?? "").match(/-?\d+(?:\.\d+)?/g) ?? []).join(",");
function same(label, en, fr) {
  const a = spans(en), b = spans(fr);
  if (a.join(" | ") !== b.join(" | ")) fail(`${label}: math differs\n   EN ${a.join(" | ").slice(0, 300)}\n   FR ${b.join(" | ").slice(0, 300)}`);
}
for (const c of ["2_1", "2_2", "2_3", "2_4", "2_5", "2_6"]) {
  const { WS } = await import(pathToFileURL(path.resolve(`scripts/mth1w-fr-ch2/ws/w${c}.mjs`)).href);
  const { WS: EN } = await import(pathToFileURL(path.resolve(`scripts/mth1w-ch2/ws/w${c}.mjs`)).href);
  walk({ concepts: WS.concepts, examples: WS.examples, problems: WS.problems, tips: WS.tips }, WS.code);
  if (WS.examples.length !== EN.examples.length || WS.problems.length !== EN.problems.length) fail(`${c}: counts differ`);
  EN.examples.forEach((e, i) => {
    const f = WS.examples[i];
    same(`${c} ex${i + 1} q`, e.q, f.q); same(`${c} ex${i + 1} ans`, e.ans, f.ans);
    if (e.steps.length !== f.steps.length) fail(`${c} ex${i + 1}: ${e.steps.length} vs ${f.steps.length} steps`);
    e.steps.forEach((s, k) => same(`${c} ex${i + 1} step${k + 1}`, s, f.steps[k]));
    if (!!e.fig !== !!f.fig || nums(e.fig) !== nums(f.fig)) fail(`${c} ex${i + 1}: figure differs`);
  });
  EN.problems.forEach((p, i) => {
    const f = WS.problems[i];
    if (p.level !== f.level || p.space !== f.space) fail(`${c} P${i + 1}: level/space differs`);
    same(`${c} P${i + 1} q`, p.q, f.q); same(`${c} P${i + 1} ans`, p.ans, f.ans);
  });
  EN.concepts.forEach(([, b], i) => same(`${c} concept${i + 1}`, b, WS.concepts[i][1]));
}
console.log(`${n} equalities checked; ${bad ? bad + " PROBLEMS" : "all true; French math identical to English"}`);
process.exit(bad ? 1 : 0);
