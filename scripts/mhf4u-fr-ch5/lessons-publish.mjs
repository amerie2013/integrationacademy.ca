// Charge les leçons du chapitre 5 dans le cours MHF4U-FR.
//   node scripts/mhf4u-fr-ch5/lessons-publish.mjs --all           -> essai à blanc (compare aussi avec la leçon anglaise)
//   node scripts/mhf4u-fr-ch5/lessons-publish.mjs --all --apply   -> écrit titre + blocs, ligne repérée par l'ID fixe
// Ligne absente : insertion (position = 5·100 + k). Ligne présente : mise à jour du titre et des blocs (sauvegarde avant).
// Pas de mode --preview (les fichiers de prévisualisation masquent la base de données).
import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "fs";
import { pathToFileURL } from "url";
import { resolve, join } from "path";
import { CID_FR } from "../mhf4u-fr/common.mjs";

const N = 5;
const APPLY = process.argv.includes("--apply");
const DIR = resolve(`scripts/mhf4u-fr-ch${N}`);
const EN = resolve(`scripts/mhf4u-ch${N}`);
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = readdirSync(DIR).filter((f) => new RegExp(`^l${N}_\\d+\\.mjs$`).test(f)).map((f) => f.slice(0, -4)).sort();
if (!names.length) { console.log(`Nomme les leçons à charger (ex. l${N}_1) ou passe --all.`); process.exit(1); }

const env = {};
for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const wl = (bs) => bs.filter((b) => b.type === "widget").map((b) => b.widget).join(", ");
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
let mismatch = 0;
for (const n of names) {
  const file = n.endsWith(".mjs") ? n : n + ".mjs";
  const M = await import(pathToFileURL(join(DIR, file)).href);
  const E = await import(pathToFileURL(join(EN, file)).href);
  const blocks = M.blocks(), eb = E.blocks();
  const same = blocks.length === eb.length && wl(blocks) === wl(eb) && blocks.every((b, i) => b.type === eb[i].type);
  if (!same) mismatch++;
  const k = Number(file.match(/_(\d+)\.mjs$/)[1]);
  const { data: row, error } = await db.from("lessons").select("id, title, blocks, position, course_id").eq("id", M.ID).maybeSingle();
  if (error) throw error;
  console.log(`${APPLY ? "" : "[essai] "}${M.TITLE}: ${row ? `"${row.title}" ${row.blocks?.length ?? 0} blocs` : "NOUVELLE"} -> ${blocks.length} blocs (${wl(blocks)})  id ${M.ID}`);
  console.log(`   EN ${E.TITLE}: ${eb.length} blocs (${wl(eb)})  ${same ? "✓ même structure" : "✗ STRUCTURE DIFFÉRENTE"}`);
  if (row && row.course_id !== CID_FR) { console.log("   ✗ cette ID appartient à un autre cours — arrêt"); process.exit(1); }
  if (!APPLY) continue;
  if (row) {
    mkdirSync(join(DIR, "backup"), { recursive: true });
    writeFileSync(join(DIR, "backup", `${M.ID}.${stamp}.json`), JSON.stringify(row, null, 1));
    const up = await db.from("lessons").update({ title: M.TITLE, blocks }).eq("id", row.id);
    if (up.error) throw up.error;
  } else {
    const ins = await db.from("lessons").insert({ id: M.ID, course_id: CID_FR, title: M.TITLE, blocks, position: N * 100 + k, published: true });
    if (ins.error) throw ins.error;
    console.log(`   insérée (position ${N * 100 + k})`);
  }
}
if (mismatch) { console.log(`\n${mismatch} leçon(s) avec une structure différente de l'anglais.`); process.exit(1); }
if (!APPLY) console.log("\nEssai à blanc seulement — relance avec --apply pour écrire dans la base de données.");
