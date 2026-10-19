// MCV4U 2.1 — Derivative of a Polynomial Function: constant, power (including negative and fractional exponents),
// constant multiple, sum and difference rules; tangent lines and points with a given slope
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane } from "./lib.mjs";

export const TITLE = "2.1 Derivative of a Polynomial Function";
export const ID = "d8e79fe3-46ba-43de-abb7-32208b00a863";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "⚡",
    title: "Derivative of a Polynomial Function",
    overview: S`First principles always work, but they are slow. Patterns in the results give a handful of <strong>rules</strong> that make differentiating polynomials instant: the derivative of a constant is 0, the derivative of \(x^n\) is \(nx^{n-1}\) (the <strong>power rule</strong>), constants multiply through, and sums are differentiated term by term. The power rule also works for negative and fractional exponents, so \(\frac1x\) and \(\sqrt x\) are handled the same way once they are rewritten as powers.`,
    goals: [
      "use the constant, power, constant multiple, sum and difference rules;",
      "rewrite roots and reciprocals as powers before differentiating;",
      "find the equation of a tangent line;",
      "find the points where a tangent has a given slope;",
      "use Leibniz notation \\(\\frac{dy}{dx}\\).",
    ],
    curriculum: "A3.1 (verify the power rule for x^n, n a natural number, from first principles and by patterns), A3.2 (verify the power rule for rational exponents; use the constant, constant multiple and sum/difference rules)",
    prior: [
      [S`Derivative of \(x^3\) from first principles?`, S`\(3x^2\).`],
      [S`Write \(\frac1{x^2}\) as a power.`, S`\(x^{-2}\).`],
      [S`Write \(\sqrt[3]{x^2}\) as a power.`, S`\(x^{2/3}\).`],
    ],
    words: [
      ["Power rule", "\\(\\frac{d}{dx}x^n=nx^{n-1}\\)", "any real n"],
      ["Constant rule", "\\(\\frac{d}{dx}c=0\\)", ""],
      ["Constant multiple", "\\((cf)'=cf'\\)", ""],
      ["Sum / difference", "\\((f\\pm g)'=f'\\pm g'\\)", ""],
    ],
  }),

  section("📌 The rules", S`
  ${table(["Rule", "Statement", "Example"], [
    ["constant", "\\(\\frac{d}{dx}(c)=0\\)", "\\(\\frac{d}{dx}(7)=0\\)"],
    ["power", "\\(\\frac{d}{dx}(x^n)=nx^{n-1}\\)", "\\(\\frac{d}{dx}x^{5}=5x^4\\)"],
    ["constant multiple", "\\(\\frac{d}{dx}(cf)=cf'\\)", "\\(\\frac{d}{dx}(3x^4)=12x^3\\)"],
    ["sum / difference", "\\((f\\pm g)'=f'\\pm g'\\)", "\\(\\frac{d}{dx}(x^2-5x)=2x-5\\)"],
    ["negative / fractional powers", "same power rule", "\\(\\frac{d}{dx}x^{-1}=-x^{-2}\\), \\(\\frac{d}{dx}x^{1/2}=\\tfrac12x^{-1/2}\\)"],
  ])}
  ${plane({ view: { xmin: -2.5, xmax: 3, ymin: -6, ymax: 8 }, curves: [{ f: (x) => x ** 3 - 3 * x * x + 2, color: "violet" }, { f: (x) => 3 * x * x - 6 * x, color: "blue" }], points: [{ x: 0, y: 2, label: "max", color: "red" }, { x: 2, y: -2, label: "min", color: "red" }, { x: 0, y: 0, color: "blue" }, { x: 2, y: 0, color: "blue" }], step: { x: 1, y: 2 } }, "f(x) = x³ − 3x² + 2 (violet) and f′(x) = 3x² − 6x (blue): f′ = 0 at the turning points x = 0 and x = 2.")}
  ${keyIdea(S`To differentiate a polynomial, multiply each term by its exponent and lower the exponent by 1; constant terms disappear. Rewrite \(\sqrt x=x^{1/2}\) and \(\frac{c}{x^n}=cx^{-n}\) first.`)}`),

  section("📌 Explore", S`<p>Set the coefficients of a cubic. The derivative is computed term by term; the dashed blue graph of \(f'\) passes through the height equal to the slope of the green tangent.</p>`),

  widget("powerRuleLab", { init: [0.5, 0, -3, 1] }),

  section("📌 Tangents and slopes", S`
  <p>The tangent at \(x=a\) has slope \(f'(a)\) and passes through \((a,f(a))\). To find where the slope equals \(m\), solve \(f'(x)=m\).</p>
  ${watchOut([
    "The power rule needs x to a power: rewrite 3/x² as 3x⁻², not 3 · 1/(2x).",
    "Lowering a negative exponent makes it more negative: x⁻² → −2x⁻³.",
    "Don't apply the power rule to a product or quotient — expand or simplify first (or use the product rule, 2.2).",
    "The derivative of a constant term is 0, but the derivative of 5x is 5, not 0.",
    "Use f(a), not f′(a), for the point on the tangent line.",
  ])}`),

  examples([
    ["Term by term", S`Differentiate \(f(x)=4x^5-3x^2+7x-2\).`,
      [S`\(4\cdot5x^4-3\cdot2x+7-0\).`],
      S`\(f'(x)=20x^4-6x+7\)`],
    ["Roots and reciprocals", S`Differentiate \(y=\sqrt x+\dfrac3{x^2}\).`,
      [S`Rewrite: \(y=x^{1/2}+3x^{-2}\).`, S`\(\frac{dy}{dx}=\tfrac12x^{-1/2}-6x^{-3}\).`],
      S`\(\dfrac{dy}{dx}=\dfrac1{2\sqrt x}-\dfrac6{x^3}\)`],
    ["A tangent line", S`Find the tangent to \(y=x^3-2x+1\) at \(x=2\).`,
      [S`\(y'=3x^2-2\); \(y'(2)=10\). Point: \(y(2)=8-4+1=5\).`, S`\(y-5=10(x-2)\).`],
      S`\(y=10x-15\)`,
      plane({ view: { xmin: -2, xmax: 3, ymin: -6, ymax: 14 }, curves: [{ f: (x) => x ** 3 - 2 * x + 1, color: "violet" }, { f: (x) => 10 * x - 15, color: "green" }], points: [{ x: 2, y: 5, label: "(2, 5)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Where is the slope 4?", S`Find the points on \(y=x^3-3x^2+4x\) where the tangent has slope 4.`,
      [S`\(y'=3x^2-6x+4=4\Rightarrow3x(x-2)=0\).`, S`\(x=0\): \((0,0)\); \(x=2\): \((2,4)\).`],
      S`\((0,0)\) and \((2,4)\)`,
      plane({ view: { xmin: -1, xmax: 3, ymin: -3, ymax: 9 }, curves: [{ f: (x) => x ** 3 - 3 * x * x + 4 * x, color: "violet" }, { f: (x) => 4 * x, color: "green" }, { f: (x) => 4 * x - 4, color: "green" }], points: [{ x: 0, y: 0, color: "red" }, { x: 2, y: 4, label: "(2, 4)", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["Simplify first", S`Differentiate \(y=(2x-1)(x+3)\) and \(g(x)=\dfrac{x^2+1}{x}\).`,
      [S`\(y=2x^2+5x-3\Rightarrow y'=4x+5\).`, S`\(g(x)=x+x^{-1}\Rightarrow g'(x)=1-x^{-2}\).`],
      S`\(y'=4x+5\); \(g'(x)=1-\dfrac1{x^2}\)`],
  ]),

  practice([
    q("power rule", S`Find \(\dfrac{dy}{dx}\) for \(y=6x^3\).`, expr("18*x^2"),
      "3 · 6x².", [S`\(18x^2\).`], S`\(18x^2\)`),
    q("evaluate", S`For \(f(x)=x^4-3x\), find \(f'(2)\).`, num(29),
      "f′(x) = 4x³ − 3.", [S`\(32-3\).`], S`\(29\)`),
    q("constant", S`What is \(\dfrac{d}{dx}(5)\)?`, num(0),
      "Constant rule.", [S`\(0\).`], S`\(0\)`),
    q("negative power", S`Find \(f'(x)\) for \(f(x)=\dfrac2x\).`, expr("-2/x^2"),
      "2x⁻¹.", [S`\(-2x^{-2}\).`], S`\(-\dfrac2{x^2}\)`),
    q("root", S`Find the slope of the tangent to \(y=\sqrt x\) at \(x=9\) (4 decimals).`, num(0.1667, 0.0005),
      "½x^(−½).", [S`\(\frac1{2\cdot3}\).`], S`\(\tfrac16\)`),
  ]),

  ...hard([
    ["Two conditions", S`Find \(a\) and \(b\) so that \(y=ax^2+bx\) passes through \((1,4)\) and has a tangent of slope 7 there.`,
      [S`Point: \(a+b=4\). Slope: \(y'=2ax+b\Rightarrow2a+b=7\).`, S`Subtract: \(a=3\), \(b=1\).`],
      S`\(y=3x^2+x\)`],
    ["Tangents from an outside point", S`Find the equations of the tangents to \(y=x^2\) that pass through \((2,3)\).`,
      [S`Tangent at \((a,a^2)\): \(y=2ax-a^2\). Through \((2,3)\): \(3=4a-a^2\Rightarrow a^2-4a+3=0\).`, S`\(a=1\): \(y=2x-1\). \(a=3\): \(y=6x-9\).`],
      S`\(y=2x-1\) and \(y=6x-9\)`,
      plane({ view: { xmin: -1, xmax: 4, ymin: -2, ymax: 12 }, curves: [{ f: (x) => x * x, color: "violet" }, { f: (x) => 2 * x - 1, color: "green" }, { f: (x) => 6 * x - 9, color: "green" }], points: [{ x: 2, y: 3, label: "(2, 3)", color: "red" }, { x: 1, y: 1, color: "blue" }, { x: 3, y: 9, color: "blue" }], step: { x: 1, y: 2 } })],
  ], [
    q("hard", S`At what positive \(x\) is the tangent to \(y=2x^3-24x\) horizontal?`, num(2),
      "6x² − 24 = 0.", [S`\(x^2=4\).`], S`\(2\)`),
    q("hard", S`For \(f(x)=x^{2/3}\), find \(f'(8)\) (4 decimals).`, num(0.3333, 0.0005),
      "⅔x^(−⅓).", [S`\(\frac23\cdot\frac12\).`], S`\(\tfrac13\)`),
    q("hard", S`The normal to a curve is perpendicular to the tangent. Find the slope of the normal to \(y=x^2\) at \(x=1\).`, num(-0.5, 0.0001),
      "Negative reciprocal of the tangent slope.", [S`Tangent slope 2, normal \(-\frac12\).`], S`\(-\tfrac12\)`),
  ]),

  wrapUp({
    qas: [
      ["Why does the power rule work?", "Expanding (x + h)ⁿ gives xⁿ + nxⁿ⁻¹h + (terms with h²); subtracting xⁿ, dividing by h and letting h → 0 leaves nxⁿ⁻¹."],
      ["Does it work for negative and fractional exponents?", "Yes — the same rule holds for any real exponent, once the function is written as a power of x."],
      ["Why is the derivative of a constant 0?", "A constant function's graph is horizontal: every tangent has slope 0."],
      ["Can I differentiate a product term by term?", "No: (uv)′ ≠ u′v′. Expand first, or use the product rule in 2.2."],
      ["How do I find a tangent line?", "Slope m = f′(a), point (a, f(a)), then y − f(a) = m(x − a)."],
    ],
    summary: [
      "(xⁿ)′ = nxⁿ⁻¹; (c)′ = 0.",
      "Constants multiply through; sums go term by term.",
      "Rewrite roots and reciprocals as powers.",
      "Tangent: slope f′(a) through (a, f(a)).",
    ],
    next: "2.2 differentiates products.",
  }),
];
