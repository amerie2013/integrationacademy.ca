// One-time: restructure Chapter 5 in the MTH1W bank from 6 topics to 8.
//   OLD: 5.4 Changing Dimensions (P,A,V) | 5.5 Pythagorean | 5.6 Volume & SA
//   NEW: 5.4 Pythagorean | 5.5 Chg Dim Perimeter | 5.6 Chg Dim Area | 5.7 Volume | 5.8 Surface Area
// Deletes the 3 old Chapter-5 topics and inserts the 5 new ones from the
// (updated) gen54–gen58 generators. Leaves Chapters 1–4, 6, 7 untouched.
// Re-runnable. Usage: node scripts/restructure-ch5.mjs

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { gen54, gen55, gen56, gen57, gen58 } from "./seed-bank.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const OLD_TOPICS = [
  "5.4 Changing Dimensions: Perimeter, Area & Volume",
  "5.5 The Pythagorean Theorem",
  "5.6 Volume & Surface Area",
];

// new topic -> generator + which existing Chapter-5 lesson position to link to
const NEW = [
  { title: "5.4 The Pythagorean Theorem", gen: gen54, lessonPos: 25 }, // old Pythagorean lesson
  { title: "5.5 Changing Dimensions: Perimeter", gen: gen55, lessonPos: 24 }, // old Chg-Dim lesson
  { title: "5.6 Changing Dimensions: Area", gen: gen56, lessonPos: 24 },
  { title: "5.7 Volume", gen: gen57, lessonPos: 26 }, // old Volume & SA lesson
  { title: "5.8 Surface Area", gen: gen58, lessonPos: 26 },
];

async function run() {
  const { data: course } = await db.from("courses").select("id").eq("code", "MTH1W").single();
  if (!course) { console.error("MTH1W course not found."); process.exit(1); }
  const { data: lessons } = await db.from("lessons").select("id, position").eq("course_id", course.id);
  const byPos = Object.fromEntries((lessons ?? []).map((l) => [l.position, l.id]));

  // 1) remove the old Chapter-5 topics
  const del = await db.from("bank_questions").delete().eq("course_id", course.id).in("topic", OLD_TOPICS);
  if (del.error) throw del.error;

  // 2) insert the new Chapter-5 topics
  let total = 0;
  for (const t of NEW) {
    const rows = t.gen().map((q) => ({
      course_id: course.id, lesson_id: byPos[t.lessonPos] ?? null, topic: t.title,
      difficulty: q.difficulty, kind: q.kind, prompt: q.prompt,
      choices: q.choices ?? null, answer: q.answer ?? null, tolerance: q.tolerance ?? null,
      points: q.points ?? 1, feedback: q.feedback ?? null,
    }));
    for (let i = 0; i < rows.length; i += 200) {
      const { error } = await db.from("bank_questions").insert(rows.slice(i, i + 200));
      if (error) throw error;
    }
    total += rows.length;
    console.log(`  ${t.title}: ${rows.length} questions`);
  }
  console.log(`\nChapter 5 restructured: ${total} questions across ${NEW.length} new topics.`);
}
run().catch((e) => { console.error("FAILED:", e.message ?? e); process.exit(1); });
