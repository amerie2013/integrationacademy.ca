// IB AA SL chapter 11 bank: hand-written easy/medium (em11_*.mjs) and hard (h11_*.mjs) sets per topic.
// Existing rows are updated in place (oldest first); missing rows are inserted; nothing is deleted, so a set must
// have at least as many questions as the DB already holds (old topics hold 10/10/9; 11.4 and 11.5 are new). long_answer rows are never touched.
//   node scripts/ibaasl-ch11/bank/publish.mjs 11_1 11_2       -> check + render figures to bank/out/*.png (no DB writes)
//   node scripts/ibaasl-ch11/bank/publish.mjs --all --apply -> also upload figures and update the rows
// Existing rows are UPDATED IN PLACE (same ids), so quiz copies and practice history stay linked.
import { createRequire } from "module";
import { pathToFileURL } from "url";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import { sameExpr } from "../../../lib/answerCheck.ts";

const katex = createRequire(import.meta.url)("katex");
const DIR = path.resolve("scripts/ibaasl-ch11/bank");
const OUT = path.join(DIR, "out");
const APPLY = process.argv.includes("--apply");
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = ["11_1", "11_2", "11_3", "11_4", "11_5"];

let bad = 0;
const fail = (m) => { bad++; console.log("  FAIL:", m); };
function checkText(label, s) {
  if (typeof s !== "string") return;
  if ((s.match(/\$/g) || []).length % 2) fail(`${label}: odd number of $ in "${s.slice(0, 60)}"`);
  if (/\\\$|textdollar/.test(s)) fail(`${label}: escaped dollar`);
  for (const m of s.matchAll(/\$([^$]+)\$/g)) { try { katex.renderToString(m[1], { throwOnError: true, strict: "ignore" }); } catch (e) { fail(`${label}: KaTeX "${m[1].slice(0, 50)}" ${e.message.slice(0, 50)}`); } }
}

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
const CID = "f635431f-3244-45c3-9c4a-39a33fd209b9";

const ONLY = (process.argv.find((a) => a.startsWith("--only=")) ?? "").slice(7); // e.g. --only=easy,medium
for (const n of names) {
  const { TOPIC, Q } = await import(pathToFileURL(path.join(DIR, `h${n}.mjs`)).href);
  const emFile = path.join(DIR, `em${n}.mjs`);
  const em = fs.existsSync(emFile) ? await import(pathToFileURL(emFile).href) : {};
  const code = TOPIC.split(" ")[0];
  const sets = [["easy", em.E], ["medium", em.M], ["hard", Q]].filter(([d, s]) => s && (!ONLY || ONLY.split(",").includes(d)));
  const all = sets.flatMap(([, s]) => s);
  if (new Set(all.map((q) => q.prompt)).size !== all.length) fail(`${code}: duplicate prompts across difficulties`);
  for (const [diff, S] of sets) {
    console.log(`\n${TOPIC} [${diff}]: ${S.length} questions, ${S.filter((q) => q.fig).length} with figures, kinds ${JSON.stringify(S.reduce((a, q) => ((a[q.kind] = (a[q.kind] || 0) + 1), a), {}))}`);
    if (S.length < 20 || S.length > 21) fail(`${diff}: need 20 (or 21) questions, have ${S.length}`);
    if (S.filter((q) => q.fig).length < (diff === "hard" ? 4 : 2)) fail(`${diff}: needs at least ${diff === "hard" ? 4 : 2} figures`);
    S.forEach((q, i) => {
      const L = `${diff} Q${i + 1}`;
      [q.prompt, q.feedback, ...(q.choices ?? []).map((c) => c.text)].forEach((s) => checkText(L, s));
      if (!q.feedback) fail(`${L}: no feedback`);
      if (q.kind === "multiple_choice" && (q.choices.length !== 4 || new Set(q.choices.map((c) => c.text)).size !== 4 || !q.choices.some((c) => c.id === q.answer))) fail(`${L}: bad multiple choice`);
      if (q.kind === "multiple_select" && (!q.answer.length || q.answer.some((a) => !q.choices.some((c) => c.id === a)))) fail(`${L}: bad multiple select`);
      if (q.kind === "numeric" && !Number.isFinite(q.answer)) fail(`${L}: numeric answer`);
      if (q.kind === "fill_blank" && (!Array.isArray(q.answer) || !q.answer.length)) fail(`${L}: fill answers`);
      if (q.kind === "math_expr" && !sameExpr(q.answer, q.answer)) fail(`${L}: math_expr answer does not parse: ${q.answer}`);
      if (q.fig) {
        fs.writeFileSync(path.join(OUT, `${code}_${diff}_q${i + 1}.svg`), q.fig);
        if (sharp && !APPLY) sharp(Buffer.from(q.fig)).png().toFile(path.join(OUT, `${code}_${diff}_q${i + 1}.png`)).catch((e) => fail(`${L}: SVG render ${e.message}`));
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
        const key = `ibaasl-${code.replace(".", "-")}/${diff}-q${i + 1}-${crypto.createHash("sha1").update(q.fig).digest("hex").slice(0, 8)}.svg`;
        const up = await db.storage.from("graph-images").upload(key, Buffer.from(q.fig), { upsert: true, contentType: "image/svg+xml" });
        if (up.error) throw up.error;
        image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
      }
      const fields = { kind: q.kind, prompt: q.prompt, choices: q.choices ?? null, answer: q.answer, tolerance: q.tolerance ?? null, feedback: q.feedback, image_url, points: 1 };
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
