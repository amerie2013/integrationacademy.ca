// node scripts/mcv4u-fr-ch4/check.mjs [l4_1 l4_2 ...]      (par défaut : toutes les leçons du dossier)
// Vérifie chaque leçon française du chapitre 4 :
//   * structure : 5 exemples, une pratique de 5 questions, 5 Q et R, niveau difficile (2 défis + 3 questions)
//   * chaque \( \) / \[ \] se rend dans KaTeX (aussi dans les props des widgets)
//   * les égalités arithmétiques écrites dans le texte sont vraies
//   * chaque réponse de pratique est acceptée par le correcteur du site pour sa propre valeur
//   * même mathématique que la leçon anglaise : mêmes réponses attendues, mêmes props de widgets explorateurs,
//     même nombre de figures SVG
// (La vérification de chevauchement avec la banque/les fiches du cours anglais n'est pas reprise : elle lit la base.)
import { createRequire } from "module";
import { pathToFileURL } from "url";
import { resolve } from "path";
import { readdirSync } from "fs";
import { checkAnswer } from "../../lib/answerCheck.ts";

const katex = createRequire(import.meta.url)("katex");
const DIR = resolve("scripts/mcv4u-fr-ch4");
const EN = resolve("scripts/mcv4u-ch4");
const names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const files = names.length ? names.map((n) => (n.endsWith(".mjs") ? n : n + ".mjs")) : readdirSync(DIR).filter((f) => /^l4_\d+\.mjs$/.test(f)).sort((a, b) => Number(a.slice(3, -4)) - Number(b.slice(3, -4)));

let bad = 0, eqChecked = 0;
const fail = (m) => { bad++; console.log("  ÉCHEC :", m); };

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
/** answer spec without the student-visible choice texts (those are translated) */
const specKey = (a) => JSON.stringify(a.kind === "choice" ? { kind: a.kind, n: a.options.length, correct: a.correct } : a.kind === "text" ? { kind: a.kind } : a);

for (const f of files) {
  const M = await import(pathToFileURL(resolve(DIR, f)).href);
  const E = await import(pathToFileURL(resolve(EN, f)).href);
  console.log(`\n${M.TITLE}`);
  const blocks = M.blocks(), eb = E.blocks();
  const htmls = blocks.filter((b) => b.type === "html").map((b) => b.html);
  const all = htmls.join("\n"), eall = eb.filter((b) => b.type === "html").map((b) => b.html).join("\n");
  const exN = (all.match(/class="example-box"/g) || []).length, qaN = (all.match(/class="qa-box"/g) || []).length;
  const prac = blocks.filter((b) => b.type === "widget" && b.widget === "practice");
  const eprac = eb.filter((b) => b.type === "widget" && b.widget === "practice");
  const explorers = blocks.filter((b) => b.type === "widget" && b.widget !== "practice");
  const eexpl = eb.filter((b) => b.type === "widget" && b.widget !== "practice");
  const svgN = (all.match(/<svg/g) || []).length, esvgN = (eall.match(/<svg/g) || []).length;
  console.log(`  blocs ${blocks.length} (EN ${eb.length}) | exemples ${exN} | pratique ${prac.map((p) => p.props.questions.length).join("+") || 0} | Q et R ${qaN} | explorateurs ${explorers.map((b) => b.widget).join(", ") || "aucun"} | svg ${svgN} (EN ${esvgN})`);
  if (blocks.length !== eb.length || blocks.some((b, i) => b.type !== eb[i].type || b.widget !== eb[i].widget)) fail("structure différente de la leçon anglaise");
  if (svgN !== esvgN) fail(`nombre de figures ${svgN} ≠ ${esvgN}`);
  if (exN !== 5) fail(`exemples = ${exN}`);
  if (qaN !== 5) fail(`Q et R = ${qaN}`);
  if (prac.length !== 2 || prac[0].props.questions.length !== 5 || prac[1].props.questions.length !== 3) fail("il faut une pratique de 5 questions et une pratique difficile de 3 questions");
  if (!/🔴 Niveau difficile/.test(all) || (all.match(/class="challenge-box"/g) || []).length !== 2) fail("section de niveau difficile (2 défis) manquante");
  for (const s of all.match(/<details><summary><strong>Voir la solution[\s\S]*?<\/details>/g) || []) mathCheck("défi", s);
  if (!explorers.length && !/Révision/.test(M.TITLE)) fail("aucun explorateur interactif");
  explorers.forEach((b, i) => { if (JSON.stringify(b.props) !== JSON.stringify(eexpl[i]?.props)) fail(`props de ${b.widget} différentes de l'anglais`); });
  if (/\bNaN\b|\bundefined\b|\$\{/.test(all)) fail("le texte contient NaN / undefined / ${");
  htmls.forEach((h, i) => mathCheck(`html#${i}`, h));

  const qs = prac.flatMap((p) => p.props.questions), eqs = eprac.flatMap((p) => p.props.questions);
  for (const [i, qq] of qs.entries()) {
    const L = `pratique Q${i + 1}`;
    for (const s of [qq.prompt, qq.hint, qq.final, ...qq.solution, ...(qq.answer.options ?? [])]) mathCheck(L, s);
    if (specKey(qq.answer) !== specKey(eqs[i]?.answer ?? {})) fail(`${L}: réponse attendue différente de l'anglais`);
    if (qq.solution.length !== eqs[i]?.solution.length) fail(`${L}: nombre d'étapes de solution différent de l'anglais`);
    const a = qq.answer;
    if (a.kind === "number") {
      const fv = evalMath(spans(qq.final)[0] ?? qq.final);
      if (!Number.isNaN(fv)) { eqChecked++; if (Math.abs(fv - a.value) > 1e-6 * Math.max(1, Math.abs(a.value))) fail(`${L}: valeur ${a.value} mais la réponse finale affiche ${fv}`); }
      const typed = Number.isInteger(a.value) ? String(a.value) : String(+a.value.toFixed(10));
      if (!checkAnswer(a, typed)) fail(`${L}: le correcteur rejette sa propre valeur ${a.value}`);
    } else if (a.kind === "choice") {
      if (!(a.correct >= 0 && a.correct < a.options.length) || a.options.length < 2) fail(`${L}: choix invalide`);
      if (new Set(a.options).size !== a.options.length) fail(`${L}: options en double`);
    } else if (a.kind === "text") {
      if (!a.accept.length || !checkAnswer(a, a.accept[0])) fail(`${L}: texte accepté invalide`);
    } else if (a.kind === "roots") {
      const typed = a.value.length ? a.value.map((v) => String(+v.toFixed(6))).join(", ") : "no real roots";
      if (!checkAnswer(a, typed)) fail(`${L}: le correcteur rejette ses propres racines (${typed})`);
      if (a.value.length > 1 && checkAnswer(a, String(a.value[0]))) fail(`${L}: une seule racine est acceptée`);
    }
    if (!qq.solution.length || !qq.hint || !qq.final) fail(`${L}: indice/solution/réponse finale manquant`);
  }
}
console.log(`\négalités arithmétiques vérifiées : ${eqChecked}`);
console.log(bad ? `${bad} PROBLÈME(S)` : "ALL CHECKS PASSED");
process.exit(bad ? 1 : 0);
