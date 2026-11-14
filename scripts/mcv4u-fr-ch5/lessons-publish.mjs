// Charge les leçons françaises du chapitre 5 dans le cours MCV4U-FR (CID_FR).
//   node scripts/mcv4u-fr-ch5/lessons-publish.mjs --all           -> essai à blanc (lecture seule) + comparaison avec l'anglais EN LIGNE
//   node scripts/mcv4u-fr-ch5/lessons-publish.mjs --all --apply   -> écrit titre + blocs, rangée trouvée par l'ID fixe
// Les leçons sont trouvées par ID (lessonId(5, k)). Si l'ID n'existe pas encore, la rangée est insérée à la position
// 5·100 + k (publiée). Pas de mode --preview (les fichiers .lesson-preview masqueraient la base de données).
// La comparaison se fait avec la leçon anglaise EN LIGNE (rangée lue par l'ID du fichier anglais, jamais modifiée).
import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "fs";
import { pathToFileURL } from "url";
import { resolve, join } from "path";
import { CID_FR, CID_EN, lessonId } from "../mcv4u-fr/common.mjs";

const APPLY = process.argv.includes("--apply");
if (process.argv.includes("--preview")) { console.log("Pas de --preview pour le cours français."); process.exit(1); }
const DIR = resolve("scripts/mcv4u-fr-ch5");
const EN = resolve("scripts/mcv4u-ch5");
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = readdirSync(DIR).filter((f) => /^l5_\d+\.mjs$/.test(f)).map((f) => f.slice(0, -4)).sort();
if (!names.length) { console.log("Nomme les leçons à charger (ex. l5_1) ou passe --all."); process.exit(1); }

const env = {};
for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

if (APPLY) mkdirSync(join(DIR, "backup"), { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
let mismatch = 0;
// clés triées : la base (jsonb) ne conserve pas l'ordre des clés
const canon = (o) => JSON.stringify(Object.fromEntries(Object.entries(o).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))));
const sig = (blocks) => `${blocks.length} blocs (${blocks.filter((b) => b.type === "widget").map((b) => `${b.widget}${b.props?.init ? canon(b.props.init) : ""}`).join(", ")})`;
for (const n of names) {
  const file = n.endsWith(".mjs") ? n : n + ".mjs";
  const k = Number(file.match(/^l5_(\d+)/)[1]);
  const M = await import(pathToFileURL(join(DIR, file)).href);
  const E = await import(pathToFileURL(join(EN, file)).href);
  if (M.ID !== lessonId(5, k)) throw new Error(`${file}: ID ${M.ID} ≠ lessonId(5, ${k})`);
  const blocks = M.blocks();
  const { data: live, error: e0 } = await db.from("lessons").select("blocks, course_id").eq("id", E.ID).maybeSingle();
  if (e0) throw e0;
  if (!live || live.course_id !== CID_EN) throw new Error(`leçon anglaise ${E.ID} introuvable dans le cours anglais`);
  const fr = sig(blocks), en = sig(live.blocks);
  if (fr !== en) { mismatch++; console.log(`  ÉCART avec l'anglais en ligne : FR ${fr} / EN ${en}`); }
  const { data: row, error } = await db.from("lessons").select("id, title, blocks, position, course_id").eq("id", M.ID).maybeSingle();
  if (error) throw error;
  if (row && row.course_id !== CID_FR) throw new Error(`${M.ID} appartient à un autre cours`);
  console.log(`${APPLY ? "" : "[essai] "}${M.TITLE}: ${row ? `"${row.title}" ${row.blocks?.length ?? 0} blocs` : "NOUVELLE"} -> FR ${fr}  | EN en ligne ${en}  id ${M.ID}`);
  if (!APPLY) continue;
  if (row) {
    writeFileSync(join(DIR, "backup", `${M.ID}.${stamp}.json`), JSON.stringify(row, null, 1));
    const up = await db.from("lessons").update({ title: M.TITLE, blocks }).eq("id", row.id);
    if (up.error) throw up.error;
  } else {
    const ins = await db.from("lessons").insert({ id: M.ID, course_id: CID_FR, title: M.TITLE, blocks, position: 500 + k, published: true });
    if (ins.error) throw ins.error;
    console.log(`  insérée à la position ${500 + k}`);
  }
}
console.log(mismatch ? `\n${mismatch} leçon(s) ne correspondent pas à l'anglais` : "\nToutes les leçons ont le même nombre de blocs et les mêmes widgets que l'anglais en ligne.");
if (!APPLY) console.log("Essai à blanc seulement — relance avec --apply pour écrire dans la base de données.");
process.exitCode = mismatch ? 1 : 0;
