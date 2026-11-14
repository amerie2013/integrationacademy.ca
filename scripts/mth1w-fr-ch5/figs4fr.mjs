// Plan cartésien du chapitre 4 (mth1w-ch4/figs4.mjs) avec les étiquettes du triangle de pente en français :
// « run » → « course », « rise » → « montée ». Tout le reste est identique.
import { planeSvg as planeSvgEN } from "../mth1w-ch4/figs4.mjs";

const fr = (svg) => svg.split(">run ").join(">course ").split(">rise ").join(">montée ");
export const planeSvg = (opts) => { const r = planeSvgEN(opts); return { ...r, svg: fr(r.svg) }; };
export const plane = (opts, caption = "") => { const { svg, w } = planeSvg(opts); return `<div style="text-align:center;margin:12px 0;">${svg.replace(`width="${w}"`, `width="${w}" style="max-width:100%;height:auto;"`)}${caption ? `<div style="font-size:13px;color:#64748b;margin-top:2px;">${caption}</div>` : ""}</div>`; };
export const planeDoc = (opts) => planeSvg(opts).svg;
