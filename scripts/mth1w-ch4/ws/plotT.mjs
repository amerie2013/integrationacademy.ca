// Coordinate-plane figures for the chapter 4 LaTeX worksheets: the same SVG as the lessons/bank (figs4.planeDoc),
// rendered to a high-resolution PNG by build.mjs and placed with \includegraphics.
import crypto from "crypto";
import { planeDoc } from "../figs4.mjs";

/** figures waiting to be rendered: file name -> SVG */
export const PENDING = new Map();

/** A centred plane figure, `width` in cm, with an optional caption line. */
export function planeT(opts, width = 7, caption = "") {
  const svg = planeDoc(opts);
  const name = `f${crypto.createHash("sha1").update(svg).digest("hex").slice(0, 12)}.png`;
  PENDING.set(name, svg);
  return String.raw`\begin{center}\includegraphics[width=${width}cm]{${name}}${caption ? String.raw`\\[-2pt]{\footnotesize\itshape ${caption}}` : ""}\end{center}`;
}
