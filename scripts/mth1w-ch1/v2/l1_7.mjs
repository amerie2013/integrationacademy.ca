// MTH1W 1.7 — Exponent Laws & Scientific Notation (self-study format)
import { intro, section, keyIdea, widget, examples, practice, hard, wrapUp, watchOut, table, q, num, frac, sci, txt, fig } from "./lib.mjs";
import { expr } from "../../mth1w-ch2/lib.mjs";
import { quotientTiles, cube } from "./bank/svg.mjs";

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
      String.raw`raise a fraction with several variables to a power, including a negative power, such as \(\left(\dfrac{2a^{3}b}{5ab^{4}}\right)^{-2}\);`,
      "rewrite powers with a common base to solve for an unknown exponent;",
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

  section("📌 A whole fraction raised to a power", String.raw`
  <p>The hardest questions in this topic put a fraction with several variables inside brackets, with a power outside. Take \(\left(\dfrac{3a^5b^2}{12a^2b^6}\right)^2\). Do not spread the outside exponent straight away. <strong>Simplify inside the brackets first</strong>, because the numbers stay small.</p>
  ${fig(quotientTiles([{ sym: "a", top: 5, bottom: 2 }, { sym: "b", top: 2, bottom: 6 }]), "Inside the brackets: each factor below cancels one factor above. Three a's stay on top and four b's stay on the bottom.")}
  <ol>
    <li><strong>Coefficient:</strong> reduce the fraction, \(\dfrac{3}{12}=\dfrac{1}{4}\). The 1 stays on top and the 4 stays on the bottom.</li>
    <li><strong>Each variable:</strong> subtract exponents, top minus bottom: \(a^{5-2}=a^{3}\) and \(b^{2-6}=b^{-4}\).</li>
    <li><strong>Move negative exponents:</strong> \(b^{-4}=\dfrac{1}{b^{4}}\), so the inside becomes \(\dfrac{a^{3}}{4b^{4}}\).</li>
    <li><strong>Apply the outside power to every factor,</strong> including the coefficient: \(\dfrac{(a^{3})^{2}}{4^{2}(b^{4})^{2}}=\dfrac{a^{6}}{16b^{8}}\).</li>
  </ol>
  ${keyIdea(String.raw`A <strong>negative power outside</strong> flips the fraction: \(\left(\dfrac{a}{b}\right)^{-n}=\left(\dfrac{b}{a}\right)^{n}\). Simplify inside, flip, then apply the positive power.`)}
  <p><strong>Common bases.</strong> Powers of \(4\), \(8\) and \(16\) are all powers of \(2\), so \(8^{n}\) can be written \((2^{3})^{n}=2^{3n}\). Once both sides have the same base, the exponents must be equal, which gives an equation you can solve.</p>
  ${watchOut([
    String.raw`<strong>A negative exponent does not make the number negative.</strong> \(b^{-4}\) moves \(b^{4}\) to the bottom. The sign of the coefficient does not change.`,
    String.raw`<strong>Only factors can move.</strong> \(\dfrac{1}{a^{-2}+b}\) is not \(\dfrac{a^{2}}{b}\), because \(a^{-2}\) is part of a sum.`,
    String.raw`<strong>Raise the coefficient too.</strong> \(\left(\dfrac{a^{3}}{4b^{4}}\right)^{2}\) has \(16\) on the bottom, not \(4\).`,
  ])}`),

  section("📌 Scientific notation", String.raw`
  <p>A number is in <strong>scientific notation</strong> when it is written as \(a\times10^n\), where \(1\le|a|<10\) and \(n\) is an integer.</p>
  ${table(["Standard form", "Move the decimal point", "Scientific notation"], [
    ["\\(4\\,700\\,000\\)", "6 places left (big number → positive exponent)", "\\(4.7\\times10^{6}\\)"],
    ["\\(0.000\\,52\\)", "4 places right (small number → negative exponent)", "\\(5.2\\times10^{-4}\\)"],
    ["\\(-31\\,000\\)", "4 places left; keep the sign", "\\(-3.1\\times10^{4}\\)"],
  ])}
  <p><strong>Calculating.</strong> Group the decimal parts and the powers of ten, then use the exponent laws: \((2\times10^5)(4\times10^3)=(2\times4)\times10^{5+3}=8\times10^{8}\). If the decimal part ends up outside \(1\le a<10\), adjust: \(15\times10^{8}=1.5\times10^{9}\).</p>
  <p><strong>Powers of a number in scientific notation.</strong> The power applies to both parts: \((3\times10^{-5})^{2}=3^{2}\times(10^{-5})^{2}=9\times10^{-10}\). When the decimal part drops below \(1\), adjust the other way: \(0.4\times10^{6}=4\times10^{5}\).</p>
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

  ...hard([
    ["A fraction with three variables, cubed", String.raw`Simplify \(\left(\dfrac{4x^{5}y^{-2}z^{3}}{10x^{2}y^{4}z^{-1}}\right)^{3}\). Write the answer with positive exponents.`,
      [String.raw`Work inside the brackets first. Reduce the coefficient: \(\dfrac{4}{10}=\dfrac{2}{5}\).`,
        String.raw`Subtract exponents, top minus bottom, for each variable: \(x^{5-2}=x^{3}\), \(y^{-2-4}=y^{-6}\), and \(z^{3-(-1)}=z^{4}\).`,
        String.raw`Move the negative exponent to the bottom. The inside is now \(\dfrac{2x^{3}z^{4}}{5y^{6}}\).`,
        String.raw`Apply the power \(3\) to every factor: \(\dfrac{2^{3}(x^{3})^{3}(z^{4})^{3}}{5^{3}(y^{6})^{3}}\).`,
        String.raw`Evaluate the numbers and multiply the exponents: \(\dfrac{8x^{9}z^{12}}{125y^{18}}\).`],
      String.raw`the expression simplifies to \(\dfrac{8x^{9}z^{12}}{125y^{18}}\)`],
    ["A negative power outside", String.raw`Simplify \(\left(\dfrac{2m^{-3}n^{2}}{5mn^{-1}}\right)^{-2}\). Write the answer with positive exponents.`,
      [String.raw`Inside the brackets, the coefficient \(\dfrac{2}{5}\) is already reduced.`,
        String.raw`Subtract exponents: \(m^{-3-1}=m^{-4}\) and \(n^{2-(-1)}=n^{3}\). The inside is \(\dfrac{2n^{3}}{5m^{4}}\).`,
        String.raw`A negative power outside flips the fraction: \(\left(\dfrac{2n^{3}}{5m^{4}}\right)^{-2}=\left(\dfrac{5m^{4}}{2n^{3}}\right)^{2}\).`,
        String.raw`Apply the power \(2\) to every factor: \(\dfrac{5^{2}(m^{4})^{2}}{2^{2}(n^{3})^{2}}=\dfrac{25m^{8}}{4n^{6}}\).`],
      String.raw`the expression simplifies to \(\dfrac{25m^{8}}{4n^{6}}\)`],
    ["Three brackets at once", String.raw`Simplify \(\dfrac{(3p^{2}q^{-3})^{2}(2pq^{2})^{3}}{(6p^{-1}q)^{3}}\). Write the answer with positive exponents.`,
      [String.raw`Expand each bracket: \((3p^{2}q^{-3})^{2}=9p^{4}q^{-6}\), \((2pq^{2})^{3}=8p^{3}q^{6}\), and \((6p^{-1}q)^{3}=216p^{-3}q^{3}\).`,
        String.raw`Multiply the numerator, adding exponents: \(9\cdot8=72\), \(p^{4+3}=p^{7}\), \(q^{-6+6}=q^{0}=1\). The numerator is \(72p^{7}\).`,
        String.raw`Divide by the denominator: \(\dfrac{72}{216}=\dfrac{1}{3}\), \(p^{7-(-3)}=p^{10}\), and \(q^{0-3}=q^{-3}\).`,
        String.raw`Write with positive exponents: \(\dfrac{p^{10}}{3q^{3}}\).`],
      String.raw`the expression simplifies to \(\dfrac{p^{10}}{3q^{3}}\)`],
    ["Solving for an exponent", String.raw`Find \(n\) if \(\dfrac{8^{n}\times4^{3}}{2^{5}}=16^{2}\times2^{2}\).`,
      [String.raw`Write every number as a power of \(2\): \(8^{n}=2^{3n}\), \(4^{3}=2^{6}\), and \(16^{2}=2^{8}\).`,
        String.raw`Left side: add and subtract exponents to get \(2^{3n+6-5}=2^{3n+1}\).`,
        String.raw`Right side: \(2^{8}\times2^{2}=2^{10}\).`,
        String.raw`The bases match, so the exponents are equal: \(3n+1=10\).`,
        String.raw`Solve: \(3n=9\), so \(n=3\). Check: \(\dfrac{512\times64}{32}=1024\) and \(256\times4=1024\).`],
      String.raw`\(n=3\)`],
    ["Sand in a truck", String.raw`Model a grain of sand as a cube with edges \(4\times10^{-4}\) m long. About how many grains fill a truck bed that holds \(8\) m³ of sand? Ignore the gaps between grains.`,
      [String.raw`Find the volume of one grain by cubing both parts: \((4\times10^{-4})^{3}=4^{3}\times10^{-12}=64\times10^{-12}\) m³.`,
        String.raw`Adjust to scientific notation: \(64\times10^{-12}=6.4\times10^{-11}\) m³.`,
        String.raw`Divide the truck volume by the grain volume: \(\dfrac{8}{6.4\times10^{-11}}=\dfrac{8}{6.4}\times10^{11}\).`,
        String.raw`\(\dfrac{8}{6.4}=1.25\), so the answer is \(1.25\times10^{11}\).`],
      String.raw`about \(1.25\times10^{11}\) grains, or 125 billion`,
      fig(cube("4 × 10⁻⁴ m"), "One grain, modelled as a cube.")],
  ], [
    q("fraction squared", String.raw`Simplify \(\left(\dfrac{6a^{7}b^{2}}{2a^{3}b^{5}}\right)^{2}\). Type your answer like <em>4x^3/y^2</em>.`, expr("9a^8/b^6"),
      "Simplify inside the brackets first, then square every factor, including the coefficient.",
      [String.raw`Inside: \(\dfrac{6}{2}=3\), \(a^{7-3}=a^{4}\), \(b^{2-5}=b^{-3}\). This gives \(\dfrac{3a^{4}}{b^{3}}\).`, String.raw`Square each factor: \(\dfrac{3^{2}(a^{4})^{2}}{(b^{3})^{2}}=\dfrac{9a^{8}}{b^{6}}\).`], String.raw`\(\dfrac{9a^{8}}{b^{6}}\)`, { placeholder: "e.g. 4x^3/y^2" }),
    q("fraction cubed", String.raw`Simplify \(\left(\dfrac{5x^{-2}y^{4}}{15x^{3}y}\right)^{3}\). Use positive exponents, and put brackets around the denominator, like <em>y^2/(4x^5)</em>.`, expr("y^9/(27x^15)"),
      "The coefficient reduces to 1/3. Top minus bottom for each variable. A negative exponent moves to the bottom.",
      [String.raw`Inside: \(\dfrac{5}{15}=\dfrac{1}{3}\), \(x^{-2-3}=x^{-5}\), \(y^{4-1}=y^{3}\). This gives \(\dfrac{y^{3}}{3x^{5}}\).`, String.raw`Cube each factor: \(\dfrac{(y^{3})^{3}}{3^{3}(x^{5})^{3}}=\dfrac{y^{9}}{27x^{15}}\).`], String.raw`\(\dfrac{y^{9}}{27x^{15}}\)`, { placeholder: "e.g. y^2/(4x^5)" }),
    q("negative power", String.raw`Simplify \(\left(\dfrac{2c^{-2}d^{3}}{cd}\right)^{-3}\). Use positive exponents, and put brackets around the denominator.`, expr("c^9/(8d^6)"),
      "Simplify inside, flip the fraction because of the negative power, then cube.",
      [String.raw`Inside: \(c^{-2-1}=c^{-3}\) and \(d^{3-1}=d^{2}\). This gives \(\dfrac{2d^{2}}{c^{3}}\).`, String.raw`Flip for the negative power: \(\left(\dfrac{c^{3}}{2d^{2}}\right)^{3}\).`, String.raw`Cube each factor: \(\dfrac{c^{9}}{8d^{6}}\).`], String.raw`\(\dfrac{c^{9}}{8d^{6}}\)`, { placeholder: "e.g. y^2/(4x^5)" }),
    q("common base", String.raw`Find \(n\) if \(\dfrac{9^{n}\times27}{3^{4}}=3^{9}\).`, num(5),
      "Write 9 and 27 as powers of 3, then set the exponents equal.",
      [String.raw`\(9^{n}=3^{2n}\) and \(27=3^{3}\), so the left side is \(3^{2n+3-4}=3^{2n-1}\).`, String.raw`Set the exponents equal: \(2n-1=9\), so \(2n=10\) and \(n=5\).`], String.raw`\(5\)`),
    q("scientific notation", String.raw`Evaluate \(\dfrac{(3\times10^{-4})^{3}}{(6\times10^{5})(5\times10^{-20})}\) in scientific notation.`, sci(9, 2),
      "Find the top and the bottom separately, then divide. Watch the signs of the exponents.",
      [String.raw`Top: \(3^{3}\times10^{-12}=27\times10^{-12}\).`, String.raw`Bottom: \(30\times10^{5+(-20)}=30\times10^{-15}\).`, String.raw`Divide: \(\dfrac{27}{30}=0.9\) and \(10^{-12-(-15)}=10^{3}\), which gives \(0.9\times10^{3}\).`, String.raw`Adjust: \(0.9\times10^{3}=9\times10^{2}\).`], String.raw`\(9\times10^{2}\)`, { placeholder: "e.g. 4.5 x 10^6" }),
  ]),

  wrapUp({
    qas: [
      [String.raw`Can I use the product law on \(2^3\times5^3\)?`, String.raw`Not the product law — the bases differ. But the power-of-a-product rule runs backwards: \(2^3\times5^3=(2\times5)^3=10^3=1000\).`],
      ["Why must the decimal part be between 1 and 10?", String.raw`So every number has exactly one scientific form. \(45\times10^3\), \(4.5\times10^4\) and \(0.45\times10^5\) are equal, but only \(4.5\times10^4\) is in scientific notation.`],
      ["How do I enter scientific notation on a calculator?", String.raw`Use the <strong>EE</strong> or <strong>EXP</strong> key: \(3.8\times10^{-5}\) is typed <code>3.8 EE -5</code>. Do not type "× 10" as well.`],
      [String.raw`Should I simplify inside the brackets or spread the outside power first?`, String.raw`Both give the same answer, but simplifying inside first keeps the numbers smaller. Spreading a power of \(3\) over \(\dfrac{12x^{5}}{18x^{2}}\) means working with \(12^{3}\) and \(18^{3}\). Reducing to \(\dfrac{2x^{3}}{3}\) first means only \(2^{3}\) and \(3^{3}\).`],
      ["Where is scientific notation used?", "Astronomy (distances, masses), biology and medicine (cell and virus sizes), chemistry (numbers of particles), and computing (storage in bytes)."],
    ],
    summary: [
      String.raw`Same base: \(a^m a^n=a^{m+n}\), \(a^m\div a^n=a^{m-n}\); and \((a^m)^n=a^{mn}\).`,
      String.raw`An exponent outside brackets applies to every factor inside: \((ab)^n=a^nb^n\).`,
      String.raw`For a fraction raised to a power: simplify inside, move negative exponents, flip if the outside power is negative, then apply the power to every factor.`,
      String.raw`Scientific notation: \(a\times10^n\), \(1\le|a|<10\). Big numbers have positive \(n\); numbers between 0 and 1 have negative \(n\).`,
      "To multiply or divide in scientific notation, work on the decimal parts and the powers of ten separately, then adjust.",
    ],
    next: "1.8 turns to comparing quantities with ratios and proportions.",
  }),
];
