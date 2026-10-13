// Verifier for a chapter-2 topic module.   node scripts/mcr3u-ch2/check.mjs t2_1.mjs [--show]
import { createRequire } from "module";
import { pathToFileURL, fileURLToPath } from "url";
import { resolve, dirname } from "path";
import { runChecks } from "./lib2.mjs";
const katex = createRequire(import.meta.url)("katex");
const here = dirname(fileURLToPath(import.meta.url));
const file = process.argv[2];
const mod = await import(pathToFileURL(resolve(here, file)).href);
let bad = 0;
const fail = (m) => { bad++; console.log("  ✗ " + m); };
const spanRe = /\\\[([\s\S]*?)\\\]|\\\(([\s\S]*?)\\\)/g;
let spans = 0;
const renderHtml = (label, h) => { for (const m of h.matchAll(spanRe)) { spans++; try { katex.renderToString((m[1] ?? m[2]).trim(), { throwOnError: true, strict: "ignore", displayMode: m[1] !== undefined }); } catch (e) { fail(`${label} KaTeX: ${(m[1] ?? m[2]).slice(0, 70)} -> ${e.message.slice(0, 80)}`); } } };
const dollarSpans = (label, t) => { const parts = String(t).split("$"); if (parts.length % 2 === 0) fail(`${label}: odd number of $ in: ${String(t).slice(0, 90)}`); for (let i = 1; i < parts.length; i += 2) { spans++; try { katex.renderToString(parts[i], { throwOnError: true, strict: "ignore" }); } catch (e) { fail(`${label} KaTeX: ${parts[i].slice(0, 70)} -> ${e.message.slice(0, 80)}`); } } };

const blocks = mod.lessonBlocks();
const lessonHtml = blocks.map((b) => b.html).join("\n");
renderHtml("lesson", lessonHtml);
console.log(`lesson: ${lessonHtml.length} chars, ${(lessonHtml.match(/tools\/graph/g) || []).length} graphs, ${(lessonHtml.match(/class="example-box"/g) || []).length} examples, ${(lessonHtml.match(/class="practice-box"/g) || []).length} practice`);

const bank = mod.bank();
const texts = (q) => [q.prompt, q.feedback, ...(Array.isArray(q.choices) ? q.choices.map((c) => (typeof c === "string" ? c : c.text)) : q.choices ? [...q.choices.left, ...q.choices.right] : [])].filter(Boolean);
bank.forEach((q, i) => {
  for (const t of texts(q)) dollarSpans(`bank Q${i + 1}`, t);
  if (q.kind === "multiple_choice") { if (!q.choices.some((c) => c.id === q.answer)) fail(`Q${i + 1} answer id missing`); if (new Set(q.choices.map((c) => c.text)).size !== q.choices.length) fail(`Q${i + 1} duplicate choices`); }
  if (q.kind === "multiple_select" && !q.answer.every((a) => q.choices.some((c) => c.id === a))) fail(`Q${i + 1} ms answer`);
  if (q.kind === "numeric" && typeof q.answer !== "number") fail(`Q${i + 1} numeric answer`);
  if (q.kind === "matching" && q.answer.length !== q.choices.left.length) fail(`Q${i + 1} matching`);
  if (q.kind === "matching" && new Set(q.choices.right).size !== q.choices.right.length) fail(`Q${i + 1} matching duplicate right`);
  if (/\\\$/.test(q.prompt)) fail(`Q${i + 1} contains \\$`);
});
const by = (k) => bank.reduce((a, q) => ((a[q[k]] = (a[q[k]] || 0) + 1), a), {});
console.log(`bank: ${bank.length} questions, difficulty ${JSON.stringify(by("difficulty"))}, kinds ${JSON.stringify(by("kind"))}, figures ${bank.filter((q) => q.image).length}`);
const posCounts = {}; bank.filter((q) => q.kind === "multiple_choice").forEach((q) => (posCounts[q.answer] = (posCounts[q.answer] || 0) + 1)); console.log("mc answer positions:", JSON.stringify(posCounts));

const a = mod.ASSIGNMENT; dollarSpans("assignment", a.description);
const lines = a.description.split("\n");
const cats = lines.filter((l) => /^(Knowledge|Thinking|Communication|Application)/.test(l)); const nq = lines.filter((l) => /^\d+\./.test(l)).length;
console.log(`assignment: "${a.title}", ${nq} questions, sections ${cats.length}`);
if (nq !== 10 || cats.length !== 4) fail("assignment should have 10 questions in 4 sections");

const W = mod[Object.keys(mod).find((k) => /^W\d/.test(k))];
for (const [i, e] of W.examples.entries()) dollarSpans(`worksheet ex ${i + 1}`, e.body);
for (const [i, qq] of W.questions.entries()) dollarSpans(`worksheet q ${i + 1}`, qq.ask);
for (const [i, an] of W.answers.entries()) dollarSpans(`worksheet ans ${i + 1}`, an);
if (W.answers.length !== W.questions.length) fail(`worksheet: ${W.questions.length} questions but ${W.answers.length} answers`);
console.log(`worksheet: ${W.examples.length} examples, ${W.questions.length} questions, ${W.answers.length} answers`);

const { total, bad: chk } = runChecks();
console.log(`numeric identity checks: ${total} registered, ${chk.length} failed`); chk.forEach(fail);
console.log(`${spans} math spans rendered`);
if (process.argv.includes("--show")) bank.forEach((q, i) => console.log(`${i + 1} [${q.difficulty}/${q.kind}] ${q.prompt}  =>  ${q.kind === "multiple_choice" ? q.choices.map((c) => (c.id === q.answer ? "*" : "") + c.text).join(" | ") : JSON.stringify(q.answer)}`));
console.log(bad ? `${bad} PROBLEM(S)` : "ALL CHECKS PASSED");
process.exit(bad ? 1 : 0);
