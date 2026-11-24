// MCV4U 5.4 — Differentiation Rules for Exponential Functions (NEW lesson): combining exponentials and logarithms with
// the product, quotient and chain rules, logarithmic differentiation (x^x), second derivatives and curve features
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { chart } from "../mcv4u-ch3/csign.mjs";

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
      [S`<b>Structure.</b> A product \(uv\) with \(u=e^{3x}\) and \(v=\sin2x\); each factor needs the chain rule.`,
        S`<b>Pieces.</b> \(u'=3e^{3x}\); \(v'=2\cos2x\).`,
        S`<b>Product rule.</b> \(y'=3e^{3x}\sin2x+e^{3x}\cdot2\cos2x\).`,
        S`<b>Factor.</b> \(y'=e^{3x}(3\sin2x+2\cos2x)\). Since \(e^{3x}\gt0\), the sign of \(y'\) is the sign of \(3\sin2x+2\cos2x\).`,
        S`<b>Check at 0.</b> \(y'(0)=1\cdot(0+2)=2\). Secant: \(\frac{e^{0.003}\sin0.002}{0.001}\approx2.006\) ✓`],
      S`\(y'=e^{3x}(3\sin2x+2\cos2x)\)`,
      plane({ view: { xmin: -1, xmax: 1.6, ymin: -6, ymax: 12 }, curves: [{ f: (x) => Math.exp(3 * x) * Math.sin(2 * x), color: "violet", label: "y = e³ˣ sin 2x" }, { f: (x) => 2 * x, a: -0.6, b: 0.6, color: "green", label: "slope 2" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "red" }], step: { x: 0.5, y: 2 } })],
    ["Logarithmic differentiation", S`Differentiate \(y=x^x\) (\(x\gt0\)) and find \(y'(2)\).`,
      [S`<b>Why a new method?</b> The power rule needs a constant exponent; the exponential rule needs a constant base. Here both vary.`,
        S`<b>Take ln.</b> \(\ln y=\ln(x^x)=x\ln x\).`,
        S`<b>Differentiate both sides.</b> Left (chain rule): \(\frac{1}{y}y'\). Right (product rule): \(\ln x+x\cdot\frac1x=\ln x+1\).`,
        S`<b>Solve.</b> \(y'=y(\ln x+1)=x^x(\ln x+1)\). At 2: \(4(\ln2+1)\approx4(1.693)\approx6.773\).`,
        S`<b>Check.</b> \(\frac{2.001^{2.001}-4}{0.001}\approx6.78\) ✓. Also \(y'=0\) at \(\ln x=-1\), \(x=\frac1e\): the low point in the figure.`],
      S`\(y'=x^x(\ln x+1)\); \(y'(2)\approx6.773\)`,
      plane({ view: { xmin: -0.1, xmax: 2.5, ymin: -0.5, ymax: 8 }, curves: [{ f: (x) => x ** x, a: 0.01, b: 2.5, color: "violet", label: "y = xˣ" }, { f: (x) => 4 + 6.773 * (x - 2), color: "green", a: 1.5, b: 2.5, label: "slope ≈ 6.77" }], points: [{ x: 1 / E, y: (1 / E) ** (1 / E), label: "min (1/e, 0.69)", color: "blue" }, { x: 2, y: 4, label: "(2, 4)", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["Always decreasing", S`Show that \(y=\frac{x^2+1}{e^x}\) is never increasing.`,
      [S`<b>Rewrite.</b> \(y=(x^2+1)e^{-x}\), a product (easier than the quotient rule).`,
        S`<b>Product rule.</b> \(y'=2xe^{-x}+(x^2+1)(-e^{-x})=e^{-x}(2x-x^2-1)\).`,
        S`<b>Factor.</b> \(2x-x^2-1=-(x^2-2x+1)=-(x-1)^2\), so \(y'=-(x-1)^2e^{-x}\).`,
        S`<b>Sign.</b> \((x-1)^2\ge0\) and \(e^{-x}\gt0\), so \(y'\le0\) everywhere, equal to 0 only at \(x=1\). ${chart({ cuts: [[1, "1"]], d: ["y'", (x) => -((x - 1) ** 2) * Math.exp(-x)], f: "y" })}`,
        S`<b>Conclusion.</b> The graph levels off at \((1,\frac2e)\) but keeps falling on both sides: no turning point ✓`],
      S`\(y'=-(x-1)^2e^{-x}\le0\): decreasing everywhere, with a flat point at \(x=1\)`,
      plane({ view: { xmin: -2, xmax: 5, ymin: -0.5, ymax: 6 }, curves: [{ f: (x) => (x * x + 1) * Math.exp(-x), a: -1.6, b: 5, color: "violet", label: "y = (x² + 1)/eˣ" }], points: [{ x: 1, y: 2 / E, label: "flat (1, 2/e)", color: "red" }], step: { x: 1, y: 1 } })],
    ["ln of an exponential sum", S`For \(y=\ln(e^{2x}+1)\), find \(y'(0)\).`,
      [S`<b>Outer ln.</b> \(\frac{d}{dx}\ln g=\frac{g'}{g}\) with \(g=e^{2x}+1\).`,
        S`<b>Inner derivative.</b> \(g'=2e^{2x}\).`,
        S`<b>So</b> \(y'=\dfrac{2e^{2x}}{e^{2x}+1}\); at 0: \(\dfrac{2}{1+1}=1\).`,
        S`<b>Long-run behaviour.</b> For large \(x\), \(y'\to2\) (the graph approaches the line \(y=2x\)); for very negative \(x\), \(y'\to0\) (it flattens toward \(y=0\)).`,
        S`<b>Check.</b> \(y(0)=\ln2\approx0.693\); \(\frac{y(0.001)-y(0)}{0.001}\approx1.000\) ✓`],
      S`\(y'(0)=1\)`,
      plane({ view: { xmin: -3, xmax: 2.5, ymin: -0.5, ymax: 5.5 }, curves: [{ f: (x) => Math.log(Math.exp(2 * x) + 1), color: "violet", label: "y = ln(e²ˣ + 1)" }, { f: (x) => 2 * x, a: 0.5, b: 2.5, color: "gray", label: "y = 2x" }, { f: (x) => Math.log(2) + x, a: -1.2, b: 1, color: "green", label: "slope 1" }], points: [{ x: 0, y: Math.log(2), label: "(0, ln 2)", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["The bell curve's inflection points", S`Find the inflection points of \(y=e^{-x^2}\).`,
      [S`<b>First derivative.</b> \(y'=e^{-x^2}\cdot(-2x)=-2xe^{-x^2}\).`,
        S`<b>Second derivative (product rule).</b> \(y''=-2e^{-x^2}+(-2x)(-2x)e^{-x^2}=(4x^2-2)e^{-x^2}\).`,
        S`<b>Zeros.</b> \(4x^2-2=0\Rightarrow x=\pm\frac{1}{\sqrt2}\approx\pm0.707\); height \(e^{-1/2}\approx0.607\).`,
        S`<b>Sign change.</b> ${chart({ kind: "conc", cuts: [[-Math.SQRT1_2, "-\\tfrac{1}{\\sqrt2}"], [Math.SQRT1_2, "\\tfrac{1}{\\sqrt2}"]], d: ["y''", (x) => (4 * x * x - 2) * Math.exp(-x * x)], f: "y" })}`,
        S`<b>Interpret.</b> The bell bends down in the middle and up in the tails; it changes at \(x=\pm0.707\), where it is steepest ✓`],
      S`inflection points \(\left(\pm0.707,0.607\right)\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -0.2, ymax: 1.3 }, curves: [{ f: (x) => Math.exp(-x * x), color: "violet", label: "y = e^(−x²)" }], points: [{ x: Math.SQRT1_2, y: Math.exp(-0.5), label: "inflection", color: "red" }, { x: -Math.SQRT1_2, y: Math.exp(-0.5), label: "inflection", color: "red" }], step: { x: 0.5, y: 0.25 } })],
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
