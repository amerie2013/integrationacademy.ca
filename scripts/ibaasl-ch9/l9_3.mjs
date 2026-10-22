// IB AA SL 9.3 — Logarithms and Their Graphs: definition of log_b x, common and natural logarithms, logarithms as inverses of exponentials, graphs and transformations of logarithmic functions, simple log equations
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "9.3 Logarithms and Their Graphs";
export const ID = "03e471ce-d00b-4ff0-bc53-cfbae0808f59";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🪵",
    title: "Logarithms and Their Graphs",
    overview: S`A logarithm answers the question "what power?". Since \(2^5=32\), \(\log_2 32=5\). Logarithms undo exponentials, so the graph of \(y=\log_b x\) is the reflection of \(y=b^x\) in the line \(y=x\). In this lesson you will convert between exponential and logarithmic form, evaluate logarithms (including \(\log x\) and \(\ln x\)), sketch logarithmic graphs and their transformations, and solve simple log equations.`,
    goals: [
      S`use \(\log_b x=y\iff b^y=x\) to convert and evaluate;`,
      S`use the common logarithm \(\log x=\log_{10}x\) and the natural logarithm \(\ln x=\log_e x\);`,
      S`use \(b^{\log_b x}=x\) and \(\log_b b^x=x\);`,
      S`sketch \(y=a\log_b(x-h)+k\), stating the domain, asymptote and intercepts;`,
      "solve simple equations by converting to exponential form.",
    ],
    curriculum: "SL 1.5 (introduction to logarithms, base 10 and e); SL 2.9 (logarithmic functions and their graphs, inverse of exponentials)",
    prior: [
      [S`Solve \(3^x=81\).`, S`\(x=4\).`],
      [S`What is the inverse of \(f(x)=2x+1\)?`, S`\(f^{-1}(x)=\frac{x-1}2\).`],
      [S`Evaluate \(10^{-2}\).`, "0.01."],
    ],
    words: [
      ["Logarithm", S`\(\log_b x\) is the power of b that gives x`, S`\(\log_3 9=2\)`],
      ["Common log", "base 10", S`\(\log 0.001=-3\)`],
      ["Natural log", "base e", S`\(\ln e^4=4\)`],
      ["Vertical asymptote", S`the line \(x=h\) approached by \(\log_b(x-h)\)`, S`\(x=0\) for \(\log x\)`],
      ["Inverse functions", "functions that undo each other", S`\(\ln(e^x)=x\)`],
    ],
  }),

  section("📌 What a logarithm is", S`
  ${table(["Exponential form", "Logarithmic form"], [
    [S`\(2^6=64\)`, S`\(\log_2 64=6\)`],
    [S`\(5^{-1}=\frac15\)`, S`\(\log_5\frac15=-1\)`],
    [S`\(49^{1/2}=7\)`, S`\(\log_{49}7=\frac12\)`],
    [S`\(10^{4}=10000\)`, S`\(\log 10000=4\)`],
    [S`\(e^{0}=1\)`, S`\(\ln 1=0\)`],
  ])}
  <p>The base must be positive and not 1, and you can only take the log of a positive number: \(\log_b x\) is undefined for \(x\le0\) because no power of a positive base is zero or negative. Two useful facts: \(\log_b b=1\) and \(\log_b 1=0\).</p>
  ${keyIdea("log_b x = y means b^y = x. The logarithm IS an exponent.")}`),

  section("📌 Logarithms undo exponentials", S`
  <p>\(f(x)=b^x\) and \(g(x)=\log_b x\) are inverse functions: \(\log_b(b^x)=x\) for all \(x\), and \(b^{\log_b x}=x\) for \(x>0\). For example \(10^{\log 7}=7\) and \(\ln e^{3.2}=3.2\). Their graphs are reflections in \(y=x\): the point \((2,9)\) on \(y=3^x\) becomes \((9,2)\) on \(y=\log_3 x\).</p>
  ${plane({ view: { xmin: -3, xmax: 10, ymin: -3, ymax: 10 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 3 ** x, color: "green" }, { f: (x) => Math.log(x) / Math.log(3), a: 0.01, b: 10, color: "violet" }], lines: [{ m: 1, b: 0, color: "gray", dash: true }], points: [P(2, 9, "(2, 9)", "green"), P(9, 2, "(9, 2)"), P(1, 0, "(1, 0)", "red")] }, "y = 3ˣ (green) and y = log₃x (violet) are reflections in y = x")}
  ${table(["", S`\(y=b^x\)`, S`\(y=\log_b x\)`], [["domain", "all real x", "x > 0"], ["range", "y > 0", "all real y"], ["asymptote", "y = 0", "x = 0"], ["key point", "(0, 1)", "(1, 0)"]])}
  ${plane({ view: { xmin: -1, xmax: 10, ymin: -3, ymax: 3 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => Math.log10(x), a: 0.001, b: 10, color: "violet" }, { f: (x) => Math.log(x), a: 0.001, b: 10, color: "amber" }, { f: (x) => Math.log2(x), a: 0.001, b: 10, color: "green" }], points: [P(1, 0, "(1, 0)", "red")] }, "log₂x (green), ln x (amber), log x (violet): all cross the x-axis at (1, 0)")}`),

  section("📌 Transforming logarithmic graphs", S`
  <p>For \(y=a\log_b(x-h)+k\) the vertical asymptote is \(x=h\) and the domain is \(x>h\). Find the x-intercept by setting \(y=0\) and converting to exponential form.</p>
  ${plane({ view: { xmin: -4, xmax: 10, ymin: -4, ymax: 5 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => Math.log2(x + 3) - 1, a: -2.999, b: 10, color: "violet" }], vlines: [{ x: -3, color: "red", dash: true }], points: [P(-1, 0, "(−1, 0)", "green"), P(0, Math.log2(3) - 1, "(0, 0.58)")] }, "y = log₂(x + 3) − 1: asymptote x = −3, x-intercept −1")}
  ${watchOut([
    S`\(\log_b x\) needs \(x>0\): always check the domain of a log graph or equation.`,
    S`\(\log_b(x-h)\) moves RIGHT by h: \(\log(x+3)\) moves left 3.`,
    S`\(\ln x\) means \(\log_e x\), and \(\log x\) means \(\log_{10}x\).`,
    S`\(\log_b 1=0\), not 1.`,
  ])}`),

  section("📌 Explore", S`<p>Change the base and the translations. Watch the reflection of bˣ, the vertical asymptote and the x-intercept, and move the point to read a logarithm as an exponent.</p>`),

  widget("ibLogGraph", { init: [3, -2, 1] }),

  examples([
    ["Level 1 · Evaluate", S`Evaluate \(\log_4 64\), \(\log_7\frac1{49}\) and \(\log_{8}2\).`,
      [S`\(4^3=64\).`, S`\(7^{-2}=\frac1{49}\).`, S`\(8^{1/3}=2\).`],
      S`\(3\), \(-2\), \(\frac13\)`],
    ["Level 1 · Convert", S`Write \(\log_x 20=3\) in exponential form and \(e^{2k}=9\) in logarithmic form.`,
      [S`\(x^3=20\).`, S`\(2k=\ln 9\).`],
      S`\(x^3=20\); \(2k=\ln9\)`],
    ["Level 2 · Inverse", S`Find the inverse of \(f(x)=5^{x}-2\) and state its domain.`,
      [S`\(y=5^x-2\Rightarrow 5^x=y+2\Rightarrow x=\log_5(y+2)\).`, "The range of f is y > −2, so that is the domain of the inverse."],
      S`\(f^{-1}(x)=\log_5(x+2)\), \(x>-2\)`,
      plane({ view: { xmin: -3, xmax: 7, ymin: -3, ymax: 7 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 5 ** x - 2, color: "green" }, { f: (x) => Math.log(x + 2) / Math.log(5), a: -1.999, b: 7, color: "violet" }], lines: [{ m: 1, b: 0, color: "gray", dash: true }], points: [P(1, 3, "(1, 3)", "green"), P(3, 1, "(3, 1)")] }, "f (green) and its inverse (violet)")],
    ["Level 2 · Key features", S`For \(y=-2\ln(x-1)\), state the domain, asymptote and x-intercept.`,
      [S`\(x-1>0\).`, S`\(\ln(x-1)=0\Rightarrow x-1=1\).`],
      S`\(x>1\); \(x=1\); \((2,0)\)`],
    ["Level 3 · Equation from the definition", S`Solve \(\log_3(2x+5)=4\).`,
      [S`\(2x+5=3^4=81\).`, S`\(x=38\); check \(2(38)+5>0\).`],
      S`\(x=38\)`],
  ]),

  practice([
    q("Level 1 · evaluate", S`Evaluate \(\log_6 216\).`, num(3),
      "6 to what power is 216?", [S`\(6^3=216\).`], S`\(3\)`),
    q("Level 1 · negative", S`Evaluate \(\log 0.0001\).`, num(-4),
      "10 to what power?", [S`\(10^{-4}\).`], S`\(-4\)`),
    q("Level 2 · inverse property", S`Evaluate \(e^{\ln 7}+\ln e^{5}\).`, num(12),
      "They undo each other.", [S`\(7+5\).`], S`\(12\)`),
    q("Level 2 · asymptote", S`The vertical asymptote of \(y=\log_2(x+6)-3\) is x = ?`, num(-6),
      "x + 6 = 0.", [S`\(x=-6\).`], S`\(x=-6\)`),
    q("Level 2 · solve", S`Solve \(\log_5(x-3)=2\).`, num(28),
      "x − 3 = 25.", [S`\(x=28\).`], S`\(28\)`),
  ]),

  ...hard([
    ["Graph from features", S`The graph of \(y=\log_b(x-h)\) has asymptote \(x=2\) and passes through \((11,2)\). Find b and h, and the x-intercept.`,
      [S`\(h=2\); \(\log_b 9=2\Rightarrow b^2=9\Rightarrow b=3\).`, S`\(\log_3(x-2)=0\Rightarrow x=3\).`],
      S`\(b=3,\ h=2\); \((3,0)\)`,
      plane({ view: { xmin: 0, xmax: 13, ymin: -3, ymax: 4 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => Math.log(x - 2) / Math.log(3), a: 2.001, b: 13, color: "violet" }], vlines: [{ x: 2, color: "red", dash: true }], points: [P(11, 2, "(11, 2)"), P(3, 0, "(3, 0)", "green")] }, "y = log₃(x − 2)")],
    ["The pH scale", S`pH \(=-\log[\mathrm{H^+}]\). Lemon juice has pH 2.3 and milk has pH 6.6. How many times greater is the hydrogen ion concentration in lemon juice?`,
      [S`\([\mathrm{H^+}]=10^{-\text{pH}}\).`, S`Ratio \(\frac{10^{-2.3}}{10^{-6.6}}=10^{4.3}\approx19953\).`],
      S`about \(2.0\times10^4\) times`],
  ], [
    q("Level 3 · nested", S`Evaluate \(\log_2(\log_3 81)\).`, num(2),
      "Inside first.", [S`\(\log_3 81=4\); \(\log_2 4=2\).`], S`\(2\)`),
    q("Level 3 · base unknown", S`Solve \(\log_x 125=\frac32\).`, num(25),
      "x^(3/2) = 125.", [S`\(x=125^{2/3}=25\).`], S`\(25\)`),
    q("Level 3 · domain", S`The domain of \(f(x)=\ln(9-x^2)\) is:`, choice([S`\(-3<x<3\)`, S`\(x>3\)`, S`\(x<-3\) or \(x>3\)`, "all real x"], 0),
      "9 − x² > 0.", [S`\(x^2<9\).`], S`\(-3<x<3\)`),
  ]),

  wrapUp({
    qas: [
      ["What does log_b x mean?", "The power you raise b to in order to get x."],
      ["Why can't I take the log of 0 or a negative number?", "No power of a positive base gives 0 or a negative number."],
      ["How are bˣ and log_b x related?", "They are inverse functions; their graphs are reflections in y = x."],
      ["Where is the asymptote of log_b(x − h) + k?", "The vertical line x = h; the domain is x > h."],
      ["How do I solve log_b(stuff) = c?", "Convert: stuff = bᶜ, then check the domain."],
    ],
    summary: [
      "log_b x = y ⇔ bʸ = x; log x = log₁₀x, ln x = logₑx.",
      "log_b b = 1, log_b 1 = 0; b^(log_b x) = x, log_b(bˣ) = x.",
      "y = log_b x: domain x > 0, asymptote x = 0, through (1, 0).",
      "y = a log_b(x − h) + k: asymptote x = h.",
    ],
    next: "9.4 develops the laws of logarithms and change of base.",
  }),
];
