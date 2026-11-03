// MPM2D 4.2 — Key Features of a Parabola (self-study format): vertex, axis of symmetry, zeros, y-intercept,
// maximum/minimum, domain and range, from graphs and from y = ax² + bx + c
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "4.2 Key Features of a Parabola";
const P = (f, pts, view, step = { x: 1, y: 1 }) => plane({ view, curves: [{ f, color: "violet" }], points: pts, step });

export const blocks = () => [
  intro({
    icon: "🔑",
    title: "Key Features of a Parabola",
    overview: String.raw`Every parabola has the same set of features: a turning point called the vertex, a vertical axis of symmetry through it, a maximum or minimum value, a \(y\)-intercept, and up to two zeros. In this lesson you will read these features from graphs, find them from the equation \(y=ax^2+bx+c\), use symmetry to locate the axis, describe the domain and range, and interpret the features in context.`,
    goals: [
      "identify the vertex, axis of symmetry, zeros, y-intercept and optimal value of a parabola;",
      "decide whether the vertex is a maximum or a minimum from the sign of a;",
      "find the axis and vertex from y = ax² + bx + c;",
      "use symmetry to find the axis from two points with the same y-value;",
      "state the domain and range and interpret features in context.",
    ],
    curriculum: "QR1 (identify the key features of a parabola), QR4 (solve problems involving the maximum or minimum value)",
    prior: [
      [String.raw`\(y=x^2-4x\) at \(x=2\)?`, String.raw`\(-4\).`],
      [String.raw`Midpoint of \(1\) and \(7\)?`, String.raw`\(4\).`],
      [String.raw`Where does any graph cross the \(y\)-axis?`, String.raw`Where \(x=0\).`],
    ],
    words: [
      ["Vertex", "the turning point", "\\((3,-4)\\)"],
      ["Axis of symmetry", "the vertical line through the vertex", "\\(x=3\\)"],
      ["Zeros", "x-intercepts, where y = 0", ""],
      ["Optimal value", "the maximum or minimum y-value", ""],
    ],
  }),

  section("📌 The features", String.raw`
  ${P((x) => x * x - 6 * x + 5, [{ x: 3, y: -4, label: "vertex (3, −4)", color: "blue" }, { x: 1, y: 0, label: "(1, 0)", color: "red" }, { x: 5, y: 0, label: "(5, 0)", color: "red" }, { x: 0, y: 5, label: "(0, 5)", color: "green" }], { xmin: -2, xmax: 8, ymin: -6, ymax: 10 })}
  <p>For \(y=x^2-6x+5\): vertex \((3,-4)\), axis \(x=3\), zeros \(1\) and \(5\), \(y\)-intercept \(5\), minimum value \(-4\). Domain: all real numbers; range: \(y\ge-4\).</p>
  ${keyIdea(String.raw`For \(y=ax^2+bx+c\): the axis of symmetry is \(x=-\dfrac{b}{2a}\); substitute it to get the vertex. If \(a>0\) the parabola opens up (minimum); if \(a<0\) it opens down (maximum). The \(y\)-intercept is \(c\).`)}`),

  section("📌 Explore", String.raw`<p>Change \(a\), \(b\) and \(c\). Watch how the sign of \(a\) flips the parabola, how \(c\) moves the \(y\)-intercept, and how the zeros disappear when the vertex moves above the \(x\)-axis (for \(a>0\)).</p>`),

  widget("parabolaFeatures", { init: [1, -6, 5] }),

  section("📌 Symmetry helps", String.raw`
  <p>Points with the same \(y\)-value are mirror images across the axis. If \((1,7)\) and \((5,7)\) are on a parabola, the axis is halfway: \(x=3\). In particular, the axis is halfway between the zeros.</p>
  ${watchOut([
    "The axis of symmetry is a line: write x = 3, not just 3.",
    "−b/(2a): keep the sign of b. For y = x² − 6x + 5, b = −6, so the axis is x = 3.",
    "Range depends on the vertex and the direction of opening; the domain is all real numbers.",
    "Not every parabola has zeros.",
  ])}`),

  examples([
    ["Features from the equation", String.raw`Find the axis, vertex, \(y\)-intercept and range of \(y=x^2+4x-1\).`,
      [String.raw`<b>Match with standard form.</b> \[y=ax^2+bx+c\qquad\text{axis of symmetry: }x=-\frac{b}{2a}\] Matching gives \(a=1\), \(b=4\), \(c=-1\).`,
        String.raw`<b>Axis.</b> \(x=-\frac{4}{2(1)}=-2\).`,
        String.raw`<b>Vertex.</b> The vertex is on the axis, so substitute \(x=-2\): \(y=(-2)^2+4(-2)-1=4-8-1=-5\). Vertex \((-2,-5)\).`,
        String.raw`<b>Direction.</b> \(a=1>0\), so the parabola opens up and the vertex is a minimum.`,
        String.raw`<b>\(y\)-intercept.</b> At \(x=0\), \(y=c=-1\).`,
        String.raw`<b>Range.</b> The lowest \(y\)-value is \(-5\), so \(\{y\in\mathbb R\mid y\ge-5\}\).`,
        String.raw`<b>Check with symmetry.</b> \(x=0\) and \(x=-4\) are both 2 units from the axis: \((-4)^2+4(-4)-1=16-16-1=-1\), the same as at \(x=0\) ✓.`],
      String.raw`axis \(x=-2\); vertex \((-2,-5)\); \(y\)-intercept \(-1\); range \(y\ge-5\)`,
      P((x) => x * x + 4 * x - 1, [{ x: -2, y: -5, label: "(−2, −5)", color: "blue" }, { x: 0, y: -1, label: "(0, −1)", color: "green" }, { x: -4, y: -1, label: "(−4, −1)", color: "green" }], { xmin: -7, xmax: 3, ymin: -7, ymax: 6 })],
    ["A maximum", String.raw`Find the vertex and range of \(y=-2x^2+8x-3\).`,
      [String.raw`<b>Match with standard form</b> \(y=ax^2+bx+c\): \(a=-2\), \(b=8\), \(c=-3\).`,
        String.raw`<b>Axis.</b> \(x=-\frac{b}{2a}=-\frac{8}{2(-2)}=-\frac{8}{-4}=2\).`,
        String.raw`<b>Vertex.</b> Substitute \(x=2\): \(y=-2(2)^2+8(2)-3=-8+16-3=5\). Vertex \((2,5)\).`,
        String.raw`<b>Direction.</b> \(a=-2<0\), so the parabola opens down: the vertex is the highest point, a maximum of \(5\).`,
        String.raw`<b>Range.</b> No \(y\)-value is above 5: \(\{y\in\mathbb R\mid y\le5\}\).`,
        String.raw`<b>Check.</b> \(x=1\) and \(x=3\) are 1 unit either side of the axis: \(-2+8-3=3\) and \(-18+24-3=3\), equal ✓.`],
      String.raw`vertex \((2,5)\), maximum \(5\); range \(y\le5\)`,
      P((x) => -2 * x * x + 8 * x - 3, [{ x: 2, y: 5, label: "(2, 5)", color: "blue" }, { x: 0, y: -3, label: "(0, −3)", color: "green" }, { x: 1, y: 3 }, { x: 3, y: 3 }], { xmin: -1, xmax: 5, ymin: -4, ymax: 7 })],
    ["Reading a graph", "Read the features of the parabola shown.",
      [String.raw`<b>Zeros.</b> The zeros are where the graph crosses the \(x\)-axis (\(y=0\)): \(x=-3\) and \(x=1\).`,
        String.raw`<b>Axis.</b> The axis of symmetry is halfway between the zeros: \(x=\frac{-3+1}{2}=-1\).`,
        String.raw`<b>Vertex.</b> The vertex is on the axis. Reading the graph at \(x=-1\) gives \((-1,4)\). The parabola opens down, so \(4\) is the maximum.`,
        String.raw`<b>\(y\)-intercept.</b> The graph crosses the \(y\)-axis (\(x=0\)) at \(3\).`,
        String.raw`<b>Check with an equation.</b> Vertex form \(y=a(x+1)^2+4\) through \((1,0)\): \(0=4a+4\), so \(a=-1\). Then at \(x=0\): \(-1(1)^2+4=3\) ✓.`],
      String.raw`zeros \(-3\), \(1\); axis \(x=-1\); vertex \((-1,4)\); \(y\)-intercept \(3\)`,
      P((x) => -((x + 1) ** 2) + 4, [], { xmin: -5, xmax: 3, ymin: -3, ymax: 6 })],
    ["Using symmetry", String.raw`\((1,7)\) and \((5,7)\) are on a parabola whose vertex has \(y\)-coordinate \(-1\). Find the vertex.`,
      [String.raw`<b>Rule.</b> A parabola is symmetric about its axis, so two points with the <b>same \(y\)-value</b> are the same distance from the axis. The axis is halfway between them.`,
        String.raw`<b>Axis.</b> \(x=\frac{1+5}{2}=\frac62=3\).`,
        String.raw`<b>Vertex.</b> The vertex is on the axis, so its \(x\)-coordinate is \(3\); its \(y\)-coordinate is given as \(-1\). Vertex \((3,-1)\).`,
        String.raw`<b>Check.</b> Each point is 2 units from the axis: \(3-1=2\) and \(5-3=2\) ✓.`],
      String.raw`\((3,-1)\)`,
      P((x) => 2 * (x - 3) ** 2 - 1, [{ x: 1, y: 7, label: "(1, 7)", color: "green" }, { x: 5, y: 7, label: "(5, 7)", color: "green" }, { x: 3, y: -1, label: "(3, −1)", color: "blue" }], { xmin: -1, xmax: 7, ymin: -2, ymax: 9 })],
    ["In context", String.raw`A ball's height is \(h=-5t^2+20t+1\) (metres, seconds). Find its maximum height and when it occurs, and its starting height.`,
      [String.raw`<b>Match with standard form</b> \(h=at^2+bt+c\): \(a=-5\), \(b=20\), \(c=1\). \(a<0\), so there is a maximum.`,
        String.raw`<b>When.</b> The maximum is on the axis: \(t=-\frac{b}{2a}=-\frac{20}{2(-5)}=-\frac{20}{-10}=2\) s.`,
        String.raw`<b>Maximum height.</b> Substitute \(t=2\): \(h=-5(2)^2+20(2)+1=-20+40+1=21\) m.`,
        String.raw`<b>Starting height.</b> The start is \(t=0\): \(h=c=1\) m.`,
        String.raw`<b>Check.</b> \(t=1\) and \(t=3\) are equally far from \(t=2\): \(-5+20+1=16\) and \(-45+60+1=16\), equal ✓.`],
      String.raw`maximum \(21\) m at \(2\) s; it started at \(1\) m`,
      plane({ view: { xmin: -0.5, xmax: 4.5, ymin: -2, ymax: 24 }, curves: [{ f: (t) => -5 * t * t + 20 * t + 1, a: 0, b: 4.05, color: "violet" }], points: [{ x: 2, y: 21, label: "(2, 21)", color: "blue" }, { x: 0, y: 1, label: "(0, 1)", color: "green" }], xlabel: "t (s)", ylabel: "h (m)", step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("axis", String.raw`Find the axis of symmetry of \(y=x^2+8x+3\). Give the value of \(x\).`, num(-4),
      "x = −b/(2a).", [String.raw`\(-\frac{8}{2}=-4\).`], String.raw`\(x=-4\)`),
    q("vertex", String.raw`Find the \(y\)-coordinate of the vertex of \(y=x^2-4x+1\).`, num(-3),
      "Axis first.", [String.raw`Axis \(x=2\); \(4-8+1=-3\).`], String.raw`\(-3\)`),
    q("max or min", String.raw`Does \(y=-3x^2+6x+2\) have a maximum or a minimum?`, choice(["maximum", "minimum", "neither"], 0),
      "Look at the sign of a.", [String.raw`\(a=-3<0\): opens down.`], "maximum"),
    q("symmetry", String.raw`\((-2,5)\) and \((6,5)\) are on a parabola. Find the axis of symmetry (the value of \(x\)).`, num(2),
      "Halfway between.", [String.raw`\(\frac{-2+6}{2}=2\).`], String.raw`\(x=2\)`),
    q("context", String.raw`A ball's height is \(h=-5t^2+30t+2\). What is its maximum height (m)?`, num(47),
      "Find t at the vertex first.", [String.raw`\(t=3\); \(-45+90+2=47\).`], String.raw`\(47\) m`),
  ]),

  wrapUp({
    qas: [
      ["Why is the axis x = −b/(2a)?", "It is halfway between the zeros (when they exist), and the zeros of ax² + bx + c average to −b/(2a). You will see why in Chapter 5."],
      ["Can a parabola have exactly one zero?", "Yes, when the vertex is on the x-axis — the parabola just touches it."],
      ["What is the difference between the vertex and the optimal value?", "The vertex is a point (h, k); the optimal value is its y-coordinate k, the maximum or minimum of y."],
      ["Why is the domain always all real numbers?", "You can substitute any x into ax² + bx + c. In context, the domain may be limited (time cannot be negative)."],
      ["How does the y-intercept connect to c?", "At x = 0, ax² + bx + c = c."],
    ],
    summary: [
      "Vertex, axis, zeros, y-intercept, optimal value, domain and range.",
      "Axis x = −b/(2a); vertex by substitution; y-intercept c.",
      "a > 0 minimum, a < 0 maximum.",
      "Symmetric points share the axis halfway between them.",
    ],
    next: "4.3 shows how vertex form describes a parabola as a transformation of y = x².",
  }),
];
