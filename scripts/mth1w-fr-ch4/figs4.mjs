// MTH1W-FR chapitre 4 — les plans cartésiens de ../mth1w-ch4/figs4.mjs, avec les étiquettes intégrées en français
// (le triangle de pente affiche « course » et « montée » au lieu de « run » et « rise »).
// Les étiquettes d'axes et les légendes sont passées en français par chaque leçon.
import { planeSvg as planeSvgEN } from "../mth1w-ch4/figs4.mjs";

const fr = (svg) => svg.split(`">run `).join(`">course `).split(`">rise `).join(`">montée `);

export function planeSvg(opts) {
  const { svg, w } = planeSvgEN(opts);
  return { svg: fr(svg), w };
}
/** Pour les leçons : SVG enveloppé en HTML, avec légende. */
export const plane = (opts, caption = "") => { const { svg, w } = planeSvg(opts); return `<div style="text-align:center;margin:12px 0;">${svg.replace(`width="${w}"`, `width="${w}" style="max-width:100%;height:auto;"`)}${caption ? `<div style="font-size:13px;color:#64748b;margin-top:2px;">${caption}</div>` : ""}</div>`; };
/** Pour la banque et les devoirs : le document SVG. */
export const planeDoc = (opts) => planeSvg(opts).svg;
