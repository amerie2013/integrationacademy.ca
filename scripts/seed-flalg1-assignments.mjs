// Seeds ONLY the ALG1 assignments table (one assignment per topic).
// Deliberately does NOT touch lessons — running seed-flalg1.mjs would rewrite
// every lesson and destroy DB-only lesson edits. Safe to re-run.
// Usage: node scripts/seed-flalg1-assignments.mjs
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { ASSIGN } from "./alg1-assignments.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const rank = (code) => {
  const [a, b] = code.split(".").map(Number);
  return a * 100 + b;
};

async function run() {
  const { data: course, error: ce } = await db.from("courses").select("id").eq("code", "ALG1").single();
  if (ce || !course) throw ce || new Error("ALG1 course not found");
  console.log("Course:", course.id);

  await db.from("assignments").delete().eq("course_id", course.id);

  const codes = Object.keys(ASSIGN).sort((a, b) => rank(a) - rank(b));
  let n = 0;
  for (const code of codes) {
    const ad = ASSIGN[code];
    const { error } = await db.from("assignments").insert({
      course_id: course.id, title: ad.title, description: ad.description, published: true,
    });
    if (error) throw error;
    n++;
    console.log(`  ${ad.title}`);
  }
  console.log(`\nSeeded ${n} ALG1 assignments.`);
}

run().catch((e) => { console.error(e); process.exit(1); });
