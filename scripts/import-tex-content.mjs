// Store each LaTeX course's worksheet .tex source in worksheets.content = { tex }
// so it can be edited in-browser. Matches scripts/<course>-worksheets/<code>.tex
// to the worksheet row by course code + code. Idempotent.
//   node scripts/import-tex-content.mjs --dry   # preview
import fs from "fs";
import path from "path";
const DRY = process.argv.includes("--dry");
const SCRIPTS = path.resolve("scripts");
const dirs = fs.readdirSync(SCRIPTS).filter((d) => /-worksheets$/.test(d) && fs.statSync(path.join(SCRIPTS, d)).isDirectory());

const env = {}; for (const l of fs.readFileSync(".env.local","utf8").split("\n")){const m=l.match(/^([A-Z0-9_]+)=(.*)$/);if(m)env[m[1]]=m[2].trim();}
const { createClient } = await import("@supabase/supabase-js");
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth:{persistSession:false}});

let grand = 0;
for (const dir of dirs) {
  const code = dir.replace(/-worksheets$/, "").toUpperCase();       // mdm4u-worksheets -> MDM4U
  const { data: course } = await db.from("courses").select("id").eq("code", code).maybeSingle();
  if (!course) { console.log(`· ${code}: no course row, skipped`); continue; }
  const texFiles = fs.readdirSync(path.join(SCRIPTS, dir)).filter((f) => /^\d[\d.]*\.tex$/.test(f)).sort();
  if (!texFiles.length) { console.log(`· ${code}: no .tex files`); continue; }
  let n = 0, miss = 0;
  for (const f of texFiles) {
    const wcode = f.replace(/\.tex$/, "");
    const tex = fs.readFileSync(path.join(SCRIPTS, dir, f), "utf8");
    if (DRY) { n++; continue; }
    const { error, count } = await db.from("worksheets").update({ content: { tex } }, { count: "exact" }).eq("course_id", course.id).eq("code", wcode);
    if (error) { console.log(`  ✗ ${code} ${wcode}: ${error.message}`); }
    else if (count) n++; else miss++;
  }
  console.log(`${DRY ? "[dry] " : ""}${code}: ${n} worksheets${miss ? `, ${miss} .tex had no matching row` : ""}`);
  grand += n;
}
console.log(`\n${DRY ? "Would import" : "Imported"} .tex for ${grand} worksheets across ${dirs.length} course dirs.`);
