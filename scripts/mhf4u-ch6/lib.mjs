// MHF4U chapter 6 — same self-study lesson format as chapters 1-3 (5 examples · 5 checked practice · Q&A · explorers),
// plus a required hard-level part in every lesson: 2 hard worked problems (solutions folded) and a 3-question hard
// practice set. Re-exports the MTH1W helpers; intro() is labelled with the MHF4U course code.
import { intro as baseIntro, html, widget } from "../mth1w-ch2/lib.mjs";
export * from "../mth1w-ch2/lib.mjs";
export { plane } from "../mth1w-ch4/figs4.mjs";
export const intro = (o) => baseIntro({ course: "MHF4U", ...o });

const CH = `style="background-color:#fdf2f8;border-left:5px solid #be185d;padding:10px 14px;margin:12px 0;border-radius:6px;"`;

/** Hard level: `items` = [title, question, steps[], conclusion, figure?] (exactly 2); `qs` = 3 checked hard questions. */
export function hard(items, qs) {
  if (items.length !== 2) throw new Error(`hard(): need 2 worked hard problems, got ${items.length}`);
  if (qs.length !== 3) throw new Error(`hard(): need 3 hard practice questions, got ${qs.length}`);
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
