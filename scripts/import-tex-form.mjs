// Import each LaTeX course's STRUCTURED worksheet content (intro/ideas/learn/
// examples/questions/answers) from its content modules + lessons.mjs into
// worksheets.content, so it can be edited with the MTH1W-style form and
// regenerated faithfully. Idempotent.  node scripts/import-tex-form.mjs [--dry]
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
const DRY = process.argv.includes("--dry");
const S = path.resolve("scripts");
const dirs = fs.readdirSync(S).filter((d) => /-worksheets$/.test(d) && fs.existsSync(path.join(S, d, "build.mjs")) && fs.existsSync(path.join(S, d, "content")));

const env = {}; for (const l of fs.readFileSync(".env.local","utf8").split("\n")){const m=l.match(/^([A-Z0-9_]+)=(.*)$/);if(m)env[m[1]]=m[2].trim();}
const { createClient } = await import("@supabase/supabase-js");
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth:{persistSession:false}});

let grand = 0, sample = null;
for (const dir of dirs) {
  const code = dir.replace(/-worksheets$/, "").toUpperCase();
  const { data: course } = await db.from("courses").select("id").eq("code", code).maybeSingle();
  if (!course) { console.log(`· ${code}: no course row`); continue; }
  let LEARN = {};
  try { LEARN = (await import(pathToFileURL(path.join(S, dir, "lessons.mjs")).href)).LEARN ?? {}; } catch {}
  const units = fs.readdirSync(path.join(S, dir, "content")).filter((f) => f.endsWith(".mjs")).sort();
  let n = 0;
  for (const uf of units) {
    let mod; try { mod = (await import(pathToFileURL(path.join(S, dir, "content", uf)).href)).default; } catch (e) { console.log(`  ! ${code}/${uf}: ${e.message}`); continue; }
    for (const w of mod) {
      const content = {
        format: "tex",
        title: w.title ?? "", unit: w.unit ?? "", intro: w.intro ?? "",
        ideas: w.ideas ?? [],
        learn: LEARN[w.code] ?? [],
        examples: (w.examples ?? []).map((e) => ({ t: e.t ?? "", body: e.body ?? "" })),
        questions: (w.questions ?? []).map((q) => ({ ask: q.ask ?? "", grid: !!q.grid, ws: q.ws ?? "", challenge: !!q.challenge })),
        answers: w.answers ?? [],
      };
      if (!sample) sample = { code: w.code, course: code, ex: content.examples.length, q: content.questions.length, learn: content.learn.length, ideas: content.ideas.length };
      if (!DRY) { const { count } = await db.from("worksheets").update({ content }, { count: "exact" }).eq("course_id", course.id).eq("code", w.code); if (count) n++; }
      else n++;
    }
  }
  console.log(`${DRY?"[dry] ":""}${code}: ${n}`);
  grand += n;
}
console.log(`\n${DRY?"Would import":"Imported"} ${grand} worksheets.`);
console.log("sample:", JSON.stringify(sample));
