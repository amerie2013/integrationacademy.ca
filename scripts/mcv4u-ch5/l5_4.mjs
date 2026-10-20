// MCV4U 5.4 — Differentiation Rules for Exponential Functions (NEW lesson): combining exponentials and logarithms with
// the product, quotient and chain rules, logarithmic differentiation (x^x), second derivatives and curve features
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "5.4 Differentiation Rules for Exponential Functions";
export const ID = "6d4fc005-0001-4001-8001-000000000504";

const S = String.raw;
const E = Math.E;
const PI = Math.PI;
export const blocks = () => [
  intro({
    icon: "🧮",
    title: "Differentiation Rules for Exponential Functions",
    overview: S`Real functions mix exponentials with polynomials, trigonometric functions and logarithms: \(e^{3x}\sin2x\), \(\frac{x^2+1}{e^x}\), \(\ln(e^{2x}+1)\). Every derivative rule still applies — product, quotient, chain — layered as needed. One new technique handles functions with the variable in both the base and the exponent, such as \(x^x\): take the natural logarithm of both sides first, then differentiate. This is <strong>logarithmic differentiation</strong>.`,
    goals: [
      "combine exponential and logarithmic derivatives with the product, quotient and chain rules;",
      "use logarithmic differentiation for functions like x^x;",
      "find second derivatives of exponential functions;",
      "locate extrema and inflection points of exponential functions;",
      "simplify answers by factoring out exponentials.",
    ],
    curriculum: "A3.4 (verify the chain rule and use the product, quotient and chain rules to differentiate combinations of exponential and other functions)",
    prior: [
      [S`\((e^{3x})'\)?`, S`\(3e^{3x}\).`],
      [S`\((\ln g)'\)?`, S`\(\frac{g'}{g}\).`],
      [S`\(\ln(x^x)\)?`, S`\(x\ln x\).`],
    ],
    words: [
      ["Logarithmic differentiation", "take ln of both sides, then differentiate", "for \\(x^x\\)"],
      ["Implicit step", "\\(\\frac{d}{dx}\\ln y=\\frac{y'}{y}\\)", ""],
      ["Factoring exponentials", "\\(e^{x}(\\ldots)\\)", "\\(e^x\\gt0\\)"],
      ["Damped oscillation", "\\(e^{-kx}\\sin x\\)", "shrinking waves"],
    ],
  }),

  section("📌 Which rule first?", S`
  ${table(["Function", "Last operation", "Start with"], [
    ["\\(e^{3x}\\sin2x\\)", "multiplication", "product rule"],
    ["\\(\\frac{x^2+1}{e^x}\\)", "division", "quotient rule (or write \\((x^2+1)e^{-x}\\))"],
    ["\\(\\ln(e^{2x}+1)\\)", "ln of something", "chain rule"],
    ["\\(x^x\\)", "variable power", "logarithmic differentiation"],
  ])}
  ${plane({ view: { xmin: -0.2, xmax: 9.5, ymin: -1, ymax: 1 }, curves: [{ f: (x) => Math.exp(-0.3 * x) * Math.sin(2 * x), color: "violet" }, { f: (x) => Math.exp(-0.3 * x), color: "gray" }, { f: (x) => -Math.exp(-0.3 * x), color: "gray" }], step: { x: 1, y: 0.25 } }, "A damped wave y = e^(−0.3x) sin 2x (violet) between the envelopes ±e^(−0.3x).")}
  ${keyIdea(S`Identify the last operation, apply that rule, and handle inner functions with the chain rule. For \(y=f(x)^{g(x)}\): \(\ln y=g\ln f\), so \(\frac{y'}{y}=g'\ln f+g\frac{f'}{f}\).`)}`),

  section("📌 Explore", S`<p>Use the explorer to check the exponential pieces of each example: the slope of \(Ae^{kx}\) is always \(k\) times its height, which is what the chain rule produces inside every product or quotient below.</p>`),

  widget("expRuleLab", { init: { A: 2, k: -0.5, mode: "e", b: 3, x: 1 } }),

  section("📌 Good habits", S`
  <p>Keep exponentials as common factors: \(3e^{3x}\sin2x+2e^{3x}\cos2x=e^{3x}(3\sin2x+2\cos2x)\). Factored answers make critical numbers easy to find.</p>
  ${watchOut([
    "xˣ is neither a power function nor an exponential: use logarithmic differentiation.",
    "After differentiating ln y, multiply both sides by y.",
    "A quotient by eˣ is a product with e^(−x) — often simpler.",
    "Factor out the exponential before setting the derivative to 0.",
    "Second derivatives of products need the product rule again.",
  ])}`),

  examples([
    ["Product and chain", S`Differentiate \(y=e^{3x}\sin(2x)\).`,
      [S`\(3e^{3x}\sin2x+e^{3x}\cdot2\cos2x\).`],
      S`\(y'=e^{3x}(3\sin2x+2\cos2x)\)`],
    ["Logarithmic differentiation", S`Differentiate \(y=x^x\) (\(x\gt0\)) and find \(y'(2)\).`,
      [S`\(\ln y=x\ln x\Rightarrow\frac{y'}{y}=\ln x+1\).`, S`\(y'=x^x(\ln x+1)\); at 2: \(4(\ln2+1)\).`],
      S`\(y'=x^x(\ln x+1)\); \(y'(2)\approx6.773\)`,
      plane({ view: { xmin: -0.1, xmax: 2.5, ymin: -0.5, ymax: 8 }, curves: [{ f: (x) => x ** x, a: 0.01, b: 2.5, color: "violet" }, { f: (x) => 4 + 6.773 * (x - 2), color: "green", a: 1.5, b: 2.5 }], points: [{ x: 1 / E, y: (1 / E) ** (1 / E), label: "min (1/e, 0.69)", color: "blue" }, { x: 2, y: 4, label: "(2, 4)", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["Always decreasing", S`Show that \(y=\frac{x^2+1}{e^x}\) is never increasing.`,
      [S`\(y=(x^2+1)e^{-x}\Rightarrow y'=2xe^{-x}-(x^2+1)e^{-x}\).`, S`\(=-(x^2-2x+1)e^{-x}=-(x-1)^2e^{-x}\le0\).`],
      S`\(y'=-(x-1)^2e^{-x}\le0\): decreasing everywhere, with a flat point at \(x=1\)`,
      plane({ view: { xmin: -2, xmax: 5, ymin: -0.5, ymax: 6 }, curves: [{ f: (x) => (x * x + 1) * Math.exp(-x), a: -1.6, b: 5, color: "violet" }], points: [{ x: 1, y: 2 / E, label: "flat (1, 2/e)", color: "red" }], step: { x: 1, y: 1 } })],
    ["ln of an exponential sum", S`For \(y=\ln(e^{2x}+1)\), find \(y'(0)\).`,
      [S`\(y'=\frac{2e^{2x}}{e^{2x}+1}\); at 0: \(\frac22\).`],
      S`\(y'(0)=1\)`],
    ["The bell curve's inflection points", S`Find the inflection points of \(y=e^{-x^2}\).`,
      [S`\(y'=-2xe^{-x^2}\); \(y''=-2e^{-x^2}+4x^2e^{-x^2}=(4x^2-2)e^{-x^2}\).`, S`\(y''=0\Rightarrow x=\pm\frac1{\sqrt2}\approx\pm0.707\); \(y=e^{-1/2}\approx0.607\).`],
      S`inflection points \(\left(\pm0.707,0.607\right)\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -0.2, ymax: 1.3 }, curves: [{ f: (x) => Math.exp(-x * x), color: "violet" }], points: [{ x: Math.SQRT1_2, y: Math.exp(-0.5), label: "inflection", color: "red" }, { x: -Math.SQRT1_2, y: Math.exp(-0.5), label: "inflection", color: "red" }], step: { x: 0.5, y: 0.25 } })],
  ]),

  practice([
    q("product", S`For \(y=xe^{2x}\), find \(y'(0)\).`, num(1),
      "e^(2x) + 2x e^(2x).", [S`\(1+0\).`], S`\(1\)`),
    q("quotient", S`For \(y=\dfrac{e^x}{x}\), find \(y'(1)\).`, num(0),
      "eˣ(x − 1)/x².", [S`\(e\cdot0\).`], S`\(0\)`),
    q("chain", S`For \(y=5^{x^2}\), find \(y'(1)\) (3 decimals).`, num(16.094, 0.002),
      "2x ln 5 · 5^(x²).", [S`\(2\cdot5\ln5\).`], S`\(16.094\)`),
    q("log diff", S`For \(y=x^x\), find \(y'(1)\).`, num(1),
      "xˣ(ln x + 1).", [S`\(1\cdot(0+1)\).`], S`\(1\)`),
    q("method", S`Which method differentiates \(y=x^{\sin x}\)?`, choice(["logarithmic differentiation", "the power rule", "the rule for bˣ", "the quotient rule"], 0),
      "Variable in base and exponent.", ["Take ln of both sides."], "logarithmic differentiation"),
  ]),

  ...hard([
    ["A damped oscillation", S`Find the maximum of \(f(x)=e^{-x}\sin x\) on \([0,\pi]\).`,
      [S`\(f'=-e^{-x}\sin x+e^{-x}\cos x=e^{-x}(\cos x-\sin x)\).`, S`Zero at \(x=\frac\pi4\); \(f\left(\frac\pi4\right)=e^{-\pi/4}\cdot\frac{\sqrt2}2\approx0.322\); endpoints give 0.`],
      S`maximum about 0.322 at \(x=\frac\pi4\)`,
      plane({ view: { xmin: -0.2, xmax: 3.5, ymin: -0.1, ymax: 0.45 }, curves: [{ f: (x) => Math.exp(-x) * Math.sin(x), a: 0, b: PI, color: "violet" }], points: [{ x: PI / 4, y: Math.exp(-PI / 4) * Math.SQRT1_2, label: "max (π/4, 0.32)", color: "red" }], step: { x: 0.5, y: 0.1 } })],
    ["The peak of x^(1/x)", S`Use logarithmic differentiation to find the maximum of \(y=x^{1/x}\), \(x\gt0\).`,
      [S`\(\ln y=\frac{\ln x}{x}\Rightarrow\frac{y'}{y}=\frac{1-\ln x}{x^2}\).`, S`\(y'=0\) when \(\ln x=1\): \(x=e\); \(y=e^{1/e}\approx1.445\).`],
      S`maximum \(e^{1/e}\approx1.445\) at \(x=e\)`,
      plane({ view: { xmin: -0.2, xmax: 12, ymin: -0.1, ymax: 1.7 }, curves: [{ f: (x) => x ** (1 / x), a: 0.2, b: 12, color: "violet" }], points: [{ x: E, y: E ** (1 / E), label: "max (e, 1.445)", color: "red" }], step: { x: 1, y: 0.25 } })],
  ], [
    q("hard", S`For \(y=e^x\ln x\), find \(y'(1)\) (4 decimals).`, num(2.7183, 0.0005),
      "eˣ ln x + eˣ/x.", [S`\(0+e\).`], S`\(2.7183\)`),
    q("hard", S`For \(y=x^2\cdot2^x\), find \(y'(1)\) (4 decimals).`, num(5.3863, 0.0005),
      "2x·2ˣ + x²·2ˣ ln 2.", [S`\(4+2\ln2\).`], S`\(5.3863\)`),
    q("hard", S`How many critical numbers does \(f(x)=x^3e^{-x}\) have?`, num(2),
      "f′ = x²(3 − x)e^(−x).", [S`\(x=0\) and \(x=3\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["When do I need logarithmic differentiation?", "When the variable is in both the base and the exponent (xˣ, x^(sin x)), or to simplify long products and quotients."],
      ["Why multiply by y at the end?", "Differentiating ln y gives y′/y; multiplying by y isolates y′."],
      ["Is it better to use the quotient rule or rewrite with e^(−x)?", "Either works; rewriting as a product usually gives a simpler answer."],
      ["How do I find extrema of xⁿe^(−x)?", "Factor: f′ = x^(n−1)(n − x)e^(−x), so the critical numbers are 0 and n."],
      ["What is a damped oscillation?", "A wave whose amplitude decays, like e^(−kx) sin x — springs with friction, fading sound."],
    ],
    summary: [
      "Apply the rule for the last operation first.",
      "Chain rule for every inner function.",
      "Log differentiation for f(x)^g(x).",
      "Factor out exponentials.",
    ],
    next: "5.5 uses exponential derivatives to model growth and decay.",
  }),
];
