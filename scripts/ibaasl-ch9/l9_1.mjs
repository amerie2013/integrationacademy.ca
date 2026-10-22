// IB AA SL 9.1 — Exponents and Radicals: laws of exponents, zero and negative exponents, rational exponents and radicals, simplifying and rationalising surds, exponential equations with a common base
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "9.1 Exponents and Radicals";
export const ID = "e4299b66-a260-45f4-aadf-274fe32a1c73";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🔢",
    title: "Exponents and Radicals",
    overview: S`Exponents are shorthand for repeated multiplication, and the laws of exponents follow from counting factors. Extending the pattern gives meaning to zero, negative and fractional exponents, which connect exponents to roots (radicals). In this lesson you will use the laws fluently, simplify and rationalise surds, and solve exponential equations by writing both sides with the same base.`,
    goals: [
      "apply the laws of exponents, including zero and negative exponents;",
      S`interpret rational exponents: \(a^{m/n}=\left(\sqrt[n]{a}\right)^m\);`,
      "simplify surds and rationalise denominators;",
      "solve exponential equations by equating exponents with a common base;",
      "solve equations that are quadratic in an exponential.",
    ],
    curriculum: "SL 1.5 (laws of exponents with integer exponents); SL 1.7 (rational exponents, laws of exponents); prior learning: surds",
    prior: [
      [S`Evaluate \(2^5\).`, "32."],
      [S`Simplify \(\sqrt{36}\).`, "6."],
      [S`Factorise \(u^2-7u+12\).`, S`\((u-3)(u-4)\).`],
    ],
    words: [
      ["Base, exponent", S`in \(a^n\), a is the base and n the exponent (power)`, S`\(5^3\)`],
      ["Negative exponent", "a reciprocal", S`\(a^{-n}=\frac{1}{a^n}\)`],
      ["Rational exponent", "a root combined with a power", S`\(a^{m/n}\)`],
      ["Surd", "an irrational root left in exact form", S`\(\sqrt{7}\)`],
      ["Rationalise", "remove a surd from a denominator", S`\(\frac{1}{\sqrt3}=\frac{\sqrt3}{3}\)`],
    ],
  }),

  section("📌 The laws and the pattern behind them", S`
  ${table(["Law", "Example"], [
    [S`\(a^m\times a^n=a^{m+n}\)`, S`\(x^2\times x^6=x^8\)`],
    [S`\(a^m\div a^n=a^{m-n}\)`, S`\(y^9\div y^4=y^5\)`],
    [S`\((a^m)^n=a^{mn}\)`, S`\((p^3)^5=p^{15}\)`],
    [S`\((ab)^n=a^nb^n\)`, S`\((2x)^3=8x^3\)`],
    [S`\(a^0=1,\ a^{-n}=\frac1{a^n}\)`, S`\(6^{-2}=\frac1{36}\)`],
  ])}
  <p>Dividing by the base each step down the table of powers of 2 continues the pattern past \(2^0=1\): \(2^{-1}=\frac12\), \(2^{-2}=\frac14\). On the graph of \(y=2^x\) each step of 1 to the left halves the height, and the curve never reaches zero.</p>
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 10 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 2 ** x, color: "violet" }], points: [P(-2, 0.25, "(−2, ¼)"), P(-1, 0.5, "(−1, ½)"), P(0, 1, "(0, 1)", "green"), P(1, 2, "(1, 2)"), P(3, 8, "(3, 8)", "red")] }, "y = 2ˣ: negative exponents continue the halving pattern; 2⁰ = 1")}
  ${keyIdea("Every law comes from counting factors. Zero and negative exponents are defined so that the laws keep working: a⁰ = 1 and a⁻ⁿ = 1/aⁿ.")}`),

  section("📌 Rational exponents and surds", S`
  <p>Since \(\left(a^{1/n}\right)^n=a^1=a\), the power \(a^{1/n}\) must be the \(n\)th root: \(a^{1/n}=\sqrt[n]{a}\). More generally \(a^{m/n}=\left(\sqrt[n]{a}\right)^m\) — take the root first to keep numbers small: \(125^{2/3}=5^2=25\).</p>
  ${plane({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 4 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, b: 10, color: "violet" }, { f: (x) => Math.cbrt(x), a: 0, b: 10, color: "amber" }], points: [P(9, 3, "(9, 3)"), P(8, 2, "(8, 2)", "amber"), P(1, 1, "(1, 1)", "green")] }, "y = x^(1/2) = √x (violet) and y = x^(1/3) = ∛x (amber)")}
  <p>A surd is simplified by taking out square factors: \(\sqrt{72}=\sqrt{36\times2}=6\sqrt2\). To rationalise, multiply by a form of 1: \(\frac{5}{\sqrt{10}}=\frac{5\sqrt{10}}{10}=\frac{\sqrt{10}}2\); for \(a+\sqrt b\) in the denominator, multiply by the conjugate \(a-\sqrt b\), because \((a+\sqrt b)(a-\sqrt b)=a^2-b\).</p>
  ${watchOut([
    S`\(\sqrt{a+b}\ne\sqrt a+\sqrt b\): \(\sqrt{9+16}=5\), not 7.`,
    S`\(-3^2=-9\) but \((-3)^2=9\).`,
    S`\((2x)^3=8x^3\), not \(2x^3\).`,
    S`A negative exponent does not make the number negative: \(4^{-1}=\frac14\).`,
  ])}`),

  section("📌 Exponential equations with a common base", S`
  <p>If \(a^p=a^q\) (with \(a>0,\ a\ne1\)) then \(p=q\). Rewrite both sides as powers of the same base: \(4^{x}=8^{x-1}\) becomes \(2^{2x}=2^{3x-3}\), so \(2x=3x-3\) and \(x=3\). Graphically, the curves \(y=4^x\) and \(y=8^{x-1}\) cross at \(x=3\).</p>
  ${plane({ view: { xmin: -1, xmax: 4, ymin: -5, ymax: 80 }, step: { x: 1, y: 10 }, curves: [{ f: (x) => 4 ** x, color: "violet" }, { f: (x) => 8 ** (x - 1), color: "amber" }], points: [P(3, 64, "(3, 64)", "red")] }, "4ˣ (violet) = 8ˣ⁻¹ (amber) where 2x = 3x − 3, x = 3")}
  <p>An equation such as \(9^x-10\cdot3^x+9=0\) is a quadratic in disguise: let \(u=3^x\), so \(u^2-10u+9=0\), \((u-1)(u-9)=0\), and \(3^x=1\) or \(3^x=9\): \(x=0\) or \(x=2\).</p>
  ${plane({ view: { xmin: -2, xmax: 3, ymin: -20, ymax: 15 }, step: { x: 1, y: 5 }, curves: [{ f: (x) => 9 ** x - 10 * 3 ** x + 9, color: "violet" }], points: [P(0, 0, "(0, 0)", "red"), P(2, 0, "(2, 0)", "red")] }, "y = 9ˣ − 10·3ˣ + 9 crosses the x-axis at x = 0 and x = 2")}
  ${keyIdea("Same base ⇒ equal exponents. Look for a hidden quadratic when a power appears squared (a²ˣ = (aˣ)²).")}`),

  section("📌 Explore", S`<p>Choose a law and change a, m and n — including zero and negative values — and compare the law's answer with direct calculation.</p>`),

  widget("ibExpLaws", { init: [0, 3, 2, -4] }),

  examples([
    ["Level 1 · Laws", S`Simplify \(\dfrac{6a^5b^{-2}}{3a^{-1}b^4}\).`,
      [S`Numbers: \(6\div3=2\).`, S`\(a^{5-(-1)}=a^6\), \(b^{-2-4}=b^{-6}\).`],
      S`\(\dfrac{2a^6}{b^6}\)`],
    ["Level 1 · Rational exponents", S`Evaluate \(81^{3/4}\) and \(\left(\frac{8}{27}\right)^{-2/3}\).`,
      [S`\(81^{3/4}=(\sqrt[4]{81})^3=3^3\).`, S`\(\left(\frac{27}{8}\right)^{2/3}=\left(\frac32\right)^2\).`],
      S`\(27\); \(\frac94\)`],
    ["Level 2 · Surds", S`Simplify \(\sqrt{98}-\sqrt{32}+\sqrt{50}\).`,
      [S`\(7\sqrt2-4\sqrt2+5\sqrt2\).`],
      S`\(8\sqrt2\)`],
    ["Level 2 · Rationalising", S`Rationalise \(\dfrac{10}{3-\sqrt5}\).`,
      [S`Multiply by \(\frac{3+\sqrt5}{3+\sqrt5}\): denominator \(9-5=4\).`, S`\(\frac{10(3+\sqrt5)}4=\frac{5(3+\sqrt5)}2\).`],
      S`\(\dfrac{15+5\sqrt5}{2}\)`],
    ["Level 3 · Common base", S`Solve \(25^{x+1}=125^{x-2}\).`,
      [S`\(5^{2x+2}=5^{3x-6}\).`, S`\(2x+2=3x-6\).`],
      S`\(x=8\)`,
      plane({ view: { xmin: 0, xmax: 10, ymin: -6, ymax: 24 }, step: { x: 1, y: 3 }, lines: [{ m: 2, b: 2, color: "violet" }, { m: 3, b: -6, color: "amber" }], points: [P(8, 18, "(8, 18)", "red")] }, "The exponents of 5: 2x + 2 (violet) and 3x − 6 (amber) are equal at x = 8")],
  ]),

  practice([
    q("Level 1 · zero and negative", S`Evaluate \(5^0+2^{-3}\) as a decimal.`, num(1.125, 0.001),
      "a⁰ = 1, a⁻ⁿ = 1/aⁿ.", [S`\(1+\frac18\).`], S`\(1.125\)`),
    q("Level 1 · fractional", S`Evaluate \(64^{2/3}\).`, num(16),
      "Cube root first.", [S`\(4^2\).`], S`\(16\)`),
    q("Level 2 · simplify", S`Simplify \((2x^3)^4\div(4x^5)\). Give the coefficient of the result \(kx^n\): k = ?`, num(4),
      "16x¹² ÷ 4x⁵.", [S`\(4x^7\).`], S`\(4x^7\)`),
    q("Level 2 · surd", S`\(\sqrt{200}=k\sqrt2\). Find k.`, num(10),
      "200 = 100 × 2.", [S`\(10\sqrt2\).`], S`\(10\)`),
    q("Level 2 · common base", S`Solve \(3^{2x-1}=243\).`, num(3),
      "243 = 3⁵.", [S`\(2x-1=5\).`], S`\(x=3\)`),
  ]),

  ...hard([
    ["A hidden quadratic", S`Solve \(4^x-6\cdot2^x+8=0\).`,
      [S`Let \(u=2^x\): \(u^2-6u+8=0\), so \((u-2)(u-4)=0\).`, S`\(2^x=2\Rightarrow x=1\); \(2^x=4\Rightarrow x=2\).`],
      S`\(x=1\) or \(x=2\)`,
      plane({ view: { xmin: -1, xmax: 3, ymin: -3, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 4 ** x - 6 * 2 ** x + 8, color: "violet" }], points: [P(1, 0, "(1, 0)", "red"), P(2, 0, "(2, 0)", "red")] }, "y = 4ˣ − 6·2ˣ + 8 has two zeros")],
    ["Conjugates twice", S`Show that \(\dfrac{1}{\sqrt3+\sqrt2}+\dfrac{1}{\sqrt3-\sqrt2}=2\sqrt3\).`,
      [S`Rationalise each: \(\frac{\sqrt3-\sqrt2}{3-2}+\frac{\sqrt3+\sqrt2}{3-2}\).`, S`\(=(\sqrt3-\sqrt2)+(\sqrt3+\sqrt2)=2\sqrt3\).`],
      S`\(2\sqrt3\)`],
  ], [
    q("Level 3 · two equations", S`Solve simultaneously \(2^{x+y}=32\) and \(3^{x-y}=27\). Find x.`, num(4),
      "x + y = 5, x − y = 3.", [S`Add: \(2x=8\).`], S`\(x=4,\ y=1\)`),
    q("Level 3 · hidden quadratic", S`Solve \(9^x-4\cdot3^{x+1}+27=0\). Give the larger solution.`, num(2),
      "Let u = 3ˣ: u² − 12u + 27 = 0.", [S`\((u-3)(u-9)=0\): \(x=1\) or \(x=2\).`], S`\(x=2\)`),
    q("Level 3 · surd equation", S`\(\dfrac{\sqrt{12}+\sqrt{27}}{\sqrt3}\) simplifies to:`, choice(["5", "√39", "13", "5√3"], 0),
      "√12 = 2√3, √27 = 3√3.", [S`\(\frac{5\sqrt3}{\sqrt3}=5\).`], S`\(5\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is a⁰ = 1?", "Because aⁿ ÷ aⁿ = 1 and the quotient law gives a⁰."],
      ["How do I evaluate a^(m/n) without a calculator?", "Take the nth root first, then raise to the power m."],
      ["How do I simplify a surd?", "Write the number as (largest square) × (rest) and take the square root of the square."],
      ["How do I rationalise a + √b in the denominator?", "Multiply top and bottom by the conjugate a − √b."],
      ["When can I equate exponents?", "When both sides are powers of the same base (a > 0, a ≠ 1)."],
    ],
    summary: [
      "aᵐaⁿ = aᵐ⁺ⁿ, aᵐ/aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁰ = 1, a⁻ⁿ = 1/aⁿ.",
      "a^(m/n) = (ⁿ√a)ᵐ.",
      "Simplify surds with square factors; rationalise with conjugates.",
      "Same base ⇒ equal exponents; a²ˣ = (aˣ)² hides a quadratic.",
    ],
    next: "9.2 studies exponential functions, growth and decay, and the number e.",
  }),
];
