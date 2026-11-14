// node scripts/mhf4u-fr-ch7/check.mjs [l7_1 l7_2 ...]   (par défaut : toutes les leçons l7_*.mjs)
// Vérifie chaque leçon française du chapitre 7 et la compare à la leçon anglaise correspondante :
//   * structure : 5 exemples, pratique de 5 questions + pratique difficile de 3, 5 Q&R, section « Niveau difficile » à 2 défis
//   * même nombre de blocs, mêmes widgets (et mêmes props init), même nombre d'étapes par exemple et de figures SVG
//   * mêmes spécifications de réponse (mathématiques inchangées) que la leçon anglaise
//   * chaque \( \) / \[ \] passe dans KaTeX; égalités arithmétiques vraies; le vérificateur du site accepte chaque réponse
//   * balayage des mots anglais restants dans le texte visible (leçons, fiches, banque, devoirs, réponses construites)
import { createRequire } from "module";
import { pathToFileURL } from "url";
import { resolve, join } from "path";
import { readdirSync } from "fs";
import { checkAnswer } from "../../lib/answerCheck.ts";

const katex = createRequire(import.meta.url)("katex");
const DIR = resolve("scripts/mhf4u-fr-ch7");
const EN = resolve("scripts/mhf4u-ch7");
const names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const files = names.length ? names.map((n) => (n.endsWith(".mjs") ? n : n + ".mjs")) : readdirSync(DIR).filter((f) => /^l7_\d+\.mjs$/.test(f)).sort();

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
const stepsPer = (all, cls) => [...all.matchAll(new RegExp(`class="${cls}"[\\s\\S]*?(?=class="${cls}"|$)`, "g"))].map((m) => (m[0].match(/class="step"/g) || []).length);

for (const f of files) {
  const M = await import(pathToFileURL(join(DIR, f)).href);
  const E = await import(pathToFileURL(join(EN, f)).href);
  console.log(`\n${M.TITLE}   (EN: ${E.TITLE})`);
  const blocks = M.blocks(), eb = E.blocks();
  const htmls = blocks.filter((b) => b.type === "html").map((b) => b.html), all = htmls.join("\n");
  const eall = eb.filter((b) => b.type === "html").map((b) => b.html).join("\n");
  const prac = blocks.filter((b) => b.type === "widget" && b.widget === "practice");
  const eprac = eb.filter((b) => b.type === "widget" && b.widget === "practice");
  const wl = (bs) => bs.map((b) => (b.type === "widget" ? `${b.widget}${b.widget === "practice" ? "" : JSON.stringify(b.props)}` : b.type)).join(" ");
  const exN = (all.match(/class="example-box"/g) || []).length, qaN = (all.match(/class="qa-box"/g) || []).length;
  console.log(`  blocks FR ${blocks.length} / EN ${eb.length} | examples ${exN} | practice ${prac.map((p) => p.props.questions.length).join("+")} | Q&R ${qaN} | svg FR ${(all.match(/<svg/g) || []).length} / EN ${(eall.match(/<svg/g) || []).length}`);
  if (wl(blocks) !== wl(eb)) fail(`block/widget sequence differs:\n    FR ${wl(blocks)}\n    EN ${wl(eb)}`);
  if ((all.match(/<svg/g) || []).length !== (eall.match(/<svg/g) || []).length) fail("figure count differs from EN");
  if (JSON.stringify(stepsPer(all, "example-box")) !== JSON.stringify(stepsPer(eall, "example-box"))) fail(`example step counts differ: FR ${stepsPer(all, "example-box")} EN ${stepsPer(eall, "example-box")}`);
  if (JSON.stringify(stepsPer(all, "challenge-box")) !== JSON.stringify(stepsPer(eall, "challenge-box"))) fail("challenge step counts differ");
  if (exN !== 5) fail(`examples = ${exN}`);
  if (qaN !== 5) fail(`Q&R = ${qaN}`);
  if (prac.length !== 2 || prac[0].props.questions.length !== 5 || prac[1].props.questions.length !== 3) fail("need a 5-question practice widget and a 3-question hard practice widget");
  if (!/🔴 Niveau difficile/.test(all) || (all.match(/class="challenge-box"/g) || []).length !== 2) fail("missing « Niveau difficile » section with 2 challenges");
  if (/\bNaN\b|\bundefined\b|\$\{/.test(all)) fail("text contains NaN / undefined / ${");
  htmls.forEach((h, i) => mathCheck(`html#${i}`, h));
  const fq = prac.flatMap((p) => p.props.questions), eq = eprac.flatMap((p) => p.props.questions);
  for (const [i, qq] of fq.entries()) {
    const L = `practice Q${i + 1}`;
    for (const s of [qq.prompt, qq.hint, qq.final, ...qq.solution, ...(qq.answer.options ?? [])]) mathCheck(L, s);
    const ea = eq[i]?.answer;
    if (JSON.stringify({ ...qq.answer, accept: undefined }) !== JSON.stringify({ ...ea, accept: undefined })) fail(`${L}: answer spec differs from EN`);
    if (qq.solution.length !== eq[i]?.solution.length) fail(`${L}: solution step count differs from EN`);
    const a = qq.answer;
    if (a.kind === "number") {
      const typed = Number.isInteger(a.value) ? String(a.value) : String(+a.value.toFixed(10));
      if (!checkAnswer(a, typed)) fail(`${L}: checker rejects its own value ${a.value}`);
    } else if (a.kind === "roots") {
      if (!checkAnswer(a, a.value.map((v) => String(+v.toFixed(6))).join(", "))) fail(`${L}: roots spec rejects its own value`);
    } else if (a.kind === "text" && !checkAnswer(a, a.accept[0])) fail(`${L}: checker rejects first accepted text`);
    if (!qq.solution.length || !qq.hint || !qq.final) fail(`${L}: missing hint/solution/final`);
  }
}

// ---- leftover-English scan over every student-visible string of the French pipeline ----
const ENG = /\b(the|and|Find|Solve|Show|which|Which|Step|Example|Answer|Watch out|Hard level|Explain|graph of|Evaluate|Write|Expand|Condense|when|When|with|years|days|hours|about|only|both|every|root|solution|Check|Grid|Assignment|Worksheet|Problem|Level|Knowledge|Thinking|Application)\b/;
const strip = (s) => String(s).replace(/\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\$[^$]*\$/g, " ").replace(/<[^>]+>/g, " ").replace(/style="[^"]*"/g, " ").replace(/\\[a-zA-Z]+/g, " ");
const hits = [];
const scan = (where, s) => { if (typeof s !== "string") return; const t = strip(s); const m = t.match(ENG); if (m) hits.push(`${where}: «${m[0]}» in "${t.trim().slice(Math.max(0, m.index - 30), m.index + 40)}"`); };
const walk = (where, o) => { if (typeof o === "string") scan(where, o); else if (Array.isArray(o)) o.forEach((x, i) => walk(`${where}[${i}]`, x)); else if (o && typeof o === "object") for (const [k, v] of Object.entries(o)) if (!["fig", "f", "color", "id", "kind", "type", "widget", "view"].includes(k)) walk(`${where}.${k}`, v); };
for (const f of readdirSync(DIR).filter((x) => /^l7_\d+\.mjs$/.test(x))) { const M = await import(pathToFileURL(join(DIR, f)).href); walk(f, M.blocks()); scan(f, M.TITLE); }
for (const k of [1, 2, 3, 4, 5]) {
  const W = (await import(pathToFileURL(join(DIR, "ws", `w7_${k}.mjs`)).href)).WS;
  walk(`ws/w7_${k}`, { ...W, examples: W.examples.map(({ fig, ...e }) => e), problems: W.problems.map(({ fig, ...p }) => p) });
  const em = await import(pathToFileURL(join(DIR, "bank", `em7_${k}.mjs`)).href), h = await import(pathToFileURL(join(DIR, "bank", `h7_${k}.mjs`)).href);
  walk(`bank/7_${k}`, [em.E, em.M, h.Q, h.TOPIC]);
}
walk("asg", (await import(pathToFileURL(join(DIR, "asg", "assignments.mjs")).href)).ASSIGNMENTS);
walk("written", (await import(pathToFileURL(join(DIR, "written.mjs")).href)).WRITTEN);
console.log(`\nleftover-English scan: ${hits.length} hit(s)`);
// accepted text answers may keep the English word on purpose (e.g. "extraneous", "none")
const real = hits.filter((h) => !/\.answer\[/.test(h));
real.forEach((h) => console.log("  " + h));
if (real.length) fail(`${real.length} leftover English string(s)`);

console.log(`\narithmetic equalities verified: ${eqChecked}`);
console.log(bad ? `${bad} PROBLEM(S)` : "ALL CHECKS PASSED");
process.exit(bad ? 1 : 0);
