// IB AA SL 3.4 — Graphing Quadratic Functions: vertex, intercept and standard forms, axis, vertex, intercepts, equations from graphs
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "3.4 Graphing Quadratic Functions";
export const ID = "1baa0003-0001-4001-8001-000000000304";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "⛰️",
    title: "Graphing Quadratic Functions",
    overview: S`The graph of a quadratic function is a parabola. Its equation can be written in three forms, and each one shows a different key feature directly: the vertex, the x-intercepts or the y-intercept. In this lesson you will sketch parabolas from each form, find the axis of symmetry and the vertex, and find the equation of a parabola from its graph.`,
    goals: [
      "identify the vertex, axis and direction of opening from \\(f(x)=a(x-h)^2+k\\);",
      "identify the x-intercepts and axis from \\(f(x)=a(x-p)(x-q)\\);",
      "find the axis \\(x=-\\frac{b}{2a}\\), vertex and y-intercept from \\(f(x)=ax^2+bx+c\\);",
      "sketch a parabola and state its range;",
      "find the equation of a parabola from its graph or key features.",
    ],
    curriculum: "SL 2.6 (the quadratic function f(x) = ax² + bx + c: its graph, y-intercept (0, c), axis of symmetry; the form f(x) = a(x − p)(x − q), x-intercepts (p, 0) and (q, 0); the form f(x) = a(x − h)² + k, vertex (h, k))",
    prior: [
      [S`Expand \(-(x+1)(x-5)\).`, S`\(-x^2+4x+5\).`],
      [S`Evaluate \(2(0-3)^2-8\).`, S`\(10\).`],
      [S`What number is halfway between \(-1\) and \(5\)?`, S`\(2\).`],
    ],
    words: [
      ["Parabola", "the graph of a quadratic function", "\\(y=x^2\\)"],
      ["Vertex", "the turning point \\((h,k)\\)", "\\((3,-8)\\)"],
      ["Axis of symmetry", "the vertical line through the vertex", "\\(x=3\\)"],
      ["Intercept form", "\\(a(x-p)(x-q)\\): zeros \\(p\\) and \\(q\\)", "\\(-(x+1)(x-5)\\)"],
      ["Leading coefficient \\(a\\)", "sign gives the direction; size gives the width", "\\(a<0\\): opens down"],
    ],
  }),

  section("📌 Three forms, three features", S`
  ${table(["Form", "Shows directly", "Axis of symmetry"], [
    [S`vertex \(a(x-h)^2+k\)`, S`vertex \((h,k)\)`, S`\(x=h\)`],
    [S`intercept \(a(x-p)(x-q)\)`, S`zeros \(p\) and \(q\)`, S`\(x=\frac{p+q}{2}\)`],
    [S`standard \(ax^2+bx+c\)`, S`y-intercept \((0,c)\)`, S`\(x=-\frac{b}{2a}\)`],
  ])}
  ${plane({ view: { xmin: -3, xmax: 7, ymin: -2, ymax: 11 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => -(x + 1) * (x - 5), color: "violet" }], vlines: [{ x: 2, color: "gray", dash: true }], points: [P(2, 9, "(2, 9)", "amber"), P(-1, 0, "(−1, 0)"), P(5, 0, "(5, 0)"), P(0, 5, "(0, 5)", "green")] }, "−(x + 1)(x − 5) = −(x − 2)² + 9 = −x² + 4x + 5")}
  ${plane({ view: { xmin: -5, xmax: 5, ymin: -2, ymax: 10 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 2 * x * x, color: "violet" }, { f: (x) => x * x, color: "gray" }, { f: (x) => 0.5 * x * x, color: "blue" }, { f: (x) => -0.5 * x * x + 8, color: "red" }] }, "a = 2 (violet) is narrower, a = ½ (blue) wider, a < 0 (red) opens down")}
  ${keyIdea(S`\(a>0\): the parabola opens up and the vertex is a minimum, range \(y\ge k\). \(a<0\): it opens down, the vertex is a maximum, range \(y\le k\).`)}`),

  section("📌 Finding the equation from a graph", S`
  <p>Choose the form that matches what you can read: zeros → intercept form; vertex → vertex form. Then substitute one more point to find \(a\).</p>
  ${watchOut([
    "Vertex form uses (x − h): the vertex of 2(x + 3)² − 1 is (−3, −1).",
    "The axis of symmetry is a line: write x = 2, not 2.",
    "In −b/(2a) keep the signs: for 2x² + 8x + 3, x = −8/4 = −2.",
    "A parabola with no x-intercepts has no real intercept form.",
  ])}`),

  section("📌 Explore", S`<p>Move \(a\), \(h\) and \(k\). The readout shows the same parabola in vertex, standard and (when possible) intercept form.</p>`),

  widget("ibQuadratic", { init: [1, 1, -4] }),

  examples([
    ["Level 1 · Vertex form", S`For \(f(x)=2(x-3)^2-8\), state the vertex, axis, y-intercept and range.`,
      [S`Vertex \((3,-8)\), axis \(x=3\); \(a=2>0\), so a minimum.`, S`\(f(0)=2(9)-8=10\).`, S`Range \(y\ge-8\).`],
      S`\((3,-8)\); \(x=3\); \((0,10)\); \(y\ge-8\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -9, ymax: 11 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => 2 * (x - 3) ** 2 - 8, color: "violet" }], points: [P(3, -8, "(3, −8)", "amber"), P(0, 10, "(0, 10)", "green"), P(1, 0, "(1, 0)"), P(5, 0, "(5, 0)")] })],
    ["Level 1 · Intercept form", S`For \(f(x)=-(x+1)(x-5)\), find the zeros, axis, vertex and y-intercept.`,
      [S`Zeros \(-1\) and \(5\); axis \(x=2\).`, S`\(f(2)=-(3)(-3)=9\): vertex \((2,9)\), a maximum.`, S`\(f(0)=-(1)(-5)=5\).`],
      S`zeros \(-1, 5\); \(x=2\); \((2,9)\); \((0,5)\)`],
    ["Level 2 · Standard form", S`Find the axis, vertex and y-intercept of \(f(x)=2x^2+8x+3\).`,
      [S`\(x=-\frac{8}{2(2)}=-2\).`, S`\(f(-2)=8-16+3=-5\): vertex \((-2,-5)\).`, S`y-intercept \((0,3)\).`],
      S`\(x=-2\); \((-2,-5)\); \((0,3)\)`,
      plane({ view: { xmin: -6, xmax: 2, ymin: -6, ymax: 8 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 2 * x * x + 8 * x + 3, color: "violet" }], vlines: [{ x: -2, color: "gray", dash: true }], points: [P(-2, -5, "(−2, −5)", "amber"), P(0, 3, "(0, 3)", "green")] })],
    ["Level 2 · From zeros and a point", S`A parabola has zeros \(-2\) and \(4\) and passes through \((0,-8)\). Find its equation in standard form.`,
      [S`\(f(x)=a(x+2)(x-4)\); \(f(0)=-8a=-8\Rightarrow a=1\).`, S`\((x+2)(x-4)=x^2-2x-8\).`],
      S`\(f(x)=x^2-2x-8\)`],
    ["Level 3 · From the vertex and a point", S`A parabola has vertex \((-1,6)\) and passes through \((1,-2)\). Find its equation in vertex and standard form.`,
      [S`\(f(x)=a(x+1)^2+6\); \(-2=4a+6\Rightarrow a=-2\).`, S`\(-2(x^2+2x+1)+6=-2x^2-4x+4\).`],
      S`\(-2(x+1)^2+6=-2x^2-4x+4\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -4, ymax: 8 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => -2 * (x + 1) ** 2 + 6, color: "violet" }], points: [P(-1, 6, "(−1, 6)", "amber"), P(1, -2, "(1, −2)")] })],
  ]),

  practice([
    q("Level 1 · axis", S`What is the axis of symmetry of \(y=(x-4)(x+2)\)? Enter the x-value.`, num(1),
      "Average the zeros.", [S`\(\frac{4-2}{2}\).`], S`\(x=1\)`),
    q("Level 1 · y-intercept", S`What is the y-intercept of \(y=3(x+1)^2-5\)?`, num(-2),
      "Put x = 0.", [S`\(3-5\).`], S`\(-2\)`),
    q("Level 2 · vertex", S`Find the x-coordinate of the vertex of \(y=x^2+10x+1\).`, num(-5),
      "x = −b/(2a).", [S`\(-\frac{10}{2}\).`], S`\(-5\)`),
    q("Level 2 · minimum", S`What is the minimum value of \(y=(x-2)^2+7\)?`, num(7),
      "Vertex form.", [S`Vertex \((2,7)\).`], S`\(7\)`),
    q("Level 2 · matching", S`Which parabola opens down and has vertex \((1,-3)\)?`, choice(["y = −(x − 1)² − 3", "y = (x − 1)² − 3", "y = −(x + 1)² − 3", "y = −(x − 1)² + 3"], 0),
      "Negative a, vertex form.", [S`\(h=1\), \(k=-3\), \(a<0\).`], S`\(y=-(x-1)^2-3\)`),
  ]),

  ...hard([
    ["Three points", S`A parabola passes through \((0,3)\), \((1,0)\) and \((3,0)\). Find its equation and vertex.`,
      [S`Zeros 1 and 3: \(f(x)=a(x-1)(x-3)\).`, S`\(f(0)=3a=3\Rightarrow a=1\): \(f(x)=x^2-4x+3\).`, S`Axis \(x=2\); \(f(2)=-1\): vertex \((2,-1)\).`],
      S`\(f(x)=x^2-4x+3\); \((2,-1)\)`],
    ["Touching the axis", S`For which values of \(k\) does \(f(x)=-x^2+kx-9\) touch the x-axis? Write \(f\) in vertex form for the positive value.`,
      [S`Touching means the vertex is on the x-axis: one repeated zero, so \(k^2-4(-1)(-9)=0\Rightarrow k^2=36\).`, S`\(k=\pm6\).`, S`\(k=6\): \(f(x)=-(x^2-6x+9)=-(x-3)^2\).`],
      S`\(k=\pm6\); \(f(x)=-(x-3)^2\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -8, ymax: 2 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => -((x - 3) ** 2), color: "violet" }], points: [P(3, 0, "(3, 0)", "amber")] })],
  ], [
    q("Level 3 · from the vertex", S`\(f(x)=x^2+bx+c\) has vertex \((3,-2)\). Find \(c\).`, num(7),
      "Expand (x − 3)² − 2.", [S`\(x^2-6x+9-2\).`], S`\(7\)`),
    q("Level 3 · zeros and maximum", S`A parabola has zeros \(-3\) and \(7\) and maximum value 50. Find its y-intercept.`, num(42),
      "Axis x = 2; find a.", [S`\(a(5)(-5)=50\Rightarrow a=-2\); \(-2(3)(-7)\).`], S`\(42\)`),
    q("Level 3 · range", S`What is the minimum value of \(f(x)=2x^2-12x+23\)?`, num(5),
      "Vertex at x = 3.", [S`\(18-36+23\).`], S`\(5\)`),
  ]),

  wrapUp({
    qas: [
      ["Which form is best for sketching?", "Any form works; find the vertex, the y-intercept and any zeros, then use symmetry."],
      ["How do I convert between forms?", "Expand vertex or intercept form; complete the square (3.5) to reach vertex form."],
      ["Why is the axis halfway between the zeros?", "A parabola is symmetric about its axis, so the zeros are mirror images."],
      ["What does a large |a| do?", "Makes the parabola narrower (steeper)."],
      ["What if there are no zeros?", "The parabola stays above (a > 0, k > 0) or below the x-axis; use the vertex and y-intercept to sketch."],
    ],
    summary: [
      "a(x − h)² + k: vertex (h, k).",
      "a(x − p)(x − q): zeros p, q; axis x = (p + q)/2.",
      "ax² + bx + c: y-intercept c; axis x = −b/(2a).",
      "a > 0 minimum, range y ≥ k; a < 0 maximum, range y ≤ k.",
    ],
    next: "3.5 solves quadratic equations by factorising and completing the square.",
  }),
];
