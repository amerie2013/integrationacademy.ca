// Charge les leçons françaises du chapitre 6 dans le cours MHF4U-FR (CID_FR).
//   node scripts/mhf4u-fr-ch6/lessons-publish.mjs --all           -> essai à blanc (lecture seule) + comparaison avec l'anglais
//   node scripts/mhf4u-fr-ch6/lessons-publish.mjs --all --apply   -> écrit titre + blocs, rangée trouvée par l'ID fixe
// Les leçons sont trouvées par ID (lessonId(6, k)). Si l'ID n'existe pas encore, la rangée est insérée à la position
// 6·100 + k. Pas de mode --preview (les fichiers .lesson-preview masqueraient la base de données).
import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "fs";
import { pathToFileURL } from "url";
import { resolve, join } from "path";
import { CID_FR } from "../mhf4u-fr/common.mjs";

const APPLY = process.argv.includes("--apply");
if (process.argv.includes("--preview")) { console.log("Pas de --preview pour le cours français."); process.exit(1); }
const DIR = resolve("scripts/mhf4u-fr-ch6");
const EN = resolve("scripts/mhf4u-ch6");
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = readdirSync(DIR).filter((f) => /^l6_\d+\.mjs$/.test(f)).map((f) => f.slice(0, -4)).sort();
if (!names.length) { console.log("Nomme les leçons à charger (ex. l6_1) ou passe --all."); process.exit(1); }

const env = {};
for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

if (APPLY) mkdirSync(join(DIR, "backup"), { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
let mismatch = 0;
const sig = (blocks) => `${blocks.length} blocs (${blocks.filter((b) => b.type === "widget").map((b) => `${b.widget}${b.props.init ? JSON.stringify(b.props.init) : ""}`).join(", ")})`;
for (const n of names) {
  const file = n.endsWith(".mjs") ? n : n + ".mjs";
  const M = await import(pathToFileURL(join(DIR, file)).href);
  const E = await import(pathToFileURL(join(EN, file)).href);
  const blocks = M.blocks();
  const fr = sig(blocks), en = sig(E.blocks());
  if (fr !== en) { mismatch++; console.log(`  ÉCART avec l'anglais : FR ${fr} / EN ${en}`); }
  const k = Number(file.match(/^l6_(\d+)/)[1]);
  const { data: row, error } = await db.from("lessons").select("id, title, blocks, position, course_id").eq("id", M.ID).maybeSingle();
  if (error) throw error;
  if (row && row.course_id !== CID_FR) throw new Error(`${M.ID} appartient à un autre cours`);
  console.log(`${APPLY ? "" : "[essai] "}${M.TITLE}: ${row ? `"${row.title}" ${row.blocks?.length ?? 0} blocs` : "NOUVELLE"} -> ${fr}  | EN ${en}  id ${M.ID}`);
  if (!APPLY) continue;
  if (row) {
    writeFileSync(join(DIR, "backup", `${M.ID}.${stamp}.json`), JSON.stringify(row, null, 1));
    const up = await db.from("lessons").update({ title: M.TITLE, blocks }).eq("id", row.id);
    if (up.error) throw up.error;
  } else {
    const ins = await db.from("lessons").insert({ id: M.ID, course_id: CID_FR, title: M.TITLE, blocks, position: 600 + k, published: true });
    if (ins.error) throw ins.error;
    console.log(`  insérée à la position ${600 + k}`);
  }
}
console.log(mismatch ? `\n${mismatch} leçon(s) ne correspondent pas à l'anglais` : "\nToutes les leçons ont le même nombre de blocs et les mêmes widgets que l'anglais.");
if (!APPLY) console.log("Essai à blanc seulement — relance avec --apply pour écrire dans la base de données.");
process.exitCode = mismatch ? 1 : 0;
