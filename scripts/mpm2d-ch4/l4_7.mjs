// MPM2D 4.7 — Comparing y = x² and y = 2ˣ (NEW lesson): quadratic vs exponential tables and graphs, the meaning
// of zero and negative exponents, evaluating powers, exponent laws with negative results, growth in context
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "4.7 Comparing y = x² and y = 2ˣ";
export const NEW = { id: "2d1e7c1a-0a17-4d1e-9c17-d1a9f0000407", position: 26 };

export const blocks = () => [
  intro({
    icon: "📈",
    title: "Comparing y = x² and y = 2ˣ",
    overview: String.raw`In \(y=x^2\) the variable is the base; in \(y=2^x\) it is the exponent. That small change makes a big difference: \(y=x^2\) is a symmetric parabola with constant second differences, while \(y=2^x\) doubles at every step and eventually grows faster than any quadratic. Extending \(2^x\) to \(x=0\) and to negative \(x\) also explains what zero and negative exponents mean. In this lesson you will compare the two relations in tables and graphs, evaluate powers with zero and negative exponents, and use exponent laws.`,
    goals: [
      "compare tables of values and graphs of y = x² and y = 2ˣ;",
      "describe how first and second differences and ratios differ for the two relations;",
      "explain why b⁰ = 1 and b⁻ⁿ = 1/bⁿ using patterns and exponent laws;",
      "evaluate powers with zero and negative integer exponents;",
      "decide which model, quadratic or exponential, fits a situation.",
    ],
    curriculum: "QR1 (compare, through investigation, the graphical and algebraic representations of y = x² and y = 2ˣ; describe the meaning of zero and negative exponents)",
    prior: [
      [String.raw`\(2^5=\)?`, String.raw`\(32\).`],
      [String.raw`\(\frac{2^5}{2^3}=2^{?}\)`, String.raw`\(2^2\) (subtract exponents).`],
      [String.raw`Second differences of \(y=x^2\)?`, String.raw`Constant: \(2\).`],
    ],
    words: [
      ["Base", "the number being multiplied", "\\(2\\) in \\(2^5\\)"],
      ["Exponent", "how many times the base is a factor", "\\(5\\) in \\(2^5\\)"],
      ["Exponential relation", "the variable is in the exponent", "\\(y=2^x\\)"],
      ["Reciprocal", "\\(\\frac1n\\)", "\\(2^{-3}=\\frac18\\)"],
    ],
  }),

  section("📌 Two tables", String.raw`
  ${table(["x", "−2", "−1", "0", "1", "2", "3", "4", "5", "6"], [
    ["\\(x^2\\)", "4", "1", "0", "1", "4", "9", "16", "25", "36"],
    ["\\(2^x\\)", "\\(\\tfrac14\\)", "\\(\\tfrac12\\)", "1", "2", "4", "8", "16", "32", "64"],
  ])}
  <p>\(x^2\): symmetric about \(x=0\), second differences constant (2). \(2^x\): each value is double the one before (constant <em>ratio</em> 2), never negative and never zero. They are equal at \(x=2\) and \(x=4\); after \(x=4\), \(2^x\) pulls ahead for good.</p>
  ${plane({ view: { xmin: -4, xmax: 6, ymin: -2, ymax: 36 }, curves: [{ f: (x) => x * x, color: "blue" }, { f: (x) => 2 ** x, color: "red" }], points: [{ x: 2, y: 4, label: "(2, 4)", color: "green" }, { x: 4, y: 16, label: "(4, 16)", color: "green" }], step: { x: 1, y: 4 } }, "y = x² (blue) and y = 2ˣ (red) cross at (2, 4) and (4, 16) — and once more near x = −0.77.")}`),

  section("📌 Zero and negative exponents", String.raw`
  <p>Read the \(2^x\) row from right to left: each step divides by 2. Continuing the pattern past \(2^1=2\) gives \(2^0=1\), \(2^{-1}=\frac12\), \(2^{-2}=\frac14\). The exponent laws agree: \(\frac{2^3}{2^3}=2^{3-3}=2^0\), but it also equals \(1\).</p>
  ${keyIdea(String.raw`For any base \(b\ne0\): \(b^0=1\) and \(b^{-n}=\dfrac{1}{b^n}\). A negative exponent makes a reciprocal — it does <em>not</em> make the answer negative: \(2^{-3}=\frac18\), not \(-8\).`)}`),

  section("📌 Explore", String.raw`<p>Change the base. Every exponential graph passes through \((0,1)\), and every row of the table shows the same divide-by-\(b\) pattern into the negative exponents.</p>`),

  widget("expCompare", { init: 2 }),

  section("📌 Careful", String.raw`
  ${watchOut([
    "2⁻³ = 1/8, not −8 and not −6.",
    "Any non-zero base to the power 0 is 1: 7⁰ = 1, (−3)⁰ = 1.",
    "x² and 2ˣ are different: at x = 5, 25 vs 32; at x = 10, 100 vs 1024.",
    "Use exponent laws first, then evaluate: 4² × 4⁻⁵ = 4⁻³ = 1/64.",
  ])}`),

  examples([
    ["Comparing growth", String.raw`Compare \(y=x^2\) and \(y=2^x\) at \(x=3\), \(5\) and \(10\).`,
      [String.raw`\(x=3\): \(9\) vs \(8\) — the quadratic is larger.`, String.raw`\(x=5\): \(25\) vs \(32\); \(x=10\): \(100\) vs \(1024\).`, "After x = 4 the exponential grows faster and stays ahead."],
      String.raw`\(2^x\) overtakes \(x^2\) after \(x=4\)`],
    ["Evaluating powers", String.raw`Evaluate \(5^0\), \(3^{-2}\), \(10^{-3}\) and \(\left(\frac12\right)^{-2}\).`,
      [String.raw`\(5^0=1\); \(3^{-2}=\frac1{9}\); \(10^{-3}=\frac{1}{1000}=0.001\).`, String.raw`\(\left(\frac12\right)^{-2}=\frac{1}{(1/2)^2}=\frac{1}{1/4}=4\).`],
      String.raw`\(1\), \(\tfrac19\), \(0.001\), \(4\)`],
    ["Why b⁰ = 1", String.raw`Use the exponent law for division to show that \(2^0=1\).`,
      [String.raw`\(\frac{2^3}{2^3}=2^{3-3}=2^0\).`, String.raw`But \(\frac{2^3}{2^3}=\frac88=1\). So \(2^0=1\).`],
      String.raw`\(2^0=1\)`],
    ["Exponent laws", String.raw`Evaluate \(6^4\div6^6\) and \(4^2\times4^{-5}\).`,
      [String.raw`\(6^{4-6}=6^{-2}=\frac{1}{36}\).`, String.raw`\(4^{2+(-5)}=4^{-3}=\frac{1}{64}\).`],
      String.raw`\(\tfrac{1}{36}\) and \(\tfrac{1}{64}\)`],
    ["Which model?", String.raw`A colony of 500 bacteria doubles every hour: \(N=500(2)^t\). How many were there 2 hours before the count started? Is this exponential or quadratic?`,
      [String.raw`\(t=-2\): \(N=500(2)^{-2}=500\times\frac14=125\).`, "It multiplies by a constant (2) each hour: exponential, not quadratic."],
      String.raw`\(125\) bacteria; exponential`,
      plane({ view: { xmin: -3, xmax: 4, ymin: 0, ymax: 8500 }, curves: [{ f: (t) => 500 * 2 ** t, color: "red" }], points: [{ x: -2, y: 125, label: "(−2, 125)", color: "blue" }, { x: 0, y: 500, label: "(0, 500)", color: "blue" }], xlabel: "t (h)", ylabel: "N", step: { x: 1, y: 1000 } })],
  ]),

  practice([
    q("zero exponent", String.raw`Evaluate \(7^0\).`, num(1),
      "Any non-zero base to the power 0.", [String.raw`\(7^0=1\).`], String.raw`\(1\)`),
    q("negative exponent", String.raw`Evaluate \(2^{-3}\) as a decimal.`, num(0.125),
      "Reciprocal of 2³.", [String.raw`\(\frac{1}{8}=0.125\).`], String.raw`\(0.125\)`),
    q("negative exponent", String.raw`Evaluate \(10^{-2}\) as a decimal.`, num(0.01),
      "Reciprocal of 10².", [String.raw`\(\frac{1}{100}\).`], String.raw`\(0.01\)`),
    q("compare", "Which relation eventually grows faster?", choice(["y = 2ˣ", "y = x²", "they grow equally", "it depends on the units"], 0),
      "Compare at x = 10 or 20.", [String.raw`\(2^{10}=1024\) vs \(10^2=100\).`], String.raw`\(y=2^x\)`),
    q("exponent laws", String.raw`Evaluate \(5^3\times5^{-5}\) as a decimal.`, num(0.04),
      "Add the exponents.", [String.raw`\(5^{-2}=\frac{1}{25}=0.04\).`], String.raw`\(0.04\)`),
  ]),

  wrapUp({
    qas: [
      ["Why isn't 2⁻³ negative?", "The negative sign in the exponent means 'divide by 2 three times', which gives 1/8. It changes the size, not the sign."],
      ["What is 0⁰?", "This course does not give 0⁰ a value; we use b⁰ = 1 only when the base b is not 0."],
      ["How can I tell exponential from quadratic data?", "Quadratic data have constant second differences; exponential data have a constant ratio between consecutive values."],
      ["Does y = 2ˣ ever reach zero?", "No. As x decreases it gets closer and closer to 0 (1/2, 1/4, 1/8 …) but never reaches it."],
      ["Where are negative exponents used?", "Scientific notation for small numbers (3 × 10⁻⁵), going backwards in time in growth models, and units like m·s⁻¹."],
    ],
    summary: [
      "y = x²: parabola, symmetric, constant second differences.",
      "y = 2ˣ: doubles each step (constant ratio), through (0, 1), always positive.",
      "b⁰ = 1 and b⁻ⁿ = 1/bⁿ for b ≠ 0.",
      "Exponential growth eventually beats quadratic growth.",
    ],
    next: "4.8 reviews the whole chapter.",
  }),
];
