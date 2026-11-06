// MCR3U 4.1 — Exponent Laws and Integer Exponents: the laws, zero and negative exponents, rational bases
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, frac, choice, expr, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";

export const TITLE = "4.1 Exponent Laws and Integer Exponents";
export const ID = "99fd652a-4469-4e4d-93ae-e6046c392fc8";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🪜",
    title: "Exponent Laws and Integer Exponents",
    overview: S`Exponential functions are built from powers, so this chapter starts with the rules for working with them. In this lesson you will review the exponent laws, see why \(b^0=1\) and \(b^{-n}=\frac1{b^n}\) follow from them, and evaluate and simplify expressions with integer exponents, including fractional and negative bases.`,
    goals: [
      "apply the product, quotient and power laws;",
      "explain and use the zero and negative exponent rules;",
      "evaluate powers with negative exponents and rational bases;",
      "simplify algebraic expressions so that all exponents are positive;",
      "avoid the common sign and reciprocal errors.",
    ],
    curriculum: "B1.2 (the value of powers, by patterning and interpreting the exponent laws), B1.3 (simplify algebraic expressions containing integer exponents; evaluate numeric expressions with integer exponents and rational bases)",
    prior: [
      [S`Simplify \(x^3\cdot x^4\).`, S`\(x^7\).`],
      [S`Simplify \(\frac{y^9}{y^3}\).`, S`\(y^6\).`],
      [S`What is \((-2)^3\)?`, S`\(-8\).`],
    ],
    words: [
      ["Power", "\\(b^n\\): base \\(b\\), exponent \\(n\\)", "\\(2^5=32\\)"],
      ["Zero exponent", "\\(b^0=1\\) for \\(b\\ne0\\)", "\\(7^0=1\\)"],
      ["Negative exponent", "\\(b^{-n}=\\frac1{b^n}\\)", "\\(2^{-3}=\\frac18\\)"],
      ["Reciprocal", "flip a fraction", "\\((\\tfrac23)^{-1}=\\tfrac32\\)"],
    ],
  }),

  section("📌 The laws", S`
  ${table(["Law", "Rule", "Example"], [
    ["Product", "\\(b^m\\cdot b^n=b^{m+n}\\)", "\\(x^3x^{-5}=x^{-2}\\)"],
    ["Quotient", "\\(\\frac{b^m}{b^n}=b^{m-n}\\)", "\\(\\frac{a^2}{a^6}=a^{-4}\\)"],
    ["Power of a power", "\\((b^m)^n=b^{mn}\\)", "\\((y^{-2})^3=y^{-6}\\)"],
    ["Power of a product / quotient", "\\((ab)^n=a^nb^n\\), \\((\\frac ab)^n=\\frac{a^n}{b^n}\\)", "\\((2x)^3=8x^3\\)"],
    ["Zero", "\\(b^0=1\\)", "\\((-4)^0=1\\)"],
    ["Negative", "\\(b^{-n}=\\frac1{b^n}\\), \\((\\frac ab)^{-n}=(\\frac ba)^n\\)", "\\((\\tfrac23)^{-2}=\\tfrac94\\)"],
  ])}
  ${keyIdea(S`The zero and negative rules are not new laws — they are what the quotient law forces: \(\frac{b^3}{b^3}=b^0\) must equal 1, and \(\frac{b^2}{b^5}=b^{-3}\) must equal \(\frac1{b^3}\).`)}
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 9 }, curves: [{ f: (x) => 2 ** x, color: "violet" }], points: [[-3, 0.125], [-2, 0.25], [-1, 0.5], [0, 1], [1, 2], [2, 4], [3, 8]].map(([x, y]) => ({ x, y, label: x <= 0 && x >= -1 ? `(${x}, ${y})`.replace(/-/g, "−") : undefined })), step: { x: 1, y: 1 } }, "powers of 2 on y = 2ˣ: 2⁻³ = 0.125, 2⁻² = 0.25, 2⁻¹ = 0.5, 2⁰ = 1")}`),

  section("📌 Explore", S`<p>Walk down the ladder: each step divides by the base. Watch what happens at exponent 0 and below. Try the base \(\tfrac12\) and the negative base \(-2\).</p>`),

  widget("powerLadder", { start: 3 }),

  section("📌 Watch out", watchOut([
    S`\(-3^2=-9\) but \((-3)^2=9\): the exponent applies only to what it touches.`,
    S`A negative exponent never makes the value negative: \(2^{-3}=\frac18\).`,
    S`\((a+b)^{-1}\ne a^{-1}+b^{-1}\).`,
    "Write final answers with positive exponents unless told otherwise.",
  ])),

  examples([
    ["Zero and negative exponents", S`Evaluate \(5^{-2}\), \((-4)^0\) and \(-4^0\).`,
      [S`<b>Rules we need.</b> For \(b\ne0\): \(b^0=1\) and \(b^{-n}=\dfrac1{b^n}\). The table shows why. Each step down in the exponent divides by \(5\), so the pattern continues past zero. ${tv(["exponent", "\\(2\\)", "\\(1\\)", "\\(0\\)", "\\(-1\\)", "\\(-2\\)"], ["value of \\(5^x\\)", "\\(25\\)", "\\(5\\)", "\\(1\\)", "\\(\\frac15\\)", "\\(\\frac1{25}\\)"])}`,
        S`<b>First power.</b> The negative exponent means a reciprocal, not a negative number: \(5^{-2}=\dfrac1{5^2}=\dfrac1{25}\).`,
        S`<b>Second power.</b> The brackets make \(-4\) the base, so the zero exponent applies to all of it: \((-4)^0=1\).`,
        S`<b>Third power.</b> With no brackets the exponent applies only to \(4\), and the minus sign waits until the end: \(-4^0=-(4^0)=-(1)=-1\).`,
        S`<b>Check on the graph.</b> The point \(\left(-2,\frac1{25}\right)\) lies on \(y=5^x\), just above the x-axis. The value is small and positive, as expected ✓`],
      S`\(5^{-2}=\frac1{25}\), \((-4)^0=1\), \(-4^0=-1\)`,
      plane({ view: { xmin: -3, xmax: 2, ymin: -1, ymax: 6 }, curves: [{ f: (x) => 5 ** x, color: "violet" }], points: [{ x: -2, y: 0.04, label: "(−2, 1/25)", color: "amber" }, { x: 0, y: 1, label: "(0, 1)" }, { x: 1, y: 5, label: "(1, 5)" }], step: { x: 1, y: 1 } })],
    ["A rational base", S`Evaluate \(\left(\tfrac23\right)^{-3}\).`,
      [S`<b>Rule.</b> A negative exponent means "take the reciprocal", and the reciprocal of a fraction is that fraction flipped: \(\left(\tfrac ab\right)^{-n}=\left(\tfrac ba\right)^{n}\).`,
        S`<b>Flip the base and change the sign of the exponent.</b> \(\left(\tfrac23\right)^{-3}=\left(\tfrac32\right)^{3}\).`,
        S`<b>Apply the cube to the top and to the bottom.</b> \(\left(\tfrac32\right)^3=\dfrac{3^3}{2^3}=\dfrac{27}{8}\).`,
        S`<b>Check by the definition.</b> \(\left(\tfrac23\right)^3=\frac8{27}\), and \(\frac1{8/27}=\frac{27}8\) ✓`,
        S`<b>Check on the graph.</b> The base is less than 1, so \(y=\left(\tfrac23\right)^x\) falls from left to right. At \(x=-3\) the value must be above 1, and \(\frac{27}8=3.375\) is ✓`],
      S`\(\left(\tfrac23\right)^{-3}=\frac{27}{8}\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -1, ymax: 6 }, curves: [{ f: (x) => (2 / 3) ** x, color: "violet" }], points: [{ x: -3, y: 3.375, label: "(−3, 3.375)", color: "amber" }, { x: 0, y: 1, label: "(0, 1)" }], step: { x: 1, y: 1 } })],
    ["Simplifying", S`Simplify \((x^3y^{-2})(x^{-5}y^4)\), for \(x,y\ne0\). Write the answer with positive exponents.`,
      [S`<b>Rule.</b> Powers with the same base multiply by adding exponents: \(b^m\cdot b^n=b^{m+n}\). This works only for equal bases, so we group the \(x\) powers and the \(y\) powers.`,
        S`<b>Group by base.</b> Multiplication can be done in any order: \((x^3\cdot x^{-5})(y^{-2}\cdot y^4)\).`,
        S`<b>Add the exponents.</b> For \(x\): \(3+(-5)=-2\). For \(y\): \(-2+4=2\). This gives \(x^{-2}y^2\).`,
        S`<b>Remove the negative exponent.</b> \(x^{-2}=\dfrac1{x^2}\), so the expression equals \(\dfrac{y^2}{x^2}\).`,
        S`<b>Check with numbers</b> \(x=2,\ y=3\). Original: \(\left(8\cdot\frac19\right)\left(\frac1{32}\cdot81\right)=\frac89\cdot\frac{81}{32}=\frac94\). Simplified: \(\frac{3^2}{2^2}=\frac94\) ✓. The graph fixes \(y=3\), which gives the curve \(\frac9{x^2}\) through \(\left(2,\frac94\right)\).`],
      S`\(\dfrac{y^2}{x^2}\)`,
      plane({ view: { xmin: -5, xmax: 5, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 9 / (x * x), a: 0.9, color: "violet" }, { f: (x) => 9 / (x * x), b: -0.9, color: "violet" }], points: [{ x: 2, y: 2.25, label: "(2, 9/4)", color: "amber" }], step: { x: 1, y: 1 } }, "With y = 3 the expression is 9/x².")],
    ["Power of a product", S`Simplify \((2a^{-3})^{-2}\), for \(a\ne0\).`,
      [S`<b>Rules.</b> An outside exponent applies to every factor in the bracket: \((pq)^n=p^nq^n\). A power of a power multiplies the exponents: \((b^m)^n=b^{mn}\).`,
        S`<b>Give the exponent to each factor.</b> \((2a^{-3})^{-2}=2^{-2}\cdot(a^{-3})^{-2}\). The \(2\) must get the exponent too. Forgetting it is the most common mistake.`,
        S`<b>Multiply the exponents on \(a\).</b> \((-3)\times(-2)=6\), so \((a^{-3})^{-2}=a^6\).`,
        S`<b>Evaluate the number.</b> \(2^{-2}=\frac1{2^2}=\frac14\), so the expression is \(\dfrac14a^6=\dfrac{a^6}4\).`,
        S`<b>Check with</b> \(a=2\). Inside the bracket: \(2\cdot2^{-3}=\frac14\). Then \(\left(\frac14\right)^{-2}=4^2=16\). The answer gives \(\frac{2^6}{4}=\frac{64}4=16\) ✓. This is the point \((2,16)\) on the graph.`],
      S`\(\dfrac{a^6}{4}\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -2, ymax: 20 }, curves: [{ f: (x) => x ** 6 / 4, color: "violet" }], points: [{ x: 2, y: 16, label: "(2, 16)", color: "amber" }, { x: 1, y: 0.25, label: "(1, 1/4)" }], step: { x: 1, y: 2 }, xlabel: "a" })],
    ["A sum of powers", S`Evaluate \(3^{-2}+2^{-3}\).`,
      [S`<b>Plan.</b> The exponent laws do not apply here, because the bases differ and the operation is addition. We write each power as a fraction and add the fractions.`,
        S`<b>Each power as a fraction.</b> \(3^{-2}=\dfrac1{3^2}=\dfrac19\) and \(2^{-3}=\dfrac1{2^3}=\dfrac18\).`,
        S`<b>Common denominator.</b> The lowest common multiple of \(9\) and \(8\) is \(72\): \(\dfrac19=\dfrac8{72}\) and \(\dfrac18=\dfrac9{72}\).`,
        S`<b>Add.</b> \(\dfrac8{72}+\dfrac9{72}=\dfrac{17}{72}\). The fraction cannot be reduced, since \(17\) is prime.`,
        S`<b>Check with decimals.</b> \(\frac19\approx0.111\) and \(\frac18=0.125\) add to \(0.236\), and \(\frac{17}{72}\approx0.236\) ✓. The graph shows the two values as heights on \(y=3^x\) and \(y=2^x\).`],
      S`\(\frac{17}{72}\)`,
      plane({ view: { xmin: -4, xmax: 2, ymin: -0.5, ymax: 4 }, curves: [{ f: (x) => 3 ** x, color: "violet" }, { f: (x) => 2 ** x, color: "blue" }], points: [{ x: -2, y: 1 / 9, label: "(−2, 1/9)", color: "amber" }, { x: -3, y: 1 / 8, label: "(−3, 1/8)", color: "red" }], step: { x: 1, y: 1 } }, "violet y = 3ˣ, blue y = 2ˣ")],
  ]),

  practice([
    q("negative exponent", S`Evaluate \(4^{-3}\) as a fraction.`, frac(1, 64),
      "Reciprocal of 4³.", [S`\(\frac1{64}\).`], S`\(\frac1{64}\)`),
    q("rational base", S`Evaluate \(\left(\tfrac52\right)^{-2}\) as a fraction.`, frac(4, 25),
      "Flip, then square.", [S`\(\left(\tfrac25\right)^2\).`], S`\(\frac4{25}\)`),
    q("sum", S`Evaluate \(7^0+7^{-1}\) as a fraction.`, frac(8, 7),
      "7⁰ = 1.", [S`\(1+\frac17\).`], S`\(\frac87\)`),
    q("simplify", S`Simplify \(x^5\cdot x^{-8}\) (positive exponents).`, expr("1/x^3", false),
      "Add the exponents.", [S`\(x^{-3}\).`], S`\(\frac1{x^3}\)`),
    q("sign", S`What is \(-3^{-2}\)?`, choice([S`\(-\frac19\)`, S`\(\frac19\)`, S`\(9\)`, S`\(-9\)`], 0),
      "The minus sign is outside the power.", [S`\(-(3^{-2})=-\frac19\).`], S`\(-\frac19\)`),
  ]),

  ...hard([
    ["Reciprocals inside reciprocals", S`Evaluate \(\left(2^{-1}+3^{-1}\right)^{-1}\).`,
      [S`\(\frac12+\frac13=\frac56\).`, S`\(\left(\frac56\right)^{-1}=\frac65\).`],
      S`\(\frac65\)`],
    ["A full simplification", S`Simplify \(\dfrac{(4x^{-2}y^3)^{-2}}{(2xy^{-1})^3}\) with positive exponents.`,
      [S`Numerator: \(4^{-2}x^4y^{-6}=\frac{x^4}{16y^6}\). Denominator: \(8x^3y^{-3}\).`, S`\(\frac{x^4}{16y^6}\cdot\frac{y^3}{8x^3}=\frac{x}{128y^3}\).`],
      S`\(\frac{x}{128y^3}\)`],
  ], [
    q("hard", S`Evaluate \(\left(3^{-1}-6^{-1}\right)^{-2}\).`, num(36),
      "Subtract the fractions first.", [S`\(\frac13-\frac16=\frac16\); \(\left(\frac16\right)^{-2}=36\).`], S`\(36\)`),
    q("hard", S`Solve \(2^x=\frac1{32}\).`, num(-5),
      "Write 1/32 as a power of 2.", [S`\(\frac1{32}=2^{-5}\).`], S`\(x=-5\)`),
    q("hard", S`Evaluate \(\left(\tfrac12\right)^{-4}\cdot2^{-3}\).`, num(2),
      "Write both as powers of 2.", [S`\(2^4\cdot2^{-3}=2^1\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is 0⁰ left out?", "The patterns disagree (0ⁿ = 0 but b⁰ = 1), so this course does not assign it a value."],
      ["Is 2⁻³ negative?", "No. It is 1/8, a small positive number."],
      ["How do I handle a fraction to a negative power?", "Flip the fraction and make the exponent positive."],
      ["Do I have to remove negative exponents?", "Usually final answers use positive exponents; both forms are equal."],
      ["Why learn this before exponential functions?", "Evaluating y = bˣ at negative x needs these rules."],
    ],
    summary: [
      "Product: add; quotient: subtract; power: multiply.",
      "b⁰ = 1; b⁻ⁿ = 1/bⁿ; (a/b)⁻ⁿ = (b/a)ⁿ.",
      "Watch brackets with negative bases.",
      "Give answers with positive exponents.",
    ],
    next: "4.2 extends exponents to fractions: rational exponents.",
  }),
];
