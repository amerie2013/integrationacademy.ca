// MCR3U-FR: sets the French course description (mirror of the English one) and publishes the course.
// Refuses to publish until all 60 French lessons are loaded.
//   node scripts/mcr3u-fr/description.mjs          -> dry run
//   node scripts/mcr3u-fr/description.mjs --apply  -> writes
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import { CID_FR } from "./common.mjs";

const DESC = "Fonctions, 11e année, préparation à l'université (MCR3U), offert en français; préalable aux cours Fonctions avancées et Calcul différentiel et vecteurs. Huit chapitres : caractéristiques des fonctions, expressions algébriques, fonctions du second degré, fonctions exponentielles, rapports trigonométriques et lois des sinus et des cosinus, fonctions sinusoïdales, suites et séries, et mathématiques financières. Des leçons interactives avec exemples résolus et graphiques, des fiches d'exercices imprimables et des devoirs de pratique avec rétroaction immédiate.";

const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const { count } = await db.from("lessons").select("id", { count: "exact", head: true }).eq("course_id", CID_FR);
console.log(`${count} French lessons loaded`);
if (count < 60) { console.log("Fewer than 60 lessons — not publishing."); process.exit(1); }
if (!process.argv.includes("--apply")) { console.log("new description:", DESC, "\nDry run."); process.exit(0); }
const r = await db.from("courses").update({ description: DESC, published: true }).eq("id", CID_FR);
if (r.error) throw r.error;
console.log("description set, course published");
