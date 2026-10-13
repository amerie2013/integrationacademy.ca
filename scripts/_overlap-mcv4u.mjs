// Scratch: lesson / worksheet / assignment overlap tools for MCV4U.
//   node scripts/_overlap-mcv4u.mjs dump <unit>     side-by-side listing
//   node scripts/_overlap-mcv4u.mjs asg             shared expressions assignment vs lesson/worksheet
//   node scripts/_overlap-mcv4u.mjs wsdup           worksheet items already in the lesson
import { authored } from "./mcv4u-lessons.mjs";
import w1 from "./mcv4u-worksheets/content/u1.mjs";
import w2 from "./mcv4u-worksheets/content/u2.mjs";
import w3 from "./mcv4u-worksheets/content/u3.mjs";
import w4 from "./mcv4u-worksheets/content/u4.mjs";
import w5 from "./mcv4u-worksheets/content/u5.mjs";
import w6 from "./mcv4u-worksheets/content/u6.mjs";
import w7 from "./mcv4u-worksheets/content/u7.mjs";

let ASSIGN = {};
try { ASSIGN = (await import("./mcv4u-assignments.mjs")).ASSIGN; } catch { /* not created yet */ }

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
const codes = Object.keys(authored).sort((a, b) => Number(a.replace(".", "")) - Number(b.replace(".", "")));
function lessonText(code) {
  const l = authored[code];
  return l ? l.blocks.filter((b) => b.type === "html").map((b) => b.html).join("\n") : "";
}
const ws = {};
for (const u of [w1, w2, w3, w4, w5, w6, w7]) for (const w of u) ws[w.code] = w;
const wsItems = (code) => {
  const w = ws[code];
  return w ? [...(w.examples ?? []).map((e) => e.body.split(BS + "soln")[0]), ...(w.questions ?? []).map((q) => q.ask)] : [];
};
const strip = (h) => h.replace(/<svg[\s\S]*?<\/svg>/g, "").replace(/<iframe[\s\S]*?<\/iframe>/g, "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();

const mode = process.argv[2] ?? "asg";
if (mode === "dump") {
  const unit = process.argv[3];
  for (const code of codes.filter((c) => c.startsWith(unit + "."))) {
    console.log("\n================", code, authored[code].title);
    console.log("-- LESSON examples/practice:");
    for (const m of lessonText(code).matchAll(/<div class="(example-box|practice-box)"[^>]*>([\s\S]*?)(?=<div class="(?:example-box|practice-box|qa-box)"|<h2>|<\/div>\s*<\/div>\s*$)/g)) {
      const body = m[2].replace(/<div class="solution">[\s\S]*?<\/div>\s*<\/div>/g, "").replace(/<details>[\s\S]*?<\/details>/g, "");
      console.log("  *", (m[1] === "practice-box" ? "[P] " : "[E] ") + strip(body).slice(0, 210));
    }
    console.log("-- WORKSHEET:");
    const w = ws[code];
    for (const e of w?.examples ?? []) console.log("  *[E]", strip(e.body.split(BS + "soln")[0]).slice(0, 190));
    for (const q of w?.questions ?? []) console.log("  *[Q]", strip(q.ask).slice(0, 190));
    if (ASSIGN[code]) {
      console.log("-- ASSIGNMENT:");
      for (const l of ASSIGN[code].description.split("\n")) if (/^\d+\./.test(l)) console.log("  ", l.slice(0, 200));
    }
  }
}
if (mode === "asg") {
  let total = 0;
  for (const code of Object.keys(ASSIGN)) {
    const L = spans(lessonText(code)), W = spans(wsItems(code).join("\n")), A = spans(ASSIGN[code].description);
    const aL = [...A].filter((s) => L.has(s)), aW = [...A].filter((s) => W.has(s));
    if (aL.length || aW.length) { console.log(code); if (aL.length) console.log("   asg∩lesson:", aL.join("   ")); if (aW.length) console.log("   asg∩worksheet:", aW.join("   ")); total++; }
  }
  console.log("topics with overlap:", total);
}
if (mode === "wsdup") {
  let tot = 0, dupT = 0;
  for (const code of codes) {
    const L = spans(lessonText(code)); const items = wsItems(code); let dup = 0;
    for (const it of items) { const s = spans(it); if (s.size && [...s].every((x) => L.has(x))) dup++; }
    tot += items.length; dupT += dup;
    console.log(code.padEnd(4), String(dup).padStart(2), "of", String(items.length).padStart(2), "worksheet items already in the lesson");
  }
  console.log("TOTAL", dupT, "of", tot);
}
