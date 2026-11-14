// Charge les leçons françaises du chapitre 3 dans le cours MHF4U-FR.
//   node scripts/mhf4u-fr-ch3/lessons-publish.mjs --all            -> essai à blanc (lecture seule)
//   node scripts/mhf4u-fr-ch3/lessons-publish.mjs --all --apply    -> écrit titre + blocs, ligne repérée par l'ID fixe lessonId(3, k)
// Nouvelle ID -> insertion (position = 300 + k); sinon mise à jour du titre et des blocs (copie de sauvegarde d'abord).
// Pas de mode --preview (les fichiers .lesson-preview masquent la base de données).
import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "fs";
import { pathToFileURL } from "url";
import { resolve, join } from "path";
import { CID_FR } from "../mhf4u-fr/common.mjs";

const APPLY = process.argv.includes("--apply");
const DIR = resolve("scripts/mhf4u-fr-ch3");
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = readdirSync(DIR).filter((f) => /^l3_\d+\.mjs$/.test(f)).map((f) => f.slice(0, -4)).sort();
if (!names.length) { console.log("Name the lessons to load (e.g. l3_1) or pass --all."); process.exit(1); }

const env = {};
for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const course = (await db.from("courses").select("id, code").eq("id", CID_FR).single()).data;
if (!course || course.code !== "MHF4U-FR") throw new Error(`course ${CID_FR} is not MHF4U-FR`);

const stamp = new Date().toISOString().replace(/[:.]/g, "-");
for (const n of names) {
  const M = await import(pathToFileURL(join(DIR, n.endsWith(".mjs") ? n : n + ".mjs")).href);
  const k = Number(n.match(/l3_(\d+)/)[1]);
  const blocks = M.blocks();
  const { data: row, error } = await db.from("lessons").select("id, title, blocks, position, course_id").eq("id", M.ID).maybeSingle();
  if (error) throw error;
  if (row && row.course_id !== CID_FR) throw new Error(`${M.ID} belongs to another course`);
  console.log(`${APPLY ? "" : "[dry] "}${M.TITLE}: ${row ? `"${row.title}" ${row.blocks?.length ?? 0} blocks` : "NEW"} -> ${blocks.length} blocks (${blocks.filter((b) => b.type === "widget").map((b) => b.widget).join(", ")})  id ${M.ID}`);
  if (!APPLY) continue;
  if (row) {
    mkdirSync(join(DIR, "backup"), { recursive: true });
    writeFileSync(join(DIR, "backup", `${M.ID}.${stamp}.json`), JSON.stringify(row, null, 1));
    const up = await db.from("lessons").update({ title: M.TITLE, blocks }).eq("id", row.id);
    if (up.error) throw up.error;
  } else {
    const ins = await db.from("lessons").insert({ id: M.ID, course_id: CID_FR, title: M.TITLE, blocks, position: 3 * 100 + k, published: true });
    if (ins.error) throw ins.error;
    console.log(`  inserted at position ${3 * 100 + k}`);
  }
}
if (!APPLY) console.log("\nEssai à blanc seulement — relancer avec --apply pour écrire dans la base de données.");
