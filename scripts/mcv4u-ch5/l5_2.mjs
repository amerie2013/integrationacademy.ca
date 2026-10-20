// MCV4U 5.2 — The Natural Logarithm and Its Derivative: ln x as the inverse of e^x, its properties, (ln x)′ = 1/x,
// the chain rule for ln(g(x)), logarithms to other bases, tangents and extrema of logarithmic functions
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "5.2 The Natural Logarithm and Its Derivative";
export const ID = "46318e8e-bf5d-4955-8c98-79004ee874d4";

const S = String.raw;
const E = Math.E;
export const blocks = () => [
  intro({
    icon: "🪵",
    title: "The Natural Logarithm and Its Derivative",
    overview: S`The <strong>natural logarithm</strong> \(\ln x\) is the logarithm with base \(e\): \(y=\ln x\) means \(e^y=x\). Its graph is the reflection of \(y=e^x\) in the line \(y=x\). Reflection swaps rise and run, so where \(e^x\) has slope \(m\), \(\ln x\) has slope \(\frac1m\). At the point \((x,\ln x)\) the mirror point on \(e^x\) has height \(x\) and therefore slope \(x\); so \(\dfrac{d}{dx}\ln x=\dfrac1x\). With the chain rule, \(\dfrac{d}{dx}\ln g(x)=\dfrac{g'(x)}{g(x)}\), and log laws often simplify a function before differentiating.`,
    goals: [
      "use the definition and properties of ln x;",
      "differentiate ln x and ln(g(x));",
      "simplify with log laws before differentiating;",
      "differentiate logarithms to other bases;",
      "find tangents and extrema involving ln x.",
    ],
    curriculum: "A2.3 (determine the derivative of f(x) = ln x and connect it to the inverse of e^x), A3.4 (apply the chain rule to logarithmic functions)",
    prior: [
      [S`Solve \(e^x=1\).`, S`\(x=0\).`],
      [S`\(\log(ab)=\,?\)`, S`\(\log a+\log b\).`],
      [S`\((e^x)'\)?`, S`\(e^x\).`],
    ],
    words: [
      ["Natural logarithm", "\\(\\ln x=\\log_e x\\)", "\\(\\ln e=1\\)"],
      ["Inverse functions", "\\(e^{\\ln x}=x\\) and \\(\\ln(e^x)=x\\)", ""],
      ["Derivative of ln", "\\(\\frac{d}{dx}\\ln x=\\frac1x\\)", "\\(x\\gt0\\)"],
      ["Change of base", "\\(\\log_bx=\\frac{\\ln x}{\\ln b}\\)", ""],
    ],
  }),

  section("📌 ln x and its properties", S`
  ${table(["Property", "Example"], [
    ["\\(\\ln(ab)=\\ln a+\\ln b\\)", "\\(\\ln(3x)=\\ln3+\\ln x\\)"],
    ["\\(\\ln\\frac ab=\\ln a-\\ln b\\)", "\\(\\ln\\frac{x}{2}=\\ln x-\\ln2\\)"],
    ["\\(\\ln a^n=n\\ln a\\)", "\\(\\ln x^5=5\\ln x\\)"],
    ["\\(\\ln1=0\\), \\(\\ln e=1\\)", "\\(\\ln e^4=4\\)"],
  ])}
  ${plane({ view: { xmin: -3, xmax: 6, ymin: -3, ymax: 6 }, curves: [{ f: Math.exp, color: "gray" }, { f: Math.log, a: 0.03, b: 6, color: "violet" }, { f: (x) => x, color: "gray" }], points: [{ x: 1, y: 0, label: "(1, 0)", color: "red" }, { x: 0, y: 1, label: "(0, 1)", color: "blue" }, { x: E, y: 1, label: "(e, 1)", color: "red" }], step: { x: 1, y: 1 } }, "y = ln x (violet) is the reflection of y = eˣ (grey) in y = x.")}
  ${keyIdea(S`\(\dfrac{d}{dx}\ln x=\dfrac1x\) (\(x\gt0\)), and more generally \(\dfrac{d}{dx}\ln|x|=\dfrac1x\). Chain rule: \(\dfrac{d}{dx}\ln g(x)=\dfrac{g'(x)}{g(x)}\). For other bases, \(\dfrac{d}{dx}\log_bx=\dfrac{1}{x\ln b}\).`)}`),

  section("📌 Explore", S`<p>Move the point along \(y=\ln x\). Its tangent slope is \(\frac1x\). Turn on the mirror view: the reflected point on \(y=e^x\) has a slope that is the reciprocal — reflection swaps rise and run.</p>`),

  widget("lnLab", { init: { x: 2, mirror: true } }),

  section("📌 Simplify first", S`
  <p>Log laws turn products into sums and powers into multiples, which are easier to differentiate. Always check the domain: \(\ln x\) needs \(x\gt0\).</p>
  ${watchOut([
    "ln(x + 2) ≠ ln x + ln 2: log laws apply to products, not sums.",
    "(ln 5)′ = 0: ln 5 is a constant.",
    "(ln g)′ = g′/g — don't forget g′.",
    "ln(3x) has the same derivative as ln x, because ln 3 is a constant.",
    "The domain of ln x is x > 0; ln |x| extends it to x ≠ 0.",
  ])}`),

  examples([
    ["Solving with ln", S`Solve \(e^{2x}=7\).`,
      [S`Take ln of both sides: \(2x=\ln7\).`],
      S`\(x=\frac{\ln7}{2}\approx0.973\)`],
    ["Two derivatives", S`Differentiate \(y=\ln(3x)\) and \(y=\ln(x^2+1)\).`,
      [S`\(\ln(3x)=\ln3+\ln x\Rightarrow y'=\frac1x\).`, S`Chain rule: \(\frac{2x}{x^2+1}\).`],
      S`\(\frac1x\) and \(\frac{2x}{x^2+1}\)`],
    ["A tangent through the origin", S`Find the tangent to \(y=\ln x\) at \(x=e\).`,
      [S`Point \((e,1)\); slope \(\frac1e\).`, S`\(y-1=\frac1e(x-e)\Rightarrow y=\frac xe\).`],
      S`\(y=\frac{x}{e}\), which passes through the origin`,
      plane({ view: { xmin: -0.5, xmax: 7, ymin: -2, ymax: 3 }, curves: [{ f: Math.log, a: 0.05, b: 7, color: "violet" }, { f: (x) => x / E, color: "green", a: 0, b: 7 }], points: [{ x: E, y: 1, label: "(e, 1)", color: "red" }], step: { x: 1, y: 1 } })],
    ["A minimum", S`Find the minimum of \(f(x)=x\ln x\), \(x\gt0\).`,
      [S`\(f'=\ln x+x\cdot\frac1x=\ln x+1=0\Rightarrow x=e^{-1}\).`, S`\(f(e^{-1})=-e^{-1}\); \(f'\) changes from \(-\) to \(+\).`],
      S`minimum \(\left(\frac1e,-\frac1e\right)\approx(0.368,-0.368)\)`,
      plane({ view: { xmin: -0.2, xmax: 2.5, ymin: -0.6, ymax: 2.2 }, curves: [{ f: (x) => x * Math.log(x), a: 0.005, b: 2.5, color: "violet" }], points: [{ x: 1 / E, y: -1 / E, label: "min (1/e, −1/e)", color: "red" }, { x: 1, y: 0, label: "(1, 0)", color: "blue" }], step: { x: 0.5, y: 0.5 } })],
    ["A base-10 logarithm", S`Find the slope of \(y=\log x\) (base 10) at \(x=10\).`,
      [S`\(\log x=\frac{\ln x}{\ln10}\Rightarrow y'=\frac{1}{x\ln10}\).`, S`At 10: \(\frac{1}{10\ln10}\).`],
      S`about 0.0434`],
  ]),

  practice([
    q("derivative", S`What is the slope of \(y=\ln x\) at \(x=4\)?`, num(0.25, 0.0001),
      "1/x.", [S`\(\frac14\).`], S`\(0.25\)`),
    q("property", S`For \(y=\ln(5x)\), find \(y'(2)\).`, num(0.5, 0.0001),
      "ln 5 + ln x.", [S`\(\frac12\).`], S`\(0.5\)`),
    q("power", S`For \(y=\ln(x^2)\), find \(y'(3)\) (4 decimals).`, num(0.6667, 0.0005),
      "2 ln x.", [S`\(\frac23\).`], S`\(0.6667\)`),
    q("solve", S`Solve \(e^x=10\) (4 decimals).`, num(2.3026, 0.0005),
      "x = ln 10.", [S`\(\ln10\).`], S`\(2.3026\)`),
    q("rule", S`Which is \(\frac{d}{dx}\ln g(x)\)?`, choice([S`\(\frac{g'(x)}{g(x)}\)`, S`\(\frac1{g(x)}\)`, S`\(\ln g'(x)\)`, S`\(\frac{g(x)}{g'(x)}\)`], 0),
      "Chain rule.", ["Outer 1/u, inner g."], S`\(\frac{g'}{g}\)`),
  ]),

  ...hard([
    ["Simplify, then differentiate", S`Differentiate \(y=\ln\dfrac{x+1}{x-1}\) for \(x\gt1\), and find the slope at \(x=3\).`,
      [S`\(y=\ln(x+1)-\ln(x-1)\).`, S`\(y'=\frac1{x+1}-\frac1{x-1}=\frac{-2}{x^2-1}\).`, S`At 3: \(-\frac28\).`],
      S`\(y'=-\frac{2}{x^2-1}\); slope \(-0.25\) at \(x=3\)`,
      plane({ view: { xmin: 0, xmax: 7, ymin: -0.5, ymax: 3.5 }, curves: [{ f: (x) => Math.log((x + 1) / (x - 1)), a: 1.02, b: 7, color: "violet" }, { f: (x) => Math.log(2) - 0.25 * (x - 3), color: "green", a: 1.8, b: 4.6 }], vlines: [{ x: 1, color: "red", dash: true }], points: [{ x: 3, y: Math.log(2), label: "(3, ln 2)", color: "red" }], step: { x: 1, y: 0.5 } })],
    ["The peak of ln x ÷ x", S`Find the maximum of \(f(x)=\dfrac{\ln x}{x}\), \(x\gt0\).`,
      [S`\(f'=\frac{\frac1x\cdot x-\ln x}{x^2}=\frac{1-\ln x}{x^2}=0\Rightarrow x=e\).`, S`\(f(e)=\frac1e\).`],
      S`maximum \(\left(e,\frac1e\right)\approx(2.718,0.368)\)`,
      plane({ view: { xmin: -0.2, xmax: 12, ymin: -1, ymax: 0.6 }, curves: [{ f: (x) => Math.log(x) / x, a: 0.4, b: 12, color: "violet" }], points: [{ x: E, y: 1 / E, label: "max (e, 1/e)", color: "red" }], step: { x: 1, y: 0.2 } })],
  ], [
    q("hard", S`For \(y=\ln(\sin x)\), find \(y'\left(\frac\pi4\right)\).`, num(1),
      "cos x / sin x.", [S`\(\cot\frac\pi4\).`], S`\(1\)`),
    q("hard", S`For \(y=\ln\sqrt{x^2+9}\), find \(y'(4)\).`, num(0.16, 0.0001),
      "½ ln(x² + 9).", [S`\(\frac{x}{x^2+9}=\frac4{25}\).`], S`\(0.16\)`),
    q("hard", S`For \(y=\log_2x\), find \(y'(8)\) (4 decimals).`, num(0.1803, 0.0005),
      "1/(x ln 2).", [S`\(\frac1{8\ln2}\).`], S`\(0.1803\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is (ln x)′ = 1/x?", "ln x is the reflection of eˣ. At (x, ln x) the mirror point on eˣ has slope x, and reflection turns a slope m into 1/m."],
      ["Why does ln(3x) have the same derivative as ln x?", "ln(3x) = ln 3 + ln x, and ln 3 is a constant shift."],
      ["What about negative x?", "ln |x| is defined for x ≠ 0 and its derivative is still 1/x."],
      ["How do I differentiate log₁₀ x?", "Change base: log x = ln x / ln 10, so the derivative is 1/(x ln 10)."],
      ["When should I use log laws first?", "Whenever the inside is a product, quotient or power — it turns one hard derivative into several easy ones."],
    ],
    summary: [
      "y = ln x ⇔ eʸ = x.",
      "(ln x)′ = 1/x.",
      "(ln g)′ = g′/g.",
      "(log_b x)′ = 1/(x ln b).",
    ],
    next: "5.3 differentiates exponential functions.",
  }),
];
