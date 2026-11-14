// Charge les leçons françaises du chapitre 4 dans le cours MHF4U-FR.
//   node scripts/mhf4u-fr-ch4/lessons-publish.mjs --all           -> essai (aucune écriture)
//   node scripts/mhf4u-fr-ch4/lessons-publish.mjs --all --apply   -> écrit titre + blocs (ligne trouvée par l'ID fixe)
// Un ID absent est inséré (position = 400 + k) ; sinon titre et blocs sont mis à jour (ancienne ligne sauvegardée).
// Pas de mode --preview : les fichiers .lesson-preview masquent la base de données.
import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "fs";
import { pathToFileURL } from "url";
import { resolve, join } from "path";
import { CID_FR } from "../mhf4u-fr/common.mjs";

const APPLY = process.argv.includes("--apply");
const DIR = resolve("scripts/mhf4u-fr-ch4");
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = readdirSync(DIR).filter((f) => /^l4_\d+\.mjs$/.test(f)).map((f) => f.slice(0, -4)).sort();
if (!names.length) { console.log("Name the lessons to load (e.g. l4_1) or pass --all."); process.exit(1); }

const env = {};
for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const stamp = new Date().toISOString().replace(/[:.]/g, "-");
for (const n of names) {
  const M = await import(pathToFileURL(join(DIR, n.endsWith(".mjs") ? n : n + ".mjs")).href);
  const blocks = M.blocks();
  const k = Number(M.TITLE.split(" ")[0].split(".")[1]);
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
    const ins = await db.from("lessons").insert({ id: M.ID, course_id: CID_FR, title: M.TITLE, blocks, position: 400 + k, published: true });
    if (ins.error) throw ins.error;
    console.log(`  inserted at position ${400 + k}`);
  }
}
if (!APPLY) console.log("\nDry run only — re-run with --apply (database).");
