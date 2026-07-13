// One-time: copy MTH1W worksheet content from scripts/worksheets/*.mjs into the
// `worksheets.content` JSONB column so it can be edited in-browser and
// regenerated server-side. Idempotent (upsert by course_id+code).
//   node scripts/import-worksheet-content.mjs --dry   # preview, no DB writes
//   node scripts/import-worksheet-content.mjs         # write to DB
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const DRY = process.argv.includes("--dry");
const SRC = path.resolve("scripts/worksheets");
const { LESSONS } = await import(pathToFileURL(path.join(SRC, "lessons-data.mjs")).href);
const files = fs.readdirSync(SRC).filter((f) => /^\d/.test(f) && f.endsWith(".mjs"))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

function contentOf(mod) {
  return {
    grade: mod.grade ?? "Grade 9 · MTH1W",
    title: mod.title,
    intro: mod.intro ?? "",
    lesson: Array.isArray(mod.lesson) && mod.lesson.length ? mod.lesson : (LESSONS[mod.code] ?? []),
    examples: mod.examples ?? [],
    questions: mod.questions ?? [],
  };
}

const rows = [];
for (const f of files) {
  const mod = (await import(pathToFileURL(path.join(SRC, f)).href)).default;
  const c = contentOf(mod);
  rows.push({ code: mod.code, content: c });
}

// Report
console.log(`Prepared ${rows.length} worksheets.`);
const bad = rows.filter((r) => !r.content.intro || r.content.lesson.length === 0 || r.content.examples.length !== 9 || r.content.questions.length !== 13);
console.log(bad.length ? `⚠ ${bad.length} with unexpected shape: ${bad.map((b) => b.code).join(", ")}` : "✓ all have intro + Learn-the-Concept + 9 examples + 13 questions");
const s = rows[0];
console.log("\n--- sample:", s.code, "---");
console.log("intro:", s.content.intro.slice(0, 90) + "…");
console.log("lesson items:", s.content.lesson.length, "| first heading:", s.content.lesson[0]?.[0]);
console.log("example[0] title:", s.content.examples[0]?.[0]);
console.log("question[0]:", String(s.content.questions[0]?.[1]).slice(0, 70));

if (DRY) { console.log("\n[dry run — no DB writes]"); process.exit(0); }

// Write to DB
const { createClient } = await import("@supabase/supabase-js");
const env = {};
for (const l of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const { data: course } = await db.from("courses").select("id").eq("code", "MTH1W").single();
if (!course) { console.error("MTH1W course not found"); process.exit(1); }
let ok = 0, fail = 0;
for (const r of rows) {
  const { error } = await db.from("worksheets").update({ content: r.content }).eq("course_id", course.id).eq("code", r.code);
  if (error) { console.error(`✗ ${r.code}: ${error.message}`); fail++; } else ok++;
}
console.log(`\nWrote content for ${ok} worksheets${fail ? `, ${fail} failed` : ""}.`);
