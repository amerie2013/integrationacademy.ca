// MHF4U 2.4 — Families of Polynomial Functions (NEW): y = k(x − r₁)(x − r₂)…, choosing k from a point, zeros with
// orders, irrational zeros as quadratic factors, and equations from graphs
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane } from "./lib.mjs";

export const TITLE = "2.4 Families of Polynomial Functions";
export const ID = "6d4f0002-0001-4001-8001-000000000204";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "👪",
    title: "Families of Polynomial Functions",
    overview: S`Polynomials that share the same zeros form a <strong>family</strong>: \(y=k(x-r_1)(x-r_2)(x-r_3)\) gives a different curve for every \(k\ne0\), but all of them cross the x-axis at the same places. The value of \(k\) stretches the graph and decides its direction. To pick one member of the family, you need one more piece of information — usually a point the graph passes through.`,
    goals: [
      "write the equation of a family of polynomials from its zeros;",
      "find the member of a family that passes through a given point;",
      "include zeros of higher order;",
      "turn irrational zeros \\(a\\pm\\sqrt b\\) into a quadratic factor;",
      "determine an equation from a graph.",
    ],
    curriculum: "C1.7 (determine an equation of a polynomial function given its zeros and a point, recognizing that it belongs to a family), C1.8 (determine the equation of a family of polynomial functions with given zeros)",
    prior: [
      [S`Zeros of \((x+2)(x-5)\)?`, S`\(-2\) and \(5\).`],
      [S`Expand \((x-(1+\sqrt3))(x-(1-\sqrt3))\).`, S`\((x-1)^2-3=x^2-2x-2\).`],
      [S`What does \(k=-2\) do to \(y=x^2\)?`, S`Stretches by 2 and reflects in the x-axis.`],
    ],
    words: [
      ["Family of functions", "functions sharing a feature, here the same zeros", ""],
      ["Parameter k", "the stretch/reflection that changes within the family", ""],
      ["Member", "one function of the family, fixed by a value of k", ""],
      ["Conjugate zeros", "\\(a+\\sqrt b\\) and \\(a-\\sqrt b\\), always together for integer coefficients", ""],
    ],
  }),

  section("📌 One set of zeros, many curves", S`
  ${plane({ view: { xmin: -3, xmax: 4.5, ymin: -16, ymax: 16 }, curves: [{ f: (x) => (x + 1) * (x - 1) * (x - 3), color: "blue" }, { f: (x) => 2 * (x + 1) * (x - 1) * (x - 3), color: "violet" }, { f: (x) => -0.5 * (x + 1) * (x - 1) * (x - 3), color: "red" }, { f: (x) => -2 * (x + 1) * (x - 1) * (x - 3), color: "amber" }], points: [{ x: -1, y: 0, color: "green" }, { x: 1, y: 0, color: "green" }, { x: 3, y: 0, color: "green" }], step: { x: 1, y: 4 } }, "y = k(x + 1)(x − 1)(x − 3) for k = 1 (blue), 2 (violet), −½ (red), −2 (amber).")}
  ${table(["Information", "Equation form", "Unknowns left"], [
    ["zeros \\(r_1, r_2, r_3\\)", "\\(y=k(x-r_1)(x-r_2)(x-r_3)\\)", "k"],
    ["a zero of order 2 at r", "include \\((x-r)^2\\)", "k"],
    ["zeros \\(a\\pm\\sqrt b\\)", "include \\((x-a)^2-b\\)", "k"],
    ["one more point (x₀, y₀)", "substitute, solve for k", "none: one member"],
  ])}
  ${keyIdea(S`Zeros fix the family; one extra point fixes the member. Substitute the point, solve for \(k\), and write the final equation with \(k\) in place.`)}`),

  section("📌 Explore", S`<p>Move the three zeros: every gray curve keeps them. Switch to "pass through a point" and drag the point — the explorer solves for \(k\).</p>`),

  widget("polyFamily", { init: { zeros: [-3, 1, 2], k: 0.5 } }),

  section("📌 Irrational zeros and orders", S`
  <p>If \(2+\sqrt5\) is a zero of a polynomial with integer coefficients, so is \(2-\sqrt5\). Together they give the factor \((x-2)^2-5=x^2-4x-1\). A zero of order 2 contributes its factor twice.</p>
  ${watchOut([
    "A zero at −4 gives (x + 4).",
    "k multiplies the whole product — expand only after k is found (or not at all).",
    "A point ON the x-axis at a zero can't determine k: every member passes through it.",
    "Count the degree: the orders add up to it.",
    "Irrational zeros come in conjugate pairs; write their product, not two messy factors.",
  ])}`),

  examples([
    ["Write a family", S`Write the family of cubics with zeros \(-1\), \(2\) and \(4\), and give two members.`,
      [S`\(y=k(x+1)(x-2)(x-4)\), \(k\ne0\).`, S`\(k=2\): \(y=2(x+1)(x-2)(x-4)\); \(k=-1\): \(y=-(x+1)(x-2)(x-4)\).`],
      S`\(y=k(x+1)(x-2)(x-4)\)`,
      plane({ view: { xmin: -2, xmax: 5, ymin: -20, ymax: 20 }, curves: [{ f: (x) => 2 * (x + 1) * (x - 2) * (x - 4), color: "violet" }, { f: (x) => -(x + 1) * (x - 2) * (x - 4), color: "red" }], points: [{ x: -1, y: 0, color: "green" }, { x: 2, y: 0, color: "green" }, { x: 4, y: 0, color: "green" }], step: { x: 1, y: 4 } })],
    ["The member through a point", S`Find the member of \(y=k(x+1)(x-2)(x-4)\) that passes through \((1,12)\).`,
      [S`\(12=k(2)(-1)(-3)=6k\Rightarrow k=2\).`],
      S`\(y=2(x+1)(x-2)(x-4)\)`],
    ["Irrational zeros and a double zero", S`A quartic has zeros \(\pm\sqrt3\) and a double zero at \(1\), and its y-intercept is \(-6\). Find its equation.`,
      [S`\((x-\sqrt3)(x+\sqrt3)=x^2-3\): \(y=k(x^2-3)(x-1)^2\).`, S`\(f(0)=k(-3)(1)=-3k=-6\Rightarrow k=2\).`],
      S`\(y=2(x^2-3)(x-1)^2\)`,
      plane({ view: { xmin: -2.5, xmax: 2.5, ymin: -8, ymax: 6 }, curves: [{ f: (x) => 2 * (x * x - 3) * (x - 1) ** 2, color: "violet" }], points: [{ x: -Math.sqrt(3), y: 0, label: "−√3", color: "green" }, { x: 1, y: 0, label: "1", color: "amber" }, { x: Math.sqrt(3), y: 0, label: "√3", color: "green" }, { x: 0, y: -6, label: "(0, −6)", color: "blue" }], step: { x: 0.5, y: 2 } })],
    ["From a graph", S`The cubic shown crosses the x-axis at \(-3\), touches it at \(1\), and has y-intercept \(-6\). Find its equation.`,
      [S`Crossing at \(-3\) (order 1), touching at \(1\) (order 2): \(y=k(x+3)(x-1)^2\).`, S`\(f(0)=k(3)(1)=3k=-6\Rightarrow k=-2\).`],
      S`\(y=-2(x+3)(x-1)^2\)`,
      plane({ view: { xmin: -4, xmax: 2.5, ymin: -14, ymax: 14 }, curves: [{ f: (x) => -2 * (x + 3) * (x - 1) ** 2, color: "violet" }], points: [{ x: -3, y: 0, label: "−3", color: "green" }, { x: 1, y: 0, label: "1", color: "amber" }, { x: 0, y: -6, label: "(0, −6)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["Conjugate zeros 2 ± √5", S`A cubic has zeros \(-1\) and \(2\pm\sqrt5\) and passes through \((1,8)\). Find its equation.`,
      [S`\((x-2)^2-5=x^2-4x-1\): \(y=k(x+1)(x^2-4x-1)\).`, S`At \(x=1\): \(k(2)(-4)=-8k=8\Rightarrow k=-1\).`],
      S`\(y=-(x+1)(x^2-4x-1)\)`,
      plane({ view: { xmin: -2, xmax: 5, ymin: -12, ymax: 12 }, curves: [{ f: (x) => -(x + 1) * (x * x - 4 * x - 1), color: "violet" }], points: [{ x: -1, y: 0, color: "green" }, { x: 2 - Math.sqrt(5), y: 0, color: "green" }, { x: 2 + Math.sqrt(5), y: 0, color: "green" }, { x: 1, y: 8, label: "(1, 8)", color: "blue" }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("find k", S`\(y=k(x-1)(x+2)(x-3)\) passes through \((2,8)\). Find \(k\).`, num(-2),
      "Substitute x = 2, y = 8.", [S`\(k(1)(4)(-1)=-4k=8\).`], S`\(-2\)`),
    q("y-intercept", S`Find the y-intercept of \(y=3(x+1)(x-2)(x+4)\).`, num(-24),
      "Substitute x = 0.", [S`\(3(1)(-2)(4)\).`], S`\(-24\)`),
    q("membership", S`Which function is NOT in the family \(y=k(x-1)(x+3)\)?`, choice([S`\(y=2x^2+4x-6\)`, S`\(y=-x^2-2x+3\)`, S`\(y=x^2-2x-3\)`, S`\(y=0.5x^2+x-1.5\)`], 2),
      "Factor each one.", [S`\(x^2-2x-3=(x-3)(x+1)\): different zeros.`], S`\(y=x^2-2x-3\)`),
    q("conjugates", S`Write the quadratic factor with zeros \(1\pm\sqrt2\).`, expr("x^2-2x-1"),
      "(x − 1)² − 2.", [S`\(x^2-2x+1-2\).`], S`\(x^2-2x-1\)`),
    q("find k", S`The quartic \(y=k(x^2-4)(x^2-1)\) has y-intercept \(8\). Find \(k\).`, num(2),
      "f(0) = 4k.", [S`\(k(-4)(-1)=4k=8\).`], S`\(2\)`),
  ]),

  ...hard([
    ["A quartic with conjugate zeros", S`Write the family of quartics with a double zero at \(-1\) and zeros \(2\pm\sqrt3\). Find the member that passes through \((1,-8)\).`,
      [S`\((x-2)^2-3=x^2-4x+1\): \(y=k(x+1)^2(x^2-4x+1)\).`, S`At \(x=1\): \(k(4)(1-4+1)=-8k=-8\Rightarrow k=1\).`],
      S`\(y=(x+1)^2(x^2-4x+1)\)`,
      plane({ view: { xmin: -2, xmax: 4.5, ymin: -20, ymax: 10 }, curves: [{ f: (x) => (x + 1) ** 2 * (x * x - 4 * x + 1), color: "violet" }], points: [{ x: -1, y: 0, label: "−1", color: "amber" }, { x: 2 - Math.sqrt(3), y: 0, color: "green" }, { x: 2 + Math.sqrt(3), y: 0, color: "green" }, { x: 1, y: -8, label: "(1, −8)", color: "blue" }], step: { x: 1, y: 5 } })],
    ["Same member or not?", S`In the family \(y=k(x+1)(x-1)(x-3)\), one member passes through \((0,6)\) and another through \((2,-6)\). Are they different functions?`,
      [S`\((0,6)\): \(k(1)(-1)(-3)=3k=6\Rightarrow k=2\).`, S`\((2,-6)\): \(k(3)(1)(-1)=-3k=-6\Rightarrow k=2\).`, S`Both give \(k=2\): the same function passes through both points.`],
      S`no — both are \(y=2(x+1)(x-1)(x-3)\)`],
  ], [
    q("hard", S`\(y=k(x-2)^2(x+1)\) passes through \((1,-4)\). Find \(k\).`, num(-2),
      "Substitute.", [S`\(k(1)(2)=2k=-4\).`], S`\(-2\)`),
    q("hard", S`The member of \(y=k(x^2-5)(x+1)(x-2)\) through \((1,8)\) has what y-intercept?`, num(10),
      "Find k first.", [S`\(k(-4)(2)(-1)=8k=8\Rightarrow k=1\); \(f(0)=(-5)(1)(-2)=10\).`], S`\(10\)`),
    q("hard", S`Find the sum of the zeros of \(y=2(x^2-6x+7)(x+4)\).`, num(2),
      "The quadratic's zeros are 3 ± √2.", [S`\((3+\sqrt2)+(3-\sqrt2)+(-4)=2\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Why isn't one set of zeros enough?", "Multiplying by any k ≠ 0 keeps every zero, so infinitely many polynomials share them."],
      ["Which point should I use to find k?", "Any point on the graph that is not a zero — the y-intercept is often easiest."],
      ["Why do irrational zeros come in pairs?", "For integer coefficients, the quadratic formula produces a ± √b together; their product is a quadratic with integer coefficients."],
      ["Can a family include different degrees?", "Not as written: the family fixes the factors, so the degree is fixed. Changing an order changes the family."],
      ["How do I read orders from a graph?", "Crossing like a line: order 1; touching: even order; crossing with a flat bend: odd order ≥ 3."],
    ],
    summary: [
      "y = k(x − r₁)(x − r₂)…: same zeros, any k ≠ 0.",
      "A point (not a zero) determines k.",
      "a ± √b → (x − a)² − b.",
      "Orders from the graph: cross, touch, flatten.",
    ],
    next: "2.5 reads polynomial inequalities from graphs.",
  }),
];
