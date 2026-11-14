// node scripts/mcv4u-fr-ch5/check.mjs [l5_1 l5_2 ...]      (par défaut : toutes les leçons du dossier)
// Vérifie chaque leçon française du chapitre 5 (copie des vérifications anglaises qui s'appliquent) :
//   * structure : 5 exemples, 5 questions de pratique, 5 Q-R, niveau difficile (2 défis + 3 questions)
//   * chaque \( \) / \[ \] s'affiche avec KaTeX (aussi dans les props des widgets)
//   * les égalités arithmétiques écrites dans le texte sont vraies
//   * chaque réponse de pratique est acceptée par le correcteur du site pour la valeur de sa ligne « final »
//   * miroir de l'anglais : mêmes blocs, mêmes widgets (et mêmes init), mêmes spécifications de réponse
//   * texte laissé en anglais : chrome anglais résiduel ou mots anglais courants
// (La vérification de chevauchement avec la fiche et la banque anglaises n'est pas reprise : le contenu français est
//  une traduction exacte de l'anglais, déjà vérifié.)
import { createRequire } from "module";
import { pathToFileURL } from "url";
import { resolve } from "path";
import { readdirSync } from "fs";
import { checkAnswer } from "../../lib/answerCheck.ts";

const katex = createRequire(import.meta.url)("katex");
const DIR = resolve("scripts/mcv4u-fr-ch5");
const EN = resolve("scripts/mcv4u-ch5");
const names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const files = names.length ? names.map((n) => (n.endsWith(".mjs") ? n : n + ".mjs")) : readdirSync(DIR).filter((f) => /^l5_\d+\.mjs$/.test(f)).sort((a, b) => Number(a.slice(3, -4)) - Number(b.slice(3, -4)));

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
// mots anglais courants (hors maths) qui ne devraient plus apparaître dans le texte visible
const ENGLISH = /\b(the|and|Find|Solve|Show|which|Step|Example|Answer|Watch out|Hard level|Explain|graph of|Check|Rule|with|from|between|times|is|are|of|to|years|hours|Challenge|Summary|Show solution|Show answer)\b/;
const visible = (h) => h.replace(/<[^>]+>/g, " ").replace(/\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)/g, " ").replace(/&[a-z]+;/g, " ");

for (const f of files) {
  const M = await import(pathToFileURL(resolve(DIR, f)).href);
  const E = await import(pathToFileURL(resolve(EN, f)).href);
  console.log(`\n${M.TITLE}`);
  const blocks = M.blocks(), eblocks = E.blocks();
  const htmls = blocks.filter((b) => b.type === "html").map((b) => b.html);
  const all = htmls.join("\n");
  const exN = (all.match(/class="example-box"/g) || []).length, qaN = (all.match(/class="qa-box"/g) || []).length;
  const prac = blocks.filter((b) => b.type === "widget" && b.widget === "practice");
  const eprac = eblocks.filter((b) => b.type === "widget" && b.widget === "practice");
  const explorers = blocks.filter((b) => b.type === "widget" && b.widget !== "practice").map((b) => b.widget);
  console.log(`  blocs ${blocks.length} (EN ${eblocks.length}) | exemples ${exN} | pratique ${prac.map((p) => p.props.questions.length).join("+") || 0} | Q-R ${qaN} | explorateurs ${explorers.join(", ") || "aucun"} | svg ${(all.match(/<svg/g) || []).length} (EN ${(eblocks.filter((b) => b.type === "html").map((b) => b.html).join("").match(/<svg/g) || []).length})`);
  if (exN !== 5) fail(`exemples = ${exN}`);
  if (qaN !== 5) fail(`Q-R = ${qaN}`);
  if (prac.length !== 2 || prac[0].props.questions.length !== 5 || prac[1].props.questions.length !== 3) fail("il faut une pratique de 5 questions et une pratique difficile de 3 questions");
  if (!/🔴 Niveau difficile/.test(all) || (all.match(/class="challenge-box"/g) || []).length !== 2) fail("section de niveau difficile (2 défis) manquante");
  // miroir de l'anglais
  if (blocks.length !== eblocks.length) fail(`nombre de blocs ${blocks.length} ≠ EN ${eblocks.length}`);
  blocks.forEach((b, i) => {
    const e = eblocks[i];
    if (!e || b.type !== e.type || b.widget !== e.widget) fail(`bloc ${i}: ${b.type}/${b.widget} ≠ EN ${e?.type}/${e?.widget}`);
    else if (b.type === "widget" && b.widget !== "practice" && JSON.stringify(b.props) !== JSON.stringify(e.props)) fail(`bloc ${i}: props du widget ${b.widget} différentes de l'anglais`);
    else if (b.type === "html" && (b.html.match(/<svg/g) || []).length !== (e.html.match(/<svg/g) || []).length) fail(`bloc ${i}: nombre de figures différent de l'anglais`);
  });
  const fq = prac.flatMap((p) => p.props.questions), eq = eprac.flatMap((p) => p.props.questions);
  fq.forEach((qq, i) => {
    const ea = eq[i]?.answer, a = qq.answer;
    if (!ea || a.kind !== ea.kind) return fail(`pratique Q${i + 1}: type de réponse ≠ EN`);
    if (a.kind === "number" && (a.value !== ea.value || a.tol !== ea.tol || a.form !== ea.form)) fail(`pratique Q${i + 1}: valeur ${a.value} ≠ EN ${ea.value}`);
    if (a.kind === "choice" && (a.correct !== ea.correct || a.options.length !== ea.options.length)) fail(`pratique Q${i + 1}: choix ≠ EN`);
    if (qq.solution.length !== eq[i].solution.length) fail(`pratique Q${i + 1}: ${qq.solution.length} étapes de solution ≠ EN ${eq[i].solution.length}`);
  });
  for (const s of all.match(/<details><summary><strong>Voir la solution[\s\S]*?<\/details>/g) || []) mathCheck("défi", s);
  if (!explorers.length && !/Révision/.test(M.TITLE)) fail("aucun explorateur interactif");
  if (/\bNaN\b|\bundefined\b|\$\{/.test(all)) fail("le texte contient NaN / undefined / ${");
  htmls.forEach((h, i) => mathCheck(`html#${i}`, h));
  // anglais résiduel
  htmls.forEach((h, i) => { const m = visible(h).match(ENGLISH); if (m) fail(`html#${i}: mot anglais « ${m[0]} » près de « ${visible(h).slice(Math.max(0, m.index - 40), m.index + 40).replace(/\s+/g, " ")} »`); });
  for (const [i, qq] of fq.entries()) {
    const L = `pratique Q${i + 1}`;
    for (const s of [qq.prompt, qq.hint, qq.final, ...qq.solution, ...(qq.answer.options ?? [])]) {
      mathCheck(L, s);
      const m = visible(s).match(ENGLISH); if (m) fail(`${L}: mot anglais « ${m[0]} » dans « ${visible(s).slice(0, 80)} »`);
    }
    const a = qq.answer;
    if (a.kind === "number") {
      const fv = evalMath(spans(qq.final)[0] ?? qq.final);
      if (!Number.isNaN(fv)) { eqChecked++; if (Math.abs(fv - a.value) > 1e-6 * Math.max(1, Math.abs(a.value))) fail(`${L}: spécification ${a.value} mais final ${fv}`); }
      let typed = Number.isInteger(a.value) ? String(a.value) : String(+a.value.toFixed(10));
      if (!checkAnswer(a, typed)) fail(`${L}: le correcteur refuse sa propre valeur ${a.value}`);
    } else if (a.kind === "choice") {
      if (!(a.correct >= 0 && a.correct < a.options.length) || a.options.length < 2) fail(`${L}: mauvais choix`);
      if (new Set(a.options).size !== a.options.length) fail(`${L}: options en double`);
    } else if (a.kind === "text") {
      if (!a.accept.length || !checkAnswer(a, a.accept[0])) fail(`${L}: texte accepté refusé`);
    } else if (a.kind === "expr") {
      if (!checkAnswer(a, a.value)) fail(`${L}: l'expression se refuse elle-même (${a.value})`);
    }
    if (!qq.solution.length || !qq.hint || !qq.final) fail(`${L}: indice/solution/final manquant`);
  }
}
console.log(`\négalités arithmétiques vérifiées : ${eqChecked}`);
console.log(bad ? `${bad} PROBLÈME(S)` : "TOUTES LES VÉRIFICATIONS SONT RÉUSSIES");
process.exitCode = bad ? 1 : 0;
