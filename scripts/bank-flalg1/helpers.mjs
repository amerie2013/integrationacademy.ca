// Shared question-builder helpers for the Algebra 1 (FL B.E.S.T.) question bank.
// Kinds: multiple_choice | multiple_select | true_false | numeric | fill_blank.
const L = "abcdefghij";

export const shuffle = (a) => { const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
export const ri = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;      // random int inclusive
export const rnz = (min, max) => { let n = 0; while (n === 0) n = ri(min, max); return n; }; // random non-zero
export const pick = (a) => a[Math.floor(Math.random() * a.length)];
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; };
export function reduce(n, d) { const g = gcd(n, d); n /= g; d /= g; if (d < 0) { n = -n; d = -d; } return [n, d]; }
export const fracTex = (n, d) => { [n, d] = reduce(n, d); if (d === 1) return `${n}`; const s = n < 0 ? "-" : ""; return `${s}\\frac{${Math.abs(n)}}{${d}}`; };

export const mc = (difficulty, prompt, choices, correct, feedback = "") => ({ difficulty, kind: "multiple_choice", prompt, choices: choices.map((t, i) => ({ id: L[i], text: t })), answer: L[correct], points: 1, feedback });
// mcv: choices given as strings, `correctText` is the correct string — shuffles and finds its index.
export const mcv = (difficulty, prompt, correctText, distractors, feedback = "") => {
  const opts = shuffle([correctText, ...distractors]).slice(0, 4);
  if (!opts.includes(correctText)) opts[0] = correctText;
  const o = shuffle(opts);
  return { difficulty, kind: "multiple_choice", prompt, choices: o.map((t, i) => ({ id: L[i], text: t })), answer: L[o.indexOf(correctText)], points: 1, feedback };
};
export const ms = (difficulty, prompt, choices, correct, feedback = "") => ({ difficulty, kind: "multiple_select", prompt, choices: choices.map((t, i) => ({ id: L[i], text: t })), answer: correct.map((i) => L[i]), points: 1, feedback });
export const tf = (difficulty, prompt, correct, feedback = "") => ({ difficulty, kind: "true_false", prompt, answer: correct ? "true" : "false", points: 1, feedback });
export const num = (difficulty, prompt, value, tol = 0, feedback = "") => ({ difficulty, kind: "numeric", prompt, answer: value, tolerance: tol, points: 1, feedback });
export const fill = (difficulty, prompt, accepted, feedback = "") => ({ difficulty, kind: "fill_blank", prompt, answer: accepted, points: 1, feedback });
