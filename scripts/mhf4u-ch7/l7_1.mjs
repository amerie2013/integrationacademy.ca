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
      [S`<b>Rule.</b> Find the exponent \(n\) with \(2^n\) equal to the number; use negative exponents for reciprocals and fractional exponents for roots.`,
        S`<b>Whole number:</b> \(32=2\times2\times2\times2\times2=2^5\).`,
        S`<b>Fraction:</b> \(16=2^4\), so \(\frac1{16}=2^{-4}\) (reciprocal ⇒ negative exponent).`,
        S`<b>Root:</b> \(\sqrt8=8^{1/2}=(2^3)^{1/2}=2^{3/2}\) (power of a power: multiply \(3\times\frac12\)).`,
        S`<b>Power with a different base:</b> \(4^x=(2^2)^x=2^{2x}\).`,
        S`<b>Check:</b> \(2^{-4}=\frac1{2^4}=\frac1{16}\) ✓ and \(2^{3/2}=\sqrt{2^3}=\sqrt8\) ✓`],
      S`\(2^5,\ 2^{-4},\ 2^{3/2},\ 2^{2x}\)`],
    ["Simplify to a single power", S`Write \(\dfrac{9^{x}\cdot 27}{3^{x-1}}\) as a single power of \(3\).`,
      [S`<b>Common base 3:</b> \(9^x=(3^2)^x=3^{2x}\) and \(27=3^3\).`,
        S`<b>Multiply (add exponents):</b> \(3^{2x}\cdot3^3=3^{2x+3}\).`,
        S`<b>Divide (subtract exponents, whole exponent in brackets):</b> \(3^{(2x+3)-(x-1)}=3^{x+4}\).`,
        S`<b>Check with \(x=1\):</b> original \(\dfrac{9\cdot27}{3^0}=243\); simplified \(3^{5}=243\) ✓`],
      S`\(3^{x+4}\)`],
    ["Solve by equating exponents", S`Solve \(2^{3x-1}=32\).`,
      [S`<b>Common base:</b> \(32=2^5\), so the equation is \(2^{3x-1}=2^5\).`,
        S`<b>Equate exponents</b> (\(y=2^x\) is one-to-one): \(3x-1=5\).`,
        S`<b>Solve the linear equation:</b> \(3x=6\), so \(x=2\).`,
        S`<b>Check:</b> \(2^{3(2)-1}=2^5=32\) ✓`],
      S`\(x=2\)`,
      plane({ view: { xmin: -1, xmax: 3, ymin: -4, ymax: 40 }, curves: [{ f: (x) => 2 ** (3 * x - 1), color: "violet" }], lines: [{ m: 0, b: 32, color: "blue", dash: true }], points: [{ x: 2, y: 32, label: "(2, 32)", color: "amber" }], step: { x: 1, y: 4 } })],
    ["Different bases on each side", S`Solve \(4^{x+1}=8^{x-1}\).`,
      [S`<b>Choose base 2</b>, because \(4=2^2\) and \(8=2^3\).`,
        S`<b>Rewrite each side:</b> \(4^{x+1}=2^{2(x+1)}=2^{2x+2}\) and \(8^{x-1}=2^{3(x-1)}=2^{3x-3}\).`,
        S`<b>Equate exponents:</b> \(2x+2=3x-3\).`,
        S`<b>Solve:</b> \(x=5\).`,
        S`<b>Check:</b> \(4^{6}=4096\) and \(8^{4}=4096\) ✓`],
      S`\(x=5\)`],
    ["Fractions and roots", S`Solve \(\left(\tfrac19\right)^{x}=\sqrt{27}\).`,
      [S`<b>Base 3:</b> \(\frac19=3^{-2}\) and \(\sqrt{27}=(3^3)^{1/2}=3^{3/2}\).`,
        S`<b>Rewrite:</b> \((3^{-2})^x=3^{3/2}\Rightarrow3^{-2x}=3^{3/2}\).`,
        S`<b>Equate exponents:</b> \(-2x=\frac32\), so \(x=-\frac34\).`,
        S`<b>Check:</b> \(\left(\frac19\right)^{-3/4}=9^{3/4}=(3^2)^{3/4}=3^{3/2}=\sqrt{27}\) ✓`,
        S`<b>Sense check:</b> \(\sqrt{27}\approx5.2>1\), and a base below \(1\) gives an output above \(1\) only for a negative exponent ✓`],
      S`\(x=-\frac34\)`],
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
