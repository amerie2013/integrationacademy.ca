// Builders for hand-written bank questions (shape matches bank_questions). Choice order is shuffled
// deterministically from the prompt so re-running the publish script gives identical rows.
// Text conventions: math in $...$; money written as "dollars" (never \$).
const L = "abcdefgh";
function seeded(str) { let h = 2166136261; for (const ch of str) h = Math.imul(h ^ ch.charCodeAt(0), 16777619); return () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296; }
function shuffle(arr, key) { const r = seeded(key), a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

/** multiple choice: correct + 3 wrong options */
export const mc = (prompt, correct, wrong, feedback, fig) => {
  const opts = shuffle([correct, ...wrong], prompt);
  return { kind: "multiple_choice", prompt, choices: opts.map((t, i) => ({ id: L[i], text: t })), answer: L[opts.indexOf(correct)], feedback, fig };
};
/** multiple select: options with the indexes of the correct ones (order kept as written) */
export const ms = (prompt, options, correct, feedback, fig) => ({ kind: "multiple_select", prompt, choices: options.map((t, i) => ({ id: L[i], text: t })), answer: correct.map((i) => L[i]), feedback, fig });
export const num = (prompt, value, feedback, fig, tolerance = 0) => ({ kind: "numeric", prompt, answer: value, tolerance, feedback, fig });
export const fill = (prompt, accepted, feedback, fig) => ({ kind: "fill_blank", prompt, answer: accepted, feedback, fig });
export const tf = (prompt, value, feedback, fig) => ({ kind: "true_false", prompt, answer: value ? "true" : "false", feedback, fig });
/** math expression answer (auto-checked by equivalence). Store with explicit * : "3*x^2-2*x+5". */
export const mx = (prompt, answer, feedback, fig) => {
  if (/\d[a-z(]|[a-z)]\(|\)[a-z\d]|[a-z][a-z]/i.test(answer.replace(/sqrt|pi/g, ""))) throw new Error(`math_expr answer needs explicit *: ${answer}`);
  return { kind: "math_expr", prompt, answer, feedback, fig };
};
