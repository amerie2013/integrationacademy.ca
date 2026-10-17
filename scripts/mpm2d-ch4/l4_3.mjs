// MPM2D 4.3 — Transformations & Vertex Form (self-study format): y = a(x − h)² + k as transformations of
// y = x²; reading the vertex, axis and optimal value; writing equations from a description or a point
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "4.3 Transformations & Vertex Form";
const base = { f: (x) => x * x, color: "gray" };

export const blocks = () => [
  intro({
    icon: "🎚️",
    title: "Transformations & Vertex Form",
    overview: String.raw`Every parabola is the graph of \(y=x^2\) moved, stretched or flipped. Vertex form \(y=a(x-h)^2+k\) shows exactly how: \(a\) stretches, compresses or reflects it, \(h\) shifts it left or right, and \(k\) shifts it up or down. In this lesson you will describe transformations, read the vertex, axis and optimal value straight from vertex form, and write the equation of a parabola from a description or from its vertex and one other point.`,
    goals: [
      "describe the effect of a, h and k on the graph of y = x²;",
      "state the vertex, axis of symmetry, direction of opening and optimal value from vertex form;",
      "map points of y = x² to the transformed parabola;",
      "write the equation of a parabola from a description of its transformations;",
      "find a from the vertex and one other point.",
    ],
    curriculum: "QR2 (identify the effect of a, h and k on y = a(x − h)² + k; sketch graphs by applying transformations; determine an equation from a graph)",
    prior: [
      [String.raw`Points on \(y=x^2\) for \(x=-2,\ldots,2\)?`, String.raw`\((\pm2,4)\), \((\pm1,1)\), \((0,0)\).`],
      [String.raw`\((x-3)\) is zero when?`, String.raw`\(x=3\).`],
      [String.raw`Vertex of \(y=x^2\)?`, String.raw`\((0,0)\).`],
    ],
    words: [
      ["Vertex form", "\\(y=a(x-h)^2+k\\)", "\\(y=2(x-3)^2+1\\)"],
      ["Translation", "a shift left, right, up or down", ""],
      ["Vertical stretch", "|a| > 1: narrower", ""],
      ["Reflection", "a < 0: flipped in the x-axis", ""],
    ],
  }),

  section("📌 What each letter does", String.raw`
  ${table(["Parameter", "Effect on y = x²", "Example"], [
    ["\\(a\\)", "\\(|a|>1\\) vertical stretch; \\(0<|a|<1\\) compression; \\(a<0\\) reflection in the x-axis", "\\(y=-3x^2\\): flipped, narrower"],
    ["\\(h\\)", "horizontal translation: \\(h>0\\) right, \\(h<0\\) left", "\\(y=(x-4)^2\\): right 4"],
    ["\\(k\\)", "vertical translation: up if \\(k>0\\), down if \\(k<0\\)", "\\(y=x^2-5\\): down 5"],
  ])}
  ${keyIdea(String.raw`In \(y=a(x-h)^2+k\) the vertex is \((h,k)\), the axis is \(x=h\), and the optimal value is \(k\) (a minimum if \(a>0\), a maximum if \(a<0\)). Watch the sign: \(y=(x+2)^2\) means \(h=-2\), a shift left.`)}
  ${plane({ view: { xmin: -6, xmax: 8, ymin: -6, ymax: 9 }, curves: [base, { f: (x) => 2 * (x - 3) ** 2 - 4, color: "violet" }], points: [{ x: 3, y: -4, label: "(3, −4)", color: "blue" }], step: { x: 1, y: 1 } }, "y = x² (grey) becomes y = 2(x − 3)² − 4: stretched by 2, right 3, down 4.")}`),

  section("📌 Explore", String.raw`<p>Move each slider on its own first. The dashed curve is \(y=x^2\); the blue points are the images of \((\pm2,4)\), \((\pm1,1)\) and \((0,0)\).</p>`),

  widget("transformLab", { init: [2, 3, -4] }),

  section("📌 Mapping points", String.raw`
  <p>Each point \((x,y)\) on \(y=x^2\) moves to \((x+h,\ ay+k)\). Apply the stretch or reflection to the \(y\)-value first, then the translations.</p>
  ${watchOut([
    "y = (x − 3)² moves right, not left; y = (x + 3)² moves left.",
    "a affects only the y-values (vertical stretch), not the x-values.",
    "Apply a before k: the image of (1, 1) under y = 2(x − 3)² − 4 is (4, 2·1 − 4) = (4, −2).",
    "The sign of a decides maximum or minimum.",
  ])}`),

  examples([
    ["Translations only", String.raw`Describe \(y=(x-4)^2+1\) as a transformation of \(y=x^2\) and state its vertex.`,
      [String.raw`\(h=4\): right 4. \(k=1\): up 1. \(a=1\): no stretch.`],
      String.raw`right 4, up 1; vertex \((4,1)\), minimum 1`],
    ["Reflection and stretch", String.raw`Describe \(y=-2(x+3)^2\) and state the vertex and optimal value.`,
      [String.raw`\(a=-2\): reflection in the \(x\)-axis and vertical stretch by 2.`, String.raw`\(h=-3\): left 3; \(k=0\).`],
      String.raw`vertex \((-3,0)\); maximum value \(0\)`,
      plane({ view: { xmin: -7, xmax: 3, ymin: -9, ymax: 5 }, curves: [base, { f: (x) => -2 * (x + 3) ** 2, color: "violet" }], points: [{ x: -3, y: 0, label: "(−3, 0)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["A compression", String.raw`Describe \(y=\tfrac12(x-1)^2-5\) and find the image of \((2,4)\).`,
      [String.raw`Compression by \(\frac12\), right 1, down 5.`, String.raw`\((2,4)\to(2+1,\ \tfrac12(4)-5)=(3,-3)\).`],
      String.raw`vertex \((1,-5)\); \((2,4)\to(3,-3)\)`],
    ["Writing the equation", String.raw`A parabola opens down, is stretched by a factor of 3 and has vertex \((2,-3)\). Write its equation.`,
      [String.raw`Opens down, stretch 3: \(a=-3\).`, String.raw`\(h=2\), \(k=-3\).`],
      String.raw`\(y=-3(x-2)^2-3\)`],
    ["Finding a", String.raw`A parabola has vertex \((1,4)\) and passes through \((3,-4)\). Find its equation.`,
      [String.raw`\(y=a(x-1)^2+4\).`, String.raw`Substitute \((3,-4)\): \(-4=a(2)^2+4\Rightarrow4a=-8\Rightarrow a=-2\).`],
      String.raw`\(y=-2(x-1)^2+4\)`,
      plane({ view: { xmin: -3, xmax: 5, ymin: -6, ymax: 6 }, curves: [{ f: (x) => -2 * (x - 1) ** 2 + 4, color: "violet" }], points: [{ x: 1, y: 4, label: "(1, 4)", color: "blue" }, { x: 3, y: -4, label: "(3, −4)", color: "red" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("vertex", String.raw`What is the \(x\)-coordinate of the vertex of \(y=(x+5)^2-2\)?`, num(-5),
      "(x + 5) = (x − (−5)).", [String.raw`\(h=-5\).`], String.raw`\(-5\)`),
    q("vertex", String.raw`What is the \(y\)-coordinate of the vertex of \(y=3(x-1)^2+7\)?`, num(7),
      "k is the y-coordinate.", [String.raw`\(k=7\).`], String.raw`\(7\)`),
    q("describe", String.raw`Compared with \(y=x^2\), the graph of \(y=-(x-2)^2\) is…`, choice(["reflected in the x-axis and moved right 2", "reflected and moved left 2", "stretched and moved right 2", "moved down 2"], 0),
      "a = −1, h = 2.", ["Reflection, then right 2."], "reflected, right 2"),
    q("find a", String.raw`A parabola has vertex \((0,1)\) and passes through \((2,9)\). Find \(a\).`, num(2),
      "y = a(x − 0)² + 1.", [String.raw`\(9=4a+1\Rightarrow a=2\).`], String.raw`\(a=2\)`),
    q("range", String.raw`What is the range of \(y=-4(x+1)^2+6\)?`, choice(["y ≤ 6", "y ≥ 6", "y ≤ −1", "all real numbers"], 0),
      "Opens down; maximum k.", [String.raw`\(a<0\), \(k=6\).`], String.raw`\(y\le6\)`),
  ]),

  wrapUp({
    qas: [
      ["Why does (x − 3) move the graph right?", "The vertex is where the bracket is zero: x − 3 = 0 at x = 3. Everything that happened at x = 0 now happens at x = 3."],
      ["Does a change the vertex?", "No. a stretches or reflects about the vertex; only h and k move it."],
      ["What does a negative k mean?", "A shift down. If a > 0 and k < 0, the parabola crosses the x-axis twice."],
      ["How do I find a from a graph?", "Read the vertex (h, k), pick another point (x, y) on the graph, substitute into y = a(x − h)² + k and solve for a."],
      ["Which order should I apply transformations in?", "Stretch or reflect first (multiply y by a), then translate (add h to x and k to y)."],
    ],
    summary: [
      "y = a(x − h)² + k: vertex (h, k), axis x = h, optimal value k.",
      "a: stretch (|a| > 1), compression (|a| < 1), reflection (a < 0).",
      "h: right if positive; k: up if positive.",
      "(x, y) → (x + h, ay + k).",
    ],
    next: "4.4 uses vertex form and the step pattern to graph parabolas quickly.",
  }),
];
