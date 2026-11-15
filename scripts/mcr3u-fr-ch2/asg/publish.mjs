// MCR3U-FR chapitre 2 — devoirs.
//   node scripts/mcr3u-fr-ch2/asg/publish.mjs           -> vérification seulement (compare aussi la source anglaise aux devoirs LIVE)
//   node scripts/mcr3u-fr-ch2/asg/publish.mjs --apply   -> insère/met à jour les devoirs (id fixes asgId(2, k))
// L'anglais (ancien pipeline ../../mcr3u-ch2/t2_k.mjs) n'a pas de fichier asg/assignments.mjs : on construit la liste
// anglaise à partir de ASSIGNMENT.description (mêmes lignes que les devoirs LIVE), maths $…$ → \( … \) comme le français.
import fs from "fs";
import { createClient } from "@supabase/supabase-js";
import { ASSIGNMENTS, dollarsToParens } from "./assignments.mjs";
import { runAsg } from "../../mcr3u-fr/asg-run.mjs";
import { CID_EN } from "../../mcr3u-fr/common.mjs";

const EN = [];
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
for (let k = 1; k <= 5; k++) {
  const { ASSIGNMENT: A } = await import(`../../mcr3u-ch2/t2_${k}.mjs`);
  const { data: live } = await db.from("assignments").select("description").eq("course_id", CID_EN).eq("title", A.title);
  if (live?.length !== 1 || live[0].description !== A.description) { console.log(`FAIL: English source for 2.${k} differs from the LIVE assignment`); process.exit(1); }
  EN.push({ code: `2.${k}`, figs: {}, lines: A.description.split("\n").map(dollarsToParens) });
}
console.log("English source = LIVE for all 5 assignments.");
await runAsg(2, ASSIGNMENTS, EN);
