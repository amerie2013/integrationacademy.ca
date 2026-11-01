// Shared helpers for the LINALG1 worksheet sources (w1_N.mjs): figures, definition / theorem boxes, and
// text beside a figure inside a box.
import { svgT } from "./figT.mjs";
import { vdoc } from "../vecfig.mjs";

export const S = String.raw;
/** a vector figure; width 300 px keeps the labels large once the figure is scaled to a few centimetres */
export const VF = (o, w = 6) => svgT(vdoc({ width: 300, ...o }), w);
export const def = (name, body) => S`\begin{defbox}{${name}}${body}\end{defbox}`;
export const thm = (name, body) => S`\begin{thmbox}{${name}}${body}\end{thmbox}`;
/** text beside a figure inside a box (the same layout the builder uses for a concept's lead) */
export const side = (text, fig, w = 0.55) => S`\par\smallskip\noindent\begin{minipage}[t]{${w}\linewidth}\vspace{0pt}${text}\end{minipage}\hfill\begin{minipage}[t]{${(0.98 - w).toFixed(2)}\linewidth}\vspace{0pt}${fig}\end{minipage}\par`;
/** project a 3-D point to the oblique drawing plane (same projection as p3 in vecfig) */
export const pr = ([x, y, z]) => [y - 0.55 * x, z - 0.42 * x];
