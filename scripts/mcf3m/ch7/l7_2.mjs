// MCF3M 7.2 — Zero and Negative Exponents: why b⁰ = 1 and b⁻ⁿ = 1/bⁿ (pattern and quotient law), evaluating,
// reciprocals of fractions, simplifying numerical and algebraic expressions with integer exponents.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "../lib.mjs";
import { strip, rep, EG, P } from "./efig.mjs";
const S = String.raw;

export const TITLE = "7.2 Zero and Negative Exponents";
const two = EG([(x) => 2 ** x], { view: { xmin: -3.5, xmax: 3.5, ymin: -0.5, ymax: 9 }, points: [P(-2, 0.25, "(−2, ¼)"), P(-1, 0.5, "(−1, ½)"), P(0, 1, "(0, 1)"), P(1, 2, "(1, 2)"), P(2, 4, "(2, 4)"), P(3, 8, "(3, 8)")] });

export const blocks = () => [
  intro({
    icon: "0️⃣",
    title: "Zero and Negative Exponents",
    overview: S`So far an exponent has counted factors, so it had to be a positive whole number. But the quotient law produces \(5^3\div5^3=5^0\) and \(5^2\div5^5=5^{-3}\). What should these mean? Following the pattern of powers — each step down divides by the base — gives the only sensible answers: \(b^0=1\) and \(b^{-n}=\frac1{b^n}\). With these, every exponent law from 7.1 keeps working.`,
    goals: [
      "explain why b⁰ = 1 (b ≠ 0) using a pattern and the quotient law;",
      "explain why b⁻ⁿ = 1/bⁿ;",
      "evaluate powers with zero and negative integer exponents, including fractional bases;",
      "simplify numerical expressions using all the exponent laws;",
      "simplify algebraic expressions and write answers with positive exponents.",
    ],
    curriculum: "B1.3 (determine the meaning of zero and negative exponents and use the exponent laws to simplify numerical expressions with integral exponents)",
    prior: [
      [S`Simplify \(7^6\div7^2\).`, S`\(7^4\).`],
      [S`What is the reciprocal of \(\frac35\)?`, S`\(\frac53\).`],
      [S`Evaluate \(\left(\frac23\right)^3\).`, S`\(\frac8{27}\).`],
    ],
    words: [
      ["Zero exponent", "b⁰ = 1 for any b ≠ 0", "7⁰ = 1"],
      ["Negative exponent", "b⁻ⁿ = 1/bⁿ", "2⁻³ = 1/8"],
      ["Reciprocal", "1 divided by the number; flips a fraction", "(2/5)⁻¹ = 5/2"],
      ["Integral exponent", "an exponent that is an integer: …, −2, −1, 0, 1, 2, …", "3⁻⁴"],
      ["Positive-exponent form", "the final answer written without negative exponents", "x⁻² → 1/x²"],
    ],
  }),

  section("📌 Following the pattern", S`
  ${table(["Power", "2³", "2²", "2¹", "2⁰", "2⁻¹", "2⁻²", "2⁻³"], [["Value", "8", "4", "2", "1", "½", "¼", "⅛"]])}
  <p>Each step to the right lowers the exponent by \(1\) and divides the value by \(2\). Continuing the pattern past \(2^1\) forces \(2^0=1\), \(2^{-1}=\frac12\), \(2^{-2}=\frac14\).</p>
  ${two}
  ${keyIdea(S`For \(b\ne0\): \(b^0=1\) and \(b^{-n}=\frac1{b^n}\). A negative exponent means <b>reciprocal</b>, not a negative number: \(2^{-3}=\frac18>0\). For a fraction, \(\left(\frac ab\right)^{-n}=\left(\frac ba\right)^n\).`)}`),

  widget("powerLadder", { start: 3 }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "2⁻³ is ⅛, not −8 and not −6.",
    "5⁰ = 1, not 0; but 0⁰ is undefined.",
    "(2/3)⁻² = (3/2)² = 9/4: flip, then square.",
    "In 3x⁻², only the x is negative-powered: 3x⁻² = 3/x².",
    "Write final algebraic answers with positive exponents.",
  ])}`),

  examples([
    ["Why b⁰ = 1", S`Use the quotient law on \(\frac{5^3}{5^3}\) to explain why \(5^0=1\), and evaluate \(7^0\), \((-4)^0\), \(-4^0\).`,
      [S`<b>Two ways.</b> Any non-zero number divided by itself is \(1\); by the quotient law \(\frac{5^3}{5^3}=5^{3-3}=5^0\).`,
        S`<b>So</b> \(5^0=1\). The same works for any non-zero base.`,
        S`<b>Evaluate.</b> \(7^0=1\); \((-4)^0=1\); \(-4^0=-(4^0)=-1\).`,
        S`<b>Watch the brackets.</b> Only \((-4)^0\) has \(-4\) as its base.`],
      S`7⁰ = 1, (−4)⁰ = 1, −4⁰ = −1`,
      strip([{ label: "5³ on top", items: rep("5", 3), color: "gray" }, { label: "5³ below", items: rep("5", 3), color: "gray" }, { label: "left: 5⁰", items: ["1"], color: "green" }], "all factors cancel, leaving 1")],

    ["Why b⁻ⁿ = 1/bⁿ", S`Simplify \(\frac{5^2}{5^5}\) two ways and conclude what \(5^{-3}\) means.`,
      [S`<b>Cancel factors.</b> Two \(5\)s cancel, leaving three in the denominator: \(\frac1{5^3}\).`,
        S`<b>Quotient law.</b> \(5^{2-5}=5^{-3}\).`,
        S`<b>Conclusion.</b> \(5^{-3}=\frac1{5^3}=\frac1{125}=0.008\).`,
        S`<b>Check.</b> \(25\div3125=0.008\) ✓`],
      S`5⁻³ = 1/125 = 0.008`,
      strip([{ label: "top: 5²", items: rep("5", 2), color: "gray" }, { label: "bottom: 5⁵", items: rep("5", 5), colors: [...rep("gray", 2), ...rep("violet", 3)] }, { label: "left: 1/5³", items: ["1", "/", ...rep("5", 3)], colors: ["green", "green", ...rep("violet", 3)] }])],

    ["Evaluating", S`Evaluate \(4^{-2}\), \((-3)^{-3}\) and \(\left(\frac25\right)^{-2}\).`,
      [S`<b>\(4^{-2}\).</b> \(\frac1{4^2}=\frac1{16}=0.0625\).`,
        S`<b>\((-3)^{-3}\).</b> \(\frac1{(-3)^3}=\frac1{-27}=-\frac1{27}\) — negative because the BASE is negative and the exponent odd.`,
        S`<b>\(\left(\frac25\right)^{-2}\).</b> Flip: \(\left(\frac52\right)^2=\frac{25}4=6.25\).`,
        S`<b>Check.</b> \(\left(\frac25\right)^2=\frac4{25}\), and its reciprocal is \(\frac{25}4\) ✓`],
      S`1/16, −1/27, 25/4`,
      strip([{ label: "(2/5)⁻²", items: ["2/5", "2/5"], color: "gray" }, { label: "flip: (5/2)²", items: ["5/2", "5/2"], color: "violet" }, { label: "= 25/4", items: ["25/4"], color: "green" }])],

    ["Mixed laws, numbers", S`Evaluate \(\frac{3^{-4}\times3^{6}}{3^{-1}}\).`,
      [S`<b>Product.</b> \(3^{-4+6}=3^2\).`,
        S`<b>Quotient.</b> \(3^{2-(-1)}=3^3\).`,
        S`<b>Evaluate.</b> \(27\).`,
        S`<b>Check with decimals.</b> \(\frac{\frac1{81}\times729}{\frac13}=\frac{9}{\frac13}=27\) ✓`],
      S`27`,
      EG([(x) => 3 ** x], { view: { xmin: -2, xmax: 3.5, ymin: -1, ymax: 30 }, step: { x: 1, y: 3 }, points: [P(2, 9, "(2, 9)"), P(3, 27, "(3, 27)", "red")] })],

    ["Algebra with negative exponents", S`Simplify \(\frac{(x^{-3}y^{2})^{-2}}{x^{4}y^{-1}}\) and write it with positive exponents.`,
      [S`<b>Power of a power.</b> \((x^{-3}y^2)^{-2}=x^{6}y^{-4}\).`,
        S`<b>Divide x.</b> \(x^{6-4}=x^2\).`,
        S`<b>Divide y.</b> \(y^{-4-(-1)}=y^{-3}\).`,
        S`<b>Positive exponents.</b> \(x^2y^{-3}=\frac{x^2}{y^3}\). Check \(x=2,\ y=1\): \(\frac{(2^{-3})^{-2}}{2^4}=\frac{64}{16}=4=\frac{2^2}{1}\) ✓`],
      S`x²/y³`,
      strip([{ label: "x: 6 − 4", items: rep("x", 6), colors: [...rep("gray", 4), ...rep("violet", 2)] }, { label: "y: −4 − (−1)", items: ["1/y", "1/y", "1/y"], color: "green" }])],
  ]),

  practice([
    q("neg", S`Evaluate \(2^{-3}\) as a decimal.`, num(0.125, 0.0001), "1/2³.", [S`\(\frac18=0.125\).`], S`\(0.125\)`),
    q("ten", S`Evaluate \(10^{-2}\) as a decimal.`, num(0.01, 0.0001), "1/100.", [S`\(0.01\).`], S`\(0.01\)`),
    q("frac", S`Evaluate \(\left(\frac14\right)^{-2}\).`, num(16), "Flip, square.", [S`\(4^2=16\).`], S`\(16\)`),
    q("law", S`Evaluate \(5^{-2}\times5^{5}\).`, num(125), "5³.", [S`\(5^3=125\).`], S`\(125\)`),
    q("which", S`Which equals \(\frac1{81}\)?`, choice(["3⁻⁴", "−3⁴", "3⁰", "(−3)⁴"], 0), "Reciprocal of 81 = 3⁴.", [S`\(3^{-4}=\frac1{81}\).`], S`3⁻⁴`),
  ]),

  ...hard([
    ["Sums of reciprocals", S`Evaluate \(2^{-1}+3^{-1}\) and \(\left(2^{-1}+3^{-1}\right)^{-1}\).`,
      [S`<b>Each term.</b> \(\frac12+\frac13\).`,
        S`<b>Add.</b> \(\frac36+\frac26=\frac56\).`,
        S`<b>Reciprocal.</b> \(\left(\frac56\right)^{-1}=\frac65=1.2\).`,
        S`<b>Caution.</b> \((2^{-1}+3^{-1})^{-1}\ne2+3\): the exponent law does not apply to sums.`],
      S`5/6; 6/5`,
      strip([{ label: "2⁻¹ + 3⁻¹", items: ["1/2", "+", "1/3"], color: "violet" }, { label: "= 5/6", items: ["5/6"], color: "green" }, { label: "reciprocal", items: ["6/5"], color: "red" }])],
    ["Algebraic power of a product", S`Simplify \((2a^{-2}b^{3})^{-3}\) with positive exponents.`,
      [S`<b>Each factor to the power \(-3\).</b> \(2^{-3}a^{6}b^{-9}\).`,
        S`<b>Positive exponents.</b> \(\frac{a^6}{2^3b^9}=\frac{a^6}{8b^9}\).`,
        S`<b>Check.</b> \(a=b=1\): \(2^{-3}=\frac18\) ✓`],
      S`a⁶/(8b⁹)`],
  ], [
    q("hard", S`Evaluate \(\left(2^{-1}-2^{-2}\right)^{-1}\).`, num(4), "½ − ¼ = ¼.", [S`\(\left(\frac14\right)^{-1}=4\).`], S`\(4\)`),
    q("hard", S`Evaluate \(4^{-3}\times2^{8}\).`, num(4), "4⁻³ = 2⁻⁶.", [S`\(2^{2}=4\).`], S`\(4\)`),
    q("hard", S`Evaluate \((-2)^{-3}\times(-2)^{5}\).`, num(4), "(−2)².", [S`\(4\).`], S`\(4\)`),
    q("hard", S`Evaluate \(\frac{10^{-3}\times10^{5}}{10^{-1}}\).`, num(1000), "10³.", [S`\(10^{3}=1000\).`], S`\(1000\)`),
    q("hard", S`If \(2^n=\frac1{32}\), find \(n\).`, num(-5), "32 = 2⁵.", [S`\(n=-5\).`], S`\(-5\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is b⁰ = 1?", "bⁿ ÷ bⁿ = 1 and also = b⁰ by the quotient law; the power pattern also gives 1."],
      ["What does a negative exponent mean?", "A reciprocal: b⁻ⁿ = 1/bⁿ. It does not make the answer negative."],
      ["How do I handle (a/b)⁻ⁿ?", "Flip the fraction and use a positive exponent: (b/a)ⁿ."],
      ["Do the 7.1 laws still work?", "Yes — add, subtract and multiply exponents exactly as before."],
      ["How should I write final answers?", "With positive exponents, e.g. x²/y³ instead of x²y⁻³."],
    ],
    summary: [
      "b⁰ = 1 (b ≠ 0).",
      "b⁻ⁿ = 1/bⁿ; (a/b)⁻ⁿ = (b/a)ⁿ.",
      "All exponent laws hold for integer exponents.",
      "Give answers with positive exponents.",
    ],
    next: "7.3 extends exponents to fractions such as 8^(2/3).",
  }),
];
