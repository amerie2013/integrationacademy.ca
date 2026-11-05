// MHF4U bank, chapters 1-7, 2026-11-05: make linked questions stand alone and attach figures (same method as the other courses).
// Each entry: old = the prompt today; to = new prompt (optional); fig = key in figs.mjs (optional);
// fb = [old feedback, new feedback] (optional).
//   node scripts/mhf4u-bank-figures/patch.mjs --source   -> rewrite the bank source files
//   node scripts/mhf4u-bank-figures/patch.mjs            -> dry run: compare the sources with the database
//   node scripts/mhf4u-bank-figures/patch.mjs --apply    -> back up the rows, upload figures, update only these rows
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { pathToFileURL } from "url";
import { FIG } from "./figs.mjs";

const r = String.raw;
const tide = `High tide 8.8 m at 4:00, next low tide 1.6 m at 10:12.`;
export const PATCH = [
  // ---- questions that leaned on another question ----
  { old: `The same boat (20 km/h, current 5 km/h) goes 75 km upstream. How many hours?`, to: `A boat travels at 20 km/h in still water with a 5 km/h current. How many hours for 75 km upstream?` },
  { old: r`For the same wheel (radius $12$ m, centre $14$ m), what is the least height of a rider?`, to: r`A Ferris wheel has radius $12$ m and its centre is $14$ m above the ground. What is the least height of a rider?`, fig: "w1214" },
  { old: `From the same graph, what is the rider's maximum height?`, to: `The graph shows the height of a rider. What is the rider's maximum height?` },
  { old: `From the same graph, at which time in [0, 12] is the depth changing fastest while rising?`, to: `The graph shows the depth of water. At which time in [0, 12] is the depth changing fastest while rising?` },
  { old: `For that tide model, find the depth at noon (t = 12), to one decimal.`, to: `${tide} Using a sinusoidal model (t in hours after midnight), find the depth at noon (t = 12), to one decimal.`, fig: "tide88" },
  { old: `For that tide model, find the time of the second high tide after midnight, in hours (one decimal).`, to: `${tide} Using a sinusoidal model, find the time of the second high tide after midnight, in hours (one decimal).`, fig: "tide88" },
  { old: r`For the tide model, how many hours per cycle is the depth above $7$ m (two decimals)?`, to: r`High tide 8.8 m at 4:00, next low tide 1.6 m at 10:12. Using a sinusoidal model, how many hours per cycle is the depth above $7$ m (two decimals)?`, fig: "tide88" },
  { old: r`For the culture above, how many cells were there at $t=0$? (nearest whole)`, to: r`A culture has $800$ cells at $t=2$ h and $5000$ at $t=6$ h. How many cells were there at $t=0$? (nearest whole)` },
  { old: r`With the coffee above, when is it $40^\circ$C? (one decimal, minutes)`, to: r`Coffee at $80^\circ$C in a $20^\circ$C room: the difference halves every $10$ min. When is it $40^\circ$C? (one decimal, minutes)` },

  // ---- questions that describe a shape or scene: figure added, wording kept ----
  ...[
    [r`A circle has radius 3. Find the arc length for $\theta=2$`, "s32"],
    [r`A circle has radius 7. Find the arc length for $\theta=1$`, "s71"],
    [`An arc of length 12 lies on a circle of radius 4.`, "a124"],
    [`An arc of 9 cm lies on a circle of radius 6 cm.`, "a96"],
    [r`Find the arc length for $r=12$`, "s12"],
    [r`Find the arc length for $r=15$ cm`, "s15"],
    [r`Find the area of a sector with $r=6$`, "s6"],
    [r`Find the area of a sector with $r=10$`, "s10"],
    [`A sector has perimeter 24 cm and radius 8 cm.`, "sP"],
    [r`An arc of length $4\pi$`, "a4pi"],
    [r`A sector has area $24\pi$`, "sA"],
    [r`Two cities on the same meridian are separated by a central angle of $0.35$`, "earth"],
    [`A pendulum of length 60 cm swings through an arc of 25 cm.`, "pend"],
    [r`An open box made from a 10 by 16 sheet`, "sheet"],
    [r`A box measures $x$ by $x$ by $x+3$`, "boxX3"],
    [r`A box has dimensions $x$, $x+1$, $x+2$.`, "box012"],
    [`An open box with a square base holds 108`, "openBox"],
    [r`On $y=x^2$, at what x-value is the tangent parallel`, "secant"],
    [r`A parabola has zeros 1 and 5 and vertex $(3,-8)$`, "par15"],
    [r`A Ferris wheel has radius $12$ m and its centre is $14$ m above the ground. What is the greatest`, "w1214"],
    [`A wheel has radius 8 m, centre 9 m high, period 30 s`, "w89"],
    [`High tide 8.8 m at 4:00, next low tide 1.6 m at 10:12. Which model fits`, "tide88"],
    [`High tide 10 m at t = 0, low tide 2 m at t = 6 h. Which model fits`, "tide102"],
  ].map(([old, fig]) => ({ old, fig })),
];

const ROOT = path.resolve("scripts");
const CHS = [1, 2, 3, 4, 5, 6, 7].map((n) => `mhf4u-ch${n}`);
const files = CHS.flatMap((c) => fs.readdirSync(path.join(ROOT, c, "bank")).filter((f) => /^(em|h)\d/.test(f)).map((f) => path.join(ROOT, c, "bank", f)));
const IMPORT = `import { FIG } from "../../mhf4u-bank-figures/figs.mjs";\n`;
for (const p of PATCH) if (p.fig && !FIG[p.fig]) throw new Error("no figure " + p.fig);
const dbl = (s) => s.replace(/\\/g, "\\\\");

if (process.argv.includes("--source")) {
  // Find every line first, so a miss stops the run before any file is written.
  const plan = PATCH.filter((p) => !p.srcDone).map((p) => {
    const hits = [];
    for (const f of files) for (const [i, l] of fs.readFileSync(f, "utf8").split("\n").entries()) {
      // 2.4 writes these triangles through a shared ${T} in the source file
      const needle = p.old.replace(/^For \$\\triangle (?:ABC\$ with \$A\(-2,0\)\$, \$B\(4,4\)\$, \$C\(6,-2\)\$|PQR\$ with \$P\(-3,-1\)\$, \$Q\(5,3\)\$, \$R\(1,7\)\$)/, "For ${T}");
      const lit = l.includes(needle) ? needle : l.includes(dbl(needle)) ? dbl(needle) : null;
      if (lit) hits.push({ f, i, lit, esc: lit !== p.old });
    }
    if (hits.length !== 1) console.log(`${hits.length} source lines hold: ${p.old}`);
    return { p, hit: hits[0], n: hits.length };
  });
  if (plan.some((x) => x.n !== 1)) process.exit(1);
  for (const { p, hit } of plan) {
    const lines = fs.readFileSync(hit.f, "utf8").split("\n");
    let l = lines[hit.i];
    if (p.to) { const raw = /(String\.raw|\bS)`/.test(l); const t = raw ? p.to : dbl(p.to); l = l.replace(hit.lit, () => t); }
    if (p.fb) { if (!l.includes(p.fb[0])) throw new Error("feedback not on the line: " + p.fb[0]); l = l.replace(p.fb[0], () => p.fb[1]); }
    if (p.fig) {
      const fig = `FIG.${p.fig}`;
      if (/, null, [\d.]+\),\s*$/.test(l)) l = l.replace(/, null, ([\d.]+)\),(\s*)$/, `, ${fig}, $1),$2`);
      else if (/\),\s*$/.test(l)) l = l.replace(/\),(\s*)$/, `, ${fig}),$1`);
      else throw new Error("line ending not recognised: " + l.slice(-50));
    }
    lines[hit.i] = l;
    let text = lines.join("\n");
    if (p.fig && !text.includes(IMPORT)) { text = IMPORT + text; for (const x of plan) if (x.hit.f === hit.f) x.hit.i += 1; }
    fs.writeFileSync(hit.f, text);
  }
  console.log(`rewrote ${plan.length} source lines`);
  process.exit(0);
}

const pool = [];
for (const f of files) {
  const m = await import(pathToFileURL(f).href);
  for (const v of Object.values(m)) if (Array.isArray(v)) pool.push(...v.filter((q) => q && q.prompt));
}
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const { createClient } = await import("@supabase/supabase-js");
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "7d3e0ca4-1c49-47d4-84f2-9c41c09dd49d";
let rows = [];
for (let from = 0; ; from += 1000) {
  const { data, error } = await db.from("bank_questions").select("*").eq("course_id", CID).order("id").range(from, from + 999);
  if (error) throw error;
  rows.push(...data);
  if (data.length < 1000) break;
}
rows = rows.filter((x) => x.kind !== "long_answer");
const APPLY = process.argv.includes("--apply");
if (APPLY) { const dir = path.join(ROOT, "mhf4u-bank-figures", "backup"); fs.mkdirSync(dir, { recursive: true }); fs.writeFileSync(path.join(dir, `bank-before-${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify(rows.filter((x) => PATCH.some((p) => x.prompt.startsWith(p.old))), null, 1)); }

let bad = 0, updated = 0, withFig = 0, reworded = 0;
const key = (a, c) => (Array.isArray(c) ? (Array.isArray(a) ? a : [a]).map((id) => c.find((x) => x.id === id)?.text).sort().join("|") : JSON.stringify(a));
const same = (a, b) => (typeof a === "number" && typeof b === "number" ? Math.abs(a - b) < 1e-9 : false);
for (const p of PATCH) {
  const now = p.to ?? p.old;
  const dbHits = rows.filter((x) => x.prompt.startsWith(p.old) || (p.to && x.prompt.startsWith(now)));
  const srcHits = pool.filter((q) => q.prompt.startsWith(now));
  if (dbHits.length !== 1 || srcHits.length !== 1) { bad++; console.log(`MATCH db=${dbHits.length} src=${srcHits.length}: ${p.old.slice(0, 80)}`); continue; }
  const row = dbHits[0], q = srcHits[0];
  if (key(row.answer, row.choices) !== key(q.answer, q.choices) && !same(row.answer, q.answer)) { bad++; console.log(`ANSWER differs: ${p.old.slice(0, 60)}: ${key(row.answer, row.choices)} vs ${key(q.answer, q.choices)}`); continue; }
  if (p.fig && !q.fig) { bad++; console.log(`NO FIG in source: ${p.old.slice(0, 60)}`); continue; }
  if (p.fig && row.image_url && !row.image_url.includes("/mhf4u-fig/")) { bad++; console.log(`ALREADY HAS IMAGE: ${p.old.slice(0, 60)}`); continue; }
  const fields = { prompt: q.prompt, choices: q.choices ?? null, answer: q.answer, feedback: q.feedback };
  if (APPLY) {
    if (p.fig) {
      const svg = FIG[p.fig];
      const k = `mhf4u-fig/${p.fig}-${crypto.createHash("sha1").update(svg).digest("hex").slice(0, 8)}.svg`;
      const up = await db.storage.from("graph-images").upload(k, Buffer.from(svg), { upsert: true, contentType: "image/svg+xml" });
      if (up.error) throw up.error;
      fields.image_url = db.storage.from("graph-images").getPublicUrl(k).data.publicUrl;
    }
    const u = await db.from("bank_questions").update(fields).eq("id", row.id);
    if (u.error) throw u.error;
  }
  updated++; if (p.fig) withFig++; if (p.to) reworded++;
}
console.log(`${APPLY ? "UPDATED" : "would update"} ${updated} of ${PATCH.length} rows (${reworded} reworded, ${withFig} new figures); ${bad} problems`);
process.exit(bad ? 1 : 0);
