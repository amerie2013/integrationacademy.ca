// MTH1W-FR chapitre 1 — same helpers as the English chapter-1 lesson lib (../mth1w-ch1/v2/lib.mjs), with the French
// lesson chrome (explicit re-exports override the English intro/hard/etc. coming from export *).
// French copy of the one figure helper that prints English words: tape() ("parts" under each group).
export * from "../mth1w-ch1/v2/lib.mjs";
export { ex, pr, qa, watchOut, intro, section, keyIdea, examples, practice, hard, wrapUp } from "../mth1w-fr/chrome.mjs";

const figWrap = (svg, caption) => `<div style="text-align:center;margin:12px 0;">${svg}<div style="font-size:13px;color:#64748b;margin-top:2px;">${caption}</div></div>`;

/** Tape diagram (groups of equal parts). segs: [{n,label,fill,stroke}] — same drawing as ../mth1w-ch1/lib.mjs, French "partie(s)". */
export function tape(segs, caption, unit = 32) {
  const total = segs.reduce((s, g) => s + g.n, 0);
  const W = total * unit + 20, H = 82;
  let x = 10, out = "";
  for (const g of segs) {
    const x0 = x;
    for (let i = 0; i < g.n; i++) { out += `<rect x="${x}" y="26" width="${unit}" height="34" fill="${g.fill}" stroke="${g.stroke}" stroke-width="1.5"/>`; x += unit; }
    out += `<text x="${x0 + (g.n * unit) / 2}" y="18" font-size="12" font-weight="700" text-anchor="middle" fill="${g.stroke}">${g.label}</text>`;
    out += `<text x="${x0 + (g.n * unit) / 2}" y="76" font-size="12" font-weight="700" text-anchor="middle" fill="#0f172a">${g.n} ${g.n === 1 ? "partie" : "parties"}</text>`;
  }
  return figWrap(`<svg viewBox="0 0 ${W} ${H}" width="${W}" style="max-width:100%;height:auto;" role="img" aria-label="${caption}">${out}</svg>`, caption);
}
