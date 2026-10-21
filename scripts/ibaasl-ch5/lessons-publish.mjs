// Load the self-study chapter 5 lessons into the IB AA SL lessons table.
//   node scripts/ibaasl-ch5/lessons-publish.mjs --all             -> dry run
//   node scripts/ibaasl-ch5/lessons-publish.mjs --all --preview   -> LOCAL ONLY: writes .lesson-preview/<id>.json (dev server)
//   node scripts/ibaasl-ch5/lessons-publish.mjs --all --apply     -> writes title + blocks, matched by the fixed lesson ID
// Lessons are matched by ID (not title) because chapter 5 is renumbered. Brand-new lessons (no row with that ID)
// are inserted; renumber5.mjs sets every position afterwards. Existing blocks are backed up first.
import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "fs";
import { pathToFileURL } from "url";
import { resolve, join } from "path";

const APPLY = process.argv.includes("--apply");
const PREVIEW = process.argv.includes("--preview");
const DIR = resolve("scripts/ibaasl-ch5");
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = readdirSync(DIR).filter((f) => /^l5_\d+\.mjs$/.test(f)).map((f) => f.slice(0, -4));
if (!names.length) { console.log("Name the lessons to load (e.g. l5_1) or pass --all."); process.exit(1); }

const env = {};
for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const cid = (await db.from("courses").select("id").eq("code", "IBAASL").single()).data.id;

mkdirSync(join(DIR, "backup"), { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
for (const n of names) {
  const M = await import(pathToFileURL(join(DIR, n.endsWith(".mjs") ? n : n + ".mjs")).href);
  const blocks = M.blocks();
  const { data: row, error } = await db.from("lessons").select("id, title, blocks, position").eq("id", M.ID).maybeSingle();
  if (error) throw error;
  console.log(`${APPLY ? "" : "[dry] "}${M.TITLE}: ${row ? `"${row.title}" ${row.blocks?.length ?? 0} blocks` : "NEW"} -> ${blocks.length} blocks (${blocks.filter((b) => b.type === "widget").map((b) => b.widget).join(", ")})  id ${M.ID}`);
  if (PREVIEW) {
    mkdirSync(".lesson-preview", { recursive: true });
    writeFileSync(join(".lesson-preview", `${M.ID}.json`), JSON.stringify({ title: M.TITLE, blocks, course_id: cid }));
    console.log(`  preview  ->  http://localhost:3001/lessons/${M.ID}`);
    continue;
  }
  if (!APPLY) continue;
  if (row) {
    writeFileSync(join(DIR, "backup", `${M.ID}.${stamp}.json`), JSON.stringify(row, null, 1));
    const up = await db.from("lessons").update({ title: M.TITLE, blocks }).eq("id", row.id);
    if (up.error) throw up.error;
  } else {
    const ins = await db.from("lessons").insert({ id: M.ID, course_id: cid, title: M.TITLE, blocks, position: 900, published: true });
    if (ins.error) throw ins.error;
    console.log("  inserted (position set by renumber5.mjs)");
  }
}
if (!APPLY && !PREVIEW) console.log("\nDry run only — re-run with --preview (local dev server) or --apply (database).");
