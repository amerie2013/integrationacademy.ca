// MCR3U 4.2 — Rational Exponents: b^(1/n) as a root, b^(m/n), negative rational exponents, rational bases, radicals ↔ powers
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, frac, choice, hard, plane } from "./lib.mjs";

export const TITLE = "4.2 Rational Exponents";
export const ID = "5c3e0001-0001-4001-8001-000000000402";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "√",
    title: "Rational Exponents",
    overview: S`What could \(9^{1/2}\) mean? The exponent laws force the answer: \(9^{1/2}\cdot9^{1/2}=9^1\), so \(9^{1/2}\) is the number whose square is 9 — that is, \(\sqrt9=3\). In this lesson you will interpret fractional exponents as roots and powers, evaluate them exactly (including negative exponents and fraction bases), switch between radical and exponent form, and see that these values fill in the curve \(y=b^x\) between the integers.`,
    goals: [
      "explain why b^(1/n) = ⁿ√b using the exponent laws;",
      "evaluate b^(m/n) as (ⁿ√b)^m;",
      "evaluate negative rational exponents and rational bases;",
      "convert between radical form and exponent form;",
      "solve simple equations such as x^(3/2) = 27.",
    ],
    curriculum: "B1.2 (determine the value of a power with a rational exponent through patterning and the exponent laws), B1.3 (evaluate numeric expressions with rational exponents and rational bases)",
    prior: [
      [S`What is \(\sqrt[3]{64}\)?`, S`\(4\), because \(4^3=64\).`],
      [S`Simplify \((x^2)^3\).`, S`\(x^6\).`],
      [S`Evaluate \(\left(\tfrac34\right)^{-2}\).`, S`\(\frac{16}{9}\).`],
    ],
    words: [
      ["nth root", "\\(\\sqrt[n]b\\): the number whose nth power is b", "\\(\\sqrt[4]{81}=3\\)"],
      ["Rational exponent", "an exponent that is a fraction", "\\(8^{2/3}\\)"],
      ["Radical form", "written with a root sign", "\\(\\sqrt[3]{x^2}\\)"],
      ["Exponent form", "written as a power", "\\(x^{2/3}\\)"],
    ],
  }),

  section("📌 Why a fraction means a root", S`
  <p>If the laws still hold, \(\left(b^{1/n}\right)^n=b^{1}\). So \(b^{1/n}\) is the number whose nth power is \(b\): \(b^{1/n}=\sqrt[n]{b}\). Then \(b^{m/n}=\left(b^{1/n}\right)^m=\left(\sqrt[n]b\right)^m\).</p>
  ${table(["Exponent form", "Radical form", "Value"], [["\\(16^{1/2}\\)", "\\(\\sqrt{16}\\)", "4"], ["\\(8^{1/3}\\)", "\\(\\sqrt[3]8\\)", "2"], ["\\(8^{2/3}\\)", "\\((\\sqrt[3]8)^2\\)", "4"], ["\\(8^{-2/3}\\)", "\\(\\frac1{(\\sqrt[3]8)^2}\\)", "\\(\\frac14\\)"]])}
  ${plane({ view: { xmin: -2, xmax: 2, ymin: -1, ymax: 17 }, curves: [{ f: (x) => 4 ** x, color: "violet" }], points: [{ x: -0.5, y: 0.5, label: "(−½, ½)" }, { x: 0.5, y: 2, label: "(½, 2)" }, { x: 1.5, y: 8, label: "(1.5, 8)" }, { x: 1, y: 4 }], step: { x: 0.5, y: 2 } }, "y = 4ˣ: rational exponents fill in the curve")}
  ${keyIdea(S`\(b^{m/n}=\left(\sqrt[n]b\right)^m=\sqrt[n]{b^m}\). Take the root first — the numbers stay small. A negative sign in the exponent still means a reciprocal.`)}`),

  section("📌 Explore", S`<p>Choose a base, a numerator \(m\) and a denominator \(n\). The point \(\left(\frac mn,\ b^{m/n}\right)\) always lands on the curve \(y=b^x\).</p>`),

  widget("rationalPower", { init: [27, 2, 3] }),

  section("📌 Watch out", watchOut([
    S`\(16^{1/2}\) is \(4\), not \(8\): the exponent ½ means square root, not half.`,
    S`\(8^{-1/3}=\frac12\) — the negative gives a reciprocal, not a negative number.`,
    S`For a fraction base, apply the root to the numerator and the denominator.`,
    S`An even root of a negative number is not real: \((-16)^{1/2}\) is undefined in the reals.`,
  ])),

  examples([
    ["Unit fractions", S`Evaluate \(49^{1/2}\), \(125^{1/3}\) and \(16^{1/4}\).`,
      [S`\(\sqrt{49}=7\), \(\sqrt[3]{125}=5\), \(\sqrt[4]{16}=2\).`],
      S`\(7\), \(5\), \(2\)`],
    ["Root, then power", S`Evaluate \(27^{2/3}\).`,
      [S`\(\sqrt[3]{27}=3\); \(3^2=9\).`],
      S`\(9\)`],
    ["A negative rational exponent", S`Evaluate \(32^{-3/5}\).`,
      [S`\(\sqrt[5]{32}=2\); \(2^3=8\); the negative gives the reciprocal.`],
      S`\(\frac18\)`],
    ["A fraction base", S`Evaluate \(\left(\tfrac{16}{81}\right)^{3/4}\).`,
      [S`\(\sqrt[4]{16}=2\), \(\sqrt[4]{81}=3\): \(\left(\tfrac23\right)^3\).`],
      S`\(\frac{8}{27}\)`],
    ["Radical to exponent", S`Write \((\sqrt x)^5\) as a power and evaluate it at \(x=4\).`,
      [S`\((x^{1/2})^5=x^{5/2}\).`, S`\(4^{5/2}=(\sqrt4)^5=2^5=32\).`],
      S`\(x^{5/2}\); \(32\)`],
  ]),

  practice([
    q("cube root", S`Evaluate \(64^{1/3}\).`, num(4),
      "Which number cubed is 64?", [S`\(4^3=64\).`], S`\(4\)`),
    q("root then power", S`Evaluate \(81^{3/4}\).`, num(27),
      "Fourth root first.", [S`\(\sqrt[4]{81}=3\); \(3^3\).`], S`\(27\)`),
    q("negative", S`Evaluate \(25^{-1/2}\) as a fraction.`, frac(1, 5),
      "Square root, then reciprocal.", [S`\(\frac1{\sqrt{25}}\).`], S`\(\frac15\)`),
    q("fraction base", S`Evaluate \(\left(\tfrac{8}{27}\right)^{2/3}\) as a fraction.`, frac(4, 9),
      "Cube root of top and bottom, then square.", [S`\(\left(\tfrac23\right)^2\).`], S`\(\frac49\)`),
    q("radical form", S`Which equals \(x^{3/5}\)?`, choice([S`\(\sqrt[5]{x^3}\)`, S`\(\sqrt[3]{x^5}\)`, S`\(\frac{x^3}{5}\)`, S`\(\frac35x\)`], 0),
      "The denominator is the root.", [S`\(x^{3/5}=\sqrt[5]{x^3}\).`], S`\(\sqrt[5]{x^3}\)`),
  ]),

  ...hard([
    ["A mixed expression", S`Evaluate \(9^{3/2}-16^{3/4}+8^{-2/3}\).`,
      [S`\(9^{3/2}=3^3=27\); \(16^{3/4}=2^3=8\); \(8^{-2/3}=\frac1{2^2}=\frac14\).`],
      S`\(27-8+\frac14=19.25\)`],
    ["Solving with a rational exponent", S`Solve \(x^{3/2}=64\).`,
      [S`Raise both sides to the reciprocal power \(\frac23\): \(x=64^{2/3}\).`, S`\(\sqrt[3]{64}=4\); \(4^2=16\). Check: \(16^{3/2}=4^3=64\) ✓.`],
      S`\(x=16\)`,
      plane({ view: { xmin: 0, xmax: 20, ymin: 0, ymax: 80 }, curves: [{ f: (x) => x ** 1.5, a: 0, color: "violet" }], lines: [{ m: 0, b: 64, color: "amber", dash: true }], points: [{ x: 16, y: 64, label: "(16, 64)" }], step: { x: 2, y: 10 } })],
  ], [
    q("hard", S`Evaluate \(0.04^{-1/2}\).`, num(5),
      "0.04 = 4/100.", [S`\(\sqrt{0.04}=0.2\); \(\frac1{0.2}\).`], S`\(5\)`),
    q("hard", S`Solve \(x^{2/3}=9\) for \(x>0\).`, num(27),
      "Raise both sides to the power 3/2.", [S`\(x=9^{3/2}=3^3\).`], S`\(27\)`),
    q("hard", S`Evaluate \(4^{2.5}\).`, num(32),
      "2.5 = 5/2.", [S`\((\sqrt4)^5=2^5\).`], S`\(32\)`),
  ]),

  wrapUp({
    qas: [
      ["Why root first?", "The answer is the same either way, but the root keeps numbers small: 27^(2/3) = 3² instead of ∛729."],
      ["What about decimal exponents?", "Write them as fractions: 1.5 = 3/2, 0.25 = 1/4."],
      ["Is 16^(1/2) = ±4?", "No: the notation means the principal (positive) root, 4."],
      ["Can the base be negative?", "With an odd root, yes: (−8)^(1/3) = −2. With an even root, it is not real."],
      ["How do rational exponents connect to graphs?", "They give the points of y = bˣ between the integers, so the curve is smooth."],
    ],
    summary: [
      "b^(1/n) = ⁿ√b; b^(m/n) = (ⁿ√b)^m.",
      "Negative exponent → reciprocal.",
      "Fraction base: root of top and bottom.",
      "Solve x^(m/n) = k by raising to n/m.",
    ],
    next: "4.3 simplifies algebraic expressions with integer and rational exponents.",
  }),
];
