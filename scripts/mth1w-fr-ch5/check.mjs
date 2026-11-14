// node scripts/mth1w-fr-ch5/check.mjs [l5_1 l5_2 ...]   (par défaut : toutes les leçons du chapitre 5 français)
// Copie française des vérifications de ../mth1w-ch5/check.mjs : structure (5 exemples, widgets de pratique à 5 questions,
// 5 Q et R), rendu KaTeX, égalités arithmétiques, réponses acceptées par le vérificateur du site.
// (La comparaison avec les fiches et la banque anglaises en ligne ne s'applique pas au miroir.)
import { createRequire } from "module";
import { pathToFileURL } from "url";
import { resolve } from "path";
import { readFileSync, readdirSync } from "fs";
import { checkAnswer, parseNumber } from "../../lib/answerCheck.ts";

const katex = createRequire(import.meta.url)("katex");
const DIR = resolve("scripts/mth1w-fr-ch5");
const names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const files = names.length ? names.map((n) => (n.endsWith(".mjs") ? n : n + ".mjs")) : readdirSync(DIR).filter((f) => /^l5_\d+\.mjs$/.test(f)).sort((a, b) => Number(a.slice(3, -4)) - Number(b.slice(3, -4)));

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
  const stmts = span.split(/,(?![^()]*\))|\\Rightarrow|\\quad|\\text\{ and \}/);
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
function spans(s) { return [...String(s).matchAll(RE)].map((m) => (m[1] ?? m[2] ?? "").trim()); }
function mathCheck(label, s, eq = true) {
  for (const body of spans(s)) {
    try { katex.renderToString(body, { throwOnError: true, strict: "ignore" }); } catch (e) { fail(`${label} katex: ${body.slice(0, 70)} -> ${e.message.slice(0, 70)}`); }
    if (eq) checkEqualities(label, body);
  }
}
const norm = (s) => s.replace(/\\[dt]frac/g, "\\frac").replace(/\\left|\\right|\\,|\s+/g, "").replace(/−/g, "-");

for (const f of files) {
  const M = await import(pathToFileURL(resolve(DIR, f)).href);
  const code = M.TITLE.split(" ")[0];
  console.log(`\n${M.TITLE}`);
  const blocks = M.blocks();
  const htmls = blocks.filter((b) => b.type === "html").map((b) => b.html);
  const all = htmls.join("\n");
  const exN = (all.match(/class="example-box"/g) || []).length, qaN = (all.match(/class="qa-box"/g) || []).length;
  const prac = blocks.filter((b) => b.type === "widget" && b.widget === "practice");
  const explorers = blocks.filter((b) => b.type === "widget" && b.widget !== "practice").map((b) => b.widget);
  console.log(`  blocks ${blocks.length} | examples ${exN} | practice ${prac.map((p) => p.props.questions.length).join("+") || 0} | Q&A ${qaN} | explorers ${explorers.join(", ") || "none"} | svg ${(all.match(/<svg/g) || []).length}`);
  if (exN !== 5) fail(`examples = ${exN}`);
  if (qaN !== 5) fail(`Q&A = ${qaN}`);
  if (!prac.length || prac.some((p) => p.props.questions.length !== 5)) fail("every practice widget needs exactly 5 questions");
  if (!explorers.length && !/Révision/.test(M.TITLE)) fail("no interactive explorer");
  // template bugs show up as a bare NaN/undefined; the word "undefined" in prose (÷0) is fine
  const prose = all.replace(/(is|are|be) (<strong>)?undefined/gi, "").replace(/>Undefined</g, "><")
    .replace(/undefined(<\/strong>)?( slope)/gi, "$2").replace(/(slope|slope is|slope:) (<strong>)?undefined/gi, "$1").replace(/>undefined</g, "><").replace(/“undefined slope”/g, "");
  if (/\bNaN\b|\bundefined\b|\$\{/.test(prose)) fail("text contains NaN / undefined / ${");
  htmls.forEach((h, i) => mathCheck(`html#${i}`, h));


  for (const [i, qq] of prac.flatMap((p) => p.props.questions).entries()) {
    const L = `practice Q${i + 1}`;
    for (const s of [qq.prompt, qq.hint, qq.final, ...qq.solution, ...(qq.answer.options ?? [])]) mathCheck(L, s);
    const a = qq.answer;
    if (a.kind === "number") {
      const fv = evalMath(spans(qq.final)[0] ?? qq.final);
      if (!Number.isNaN(fv)) { eqChecked++; if (Math.abs(fv - a.value) > 1e-6 * Math.max(1, Math.abs(a.value))) fail(`${L}: spec ${a.value} but final shows ${fv}`); }
      let typed = Number.isInteger(a.value) ? String(a.value) : String(+a.value.toFixed(10));
      if (a.form === "sci") {
        typed = a.value.toExponential().replace("e+", "e");
        if (checkAnswer(a, String(a.value))) fail(`${L}: scientific-notation question accepts standard form`);
      }
      if (a.form === "fraction" && !Number.isInteger(a.value)) {
        const d = Array.from({ length: 2000 }, (_, k) => k + 1).find((k) => Math.abs(a.value * k - Math.round(a.value * k)) < 1e-9);
        typed = d ? `${Math.round(a.value * d)}/${d}` : typed;
        if (checkAnswer(a, String(+a.value.toFixed(10)))) fail(`${L}: fraction-form question accepts a rounded decimal`);
      }
      if (!checkAnswer(a, a.percent ? typed + "%" : typed) && !checkAnswer(a, String(a.value * (a.percent ? 100 : 1)))) fail(`${L}: checker rejects its own value ${a.value}`);
    } else if (a.kind === "choice") {
      if (!(a.correct >= 0 && a.correct < a.options.length) || a.options.length < 2) fail(`${L}: bad choice spec`);
      if (new Set(a.options).size !== a.options.length) fail(`${L}: duplicate options`);
    } else if (a.kind === "text") {
      if (!a.accept.length) fail(`${L}: no accepted text`);
      if (!checkAnswer(a, a.accept[0])) fail(`${L}: checker rejects first accepted text`);
    } else if (a.kind === "expr") {
      if (!checkAnswer(a, a.value)) fail(`${L}: expression spec rejects itself (${a.value})`);
      const fin = spans(qq.final)[0];
      if (fin) {
        let typed = fin.replace(/^[^=]*=/, "").replace(/\\left|\\right|\\,/g, "");
        for (let k = 0; k < 4; k++) typed = typed.replace(/\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/g, "(($1)/($2))");
        typed = typed.replace(/\\cdot|\\times/g, "*").replace(/[{}]/g, "");
        if (!/\\/.test(typed) && !checkAnswer({ ...a, simplified: false }, typed)) fail(`${L}: final "${fin}" is not equivalent to ${a.value}`);
      }
    } else if (a.kind === "ratio") {
      if (!checkAnswer(a, `${a.value[0]}:${a.value[1]}`)) fail(`${L}: ratio spec rejects itself`);
    }
    if (!qq.solution.length || !qq.hint || !qq.final) fail(`${L}: missing hint/solution/final`);
  }
}

console.log(`\narithmetic equalities verified: ${eqChecked}`);
console.log(bad ? `${bad} PROBLEM(S)` : "ALL CHECKS PASSED");
process.exit(bad ? 1 : 0);
