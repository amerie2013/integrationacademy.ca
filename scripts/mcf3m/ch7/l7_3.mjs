// MCF3M 7.3 — Rational Exponents: b^(1/n) as the nth root, b^(m/n) = (ⁿ√b)^m, negative rational exponents,
// simplifying with the exponent laws, an application to squares and cubes.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "../lib.mjs";
import { strip, EG, P } from "./efig.mjs";
const S = String.raw;

export const TITLE = "7.3 Rational Exponents";
const sq = EG([{ f: (x) => Math.sqrt(x), a: 0, color: "violet" }, { f: (x) => Math.cbrt(x), color: "green" }], { view: { xmin: -1, xmax: 30, ymin: -0.5, ymax: 6 }, step: { x: 3, y: 1 }, points: [P(9, 3, "(9, 3)"), P(27, 3, "(27, 3)", "green")], cap: "violet: y = x^(1/2) · green: y = x^(1/3)" });

export const blocks = () => [
  intro({
    icon: "√",
    title: "Rational Exponents",
    overview: S`What could \(9^{\frac12}\) mean? If the product law still works, \(9^{\frac12}\times9^{\frac12}=9^{1}=9\), so \(9^{\frac12}\) is the number that multiplies by itself to give \(9\): the square root, \(3\). In the same way \(b^{\frac1n}\) is the \(n\)th root of \(b\), and \(b^{\frac mn}\) is that root raised to the power \(m\). Fractional exponents connect powers and roots, and they let every exponent law work with fractions too.`,
    goals: [
      "explain why b^(1/2) = √b and b^(1/n) = ⁿ√b;",
      "evaluate b^(m/n) as (ⁿ√b)^m;",
      "evaluate powers with negative rational exponents;",
      "simplify expressions with rational exponents using the exponent laws;",
      "use rational exponents in measurement problems.",
    ],
    curriculum: "B1.3 (extension: use the exponent laws to simplify and evaluate expressions with rational exponents)",
    prior: [
      [S`Evaluate \(\sqrt{49}\) and \(\sqrt[3]{64}\).`, S`\(7\); \(4\).`],
      [S`Simplify \(x^{a}\cdot x^{b}\).`, S`\(x^{a+b}\).`],
      [S`Evaluate \(5^{-2}\).`, S`\(\frac1{25}\).`],
    ],
    words: [
      ["nth root", "a number whose nth power is b", "∛27 = 3"],
      ["b^(1/n)", "the nth root of b", "27^(1/3) = 3"],
      ["b^(m/n)", "(ⁿ√b)^m: root first, then power", "8^(2/3) = 4"],
      ["Rational exponent", "an exponent that is a fraction", "3/4"],
      ["Radical", "a root symbol √, ∛, ⁿ√", "√5 = 5^(1/2)"],
    ],
  }),

  section("📌 Fractions as exponents", S`
  ${table(["Power", "Meaning", "Value"], [
    ["\\(9^{\\frac12}\\)", "\\(\\sqrt9\\)", "3"],
    ["\\(27^{\\frac13}\\)", "\\(\\sqrt[3]{27}\\)", "3"],
    ["\\(16^{\\frac34}\\)", "\\((\\sqrt[4]{16})^3\\)", "8"],
    ["\\(25^{-\\frac12}\\)", "\\(\\frac1{\\sqrt{25}}\\)", "\\(\\frac15\\)"],
  ])}
  ${sq}
  ${keyIdea(S`\(b^{\frac mn}=\left(\sqrt[n]{b}\right)^m\): the <b>denominator</b> is the root, the <b>numerator</b> is the power. Take the root first to keep numbers small. A negative exponent still means reciprocal.`)}`),

  widget("rationalPower", { init: [16, 3, 4] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "9^(1/2) is 3, not 4.5: it is a root, not half.",
    "In b^(m/n), n is the root and m the power — not the other way round.",
    "Root first: 16^(3/4) = 2³ = 8 is easier than ⁴√4096.",
    "25^(−1/2) = 1/5, not −5.",
    "An even root of a negative number is not a real number: (−16)^(1/2) is undefined.",
  ])}`),

  examples([
    ["Unit fractions", S`Use the product law to explain why \(9^{\frac12}=3\), then evaluate \(27^{\frac13}\) and \(625^{\frac14}\).`,
      [S`<b>Product law.</b> \(9^{\frac12}\cdot9^{\frac12}=9^{\frac12+\frac12}=9^1=9\).`,
        S`<b>So</b> \(9^{\frac12}\) is a number that squares to \(9\): \(\sqrt9=3\).`,
        S`<b>Cube root.</b> \(27^{\frac13}\cdot27^{\frac13}\cdot27^{\frac13}=27\), so \(27^{\frac13}=\sqrt[3]{27}=3\).`,
        S`<b>Fourth root.</b> \(625^{\frac14}=5\), since \(5^4=625\).`],
      S`9^(1/2) = 3, 27^(1/3) = 3, 625^(1/4) = 5`,
      sq],

    ["Root, then power", S`Evaluate \(16^{\frac34}\) and \(32^{\frac35}\).`,
      [S`<b>\(16^{\frac34}\).</b> Fourth root: \(\sqrt[4]{16}=2\); cube: \(2^3=8\).`,
        S`<b>\(32^{\frac35}\).</b> Fifth root: \(\sqrt[5]{32}=2\); cube: \(2^3=8\).`,
        S`<b>Same answer?</b> Yes: \(16=2^4\) and \(32=2^5\), so both are \(2^3\).`,
        S`<b>Check.</b> \(8^4=4096=16^3\) ✓`],
      S`16^(3/4) = 8, 32^(3/5) = 8`,
      strip([{ label: "16 = 2⁴", items: ["2", "2", "2", "2"] }, { label: "⁴√16", items: ["2"], color: "green" }, { label: "(⁴√16)³", items: ["2", "2", "2"], color: "red" }], "root first, then power")],

    ["Negative rational exponents", S`Evaluate \(25^{-\frac32}\) and \(\left(\frac{27}{64}\right)^{-\frac23}\).`,
      [S`<b>Reciprocal first.</b> \(25^{-\frac32}=\frac1{25^{\frac32}}\).`,
        S`<b>Root, power.</b> \(\sqrt{25}=5\), \(5^3=125\): \(\frac1{125}=0.008\).`,
        S`<b>Fraction base.</b> Flip: \(\left(\frac{64}{27}\right)^{\frac23}\). Cube roots \(\frac43\); square: \(\frac{16}9\).`,
        S`<b>Check.</b> \(\left(\frac{16}9\right)^{\frac32}=\frac{64}{27}\), the reciprocal of \(\frac{27}{64}\) ✓`],
      S`1/125; 16/9`,
      strip([{ label: "(27/64)^(−2/3)", items: ["27/64"], color: "gray" }, { label: "flip", items: ["64/27"] }, { label: "cube root", items: ["4/3"], color: "green" }, { label: "square", items: ["16/9"], color: "red" }])],

    ["Laws with fractions", S`Evaluate \(2^{\frac12}\times2^{\frac52}\) and \(\left(81^{\frac18}\right)^{2}\).`,
      [S`<b>Product.</b> \(2^{\frac12+\frac52}=2^{3}=8\).`,
        S`<b>Power of a power.</b> \(81^{\frac18\times2}=81^{\frac14}\).`,
        S`<b>Evaluate.</b> \(\sqrt[4]{81}=3\).`,
        S`<b>Note.</b> Neither \(2^{\frac12}\) nor \(81^{\frac18}\) is a whole number, but the results are.`],
      S`8; 3`,
      EG([(x) => 2 ** x], { view: { xmin: -1, xmax: 3.5, ymin: -0.5, ymax: 10 }, step: { x: 0.5, y: 1 }, points: [P(0.5, 1.41, "(½, 1.41)"), P(2.5, 5.66, "(2.5, 5.66)"), P(3, 8, "(3, 8)", "red")] })],

    ["Cubes and squares", S`A cube has volume \(125\) cm³. Use rational exponents to find its edge length and total surface area.`,
      [S`<b>Edge.</b> \(V=s^3\Rightarrow s=V^{\frac13}=125^{\frac13}=5\) cm.`,
        S`<b>One face.</b> \(s^2=\left(V^{\frac13}\right)^2=V^{\frac23}=25\) cm².`,
        S`<b>Surface area.</b> \(6V^{\frac23}=6\times25=150\) cm².`,
        S`<b>Check.</b> \(5^3=125\) ✓`],
      S`edge 5 cm; surface area 150 cm²`,
      EG([{ f: (x) => Math.cbrt(x), a: 0, color: "violet" }], { view: { xmin: -5, xmax: 140, ymin: -0.5, ymax: 6.5 }, step: { x: 20, y: 1 }, points: [P(125, 5, "(125, 5)")], xlabel: "V", ylabel: "s" })],
  ]),

  practice([
    q("sqrt", S`Evaluate \(49^{\frac12}\).`, num(7), "Square root.", [S`\(7\).`], S`\(7\)`),
    q("cbrt", S`Evaluate \(64^{\frac13}\).`, num(4), "Cube root.", [S`\(4\).`], S`\(4\)`),
    q("mn", S`Evaluate \(81^{\frac34}\).`, num(27), "⁴√81 = 3, cube.", [S`\(3^3=27\).`], S`\(27\)`),
    q("neg", S`Evaluate \(8^{-\frac23}\) as a decimal.`, num(0.25, 0.0001), "1/(∛8)².", [S`\(\frac14=0.25\).`], S`\(0.25\)`),
    q("which", S`Which is equal to \(5^{\frac12}\)?`, choice(["√5", "2.5", "5/2", "1/√5"], 0), "Exponent ½ = square root.", [S`\(\sqrt5\).`], S`√5`),
  ]),

  ...hard([
    ["A negative base", S`Evaluate \((-8)^{\frac23}\), and explain why \((-16)^{\frac12}\) is not a real number.`,
      [S`<b>Cube root first.</b> \(\sqrt[3]{-8}=-2\) (odd roots of negatives exist).`,
        S`<b>Square.</b> \((-2)^2=4\).`,
        S`<b>Even root.</b> No real number squares to \(-16\), so \((-16)^{\frac12}\) is undefined in the real numbers.`],
      S`4; not real`,
      EG([{ f: (x) => Math.cbrt(x), color: "violet" }], { view: { xmin: -10, xmax: 10, ymin: -3, ymax: 3 }, step: { x: 2, y: 1 }, points: [P(-8, -2, "(−8, −2)")] })],
    ["Algebra", S`Simplify \(\frac{\left(x^{\frac12}y^{-\frac13}\right)^6}{x^2y^{-1}}\).`,
      [S`<b>Power of a power.</b> \(x^{3}y^{-2}\).`,
        S`<b>Divide.</b> \(x^{3-2}y^{-2-(-1)}=xy^{-1}\).`,
        S`<b>Positive exponents.</b> \(\frac xy\).`],
      S`x/y`],
  ], [
    q("hard", S`Evaluate \(0.25^{-\frac12}\).`, num(2), "0.25 = 1/4.", [S`\((4)^{\frac12}=2\).`], S`\(2\)`),
    q("hard", S`Evaluate \(1000^{\frac23}\).`, num(100), "∛1000 = 10.", [S`\(10^2=100\).`], S`\(100\)`),
    q("hard", S`Evaluate \(\left(16^{\frac14}\right)^{-3}\) as a decimal.`, num(0.125, 0.0001), "2⁻³.", [S`\(0.125\).`], S`\(0.125\)`),
    q("hard", S`Evaluate \(9^{1.5}\).`, num(27), "1.5 = 3/2.", [S`\(3^3=27\).`], S`\(27\)`),
    q("hard", S`If \(4^x=32\), find \(x\).`, num(2.5, 0.001), "2^(2x) = 2⁵.", [S`\(x=2.5\).`], S`\(2.5\)`),
  ]),

  wrapUp({
    qas: [
      ["What does b^(1/n) mean?", "The nth root of b, because (b^(1/n))ⁿ = b."],
      ["How do I evaluate b^(m/n)?", "Take the nth root, then raise to the power m."],
      ["What about a negative rational exponent?", "Take the reciprocal first, then root and power."],
      ["Do the exponent laws still apply?", "Yes: add, subtract or multiply fractional exponents."],
      ["When is b^(1/n) not real?", "When b < 0 and n is even."],
    ],
    summary: [
      "b^(1/n) = ⁿ√b.",
      "b^(m/n) = (ⁿ√b)^m.",
      "b^(−m/n) = 1/b^(m/n).",
      "Same exponent laws.",
    ],
    next: "7.4 graphs the exponential function y = bˣ.",
  }),
];
