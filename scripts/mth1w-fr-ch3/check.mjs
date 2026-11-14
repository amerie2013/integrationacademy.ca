// node scripts/mth1w-fr-ch3/check.mjs [l3_1 l3_2 ...]      (par défaut : toutes les leçons du dossier)
// Vérifie une leçon française (même contrôle que ../mth1w-ch3/check.mjs) :
//   * structure : exactement 5 exemples, des widgets d'exercices de 5 questions, 5 Q&R, intro + résumé
//   * chaque \( \) / \[ \] se rend avec KaTeX (aussi dans les props des widgets)
//   * les égalités arithmétiques écrites dans le texte sont vraies (« -3+5=2 »)
//   * chaque réponse attendue est acceptée par le vérificateur du site pour la valeur de la ligne « final »
//   * mêmes nombres de blocs / widgets que la leçon anglaise source, et ID fixe lessonId(3, k)
//   * pas d'expressions réutilisées de la fiche ou de la banque françaises (fichiers locaux)
//   * aucun mot anglais courant laissé dans le texte visible (hors code)
import { createRequire } from "module";
import { pathToFileURL } from "url";
import { resolve } from "path";
import { readdirSync } from "fs";
import { checkAnswer } from "../../lib/answerCheck.ts";
import { lessonId } from "../mth1w-fr/common.mjs";

const katex = createRequire(import.meta.url)("katex");
const DIR = resolve("scripts/mth1w-fr-ch3");
const EN_DIR = resolve("scripts/mth1w-ch3");
const names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const files = names.length ? names.map((n) => (n.endsWith(".mjs") ? n : n + ".mjs")) : readdirSync(DIR).filter((f) => /^l3_\d+\.mjs$/.test(f)).sort((a, b) => Number(a.slice(3, -4)) - Number(b.slice(3, -4)));

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
  const stmts = span.split(/,(?![^()]*\))|\\Rightarrow|\\quad|\\text\{ et \}/);
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
// leftover English: strip code (<pre>, <code>, \texttt), math and tags, then look for common English words
const ENGLISH = /\b(the|and|Find|Solve|Show|which|Step|Example|Answer|Watch out|Hard level|Explain|What|How many|Predict|loop runs|prints)\b/;
const visible = (h) => String(h).replace(/<pre[\s\S]*?<\/pre>/g, " ").replace(/<code[\s\S]*?<\/code>/g, " ").replace(/\\texttt\{[^}]*\}/g, " ").replace(RE, " ").replace(/<[^>]+>/g, " ");

// French worksheet + bank expressions per topic (for the overlap check)
const wsSpans = {}, bankSpans = {};
for (const k of [1, 2, 3]) {
  const code = `3.${k}`;
  const W = (await import(pathToFileURL(resolve(DIR, `ws/w3_${k}.mjs`)).href)).WS;
  wsSpans[code] = new Set([...W.examples.map((e) => e.q), ...W.problems.map((p) => p.q)].flatMap((x) => [...String(x).matchAll(/\$([^$]+)\$/g)].map((m) => norm(m[1]))).filter((s) => s.length > 3));
  const em = await import(pathToFileURL(resolve(DIR, `bank/em3_${k}.mjs`)).href);
  const h = await import(pathToFileURL(resolve(DIR, `bank/h3_${k}.mjs`)).href);
  bankSpans[code] = new Set([...em.E, ...em.M, ...h.Q].flatMap((q) => [...String(q.prompt).matchAll(/\$([^$]+)\$/g)].map((m) => m[1])).filter((s) => s.length > 3).map(norm));
}

for (const f of files) {
  const M = await import(pathToFileURL(resolve(DIR, f)).href);
  const k = Number(f.match(/l3_(\d+)/)[1]);
  const EN = await import(pathToFileURL(resolve(EN_DIR, f)).href);
  const code = M.TITLE.split(" ")[0];
  console.log(`\n${M.TITLE}`);
  if (M.ID !== lessonId(3, k)) fail(`ID ${M.ID} is not lessonId(3, ${k})`);
  const blocks = M.blocks(), enBlocks = EN.blocks();
  const wl = (b) => b.filter((x) => x.type === "widget").map((x) => x.widget).join(",");
  if (blocks.length !== enBlocks.length || wl(blocks) !== wl(enBlocks)) fail(`blocks ${blocks.length} (${wl(blocks)}) vs English ${enBlocks.length} (${wl(enBlocks)})`);
  // codeTracer programs must run and the widget props must be translated
  blocks.filter((b) => b.type === "widget" && b.widget === "codeTracer").forEach((b, i) => {
    for (const s of [b.props.title, b.props.task]) { mathCheck(`codeTracer#${i}`, s); if (ENGLISH.test(visible(s))) fail(`codeTracer#${i}: English left? "${visible(s).slice(0, 70)}"`); }
  });
  const htmls = blocks.filter((b) => b.type === "html").map((b) => b.html);
  const all = htmls.join("\n");
  const exN = (all.match(/class="example-box"/g) || []).length, qaN = (all.match(/class="qa-box"/g) || []).length;
  const prac = blocks.filter((b) => b.type === "widget" && b.widget === "practice");
  const explorers = blocks.filter((b) => b.type === "widget" && b.widget !== "practice").map((b) => b.widget);
  console.log(`  blocks ${blocks.length} | examples ${exN} | practice ${prac.map((p) => p.props.questions.length).join("+") || 0} | Q&R ${qaN} | explorers ${explorers.join(", ") || "none"} | svg ${(all.match(/<svg/g) || []).length}`);
  if (exN !== 5) fail(`examples = ${exN}`);
  if (qaN !== 5) fail(`Q&R = ${qaN}`);
  if (!prac.length || prac.some((p) => p.props.questions.length !== 5)) fail("every practice widget needs exactly 5 questions");
  if (!explorers.length && !/Révision/.test(M.TITLE)) fail("no interactive explorer");
  if (/\bNaN\b|\bundefined\b|\$\{/.test(all)) fail("text contains NaN / undefined / ${");
  htmls.forEach((h, i) => { mathCheck(`html#${i}`, h); const v = visible(h); const m = v.match(ENGLISH); if (m) fail(`html#${i}: English word "${m[0]}" near "${v.slice(Math.max(0, m.index - 40), m.index + 40).replace(/\s+/g, " ")}"`); });

  const lessonExprs = new Set();
  const exHtml = all.slice(all.indexOf("Exemples résolus"));
  for (const s of spans(exHtml.slice(0, exHtml.indexOf("Questions et réponses") > 0 ? exHtml.indexOf("Questions et réponses") : undefined))) lessonExprs.add(norm(s));

  for (const [i, qq] of prac.flatMap((p) => p.props.questions).entries()) {
    const L = `practice Q${i + 1}`;
    for (const s of [qq.prompt, qq.hint, qq.final, ...qq.solution, ...(qq.answer.options ?? [])]) { mathCheck(L, s); if (ENGLISH.test(visible(s))) fail(`${L}: English left? "${visible(s).slice(0, 70)}"`); }
    for (const s of spans(qq.prompt)) lessonExprs.add(norm(s));
    const a = qq.answer;
    if (a.kind === "number") {
      const fv = evalMath(spans(qq.final)[0] ?? qq.final);
      if (!Number.isNaN(fv)) { eqChecked++; if (Math.abs(fv - a.value) > 1e-6 * Math.max(1, Math.abs(a.value))) fail(`${L}: spec ${a.value} but final shows ${fv}`); }
      const typed = Number.isInteger(a.value) ? String(a.value) : String(+a.value.toFixed(10));
      if (!checkAnswer(a, typed)) fail(`${L}: checker rejects its own value ${a.value}`);
    } else if (a.kind === "choice") {
      if (!(a.correct >= 0 && a.correct < a.options.length) || a.options.length < 2) fail(`${L}: bad choice spec`);
      if (new Set(a.options).size !== a.options.length) fail(`${L}: duplicate options`);
    } else if (a.kind === "text") {
      if (!a.accept.length) fail(`${L}: no accepted text`);
      if (!checkAnswer(a, a.accept[0])) fail(`${L}: checker rejects first accepted text`);
    }
    if (!qq.solution.length || !qq.hint || !qq.final) fail(`${L}: missing hint/solution/final`);
  }
  // same answers as the English lesson (math unchanged)
  const ens = enBlocks.filter((b) => b.type === "widget" && b.widget === "practice").flatMap((p) => p.props.questions);
  prac.flatMap((p) => p.props.questions).forEach((qq, i) => {
    const e = ens[i]?.answer, a = qq.answer;
    if (!e || e.kind !== a.kind || (a.kind === "number" && e.value !== a.value) || (a.kind === "choice" && (e.correct !== a.correct || e.options.length !== a.options.length))) fail(`practice Q${i + 1}: answer differs from English`);
  });
  const isExpr = (s) => !/^[a-z]=-?\d+$/.test(s) && /[-+*/=:^]|\\times|\\div|\\frac|\\cdot/.test(s.replace(/^-/, ""));
  const hitsW = [...lessonExprs].filter((s) => isExpr(s) && wsSpans[code]?.has(s));
  const hitsB = [...lessonExprs].filter((s) => isExpr(s) && bankSpans[code]?.has(s));
  if (hitsW.length) fail(`shares expressions with worksheet ${code}: ${hitsW.slice(0, 6).join("  ")}`);
  if (hitsB.length) console.log(`  note: ${hitsB.length} expression(s) also appear in the bank: ${hitsB.slice(0, 5).join("  ")}`);
}
console.log(`\narithmetic equalities verified: ${eqChecked}`);
console.log(bad ? `${bad} PROBLEM(S)` : "ALL CHECKS PASSED");
process.exit(bad ? 1 : 0);
