// Verifier for the 4.1 bank: structure, KaTeX rendering of every math span, answer validity, figure count.
import { createRequire } from "module";
import { bank41 } from "./bank41.mjs";
const katex = createRequire(import.meta.url)("katex");
const bank = bank41();
let bad = 0;
const fail = (i, m) => { bad++; console.log(`  ✗ Q${i + 1}: ${m}`); };
const spans = (t) => { const out = []; const parts = String(t).split("$"); for (let i = 1; i < parts.length; i += 2) out.push(parts[i]); if (parts.length % 2 === 0) out.push(null); return out; };
const texts = (q) => [q.prompt, q.feedback, ...(Array.isArray(q.choices) ? q.choices.map((c) => (typeof c === "string" ? c : c.text)) : q.choices ? [...q.choices.left, ...q.choices.right] : [])].filter(Boolean);
let spanCount = 0;
bank.forEach((q, i) => {
  for (const t of texts(q)) for (const s of spans(t)) {
    spanCount++;
    if (s === null) { fail(i, `odd number of $ in: ${t}`); continue; }
    try { katex.renderToString(s, { throwOnError: true, strict: "ignore" }); } catch (e) { fail(i, `KaTeX: ${s} -> ${e.message}`); }
  }
  if (q.kind === "multiple_choice") { if (!q.choices.some((c) => c.id === q.answer)) fail(i, "answer id missing"); if (new Set(q.choices.map((c) => c.text)).size !== q.choices.length) fail(i, "duplicate choices"); }
  if (q.kind === "multiple_select") { if (!q.answer.every((a) => q.choices.some((c) => c.id === a))) fail(i, "ms answer id missing"); }
  if (q.kind === "numeric" && typeof q.answer !== "number") fail(i, "numeric answer not a number");
  if (q.kind === "ordering" && new Set(q.choices).size !== q.choices.length) fail(i, "dup ordering items");
  if (q.kind === "matching" && q.answer.length !== q.choices.left.length) fail(i, "matching length");
  if (/\\$/.test(q.prompt)) fail(i, "contains \$");
});
const by = (k) => bank.reduce((a, q) => ((a[q[k]] = (a[q[k]] || 0) + 1), a), {});
console.log(`bank: ${bank.length} questions, ${spanCount} math spans, difficulty ${JSON.stringify(by("difficulty"))}, kinds ${JSON.stringify(by("kind"))}, figures ${bank.filter((q) => q.image).length}`);
const hardKinds = bank.filter((q) => q.difficulty === "hard").map((q) => q.kind);
console.log("hard kinds:", JSON.stringify(hardKinds.reduce((a, k) => ((a[k] = (a[k] || 0) + 1), a), {})));
if (process.argv.includes("--show")) bank.forEach((q, i) => console.log(`${i + 1} [${q.difficulty}/${q.kind}]${q.image ? " [img]" : ""} ${q.prompt}  =>  ${JSON.stringify(q.answer)}`));
console.log(bad ? `${bad} PROBLEM(S)` : "ALL CHECKS PASSED");
process.exit(bad ? 1 : 0);
