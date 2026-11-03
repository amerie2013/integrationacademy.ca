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
      [String.raw`<b>Match with vertex form.</b> \[y=a(x-h)^2+k\] Write the question in the same pattern: \(y=1(x-4)^2+1\). Matching term by term gives \(a=1\), \(h=4\), \(k=1\).`,
        String.raw`<b>Look at \(a=1\).</b> \(a>0\), so the parabola opens up. \(|a|=1\), so there is <i>no</i> vertical stretch or compression: the shape is exactly the shape of \(y=x^2\).`,
        String.raw`<b>Look at \(h=4\).</b> \(h\) is a horizontal translation. \(h>0\), so the graph moves <b>right 4 units</b>. Reason: the bracket \((x-4)\) is zero when \(x=4\), so the vertex, which was at \(x=0\), is now at \(x=4\).`,
        String.raw`<b>Look at \(k=1\).</b> \(k\) is a vertical translation. \(k>0\), so the graph moves <b>up 1 unit</b>.`,
        String.raw`<b>Vertex and optimal value.</b> The vertex is \((h,k)=(4,1)\) and the axis of symmetry is \(x=4\). The parabola opens up, so the vertex is the lowest point: the minimum value is \(1\).`,
        String.raw`<b>Check.</b> At \(x=4\): \(y=(4-4)^2+1=1\) ✓. The point \((1,1)\) on \(y=x^2\) moves right 4 and up 1 to \((5,2)\), and \((5-4)^2+1=2\) ✓.`],
      String.raw`right 4, up 1, no stretch; vertex \((4,1)\), minimum value 1`,
      plane({ view: { xmin: -3, xmax: 8, ymin: -1, ymax: 9 }, curves: [base, { f: (x) => (x - 4) ** 2 + 1, color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)" }, { x: 4, y: 1, label: "(4, 1)", color: "blue" }, { x: 1, y: 1 }, { x: 5, y: 2, label: "(5, 2)", color: "red" }], step: { x: 1, y: 1 } })],
    ["Reflection and stretch", String.raw`Describe \(y=-2(x+3)^2\) and state the vertex and optimal value.`,
      [String.raw`<b>Match with vertex form.</b> \[y=a(x-h)^2+k\] The question has \(x+3\) and no constant, so rewrite it in the pattern: \(y=-2\big(x-(-3)\big)^2+0\). Matching gives \(a=-2\), \(h=-3\), \(k=0\).`,
        String.raw`<b>Look at \(a=-2\).</b> \(a<0\), so the parabola is <b>reflected in the \(x\)-axis</b> (it opens down). \(|a|=2>1\), so it is <b>stretched vertically by a factor of 2</b>: every \(y\)-value is doubled, so it is narrower than \(y=x^2\).`,
        String.raw`<b>Look at \(h=-3\).</b> \(h<0\), so the graph moves <b>left 3 units</b>. The bracket \((x+3)\) is zero when \(x=-3\).`,
        String.raw`<b>Look at \(k=0\).</b> There is no vertical translation.`,
        String.raw`<b>Vertex and optimal value.</b> Vertex \((h,k)=(-3,0)\), axis \(x=-3\). The parabola opens down, so the vertex is the highest point: the maximum value is \(0\).`,
        String.raw`<b>Check.</b> Map \((1,1)\) by \((x,y)\to(x+h,\ ay+k)\): \((1-3,\ -2(1)+0)=(-2,-2)\). Substitute: \(-2(-2+3)^2=-2(1)=-2\) ✓.`],
      String.raw`reflected in the \(x\)-axis, stretched by 2, left 3; vertex \((-3,0)\); maximum value \(0\)`,
      plane({ view: { xmin: -7, xmax: 3, ymin: -9, ymax: 5 }, curves: [base, { f: (x) => -2 * (x + 3) ** 2, color: "violet" }], points: [{ x: -3, y: 0, label: "(−3, 0)", color: "blue" }, { x: 1, y: 1, label: "(1, 1)" }, { x: -2, y: -2, label: "(−2, −2)", color: "red" }], step: { x: 1, y: 1 } })],
    ["A compression", String.raw`Describe \(y=\tfrac12(x-1)^2-5\) and find the image of \((2,4)\).`,
      [String.raw`<b>Match with vertex form.</b> \[y=a(x-h)^2+k\] Writing \(-5\) as \(+(-5)\): \(y=\tfrac12(x-1)^2+(-5)\). Matching gives \(a=\tfrac12\), \(h=1\), \(k=-5\).`,
        String.raw`<b>Look at \(a=\tfrac12\).</b> \(a>0\), so it opens up. \(0<a<1\), so it is <b>compressed vertically by a factor of \(\tfrac12\)</b>: every \(y\)-value is halved, so it is wider than \(y=x^2\).`,
        String.raw`<b>Look at \(h=1\).</b> \(h>0\): <b>right 1 unit</b>.`,
        String.raw`<b>Look at \(k=-5\).</b> \(k<0\): <b>down 5 units</b>. The vertex is \((1,-5)\), the minimum value is \(-5\).`,
        String.raw`<b>Map the point.</b> Each point moves by the mapping rule \[(x,y)\to(x+h,\ ay+k).\] For \((2,4)\): new \(x=2+1=3\); new \(y=\tfrac12(4)-5=2-5=-3\). So \((2,4)\to(3,-3)\).`,
        String.raw`<b>Check.</b> Substitute \(x=3\): \(y=\tfrac12(3-1)^2-5=\tfrac12(4)-5=-3\) ✓, so \((3,-3)\) is on the new parabola.`],
      String.raw`compressed by \(\tfrac12\), right 1, down 5; vertex \((1,-5)\); \((2,4)\to(3,-3)\)`,
      plane({ view: { xmin: -5, xmax: 7, ymin: -6, ymax: 6 }, curves: [base, { f: (x) => 0.5 * (x - 1) ** 2 - 5, color: "violet" }], points: [{ x: 2, y: 4, label: "(2, 4)" }, { x: 3, y: -3, label: "(3, −3)", color: "red" }, { x: 1, y: -5, label: "(1, −5)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Writing the equation", String.raw`A parabola opens down, is stretched by a factor of 3 and has vertex \((2,-3)\). Write its equation.`,
      [String.raw`<b>Start from vertex form.</b> \[y=a(x-h)^2+k\] We need the three numbers \(a\), \(h\) and \(k\).`,
        String.raw`<b>Find \(a\).</b> Stretched by a factor of 3 means \(|a|=3\). Opens down means \(a<0\). So \(a=-3\).`,
        String.raw`<b>Find \(h\) and \(k\).</b> The vertex is \((h,k)\), so \((h,k)=(2,-3)\): \(h=2\), \(k=-3\).`,
        String.raw`<b>Substitute.</b> \(y=-3(x-2)^2+(-3)\), which simplifies to \(y=-3(x-2)^2-3\). Note that \(h=2\) appears as \(x-2\) inside the bracket.`,
        String.raw`<b>Check.</b> At \(x=2\): \(y=-3(0)^2-3=-3\), so the vertex is \((2,-3)\) ✓. \(a=-3<0\), so it opens down ✓. One step right of the vertex, \(y=-3(1)^2-3=-6\): 3 units below the vertex, three times the drop of \(y=x^2\) ✓.`],
      String.raw`\(y=-3(x-2)^2-3\)`,
      plane({ view: { xmin: -2, xmax: 6, ymin: -9, ymax: 4 }, curves: [{ f: (x) => -3 * (x - 2) ** 2 - 3, color: "violet" }], points: [{ x: 2, y: -3, label: "(2, −3)", color: "blue" }, { x: 3, y: -6, label: "(3, −6)", color: "red" }, { x: 1, y: -6 }], step: { x: 1, y: 1 } })],
    ["Finding a", String.raw`A parabola has vertex \((1,4)\) and passes through \((3,-4)\). Find its equation.`,
      [String.raw`<b>Start from vertex form.</b> \[y=a(x-h)^2+k\] The vertex \((1,4)\) gives \(h=1\), \(k=4\), so \(y=a(x-1)^2+4\). Only \(a\) is unknown.`,
        String.raw`<b>Use the other point.</b> \((3,-4)\) is on the graph, so \(x=3\), \(y=-4\) must satisfy the equation: \(-4=a(3-1)^2+4\).`,
        String.raw`<b>Simplify.</b> \((3-1)^2=4\), so \(-4=4a+4\).`,
        String.raw`<b>Solve for \(a\).</b> Subtract 4 from both sides: \(-8=4a\). Divide by 4: \(a=-2\).`,
        String.raw`<b>Write the equation and interpret.</b> \(y=-2(x-1)^2+4\). \(a<0\) means it opens down, which makes sense: the point \((3,-4)\) is <i>below</i> the vertex \((1,4)\).`,
        String.raw`<b>Check.</b> \(-2(3-1)^2+4=-8+4=-4\) ✓.`],
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
