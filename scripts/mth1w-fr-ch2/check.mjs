// node scripts/mth1w-fr-ch2/check.mjs [l2_1 l2_2 ...]   (default: every French chapter 2 lesson)
// French copy of ../mth1w-ch2/check.mjs, plus mirror checks against the English lessons:
//   * structure: 5 examples, 5-question practice widgets, 5 Q&A, explorer present (not for the review)
//   * every \( \) / \[ \] span renders in KaTeX (also inside widget props); arithmetic equalities are true
//   * each practice answer spec is accepted by the site's checker for the value in its "final" line
//   * same block types / widgets / numeric widget props as English, same practice answer specs (except text accept lists),
//     same multiset of math in the whole lesson (lone letters ignored), no "undefined"/NaN
//   * leftover-English scan over the string content of every .mjs in this folder (lessons, ws, bank, asg, written)
import { createRequire } from "module";
import { pathToFileURL } from "url";
import { resolve, join } from "path";
import { readdirSync, readFileSync, statSync } from "fs";
import { checkAnswer } from "../../lib/answerCheck.ts";

const katex = createRequire(import.meta.url)("katex");
const DIR = resolve("scripts/mth1w-fr-ch2");
const EN_DIR = resolve("scripts/mth1w-ch2");
const names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const files = names.length ? names.map((n) => (n.endsWith(".mjs") ? n : n + ".mjs")) : readdirSync(DIR).filter((f) => /^l2_\d+\.mjs$/.test(f)).sort();

let bad = 0, eqChecked = 0;
const fail = (m) => { bad++; console.log("  FAIL:", m); };

function evalMath(src) {
  let s = src.replace(/\\(?:,|;|:|!|quad|qquad)|\\ /g, "").replace(/\\left|\\right/g, "").replace(/−/g, "-").replace(/(\d+(?:\.\d+)?)\s*\\%/g, "($1/100)").replace(/\\(?:text|mathrm)\{\s*\}/g, "");
  if (/\\(approx|ne|neq|le|ge|lt|gt|text|sqrt|pi|ldots|dots|infty|in|mathbb|circ|angle|overline|subset|Rightarrow|to|pm)|[<>≈≠≤≥:]/.test(s)) return NaN;
  s = s.replace(/(\d+)\s*\\[dt]?frac\{(\d+)\}\{(\d+)\}/g, "($1+$2/$3)");
  for (let i = 0; i < 12; i++) s = s.replace(/\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/g, "(($1)/($2))");
  s = s.replace(/\\times|\\cdot/g, "*").replace(/\\div/g, "/");
  s = s.replace(/\^\{([^{}]*)\}/g, "**($1)").replace(/\^(-?\d+)/g, "**($1)");
  s = s.replace(/\|([^|]+)\|/g, "Math.abs($1)");
  s = s.replace(/(^|[^\d)\w.])-(\d+(?:\.\d+)?)\*\*/g, "$1(-1)*($2)**");
  s = s.replace(/(\d|\))\s*\(/g, "$1*(").replace(/\)\s*(\d)/g, ")*$1");
  s = s.replace(/(\d)\s+(\d)/g, "$1$2");
  if (/[a-zA-Z\\{}_&]/.test(s.replace(/Math\.abs/g, ""))) return NaN;
  try { const v = Function(`"use strict"; return (${s});`)(); return typeof v === "number" && Number.isFinite(v) ? v : NaN; } catch { return NaN; }
}
function checkEqualities(label, span) {
  if (!span.includes("=")) return;
  const stmts = span.split(/,(?![^()]*\))|\\Rightarrow|\\quad|\\text\{ (?:and|et) \}/);
  if (stmts.length > 1) { stmts.forEach((st) => checkEqualities(label, st)); return; }
  const parts = span.split(/(?<![<>!])=(?!=)/).map((p) => p.trim());
  if (parts.length < 2) return;
  const vals = parts.map((p) => evalMath(p.replace(/[,.;]+$/, "")));
  const ok = vals.filter((v) => !Number.isNaN(v));
  if (ok.length < 2) return;
  eqChecked++;
  if (ok.some((v) => Math.abs(v - ok[0]) > 1e-6 * Math.max(1, Math.abs(ok[0])))) fail(`${label}: "${span.slice(0, 90)}" -> ${vals.join(" | ")}`);
}
const RE = /\\\[([\s\S]*?)\\\]|\\\(([\s\S]*?)\\\)/g;
const spans = (s) => [...String(s).matchAll(RE)].map((m) => (m[1] ?? m[2] ?? "").trim());
function mathCheck(label, s, eq = true) {
  for (const body of spans(s)) {
    try { katex.renderToString(body, { throwOnError: true, strict: "ignore" }); } catch (e) { fail(`${label} katex: ${body.slice(0, 70)} -> ${e.message.slice(0, 70)}`); }
    if (eq) checkEqualities(label, body);
  }
}
// math multiset of a block list: \(..\) spans with \text{..} words neutralised, lone letters dropped
const mathSet = (blocks) => spans(JSON.stringify(blocks).replace(/\\\\/g, "\\")).map((s) => s.replace(/\\text\{[^}]*\}/g, "T").replace(/\s+/g, "")).filter((s) => s.length > 1).sort();
// widget props with every string replaced by "S" (numbers / structure must match English)
const shape = (v) => (typeof v === "string" ? "S" : Array.isArray(v) ? v.map(shape) : v && typeof v === "object" ? Object.fromEntries(Object.keys(v).sort().map((k) => [k, shape(v[k])])) : v);

for (const f of files) {
  const M = await import(pathToFileURL(resolve(DIR, f)).href);
  const E = await import(pathToFileURL(resolve(EN_DIR, f)).href);
  console.log(`\n${M.TITLE}`);
  const blocks = M.blocks(), eb = E.blocks();
  const htmls = blocks.filter((b) => b.type === "html").map((b) => b.html);
  const all = htmls.join("\n");
  const exN = (all.match(/class="example-box"/g) || []).length, qaN = (all.match(/class="qa-box"/g) || []).length;
  const prac = blocks.filter((b) => b.type === "widget" && b.widget === "practice");
  const explorers = blocks.filter((b) => b.type === "widget" && b.widget !== "practice").map((b) => b.widget);
  console.log(`  blocks ${blocks.length} (EN ${eb.length}) | examples ${exN} | practice ${prac.map((p) => p.props.questions.length).join("+") || 0} | Q&A ${qaN} | explorers ${explorers.join(", ") || "none"} | svg ${(all.match(/<svg/g) || []).length}`);
  if (exN !== 5) fail(`examples = ${exN}`);
  if (qaN !== 5) fail(`Q&A = ${qaN}`);
  if (!prac.length || prac.some((p) => p.props.questions.length !== 5)) fail("every practice widget needs exactly 5 questions");
  if (!explorers.length && !/Révision/.test(M.TITLE)) fail("no interactive explorer");
  if (/\bNaN\b|\bundefined\b|\$\{/.test(JSON.stringify(blocks))) fail("text contains NaN / undefined / ${");
  htmls.forEach((h, i) => mathCheck(`html#${i}`, h));
  // mirror: block types, widgets, svg count, widget prop shapes, math multiset
  if (blocks.map((b) => b.type + (b.widget ?? "")).join() !== eb.map((b) => b.type + (b.widget ?? "")).join()) fail("block types / widgets differ from English");
  if ((all.match(/<svg/g) || []).length !== (eb.filter((b) => b.type === "html").map((b) => b.html).join("").match(/<svg/g) || []).length) fail("figure count differs from English");
  blocks.forEach((b, i) => { if (b.type === "widget" && b.widget !== "practice" && JSON.stringify(shape(b.props)) !== JSON.stringify(shape(eb[i].props))) fail(`widget ${b.widget}: props differ from English`); });
  const fm = mathSet(blocks), em = mathSet(eb);
  if (fm.join("|") !== em.join("|")) {
    const cnt = (a) => a.reduce((m, s) => m.set(s, (m.get(s) || 0) + 1), new Map());
    const cf = cnt(fm), ce = cnt(em);
    const onlyE = [...ce].filter(([s, n]) => (cf.get(s) || 0) < n).map(([s]) => s), onlyF = [...cf].filter(([s, n]) => (ce.get(s) || 0) < n).map(([s]) => s);
    fail(`math differs from English\n     only EN: ${onlyE.slice(0, 8).join("  ")}\n     only FR: ${onlyF.slice(0, 8).join("  ")}`);
  }
  const eprac = eb.filter((b) => b.type === "widget" && b.widget === "practice").flatMap((p) => p.props.questions);
  for (const [i, qq] of prac.flatMap((p) => p.props.questions).entries()) {
    const L = `practice Q${i + 1}`;
    const eq = eprac[i];
    for (const s of [qq.prompt, qq.hint, qq.final, ...qq.solution, ...(qq.answer.options ?? [])]) mathCheck(L, s);
    const a = qq.answer;
    if (!eq || eq.answer.kind !== a.kind) fail(`${L}: answer kind differs from English`);
    else if (a.kind === "choice" ? a.correct !== eq.answer.correct || a.options.length !== eq.answer.options.length : a.kind !== "text" && JSON.stringify(a) !== JSON.stringify(eq.answer)) fail(`${L}: answer spec differs from English`);
    if (eq && qq.solution.length !== eq.solution.length) fail(`${L}: ${qq.solution.length} solution steps vs ${eq.solution.length}`);
    if (a.kind === "number") {
      const fv = evalMath(spans(qq.final)[0] ?? qq.final);
      if (!Number.isNaN(fv)) { eqChecked++; if (Math.abs(fv - a.value) > 1e-6 * Math.max(1, Math.abs(a.value))) fail(`${L}: spec ${a.value} but final shows ${fv}`); }
      const typed = Number.isInteger(a.value) ? String(a.value) : String(+a.value.toFixed(10));
      if (!checkAnswer(a, a.percent ? typed + "%" : typed) && !checkAnswer(a, String(a.value * (a.percent ? 100 : 1)))) fail(`${L}: checker rejects its own value ${a.value}`);
    } else if (a.kind === "choice") {
      if (!(a.correct >= 0 && a.correct < a.options.length) || a.options.length < 2) fail(`${L}: bad choice spec`);
      if (new Set(a.options).size !== a.options.length) fail(`${L}: duplicate options`);
    } else if (a.kind === "text") {
      if (!a.accept.length || !checkAnswer(a, a.accept[0])) fail(`${L}: text spec problem`);
    } else if (a.kind === "expr") {
      if (!checkAnswer(a, a.value)) fail(`${L}: expression spec rejects itself (${a.value})`);
      const fin = spans(qq.final)[0];
      if (fin) {
        let typed = fin.replace(/^[^=]*=/, "").replace(/\\left|\\right|\\,/g, "");
        for (let k = 0; k < 4; k++) typed = typed.replace(/\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/g, "(($1)/($2))");
        typed = typed.replace(/\\cdot|\\times/g, "*").replace(/[{}]/g, "");
        if (!/\\/.test(typed) && !checkAnswer({ ...a, simplified: false }, typed)) fail(`${L}: final "${fin}" is not equivalent to ${a.value}`);
      }
    }
    if (!qq.solution.length || !qq.hint || !qq.final) fail(`${L}: missing hint/solution/final`);
  }
}

// leftover-English scan: string literals of every .mjs in this folder, math and LaTeX/HTML markup removed
const ENGLISH = /\b(the|and|Find|Solve|Show|which|Which|Step|Example|Answer|Watch out|Hard level|Explain|What|How many|with|from|each|Simplify|Evaluate|Expand|Write|Check|number|equation|when|then)\b/;
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? (["out", "backup"].includes(f) ? [] : walk(p)) : f.endsWith(".mjs") && !["check.mjs", "publish.mjs", "build.mjs", "lessons-publish.mjs"].includes(f) && !f.startsWith("_") ? [p] : []; });
let leftovers = 0;
for (const p of walk(DIR)) {
  const src = readFileSync(p, "utf8");
  for (const m of src.matchAll(/String\.raw`([^`]*)`|"((?:[^"\\\n]|\\.)*)"/g)) {
    const s = (m[1] ?? m[2])
      .replace(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]|\$[^$]*\$/g, " ")
      .replace(/<[^>]+>/g, " ").replace(/\\[a-zA-Z]+(\[[^\]]*\])?(\{[^{}]*\})?/g, " ")
      .replace(/\$\{[^}]*\}/g, " ");
    const hit = s.match(ENGLISH);
    if (hit && !/^[\w./-]+\.mjs$/.test(s.trim()) && !/^(number|choice|text|expr)$/.test(s.trim())) { leftovers++; /* answer-spec kinds are code */ if (leftovers <= 25) console.log(`  ENGLISH? ${p.slice(DIR.length + 1)}: "${hit[0]}" in "${s.trim().slice(0, 90)}"`); }
  }
}
if (leftovers) fail(`${leftovers} string(s) look English`);
console.log(`\narithmetic equalities verified: ${eqChecked}`);
console.log(bad ? `${bad} PROBLEM(S)` : "ALL CHECKS PASSED");
process.exit(bad ? 1 : 0);
