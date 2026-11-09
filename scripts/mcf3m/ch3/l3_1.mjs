// MCF3M 3.1 — Standard and Factored Forms: y = a(x − r)(x − s), zeros, axis midway, vertex, sketching,
// converting between forms, what each form shows.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, fexpr, hard, plane } from "../lib.mjs";
const S = String.raw;

export const TITLE = "3.1 Standard and Factored Forms";

export const blocks = () => [
  intro({
    icon: "🎛️",
    title: "Standard and Factored Forms",
    overview: S`A quadratic function can be written in <b>standard form</b> \(y=ax^2+bx+c\) or in <b>factored form</b> \(y=a(x-r)(x-s)\). They describe the same parabola, but each shows different features at a glance: standard form shows the \(y\)-intercept \(c\), and factored form shows the zeros \(r\) and \(s\). Because a parabola is symmetric, the axis of symmetry lies exactly halfway between the zeros, and substituting that \(x\)-value gives the vertex. With these facts you can sketch a parabola accurately from its factored form.`,
    goals: [
      "identify the zeros, direction of opening and \\(y\\)-intercept of \\(y=a(x-r)(x-s)\\);",
      "find the axis of symmetry \\(x=\\frac{r+s}2\\) and the vertex from the zeros;",
      "sketch a parabola from its factored form;",
      "convert between standard and factored form by expanding or factoring;",
      "write the equation of a parabola from its zeros and one other point.",
    ],
    curriculum: "A2.9 (sketch graphs of quadratic functions in factored form by using the x-intercepts to determine the vertex), A2.10 (describe the information that can be obtained from the standard, vertex and factored forms)",
    prior: [
      [S`Factor \(x^2-2x-15\).`, S`\((x-5)(x+3)\).`],
      [S`What is halfway between \(-3\) and \(5\)?`, S`\(\frac{-3+5}2=1\).`],
      [S`Evaluate \((1-5)(1+3)\).`, S`\((-4)(4)=-16\).`],
    ],
    words: [
      ["Standard form", "\\(y=ax^2+bx+c\\)", "\\(y=x^2-2x-15\\)"],
      ["Factored form", "\\(y=a(x-r)(x-s)\\)", "\\(y=(x-5)(x+3)\\)"],
      ["Zeros / x-intercepts", "x-values where y = 0", "\\(x=5,\\ x=-3\\)"],
      ["Axis of symmetry", "\\(x=\\frac{r+s}2\\)", "\\(x=1\\)"],
      ["Vertex", "point on the axis: \\((h,\\ f(h))\\)", "\\((1,\\,-16)\\)"],
    ],
  }),

  section("📌 What each form tells you", S`
  ${table(["Form", "Shows directly", "Example"], [
    ["Standard \\(ax^2+bx+c\\)", "direction (sign of a), y-intercept c", "\\(y=-2x^2+4x+6\\): opens down, y-int 6"],
    ["Factored \\(a(x-r)(x-s)\\)", "direction, zeros r and s", "\\(y=-2(x-3)(x+1)\\): zeros 3 and −1"],
    ["Vertex \\(a(x-h)^2+k\\)", "direction, vertex (h, k)", "\\(y=-2(x-1)^2+8\\): vertex (1, 8)"],
  ])}
  ${keyIdea(S`For \(y=a(x-r)(x-s)\): the zeros are \(r\) and \(s\); the axis is \(x=\frac{r+s}{2}\); the vertex is \(\left(\frac{r+s}2,\ f\!\left(\frac{r+s}2\right)\right)\); the \(y\)-intercept is \(a(-r)(-s)=a\,rs\).`)}
  ${plane({ view: { xmin: -3, xmax: 5, ymin: -2, ymax: 10 }, curves: [{ f: (x) => -2 * (x - 3) * (x + 1), color: "violet" }], vlines: [{ x: 1, color: "green", dash: true }], points: [{ x: 3, y: 0, label: "(3, 0)", color: "amber" }, { x: -1, y: 0, label: "(−1, 0)", color: "amber" }, { x: 1, y: 8, label: "vertex (1, 8)", color: "blue" }, { x: 0, y: 6, label: "(0, 6)", color: "gray" }], step: { x: 1, y: 1 } }, "y = −2(x − 3)(x + 1) = −2x² + 4x + 6: zeros 3 and −1, axis x = 1, vertex (1, 8), y-intercept 6.")}`),

  widget("quadForms", { init: [-2, -1, 3] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "The zeros of (x − 4)(x + 2) are 4 and −2 — the opposite signs of the numbers in the brackets.",
    "A factor like (2x − 3) gives the zero x = 3/2, not 3.",
    "Do not forget a in front: y = 3(x − 1)(x − 5) is narrower than y = (x − 1)(x − 5) but has the same zeros.",
    "The vertex is found by substituting the axis value into the equation, not by averaging y-values.",
    "If both zeros are equal, the vertex is on the x-axis.",
  ])}`),

  examples([
    ["Features from factored form", S`For \(y=(x-6)(x+2)\), find the zeros, axis of symmetry, vertex and \(y\)-intercept.`,
      [S`<b>Zeros.</b> A product is zero when a factor is zero: \(x-6=0\Rightarrow x=6\); \(x+2=0\Rightarrow x=-2\).`,
        S`<b>Axis.</b> A parabola is symmetric, so the axis is halfway between the zeros: \(x=\frac{6+(-2)}2=2\).`,
        S`<b>Vertex.</b> Substitute \(x=2\): \(y=(2-6)(2+2)=(-4)(4)=-16\). Vertex \((2,\,-16)\).`,
        S`<b>\(y\)-intercept.</b> \(x=0\): \(y=(-6)(2)=-12\).`,
        S`<b>Check.</b> \(a=1>0\), so the parabola opens up and the vertex is a minimum below the axis — consistent with two zeros ✓`],
      S`zeros 6 and −2; axis x = 2; vertex (2, −16); y-intercept −12`,
      plane({ view: { xmin: -4, xmax: 8, ymin: -18, ymax: 8 }, curves: [{ f: (x) => (x - 6) * (x + 2), color: "violet" }], vlines: [{ x: 2, color: "green", dash: true }], points: [{ x: 6, y: 0, label: "(6, 0)", color: "amber" }, { x: -2, y: 0, label: "(−2, 0)", color: "amber" }, { x: 2, y: -16, label: "(2, −16)", color: "blue" }, { x: 0, y: -12, label: "(0, −12)", color: "gray" }], step: { x: 1, y: 2 } })],

    ["Sketch with a stretch", S`Sketch \(y=-\tfrac12(x-1)(x-7)\) by finding its key points.`,
      [S`<b>Zeros.</b> \(x=1\) and \(x=7\).`,
        S`<b>Axis.</b> \(x=\frac{1+7}2=4\).`,
        S`<b>Vertex.</b> \(y=-\tfrac12(3)(-3)=\tfrac92=4.5\): vertex \((4,\,4.5)\), a maximum because \(a<0\).`,
        S`<b>\(y\)-intercept.</b> \(y=-\tfrac12(-1)(-7)=-3.5\).`,
        S`<b>Sketch and check.</b> Plot the four points and the mirror image of \((0,\,-3.5)\), which is \((8,\,-3.5)\). Check: \(-\tfrac12(7)(1)=-3.5\) ✓`],
      S`zeros 1 and 7, vertex (4, 4.5), y-intercept −3.5, opens down`,
      plane({ view: { xmin: -1, xmax: 9, ymin: -5, ymax: 6 }, curves: [{ f: (x) => -0.5 * (x - 1) * (x - 7), color: "violet" }], points: [{ x: 1, y: 0, label: "(1, 0)", color: "amber" }, { x: 7, y: 0, label: "(7, 0)", color: "amber" }, { x: 4, y: 4.5, label: "(4, 4.5)", color: "blue" }, { x: 0, y: -3.5, label: "(0, −3.5)", color: "gray" }, { x: 8, y: -3.5, label: "(8, −3.5)", color: "gray" }], step: { x: 1, y: 1 } })],

    ["Standard to factored form", S`Write \(y=2x^2-4x-30\) in factored form and use it to find the vertex.`,
      [S`<b>Common factor.</b> \(y=2(x^2-2x-15)\).`,
        S`<b>Factor.</b> Product \(-15\), sum \(-2\): \(-5\) and \(3\). So \(y=2(x-5)(x+3)\).`,
        S`<b>Axis.</b> \(x=\frac{5+(-3)}2=1\).`,
        S`<b>Vertex.</b> \(y=2(1-5)(1+3)=2(-4)(4)=-32\). Vertex \((1,\,-32)\).`,
        S`<b>Check with standard form.</b> \(y(1)=2-4-30=-32\) ✓; \(y\)-intercept \(-30\) in both forms ✓`],
      S`\(y=2(x-5)(x+3)\); vertex \((1,\,-32)\)`,
      plane({ view: { xmin: -5, xmax: 7, ymin: -35, ymax: 15 }, curves: [{ f: (x) => 2 * x * x - 4 * x - 30, color: "violet" }], points: [{ x: 5, y: 0, label: "(5, 0)", color: "amber" }, { x: -3, y: 0, label: "(−3, 0)", color: "amber" }, { x: 1, y: -32, label: "(1, −32)", color: "blue" }], step: { x: 1, y: 5 } })],

    ["A fractional zero", S`For \(y=(2x+3)(x-4)\), find the zeros, the vertex and the standard form.`,
      [S`<b>Zeros.</b> \(2x+3=0\Rightarrow x=-\tfrac32\); \(x-4=0\Rightarrow x=4\).`,
        S`<b>Axis.</b> \(x=\frac{-1.5+4}2=1.25\).`,
        S`<b>Vertex.</b> \(y=(2(1.25)+3)(1.25-4)=(5.5)(-2.75)=-15.125\).`,
        S`<b>Standard form.</b> \((2x+3)(x-4)=2x^2-8x+3x-12=2x^2-5x-12\).`,
        S`<b>Check.</b> \(y(1.25)=2(1.5625)-6.25-12=3.125-18.25=-15.125\) ✓`],
      S`zeros −1.5 and 4; vertex (1.25, −15.125); \(y=2x^2-5x-12\)`,
      plane({ view: { xmin: -3, xmax: 6, ymin: -17, ymax: 10 }, curves: [{ f: (x) => (2 * x + 3) * (x - 4), color: "violet" }], points: [{ x: -1.5, y: 0, label: "(−1.5, 0)", color: "amber" }, { x: 4, y: 0, label: "(4, 0)", color: "amber" }, { x: 1.25, y: -15.125, label: "(1.25, −15.1)", color: "blue" }], step: { x: 1, y: 3 } })],

    ["Equation from zeros and a point", S`A parabola has zeros \(-4\) and \(2\) and passes through \((0,\,16)\). Find its equation in factored and standard form, and its vertex.`,
      [S`<b>Factored form with unknown \(a\).</b> \(y=a(x+4)(x-2)\).`,
        S`<b>Use \((0,\,16)\).</b> \(16=a(4)(-2)=-8a\Rightarrow a=-2\).`,
        S`<b>Equation.</b> \(y=-2(x+4)(x-2)=-2(x^2+2x-8)=-2x^2-4x+16\).`,
        S`<b>Vertex.</b> Axis \(x=\frac{-4+2}2=-1\); \(y=-2(3)(-3)=18\). Vertex \((-1,\,18)\).`,
        S`<b>Check.</b> Standard form at \(x=-1\): \(-2+4+16=18\) ✓`],
      S`\(y=-2(x+4)(x-2)=-2x^2-4x+16\); vertex \((-1,\,18)\)`,
      plane({ view: { xmin: -6, xmax: 4, ymin: -4, ymax: 20 }, curves: [{ f: (x) => -2 * (x + 4) * (x - 2), color: "violet" }], points: [{ x: -4, y: 0, label: "(−4, 0)", color: "amber" }, { x: 2, y: 0, label: "(2, 0)", color: "amber" }, { x: 0, y: 16, label: "(0, 16)", color: "gray" }, { x: -1, y: 18, label: "(−1, 18)", color: "blue" }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("zeros", S`Enter the axis of symmetry \(x=\ ?\) of \(y=(x-3)(x+9)\).`, num(-3), "Halfway between 3 and −9.", [S`\(\frac{3-9}2=-3\).`], S`\(-3\)`),
    q("vertex", S`Enter the \(y\)-coordinate of the vertex of \(y=(x-2)(x-8)\).`, num(-9), "Axis x = 5.", [S`\((3)(-3)=-9\).`], S`\(-9\)`),
    q("intercept", S`Enter the \(y\)-intercept of \(y=3(x+1)(x-4)\).`, num(-12), "x = 0.", [S`\(3(1)(-4)=-12\).`], S`\(-12\)`),
    q("convert", S`Write \(y=x^2+3x-28\) in factored form.`, fexpr("(x+7)*(x-4)"), "Product −28, sum 3.", [S`\((x+7)(x-4)\).`], S`\((x+7)(x-4)\)`),
    q("equation", S`A parabola has zeros \(1\) and \(5\) and passes through \((3,\,8)\). Enter \(a\).`, num(-2), "y = a(x − 1)(x − 5).", [S`\(8=a(2)(-2)=-4a\).`], S`\(-2\)`),
  ]),

  ...hard([
    ["Same zeros, different parabolas", S`Find the equations of the parabolas with zeros \(-1\) and \(5\) whose vertex is (a) \(9\) units above the axis; (b) \(18\) units below the axis.`,
      [S`<b>Family.</b> \(y=a(x+1)(x-5)\); axis \(x=2\), where \((x+1)(x-5)=(3)(-3)=-9\). So the vertex \(y\) is \(-9a\).`,
        S`<b>(a)</b> \(-9a=9\Rightarrow a=-1\): \(y=-(x+1)(x-5)\).`,
        S`<b>(b)</b> \(-9a=-18\Rightarrow a=2\): \(y=2(x+1)(x-5)\).`,
        S`<b>Check (b).</b> \(2(3)(-3)=-18\) ✓`],
      S`(a) y = −(x + 1)(x − 5); (b) y = 2(x + 1)(x − 5)`,
      plane({ view: { xmin: -3, xmax: 7, ymin: -20, ymax: 11 }, curves: [{ f: (x) => -(x + 1) * (x - 5), color: "violet" }, { f: (x) => 2 * (x + 1) * (x - 5), color: "blue" }], points: [{ x: 2, y: 9, label: "(2, 9)", color: "violet" }, { x: 2, y: -18, label: "(2, −18)", color: "blue" }], step: { x: 1, y: 3 } })],
    ["An arch from its feet", S`A parabolic arch has feet \(12\) m apart and is \(9\) m high. Use factored form with the feet at \(x=0\) and \(x=12\) to find its equation and the height \(2\) m from a foot.`,
      [S`<b>Factored form.</b> \(h=ax(x-12)\).`,
        S`<b>Top.</b> At \(x=6\): \(9=a(6)(-6)\Rightarrow a=-\tfrac14\).`,
        S`<b>At \(x=2\).</b> \(h=-\tfrac14(2)(-10)=5\) m.`,
        S`<b>Check.</b> \(h(10)=-\tfrac14(10)(-2)=5\) ✓ (symmetry).`],
      S`h = −¼x(x − 12); 5 m high 2 m from a foot`],
  ], [
    q("hard", S`\(y=a(x-r)(x-s)\) has vertex \((3,\,-8)\) and one zero \(x=1\). Enter the other zero.`, num(5), "Zeros are symmetric about x = 3.", [S`\(3+(3-1)=5\).`], S`\(5\)`),
    q("hard", S`For the parabola in the previous question, enter \(a\).`, num(2), "y = a(x − 1)(x − 5) at x = 3.", [S`\(a(2)(-2)=-8\Rightarrow a=2\).`], S`\(2\)`),
    q("hard", S`Write \(y=-3x^2+3x+18\) in factored form.`, fexpr("-3*(x-3)*(x+2)"), "Take out −3.", [S`\(-3(x^2-x-6)=-3(x-3)(x+2)\).`], S`\(-3(x-3)(x+2)\)`),
    q("hard", S`Enter the \(x\)-coordinate of the vertex of \(y=(3x-2)(x+4)\).`, num(-5 / 3, 0.001), "Zeros 2/3 and −4.", [S`\(\frac{\frac23-4}2=-\frac53\).`], S`\(-\frac53\)`),
    q("hard", S`A parabola has zeros \(-2\) and \(6\) and \(y\)-intercept \(18\). Enter the \(y\)-coordinate of its vertex.`, num(24), "Find a from (0, 18).", [S`\(18=a(2)(-6)\Rightarrow a=-1.5\).`, S`Vertex at \(x=2\): \(-1.5(4)(-4)=24\).`], S`\(24\)`),
  ]),

  wrapUp({
    qas: [
      ["What does factored form show at once?", "The zeros r and s (and the direction from the sign of a)."],
      ["How do I find the axis of symmetry from the zeros?", "Average them: x = (r + s)/2."],
      ["How do I get the vertex?", "Substitute the axis value into the equation."],
      ["What does a change if the zeros stay the same?", "The width and direction, and so the height of the vertex."],
      ["How do I convert factored form to standard form?", "Expand; to go back, factor."],
    ],
    summary: [
      "Factored form y = a(x − r)(x − s): zeros r and s.",
      "Axis x = (r + s)/2; vertex by substitution.",
      "Standard form gives the y-intercept c; factored form gives a·r·s.",
      "Zeros + one point determine a.",
    ],
    next: "3.2 solves quadratic equations by reading the x-intercepts from graphs.",
  }),
];
