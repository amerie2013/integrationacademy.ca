// node scripts/mth1w-fr-ch4/check.mjs [l4_1 l4_2 ...]      (par défaut : toutes les leçons du dossier)
// Vérifie une leçon française (mêmes contrôles que ../mth1w-ch4/check.mjs, sans lecture de la base) :
//   * structure : exactement 5 exemples, des widgets d'exercices de 5 questions, 5 Q&R, un explorateur (sauf révision)
//   * chaque \( \) / \[ \] se rend avec KaTeX (aussi dans les props des widgets)
//   * les égalités arithmétiques écrites dans le texte sont vraies (« -3+5=2 »)
//   * chaque réponse attendue est acceptée par le vérificateur du site pour la valeur de la ligne « final »
//   * mêmes nombres de blocs, d'exemples, de figures et mêmes widgets (et props numériques) que la leçon anglaise source;
//     ID fixe lessonId(4, k)
//   * aucun mot anglais courant laissé dans le texte visible
import { createRequire } from "module";
import { pathToFileURL } from "url";
import { resolve } from "path";
import { readdirSync } from "fs";
import { checkAnswer } from "../../lib/answerCheck.ts";
import { lessonId } from "../mth1w-fr/common.mjs";

const katex = createRequire(import.meta.url)("katex");
const DIR = resolve("scripts/mth1w-fr-ch4");
const EN_DIR = resolve("scripts/mth1w-ch4");
const names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const files = names.length ? names.map((n) => (n.endsWith(".mjs") ? n : n + ".mjs")) : readdirSync(DIR).filter((f) => /^l4_\d+\.mjs$/.test(f)).sort((a, b) => Number(a.slice(3, -4)) - Number(b.slice(3, -4)));

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
  const stmts = span.split(/,(?![^()]*\))|\\Rightarrow|\\quad|\\text\{ et \}|\\text\{ and \}/);
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
// texte visible sans math, sans balises ni SVG
const visible = (s) => String(s).replace(/<svg[\s\S]*?<\/svg>/g, " ").replace(RE, " ").replace(/<[^>]+>/g, " ");
const ENGLISH = /\b(the|and|Find|Solve|Show|which|Step|Example|Answer|Watch out|Hard level|Explain|What|How many|Write|slope|line|lines|graph|cost|time|then|with|from|each|is|are)\b/;
const numericProps = (p) => JSON.stringify(Object.fromEntries(Object.entries(p ?? {}).filter(([, v]) => typeof v === "number" || (Array.isArray(v) && v.every((x) => typeof x === "number")))));

for (const f of files) {
  const M = await import(pathToFileURL(resolve(DIR, f)).href);
  const E = await import(pathToFileURL(resolve(EN_DIR, f)).href);
  const k = Number(f.slice(3, -4));
  console.log(`\n${M.TITLE}`);
  if (M.ID !== lessonId(4, k)) fail(`ID ${M.ID} ≠ lessonId(4, ${k})`);
  if (!M.TITLE.startsWith(`4.${k} `)) fail(`title "${M.TITLE}" does not start with 4.${k}`);
  const blocks = M.blocks(), en = E.blocks();
  const htmls = blocks.filter((b) => b.type === "html").map((b) => b.html);
  const all = htmls.join("\n"), enAll = en.filter((b) => b.type === "html").map((b) => b.html).join("\n");
  const exN = (all.match(/class="example-box"/g) || []).length, qaN = (all.match(/class="qa-box"/g) || []).length;
  const prac = blocks.filter((b) => b.type === "widget" && b.widget === "practice");
  const explorers = blocks.filter((b) => b.type === "widget" && b.widget !== "practice");
  const svgN = (all.match(/<svg/g) || []).length, enSvg = (enAll.match(/<svg/g) || []).length;
  console.log(`  blocks ${blocks.length} (EN ${en.length}) | examples ${exN} | practice ${prac.map((p) => p.props.questions.length).join("+") || 0} | Q&R ${qaN} | explorers ${explorers.map((b) => b.widget).join(", ") || "none"} | svg ${svgN} (EN ${enSvg})`);
  if (exN !== 5) fail(`examples = ${exN}`);
  if (qaN !== 5) fail(`Q&R = ${qaN}`);
  if (!prac.length || prac.some((p) => p.props.questions.length !== 5)) fail("every practice widget needs exactly 5 questions");
  if (!explorers.length && !/Révision/.test(M.TITLE)) fail("no interactive explorer");
  if (blocks.length !== en.length || blocks.map((b) => b.type + (b.widget ?? "")).join() !== en.map((b) => b.type + (b.widget ?? "")).join()) fail("block sequence differs from English");
  if (svgN !== enSvg) fail(`figures ${svgN} ≠ English ${enSvg}`);
  blocks.forEach((b, i) => { if (b.type === "widget" && en[i]?.type === "widget" && numericProps(b.props) !== numericProps(en[i].props)) fail(`widget #${i} numeric props differ`); });
  if (/\bNaN\b|\bundefined\b|\$\{/.test(all)) fail("text contains NaN / undefined / ${");
  htmls.forEach((h, i) => mathCheck(`html#${i}`, h));
  const enPrac = en.filter((b) => b.type === "widget" && b.widget === "practice").flatMap((p) => p.props.questions);

  for (const [i, qq] of prac.flatMap((p) => p.props.questions).entries()) {
    const L = `practice Q${i + 1}`;
    for (const s of [qq.prompt, qq.hint, qq.final, ...qq.solution, ...(qq.answer.options ?? [])]) mathCheck(L, s);
    const a = qq.answer, ea = enPrac[i]?.answer;
    if (!ea || ea.kind !== a.kind || JSON.stringify(ea.value) !== JSON.stringify(a.value) || ea.correct !== a.correct) fail(`${L}: answer spec differs from English`);
    if (a.kind === "number") {
      const fv = evalMath(spans(qq.final)[0] ?? qq.final);
      if (!Number.isNaN(fv)) { eqChecked++; if (Math.abs(fv - a.value) > 1e-6 * Math.max(1, Math.abs(a.value))) fail(`${L}: spec ${a.value} but final shows ${fv}`); }
      const typed = Number.isInteger(a.value) ? String(a.value) : String(+a.value.toFixed(10));
      if (!checkAnswer(a, a.percent ? typed + "%" : typed) && !checkAnswer(a, String(a.value * (a.percent ? 100 : 1)))) fail(`${L}: checker rejects its own value ${a.value}`);
    } else if (a.kind === "choice") {
      if (!(a.correct >= 0 && a.correct < a.options.length) || a.options.length < 2) fail(`${L}: bad choice spec`);
      if (new Set(a.options).size !== a.options.length) fail(`${L}: duplicate options`);
    } else if (a.kind === "expr") {
      if (!checkAnswer(a, a.value)) fail(`${L}: expression spec rejects itself (${a.value})`);
    }
    if (!qq.solution.length || !qq.hint || !qq.final) fail(`${L}: missing hint/solution/final`);
    for (const s of [qq.label, qq.prompt, qq.hint, qq.final, ...qq.solution, ...(a.options ?? [])]) { const m = visible(s).match(ENGLISH); if (m) fail(`${L}: English word "${m[0]}" in "${visible(s).trim().slice(0, 60)}"`); }
  }
  for (const h of htmls) {
    const v = visible(h).replace(/\s+/g, " ");
    const m = v.match(new RegExp(`.{0,40}${ENGLISH.source}.{0,30}`));
    if (m) fail(`English word in lesson text: "…${m[0]}…"`);
  }
}
console.log(`\narithmetic equalities verified: ${eqChecked}`);
console.log(bad ? `${bad} PROBLEM(S)` : "ALL CHECKS PASSED");
process.exit(bad ? 1 : 0);
