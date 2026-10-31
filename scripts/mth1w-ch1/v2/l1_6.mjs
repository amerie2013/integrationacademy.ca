// MTH1W 1.6 — Powers: Zero & Negative Exponents (self-study format)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, frac, hard, fig } from "./lib.mjs";
import { graph } from "./bank/svg.mjs";

export const TITLE = "1.6 Powers: Zero & Negative Exponents";

const SQUARE_CUBE = String.raw`<div style="text-align:center;margin:12px 0;"><svg viewBox="0 0 520 170" width="520" style="max-width:100%;height:auto;" role="img" aria-label="A segment of length x, a square of area x squared, a cube of volume x cubed">
<line x1="20" y1="120" x2="110" y2="120" stroke="#1e40af" stroke-width="4"/><text x="65" y="145" font-size="14" text-anchor="middle" fill="#1e40af" font-weight="700">length x</text><text x="65" y="165" font-size="12" text-anchor="middle" fill="#475569">1 dimension</text>
<rect x="170" y="30" width="90" height="90" fill="#dbeafe" stroke="#1e40af" stroke-width="2"/><text x="215" y="80" font-size="16" text-anchor="middle" fill="#1e40af" font-weight="700">x²</text><text x="215" y="145" font-size="14" text-anchor="middle" fill="#1e40af" font-weight="700">area (x)(x) = x²</text><text x="215" y="165" font-size="12" text-anchor="middle" fill="#475569">2 dimensions</text>
<polygon points="340,50 400,20 470,20 410,50" fill="#c7d2fe" stroke="#3730a3" stroke-width="2"/><polygon points="410,50 470,20 470,90 410,120" fill="#a5b4fc" stroke="#3730a3" stroke-width="2"/><rect x="340" y="50" width="70" height="70" fill="#e0e7ff" stroke="#3730a3" stroke-width="2"/><text x="375" y="90" font-size="16" text-anchor="middle" fill="#3730a3" font-weight="700">x³</text><text x="405" y="145" font-size="14" text-anchor="middle" fill="#3730a3" font-weight="700">volume (x)(x)(x) = x³</text><text x="405" y="165" font-size="12" text-anchor="middle" fill="#475569">3 dimensions</text>
</svg><div style="font-size:13px;color:#64748b;">This is why x² is read "x squared" and x³ is read "x cubed".</div></div>`;

export const blocks = () => [
  intro({
    icon: "⚡",
    title: "Powers: Zero &amp; Negative Exponents",
    overview: String.raw`A <strong>power</strong> is a short way to write repeated multiplication: \(2^5=2\times2\times2\times2\times2=32\). Powers describe areas and volumes, population growth, computer memory and the size of atoms. In this lesson you will evaluate powers with integer and fraction bases, see exactly when brackets matter, and use a pattern to discover what an exponent of \(0\) or a <em>negative</em> exponent must mean.`,
    goals: [
      "identify the base and exponent and write a power as repeated multiplication;",
      String.raw`evaluate powers with integer and rational bases, and explain the difference between \((-a)^n\) and \(-a^n\);`,
      String.raw`connect \(x\), \(x^2\) and \(x^3\) to length, area and volume;`,
      String.raw`use square roots (and cube roots) to undo squaring (and cubing), including solving \(x^2=k\);`,
      String.raw`use patterns to explain why \(a^0=1\) and \(a^{-n}=\dfrac{1}{a^n}\) (for \(a\neq0\));`,
      "evaluate expressions with powers using the order of operations, and solve problems.",
    ],
    curriculum: "B2.1 (sign and size of an exponent and the value of a power)",
    prior: [
      [String.raw`Evaluate \(5\times5\times5\).`, String.raw`\(125\).`],
      [String.raw`Evaluate \((-2)(-2)(-2)\).`, String.raw`\(-8\): three negative factors give a negative product.`],
      [String.raw`What is \(\tfrac{1}{2}\times\tfrac{1}{2}\)?`, String.raw`\(\tfrac{1}{4}\).`],
    ],
    words: [
      ["Power", "a base with an exponent", "\\(3^4\\)"],
      ["Base", "the factor that is repeated", "in \\(3^4\\), the base is \\(3\\)"],
      ["Exponent", "how many times the base is used as a factor", "in \\(3^4\\), the exponent is \\(4\\)"],
      ["Squared / cubed", "exponent 2 / exponent 3", "\\(7^2\\), \\(7^3\\)"],
      ["Reciprocal", "1 divided by the number", "reciprocal of \\(3^2\\) is \\(\\tfrac{1}{3^2}\\)"],
      ["Square root \\(\\sqrt{a}\\)", "the non-negative number whose square is \\(a\\)", "\\(\\sqrt{49}=7\\)"],
    ],
  }),

  section("📌 Powers as repeated multiplication", String.raw`
  <p>In \(a^n\), the <strong>base</strong> \(a\) is used as a factor \(n\) times. The base can be any rational number:</p>
  ${table(["Power", "Repeated multiplication", "Value"], [
    ["\\(4^3\\)", "\\(4\\times4\\times4\\)", "\\(64\\)"],
    ["\\((-3)^4\\)", "\\((-3)(-3)(-3)(-3)\\)", "\\(81\\)"],
    ["\\((-3)^3\\)", "\\((-3)(-3)(-3)\\)", "\\(-27\\)"],
    ["\\(\\left(\\tfrac{2}{5}\\right)^2\\)", "\\(\\tfrac25\\times\\tfrac25\\)", "\\(\\tfrac{4}{25}\\)"],
    ["\\((0.1)^3\\)", "\\(0.1\\times0.1\\times0.1\\)", "\\(0.001\\)"],
  ])}
  <p><strong>Where squares and cubes come from.</strong> Length is one-dimensional (\(x\)); a square with side \(x\) has area \((x)(x)=x^2\); a cube with edge \(x\) has volume \((x)(x)(x)=x^3\).</p>
  ${SQUARE_CUBE}
  <p><strong>Negative bases.</strong> A negative base with an <em>even</em> exponent gives a positive value; with an <em>odd</em> exponent, a negative value (count the negative factors, as in 1.3).</p>
  ${keyIdea(String.raw`<strong>Brackets decide the base.</strong> \((-2)^4=(-2)(-2)(-2)(-2)=16\), but \(-2^4=-(2\times2\times2\times2)=-16\). Without brackets, the exponent belongs only to the number right below it.`)}`),

  section("📌 Square roots: undoing a square", String.raw`
  <p>Squaring and taking a square root are <strong>inverse operations</strong> — each undoes the other, the way subtracting undoes adding. A square with area \(36\) cm² has side \(\sqrt{36}=6\) cm, because \(6^2=36\).</p>
  ${table(["Start", "Square it", "Take the square root", "Back to"], [
    ["\\(9\\)", "\\(81\\)", "\\(\\sqrt{81}\\)", "\\(9\\)"],
    ["\\(\\tfrac{3}{5}\\)", "\\(\\tfrac{9}{25}\\)", "\\(\\sqrt{\\tfrac{9}{25}}\\)", "\\(\\tfrac{3}{5}\\)"],
    ["\\(0.7\\)", "\\(0.49\\)", "\\(\\sqrt{0.49}\\)", "\\(0.7\\)"],
    ["\\(-9\\)", "\\(81\\)", "\\(\\sqrt{81}\\)", "\\(9\\) (not \\(-9\\))"],
  ])}
  <ul>
    <li>The symbol \(\sqrt{\ }\) always means the <strong>non-negative</strong> root: \(\sqrt{81}=9\). That is why \(\sqrt{(-9)^2}=9\).</li>
    <li>But the equation \(x^2=81\) has <strong>two</strong> solutions, \(x=9\) and \(x=-9\), because both square to \(81\). Write \(x=\pm9\).</li>
    <li>\(\sqrt{-81}\) is <strong>not a real number</strong>: no real number squared is negative.</li>
    <li>Roots of fractions and decimals: \(\sqrt{\tfrac{16}{49}}=\tfrac{4}{7}\) and \(\sqrt{1.44}=1.2\). If the number is not a perfect square, the root is irrational and you estimate it (lesson 1.1): \(\sqrt{40}\approx6.3\).</li>
    <li><strong>Cube roots</strong> undo cubing: \(\sqrt[3]{64}=4\) because \(4^3=64\) — a cube with volume \(64\) cm³ has edges of \(4\) cm. The cube root of a negative number <em>is</em> real: \(\sqrt[3]{-8}=-2\).</li>
  </ul>
  ${keyIdea(String.raw`To undo a square, take the square root; to undo a cube, take the cube root. In BEDMAS a root counts with the exponents: \(2+\sqrt{25}\times3=2+5\times3=17\).`)}`),

  section("📌 The zero exponent and negative exponents", String.raw`
  <p>Look at the powers of \(2\). Each time the exponent goes down by \(1\), the value is <strong>divided by 2</strong>. The pattern does not stop at \(2^1\):</p>
  ${table(["Power", "\\(2^4\\)", "\\(2^3\\)", "\\(2^2\\)", "\\(2^1\\)", "\\(2^0\\)", "\\(2^{-1}\\)", "\\(2^{-2}\\)", "\\(2^{-3}\\)"], [
    ["Value", "\\(16\\)", "\\(8\\)", "\\(4\\)", "\\(2\\)", "\\(1\\)", "\\(\\tfrac12\\)", "\\(\\tfrac14\\)", "\\(\\tfrac18\\)"],
  ])}
  ${keyIdea(String.raw`For any base \(a\neq0\): \(\quad a^0=1\quad\) and \(\quad a^{-n}=\dfrac{1}{a^n}\). <br>A negative exponent means <strong>reciprocal</strong>, not "negative": \(2^{-3}=\tfrac18\), a small positive number.`)}
  <p>For a fraction base, a negative exponent flips the fraction: \(\left(\tfrac{a}{b}\right)^{-n}=\left(\tfrac{b}{a}\right)^{n}\). For example \(\left(\tfrac{2}{3}\right)^{-2}=\left(\tfrac32\right)^2=\tfrac94\).</p>
  <p>Explore the pattern for other bases — including a negative base and a fraction base — and watch the graph: as the exponent decreases, the values shrink toward \(0\) but never reach it.</p>`),

  widget("powerPattern"),

  section("📌 Powers in the order of operations", String.raw`
  <p>Exponents come right after brackets in BEDMAS. Evaluate every power before you multiply, divide, add or subtract: \(3+2\times4^2=3+2\times16=3+32=35\).</p>
  ${watchOut([
    String.raw`<strong>\(a^n\) is not \(a\times n\).</strong> \(5^3=125\), not \(15\).`,
    String.raw`<strong>\(a^0\) is \(1\), not \(0\).</strong> But watch the brackets: \(-7^0=-(7^0)=-1\), while \((-7)^0=1\).`,
    String.raw`<strong>A negative exponent never makes the value negative.</strong> \(4^{-2}=\tfrac{1}{16}\), not \(-16\) or \(-8\).`,
  ])}`),

  examples([
    ["Brackets and a negative base", String.raw`Evaluate (a) \((-2)^6\) and (b) \(-2^6\).`,
      [String.raw`(a) The base is \(-2\), used six times. Six negative factors (even) → positive: \(2^6=64\), so \((-2)^6=64\).`, String.raw`(b) The base is \(2\); the negative sign is applied afterwards: \(-2^6=-(64)=-64\).`],
      String.raw`(a) \(64\); (b) \(-64\)`],
    ["Powers of rational numbers", String.raw`Evaluate (a) \(\left(\dfrac{2}{3}\right)^3\) and (b) \(\left(-\dfrac{1}{2}\right)^4\).`,
      [String.raw`(a) \(\tfrac{2\times2\times2}{3\times3\times3}=\tfrac{8}{27}\).`, String.raw`(b) Four negative factors → positive; \(\tfrac{1}{2^4}=\tfrac{1}{16}\).`],
      String.raw`(a) \(\tfrac{8}{27}\); (b) \(\tfrac{1}{16}\)`],
    ["Zero exponents", String.raw`Evaluate \(7^0+(-4)^0-4^0\).`,
      [String.raw`\(7^0=1\) and \((-4)^0=1\).`, String.raw`\(4^0=1\), so the last term subtracts \(1\).`, String.raw`\(1+1-1=1\).`],
      String.raw`\(7^0+(-4)^0-4^0=1\)`],
    ["Negative exponents", String.raw`Evaluate (a) \(6^{-2}\) and (b) \(\left(\dfrac{2}{5}\right)^{-2}\).`,
      [String.raw`(a) Reciprocal: \(6^{-2}=\tfrac{1}{6^2}=\tfrac{1}{36}\).`, String.raw`(b) Flip the base and make the exponent positive: \(\left(\tfrac52\right)^2=\tfrac{25}{4}\).`],
      String.raw`(a) \(\tfrac{1}{36}\); (b) \(\tfrac{25}{4}=6\tfrac14\)`],
    ["Order of operations with powers", String.raw`Evaluate \(4^2-2^{-1}\times6+5^0\).`,
      [String.raw`Powers first: \(4^2=16\), \(2^{-1}=\tfrac12\), \(5^0=1\).`, String.raw`Multiply: \(\tfrac12\times6=3\).`, String.raw`Left to right: \(16-3+1=14\).`],
      String.raw`\(4^2-2^{-1}\times6+5^0=14\)`],
  ]),

  practice([
    q("negative base", String.raw`Evaluate \((-5)^3\).`, num(-125),
      "Three negative factors: is the product positive or negative?", [String.raw`\((-5)(-5)(-5)\).`, String.raw`\(25\times(-5)=-125\).`], String.raw`\(-125\)`),
    q("negative exponent", String.raw`Evaluate \(5^{-3}\). Give a fraction.`, frac(1, 125),
      "A negative exponent means reciprocal.", [String.raw`\(5^{-3}=\tfrac{1}{5^3}\).`, String.raw`\(=\tfrac{1}{125}\).`], String.raw`\(\tfrac{1}{125}\)`, { placeholder: "a fraction like 1/4" }),
    q("fraction base", String.raw`Evaluate \(\left(\dfrac{4}{5}\right)^{-2}\).`, frac(25, 16),
      "Flip the fraction, then square it.", [String.raw`\(\left(\tfrac54\right)^2\).`, String.raw`\(=\tfrac{25}{16}\).`], String.raw`\(\tfrac{25}{16}\)`, { placeholder: "a fraction like 7/4" }),
    q("square root", String.raw`A square floor mat has an area of \(2.25\) m². How long is each side, in metres?`, num(1.5),
      "The side length is the square root of the area.", [String.raw`Side \(=\sqrt{2.25}\).`, String.raw`\(1.5^2=2.25\), so the side is \(1.5\) m.`], String.raw`\(1.5\) m`),
    q("volume", String.raw`A cube-shaped box has edges \(2.5\) cm long. What is its volume in cm³? (\(V=s^3\))`, num(15.625),
      String.raw`Volume of a cube is edge × edge × edge.`, [String.raw`\(V=2.5^3=2.5\times2.5\times2.5\).`, String.raw`\(6.25\times2.5=15.625\).`], String.raw`\(15.625\) cm³`),
  ]),

  ...hard([
    ["Negative exponents inside and outside", String.raw`Evaluate \(\left(2^{-1}+3^{-1}\right)^{-2}\).`,
      [String.raw`Inside the bracket: \(2^{-1}=\tfrac12\) and \(3^{-1}=\tfrac13\).`,
        String.raw`Add: \(\tfrac12+\tfrac13=\tfrac56\).`,
        String.raw`A negative power flips the fraction: \(\left(\tfrac56\right)^{-2}=\left(\tfrac65\right)^2\).`,
        String.raw`Square the top and the bottom: \(\tfrac{36}{25}\). Note that the answer is not \(2^2+3^2\): the exponent does not spread over a sum.`],
      String.raw`the value is \(\tfrac{36}{25}\)`],
    ["Three kinds of power in one line", String.raw`Evaluate \(\left(-\tfrac12\right)^{-3}-\left(\tfrac23\right)^{-2}+(-4)^0\).`,
      [String.raw`Flip the first base: \(\left(-\tfrac12\right)^{-3}=(-2)^3=-8\).`,
        String.raw`Flip the second base: \(\left(\tfrac23\right)^{-2}=\left(\tfrac32\right)^2=\tfrac94\).`,
        String.raw`Any non-zero base to the power \(0\) is \(1\): \((-4)^0=1\).`,
        String.raw`Combine: \(-8-\tfrac94+1=-7-\tfrac94=-\tfrac{37}{4}\).`],
      String.raw`the value is \(-\tfrac{37}{4}\)`],
    ["Finding a negative exponent", String.raw`Find the integer \(n\) if \(\left(\tfrac34\right)^n=\tfrac{64}{27}\).`,
      [String.raw`Notice that \(\tfrac{64}{27}=\tfrac{4^3}{3^3}=\left(\tfrac43\right)^3\).`,
        String.raw`\(\tfrac43\) is the reciprocal of \(\tfrac34\), and a reciprocal comes from a negative exponent: \(\left(\tfrac43\right)^3=\left(\tfrac34\right)^{-3}\).`,
        String.raw`So \(n=-3\).`],
      String.raw`\(n=-3\)`],
    ["Half-life forward and backward", String.raw`A sample has a mass of \(4800\) mg and a half-life of \(8\) hours, as the graph shows. (a) When will it reach \(150\) mg? (b) What was its mass \(16\) hours ago?`,
      [String.raw`(a) \(4800\div150=32=2^5\), so the sample must halve \(5\) times.`,
        String.raw`\(5\times8=40\) hours.`,
        String.raw`(b) \(16\) hours is \(2\) half-lives backward. Going backward uses a negative power of \(\tfrac12\): \(4800\times\left(\tfrac12\right)^{-2}\).`,
        String.raw`\(4800\times4=19\,200\) mg.`],
      String.raw`it reaches \(150\) mg after \(40\) hours, and it was \(19\,200\) mg \(16\) hours ago`,
      fig(graph({ series: [{ pts: [[0, 4800], [8, 2400], [16, 1200], [24, 600]] }], xmin: 0, xmax: 40, ymin: 0, ymax: 5000, xstep: 8, ystep: 1000, xlabel: "hours", ylabel: "mg" }), "The mass halves every 8 hours.")],
  ], [
    q("inside and outside", String.raw`Evaluate \(\left(3^{-1}-4^{-1}\right)^{-1}\).`, num(12),
      "Write the powers as fractions and subtract. Then flip the result.",
      [String.raw`\(\tfrac13-\tfrac14=\tfrac{1}{12}\).`, String.raw`\(\left(\tfrac{1}{12}\right)^{-1}=12\).`], String.raw`\(12\)`),
    q("three powers", String.raw`Evaluate \(\left(-\tfrac13\right)^{-2}-\left(\tfrac12\right)^{-3}+5^0\).`, num(2),
      "Flip each base, then apply the positive power.",
      [String.raw`\((-3)^2=9\).`, String.raw`\(2^3=8\).`, String.raw`\(5^0=1\).`, String.raw`\(9-8+1=2\).`], String.raw`\(2\)`),
    q("find the exponent", String.raw`Find the integer \(n\) if \(\left(\tfrac25\right)^n=\tfrac{125}{8}\).`, num(-3),
      "Is the right side a power of 2/5 or of its reciprocal?",
      [String.raw`\(\tfrac{125}{8}=\left(\tfrac52\right)^3\).`, String.raw`\(\left(\tfrac52\right)^3=\left(\tfrac25\right)^{-3}\), so \(n=-3\).`], String.raw`\(-3\)`),
    q("fraction of powers", String.raw`Evaluate \(\dfrac{2^{-2}+2^{-3}}{2^{-1}}\) as a fraction.`, frac(3, 4),
      "Find the top as a single fraction first.",
      [String.raw`Top: \(\tfrac14+\tfrac18=\tfrac38\).`, String.raw`Bottom: \(\tfrac12\).`, String.raw`\(\tfrac38\div\tfrac12=\tfrac34\).`], String.raw`\(\tfrac34\)`, { placeholder: "a fraction like 2/5" }),
    q("growth", String.raw`A culture triples every \(2\) hours and now has \(7290\) cells. How many hours ago did it have \(90\) cells?`, num(8),
      "How many times has it tripled?",
      [String.raw`\(7290\div90=81=3^4\), so it has tripled \(4\) times.`, String.raw`\(4\times2=8\) hours.`], String.raw`\(8\)`),
  ]),

  wrapUp({
    qas: [
      [String.raw`Why is \(a^0=1\) and not \(0\)?`, String.raw`Each step down in the exponent divides by the base. One step below \(a^1=a\) is \(a\div a=1\). It also keeps the exponent laws (1.7) working: \(a^3\div a^3=a^0\) must equal \(1\).`],
      ["Does a negative exponent make the answer negative?", String.raw`No. It means "one over": \(5^{-2}=\tfrac{1}{25}\), which is positive. The sign of the <em>base</em> decides the sign of the value.`],
      [String.raw`What is \(0^0\)?`, String.raw`It has no agreed value in this course: the zero-exponent and negative-exponent rules need \(a\neq0\).`],
      [String.raw`How do I type \((-3)^2\) on a calculator?`, String.raw`Include the brackets. Many calculators read <code>-3^2</code> as \(-(3^2)=-9\).`],
      ["Why are powers useful?", "They describe repeated growth or shrinking (doubling bacteria, halving a medicine dose), areas and volumes, and very large or very small numbers — which 1.7 writes in scientific notation."],
    ],
    summary: [
      String.raw`\(a^n\) is \(a\) used as a factor \(n\) times; brackets decide the base.`,
      "Negative base: even exponent → positive, odd exponent → negative.",
      String.raw`\(a^0=1\) and \(a^{-n}=\tfrac{1}{a^n}\) for \(a\neq0\); \(\left(\tfrac ab\right)^{-n}=\left(\tfrac ba\right)^n\).`,
      "Powers come right after brackets in the order of operations.",
    ],
    next: "1.7 finds shortcuts for multiplying and dividing powers (the exponent laws) and writes huge and tiny numbers in scientific notation.",
  }),
];
