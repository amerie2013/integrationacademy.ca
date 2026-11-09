// MCF3M self-study lesson format (2026-11 upgrade) — same as MCR3U/MHF4U:
// intro card · concept sections with figures · explorer widgets (already deployed) · exactly 5 worked examples
// (each with a graph/figure and full reasoning) · 5 checked practice questions · Hard level (2 folded challenges
// + 3 checked hard questions) · 5 Q&A + summary.
import { intro as baseIntro } from "../mth1w-ch2/lib.mjs";
export * from "../mcr3u-ch1/lib.mjs";
export { plane } from "../mth1w-ch4/figs4.mjs";
export const intro = (o) => baseIntro({ course: "MCF3M", ...o });

import { html, widget } from "../mth1w-ch2/lib.mjs";
const CH = `style="background-color:#fdf2f8;border-left:5px solid #be185d;padding:10px 14px;margin:12px 0;border-radius:6px;"`;
/** Hard level (MCF3M): `items` = 2 worked challenges [title, question, steps[], conclusion, figure?]; `qs` = 5 checked hard questions. */
export function hard(items, qs) {
  if (items.length !== 2) throw new Error(`hard(): need 2 worked hard problems, got ${items.length}`);
  if (qs.length !== 5) throw new Error(`hard(): need 5 hard practice questions, got ${qs.length}`);
  return [
    html(`<div class="lecture-box"><h2>🔴 Hard level</h2>
  <p>These go beyond the examples: several steps, an unfamiliar setting, or a reason you have to explain. Try each one before you open the solution.</p>
  ${items.map(([t, q, s, c, fig], i) => `<div class="challenge-box" ${CH}><h3>Challenge ${i + 1}: ${t}</h3><p>${q}</p>${fig ?? ""}<details><summary><strong>Show solution</strong></summary><div class="solution">${s.map((x, k) => `<div class="step"><strong>Step ${k + 1}:</strong> ${x}</div>`).join("")}<em>Conclusion: ${c} ✓</em></div></details></div>`).join("\n")}
</div>`),
    widget("practice", { questions: qs, title: "Hard-level practice" }),
  ];
}

/** answer that must be typed fully factored, e.g. fexpr("2(x+1)(x+3)") */
export const fexpr = (value) => ({ kind: "expr", value, factored: true });
/** every root of an equation, any order: roots(-3, 5); roots() = no real roots */
export const roots = (...value) => ({ kind: "roots", value });
/** rounded roots, accepted within tol */
export const rootsT = (tol, ...value) => ({ kind: "roots", value, tol });

/** a small table of values as HTML (rows = [[x, y], ...]) */
export const tv = (rows, hx = "x", hy = "y") => `<table class="data-table" style="margin:8px auto;border-collapse:collapse;"><tr><th style="padding:3px 10px;border:1px solid #cbd5e1;background:#f1f5f9;">${hx}</th>${rows.map((r) => `<td style="padding:3px 10px;border:1px solid #cbd5e1;text-align:center;">${r[0]}</td>`).join("")}</tr><tr><th style="padding:3px 10px;border:1px solid #cbd5e1;background:#f1f5f9;">${hy}</th>${rows.map((r) => `<td style="padding:3px 10px;border:1px solid #cbd5e1;text-align:center;">${r[1]}</td>`).join("")}</tr></table>`;
