// Scratch: find math expressions shared between the lesson HTML, the worksheet and the assignment of each MHF4U topic.
import { authored } from "./mhf4u-lessons.mjs";
import { ASSIGN } from "./mhf4u-assignments.mjs";
import w1 from "./mhf4u-worksheets/content/u1.mjs";
import w2 from "./mhf4u-worksheets/content/u2.mjs";
import w3 from "./mhf4u-worksheets/content/u3.mjs";
import w4 from "./mhf4u-worksheets/content/u4.mjs";
import w5 from "./mhf4u-worksheets/content/u5.mjs";
import w6 from "./mhf4u-worksheets/content/u6.mjs";
import w7 from "./mhf4u-worksheets/content/u7.mjs";

const BS = String.fromCharCode(92);
const SPAN = new RegExp(BS + BS + "\\(([\\s\\S]*?)" + BS + BS + "\\)|\\$([^$]+)\\$", "g");

function norm(s) {
  return s
    .replaceAll(BS + "left", "").replaceAll(BS + "right", "")
    .replaceAll(BS + "dfrac", BS + "frac").replaceAll(BS + "tfrac", BS + "frac")
    .replaceAll(BS + "displaystyle", "")
    .replaceAll(BS + ",", "").replaceAll(BS + " ", "").replaceAll(BS + "!", "")
    .replace(/[{}\s]/g, "")
    .replaceAll(BS + "cdot", "*").replaceAll(BS + "times", "*")
    .replaceAll(BS + "ge", ">=").replaceAll(BS + "le", "<=");
}
function spans(text) {
  const out = new Set();
  for (const m of text.matchAll(SPAN)) {
    const n = norm(m[1] ?? m[2] ?? "");
    if (n.length >= (Number(process.env.MINLEN) || 6) && /[0-9]/.test(n) && !/^[a-z]=-?[0-9.]+$/.test(n)) out.add(n);
  }
  return out;
}

// lessons: only the example + practice boxes
function lessonText(code) {
  const l = authored[code];
  if (!l) return "";
  return l.blocks.filter((b) => b.type === "html").map((b) => b.html).join("\n");
}
const ws = {};
for (const u of [w1, w2, w3, w4, w5, w6, w7]) for (const w of u) ws[w.code] = w;
function wsText(code) {
  const w = ws[code];
  if (!w) return "";
  return [...(w.examples ?? []).map((e) => e.body), ...(w.questions ?? []).map((q) => q.ask)].join("\n");
}

const mode = process.argv[2] ?? "asg";
let total = 0;
for (const code of Object.keys(ASSIGN)) {
  const L = spans(lessonText(code));
  const W = spans(wsText(code));
  const A = spans(ASSIGN[code].description);
  const aL = [...A].filter((s) => L.has(s));
  const aW = [...A].filter((s) => W.has(s));
  const lW = [...L].filter((s) => W.has(s));
  const pick = mode === "asg" ? { "asg∩lesson": aL, "asg∩worksheet": aW } : { "lesson∩worksheet": lW };
  const lines = Object.entries(pick).filter(([, v]) => v.length).map(([k, v]) => `   ${k}: ${v.join("   ")}`);
  if (lines.length) { console.log(code); console.log(lines.join("\n")); total += lines.length; }
}
console.log("topics with overlap lines:", total);

// ---- dump mode: node scripts/_overlap-mhf4u.mjs dump <unitDigit>
if (mode === "dump") {
  const unit = process.argv[3];
  const strip = (h) => h.replace(/<svg[\s\S]*?<\/svg>/g, "").replace(/<iframe[\s\S]*?<\/iframe>/g, "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
  for (const code of Object.keys(ASSIGN).filter((c) => c.startsWith(unit + "."))) {
    console.log("\n================", code, ASSIGN[code].title);
    const html = lessonText(code);
    console.log("-- LESSON examples/practice:");
    for (const m of html.matchAll(/<div class="(example-box|practice-box)"[^>]*>([\s\S]*?)(?=<div class="(?:example-box|practice-box|qa-box)"|<h2>|<\/div>\s*<\/div>\s*$)/g)) {
      let body = m[2].replace(/<div class="solution">[\s\S]*?<\/div>\s*<\/div>/g, "").replace(/<details>[\s\S]*?<\/details>/g, "");
      console.log("  *", (m[1] === "practice-box" ? "[P] " : "[E] ") + strip(body).slice(0, 230));
    }
    const w = ws[code];
    console.log("-- WORKSHEET:");
    for (const e of w?.examples ?? []) console.log("  *[E]", strip(e.body.split(BS + "soln")[0]).slice(0, 200));
    for (const q of w?.questions ?? []) console.log("  *[Q]", strip(q.ask).slice(0, 200));
    console.log("-- ASSIGNMENT:");
    for (const l of ASSIGN[code].description.split("\n").slice(1)) if (/^\d+\./.test(l)) console.log("  ", l.slice(0, 220));
  }
}

// ---- wsdup mode: how many worksheet items reuse a lesson expression
if (mode === "wsdup") {
  let totItems = 0, totDup = 0;
  for (const code of Object.keys(ASSIGN)) {
    const L = spans(lessonText(code));
    const w = ws[code];
    const items = [...(w?.examples ?? []).map((e) => e.body.split(BS + "soln")[0]), ...(w?.questions ?? []).map((q) => q.ask)];
    let dup = 0;
    for (const it of items) { const s = spans(it); if (s.size && [...s].every((x) => L.has(x))) dup++; }
    totItems += items.length; totDup += dup;
    console.log(code.padEnd(4), String(dup).padStart(2), "of", String(items.length).padStart(2), "worksheet items are already in the lesson");
  }
  console.log("TOTAL", totDup, "of", totItems);
}
