// MHF4U 2.1 — Dividing Polynomials and the Remainder Theorem: long and synthetic division, the division statement,
// the remainder theorem for (x − b) and (ax − b), and unknown coefficients from given remainders
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, expr, hard, plane } from "./lib.mjs";

export const TITLE = "2.1 Dividing Polynomials and the Remainder Theorem";
export const ID = "1b672d7b-2c9f-4054-818e-dba3e6a19e68";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "➗",
    title: "Dividing Polynomials and the Remainder Theorem",
    overview: S`Dividing one polynomial by another works like long division with numbers: you get a quotient and a remainder. Synthetic division is a fast shortcut when the divisor is \(x-b\). The remainder has a surprising meaning: when \(P(x)\) is divided by \(x-b\), the remainder is exactly \(P(b)\) — the height of the graph at \(x=b\). This <strong>remainder theorem</strong> lets you find remainders without dividing and find unknown coefficients from a known remainder.`,
    goals: [
      "divide a polynomial by a binomial using long division and synthetic division;",
      "write the division statement \\(P(x)=D(x)Q(x)+R\\);",
      "use the remainder theorem for divisors \\(x-b\\) and \\(ax-b\\);",
      "find an unknown coefficient from a given remainder;",
      "connect the remainder with a point on the graph.",
    ],
    curriculum: "C3.1 (determine, through investigation, the connection between the remainder and P(b) when dividing by x − b), C3.7 (solve problems involving polynomial expressions)",
    prior: [
      [S`Divide \(437\) by \(12\) as quotient and remainder.`, S`\(437=12(36)+5\).`],
      [S`Evaluate \(P(x)=x^3-2x+1\) at \(x=-2\).`, S`\(-8+4+1=-3\).`],
      [S`Expand \((x-3)(x^2+2x-1)\).`, S`\(x^3-x^2-7x+3\).`],
    ],
    words: [
      ["Dividend", "the polynomial being divided, \\(P(x)\\)", ""],
      ["Divisor", "what you divide by, \\(D(x)\\)", "\\(x-2\\)"],
      ["Quotient / remainder", "\\(Q(x)\\) and \\(R\\) in \\(P=DQ+R\\)", ""],
      ["Synthetic division", "a coefficient-only method for divisors \\(x-b\\)", ""],
    ],
  }),

  section("📌 The division statement", S`
  <p>Dividing \(P(x)\) by a divisor \(D(x)\) gives a quotient \(Q(x)\) and a remainder \(R(x)\) whose degree is less than the divisor's:</p>
  <div style="text-align:center;font-size:1.15em;margin:8px 0;">\(P(x)=D(x)\,Q(x)+R(x)\)</div>
  ${table(["Step (long division)", "Synthetic division with b", "Why"], [
    ["Divide the leading terms", "Bring down the first coefficient", "gives the next term of the quotient"],
    ["Multiply the divisor by that term", "Multiply by b", "same product, signs built in"],
    ["Subtract", "Add (because b = −(−b))", "the new leading term cancels"],
    ["Repeat until the degree is too small", "The last number is the remainder", "R has lower degree than x − b"],
  ])}
  ${keyIdea(S`<strong>Remainder theorem.</strong> When \(P(x)\) is divided by \(x-b\), the remainder is \(P(b)\). When it is divided by \(ax-b\), the remainder is \(P\!\left(\tfrac ba\right)\). Write zero coefficients for missing powers before dividing.`)}
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -12, ymax: 14 }, curves: [{ f: (x) => x ** 3 - 3 * x * x + 4, color: "violet" }], points: [{ x: 3, y: 4, label: "(3, 4): remainder 4", color: "red" }, { x: -1, y: 0, label: "(−1, 0): remainder 0", color: "green" }], step: { x: 1, y: 2 } }, "P(x) = x³ − 3x² + 4: dividing by x − 3 leaves 4 = P(3); dividing by x + 1 leaves 0 = P(−1).")}`),

  section("📌 Explore", S`<p>Change the coefficients and the divisor. Follow the three rows of the synthetic division, and check that the remainder equals the height of the graph at \(x=b\).</p>`),

  widget("syntheticDivide", { init: { cs: [1, -3, 0, 4], b: 3 } }),

  section("📌 Using the remainder theorem", S`
  <p>The remainder theorem turns a division question into an evaluation, and an evaluation into an equation when a coefficient is unknown.</p>
  ${watchOut([
    "Dividing by x + 3 means b = −3, not 3.",
    "Write 0 for every missing power: x⁴ − 5x² + 2 has coefficients 1, 0, −5, 0, 2.",
    "In synthetic division you ADD each column; in long division you SUBTRACT.",
    "For a divisor 2x − 1, evaluate P(½), not P(1) or P(2).",
    "The quotient has degree one less than the dividend when dividing by a linear factor.",
  ])}`),

  examples([
    ["Long division", S`Divide \(2x^3+3x^2-8x+5\) by \(x+3\). Write the division statement.`,
      [S`\(2x^3\div x=2x^2\); subtract \(2x^2(x+3)=2x^3+6x^2\): left with \(-3x^2-8x\).`, S`\(-3x^2\div x=-3x\); subtract \(-3x^2-9x\): left with \(x+5\).`, S`\(x\div x=1\); subtract \(x+3\): remainder \(2\).`, S`Check: \(P(-3)=-54+27+24+5=2\) ✓.`],
      S`\(2x^3+3x^2-8x+5=(x+3)(2x^2-3x+1)+2\)`,
      plane({ view: { xmin: -4.5, xmax: 2.5, ymin: -8, ymax: 26 }, curves: [{ f: (x) => 2 * x ** 3 + 3 * x * x - 8 * x + 5, color: "violet" }], points: [{ x: -3, y: 2, label: "(−3, 2)", color: "red" }], step: { x: 1, y: 4 } })],
    ["Synthetic division with a missing term", S`Divide \(x^4-5x^2+2x-7\) by \(x-2\).`,
      [S`Coefficients \(1,\,0,\,-5,\,2,\,-7\); \(b=2\).`, S`Bring down 1; \(1\cdot2=2\), \(0+2=2\); \(2\cdot2=4\), \(-5+4=-1\); \(-1\cdot2=-2\), \(2-2=0\); \(0\cdot2=0\), \(-7+0=-7\).`, S`Quotient \(x^3+2x^2-x+0\), remainder \(-7\).`],
      S`\(Q(x)=x^3+2x^2-x\), \(R=-7\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -16, ymax: 6 }, curves: [{ f: (x) => x ** 4 - 5 * x * x + 2 * x - 7, color: "violet" }], points: [{ x: 2, y: -7, label: "(2, −7)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Remainder without dividing", S`Find the remainder when \(x^3-4x^2+x+9\) is divided by \(x+1\).`,
      [S`\(b=-1\): \(P(-1)=-1-4-1+9\).`],
      S`remainder \(3\)`],
    ["A divisor of the form ax − b", S`Find the remainder when \(6x^3-x^2+4x+1\) is divided by \(2x-1\).`,
      [S`\(2x-1=0\Rightarrow x=\tfrac12\).`, S`\(P\!\left(\tfrac12\right)=6\cdot\tfrac18-\tfrac14+2+1=\tfrac34-\tfrac14+3=3.5\).`],
      S`remainder \(\tfrac72\)`,
      plane({ view: { xmin: -1.5, xmax: 1.5, ymin: -8, ymax: 12 }, curves: [{ f: (x) => 6 * x ** 3 - x * x + 4 * x + 1, color: "violet" }], points: [{ x: 0.5, y: 3.5, label: "(½, 3.5)", color: "red" }], step: { x: 0.5, y: 2 } })],
    ["Find the unknown coefficient", S`When \(x^3+kx^2-3x+4\) is divided by \(x-2\), the remainder is \(10\). Find \(k\).`,
      [S`\(P(2)=8+4k-6+4=6+4k\).`, S`\(6+4k=10\Rightarrow k=1\).`],
      S`\(k=1\)`,
      plane({ view: { xmin: -3.5, xmax: 3, ymin: -6, ymax: 16 }, curves: [{ f: (x) => x ** 3 + x * x - 3 * x + 4, color: "violet" }], points: [{ x: 2, y: 10, label: "(2, 10)", color: "red" }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("remainder", S`Find the remainder when \(x^3+2x^2-5x+1\) is divided by \(x-1\).`, num(-1),
      "Evaluate P(1).", [S`\(1+2-5+1=-1\).`], S`\(-1\)`),
    q("quotient", S`Find the quotient of \((x^2+7x+12)\div(x+4)\).`, expr("x+3"),
      "Synthetic division with b = −4, or factor.", [S`\(x^2+7x+12=(x+4)(x+3)\).`], S`\(x+3\)`),
    q("remainder", S`Find the remainder when \(2x^3-x+4\) is divided by \(x+2\).`, num(-10),
      "b = −2.", [S`\(2(-8)+2+4=-10\).`], S`\(-10\)`),
    q("statement", S`\(P(x)=(x-3)(x^2+1)+4\). What is \(P(3)\)?`, num(4),
      "The first product is 0 at x = 3.", [S`\(0\cdot10+4=4\).`], S`\(4\)`),
    q("ax − b", S`Find the remainder when \(4x^2-4x+5\) is divided by \(2x-1\).`, num(4),
      "Evaluate at x = ½.", [S`\(1-2+5=4\).`], S`\(4\)`),
  ]),

  ...hard([
    ["Two remainders, two unknowns", S`\(P(x)=x^3+ax^2+bx-6\) leaves a remainder of \(2\) when divided by \(x-1\) and \(-28\) when divided by \(x+2\). Find \(a\) and \(b\).`,
      [S`\(P(1)=1+a+b-6=2\Rightarrow a+b=7\).`, S`\(P(-2)=-8+4a-2b-6=-28\Rightarrow 4a-2b=-14\Rightarrow 2a-b=-7\).`, S`Add: \(3a=0\Rightarrow a=0\), so \(b=7\).`],
      S`\(a=0\), \(b=7\): \(P(x)=x^3+7x-6\)`,
      plane({ view: { xmin: -3, xmax: 2.5, ymin: -32, ymax: 12 }, curves: [{ f: (x) => x ** 3 + 7 * x - 6, color: "violet" }], points: [{ x: 1, y: 2, label: "(1, 2)", color: "red" }, { x: -2, y: -28, label: "(−2, −28)", color: "red" }], step: { x: 1, y: 4 } })],
    ["Dividing by a quadratic", S`When \(P(x)\) is divided by \(x-1\) the remainder is \(4\), and when divided by \(x+1\) the remainder is \(-2\). Find the remainder when \(P(x)\) is divided by \(x^2-1\).`,
      [S`Dividing by a quadratic leaves a remainder of degree at most 1: \(P(x)=(x^2-1)Q(x)+mx+n\).`, S`\(x=1\): \(m+n=4\). \(x=-1\): \(-m+n=-2\).`, S`So \(n=1\), \(m=3\).`],
      S`remainder \(3x+1\)`],
  ], [
    q("hard", S`The remainder when \(2x^3-kx^2+x-3\) is divided by \(x-2\) is \(7\). Find \(k\).`, num(2),
      "P(2) = 7.", [S`\(16-4k+2-3=15-4k=7\).`], S`\(2\)`),
    q("hard", S`Find the remainder when \(x^{50}-x^3+2\) is divided by \(x+1\).`, num(4),
      "Evaluate at x = −1.", [S`\(1-(-1)+2=4\).`], S`\(4\)`),
    q("hard", S`Find the remainder when \(3x^3+2x^2-x+5\) is divided by \(3x+2\). (Give a decimal to 3 places.)`, num(17 / 3, 0.001),
      "Evaluate at x = −2/3.", [S`\(3\left(-\tfrac{8}{27}\right)+2\cdot\tfrac49+\tfrac23+5=-\tfrac89+\tfrac89+\tfrac23+5=\tfrac{17}{3}\).`], S`\(\tfrac{17}{3}\approx5.667\)`),
  ]),

  wrapUp({
    qas: [
      ["Why does the remainder equal P(b)?", "Substitute x = b into P(x) = (x − b)Q(x) + R: the first term becomes 0, leaving P(b) = R."],
      ["When can I use synthetic division?", "When the divisor is linear. For x − b use b; for ax − b divide by a afterwards (or use b/a and divide the quotient by a)."],
      ["Why add instead of subtract in synthetic division?", "Synthetic division uses b instead of −b, so every subtraction becomes an addition."],
      ["What degree can the remainder have?", "Less than the divisor: a constant for a linear divisor, at most linear for a quadratic divisor."],
      ["How do I check a division?", "Multiply the divisor by the quotient and add the remainder; you should get the dividend back."],
    ],
    summary: [
      "P(x) = D(x)Q(x) + R(x), deg R < deg D.",
      "Synthetic division: bring down, multiply by b, add.",
      "Remainder of P ÷ (x − b) is P(b); of P ÷ (ax − b) is P(b/a).",
      "Zero coefficients hold the place of missing powers.",
    ],
    next: "2.2 uses a remainder of 0: the factor theorem.",
  }),
];
