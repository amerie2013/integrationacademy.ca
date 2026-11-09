// MCF3M 3.6 — Chapter 3 Review: factored form, solving by graphing and factoring, problems, models from data.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, roots, fexpr, hard, plane } from "../lib.mjs";
const S = String.raw;

export const TITLE = "3.6 Chapter 3 Review";

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 3 Review",
    overview: S`Chapter 3 connected three ideas: the <b>factored form</b> \(y=a(x-r)(x-s)\) shows the zeros of a parabola; the <b>roots</b> of \(ax^2+bx+c=0\) are those zeros, found by graphing or by factoring; and real situations and data sets lead to quadratic equations and models whose roots and vertices must be interpreted. This review mixes all of them, as a chapter test will.`,
    goals: [
      "find zeros, axis, vertex and y-intercept from factored form;",
      "solve quadratic equations by graphing and by factoring;",
      "set up and solve quadratic problems and interpret the roots;",
      "build and judge a quadratic model from data;",
      "choose between graphing and factoring.",
    ],
    curriculum: "A1.4, A1.5, A1.8, A2.9, A2.10, A3.1–A3.3 (chapter 3 review)",
    prior: [
      [S`Zeros of \(y=-(x-1)(x+7)\)?`, S`\(1\) and \(-7\).`],
      [S`Solve \(x^2=9x\).`, S`\(x(x-9)=0\): \(0\) or \(9\).`],
      [S`What is a residual?`, S`Actual minus predicted.`],
    ],
    words: [
      ["Factored form", "y = a(x − r)(x − s)", "zeros r, s"],
      ["Axis of symmetry", "x = (r + s)/2", "midway between zeros"],
      ["Zero-product property", "ab = 0 ⇒ a = 0 or b = 0", "\\((x-2)(x+3)=0\\)"],
      ["Admissible root", "a root that fits the situation", "positive length"],
      ["Curve of best fit", "technology's model using every point", "quadratic regression"],
    ],
  }),

  section("📌 Chapter summary", S`
  ${table(["Lesson", "Key idea"], [
    ["3.1 Standard and factored forms", "zeros r, s; axis (r + s)/2; vertex by substitution; y-intercept a·r·s"],
    ["3.2 Solving by graphing", "roots = x-intercepts; 2, 1 or 0 real roots; f(x) = k by intersection"],
    ["3.3 Solving by factoring", "rearrange to 0, factor, zero-product property, verify"],
    ["3.4 Problems", "define, model, solve, reject impossible roots, interpret"],
    ["3.5 Models from data", "zeros or vertex + a point; residuals; extrapolation caution"],
  ])}
  ${keyIdea(S`Factoring gives exact roots when the quadratic factors over the integers; graphing always shows how many roots there are and gives estimates. When neither is convenient, chapter 4's quadratic formula always works.`)}`),

  widget("quadForms", { init: [1, -3, 5] }),

  examples([
    ["Factored form to sketch", S`Sketch \(y=2(x+1)(x-5)\): zeros, axis, vertex, \(y\)-intercept.`,
      [S`<b>Zeros.</b> \(x=-1\) and \(x=5\).`,
        S`<b>Axis.</b> \(x=\frac{-1+5}2=2\).`,
        S`<b>Vertex.</b> \(y=2(3)(-3)=-18\): \((2,\,-18)\).`,
        S`<b>\(y\)-intercept.</b> \(2(1)(-5)=-10\).`,
        S`<b>Check.</b> Mirror of \((0,\,-10)\) is \((4,\,-10)\): \(2(5)(-1)=-10\) ✓`],
      S`zeros −1, 5; axis x = 2; vertex (2, −18); y-intercept −10`,
      plane({ view: { xmin: -3, xmax: 7, ymin: -20, ymax: 10 }, curves: [{ f: (x) => 2 * (x + 1) * (x - 5), color: "violet" }], points: [{ x: -1, y: 0, label: "(−1, 0)", color: "amber" }, { x: 5, y: 0, label: "(5, 0)", color: "amber" }, { x: 2, y: -18, label: "(2, −18)", color: "blue" }, { x: 0, y: -10, label: "(0, −10)", color: "gray" }], step: { x: 1, y: 4 } })],

    ["Solve two ways", S`Solve \(x^2+2x=15\) by factoring and confirm with a graph.`,
      [S`<b>Rearrange.</b> \(x^2+2x-15=0\).`,
        S`<b>Factor.</b> \((x+5)(x-3)=0\Rightarrow x=-5\) or \(x=3\).`,
        S`<b>Graph.</b> \(y=x^2+2x-15\) crosses the axis at \(-5\) and \(3\) ✓`,
        S`<b>Verify.</b> \(25-10=15\) ✓; \(9+6=15\) ✓`],
      S`\(x=-5\) or \(x=3\)`,
      plane({ view: { xmin: -7, xmax: 5, ymin: -18, ymax: 10 }, curves: [{ f: (x) => x * x + 2 * x - 15, color: "violet" }], points: [{ x: -5, y: 0, label: "(−5, 0)", color: "amber" }, { x: 3, y: 0, label: "(3, 0)", color: "amber" }], step: { x: 1, y: 3 } })],

    ["A complex trinomial equation", S`Solve \(6x^2+x=2\).`,
      [S`<b>Rearrange.</b> \(6x^2+x-2=0\).`,
        S`<b>Decompose.</b> \(ac=-12\), \(b=1\): \(4,-3\). \(6x^2+4x-3x-2=2x(3x+2)-1(3x+2)=(3x+2)(2x-1)\).`,
        S`<b>Solve.</b> \(x=-\tfrac23\) or \(x=\tfrac12\).`,
        S`<b>Verify \(x=\tfrac12\).</b> \(6(\tfrac14)+\tfrac12=2\) ✓`],
      S`\(x=-\tfrac23\) or \(x=\tfrac12\)`,
      plane({ view: { xmin: -1.5, xmax: 1.5, ymin: -3, ymax: 8 }, curves: [{ f: (x) => 6 * x * x + x - 2, color: "violet" }], points: [{ x: -2 / 3, y: 0, label: "(−0.67, 0)", color: "amber" }, { x: 0.5, y: 0, label: "(0.5, 0)", color: "amber" }], step: { x: 0.5, y: 1 } })],

    ["A problem with a rejected root", S`A rectangular sign has length \(3\) m more than twice its width, and area \(27\) m². Find its dimensions.`,
      [S`<b>Define.</b> Width \(w\), length \(2w+3\).`,
        S`<b>Model.</b> \(w(2w+3)=27\Rightarrow2w^2+3w-27=0\).`,
        S`<b>Factor.</b> \(ac=-54\), \(b=3\): \(9,-6\). \((2w+9)(w-3)=0\Rightarrow w=3\) (reject \(-4.5\)).`,
        S`<b>Answer.</b> \(3\) m by \(9\) m. Check: \(27\) ✓`],
      S`3 m by 9 m`,
      plane({ view: { xmin: -6, xmax: 5, ymin: -32, ymax: 20 }, curves: [{ f: (w) => 2 * w * w + 3 * w - 27, color: "violet" }], points: [{ x: 3, y: 0, label: "(3, 0)", color: "amber" }, { x: -4.5, y: 0, label: "(−4.5, 0) rejected", color: "red" }], step: { x: 1, y: 5 } })],

    ["Data to model", S`A ball's heights are \((0,\,1.0)\), \((0.5,\,4.8)\), \((1,\,7.4)\), \((1.5,\,8.6)\), \((2,\,8.7)\), \((2.5,\,7.3)\), \((3,\,4.6)\). Build a vertex-form model and predict when it lands.`,
      [S`<b>Vertex estimate.</b> About \((1.75,\,8.9)\).`,
        S`<b>Find \(a\).</b> Using \((0,\,1.0)\): \(1=a(3.0625)+8.9\Rightarrow a\approx-2.58\).`,
        S`<b>Model.</b> \(h\approx-2.58(t-1.75)^2+8.9\).`,
        S`<b>Landing.</b> \((t-1.75)^2=\frac{8.9}{2.58}\approx3.45\Rightarrow t\approx1.75+1.86=3.61\) s.`,
        S`<b>Check a point.</b> \(t=3\): \(-2.58(1.5625)+8.9\approx4.87\); actual \(4.6\) (residual \(-0.27\)) ✓`],
      S`\(h\approx-2.58(t-1.75)^2+8.9\); lands near 3.6 s`,
      plane({ view: { xmin: -0.2, xmax: 4, ymin: -0.5, ymax: 10 }, curves: [{ f: (t) => -2.58 * (t - 1.75) ** 2 + 8.9, a: 0, b: 3.61, color: "violet" }], points: [[0, 1], [0.5, 4.8], [1, 7.4], [1.5, 8.6], [2, 8.7], [2.5, 7.3], [3, 4.6]].map(([x, y]) => ({ x, y, label: "", color: "blue" })), step: { x: 0.5, y: 1 }, xlabel: "t (s)", ylabel: "h (m)" })],
  ]),

  practice([
    q("forms", S`Write \(y=x^2-4x-21\) in factored form.`, fexpr("(x-7)*(x+3)"), "Product −21, sum −4.", [S`\((x-7)(x+3)\).`], S`\((x-7)(x+3)\)`),
    q("vertex", S`Enter the \(y\)-coordinate of the vertex of \(y=(x-1)(x-9)\).`, num(-16), "Axis x = 5.", [S`\((4)(-4)=-16\).`], S`\(-16\)`),
    q("solve", S`Solve \(2x^2-18=0\).`, roots(3, -3), "2(x² − 9).", [S`\(x=\pm3\).`], S`\(\pm3\)`),
    q("count", S`How many real roots does \(x^2-10x+25=0\) have?`, num(1), "Perfect square.", [S`\((x-5)^2=0\).`], S`\(1\)`),
    q("problem", S`\(h(t)=-5t^2+15t+20\). Enter the time (s) when the object lands.`, num(4), "−5(t² − 3t − 4).", [S`\(-5(t-4)(t+1)=0\Rightarrow t=4\).`], S`\(4\)`),
  ]),

  ...hard([
    ["Design an equation", S`Write a quadratic equation with integer coefficients whose roots are \(\tfrac23\) and \(-4\), and check it.`,
      [S`<b>Factors.</b> \(x=\tfrac23\Rightarrow3x-2=0\); \(x=-4\Rightarrow x+4=0\).`,
        S`<b>Equation.</b> \((3x-2)(x+4)=0\Rightarrow3x^2+10x-8=0\).`,
        S`<b>Check.</b> \(3(\tfrac49)+10(\tfrac23)-8=\tfrac43+\tfrac{20}3-8=8-8=0\) ✓`],
      S`3x² + 10x − 8 = 0`],
    ["A time window", S`\(h(t)=-5t^2+30t+8\). For how long is the object higher than \(33\) m?`,
      [S`<b>Boundary.</b> \(-5t^2+30t+8=33\Rightarrow t^2-6t+5=0\Rightarrow t=1,\ 5\).`,
        S`<b>Interval.</b> \(1<t<5\): \(4\) s.`,
        S`<b>Check.</b> \(h(3)=-45+90+8=53>33\) ✓`],
      S`4 seconds`,
      plane({ view: { xmin: -0.3, xmax: 6.5, ymin: -2, ymax: 60 }, curves: [{ f: (t) => -5 * t * t + 30 * t + 8, a: 0, b: 6.25, color: "violet" }], lines: [{ m: 0, b: 33, color: "green", dash: true }], points: [{ x: 1, y: 33, label: "(1, 33)", color: "amber" }, { x: 5, y: 33, label: "(5, 33)", color: "amber" }], step: { x: 1, y: 10 } })],
  ], [
    q("hard", S`A parabola has zeros \(-3\) and \(7\) and passes through \((5,\,-32)\). Enter its \(y\)-intercept.`, num(-42), "Find a.", [S`\(-32=a(8)(-2)\Rightarrow a=2\).`, S`\(2(3)(-7)=-42\).`], S`\(-42\)`),
    q("hard", S`Solve \(3x^2=2(5x+4)\).`, roots(4, -2 / 3), "3x² − 10x − 8 = 0.", [S`\((3x+2)(x-4)=0\).`], S`\(x=4,\ -\tfrac23\)`),
    q("hard", S`The product of two consecutive positive integers is \(19\) more than their sum. Enter the smaller.`, num(5), "n(n + 1) = (2n + 1) + 19.", [S`\(n^2+n=2n+20\Rightarrow n^2-n-20=0\Rightarrow(n-5)(n+4)=0\).`, S`\(n=5\); check \(5\times6=30=11+19\) ✓`], S`\(5\)`),
    q("hard", S`A model \(y=a(x-4)^2+20\) passes through \((0,\,4)\). Enter the larger \(x\)-intercept.`, num(4 + Math.sqrt(20), 0.01), "a = −1.", [S`\(4=16a+20\Rightarrow a=-1\); \((x-4)^2=20\Rightarrow x=4+\sqrt{20}\approx8.47\).`], S`\(\approx8.47\)`),
    q("hard", S`For which \(k\) does \(x^2+kx+16=0\) have exactly one root, with \(k>0\)?`, num(8), "Perfect square.", [S`\((x+4)^2\Rightarrow k=8\).`], S`\(8\)`),
  ]),

  wrapUp({
    qas: [
      ["What features does factored form give?", "The zeros directly; the axis and vertex follow."],
      ["When should I graph instead of factor?", "When the quadratic does not factor nicely, or to count and estimate roots."],
      ["Why verify roots?", "To catch errors and extraneous answers."],
      ["How do I handle a root that doesn't make sense?", "Reject it and say why."],
      ["How do I judge a data model?", "Check residuals with points you didn't use, and avoid far extrapolation."],
    ],
    summary: [
      "Factored form ↔ zeros; axis midway; vertex by substitution.",
      "Roots = x-intercepts; solve by graphing or factoring.",
      "Interpret roots in context.",
      "Build models from zeros or vertex plus a point.",
    ],
    next: "Chapter 4 introduces vertex form conversions, completing the square and the quadratic formula.",
  }),
];
