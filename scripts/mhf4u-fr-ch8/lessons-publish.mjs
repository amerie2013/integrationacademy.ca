// Charge les leçons du chapitre 8 (version française) dans le cours MHF4U-FR.
//   node scripts/mhf4u-fr-ch8/lessons-publish.mjs --all           -> essai à blanc (compare aussi avec l'anglais)
//   node scripts/mhf4u-fr-ch8/lessons-publish.mjs --all --apply   -> écrit titre + blocs, ligne repérée par l'ID fixe
// Pas de mode --preview (les fichiers .lesson-preview masquent la base de données).
// Ligne inexistante -> insertion à la position N·100 + k ; sinon mise à jour du titre et des blocs (copie de sauvegarde).
import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "fs";
import { pathToFileURL } from "url";
import { resolve, join } from "path";
import { CID_FR } from "../mhf4u-fr/common.mjs";

const APPLY = process.argv.includes("--apply");
const DIR = resolve("scripts/mhf4u-fr-ch8");
const EN_DIR = resolve("scripts/mhf4u-ch8");
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = readdirSync(DIR).filter((f) => /^l8_\d+\.mjs$/.test(f)).map((f) => f.slice(0, -4));
if (!names.length) { console.log("Nomme les leçons à charger (ex. l8_1) ou passe --all."); process.exit(1); }

const env = {};
for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const shape = (blocks) => `${blocks.length} blocks (${blocks.filter((b) => b.type === "widget" || b.type === "multigraph").map((b) => b.widget ?? b.type).join(", ")})`;
if (APPLY) mkdirSync(join(DIR, "backup"), { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
let mismatch = 0;
for (const n of names) {
  const file = n.endsWith(".mjs") ? n : n + ".mjs";
  const M = await import(pathToFileURL(join(DIR, file)).href);
  const E = await import(pathToFileURL(join(EN_DIR, file)).href);
  const blocks = M.blocks(), enBlocks = E.blocks();
  const same = shape(blocks) === shape(enBlocks) && blocks.every((b, i) => b.type === enBlocks[i].type && (b.widget ?? "") === (enBlocks[i].widget ?? ""));
  if (!same) mismatch++;
  const { data: row, error } = await db.from("lessons").select("id, title, blocks, position, course_id").eq("id", M.ID).maybeSingle();
  if (error) throw error;
  if (row && row.course_id !== CID_FR) throw new Error(`${M.ID} appartient à un autre cours`);
  console.log(`${APPLY ? "" : "[dry] "}${M.TITLE}: ${row ? `"${row.title}" ${row.blocks?.length ?? 0} blocks` : "NEW"} -> FR ${shape(blocks)} | EN ${shape(enBlocks)} ${same ? "✓" : "✗ MISMATCH"}  id ${M.ID}`);
  if (!APPLY) continue;
  if (row) {
    writeFileSync(join(DIR, "backup", `${M.ID}.${stamp}.json`), JSON.stringify(row, null, 1));
    const up = await db.from("lessons").update({ title: M.TITLE, blocks }).eq("id", row.id);
    if (up.error) throw up.error;
  } else {
    const k = Number(M.TITLE.split(" ")[0].split(".")[1]);
    const ins = await db.from("lessons").insert({ id: M.ID, course_id: CID_FR, title: M.TITLE, blocks, position: 8 * 100 + k, published: true });
    if (ins.error) throw ins.error;
    console.log(`  inserted at position ${8 * 100 + k}`);
  }
}
if (mismatch) { console.log(`\n${mismatch} lesson(s) differ in structure from the English version.`); process.exit(1); }
if (!APPLY) console.log("\nDry run only — re-run with --apply to write to the database.");
