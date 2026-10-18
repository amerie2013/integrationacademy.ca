// MHF4U 1.4 — Transformations of Power Functions: y = a(k(x − d))ⁿ + c for y = x³ and y = x⁴, the mapping rule,
// factoring k, writing equations from descriptions and graphs
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "1.4 Transformations of Power Functions";
export const ID = "247b5e3e-a0cb-4bf1-9eee-cec4907ca3f9";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🔄",
    title: "Transformations of Power Functions",
    overview: S`The same four parameters you used in Grade 11 work on cubic and quartic power functions: \(y=a\left(k(x-d)\right)^n+c\). Each point \((x,y)\) of \(y=x^n\) moves to \(\left(\frac xk+d,\ ay+c\right)\). In this lesson you will describe the transformations, map key points of \(y=x^3\) and \(y=x^4\), factor \(k\) out before reading \(d\), sketch the result, and write the equation from a description or a graph.`,
    goals: [
      "describe the roles of a, k, d and c in y = a(k(x − d))ⁿ + c;",
      "map key points with (x, y) → (x/k + d, ay + c);",
      "factor k out of the bracket before reading d;",
      "sketch transformed cubic and quartic functions and state domain and range;",
      "write the equation from a description or a graph.",
    ],
    curriculum: "C1.6 (roles of a, k, d and c in y = af(k(x − d)) + c applied to f(x) = x³ and x⁴; vertical and horizontal translations, reflections, stretches and compressions)",
    prior: [
      [S`Factor \(3x-12\).`, S`\(3(x-4)\).`],
      [S`Key points of \(y=x^3\) for \(x=-2\) to \(2\)?`, S`\((-2,-8),(-1,-1),(0,0),(1,1),(2,8)\).`],
      [S`Under \(y=f(x-3)+2\), where does \((1,5)\) go?`, S`\((4,7)\).`],
    ],
    words: [
      ["a", "vertical stretch/compression; a < 0 reflects in the x-axis", ""],
      ["k", "horizontal stretch/compression by 1/|k|; k < 0 reflects in the y-axis", ""],
      ["d, c", "horizontal and vertical translations", ""],
      ["Point of symmetry", "for x³, the centre (0, 0) moves to (d, c)", ""],
      ["Vertex", "for x⁴, the lowest/highest point moves to (d, c)", ""],
    ],
  }),

  section("📌 The mapping rule", S`
  <p style="text-align:center;font-size:1.15em;">\((x,\ y)\ \longrightarrow\ \left(\dfrac xk+d,\ \ ay+c\right)\)</p>
  ${table(["\\(y=x^3\\)", "(−2, −8)", "(−1, −1)", "(0, 0)", "(1, 1)", "(2, 8)"], [["\\(y=x^4\\)", "(−2, 16)", "(−1, 1)", "(0, 0)", "(1, 1)", "(2, 16)"]])}
  ${plane({ view: { xmin: -3, xmax: 5, ymin: -6, ymax: 8 }, curves: [{ f: (x) => x ** 3, color: "gray" }, { f: (x) => 0.5 * (x - 2) ** 3 + 1, color: "violet" }], points: [{ x: 2, y: 1, label: "(2, 1)", color: "blue" }, { x: 0, y: -3, label: "(0, −3)", color: "red" }, { x: 4, y: 5, label: "(4, 5)", color: "red" }], step: { x: 1, y: 1 } }, "y = ½(x − 2)³ + 1: compressed vertically by ½, then 2 right and 1 up; centre (2, 1).")}
  ${keyIdea(S`Stretches and reflections first, translations last. Factor first: \(y=(2x-6)^3=(2(x-3))^3\), so \(k=2\) and \(d=3\). For \(y=x^3\) the point of symmetry \((0,0)\) moves to \((d,c)\); for \(y=x^4\) the vertex moves to \((d,c)\), and the range becomes \(y\ge c\) (if \(a>0\)) or \(y\le c\) (if \(a\lt0\)).`)}`),

  section("📌 Explore", S`<p>Choose \(y=x^3\) or \(y=x^4\) and move all four sliders. The red points are the images of the five key points in the table below the graph.</p>`),

  widget("powerTransform", { init: { n: 3, a: 2, k: 1, d: 1, c: -3 } }),

  section("📌 Avoiding the common traps", S`
  ${watchOut([
    "(x + 4) means 4 to the LEFT.",
    "k = 3 compresses horizontally by 1/3; it does not stretch.",
    "Read d only after factoring k out of the bracket.",
    "For odd powers, a reflection in the y-axis and one in the x-axis give the same graph: (−x)³ = −x³.",
    "Check one image point in the final equation.",
  ])}`),

  examples([
    ["Describe the transformations", S`Describe \(y=-2(x-3)^3+1\) as transformations of \(y=x^3\).`,
      [S`\(a=-2\): vertical stretch by 2 and reflection in the x-axis.`, S`\(d=3\), \(c=1\): 3 right and 1 up; the point of symmetry is \((3,1)\).`],
      S`stretch by 2, reflect in the x-axis, then 3 right, 1 up`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -8, ymax: 10 }, curves: [{ f: (x) => -2 * (x - 3) ** 3 + 1, color: "violet" }], points: [{ x: 3, y: 1, label: "(3, 1)", color: "blue" }, { x: 2, y: 3, label: "(2, 3)", color: "red" }, { x: 4, y: -1, label: "(4, −1)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Map key points of a quartic", S`Map the key points of \(y=x^4\) under \(y=\tfrac12(x+1)^4-3\) and state the range.`,
      [S`\((x,y)\to(x-1,\ \tfrac12y-3)\).`, S`\((0,0)\to(-1,-3)\), \((\pm1,1)\to(0,-2.5),(-2,-2.5)\), \((\pm2,16)\to(1,5),(-3,5)\).`],
      S`vertex \((-1,-3)\); range \(y\ge-3\)`,
      plane({ view: { xmin: -4, xmax: 2, ymin: -4, ymax: 6 }, curves: [{ f: (x) => 0.5 * (x + 1) ** 4 - 3, color: "violet" }], points: [{ x: -1, y: -3, label: "(−1, −3)", color: "blue" }, { x: 0, y: -2.5, color: "red" }, { x: -2, y: -2.5, color: "red" }, { x: 1, y: 5, label: "(1, 5)", color: "red" }, { x: -3, y: 5, label: "(−3, 5)", color: "red" }], step: { x: 1, y: 1 } })],
    ["Factor k first", S`Describe \(y=(2x-6)^3\) and find the image of \((2,8)\).`,
      [S`\(2x-6=2(x-3)\): \(k=2\), \(d=3\).`, S`Horizontal compression by \(\tfrac12\), then 3 right. \((2,8)\to(\tfrac22+3,\ 8)=(4,8)\).`, S`Check: \((2(4)-6)^3=2^3=8\) ✓.`],
      S`compress by \(\tfrac12\), then 3 right; \((2,8)\to(4,8)\)`],
    ["From a description", S`\(y=x^3\) is compressed horizontally by a factor of \(\tfrac13\), reflected in the x-axis, then translated 2 left and 5 down. Write the equation.`,
      [S`Compression by \(\tfrac13\): \(k=3\). Reflection in the x-axis: \(a=-1\).`, S`\(d=-2\), \(c=-5\).`],
      S`\(y=-\left(3(x+2)\right)^3-5\)`],
    ["From a graph", S`The quartic shown has its vertex at \((2,-4)\) and passes through \((3,-2)\). Find its equation.`,
      [S`\(y=a(x-2)^4-4\).`, S`At \((3,-2)\): \(a(1)^4-4=-2\Rightarrow a=2\).`],
      S`\(y=2(x-2)^4-4\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => 2 * (x - 2) ** 4 - 4, color: "violet" }], points: [{ x: 2, y: -4, label: "(2, −4)", color: "blue" }, { x: 3, y: -2, label: "(3, −2)", color: "red" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("map x", S`Under \(y=3(x-2)^3+4\), what is the x-coordinate of the image of \((1,1)\)?`, num(3),
      "x + d.", [S`\(1+2=3\).`], S`\(3\)`),
    q("map y", S`Under \(y=3(x-2)^3+4\), what is the y-coordinate of the image of \((1,1)\)?`, num(7),
      "ay + c.", [S`\(3(1)+4\).`], S`\(7\)`),
    q("vertex", S`What is the x-coordinate of the vertex of \(y=-(x+5)^4+2\)?`, num(-5),
      "(x + 5) shifts left.", [S`\(d=-5\).`], S`\(-5\)`),
    q("factor k", S`Write \(y=(4x+8)^3\) as \(y=(k(x-d))^3\). What is \(d\)?`, num(-2),
      "Factor 4.", [S`\(4x+8=4(x+2)\).`], S`\(-2\)`),
    q("range", S`The range of \(y=-2(x-1)^4+6\) is \(y\le m\). Find \(m\).`, num(6),
      "a < 0: the vertex is the highest point.", [S`Vertex \((1,6)\).`], S`\(6\)`),
  ]),

  ...hard([
    ["Rewrite before you read", S`Write \(y=-(6-2x)^3+4\) in the form \(y=a(k(x-d))^3+c\), and give a simpler equivalent equation.`,
      [S`\(6-2x=-2(x-3)\), so \(y=-\left(-2(x-3)\right)^3+4\): \(a=-1\), \(k=-2\), \(d=3\), \(c=4\).`, S`\((-2(x-3))^3=-8(x-3)^3\), so \(y=8(x-3)^3+4\).`, S`Check at \(x=4\): \(-(6-8)^3+4=12\) and \(8(1)^3+4=12\) ✓.`],
      S`\(y=8(x-3)^3+4\): centre \((3,4)\), stretch by 8`,
      plane({ view: { xmin: 1, xmax: 5, ymin: -6, ymax: 14 }, curves: [{ f: (x) => -((6 - 2 * x) ** 3) + 4, color: "violet" }], points: [{ x: 3, y: 4, label: "(3, 4)", color: "blue" }, { x: 4, y: 12, label: "(4, 12)", color: "red" }, { x: 2, y: -4, label: "(2, −4)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Find two parameters", S`\(y=a(x-1)^3+c\) passes through \((2,5)\) and \((0,-1)\). Find \(a\) and \(c\).`,
      [S`\((2,5)\): \(a+c=5\). \((0,-1)\): \(-a+c=-1\).`, S`Add: \(2c=4\Rightarrow c=2\); then \(a=3\).`],
      S`\(y=3(x-1)^3+2\)`],
  ], [
    q("hard", S`Under \(y=-0.5\left(2(x-1)\right)^4+3\), find the y-coordinate of the image of \((2,16)\).`, num(-5),
      "ay + c.", [S`\(-0.5(16)+3\).`], S`\(-5\)`),
    q("hard", S`Find \(c\) if \(y=(x-2)^3+c\) passes through \((4,3)\).`, num(-5),
      "Substitute.", [S`\(8+c=3\).`], S`\(-5\)`),
    q("hard", S`Find \(a\) if \(y=a(x+1)^4-2\) passes through \((1,30)\).`, num(2),
      "Substitute.", [S`\(16a-2=30\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Why does the inside work 'backwards'?", "To get the same output as the parent at x, the input must be undone: solve k(x − d) = X for x to get x = X/k + d."],
      ["Does the order of transformations matter?", "Do stretches and reflections before translations. a and k can be done in either order because one acts on y and the other on x."],
      ["Why can a reflection in the y-axis look like one in the x-axis for x³?", "Because (−x)³ = −x³: the two equations are the same. For x⁴ they are not: (−x)⁴ = x⁴ leaves the graph unchanged."],
      ["How do I find a from a graph?", "Use the vertex or centre (d, c) for the translations, then substitute one more point to solve for a."],
      ["What is the domain and range of a transformed cubic?", "Both are all real numbers. For a quartic the range is y ≥ c (a > 0) or y ≤ c (a < 0)."],
    ],
    summary: [
      "y = a(k(x − d))ⁿ + c: (x, y) → (x/k + d, ay + c).",
      "Factor k out before reading d.",
      "Stretches and reflections first, translations last.",
      "Centre (x³) or vertex (x⁴) moves to (d, c).",
    ],
    next: "1.5 measures how fast a function changes: average rate of change and slopes of secants.",
  }),
];
