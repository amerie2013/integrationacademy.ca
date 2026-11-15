// MCR3U-FR chapitre 3 — questions à réponse construite. Données dans written-data.mjs.
//   node scripts/mcr3u-fr-ch3/written.mjs           -> essai à blanc (comparaison avec l'anglais)
//   node scripts/mcr3u-fr-ch3/written.mjs --apply   -> téléverse les figures et insère les lignes absentes du cours MCR3U-FR
import { WRITTEN } from "./written-data.mjs";
import { runWritten } from "../mcr3u-fr/written-run.mjs";

await runWritten(WRITTEN, "../mcr3u-ch3/written-data.mjs", import.meta.url);
