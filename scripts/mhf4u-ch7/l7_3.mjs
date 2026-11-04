// MHF4U 7.3 — Product and Quotient Laws of Logarithms (NEW): proofs from the exponent laws, evaluating,
// expanding and condensing, and using known logarithms to find others.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "7.3 Product and Quotient Laws of Logarithms";
export const ID = "6d4f0007-0001-4001-8001-000000000703";

const S = String.raw;
const L = Math.log10;
export const blocks = () => [
  intro({
    icon: "✖️",
    title: "Product and Quotient Laws of Logarithms",
    overview: S`Multiplying powers adds exponents, and dividing subtracts them. Since a logarithm <i>is</i> an exponent, the same is true for logarithms: \(\log_b(xy)=\log_bx+\log_by\) and \(\log_b\frac xy=\log_bx-\log_by\). Together with the power law from 6.4, these laws let us split a complicated logarithm into simple pieces (expand) or combine several logarithms into one (condense). Condensing is the key step for solving logarithmic equations in 7.4.`,
    goals: [
      "prove the product and quotient laws from the exponent laws;",
      "evaluate sums and differences of logarithms exactly;",
      "expand a logarithm of a product, quotient or power;",
      "condense several logarithms into a single logarithm;",
      "use known values such as \\(\\log2\\) and \\(\\log3\\) to find other logarithms.",
    ],
    curriculum: "A1.4 (make connections between the laws of exponents and the laws of logarithms, verify the laws, and use them to simplify and evaluate), A3.1 (recognize equivalent algebraic expressions involving logarithms)",
    prior: [
      [S`Simplify \(5^3\cdot5^4\) and \(\dfrac{5^7}{5^2}\).`, S`\(5^7\) and \(5^5\).`],
      [S`Evaluate \(\log_2 64\).`, S`\(6\).`],
      [S`Use the power law: \(\log x^4=\ ?\)`, S`\(4\log x\).`],
    ],
    words: [
      ["Product law", "\\(\\log_b(xy)=\\log_bx+\\log_by\\)", "\\(\\log_26+\\log_2\\tfrac{4}{3}=\\log_28=3\\)"],
      ["Quotient law", "\\(\\log_b\\dfrac xy=\\log_bx-\\log_by\\)", "\\(\\log 500-\\log5=\\log100=2\\)"],
      ["Expand", "write one logarithm as a sum/difference of simpler ones", "\\(\\log(x^2y)=2\\log x+\\log y\\)"],
      ["Condense", "write several logarithms as one", "\\(\\log a-\\log b=\\log\\frac ab\\)"],
    ],
  }),

  section("📌 Where the laws come from", S`
  <p>Let \(\log_bx=m\) and \(\log_by=n\), so \(x=b^m\) and \(y=b^n\).</p>
  <ul>
    <li><b>Product:</b> \(xy=b^m\cdot b^n=b^{m+n}\), so \(\log_b(xy)=m+n=\log_bx+\log_by\).</li>
    <li><b>Quotient:</b> \(\dfrac xy=\dfrac{b^m}{b^n}=b^{m-n}\), so \(\log_b\dfrac xy=m-n=\log_bx-\log_by\).</li>
  </ul>
  ${table(["Exponent law", "Logarithm law (x, y > 0)"], [
    ["\\(b^m\\cdot b^n=b^{m+n}\\)", "\\(\\log_b(xy)=\\log_bx+\\log_by\\)"],
    ["\\(\\dfrac{b^m}{b^n}=b^{m-n}\\)", "\\(\\log_b\\dfrac xy=\\log_bx-\\log_by\\)"],
    ["\\((b^m)^n=b^{mn}\\)", "\\(\\log_b(x^n)=n\\log_bx\\)"],
  ])}
  ${keyIdea(S`Logarithms turn multiplication into addition, division into subtraction, and powers into multiplication. All three laws need the same base on every logarithm, and positive arguments.`)}`),

  widget("ibLogLaws", { init: [0, 8, 4] }),

  section("📌 Seeing the product law on a graph", S`
  <p>By the product law, \(\log(10x)=\log10+\log x=1+\log x\). So the graph of \(y=\log(10x)\) is the graph of \(y=\log x\) moved <b>up 1</b>: a horizontal compression by a factor of 10 is the same as a vertical shift.</p>
  ${plane({ view: { xmin: -0.5, xmax: 10.5, ymin: -2, ymax: 2.5 }, curves: [{ f: (x) => L(x), a: 0.01, color: "gray" }, { f: (x) => L(10 * x), a: 0.001, color: "violet" }], points: [{ x: 1, y: 0, label: "(1, 0)", color: "blue" }, { x: 1, y: 1, label: "(1, 1)", color: "amber" }, { x: 0.1, y: 0, color: "amber" }], step: { x: 1, y: 0.5 } }, "y = log(10x) (violet) is y = log x (gray) shifted up 1.")}
  ${watchOut([
    "log(x + y) is NOT log x + log y. The product law is about log(xy).",
    "log x · log y is NOT log(xy); and log x ÷ log y is NOT log(x/y) (that is a change of base).",
    "In log(x/y) the order matters: log x − log y, not log y − log x.",
    "Apply the power law to the right factor only: log(3x²) = log 3 + 2 log x, not 2 log(3x).",
    "Condense only logarithms with the same base.",
  ])}`),

  examples([
    ["Evaluate a sum", S`Evaluate \(\log_6 9+\log_6 4\) exactly.`,
      [S`<b>Product law</b> (same base 6): \(\log_69+\log_64=\log_6(9\times4)=\log_636\).`,
        S`<b>Evaluate:</b> \(6^2=36\), so \(\log_636=2\).`,
        S`<b>Why the law helps:</b> neither \(\log_69\) nor \(\log_64\) is a whole number, but their sum is.`,
        S`<b>Check with change of base:</b> \(\log_69\approx1.2263\) and \(\log_64\approx0.7737\); the sum is \(2.0000\) ✓`],
      S`\(2\)`],
    ["Evaluate a difference", S`Evaluate \(\log_2 48-\log_2 3\) and \(\log 0.5+\log 200\).`,
      [S`<b>Quotient law:</b> \(\log_248-\log_23=\log_2\dfrac{48}{3}=\log_216=4\).`,
        S`<b>Product law:</b> \(\log0.5+\log200=\log(0.5\times200)=\log100=2\).`,
        S`<b>Check the first:</b> \(2^4=16\) and \(16\times3=48\) ✓`,
        S`<b>Check the second on a calculator:</b> \(\log 0.5\approx-0.3010\), \(\log200\approx2.3010\); sum \(2\) ✓`],
      S`\(4\) and \(2\)`],
    ["Expand", S`Expand \(\log_3\dfrac{9x^2}{\sqrt y}\) as far as possible (\(x,y>0\)).`,
      [S`<b>Quotient law first</b> (the main operation is division): \(\log_3(9x^2)-\log_3\sqrt y\).`,
        S`<b>Product law on the numerator:</b> \(\log_39+\log_3x^2-\log_3y^{1/2}\).`,
        S`<b>Power law and evaluate:</b> \(2+2\log_3x-\tfrac12\log_3y\).`,
        S`<b>Check with \(x=3,\ y=9\):</b> original \(\log_3\dfrac{81}{3}=\log_327=3\); expanded \(2+2(1)-\tfrac12(2)=3\) ✓`],
      S`\(2+2\log_3x-\tfrac12\log_3y\)`],
    ["Condense", S`Write \(2\log a+3\log b-\tfrac12\log c\) as a single logarithm.`,
      [S`<b>Power law first</b> (coefficients become exponents): \(\log a^2+\log b^3-\log c^{1/2}\).`,
        S`<b>Product law</b> for the sum: \(\log(a^2b^3)-\log\sqrt c\).`,
        S`<b>Quotient law</b> for the difference: \(\log\dfrac{a^2b^3}{\sqrt c}\).`,
        S`<b>Check with \(a=2,\ b=1,\ c=4\):</b> \(2\log2-\tfrac12\log4=2\log2-\log2=\log2\), and \(\log\dfrac{4\cdot1}{2}=\log2\) ✓`],
      S`\(\log\dfrac{a^2b^3}{\sqrt c}\)`],
    ["Build logarithms from known values", S`Given \(\log2\approx0.3010\) and \(\log3\approx0.4771\), find \(\log18\), \(\log1.5\) and \(\log0.6\) without the log key.`,
      [S`<b>Factor each number</b> into 2s, 3s and 10s: \(18=2\times3^2\), \(1.5=\dfrac32\), \(0.6=\dfrac{2\times3}{10}\).`,
        S`<b>\(\log18\)</b> \(=\log2+2\log3\approx0.3010+0.9542=1.2552\).`,
        S`<b>\(\log1.5\)</b> \(=\log3-\log2\approx0.4771-0.3010=0.1761\).`,
        S`<b>\(\log0.6\)</b> \(=\log2+\log3-\log10\approx0.7781-1=-0.2219\).`,
        S`<b>Check:</b> a calculator gives \(1.2553\), \(0.1761\) and \(-0.2218\) ✓ (small differences come from rounding the given values); \(0.6<1\) so its log is negative ✓`],
      S`\(\approx1.2552,\ 0.1761,\ -0.2219\)`,
      plane({ view: { xmin: -0.5, xmax: 20, ymin: -0.5, ymax: 1.5 }, curves: [{ f: (x) => L(x), a: 0.3, color: "violet" }], points: [{ x: 18, y: 1.2552, label: "(18, 1.26)", color: "amber" }, { x: 1.5, y: 0.1761, label: "(1.5, 0.18)", color: "blue" }, { x: 0.6, y: -0.2219, color: "red" }], step: { x: 2, y: 0.25 } })],
  ]),

  practice([
    q("product", S`Evaluate \(\log_4 8+\log_4 32\).`, num(4), "8 × 32 = 256.", [S`\(\log_4256=4\).`], S`\(4\)`),
    q("quotient", S`Evaluate \(\log_3 54-\log_3 2\).`, num(3), "54 ÷ 2 = 27.", [S`\(\log_327=3\).`], S`\(3\)`),
    q("condense", S`Which is equal to \(\log x+\log y-\log z\)?`, choice(["log(xy/z)", "log(x + y − z)", "log x · log y / log z", "log(xy) / log z"], 0), "Sums multiply, differences divide.", [S`\(\log(xy)-\log z=\log\frac{xy}z\).`], S`\(\log\frac{xy}{z}\)`),
    q("expand", S`\(\log_2(8x^3)=a+b\log_2x\). Enter \(a+b\).`, num(6), "Product law, then power law.", [S`\(\log_28+\log_2x^3=3+3\log_2x\), so \(a+b=6\).`], S`\(6\)`),
    q("known values", S`Given \(\log2\approx0.3010\) and \(\log3\approx0.4771\), estimate \(\log12\).`, num(1.0791, 0.0015), "12 = 2² × 3.", [S`\(2(0.3010)+0.4771=1.0791\).`], S`\(1.0791\)`),
  ]),

  ...hard([
    ["Simplify with a factored argument", S`Simplify \(\log_2(x^2-9)-\log_2(x+3)\), state where it is defined, and evaluate it at \(x=11\).`,
      [S`<b>Quotient law:</b> \(\log_2\dfrac{x^2-9}{x+3}\).`,
        S`<b>Factor the difference of squares:</b> \(\dfrac{(x-3)(x+3)}{x+3}=x-3\), so the expression is \(\log_2(x-3)\).`,
        S`<b>Domain:</b> the original needs \(x^2-9>0\) and \(x+3>0\), so \(x>3\) (the same as \(x-3>0\)).`,
        S`<b>Evaluate:</b> \(\log_2(11-3)=\log_28=3\).`,
        S`<b>Check:</b> \(\log_2112-\log_214=\log_2\dfrac{112}{14}=\log_28=3\) ✓`],
      S`\(\log_2(x-3)\) for \(x>3\); value \(3\)`],
    ["Write in terms of given letters", S`If \(\log_b2=p\) and \(\log_b5=q\), write \(\log_b\dfrac{40}{b^2}\) in terms of \(p\) and \(q\).`,
      [S`<b>Quotient law:</b> \(\log_b40-\log_bb^2\).`,
        S`<b>Factor 40:</b> \(40=2^3\times5\), so \(\log_b40=3\log_b2+\log_b5=3p+q\).`,
        S`<b>Power law:</b> \(\log_bb^2=2\log_bb=2\).`,
        S`<b>Combine:</b> \(3p+q-2\).`,
        S`<b>Check with \(b=10\):</b> \(\log0.4\approx-0.3979\) and \(3(0.30103)+0.69897-2\approx-0.3979\) ✓`],
      S`\(3p+q-2\)`],
  ], [
    q("hard", S`Evaluate \(\log_6 4+2\log_6 3\).`, num(2), "Power law, then product law.", [S`\(\log_64+\log_69=\log_636=2\).`], S`\(2\)`),
    q("hard", S`Simplify \(\log_5(x^2-4)-\log_5(x-2)\) and evaluate it at \(x=23\).`, num(2), "Factor x² − 4.", [S`\(\log_5(x+2)\); at \(x=23\): \(\log_525=2\).`], S`\(2\)`),
    q("hard", S`If \(\log_b2=0.4\) and \(\log_b3=0.6\), find \(\log_b4.5\).`, num(0.8, 0.0001), "4.5 = 9/2 = 3²/2.", [S`\(2(0.6)-0.4=0.8\).`], S`\(0.8\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is log(xy) = log x + log y?", "Because multiplying powers of b adds their exponents, and logarithms are exponents."],
      ["Is log(x + y) = log x + log y?", "No. There is no law for the log of a sum."],
      ["In what order do I condense?", "Power law first (coefficients up into exponents), then product and quotient laws."],
      ["How do I find log 18 from log 2 and log 3?", "18 = 2 × 3², so log 18 = log 2 + 2 log 3."],
      ["Why is log(10x) the graph of log x shifted up 1?", "log(10x) = log 10 + log x = 1 + log x."],
    ],
    summary: [
      "log_b(xy) = log_b x + log_b y.",
      "log_b(x/y) = log_b x − log_b y.",
      "log_b(xⁿ) = n log_b x.",
      "Same base, positive arguments.",
    ],
    next: "7.4 condenses logarithms to solve equations such as log x + log(x − 3) = 1.",
  }),
];
