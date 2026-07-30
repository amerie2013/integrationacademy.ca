// Update only Algebra 1 lesson 5.1 blocks (animated factoring steps) without
// wiping the whole course. Usage: node scripts/update-flalg1-5.1.mjs
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { authored } from "./flalg1-lessons.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const a = authored["5.1"];
if (!a) throw new Error("authored[5.1] missing");

const { data: course, error: cErr } = await db
  .from("courses")
  .select("id")
  .eq("title", "Algebra 1 (FL B.E.S.T.)")
  .maybeSingle();
if (cErr) throw cErr;
if (!course) throw new Error("Course not found — run seed-flalg1.mjs first.");

const title = `5.1 ${a.title}`;
const { data: rows, error: fErr } = await db
  .from("lessons")
  .select("id, title")
  .eq("course_id", course.id)
  .ilike("title", "5.1%");
if (fErr) throw fErr;
if (!rows?.length) throw new Error("No lesson titled like 5.1% found.");

for (const row of rows) {
  const { error } = await db
    .from("lessons")
    .update({ title, blocks: a.blocks, published: true })
    .eq("id", row.id);
  if (error) throw error;
  console.log(`Updated ${row.title} → ${title} (${a.blocks.length} blocks)`);
}
