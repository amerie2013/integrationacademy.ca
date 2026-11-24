// MCV4U 1.4 — Limits and Continuity: the three conditions for continuity, removable/jump/infinite discontinuities,
// limit laws, evaluating limits by factoring and rationalizing, and choosing parameters to make a function continuous
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";

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
      [S`<b>Rule.</b> \(f\) is continuous at \(x=a\) when three things hold: (1) \(f(a)\) is defined; (2) \(\lim_{x\to a}f(x)\) exists; (3) the two are equal.`,
        S`<b>Condition 1.</b> \(f(1)=\frac{0}{0}\) is not defined, so \(f\) is <em>not</em> continuous at 1.`,
        S`<b>Condition 2: the limit.</b> Factor: \(\dfrac{(x-1)(x+1)}{x-1}=x+1\) for \(x\ne1\), so \(\displaystyle\lim_{x\to1}f(x)=\lim_{x\to1}(x+1)=2\).`,
        S`<b>Classify.</b> The limit exists but the point is missing: the graph is the line \(y=x+1\) with a hole at \((1,2)\). This is a <em>removable</em> discontinuity.`,
        S`<b>Repair.</b> Define \(f(1)=2\). Now all three conditions hold. Check: \(f(0.99)=1.99\) and \(f(1.01)=2.01\) are both near the new value 2 ✓`],
      S`removable; define \(f(1)=2\)`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 5 }, curves: [{ f: (x) => x + 1, a: -2, b: 0.97, color: "violet", label: "y = (x² − 1)/(x − 1)" }, { f: (x) => x + 1, a: 1.03, b: 4, color: "violet" }], points: [{ x: 1, y: 2, label: "(1, 2) hole", color: "amber", open: true }], step: { x: 1, y: 1 } })],
    ["Choose k for continuity", S`Find \(k\) so that \(f(x)=2x+1\) for \(x\le2\) and \(f(x)=x^2+k\) for \(x>2\) is continuous.`,
      [S`<b>Where can it break?</b> Each piece is a polynomial, so it is continuous on its own interval. The only danger is the join at \(x=2\).`,
        S`<b>Left side and the value.</b> \(f(2)=2(2)+1=5\), and \(\displaystyle\lim_{x\to2^-}(2x+1)=5\).`,
        S`<b>Right side.</b> \(\displaystyle\lim_{x\to2^+}(x^2+k)=4+k\).`,
        S`<b>Make them meet.</b> Continuity needs \(4+k=5\), so \(k=1\).`,
        S`<b>Check.</b> With \(k=1\): \(f(2.01)=4.0401+1=5.0401\), close to \(f(2)=5\); \(f(1.99)=4.98\), also close ✓. The two pieces join at \((2,5)\) with no jump.`],
      S`\(k=1\)`,
      plane({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 18 }, curves: [{ f: (x) => 2 * x + 1, a: -1, b: 2, color: "violet", label: "y = 2x + 1" }, { f: (x) => x * x + 1, a: 2, b: 4, color: "green", label: "y = x² + 1" }], points: [{ x: 2, y: 5, label: "(2, 5)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Limit laws", S`Evaluate \(\displaystyle\lim_{x\to2}\dfrac{x^3+1}{x+2}\) and name the laws used.`,
      [S`<b>Check the denominator first.</b> The quotient law \(\lim\frac{f}{g}=\frac{\lim f}{\lim g}\) only works if \(\lim g\ne0\). Here \(\lim_{x\to2}(x+2)=4\ne0\) ✓`,
        S`<b>Numerator.</b> Sum law: \(\lim(x^3+1)=\lim x^3+\lim1\). Power law: \(\lim x^3=(\lim x)^3=2^3=8\). Constant law: \(\lim1=1\). Total: \(9\).`,
        S`<b>Denominator.</b> Sum law again: \(\lim x+\lim2=2+2=4\).`,
        S`<b>Quotient law.</b> \(\dfrac{9}{4}=2.25\).`,
        S`<b>Check.</b> The laws show that for a rational function with a nonzero denominator, the limit is just the value: \(\frac{2^3+1}{2+2}=\frac94\) ✓. Numerically, \(x=2.01\) gives \(\frac{9.120601}{4.01}\approx2.2745\), and \(x=1.99\) gives \(\approx2.2255\): they close in on 2.25.`],
      S`\(\tfrac94=2.25\)`,
      plane({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 6 }, curves: [{ f: (x) => (x ** 3 + 1) / (x + 2), a: -1, b: 4, color: "violet", label: "y = (x³ + 1)/(x + 2)" }], points: [{ x: 2, y: 2.25, label: "(2, 2.25)", color: "red" }], step: { x: 1, y: 1 } }, "no hole and no asymptote near x = 2: substitution works")],
    ["Factor a cubic", S`Evaluate \(\displaystyle\lim_{x\to-2}\dfrac{x^3+8}{x+2}\).`,
      [S`<b>Substitution.</b> \(\frac{-8+8}{-2+2}=\frac00\): indeterminate, so \(x+2\) must be a factor of the top.`,
        S`<b>Sum of cubes.</b> \(a^3+b^3=(a+b)(a^2-ab+b^2)\) with \(a=x\), \(b=2\): \(x^3+8=(x+2)(x^2-2x+4)\).`,
        S`<b>Cancel.</b> For \(x\ne-2\), the expression equals \(x^2-2x+4\).`,
        S`<b>Evaluate.</b> \(\displaystyle\lim_{x\to-2}(x^2-2x+4)=4+4+4=12\).`,
        S`<b>Check.</b> Expand to confirm the factoring: \((x+2)(x^2-2x+4)=x^3-2x^2+4x+2x^2-4x+8=x^3+8\) ✓. Numerically, \(x=-1.99\) gives \(\frac{0.119401}{0.01}\approx11.94\) ✓`],
      S`\(12\)`,
      plane({ view: { xmin: -4, xmax: 2, ymin: -1, ymax: 16 }, curves: [{ f: (x) => x * x - 2 * x + 4, a: -4, b: -2.06, color: "violet", label: "y = (x³ + 8)/(x + 2)" }, { f: (x) => x * x - 2 * x + 4, a: -1.94, b: 2, color: "violet" }], points: [{ x: -2, y: 12, label: "hole (−2, 12)", color: "amber", open: true }], step: { x: 1, y: 2 } })],
    ["Classify every discontinuity", S`Classify the discontinuities of \(f(x)=\dfrac{x-2}{x^2-4}\).`,
      [S`<b>Where is f not defined?</b> \(x^2-4=0\) at \(x=2\) and \(x=-2\). These are the only candidates.`,
        S`<b>Simplify.</b> \(f(x)=\dfrac{x-2}{(x-2)(x+2)}=\dfrac{1}{x+2}\) for \(x\ne\pm2\).`,
        S`<b>At \(x=2\).</b> \(\lim_{x\to2}\frac1{x+2}=\frac14\) exists, but \(f(2)\) is not defined: a <em>removable</em> discontinuity, a hole at \((2,\tfrac14)\).`,
        S`<b>At \(x=-2\).</b> The simplified denominator is 0 while the top is 1, so \(\frac1{x+2}\to\pm\infty\): an <em>infinite</em> discontinuity (vertical asymptote).`,
        S`<b>Check the signs at \(-2\).</b> ${tv(["\\(x\\)", "−2.01", "−1.99"], ["\\(\\frac1{x+2}\\)", "−100", "100"])} Down on the left, up on the right ✓`],
      S`removable at 2 (hole at \((2,\tfrac14)\)); infinite at \(-2\)`,
      plane({ view: { xmin: -6, xmax: 4, ymin: -4, ymax: 4 }, curves: [{ f: (x) => 1 / (x + 2), a: -6, b: -2.25, color: "violet" }, { f: (x) => 1 / (x + 2), a: -1.75, b: 1.97, color: "violet", label: "y = (x − 2)/(x² − 4)" }, { f: (x) => 1 / (x + 2), a: 2.03, b: 4, color: "violet" }], vlines: [{ x: -2, color: "red", dash: true, label: "x = −2" }], points: [{ x: 2, y: 0.25, label: "hole (2, ¼)", color: "amber", open: true }], step: { x: 1, y: 1 } })],
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
