// Seed (or re-seed) the MBF3C question bank from a unit module.
//   node scripts/bank-mbf3c/seed.mjs scripts/bank-mbf3c/u1.mjs
// The unit module default-exports an array of { code, gen } where gen() returns
// ~60 question objects. Each topic is matched to the MBF3C lesson whose title
// starts with that code; existing bank rows for the topic are replaced.
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const arg = process.argv[2];
if (!arg) { console.error("usage: seed.mjs <unit-module>"); process.exit(1); }
const mod = await import(pathToFileURL(resolve(arg)).href);

const { data: course } = await db.from("courses").select("id").eq("code", "MBF3C").single();
if (!course) { console.error("MBF3C course not found."); process.exit(1); }
const { data: lessons } = await db.from("lessons").select("id, title").eq("course_id", course.id);

let total = 0;
for (const t of mod.default) {
  const lesson = (lessons ?? []).find((l) => l.title.startsWith(t.code + " "));
  if (!lesson) { console.error(`  ! no lesson for ${t.code} — skipped`); continue; }
  const items = t.gen();
  const counts = items.reduce((a, q) => ((a[q.difficulty] = (a[q.difficulty] || 0) + 1), a), {});
  const rows = items.map((q) => ({
    course_id: course.id, lesson_id: lesson.id, topic: lesson.title,
    difficulty: q.difficulty, kind: q.kind, prompt: q.prompt,
    choices: q.choices ?? null, answer: q.answer ?? null, tolerance: q.tolerance ?? null,
    points: q.points ?? 1, feedback: q.feedback ?? null,
  }));
  await db.from("bank_questions").delete().eq("course_id", course.id).eq("topic", lesson.title);
  for (let i = 0; i < rows.length; i += 200) {
    const { error } = await db.from("bank_questions").insert(rows.slice(i, i + 200));
    if (error) throw error;
  }
  total += rows.length;
  console.log(`  ${lesson.title}: ${rows.length}  (E${counts.easy || 0}/M${counts.medium || 0}/H${counts.hard || 0})`);
}
console.log(`\nSeeded ${total} MBF3C bank questions.`);
