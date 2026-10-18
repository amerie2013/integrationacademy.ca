// MHF4U 1.7 — Chapter 1 Review (NEW lesson): power functions, characteristics, factored form, transformations,
// average and instantaneous rates of change
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, roots, hard, plane } from "./lib.mjs";

export const TITLE = "1.7 Chapter 1 Review";
export const ID = "6d4f0001-0001-4001-8001-000000000107";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 1 Review — Polynomial Functions",
    overview: S`This page pulls the chapter together before the test: each lesson's key idea on one screen, multi-step examples that combine several skills, mixed practice, a readiness checklist and hard-level problems. Work through it after 1.1–1.6 and return to any lesson where you get stuck.`,
    goals: [
      "recall the key idea and common mistake of each lesson;",
      "analyse a polynomial completely: degree, end behaviour, zeros, orders, intercepts, symmetry;",
      "combine transformations with factored form;",
      "compute and interpret average and instantaneous rates of change;",
      "check your readiness for the chapter test.",
    ],
    curriculum: "C1.1–C1.9, D1.1–D1.9 (whole chapter)",
    prior: [
      [S`End behaviour of \(y=-4x^5\)?`, S`Q2 → Q4.`],
      [S`Behaviour at a zero of order 2?`, S`Bounces.`],
      [S`Average rate of \(x^2\) on \([2,5]\)?`, S`\(7\).`],
    ],
    words: [
      ["Degree and leading coefficient", "decide the end behaviour", ""],
      ["Order of a zero", "cross (1), bounce (even), flatten (3)", ""],
      ["Mapping rule", "\\((x,y)\\to(\\frac xk+d,\\ ay+c)\\)", ""],
      ["Secant / tangent", "average / instantaneous rate", ""],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Example", "Watch out"], [
    ["1.1 Power functions", "parity of n and sign of a give end behaviour", "\\(y=-3x^4\\): down both ends", "\\(3^x\\) is not a power function"],
    ["1.2 Characteristics", "≤ n zeros, ≤ n − 1 turns; nth differences \\(a\\cdot n!\\)", "Δ³ = 12 → a = 2", "equal x-steps"],
    ["1.3 Factored form", "zeros and orders; test values", "\\((x+1)^2(x-2)\\)", "include a in f(0)"],
    ["1.4 Transformations", "\\((x,y)\\to(\\frac xk+d,\\ ay+c)\\)", "\\((2x-6)^3=(2(x-3))^3\\)", "factor k first"],
    ["1.5 Average rate", "\\(\\frac{f(b)-f(a)}{b-a}\\) = secant slope", "x² on [1, 4]: 5", "units; order of subtraction"],
    ["1.6 Instantaneous rate", "secants with h → 0 → tangent slope", "x² at 3: 6", "zero rate ≠ always a max"],
  ])),

  section("📌 Explore", S`<p>Use the explorer to check your sketches in the examples and the hard-level problems.</p>`),

  widget("factoredPoly", { init: { a: -1, zeros: [[-2, 2], [1, 1], [3, 1]] } }),

  section("📌 How to analyse any polynomial", keyIdea(S`(1) Degree and sign of \(a\) → end behaviour. (2) Zeros and their orders → cross, bounce or flatten. (3) y-intercept \(f(0)\). (4) Test values for signs. (5) Check symmetry if the powers are all even or all odd. (6) For a rate: two points → secant (average); shrinking interval → tangent (instantaneous).`)),

  examples([
    ["A full analysis", S`Analyse \(f(x)=-(x+2)^2(x-1)(x-3)\).`,
      [S`Degree 4, \(a=-1\): down at both ends.`, S`Zeros: \(-2\) (order 2, bounce), \(1\) and \(3\) (cross). y-intercept \(-(4)(-1)(-3)=-12\).`, S`Signs: \(x\lt-2\): −; \(-2\lt x\lt1\): −; \(1\lt x\lt3\): +; \(x>3\): −.`],
      S`down both ends; bounce at −2; crosses at 1 and 3; y-intercept −12; positive only on \((1,3)\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -30, ymax: 30 }, curves: [{ f: (x) => -((x + 2) ** 2) * (x - 1) * (x - 3), color: "violet" }], points: [{ x: -2, y: 0, label: "−2", color: "amber" }, { x: 1, y: 0, color: "red" }, { x: 3, y: 0, label: "3", color: "red" }, { x: 0, y: -12, label: "(0, −12)", color: "blue" }], step: { x: 1, y: 10 } })],
    ["Degree and equation from a table", S`A polynomial has values \(-6, 0, 0, 0, 6\) at \(x=0,1,2,3,4\). Find its degree and equation.`,
      [S`First differences \(6,0,0,6\); second \(-6,0,6\); third \(6,6\): constant, so degree 3 with \(6a=6\Rightarrow a=1\).`, S`Zeros at \(1\), \(2\), \(3\): \(f(x)=(x-1)(x-2)(x-3)\).`, S`Check: \(f(0)=(-1)(-2)(-3)=-6\) ✓ and \(f(4)=(3)(2)(1)=6\) ✓.`],
      S`degree 3; \(f(x)=(x-1)(x-2)(x-3)\)`,
      plane({ view: { xmin: -0.5, xmax: 4.5, ymin: -7, ymax: 7 }, curves: [{ f: (x) => (x - 1) * (x - 2) * (x - 3), color: "violet" }], points: [[0, -6], [1, 0], [2, 0], [3, 0], [4, 6]].map(([x, y]) => ({ x, y, color: "red" })), step: { x: 1, y: 1 } })],
    ["Transform, then find zeros", S`\(g(x)=-2(x-1)^4+32\). Find the vertex, range and x-intercepts.`,
      [S`Vertex \((1,32)\), \(a\lt0\): range \(y\le32\).`, S`\(-2(x-1)^4+32=0\Rightarrow(x-1)^4=16\Rightarrow x-1=\pm2\).`],
      S`vertex \((1,32)\); range \(y\le32\); x-intercepts \(-1\) and \(3\)`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -10, ymax: 36 }, curves: [{ f: (x) => -2 * (x - 1) ** 4 + 32, color: "violet" }], points: [{ x: 1, y: 32, label: "(1, 32)", color: "blue" }, { x: -1, y: 0, label: "−1", color: "red" }, { x: 3, y: 0, label: "3", color: "red" }], step: { x: 1, y: 4 } })],
    ["Average and instantaneous", S`A tank drains so that \(V(t)=2(10-t)^2\) litres after \(t\) min (\(0\le t\le10\)). Find the average drain rate over the first 5 min and the instantaneous rate at \(t=5\).`,
      [S`\(V(0)=200\), \(V(5)=50\): average \(\frac{50-200}{5}=-30\) L/min.`, S`At \(t=5\), centred \(h=0.01\): \(\frac{V(5.01)-V(4.99)}{0.02}=\frac{49.8002-50.2002}{0.02}=-20\).`],
      S`average \(-30\) L/min; instantaneous \(-20\) L/min (draining slows down)`,
      plane({ view: { xmin: -0.5, xmax: 10.5, ymin: -10, ymax: 210 }, curves: [{ f: (t) => 2 * (10 - t) ** 2, a: 0, b: 10, color: "blue" }], lines: [{ m: -30, b: 200, color: "amber", label: "secant" }, { m: -20, b: 150, color: "green", label: "tangent" }], points: [{ x: 0, y: 200, label: "(0, 200)" }, { x: 5, y: 50, label: "(5, 50)" }], xlabel: "t (min)", ylabel: "V (L)", step: { x: 1, y: 20 } })],
    ["Even or odd from a graph", S`A polynomial is symmetric about the origin, has degree 3, passes through \((1,-3)\) and has zeros at \(0\) and \(\pm2\). Find its equation.`,
      [S`\(f(x)=ax(x-2)(x+2)\) (odd, as required).`, S`\(f(1)=a(1)(-1)(3)=-3a=-3\Rightarrow a=1\).`],
      S`\(f(x)=x(x-2)(x+2)=x^3-4x\)`],
  ]),

  practice([
    q("end behaviour", S`Which describes \(y=-2x^6+x^3\)?`, choice(["down at both ends", "up at both ends", "Q3 → Q1", "Q2 → Q4"], 0),
      "Leading term −2x⁶.", ["Even degree, a < 0."], "down at both ends"),
    q("differences", S`A cubic has third differences \(-18\) (x-step 1). Find \(a\).`, num(-3),
      "6a.", [S`\(-18\div6\).`], S`\(-3\)`),
    q("zeros", S`Find the zeros of \(f(x)=x(x-3)^2(x+4)\).`, roots(0, 3, -4),
      "Each factor.", [S`\(x=0\), \(x=3\), \(x=-4\).`], S`\(0, 3, -4\)`),
    q("transform", S`Under \(y=(3(x+1))^3-2\), what is the x-coordinate of the image of \((3,27)\)?`, num(0),
      "x/k + d.", [S`\(\frac33-1=0\).`], S`\(0\)`),
    q("average rate", S`Find the average rate of change of \(f(x)=x^3-x\) on \([0,2]\).`, num(3),
      "(f(2) − f(0)) ÷ 2.", [S`\(\frac{6-0}{2}=3\).`], S`\(3\)`),
  ]),

  section("📌 Am I ready for the test?", S`<ul style="list-style:none;padding-left:0;">
    ${[
      ["1.1", "I can describe end behaviour, symmetry, domain and range of power functions."],
      ["1.2", "I can use degree, turning points, zeros and finite differences to describe a polynomial."],
      ["1.3", "I can sketch from factored form and write equations from zeros and a point."],
      ["1.4", "I can apply y = a(k(x − d))ⁿ + c to x³ and x⁴."],
      ["1.5", "I can compute and interpret average rates of change."],
      ["1.6", "I can estimate instantaneous rates of change with secants and tangents."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  ...hard([
    ["A family that fits", S`Find the equation of the quartic with zeros \(-1\) (order 2) and \(2\) (order 2) whose y-intercept is \(-8\). Is there one with y-intercept \(+8\) and the same orders? Explain.`,
      [S`\(f(x)=a(x+1)^2(x-2)^2\); \(f(0)=a(1)(4)=4a=-8\Rightarrow a=-2\).`, S`For \(+8\): \(a=2\), which also works — it is the reflection in the x-axis.`],
      S`\(f(x)=-2(x+1)^2(x-2)^2\); yes, \(f(x)=2(x+1)^2(x-2)^2\)`,
      plane({ view: { xmin: -2.5, xmax: 3.5, ymin: -14, ymax: 14 }, curves: [{ f: (x) => -2 * (x + 1) ** 2 * (x - 2) ** 2, color: "red" }, { f: (x) => 2 * (x + 1) ** 2 * (x - 2) ** 2, color: "blue" }], points: [{ x: 0, y: -8, label: "(0, −8)" }, { x: 0, y: 8, label: "(0, 8)" }], step: { x: 1, y: 2 } })],
    ["When is the rate zero?", S`For \(h(t)=-5t^2+30t+2\), find the time when the instantaneous rate of change is 0, and explain its meaning.`,
      [S`The average rate on \([a,a+h]\) is \(-10a-5h+30\), which approaches \(-10a+30\) as \(h\to0\).`, S`\(-10a+30=0\Rightarrow a=3\). At \(t=3\), \(h=47\).`],
      S`at \(t=3\) s: the ball is at its highest point, 47 m`],
  ], [
    q("hard", S`A cubic has zeros \(-2\), \(1\), \(4\) and passes through \((2,-16)\). Find \(a\).`, num(2),
      "y = a(x + 2)(x − 1)(x − 4).", [S`\(a(4)(1)(-2)=-8a=-16\).`], S`\(2\)`),
    q("hard", S`Find the instantaneous rate of change of \(f(x)=2x^2-3x\) at \(x=1\).`, num(1, 0.01),
      "Rate at a is 4a − 3.", [S`\(4(1)-3=1\).`], S`\(1\)`),
    q("hard", S`How many turning points can \(f(x)=x^4-2x^2\) have, and how many does it have?`, num(3),
      "Factor: x²(x² − 2); sketch.", [S`Degree 4 allows 3; it has a local max at 0 and minima at \(\pm1\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["How should I study for this test?", "Do the mixed practice and the hard level without notes. For each mistake, return to that lesson's explorer and practice set, then try the hard part of the worksheet."],
      ["What are the most common mistakes?", "Reading (x + 2) as a zero of 2, forgetting a in the y-intercept, reading d before factoring k, and subtracting in different orders in a rate."],
      ["How much work should I show?", "State degree and leading coefficient, list zeros with orders, show test values, and write rates with units."],
      ["What is the fastest way to sketch?", "Ends first, then zeros with their behaviour, then the y-intercept; join smoothly."],
      ["How does this lead to Chapter 2?", "Chapter 2 finds the zeros of polynomials that are not yet factored, using division and the factor theorem, and solves polynomial inequalities."],
    ],
    summary: [
      "End behaviour from the leading term.",
      "Zeros and orders from factored form.",
      "(x, y) → (x/k + d, ay + c).",
      "Secant = average rate; tangent = instantaneous rate.",
    ],
    next: "Write the Chapter 1 test. Chapter 2 solves polynomial equations and inequalities.",
  }),
];
