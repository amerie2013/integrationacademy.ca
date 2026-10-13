// node scripts/mth1w-ch1/check.mjs <topic file, e.g. t1_2.mjs> [--show]
// Verifies a chapter 1 topic module: KaTeX renders, structure/counts, and — the important part —
// that arithmetic equalities written inside the text (e.g. "-3+5=2") are actually true.
import { createRequire } from "module";
import { pathToFileURL } from "url";
import { resolve } from "path";
const katex = createRequire(import.meta.url)("katex");
const file = process.argv[2];
const SHOW = process.argv.includes("--show");
const M = await import(pathToFileURL(resolve("scripts/mth1w-ch1", file)).href);
let bad = 0, eqChecked = 0;
const fail = (m) => { bad++; console.log("FAIL:", m); };

// ── tiny math evaluator for numeric LaTeX ──
function evalMath(src) {
  let s = src.replace(/\\(?:,|;|:|!|quad|qquad)|\\ /g, "").replace(/\\left|\\right/g, "").replace(/−/g, "-").replace(/\\%/g, "");
  if (/\\(approx|ne|neq|le|ge|lt|gt|text|sqrt|pi|ldots|dots|infty|in|mathbb|circ|angle)|[<>≈≠≤≥]/.test(s)) return NaN;
  s = s.replace(/(\d+)\s*\\d?frac\{(\d+)\}\{(\d+)\}/g, "($1+$2/$3)"); // mixed numbers: 1\dfrac{7}{12}
  for (let i = 0; i < 12; i++) s = s.replace(/\\d?frac\{([^{}]*)\}\{([^{}]*)\}/g, "(($1)/($2))");
  s = s.replace(/\\times|\\cdot/g, "*").replace(/\\div/g, "/");
  s = s.replace(/\^\{([^{}]*)\}/g, "**($1)").replace(/\^(-?\d+)/g, "**($1)");
  s = s.replace(/\|([^|]+)\|/g, "Math.abs($1)");
  s = s.replace(/(^|[^\d)\w.])-(\d+(?:\.\d+)?)\*\*/g, "$1(-1)*($2)**");
  s = s.replace(/(\d|\))\s*\(/g, "$1*(").replace(/\)\s*(\d)/g, ")*$1");
  s = s.replace(/(\d)\s+(\d)/g, "$1$2"); // thin-space digit groups like 4 500 000
  if (/[a-zA-Z\\{}_&]/.test(s.replace(/Math\.abs/g, ""))) return NaN;
  try { const v = Function(`"use strict"; return (${s});`)(); return typeof v === "number" && Number.isFinite(v) ? v : NaN; } catch { return NaN; }
}
/** Typed answer forms: "7/12", "1 1/4", "-3", "\frac{7}{12}". */
function evalPlain(str) {
  const t = String(str).trim().replace(/−/g, "-");
  let m = t.match(/^(-?)(\d+) (\d+)\/(\d+)$/);
  if (m) return (m[1] ? -1 : 1) * (Number(m[2]) + Number(m[3]) / Number(m[4]));
  m = t.match(/^(-?\d+)\s*\/\s*(\d+)$/);
  if (m) return Number(m[1]) / Number(m[2]);
  return evalMath(t);
}
/** Substitute `at` for variable `v` in an equation like "3(x-4)=21" and report whether both sides agree (null if unparseable). */
function holdsAt(tex, v, at) {
  const val = `(${String(at).replace(/−/g, "-")})`;
  const sub = tex.replace(new RegExp(`(?<![a-zA-Z\\\\])${v}(?![a-zA-Z])`, "g"), val);
  const [l, r] = sub.split("=");
  const a = evalMath(l), b = evalMath(r);
  if (Number.isNaN(a) || Number.isNaN(b)) return null;
  return Math.abs(a - b) < 1e-6;
}
function checkEqualities(label, span) {
  if (!span.includes("=")) return;
  const stmts = span.split(/,(?![^()]*\))/);
  if (stmts.length > 1) { stmts.forEach((st) => checkEqualities(label, st)); return; }
  const parts = span.split(/(?<![<>!])=(?!=)/).map((p) => p.trim());
  if (parts.length < 2) return;
  // allow trailing commas / units / punctuation
  const vals = parts.map((p) => evalMath(p.replace(/[,.;:]+$/, "")));
  const ok = vals.filter((v) => !Number.isNaN(v));
  if (ok.length < 2) return;
  eqChecked++;
  const ref = ok[0];
  if (ok.some((v) => Math.abs(v - ref) > 1e-6 * Math.max(1, Math.abs(ref)))) fail(`${label}: "${span.slice(0, 90)}" -> ${vals.join(" | ")}`);
}

function katexCheck(label, s, re, skipEq = false) {
  let n = 0;
  for (const m of s.matchAll(re)) {
    n++;
    const body = (m[1] ?? m[2] ?? "").trim();
    try { katex.renderToString(body, { throwOnError: true, strict: "ignore" }); } catch (e) { fail(`${label} katex: ${body.slice(0, 70)} -> ${e.message.slice(0, 60)}`); }
    if (!skipEq) checkEqualities(label, body);
  }
  return n;
}
const LESSON_RE = /\\\[([\s\S]*?)\\\]|\\\(([\s\S]*?)\\\)/g;
const ASSIGN_RE = /\\\(([\s\S]*?)\\\)|\$([^$]+)\$/g;
const DOLLAR_RE = /\$([^$]+)\$/g;

// lesson
const h = M.lessonBlocks().filter((b) => b.type === "html").map((b) => b.html).join("\n");
const ls = katexCheck("lesson", h, LESSON_RE);
console.log(`lesson: ${ls} math spans | examples ${(h.match(/example-box/g) || []).length} practice ${(h.match(/practice-box/g) || []).length} qa ${(h.match(/qa-box/g) || []).length} iframes ${(h.match(/<iframe/g) || []).length} svgs ${(h.match(/<svg/g) || []).length}`);
if (/\bNaN\b|(?<!is |are |be |and |was )undefined/.test(h.replace(/>[^<]*is undefined[^<]*</g, "><"))) fail("lesson text contains undefined/NaN");

// assignment
const A = M.ASSIGNMENT;
if (/\$/.test(A.description)) fail("assignment has a bare $");
let asn = 0;
for (const line of A.description.split("\n")) asn += katexCheck("assignment", line, ASSIGN_RE, /\b(says|claims|thinks|argues)\b|^\d+\.\s*(Is|Are|Does|Do)\b/i.test(line));
console.log("assignment spans:", asn);
const cats = []; for (const l of A.description.split("\n")) { if (/^(Knowledge|Thinking|Communication|Application)/.test(l)) cats.push([l.split(" ")[0], 0]); else if (/^\d+\./.test(l)) cats[cats.length - 1][1]++; }
if (JSON.stringify(cats.map((c) => c[1])) !== "[3,2,2,3]") fail("assignment split is " + JSON.stringify(cats));
if (!A.title.startsWith(`Assignment ${M.CODE} — `)) fail("assignment title format: " + A.title);

// bank
const bank = M.bank();
const dollarStrings = [];
let bs = 0;
for (const q of bank) {
  const strs = [q.prompt, q.feedback || "", ...(Array.isArray(q.choices) ? q.choices.map((c) => (typeof c === "string" ? c : c.text)) : [])];
  for (const s of strs) { dollarStrings.push(s); bs += katexCheck("bank", s, DOLLAR_RE, q.kind === "true_false" && s === q.prompt); }
  if (q.kind === "true_false") {
    const sp = (q.prompt.match(/$([^$]+)$/) || [])[1];
    if (sp && sp.includes("=") && !/[a-zA-Z]/.test(sp.replace(/\[a-z]+|Math/g, ""))) {
      const parts = sp.split(/(?<![<>!])=/).map((p) => evalMath(p.replace(/[,.;:]+$/, "")));
      if (parts.every((v) => !Number.isNaN(v))) { eqChecked++; const truth = parts.every((v) => Math.abs(v - parts[0]) < 1e-9); if (truth !== (q.answer === "true")) fail("true/false mismatch: " + q.prompt); }
    }
  }
  if (q.kind === "multiple_choice") { if (q.choices.length !== 4 || !q.choices.some((c) => c.id === q.answer)) fail("mc shape: " + q.prompt.slice(0, 60)); if (new Set(q.choices.map((c) => c.text)).size !== q.choices.length) fail("duplicate choices: " + q.prompt.slice(0, 60)); }
  if (q.kind === "multiple_select" && (!q.answer.length || q.answer.length === q.choices.length && false)) fail("ms shape: " + q.prompt.slice(0, 60));
  if (q.kind === "numeric" && (typeof q.answer !== "number" || Number.isNaN(q.answer))) fail("numeric answer: " + q.prompt.slice(0, 60));
  if (q.kind === "fill_blank" && (!Array.isArray(q.answer) || !q.answer.length || q.answer.some((a) => !String(a).trim()))) fail("fill answer: " + q.prompt.slice(0, 60));
  // independent check: evaluate the first plain arithmetic span in the prompt and compare to the stored answer
  const span = (q.prompt.match(/\$([^$]+)\$/) || [])[1];
  if (q._eq) {
    const e = q._eq, expect = e.holds ?? true, h = holdsAt(e.tex, e.v, e.at);
    eqChecked++;
    if (h === null) fail("equation not evaluable: " + e.tex);
    else if (h !== expect) fail(`equation check: ${e.tex} at ${e.v}=${e.at} is ${h}, expected ${expect}`);
    if (q.kind === "true_false" && (q.answer === "true") !== expect) fail("true/false flag mismatch: " + q.prompt);
    if (e.creates && q.kind === "multiple_choice") {
      // "which equation models this?": the keyed choice must be exactly the intended equation, and no other choice may share its solution
      const norm = (s) => s.replace(/\$/g, "").replace(/\s+/g, "");
      const keyed = norm(q.choices.find((c) => c.id === q.answer).text);
      if (keyed !== norm(e.tex)) fail(`keyed equation "${keyed}" != intended "${e.tex}"`);
      for (const c of q.choices) if (c.id !== q.answer) { const h = holdsAt(norm(c.text), e.v, e.at); eqChecked++; if (h !== false) fail(`distractor "${norm(c.text)}" also has the solution ${e.at} (or is not evaluable)`); }
    } else if (expect && q.kind !== "true_false") {
      const at = evalPlain(e.at);
      if (q.kind === "numeric" && Math.abs(q.answer - at) > 1e-6) fail(`numeric answer ${q.answer} != ${at} for ${e.tex}`);
      if (q.kind === "fill_blank") for (const f of q.answer) { const fv = evalPlain(f); if (!Number.isNaN(fv) && Math.abs(fv - at) > 1e-6) fail(`fill form "${f}" != ${at} for ${e.tex}`); }
      if (q.kind === "multiple_choice") { const t = q.choices.find((c) => c.id === q.answer).text.replace(/−/g, "-"); const mm = e.answerText ? t.match(/^(-?[\d.]+)/) : t.match(/[a-zA-Z]\s*=\s*(-?[\d.]+)/); if (!mm || Math.abs(Number(mm[1]) - at) > 1e-6) fail(`choice "${t}" != ${at} for ${e.tex}`); }
    }
  }
  if (q.kind === "matching" && q._matchEqs) {
    q._matchEqs.forEach((e, i) => {
      eqChecked++;
      const right = q.choices.right[q.answer[i]] ?? "";
      const mm = right.replace(/−/g, "-").match(/=\s*(-?[\d.]+)/);
      if (!mm || Math.abs(Number(mm[1]) - Number(e.at)) > 1e-6) fail(`matching pair ${i}: "${right}" vs solution ${e.at}`);
      if (holdsAt(e.tex, e.v, e.at) !== true) fail("matching equation fails at its solution: " + e.tex);
    });
    for (const s of [...q.choices.left, ...q.choices.right]) katexCheck("matching", s, DOLLAR_RE);
    if (new Set(q.choices.right).size !== q.choices.right.length) fail("matching right side has duplicates");
  }
  if (q._ms) {
    q._ms.forEach((e, i) => { const h = holdsAt(e.tex, e.v, e.at); eqChecked++; if (h === null) fail("ms equation not evaluable: " + e.tex); else if (h !== q.answer.includes(q.choices[i].id)) fail(`multi-select option ${i} (${e.tex}) is ${h} but marked ${!h}`); });
  }
  const isCalc = /^(Evaluate|Simplify)\b/.test(q.prompt) || (/simplest form|as a mixed number/.test(q.prompt) && !/^Write /.test(q.prompt));
  if (["numeric", "multiple_choice", "fill_blank"].includes(q.kind) && span && isCalc && !span.includes("=") && !span.includes("\\_")) {
    const v = evalMath(span);
    if (!Number.isNaN(v)) {
      const forms = q.kind === "numeric" ? [q.answer] : q.kind === "fill_blank" ? q.answer.map(evalPlain) : [evalMath(q.choices.find((c) => c.id === q.answer).text.replace(/\$/g, ""))];
      for (const a of forms) if (!Number.isNaN(a)) { eqChecked++; if (Math.abs(a - v) > 1e-6) fail(`bank "${q.prompt.slice(0, 70)}" stored ${a} but expression = ${v}`); }
    }
  }
}
for (const s of dollarStrings) { if ((s.match(/\$/g) || []).length % 2) fail("odd $ count: " + s.slice(0, 70)); if (/\\\$|textdollar/.test(s)) fail("escaped dollar: " + s.slice(0, 70)); }
const dist = ["easy", "medium", "hard"].map((d) => bank.filter((q) => q.difficulty === d).length);
const kinds = bank.reduce((a, q) => ((a[q.kind] = (a[q.kind] || 0) + 1), a), {});
console.log(`bank: ${bank.length} questions, ${bs} spans, difficulty ${JSON.stringify(dist)}, kinds ${JSON.stringify(kinds)}`);
if (dist.some((n) => n !== 20)) fail("bank is not 20/20/20: " + JSON.stringify(dist));
if (new Set(bank.map((q) => q.prompt)).size !== bank.length) fail("duplicate bank prompts");

// worksheet
const W = M.WORKSHEET_CONTENT, T = M.WORKSHEET_TEX;
let wsn = katexCheck("ws intro", W.intro, DOLLAR_RE);
W.lesson.forEach(([, b]) => (wsn += katexCheck("ws lesson", b, DOLLAR_RE)));
W.examples.forEach(([, q, s]) => (wsn += katexCheck("ws example", q + " " + s, DOLLAR_RE)));
W.questions.forEach(([, q, a]) => { wsn += katexCheck("ws question", q + " " + a, DOLLAR_RE); });
console.log(`worksheet: ${wsn} spans | examples ${W.examples.length} questions ${W.questions.length} tex answers ${T.answers.length}`);
if (W.examples.length !== 9 || W.questions.length !== 13 || T.answers.length !== 13) fail("worksheet must have 9 examples and 13 questions");
for (const s of [W.intro, ...W.lesson.map((x) => x[1]), ...W.examples.flatMap((x) => [x[1], x[2]]), ...W.questions.flatMap((x) => [x[1], x[2]])]) if ((s.match(/\$/g) || []).length % 2) fail("worksheet odd $: " + s.slice(0, 70));

if (SHOW) {
  const r = (a) => a[Math.floor(Math.random() * a.length)];
  for (const d of ["easy", "medium", "hard"]) for (let i = 0; i < 6; i++) { const q = r(bank.filter((x) => x.difficulty === d)); console.log(`[${d}/${q.kind}] ${q.prompt}  =>  ${q.kind === "multiple_choice" ? q.choices.map((c) => (c.id === q.answer ? "*" : "") + c.text).join(" | ") : q.kind === "multiple_select" ? q.choices.map((c, i) => (q.answer.includes(c.id) ? "*" : "") + c.text).join(" | ") : JSON.stringify(q.answer)}`); }
}
console.log(`\narithmetic equalities verified: ${eqChecked}`);
console.log(bad ? `${bad} PROBLEM(S)` : "ALL CHECKS PASSED");
process.exit(bad ? 1 : 0);
