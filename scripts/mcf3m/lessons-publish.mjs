// Load MCF3M self-study lessons of one chapter into the lessons table.
//   node scripts/mcf3m/lessons-publish.mjs 1 --all             -> dry run
//   node scripts/mcf3m/lessons-publish.mjs 1 --all --preview   -> LOCAL ONLY: .lesson-preview/<id>.json (dev server)
//   node scripts/mcf3m/lessons-publish.mjs 1 --all --apply     -> writes title + blocks, matched by the lesson ID in plan.mjs
// Brand-new lessons are inserted at position 900; positions.mjs re-sorts every position afterwards.
// Existing blocks are backed up first (scripts/mcf3m/backup/).
import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "fs";
import { pathToFileURL } from "url";
import { resolve, join } from "path";
import { CID, lesson } from "./plan.mjs";

const APPLY = process.argv.includes("--apply");
const PREVIEW = process.argv.includes("--preview");
const CH = process.argv[2];
if (!/^[1-8]$/.test(CH ?? "")) { console.log("usage: lessons-publish.mjs <chapter> [l1_1 ...|--all] [--preview|--apply]"); process.exit(1); }
const DIR = resolve(`scripts/mcf3m/ch${CH}`);
let names = process.argv.slice(3).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = readdirSync(DIR).filter((f) => new RegExp(String.raw`^l${CH}_\d+\.mjs$`).test(f)).map((f) => f.slice(0, -4));
if (!names.length) { console.log("Name the lessons to load (e.g. l1_1) or pass --all."); process.exit(1); }

const env = {};
for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

mkdirSync(resolve("scripts/mcf3m/backup"), { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
for (const n of names) {
  const M = await import(pathToFileURL(join(DIR, n.endsWith(".mjs") ? n : n + ".mjs")).href);
  const L = lesson(M.TITLE.split(" ")[0]);
  if (L.full !== M.TITLE || (M.ID && M.ID !== L.id)) throw new Error(`${n}: title/id differ from plan.mjs (${L.full}, ${L.id})`);
  const blocks = M.blocks();
  const { data: row, error } = await db.from("lessons").select("id, title, blocks, position").eq("id", L.id).maybeSingle();
  if (error) throw error;
  console.log(`${APPLY ? "" : "[dry] "}${M.TITLE}: ${row ? `"${row.title}" ${row.blocks?.length ?? 0} blocks` : "NEW"} -> ${blocks.length} blocks (${blocks.filter((b) => b.type === "widget").map((b) => b.widget).join(", ")})`);
  if (PREVIEW) {
    mkdirSync(".lesson-preview", { recursive: true });
    writeFileSync(join(".lesson-preview", `${L.id}.json`), JSON.stringify({ title: M.TITLE, blocks, course_id: CID }));
    console.log(`  preview  ->  http://localhost:3001/lessons/${L.id}`);
    continue;
  }
  if (!APPLY) continue;
  if (row) {
    writeFileSync(resolve("scripts/mcf3m/backup", `lesson-${L.id}.${stamp}.json`), JSON.stringify(row, null, 1));
    const up = await db.from("lessons").update({ title: M.TITLE, blocks }).eq("id", row.id);
    if (up.error) throw up.error;
  } else {
    const ins = await db.from("lessons").insert({ id: L.id, course_id: CID, title: M.TITLE, blocks, position: 900, published: true });
    if (ins.error) throw ins.error;
    console.log("  inserted (run positions.mjs --apply)");
  }
}
if (!APPLY && !PREVIEW) console.log("\nDry run only — re-run with --preview (local dev server) or --apply (database).");
