// MCR3U-FR chapitre 2 — questions à réponse construite (partie C des tests imprimés).
// Le chapitre 2 anglais (ancien pipeline ../mcr3u-ch2/) n'a AUCUNE question écrite : pas de written.mjs ni de
// written-data.mjs, et 0 ligne long_answer dans la banque LIVE anglaise pour 2.1–2.5. Le miroir français en a donc 0.
//   node scripts/mcr3u-fr-ch2/written.mjs            -> vérification (lit la banque anglaise, lecture seule)
//   node scripts/mcr3u-fr-ch2/written.mjs --apply    -> rien à insérer
import fs from "fs";
import { createClient } from "@supabase/supabase-js";
import { CID_EN } from "../mcr3u-fr/common.mjs";

export const WRITTEN = [];

const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const { count, error } = await db.from("bank_questions").select("id", { count: "exact", head: true }).eq("course_id", CID_EN).eq("kind", "long_answer").like("topic", "2.%");
if (error) throw error;
const enFiles = ["written.mjs", "written-data.mjs"].filter((f) => fs.existsSync(`scripts/mcr3u-ch2/${f}`));
console.log(`${WRITTEN.length} written questions (EN live ${count}, EN source files: ${enFiles.length ? enFiles.join(", ") : "none"})`);
if (count !== WRITTEN.length || enFiles.length) { console.log("FAIL: English chapter 2 now has written questions — mirror them here."); process.exit(1); }
console.log(process.argv.includes("--apply") ? "Nothing to insert." : "Dry run OK — nothing to insert.");
