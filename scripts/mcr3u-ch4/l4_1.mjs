// MCR3U 4.1 — Exponent Laws and Integer Exponents: the laws, zero and negative exponents, rational bases
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, frac, choice, expr, hard, plane } from "./lib.mjs";

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
      [S`\(5^{-2}=\frac1{25}\).`, S`\((-4)^0=1\); but \(-4^0=-(4^0)=-1\).`],
      S`\(\frac1{25}\), \(1\), \(-1\)`],
    ["A rational base", S`Evaluate \(\left(\tfrac23\right)^{-3}\).`,
      [S`Flip and make the exponent positive: \(\left(\tfrac32\right)^3\).`],
      S`\(\frac{27}{8}\)`],
    ["Simplifying", S`Simplify \((x^3y^{-2})(x^{-5}y^4)\).`,
      [S`Add exponents: \(x^{3-5}y^{-2+4}=x^{-2}y^2\).`],
      S`\(\frac{y^2}{x^2}\)`],
    ["Power of a product", S`Simplify \((2a^{-3})^{-2}\).`,
      [S`\(2^{-2}a^{6}\).`],
      S`\(\frac{a^6}{4}\)`],
    ["A sum of powers", S`Evaluate \(3^{-2}+2^{-3}\).`,
      [S`\(\frac19+\frac18=\frac{8+9}{72}\).`],
      S`\(\frac{17}{72}\)`],
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
