// Worksheet PDF generator. Reads one content module per subject from
// scripts/worksheets/*.mjs and renders TWO PDFs each via headless Chrome:
//   <code>_worksheet.pdf  — title + 9 worked examples + 13 questions w/ space + key
//   <code>_compact.pdf    — all 13 questions on a page + answer key
// Content module shape (default export):
//   { grade, code, title, intro, examples:[[t,prompt,solution]x9], questions:[[t,prompt,answer]x13] }
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import { execFileSync } from "child_process";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const katex = require("katex");
import { LESSONS } from "./worksheets/lessons-data.mjs";

const OUT = path.resolve("scripts/_pdf");
const SRC = path.resolve("scripts/worksheets");
fs.mkdirSync(OUT, { recursive: true });
const KATEX_CSS = fs.readFileSync(require.resolve("katex/dist/katex.min.css"), "utf8");
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const tex = (s, d = false) => { try { return katex.renderToString(s, { throwOnError: false, displayMode: d }); } catch { return s; } };
// Render inline $...$ math; a LaTeX-style \$ is a literal dollar sign.
const md = (str) => String(str)
  .replace(/(?<!\\)\$([^$]+?)\$/g, (_, m) => tex(m, false))
  .replace(/\\\$/g, "$");

const PALETTE = ["#2563a0", "#3b7d3b", "#8a5a00", "#a3327a", "#6d28a3", "#b08900", "#0e7490", "#9a3412", "#15803d"];

function shell(subject, bodyHtml) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
${KATEX_CSS}
@page { size: letter; margin: 1.5cm 1.4cm; }
* { box-sizing: border-box; }
body { font-family: Georgia, "Times New Roman", serif; color: #1a1a1a; font-size: 11.5pt; margin: 0; }
.page { width: 100%; border-collapse: collapse; }
.page thead td, .page tfoot td { border: none; padding: 0; }
.hdr { text-align: center; padding-bottom: 6px; border-bottom: 2px solid #14653b; margin-bottom: 10px; }
.hdr .brand { font-weight: 700; font-size: 13pt; letter-spacing: .3px; }
.hdr .tag { font-size: 8.5pt; color: #555; }
.hdr-row { display: flex; justify-content: space-between; font-size: 9pt; color: #333; margin-top: 4px; }
.ftr { border-top: 1px solid #cbd5e1; margin-top: 8px; padding-top: 5px; display: flex; justify-content: space-between; font-size: 8pt; color: #555; }
.box { border: 1.5px solid var(--c); border-radius: 7px; overflow: hidden; margin: 9px 0; break-inside: avoid; }
.box-t { background: var(--c); color: #fff; font-weight: 700; padding: 5px 11px; font-size: 10.5pt; }
.box-b { padding: 9px 12px; background: color-mix(in srgb, var(--c) 7%, #fff); }
.title-box { border: 2px solid #1d4ed8; border-radius: 9px; margin: 4px 0 14px; break-inside: avoid; }
.title-box .box-t { background: #1d4ed8; color: #fff; font-weight: 700; padding: 7px 13px; font-size: 12pt; }
.title-box .box-b { padding: 10px 13px; background: #eff5ff; font-size: 10.5pt; }
.lesson { border-left: 4px solid #1d4ed8; background: #f8faff; border-radius: 0 6px 6px 0; padding: 7px 12px; margin: 8px 0; break-inside: avoid; }
.lesson-h { font-weight: 700; color: #1d4ed8; font-size: 11pt; margin-bottom: 3px; }
.lesson-b { font-size: 10.5pt; line-height: 1.6; }
.soln { background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 8px 11px; margin-top: 7px; line-height: 1.55; }
h2.sec { font-size: 15pt; color: #0d5c30; border-bottom: 2px solid #0d9488; padding-bottom: 3px; margin: 16px 0 8px; }
.work { border: 1px dashed #94a3b8; border-radius: 6px; height: 120px; margin-top: 7px; }
.ansline { margin-top: 8px; font-size: 10pt; }
.ansline u { display: inline-block; min-width: 130px; }
.keybox { border: 1.5px solid #475569; border-radius: 7px; margin-top: 14px; break-inside: avoid; }
.keybox .box-t { background: #475569; color: #fff; font-weight: 700; padding: 6px 12px; }
.keybox ol { margin: 8px 0 8px 6px; padding-left: 22px; columns: 2; column-gap: 26px; }
.keybox li { margin: 3px 0; font-size: 10pt; break-inside: avoid; }
.pb { break-before: page; }
.cheer { text-align: center; color: #1d4ed8; font-weight: 700; font-size: 13pt; margin: 14px 0; }
.qprompt { font-size: 11pt; }
.qcompact { border: 1px solid #cbd5e1; border-radius: 6px; padding: 7px 11px; margin: 7px 0; break-inside: avoid; }
.qcompact b { color: #0d5c30; }
.code { font-family: "JetBrains Mono", ui-monospace, "Courier New", monospace; background: #f4f6f8; border: 1px solid #e2e8f0; border-radius: 6px; padding: 8px 11px; margin: 6px 0; font-size: 10pt; line-height: 1.55; }
</style></head><body>
<table class="page"><thead><tr><td>
  <div class="hdr">
    <div class="brand">Integration Academy</div>
    <div class="tag">Math Simplified · Success Amplified</div>
    <div class="hdr-row"><span>NAME: ____________________</span><span>${subject.grade}</span></div>
  </div>
</td></tr></thead>
<tfoot><tr><td>
  <div class="ftr"><span>Email: dr.Merie@IntegrationAcademy.ca</span><span>IntegrationAcademy.ca</span></div>
</td></tr></tfoot>
<tbody><tr><td>
${bodyHtml}
</td></tr></tbody></table>
</body></html>`;
}

const titleBox = (s) => `<div class="title-box"><div class="box-t">${s.code} ${s.title}</div><div class="box-b">${md(s.intro)}</div></div>`;
const lessonHtml = (s) => {
  const L = s.lesson || LESSONS[s.code];
  return !L ? "" : `<h2 class="sec">Learn the Concept</h2>` +
    L.map(([h, b]) => `<div class="lesson"><div class="lesson-h">${md(h)}</div><div class="lesson-b">${md(b)}</div></div>`).join("");
};
const examplesHtml = (s) => `<h2 class="sec">Examples</h2>` + s.examples.map((e, i) => {
  const c = PALETTE[i % PALETTE.length];
  return `<div class="box" style="--c:${c}"><div class="box-t">${e[0]}</div><div class="box-b"><div class="qprompt">${md(e[1])}</div><div class="soln"><b>Solution</b><br>${md(e[2])}</div></div></div>`;
}).join("");
const answerKey = (s) => `<div class="keybox"><div class="box-t">✓ Answer Key</div><div class="box-b"><ol>` +
  s.questions.map((q) => `<li>${md(q[2])}</li>`).join("") + `</ol></div></div>`;

function worksheetHtml(s) {
  const probs = s.questions.map((q) =>
    `<div class="box" style="--c:#15803d"><div class="box-t">${q[0]}</div><div class="box-b"><div class="qprompt">${md(q[1])}</div><div class="work"></div><div class="ansline"><b>Answer:</b> <u></u> &nbsp; <b>Verification:</b> <u></u></div></div></div>`
  ).join("");
  return shell(s,
    titleBox(s) + lessonHtml(s) + examplesHtml(s) +
    `<div class="pb"></div><h2 class="sec">Your Turn — Show Your Work!</h2>` +
    `<p style="font-size:10.5pt;color:#444">For each problem, solve it and verify your solution. Show all steps clearly.</p>` +
    probs + `<div class="pb"></div>` + answerKey(s) +
    `<div class="cheer">Great work — keep practising!</div>`
  );
}
function compactHtml(s) {
  const probs = s.questions.map((q, i) =>
    `<div class="qcompact"><b>${i + 1}.</b> ${md(q[1].replace(/^Solve and verify:\s*/i, ""))}</div>`
  ).join("");
  return shell(s,
    titleBox(s) + `<h2 class="sec">Practice Set — All Questions</h2>` +
    `<p style="font-size:10.5pt;color:#444">${s.questions.length} questions. Work them on your own paper, then check the key below.</p>` +
    probs + answerKey(s)
  );
}

function build(name, html) {
  const htmlPath = path.join(OUT, name + ".html");
  const pdfPath = path.join(OUT, name + ".pdf");
  fs.writeFileSync(htmlPath, html);
  execFileSync(CHROME, ["--headless=new", "--disable-gpu", "--no-pdf-header-footer", `--print-to-pdf=${pdfPath}`, "file:///" + htmlPath.replace(/\\/g, "/")], { stdio: "ignore" });
  return Math.round(fs.statSync(pdfPath).size / 1024);
}

const only = process.argv[2]; // optional: only build files starting with this (e.g. "1.")
const files = fs.existsSync(SRC) ? fs.readdirSync(SRC).filter((f) => /^\d/.test(f) && f.endsWith(".mjs") && (!only || f.startsWith(only))).sort() : [];
if (!files.length) { console.log("No content files in scripts/worksheets/" + (only ? " matching " + only : "")); process.exit(0); }
for (const f of files) {
  const mod = (await import(pathToFileURL(path.join(SRC, f)).href)).default;
  const safe = mod.code.replace(/[^\w.\-]/g, "_");
  const a = build(`${safe}_worksheet`, worksheetHtml(mod));
  const b = build(`${safe}_compact`, compactHtml(mod));
  console.log(`✓ ${mod.code} ${mod.title}  (worksheet ${a}kb, compact ${b}kb)`);
}
console.log("done →", OUT);
