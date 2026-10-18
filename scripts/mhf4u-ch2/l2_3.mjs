// MHF4U 2.3 — Polynomial Equations: solving by factoring (factor theorem, grouping, quadratic patterns, sum and
// difference of cubes), irrational and non-real cases, reading solutions from graphs, and applications
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, roots, hard, plane } from "./lib.mjs";

export const TITLE = "2.3 Polynomial Equations";
export const ID = "341a8f21-903a-4d68-b771-ad26b2e3a31e";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Polynomial Equations",
    overview: S`The real roots of \(P(x)=0\) are the x-intercepts of \(y=P(x)\). To find them exactly, factor \(P(x)\) completely — with the factor theorem, grouping, or special patterns such as the sum and difference of cubes — and set each factor equal to 0. A quadratic factor that will not factor nicely is solved with the quadratic formula; if its discriminant is negative, it contributes no real roots. When a polynomial does not factor at all, a graph gives the roots approximately.`,
    goals: [
      "solve polynomial equations by factoring completely;",
      "use the sum and difference of cubes;",
      "use the quadratic formula on a quadratic factor, including irrational and non-real cases;",
      "connect the roots of P(x) = 0 with the x-intercepts of y = P(x), and solve P(x) = k graphically;",
      "solve problems modelled by polynomial equations.",
    ],
    curriculum: "C3.3 (make connections between the roots of P(x) = 0, the x-intercepts of y = P(x), and the factors), C3.4 (solve polynomial equations by selecting an appropriate strategy), C3.7 (solve problems)",
    prior: [
      [S`Solve \(x^2-5x+6=0\).`, S`\(x=2\) or \(3\).`],
      [S`Discriminant of \(x^2+2x+5\)?`, S`\(4-20=-16\lt0\): no real roots.`],
      [S`Factor \(x^3+2x^2-5x-6\).`, S`\((x+1)(x+3)(x-2)\).`],
    ],
    words: [
      ["Root", "a solution of \\(P(x)=0\\)", ""],
      ["Sum of cubes", "\\(a^3+b^3=(a+b)(a^2-ab+b^2)\\)", ""],
      ["Difference of cubes", "\\(a^3-b^3=(a-b)(a^2+ab+b^2)\\)", ""],
      ["Quadratic in form", "an equation like \\(x^4-13x^2+36=0\\) that is quadratic in \\(x^2\\)", ""],
    ],
  }),

  section("📌 Strategies", S`
  ${table(["Form of P(x)", "Strategy", "Example"], [
    ["common factor", "factor it out first", "\\(2x^3-8x=2x(x-2)(x+2)\\)"],
    ["four terms in matching pairs", "grouping", "\\(x^3+x^2-4x-4\\)"],
    ["\\(a^3\\pm b^3\\)", "sum or difference of cubes", "\\(8x^3-27\\)"],
    ["quadratic in \\(x^2\\)", "let \\(u=x^2\\)", "\\(x^4-13x^2+36\\)"],
    ["anything else", "factor theorem, then the quadratic formula", "\\(x^3-3x^2+x+1\\)"],
  ])}
  ${keyIdea(S`A degree-\(n\) equation has at most \(n\) real roots. Every real root is an x-intercept; a quadratic factor with negative discriminant gives no x-intercepts. Always move every term to one side before factoring.`)}
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -10, ymax: 14 }, curves: [{ f: (x) => x ** 3 - 7 * x, color: "violet" }], lines: [{ m: 0, b: 6, color: "green", label: "y = 6" }], points: [{ x: -2, y: 6, label: "−2", color: "red" }, { x: -1, y: 6, label: "−1", color: "red" }, { x: 3, y: 6, label: "3", color: "red" }], step: { x: 1, y: 2 } }, "x³ − 7x = 6 where the cubic meets y = 6: x = −2, −1, 3, the roots of (x + 2)(x + 1)(x − 3) = 0.")}`),

  section("📌 Explore", S`<p>Choose the polynomial and the value \(k\). The solutions of \(f(x)=k\) are where the curve meets the dashed line; watch the number of solutions change as \(k\) moves past a turning point.</p>`),

  widget("rootSolver", { init: { cs: [1, -3, -4, 12], k: 0 } }),

  section("📌 Sum and difference of cubes", S`
  <p>\(a^3-b^3=(a-b)(a^2+ab+b^2)\) and \(a^3+b^3=(a+b)(a^2-ab+b^2)\). The quadratic factor never has real roots (its discriminant is \(-3b^2\)), so \(a^3\pm b^3=0\) has exactly one real root.</p>
  ${watchOut([
    "Do not divide both sides by x — you lose the root x = 0. Factor x out instead.",
    "Move everything to one side first: x³ = 4x becomes x³ − 4x = 0.",
    "In a³ + b³ the middle sign of the quadratic factor is MINUS.",
    "A negative discriminant means no real roots from that factor, not 'no solution' to the whole equation.",
    "Check that your roots make sense in an applied problem (lengths must be positive).",
  ])}`),

  examples([
    ["Factor theorem, then factor", S`Solve \(x^3-4x^2-7x+10=0\).`,
      [S`\(P(1)=1-4-7+10=0\): \(x-1\) is a factor.`, S`Divide: \(x^2-3x-10=(x-5)(x+2)\).`, S`\((x-1)(x-5)(x+2)=0\).`],
      S`\(x=1,\ 5,\ -2\)`,
      plane({ view: { xmin: -3, xmax: 6, ymin: -40, ymax: 20 }, curves: [{ f: (x) => x ** 3 - 4 * x * x - 7 * x + 10, color: "violet" }], points: [{ x: -2, y: 0, label: "−2", color: "red" }, { x: 1, y: 0, label: "1", color: "red" }, { x: 5, y: 0, label: "5", color: "red" }], step: { x: 1, y: 10 } })],
    ["Grouping", S`Solve \(2x^3+x^2-8x-4=0\).`,
      [S`\(x^2(2x+1)-4(2x+1)=(2x+1)(x^2-4)=(2x+1)(x-2)(x+2)\).`],
      S`\(x=-\tfrac12,\ 2,\ -2\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -8, ymax: 8 }, curves: [{ f: (x) => 2 * x ** 3 + x * x - 8 * x - 4, color: "violet" }], points: [{ x: -2, y: 0, label: "−2", color: "red" }, { x: -0.5, y: 0, label: "−½", color: "red" }, { x: 2, y: 0, label: "2", color: "red" }], step: { x: 1, y: 2 } })],
    ["Irrational roots", S`Solve \(x^3-3x^2+x+1=0\).`,
      [S`\(P(1)=1-3+1+1=0\). Divide: \(x^2-2x-1\).`, S`\(x=\dfrac{2\pm\sqrt{4+4}}{2}=1\pm\sqrt2\).`],
      S`\(x=1\), \(x=1+\sqrt2\approx2.41\), \(x=1-\sqrt2\approx-0.41\)`,
      plane({ view: { xmin: -1.5, xmax: 3.5, ymin: -4, ymax: 4 }, curves: [{ f: (x) => x ** 3 - 3 * x * x + x + 1, color: "violet" }], points: [{ x: 1 - Math.SQRT2, y: 0, label: "1 − √2", color: "red" }, { x: 1, y: 0, label: "1", color: "red" }, { x: 1 + Math.SQRT2, y: 0, label: "1 + √2", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["Difference of cubes", S`Solve \(8x^3-27=0\).`,
      [S`\((2x)^3-3^3=(2x-3)(4x^2+6x+9)=0\).`, S`\(4x^2+6x+9\): discriminant \(36-144\lt0\), no real roots.`],
      S`\(x=\tfrac32\) (the only real root)`,
      plane({ view: { xmin: -1, xmax: 2.5, ymin: -30, ymax: 50 }, curves: [{ f: (x) => 8 * x ** 3 - 27, color: "violet" }], points: [{ x: 1.5, y: 0, label: "3/2", color: "red" }], step: { x: 0.5, y: 10 } })],
    ["A box", S`A box measures \(x\) by \(x+2\) by \(x+5\) cm and has volume \(56\) cm³. Find its dimensions.`,
      [S`\(x(x+2)(x+5)=56\Rightarrow x^3+7x^2+10x-56=0\).`, S`\(P(2)=8+28+20-56=0\). Divide: \(x^2+9x+28\), discriminant \(81-112\lt0\).`, S`Only \(x=2\).`],
      S`\(2\) cm by \(4\) cm by \(7\) cm`],
  ]),

  practice([
    q("solve", S`Solve \(x^3-6x^2+11x-6=0\).`, roots(1, 2, 3),
      "Try x = 1.", [S`\((x-1)(x-2)(x-3)=0\).`], S`\(1, 2, 3\)`),
    q("solve", S`Solve \(x^3-9x=0\).`, roots(0, 3, -3),
      "Common factor x.", [S`\(x(x-3)(x+3)=0\).`], S`\(0, \pm3\)`),
    q("cubes", S`Find the real root of \(x^3+27=0\).`, roots(-3),
      "Sum of cubes.", [S`\((x+3)(x^2-3x+9)=0\); the quadratic has no real roots.`], S`\(-3\)`),
    q("quadratic in form", S`Solve \(x^4-13x^2+36=0\).`, roots(-3, -2, 2, 3),
      "Let u = x².", [S`\((x^2-4)(x^2-9)=0\).`], S`\(\pm2, \pm3\)`),
    q("solve", S`Solve \(2x^3-3x^2-2x=0\).`, roots(0, -0.5, 2),
      "Factor out x first.", [S`\(x(2x+1)(x-2)=0\).`], S`\(0, -\tfrac12, 2\)`),
  ]),

  ...hard([
    ["A quartic in two steps", S`Solve \(x^4+x^3-7x^2-x+6=0\).`,
      [S`\(P(1)=1+1-7-1+6=0\): divide by \(x-1\) → \(x^3+2x^2-5x-6\).`, S`That cubic has \(P(-1)=-1+2+5-6=0\): divide by \(x+1\) → \(x^2+x-6=(x+3)(x-2)\).`, S`\((x-1)(x+1)(x+3)(x-2)=0\).`],
      S`\(x=1,\ -1,\ -3,\ 2\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -20, ymax: 16 }, curves: [{ f: (x) => x ** 4 + x ** 3 - 7 * x * x - x + 6, color: "violet" }], points: [{ x: -3, y: 0, color: "red" }, { x: -1, y: 0, color: "red" }, { x: 1, y: 0, color: "red" }, { x: 2, y: 0, color: "red" }], step: { x: 1, y: 4 } })],
    ["Consecutive integers", S`The product of three consecutive integers is 504. Find them, and show there is no other set.`,
      [S`\(n(n+1)(n+2)=504\Rightarrow n^3+3n^2+2n-504=0\).`, S`Since \(8^3\approx504\), try \(n=7\): \(343+147+14-504=0\) ✓.`, S`Divide: \(n^2+10n+72\), discriminant \(100-288\lt0\): no other real roots.`],
      S`7, 8, 9`],
  ], [
    q("hard", S`Solve \(x^3-2x^2-5x+6=0\).`, roots(1, -2, 3),
      "P(1) = 0.", [S`\((x-1)(x^2-x-6)=(x-1)(x-3)(x+2)\).`], S`\(1, -2, 3\)`),
    q("hard", S`How many real roots does \(x^3+x^2+x+1=0\) have?`, num(1),
      "Group.", [S`\(x^2(x+1)+(x+1)=(x+1)(x^2+1)\).`], S`\(1\)`),
    q("hard", S`Solve \(64x^3+1=0\).`, roots(-0.25),
      "Sum of cubes: (4x)³ + 1³.", [S`\((4x+1)(16x^2-4x+1)=0\); the quadratic has no real roots.`], S`\(-\tfrac14\)`),
  ]),

  wrapUp({
    qas: [
      ["Why must one side be 0 before factoring?", "The zero-product property only works for a product equal to 0: if ab = 0 then a = 0 or b = 0. It says nothing about ab = 6."],
      ["How many roots can a cubic equation have?", "1, 2 or 3 distinct real roots (2 when one root is repeated); it always has at least one."],
      ["What do non-real roots look like on the graph?", "They don't appear: a quadratic factor with negative discriminant adds no x-intercepts."],
      ["When should I use a graph instead?", "When no rational candidate works — the graph (or a calculator) gives approximate roots."],
      ["How do I remember the cubes patterns?", "Same sign in the binomial as the original, opposite sign in the middle of the trinomial, and the last term always positive (SOAP)."],
    ],
    summary: [
      "Move terms to one side; factor completely.",
      "Each factor = 0 gives a root.",
      "a³ ± b³ = (a ± b)(a² ∓ ab + b²).",
      "Roots of P(x) = 0 are x-intercepts of y = P(x).",
    ],
    next: "2.4 builds polynomials from their zeros: families of polynomial functions.",
  }),
];
