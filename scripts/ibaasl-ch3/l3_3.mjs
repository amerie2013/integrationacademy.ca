// IB AA SL 3.3 — Transformations of Functions: translations, reflections, vertical and horizontal stretches, composite transformations
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "3.3 Transformations of Functions";
export const ID = "529e300f-102f-4977-b6e8-9411d6cae1ce";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🔀",
    title: "Transformations of Functions",
    overview: S`Once you know the graph of a basic function such as \(y=x^2\) or \(y=\sqrt x\), you can draw a whole family of graphs by moving, reflecting and stretching it. In this lesson you will describe and apply translations, reflections and stretches, find the image of a point, build an equation from a description, and see why the order of transformations can matter.`,
    goals: [
      "describe the translations \\(y=f(x)+b\\) and \\(y=f(x-a)\\);",
      "describe the reflections \\(y=-f(x)\\) and \\(y=f(-x)\\);",
      "describe the stretches \\(y=pf(x)\\) (vertical) and \\(y=f(qx)\\) (horizontal);",
      "find the image of a point under one or more transformations;",
      "write the equation of a transformed graph and apply composite transformations in order.",
    ],
    curriculum: "SL 2.11 (transformations of graphs: translations y = f(x) + b, y = f(x − a); reflections in both axes; vertical stretch y = pf(x); horizontal stretch y = f(qx); composite transformations)",
    prior: [
      [S`Evaluate \(f(5)\) for \(f(x)=(x-2)^2\).`, S`\(9\).`],
      [S`Where is the vertex of \(y=(x-2)^2+3\)?`, S`\((2,3)\).`],
      [S`Reflect \((3,-1)\) in the y-axis.`, S`\((-3,-1)\).`],
    ],
    words: [
      ["Translation", "a shift without turning or resizing", "\\(y=f(x-2)\\): right 2"],
      ["Reflection", "a mirror image in an axis", "\\(y=-f(x)\\): in the x-axis"],
      ["Vertical stretch", "\\(y=pf(x)\\): every y-coordinate × p", "\\(y=3\\sqrt x\\)"],
      ["Horizontal stretch", "\\(y=f(qx)\\): every x-coordinate × \\(\\frac1q\\)", "\\(y=\\sqrt{2x}\\)"],
      ["Image", "where a point ends up after a transformation", "\\((4,2)\\to(2,2)\\)"],
    ],
  }),

  section("📌 Outside changes y, inside changes x", S`
  ${table(["Equation", "Transformation", "Point (x, y) goes to"], [
    [S`\(y=f(x)+b\)`, "translate up b (down if b < 0)", S`\((x,\ y+b)\)`],
    [S`\(y=f(x-a)\)`, "translate right a (left if a < 0)", S`\((x+a,\ y)\)`],
    [S`\(y=-f(x)\)`, "reflect in the x-axis", S`\((x,\ -y)\)`],
    [S`\(y=f(-x)\)`, "reflect in the y-axis", S`\((-x,\ y)\)`],
    [S`\(y=pf(x)\)`, "vertical stretch, scale factor p", S`\((x,\ py)\)`],
    [S`\(y=f(qx)\)`, S`horizontal stretch, scale factor \(\frac1q\)`, S`\(\left(\frac xq,\ y\right)\)`],
  ])}
  ${plane({ view: { xmin: -5, xmax: 6, ymin: -3, ymax: 9 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x, color: "gray" }, { f: (x) => x * x + 3, color: "violet" }, { f: (x) => (x - 2) ** 2, color: "blue" }], points: [P(0, 3, "(0, 3)", "violet"), P(2, 0, "(2, 0)", "blue")] }, "Grey y = x². Violet y = x² + 3 (up 3). Blue y = (x − 2)² (right 2)")}
  ${keyIdea(S`Changes outside the function (to the output) act vertically and do what they say. Changes inside the brackets (to the input) act horizontally and do the opposite: \(f(x-2)\) moves right, \(f(2x)\) squashes by a factor \(\frac12\).`)}`),

  section("📌 Reflections and stretches", S`
  ${plane({ view: { xmin: -9, xmax: 9, ymin: -4, ymax: 4 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => -Math.sqrt(x), a: 0, color: "violet" }, { f: (x) => Math.sqrt(-x), b: 0, color: "blue" }], points: [P(4, 2, "(4, 2)", "gray"), P(4, -2, "(4, −2)", "violet"), P(-4, 2, "(−4, 2)", "blue")] }, "y = √x (grey), y = −√x (violet, in the x-axis), y = √(−x) (blue, in the y-axis)")}
  ${plane({ view: { xmin: -5, xmax: 5, ymin: -1, ymax: 8 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => Math.abs(x), color: "gray" }, { f: (x) => 2 * Math.abs(x), color: "violet" }, { f: (x) => Math.abs(x / 2), color: "blue" }], points: [P(2, 4, "(2, 4)", "violet"), P(4, 2, "(4, 2)", "blue")] }, "From y = |x| through (2, 2): y = 2|x| (vertical ×2) and y = |x/2| (horizontal ×2)")}
  ${watchOut([
    "f(x − 3) moves RIGHT 3, f(x + 3) moves LEFT 3.",
    "y = f(2x) is a horizontal stretch with factor ½ (a squash), not 2.",
    "Apply composite transformations in the order the question gives; stretch then translate is not translate then stretch.",
    "Points on the axis of a reflection or stretch do not move.",
  ])}`),

  section("📌 Explore", S`<p>Pick a parent function and move \(a\), \(b\), \(h\) and \(k\). The grey graph is the parent; the readout lists each transformation in words.</p>`),

  widget("ibTransform", { init: "sq" }),

  examples([
    ["Level 1 · Two translations", S`Describe how \(y=x^2+3\) and \(y=(x-2)^2\) are obtained from \(y=x^2\).`,
      [S`\(y=x^2+3=f(x)+3\): translate up 3; the vertex moves to \((0,3)\).`, S`\(y=(x-2)^2=f(x-2)\): translate right 2; the vertex moves to \((2,0)\).`],
      "up 3; right 2"],
    ["Level 1 · Images of a point", S`\((4,-1)\) lies on \(y=f(x)\). Find its image on \(y=f(x)+5\), \(y=f(x+3)\), \(y=-f(x)\) and \(y=f(-x)\).`,
      [S`\(f(x)+5\): \((4,4)\). \(f(x+3)\): \((1,-1)\).`, S`\(-f(x)\): \((4,1)\). \(f(-x)\): \((-4,-1)\).`],
      S`\((4,4)\), \((1,-1)\), \((4,1)\), \((-4,-1)\)`],
    ["Level 2 · Stretches", S`\((4,2)\) lies on \(y=\sqrt x\). Find its image on \(y=3\sqrt x\) and on \(y=\sqrt{2x}\).`,
      [S`\(y=3f(x)\): y-coordinates ×3: \((4,6)\).`, S`\(y=f(2x)\): x-coordinates ×\(\frac12\): \((2,2)\). Check: \(\sqrt{2\cdot2}=2\) ✓.`],
      S`\((4,6)\) and \((2,2)\)`,
      plane({ view: { xmin: -1, xmax: 9, ymin: -1, ymax: 8 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => 3 * Math.sqrt(x), a: 0, color: "violet" }, { f: (x) => Math.sqrt(2 * x), a: 0, color: "blue" }], points: [P(4, 2, "(4, 2)", "gray"), P(4, 6, "(4, 6)", "violet"), P(2, 2, "(2, 2)", "blue")] })],
    ["Level 2 · An equation from a description", S`The graph of \(y=|x|\) is translated 3 left, stretched vertically by factor 2, then translated down 1. Find its equation.`,
      [S`Left 3: \(y=|x+3|\). Vertical stretch ×2: \(y=2|x+3|\).`, S`Down 1: \(y=2|x+3|-1\). The corner moves from \((0,0)\) to \((-3,-1)\).`],
      S`\(y=2|x+3|-1\)`,
      plane({ view: { xmin: -7, xmax: 3, ymin: -2, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => Math.abs(x), color: "gray" }, { f: (x) => 2 * Math.abs(x + 3) - 1, color: "violet" }], points: [P(-3, -1, "(−3, −1)", "violet")] })],
    ["Level 3 · Order matters", S`Starting from \(y=x^2\): (a) stretch vertically by 2, then translate up 3; (b) translate up 3, then stretch vertically by 2. Compare.`,
      [S`(a) \(2x^2\), then \(2x^2+3\).`, S`(b) \(x^2+3\), then \(2(x^2+3)=2x^2+6\).`, S`Different graphs: the stretch in (b) also doubles the translation.`],
      S`\(2x^2+3\) vs \(2x^2+6\)`],
  ]),

  practice([
    q("Level 1 · translation", S`\(f(x)=x^2\). What is the y-coordinate of the vertex of \(y=f(x)-4\)?`, num(-4),
      "Down 4.", [S`Vertex \((0,-4)\).`], S`\(-4\)`),
    q("Level 1 · horizontal shift", S`\((2,5)\) lies on \(y=f(x)\). What is the x-coordinate of its image on \(y=f(x-3)\)?`, num(5),
      "f(x − 3) moves right 3.", [S`\(2+3\).`], S`\(5\)`),
    q("Level 2 · horizontal stretch", S`\((6,4)\) lies on \(y=f(x)\). What is the x-coordinate of its image on \(y=f(2x)\)?`, num(3),
      "x-coordinates are multiplied by ½.", [S`\(6\times\frac12\).`], S`\(3\)`),
    q("Level 2 · reflection", S`\((1,7)\) lies on \(y=f(x)\). What is the y-coordinate of its image on \(y=-f(x)\)?`, num(-7),
      "Reflect in the x-axis.", [S`\((1,-7)\).`], S`\(-7\)`),
    q("Level 2 · which reflection", S`\(y=f(-x)\) is a reflection of \(y=f(x)\) in:`, choice(["the y-axis", "the x-axis", "the line y = x", "the origin"], 0),
      "The input changes sign.", [S`\((x,y)\to(-x,y)\).`], "the y-axis"),
  ]),

  ...hard([
    ["A chain of transformations", S`Describe how \(y=-2(x-1)^2+3\) is obtained from \(y=x^2\), and find the image of \((2,4)\).`,
      [S`Right 1: \((x-1)^2\). Vertical stretch ×2 and reflect in the x-axis: \(-2(x-1)^2\). Up 3: \(-2(x-1)^2+3\).`, S`\((2,4)\to(3,4)\to(3,-8)\to(3,-5)\).`, S`Vertex \((0,0)\to(1,3)\), now a maximum.`],
      S`image \((3,-5)\); vertex \((1,3)\)`,
      plane({ view: { xmin: -3, xmax: 5, ymin: -7, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x, color: "gray" }, { f: (x) => -2 * (x - 1) ** 2 + 3, color: "violet" }], points: [P(2, 4, "(2, 4)", "gray"), P(3, -5, "(3, −5)", "violet"), P(1, 3, "(1, 3)", "amber")] })],
    ["Transforming a piecewise graph", S`The graph of \(f\) joins \(A(-2,0)\), \(B(0,4)\) and \(C(3,1)\). Find the images of \(A\), \(B\), \(C\) on \(y=f(x+1)-2\) and on \(y=2f(-x)\).`,
      [S`\(f(x+1)-2\): left 1, down 2: \(A'(-3,-2)\), \(B'(-1,2)\), \(C'(2,-1)\).`, S`\(2f(-x)\): reflect in the y-axis, then y ×2: \(A''(2,0)\), \(B''(0,8)\), \(C''(-3,2)\).`, S`Join the image points with straight segments in the same order.`],
      "as listed",
      plane({ view: { xmin: -4, xmax: 4, ymin: -3, ymax: 9 }, step: { x: 1, y: 1 }, segs: [{ pts: [[-2, 0], [0, 4], [3, 1]], color: "gray" }, { pts: [[-3, -2], [-1, 2], [2, -1]], color: "violet" }, { pts: [[2, 0], [0, 8], [-3, 2]], color: "blue" }], points: [P(0, 4, "B", "gray"), P(-1, 2, "B′", "violet"), P(0, 8, "B″", "blue")] }, "Grey f; violet f(x + 1) − 2; blue 2f(−x)")],
  ], [
    q("Level 3 · combined", S`\((3,-2)\) lies on \(y=f(x)\). Find the y-coordinate of its image on \(y=3f(x)+1\).`, num(-5),
      "Stretch, then add 1.", [S`\(3(-2)+1\).`], S`\(-5\)`),
    q("Level 3 · horizontal stretch", S`\((8,5)\) lies on \(y=f(x)\). Find the x-coordinate of its image on \(y=f\left(\frac12x\right)\).`, num(16),
      "f(qx) multiplies x by 1/q.", [S`\(\frac12x=8\Rightarrow x=16\).`], S`\(16\)`),
    q("Level 3 · square-root graph", S`\((9,3)\) lies on \(y=\sqrt x\). Find the y-coordinate of its image on \(y=\sqrt{x-4}+2\).`, num(5),
      "Right 4, up 2.", [S`\((13,5)\).`], S`\(5\)`),
  ]),

  wrapUp({
    qas: [
      ["Why do inside changes go the 'wrong' way?", "f(x − 2) needs x to be 2 larger to give the same output as f before, so every point moves right."],
      ["Is y = f(2x) a stretch or a squash?", "IB calls it a horizontal stretch with scale factor ½ — it pulls points towards the y-axis."],
      ["Does the order of transformations matter?", "Vertical and horizontal changes are independent, but a stretch and a translation in the same direction do not commute."],
      ["How do I write the equation from a description?", "Apply each step to the current equation in order, replacing x or f as each rule says."],
      ["Which points stay fixed?", "Points on the mirror line or the stretch axis, e.g. x-intercepts under y = pf(x)."],
    ],
    summary: [
      "f(x) + b up b; f(x − a) right a.",
      "−f(x) reflects in the x-axis; f(−x) in the y-axis.",
      "pf(x): vertical ×p; f(qx): horizontal ×1/q.",
      "Apply composite transformations in the given order.",
    ],
    next: "3.4 graphs quadratic functions in vertex, factored and standard form.",
  }),
];
