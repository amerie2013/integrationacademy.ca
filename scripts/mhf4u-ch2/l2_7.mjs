// MHF4U 2.7 — Chapter 2 Review (NEW lesson): division and the remainder theorem, the factor theorem, polynomial
// equations, families of polynomials, and polynomial inequalities (graphical and algebraic)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, roots, hard, plane } from "./lib.mjs";

export const TITLE = "2.7 Chapter 2 Review";
export const ID = "6d4f0002-0001-4001-8001-000000000207";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 2 Review — Polynomial Equations and Inequalities",
    overview: S`This page pulls the chapter together before the test: each lesson's key idea on one screen, multi-step examples that combine several skills, mixed practice, a readiness checklist and a hard level. Work the examples before reading the solutions, and use the explorer to check your sign charts.`,
    goals: [
      "recall the key idea and common mistake of each lesson;",
      "divide polynomials and use the remainder and factor theorems;",
      "solve polynomial equations by factoring;",
      "write equations of families of polynomials and pick a member;",
      "solve polynomial inequalities graphically and algebraically.",
    ],
    curriculum: "C1.7, C1.8, C3.1–C3.7, C4.1–C4.3 (whole chapter)",
    prior: [
      [S`Remainder of \(x^3+1\) divided by \(x-2\)?`, S`\(9\).`],
      [S`Is \(x+1\) a factor of \(x^3+1\)?`, S`Yes: \((-1)^3+1=0\).`],
      [S`Solve \(x(x-3)\lt0\).`, S`\(0\lt x\lt3\).`],
    ],
    words: [
      ["Remainder theorem", "remainder of \\(P\\div(x-b)\\) is \\(P(b)\\)", ""],
      ["Factor theorem", "\\(x-b\\) is a factor ⇔ \\(P(b)=0\\)", ""],
      ["Family", "\\(y=k(x-r_1)\\cdots\\), one k per member", ""],
      ["Sign chart", "signs of factors on intervals between zeros", ""],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Example", "Watch out"], [
    ["2.1 Division", "P = DQ + R; remainder P(b)", "\\(x^3+1\\div(x-2)\\): R = 9", "zero placeholders; x + 3 → b = −3"],
    ["2.2 Factor theorem", "P(b) = 0 ⇔ (x − b) is a factor", "candidates ±p/q", "zero 3/2 → (2x − 3)"],
    ["2.3 Equations", "factor completely, each factor = 0", "\\(8x^3-27=0\\to x=\\tfrac32\\)", "never divide by x"],
    ["2.4 Families", "zeros + one point → k", "k(x + 1)(x − 2) through (0, 4): k = −2", "a point at a zero can't fix k"],
    ["2.5 Graphical", "above / below the axis or the other graph", "\\(x^3\\ge4x\\)", "( ) at ±∞"],
    ["2.6 Algebraic", "sign chart between critical values", "\\((x-1)^2(x+4)>0\\)", "even order: no sign change"],
  ])),

  section("📌 Explore", S`<p>Use the sign-chart explorer to check the inequality examples and the hard level.</p>`),

  widget("signChart", { init: { a: 1, zeros: [[-4, 1], [-2, 1], [1, 1]], op: "≥" } }),

  section("📌 The big picture", keyIdea(S`Division and the factor theorem turn a polynomial into factors; factors give the zeros; zeros (with their orders) give the graph and the sign chart; the sign chart solves inequalities; and zeros plus one point give the equation of a polynomial.`)),

  examples([
    ["Divide and interpret", S`Divide \(3x^3-5x^2+2x-8\) by \(x-2\). What does the remainder tell you?`,
      [S`Synthetic division with 2: \(3;\ 3\cdot2-5=1;\ 1\cdot2+2=4;\ 4\cdot2-8=0\).`, S`Quotient \(3x^2+x+4\), remainder 0.`],
      S`\(3x^3-5x^2+2x-8=(x-2)(3x^2+x+4)\): \(x-2\) is a factor and \(x=2\) is a zero`,
      plane({ view: { xmin: -1.5, xmax: 3, ymin: -16, ymax: 10 }, curves: [{ f: (x) => 3 * x ** 3 - 5 * x * x + 2 * x - 8, color: "violet" }], points: [{ x: 2, y: 0, label: "(2, 0)", color: "red" }], step: { x: 0.5, y: 2 } })],
    ["Factor fully", S`Factor \(x^3+4x^2+x-6\).`,
      [S`\(P(1)=1+4+1-6=0\). Divide: \(x^2+5x+6=(x+2)(x+3)\).`],
      S`\((x-1)(x+2)(x+3)\)`,
      plane({ view: { xmin: -4, xmax: 2, ymin: -8, ymax: 6 }, curves: [{ f: (x) => x ** 3 + 4 * x * x + x - 6, color: "violet" }], points: [{ x: -3, y: 0, label: "−3", color: "red" }, { x: -2, y: 0, label: "−2", color: "red" }, { x: 1, y: 0, label: "1", color: "red" }], step: { x: 1, y: 2 } })],
    ["Solve with irrational roots", S`Solve \(x^3-5x^2+3x+1=0\).`,
      [S`\(P(1)=1-5+3+1=0\). Divide: \(x^2-4x-1\).`, S`\(x=\dfrac{4\pm\sqrt{16+4}}{2}=2\pm\sqrt5\).`],
      S`\(x=1\), \(2+\sqrt5\approx4.24\), \(2-\sqrt5\approx-0.24\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -10, ymax: 6 }, curves: [{ f: (x) => x ** 3 - 5 * x * x + 3 * x + 1, color: "violet" }], points: [{ x: 2 - Math.sqrt(5), y: 0, color: "red" }, { x: 1, y: 0, color: "red" }, { x: 2 + Math.sqrt(5), y: 0, color: "red" }], step: { x: 1, y: 2 } })],
    ["Pick a member", S`A cubic has zeros \(0\), \(2\) and \(-3\) and passes through \((1,-8)\). Find its equation.`,
      [S`\(y=kx(x-2)(x+3)\).`, S`\(k(1)(-1)(4)=-4k=-8\Rightarrow k=2\).`],
      S`\(y=2x(x-2)(x+3)\)`],
    ["Solve an inequality", S`Solve \(x^3-2x^2-3x\ge0\).`,
      [S`\(x(x-3)(x+1)\ge0\); critical values \(-1, 0, 3\).`, S`Signs: −, +, −, +; include the zeros.`],
      S`\(x\in[-1,0]\cup[3,\infty)\)`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -8, ymax: 8 }, curves: [{ f: (x) => x ** 3 - 2 * x * x - 3 * x, color: "violet" }], points: [{ x: -1, y: 0, label: "−1", color: "red" }, { x: 0, y: 0, label: "0", color: "red" }, { x: 3, y: 0, label: "3", color: "red" }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("remainder", S`Find the remainder when \(x^3-2x+5\) is divided by \(x+2\).`, num(1),
      "Evaluate at −2.", [S`\(-8+4+5=1\).`], S`\(1\)`),
    q("factor theorem", S`Find \(k\) so that \(x-3\) is a factor of \(x^3-2x^2+kx-6\).`, num(-1),
      "P(3) = 0.", [S`\(27-18+3k-6=0\Rightarrow3k=-3\).`], S`\(-1\)`),
    q("solve", S`Solve \(x^3-x^2-4x+4=0\).`, roots(1, 2, -2),
      "Group.", [S`\(x^2(x-1)-4(x-1)=(x-1)(x-2)(x+2)\).`], S`\(1, \pm2\)`),
    q("family", S`\(y=k(x-1)(x+2)(x-3)\) passes through \((0,12)\). Find \(k\).`, num(2),
      "Substitute x = 0.", [S`\(k(-1)(2)(-3)=6k=12\).`], S`\(2\)`),
    q("inequality", S`Solve \((x+4)(x-1)^2\lt0\).`, choice([S`\(x\lt-4\)`, S`\(-4\lt x\lt1\)`, S`\(x>1\)`, S`\(x\lt1\)`], 0),
      "The squared factor never changes the sign.", [S`The sign is that of \(x+4\), and the product is 0 at \(x=1\).`], S`\(x\lt-4\)`),
  ]),

  section("📌 Am I ready for the test?", S`<ul style="list-style:none;padding-left:0;">
    ${[
      ["2.1", "I can divide by long and synthetic division and use the remainder theorem."],
      ["2.2", "I can factor cubics and quartics with the factor theorem and grouping."],
      ["2.3", "I can solve polynomial equations, including cubes and quadratic-in-form equations."],
      ["2.4", "I can write a family of polynomials and find the member through a point."],
      ["2.5", "I can read the solution of an inequality from a graph."],
      ["2.6", "I can solve factorable inequalities with a sign chart."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  ...hard([
    ["Two factors, then an inequality", S`Find \(a\) and \(b\) so that \(P(x)=x^3+ax^2+bx-8\) is divisible by both \(x-1\) and \(x+2\). Then solve \(P(x)\ge0\).`,
      [S`\(P(1)=1+a+b-8=0\Rightarrow a+b=7\). \(P(-2)=-8+4a-2b-8=0\Rightarrow2a-b=8\).`, S`Add: \(3a=15\Rightarrow a=5\), \(b=2\). \(P(x)=x^3+5x^2+2x-8=(x-1)(x+2)(x+4)\).`, S`Signs: −, +, −, +: \(P(x)\ge0\) on \([-4,-2]\cup[1,\infty)\).`],
      S`\(a=5\), \(b=2\); \(x\in[-4,-2]\cup[1,\infty)\)`,
      plane({ view: { xmin: -5, xmax: 2, ymin: -12, ymax: 10 }, curves: [{ f: (x) => x ** 3 + 5 * x * x + 2 * x - 8, color: "violet" }], points: [{ x: -4, y: 0, label: "−4", color: "red" }, { x: -2, y: 0, label: "−2", color: "red" }, { x: 1, y: 0, label: "1", color: "red" }], step: { x: 1, y: 2 } })],
    ["Enough volume", S`An open box is made from a 30 cm by 20 cm sheet by cutting squares of side \(x\) from the corners. For which \(x\) is the volume at least 1000 cm³?`,
      [S`\(V=x(30-2x)(20-2x)=4x(15-x)(10-x)\ge1000\Rightarrow x^3-25x^2+150x-250\ge0\).`, S`\(x=5\) works: \((x-5)(x^2-20x+50)\ge0\); \(x=10\pm\sqrt{50}\approx2.93\) or \(17.07\).`, S`Domain \(0\lt x\lt10\): signs on \((0,2.93)\): −, \((2.93,5)\): +, \((5,10)\): −.`],
      S`\(10-\sqrt{50}\le x\le5\), about \(2.93\le x\le5\)`],
  ], [
    q("hard", S`Find the remainder when \(x^{100}-1\) is divided by \(x+1\).`, num(0),
      "Evaluate at −1.", [S`\((-1)^{100}-1=0\).`], S`\(0\)`),
    q("hard", S`Find the real root of \(x^3+8=0\).`, roots(-2),
      "Sum of cubes.", [S`\((x+2)(x^2-2x+4)=0\).`], S`\(-2\)`),
    q("hard", S`How many integers satisfy \((x-2)^2(x+1)(x-4)\lt0\)?`, num(3),
      "Solve, then exclude the double zero.", [S`\(-1\lt x\lt4\), \(x\ne2\): \(0, 1, 3\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["How should I study for this test?", "Do the mixed practice and the hard level without notes. For each mistake, return to that lesson's explorer and practice set."],
      ["What are the most common mistakes?", "Using b = 3 for x + 3, forgetting zero placeholders, dividing both sides of an inequality by x, and getting brackets wrong at included endpoints."],
      ["How much work should I show?", "Show the synthetic division or the evaluation P(b), the full factorization, the critical values and a sign chart or test values."],
      ["What is the fastest way to solve an inequality?", "Factor, mark the zeros, use the end behaviour to get the sign on the far right, then move left, changing sign at odd-order zeros."],
      ["How does this lead to Chapter 3?", "Chapter 3 divides by polynomials in a new way: rational functions, where zeros of the denominator create asymptotes."],
    ],
    summary: [
      "Remainder P(b); factor if P(b) = 0.",
      "Factor completely to solve P(x) = 0.",
      "y = k(x − r₁)…: zeros plus one point.",
      "Sign charts solve inequalities.",
    ],
    next: "Write the Chapter 2 test. Chapter 3 studies rational functions.",
  }),
];
