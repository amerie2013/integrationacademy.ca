// Load the self-study chapter 7 lessons into the MPM2D lessons table (blocks only).
//   node scripts/mpm2d-ch7/lessons-publish.mjs l7_1 l7_2      -> dry run: shows what would change
//   node scripts/mpm2d-ch7/lessons-publish.mjs l7_1 --apply   -> writes
//   node scripts/mpm2d-ch7/lessons-publish.mjs --all --apply  -> every chapter 7 lesson
//   node scripts/mpm2d-ch7/lessons-publish.mjs --all --preview -> LOCAL ONLY: writes .lesson-preview/<id>.json,
//        which the dev server (npm run dev) shows instead of the database copy. Nothing is written to the DB.
// Only lessons.blocks is updated, matched by exact title, so lesson ids, progress, class locks,
// bank topics, assignments and worksheets are untouched. Before writing, the current blocks are
// saved to v2/backup/<title>.<timestamp>.json so a lesson can be restored.
import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "fs";
import { pathToFileURL } from "url";
import { resolve, join } from "path";

const APPLY = process.argv.includes("--apply");
const PREVIEW = process.argv.includes("--preview");
const DIR = resolve("scripts/mpm2d-ch7");
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = readdirSync(DIR).filter((f) => /^l7_\d+\.mjs$/.test(f)).map((f) => f.slice(0, -4));
if (!names.length) { console.log("Name the lessons to load (e.g. l7_1) or pass --all."); process.exit(1); }

const env = {};
for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const cid = (await db.from("courses").select("id").eq("code", "MPM2D").single()).data.id;

mkdirSync(join(DIR, "backup"), { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
for (const n of names) {
  const M = await import(pathToFileURL(join(DIR, n.endsWith(".mjs") ? n : n + ".mjs")).href);
  const blocks = M.blocks();
  const { data: rows, error } = await db.from("lessons").select("id, title, blocks").eq("course_id", cid).eq("title", M.TITLE);
  if (error) throw error;
  if (rows.length === 0 && M.NEW) {
    // a brand-new lesson (e.g. the chapter review): staged locally under its fixed id, inserted on --apply
    console.log(`${APPLY ? "" : "[dry] "}${M.TITLE}: NEW lesson at position ${M.NEW.position} (${blocks.length} blocks)  id ${M.NEW.id}`);
    if (PREVIEW) {
      mkdirSync(".lesson-preview", { recursive: true });
      writeFileSync(join(".lesson-preview", `${M.NEW.id}.json`), JSON.stringify({ title: M.TITLE, blocks }));
      console.log(`  preview written  ->  http://localhost:3001/lessons/${M.NEW.id}`);
      continue;
    }
    if (!APPLY) continue;
    const { data: later } = await db.from("lessons").select("id, position").eq("course_id", cid).gte("position", M.NEW.position).order("position", { ascending: false });
    for (const l of later ?? []) { const r = await db.from("lessons").update({ position: l.position + 1 }).eq("id", l.id); if (r.error) throw r.error; }
    const ins = await db.from("lessons").insert({ id: M.NEW.id, course_id: cid, title: M.TITLE, blocks, position: M.NEW.position, published: true });
    if (ins.error) throw ins.error;
    console.log(`  inserted; ${later?.length ?? 0} later lessons moved down one position`);
    continue;
  }
  if (rows.length !== 1) { console.log(`SKIP ${M.TITLE}: found ${rows.length} lessons with that exact title`); continue; }
  const row = rows[0];
  console.log(`${APPLY ? "" : "[dry] "}${M.TITLE}: ${row.blocks?.length ?? 0} blocks -> ${blocks.length} blocks (${blocks.filter((b) => b.type === "widget").map((b) => b.widget).join(", ")})  lesson ${row.id}`);
  if (PREVIEW) {
    mkdirSync(".lesson-preview", { recursive: true });
    writeFileSync(join(".lesson-preview", `${row.id}.json`), JSON.stringify({ title: M.TITLE, blocks }));
    console.log(`  preview written: .lesson-preview/${row.id}.json  ->  http://localhost:3001/lessons/${row.id}`);
    continue;
  }
  if (!APPLY) continue;
  writeFileSync(join(DIR, "backup", `${M.TITLE.split(" ")[0]}.${stamp}.json`), JSON.stringify(row, null, 1));
  const up = await db.from("lessons").update({ blocks }).eq("id", row.id);
  if (up.error) throw up.error;
}
if (!APPLY && !PREVIEW) console.log("\nDry run only — re-run with --preview (local dev server) or --apply (database).");
