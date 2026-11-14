// Load the French chapter 6 lessons into the MCV4U-FR course (CID_FR).
//   node scripts/mcv4u-fr-ch6/lessons-publish.mjs --all            -> dry run (compares block count + widget list with the LIVE English lesson)
//   node scripts/mcv4u-fr-ch6/lessons-publish.mjs --all --apply    -> writes title + blocks, matched by the fixed French lesson ID
// New IDs are inserted at position N·100 + k; existing rows get title + blocks updated (backed up first).
// No --preview mode: preview files would shadow the database.
import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "fs";
import { pathToFileURL } from "url";
import { resolve, join } from "path";
import { CID_FR } from "../mcv4u-fr/common.mjs";

const APPLY = process.argv.includes("--apply");
const DIR = resolve("scripts/mcv4u-fr-ch6");
const EN = resolve("scripts/mcv4u-ch6");
const CH = 6;
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = readdirSync(DIR).filter((f) => /^l6_\d+\.mjs$/.test(f)).map((f) => f.slice(0, -4));
if (!names.length) { console.log("Name the lessons to load (e.g. l6_1) or pass --all."); process.exit(1); }

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
  // source of truth = the LIVE English lesson (read only)
  const { data: live, error: le } = await db.from("lessons").select("blocks").eq("id", E.ID).maybeSingle();
  if (le) throw le;
  const fr = sig(blocks), en = live ? sig(live.blocks) : `(no live row) ${sig(E.blocks())}`;
  const same = live && fr === en;
  if (!same) mismatch++;
  const { data: row, error } = await db.from("lessons").select("id, title, blocks, position, course_id").eq("id", M.ID).maybeSingle();
  if (error) throw error;
  if (row && row.course_id !== CID_FR) throw new Error(`${M.ID} belongs to another course`);
  console.log(`${APPLY ? "" : "[dry] "}${M.TITLE}: ${row ? `"${row.title}" ${row.blocks?.length ?? 0} blocks` : "NEW"} -> ${fr}  id ${M.ID}`);
  console.log(`      EN live ${en}  ${same ? "= same structure" : "!! STRUCTURE DIFFERS"}`);
  if (!APPLY) continue;
  if (row) {
    writeFileSync(join(DIR, "backup", `${M.ID}.${stamp}.json`), JSON.stringify(row, null, 1));
    const up = await db.from("lessons").update({ title: M.TITLE, blocks }).eq("id", row.id);
    if (up.error) throw up.error;
  } else {
    const ins = await db.from("lessons").insert({ id: M.ID, course_id: CID_FR, title: M.TITLE, blocks, position: CH * 100 + k, published: true });
    if (ins.error) throw ins.error;
    console.log(`  inserted at position ${CH * 100 + k}`);
  }
}
console.log(mismatch ? `\n${mismatch} lesson(s) differ in structure from the live English lessons` : "\nEvery lesson matches the live English block count and widget list.");
if (!APPLY) console.log("Dry run only — re-run with --apply to write to the MCV4U-FR course.");
