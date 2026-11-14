// Charge les leçons françaises du chapitre 4 dans le cours MTH1W-FR.
//   node scripts/mth1w-fr-ch4/lessons-publish.mjs --all           -> essai (aucune écriture)
//   node scripts/mth1w-fr-ch4/lessons-publish.mjs l4_1 --apply    -> écrit titre + blocs (ligne trouvée par l'ID fixe)
// Un ID absent est inséré (position = 400 + k, publié); sinon titre et blocs sont mis à jour (ancienne ligne sauvegardée).
// À côté de chaque leçon : le nombre de blocs et la liste des widgets de la leçon anglaise EN LIGNE (même position).
// Pas de mode --preview : les fichiers .lesson-preview masquent la base de données.
import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "fs";
import { pathToFileURL } from "url";
import { resolve, join } from "path";
import { CID_FR, CID_EN } from "../mth1w-fr/common.mjs";

const APPLY = process.argv.includes("--apply");
const DIR = resolve("scripts/mth1w-fr-ch4");
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = readdirSync(DIR).filter((f) => /^l4_\d+\.mjs$/.test(f)).map((f) => f.slice(0, -4)).sort((a, b) => Number(a.split("_")[1]) - Number(b.split("_")[1]));
if (!names.length) { console.log("Name the lessons to load (e.g. l4_1) or pass --all."); process.exit(1); }

const env = {};
for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

// leçons anglaises en ligne (lecture seule), repérées par leur numéro « 4.k »
const { data: enRows, error: enErr } = await db.from("lessons").select("title, blocks").eq("course_id", CID_EN).like("title", "4.%");
if (enErr) throw enErr;
const EN = new Map(enRows.map((r) => [r.title.split(" ")[0], r]));
const wl = (blocks) => blocks.filter((b) => b.type === "widget").map((b) => b.widget).join(", ");

let mismatch = 0;
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
for (const n of names) {
  const M = await import(pathToFileURL(join(DIR, n.endsWith(".mjs") ? n : n + ".mjs")).href);
  const blocks = M.blocks();
  const code = M.TITLE.split(" ")[0];
  const k = Number(code.split(".")[1]);
  const en = EN.get(code);
  const same = en && en.blocks.length === blocks.length && wl(en.blocks) === wl(blocks);
  if (!same) mismatch++;
  const { data: row, error } = await db.from("lessons").select("id, title, blocks, position, course_id").eq("id", M.ID).maybeSingle();
  if (error) throw error;
  if (row && row.course_id !== CID_FR) throw new Error(`${M.ID} belongs to another course`);
  console.log(`${APPLY ? "" : "[dry] "}${M.TITLE}: ${row ? `"${row.title}" ${row.blocks?.length ?? 0} blocks` : "NEW"} -> ${blocks.length} blocks (${wl(blocks)})  id ${M.ID}`);
  console.log(`      EN live: ${en ? `${en.blocks.length} blocks (${wl(en.blocks)})` : "MISSING"}  ${same ? "✓ same" : "✗ DIFFERENT"}`);
  if (!APPLY) continue;
  if (row) {
    mkdirSync(join(DIR, "backup"), { recursive: true });
    writeFileSync(join(DIR, "backup", `${M.ID}.${stamp}.json`), JSON.stringify(row, null, 1));
    const up = await db.from("lessons").update({ title: M.TITLE, blocks }).eq("id", row.id);
    if (up.error) throw up.error;
  } else {
    const ins = await db.from("lessons").insert({ id: M.ID, course_id: CID_FR, title: M.TITLE, blocks, position: 400 + k, published: true });
    if (ins.error) throw ins.error;
    console.log(`  inserted at position ${400 + k}`);
  }
}
console.log(mismatch ? `\n${mismatch} lesson(s) differ from the live English lesson` : "\nAll lessons match the live English block counts and widget lists.");
if (!APPLY) console.log("Dry run only — re-run with --apply (database).");
