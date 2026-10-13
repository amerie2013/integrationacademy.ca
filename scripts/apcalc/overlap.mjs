// Reports formulas that a unit's lessons share with its bank questions,
// free-response questions or worksheets. The rule for this course is that each
// of those has its own examples: a lesson's worked example must not come back
// as a bank question or a worksheet item.
//   node scripts/apcalc/overlap.mjs 8
// Short or generic expressions (limits of integration, "f(x)", inequalities for
// an interval) are ignored; what is left is worth reading by eye.
import { existsSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";
import { authored } from "../apcalc-lessons.mjs";

const unit = process.argv[2];
if (!unit) { console.error("usage: overlap.mjs <unit>"); process.exit(1); }
const here = dirname(fileURLToPath(import.meta.url));
const load = async (p) => (existsSync(p) ? import(pathToFileURL(p).href) : null);

const norm = (s) => s.replace(/\\(dfrac|tfrac)/g, "\\frac").replace(/\\(left|right|displaystyle|big|Big|,|!|;|quad)/g, "").replace(/[{}\s]/g, "");
// a formula "counts" when it is long enough to identify a particular function or region
const specific = (t) => t.length >= 7 && /[a-z]/.test(t) && /[=+\-^]/.test(t) && !/^[a-z0-9\\]*(le|lt|ge|gt)/.test(t) && !/^\\int_?[a-z0-9^]*f\(x\)dx$/.test(t);
const tokens = (text, re) => new Set([...text.matchAll(re)].map((m) => norm(m[1])).filter(specific));

const lessonText = Object.entries(authored).filter(([c]) => c.startsWith(unit + ".")).map(([, l]) => l.blocks.map((b) => b.html ?? "").join(" ")).join(" ");
const L = tokens(lessonText, /\\\(([\s\S]+?)\\\)/g);
// Formulas are compared piece by piece and with their "wrapper" removed, so that
// the same function is caught under another name: g(x)=…, y=… and lim … of it
// all reduce to the same body.
const body = (t) => t
  .replace(/^\\lim_[a-z]\\to(-?\\infty|\\pi\/[0-9]|-?[0-9a-z.]+)(\^[-+])?/, "")
  .replace(/^([a-zA-Z]('{1,2})?(\([a-z]\))?|y|x)=/, "");
const distinctive = (t) => t.length >= 7 && /[a-z]/.test(t) && /\^|\\frac|\\sqrt|\\sin|\\cos|\\tan|\\ln|\\begincases/.test(t) && !/^\\lim/.test(t) && !/^[fgh]\([a-z]\)(=[LM])?$/.test(t);
const pieces = (set) => new Set([...set].flatMap((t) => t.split(/,|\\text[a-z]*and|\\\\/)).flatMap((t) => [t, body(t), body(body(t))]).filter(distinctive));
const LP = pieces(L);

let hits = 0;
const report = (where, text) => {
  const shared = [...pieces(tokens(text, /\$([^$]+)\$/g))].filter((t) => LP.has(t));
  if (shared.length) { hits++; console.log(`  ${where}\n      ${shared.join("   ")}`); }
};

const bank = await load(join(here, "..", "bank-apcalc", `u${unit}.mjs`));
if (bank) { console.log("Bank questions sharing a formula with a lesson:"); for (const t of bank.default) t.gen().forEach((q, i) => report(`${t.code} #${i + 1}: ${q.prompt.slice(0, 70)}`, q.prompt)); }
const fr = await load(join(here, "..", "apcalc-free-response.mjs"));
if (fr) { console.log("Free-response questions sharing a formula with a lesson:"); for (const q of fr.QUESTIONS.filter((x) => x.code.startsWith(unit + "."))) report(q.code, [...q.intro, ...q.parts.map((p) => p[1])].join(" ")); }
const ws = await load(join(here, "..", "apcalc-worksheets", "content", `u${unit}.mjs`));
if (ws?.documents || ws?.default) {
  console.log("Worksheets sharing a formula with a lesson:");
  // every string anywhere inside a worksheet object, joined (JSON.stringify would double the backslashes)
  const strings = (v) => (typeof v === "string" ? [v] : v && typeof v === "object" ? Object.values(v).flatMap(strings) : []);
  for (const d of [...(ws.documents ?? []), ...(Array.isArray(ws.default) ? ws.default : [])]) report(d.file ?? d.code ?? "worksheet", strings(d).join(" "));
}
console.log(hits ? `\n${hits} item(s) to review.` : "\nNo shared formulas.");
