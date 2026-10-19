// MCV4U 1.4 — Limits and Continuity: the three conditions for continuity, removable/jump/infinite discontinuities,
// limit laws, evaluating limits by factoring and rationalizing, and choosing parameters to make a function continuous
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "1.4 Limits and Continuity";
export const ID = "6151cde3-e842-4f3e-b636-935d2ddbf938";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🔗",
    title: "Limits and Continuity",
    overview: S`A function is <strong>continuous</strong> at \(x=a\) if you can draw its graph through that point without lifting your pencil. Precisely: \(f(a)\) exists, \(\displaystyle\lim_{x\to a}f(x)\) exists, and the two are equal. When one of these fails, the graph has a <strong>discontinuity</strong> — a hole, a jump, or a vertical asymptote. Along the way, the <strong>limit laws</strong> let you evaluate limits piece by piece, and factoring or rationalizing handles the \(\frac00\) cases.`,
    goals: [
      "state the three conditions for continuity at a point;",
      "classify discontinuities as removable, jump or infinite;",
      "use the limit laws to evaluate limits;",
      "evaluate limits of the form 0/0 by factoring or rationalizing;",
      "choose parameters so that a piecewise function is continuous.",
    ],
    curriculum: "A1.4 (graphical and numerical examples of limits, including where a function is not continuous), A1.5 (limits as the foundation of instantaneous rate of change)",
    prior: [
      [S`\(\displaystyle\lim_{x\to2}\frac{x^2-4}{x-2}\)?`, S`\(4\).`],
      [S`Factor \(x^3-1\).`, S`\((x-1)(x^2+x+1)\).`],
      [S`Asymptote of \(\frac1{x-5}\)?`, S`\(x=5\).`],
    ],
    words: [
      ["Continuous at a", "f(a) exists, the limit exists, and they are equal", ""],
      ["Removable discontinuity", "a hole: the limit exists but ≠ f(a) (or f(a) not defined)", ""],
      ["Jump discontinuity", "left and right limits differ", ""],
      ["Infinite discontinuity", "a vertical asymptote", ""],
    ],
  }),

  section("📌 Three kinds of discontinuity", S`
  ${table(["Type", "Limit at a", "Can it be fixed by redefining f(a)?", "Example"], [
    ["removable", "exists", "yes", "\\(\\frac{x^2-1}{x-1}\\) at 1"],
    ["jump", "does not exist (left ≠ right)", "no", "a piecewise step"],
    ["infinite", "does not exist (±∞)", "no", "\\(\\frac1{x-3}\\) at 3"],
  ])}
  ${plane({ view: { xmin: -4, xmax: 6, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x + 1, a: -4, b: -1.03, color: "violet" }, { f: (x) => x + 1, a: -0.97, b: 0.98, color: "violet" }, { f: (x) => 3, a: 1, b: 2.85, color: "violet" }, { f: (x) => 1 / (x - 3), a: 3.15, b: 6, color: "violet" }], vlines: [{ x: 3, color: "red", dash: true }], points: [{ x: -1, y: 0, label: "hole", color: "amber", open: true }, { x: 1, y: 2, label: "jump", color: "amber", open: true }, { x: 1, y: 3, color: "violet" }], step: { x: 1, y: 1 } }, "A hole at x = −1, a jump at x = 1 and an infinite discontinuity at x = 3.")}
  ${keyIdea(S`<strong>Limit laws.</strong> If \(\lim f\) and \(\lim g\) exist: the limit of a sum, difference, product or constant multiple is the sum, difference, product or multiple of the limits; the limit of a quotient is the quotient of the limits if the denominator's limit is not 0; and \(\lim[f(x)]^n=[\lim f(x)]^n\). So polynomials (and rational functions where the denominator ≠ 0) can be evaluated by substitution.`)}`),

  section("📌 Explore", S`<p>Adjust \(k\) and \(m\) until the two pieces meet at \(x=1\). The table checks the three conditions for continuity.</p>`),

  widget("continuityLab", { init: { k: 2, m: 1 } }),

  section("📌 Making a function continuous", S`
  <p>For a piecewise function, set the left-hand and right-hand limits at each joining point equal, and make sure the function's value there matches. Each joining point gives one equation.</p>
  ${watchOut([
    "A function can have a limit at a and still be discontinuous there (removable case).",
    "Check all three conditions; f(a) existing is not enough.",
    "Quotient law fails when the denominator's limit is 0 — simplify first.",
    "At a joining point, use the piece that includes the endpoint to find f(a).",
    "Polynomials are continuous everywhere; rational functions are continuous wherever the denominator ≠ 0.",
  ])}`),

  examples([
    ["A removable discontinuity", S`Is \(f(x)=\dfrac{x^2-1}{x-1}\) continuous at \(x=1\)? How can it be made continuous?`,
      [S`\(f(1)\) is not defined, so not continuous.`, S`\(\lim_{x\to1}\frac{(x-1)(x+1)}{x-1}=\lim_{x\to1}(x+1)=2\).`, S`Defining \(f(1)=2\) removes the hole.`],
      S`removable; define \(f(1)=2\)`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 5 }, curves: [{ f: (x) => x + 1, a: -2, b: 0.97, color: "violet" }, { f: (x) => x + 1, a: 1.03, b: 4, color: "violet" }], points: [{ x: 1, y: 2, label: "(1, 2) hole", color: "amber", open: true }], step: { x: 1, y: 1 } })],
    ["Choose k for continuity", S`Find \(k\) so that \(f(x)=2x+1\) for \(x\le2\) and \(f(x)=x^2+k\) for \(x>2\) is continuous.`,
      [S`Left limit and \(f(2)\): \(2(2)+1=5\). Right limit: \(4+k\).`, S`\(4+k=5\Rightarrow k=1\).`],
      S`\(k=1\)`,
      plane({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 18 }, curves: [{ f: (x) => 2 * x + 1, a: -1, b: 2, color: "violet" }, { f: (x) => x * x + 1, a: 2, b: 4, color: "green" }], points: [{ x: 2, y: 5, label: "(2, 5)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Limit laws", S`Evaluate \(\displaystyle\lim_{x\to2}\dfrac{x^3+1}{x+2}\) and name the laws used.`,
      [S`The denominator's limit is \(4\ne0\), so the quotient law applies.`, S`Sum and power laws: \(\lim(x^3+1)=8+1=9\); \(\lim(x+2)=4\).`],
      S`\(\tfrac94=2.25\)`],
    ["Factor a cubic", S`Evaluate \(\displaystyle\lim_{x\to-2}\dfrac{x^3+8}{x+2}\).`,
      [S`Sum of cubes: \(x^3+8=(x+2)(x^2-2x+4)\).`, S`\(\lim_{x\to-2}(x^2-2x+4)=4+4+4\).`],
      S`\(12\)`],
    ["Classify every discontinuity", S`Classify the discontinuities of \(f(x)=\dfrac{x-2}{x^2-4}\).`,
      [S`\(f(x)=\frac{x-2}{(x-2)(x+2)}=\frac1{x+2}\) for \(x\ne2\).`, S`At \(x=2\): limit \(\frac14\) exists, \(f(2)\) not defined → removable. At \(x=-2\): \(\frac1{x+2}\to\pm\infty\) → infinite.`],
      S`removable at 2 (hole at \((2,\tfrac14)\)); infinite at \(-2\)`,
      plane({ view: { xmin: -6, xmax: 4, ymin: -4, ymax: 4 }, curves: [{ f: (x) => 1 / (x + 2), a: -6, b: -2.25, color: "violet" }, { f: (x) => 1 / (x + 2), a: -1.75, b: 1.97, color: "violet" }, { f: (x) => 1 / (x + 2), a: 2.03, b: 4, color: "violet" }], vlines: [{ x: -2, color: "red", dash: true }], points: [{ x: 2, y: 0.25, label: "hole (2, ¼)", color: "amber", open: true }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("factor", S`Evaluate \(\displaystyle\lim_{x\to3}\dfrac{x^2-2x-3}{x-3}\).`, num(4),
      "Factor the numerator.", [S`\((x-3)(x+1)\Rightarrow x+1\to4\).`], S`\(4\)`),
    q("continuity", S`Find \(k\) so that \(f(x)=kx+1\) for \(x\lt2\) and \(f(x)=x^2-1\) for \(x\ge2\) is continuous.`, num(1),
      "Match the values at x = 2.", [S`\(2k+1=3\).`], S`\(1\)`),
    q("classify", S`What type of discontinuity does \(y=\dfrac1{x-5}\) have at \(x=5\)?`, choice(["infinite", "removable", "jump", "none"], 0),
      "What happens near x = 5?", ["A vertical asymptote."], "infinite"),
    q("cubic", S`Evaluate \(\displaystyle\lim_{x\to1}\dfrac{x^3-1}{x-1}\).`, num(3),
      "Difference of cubes.", [S`\(x^2+x+1\to3\).`], S`\(3\)`),
    q("absolute value", S`Is \(f(x)=|x|\) continuous at \(x=0\)?`, choice(["yes", "no"], 0),
      "Check the three conditions.", [S`\(f(0)=0\) and both one-sided limits are 0.`], "yes"),
  ]),

  ...hard([
    ["Two joining points", S`Find \(a\) and \(b\) so that \(f(x)=ax+1\) for \(x\lt1\), \(f(x)=x^2+b\) for \(1\le x\lt3\), and \(f(x)=2x+5\) for \(x\ge3\) is continuous everywhere.`,
      [S`At \(x=3\): \(9+b=2(3)+5=11\Rightarrow b=2\).`, S`At \(x=1\): \(a+1=1+b=3\Rightarrow a=2\).`],
      S`\(a=2\), \(b=2\)`,
      plane({ view: { xmin: -2, xmax: 5, ymin: -3, ymax: 16 }, curves: [{ f: (x) => 2 * x + 1, a: -2, b: 1, color: "violet" }, { f: (x) => x * x + 2, a: 1, b: 3, color: "green" }, { f: (x) => 2 * x + 5, a: 3, b: 5, color: "blue" }], points: [{ x: 1, y: 3, label: "(1, 3)", color: "red" }, { x: 3, y: 11, label: "(3, 11)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Rationalize, then repair", S`Evaluate \(\displaystyle\lim_{x\to0}\dfrac{\sqrt{x+4}-2}{x}\), and define \(g(0)\) so that \(g(x)=\dfrac{\sqrt{x+4}-2}{x}\) is continuous at 0.`,
      [S`Multiply by \(\frac{\sqrt{x+4}+2}{\sqrt{x+4}+2}\): \(\frac{x}{x(\sqrt{x+4}+2)}=\frac1{\sqrt{x+4}+2}\to\frac14\).`, S`Define \(g(0)=\frac14\).`],
      S`limit \(\tfrac14\); set \(g(0)=\tfrac14\)`],
  ], [
    q("hard", S`Evaluate \(\displaystyle\lim_{x\to2}\dfrac{x^4-16}{x-2}\).`, num(32),
      "x⁴ − 16 = (x − 2)(x + 2)(x² + 4).", [S`\((4)(8)\).`], S`\(32\)`),
    q("hard", S`\(f(x)=\dfrac{x^2-9}{x-3}\) for \(x\ne3\) and \(f(3)=b\). Find \(b\) for continuity.`, num(6),
      "The limit at 3.", [S`\(x+3\to6\).`], S`\(6\)`),
    q("hard", S`Evaluate \(\displaystyle\lim_{x\to0}\dfrac{(x+1)^2-1}{x}\).`, num(2),
      "Expand.", [S`\(\frac{x^2+2x}{x}=x+2\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["What are the three conditions for continuity at a?", "f(a) is defined, lim x→a f(x) exists, and lim x→a f(x) = f(a)."],
      ["Which discontinuities can be removed?", "Only holes, where the limit exists: redefine f(a) as the limit."],
      ["When can I just substitute to find a limit?", "When the function is continuous at a — polynomials always, rational functions when the denominator isn't 0."],
      ["Why do limit laws fail for 0/0?", "The quotient law needs the denominator's limit to be nonzero; 0/0 needs simplifying first."],
      ["Why does continuity matter for derivatives?", "A function must be continuous at a point to have a tangent there; 1.5 shows continuity alone is not enough."],
    ],
    summary: [
      "Continuous: f(a) = lim x→a f(x).",
      "Removable, jump, infinite discontinuities.",
      "Limit laws let you substitute where continuous.",
      "Piecewise: match values at each join.",
    ],
    next: "1.5 defines the derivative.",
  }),
];
