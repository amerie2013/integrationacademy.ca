// Geometry figures for the chapter 5 LaTeX worksheets: the same SVG scenes as the lessons/bank (figs5.figDoc),
// rendered to a high-resolution PNG by build.mjs and placed with \includegraphics.
import crypto from "crypto";
import { figDoc } from "../figs5.mjs";
import { planeDoc } from "../../mth1w-ch4/figs4.mjs";

/** figures waiting to be rendered: file name -> SVG */
export const PENDING = new Map();
const place = (svg, width, caption) => {
  const name = `f${crypto.createHash("sha1").update(svg).digest("hex").slice(0, 12)}.png`;
  PENDING.set(name, svg);
  return String.raw`\begin{center}\includegraphics[width=${width}cm]{${name}}${caption ? String.raw`\\[-2pt]{\footnotesize\itshape ${caption}}` : ""}\end{center}`;
};
/** A centred geometry figure (figs5 scene items), `width` in cm, with an optional caption line. */
export const figT = (items, width = 5, caption = "", w = Math.round(width * 50)) => place(figDoc({ w, items }), width, caption);
/** A coordinate-plane figure (figs4 options). */
export const planeT = (opts, width = 6, caption = "") => place(planeDoc(opts), width, caption);
