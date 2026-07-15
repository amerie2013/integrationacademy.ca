// Rebuild one LaTeX worksheet from its in-browser-edited form fields (stored in
// the DB): reconstruct the content object, run the course's build.mjs to
// regenerate the .tex, then run the course's Tectonic publish (compile + upload
// + republish). Run locally (needs Tectonic). Worksheet id is shown on the editor.
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
const c = w.content;
if (!c || c.format !== "tex") { console.error("This worksheet isn't a LaTeX-form worksheet (structured/MTH1W ones use the in-browser 'Save & Regenerate PDF' button)."); process.exit(1); }
const { data: course } = await db.from("courses").select("code").eq("id", w.course_id).single();
if (!course) { console.error("Course not found."); process.exit(1); }

const slug = course.code.toLowerCase();
const dir = path.resolve("scripts", `${slug}-worksheets`);
const build = path.join(dir, "build.mjs");
const pub = path.resolve("scripts", `${slug}-worksheet-publish.mjs`);
if (!fs.existsSync(build) || !fs.existsSync(pub)) { console.error(`Missing ${slug}-worksheets/build.mjs or ${slug}-worksheet-publish.mjs.`); process.exit(1); }

// Reconstruct the worksheet object build.mjs expects (learn now carried inline).
const ws = { code: w.code, title: c.title ?? "", unit: c.unit ?? "", intro: c.intro ?? "", ideas: c.ideas ?? [], learn: c.learn ?? [], examples: c.examples ?? [], questions: c.questions ?? [], answers: c.answers ?? [] };
const tmp = path.join(dir, "content", "_rebuild.mjs");
fs.mkdirSync(path.dirname(tmp), { recursive: true });
fs.writeFileSync(tmp, "export default " + JSON.stringify([ws]), "utf8");
try {
  console.log(`Generating ${course.code} ${w.code}.tex from fields…`);
  execFileSync("node", [build, tmp], { stdio: "inherit" });
  console.log(`Compiling with Tectonic + publishing…\n`);
  execFileSync("node", [pub, w.code], { stdio: "inherit" });
  console.log(`\nDone — ${course.code} ${w.code} rebuilt and republished.`);
} finally {
  fs.rmSync(tmp, { force: true });
}
