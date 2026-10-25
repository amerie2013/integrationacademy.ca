// Probability helpers for the chapter 2 bank: numeric answers are typed as decimals (number input), so a probability
// is asked "as a decimal (3 places)" and accepted within ±0.0015; exact fractions are asked as multiple choice.
import { num, mc } from "./kit.mjs";
import { r3, fs, gcd } from "../../mdm4u/count.mjs";

/** probability answer as a decimal to 3 places */
export const p3 = (prompt, value, feedback, fig = null) => num(`${prompt} Answer as a decimal (3 places).`, r3(value), feedback, fig, 0.0015);
/** reduced fraction text "a/b" */
export const f = (a, b) => fs(a, b);
/** multiple choice between fractions: correct [a, b], wrong [[a, b], ...] (duplicates of the correct value are rejected) */
export const mcf = (prompt, correct, wrong, feedback, fig = null) => {
  const c = f(...correct), w = wrong.map((x) => f(...x));
  if (w.includes(c) || new Set(w).size !== w.length) throw new Error(`mcf options clash: ${prompt}`);
  return mc(prompt, c, w, feedback, fig);
};
export { r3, gcd };
