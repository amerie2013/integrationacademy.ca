// Replace ONLY the "2.4 Creating & Solving Equations" questions in the MTH1W
// bank, leaving every other topic untouched.
// Re-runnable. Usage: node scripts/replace-bank-2_4.mjs

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { gen24 } from "./seed-bank.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const TOPIC = "2.4 Creating & Solving Equations";
const LESSON_POS = 11; // 2.4 is position 11

async function run() {
  const { data: course } = await db.from("courses").select("id").eq("code", "MTH1W").single();
  if (!course) { console.error("MTH1W course not found — run seed-mth1w.mjs first."); process.exit(1); }

  const { data: lessons } = await db.from("lessons").select("id, position").eq("course_id", course.id);
  const lessonId = (lessons ?? []).find((l) => l.position === LESSON_POS)?.id ?? null;

  const del = await db.from("bank_questions").delete().eq("course_id", course.id).eq("topic", TOPIC);
  if (del.error) throw del.error;

  const rows = gen24().map((q) => ({
    course_id: course.id, lesson_id: lessonId, topic: TOPIC,
    difficulty: q.difficulty, kind: q.kind, prompt: q.prompt,
    choices: q.choices ?? null, answer: q.answer ?? null, tolerance: q.tolerance ?? null,
    points: q.points ?? 1, feedback: q.feedback ?? null,
  }));

  for (let i = 0; i < rows.length; i += 200) {
    const { error } = await db.from("bank_questions").insert(rows.slice(i, i + 200));
    if (error) throw error;
  }
  console.log(`Replaced "${TOPIC}": inserted ${rows.length} questions.`);
}
run().catch((e) => { console.error("FAILED:", e.message ?? e); process.exit(1); });
