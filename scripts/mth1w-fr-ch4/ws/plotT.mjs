// Figures de plan cartésien pour les fiches LaTeX du chapitre 4 : le même SVG que les leçons et la banque
// (../figs4.mjs, étiquettes françaises), converti en PNG haute résolution par build.mjs et placé avec \includegraphics.
import crypto from "crypto";
import { planeDoc } from "../figs4.mjs";

/** figures à convertir : nom de fichier -> SVG */
export const PENDING = new Map();

/** Une figure de plan centrée, `width` en cm, avec une légende facultative. */
export function planeT(opts, width = 7, caption = "") {
  const svg = planeDoc(opts);
  const name = `f${crypto.createHash("sha1").update(svg).digest("hex").slice(0, 12)}.png`;
  PENDING.set(name, svg);
  return String.raw`\begin{center}\includegraphics[width=${width}cm]{${name}}${caption ? String.raw`\\[-2pt]{\footnotesize\itshape ${caption}}` : ""}\end{center}`;
}
