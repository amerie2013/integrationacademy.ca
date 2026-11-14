// MCV4U-FR chapitre 7 — devoirs.
//   node scripts/mcv4u-fr-ch7/asg/publish.mjs           -> vérification seulement
//   node scripts/mcv4u-fr-ch7/asg/publish.mjs --apply   -> téléverse les figures (clés mcv4u-fr-…) et insère/met à jour les devoirs
import { ASSIGNMENTS } from "./assignments.mjs";
import { ASSIGNMENTS as EN } from "../../mcv4u-ch7/asg/assignments.mjs";
import { runAsg } from "../../mcv4u-fr/asg-run.mjs";

await runAsg(7, ASSIGNMENTS, EN);
