// MTH1W-FR chapitre 7 — charge les leçons françaises dans le cours MTH1W-FR (CID_FR).
//   node scripts/mth1w-fr-ch7/lessons-publish.mjs --all            -> dry run (aucune écriture)
//   node scripts/mth1w-fr-ch7/lessons-publish.mjs l7_1 l7_2        -> dry run pour ces leçons
//   node scripts/mth1w-fr-ch7/lessons-publish.mjs --all --apply    -> insère (ID nouveau) ou met à jour titre + blocs
// Les leçons sont repérées par leur ID fixe (lessonId(7, k)); position = 700 + k. Pas de mode --preview.
// Le dry run affiche aussi le nombre de blocs et les widgets de la leçon anglaise EN LIGNE correspondante.
import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "fs";
import { pathToFileURL } from "url";
import { resolve, join } from "path";
import { CID_FR, CID_EN } from "../mth1w-fr/common.mjs";

const APPLY = process.argv.includes("--apply");
const DIR = resolve("scripts/mth1w-fr-ch7");
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = readdirSync(DIR).filter((f) => /^l7_\d+\.mjs$/.test(f)).map((f) => f.slice(0, -4)).sort();
if (!names.length) { console.log("Nomme les leçons à charger (p. ex. l7_1) ou passe --all."); process.exit(1); }

const env = {};
for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const { data: enLessons, error: enErr } = await db.from("lessons").select("title, blocks").eq("course_id", CID_EN).like("title", "7.%");
if (enErr) throw enErr;
const wl = (blocks) => blocks.filter((b) => b.type === "widget").map((b) => b.widget).join(", ");

let mismatch = 0;
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
for (const n of names) {
  const M = await import(pathToFileURL(join(DIR, n.endsWith(".mjs") ? n : n + ".mjs")).href);
  const blocks = M.blocks();
  const k = Number(n.match(/l7_(\d+)/)[1]);
  const position = 7 * 100 + k;
  const en = enLessons.find((l) => l.title.startsWith(`7.${k} `));
  const { data: row, error } = await db.from("lessons").select("id, title, blocks, position, course_id").eq("id", M.ID).maybeSingle();
  if (error) throw error;
  if (row && row.course_id !== CID_FR) throw new Error(`${M.ID} appartient à un autre cours (${row.course_id})`);
  console.log(`${APPLY ? "" : "[dry] "}${M.TITLE}: ${row ? `"${row.title}" ${row.blocks?.length ?? 0} blocs` : "NOUVELLE"} -> ${blocks.length} blocs (${wl(blocks)})  id ${M.ID}  pos ${position}`);
  if (en) {
    const same = en.blocks.length === blocks.length && wl(en.blocks) === wl(blocks);
    if (!same) mismatch++;
    console.log(`   EN en ligne « ${en.title} » : ${en.blocks.length} blocs (${wl(en.blocks)})  ${same ? "OK" : "DIFFÉRENT"}`);
  } else console.log("   (aucune leçon anglaise en ligne trouvée)");
  if (!APPLY) continue;
  if (row) {
    mkdirSync(join(DIR, "backup"), { recursive: true });
    writeFileSync(join(DIR, "backup", `${M.ID}.${stamp}.json`), JSON.stringify(row, null, 1));
    const up = await db.from("lessons").update({ title: M.TITLE, blocks }).eq("id", row.id);
    if (up.error) throw up.error;
  } else {
    const ins = await db.from("lessons").insert({ id: M.ID, course_id: CID_FR, title: M.TITLE, blocks, position, published: true });
    if (ins.error) throw ins.error;
    console.log(`  insérée à la position ${position}`);
  }
}
console.log(mismatch ? `\n${mismatch} leçon(s) diffèrent de l'anglais en ligne` : "\nToutes les leçons correspondent à l'anglais en ligne (blocs + widgets).");
if (!APPLY) console.log("Dry run seulement — relance avec --apply pour écrire dans le cours MTH1W-FR.");
