// Question builders for the AP Calculus AB exam-prep bank.
//
// Exam-format conventions:
//   - multiple choice always has exactly four options, and every wrong option
//     is a specific, named error (never filler);
//   - the correct option's position is derived from the prompt, so answers are
//     spread evenly over A–D and stay stable between re-seeds;
//   - every question carries a worked explanation;
//   - a figure is an original SVG (scripts/apcalc/fig.mjs) passed as `fig`;
//   - `calc: true` marks a question written for the calculator-required parts.
const ID = "abcd";
const CALC = "(Graphing calculator required.) ";

const hash = (s) => { let h = 7; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; };
const base = (difficulty, prompt, why, o) => ({
  difficulty,
  prompt: (o.calc ? CALC : "") + prompt,
  feedback: why,
  points: 1,
  ...(o.fig ? { image_url: o.fig.uri() } : {}),
});

/** multiple choice: `correct` plus exactly three `wrong` options */
export function mc(difficulty, prompt, correct, wrong, why, o = {}) {
  if (wrong.length !== 3) throw new Error(`mc needs 3 wrong options: ${prompt.slice(0, 50)}`);
  const at = hash(prompt) % 4;
  const texts = [...wrong];
  texts.splice(at, 0, correct);
  return { ...base(difficulty, prompt, why, o), kind: "multiple_choice", choices: texts.map((t, i) => ({ id: ID[i], text: t })), answer: ID[at] };
}

/** multiple choice whose four options are figures (slope fields, graphs): pass plot objects */
export function mcFig(difficulty, prompt, correct, wrong, why, o = {}) {
  if (wrong.length !== 3) throw new Error(`mcFig needs 3 wrong options: ${prompt.slice(0, 50)}`);
  const at = hash(prompt) % 4;
  const figs = [...wrong];
  figs.splice(at, 0, correct);
  return { ...base(difficulty, prompt, why, o), kind: "multiple_choice", choices: figs.map((g, i) => ({ id: ID[i], text: "", image: g.uri() })), answer: ID[at] };
}

/** numeric answer with a tolerance (use 0.001 for calculator answers: three decimal places) */
export const num = (difficulty, prompt, value, tol, why, o = {}) => ({ ...base(difficulty, prompt, why, o), kind: "numeric", answer: value, tolerance: tol });

/** a two-row table of values, typeset inline: tbl("x", [1, 2], "f(x)", [3, 5]) */
export const tbl = (xName, xs, yName, ys) => `$\\begin{array}{c|${"c".repeat(xs.length)}} ${xName} & ${xs.join(" & ")} \\\\ \\hline ${yName} & ${ys.join(" & ")} \\end{array}$`;
