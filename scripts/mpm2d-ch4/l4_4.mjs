// MPM2D 4.4 — Graphing from Vertex Form (self-study format): the 1-4-9 step pattern scaled by a, symmetry,
// the y-intercept, zeros from vertex form, and how many zeros a parabola has
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "4.4 Graphing from Vertex Form";

export const blocks = () => [
  intro({
    icon: "✏️",
    title: "Graphing from Vertex Form",
    overview: String.raw`Vertex form makes graphing quick and accurate. Plot the vertex, then use the step pattern: from the vertex, over 1 and up \(a\), over 2 and up \(4a\), over 3 and up \(9a\) — and mirror each point across the axis. In this lesson you will graph parabolas this way, find the \(y\)-intercept, find the zeros by solving \(a(x-h)^2+k=0\), and predict the number of zeros from \(a\) and \(k\).`,
    goals: [
      "graph y = a(x − h)² + k using the vertex and the step pattern;",
      "use symmetry to plot pairs of points;",
      "find the y-intercept from vertex form;",
      "find the zeros by isolating the square;",
      "predict whether a parabola has two, one or no zeros.",
    ],
    curriculum: "QR2 (sketch graphs of y = a(x − h)² + k), QR3 (determine the zeros and the maximum or minimum value)",
    prior: [
      [String.raw`Vertex of \(y=2(x+1)^2-3\)?`, String.raw`\((-1,-3)\).`],
      [String.raw`Solve \((x-2)^2=9\).`, String.raw`\(x=5\) or \(x=-1\).`],
      [String.raw`Steps on \(y=x^2\) from the vertex?`, String.raw`Over 1 up 1, over 2 up 4, over 3 up 9.`],
    ],
    words: [
      ["Step pattern", "1, 4, 9 … times a", ""],
      ["Mirror point", "same y, reflected across the axis", ""],
      ["y-intercept", "value of y when x = 0", ""],
      ["Number of zeros", "two, one or none", ""],
    ],
  }),

  section("📌 The step pattern", String.raw`
  <p>On \(y=x^2\), moving 1, 2, 3 units from the vertex raises \(y\) by 1, 4, 9. On \(y=a(x-h)^2+k\) those rises are multiplied by \(a\) (and become drops if \(a<0\)).</p>
  ${plane({ view: { xmin: -5, xmax: 3, ymin: -7, ymax: 12 }, curves: [{ f: (x) => 2 * (x + 1) ** 2 - 6, color: "violet" }], points: [[-1, -6], [0, -4], [-2, -4], [1, 2], [-3, 2]].map(([x, y]) => ({ x, y, label: `(${x}, ${y})`, color: x === -1 ? "red" : "blue" })), step: { x: 1, y: 2 } }, "y = 2(x + 1)² − 6: from (−1, −6), over 1 up 2, over 2 up 8.")}
  ${keyIdea(String.raw`<strong>To graph \(y=a(x-h)^2+k\):</strong> plot \((h,k)\); from it go over \(\pm1\) and up \(a\), over \(\pm2\) and up \(4a\), over \(\pm3\) and up \(9a\); join with a smooth curve. The \(y\)-intercept is \(ah^2+k\).`)}`),

  section("📌 Explore", String.raw`<p>Step through the pattern. Try a negative \(a\) and a fraction such as \(a=0.5\).</p>`),

  widget("stepGraph", { init: [2, -1, -6] }),

  section("📌 Zeros from vertex form", String.raw`
  <p>Set \(y=0\) and isolate the square: \(a(x-h)^2+k=0\Rightarrow(x-h)^2=-\frac{k}{a}\). Take the square root (both signs). If \(-\frac{k}{a}\) is negative, there are no zeros.</p>
  <ul><li>\(a\) and \(k\) have opposite signs → two zeros;</li><li>\(k=0\) → one zero (the vertex);</li><li>\(a\) and \(k\) have the same sign → no zeros.</li></ul>
  ${watchOut([
    "The steps are multiplied by a: for a = 3, over 1 up 3, over 2 up 12.",
    "If a < 0 the steps go down.",
    "Solving (x − h)² = 9 gives two answers: x − h = ±3.",
    "Plot points on both sides of the axis.",
  ])}`),

  examples([
    ["Graphing", String.raw`Graph \(y=(x-2)^2-3\) and find its \(y\)-intercept.`,
      [String.raw`<b>Match with vertex form.</b> \[y=a(x-h)^2+k\] Matching gives \(a=1\), \(h=2\), \(k=-3\). The vertex is \((h,k)=(2,-3)\); \(a>0\), so it opens up.`,
        String.raw`<b>Step pattern.</b> From the vertex, go over \(s\) units left or right and up \(a\cdot s^2\): over 1 up \(1\cdot1^2=1\); over 2 up \(1\cdot2^2=4\).`,
        String.raw`<b>Plot points.</b> Over 1: \((1,-2)\) and \((3,-2)\). Over 2: \((0,1)\) and \((4,1)\). Join them with a smooth U-shape.`,
        String.raw`<b>\(y\)-intercept.</b> Substitute \(x=0\): \(y=(0-2)^2-3=4-3=1\). This matches the point \((0,1)\) ✓.`],
      String.raw`vertex \((2,-3)\); \(y\)-intercept \(1\)`,
      plane({ view: { xmin: -2, xmax: 6, ymin: -4, ymax: 6 }, curves: [{ f: (x) => (x - 2) ** 2 - 3, color: "violet" }], points: [[2, -3], [1, -2], [3, -2], [0, 1], [4, 1]].map(([x, y]) => ({ x, y, color: x === 2 ? "red" : "blue" })), step: { x: 1, y: 1 } })],
    ["A negative a", String.raw`Graph \(y=-2(x+1)^2+8\) and find its zeros.`,
      [String.raw`<b>Match with vertex form</b> \(y=a(x-h)^2+k\): \(y=-2\big(x-(-1)\big)^2+8\), so \(a=-2\), \(h=-1\), \(k=8\). Vertex \((-1,8)\); \(a<0\), so it opens down.`,
        String.raw`<b>Step pattern.</b> Over 1: \(a\cdot1^2=-2\), so down 2: \((0,6)\) and \((-2,6)\). Over 2: \(a\cdot2^2=-8\), so down 8: \((1,0)\) and \((-3,0)\).`,
        String.raw`<b>Zeros.</b> The points over 2 have \(y=0\): they are on the \(x\)-axis, so the zeros are \(x=1\) and \(x=-3\).`,
        String.raw`<b>Check:</b> \(-2(1+1)^2+8=-8+8=0\) ✓ and \(-2(-3+1)^2+8=-8+8=0\) ✓. The maximum value is \(k=8\).`],
      String.raw`zeros \(-3\) and \(1\); maximum \(8\)`,
      plane({ view: { xmin: -5, xmax: 3, ymin: -3, ymax: 10 }, curves: [{ f: (x) => -2 * (x + 1) ** 2 + 8, color: "violet" }], points: [[-1, 8], [0, 6], [-2, 6], [1, 0], [-3, 0]].map(([x, y]) => ({ x, y, color: x === -1 ? "red" : "blue" })), step: { x: 1, y: 1 } })],
    ["A fractional a", String.raw`Find four points on \(y=\tfrac12(x-4)^2\) besides the vertex.`,
      [String.raw`<b>Match with vertex form</b> \(y=a(x-h)^2+k\): \(a=\tfrac12\), \(h=4\), \(k=0\). Vertex \((4,0)\); it opens up.`,
        String.raw`<b>Choose the step size.</b> Over 1 would give up \(\tfrac12\cdot1^2=\tfrac12\), a fraction. Use even steps so the \(y\)-values are whole numbers.`,
        String.raw`<b>Over 2:</b> up \(\tfrac12\cdot2^2=\tfrac12\cdot4=2\): \((2,2)\) and \((6,2)\).`,
        String.raw`<b>Over 4:</b> up \(\tfrac12\cdot4^2=\tfrac12\cdot16=8\): \((0,8)\) and \((8,8)\).`,
        String.raw`<b>Check:</b> \(\tfrac12(0-4)^2=\tfrac12(16)=8\) ✓ and \(\tfrac12(6-4)^2=\tfrac12(4)=2\) ✓.`],
      String.raw`\((2,2)\), \((6,2)\), \((0,8)\), \((8,8)\)`,
      plane({ view: { xmin: -1, xmax: 9, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 0.5 * (x - 4) ** 2, color: "violet" }], points: [[4, 0], [2, 2], [6, 2], [0, 8], [8, 8]].map(([x, y]) => ({ x, y, label: `(${x}, ${y})`, color: x === 4 ? "red" : "blue" })), step: { x: 1, y: 1 } })],
    ["Zeros by isolating the square", String.raw`Find the zeros of \(y=3(x-1)^2-12\).`,
      [String.raw`<b>Rule.</b> A zero is an \(x\)-value where \(y=0\). Set \(y=0\) and isolate the square: \(0=3(x-1)^2-12\).`,
        String.raw`<b>Add 12 to both sides:</b> \(3(x-1)^2=12\).`,
        String.raw`<b>Divide both sides by 3:</b> \((x-1)^2=4\).`,
        String.raw`<b>Take the square root of both sides.</b> A positive number has two square roots, so \(x-1=2\) or \(x-1=-2\).`,
        String.raw`<b>Solve each:</b> \(x=1+2=3\) or \(x=1-2=-1\).`,
        String.raw`<b>Check:</b> \(3(3-1)^2-12=12-12=0\) ✓ and \(3(-1-1)^2-12=12-12=0\) ✓.`],
      String.raw`\(x=-1\) and \(x=3\)`,
      plane({ view: { xmin: -3, xmax: 5, ymin: -13, ymax: 6 }, curves: [{ f: (x) => 3 * (x - 1) ** 2 - 12, color: "violet" }], points: [{ x: -1, y: 0, label: "(−1, 0)", color: "red" }, { x: 3, y: 0, label: "(3, 0)", color: "red" }, { x: 1, y: -12, label: "(1, −12)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["No zeros", String.raw`How many zeros does \(y=2(x+3)^2+5\) have?`,
      [String.raw`<b>Match with vertex form</b> \(y=a(x-h)^2+k\): \(a=2\), \(h=-3\), \(k=5\). Vertex \((-3,5)\).`,
        String.raw`<b>Reason with the graph.</b> \(a>0\), so the parabola opens up and the vertex is its lowest point. The lowest point is \(5\) units <i>above</i> the \(x\)-axis, so the graph never reaches \(y=0\).`,
        String.raw`<b>Confirm with algebra.</b> Set \(y=0\): \(0=2(x+3)^2+5\Rightarrow2(x+3)^2=-5\Rightarrow(x+3)^2=-\tfrac52\).`,
        String.raw`<b>Conclusion.</b> A square is never negative, so there is no real solution: no zeros.`],
      "none",
      plane({ view: { xmin: -7, xmax: 1, ymin: -1, ymax: 14 }, curves: [{ f: (x) => 2 * (x + 3) ** 2 + 5, color: "violet" }], points: [{ x: -3, y: 5, label: "(−3, 5)", color: "blue" }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("y-intercept", String.raw`Find the \(y\)-intercept of \(y=(x-3)^2-4\).`, num(5),
      "Substitute x = 0.", [String.raw`\(9-4=5\).`], String.raw`\(5\)`),
    q("step pattern", String.raw`On \(y=3(x-1)^2+2\), what is \(y\) when \(x=3\) (two steps right of the vertex)?`, num(14),
      "Over 2, up 4a.", [String.raw`\(2+4(3)=14\).`], String.raw`\(14\)`),
    q("zeros", String.raw`Find the larger zero of \(y=(x-5)^2-9\).`, num(8),
      "Isolate the square.", [String.raw`\((x-5)^2=9\Rightarrow x=5\pm3\).`], String.raw`\(8\)`),
    q("number of zeros", String.raw`How many zeros does \(y=-2(x-1)^2-3\) have?`, num(0),
      "Compare the signs of a and k.", [String.raw`Opens down from a maximum of \(-3\): always negative.`], String.raw`\(0\)`),
    q("zeros", String.raw`Find the smaller zero of \(y=2(x+1)^2-18\).`, num(-4),
      "Isolate the square.", [String.raw`\((x+1)^2=9\Rightarrow x=-1\pm3\).`], String.raw`\(-4\)`),
  ]),

  wrapUp({
    qas: [
      ["Why does the step pattern use 1, 4, 9?", "Those are 1², 2², 3²: on y = x², moving n units from the vertex raises y by n². Vertex form multiplies these by a."],
      ["How many points do I need for a good graph?", "The vertex and two or three pairs of mirror points, plus the y-intercept if it is convenient."],
      ["Can I find zeros from the graph alone?", "Only approximately, unless they fall on grid points. Isolating the square gives exact values."],
      ["What if −k/a is not a perfect square?", "The zeros are irrational, e.g. (x − 1)² = 5 gives x = 1 ± √5 ≈ 3.24 and −1.24."],
      ["How does this connect to optimization?", "The vertex gives the maximum or minimum value directly — the answer to many word problems."],
    ],
    summary: [
      "Vertex first, then over 1 up a, over 2 up 4a, over 3 up 9a — on both sides.",
      "y-intercept: substitute x = 0.",
      "Zeros: a(x − h)² + k = 0 → (x − h)² = −k/a → take ± square roots.",
      "Signs of a and k decide two, one or no zeros.",
    ],
    next: "4.5 reads the zeros directly from factored form.",
  }),
];
