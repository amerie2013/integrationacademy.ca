// MCF3M 4.1 — Vertex Form and Standard Form: expanding vertex form, verifying equivalence, finding the vertex of
// standard form by partial factoring (symmetric points), comparing the three forms.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane } from "../lib.mjs";
const S = String.raw;

export const TITLE = "4.1 Vertex Form and Standard Form";

export const blocks = () => [
  intro({
    icon: "🔄",
    title: "Vertex Form and Standard Form",
    overview: S`The same parabola can be written in <b>vertex form</b> \(y=a(x-h)^2+k\) and in <b>standard form</b> \(y=ax^2+bx+c\). Going from vertex form to standard form is just expanding. Going the other way needs the vertex: one quick method is <b>partial factoring</b> — write \(y=x(ax+b)+c\); the two points where \(x(ax+b)=0\) have the same \(y\)-value \(c\), so the axis of symmetry is halfway between them. This lesson moves between the forms and checks that they really describe the same graph.`,
    goals: [
      "expand vertex form \\(a(x-h)^2+k\\) into standard form;",
      "verify that two forms are equivalent by substitution and by the graph;",
      "find the vertex of \\(y=ax^2+bx+c\\) by partial factoring;",
      "use the vertex to write standard form in vertex form;",
      "choose the form that answers a question most directly.",
    ],
    curriculum: "A2.7 (express the equation of a quadratic function in standard form given vertex form, and verify that the forms are equivalent), A2.10 (information obtained from standard, vertex and factored forms)",
    prior: [
      [S`Expand \((x-4)^2\).`, S`\(x^2-8x+16\).`],
      [S`Vertex of \(y=2(x+1)^2-5\)?`, S`\((-1,\,-5)\).`],
      [S`Solve \(x(x-6)=0\).`, S`\(x=0\) or \(x=6\).`],
    ],
    words: [
      ["Vertex form", "\\(y=a(x-h)^2+k\\)", "vertex \\((h,k)\\)"],
      ["Standard form", "\\(y=ax^2+bx+c\\)", "y-intercept c"],
      ["Partial factoring", "\\(y=x(ax+b)+c\\)", "\\(y=x(2x-8)+5\\)"],
      ["Equivalent", "equal for every x; same graph", "\\((x-1)^2=x^2-2x+1\\)"],
      ["Axis of symmetry", "\\(x=h\\)", "halfway between equal-height points"],
    ],
  }),

  section("📌 Expanding vertex form", S`
  <p>To write \(y=3(x-2)^2-7\) in standard form: expand the square, multiply by \(a\), then add \(k\).</p>
  <p style="text-align:center;">\(3(x-2)^2-7=3(x^2-4x+4)-7=3x^2-12x+12-7=3x^2-12x+5\)</p>
  ${keyIdea(S`<b>Partial factoring.</b> In \(y=ax^2+bx+c\), factor \(x\) out of the first two terms: \(y=x(ax+b)+c\). When \(x=0\) or \(x=-\frac ba\), the bracket part is \(0\) and \(y=c\). These two points are mirror images, so the axis is \(x=-\frac{b}{2a}\) and the vertex is \(\left(-\frac b{2a},\ y\!\left(-\frac b{2a}\right)\right)\).`)}
  ${plane({ view: { xmin: -1, xmax: 5, ymin: -8, ymax: 7 }, curves: [{ f: (x) => 3 * x * x - 12 * x + 5, color: "violet" }], lines: [{ m: 0, b: 5, color: "green", dash: true }], points: [{ x: 0, y: 5, label: "(0, 5)", color: "amber" }, { x: 4, y: 5, label: "(4, 5)", color: "amber" }, { x: 2, y: -7, label: "vertex (2, −7)", color: "blue" }], step: { x: 1, y: 1 } }, "y = 3x² − 12x + 5 = x(3x − 12) + 5: equal heights at x = 0 and x = 4, so the axis is x = 2.")}
  ${table(["Form", "Shows directly"], [
    ["Vertex \\(a(x-h)^2+k\\)", "vertex, axis, max/min value, direction"],
    ["Standard \\(ax^2+bx+c\\)", "y-intercept, direction"],
    ["Factored \\(a(x-r)(x-s)\\)", "zeros, direction"],
  ])}`),

  widget("formConverter", { init: [3, 2, -7] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "Square the bracket BEFORE multiplying by a: 2(x − 3)² ≠ (2x − 6)².",
    "(x − 5)² = x² − 10x + 25, not x² + 25.",
    "Add k last, after multiplying the expanded square by a.",
    "In partial factoring, the second point is x = −b/a, not b/a.",
    "Check equivalence with a value of x that is not 0 (both forms might share only the y-intercept).",
  ])}`),

  examples([
    ["Vertex form to standard form", S`Write \(y=-2(x+3)^2+8\) in standard form and verify with \(x=1\).`,
      [S`<b>Expand the square.</b> \((x+3)^2=x^2+6x+9\).`,
        S`<b>Multiply by \(a=-2\).</b> \(-2x^2-12x-18\).`,
        S`<b>Add \(k\).</b> \(y=-2x^2-12x-18+8=-2x^2-12x-10\).`,
        S`<b>Verify with \(x=1\).</b> Vertex form: \(-2(16)+8=-24\). Standard form: \(-2-12-10=-24\) ✓`,
        S`<b>Graph check.</b> Both have vertex \((-3,\,8)\) and \(y\)-intercept \(-10\) ✓`],
      S`\(y=-2x^2-12x-10\)`,
      plane({ view: { xmin: -7, xmax: 2, ymin: -26, ymax: 10 }, curves: [{ f: (x) => -2 * (x + 3) ** 2 + 8, color: "violet" }], points: [{ x: -3, y: 8, label: "(−3, 8)", color: "amber" }, { x: 0, y: -10, label: "(0, −10)", color: "blue" }, { x: 1, y: -24, label: "(1, −24)", color: "gray" }], step: { x: 1, y: 4 } })],

    ["A fractional a", S`Write \(y=\tfrac12(x-4)^2-3\) in standard form.`,
      [S`<b>Expand.</b> \((x-4)^2=x^2-8x+16\).`,
        S`<b>Multiply by \(\tfrac12\).</b> \(\tfrac12x^2-4x+8\).`,
        S`<b>Add \(-3\).</b> \(y=\tfrac12x^2-4x+5\).`,
        S`<b>Verify at \(x=2\).</b> \(\tfrac12(4)-3=-1\) and \(2-8+5=-1\) ✓`],
      S`\(y=\tfrac12x^2-4x+5\)`,
      plane({ view: { xmin: -1, xmax: 9, ymin: -4, ymax: 8 }, curves: [{ f: (x) => 0.5 * (x - 4) ** 2 - 3, color: "violet" }], points: [{ x: 4, y: -3, label: "(4, −3)", color: "amber" }, { x: 0, y: 5, label: "(0, 5)", color: "blue" }, { x: 2, y: -1, label: "(2, −1)", color: "gray" }], step: { x: 1, y: 1 } })],

    ["Vertex by partial factoring", S`Find the vertex of \(y=2x^2-12x+11\) by partial factoring, then write the vertex form.`,
      [S`<b>Partial factor.</b> \(y=2x(x-6)+11\).`,
        S`<b>Equal heights.</b> When \(x=0\) or \(x=6\), \(2x(x-6)=0\) and \(y=11\). So \((0,\,11)\) and \((6,\,11)\) are mirror points.`,
        S`<b>Axis and vertex.</b> \(x=3\); \(y=2(9)-36+11=-7\). Vertex \((3,\,-7)\).`,
        S`<b>Vertex form.</b> \(a=2\): \(y=2(x-3)^2-7\).`,
        S`<b>Check by expanding.</b> \(2(x^2-6x+9)-7=2x^2-12x+11\) ✓`],
      S`vertex (3, −7); \(y=2(x-3)^2-7\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -8, ymax: 14 }, curves: [{ f: (x) => 2 * x * x - 12 * x + 11, color: "violet" }], lines: [{ m: 0, b: 11, color: "green", dash: true }], points: [{ x: 0, y: 11, label: "(0, 11)", color: "amber" }, { x: 6, y: 11, label: "(6, 11)", color: "amber" }, { x: 3, y: -7, label: "(3, −7)", color: "blue" }], step: { x: 1, y: 2 } })],

    ["When the parabola has no zeros", S`Find the vertex of \(y=-x^2+4x-7\) and explain why factoring cannot find it.`,
      [S`<b>Factoring fails.</b> \(-(x^2-4x+7)\): no integers have product \(7\) and sum \(-4\). In fact the graph never meets the \(x\)-axis.`,
        S`<b>Partial factor.</b> \(y=-x(x-4)-7\): equal heights \(-7\) at \(x=0\) and \(x=4\).`,
        S`<b>Vertex.</b> Axis \(x=2\): \(y=-4+8-7=-3\). Vertex \((2,\,-3)\), a maximum.`,
        S`<b>Vertex form.</b> \(y=-(x-2)^2-3\). Since the maximum is \(-3<0\), there are no zeros ✓`],
      S`vertex (2, −3); \(y=-(x-2)^2-3\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -9, ymax: 1 }, curves: [{ f: (x) => -x * x + 4 * x - 7, color: "violet" }], lines: [{ m: 0, b: -7, color: "green", dash: true }], points: [{ x: 0, y: -7, label: "(0, −7)", color: "amber" }, { x: 4, y: -7, label: "(4, −7)", color: "amber" }, { x: 2, y: -3, label: "(2, −3)", color: "blue" }], step: { x: 1, y: 1 } })],

    ["Which form for which question?", S`A ball's height is \(h(t)=-5(t-2)^2+21\). (a) What is its maximum height? (b) What is its height at launch? (c) Write standard form.`,
      [S`<b>(a) Vertex form shows the maximum.</b> \(21\) m at \(t=2\) s.`,
        S`<b>(b) Launch is \(t=0\).</b> \(-5(4)+21=1\) m.`,
        S`<b>(c) Expand.</b> \(-5(t^2-4t+4)+21=-5t^2+20t+1\).`,
        S`<b>Check.</b> Standard form shows the launch height directly: \(c=1\) ✓`],
      S`(a) 21 m; (b) 1 m; (c) \(h=-5t^2+20t+1\)`,
      plane({ view: { xmin: -0.3, xmax: 4.5, ymin: -1, ymax: 24 }, curves: [{ f: (t) => -5 * (t - 2) ** 2 + 21, a: 0, b: 4.05, color: "violet" }], points: [{ x: 2, y: 21, label: "(2, 21)", color: "amber" }, { x: 0, y: 1, label: "(0, 1)", color: "blue" }], step: { x: 0.5, y: 3 }, xlabel: "t (s)", ylabel: "h (m)" })],
  ]),

  practice([
    q("expand", S`Write \(y=(x-5)^2+3\) in standard form.`, expr("x^2-10*x+28"), "x² − 10x + 25 + 3.", [S`\(x^2-10x+28\).`], S`\(x^2-10x+28\)`),
    q("expand", S`Write \(y=3(x+1)^2-4\) in standard form.`, expr("3*x^2+6*x-1"), "3(x² + 2x + 1) − 4.", [S`\(3x^2+6x-1\).`], S`\(3x^2+6x-1\)`),
    q("partial", S`For \(y=x^2-8x+20\), enter the \(x\)-coordinate of the vertex.`, num(4), "x(x − 8) + 20.", [S`Equal heights at \(0\) and \(8\): axis \(4\).`], S`\(4\)`),
    q("partial", S`For \(y=-2x^2+8x+3\), enter the maximum value.`, num(11), "−2x(x − 4) + 3; axis 2.", [S`\(-8+16+3=11\).`], S`\(11\)`),
    q("form", S`Which form shows the \(y\)-intercept directly?`, choice(["standard", "vertex", "factored", "none"], 0), "c.", [S`\(y=ax^2+bx+c\): \(c\).`], S`standard`),
  ]),

  ...hard([
    ["Two parabolas, one equation", S`Show that \(y=2(x-3)^2-5\) and \(y=2x^2-12x+13\) are the same function, then find the points where the graph meets \(y=13\).`,
      [S`<b>Expand.</b> \(2(x^2-6x+9)-5=2x^2-12x+13\) ✓ identical.`,
        S`<b>Meet \(y=13\).</b> \(2x^2-12x=0\Rightarrow2x(x-6)=0\Rightarrow x=0,\ 6\).`,
        S`<b>Points.</b> \((0,\,13)\) and \((6,\,13)\), symmetric about \(x=3\) ✓`],
      S`identical; (0, 13) and (6, 13)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -6, ymax: 15 }, curves: [{ f: (x) => 2 * (x - 3) ** 2 - 5, color: "violet" }], lines: [{ m: 0, b: 13, color: "green", dash: true }], points: [{ x: 0, y: 13, label: "(0, 13)", color: "amber" }, { x: 6, y: 13, label: "(6, 13)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Find b from the vertex", S`\(y=x^2+bx+11\) has its vertex on the line \(x=-3\). Find \(b\) and the vertex.`,
      [S`<b>Partial factoring.</b> \(y=x(x+b)+11\): equal heights at \(0\) and \(-b\), so the axis is \(x=-\frac b2\).`,
        S`<b>Solve.</b> \(-\frac b2=-3\Rightarrow b=6\).`,
        S`<b>Vertex.</b> \(y(-3)=9-18+11=2\): \((-3,\,2)\).`],
      S`b = 6; vertex (−3, 2)`],
  ], [
    q("hard", S`Write \(y=-\tfrac13(x-6)^2+4\) in standard form.`, expr("-x^2/3+4*x-8"), "−⅓(x² − 12x + 36) + 4.", [S`\(-\tfrac13x^2+4x-12+4\).`], S`\(-\tfrac13x^2+4x-8\)`),
    q("hard", S`Enter the minimum value of \(y=3x^2+18x+20\).`, num(-7), "3x(x + 6) + 20; axis −3.", [S`\(27-54+20=-7\).`], S`\(-7\)`),
    q("hard", S`\(y=ax^2-12x+5\) has axis \(x=2\). Enter \(a\).`, num(3), "Axis = 12/(2a).", [S`\(\frac{12}{2a}=2\Rightarrow a=3\).`], S`\(3\)`),
    q("hard", S`\(y=a(x-h)^2+k\) expands to \(2x^2+8x+1\). Enter \(k\).`, num(-7), "Vertex at x = −2.", [S`\(y(-2)=8-16+1=-7\).`], S`\(-7\)`),
    q("hard", S`A ball: \(h=-5t^2+30t+2\). Enter its maximum height (m).`, num(47), "Axis t = 3.", [S`\(-45+90+2=47\).`], S`\(47\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I change vertex form to standard form?", "Expand the square, multiply by a, then add k."],
      ["How do I find the vertex from standard form without factoring?", "Partial factoring: y = x(ax + b) + c gives two points at height c; the axis is midway."],
      ["What is the axis of y = ax² + bx + c?", "x = −b/(2a)."],
      ["How do I check two forms are equivalent?", "Expand one into the other, or substitute a few x-values."],
      ["Which form shows the maximum height of a ball?", "Vertex form."],
    ],
    summary: [
      "Vertex → standard: expand.",
      "Standard → vertex: find the vertex (partial factoring), keep a.",
      "Axis x = −b/(2a).",
      "Each form shows different features.",
    ],
    next: "4.2 converts standard form to vertex form by completing the square.",
  }),
];
