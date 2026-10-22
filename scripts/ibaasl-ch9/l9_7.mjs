// IB AA SL 9.7 — Chapter 9 Review: exponents and surds, exponential models and e, logarithms and their graphs, laws of logs, exponential equations, derivatives of eˣ and ln x
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, hard, plane } from "./lib.mjs";

export const TITLE = "9.7 Chapter 9 Review";
export const ID = "1baa0009-0001-4001-8001-000000000907";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Chapter 9 Review",
    overview: S`This review connects the chapter: laws of exponents and surds, exponential graphs and models, logarithms as inverses, the laws of logarithms, solving exponential equations, and differentiating \(e^x\) and \(\ln x\). The examples combine these as exam questions do.`,
    goals: [
      "simplify expressions with exponents and surds;",
      "sketch and interpret exponential and logarithmic graphs;",
      "use the laws of logarithms and change of base;",
      "solve exponential and logarithmic equations;",
      "differentiate exponential and logarithmic functions.",
    ],
    curriculum: "SL 1.5, 1.7, 2.9, 5.6 (exponents, logarithms, exponential and log functions, their derivatives)",
    prior: [
      [S`What is \(\log_b x\)?`, S`The power of b that gives x.`],
      [S`Simplify \(\ln(e^{2x})\).`, S`\(2x\).`],
      [S`Differentiate \(e^{5x}\).`, S`\(5e^{5x}\).`],
    ],
    words: [
      ["9.1", "exponent laws, surds", ""],
      ["9.2", "exponential graphs, models, e", ""],
      ["9.3–9.4", "logarithms, graphs, laws", ""],
      ["9.5", "solving with logs", ""],
      ["9.6", "derivatives of eˣ and ln x", ""],
    ],
  }),

  section("📌 The chapter on one page", S`
  ${table(["Idea", "Key fact"], [
    ["exponent laws", S`\(a^ma^n=a^{m+n}\), \(a^{-n}=\frac1{a^n}\), \(a^{m/n}=(\sqrt[n]a)^m\)`],
    ["exponential graph", S`\(y=a\cdot b^{x-h}+k\): asymptote \(y=k\)`],
    ["logarithm", S`\(\log_b x=y\iff b^y=x\); asymptote \(x=h\) for \(\log_b(x-h)\)`],
    ["laws of logs", S`\(\log mn=\log m+\log n\), \(\log\frac mn=\log m-\log n\), \(\log m^k=k\log m\)`],
    ["solving", S`\(a^x=c\Rightarrow x=\frac{\ln c}{\ln a}\)`],
    ["derivatives", S`\((e^{g})'=g'e^{g}\), \((\ln g)'=\frac{g'}{g}\)`],
  ])}
  ${plane({ view: { xmin: -4, xmax: 8, ymin: -4, ymax: 8 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => Math.exp(x) - 2, color: "green" }, { f: (x) => Math.log(x + 2), a: -1.999, b: 8, color: "violet" }], lines: [{ m: 1, b: 0, color: "gray", dash: true }, { m: 0, b: -2, color: "red", dash: true }], vlines: [{ x: -2, color: "red", dash: true }], points: [P(0, -1, "(0, −1)", "green"), P(-1, 0, "(−1, 0)")] }, "f(x) = eˣ − 2 (green) and its inverse ln(x + 2) (violet), with asymptotes y = −2 and x = −2")}
  ${keyIdea("Exponentials and logarithms undo each other. Most problems become routine once you decide which one to apply to both sides.")}`),

  section("📌 Explore", S`<p>Use the explorer to check the solution of an exponential equation graphically.</p>`),

  widget("ibExpSolve", { init: [1.5, 30] }),

  examples([
    ["Level 1 · Exponents", S`Simplify \(\dfrac{(3x^2y)^3}{9x^{-1}y^5}\).`,
      [S`\(\frac{27x^6y^3}{9x^{-1}y^5}=3x^{7}y^{-2}\).`],
      S`\(\dfrac{3x^7}{y^2}\)`],
    ["Level 2 · Logs", S`Given \(\log_a 3=m\) and \(\log_a 4=n\), find \(\log_a 36\) and \(\log_a\frac{16}{27}\) in terms of m and n.`,
      [S`\(36=3^2\cdot4\): \(2m+n\).`, S`\(\frac{16}{27}=\frac{4^2}{3^3}\): \(2n-3m\).`],
      S`\(2m+n\); \(2n-3m\)`],
    ["Level 2 · Model", "A cup of tea cools as T = 20 + 70e^(−0.08t) (°C, minutes). Find the initial temperature, when it reaches 50 °C, and the long-term temperature.",
      [S`\(T(0)=90\).`, S`\(70e^{-0.08t}=30\Rightarrow t=\frac{\ln(7/3)}{0.08}\approx10.6\) min.`, S`As \(t\to\infty\), \(T\to20\).`],
      S`90 °C; ≈ 10.6 min; 20 °C`,
      plane({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 100 }, step: { x: 5, y: 10 }, curves: [{ f: (t) => 20 + 70 * Math.exp(-0.08 * t), a: 0, b: 40, color: "violet" }], lines: [{ m: 0, b: 20, color: "red", dash: true }, { m: 0, b: 50, color: "amber", dash: true }], points: [P(Math.log(7 / 3) / 0.08, 50, "(10.6, 50)", "red")] }, "Cooling curve with asymptote T = 20")],
    ["Level 2 · Log equation", S`Solve \(\log_2(x+1)+\log_2(x-1)=3\).`,
      [S`\(x^2-1=8\Rightarrow x=\pm3\).`, S`Reject \(-3\) (domain \(x>1\)).`],
      S`\(x=3\)`],
    ["Level 3 · Calculus", S`For \(f(x)=e^{2x}-6e^x\), find the stationary point and its nature.`,
      [S`\(f'(x)=2e^{2x}-6e^x=2e^x(e^x-3)=0\Rightarrow x=\ln3\).`, S`\(f(\ln3)=9-18=-9\); \(f''(x)=4e^{2x}-6e^x\), \(f''(\ln3)=36-18>0\): minimum.`],
      S`minimum at \((\ln3,\ -9)\)`,
      plane({ view: { xmin: -2, xmax: 2.5, ymin: -11, ymax: 6 }, step: { x: 0.5, y: 2 }, curves: [{ f: (x) => Math.exp(2 * x) - 6 * Math.exp(x), color: "violet" }], points: [P(Math.log(3), -9, "min (1.10, −9)", "red")] }, "y = e²ˣ − 6eˣ has a minimum at x = ln 3")],
  ]),

  practice([
    q("Level 1 · surd", S`\(\sqrt{45}+\sqrt{20}=k\sqrt5\). Find k.`, num(5),
      "3√5 + 2√5.", [S`\(5\sqrt5\).`], S`\(5\)`),
    q("Level 1 · log", S`Evaluate \(\log_9 3+\log_9 27\).`, num(2),
      "log₉ 81.", [S`\(9^2=81\).`], S`\(2\)`),
    q("Level 2 · solve", S`Solve \(4^{x}=50\) (3 d.p.).`, num(Math.log(50) / Math.log(4), 0.001),
      "ln 50 ÷ ln 4.", [S`\(\frac{3.912}{1.386}\).`], S`\(\approx2.822\)`),
    q("Level 2 · derivative", S`If \(f(x)=\ln(4x-3)\), find \(f'(2)\) (3 d.p.).`, num(0.8, 0.001),
      "4/(4x − 3).", [S`\(\frac45\).`], S`\(0.8\)`),
    q("Level 2 · asymptote", S`The horizontal asymptote of \(y=3e^{-x}+7\) is y = ?`, num(7),
      "y = k.", ["e^(−x) → 0."], S`\(y=7\)`),
  ]),

  ...hard([
    ["Two exponentials meet", S`Solve \(e^{2x}=4e^{x}+5\) exactly.`,
      [S`Let \(u=e^x\): \(u^2-4u-5=0\Rightarrow(u-5)(u+1)=0\).`, S`\(e^x=-1\) is impossible; \(e^x=5\Rightarrow x=\ln5\).`],
      S`\(x=\ln5\)`,
      plane({ view: { xmin: -2, xmax: 2.5, ymin: -2, ymax: 40 }, step: { x: 0.5, y: 5 }, curves: [{ f: (x) => Math.exp(2 * x), color: "violet" }, { f: (x) => 4 * Math.exp(x) + 5, color: "amber" }], points: [P(Math.log(5), 25, "(ln 5, 25)", "red")] }, "e²ˣ (violet) meets 4eˣ + 5 (amber) once")],
    ["Tangent and intercepts", S`The tangent to \(y=\ln x\) at \(x=e^2\) meets the x-axis at A and the y-axis at B. Find the exact area of triangle OAB.`,
      [S`At \(x=e^2\): \(y=2\); gradient \(\frac1{e^2}\).`, S`Tangent \(y-2=\frac{1}{e^2}(x-e^2)\Rightarrow y=\frac{x}{e^2}+1\).`, S`B \(=(0,1)\); A: \(0=\frac{x}{e^2}+1\Rightarrow x=-e^2\).`, S`Area \(=\frac12\cdot e^2\cdot1\).`],
      S`\(\frac{e^2}{2}\approx3.69\)`,
      plane({ view: { xmin: -9, xmax: 10, ymin: -2, ymax: 3.5 }, step: { x: 1, y: 1 }, curves: [{ f: Math.log, a: 0.05, b: 10, color: "violet" }], lines: [{ m: Math.exp(-2), b: 1, color: "red", dash: true }], points: [P(Math.exp(2), 2, "(e², 2)"), P(-Math.exp(2), 0, "A (−e², 0)", "green"), P(0, 1, "B (0, 1)", "green")] }, "Tangent to ln x at x = e², with intercepts A and B")],
  ], [
    q("Level 3 · change of base", S`Solve \(\log_3 x=\log_9(x+6)\).`, num(3),
      "log₉(x + 6) = ½ log₃(x + 6).", [S`\(x^2=x+6\Rightarrow x=3\) (reject \(-2\)).`], S`\(3\)`),
    q("Level 3 · doubling", S`A quantity grows as \(A=A_0e^{kt}\) and doubles every 8 years. Find k (4 d.p.).`, num(Math.log(2) / 8, 0.0001),
      "e^(8k) = 2.", [S`\(k=\frac{\ln2}{8}\).`], S`\(\approx0.0866\)`),
    q("Level 3 · gradient", S`Find the gradient of \(y=3^{x}\) at \(x=2\) (3 d.p.).`, num(9 * Math.log(3), 0.001),
      "3ˣ ln 3.", [S`\(9\ln3\).`], S`\(\approx9.888\)`),
  ]),

  wrapUp({
    qas: [
      ["Exponent or log first?", "If x is in an exponent, take logs; if x is inside a log, exponentiate."],
      ["How do I avoid domain errors?", "Every log argument must be positive: check each solution."],
      ["How do I sketch y = a·bˣ⁻ʰ + k?", "Draw the asymptote y = k, plot the intercept, then the growth or decay shape."],
      ["What is the fastest way to handle e^(2x) and eˣ together?", "Substitute u = eˣ and solve the quadratic."],
      ["How do I differentiate composite exponentials and logs?", "Chain rule: multiply by the derivative of the inside."],
    ],
    summary: [
      "aᵐaⁿ = aᵐ⁺ⁿ; a^(m/n) = (ⁿ√a)ᵐ; rationalise with conjugates.",
      "y = a·bˣ⁻ʰ + k ↔ y = log_b(x − h) + k-type inverses.",
      "Log laws, change of base, check domains.",
      "(e^g)′ = g′e^g, (ln g)′ = g′/g.",
    ],
    next: "Chapter 10 studies integration.",
  }),
];
