// MCR3U-FR chapitre 6 — devoirs.
//   node scripts/mcr3u-fr-ch6/asg/publish.mjs           -> vérification seulement
//   node scripts/mcr3u-fr-ch6/asg/publish.mjs --apply   -> téléverse les figures (clés mcr3u-fr-…) et insère/met à jour les devoirs
import { ASSIGNMENTS } from "./assignments.mjs";
import { ASSIGNMENTS as EN } from "../../mcr3u-ch6/asg/assignments.mjs";
import { runAsg } from "../../mcr3u-fr/asg-run.mjs";

await runAsg(6, ASSIGNMENTS, EN);
