// MCF3M 1.5 — Transformations of Quadratic Functions: the roles of k (vertical translation), h (horizontal
// translation), and a (vertical stretch/compression, reflection in the x-axis), one parameter at a time.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, txt, hard, plane } from "../lib.mjs";
const S = String.raw;

export const TITLE = "1.5 Transformations of Quadratic Functions";
const P0 = { f: (x) => x * x, color: "gray" };

export const blocks = () => [
  intro({
    icon: "🔀",
    title: "Transformations of Quadratic Functions",
    overview: S`Every parabola in this course is the basic parabola \(f(x)=x^2\) moved, stretched or flipped. In \(g(x)=a(x-h)^2+k\) each letter has one job: \(k\) slides the graph up or down, \(h\) slides it left or right, and \(a\) stretches, compresses or reflects it vertically. This lesson studies the three parameters one at a time, using key points of \(y=x^2\) and the reason behind each rule.`,
    goals: [
      "describe the effect of \\(k\\) in \\(y=x^2+k\\) as a vertical translation;",
      "describe the effect of \\(h\\) in \\(y=(x-h)^2\\) as a horizontal translation, and explain the sign;",
      "describe the effect of \\(a\\) in \\(y=ax^2\\) as a vertical stretch or compression, with a reflection when \\(a<0\\);",
      "map key points of \\(y=x^2\\) to the transformed graph;",
      "write the equation of a transformed parabola from a description or a graph.",
    ],
    curriculum: "A2.5 (determine, through investigation, the roles of a, h and k in f(x) = a(x − h)² + k and describe these roles as transformations of f(x) = x²: translations, reflections in the x-axis, vertical stretches and compressions)",
    prior: [
      [S`List the points of \(y=x^2\) for \(x=-2,-1,0,1,2\).`, S`\((-2,4),(-1,1),(0,0),(1,1),(2,4)\).`],
      [S`What is the vertex and axis of symmetry of \(y=x^2\)?`, S`Vertex \((0,\,0)\); axis \(x=0\).`],
      [S`Evaluate \((x-3)^2\) at \(x=3\).`, S`\(0\).`],
    ],
    words: [
      ["Transformation", "a change in position, size or orientation of a graph", "shift, stretch, reflection"],
      ["Vertical translation", "every point moves up or down by k", "\\(y=x^2+3\\): up 3"],
      ["Horizontal translation", "every point moves left or right by h", "\\(y=(x-2)^2\\): right 2"],
      ["Vertical stretch / compression", "every y-coordinate is multiplied by |a|", "\\(y=3x^2\\): stretch by 3"],
      ["Reflection in the x-axis", "every y-coordinate changes sign (a < 0)", "\\(y=-x^2\\)"],
    ],
  }),

  section("📌 The key points of y = x²", S`
  <p>Use five points of the parent: \((0,0)\), \((\pm1,\,1)\), \((\pm2,\,4)\). From the vertex, the pattern is <b>over 1, up 1; over 2, up 4</b>. Every transformation moves these points by a rule.</p>
  ${table(["Equation", "Transformation of y = x²", "Point rule", "Vertex"], [
    ["\\(y=x^2+k\\)", "vertical translation by k (up if k > 0, down if k < 0)", "\\((x,\\,y)\\to(x,\\,y+k)\\)", "\\((0,\\,k)\\)"],
    ["\\(y=(x-h)^2\\)", "horizontal translation by h (right if h > 0, left if h < 0)", "\\((x,\\,y)\\to(x+h,\\,y)\\)", "\\((h,\\,0)\\)"],
    ["\\(y=ax^2\\)", "vertical stretch by |a| if |a| > 1, compression if 0 < |a| < 1; reflection in the x-axis if a < 0", "\\((x,\\,y)\\to(x,\\,ay)\\)", "\\((0,\\,0)\\)"],
  ])}
  ${keyIdea(S`Why does \(y=(x-3)^2\) move <b>right</b>? Its vertex is where the bracket is zero, \(x-3=0\), so \(x=3\). The new graph reaches each output \(3\) units later than \(y=x^2\) does, so every point moves \(3\) to the right. The sign inside the bracket looks opposite to the direction.`)}
  ${plane({ view: { xmin: -4, xmax: 6, ymin: -2, ymax: 8 }, curves: [P0, { f: (x) => (x - 3) ** 2, color: "violet" }, { f: (x) => x * x + 2, color: "blue" }], points: [{ x: 3, y: 0, label: "(3, 0)", color: "violet" }, { x: 0, y: 2, label: "(0, 2)", color: "blue" }], step: { x: 1, y: 1 } }, "Grey y = x²; blue y = x² + 2 (up 2); violet y = (x − 3)² (right 3).")}`),

  widget("transformLab", { init: [-2, 1, 3] }),

  section("⚠️ Watch the signs", S`
  ${watchOut([
    "y = (x + 4)² moves LEFT 4, because x + 4 = x − (−4), so h = −4.",
    "y = x² − 5 moves DOWN 5 (k = −5); the sign outside the bracket acts directly.",
    "a multiplies the y-coordinates, not the x-coordinates: (2, 4) → (2, 4a).",
    "y = −x² is a reflection, NOT a shift down: the vertex stays at (0, 0).",
    "0 < a < 1 makes the parabola wider (compression), a > 1 makes it narrower (stretch).",
  ])}`),

  examples([
    ["Vertical translation", S`Describe the graph of \(g(x)=x^2-4\) as a transformation of \(f(x)=x^2\), give the image of the five key points, and state the vertex and range.`,
      [S`<b>Rule.</b> \(g(x)=f(x)-4\): every output of \(f\) is decreased by \(4\), so every point moves \(4\) units <b>down</b>: \((x,\,y)\to(x,\,y-4)\).`,
        S`<b>Images.</b> \((0,0)\to(0,-4)\), \((1,1)\to(1,-3)\), \((-1,1)\to(-1,-3)\), \((2,4)\to(2,0)\), \((-2,4)\to(-2,0)\).`,
        S`<b>Vertex and axis.</b> The vertex moves from \((0,\,0)\) to \((0,\,-4)\); the axis of symmetry stays \(x=0\).`,
        S`<b>Range.</b> The lowest output is now \(-4\): \(\{y\in\mathbb{R}\mid y\ge-4\}\).`,
        S`<b>Check by substituting.</b> \(g(2)=4-4=0\) ✓, so \((2,\,0)\) really is on \(g\). The graph also shows the new \(x\)-intercepts at \(\pm2\) ✓`],
      S`translation 4 units down; vertex (0, −4); range y ≥ −4`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -5, ymax: 6 }, curves: [P0, { f: (x) => x * x - 4, color: "violet" }], points: [{ x: 0, y: -4, label: "(0, −4)", color: "amber" }, { x: 2, y: 0, label: "(2, 0)", color: "violet" }, { x: -2, y: 0, label: "(−2, 0)", color: "violet" }, { x: 1, y: -3, label: "(1, −3)", color: "violet" }], step: { x: 1, y: 1 } })],

    ["Horizontal translation", S`Describe \(g(x)=(x+2)^2\) as a transformation of \(f(x)=x^2\). Find its vertex, axis of symmetry and the images of \((1,1)\) and \((2,4)\).`,
      [S`<b>Write in the form \((x-h)^2\).</b> \(x+2=x-(-2)\), so \(h=-2\).`,
        S`<b>Reason.</b> The vertex is where the bracket equals zero: \(x+2=0\Rightarrow x=-2\). Every output of \(f\) now happens \(2\) units earlier, so every point moves \(2\) units <b>left</b>: \((x,\,y)\to(x-2,\,y)\).`,
        S`<b>Images.</b> \((1,\,1)\to(-1,\,1)\) and \((2,\,4)\to(0,\,4)\). Vertex \((0,0)\to(-2,\,0)\); axis \(x=-2\).`,
        S`<b>Check by substituting.</b> \(g(0)=(0+2)^2=4\) ✓, so \((0,\,4)\) is on the graph. \(g(-1)=1\) ✓`,
        S`<b>Note.</b> The shape and the range \(y\ge0\) do not change; only the position does.`],
      S`translation 2 units left; vertex (−2, 0); axis x = −2; (1, 1) → (−1, 1), (2, 4) → (0, 4)`,
      plane({ view: { xmin: -6, xmax: 3, ymin: -1, ymax: 7 }, curves: [P0, { f: (x) => (x + 2) ** 2, color: "violet" }], vlines: [{ x: -2, color: "green", dash: true }], points: [{ x: -2, y: 0, label: "(−2, 0)", color: "amber" }, { x: 0, y: 4, label: "(0, 4)", color: "violet" }, { x: -1, y: 1, label: "(−1, 1)", color: "violet" }], step: { x: 1, y: 1 } })],

    ["Vertical stretch", S`Graph \(g(x)=3x^2\) and \(h(x)=\tfrac12x^2\) using key points, and compare them with \(y=x^2\).`,
      [S`<b>Rule.</b> \(y=ax^2\) multiplies every \(y\)-coordinate by \(a\): \((x,\,y)\to(x,\,ay)\). The vertex \((0,0)\) does not move, because \(a\times0=0\).`,
        S`<b>\(g(x)=3x^2\) (stretch by 3).</b> \((1,1)\to(1,3)\), \((2,4)\to(2,12)\). From the vertex: over 1, up 3. The graph is <b>narrower</b>.`,
        S`<b>\(h(x)=\tfrac12x^2\) (compression by \(\tfrac12\)).</b> \((1,1)\to(1,\,0.5)\), \((2,4)\to(2,\,2)\). From the vertex: over 1, up \(\tfrac12\). The graph is <b>wider</b>.`,
        S`<b>Check by substituting.</b> \(g(2)=3(4)=12\) ✓ and \(h(2)=\tfrac12(4)=2\) ✓`,
        S`<b>Compare.</b> Same vertex and axis for all three; the bigger \(|a|\) is, the faster the arms rise ✓`],
      S`3x²: stretch by 3 (narrower); ½x²: compression by ½ (wider); vertex (0, 0) for both`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 13 }, curves: [P0, { f: (x) => 3 * x * x, color: "violet" }, { f: (x) => 0.5 * x * x, color: "blue" }], points: [{ x: 2, y: 12, label: "(2, 12)", color: "violet" }, { x: 2, y: 2, label: "(2, 2)", color: "blue" }, { x: 2, y: 4, label: "(2, 4)", color: "gray" }], step: { x: 1, y: 1 } })],

    ["Reflection and stretch", S`Describe \(g(x)=-2x^2\) as transformations of \(f(x)=x^2\), map the key points and state the range.`,
      [S`<b>Split \(a=-2\).</b> The size \(|a|=2\) gives a vertical stretch by \(2\); the negative sign gives a reflection in the \(x\)-axis.`,
        S`<b>Point rule.</b> \((x,\,y)\to(x,\,-2y)\): \((1,1)\to(1,-2)\), \((-1,1)\to(-1,-2)\), \((2,4)\to(2,-8)\), \((-2,4)\to(-2,-8)\).`,
        S`<b>Shape.</b> The parabola opens <b>down</b>; from the vertex the pattern is over 1, down 2; over 2, down 8.`,
        S`<b>Range.</b> The vertex \((0,0)\) is now the highest point: \(\{y\in\mathbb{R}\mid y\le0\}\).`,
        S`<b>Check.</b> \(g(-2)=-2(4)=-8\) ✓. The order of stretch and reflection does not matter here: both multiply the \(y\)-coordinate ✓`],
      S`vertical stretch by 2 and reflection in the x-axis; range y ≤ 0`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -9, ymax: 5 }, curves: [P0, { f: (x) => -2 * x * x, color: "violet" }], points: [{ x: 1, y: -2, label: "(1, −2)", color: "violet" }, { x: 2, y: -8, label: "(2, −8)", color: "violet" }, { x: -2, y: -8, label: "(−2, −8)", color: "violet" }], step: { x: 1, y: 1 } })],

    ["Equation from a graph", S`Each red parabola is \(y=x^2\) after one transformation. Write its equation: (a) vertex \((5,\,0)\), same shape; (b) vertex \((0,\,0)\), passes through \((2,\,-2)\).`,
      [S`<b>(a) Plan.</b> The shape is unchanged and the vertex moved from \((0,0)\) to \((5,0)\): a horizontal translation of \(5\) right, so \(h=5\).`,
        S`<b>(a) Equation.</b> \(y=(x-5)^2\). Check: \(x=6\) gives \(1\), so \((6,\,1)\) is on it — the image of \((1,1)\) ✓`,
        S`<b>(b) Plan.</b> The vertex did not move, so only \(a\) changed: \(y=ax^2\).`,
        S`<b>(b) Find \(a\).</b> Substitute \((2,\,-2)\): \(-2=a(2)^2=4a\Rightarrow a=-\tfrac12\). So \(y=-\tfrac12x^2\): a compression by \(\tfrac12\) and a reflection.`,
        S`<b>(b) Check.</b> \(x=-2\): \(-\tfrac12(4)=-2\) ✓ — symmetric point \((-2,\,-2)\) is also on the curve.`],
      S`(a) \(y=(x-5)^2\); (b) \(y=-\tfrac12x^2\)`,
      plane({ view: { xmin: -4, xmax: 8, ymin: -5, ymax: 6 }, curves: [{ f: (x) => (x - 5) ** 2, color: "red" }, { f: (x) => -0.5 * x * x, color: "red" }], points: [{ x: 5, y: 0, label: "(5, 0)", color: "amber" }, { x: 6, y: 1, label: "(6, 1)", color: "red" }, { x: 2, y: -2, label: "(2, −2)", color: "amber" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("k", S`The graph of \(y=x^2\) is translated 6 units down. Enter the \(y\)-coordinate of the new vertex.`, num(-6), "y = x² − 6.", [S`Vertex \((0,\,-6)\).`], S`\(-6\)`),
    q("h", S`In which direction does \(y=(x+7)^2\) move compared with \(y=x^2\)?`, choice(["7 left", "7 right", "7 up", "7 down"], 0), "Where is the bracket zero?", [S`\(x+7=0\Rightarrow x=-7\): left 7.`], S`7 left`),
    q("a", S`The point \((3,\,9)\) on \(y=x^2\) is mapped by \(y=-4x^2\). Enter the new \(y\)-coordinate.`, num(-36), "Multiply y by a.", [S`\(9\times(-4)=-36\).`], S`\(-36\)`),
    q("a", S`Is \(y=0.4x^2\) a vertical stretch or a vertical compression of \(y=x^2\)? Type stretch or compression.`, txt("compression", "Compression", "a compression"), "Compare |a| with 1.", [S`\(0<0.4<1\): compression (wider).`], S`compression`),
    q("equation", S`\(y=ax^2\) passes through \((-3,\,18)\). Enter \(a\).`, num(2), "Substitute the point.", [S`\(18=9a\Rightarrow a=2\).`], S`\(2\)`),
  ]),

  ...hard([
    ["Same image, different rule?", S`Show that translating \(y=x^2\) up \(9\) does <b>not</b> give the same graph as \(y=(x+3)^2\), even though both pass through \((0,\,9)\). Then find all points the two graphs share.`,
      [S`<b>Vertices differ:</b> \(y=x^2+9\) has vertex \((0,\,9)\); \(y=(x+3)^2\) has vertex \((-3,\,0)\). Different vertices, different graphs.`,
        S`<b>Shared points:</b> solve \(x^2+9=(x+3)^2=x^2+6x+9\Rightarrow0=6x\Rightarrow x=0\).`,
        S`<b>Conclusion:</b> they meet only at \((0,\,9)\). Two different transformations can produce graphs that cross at one point without being the same.`],
      S`different vertices (0, 9) and (−3, 0); only common point (0, 9)`,
      plane({ view: { xmin: -7, xmax: 4, ymin: -1, ymax: 16 }, curves: [{ f: (x) => x * x + 9, color: "violet" }, { f: (x) => (x + 3) ** 2, color: "blue" }], points: [{ x: 0, y: 9, label: "(0, 9)", color: "amber" }, { x: -3, y: 0, label: "(−3, 0)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["Find a from two points", S`A parabola \(y=a(x-h)^2\) has vertex on the \(x\)-axis and passes through \((1,\,8)\) and \((5,\,8)\). Find \(h\) and \(a\).`,
      [S`<b>Symmetry:</b> the points have the same \(y\), so the axis is halfway: \(h=\frac{1+5}{2}=3\).`,
        S`<b>Find \(a\):</b> \(8=a(1-3)^2=4a\Rightarrow a=2\).`,
        S`<b>Check:</b> \(2(5-3)^2=8\) ✓. Equation \(y=2(x-3)^2\).`],
      S`h = 3, a = 2: y = 2(x − 3)²`],
  ], [
    q("hard", S`\(y=a(x-4)^2\) passes through \((1,\,-27)\). Enter \(a\).`, num(-3), "(1 − 4)² = 9.", [S`\(-27=9a\Rightarrow a=-3\).`], S`\(-3\)`),
    q("hard", S`The point \((-2,\,4)\) of \(y=x^2\) is mapped to \((-2,\,4+k)\) and lands on the \(x\)-axis. Enter \(k\).`, num(-4), "4 + k = 0.", [S`\(k=-4\).`], S`\(-4\)`),
    q("hard", S`A parabola \(y=(x-h)^2\) passes through \((7,\,9)\) and its vertex has a positive \(x\)-coordinate less than \(7\). Enter \(h\).`, num(4), "(7 − h)² = 9 gives two choices.", [S`\(7-h=\pm3\Rightarrow h=4\) or \(h=10\). Only \(h=4\) is less than \(7\).`], S`\(4\)`),
    q("hard", S`\(y=ax^2\) and \(y=-x^2+12\) meet where \(x=\pm2\). Enter \(a\).`, num(2), "Equal outputs at x = 2.", [S`\(4a=-4+12=8\Rightarrow a=2\).`], S`\(2\)`),
    q("hard", S`\(y=(x-h)^2\) has \(y\)-intercept \(49\) and its vertex is right of the \(y\)-axis. Enter \(h\).`, num(7), "y(0) = h².", [S`\(h^2=49\), \(h>0\Rightarrow h=7\).`], S`\(7\)`),
  ]),

  wrapUp({
    qas: [
      ["Why does (x − h)² move right when h > 0?", "The vertex is where x − h = 0, i.e. x = h; every output happens h units later."],
      ["What does k do?", "It adds k to every output: the graph moves up (k > 0) or down (k < 0)."],
      ["What does a do?", "Multiplies every y-coordinate: |a| > 1 stretches, |a| < 1 compresses, a < 0 reflects in the x-axis."],
      ["Does a change the vertex of y = ax²?", "No: (0, 0) maps to (0, 0)."],
      ["How do I find a from a graph?", "Substitute one non-vertex point into the equation and solve for a."],
    ],
    summary: [
      "k: vertical translation (x, y) → (x, y + k).",
      "h: horizontal translation (x, y) → (x + h, y); the sign in the bracket is opposite.",
      "a: vertical stretch/compression by |a|, reflection in the x-axis if a < 0.",
      "Key points of y = x²: (0, 0), (±1, 1), (±2, 4).",
    ],
    next: "1.6 combines all three parameters to graph y = a(x − h)² + k in one sweep.",
  }),
];
