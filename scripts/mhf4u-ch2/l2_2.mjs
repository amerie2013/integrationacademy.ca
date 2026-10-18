// MHF4U 2.2 — The Factor Theorem: x − b is a factor exactly when P(b) = 0; integral and rational zero tests,
// factoring cubics and quartics, factoring by grouping, and unknown coefficients from given factors
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, fexpr, hard, plane } from "./lib.mjs";

export const TITLE = "2.2 The Factor Theorem";
export const ID = "c0248e37-360f-4170-bf77-5fbc142bc5fe";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🔑",
    title: "The Factor Theorem",
    overview: S`If dividing \(P(x)\) by \(x-b\) leaves remainder 0, then \(x-b\) is a factor — and by the remainder theorem that happens exactly when \(P(b)=0\). This <strong>factor theorem</strong> turns factoring a cubic or quartic into a search: test likely values of \(b\), and every zero you find gives a factor. The integral and rational zero tests tell you which values are worth testing.`,
    goals: [
      "state and use the factor theorem;",
      "list the possible integer and rational zeros of a polynomial;",
      "factor cubic and quartic polynomials completely;",
      "factor by grouping when the terms pair up;",
      "find unknown coefficients so that a given binomial is a factor.",
    ],
    curriculum: "C3.1, C3.2 (use the factor theorem to factor polynomial expressions of degree ≤ 4 with integer coefficients, including by grouping)",
    prior: [
      [S`Remainder of \(x^3-8\) divided by \(x-2\)?`, S`\(P(2)=0\).`],
      [S`Factor \(x^2-x-12\).`, S`\((x-4)(x+3)\).`],
      [S`List the factors of 12.`, S`\(\pm1,\pm2,\pm3,\pm4,\pm6,\pm12\).`],
    ],
    words: [
      ["Factor theorem", "\\(x-b\\) is a factor of \\(P(x)\\) ⇔ \\(P(b)=0\\)", ""],
      ["Integral zero theorem", "integer zeros divide the constant term", "for leading coefficient 1"],
      ["Rational zero theorem", "rational zeros \\(\\tfrac pq\\): p divides the constant, q divides the leading coefficient", ""],
      ["Grouping", "pairing terms to share a common binomial factor", ""],
    ],
  }),

  section("📌 From zeros to factors", S`
  ${table(["If you know…", "then…", "Example"], [
    ["P(b) = 0", "x − b is a factor", "P(2) = 0 → (x − 2)"],
    ["P(b/a) = 0", "ax − b is a factor", "P(3/2) = 0 → (2x − 3)"],
    ["x − b is a factor", "the quotient P(x) ÷ (x − b) has degree one lower", "cubic → quadratic"],
  ])}
  ${keyIdea(S`To factor a cubic: (1) list the candidates \(\pm\frac{\text{factors of the constant}}{\text{factors of the leading coefficient}}\); (2) test until \(P(b)=0\); (3) divide by \(x-b\); (4) factor the quadratic quotient (or use the quadratic formula). For a quartic, repeat once more.`)}
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -14, ymax: 10 }, curves: [{ f: (x) => (x + 1) * (x - 2) * (x - 3), color: "violet" }], points: [{ x: -1, y: 0, label: "P(−1) = 0", color: "green" }, { x: 2, y: 0, label: "P(2) = 0", color: "green" }, { x: 3, y: 0, label: "P(3) = 0", color: "green" }, { x: 1, y: 4, label: "P(1) = 4: not a factor", color: "red" }], step: { x: 1, y: 2 } }, "x³ − 4x² + x + 6 = (x + 1)(x − 2)(x − 3): every x-intercept is a factor.")}`),

  section("📌 Explore", S`<p>Set the coefficients of a cubic. Every candidate is tested for you; green ones are zeros, and the polynomial is factored using them.</p>`),

  widget("factorFinder", { init: [2, -3, -11, 6] }),

  section("📌 Factoring strategies", S`
  <p>Before testing, check for a common factor and for grouping: \(x^3-2x^2-9x+18=x^2(x-2)-9(x-2)=(x-2)(x^2-9)\). Grouping is quicker than the factor theorem when the coefficients come in matching pairs.</p>
  ${watchOut([
    "A zero of x = −3 gives the factor (x + 3).",
    "A zero of x = 3/2 gives (2x − 3), not (x − 3/2) with fractions left in the answer.",
    "Test small candidates first (±1, then ±2) — they are quickest to evaluate.",
    "After dividing, factor the quotient completely; it may factor again.",
    "Not every polynomial factors over the integers; if no candidate works, the zeros are irrational or not real.",
  ])}`),

  examples([
    ["Test a factor, then finish", S`Is \(x-2\) a factor of \(x^3-3x^2-4x+12\)? If so, factor completely.`,
      [S`\(P(2)=8-12-8+12=0\): yes.`, S`Divide by \(x-2\): \(1,\,-1,\,-6\) with remainder 0, so the quotient is \(x^2-x-6\).`, S`\(x^2-x-6=(x-3)(x+2)\).`],
      S`\((x-2)(x-3)(x+2)\)`,
      plane({ view: { xmin: -3, xmax: 4, ymin: -8, ymax: 16 }, curves: [{ f: (x) => x ** 3 - 3 * x * x - 4 * x + 12, color: "violet" }], points: [{ x: -2, y: 0, label: "−2", color: "green" }, { x: 2, y: 0, label: "2", color: "green" }, { x: 3, y: 0, label: "3", color: "green" }], step: { x: 1, y: 2 } })],
    ["Search the integer candidates", S`Factor \(x^3+2x^2-5x-6\).`,
      [S`Candidates \(\pm1,\pm2,\pm3,\pm6\).`, S`\(P(1)=-8\); \(P(-1)=-1+2+5-6=0\) ✓.`, S`Divide by \(x+1\): quotient \(x^2+x-6=(x+3)(x-2)\).`],
      S`\((x+1)(x+3)(x-2)\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -10, ymax: 6 }, curves: [{ f: (x) => x ** 3 + 2 * x * x - 5 * x - 6, color: "violet" }], points: [{ x: -3, y: 0, label: "−3", color: "green" }, { x: -1, y: 0, label: "−1", color: "green" }, { x: 2, y: 0, label: "2", color: "green" }], step: { x: 1, y: 2 } })],
    ["A rational zero", S`Factor \(2x^3-x^2-7x+6\).`,
      [S`Candidates \(\pm1,\pm2,\pm3,\pm6,\pm\tfrac12,\pm\tfrac32\).`, S`\(P(1)=2-1-7+6=0\) ✓. Divide: quotient \(2x^2+x-6\).`, S`\(2x^2+x-6=(2x-3)(x+2)\).`],
      S`\((x-1)(2x-3)(x+2)\)`,
      plane({ view: { xmin: -3, xmax: 2.5, ymin: -6, ymax: 10 }, curves: [{ f: (x) => 2 * x ** 3 - x * x - 7 * x + 6, color: "violet" }], points: [{ x: -2, y: 0, label: "−2", color: "green" }, { x: 1, y: 0, label: "1", color: "green" }, { x: 1.5, y: 0, label: "3/2", color: "green" }], step: { x: 0.5, y: 2 } })],
    ["Factor by grouping", S`Factor \(x^3-2x^2-9x+18\).`,
      [S`\(x^2(x-2)-9(x-2)=(x-2)(x^2-9)\).`, S`Difference of squares: \(x^2-9=(x-3)(x+3)\).`],
      S`\((x-2)(x-3)(x+3)\)`],
    ["A quartic", S`Factor \(x^4-2x^3-7x^2+8x+12\).`,
      [S`\(P(-1)=1+2-7-8+12=0\): divide by \(x+1\) → \(x^3-3x^2-4x+12\).`, S`That cubic has \(P(2)=8-12-8+12=0\): divide by \(x-2\) → \(x^2-x-6\).`, S`\(x^2-x-6=(x-3)(x+2)\).`],
      S`\((x+1)(x-2)(x-3)(x+2)\)`,
      plane({ view: { xmin: -3, xmax: 4, ymin: -16, ymax: 16 }, curves: [{ f: (x) => x ** 4 - 2 * x ** 3 - 7 * x * x + 8 * x + 12, color: "violet" }], points: [{ x: -2, y: 0, color: "green" }, { x: -1, y: 0, color: "green" }, { x: 2, y: 0, color: "green" }, { x: 3, y: 0, color: "green" }], step: { x: 1, y: 4 } })],
  ]),

  practice([
    q("is it a factor?", S`Is \(x+3\) a factor of \(x^3+3x^2-x-3\)?`, choice(["yes", "no"], 0),
      "Evaluate P(−3).", [S`\(-27+27+3-3=0\).`], "yes"),
    q("factor", S`Factor \(x^3-7x+6\) completely.`, fexpr("(x-1)(x-2)(x+3)"),
      "Try x = 1 first.", [S`\(P(1)=0\); quotient \(x^2+x-6=(x+3)(x-2)\).`], S`\((x-1)(x-2)(x+3)\)`),
    q("unknown k", S`Find \(k\) so that \(x-2\) is a factor of \(x^3+kx-6\).`, num(-1),
      "P(2) = 0.", [S`\(8+2k-6=0\).`], S`\(-1\)`),
    q("candidates", S`How many integer candidates does the integral zero theorem give for \(x^3-3x^2+2x+8\)?`, num(8),
      "Factors of 8, positive and negative.", [S`\(\pm1,\pm2,\pm4,\pm8\).`], S`\(8\)`),
    q("factor", S`Factor \(2x^3+3x^2-3x-2\) completely.`, fexpr("(x-1)(2x+1)(x+2)"),
      "P(1) = 0.", [S`Quotient \(2x^2+5x+2=(2x+1)(x+2)\).`], S`\((x-1)(2x+1)(x+2)\)`),
  ]),

  ...hard([
    ["Two factors at once", S`Find \(k\) and \(m\) so that \(x^2-x-2\) is a factor of \(P(x)=x^3+kx^2+mx+6\). Then factor \(P(x)\) completely.`,
      [S`\(x^2-x-2=(x-2)(x+1)\), so \(P(2)=0\) and \(P(-1)=0\).`, S`\(P(2)=8+4k+2m+6=0\Rightarrow 2k+m=-7\). \(P(-1)=-1+k-m+6=0\Rightarrow k-m=-5\).`, S`Add: \(3k=-12\Rightarrow k=-4\), \(m=1\). Then \(P(x)=x^3-4x^2+x+6=(x-2)(x+1)(x-3)\).`],
      S`\(k=-4\), \(m=1\); \(P(x)=(x-2)(x+1)(x-3)\)`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -8, ymax: 8 }, curves: [{ f: (x) => x ** 3 - 4 * x * x + x + 6, color: "violet" }], points: [{ x: -1, y: 0, label: "−1", color: "green" }, { x: 2, y: 0, label: "2", color: "green" }, { x: 3, y: 0, label: "3", color: "green" }], step: { x: 1, y: 2 } })],
    ["Factors of xⁿ − aⁿ", S`Show that \(x-a\) is a factor of \(x^n-a^n\) for every whole number \(n\). Use it to factor \(x^3-8\) and \(x^4-16\).`,
      [S`\(P(a)=a^n-a^n=0\), so by the factor theorem \(x-a\) is a factor.`, S`\(x^3-8\): divide by \(x-2\) → \(x^2+2x+4\) (no real zeros).`, S`\(x^4-16=(x^2-4)(x^2+4)=(x-2)(x+2)(x^2+4)\).`],
      S`\(x^3-8=(x-2)(x^2+2x+4)\); \(x^4-16=(x-2)(x+2)(x^2+4)\)`],
  ], [
    q("hard", S`Factor \(x^4-5x^2+4\) completely.`, fexpr("(x-1)(x+1)(x-2)(x+2)"),
      "Treat it as a quadratic in x².", [S`\((x^2-1)(x^2-4)\).`], S`\((x-1)(x+1)(x-2)(x+2)\)`),
    q("hard", S`Find \(k\) so that \(x+1\) is a factor of \(2x^4+kx^3-3x+1\).`, num(6),
      "P(−1) = 0.", [S`\(2-k+3+1=0\).`], S`\(6\)`),
    q("hard", S`How many real zeros does \(x^3-3x^2+x-3\) have?`, num(1),
      "Group the terms.", [S`\(x^2(x-3)+(x-3)=(x-3)(x^2+1)\).`], S`\(1\)`),
  ]),

  wrapUp({
    qas: [
      ["How is the factor theorem related to the remainder theorem?", "It is the special case R = 0: P(b) = 0 means dividing by x − b leaves no remainder, so x − b divides P exactly."],
      ["Which values should I test first?", "The integer candidates closest to 0 (±1, ±2): they are easy to evaluate and often work."],
      ["Why do rational zeros have q dividing the leading coefficient?", "If (qx − p) is a factor, multiplying it out, q must divide the leading coefficient and p the constant term."],
      ["What if none of the candidates work?", "Then the polynomial has no rational zeros; its real zeros (if any) are irrational, found with graphs or the quadratic formula on a factor."],
      ["When is grouping better?", "When the ratio of the first two coefficients equals the ratio of the last two, e.g. 1 : −2 and −9 : 18."],
    ],
    summary: [
      "x − b is a factor ⇔ P(b) = 0.",
      "Candidates: ±(factors of constant)/(factors of leading coefficient).",
      "Divide out each factor; factor the quotient.",
      "Grouping and difference of squares save time.",
    ],
    next: "2.3 uses factoring to solve polynomial equations.",
  }),
];
