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
      [S`<b>Rule.</b> \(b^{1/n}=\sqrt[n]{b}\). The exponent \(\frac1n\) asks: which number, used \(n\) times as a factor, gives \(b\)? The reason is the power law: \(\left(b^{1/n}\right)^n=b^{\frac1n\cdot n}=b^1=b\).`,
        S`<b>First power.</b> \(49^{1/2}=\sqrt{49}=7\), because \(7\times7=49\).`,
        S`<b>Second power.</b> \(125^{1/3}=\sqrt[3]{125}=5\), because \(5\times5\times5=125\).`,
        S`<b>Third power.</b> \(16^{1/4}=\sqrt[4]{16}=2\), because \(2\times2\times2\times2=16\).`,
        S`<b>Check on the graph.</b> Each answer is a point on the matching curve: \((49,7)\) on \(y=x^{1/2}\), \((125,5)\) on \(y=x^{1/3}\), \((16,2)\) on \(y=x^{1/4}\) ✓`],
      S`\(7\), \(5\), \(2\)`,
      plane({ view: { xmin: 0, xmax: 130, ymin: 0, ymax: 12 }, curves: [{ f: (x) => x ** 0.5, a: 0, color: "violet" }, { f: (x) => x ** (1 / 3), a: 0, color: "blue" }, { f: (x) => x ** 0.25, a: 0, color: "green" }], points: [{ x: 49, y: 7, label: "(49, 7)", color: "amber" }, { x: 125, y: 5, label: "(125, 5)", color: "amber" }, { x: 16, y: 2, label: "(16, 2)", color: "amber" }], step: { x: 10, y: 1 } }, "violet x^(1/2), blue x^(1/3), green x^(1/4)")],
    ["Root, then power", S`Evaluate \(27^{2/3}\).`,
      [S`<b>Rule.</b> In \(b^{m/n}\) the denominator \(n\) is the root and the numerator \(m\) is the power: \(b^{m/n}=\left(\sqrt[n]{b}\right)^m\). This comes from \(b^{m/n}=\left(b^{1/n}\right)^m\).`,
        S`<b>Take the root first.</b> The denominator is \(3\), so find the cube root: \(\sqrt[3]{27}=3\), because \(3^3=27\).`,
        S`<b>Then the power.</b> The numerator is \(2\), so square it: \(3^2=9\).`,
        S`<b>Check with the other order.</b> Power first: \(27^2=729\). Then the cube root: \(\sqrt[3]{729}=9\), since \(9^3=729\). The answer is the same, but doing the root first keeps the numbers small ✓`],
      S`\(27^{2/3}=9\)`,
      plane({ view: { xmin: 0, xmax: 32, ymin: 0, ymax: 12 }, curves: [{ f: (x) => x ** (2 / 3), a: 0, color: "violet" }], points: [{ x: 8, y: 4, label: "(8, 4)" }, { x: 27, y: 9, label: "(27, 9)", color: "amber" }], step: { x: 4, y: 1 } }, "y = x^(2/3)")],
    ["A negative rational exponent", S`Evaluate \(32^{-3/5}\).`,
      [S`<b>Read the exponent in three parts.</b> The minus sign means reciprocal, the denominator \(5\) means fifth root, and the numerator \(3\) means cube: \(32^{-3/5}=\dfrac1{32^{3/5}}=\dfrac1{\left(\sqrt[5]{32}\right)^3}\).`,
        S`<b>Fifth root.</b> \(\sqrt[5]{32}=2\), because \(2^5=32\).`,
        S`<b>Cube.</b> \(2^3=8\), so \(32^{3/5}=8\).`,
        S`<b>Reciprocal.</b> \(32^{-3/5}=\dfrac18\). The answer is positive: a negative exponent never changes the sign of a positive base.`,
        S`<b>Check.</b> Powers with opposite exponents must multiply to 1: \(32^{3/5}\cdot32^{-3/5}=8\cdot\frac18=1=32^0\) ✓`],
      S`\(32^{-3/5}=\frac18\)`,
      plane({ view: { xmin: 0, xmax: 40, ymin: -0.1, ymax: 1.4 }, curves: [{ f: (x) => x ** -0.6, a: 0.7, color: "violet" }], points: [{ x: 1, y: 1, label: "(1, 1)" }, { x: 32, y: 0.125, label: "(32, 1/8)", color: "amber" }], step: { x: 4, y: 0.2 } }, "y = x^(−3/5)")],
    ["A fraction base", S`Evaluate \(\left(\tfrac{16}{81}\right)^{3/4}\).`,
      [S`<b>Rule.</b> An exponent applies to the top and the bottom of a fraction: \(\left(\tfrac ab\right)^{n}=\dfrac{a^n}{b^n}\). The exponent \(\frac34\) means fourth root, then cube.`,
        S`<b>Fourth roots.</b> \(\sqrt[4]{16}=2\) since \(2^4=16\), and \(\sqrt[4]{81}=3\) since \(3^4=81\). So \(\left(\tfrac{16}{81}\right)^{1/4}=\tfrac23\).`,
        S`<b>Cube the result.</b> \(\left(\tfrac23\right)^3=\dfrac{2^3}{3^3}=\dfrac8{27}\).`,
        S`<b>Check the size.</b> \(\frac{16}{81}\approx0.198\) and \(\frac8{27}\approx0.296\). For a base between 0 and 1, an exponent below 1 makes the value larger. The curve is above the line \(y=x\) there ✓`],
      S`\(\frac{8}{27}\)`,
      plane({ view: { xmin: 0, xmax: 1.2, ymin: 0, ymax: 1.2 }, curves: [{ f: (x) => x ** 0.75, a: 0, color: "violet" }], lines: [{ m: 1, b: 0, color: "gray", dash: true }], points: [{ x: 16 / 81, y: 8 / 27, label: "(16/81, 8/27)", color: "amber" }, { x: 1, y: 1, label: "(1, 1)" }], step: { x: 0.2, y: 0.2 } }, "y = x^(3/4) with the dashed line y = x")],
    ["Radical to exponent", S`Write \((\sqrt x)^5\) as a power of \(x\) and evaluate it at \(x=4\).`,
      [S`<b>Rule.</b> A square root is the exponent \(\frac12\): \(\sqrt x=x^{1/2}\), for \(x\ge0\).`,
        S`<b>Rewrite.</b> \((\sqrt x)^5=\left(x^{1/2}\right)^5\).`,
        S`<b>Power of a power: multiply.</b> \(\frac12\times5=\frac52\), so the expression equals \(x^{5/2}\).`,
        S`<b>Evaluate at \(x=4\).</b> The denominator \(2\) means square root and the numerator \(5\) means fifth power: \(4^{5/2}=\left(\sqrt4\right)^5=2^5=32\).`,
        S`<b>Check in the original.</b> \(\sqrt4=2\), and \(2^5=32\) ✓. The point \((4,32)\) lies on the graph of \(y=x^{5/2}\).`],
      S`\(x^{5/2}\); value \(32\)`,
      plane({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 40 }, curves: [{ f: (x) => x ** 2.5, a: 0, color: "violet" }], points: [{ x: 1, y: 1, label: "(1, 1)" }, { x: 4, y: 32, label: "(4, 32)", color: "amber" }], step: { x: 1, y: 5 } }, "y = x^(5/2)")],
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
