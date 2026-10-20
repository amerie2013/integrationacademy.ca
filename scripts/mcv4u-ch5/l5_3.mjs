// MCV4U 5.3 — Derivatives of Exponential Functions: (e^x)′ = e^x, the chain rule for e^(g(x)), (b^x)′ = b^x ln b,
// products and quotients with exponentials, tangent lines and extrema
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "5.3 Derivatives of Exponential Functions";
export const ID = "7376fdde-2adc-49b9-9622-3823215afb5f";

const S = String.raw;
const E = Math.E;
export const blocks = () => [
  intro({
    icon: "🚀",
    title: "Derivatives of Exponential Functions",
    overview: S`The natural exponential is its own derivative: \(\dfrac{d}{dx}e^x=e^x\). With the chain rule, \(\dfrac{d}{dx}e^{g(x)}=g'(x)\,e^{g(x)}\) — for example \(\left(e^{3x}\right)'=3e^{3x}\). Any other base can be written with \(e\): \(b^x=e^{x\ln b}\), so \(\dfrac{d}{dx}b^x=b^x\ln b\). This explains the mysterious constants of 5.1: the slope of \(2^x\) at 0 is \(\ln2\approx0.693\). Together with the product and quotient rules, these give tangents, extrema and growth rates of exponential functions.`,
    goals: [
      "differentiate e^x and e^(g(x));",
      "differentiate b^x for any base b > 0;",
      "combine exponentials with the product and quotient rules;",
      "find tangent lines to exponential curves;",
      "find extrema of functions involving exponentials.",
    ],
    curriculum: "A2.3 (determine the derivative of exponential functions), A3.4 (apply the chain rule to exponential functions)",
    prior: [
      [S`\((e^x)'\)?`, S`\(e^x\).`],
      [S`Write \(2^x\) as a power of \(e\).`, S`\(e^{x\ln2}\).`],
      [S`\(\frac{d}{dx}(5x^2)\)?`, S`\(10x\).`],
    ],
    words: [
      ["Natural exponential", "\\(\\frac{d}{dx}e^x=e^x\\)", ""],
      ["Chain rule form", "\\(\\frac{d}{dx}e^{g(x)}=g'(x)e^{g(x)}\\)", "\\((e^{x^2})'=2xe^{x^2}\\)"],
      ["Other bases", "\\(\\frac{d}{dx}b^x=b^x\\ln b\\)", "\\((10^x)'=10^x\\ln10\\)"],
      ["Exponential decay", "\\(e^{-kx}\\), \\(k\\gt0\\)", "negative slopes"],
    ],
  }),

  section("📌 The rules", S`
  ${table(["Function", "Derivative", "Example"], [
    ["\\(e^x\\)", "\\(e^x\\)", "—"],
    ["\\(e^{kx}\\)", "\\(ke^{kx}\\)", "\\((e^{-2x})'=-2e^{-2x}\\)"],
    ["\\(e^{g(x)}\\)", "\\(g'(x)e^{g(x)}\\)", "\\((e^{x^2})'=2xe^{x^2}\\)"],
    ["\\(b^x\\)", "\\(b^x\\ln b\\)", "\\((3^x)'=3^x\\ln3\\)"],
  ])}
  ${plane({ view: { xmin: -2, xmax: 2, ymin: -1, ymax: 8 }, curves: [{ f: (x) => Math.exp(x), color: "violet" }, { f: (x) => Math.exp(2 * x), color: "blue" }, { f: (x) => 2 * Math.exp(2 * x), color: "blue" }], step: { x: 0.5, y: 1 } }, "y = eˣ (violet) is its own derivative; y = e²ˣ and its derivative 2e²ˣ (blue) differ by the factor 2.")}
  ${keyIdea(S`\(\dfrac{d}{dx}e^{g(x)}=g'(x)\,e^{g(x)}\) and \(\dfrac{d}{dx}b^{x}=b^{x}\ln b\). Exponentials are never 0, so in products like \(xe^x\) the critical numbers come only from the other factor.`)}`),

  section("📌 Explore", S`<p>Choose \(A\) and \(k\) for \(y=Ae^{kx}\). The dashed derivative is always \(k\) times the curve. Switch to \(y=Ab^{kx}\) and change \(b\): the multiplier becomes \(k\ln b\).</p>`),

  widget("expRuleLab", { init: { A: 1, k: 1, mode: "e", b: 2, x: 0.5 } }),

  section("📌 Working with exponentials", S`
  <p>Find \(g'\) first, then copy the exponential unchanged. When setting a derivative equal to zero, factor out the exponential: it is always positive.</p>
  ${watchOut([
    "(e^(3x))′ = 3e^(3x), not e^(3x) and not 3x e^(3x − 1).",
    "The power rule does not apply to eˣ: (eˣ)′ ≠ x e^(x − 1).",
    "(bˣ)′ needs the factor ln b.",
    "eˣ > 0 always: divide it out when solving f′ = 0.",
    "e^(−x) decreases: its derivative is −e^(−x).",
  ])}`),

  examples([
    ["Two quick derivatives", S`Differentiate \(y=e^{3x}\) and \(y=5e^{-2x}\).`,
      [S`\(3e^{3x}\).`, S`\(5\cdot(-2)e^{-2x}\).`],
      S`\(3e^{3x}\) and \(-10e^{-2x}\)`],
    ["A square in the exponent", S`Differentiate \(y=e^{x^2}\).`,
      [S`\(g=x^2\), \(g'=2x\).`],
      S`\(y'=2xe^{x^2}\)`],
    ["Another base", S`Differentiate \(y=3^x\) and find the slope at \(x=2\).`,
      [S`\(y'=3^x\ln3\).`, S`At 2: \(9\ln3\approx9.888\).`],
      S`\(3^x\ln3\); slope about 9.89 at \(x=2\)`],
    ["A product", S`Find the minimum of \(y=xe^x\).`,
      [S`\(y'=e^x+xe^x=(x+1)e^x\).`, S`Zero only at \(x=-1\); \(-\) then \(+\). \(y(-1)=-\frac1e\).`],
      S`minimum \(\left(-1,-\frac1e\right)\approx(-1,-0.368)\)`,
      plane({ view: { xmin: -5, xmax: 1.5, ymin: -0.6, ymax: 4 }, curves: [{ f: (x) => x * Math.exp(x), color: "violet" }], points: [{ x: -1, y: -1 / E, label: "min (−1, −1/e)", color: "red" }], step: { x: 0.5, y: 0.5 } })],
    ["A tangent to decay", S`Find the tangent to \(y=e^{-x}\) at \(x=0\).`,
      [S`Point \((0,1)\); slope \(-e^0=-1\).`],
      S`\(y=1-x\)`,
      plane({ view: { xmin: -1.5, xmax: 3, ymin: -0.8, ymax: 4 }, curves: [{ f: (x) => Math.exp(-x), color: "violet" }, { f: (x) => 1 - x, color: "green", a: -1, b: 1.8 }], points: [{ x: 0, y: 1, label: "(0, 1)", color: "red" }], step: { x: 0.5, y: 0.5 } })],
  ]),

  practice([
    q("chain", S`For \(y=e^{4x}\), find \(y'(0)\).`, num(4),
      "4e^(4x).", [S`\(4e^0\).`], S`\(4\)`),
    q("sum", S`For \(y=e^x+x^2\), find \(y'(0)\).`, num(1),
      "eˣ + 2x.", [S`\(1+0\).`], S`\(1\)`),
    q("base", S`For \(y=2^x\), find \(y'(1)\) (4 decimals).`, num(1.3863, 0.0005),
      "2ˣ ln 2.", [S`\(2\ln2\).`], S`\(1.3863\)`),
    q("chain", S`For \(y=e^{-x^2}\), find \(y'(1)\) (4 decimals).`, num(-0.7358, 0.0005),
      "−2x e^(−x²).", [S`\(-\frac2e\).`], S`\(-0.7358\)`),
    q("rule", S`Which is \(\frac{d}{dx}b^x\)?`, choice([S`\(b^x\ln b\)`, S`\(xb^{x-1}\)`, S`\(b^x\)`, S`\(\frac{b^x}{\ln b}\)`], 0),
      "bˣ = e^(x ln b).", ["Chain rule with inner x ln b."], S`\(b^x\ln b\)`),
  ]),

  ...hard([
    ["The logistic curve's steepest point", S`For \(f(x)=\dfrac{e^x}{1+e^x}\), find \(f'(x)\) and its greatest value.`,
      [S`\(f'=\frac{e^x(1+e^x)-e^x\cdot e^x}{(1+e^x)^2}=\frac{e^x}{(1+e^x)^2}\).`, S`By symmetry (or by \(f''=0\)) the slope peaks at \(x=0\): \(\frac14\).`],
      S`\(f'(x)=\frac{e^x}{(1+e^x)^2}\); greatest slope \(\frac14\) at \(x=0\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -0.1, ymax: 1.2 }, curves: [{ f: (x) => Math.exp(x) / (1 + Math.exp(x)), color: "violet" }, { f: (x) => Math.exp(x) / (1 + Math.exp(x)) ** 2, color: "blue" }, { f: (x) => 0.5 + 0.25 * x, color: "green", a: -1.6, b: 1.6 }], points: [{ x: 0, y: 0.5, label: "(0, ½)", color: "red" }], step: { x: 1, y: 0.2 } })],
    ["Rise and fall", S`Find the local extrema of \(y=x^2e^{-x}\).`,
      [S`\(y'=2xe^{-x}-x^2e^{-x}=x(2-x)e^{-x}\).`, S`Zeros at 0 and 2: \(-,+,-\).`, S`\(y(0)=0\) (min), \(y(2)=\frac4{e^2}\approx0.541\) (max).`],
      S`local minimum \((0,0)\), local maximum \(\left(2,\frac{4}{e^2}\right)\)`,
      plane({ view: { xmin: -1, xmax: 9, ymin: -0.2, ymax: 1 }, curves: [{ f: (x) => x * x * Math.exp(-x), a: -0.7, b: 9, color: "violet" }], points: [{ x: 0, y: 0, label: "min", color: "blue" }, { x: 2, y: 4 / E ** 2, label: "max (2, 0.54)", color: "red" }], step: { x: 1, y: 0.2 } })],
  ], [
    q("hard", S`For \(y=e^{\sin x}\), find \(y'(0)\).`, num(1),
      "cos x · e^(sin x).", [S`\(1\cdot1\).`], S`\(1\)`),
    q("hard", S`For \(y=10^{2x}\), find \(y'(0)\) (4 decimals).`, num(4.6052, 0.0005),
      "2 ln 10 · 10^(2x).", [S`\(2\ln10\).`], S`\(4.6052\)`),
    q("hard", S`For \(y=e^x\cos x\), find \(y'(0)\).`, num(1),
      "eˣ cos x − eˣ sin x.", [S`\(1-0\).`], S`\(1\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is (eˣ)′ = eˣ?", "e is defined as the base whose slope at 0 is 1, and every exponential's slope is its height times its slope at 0."],
      ["Where does ln b come from?", "bˣ = e^(x ln b); the chain rule brings down the inner derivative ln b."],
      ["Why can't I use the power rule?", "The power rule is for xⁿ with a fixed exponent; in eˣ the variable is in the exponent."],
      ["How do I solve f′(x) = 0 with exponentials?", "Factor out the exponential — it is never 0 — and solve what remains."],
      ["What does a negative k mean?", "Decay: e^(−kx) decreases and its slopes are negative."],
    ],
    summary: [
      "(eˣ)′ = eˣ.",
      "(e^g)′ = g′e^g.",
      "(bˣ)′ = bˣ ln b.",
      "Exponentials are never zero.",
    ],
    next: "5.4 combines all the rules with exponentials and logarithms.",
  }),
];
