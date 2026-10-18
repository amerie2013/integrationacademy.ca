// MHF4U 1.1 — Power Functions: y = axⁿ, degree and leading coefficient, end behaviour, symmetry, domain and range,
// comparing powers, and telling polynomial functions apart from exponential and sinusoidal ones
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "1.1 Power Functions";
export const ID = "51674f02-ba2e-4d1b-97f0-68818b08df40";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📈",
    title: "Power Functions",
    overview: S`A <strong>power function</strong> has the form \(y=ax^n\), where \(n\) is a whole number and \(a\ne0\). Power functions are the building blocks of every polynomial: for very large or very small \(x\), a polynomial behaves like its leading term. In this lesson you will classify functions, use the degree and the sign of \(a\) to predict end behaviour, describe symmetry, domain and range, compare different powers, and tell polynomial functions apart from exponential and sinusoidal ones.`,
    goals: [
      "recognize power functions and polynomial functions, and give their degree and leading coefficient;",
      "describe the end behaviour of y = axⁿ from the parity of n and the sign of a;",
      "state the domain, range and symmetry (even or odd) of a power function;",
      "compare graphs of different powers near 0 and far from 0;",
      "distinguish polynomial functions from exponential and sinusoidal functions.",
    ],
    curriculum: "C1.1–C1.4 (recognize polynomial expressions and functions; compare numeric, graphical and algebraic representations; describe key features including end behaviour; distinguish polynomial functions from sinusoidal and exponential functions)",
    prior: [
      [S`Evaluate \((-2)^4\) and \((-2)^5\).`, S`\(16\) and \(-32\).`],
      [S`Which quadrants does \(y=x^2\) pass through?`, S`Quadrants 1 and 2.`],
      [S`What is the degree of \(4x^3-x+7\)?`, S`\(3\).`],
    ],
    words: [
      ["Power function", "\\(y=ax^n\\), \\(n\\) a whole number", "\\(y=-2x^5\\)"],
      ["Degree", "the highest exponent of \\(x\\)", ""],
      ["Leading coefficient", "the coefficient of the highest power", ""],
      ["End behaviour", "what \\(y\\) does as \\(x\\to\\pm\\infty\\)", ""],
      ["Even / odd function", "\\(f(-x)=f(x)\\) / \\(f(-x)=-f(x)\\)", ""],
    ],
  }),

  section("📌 Four families of end behaviour", S`
  ${plane({ view: { xmin: -2.2, xmax: 2.2, ymin: -6, ymax: 6 }, curves: [{ f: (x) => x ** 4, color: "blue" }, { f: (x) => -(x ** 4), color: "red" }, { f: (x) => x ** 3, color: "green" }, { f: (x) => -(x ** 3), color: "amber" }], points: [{ x: 1.4, y: 3.84, label: "x⁴", color: "blue" }, { x: 1.4, y: -3.84, label: "−x⁴", color: "red" }, { x: 1.6, y: 4.1, label: "x³", color: "green" }, { x: -1.6, y: 4.1, label: "−x³", color: "amber" }], step: { x: 1, y: 1 } }, "Even degree: both ends the same way. Odd degree: ends in opposite directions. A negative a flips the graph.")}
  ${table(["", "a > 0", "a < 0"], [
    ["n even", "Q2 → Q1: \\(y\\to+\\infty\\) at both ends", "Q3 → Q4: \\(y\\to-\\infty\\) at both ends"],
    ["n odd", "Q3 → Q1: falls left, rises right", "Q2 → Q4: rises left, falls right"],
  ])}
  ${keyIdea(S`For \(y=ax^n\): the <strong>parity</strong> of \(n\) decides whether the ends match (even) or point opposite ways (odd); the <strong>sign</strong> of \(a\) decides which way the right end goes. Even powers are symmetric about the y-axis; odd powers about the origin. The domain is always all real numbers; the range is all real numbers for odd \(n\), and \(y\ge0\) or \(y\le0\) for even \(n\).`)}`),

  section("📌 Explore", S`<p>Change the degree and the leading coefficient. Then switch on the comparison to see how higher powers hug the x-axis near 0 and climb much faster beyond \(|x|=1\).</p>`),

  widget("powerLab", { init: [3, 1] }),

  section("📌 Polynomials, and functions that are not", S`
  <p>A <strong>polynomial function</strong> is a sum of power functions, such as \(f(x)=2x^4-x^3+5x-1\). Its degree is the highest power, and its end behaviour copies its leading term \(2x^4\). Exponential functions like \(y=2^x\) (the variable is in the exponent) and sinusoidal functions like \(y=\sin x\) (periodic, bounded) are <em>not</em> polynomials.</p>
  ${watchOut([
    "y = 3ˣ is not a power function — the variable is in the exponent.",
    "y = x⁴ + 1 is a polynomial but not a power function (two terms).",
    "(−x)⁴ = x⁴ but (−x)³ = −x³: that is where even/odd symmetry comes from.",
    "A constant y = 7 is a power function of degree 0.",
    "End behaviour depends only on the leading term, not on the other terms.",
  ])}`),

  examples([
    ["Classify", S`Which are power functions? Give the degree where possible: (a) \(y=-2x^5\) (b) \(y=3^x\) (c) \(y=x^4+1\) (d) \(y=7\).`,
      [S`(a) one term \(ax^n\): power function, degree 5.`, S`(b) variable in the exponent: exponential, not a power function.`, S`(c) two terms: a polynomial of degree 4, but not a power function. (d) \(7=7x^0\): power function, degree 0.`],
      S`(a) and (d) are power functions`],
    ["Even degree, negative a", S`Describe the end behaviour, symmetry, domain and range of \(y=-3x^4\).`,
      [S`Even degree, \(a=-3\lt0\): both ends go down (Q3 → Q4).`, S`\(f(-x)=-3(-x)^4=-3x^4=f(x)\): even, symmetric about the y-axis.`],
      S`\(y\to-\infty\) as \(x\to\pm\infty\); even; domain all reals; range \(y\le0\)`,
      plane({ view: { xmin: -2, xmax: 2, ymin: -10, ymax: 2 }, curves: [{ f: (x) => -3 * x ** 4, color: "red" }], points: [{ x: 1, y: -3, label: "(1, −3)" }, { x: -1, y: -3, label: "(−1, −3)" }], step: { x: 1, y: 2 } })],
    ["Odd degree, positive a", S`Describe \(y=0.5x^5\).`,
      [S`Odd degree, \(a>0\): falls to the left, rises to the right (Q3 → Q1).`, S`\(f(-x)=0.5(-x)^5=-0.5x^5=-f(x)\): odd, symmetric about the origin.`],
      S`as \(x\to-\infty\), \(y\to-\infty\); as \(x\to\infty\), \(y\to\infty\); odd; domain and range all reals`,
      plane({ view: { xmin: -2.2, xmax: 2.2, ymin: -10, ymax: 10 }, curves: [{ f: (x) => 0.5 * x ** 5, color: "green" }], points: [{ x: 1, y: 0.5, label: "(1, 0.5)" }, { x: -1, y: -0.5, label: "(−1, −0.5)" }], step: { x: 1, y: 2 } })],
    ["Comparing powers", S`Compare \(y=x^2\), \(y=x^4\) and \(y=x^6\) at \(x=0.5\) and at \(x=2\).`,
      [S`At \(x=0.5\): \(0.25\), \(0.0625\), \(0.015625\) — higher powers are smaller.`, S`At \(x=2\): \(4\), \(16\), \(64\) — higher powers are much larger.`, S`All three pass through \((-1,1)\), \((0,0)\) and \((1,1)\).`],
      S`higher even powers are flatter near 0 and steeper beyond \(|x|=1\)`,
      plane({ view: { xmin: -2, xmax: 2, ymin: -0.5, ymax: 6 }, curves: [{ f: (x) => x * x, color: "blue" }, { f: (x) => x ** 4, color: "green" }, { f: (x) => x ** 6, color: "red" }], points: [{ x: 1, y: 1, label: "(1, 1)" }, { x: -1, y: 1, label: "(−1, 1)" }], step: { x: 0.5, y: 1 } })],
    ["Polynomial, exponential or sinusoidal?", S`Match each graph's behaviour to \(y=x^3-4x\), \(y=2^x\) or \(y=2\sin x\).`,
      [S`Unbounded at both ends, opposite directions, up to 2 turning points: the cubic.`, S`A horizontal asymptote on one side, always positive: the exponential.`, S`Repeats every \(2\pi\) and stays between \(-2\) and \(2\): the sinusoid.`],
      S`only \(y=x^3-4x\) is a polynomial`,
      plane({ view: { xmin: -3.5, xmax: 3.5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x ** 3 - 4 * x, color: "violet" }, { f: (x) => 2 ** x, color: "red" }, { f: (x) => 2 * Math.sin(x), color: "blue" }], points: [{ x: 2.3, y: 4.9, label: "2ˣ", color: "red" }, { x: -2.7, y: -0.9, label: "2 sin x", color: "blue" }, { x: -2.2, y: -2.3, label: "x³ − 4x", color: "violet" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("degree", S`What is the degree of \(y=-5x^7\)?`, num(7),
      "The exponent of x.", [S`One term, exponent 7.`], S`\(7\)`),
    q("end behaviour", S`Describe the end behaviour of \(y=-x^3\).`, choice(["rises to the left, falls to the right (Q2 → Q4)", "falls to the left, rises to the right (Q3 → Q1)", "down at both ends", "up at both ends"], 0),
      "Odd degree, negative a.", [S`Odd: opposite directions; \(a\lt0\): the right end falls.`], "Q2 → Q4"),
    q("range", S`The range of \(y=2x^6\) is \(y\ge m\). Find \(m\).`, num(0),
      "Even power, positive a.", [S`\(x^6\ge0\), so \(2x^6\ge0\).`], S`\(0\)`),
    q("evaluate", S`For \(f(x)=-x^4\), find \(f(-2)\).`, num(-16),
      "(−2)⁴ = 16.", [S`\(-(16)=-16\); note \(f(-2)=f(2)\): even.`], S`\(-16\)`),
    q("classify", "Which is a power function?", choice([S`\(y=\tfrac12x^3\)`, S`\(y=4^x\)`, S`\(y=x^2+3x\)`, S`\(y=\sin x\)`], 0),
      "One term axⁿ with n a whole number.", [S`\(\tfrac12x^3\) has the form \(ax^n\).`], S`\(y=\tfrac12x^3\)`),
  ]),

  ...hard([
    ["Find a and n", S`A power function \(y=ax^n\) passes through \((2,-24)\) and \((-1,3)\). Find \(a\) and \(n\).`,
      [S`\(a\cdot2^n=-24\) and \(a(-1)^n=3\).`, S`Divide: \(\frac{2^n}{(-1)^n}=(-2)^n=-8\), so \(n=3\).`, S`Then \(a(-1)^3=3\Rightarrow a=-3\). Check: \(-3(8)=-24\) ✓.`],
      S`\(y=-3x^3\)`],
    ["Where one power beats another", S`For which values of \(x\) is \(x^4>x^2\)? Explain with the graphs.`,
      [S`\(x^4-x^2=x^2(x^2-1)\).`, S`\(x^2\ge0\), and \(x^2-1>0\) exactly when \(|x|>1\); at \(x=0\) the difference is 0.`],
      S`\(x\lt-1\) or \(x>1\): beyond \(|x|=1\) the higher power is above`,
      plane({ view: { xmin: -1.8, xmax: 1.8, ymin: -0.3, ymax: 3 }, curves: [{ f: (x) => x * x, color: "blue" }, { f: (x) => x ** 4, color: "red" }], points: [{ x: 1, y: 1, label: "(1, 1)" }, { x: -1, y: 1, label: "(−1, 1)" }], step: { x: 0.5, y: 0.5 } })],
  ], [
    q("hard", S`\(y=ax^n\) passes through \((1,5)\) and \((2,40)\). Find \(n\).`, num(3),
      "Divide the two equations.", [S`\(2^n=\frac{40}{5}=8\).`], S`\(3\)`),
    q("hard", S`For the same function, find \(a\).`, num(5),
      "Use (1, 5).", [S`\(a\cdot1^3=5\).`], S`\(5\)`),
    q("hard", S`How many times do \(y=x^3\) and \(y=x^5\) intersect?`, num(3),
      "Solve x³ = x⁵.", [S`\(x^3(x^2-1)=0\): \(x=0,\pm1\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["Why does only the leading term matter for end behaviour?", "For huge |x|, the highest power grows much faster than all the others, so it outweighs them. For example x⁴ is 10 000 times x² when x = 100."],
      ["How do I remember the four cases?", "Picture y = x² (even, a > 0: both up) and y = x³ (odd, a > 0: down then up). A negative a flips each picture upside down."],
      ["Why are even powers symmetric about the y-axis?", "(−x)ⁿ = xⁿ when n is even, so f(−x) = f(x): the point (−x, y) is on the graph whenever (x, y) is."],
      ["Is every polynomial a power function?", "No. A power function has exactly one term. Polynomials are sums of power functions."],
      ["How can I tell a polynomial graph from an exponential one?", "Polynomials go to ±∞ at both ends; an exponential like 2ˣ approaches a horizontal asymptote on one side."],
    ],
    summary: [
      "Power function: y = axⁿ, n a whole number.",
      "Even n: ends match; odd n: ends opposite; a < 0 flips.",
      "Even: symmetric about the y-axis; odd: about the origin.",
      "Polynomials behave like their leading term at the ends.",
    ],
    next: "1.2 looks at the features of whole polynomial functions: turning points, zeros and finite differences.",
  }),
];
