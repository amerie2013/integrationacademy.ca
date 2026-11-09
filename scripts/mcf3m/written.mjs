// MCF3M written-response (long_answer) bank questions for printed chapter tests (Part C).
// Source: scripts/mcf3m/ch<N>/written.mjs exporting WRITTEN = [W("1.3", "hard", 5, prompt, feedback, fig), ...].
//   node scripts/mcf3m/written.mjs --ch=1          -> dry run
//   node scripts/mcf3m/written.mjs --ch=1 --apply  -> uploads figures, inserts rows not already in the bank (matched by prompt)
// Run --apply only after the chapter's lessons exist (each row is linked to its lesson by title).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { pathToFileURL } from "url";
import path from "path";
import crypto from "crypto";
import { createRequire } from "module";
import { CID } from "./plan.mjs";

const katex = createRequire(import.meta.url)("katex");
const APPLY = process.argv.includes("--apply");
const CH = (process.argv.find((a) => a.startsWith("--ch=")) ?? "").slice(5);
if (!/^[1-8]$/.test(CH)) { console.log("usage: written.mjs --ch=<1-8> [--apply]"); process.exit(1); }
const { WRITTEN } = await import(pathToFileURL(path.resolve(`scripts/mcf3m/ch${CH}/written.mjs`)).href);

let bad = 0;
for (const w of WRITTEN) {
  for (const s of [w.prompt, w.feedback]) {
    if ((s.match(/\$/g) || []).length % 2) { bad++; console.log("FAIL odd $:", s.slice(0, 60)); }
    for (const m of s.matchAll(/\$([^$]+)\$/g)) { try { katex.renderToString(m[1], { throwOnError: true, strict: "ignore" }); } catch (e) { bad++; console.log("FAIL KaTeX:", m[1].slice(0, 50)); } }
  }
}
const env = {};
for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const { data: lessons } = await db.from("lessons").select("id, title").eq("course_id", CID);
const missing = [...new Set(WRITTEN.map((w) => w.topic))].filter((t) => !lessons.some((l) => l.title === t));
const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", CID).eq("kind", "long_answer");
const have = new Set((existing ?? []).map((r) => r.prompt));
const todo = WRITTEN.filter((w) => !have.has(w.prompt));
console.log(`${WRITTEN.length} written questions; ${todo.length} not yet in the bank; ${WRITTEN.reduce((s, r) => s + r.points, 0)} marks; ${WRITTEN.filter((w) => w.fig).length} with figures`);
if (missing.length) console.log("lessons not loaded yet:", missing);
if (bad) { console.log(`${bad} PROBLEM(S)`); process.exit(1); }
if (!APPLY) { console.log("Dry run — use --apply."); process.exit(0); }
if (missing.length) { console.log("Load the lessons first."); process.exit(1); }
for (const w of todo) {
  let image_url = null;
  if (w.fig) {
    const key = `mcf3m-${w.topic.split(" ")[0].replace(".", "-")}/written-${crypto.createHash("sha1").update(w.fig).digest("hex").slice(0, 10)}.svg`;
    const up = await db.storage.from("graph-images").upload(key, Buffer.from(w.fig), { upsert: true, contentType: "image/svg+xml" });
    if (up.error) throw up.error;
    image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
  }
  const { fig, ...row } = w;
  const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: CID, lesson_id: lessons.find((l) => l.title === w.topic).id });
  if (r.error) throw r.error;
}
console.log(`inserted ${todo.length}`);
