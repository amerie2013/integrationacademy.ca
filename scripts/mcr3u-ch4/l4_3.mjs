// MCR3U 4.3 — Simplifying Expressions with Exponents: laws with rational exponents, radicals as powers,
// changing bases (8^x = 2^(3x)), simplify-then-evaluate
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane } from "./lib.mjs";

export const TITLE = "4.3 Simplifying Expressions with Exponents";
export const ID = "5c3e0001-0001-4001-8001-000000000403";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🧮",
    title: "Simplifying Expressions with Exponents",
    overview: S`The exponent laws work for every rational exponent, so expressions with roots and fractional powers can be simplified the same way as \(x^3\cdot x^4\). In this lesson you will simplify expressions with integer and rational exponents, rewrite radicals as powers, express powers of 4, 8, 9 or 27 with a common base, and simplify before you evaluate to keep the arithmetic easy.`,
    goals: [
      "apply the exponent laws to rational exponents;",
      "rewrite products and quotients of radicals as single powers;",
      "write powers with a common base, e.g. 8ˣ = 2^(3x);",
      "simplify fully before substituting values;",
      "solve simple exponential equations by matching bases.",
    ],
    curriculum: "B1.3 (simplify algebraic expressions containing integer and rational exponents), B2.4 (an exponential function can be expressed using different bases, e.g. 9ˣ = 3^(2x))",
    prior: [
      [S`Add \(\tfrac12+\tfrac13\).`, S`\(\tfrac56\).`],
      [S`Write \(\sqrt[3]{x}\) as a power.`, S`\(x^{1/3}\).`],
      [S`Write 27 as a power of 3.`, S`\(3^3\).`],
    ],
    words: [
      ["Simplified form", "each base once, positive exponents", "\\(\\frac{x^2}{y^3}\\)"],
      ["Common base", "rewriting different bases as powers of one number", "\\(4=2^2\\), \\(8=2^3\\)"],
      ["Coefficient", "the number in front, handled with its own exponent", "\\((8a^6)^{2/3}=4a^4\\)"],
    ],
  }),

  section("📌 The same laws, fractional exponents", S`
  ${table(["Example", "Law", "Result"], [
    ["\\(x^{1/2}\\cdot x^{3/2}\\)", "add", "\\(x^{2}\\)"],
    ["\\(\\frac{y^{5/3}}{y^{2/3}}\\)", "subtract", "\\(y\\)"],
    ["\\((a^{3/4})^{8}\\)", "multiply", "\\(a^{6}\\)"],
    ["\\(\\sqrt x\\cdot\\sqrt[3]x\\)", "rewrite, then add", "\\(x^{5/6}\\)"],
  ])}
  ${keyIdea(S`Write every root as a power, apply the laws, then simplify the coefficient separately: \((8a^6)^{2/3}=8^{2/3}a^{4}=4a^4\).`)}
  ${plane({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x) * Math.cbrt(x), a: 0, color: "violet" }, { f: (x) => x ** (5 / 6), a: 0, color: "amber" }], step: { x: 0.5, y: 0.5 } }, "y = √x·∛x and y = x^(5/6) are the same curve")}`),

  section("📌 Explore", S`<p>Use the explorer to check rational powers numerically — for example, confirm that \(8^{2/3}\) and \(4^{1}\) give the same value.</p>`),

  widget("rationalPower", { init: [8, 2, 3] }),

  section("📌 Watch out", watchOut([
    S`Raise the coefficient too: \((8a^6)^{2/3}\) is \(4a^4\), not \(8a^4\).`,
    S`Add fractional exponents with a common denominator: \(\tfrac12+\tfrac13=\tfrac56\), not \(\tfrac25\).`,
    S`\(\sqrt{x^2+9}\ne x+3\): the laws apply to products, not sums.`,
    "Simplify first, then substitute — the numbers stay manageable.",
  ])),

  examples([
    ["Adding rational exponents", S`Simplify \(x^{1/2}\cdot x^{3/2}\).`,
      [S`\(x^{1/2+3/2}=x^{2}\).`],
      S`\(x^2\)`],
    ["A coefficient and a power", S`Simplify \((8a^6)^{2/3}\).`,
      [S`\(8^{2/3}=(\sqrt[3]8)^2=4\); \(a^{6\cdot2/3}=a^4\).`],
      S`\(4a^4\)`],
    ["A quotient", S`Simplify \(\dfrac{(x^{3/4}y^{-1/2})^4}{x^2y^{-3}}\).`,
      [S`Numerator: \(x^3y^{-2}\).`, S`\(x^{3-2}y^{-2+3}=xy\).`],
      S`\(xy\)`],
    ["Radicals as powers", S`Write \(\sqrt x\cdot\sqrt[3]x\) as a single power.`,
      [S`\(x^{1/2}\cdot x^{1/3}=x^{3/6+2/6}\).`],
      S`\(x^{5/6}\)`],
    ["Simplify, then evaluate", S`Evaluate \((a^{2/3}b^{-1})^3\div(ab^{-2})\) for \(a=5\), \(b=3\).`,
      [S`\(a^2b^{-3}\div ab^{-2}=a^{1}b^{-1}=\frac ab\).`],
      S`\(\frac53\)`],
  ]),

  practice([
    q("add", S`Simplify \(x^{2/3}\cdot x^{1/3}\).`, expr("x"),
      "Add the exponents.", [S`\(x^{3/3}\).`], S`\(x\)`),
    q("coefficient", S`Simplify \((27x^3)^{1/3}\).`, expr("3*x"),
      "Cube root of each factor.", [S`\(27^{1/3}x^{1}\).`], S`\(3x\)`),
    q("negative", S`Simplify \((x^4)^{-1/2}\) with a positive exponent.`, expr("1/x^2", false),
      "Multiply the exponents.", [S`\(x^{-2}\).`], S`\(\frac1{x^2}\)`),
    q("simplify then evaluate", S`Evaluate \(\dfrac{(x^{1/2})^6}{x^2}\) at \(x=5\).`, num(5),
      "Simplify first.", [S`\(\frac{x^3}{x^2}=x\).`], S`\(5\)`),
    q("common base", S`Which equals \(4^x\)?`, choice([S`\(2^{2x}\)`, S`\(2^{x+2}\)`, S`\(2^{x^2}\)`, S`\(8^{x/2}\cdot2\)`], 0),
      "4 = 2².", [S`\((2^2)^x=2^{2x}\).`], S`\(2^{2x}\)`),
  ]),

  ...hard([
    ["Everything at once", S`Simplify \(\left(16x^{-4}y^{2/3}\right)^{3/4}\) and write it with positive exponents.`,
      [S`\(16^{3/4}=(\sqrt[4]{16})^3=8\); \(x^{-4\cdot3/4}=x^{-3}\); \(y^{2/3\cdot3/4}=y^{1/2}\).`],
      S`\(\frac{8\sqrt y}{x^3}\)`],
    ["A common base", S`Write \(\dfrac{8^{x+1}}{4^{x}}\) as a single power of 2 and evaluate it at \(x=-1\).`,
      [S`\(8^{x+1}=2^{3x+3}\), \(4^x=2^{2x}\).`, S`\(2^{3x+3-2x}=2^{x+3}\); at \(x=-1\): \(2^2\).`],
      S`\(2^{x+3}\); \(4\)`],
  ], [
    q("hard", S`Evaluate \(\left(\dfrac{x^{5/6}}{x^{1/3}}\right)^4\) at \(x=7\).`, num(49),
      "Subtract, then multiply the exponents.", [S`\((x^{1/2})^4=x^2\).`], S`\(49\)`),
    q("hard", S`Solve \(9^x=27\).`, num(1.5),
      "Write both as powers of 3.", [S`\(3^{2x}=3^3\Rightarrow2x=3\).`], S`\(x=1.5\)`),
    q("hard", S`Evaluate \(\sqrt{a^3}\cdot a^{-1/2}\) at \(a=6\).`, num(6),
      "Add 3/2 and −1/2.", [S`\(a^{1}\).`], S`\(6\)`),
  ]),

  wrapUp({
    qas: [
      ["Do the laws really hold for fractions?", "Yes — rational exponents were defined so that they do."],
      ["Why use a common base?", "Powers with the same base can be compared or combined; it also lets you solve 9ˣ = 27."],
      ["Should answers be in radical or exponent form?", "Either is correct unless the question says; positive exponents are expected."],
      ["What if the base could be negative?", "Even roots need non-negative bases; we usually assume variables are positive."],
      ["Why simplify before evaluating?", "Fewer operations and smaller numbers — fewer chances for error."],
    ],
    summary: [
      "Same laws for rational exponents.",
      "Roots → powers; apply the laws; simplify the coefficient.",
      "Common bases: 4 = 2², 8 = 2³, 9 = 3², 27 = 3³.",
      "Simplify first, then substitute.",
    ],
    next: "4.4 graphs exponential functions and compares them with linear and quadratic ones.",
  }),
];
