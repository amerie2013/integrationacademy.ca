// MTH1W-FR chapitre 1 — banque de questions : faciles/moyennes (em1_*.mjs) et difficiles (h1_*.mjs) par sujet.
// Miroir de ../../mth1w-ch1/v2/bank/publish.mjs. TOPIC = the French lesson title; lesson_id = lessonId(1, k).
// Rows of (CID_FR, TOPIC, difficulty) are updated in place (oldest first), missing rows are inserted, nothing is deleted,
// so a rerun never duplicates rows. long_answer rows are never touched. Figure keys start with mth1w-fr- (never the English files).
//   node scripts/mth1w-fr-ch1/bank/publish.mjs --all          -> check + render figures to bank/out (no DB writes)
//   node scripts/mth1w-fr-ch1/bank/publish.mjs --all --apply  -> also upload figures and write the rows
// Load the French lessons first (lesson_id references them).
import { createRequire } from "module";
import { pathToFileURL } from "url";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import { CID_FR, FIG_PREFIX, lessonId } from "../../mth1w-fr/common.mjs";

const katex = createRequire(import.meta.url)("katex");
const DIR = path.resolve("scripts/mth1w-fr-ch1/bank");
const EN = path.resolve("scripts/mth1w-ch1/v2/bank");
const OUT = path.join(DIR, "out");
const APPLY = process.argv.includes("--apply");
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = ["1_1", "1_2", "1_3", "1_4", "1_5", "1_6", "1_7", "1_8", "1_9", "1_10"];

let bad = 0;
const fail = (m) => { bad++; console.log("  FAIL:", m); };
function checkText(label, s) {
  if (typeof s !== "string") return;
  if ((s.match(/\$/g) || []).length % 2) fail(`${label}: odd number of $ in "${s.slice(0, 60)}"`);
  if (/\\\$|textdollar/.test(s)) fail(`${label}: escaped dollar`);
  if (/\bundefined\b|\bNaN\b/.test(s)) fail(`${label}: text contains undefined/NaN`);
  for (const m of s.matchAll(/\$([^$]+)\$/g)) { try { katex.renderToString(m[1], { throwOnError: true, strict: "ignore" }); } catch (e) { fail(`${label}: KaTeX "${m[1].slice(0, 50)}" ${e.message.slice(0, 50)}`); } }
}
/** the math inside $…$, in order — must be identical to English (same numbers, same answers) */
const mathOf = (q) => [q.prompt, ...(q.choices ?? []).map((c) => c.text)].flatMap((s) => [...String(s).matchAll(/\$([^$]+)\$/g)].map((m) => m[1])).sort().join(" | ");

fs.mkdirSync(OUT, { recursive: true });
let sharp = null;
try { sharp = (await import("sharp")).default; } catch { /* PNG previews optional */ }
let db = null;
if (APPLY) {
  const { createClient } = await import("@supabase/supabase-js");
  const env = {};
  for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
}
const CID = CID_FR;

const ONLY = (process.argv.find((a) => a.startsWith("--only=")) ?? "").slice(7); // e.g. --only=easy,medium
for (const n of names) {
  const { TOPIC, Q } = await import(pathToFileURL(path.join(DIR, `h${n}.mjs`)).href);
  const em = await import(pathToFileURL(path.join(DIR, `em${n}.mjs`)).href);
  const enH = await import(pathToFileURL(path.join(EN, `h${n}.mjs`)).href);
  const enEM = await import(pathToFileURL(path.join(EN, `em${n}.mjs`)).href);
  const code = TOPIC.split(" ")[0];
  if (code !== enH.TOPIC.split(" ")[0]) fail(`${n}: topic code ${code} differs from English ${enH.TOPIC}`);
  const k = Number(code.split(".")[1]);
  const lesson_id = lessonId(1, k);
  const sets = [["easy", em.E, enEM.E], ["medium", em.M, enEM.M], ["hard", Q, enH.Q]].filter(([d]) => !ONLY || ONLY.split(",").includes(d));
  const all = sets.flatMap(([, s]) => s);
  if (new Set(all.map((q) => q.prompt)).size !== all.length) fail(`${code}: duplicate prompts across difficulties`);
  for (const [diff, S, E] of sets) {
    console.log(`\n${TOPIC} [${diff}]: ${S.length} questions (EN ${E.length}), ${S.filter((q) => q.fig).length} with figures (EN ${E.filter((q) => q.fig).length}), kinds ${JSON.stringify(S.reduce((a, q) => ((a[q.kind] = (a[q.kind] || 0) + 1), a), {}))}`);
    if (S.length !== 20) fail(`${diff}: need 20 questions, have ${S.length}`);
    if (S.length !== E.length) fail(`${diff}: ${S.length} questions but English has ${E.length}`);
    S.forEach((q, i) => {
      const L = `${diff} Q${i + 1}`;
      const e = E[i];
      [q.prompt, q.feedback, ...(q.choices ?? []).map((c) => c.text)].forEach((s) => checkText(L, s));
      if (!q.feedback) fail(`${L}: no feedback`);
      if (q.kind === "multiple_choice" && (q.choices.length !== 4 || new Set(q.choices.map((c) => c.text)).size !== 4 || !q.choices.some((c) => c.id === q.answer))) fail(`${L}: bad multiple choice`);
      if (q.kind === "multiple_select" && (!q.answer.length || q.answer.some((a) => !q.choices.some((c) => c.id === a)))) fail(`${L}: bad multiple select`);
      if (q.kind === "numeric" && !Number.isFinite(q.answer)) fail(`${L}: numeric answer`);
      if (q.kind === "fill_blank" && (!Array.isArray(q.answer) || !q.answer.length)) fail(`${L}: fill answers`);
      // same question as English: kind, answer, tolerance, math, figure presence
      if (e) {
        const ansSame = q.kind === "multiple_choice" ? q.choices.find((c) => c.id === q.answer)?.text.match(/\$[^$]+\$/g)?.join() === e.choices.find((c) => c.id === e.answer)?.text.match(/\$[^$]+\$/g)?.join()
          : q.kind === "multiple_select" ? q.answer.join() === e.answer.join()
          : q.kind === "fill_blank" ? e.answer.every((a) => q.answer.includes(a)) // French may accept extra French spellings

          : JSON.stringify(q.answer) === JSON.stringify(e.answer);
        if (q.kind !== e.kind || (q.tolerance ?? 0) !== (e.tolerance ?? 0) || !ansSame || !!q.fig !== !!e.fig) fail(`${L}: differs from English (kind/answer/tolerance/figure)`);
        if (mathOf(q) !== mathOf(e)) fail(`${L}: math differs from English`);
      }
      if (q.fig) {
        fs.writeFileSync(path.join(OUT, `${code}_${diff}_q${i + 1}.svg`), q.fig);
        if (sharp && !APPLY) sharp(Buffer.from(q.fig)).png().toFile(path.join(OUT, `${code}_${diff}_q${i + 1}.png`)).catch((err) => fail(`${L}: SVG render ${err.message}`));
      }
    });
    if (!APPLY) continue;
    const { data: rows, error } = await db.from("bank_questions").select("id").eq("course_id", CID).eq("topic", TOPIC).eq("difficulty", diff).neq("kind", "long_answer").order("created_at").order("id");
    if (error) throw error;
    if (rows.length > S.length) { fail(`DB has ${rows.length} ${diff} rows for ${TOPIC}; write at least that many questions — skipped`); continue; }
    for (let i = 0; i < S.length; i++) {
      const q = S[i];
      let image_url = null;
      if (q.fig) {
        const key = `${FIG_PREFIX}-${code.replace(".", "-")}/${diff}-q${i + 1}-${crypto.createHash("sha1").update(q.fig).digest("hex").slice(0, 8)}.svg`;
        const up = await db.storage.from("graph-images").upload(key, Buffer.from(q.fig), { upsert: true, contentType: "image/svg+xml" });
        if (up.error) throw up.error;
        image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
      }
      const fields = { kind: q.kind, prompt: q.prompt, choices: q.choices ?? null, answer: q.answer, tolerance: q.tolerance ?? null, feedback: q.feedback, image_url, points: 1, lesson_id };
      const r = i < rows.length
        ? await db.from("bank_questions").update(fields).eq("id", rows[i].id)
        : await db.from("bank_questions").insert({ ...fields, course_id: CID, topic: TOPIC, difficulty: diff });
      if (r.error) throw r.error;
    }
    console.log(`  updated ${Math.min(rows.length, S.length)}, inserted ${Math.max(0, S.length - rows.length)} ${diff} rows`);
  }
}
console.log(bad ? `\n${bad} PROBLEM(S)` : "\nALL CHECKS PASSED");
process.exit(bad ? 1 : 0);
