// MCV4U 5.6 — Chapter 5 Review (NEW lesson): the number e, ln x and its derivative, derivatives of exponentials,
// combined rules and logarithmic differentiation, and exponential models, with mixed practice and a hard level
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "5.6 Chapter 5 Review";
export const ID = "6d4fc005-0001-4001-8001-000000000506";

const S = String.raw;
const E = Math.E;
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 5 Review — Exponential and Logarithmic Functions",
    overview: S`This page pulls the chapter together before the test. Three facts carry everything: \((e^x)'=e^x\), \((\ln x)'=\frac1x\), and \((b^x)'=b^x\ln b\). Combined with the chain, product and quotient rules — and logarithmic differentiation for variable powers — they let you find tangents, extrema and inflection points, and the rates of growth and decay models. Each example below uses several skills at once.`,
    goals: [
      "recall the key idea and common mistake of each lesson;",
      "differentiate exponential and logarithmic functions with every rule;",
      "use logarithmic differentiation;",
      "find tangents, extrema and inflection points;",
      "solve growth, decay and cooling problems.",
    ],
    curriculum: "A2.2, A2.3, A3.4, A3.5, B2 (whole chapter)",
    prior: [
      [S`\((e^{g})'\)?`, S`\(g'e^g\).`],
      [S`\((\ln g)'\)?`, S`\(\frac{g'}{g}\).`],
      [S`Doubling time for \(P_0e^{kt}\)?`, S`\(\frac{\ln2}{k}\).`],
    ],
    words: [
      ["e", "base with slope 1 at 0", "≈ 2.718"],
      ["ln x", "inverse of \\(e^x\\)", "\\((\\ln x)'=\\frac1x\\)"],
      ["Log differentiation", "ln both sides, then differentiate", "\\(x^x\\)"],
      ["Exponential model", "\\(P'=kP\\)", "growth or decay"],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Example", "Watch out"], [
    ["5.1 The number e", "slope of bˣ ∝ bˣ; (eˣ)′ = eˣ", "slope of 2ˣ at 0 ≈ 0.693", "eˣ ≠ xᵉ"],
    ["5.2 ln x", "(ln x)′ = 1/x, (ln g)′ = g′/g", "(ln 7x)′ = 1/x", "ln(a + b) ≠ ln a + ln b"],
    ["5.3 Exponentials", "(e^g)′ = g′e^g, (bˣ)′ = bˣ ln b", "(e^(4x))′ = 4e^(4x)", "no power rule for eˣ"],
    ["5.4 Combined rules", "product, quotient, chain; log diff", "(xˣ)′ = xˣ(ln x + 1)", "multiply back by y"],
    ["5.5 Models", "P′ = kP; ln 2/k", "half-life from k", "units and sign of k"],
  ])),

  section("📌 Explore", S`<p>Use the growth explorer to check the model examples: set \(P_0\) and \(k\), then compare the slope with \(kP\) at any time.</p>`),

  widget("growthModelLab", { init: { P0: 300, k: -0.15, t: 4 } }),

  section("📌 The big picture", keyIdea(S`Exponentials change at a rate proportional to themselves; logarithms change at rate \(\frac1x\). Every problem in this chapter is one of these facts plus the chain, product or quotient rule — then the familiar tools for tangents, extrema and rates.`)),

  examples([
    ["A tangent", S`Find the tangent to \(y=e^{2x}-x\) at \(x=0\).`,
      [S`\(y(0)=1\); \(y'=2e^{2x}-1\Rightarrow y'(0)=1\).`],
      S`\(y=x+1\)`,
      plane({ view: { xmin: -2, xmax: 1.2, ymin: -0.5, ymax: 5 }, curves: [{ f: (x) => Math.exp(2 * x) - x, color: "violet" }, { f: (x) => x + 1, color: "green", a: -1.5, b: 1.2 }], points: [{ x: 0, y: 1, label: "(0, 1)", color: "red" }, { x: -Math.log(2) / 2, y: 0.5 + Math.log(2) / 2, label: "min", color: "blue" }], step: { x: 0.5, y: 1 } })],
    ["A logarithmic derivative", S`For \(y=\ln(x^2+4)\), find \(y'\) and \(y'(2)\).`,
      [S`\(y'=\frac{2x}{x^2+4}\); \(y'(2)=\frac48\).`],
      S`\(y'=\frac{2x}{x^2+4}\); \(\frac12\) at \(x=2\)`],
    ["A maximum", S`Find the maximum of \(f(x)=xe^{-2x}\).`,
      [S`\(f'=e^{-2x}-2xe^{-2x}=e^{-2x}(1-2x)\).`, S`Zero at \(x=\frac12\): \(f=\frac12e^{-1}\approx0.184\).`],
      S`maximum \(\left(\frac12,\frac1{2e}\right)\approx(0.5,0.184)\)`,
      plane({ view: { xmin: -0.3, xmax: 4, ymin: -0.3, ymax: 0.25 }, curves: [{ f: (x) => x * Math.exp(-2 * x), a: -0.15, b: 4, color: "violet" }], points: [{ x: 0.5, y: 0.5 / E, label: "max (0.5, 0.184)", color: "red" }], step: { x: 0.5, y: 0.05 } })],
    ["A variable power", S`For \(y=(x+1)^x\), find \(y'(1)\).`,
      [S`\(\ln y=x\ln(x+1)\Rightarrow\frac{y'}{y}=\ln(x+1)+\frac{x}{x+1}\).`, S`At 1: \(y=2\), so \(y'=2\left(\ln2+\frac12\right)\).`],
      S`\(y'(1)=2\ln2+1\approx2.386\)`],
    ["Cooling", S`Tea cools as \(T(t)=22+60e^{-0.1t}\) °C. When is it cooling at 3 °C per minute?`,
      [S`\(T'(t)=-6e^{-0.1t}=-3\Rightarrow e^{-0.1t}=\frac12\).`],
      S`\(t=10\ln2\approx6.93\) minutes`,
      plane({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 90 }, curves: [{ f: (t) => 22 + 60 * Math.exp(-0.1 * t), a: 0, b: 40, color: "violet" }, { f: (t) => 52 - 3 * (t - 10 * Math.log(2)), color: "green", a: 1, b: 14 }, { f: () => 22, color: "gray" }], points: [{ x: 10 * Math.log(2), y: 52, label: "(6.93, 52)", color: "red" }], step: { x: 5, y: 10 } })],
  ]),

  practice([
    q("exp", S`For \(y=e^{5x}\), find \(y'(0)\).`, num(5),
      "5e^(5x).", [S`\(5\).`], S`\(5\)`),
    q("ln", S`For \(y=\ln(4x)\), find \(y'(1)\).`, num(1),
      "1/x.", [S`\(1\).`], S`\(1\)`),
    q("base", S`For \(y=3^x\), find \(y'(0)\) (4 decimals).`, num(1.0986, 0.0005),
      "ln 3.", [S`\(\ln3\).`], S`\(1.0986\)`),
    q("model", S`For \(P(t)=200e^{0.3t}\), find \(P'(0)\).`, num(60),
      "kP₀.", [S`\(0.3\times200\).`], S`\(60\)`),
    q("rule", S`Which is \(\frac{d}{dx}\ln x\)?`, choice([S`\(\frac1x\)`, S`\(\ln x\)`, S`\(e^x\)`, S`\(\frac{1}{\ln x}\)`], 0),
      "Reflection of eˣ.", ["Slope 1/x."], S`\(\frac1x\)`),
  ]),

  section("📌 Am I ready for the test?", S`<ul style="list-style:none;padding-left:0;">
    ${[
      ["5.1", "I can explain the number e and use (eˣ)′ = eˣ."],
      ["5.2", "I can use log laws and differentiate ln x and ln(g(x))."],
      ["5.3", "I can differentiate e^(g(x)) and bˣ."],
      ["5.4", "I can combine rules, use logarithmic differentiation and find extrema."],
      ["5.5", "I can solve growth, decay, interest and cooling problems."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  ...hard([
    ["The lowest point of x² ln x", S`Find the minimum of \(f(x)=x^2\ln x\), \(x\gt0\).`,
      [S`\(f'=2x\ln x+x=x(2\ln x+1)\).`, S`Zero at \(\ln x=-\frac12\): \(x=e^{-1/2}\approx0.607\).`, S`\(f=e^{-1}\cdot\left(-\frac12\right)=-\frac1{2e}\approx-0.184\).`],
      S`minimum \(\left(e^{-1/2},-\frac1{2e}\right)\approx(0.607,-0.184)\)`,
      plane({ view: { xmin: -0.1, xmax: 1.8, ymin: -0.3, ymax: 1.6 }, curves: [{ f: (x) => x * x * Math.log(x), a: 0.01, b: 1.8, color: "violet" }], points: [{ x: Math.exp(-0.5), y: -1 / (2 * E), label: "min (0.61, −0.18)", color: "red" }], step: { x: 0.25, y: 0.25 } })],
    ["Balancing two exponentials", S`Find the minimum of \(f(x)=e^x+e^{-2x}\).`,
      [S`\(f'=e^x-2e^{-2x}=0\Rightarrow e^{3x}=2\Rightarrow x=\frac{\ln2}{3}\approx0.231\).`, S`\(f=2^{1/3}+2^{-2/3}\approx1.260+0.630\).`],
      S`minimum about 1.890 at \(x\approx0.231\)`,
      plane({ view: { xmin: -1.5, xmax: 2, ymin: 0, ymax: 6 }, curves: [{ f: (x) => Math.exp(x) + Math.exp(-2 * x), color: "violet" }], points: [{ x: Math.log(2) / 3, y: 2 ** (1 / 3) + 2 ** (-2 / 3), label: "min (0.23, 1.89)", color: "red" }], step: { x: 0.5, y: 1 } })],
  ], [
    q("hard", S`For \(y=xe^{x^2}\), find \(y'(1)\) (4 decimals).`, num(8.1548, 0.0005),
      "(1 + 2x²)e^(x²).", [S`\(3e\).`], S`\(8.1548\)`),
    q("hard", S`For \(y=\ln(e^x+e^{-x})\), find \(y'(0)\).`, num(0),
      "(eˣ − e^(−x))/(eˣ + e^(−x)).", [S`\(\frac{0}{2}\).`], S`\(0\)`),
    q("hard", S`Find the half-life when \(k=-0.03\) per year (3 decimals).`, num(23.105, 0.002),
      "ln 2 / 0.03.", [S`\(23.105\).`], S`\(23.105\)`),
  ]),

  wrapUp({
    qas: [
      ["How should I study for this test?", "Do the mixed practice and hard level without notes, then check each derivative with the explorers."],
      ["What are the most common mistakes?", "Applying the power rule to eˣ, forgetting the inner derivative, misusing log laws on sums, and forgetting to multiply by y in logarithmic differentiation."],
      ["How do I find exact values?", "Use ln e = 1, ln 1 = 0, e^(ln a) = a, and keep answers like ln 2/3 exact before rounding."],
      ["How do I check a model answer?", "Check the sign (growth or decay), the units, and whether the size is reasonable."],
      ["What comes next?", "Chapter 6 begins the vectors strand: geometric vectors and their operations."],
    ],
    summary: [
      "(eˣ)′ = eˣ, (ln x)′ = 1/x, (bˣ)′ = bˣ ln b.",
      "Chain rule for every inner function.",
      "Log differentiation for variable powers.",
      "Models: P′ = kP.",
    ],
    next: "Write the Chapter 5 test. Chapter 6 introduces geometric vectors.",
  }),
];
