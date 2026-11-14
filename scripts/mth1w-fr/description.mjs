// MTH1W-FR: sets the French course description (mirror of the English MTH1W one).
//   node scripts/mth1w-fr/description.mjs          -> dry run
//   node scripts/mth1w-fr/description.mjs --apply  -> writes
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import { CID_FR } from "./common.mjs";

const DESC = "Mathématiques de 9e année de l'Ontario (programme déstreamé), offert en français, conçu pour les élèves qui travaillent seuls ou en classe. Sept chapitres : les nombres (entiers, fractions, exposants, rapports, taux et pourcentages), l'algèbre, le codage, les relations linéaires, la géométrie et la mesure, les données et la modélisation, et la littératie financière. Des leçons interactives avec exemples résolus et graphiques, des fiches d'exercices imprimables et des devoirs de pratique avec rétroaction immédiate.";

const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const { data, error } = await db.from("courses").select("description").eq("id", CID_FR).single();
if (error) throw error;
console.log("now: ", data.description, "\nnew: ", DESC);
if (!process.argv.includes("--apply")) { console.log("Dry run."); process.exit(0); }
const r = await db.from("courses").update({ description: DESC }).eq("id", CID_FR);
if (r.error) throw r.error;
console.log("updated");
