// MHF4U 7.1 — Equivalent Forms of Exponential Equations (NEW): writing numbers as powers of a common base,
// rewriting expressions with the exponent laws, and solving b^f(x) = b^g(x) by equating exponents.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, roots } from "./lib.mjs";

export const TITLE = "7.1 Equivalent Forms of Exponential Equations";
export const ID = "6d4f0007-0001-4001-8001-000000000701";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🔁",
    title: "Equivalent Forms of Exponential Equations",
    overview: S`The same number can be written as a power in many ways: \(64=2^6=4^3=8^2\). Rewriting both sides of an exponential equation as powers of one common base turns it into an ordinary equation: if \(2^{3x}=2^{x+4}\), the exponents must be equal, so \(3x=x+4\). This lesson practises the rewriting and then uses it to solve equations exactly, without a calculator.`,
    goals: [
      "write numbers, roots and fractions as powers of a chosen base;",
      "use the exponent laws to rewrite an exponential expression in an equivalent form;",
      "explain why \\(b^m=b^n\\) means \\(m=n\\) (for \\(b>0,\\ b\\ne1\\));",
      "solve exponential equations by writing both sides with a common base;",
      "check a solution by substituting it back.",
    ],
    curriculum: "A3.1 (recognize equivalent algebraic expressions involving exponents and solve simple exponential equations by rewriting with a common base), A1.4 (connect the laws of exponents and logarithms)",
    prior: [
      [S`Simplify \(2^3\cdot2^5\).`, S`\(2^8\).`],
      [S`Simplify \((3^2)^4\).`, S`\(3^8\).`],
      [S`Write \(\frac1{25}\) as a power of \(5\).`, S`\(5^{-2}\).`],
    ],
    words: [
      ["Common base", "one base used to write every power in an equation", "\\(8=2^3,\\ 32=2^5\\)"],
      ["Equivalent forms", "two expressions equal for every value of the variable", "\\(4^x=2^{2x}\\)"],
      ["Equating exponents", "if \\(b^m=b^n\\) then \\(m=n\\)", "\\(2^x=2^5\\Rightarrow x=5\\)"],
      ["Rational exponent", "\\(b^{m/n}=\\sqrt[n]{b^m}\\)", "\\(\\sqrt{27}=3^{3/2}\\)"],
    ],
  }),

  section("📌 Writing numbers as powers", S`
  <p>Before an equation can be solved by equating exponents, every number in it must be a power of the <b>same</b> base. The exponent laws do the rewriting.</p>
  ${table(["Rule", "Meaning", "Example"], [
    ["\\(b^m\\cdot b^n=b^{m+n}\\)", "multiply: add exponents", "\\(2^{x}\\cdot2^3=2^{x+3}\\)"],
    ["\\(\\dfrac{b^m}{b^n}=b^{m-n}\\)", "divide: subtract exponents", "\\(\\dfrac{3^{2x}}{3}=3^{2x-1}\\)"],
    ["\\((b^m)^n=b^{mn}\\)", "power of a power: multiply", "\\(4^x=(2^2)^x=2^{2x}\\)"],
    ["\\(b^{-n}=\\dfrac1{b^n}\\)", "reciprocal: negative exponent", "\\(\\dfrac1{8}=2^{-3}\\)"],
    ["\\(b^{m/n}=\\sqrt[n]{b^m}\\)", "root: fractional exponent", "\\(\\sqrt[3]{25}=5^{2/3}\\)"],
  ])}
  ${keyIdea(S`If \(b>0\) and \(b\ne1\), then \[b^m=b^n\iff m=n.\] The function \(y=b^x\) is one-to-one (it always increases or always decreases), so two equal outputs must come from equal inputs.`)}
  ${plane({ view: { xmin: -3, xmax: 4, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 2 ** x, color: "violet" }], lines: [{ m: 0, b: 8, color: "blue", dash: true }], points: [{ x: 3, y: 8, label: "(3, 8)", color: "amber" }], step: { x: 1, y: 1 } }, "y = 2ˣ meets the line y = 8 exactly once, so 2ˣ = 8 has the single solution x = 3.")}`),

  widget("ibExpGraph", { init: [8, 2, 0, 0] }),

  section("📌 Equivalent forms of the same function", S`
  <p>Different-looking expressions can describe the same function. For example \(2^{x+3}=2^x\cdot2^3=8\cdot2^x\): a horizontal shift of \(3\) to the left is the same as a vertical stretch by \(8\). Try it in the explorer: set \(a=8\), then compare with \(a=1,\ h=-3\).</p>
  ${plane({ view: { xmin: -5, xmax: 2, ymin: -1, ymax: 20 }, curves: [{ f: (x) => 2 ** x, color: "gray" }, { f: (x) => 2 ** (x + 3), color: "violet" }], points: [{ x: 0, y: 8, label: "(0, 8)", color: "amber" }, { x: -3, y: 1, label: "(−3, 1)", color: "blue" }], step: { x: 1, y: 2 } }, "y = 2ˣ⁺³ and y = 8·2ˣ are the same curve: both pass through (−3, 1) and (0, 8).")}
  ${watchOut([
    "You can only equate exponents when both sides are single powers of the same base: 2ˣ + 2ˣ = 2⁵ cannot be solved by writing x + x = 5.",
    "4ˣ is (2²)ˣ = 2²ˣ, not 2ˣ⁺²: a power of a power multiplies.",
    "Bracket the whole exponent: 8ˣ⁺¹ = (2³)ˣ⁺¹ = 2³⁽ˣ⁺¹⁾ = 2³ˣ⁺³, not 2³ˣ⁺¹.",
    "A fraction like 1/27 is a negative power (3⁻³), not a negative number.",
    "Always check by substituting the answer into the ORIGINAL equation.",
  ])}`),

  examples([
    ["Rewrite with one base", S`Write each number as a power of \(2\): \(32\), \(\frac1{16}\), \(\sqrt{8}\), \(4^{x}\).`,
      [S`<b>Goal.</b> For each quantity, find the exponent \(n\) so that \(2^n\) equals it. A negative exponent means a reciprocal, because \(b^{-n}=\frac1{b^n}\). A fractional exponent means a root, because \(b^{1/n}=\sqrt[n]{b}\).`,
        S`<b>Whole number.</b> Divide by \(2\) until \(1\) is reached: \(32\to16\to8\to4\to2\to1\). That is \(5\) divisions, so \(32=2^5\).`,
        S`<b>Fraction.</b> The denominator is a power of \(2\): \(16=2^4\). The number is the reciprocal of \(2^4\), and a reciprocal changes the sign of the exponent, so \(\frac1{16}=2^{-4}\).`,
        S`<b>Root.</b> First write the root as a power: \(\sqrt8=8^{1/2}\). Then write the base as a power of \(2\): \(8=2^3\). A power of a power multiplies the exponents: \((2^3)^{1/2}=2^{3\times\frac12}=2^{3/2}\).`,
        S`<b>Variable exponent.</b> The same law works with \(x\): \(4^x=(2^2)^x=2^{2x}\). The exponents multiply. They do not add, so \(4^x\) is not \(2^{x+2}\). Testing \(x=3\) shows this: \(4^3=64=2^6\), but \(2^{3+2}=32\).`,
        S`<b>Check on the graph.</b> Every number here is a point on \(y=2^x\): the exponent is the \(x\)-coordinate and the number is the \(y\)-coordinate. The graph shows \((5,\,32)\), \(\left(1.5,\,2.83\right)\) and \(\left(-4,\,0.06\right)\), and \(\sqrt8\approx2.83\), \(\frac1{16}\approx0.06\) ✓`],
      S`\(32=2^5\), \(\frac1{16}=2^{-4}\), \(\sqrt8=2^{3/2}\), \(4^x=2^{2x}\)`,
      plane({ view: { xmin: -5, xmax: 6, ymin: -2, ymax: 36 }, curves: [{ f: (x) => 2 ** x, color: "violet" }], points: [{ x: 5, y: 32, label: "(5, 32)", color: "amber" }, { x: 1.5, y: 2 ** 1.5, label: "(1.5, 2.83)", color: "amber" }, { x: -4, y: 1 / 16, label: "(−4, 0.06)", color: "amber" }], step: { x: 1, y: 4 } })],
    ["Simplify to a single power", S`Write \(\dfrac{9^{x}\cdot 27}{3^{x-1}}\) as a single power of \(3\).`,
      [S`<b>Goal and plan.</b> The exponent laws only combine powers with the same base. So first write every factor as a power of \(3\), then multiply, then divide.`,
        S`<b>Same base.</b> \(9^x=(3^2)^x=3^{2x}\) and \(27=3^3\). The denominator \(3^{x-1}\) already has base \(3\).`,
        S`<b>Multiply the top.</b> Multiplying powers with the same base adds the exponents: \(3^{2x}\cdot3^3=3^{2x+3}\).`,
        S`<b>Divide.</b> Dividing subtracts the exponents. The whole denominator exponent is subtracted, so it goes in brackets: \(3^{(2x+3)-(x-1)}\).`,
        S`<b>Simplify the exponent.</b> The minus sign changes both terms in the bracket: \(2x+3-x+1=x+4\), so the expression is \(3^{x+4}\).`,
        S`<b>Check with two values.</b> At \(x=1\): the original is \(\dfrac{9\cdot27}{3^0}=243\), and \(3^{5}=243\) ✓. At \(x=-1\): the original is \(\dfrac{\frac19\cdot27}{3^{-2}}=3\times9=27\), and \(3^{3}=27\) ✓. The two forms give the same outputs, so the graph shows one curve.`],
      S`\(3^{x+4}\)`,
      plane({ view: { xmin: -5, xmax: 1.5, ymin: -5, ymax: 260 }, curves: [{ f: (x) => 3 ** (x + 4), color: "violet" }], points: [{ x: -1, y: 27, label: "(−1, 27)", color: "amber" }, { x: 1, y: 243, label: "(1, 243)", color: "amber" }], step: { x: 1, y: 20 } })],
    ["Solve by equating exponents", S`Solve \(2^{3x-1}=32\).`,
      [S`<b>Goal and rule.</b> The unknown is in an exponent. If both sides are powers of the same base \(b\) (with \(b>0\), \(b\ne1\)), then the exponents must be equal, because \(y=b^x\) never takes the same output twice.`,
        S`<b>Common base.</b> The left side already has base \(2\). Since \(2^5=32\), the equation becomes \(2^{3x-1}=2^5\).`,
        S`<b>Equate exponents.</b> Both sides are single powers of \(2\), so \(3x-1=5\). The exponential equation is now a linear equation.`,
        S`<b>Solve.</b> Add \(1\) to both sides: \(3x=6\). Divide by \(3\): \(x=2\).`,
        S`<b>Check by substituting.</b> Left side: \(2^{3(2)-1}=2^{5}=32\). Right side: \(32\) ✓`,
        S`<b>Check on the graph.</b> The curve \(y=2^{3x-1}\) always rises, so it can meet the line \(y=32\) only once. They meet at \((2,\,32)\), so \(x=2\) is the only solution ✓`],
      S`\(x=2\)`,
      plane({ view: { xmin: -1, xmax: 3, ymin: -4, ymax: 40 }, curves: [{ f: (x) => 2 ** (3 * x - 1), color: "violet" }], lines: [{ m: 0, b: 32, color: "blue", dash: true }], points: [{ x: 2, y: 32, label: "(2, 32)", color: "amber" }], step: { x: 1, y: 4 } })],
    ["Different bases on each side", S`Solve \(4^{x+1}=8^{x-1}\).`,
      [S`<b>Goal and plan.</b> The bases differ, so the exponents cannot be compared yet. Both \(4\) and \(8\) are powers of \(2\), so \(2\) is the common base.`,
        S`<b>Rewrite the left side.</b> \(4^{x+1}=(2^2)^{x+1}=2^{2(x+1)}=2^{2x+2}\). The factor \(2\) multiplies the whole exponent, so both terms are doubled.`,
        S`<b>Rewrite the right side.</b> \(8^{x-1}=(2^3)^{x-1}=2^{3(x-1)}=2^{3x-3}\).`,
        S`<b>Equate exponents.</b> Now \(2^{2x+2}=2^{3x-3}\), and both sides are single powers of \(2\), so \(2x+2=3x-3\).`,
        S`<b>Solve.</b> Subtract \(2x\) from both sides: \(2=x-3\). Add \(3\): \(x=5\).`,
        S`<b>Check by substituting.</b> Left side: \(4^{6}=4096\). Right side: \(8^{4}=4096\) ✓. On the graph, the two curves cross at \((5,\,4096)\) ✓`],
      S`\(x=5\)`,
      plane({ view: { xmin: 0, xmax: 6.5, ymin: -200, ymax: 5000 }, curves: [{ f: (x) => 4 ** (x + 1), color: "violet" }, { f: (x) => 8 ** (x - 1), color: "blue" }], points: [{ x: 5, y: 4096, label: "(5, 4096)", color: "amber" }], step: { x: 1, y: 500 } })],
    ["Fractions and roots", S`Solve \(\left(\tfrac19\right)^{x}=\sqrt{27}\).`,
      [S`<b>Goal and plan.</b> A fraction and a root can both be written as powers of \(3\): a reciprocal gives a negative exponent and a root gives a fractional exponent.`,
        S`<b>Rewrite the left side.</b> \(\frac19=\frac1{3^2}=3^{-2}\), so \(\left(\frac19\right)^x=(3^{-2})^x=3^{-2x}\).`,
        S`<b>Rewrite the right side.</b> \(\sqrt{27}=27^{1/2}=(3^3)^{1/2}=3^{3/2}\).`,
        S`<b>Equate exponents.</b> \(3^{-2x}=3^{3/2}\) gives \(-2x=\frac32\).`,
        S`<b>Solve.</b> Divide both sides by \(-2\): \(x=\frac32\times\left(-\frac12\right)=-\frac34\).`,
        S`<b>Check by substituting.</b> A negative exponent flips the fraction: \(\left(\frac19\right)^{-3/4}=9^{3/4}=(3^2)^{3/4}=3^{3/2}=\sqrt{27}\) ✓`,
        S`<b>Does the sign make sense?</b> \(\sqrt{27}\approx5.2\) is greater than \(1\). The curve \(y=\left(\frac19\right)^x\) is decreasing and passes through \((0,\,1)\), so it is above \(1\) only for negative \(x\). The graph shows the crossing at \((-0.75,\,5.2)\) ✓`],
      S`\(x=-\frac34\)`,
      plane({ view: { xmin: -1.5, xmax: 1, ymin: -1, ymax: 20 }, curves: [{ f: (x) => (1 / 9) ** x, color: "violet" }], lines: [{ m: 0, b: Math.sqrt(27), color: "blue", dash: true }], points: [{ x: -0.75, y: Math.sqrt(27), label: "(−0.75, 5.2)", color: "amber" }, { x: 0, y: 1, label: "(0, 1)", color: "gray" }], step: { x: 0.5, y: 2 } })],
  ]),

  practice([
    q("rewrite", S`Write \(\frac1{125}\) as a power of \(5\). Enter the exponent.`, num(-3), "125 = 5³.", [S`\(\frac1{125}=5^{-3}\).`], S`\(-3\)`),
    q("simplify", S`\(\dfrac{8^{x}}{2^{x+2}}=2^{n}\). Which expression is \(n\)?`, choice(["2x − 2", "3x + 2", "4x − 2", "x − 2"], 0), "8ˣ = 2³ˣ; subtract exponents.", [S`\(3x-(x+2)=2x-2\).`], S`\(2x-2\)`),
    q("solve", S`Solve \(3^{2x+1}=243\).`, num(2), "243 = 3⁵.", [S`\(2x+1=5\Rightarrow x=2\).`], S`\(2\)`),
    q("solve", S`Solve \(25^{x}=125^{x-2}\).`, num(6), "Base 5.", [S`\(2x=3(x-2)=3x-6\Rightarrow x=6\).`], S`\(6\)`),
    q("solve", S`Solve \(\left(\tfrac12\right)^{x}=16\).`, num(-4), "1/2 = 2⁻¹ and 16 = 2⁴.", [S`\(2^{-x}=2^4\Rightarrow x=-4\).`], S`\(-4\)`),
  ]),

  ...hard([
    ["A quadratic in the exponent", S`Solve \(3^{x^2}=9^{x+4}\).`,
      [S`<b>Common base 3:</b> \(9^{x+4}=3^{2(x+4)}=3^{2x+8}\).`,
        S`<b>Equate exponents:</b> \(x^2=2x+8\), so \(x^2-2x-8=0\).`,
        S`<b>Factor:</b> \((x-4)(x+2)=0\), so \(x=4\) or \(x=-2\).`,
        S`<b>Check \(x=4\):</b> \(3^{16}\) and \(9^{8}=3^{16}\) ✓. <b>Check \(x=-2\):</b> \(3^{4}=81\) and \(9^{2}=81\) ✓`],
      S`\(x=4\) or \(x=-2\)`,
      plane({ view: { xmin: -4, xmax: 6, ymin: -10, ymax: 20 }, curves: [{ f: (x) => x * x, color: "violet" }], lines: [{ m: 2, b: 8, color: "blue" }], points: [{ x: 4, y: 16, label: "(4, 16)", color: "amber" }, { x: -2, y: 4, label: "(−2, 4)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Factor out a common power", S`Solve \(2^{x+3}-2^{x}=56\).`,
      [S`<b>Why not equate exponents?</b> The left side is a difference of two powers, not a single power, so first rewrite it.`,
        S`<b>Equivalent form:</b> \(2^{x+3}=2^x\cdot2^3=8\cdot2^x\).`,
        S`<b>Common factor:</b> \(8\cdot2^x-2^x=7\cdot2^x\), so \(7\cdot2^x=56\) and \(2^x=8=2^3\).`,
        S`<b>Equate exponents:</b> \(x=3\).`,
        S`<b>Check:</b> \(2^6-2^3=64-8=56\) ✓`],
      S`\(x=3\)`],
  ], [
    q("hard", S`Solve \(2^{x^2-3x}=\frac1{4}\). Enter both roots.`, roots(1, 2), "1/4 = 2⁻².", [S`\(x^2-3x=-2\Rightarrow(x-1)(x-2)=0\).`], S`\(x=1,\ 2\)`),
    q("hard", S`Solve \(3^{x+2}+3^{x}=90\).`, num(2), "Factor out 3ˣ.", [S`\(3^x(9+1)=90\Rightarrow3^x=9\Rightarrow x=2\).`], S`\(2\)`),
    q("hard", S`Solve \(\sqrt[3]{16^{x}}=\left(\tfrac18\right)^{1-x}\).`, num(9 / 5, 0.0001), "Base 2: 2^(4x/3) = 2^(3x − 3).", [S`\(\sqrt[3]{16^x}=2^{4x/3}\) and \(\left(\frac18\right)^{1-x}=2^{-3(1-x)}=2^{3x-3}\).`, S`\(\frac{4x}3=3x-3\Rightarrow4x=9x-9\Rightarrow x=\frac95\).`], S`\(\frac95\)`),
  ]),

  wrapUp({
    qas: [
      ["Why can I set the exponents equal?", "Because y = bˣ is one-to-one for b > 0, b ≠ 1: equal outputs come from equal inputs."],
      ["How do I pick the common base?", "Use the smallest base that every number is a power of: 4, 8, 16 and 1/2 are all powers of 2."],
      ["How do I write a root as a power?", "ⁿ√(bᵐ) = b^(m/n), e.g. √27 = 3^(3/2)."],
      ["Is 2ˣ⁺³ the same as 8·2ˣ?", "Yes: 2ˣ⁺³ = 2ˣ·2³ = 8·2ˣ."],
      ["What if the equation has a sum of powers?", "Factor out the common power first, e.g. 2ˣ⁺³ − 2ˣ = 7·2ˣ."],
    ],
    summary: [
      "Rewrite every number as a power of one base.",
      "bᵐ = bⁿ ⇔ m = n (b > 0, b ≠ 1).",
      "Bracket the whole exponent when applying (bᵐ)ⁿ.",
      "Factor sums of powers before equating exponents.",
    ],
    next: "7.2 solves exponential equations whose sides cannot be written with a common base, using logarithms.",
  }),
];
