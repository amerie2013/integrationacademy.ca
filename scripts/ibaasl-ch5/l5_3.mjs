// IB AA SL 5.3 — Differentiation Rules: power rule (integer and rational powers), constant multiples and sums, rewriting before differentiating, tangents and normals
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "5.3 Differentiation Rules";
export const ID = "e4d9779c-56a9-4493-9b06-e0fb457ecb0e";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "⚙️",
    title: "Differentiation Rules",
    overview: S`First principles always works, but it is slow. The patterns it produces — \((x^2)'=2x\), \((x^3)'=3x^2\) — generalise to the power rule \(\frac{d}{dx}(x^n)=nx^{n-1}\), which, with the rules for sums and constant multiples, differentiates any polynomial at once. In this lesson you will use these rules (including negative and fractional powers), rewrite expressions before differentiating, and find the equations of tangents and normals.`,
    goals: [
      "use \\(\\frac{d}{dx}(x^n)=nx^{n-1}\\) for integer and rational \\(n\\);",
      "differentiate sums, differences and constant multiples term by term;",
      "rewrite roots, fractions and products as powers of \\(x\\) before differentiating;",
      "find points where the gradient has a given value;",
      "find the equations of the tangent and the normal to a curve at a point.",
    ],
    curriculum: "SL 5.3 (derivative of xⁿ, n ∈ ℚ; derivatives of sums and constant multiples) and SL 5.4 (tangents and normals at a given point, and their equations)",
    prior: [
      [S`Write \(\frac{1}{x^3}\) and \(\sqrt{x}\) as powers of \(x\).`, S`\(x^{-3}\), \(x^{1/2}\).`],
      [S`Find the line through \((2,5)\) with gradient \(-3\).`, S`\(y=-3x+11\).`],
      [S`A line has gradient 4. What is the gradient of a perpendicular line?`, S`\(-\frac14\).`],
    ],
    words: [
      ["Power rule", "\\(\\frac{d}{dx}(x^n)=nx^{n-1}\\)", "\\((x^5)'=5x^4\\)"],
      ["Constant multiple", "\\((kf)'=kf'\\)", "\\((4x^3)'=12x^2\\)"],
      ["Sum rule", "\\((f+g)'=f'+g'\\)", "term by term"],
      ["Tangent", "\\(y-y_1=f'(x_1)(x-x_1)\\)", "touches the curve"],
      ["Normal", "perpendicular to the tangent: gradient \\(-\\frac{1}{f'(x_1)}\\)", "\\(f'=2\\Rightarrow-\\frac12\\)"],
    ],
  }),

  section("📌 The rules", S`
  ${table(["f(x)", "f′(x)", "Reason"], [
    [S`\(c\) (constant)`, S`\(0\)`, "a horizontal line has gradient 0"],
    [S`\(x^n\)`, S`\(nx^{n-1}\)`, "power rule, any rational n"],
    [S`\(kx^n\)`, S`\(knx^{n-1}\)`, "constant multiple"],
    [S`\(f(x)\pm g(x)\)`, S`\(f'(x)\pm g'(x)\)`, "term by term"],
  ])}
  <p>So \(\frac{d}{dx}(4x^3-5x^2+7x-2)=12x^2-10x+7\). For other forms, rewrite as powers first:</p>
  <p style="text-align:center">\(\frac{6}{x^2}=6x^{-2}\Rightarrow-12x^{-3}=-\frac{12}{x^3}\); \(\quad\sqrt x=x^{1/2}\Rightarrow\frac12x^{-1/2}=\frac{1}{2\sqrt x}\)</p>
  ${plane({ view: { xmin: -3, xmax: 3, ymin: -6, ymax: 10 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => x ** 3, color: "violet" }, { f: (x) => 3 * x * x, color: "amber" }], points: [P(1, 1, "(1, 1)"), P(1, 3, "(1, 3)", "amber")] }, "y = x³ (violet) and its derivative 3x² (amber)")}
  ${plane({ view: { xmin: -0.3, xmax: 9, ymin: -0.5, ymax: 3.5 }, step: { x: 1, y: 0.5 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "violet" }, { f: (x) => 1 / (2 * Math.sqrt(x)), a: 0.03, color: "amber" }], points: [P(4, 2, "(4, 2)"), P(4, 0.25, "(4, 0.25)", "amber")] }, "y = √x and its derivative 1/(2√x): the gradient at x = 4 is 0.25")}
  ${keyIdea(S`Bring the power down, then reduce the power by one. Constants vanish. Rewrite roots and fractions as powers of \(x\) and expand brackets before differentiating.`)}`),

  section("📌 Tangents and normals", S`
  <p>To find the tangent at \(x=x_1\): find \(y_1=f(x_1)\) and the gradient \(m=f'(x_1)\), then use \(y-y_1=m(x-x_1)\). The normal passes through the same point with gradient \(-\frac1m\).</p>
  ${plane({ view: { xmin: -2, xmax: 5, ymin: -4, ymax: 8 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x - 2 * x + 2, color: "violet" }, { f: (x) => 2 * (x - 2) + 2, color: "red" }, { f: (x) => -0.5 * (x - 2) + 2, color: "green" }], points: [P(2, 2, "(2, 2)")] }, "y = x² − 2x + 2 at (2, 2): tangent y = 2x − 2 (red), normal y = −x/2 + 3 (green)")}
  <p>To find where the gradient has a given value \(k\), solve \(f'(x)=k\). For example, the tangent to \(y=x^3\) is parallel to \(y=12x\) where \(3x^2=12\), i.e. at \(x=\pm2\).</p>
  ${plane({ view: { xmin: -3, xmax: 3, ymin: -12, ymax: 12 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => x ** 3, color: "violet" }, { f: (x) => 12 * (x - 2) + 8, color: "red" }, { f: (x) => 12 * (x + 2) - 8, color: "red" }], points: [P(2, 8, "(2, 8)"), P(-2, -8, "(−2, −8)")] }, "Two tangents to y = x³ with gradient 12")}
  ${watchOut([
    "The derivative of a constant is 0, not the constant.",
    "Rewrite 1/x² as x⁻² first; (x⁻²)′ = −2x⁻³, not −2x⁻¹.",
    "Do not differentiate a product or quotient factor by factor: expand or divide first.",
    "The normal's gradient is the negative reciprocal of f′(x₁), not of f(x₁).",
  ])}`),

  section("📌 Explore", S`<p>Build a cubic with the sliders and move \(x_0\). The readout gives \(f'(x)\) by the power rule, the tangent (red) and the normal (green).</p>`),

  widget("ibPowerRule", { init: [1, -3, 0, 2, 1] }),

  examples([
    ["Level 1 · A polynomial", S`Differentiate \(f(x)=2x^4-x^3+6x-9\).`,
      [S`Term by term: \(8x^3-3x^2+6\).`],
      S`\(f'(x)=8x^3-3x^2+6\)`],
    ["Level 1 · Negative and fractional powers", S`Differentiate \(y=\frac{5}{x}+4\sqrt x\).`,
      [S`\(y=5x^{-1}+4x^{1/2}\).`, S`\(\frac{dy}{dx}=-5x^{-2}+2x^{-1/2}=-\frac{5}{x^2}+\frac{2}{\sqrt x}\).`],
      S`\(-\frac{5}{x^2}+\frac{2}{\sqrt x}\)`],
    ["Level 2 · Rewrite first", S`Differentiate \(f(x)=\frac{x^3+2x}{x}\) and \(g(x)=(2x-1)^2\).`,
      [S`\(f(x)=x^2+2\Rightarrow f'(x)=2x\) (for \(x\ne0\)).`, S`\(g(x)=4x^2-4x+1\Rightarrow g'(x)=8x-4\).`],
      S`\(2x\); \(8x-4\)`],
    ["Level 2 · Tangent and normal", S`Find the tangent and normal to \(y=x^3-4x\) at \(x=1\).`,
      [S`\(y(1)=-3\); \(\frac{dy}{dx}=3x^2-4=-1\) at \(x=1\).`, S`Tangent: \(y+3=-(x-1)\Rightarrow y=-x-2\).`, S`Normal: gradient 1: \(y=x-4\).`],
      S`\(y=-x-2\); \(y=x-4\)`,
      plane({ view: { xmin: -3, xmax: 4, ymin: -7, ymax: 5 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x ** 3 - 4 * x, color: "violet" }, { f: (x) => -x - 2, color: "red" }, { f: (x) => x - 4, color: "green" }], points: [P(1, -3, "(1, −3)")] })],
    ["Level 3 · Given a gradient", S`Find the points on \(y=x^3-3x^2+5\) where the tangent is parallel to \(y=9x\), and the equation of one such tangent.`,
      [S`\(3x^2-6x=9\Rightarrow x^2-2x-3=0\Rightarrow x=3\) or \(-1\).`, S`Points \((3,5)\) and \((-1,1)\).`, S`At \((3,5)\): \(y-5=9(x-3)\Rightarrow y=9x-22\).`],
      S`\((3,5)\), \((-1,1)\); \(y=9x-22\)`],
  ]),

  practice([
    q("Level 1 · power rule", S`For \(f(x)=x^6\), find \(f'(1)\).`, num(6),
      "6x⁵.", [S`\(6(1)^5\).`], S`\(6\)`),
    q("Level 1 · polynomial", S`For \(f(x)=3x^2-7x+4\), find \(f'(2)\).`, num(5),
      "6x − 7.", [S`\(12-7\).`], S`\(5\)`),
    q("Level 2 · negative power", S`For \(y=\frac{8}{x^2}\), find \(\frac{dy}{dx}\) at \(x=2\).`, num(-2),
      "8x⁻² → −16x⁻³.", [S`\(-\frac{16}{8}\).`], S`\(-2\)`),
    q("Level 2 · root", S`For \(y=6\sqrt x\), find \(\frac{dy}{dx}\) at \(x=9\).`, num(1),
      "6x^½ → 3x^(−½).", [S`\(\frac{3}{3}\).`], S`\(1\)`),
    q("Level 2 · normal", S`At a point on a curve the tangent has gradient \(-\frac14\). The normal's gradient is:`, choice(["4", "−4", "1/4", "−1/4"], 0),
      "Negative reciprocal.", [S`\(-\frac{1}{-1/4}=4\).`], S`\(4\)`),
  ]),

  ...hard([
    ["A tangent through a given point", S`The tangent to \(y=x^2+k\) at \(x=2\) passes through the origin. Find \(k\).`,
      [S`At \(x=2\): \(y=4+k\), gradient \(4\).`, S`Tangent \(y-(4+k)=4(x-2)\); through \((0,0)\): \(-(4+k)=-8\).`, S`\(k=4\).`],
      S`\(k=4\)`,
      plane({ view: { xmin: -3, xmax: 4, ymin: -2, ymax: 14 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => x * x + 4, color: "violet" }, { f: (x) => 4 * x, color: "red" }], points: [P(2, 8, "(2, 8)"), P(0, 0, "(0, 0)", "green")] })],
    ["Where the normal meets the curve again", S`Find the normal to \(y=x^2\) at \((1,1)\) and the other point where it meets the curve.`,
      [S`Gradient 2, so the normal has gradient \(-\frac12\): \(y=-\frac12x+\frac32\).`, S`\(x^2=-\frac12x+\frac32\Rightarrow2x^2+x-3=0\Rightarrow(2x+3)(x-1)=0\).`, S`Other point \(x=-1.5\), \(y=2.25\).`],
      S`\((-1.5,2.25)\)`],
  ], [
    q("Level 3 · tangent intercept", S`Find the y-intercept of the tangent to \(y=x^3\) at \(x=2\).`, num(-16),
      "y = 12x − 16.", [S`\(8-24\).`], S`\(-16\)`),
    q("Level 3 · horizontal tangents", S`Find the sum of the x-coordinates where \(y=2x^3-9x^2+12x\) has horizontal tangents.`, num(3),
      "6x² − 18x + 12 = 0.", [S`\(x=1,2\).`], S`\(3\)`),
    q("Level 3 · unknown coefficient", S`The gradient of \(y=ax^2+3x\) at \(x=2\) is 11. Find \(a\).`, num(2),
      "2a(2) + 3 = 11.", [S`\(4a=8\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Does the power rule work for every power?", "Yes for every rational n in this course — negative and fractional powers included — once the term is written as xⁿ."],
      ["Why is the derivative of a constant 0?", "y = c is a horizontal line; its gradient is 0 everywhere."],
      ["Can I differentiate (x + 1)(x − 2) factor by factor?", "No. Expand to x² − x − 2 first, then differentiate: 2x − 1."],
      ["What do I need for a tangent equation?", "A point (x₁, f(x₁)) and the gradient f′(x₁)."],
      ["When is a normal vertical?", "When the tangent is horizontal (f′(x₁) = 0); the normal is then x = x₁."],
    ],
    summary: [
      "(xⁿ)′ = nxⁿ⁻¹; constants → 0; term by term.",
      "Rewrite roots, fractions and products first.",
      "Tangent: y − y₁ = f′(x₁)(x − x₁).",
      "Normal: gradient −1/f′(x₁).",
      "Given gradient k: solve f′(x) = k.",
    ],
    next: "5.4 uses the first and second derivatives to find turning points and the shape of graphs.",
  }),
];
