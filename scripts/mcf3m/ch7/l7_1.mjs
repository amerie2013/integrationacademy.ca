// MCF3M 7.1 — The Laws of Exponents: product, quotient and power-of-a-power laws for numerical and algebraic powers
// with integer exponents; powers of products and quotients; simplifying before evaluating.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "../lib.mjs";
import { strip, rep } from "./efig.mjs";
const S = String.raw;

export const TITLE = "7.1 The Laws of Exponents";

export const blocks = () => [
  intro({
    icon: "🔢",
    title: "The Laws of Exponents",
    overview: S`A power such as \(3^4\) is shorthand for repeated multiplication: \(3\times3\times3\times3\). When powers with the same base are multiplied, divided or raised to another power, you can count the factors instead of multiplying them out. That counting gives the <b>exponent laws</b>. They make large calculations quick, and they are the tool you need for exponential functions later in this chapter.`,
    goals: [
      "explain the product, quotient and power-of-a-power laws by counting factors;",
      "use the laws to simplify and evaluate numerical expressions;",
      "apply the laws to powers of products and quotients;",
      "simplify algebraic expressions with integer exponents;",
      "simplify before evaluating to avoid huge numbers.",
    ],
    curriculum: "B1.3 (determine the exponent laws for multiplying and dividing numerical expressions and for a power of a power, and use them to simplify expressions)",
    prior: [
      [S`Write \(2\times2\times2\times2\times2\) as a power and evaluate.`, S`\(2^5=32\).`],
      [S`Evaluate \((-3)^3\).`, S`\(-27\).`],
      [S`Evaluate \(\left(\tfrac12\right)^3\).`, S`\(\tfrac18\).`],
    ],
    words: [
      ["Power", "an expression b^n: base b, exponent n", "3⁴"],
      ["Base", "the factor being repeated", "3 in 3⁴"],
      ["Exponent", "how many times the base is a factor", "4 in 3⁴"],
      ["Product law", "b^m × b^n = b^(m+n)", "3⁴ × 3² = 3⁶"],
      ["Power-of-a-power law", "(b^m)^n = b^(mn)", "(2³)⁴ = 2¹²"],
    ],
  }),

  section("📌 Counting factors gives the laws", S`
  ${strip([{ label: "3⁴", items: rep("3", 4) }, { label: "3²", items: rep("3", 2), color: "green" }, { label: "3⁴ × 3²", items: [...rep("3", 4), ...rep("3", 2)], colors: [...rep("violet", 4), ...rep("green", 2)] }], "4 factors + 2 factors = 6 factors")}
  ${table(["Law", "Rule", "Example"], [
    ["Product", "\\(b^m\\times b^n=b^{m+n}\\)", "\\(5^3\\times5^4=5^7\\)"],
    ["Quotient", "\\(b^m\\div b^n=b^{m-n}\\ (b\\ne0)\\)", "\\(5^7\\div5^4=5^3\\)"],
    ["Power of a power", "\\((b^m)^n=b^{mn}\\)", "\\((5^2)^3=5^6\\)"],
    ["Power of a product", "\\((ab)^n=a^nb^n\\)", "\\((2x)^3=8x^3\\)"],
    ["Power of a quotient", "\\(\\left(\\frac ab\\right)^n=\\frac{a^n}{b^n}\\)", "\\(\\left(\\frac23\\right)^2=\\frac49\\)"],
  ])}
  ${keyIdea(S`The laws only work when the <b>bases are the same</b>. Add exponents when multiplying, subtract when dividing, multiply when raising a power to a power.`)}`),

  widget("exponentLaws", {}),

  section("⚠️ Common errors", S`
  ${watchOut([
    "3⁴ × 3² is 3⁶, not 9⁶: keep the base, add the exponents.",
    "(2³)⁴ is 2¹², not 2⁷: multiply exponents for a power of a power.",
    "2³ × 5² cannot be combined with a law: the bases differ.",
    "−3² = −9 but (−3)² = 9: the brackets decide what is squared.",
    "In (4x³)², square the 4 too: 16x⁶.",
  ])}`),

  examples([
    ["The product law", S`Simplify \(3^4\times3^2\) as a single power and evaluate.`,
      [S`<b>Count factors.</b> \(3^4\) has four factors of \(3\); \(3^2\) has two.`,
        S`<b>Together.</b> \(4+2=6\) factors: \(3^4\times3^2=3^{4+2}=3^6\).`,
        S`<b>Evaluate.</b> \(3^6=729\).`,
        S`<b>Check.</b> \(81\times9=729\) ✓`],
      S`3⁶ = 729`,
      strip([{ label: "3⁴", items: rep("3", 4) }, { label: "3²", items: rep("3", 2), color: "green" }, { label: "3⁶", items: rep("3", 6), colors: [...rep("violet", 4), ...rep("green", 2)] }])],

    ["The quotient law", S`Simplify \(\frac{5^7}{5^4}\) and evaluate.`,
      [S`<b>Cancel common factors.</b> Four factors of \(5\) in the denominator cancel four in the numerator.`,
        S`<b>Left over.</b> \(7-4=3\) factors: \(5^{7-4}=5^3\).`,
        S`<b>Evaluate.</b> \(5^3=125\).`,
        S`<b>Check.</b> \(78125\div625=125\) ✓`],
      S`5³ = 125`,
      strip([{ label: "numerator 5⁷", items: rep("5", 7), colors: [...rep("gray", 4), ...rep("violet", 3)] }, { label: "denominator 5⁴", items: rep("5", 4), color: "gray" }, { label: "left: 5³", items: rep("5", 3) }], "gray factors cancel")],

    ["Power of a power", S`Simplify \((2^3)^4\) and evaluate.`,
      [S`<b>Meaning.</b> \((2^3)^4=2^3\times2^3\times2^3\times2^3\): four groups of three factors.`,
        S`<b>Count.</b> \(4\times3=12\) factors: \(2^{12}\).`,
        S`<b>Evaluate.</b> \(2^{12}=4096\).`,
        S`<b>Check.</b> \(8^4=4096\) ✓`],
      S`2¹² = 4096`,
      strip([{ label: "(2³)⁴", items: rep("2", 12), colors: [...rep("violet", 3), ...rep("green", 3), ...rep("blue", 3), ...rep("amber", 3)] }], "4 groups × 3 factors = 12 factors")],

    ["Combine the laws", S`Evaluate \(\frac{\left(\frac12\right)^5\times\left(\frac12\right)^3}{\left(\frac12\right)^6}\).`,
      [S`<b>Numerator.</b> \(\left(\frac12\right)^{5+3}=\left(\frac12\right)^8\).`,
        S`<b>Divide.</b> \(\left(\frac12\right)^{8-6}=\left(\frac12\right)^2\).`,
        S`<b>Evaluate.</b> \(\frac{1^2}{2^2}=\frac14\).`,
        S`<b>Why simplify first?</b> \(\left(\frac12\right)^8=\frac1{256}\); working with exponents avoids fractions like that.`],
      S`(1/2)² = 1/4`,
      strip([{ label: "top: (½)⁸", items: rep("½", 8), colors: [...rep("gray", 6), ...rep("violet", 2)] }, { label: "bottom: (½)⁶", items: rep("½", 6), color: "gray" }, { label: "left: (½)²", items: rep("½", 2) }])],

    ["Algebraic expressions", S`Simplify \(\frac{(4x^3y^2)(-3x^5y)}{6x^4y^2}\).`,
      [S`<b>Coefficients.</b> \(\frac{4\times(-3)}{6}=\frac{-12}6=-2\).`,
        S`<b>Powers of x.</b> \(\frac{x^{3+5}}{x^4}=x^{8-4}=x^4\).`,
        S`<b>Powers of y.</b> \(\frac{y^{2+1}}{y^2}=y^{1}\).`,
        S`<b>Result and check.</b> \(-2x^4y\). Test \(x=1,\ y=1\): \(\frac{(4)(-3)}6=-2\) ✓`],
      S`−2x⁴y`,
      strip([{ label: "x's on top", items: rep("x", 8), colors: [...rep("gray", 4), ...rep("violet", 4)] }, { label: "x's below", items: rep("x", 4), color: "gray" }, { label: "y's on top", items: rep("y", 3), colors: [...rep("gray", 2), "green"] }, { label: "y's below", items: rep("y", 2), color: "gray" }])],
  ]),

  practice([
    q("prod", S`\(2^5\times2^3=2^n\). Find \(n\).`, num(8), "Add exponents.", [S`\(5+3=8\).`], S`\(8\)`),
    q("quot", S`Evaluate \(\frac{7^9}{7^7}\).`, num(49), "Subtract exponents.", [S`\(7^2=49\).`], S`\(49\)`),
    q("pow", S`Evaluate \((3^2)^3\).`, num(729), "Multiply exponents.", [S`\(3^6=729\).`], S`\(729\)`),
    q("alg", S`\((x^4)^3\cdot x^2=x^n\). Find \(n\).`, num(14), "12 + 2.", [S`\(x^{12}\cdot x^2=x^{14}\).`], S`\(14\)`),
    q("which", S`Which expression equals \(6^{10}\)?`, choice(["6⁴ × 6⁶", "6⁴ × 6⁶ × 6", "(6⁵)⁵", "6²⁰ ÷ 6²"], 0), "Add exponents.", [S`\(4+6=10\).`], S`6⁴ × 6⁶`),
  ]),

  ...hard([
    ["Negative base", S`Evaluate \(\frac{\left[(-2)^3\right]^2\times(-2)^4}{(-2)^7}\).`,
      [S`<b>Power of a power.</b> \(\left[(-2)^3\right]^2=(-2)^6\).`,
        S`<b>Product.</b> \((-2)^{6+4}=(-2)^{10}\).`,
        S`<b>Quotient.</b> \((-2)^{10-7}=(-2)^3=-8\).`,
        S`<b>Sign check.</b> An odd exponent on a negative base gives a negative result ✓`],
      S`−8`,
      strip([{ label: "top: (−2)¹⁰", items: rep("−2", 10), colors: [...rep("gray", 7), ...rep("violet", 3)] }, { label: "bottom: (−2)⁷", items: rep("−2", 7), color: "gray" }])],
    ["Powers of products", S`Simplify \(\frac{(2a^3b)^3(3ab^2)^2}{12a^7b^5}\).`,
      [S`<b>Expand the powers.</b> \((2a^3b)^3=8a^9b^3\); \((3ab^2)^2=9a^2b^4\).`,
        S`<b>Multiply.</b> \(72a^{11}b^7\).`,
        S`<b>Divide.</b> \(\frac{72}{12}a^{11-7}b^{7-5}=6a^4b^2\).`,
        S`<b>Check.</b> \(a=b=1\): \(\frac{8\times9}{12}=6\) ✓`],
      S`6a⁴b²`],
  ], [
    q("hard", S`Evaluate \(\frac{2^3\times2^5}{(2^2)^3}\).`, num(4), "2⁸ ÷ 2⁶.", [S`\(2^2=4\).`], S`\(4\)`),
    q("hard", S`\(9^4=3^n\). Find \(n\).`, num(8), "9 = 3².", [S`\((3^2)^4=3^8\).`], S`\(8\)`),
    q("hard", S`\(8^3\times4^2=2^n\). Find \(n\).`, num(13), "8 = 2³, 4 = 2².", [S`\(2^9\times2^4=2^{13}\).`], S`\(13\)`),
    q("hard", S`Evaluate \(\frac{(-3)^5}{(-3)^2}\).`, num(-27), "(−3)³.", [S`\((-3)^3=-27\).`], S`\(-27\)`),
    q("hard", S`\((x^3)^k\cdot x^2=x^{20}\). Find \(k\).`, num(6), "3k + 2 = 20.", [S`\(k=6\).`], S`\(6\)`),
  ]),

  wrapUp({
    qas: [
      ["Why do we add exponents when multiplying?", "Each exponent counts factors of the same base; putting them together adds the counts."],
      ["When can't I use the laws?", "When the bases are different, such as 2³ × 5²."],
      ["What is (b^m)^n?", "b^(mn): n groups of m factors."],
      ["How do I handle coefficients?", "Multiply or divide the numbers normally; apply the laws to each variable separately."],
      ["Why simplify before evaluating?", "It keeps numbers small and avoids calculator overflow and fraction errors."],
    ],
    summary: [
      "b^m × b^n = b^(m+n).",
      "b^m ÷ b^n = b^(m−n).",
      "(b^m)^n = b^(mn); (ab)^n = aⁿbⁿ.",
      "Same base needed.",
    ],
    next: "7.2 asks what b⁰ and negative exponents must mean.",
  }),
];
