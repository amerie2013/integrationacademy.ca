// Load the French chapter 2 lessons into the MTH1W-FR course (CID_FR).
//   node scripts/mth1w-fr-ch2/lessons-publish.mjs --all            -> dry run (compares block count + widget list with the LIVE English lesson)
//   node scripts/mth1w-fr-ch2/lessons-publish.mjs l2_1 l2_3        -> dry run for some lessons
//   node scripts/mth1w-fr-ch2/lessons-publish.mjs --all --apply    -> writes title + blocks, matched by the fixed French lesson ID
// New IDs are inserted at position 2·100 + k (published); existing rows get title + blocks updated (backed up first).
// No --preview mode: preview files would shadow the database.
import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "fs";
import { pathToFileURL } from "url";
import { resolve, join } from "path";
import { CID_FR, CID_EN, lessonId } from "../mth1w-fr/common.mjs";

const APPLY = process.argv.includes("--apply");
const DIR = resolve("scripts/mth1w-fr-ch2");
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = readdirSync(DIR).filter((f) => /^l2_\d+\.mjs$/.test(f)).map((f) => f.slice(0, -4)).sort();
if (!names.length) { console.log("Name the lessons to load (e.g. l2_1) or pass --all."); process.exit(1); }

const env = {};
for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

// live English chapter 2 lessons (read only), keyed by topic code "2.k"
const { data: enRows, error: enErr } = await db.from("lessons").select("title, blocks").eq("course_id", CID_EN).like("title", "2.%");
if (enErr) throw enErr;
const EN = Object.fromEntries(enRows.map((r) => [r.title.split(" ")[0], r]));

const sig = (blocks) => `${blocks.length} blocks (${blocks.filter((b) => b.type === "widget").map((b) => b.widget).join(", ")})`;
let mismatch = 0;
if (APPLY) mkdirSync(join(DIR, "backup"), { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
for (const n of names) {
  const M = await import(pathToFileURL(join(DIR, n.endsWith(".mjs") ? n : n + ".mjs")).href);
  const blocks = M.blocks();
  const code = M.TITLE.split(" ")[0];
  const k = Number(code.split(".")[1]);
  if (M.ID !== lessonId(2, k)) throw new Error(`${n}: ID ${M.ID} is not lessonId(2, ${k})`);
  const fr = sig(blocks), en = EN[code] ? sig(EN[code].blocks) : "MISSING";
  const same = fr === en;
  if (!same) mismatch++;
  const { data: row, error } = await db.from("lessons").select("id, title, blocks, position, course_id").eq("id", M.ID).maybeSingle();
  if (error) throw error;
  if (row && row.course_id !== CID_FR) throw new Error(`${M.ID} belongs to another course`);
  console.log(`${APPLY ? "" : "[dry] "}${M.TITLE}: ${row ? `"${row.title}" ${row.blocks?.length ?? 0} blocks` : "NEW"} -> FR ${fr}  id ${M.ID}`);
  console.log(`      EN live ${en}  ${same ? "= same structure" : "!! STRUCTURE DIFFERS"}`);
  if (!APPLY) continue;
  if (row) {
    writeFileSync(join(DIR, "backup", `${M.ID}.${stamp}.json`), JSON.stringify(row, null, 1));
    const up = await db.from("lessons").update({ title: M.TITLE, blocks }).eq("id", row.id);
    if (up.error) throw up.error;
  } else {
    const ins = await db.from("lessons").insert({ id: M.ID, course_id: CID_FR, title: M.TITLE, blocks, position: 2 * 100 + k, published: true });
    if (ins.error) throw ins.error;
    console.log(`  inserted at position ${200 + k}`);
  }
}
console.log(mismatch ? `\n${mismatch} lesson(s) differ in structure from the live English lessons` : "\nEvery lesson matches the live English block count and widget list.");
if (!APPLY) console.log("Dry run only — re-run with --apply to write to the MTH1W-FR course.");
