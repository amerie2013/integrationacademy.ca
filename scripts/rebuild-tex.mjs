// Rebuild one LaTeX worksheet from its in-browser-edited .tex.
// Writes the DB's content.tex back to the local .tex file, then runs the
// course's Tectonic publish script (compile + upload + republish). Run locally
// (needs Tectonic installed). Worksheet id is shown on the editor page.
//   node scripts/rebuild-tex.mjs <worksheetId>
import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";

const id = process.argv[2];
if (!id) { console.error("Usage: node scripts/rebuild-tex.mjs <worksheetId>"); process.exit(1); }

const env = {};
for (const l of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const { createClient } = await import("@supabase/supabase-js");
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const { data: w, error } = await db.from("worksheets").select("code, course_id, content").eq("id", id).single();
if (error || !w) { console.error("Worksheet not found:", error?.message); process.exit(1); }
const tex = w.content?.tex;
if (!tex) { console.error("No .tex source on this worksheet (structured/MTH1W worksheets use the in-browser 'Save & Regenerate PDF' button instead)."); process.exit(1); }
const { data: course } = await db.from("courses").select("code").eq("id", w.course_id).single();
if (!course) { console.error("Course not found."); process.exit(1); }

const slug = course.code.toLowerCase();
const dir = path.resolve("scripts", `${slug}-worksheets`);
const pub = path.resolve("scripts", `${slug}-worksheet-publish.mjs`);
if (!fs.existsSync(dir) || !fs.existsSync(pub)) { console.error(`Missing scripts/${slug}-worksheets/ or ${slug}-worksheet-publish.mjs for ${course.code}.`); process.exit(1); }

fs.writeFileSync(path.join(dir, `${w.code}.tex`), tex, "utf8");
console.log(`Wrote ${course.code} ${w.code}.tex (${tex.length} chars). Compiling with Tectonic + publishing…\n`);
execFileSync("node", [pub, w.code], { stdio: "inherit" });
console.log(`\nDone — ${course.code} ${w.code} rebuilt and republished.`);
