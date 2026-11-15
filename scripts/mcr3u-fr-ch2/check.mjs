// node scripts/mcr3u-fr-ch2/check.mjs        (vérifie les 5 sujets du chapitre 2)
// Copie française de ../mcr3u-ch2/check.mjs (mêmes vérifications) appliquée à la disposition standard :
//   * leçon : chaque \( \) / \[ \] passe dans KaTeX; même structure que la leçon anglaise (exemples, exercices, Q&R,
//     graphiques, cartes « erreur », défi, modèles d'aire, tableaux); marqueurs français; aucun NaN / undefined / ${
//   * banque : chaque $…$ passe dans KaTeX; réponses cohérentes; 20/20/20
//   * devoir : maths \( \) valides, 10 questions en 4 catégories françaises
//   * fiche : $…$ pairs et valides, autant de réponses que de questions
//   * toutes les identités numériques enregistrées par verify() (moteur de lib2) sont vraies
import { createRequire } from "module";
import { pathToFileURL } from "url";
import { resolve } from "path";
import { runChecks } from "./lib.mjs";
import { ASSIGNMENTS } from "./asg/assignments.mjs";

const katex = createRequire(import.meta.url)("katex");
let bad = 0, spans = 0;
const fail = (m) => { bad++; console.log("  FAIL: " + m); };
const spanRe = /\\\[([\s\S]*?)\\\]|\\\(([\s\S]*?)\\\)/g;
const renderHtml = (label, h) => { for (const m of h.matchAll(spanRe)) { spans++; try { katex.renderToString((m[1] ?? m[2]).trim(), { throwOnError: true, strict: "ignore", displayMode: m[1] !== undefined }); } catch (e) { fail(`${label} KaTeX: ${(m[1] ?? m[2]).slice(0, 70)} -> ${e.message.slice(0, 80)}`); } } };
const dollarSpans = (label, t) => { const parts = String(t).split("$"); if (parts.length % 2 === 0) fail(`${label}: odd number of $ in: ${String(t).slice(0, 90)}`); for (let i = 1; i < parts.length; i += 2) { spans++; try { katex.renderToString(parts[i], { throwOnError: true, strict: "ignore" }); } catch (e) { fail(`${label} KaTeX: ${parts[i].slice(0, 70)} -> ${e.message.slice(0, 80)}`); } } };
const count = (h, re) => (h.match(re) || []).length;
const shape = (h) => ({
  examples: count(h, /class="example-box"/g), practice: count(h, /class="practice-box"/g), qa: count(h, /class="qa-box"/g),
  graphs: count(h, /tools\/graph/g), mistakes: count(h, /border:1px solid #fca5a5;/g), challenges: count(h, /border-left:5px solid #9333ea;/g),
  tables: count(h, /<table/g), svg: count(h, /<svg/g), watch: count(h, /class="mistake-box"/g), h2: count(h, /<h2>/g),
});
const ENGLISH = /\b(the|and|Find|Solve|Show|which|Step|Example|Answer|Watch out|Hard level|Explain|What|How many|Graph|shown|View answer|View solution|same\?)\b/;

for (let k = 1; k <= 5; k++) {
  const L = await import(pathToFileURL(resolve(`scripts/mcr3u-fr-ch2/l2_${k}.mjs`)).href);
  const E = await import(pathToFileURL(resolve(`scripts/mcr3u-ch2/t2_${k}.mjs`)).href);
  const { WS } = await import(pathToFileURL(resolve(`scripts/mcr3u-fr-ch2/ws/w2_${k}.mjs`)).href);
  const B = await import(pathToFileURL(resolve(`scripts/mcr3u-fr-ch2/bank/b2_${k}.mjs`)).href);
  console.log(`\n${L.TITLE}`);
  // lesson
  const blocks = L.blocks(), html = blocks.map((b) => b.html).join("\n"), enHtml = E.lessonBlocks().map((b) => b.html).join("\n");
  renderHtml("leçon", html);
  const fs_ = shape(html), es = shape(enHtml);
  console.log(`  leçon : ${blocks.length} bloc(s), ${html.length} car. ${JSON.stringify(fs_)}`);
  if (blocks.length !== E.lessonBlocks().length) fail(`block count ${blocks.length} vs English ${E.lessonBlocks().length}`);
  for (const key of Object.keys(es)) if (fs_[key] !== es[key]) fail(`lesson ${key}: ${fs_[key]} vs English ${es[key]}`);
  for (const mk of ["Exemples résolus", "Questions et réponses", "Questions d'entraînement", "Voir la réponse", "Attention"]) if (!html.includes(mk)) fail(`lesson: missing French marker "${mk}"`);
  if (/\bNaN\b|\bundefined\b|\$\{/.test(html)) fail("lesson text contains NaN / undefined / ${");
  if (L.TITLE !== B.TOPIC || L.TITLE.split(" ")[0] !== `2.${k}`) fail("title / bank topic mismatch");
  const visible = html.replace(/<[^>]+>/g, " ").replace(/\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/g, " ");
  const enHit = visible.match(ENGLISH); if (enHit) fail(`lesson looks untranslated near "${visible.slice(Math.max(0, enHit.index - 30), enHit.index + 30)}"`);
  // bank
  const bank = B.bank();
  const texts = (q) => [q.prompt, q.feedback, ...(Array.isArray(q.choices) ? q.choices.map((c) => (typeof c === "string" ? c : c.text)) : q.choices ? [...q.choices.left, ...q.choices.right] : [])].filter(Boolean);
  bank.forEach((q, i) => {
    for (const t of texts(q)) { dollarSpans(`bank Q${i + 1}`, t); const v = String(t).replace(/\$[^$]*\$/g, " "); if (ENGLISH.test(v)) fail(`bank Q${i + 1} looks untranslated: ${v.slice(0, 60)}`); }
    if (q.kind === "multiple_choice") { if (!q.choices.some((c) => c.id === q.answer)) fail(`Q${i + 1} answer id missing`); if (new Set(q.choices.map((c) => c.text)).size !== q.choices.length) fail(`Q${i + 1} duplicate choices`); }
    if (q.kind === "multiple_select" && !q.answer.every((a) => q.choices.some((c) => c.id === a))) fail(`Q${i + 1} ms answer`);
    if (q.kind === "numeric" && typeof q.answer !== "number") fail(`Q${i + 1} numeric answer`);
    if (q.kind === "matching" && (q.answer.length !== q.choices.left.length || new Set(q.choices.right).size !== q.choices.right.length)) fail(`Q${i + 1} matching`);
    if (/\\\$/.test(q.prompt)) fail(`Q${i + 1} contains \\$`);
    if (q.image && />[^<]*\b(the|and|blue|red|hole|A rectangle|A parabola|A curve|A straight)\b[^<]*</.test(q.image)) fail(`Q${i + 1} figure has English words`);
  });
  const by = (key) => bank.reduce((a, q) => ((a[q[key]] = (a[q[key]] || 0) + 1), a), {});
  console.log(`  banque : ${bank.length} questions ${JSON.stringify(by("difficulty"))}, figures ${bank.filter((q) => q.image).length}`);
  if (bank.length !== 60 || ["easy", "medium", "hard"].some((d) => by("difficulty")[d] !== 20)) fail("bank must be 20/20/20");
  // assignment
  const a = ASSIGNMENTS[k - 1];
  for (const l of a.lines) renderHtml(`devoir ${a.code}`, l);
  const nq = a.lines.filter((l) => /^\d+\./.test(l)).length, cats = a.lines.filter((l) => /^(Connaissance et compréhension|Habiletés de la pensée|Communication|Mise en application)$/.test(l)).length;
  console.log(`  devoir : "${a.title}", ${nq} questions, ${cats} catégories`);
  if (nq !== 10 || cats !== 4) fail("assignment should have 10 questions in 4 sections");
  // worksheet
  for (const [i, e] of WS.examples.entries()) dollarSpans(`fiche ex ${i + 1}`, e.body);
  for (const [i, qq] of WS.questions.entries()) dollarSpans(`fiche q ${i + 1}`, qq.ask);
  for (const [i, an] of WS.answers.entries()) dollarSpans(`fiche rép ${i + 1}`, an);
  if (WS.answers.length !== WS.questions.length) fail(`worksheet: ${WS.questions.length} questions but ${WS.answers.length} answers`);
  console.log(`  fiche : ${WS.examples.length} exemples, ${WS.questions.length} questions, ${WS.answers.length} réponses`);
}
const { total, bad: chk } = runChecks();
console.log(`\nidentités numériques : ${total} enregistrées, ${chk.length} fausses`); chk.forEach(fail);
console.log(`${spans} expressions mathématiques rendues`);
console.log(bad ? `${bad} PROBLEM(S)` : "ALL CHECKS PASSED");
process.exit(bad ? 1 : 0);
