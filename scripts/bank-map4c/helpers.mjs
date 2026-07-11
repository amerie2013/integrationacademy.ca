// Shared question-builder helpers for the MPM2D question bank.
// Mirrors the kinds used by the Grade-9 bank (scripts/seed-bank.mjs):
//   multiple_choice | multiple_select | true_false | numeric |
//   fill_blank | ordering | matching
const L = "abcdefghij";

export const shuffle = (a) => { const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; };
export function reduce(n, d) { const g = gcd(n, d); n /= g; d /= g; if (d < 0) { n = -n; d = -d; } return [n, d]; }
export const fracTex = (n, d) => { [n, d] = reduce(n, d); if (d === 1) return `${n}`; const s = n < 0 ? "-" : ""; return `${s}\\frac{${Math.abs(n)}}{${d}}`; };

// multiple choice (one answer): choices is array of strings, correct is the index
export const mc = (difficulty, prompt, choices, correct, feedback = "") => ({ difficulty, kind: "multiple_choice", prompt, choices: choices.map((t, i) => ({ id: L[i], text: t })), answer: L[correct], points: 1, feedback });
// multiple select: correct is an array of indices
export const ms = (difficulty, prompt, choices, correct, feedback = "") => ({ difficulty, kind: "multiple_select", prompt, choices: choices.map((t, i) => ({ id: L[i], text: t })), answer: correct.map((i) => L[i]), points: 1, feedback });
// true / false
export const tf = (difficulty, prompt, correct, feedback = "") => ({ difficulty, kind: "true_false", prompt, answer: correct ? "true" : "false", points: 1, feedback });
// numeric answer (optional tolerance)
export const num = (difficulty, prompt, value, tol = 0, feedback = "") => ({ difficulty, kind: "numeric", prompt, answer: value, tolerance: tol, points: 1, feedback });
// fill in the blank: accepted is an array of acceptable strings
export const fill = (difficulty, prompt, accepted, feedback = "") => ({ difficulty, kind: "fill_blank", prompt, answer: accepted, points: 1, feedback });
// ordering: items given in the CORRECT order
export const order = (difficulty, prompt, items, feedback = "") => ({ difficulty, kind: "ordering", prompt, choices: items, answer: items.map((_, i) => i), points: 1, feedback });
// matching: answer[i] = index in `right` that matches left[i]
export const match = (difficulty, prompt, left, right, answer, feedback = "") => ({ difficulty, kind: "matching", prompt, choices: { left, right }, answer, points: 1, feedback });
