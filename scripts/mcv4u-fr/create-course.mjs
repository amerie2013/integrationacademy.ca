// MCV4U-FR: creates the French course row (unpublished) if it doesn't exist. Publish happens in description.mjs --apply.
//   node scripts/mcv4u-fr/create-course.mjs          -> dry run
//   node scripts/mcv4u-fr/create-course.mjs --apply  -> insert
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const ID = "4d435634-0000-4000-8000-00000000c0f1";
const { data: have } = await db.from("courses").select("id,code").or(`id.eq.${ID},code.eq.MCV4U-FR`);
if (have.length) { console.log("exists", have); process.exit(0); }
const { data: en } = await db.from("courses").select("teacher_id").eq("code", "MCV4U").single();
const row = { id: ID, teacher_id: en.teacher_id, code: "MCV4U-FR", title: "Calcul différentiel et vecteurs (MCV4U)", level: "12", language: "fr", published: false,
  description: "Calcul différentiel et vecteurs, 12e année, préparation à l'université (MCV4U), offert en français." };
console.log(row);
if (!process.argv.includes("--apply")) { console.log("Dry run."); process.exit(0); }
const r = await db.from("courses").insert(row); if (r.error) throw r.error; console.log("created");
