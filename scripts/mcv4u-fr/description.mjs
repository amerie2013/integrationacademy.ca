// MCV4U-FR: sets the French course description (mirror of the English one) and publishes the course.
// Refuses to publish until all 51 French lessons are loaded.
//   node scripts/mcv4u-fr/description.mjs          -> dry run
//   node scripts/mcv4u-fr/description.mjs --apply  -> writes
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import { CID_FR } from "./common.mjs";

const DESC = "Calcul différentiel et vecteurs, 12e année, préparation à l'université (MCV4U), offert en français. Huit chapitres : taux de variation et limites, dérivées, esquisse de courbes et optimisation, dérivées des fonctions sinusoïdales, fonctions exponentielles et logarithmiques, vecteurs géométriques, vecteurs cartésiens avec le produit scalaire et le produit vectoriel, et droites et plans dans l'espace. Des graphiques interactifs animent les tangentes, les taux de variation et les vecteurs tout au long du cours. Des leçons interactives avec exemples résolus et graphiques, des fiches d'exercices imprimables et des devoirs de pratique avec rétroaction immédiate.";

const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const { count } = await db.from("lessons").select("id", { count: "exact", head: true }).eq("course_id", CID_FR);
console.log(`${count} French lessons loaded`);
if (count < 51) { console.log("Fewer than 51 lessons — not publishing."); process.exit(1); }
if (!process.argv.includes("--apply")) { console.log("new description:", DESC, "\nDry run."); process.exit(0); }
const r = await db.from("courses").update({ description: DESC, published: true }).eq("id", CID_FR);
if (r.error) throw r.error;
console.log("description set, course published");
