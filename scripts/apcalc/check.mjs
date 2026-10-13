// Pre-seed checks for the AP Calculus AB course. Fails loudly on anything a
// student would see as broken:
//   - every \( … \) / \[ … \] in a lesson and every $ … $ in a bank question
//     must parse in KaTeX;
//   - no raw "<letter" inside math (it would be read as an HTML tag);
//   - every bank question must have a well-formed answer.
// With --preview it also writes a static HTML file of the authored lessons.
//   node scripts/apcalc/check.mjs [--preview out.html]
import katex from "katex";
import { readFileSync, writeFileSync, existsSync, readdirSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";
import { subjects } from "../seed-apcalc.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
let bad = 0;
const fail = (where, msg) => { bad++; console.error(`  ✗ ${where}: ${msg}`); };
const tex = (where, src, display = false) => {
  if (/<[A-Za-z/]/.test(src)) fail(where, `raw "<" before a letter in math: ${src.slice(0, 60)}`);
  try { return katex.renderToString(src, { throwOnError: true, displayMode: display }); }
  catch (e) { fail(where, `${e.message.slice(0, 110)}  ⟵  ${src.slice(0, 70)}`); return src; }
};

// ── lessons ──
let full = 0;
const rendered = [];
for (const s of subjects) {
  const h = s.blocks.map((b) => b.html ?? "").join("");
  if (h.includes("are being written")) continue;
  full++;
  let out = h.replace(/\\\[([\s\S]+?)\\\]/g, (_m, t) => tex(s.code, t, true));
  out = out.replace(/\\\(([\s\S]+?)\\\)/g, (_m, t) => tex(s.code, t));
  if (/\\\(|\\\)|\\\[|\\\]/.test(out)) fail(s.code, "unbalanced math delimiter");
  if (/\$[^$<]{1,80}\$/.test(out)) fail(s.code, "$…$ math in a lesson (use \\( … \\))");
  const only = process.argv.indexOf("--only");
  if (only > 0 && process.argv[only + 1] !== s.code) continue;
  rendered.push(`<h1 style="font-family:Fraunces,serif;font-size:38px;margin:40px 0 16px">${s.code} ${s.title}</h1>${out}`);
}
console.log(`Lessons: ${full} authored, ${subjects.length - full} planned.`);

// ── bank ──
const bankDir = join(__dirname, "..", "bank-apcalc");
let nq = 0;
if (existsSync(bankDir)) {
  for (const f of readdirSync(bankDir).filter((x) => /^u\d+\.mjs$/.test(x))) {
    const mod = await import(pathToFileURL(join(bankDir, f)).href);
    for (const t of mod.default) {
      if (!subjects.find((s) => s.code === t.code)) fail(f, `no lesson with code ${t.code}`);
      const qs = t.gen();
      const seen = new Set();
      qs.forEach((q, i) => {
        const where = `${f} ${t.code} #${i + 1}`;
        nq++;
        const texts = [q.prompt, q.feedback ?? "", ...(Array.isArray(q.choices) ? q.choices.map((c) => c.text ?? c) : [])];
        for (const s of texts) {
          const str = String(s);
          if ((str.match(/\$/g) ?? []).length % 2) fail(where, `odd number of $: ${str.slice(0, 60)}`);
          for (const m of str.matchAll(/\$([^$]+)\$/g)) tex(where, m[1]);
          // a LaTeX command left outside $…$ means a delimiter is misplaced
          if (str.replace(/\$[^$]+\$/g, "").includes("\\")) fail(where, `LaTeX outside math: ${str.slice(0, 60)}`);
        }
        if (seen.has(q.prompt + (q.image_url ?? ""))) fail(where, "duplicate prompt");
        seen.add(q.prompt + (q.image_url ?? ""));
        if (!["easy", "medium", "hard"].includes(q.difficulty)) fail(where, "bad difficulty");
        if (q.kind === "multiple_choice") {
          if (q.choices.length !== 4) fail(where, "needs exactly 4 choices");
          if (new Set(q.choices.map((c) => c.text + (c.image ?? ""))).size !== 4) fail(where, "duplicate choices");
          if (q.choices.some((c) => !c.text && !c.image)) fail(where, "empty choice");
          if (!q.choices.some((c) => c.id === q.answer)) fail(where, "answer id not among choices");
        }
        if (q.kind === "numeric" && !Number.isFinite(q.answer)) fail(where, "numeric answer is not a number");
        if (!q.feedback) fail(where, "no explanation");
      });
      const n = (d) => qs.filter((q) => q.difficulty === d).length;
      console.log(`  ${t.code}: ${qs.length} questions (E${n("easy")}/M${n("medium")}/H${n("hard")}), ${qs.filter((q) => q.image_url).length} with figures`);
    }
  }
}
console.log(`Bank: ${nq} questions.`);

const pi = process.argv.indexOf("--preview");
if (pi > 0) {
  const css = readFileSync(join(__dirname, "..", "..", "app", "globals.css"), "utf8").replace(/@import[^;]+;/g, "").replace(/@tailwind[^;]+;/g, "");
  const kcss = "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css";
  writeFileSync(process.argv[pi + 1], `<!doctype html><meta charset="utf-8"><title>AP Calc preview</title><link rel="stylesheet" href="${kcss}"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700&family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@700&display=swap"><style>${css}body{background:#f1f5f9;font-family:Inter,sans-serif;margin:0}.lecture-box .ia-reveal{opacity:1!important;transform:none!important}</style><article style="max-width:760px;margin:0 auto;padding:24px 28px">${rendered.join("")}</article>`);
  console.log("Preview written:", process.argv[pi + 1]);
}
if (bad) { console.error(`\n${bad} problem(s).`); process.exit(1); }
console.log("All checks passed.");
