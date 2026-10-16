// Standalone SVG figures for chapter 2 bank questions and assignments: the lesson figures (../figs.mjs)
// turned into complete SVG documents with a white background, plus the chapter 1 set (graph, numberLine, …).
import * as F from "../figs.mjs";
export * from "../../mth1w-ch1/v2/bank/svg.mjs";

const toDoc = (html) => {
  const svg = html.match(/<svg[\s\S]*<\/svg>/)[0];
  return svg
    .replace("<svg ", `<svg xmlns="http://www.w3.org/2000/svg" `)
    .replace(/(<svg[^>]*>)/, `$1<rect x="-2000" y="-2000" width="5000" height="5000" fill="#fff"/>`);
};
export const algTiles = (rows, struck = []) => toDoc(F.tiles(rows, "", struck));
export const areaGrid = (left, tops, cells, rowsLeft = null) => toDoc(F.area(left, tops, cells, "", rowsLeft));
export const balanceFig = (l, r, tilt = 0) => toDoc(F.balance(l, r, "", tilt));
export const patternFig = (a, b, count = 3) => toDoc(F.pattern(a, b, "", count));
export const rectFig = (wl, hl, opts) => toDoc(F.rect(wl, hl, "", opts));
export const polyFig = (pts, labels) => toDoc(F.polygon(pts, labels, ""));
export const angleFig = (labels) => toDoc(F.straightAngle(labels, ""));
export const flowFig = (start, ops, end, reverse = null) => toDoc(F.flow(start, ops, end, "", reverse));
export const lineFig = (opts) => toDoc(F.lineGraph(opts, ""));
