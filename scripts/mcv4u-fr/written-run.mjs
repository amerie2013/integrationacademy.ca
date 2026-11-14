// Shared main block for scripts/mcv4u-fr-chN/written.mjs (French written-response questions, Part C of printed tests).
//   await runWritten(WRITTEN, "../mcv4u-chN/written.mjs", import.meta.url)
// Compares with the English list (same count, points, difficulty, figure, topic number), then on --apply uploads the
// figures (keys mcv4u-fr-…) and inserts rows not already in the MCV4U-FR bank (matched by prompt).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { CID_FR, FIG_PREFIX } from "./common.mjs";

export async function runWritten(WRITTEN, enRel, metaUrl) {
  if (!process.argv[1] || !metaUrl.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) return;
  const APPLY = process.argv.includes("--apply");
  // The English written.mjs runs its own main block when argv[1] ends in "written.mjs": hide argv[1] while importing.
  const argv1 = process.argv[1];
  process.argv[1] = "imported-for-comparison";
  const { WRITTEN: EN } = await import(new URL(enRel, metaUrl).href);
  process.argv[1] = argv1;
  let bad = 0;
  if (EN.length !== WRITTEN.length) { bad++; console.log(`FAIL: ${WRITTEN.length} questions, English has ${EN.length}`); }
  WRITTEN.forEach((w, i) => {
    const e = EN[i];
    // figures must match except for the words drawn inside them (text nodes are translated)
    const shape = (svg) => String(svg ?? "").replace(/>[^<]*</g, "><");
    if (!e || e.points !== w.points || e.difficulty !== w.difficulty || shape(e.fig) !== shape(w.fig) || e.topic.split(" ")[0] !== w.topic.split(" ")[0]) { bad++; console.log(`FAIL: question ${i + 1} differs from English in points/difficulty/figure/topic`); }
    if (/\b(the|and|Find|Show|Explain|which|graph shown|Use|State|Determine)\b/.test(w.prompt + " " + w.feedback)) { bad++; console.log(`FAIL: question ${i + 1} looks untranslated`); }
  });
  if (bad) process.exit(1);
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const { data: lessons } = await db.from("lessons").select("id, title").eq("course_id", CID_FR);
  const missing = [...new Set(WRITTEN.map((w) => w.topic))].filter((t) => !lessons.some((l) => l.title === t));
  const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", CID_FR).eq("kind", "long_answer");
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const todo = WRITTEN.filter((w) => !have.has(w.prompt));
  console.log(`${WRITTEN.length} written questions (EN ${EN.length}); ${todo.length} not yet in the bank; ${WRITTEN.reduce((s, r) => s + r.points, 0)} marks; ${WRITTEN.filter((w) => w.fig).length} with figures`);
  if (missing.length) console.log("lessons not loaded yet:", missing);
  if (!APPLY) { console.log("Dry run — use --apply."); return; }
  if (missing.length) { console.log("Load the lessons first."); process.exit(1); }
  for (const w of todo) {
    const key = `${FIG_PREFIX}-${w.topic.split(" ")[0].replace(".", "-")}/written-${crypto.createHash("sha1").update(w.fig).digest("hex").slice(0, 10)}.svg`;
    const up = await db.storage.from("graph-images").upload(key, Buffer.from(w.fig), { upsert: true, contentType: "image/svg+xml" });
    if (up.error) throw up.error;
    const image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
    const { fig, ...row } = w;
    const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: CID_FR, lesson_id: lessons.find((l) => l.title === w.topic).id });
    if (r.error) throw r.error;
  }
  console.log(`inserted ${todo.length}`);
}
