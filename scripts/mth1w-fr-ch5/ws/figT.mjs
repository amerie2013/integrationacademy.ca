// MTH1W-FR fiches du chapitre 5 — mêmes figures que les fiches anglaises. figT (scènes figs5) ne dessine aucun mot
// anglais; planeT utilise le plan cartésien français (« course », « montée »). PENDING est la même Map que celle de
// l'anglais : build.mjs rend les PNG dans le dossier out/ français.
import crypto from "crypto";
import { PENDING } from "../../mth1w-ch5/ws/figT.mjs";
import { planeDoc } from "../figs4fr.mjs";
export { PENDING, figT } from "../../mth1w-ch5/ws/figT.mjs";

/** Un plan cartésien (options figs4), `width` en cm, avec une légende facultative. */
export const planeT = (opts, width = 6, caption = "") => {
  const svg = planeDoc(opts);
  const name = `f${crypto.createHash("sha1").update(svg).digest("hex").slice(0, 12)}.png`;
  PENDING.set(name, svg);
  return String.raw`\begin{center}\includegraphics[width=${width}cm]{${name}}${caption ? String.raw`\\[-2pt]{\footnotesize\itshape ${caption}}` : ""}\end{center}`;
};
