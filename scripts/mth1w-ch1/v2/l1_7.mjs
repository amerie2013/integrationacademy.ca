// MTH1W 1.7 — Exponent Laws & Scientific Notation (self-study format)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, frac, sci, txt } from "./lib.mjs";

export const TITLE = "1.7 Exponent Laws & Scientific Notation";

export const blocks = () => [
  intro({
    icon: "🚀",
    title: "Exponent Laws &amp; Scientific Notation",
    overview: String.raw`When powers have the <strong>same base</strong>, multiplying and dividing them is a matter of counting factors — which gives three short rules called the <strong>exponent laws</strong>. They let you simplify \(x^4\cdot x^9\) in one step and work with algebraic powers like \((2a^3)^2\). The same laws make <strong>scientific notation</strong> work: scientists write the distance to the Sun as \(1.5\times10^{11}\) m and the width of a red blood cell as \(8\times10^{-6}\) m, and multiply such numbers without writing all the zeros.`,
    goals: [
      String.raw`derive and apply the product law \(a^m\cdot a^n=a^{m+n}\) and the quotient law \(a^m\div a^n=a^{m-n}\);`,
      String.raw`derive and apply the power-of-a-power law \((a^m)^n=a^{mn}\), and the power of a product \((ab)^n=a^nb^n\);`,
      "simplify numeric and algebraic expressions with integer exponents (including zero and negative);",
      "write numbers in scientific notation and in standard form;",
      "multiply and divide numbers in scientific notation and solve problems about very large and very small quantities.",
    ],
    curriculum: "B2.1 (scientific notation), B2.2 (relationships between exponents and operations with powers)",
    prior: [
      [String.raw`Write \(x^3\) as repeated multiplication.`, String.raw`\(x\cdot x\cdot x\).`],
      [String.raw`Evaluate \(10^{-2}\).`, String.raw`\(\tfrac{1}{100}=0.01\).`],
      [String.raw`What is \(7^0\)?`, String.raw`\(1\).`],
    ],
    words: [
      ["Product law", "same base, multiply → add the exponents", "\\(x^2\\cdot x^5=x^7\\)"],
      ["Quotient law", "same base, divide → subtract the exponents", "\\(y^8\\div y^3=y^5\\)"],
      ["Power-of-a-power law", "raise a power to a power → multiply the exponents", "\\((m^2)^4=m^8\\)"],
      ["Scientific notation", "\\(a\\times10^n\\) with \\(1\\le|a|<10\\) and \\(n\\) an integer", "\\(4.7\\times10^{6}\\)"],
      ["Standard form", "the usual way of writing a number", "\\(4\\,700\\,000\\)"],
    ],
  }),

  section("📌 The three exponent laws", String.raw`
  <p>Each law comes from writing the powers out as factors and counting:</p>
  ${table(["Law", "Why (expand and count)", "Rule"], [
    ["Product", "\\(x^3\\cdot x^2=(x\\,x\\,x)(x\\,x)=x^5\\)", "\\(a^m\\cdot a^n=a^{m+n}\\)"],
    ["Quotient", "\\(\\dfrac{x^5}{x^2}=\\dfrac{x\\,x\\,x\\,\\cancel{x}\\,\\cancel{x}}{\\cancel{x}\\,\\cancel{x}}=x^3\\)", "\\(a^m\\div a^n=a^{m-n}\\)"],
    ["Power of a power", "\\((x^3)^2=(x\\,x\\,x)(x\\,x\\,x)=x^6\\)", "\\((a^m)^n=a^{mn}\\)"],
  ])}
  <p>The explorer builds these with tiles. Set the quotient law with \(m=n\): every tile cancels, which is another way to see that \(a^0=1\).</p>`),

  widget("exponentLaws"),

  section("📌 Products and quotients inside brackets", String.raw`
  <p>An exponent outside brackets applies to <strong>every factor</strong> inside:</p>
  <p style="text-align:center;">\((ab)^n=a^nb^n\qquad\left(\dfrac{a}{b}\right)^n=\dfrac{a^n}{b^n}\)</p>
  <p>So \((3x^2)^3=3^3(x^2)^3=27x^6\). Work in this order: <strong>signs and coefficients</strong> (the numbers), then <strong>each variable</strong> separately, using the laws.</p>
  ${keyIdea(String.raw`The laws work for <strong>all integer exponents</strong>, including zero and negatives: \(a^4\cdot a^{-6}=a^{-2}=\dfrac{1}{a^2}\). Write final answers with positive exponents unless asked otherwise.`)}
  ${watchOut([
    String.raw`<strong>Add exponents only when multiplying the same base.</strong> \(x^2\cdot x^3=x^5\), not \(x^6\). And \(2^3\cdot3^2\) cannot be combined — the bases differ (it equals \(8\times9=72\)).`,
    String.raw`<strong>Don't multiply the bases.</strong> \(5^2\cdot5^4=5^6\), not \(25^6\).`,
    String.raw`<strong>Exponents do not spread over addition.</strong> \((a+b)^2\neq a^2+b^2\): \((3+4)^2=49\) but \(3^2+4^2=25\).`,
    String.raw`<strong>The coefficient gets the exponent too.</strong> \((2x)^3=8x^3\), not \(2x^3\).`,
  ])}`),

  section("📌 Scientific notation", String.raw`
  <p>A number is in <strong>scientific notation</strong> when it is written as \(a\times10^n\), where \(1\le|a|<10\) and \(n\) is an integer.</p>
  ${table(["Standard form", "Move the decimal point", "Scientific notation"], [
    ["\\(4\\,700\\,000\\)", "6 places left (big number → positive exponent)", "\\(4.7\\times10^{6}\\)"],
    ["\\(0.000\\,52\\)", "4 places right (small number → negative exponent)", "\\(5.2\\times10^{-4}\\)"],
    ["\\(-31\\,000\\)", "4 places left; keep the sign", "\\(-3.1\\times10^{4}\\)"],
  ])}
  <p><strong>Calculating.</strong> Group the decimal parts and the powers of ten, then use the exponent laws: \((2\times10^5)(4\times10^3)=(2\times4)\times10^{5+3}=8\times10^{8}\). If the decimal part ends up outside \(1\le a<10\), adjust: \(15\times10^{8}=1.5\times10^{9}\).</p>
  <p>Slide the explorer to see where your number sits on a scale from atoms to the solar system — each tick is ten times the previous one.</p>`),

  widget("sciNotation"),

  examples([
    ["Product law with a negative exponent", String.raw`Simplify \(4^3\times4^{-5}\), then evaluate.`,
      [String.raw`Same base, multiply → add exponents: \(4^{3+(-5)}=4^{-2}\).`, String.raw`\(4^{-2}=\tfrac{1}{4^2}=\tfrac{1}{16}\).`],
      String.raw`\(4^3\times4^{-5}=4^{-2}=\tfrac{1}{16}\)`],
    ["Combining laws", String.raw`Simplify \(\dfrac{(x^4)^3}{x^5}\).`,
      [String.raw`Power of a power: \((x^4)^3=x^{12}\).`, String.raw`Quotient law: \(x^{12}\div x^5=x^{12-5}=x^7\).`],
      String.raw`\(\dfrac{(x^4)^3}{x^5}=x^7\)`],
    ["Power of a product with a negative coefficient", String.raw`Simplify \((-2m^3n)^4\).`,
      [String.raw`Apply the exponent \(4\) to each factor: \((-2)^4(m^3)^4(n)^4\).`, String.raw`\((-2)^4=16\) (even exponent → positive).`, String.raw`\((m^3)^4=m^{12}\) and \(n^4\).`],
      String.raw`\((-2m^3n)^4=16m^{12}n^4\)`],
    ["Converting to scientific notation", String.raw`Write (a) \(6\,020\,000\) and (b) \(0.000\,038\) in scientific notation.`,
      [String.raw`(a) Put the decimal after the first non-zero digit: \(6.02\). It moved \(6\) places left, so \(6.02\times10^{6}\).`, String.raw`(b) \(3.8\); the decimal moved \(5\) places right, so \(3.8\times10^{-5}\).`],
      String.raw`(a) \(6.02\times10^{6}\); (b) \(3.8\times10^{-5}\)`],
    ["Light travel", String.raw`Light travels about \(3\times10^{8}\) metres per second. How far does it travel in \(5\) minutes? Give the answer in scientific notation.`,
      [String.raw`\(5\) minutes \(=300\) s \(=3\times10^{2}\) s.`, String.raw`Distance \(=\) speed \(\times\) time \(=(3\times10^{8})(3\times10^{2})\).`, String.raw`\(=(3\times3)\times10^{8+2}=9\times10^{10}\).`],
      String.raw`light travels about \(9\times10^{10}\) m in 5 minutes`],
  ]),

  practice([
    q("product law", String.raw`Evaluate \(5^4\times5^{-2}\).`, num(25),
      "Same base: add the exponents, then evaluate.", [String.raw`\(5^{4+(-2)}=5^2\).`, String.raw`\(=25\).`], String.raw`\(25\)`),
    q("combine laws", String.raw`Simplify \(\dfrac{(y^3)^5}{y^7}\). Type your answer like <em>y^4</em>.`, txt("y^8", "y8", "y^(8)", "y^{8}"),
      "Power of a power first (multiply exponents), then the quotient law (subtract).", [String.raw`\((y^3)^5=y^{15}\).`, String.raw`\(y^{15}\div y^7=y^{8}\).`], String.raw`\(y^8\)`),
    q("coefficients", String.raw`Simplify \((3a^2)^2\cdot a\). Type your answer like <em>4a^3</em>.`, txt("9a^5", "9a5", "9*a^5", "9a^{5}"),
      "Square the coefficient and the power separately, then multiply by a.", [String.raw`\((3a^2)^2=9a^4\).`, String.raw`\(9a^4\cdot a=9a^{5}\).`], String.raw`\(9a^5\)`),
    q("to scientific notation", String.raw`Write \(0.000\,72\) in scientific notation. Type it like <em>4.5 x 10^-3</em>.`, sci(7.2, -4),
      "Move the decimal point to just after the first non-zero digit and count the places.", [String.raw`\(7.2\): the decimal moved \(4\) places right.`, String.raw`Small number → negative exponent: \(7.2\times10^{-4}\).`], String.raw`\(7.2\times10^{-4}\)`, { placeholder: "e.g. 4.5 x 10^-3" }),
    q("multiply", String.raw`Evaluate \((2.4\times10^{5})(5\times10^{3})\) in scientific notation.`, sci(1.2, 9),
      "Multiply the decimal parts, add the exponents, then adjust so the decimal part is between 1 and 10.", [String.raw`\(2.4\times5=12\) and \(10^{5+3}=10^{8}\).`, String.raw`\(12\times10^{8}=1.2\times10^{9}\).`], String.raw`\(1.2\times10^{9}\)`, { placeholder: "e.g. 4.5 x 10^6" }),
  ]),

  wrapUp({
    qas: [
      [String.raw`Can I use the product law on \(2^3\times5^3\)?`, String.raw`Not the product law — the bases differ. But the power-of-a-product rule runs backwards: \(2^3\times5^3=(2\times5)^3=10^3=1000\).`],
      ["Why must the decimal part be between 1 and 10?", String.raw`So every number has exactly one scientific form. \(45\times10^3\), \(4.5\times10^4\) and \(0.45\times10^5\) are equal, but only \(4.5\times10^4\) is in scientific notation.`],
      ["How do I enter scientific notation on a calculator?", String.raw`Use the <strong>EE</strong> or <strong>EXP</strong> key: \(3.8\times10^{-5}\) is typed <code>3.8 EE -5</code>. Do not type "× 10" as well.`],
      [String.raw`What does \(x^{-3}\cdot x^{3}\) equal?`, String.raw`\(x^0=1\). The two powers are reciprocals of each other.`],
      ["Where is scientific notation used?", "Astronomy (distances, masses), biology and medicine (cell and virus sizes), chemistry (numbers of particles), and computing (storage in bytes)."],
    ],
    summary: [
      String.raw`Same base: \(a^m a^n=a^{m+n}\), \(a^m\div a^n=a^{m-n}\); and \((a^m)^n=a^{mn}\).`,
      String.raw`An exponent outside brackets applies to every factor inside: \((ab)^n=a^nb^n\).`,
      String.raw`Scientific notation: \(a\times10^n\), \(1\le|a|<10\). Big numbers have positive \(n\); numbers between 0 and 1 have negative \(n\).`,
      "To multiply or divide in scientific notation, work on the decimal parts and the powers of ten separately, then adjust.",
    ],
    next: "1.8 turns to comparing quantities with ratios and proportions.",
  }),
];
