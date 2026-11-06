// MCR3U 1.7 — Horizontal Stretches, Compressions and Reflections: y = f(kx), y = f(−x), y = −f(x)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
const S = String.raw;

export const TITLE = "1.7 Horizontal Stretches, Compressions and Reflections";
export const ID = "5c3e0001-0001-4001-8001-000000000107";

export const blocks = () => [
  intro({
    icon: "↕️",
    title: "Horizontal Stretches, Compressions and Reflections",
    overview: String.raw`Multiplying the <em>input</em> by \(k\) changes a graph sideways: \(y=f(kx)\) is squeezed toward the y-axis when \(|k|>1\), pulled away from it when \(|k|<1\), and flipped across the y-axis when \(k<0\). In this lesson you will map points with \((x,y)\to(\frac xk,\ y)\), compare horizontal and vertical changes, and see when the two give the same graph.`,
    goals: [
      "describe y = f(kx) as a horizontal stretch or compression by a factor of 1/|k|;",
      "describe y = f(−x) as a reflection in the y-axis and y = −f(x) as a reflection in the x-axis;",
      "map key points with (x, y) → (x/k, y);",
      "find the new domain and range after a horizontal change;",
      "recognise equivalent horizontal and vertical transformations.",
    ],
    curriculum: "A1.8 (the role of k in y = f(kx): horizontal stretches and compressions, reflections in the y-axis, for f(x) = x, x², √x, 1/x), A1.9",
    prior: [
      [String.raw`For \(y=\sqrt x\), what is \(y\) at \(x=4\)?`, String.raw`\(2\).`],
      [String.raw`Simplify \((3x)^2\).`, String.raw`\(9x^2\).`],
      [String.raw`What does \(y=-f(x)\) do to the point \((2,5)\)?`, String.raw`It becomes \((2,-5)\): reflection in the x-axis.`],
    ],
    words: [
      ["Horizontal compression", "\\(|k|>1\\): x-values divided by \\(|k|\\)", "\\(y=\\sqrt{2x}\\)"],
      ["Horizontal stretch", "\\(0<|k|<1\\): x-values divided by \\(|k|\\), so they grow", "\\(y=(\\tfrac12x)^2\\)"],
      ["Reflection in the y-axis", "\\(k<0\\): x changes sign", "\\(y=\\sqrt{-x}\\)"],
      ["Factor", "the number the distance from the y-axis is multiplied by: \\(\\frac1{|k|}\\)", ""],
    ],
  }),

  section("📌 Why divide by k?", String.raw`
  <p>For \(y=\sqrt{2x}\), the output 2 now happens when \(2x=4\), i.e. at \(x=2\) instead of \(x=4\). Every output arrives at <em>half</em> the x-value, so the graph is compressed horizontally by a factor of \(\tfrac12\).</p>
  ${table(["\\(y=\\sqrt x\\)", "(0, 0)", "(1, 1)", "(4, 2)", "(9, 3)"], [["\\(y=\\sqrt{2x}\\): \\((\\tfrac x2,\\ y)\\)", "(0, 0)", "(0.5, 1)", "(2, 2)", "(4.5, 3)"]])}
  ${plane({ view: { xmin: -1, xmax: 10, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => Math.sqrt(2 * x), a: 0, color: "violet" }], points: [{ x: 4, y: 2, label: "(4, 2)", color: "gray" }, { x: 2, y: 2, label: "(2, 2)" }, { x: 4.5, y: 3, label: "(4.5, 3)" }], step: { x: 1, y: 1 } }, "√x (grey) and √(2x): same heights, reached sooner")}
  ${keyIdea(String.raw`In \(y=f(kx)\): \((x,y)\to\left(\frac xk,\ y\right)\). \(|k|>1\) compresses horizontally by \(\frac1{|k|}\); \(0<|k|<1\) stretches by \(\frac1{|k|}\); \(k<0\) also reflects in the y-axis. The y-values (and so the range) do not change.`)}`),

  section("📌 Explore", String.raw`<p>Now \(k\) is unlocked (with \(a\) for comparison). Notice that for \(x^2\) and \(|x|\) a horizontal compression can look exactly like a vertical stretch.</p>`),

  widget("funcTransform", { parent: "x2", show: ["a", "k"], init: { a: 1, k: 2, d: 0, c: 0 } }),

  section("📌 Two reflections", String.raw`
  ${table(["Equation", "Mapping", "Reflection in"], [["\\(y=-f(x)\\)", "\\((x,y)\\to(x,-y)\\)", "the x-axis"], ["\\(y=f(-x)\\)", "\\((x,y)\\to(-x,y)\\)", "the y-axis"]])}
  ${plane({ view: { xmin: -10, xmax: 10, ymin: -4, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => Math.sqrt(-x), b: 0, color: "red" }, { f: (x) => -Math.sqrt(x), a: 0, color: "blue" }], step: { x: 1, y: 1 } }, "√x (grey), √(−x) (red, reflected in the y-axis), −√x (blue, reflected in the x-axis)")}
  ${watchOut([
    "y = f(2x) compresses by 1/2 — the factor is the reciprocal of k.",
    "f(kx) changes x-coordinates only; af(x) changes y-coordinates only.",
    "√(−x) has domain x ≤ 0: the reflection moves the domain to the left.",
    "x² and |x| are symmetric in the y-axis, so f(−x) = f(x) for them.",
  ])}`),

  examples([
    ["A horizontal compression", S`Describe \(y=|3x|\) and map the key points of \(|x|\). Compare with \(y=3|x|\).`,
      [S`<b>Why a compression?</b> With \(k=3\), the input is tripled, so a given output is reached at one-third of the old x-value. The mapping is \((x,y)\to\left(\frac x3,\ y\right)\).`,
        S`<b>Map the key points.</b> ${tv(["\\(y=|x|\\)", "\\((-3,3)\\)", "\\((0,0)\\)", "\\((3,3)\\)"], ["image", "\\((-1,3)\\)", "\\((0,0)\\)", "\\((1,3)\\)"])}`,
        S`<b>Compare by algebra.</b> \(|3x|=|3||x|=3|x|\), so the two equations give the same graph.`,
        S`<b>Compare with points.</b> The vertical stretch maps \((1,1)\to(1,3)\), the same point the compression produced from \((3,3)\) ✓. For \(|x|\), the two descriptions agree. Most other functions do not behave this way.`],
      S`a V with slopes \(\pm3\); for \(|x|\) the two descriptions agree`,
      plane({ view: { xmin: -5, xmax: 5, ymin: -1, ymax: 6 }, curves: [{ f: (x) => Math.abs(x), color: "gray" }, { f: (x) => Math.abs(3 * x), color: "violet" }], points: [{ x: 1, y: 3, label: "(1, 3)", color: "amber" }, { x: -1, y: 3, label: "(−1, 3)", color: "amber" }, { x: 3, y: 3, label: "(3, 3)", color: "gray" }], step: { x: 1, y: 1 } }, "gray y = |x|, violet y = |3x|")],
    ["A horizontal stretch", S`Describe \(y=\left(\tfrac12x\right)^2\) and show it equals a vertical compression.`,
      [S`<b>Why a stretch?</b> With \(k=\tfrac12\), the input is halved, so an old output now needs twice the x-value. The mapping is \((x,y)\to(2x,\ y)\).`,
        S`<b>Map the key points.</b> ${tv(["\\(y=x^2\\)", "\\((1,1)\\)", "\\((2,4)\\)", "\\((-2,4)\\)"], ["image", "\\((2,1)\\)", "\\((4,4)\\)", "\\((-4,4)\\)"])}`,
        S`<b>Show the second description.</b> Square the bracket: \(\left(\tfrac12x\right)^2=\tfrac14x^2\). This is a vertical compression by \(\tfrac14\).`,
        S`<b>Check.</b> The vertical compression sends \((4,16)\) to \((4,4)\), which is the same point as above. At \(x=2\): \(\tfrac14(4)=1\) ✓`],
      S`a wider parabola through \((\pm4,4)\) and \((\pm2,1)\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -1, ymax: 7 }, curves: [{ f: (x) => x * x, color: "gray" }, { f: (x) => 0.25 * x * x, color: "violet" }], points: [{ x: 4, y: 4, label: "(4, 4)" }, { x: 2, y: 4, label: "(2, 4)", color: "gray" }, { x: 2, y: 1, label: "(2, 1)" }], step: { x: 1, y: 1 } })],
    ["Reflection in the y-axis", S`Graph \(y=\sqrt{-x}\) and state its domain and range.`,
      [S`<b>Read the parameter.</b> \(k=-1\) replaces \(x\) by \(-x\). Each point moves to the opposite side of the y-axis: \((x,y)\to(-x,\ y)\).`,
        S`<b>Map the key points.</b> ${tv(["\\(y=\\sqrt x\\)", "\\((0,0)\\)", "\\((1,1)\\)", "\\((4,2)\\)", "\\((9,3)\\)"], ["image", "\\((0,0)\\)", "\\((-1,1)\\)", "\\((-4,2)\\)", "\\((-9,3)\\)"])}`,
        S`<b>Domain from algebra.</b> The radicand must be non-negative: \(-x\ge0\), so \(x\le0\). Negative inputs are now the allowed ones, since \(\sqrt{-(-4)}=\sqrt4=2\).`,
        S`<b>Range.</b> A horizontal change does not affect heights, so the range stays \(y\ge0\).`,
        S`<b>Check.</b> At \(x=-9\): \(\sqrt9=3\) ✓`],
      S`domain \(\{x\in\mathbb R\mid x\le0\}\), range \(\{y\in\mathbb R\mid y\ge0\}\)`,
      plane({ view: { xmin: -10, xmax: 10, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => Math.sqrt(-x), b: 0, color: "violet" }], points: [{ x: -4, y: 2, label: "(−4, 2)" }, { x: -9, y: 3, label: "(−9, 3)" }, { x: 4, y: 2, label: "(4, 2)", color: "gray" }], step: { x: 1, y: 1 } })],
    ["Compression with a reciprocal", S`Map the points \((\tfrac12,2),(1,1),(2,\tfrac12)\) of \(\frac1x\) under \(y=\frac{1}{4x}\).`,
      [S`<b>Read the parameter.</b> \(k=4\), so \((x,y)\to\left(\frac x4,\ y\right)\). The x-values are divided by 4, and the heights stay.`,
        S`<b>Map the points.</b> ${tv(["\\(y=\\frac1x\\)", "\\((\\frac12,2)\\)", "\\((1,1)\\)", "\\((2,\\frac12)\\)"], ["image", "\\((\\frac18,2)\\)", "\\((\\frac14,1)\\)", "\\((\\frac12,\\frac12)\\)"])}`,
        S`<b>Asymptotes.</b> Compressing toward the y-axis leaves \(x=0\) in place, because \(\frac04=0\). Heights are unchanged, so \(y=0\) stays as well.`,
        S`<b>Check.</b> Substitute into the equation. \(x=\frac14\): \(\frac1{4\cdot\frac14}=1\) ✓. \(x=\frac18\): \(\frac1{4\cdot\frac18}=2\) ✓`],
      S`\((0.125,2),(0.25,1),(0.5,0.5)\)`,
      plane({ view: { xmin: 0, xmax: 3, ymin: 0, ymax: 3 }, curves: [{ f: (x) => 1 / x, a: 0.34, color: "gray" }, { f: (x) => 1 / (4 * x), a: 0.09, color: "violet" }], points: [{ x: 0.125, y: 2, label: "(0.125, 2)", color: "amber" }, { x: 0.25, y: 1, label: "(0.25, 1)", color: "amber" }, { x: 0.5, y: 0.5, label: "(0.5, 0.5)", color: "amber" }, { x: 1, y: 1, label: "(1, 1)", color: "gray" }], step: { x: 0.5, y: 0.5 } }, "gray y = 1/x, violet y = 1/(4x)")],
    ["From a set of points", S`\(f\) contains \((-4,2),(0,6),(8,-2)\). Find the matching points of \(y=f(4x)\) and \(y=f(-\tfrac12x)\).`,
      [S`<b>Rule.</b> For \(y=f(kx)\), the mapping is \((x,y)\to\left(\frac xk,\ y\right)\). Only x-values change.`,
        S`<b>First function,</b> \(k=4\): divide each x-value by 4.`,
        S`<b>Second function,</b> \(k=-\frac12\): dividing by \(-\frac12\) means multiplying by \(-2\). So it is a stretch by 2 and a reflection in the y-axis.`,
        S`<b>Table.</b> ${tv(["\\(f\\)", "\\((-4,2)\\)", "\\((0,6)\\)", "\\((8,-2)\\)"], ["\\(f(4x)\\)", "\\((-1,2)\\)", "\\((0,6)\\)", "\\((2,-2)\\)"], ["\\(f(-\\frac12x)\\)", "\\((8,2)\\)", "\\((0,6)\\)", "\\((-16,-2)\\)"])}`,
        S`<b>Check by substituting.</b> In \(f(4x)\) at \(x=2\), the input is \(f(8)=-2\) ✓. In \(f(-\tfrac12x)\) at \(x=-16\), the input is \(f(8)=-2\) ✓. Points on the y-axis, like \((0,6)\), never move.`],
      S`\(f(4x)\): \((-1,2),(0,6),(2,-2)\); \(f(-\tfrac12x)\): \((8,2),(0,6),(-16,-2)\)`,
      plane({ view: { xmin: -18, xmax: 10, ymin: -4, ymax: 8 }, points: [{ x: -4, y: 2, color: "gray" }, { x: 8, y: -2, label: "(8, −2)", color: "gray" }, { x: 0, y: 6, label: "(0, 6)", color: "amber" }, { x: -1, y: 2, color: "violet" }, { x: 2, y: -2, label: "(2, −2)", color: "violet" }, { x: 8, y: 2, label: "(8, 2)", color: "green" }, { x: -16, y: -2, label: "(−16, −2)", color: "green" }], step: { x: 2, y: 2 } }, "gray f, violet f(4x), green f(−x/2)")],
  ]),

  practice([
    q("map a point", String.raw`The point \((6,3)\) is on \(y=f(x)\). What is the x-coordinate of its image on \(y=f(3x)\)?`, num(2),
      "Divide x by k.", [String.raw`\(\frac63=2\).`], String.raw`\(2\)`),
    q("reflection", String.raw`The point \((-2,5)\) is on \(y=f(x)\). What is the x-coordinate of its image on \(y=f(-x)\)?`, num(2),
      "Change the sign of x.", [String.raw`\((-2,5)\to(2,5)\).`], String.raw`\(2\)`),
    q("stretch", String.raw`The point \((4,2)\) on \(y=\sqrt x\) maps to which x-coordinate on \(y=\sqrt{\tfrac14x}\)?`, num(16),
      "Divide by 1/4 = multiply by 4.", [String.raw`\(\frac{4}{1/4}=16\); check \(\sqrt{4}=2\).`], String.raw`\(16\)`),
    q("equivalent", String.raw`\(y=(3x)^2\) is the same graph as which of these?`, choice([String.raw`\(y=9x^2\)`, String.raw`\(y=3x^2\)`, String.raw`\(y=\tfrac13x^2\)`, String.raw`\(y=x^2+9\)`], 0),
      "Expand the bracket.", [String.raw`\((3x)^2=9x^2\).`], String.raw`\(y=9x^2\)`),
    q("domain", String.raw`What is the domain of \(y=\sqrt{-2x}\)?`, choice([String.raw`\(x\le0\)`, String.raw`\(x\ge0\)`, String.raw`\(x\ge-2\)`, String.raw`\(x\in\mathbb R\)`], 0),
      "Need −2x ≥ 0.", [String.raw`\(-2x\ge0\Rightarrow x\le0\).`], String.raw`\(\{x\in\mathbb R\mid x\le0\}\)`),
  ]),

  ...hard([
    ["Two descriptions of one graph", String.raw`Show that \(y=\frac{1}{2x}\) is both a horizontal compression by \(\tfrac12\) and a vertical compression by \(\tfrac12\) of \(y=\frac1x\).`,
      [String.raw`Horizontal: \(y=f(2x)=\frac{1}{2x}\), \(k=2\).`, String.raw`Vertical: \(\tfrac12f(x)=\tfrac12\cdot\frac1x=\frac{1}{2x}\), \(a=\tfrac12\).`, String.raw`Check \((1,1)\): horizontal gives \((\tfrac12,1)\); vertical gives \((1,\tfrac12)\). Both points lie on \(y=\frac{1}{2x}\) — the same curve, different point pairings.`],
      String.raw`the two transformations produce the same graph`],
    ["Following the vertex", String.raw`\(f(x)=x^2-4x\). Write \(y=f(-x)\) and \(y=f(2x)\) in vertex form and check the vertex mapping.`,
      [String.raw`\(f(x)=(x-2)^2-4\): vertex \((2,-4)\).`, String.raw`\(f(-x)=x^2+4x=(x+2)^2-4\): vertex \((-2,-4)\) ✓ (x changes sign).`, String.raw`\(f(2x)=4x^2-8x=4(x-1)^2-4\): vertex \((1,-4)\) ✓ (x divided by 2).`],
      String.raw`\(f(-x)=(x+2)^2-4\), \(f(2x)=4(x-1)^2-4\)`,
      plane({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, curves: [{ f: (x) => x * x - 4 * x, color: "gray" }, { f: (x) => x * x + 4 * x, color: "red" }, { f: (x) => 4 * x * x - 8 * x, color: "blue" }], points: [{ x: 2, y: -4, label: "(2, −4)", color: "gray" }, { x: -2, y: -4, label: "(−2, −4)" }, { x: 1, y: -4, label: "(1, −4)", color: "blue" }], step: { x: 1, y: 1 } })],
  ], [
    q("hard", String.raw`\(f(x)=x^2-6x\) has vertex \((3,-9)\). What is the x-coordinate of the vertex of \(y=f(3x)\)?`, num(1),
      "Divide the vertex's x by k.", [String.raw`\(\frac33=1\).`], String.raw`\(1\)`),
    q("hard", String.raw`The zeros of \(f\) are \(-6\) and \(4\). Find the positive zero of \(y=f(-2x)\).`, num(3),
      "Divide each zero by −2.", [String.raw`\(\frac{-6}{-2}=3\), \(\frac{4}{-2}=-2\).`], String.raw`\(3\)`),
    q("hard", String.raw`\(y=\sqrt{kx}\) passes through \((2,4)\). Find \(k\).`, num(8),
      "Substitute and square.", [String.raw`\(\sqrt{2k}=4\Rightarrow2k=16\).`], String.raw`\(8\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is the factor 1/k and not k?", "Because the input is multiplied by k, the original output is reached at x/k. Larger k means sooner, so the graph is squeezed."],
      ["Can a horizontal change ever equal a vertical one?", "Yes, for some parents: |kx| = |k||x|, (kx)² = k²x², 1/(kx) = (1/k)(1/x). For √x it is √k·√x."],
      ["Does f(kx) change the range?", "No — only x-coordinates move. It can change the domain (e.g. √(−x))."],
      ["Does f(kx) move the y-intercept?", "No: at x = 0, f(k·0) = f(0)."],
      ["How do I describe a negative k?", "Split it: a reflection in the y-axis and a horizontal stretch or compression by 1/|k|."],
    ],
    summary: [
      "y = f(kx): (x, y) → (x/k, y).",
      "|k| > 1 compresses, |k| < 1 stretches horizontally, by a factor of 1/|k|.",
      "k < 0: reflection in the y-axis; a < 0: reflection in the x-axis.",
      "The range is unchanged by k; the domain may change.",
    ],
    next: "1.8 combines all four parameters: y = af(k(x − d)) + c.",
  }),
];
