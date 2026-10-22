// IB AA SL 10.1 — Antiderivatives and the Indefinite Integral: reversing differentiation, the power rule for integration, sums and constant multiples, rewriting before integrating, boundary conditions
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "10.1 Antiderivatives and the Indefinite Integral";
export const ID = "f237d683-9eff-4279-bb9c-1c08008ef65d";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "↩️",
    title: "Antiderivatives and the Indefinite Integral",
    overview: S`Integration reverses differentiation. If \(F'(x)=f(x)\), then \(F\) is an antiderivative of \(f\), and every curve \(F(x)+C\) is one too. In this lesson you will use the power rule for integration, integrate sums and multiples, rewrite roots and fractions as powers first, and use a known point (a boundary condition) to find the constant \(C\).`,
    goals: [
      "recognise integration as the reverse of differentiation;",
      S`use \(\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\) for \(n\ne-1\);`,
      "integrate sums, differences and constant multiples;",
      "rewrite roots and fractions as powers before integrating;",
      S`use a boundary condition to find \(C\), and find \(f\) from \(f''\).`,
    ],
    curriculum: "SL 5.5 (indefinite integration as anti-differentiation, the power rule, boundary conditions)",
    prior: [
      [S`Differentiate \(x^5-3x^2\).`, S`\(5x^4-6x\).`],
      [S`Write \(\frac{1}{\sqrt x}\) as a power of \(x\).`, S`\(x^{-1/2}\).`],
      [S`If \(F(x)=x^3+C\) and \(F(2)=10\), find \(C\).`, S`\(C=2\).`],
    ],
    words: [
      ["Antiderivative", S`a function \(F\) with \(F'=f\)`, S`\(x^4\) for \(4x^3\)`],
      ["Indefinite integral", S`\(\int f(x)\,dx=F(x)+C\)`, S`\(\int 2x\,dx=x^2+C\)`],
      ["Constant of integration", "the unknown C: constants vanish when differentiated", S`\(+C\)`],
      ["Integrand", "the function being integrated", S`\(f(x)\) in \(\int f(x)\,dx\)`],
      ["Boundary condition", "a known point used to find C", S`\(f(0)=5\)`],
    ],
  }),

  section("📌 Reversing differentiation", S`
  <p>Since \(\frac{d}{dx}(x^3)=3x^2\), we say \(\int 3x^2\,dx=x^3+C\). The constant is needed because \(x^3+7\) and \(x^3-2\) also differentiate to \(3x^2\). Graphically, all antiderivatives are vertical translations of each other: at any x they have the same gradient.</p>
  ${plane({ view: { xmin: -3, xmax: 3, ymin: -8, ymax: 8 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => x ** 3 - 3 * x + 3, color: "violet" }, { f: (x) => x ** 3 - 3 * x, color: "green" }, { f: (x) => x ** 3 - 3 * x - 3, color: "amber" }], points: [P(1, 1, "(1, 1)"), P(1, -2, "(1, −2)", "green"), P(1, -5, "(1, −5)", "amber")] }, "y = x³ − 3x + C for C = 3, 0, −3: at x = 1 every curve has gradient 0")}
  ${table(["Differentiation", "Integration"], [
    [S`\(\frac{d}{dx}x^{n+1}=(n+1)x^n\)`, S`\(\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\ (n\ne-1)\)`],
    [S`\(\frac{d}{dx}(kx)=k\)`, S`\(\int k\,dx=kx+C\)`],
    [S`\(\frac{d}{dx}[af+bg]=af'+bg'\)`, S`\(\int(af+bg)\,dx=a\int f\,dx+b\int g\,dx\)`],
  ])}
  ${keyIdea("To integrate xⁿ: add one to the power, then divide by the new power. Always add C.")}`),

  section("📌 Rewrite first", S`
  <p>Roots and fractions must be powers of \(x\) before the power rule applies. Products and quotients must be expanded or split — there is no product rule for integration.</p>
  ${table(["Integrand", "Rewrite", "Integral"], [
    [S`\(\sqrt[3]{x}\)`, S`\(x^{1/3}\)`, S`\(\frac34x^{4/3}+C\)`],
    [S`\(\frac{5}{x^3}\)`, S`\(5x^{-3}\)`, S`\(-\frac{5}{2x^2}+C\)`],
    [S`\((x+2)(x-5)\)`, S`\(x^2-3x-10\)`, S`\(\frac13x^3-\frac32x^2-10x+C\)`],
    [S`\(\frac{x^4+6x}{x}\)`, S`\(x^3+6\)`, S`\(\frac14x^4+6x+C\)`],
  ])}
  ${plane({ view: { xmin: -0.5, xmax: 9, ymin: -1, ymax: 13 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => Math.cbrt(x), a: 0, b: 9, color: "amber" }, { f: (x) => 0.75 * x ** (4 / 3), a: 0, b: 9, color: "violet" }], points: [P(8, 2, "(8, 2)", "amber"), P(8, 12, "(8, 12)")] }, "f(x) = ∛x (amber) and its antiderivative F(x) = ¾x^(4/3) (violet): F′(8) = ∛8 = 2")}
  ${watchOut([
    S`\(\int x^{-1}\,dx\) is NOT \(\frac{x^0}{0}\): the power rule fails for \(n=-1\) (see 10.2).`,
    S`\(\int(2x)(x^2)\,dx\ne x^2\cdot\frac{x^3}{3}\): multiply out first.`,
    S`\(\int\frac{1}{x^2}dx=-\frac1x+C\), not \(\frac{1}{x^3}\) or \(\ln x^2\).`,
    "Never forget + C in an indefinite integral.",
  ])}`),

  section("📌 Boundary conditions", S`
  <p>A known point fixes \(C\). If \(f'(x)=6x^2-2\) and the curve passes through \((1,5)\), then \(f(x)=2x^3-2x+C\) and \(5=2-2+C\), so \(C=5\) and \(f(x)=2x^3-2x+5\).</p>
  ${plane({ view: { xmin: -2.5, xmax: 2.5, ymin: -8, ymax: 14 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => 2 * x ** 3 - 2 * x + 5, color: "violet" }, { f: (x) => 2 * x ** 3 - 2 * x, color: "gray" }], points: [P(1, 5, "(1, 5)", "red")] }, "Of all the curves 2x³ − 2x + C (grey: C = 0), only C = 5 passes through (1, 5)")}
  <p>Given \(f''(x)\), integrate twice: two constants need two conditions. If \(f''(x)=12x\), \(f'(1)=4\) and \(f(0)=-1\): \(f'(x)=6x^2+C_1\Rightarrow C_1=-2\); \(f(x)=2x^3-2x+C_2\Rightarrow C_2=-1\).</p>
  ${plane({ view: { xmin: -2, xmax: 2, ymin: -6, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 2 * x ** 3 - 2 * x - 1, color: "violet" }, { f: (x) => 6 * x * x - 2, color: "amber" }], points: [P(0, -1, "f(0) = −1", "red"), P(1, 4, "f′(1) = 4", "amber")] }, "f(x) = 2x³ − 2x − 1 (violet) and f′(x) = 6x² − 2 (amber)")}`),

  section("📌 Explore", S`<p>Change C to move the antiderivative up and down. Then place a point and see which single curve passes through it.</p>`),

  widget("ibAntideriv", { init: [1, 2, 2, -1] }),

  examples([
    ["Level 1 · Power rule", S`Find \(\int(8x^3-6x^2+5)\,dx\).`,
      [S`\(8\cdot\frac{x^4}{4}-6\cdot\frac{x^3}{3}+5x\).`],
      S`\(2x^4-2x^3+5x+C\)`],
    ["Level 1 · Negative and fractional powers", S`Find \(\int\left(\frac{4}{x^2}+3\sqrt x\right)dx\).`,
      [S`\(4x^{-2}+3x^{1/2}\).`, S`\(4\cdot\frac{x^{-1}}{-1}+3\cdot\frac{x^{3/2}}{3/2}\).`],
      S`\(-\frac4x+2x^{3/2}+C\)`],
    ["Level 2 · Expand first", S`Find \(\int(2x-3)^2\,dx\).`,
      [S`\(4x^2-12x+9\).`],
      S`\(\frac43x^3-6x^2+9x+C\)`],
    ["Level 2 · Boundary condition", S`The gradient of a curve is \(\frac{dy}{dx}=4x-3\) and it passes through \((2,7)\). Find its equation.`,
      [S`\(y=2x^2-3x+C\).`, S`\(7=8-6+C\Rightarrow C=5\).`],
      S`\(y=2x^2-3x+5\)`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 16 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => 2 * x * x - 3 * x + 5, color: "violet" }], points: [P(2, 7, "(2, 7)", "red")] }, "y = 2x² − 3x + 5 through (2, 7)")],
    ["Level 3 · From the second derivative", S`\(f''(x)=6x-2\), \(f'(0)=1\) and \(f(1)=4\). Find \(f(x)\).`,
      [S`\(f'(x)=3x^2-2x+1\).`, S`\(f(x)=x^3-x^2+x+C\); \(4=1-1+1+C\Rightarrow C=3\).`],
      S`\(f(x)=x^3-x^2+x+3\)`],
  ]),

  practice([
    q("Level 1 · power rule", S`\(\int 12x^5\,dx=kx^6+C\). Find k.`, num(2),
      "12/6.", [S`\(2x^6\).`], S`\(2\)`),
    q("Level 1 · constant", S`\(\int 7\,dx=\)`, choice([S`\(7x+C\)`, S`\(7+C\)`, S`\(\frac72x^2+C\)`, S`\(0\)`], 0),
      "The derivative of 7x is 7.", ["7x + C."], S`\(7x+C\)`),
    q("Level 2 · fractional power", S`\(\int 5x^{3/2}\,dx=kx^{5/2}+C\). Find k.`, num(2),
      "5 ÷ 5/2.", [S`\(2x^{5/2}\).`], S`\(2\)`),
    q("Level 2 · boundary", S`\(f'(x)=3x^2+4\) and \(f(1)=9\). Find \(f(2)\).`, num(20),
      "f = x³ + 4x + C.", [S`\(C=4\); \(f(2)=8+8+4\).`], S`\(20\)`),
    q("Level 2 · split the fraction", S`\(\int\frac{x^3-2x}{x}\,dx\) equals:`, choice([S`\(\frac13x^3-2x+C\)`, S`\(\frac14x^4-x^2+C\)`, S`\(\frac{x^4/4-x^2}{x^2/2}+C\)`, S`\(x^2-2+C\)`], 0),
      "Divide first: x² − 2.", [S`\(\int(x^2-2)\,dx\).`], S`\(\frac13x^3-2x+C\)`),
  ]),

  ...hard([
    ["A curve through two conditions", S`A curve has \(\frac{dy}{dx}=kx^2-4\), where \(k\) is a constant. It has a stationary point at \(x=2\) and passes through \((0,3)\). Find \(k\) and the equation of the curve.`,
      [S`Stationary at 2: \(4k-4=0\Rightarrow k=1\).`, S`\(y=\frac13x^3-4x+C\); \((0,3)\Rightarrow C=3\).`],
      S`\(y=\frac13x^3-4x+3\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 10 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => x ** 3 / 3 - 4 * x + 3, color: "violet" }], points: [P(2, 8 / 3 - 8 + 3, "min (2, −2.33)", "red"), P(-2, -8 / 3 + 8 + 3, "max (−2, 8.33)", "green"), P(0, 3, "(0, 3)")] }, "y = ⅓x³ − 4x + 3: stationary points at x = ±2")],
    ["Rewriting a quotient", S`Find \(\int\frac{(\sqrt x-2)^2}{\sqrt x}\,dx\).`,
      [S`Expand: \(\frac{x-4\sqrt x+4}{\sqrt x}=x^{1/2}-4+4x^{-1/2}\).`, S`Integrate: \(\frac23x^{3/2}-4x+8x^{1/2}+C\).`],
      S`\(\frac23x^{3/2}-4x+8\sqrt x+C\)`],
  ], [
    q("Level 3 · two constants", S`\(f''(x)=6\), \(f'(1)=2\), \(f(0)=5\). Find \(f(2)\).`, num(9),
      "f′ = 6x − 4; f = 3x² − 4x + 5.", [S`\(f(2)=12-8+5\).`], S`\(9\)`),
    q("Level 3 · unknown constant", S`\(f'(x)=ax+3\), \(f(0)=1\), \(f(2)=11\). Find a.`, num(2),
      "f = ½ax² + 3x + 1.", [S`\(2a+6+1=11\).`], S`\(a=2\)`),
    q("Level 3 · negative power", S`\(\int\frac{6}{x^4}\,dx\) equals:`, choice([S`\(-\frac{2}{x^3}+C\)`, S`\(\frac{2}{x^3}+C\)`, S`\(-\frac{6}{5x^5}+C\)`, S`\(-\frac{24}{x^5}+C\)`], 0),
      "6x⁻⁴ → 6x⁻³/(−3).", [S`\(-2x^{-3}\).`], S`\(-\frac2{x^3}+C\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is there a + C?", "Constants differentiate to zero, so any constant could have been there."],
      ["What is the power rule for integration?", "Add one to the power and divide by the new power (n ≠ −1)."],
      ["How do I integrate a product or a quotient?", "Expand or divide into separate powers first."],
      ["How do I find C?", "Substitute a known point into the integrated function."],
      ["How many conditions do I need for f from f″?", "Two: one for each integration."],
    ],
    summary: [
      "∫xⁿ dx = xⁿ⁺¹/(n + 1) + C, n ≠ −1.",
      "∫(af + bg) dx = a∫f dx + b∫g dx.",
      "Rewrite roots and fractions as powers; expand products.",
      "A boundary condition fixes C.",
    ],
    next: "10.2 integrates exponentials, 1/x and linear composites.",
  }),
];
