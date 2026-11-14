// MTH1W-FR chapitre 6 — figures de données. Mêmes constructeurs SVG que ../mth1w-ch6/figs6.mjs (importés), sauf
// l'histogramme dont l'étiquette d'axe vertical par défaut est « fréquence » au lieu de « frequency ».
// Toutes les autres étiquettes (axes, légendes, catégories) sont passées en français par chaque leçon/question.
import { histogramSvg as histogramSvgEN } from "../mth1w-ch6/figs6.mjs";
export * from "../mth1w-ch6/figs6.mjs";

export const histogramSvg = (o) => histogramSvgEN({ ylabel: "fréquence", ...o });
const html = ({ svg, w }, caption) => `<div style="text-align:center;margin:12px 0;">${svg.replace(`width="${w}"`, `width="${w}" style="max-width:100%;height:auto;"`)}${caption ? `<div style="font-size:13px;color:#64748b;margin-top:2px;">${caption}</div>` : ""}</div>`;
export const histogram = (o, cap = "") => html(histogramSvg(o), cap);
export const histogramDoc = (o) => histogramSvg(o).svg;
