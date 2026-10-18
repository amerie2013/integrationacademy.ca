// MHF4U 1.3 — Equations and Graphs of Polynomial Functions: factored form, zeros and their order (multiplicity),
// sign intervals with test values, sketching, and writing equations from graphs and conditions
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, roots, hard, plane } from "./lib.mjs";

export const TITLE = "1.3 Equations and Graphs of Polynomial Functions";
export const ID = "2234f991-8cf9-4103-924f-cd7a66c8c568";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Equations and Graphs of Polynomial Functions",
    overview: S`When a polynomial is in factored form, its graph can be sketched almost instantly. Each factor \((x-r)\) gives a zero at \(x=r\); the power of the factor (its <strong>order</strong> or multiplicity) tells you whether the graph crosses, bounces, or flattens there; the leading coefficient and degree give the end behaviour; and test values show where the function is positive or negative. In this lesson you will sketch from factored form and work the other way: write an equation from a graph or from a list of conditions.`,
    goals: [
      "find the zeros and their orders from factored form;",
      "describe the graph's behaviour at a zero of order 1, 2 and 3;",
      "find intervals where the function is positive or negative using test values;",
      "sketch a polynomial function from its factored form;",
      "write an equation from zeros, their orders and one more point.",
    ],
    curriculum: "C1.5, C1.7 (connect factored form to x-intercepts and sketch using key features and test values; determine an equation from given conditions, recognizing that more than one polynomial may fit)",
    prior: [
      [S`Solve \((x-4)(x+1)=0\).`, S`\(x=4\) or \(x=-1\).`],
      [S`End behaviour of a degree-4 polynomial with \(a\lt0\)?`, S`Down at both ends.`],
      [S`Expand \((x-2)^2\).`, S`\(x^2-4x+4\).`],
    ],
    words: [
      ["Zero", "a value of \\(x\\) where \\(f(x)=0\\)", ""],
      ["Order (multiplicity)", "the power of a repeated factor", "\\((x-1)^3\\): order 3"],
      ["Test value", "an x-value used to find the sign between zeros", ""],
      ["Interval", "a range of x-values between zeros", ""],
    ],
  }),

  section("📌 Behaviour at a zero", S`
  ${plane({ view: { xmin: -4, xmax: 5, ymin: -10, ymax: 10 }, curves: [{ f: (x) => 0.5 * (x + 2) * (x - 1) ** 2 * (x - 3) ** 3 / 4, color: "violet" }], points: [{ x: -2, y: 0, label: "order 1: crosses", color: "red" }, { x: 1, y: 0, label: "order 2: bounces", color: "amber" }, { x: 3, y: 0, label: "order 3: flattens", color: "green" }], step: { x: 1, y: 2 } }, "One graph, three behaviours: y = ⅛(x + 2)(x − 1)²(x − 3)³.")}
  ${table(["Order of the zero", "What the graph does", "Shape near the zero"], [
    ["1", "crosses the x-axis", "like a line"],
    ["2 (any even)", "touches and turns back", "like a parabola"],
    ["3 (odd, > 1)", "crosses with a flat bend", "like y = x³"],
  ])}
  ${keyIdea(S`To sketch from factored form: (1) zeros and orders; (2) degree = sum of the orders, and the sign of \(a\) → end behaviour; (3) y-intercept \(f(0)\); (4) signs between zeros (test values, or use: the sign changes at odd-order zeros and stays the same at even-order zeros); (5) join smoothly.`)}`),

  section("📌 Explore", S`<p>Move the zeros, change their orders and the leading coefficient. Watch the graph cross, bounce or flatten, and read the sign row under the graph.</p>`),

  widget("factoredPoly", { init: { a: 1, zeros: [[-3, 1], [1, 2], [4, 1]] } }),

  section("📌 Writing equations", S`
  <p>Zeros alone do not fix a polynomial: \(y=a(x+2)(x-1)(x-3)\) has the same zeros for every \(a\ne0\). One more point (often the y-intercept) determines \(a\).</p>
  ${watchOut([
    "(x + 2) gives the zero −2, not 2.",
    "Add the orders to get the degree: (x − 1)²(x + 3) has degree 3.",
    "Don't forget a when finding the y-intercept: f(0) includes the leading coefficient.",
    "At an even-order zero the sign does NOT change — test values make this clear.",
    "Many polynomials fit three x-intercepts; say which conditions make the answer unique.",
  ])}`),

  examples([
    ["Sketch a cubic", S`Sketch \(f(x)=(x+2)(x-1)(x-3)\).`,
      [S`Zeros \(-2,1,3\), each order 1 (crossing). Degree 3, \(a=1\): Q3 → Q1.`, S`y-intercept \(f(0)=(2)(-1)(-3)=6\).`, S`Signs: \(x\lt-2\): −; \(-2\lt x\lt1\): +; \(1\lt x\lt3\): −; \(x>3\): +.`],
      S`crosses at \(-2,1,3\); y-intercept 6`,
      plane({ view: { xmin: -4, xmax: 5, ymin: -12, ymax: 12 }, curves: [{ f: (x) => (x + 2) * (x - 1) * (x - 3), color: "violet" }], points: [{ x: -2, y: 0, label: "−2", color: "red" }, { x: 1, y: 0, label: "1", color: "red" }, { x: 3, y: 0, label: "3", color: "red" }, { x: 0, y: 6, label: "(0, 6)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["A double zero", S`Sketch \(g(x)=-(x+1)^2(x-2)\).`,
      [S`Zero \(-1\) (order 2: bounce) and \(2\) (order 1: cross).`, S`Degree 3, \(a=-1\): Q2 → Q4. y-intercept \(-(1)(-2)=2\).`],
      S`bounces at \(-1\), crosses at \(2\); y-intercept 2`,
      plane({ view: { xmin: -3.5, xmax: 3.5, ymin: -6, ymax: 8 }, curves: [{ f: (x) => -((x + 1) ** 2) * (x - 2), color: "violet" }], points: [{ x: -1, y: 0, label: "−1 (bounce)", color: "amber" }, { x: 2, y: 0, label: "2", color: "red" }, { x: 0, y: 2, label: "(0, 2)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["Find a for a quartic", S`A quartic has a double zero at \(-2\), zeros at \(1\) and \(3\), and passes through \((0,-24)\). Find its equation.`,
      [S`\(y=a(x+2)^2(x-1)(x-3)\).`, S`At \((0,-24)\): \(a(4)(-1)(-3)=12a=-24\Rightarrow a=-2\).`],
      S`\(y=-2(x+2)^2(x-1)(x-3)\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -40, ymax: 30 }, curves: [{ f: (x) => -2 * (x + 2) ** 2 * (x - 1) * (x - 3), color: "violet" }], points: [{ x: -2, y: 0, color: "amber" }, { x: 1, y: 0, color: "red" }, { x: 3, y: 0, color: "red" }, { x: 0, y: -24, label: "(0, −24)", color: "blue" }], step: { x: 1, y: 10 } })],
    ["Equation from a graph", S`The cubic shown crosses the x-axis at \(-3\), \(0\) and \(2\) and passes through \((1,-8)\). Find its equation.`,
      [S`\(y=ax(x+3)(x-2)\).`, S`At \((1,-8)\): \(a(1)(4)(-1)=-4a=-8\Rightarrow a=2\).`],
      S`\(y=2x(x+3)(x-2)\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -12, ymax: 22 }, curves: [{ f: (x) => 2 * x * (x + 3) * (x - 2), color: "violet" }], points: [{ x: -3, y: 0, label: "−3", color: "red" }, { x: 0, y: 0, color: "red" }, { x: 2, y: 0, label: "2", color: "red" }, { x: 1, y: -8, label: "(1, −8)", color: "blue" }], step: { x: 1, y: 4 } })],
    ["Read everything", S`Describe \(f(x)=x^3(x-2)^2(x+1)\) without graphing technology.`,
      [S`Zeros: \(0\) (order 3: flattens), \(2\) (order 2: bounces), \(-1\) (order 1: crosses).`, S`Degree \(3+2+1=6\), \(a=1\): up at both ends.`, S`Signs: \(x\lt-1\): +; \(-1\lt x\lt0\): −; \(0\lt x\lt2\): +; \(x>2\): + (no change at the double zero).`],
      S`degree 6, up at both ends; flat crossing at 0, bounce at 2, crossing at −1`],
  ]),

  practice([
    q("zeros", S`Find all the zeros of \(f(x)=(x-4)(x+5)^2\).`, roots(4, -5),
      "Set each factor to 0.", [S`\(x-4=0\) or \(x+5=0\).`], S`\(x=4\) or \(x=-5\)`),
    q("y-intercept", S`Find the y-intercept of \(f(x)=2(x-1)(x+3)(x-2)\).`, num(12),
      "Substitute x = 0 (include the 2).", [S`\(2(-1)(3)(-2)=12\).`], S`\(12\)`),
    q("behaviour", S`What does the graph of \(y=(x-3)^2(x+1)\) do at \(x=3\)?`, choice(["touches the x-axis and turns back", "crosses straight through", "crosses with a flat bend", "has an asymptote"], 0),
      "Order 2.", ["Even order: bounce."], "bounces"),
    q("find a", S`A cubic has zeros \(-1\), \(2\) and \(4\) and passes through \((0,16)\). Find \(a\).`, num(2),
      "y = a(x + 1)(x − 2)(x − 4).", [S`\(a(1)(-2)(-4)=8a=16\).`], S`\(2\)`),
    q("degree", S`What is the degree of \(f(x)=(x+1)^3(x-2)^2\)?`, num(5),
      "Add the orders.", [S`\(3+2\).`], S`\(5\)`),
  ]),

  ...hard([
    ["A quintic with three intercepts", S`Write an equation for a polynomial of degree 5 that crosses the x-axis only at \(-4\), \(0\) and \(3\), has a positive leading coefficient, and flattens at \(0\). Sketch it.`,
      [S`Crossing at every zero means odd orders; the orders must add to 5.`, S`Flattening at 0 means order 3 there: orders \(1,3,1\).`, S`\(y=x^3(x+4)(x-3)\) (any positive multiple also works).`],
      S`\(y=x^3(x+4)(x-3)\)`,
      plane({ view: { xmin: -5, xmax: 4, ymin: -80, ymax: 80 }, curves: [{ f: (x) => x ** 3 * (x + 4) * (x - 3), color: "violet" }], points: [{ x: -4, y: 0, label: "−4", color: "red" }, { x: 0, y: 0, label: "0", color: "green" }, { x: 3, y: 0, label: "3", color: "red" }], step: { x: 1, y: 20 } })],
    ["Where is it negative?", S`Find where \(f(x)=(x+1)(x-2)^2(x-5)\) is negative.`,
      [S`Zeros \(-1\) (order 1), \(2\) (order 2), \(5\) (order 1); degree 4, \(a>0\): positive for \(x>5\).`, S`Moving left: crosses at 5 → negative on \((2,5)\); no change at 2 → negative on \((-1,2)\); crosses at \(-1\) → positive for \(x\lt-1\).`],
      S`\(-1\lt x\lt2\) or \(2\lt x\lt5\)`],
  ], [
    q("hard", S`\(y=a(x-1)^2(x+2)^2\) passes through \((0,12)\). Find \(a\).`, num(3),
      "Substitute (0, 12).", [S`\(a(1)(4)=12\).`], S`\(3\)`),
    q("hard", S`How many x-intercepts does \(f(x)=(x^2+4)(x-1)^3\) have?`, num(1),
      "x² + 4 is never 0.", [S`Only \(x=1\).`], S`\(1\)`),
    q("hard", S`For \(f(x)=-(x+1)^2(x-2)\), find \(f(-3)\).`, num(20),
      "Substitute carefully.", [S`\(-(4)(-5)=20\).`], S`\(20\)`),
  ]),

  wrapUp({
    qas: [
      ["Why does an even-order zero bounce?", "A factor like (x − 2)² is never negative, so the sign of f does not change at x = 2: the graph touches the axis and turns back."],
      ["Why does an order-3 zero flatten?", "Near x = r the factor (x − r)³ behaves like y = x³, which crosses with a flat S-shape."],
      ["How many polynomials fit given zeros?", "Infinitely many: changing a, or raising the order of a factor, keeps the same zeros. One extra point fixes a."],
      ["Do I need test values if I know the orders?", "Not strictly — the sign changes at odd-order zeros and stays at even-order ones — but one test value is a good check."],
      ["What if a factor like x² + 4 never equals 0?", "It contributes to the degree but gives no x-intercept, and it does not change sign."],
    ],
    summary: [
      "Factor (x − r)ᵐ: zero r of order m.",
      "Order 1 crosses, even bounces, 3 flattens.",
      "Degree = sum of orders; a gives end behaviour.",
      "Zeros + one point determine the equation.",
    ],
    next: "1.4 transforms the power functions y = x³ and y = x⁴.",
  }),
];
