// Linear Algebra I (LINALG1, university) chapter 3 — the self-study lesson format used across the site
// (intro card · concept sections with figures · interactive explorers · 5 worked examples · 5 checked practice ·
// a hard level with 2 worked challenges and 3 checked questions · Q&A + summary), with a university intro card:
// the curriculum line names the course outcomes instead of an Ontario expectation.
import { html, table, widget } from "../mth1w-ch2/lib.mjs";
export * from "../mth1w-ch2/lib.mjs";

const GOALS = `style="background:#f0fdf4;border:1px solid #bbf7d0;border-left:5px solid #15803d;border-radius:8px;padding:10px 16px;margin:12px 0;"`;
const META = `style="font-size:13.5px;color:#475569;margin:6px 0 0;"`;
const CH = `style="background-color:#fdf2f8;border-left:5px solid #be185d;padding:10px 14px;margin:12px 0;border-radius:6px;"`;
const DEF = `style="background:#f8fafc;border:1px solid #cbd5e1;border-left:5px solid #0f766e;border-radius:8px;padding:10px 16px;margin:12px 0;"`;
const THM = `style="background:#fffbeb;border:1px solid #fde68a;border-left:5px solid #b45309;border-radius:8px;padding:10px 16px;margin:12px 0;"`;

/** First card of every lesson (university version). */
export function intro({ icon, title, overview, goals, outcomes, prior, words }) {
  return html(`<div class="lecture-box">
  <h1>${icon} ${title}</h1>
  <p><strong>Overview.</strong> ${overview}</p>
  <div ${GOALS}><strong>By the end of this lesson you will be able to:</strong><ul style="margin:6px 0 0;">${goals.map((g) => `<li>${g}</li>`).join("")}</ul>
  <p ${META}><strong>Linear Algebra I outcomes:</strong> ${outcomes}</p></div>
  <h2>🧭 Before you start</h2>
  <p>Answer these in your head first. If any feels shaky, open the answer and review it before going on.</p>
  ${prior.map(([q, a]) => `<details style="margin:6px 0;"><summary><strong>${q}</strong></summary><p style="margin:6px 0 0 18px;"><em>${a}</em></p></details>`).join("")}
  <h2>📖 Key words</h2>
  ${table(["Word", "Meaning", "Example"], words)}
</div>`);
}

/** A boxed definition (university texts lean on precise definitions). */
export const definition = (name, body) => `<div ${DEF}><strong>Definition (${name}).</strong> ${body}</div>`;
/** A boxed theorem with an optional folded proof. */
export const theorem = (name, body, proof) => `<div ${THM}><strong>Theorem (${name}).</strong> ${body}${proof ? `<details style="margin-top:6px;"><summary><strong>Proof</strong></summary><div style="margin:6px 0 0 4px;">${proof} <span style="float:right;">∎</span></div></details>` : ""}</div>`;

/** Hard level: `items` = [title, question, steps[], conclusion, figure?] (exactly 2); `qs` = 3 checked hard questions. */
export function hard(items, qs) {
  if (items.length !== 2) throw new Error(`hard(): need 2 worked hard problems, got ${items.length}`);
  if (qs.length !== 3) throw new Error(`hard(): need 3 hard practice questions, got ${qs.length}`);
  return [
    html(`<div class="lecture-box"><h2>🔴 Hard level</h2>
  <p>These go beyond the examples: a proof, several steps, or an unfamiliar setting. Try each one before you open the solution.</p>
  ${items.map(([t, q, s, c, fig], i) => `<div class="challenge-box" ${CH}><h3>Challenge ${i + 1}: ${t}</h3><p>${q}</p>${fig ?? ""}<details><summary><strong>Show solution</strong></summary><div class="solution">${s.map((x, k) => `<div class="step"><strong>Step ${k + 1}:</strong> ${x}</div>`).join("")}<em>Conclusion: ${c} ✓</em></div></details></div>`).join("\n")}
</div>`),
    widget("practice", { questions: qs, title: "Hard-level practice" }),
  ];
}

/** a vector answer typed as components, e.g. vec(2, -1, 3); parallel: any nonzero multiple is accepted */
export const vec = (...value) => ({ kind: "vector", value });
export const dir = (...value) => ({ kind: "vector", value, parallel: true });
/** a vector answer accepted within a tolerance (rounded components) */
export const vecT = (tol, ...value) => ({ kind: "vector", value, tol });

/** column vector in LaTeX: cv(1, -2, 3) */
export const cv = (...a) => `\\begin{bmatrix}${a.join("\\\\")}\\end{bmatrix}`;

// matrices and systems: the same LaTeX as bank/la.mjs, plus a brace around a system
import { am as amRaw, sys as sysRaw } from "./bank/la.mjs";
/** a matrix in LaTeX; bar = true draws the augmented-matrix bar before the last column */
export const am = amRaw;
/** a system of equations in LaTeX from rows of coefficients and constants, with a left brace */
export const sys = (rows, names) => `\\left\\{${sysRaw(rows, names)}\\right.`;

/** full worked row reduction (explanation + operations + whole matrix per step) */
export { steps } from "./bank/la.mjs";

/** a raw SVG figure centred in a lesson, with an optional caption */
export const sfig = (svg, cap = "") => `<div style="text-align:center;margin:10px 0;">${svg.replace(/width="(\d+)" height="(\d+)"/, 'width="$1" style="max-width:100%;height:auto;"')}${cap ? `<div style="font-size:13px;color:#64748b;margin-top:2px;">${cap}</div>` : ""}</div>`;
