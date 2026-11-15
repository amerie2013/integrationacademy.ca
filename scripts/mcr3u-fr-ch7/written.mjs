// MCR3U-FR chapitre 7 — questions à réponse construite (partie C des tests imprimés). Données dans written-data.mjs.
//   node scripts/mcr3u-fr-ch7/written.mjs [--apply]   (--apply après le chargement des leçons françaises du chapitre 7)
import { WRITTEN } from "./written-data.mjs";
import { runWritten } from "../mcr3u-fr/written-run.mjs";

export { WRITTEN };
await runWritten(WRITTEN, "../mcr3u-ch7/written-data.mjs", import.meta.url);
