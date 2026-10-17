// Data figures for the chapter 6 LaTeX worksheets: the same SVG documents as the lessons/bank (figs6 *Doc),
// rendered to a high-resolution PNG by build.mjs and placed with \includegraphics.
import crypto from "crypto";
import { boxPlotDoc, dotPlotDoc, histogramDoc, barChartDoc, scatterDoc } from "../figs6.mjs";
import { planeDoc } from "../../mth1w-ch4/figs4.mjs";

/** figures waiting to be rendered: file name -> SVG */
export const PENDING = new Map();
const place = (svg, width, caption) => {
  const name = `f${crypto.createHash("sha1").update(svg).digest("hex").slice(0, 12)}.png`;
  PENDING.set(name, svg);
  return String.raw`\begin{center}\includegraphics[width=${width}cm]{${name}}${caption ? String.raw`\\[-2pt]{\footnotesize\itshape ${caption}}` : ""}\end{center}`;
};
export const boxT = (o, width = 7, cap = "") => place(boxPlotDoc({ w: 330, ...o }), width, cap);
export const dotT = (o, width = 7, cap = "") => place(dotPlotDoc({ w: 330, ...o }), width, cap);
export const histT = (o, width = 6.5, cap = "") => place(histogramDoc({ w: 360, ...o }), width, cap);
export const barT = (o, width = 6.5, cap = "") => place(barChartDoc({ w: 360, ...o }), width, cap);
export const scatterT = (o, width = 6.5, cap = "") => place(scatterDoc(o), width, cap);
export const planeT = (o, width = 6.5, cap = "") => place(planeDoc(o), width, cap);
