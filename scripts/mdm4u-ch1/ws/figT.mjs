// Figures for the MDM4U chapter 1 LaTeX worksheets: the same SVG figures as the lessons and bank
// (scripts/mdm4u/figs.mjs), rendered to high-resolution PNGs by build.mjs and placed with \includegraphics.
import crypto from "crypto";
export * from "../../mdm4u/figs.mjs";

/** figures waiting to be rendered: file name -> SVG */
export const PENDING = new Map();
/** any standalone SVG as a centred figure, width in cm */
export const svgT = (svg, width = 6, caption = "") => {
  const name = `f${crypto.createHash("sha1").update(svg).digest("hex").slice(0, 12)}.png`;
  PENDING.set(name, svg);
  return String.raw`\begin{center}\includegraphics[width=${width}cm]{${name}}${caption ? String.raw`\[-2pt]{\footnotesize\itshape ${caption}}` : ""}\end{center}`;
};
