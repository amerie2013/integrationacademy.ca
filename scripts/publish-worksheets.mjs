// Bulk-publish generated worksheet PDFs into the app's "worksheets" table +
// storage bucket. Idempotent (upsert by course_id+code). Re-run after each new
// chapter is generated. Requires the 2026-06-17_worksheets.sql migration.
//
//   node scripts/publish-worksheets.mjs          # publish all generated subjects
//   node scripts/publish-worksheets.mjs 1.       # only codes starting with "1."
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import { createClient } from "@supabase/supabase-js";

const env = {};
for (const l of fs.readFileSync(".env.local", "utf8").split("\n")) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const only = process.argv[2];
const SRC = path.resolve("scripts/worksheets");
const PDF = path.resolve("scripts/_pdf");

const { data: course, error: cErr } = await db.from("courses").select("id").eq("code", "MTH1W").single();
if (cErr || !course) { console.error("MTH1W course not found:", cErr?.message); process.exit(1); }

const rank = (code) => { const [a, b] = code.split("."); return Number(a) * 100 + Number(b || 0); };
const files = fs.readdirSync(SRC).filter((f) => /^\d/.test(f) && f.endsWith(".mjs") && (!only || f.startsWith(only)))
  .map((f) => f.replace(/\.mjs$/, "")).sort((a, b) => rank(a) - rank(b));

if (!files.length) { console.log("No content files" + (only ? " matching " + only : "")); process.exit(0); }

async function up(code, kind) {
  const local = path.join(PDF, `${code}_${kind === "worksheet" ? "worksheet" : "compact"}.pdf`);
  if (!fs.existsSync(local)) return null;
  const remote = `${course.id}/${code}_${kind}.pdf`;
  const buf = fs.readFileSync(local);
  const { error } = await db.storage.from("worksheets").upload(remote, buf, { upsert: true, contentType: "application/pdf" });
  if (error) throw new Error(`upload ${remote}: ${error.message}`);
  return { url: db.storage.from("worksheets").getPublicUrl(remote).data.publicUrl, name: `${code}_${kind}.pdf` };
}

let ok = 0;
for (const code of files) {
  const mod = (await import(pathToFileURL(path.join(SRC, code + ".mjs")).href)).default;
  try {
    const ws = await up(code, "worksheet");
    const ans = await up(code, "answers"); // _compact.pdf
    if (!ws) { console.log(`· ${code} — no PDF generated yet, skipped`); continue; }
    const row = {
      course_id: course.id, code, title: mod.title, position: rank(code), published: true,
      worksheet_url: ws.url, worksheet_name: ws.name,
      answers_url: ans?.url ?? null, answers_name: ans?.name ?? null,
    };
    const { error } = await db.from("worksheets").upsert(row, { onConflict: "course_id,code" });
    if (error) throw new Error(error.message);
    console.log(`✓ ${code} ${mod.title}`);
    ok++;
  } catch (e) {
    console.error(`✗ ${code}: ${e.message}`);
    if (/relation .*worksheets.* does not exist|bucket/i.test(e.message)) {
      console.error("→ Run supabase/migrations/2026-06-17_worksheets.sql first.");
      process.exit(1);
    }
  }
}
console.log(`\nPublished ${ok} worksheet(s) to MTH1W.`);
