// Load the French chapter 3 lessons into the MCR3U-FR course (CID_FR).
//   node scripts/mcr3u-fr-ch3/lessons-publish.mjs --all            -> dry run (also compares block count + widget list with the LIVE English lesson)
//   node scripts/mcr3u-fr-ch3/lessons-publish.mjs --all --apply    -> writes title + blocks, matched by the fixed French lesson ID
// New IDs are inserted at position 3·100 + k; existing rows get title + blocks updated (backed up first).
// No --preview mode: preview files would shadow the database.
import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "fs";
import { pathToFileURL } from "url";
import { resolve, join } from "path";
import { CID_FR } from "../mcr3u-fr/common.mjs";

const APPLY = process.argv.includes("--apply");
const DIR = resolve("scripts/mcr3u-fr-ch3");
const EN = resolve("scripts/mcr3u-ch3");
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = readdirSync(DIR).filter((f) => /^l3_\d+\.mjs$/.test(f)).map((f) => f.slice(0, -4));
if (!names.length) { console.log("Name the lessons to load (e.g. l3_1) or pass --all."); process.exit(1); }

const env = {};
for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const sig = (blocks) => `${blocks.length} blocks (${blocks.filter((b) => b.type === "widget").map((b) => b.widget).join(", ")})`;
let mismatch = 0;
if (APPLY) mkdirSync(join(DIR, "backup"), { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
for (const n of names) {
  const base = n.endsWith(".mjs") ? n : n + ".mjs";
  const M = await import(pathToFileURL(join(DIR, base)).href);
  const E = await import(pathToFileURL(join(EN, base)).href);
  const blocks = M.blocks();
  const k = Number(M.TITLE.split(" ")[0].split(".")[1]);
  // compare with the LIVE English lesson (source of truth), falling back to the English source if no row
  const { data: enRow } = await db.from("lessons").select("blocks").eq("id", E.ID).maybeSingle();
  const fr = sig(blocks), en = sig(enRow?.blocks ?? E.blocks());
  const same = fr === en;
  if (!same) mismatch++;
  const { data: row, error } = await db.from("lessons").select("id, title, blocks, position, course_id").eq("id", M.ID).maybeSingle();
  if (error) throw error;
  if (row && row.course_id !== CID_FR) throw new Error(`${M.ID} belongs to another course`);
  console.log(`${APPLY ? "" : "[dry] "}${M.TITLE}: ${row ? `"${row.title}" ${row.blocks?.length ?? 0} blocks` : "NEW"} -> ${fr}  id ${M.ID}`);
  console.log(`      EN ${enRow ? "live" : "source"} ${en}  ${same ? "= same structure" : "!! STRUCTURE DIFFERS"}`);
  if (!APPLY) continue;
  if (row) {
    writeFileSync(join(DIR, "backup", `${M.ID}.${stamp}.json`), JSON.stringify(row, null, 1));
    const up = await db.from("lessons").update({ title: M.TITLE, blocks }).eq("id", row.id);
    if (up.error) throw up.error;
  } else {
    const ins = await db.from("lessons").insert({ id: M.ID, course_id: CID_FR, title: M.TITLE, blocks, position: 3 * 100 + k, published: true });
    if (ins.error) throw ins.error;
    console.log(`  inserted at position ${300 + k}`);
  }
}
console.log(mismatch ? `\n${mismatch} lesson(s) differ in structure from English` : "\nEvery lesson matches the English block count and widget list.");
if (!APPLY) console.log("Dry run only — re-run with --apply to write to the MCR3U-FR course.");
