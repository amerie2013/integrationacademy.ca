// MCR3U 3.1 — The Three Forms of a Quadratic Function: reading direction, vertex, axis, zeros, y-intercept, domain and range
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "3.1 The Three Forms of a Quadratic Function";
export const ID = "86be9ac3-74ad-4633-a1c5-6d524db9f097";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "⛰️",
    title: "The Three Forms of a Quadratic Function",
    overview: S`A quadratic function can be written in standard form \(f(x)=ax^2+bx+c\), vertex form \(f(x)=a(x-h)^2+k\) or factored form \(f(x)=a(x-r)(x-s)\). The graph is the same parabola whichever form you use, but each form shows different features at a glance. In this lesson you will read the direction of opening, the vertex, the axis, the zeros and the y-intercept from each form, and state the domain, range and maximum or minimum value.`,
    goals: [
      "recognise standard, vertex and factored form;",
      "use the sign of a to decide the direction of opening and whether the vertex is a maximum or a minimum;",
      "read the vertex and axis from vertex form, the zeros and axis from factored form, and the y-intercept from standard form;",
      "state the domain, range and maximum or minimum value of a quadratic function;",
      "sketch a parabola from its key features.",
    ],
    curriculum: "A1.2 (represent quadratic functions using function notation, from equations, tables and graphs), A2.2 (determine the maximum or minimum of a quadratic function)",
    prior: [
      [S`Evaluate \(3(0-2)^2-5\).`, S`\(3(4)-5=7\).`],
      [S`Solve \((x-4)(x+1)=0\).`, S`\(x=4\) or \(x=-1\).`],
      [S`What number is halfway between \(-6\) and \(2\)?`, S`\(\frac{-6+2}{2}=-2\).`],
    ],
    words: [
      ["Vertex", "the turning point \\((h,k)\\) of the parabola", "\\((1,9)\\)"],
      ["Axis of symmetry", "the vertical line \\(x=h\\) through the vertex", "\\(x=1\\)"],
      ["Zeros", "x-values where \\(f(x)=0\\) (the x-intercepts)", "\\(x=-2,\\ x=4\\)"],
      ["Optimal value", "the maximum or minimum value of \\(f\\), the k of the vertex", "maximum 9"],
      ["Range", "every y-value the function takes", "\\(y\\le 9\\)"],
    ],
  }),

  section("📌 One parabola, three forms", S`
  <p>The three equations below describe the <em>same</em> parabola. Expand either of the first two and you get the third.</p>
  ${table(["Form", "Equation", "What you can read at a glance"], [
    ["Factored", S`\(f(x)=-(x+2)(x-4)\)`, "zeros −2 and 4"],
    ["Vertex", S`\(f(x)=-(x-1)^2+9\)`, "vertex (1, 9), axis x = 1, maximum 9"],
    ["Standard", S`\(f(x)=-x^2+2x+8\)`, "y-intercept 8"],
  ])}
  ${plane({ view: { xmin: -4, xmax: 6, ymin: -4, ymax: 11 }, curves: [{ f: (x) => -(x + 2) * (x - 4), color: "violet" }], vlines: [{ x: 1, color: "gray", dash: true }], points: [{ x: 1, y: 9, label: "vertex (1, 9)", color: "blue" }, { x: -2, y: 0, label: "(−2, 0)" }, { x: 4, y: 0, label: "(4, 0)" }, { x: 0, y: 8, label: "(0, 8)", color: "green" }], step: { x: 1, y: 1 } }, "Same parabola: zeros from the factored form, vertex from the vertex form, y-intercept from the standard form")}
  <p>All three forms share the same leading coefficient \(a\) (here \(a=-1\)), and \(a\) alone decides the direction of opening.</p>
  ${keyIdea(S`If \(a>0\) the parabola opens up and the vertex is a <strong>minimum</strong>; if \(a<0\) it opens down and the vertex is a <strong>maximum</strong>. The domain is always every real number; the range is \(y\ge k\) (opens up) or \(y\le k\) (opens down).`)}`),

  section("📌 Explore", S`<p>Move the zeros and \(a\). The graph, the vertex and the y-intercept all change, and the three equations below the graph update together. Notice that the vertex always sits on the dashed axis halfway between the zeros.</p>`),

  widget("quadForms", { init: [-1, -2, 4] }),

  section("📌 Reading each form", S`
  <p><strong>Vertex form</strong> \(f(x)=a(x-h)^2+k\): the vertex is \((h,k)\), the axis is \(x=h\), and \(k\) is the maximum or minimum value. The sign inside the bracket is opposite to the coordinate: \((x-1)^2\) gives \(h=1\), \((x+3)^2\) gives \(h=-3\).</p>
  <p><strong>Factored form</strong> \(f(x)=a(x-r)(x-s)\): the zeros are \(r\) and \(s\). The axis is halfway between them, \(x=\frac{r+s}{2}\). Substitute that x-value to get the optimal value.</p>
  <p><strong>Standard form</strong> \(f(x)=ax^2+bx+c\): the y-intercept is \(c\), because \(f(0)=c\). The axis is \(x=-\frac{b}{2a}\) (you will see why in 3.2).</p>
  ${plane({ view: { xmin: -5, xmax: 5, ymin: -6, ymax: 7 }, curves: [{ f: (x) => 0.5 * (x + 2) ** 2 - 4, color: "violet" }, { f: (x) => -((x - 2) ** 2) + 5, color: "blue" }], points: [{ x: -2, y: -4, label: "min (−2, −4)", color: "violet" }, { x: 2, y: 5, label: "max (2, 5)", color: "blue" }], step: { x: 1, y: 1 } }, "Violet: a = 0.5 > 0, range y ≥ −4. Blue: a = −1 < 0, range y ≤ 5")}
  ${watchOut([
    "In vertex form the sign inside the bracket is opposite: a(x + 3)² has its vertex at x = −3.",
    "The axis of symmetry is a line, so write it as an equation: x = 1, not just 1.",
    "The range depends on k and the direction of opening, never on the zeros.",
    "A parabola that opens up with its vertex above the x-axis has no zeros, so it has no factored form.",
  ])}`),

  examples([
    ["Vertex form", S`State the vertex, axis, direction of opening, optimal value, y-intercept, zeros and range of \(f(x)=3(x+2)^2-12\).`,
      [S`\((x+2)^2\) means \(h=-2\): vertex \((-2,-12)\), axis \(x=-2\).`, S`\(a=3>0\): opens up, so \(-12\) is a minimum and the range is \(y\ge-12\).`, S`y-intercept: \(f(0)=3(4)-12=0\).`, S`Zeros: \(3(x+2)^2=12\Rightarrow(x+2)^2=4\Rightarrow x+2=\pm2\Rightarrow x=0\) or \(x=-4\).`],
      S`vertex \((-2,-12)\), axis \(x=-2\), minimum \(-12\), y-intercept 0, zeros \(-4\) and 0, range \(y\ge-12\)`,
      plane({ view: { xmin: -6, xmax: 2, ymin: -13, ymax: 4 }, curves: [{ f: (x) => 3 * (x + 2) ** 2 - 12, color: "violet" }], vlines: [{ x: -2, color: "gray", dash: true }], points: [{ x: -2, y: -12, label: "(−2, −12)", color: "blue" }, { x: -4, y: 0, label: "(−4, 0)" }, { x: 0, y: 0, label: "(0, 0)", color: "green" }], step: { x: 1, y: 2 } })],
    ["Factored form", S`State the zeros, axis, vertex, y-intercept and range of \(f(x)=-2(x-1)(x-7)\).`,
      [S`Zeros 1 and 7; axis \(x=\frac{1+7}{2}=4\).`, S`\(f(4)=-2(3)(-3)=18\): vertex \((4,18)\), a maximum because \(a=-2<0\).`, S`\(f(0)=-2(-1)(-7)=-14\).`],
      S`zeros 1 and 7, axis \(x=4\), maximum 18 at \((4,18)\), y-intercept \(-14\), range \(y\le18\)`,
      plane({ view: { xmin: -1, xmax: 9, ymin: -16, ymax: 21 }, curves: [{ f: (x) => -2 * (x - 1) * (x - 7), color: "violet" }], vlines: [{ x: 4, color: "gray", dash: true }], points: [{ x: 4, y: 18, label: "(4, 18)", color: "blue" }, { x: 1, y: 0, label: "(1, 0)" }, { x: 7, y: 0, label: "(7, 0)" }, { x: 0, y: -14, label: "(0, −14)", color: "green" }], step: { x: 1, y: 4 } })],
    ["Standard form", S`For \(f(x)=x^2-8x+12\), state the y-intercept, then use the zeros to find the vertex.`,
      [S`y-intercept: \(c=12\).`, S`Factor: \(x^2-8x+12=(x-2)(x-6)\), so the zeros are 2 and 6.`, S`Axis \(x=4\); \(f(4)=16-32+12=-4\).`],
      S`y-intercept 12, zeros 2 and 6, vertex \((4,-4)\), minimum \(-4\)`,
      plane({ view: { xmin: -1, xmax: 9, ymin: -5, ymax: 13 }, curves: [{ f: (x) => x * x - 8 * x + 12, color: "violet" }], points: [{ x: 0, y: 12, label: "(0, 12)", color: "green" }, { x: 2, y: 0, label: "(2, 0)" }, { x: 6, y: 0, label: "(6, 0)" }, { x: 4, y: -4, label: "(4, −4)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["Sketch from features", S`Sketch \(f(x)=\tfrac12(x-4)^2+2\). How many zeros does it have? State its range.`,
      [S`Vertex \((4,2)\); \(a=\tfrac12>0\), so it opens up and is wider than \(y=x^2\).`, S`y-intercept: \(f(0)=\tfrac12(16)+2=10\); by symmetry \((8,10)\) is also on the graph.`, S`The lowest point is 2 units above the x-axis, so the graph never reaches 0.`],
      S`no zeros; range \(y\ge2\)`,
      plane({ view: { xmin: -1, xmax: 9, ymin: -1, ymax: 12 }, curves: [{ f: (x) => 0.5 * (x - 4) ** 2 + 2, color: "violet" }], vlines: [{ x: 4, color: "gray", dash: true }], points: [{ x: 4, y: 2, label: "(4, 2)", color: "blue" }, { x: 0, y: 10, label: "(0, 10)", color: "green" }, { x: 8, y: 10, label: "(8, 10)" }], step: { x: 1, y: 1 } })],
    ["Domain and range in context", S`A ball is kicked from the ground. Its height is \(h(t)=-5t(t-4)\) metres after \(t\) seconds. State a sensible domain and range.`,
      [S`Factored form: zeros \(t=0\) (kicked) and \(t=4\) (lands).`, S`Axis \(t=2\); \(h(2)=-5(2)(-2)=20\) m is the greatest height.`, S`Only the flight makes sense: time from 0 to 4 s, height from 0 to 20 m.`],
      S`domain \(0\le t\le4\), range \(0\le h\le20\)`,
      plane({ view: { xmin: -0.5, xmax: 5, ymin: -2, ymax: 23 }, curves: [{ f: (x) => -5 * x * (x - 4), a: 0, b: 4, color: "violet" }], points: [{ x: 2, y: 20, label: "(2, 20)", color: "blue" }, { x: 0, y: 0, label: "(0, 0)" }, { x: 4, y: 0, label: "(4, 0)" }], xlabel: "t (s)", ylabel: "h (m)", step: { x: 1, y: 5 } })],
  ]),

  practice([
    q("vertex form", S`What is the minimum value of \(f(x)=4(x+5)^2-3\)?`, num(-3),
      "a > 0, so the vertex is the lowest point.", [S`Vertex \((-5,-3)\).`], S`\(-3\)`),
    q("factored form", S`What is the axis of symmetry of \(f(x)=(x-9)(x+3)\)? Enter the x-value.`, num(3),
      "Average the zeros.", [S`\(\frac{9+(-3)}{2}\).`], S`\(x=3\)`),
    q("standard form", S`What is the y-intercept of \(f(x)=-2x^2+7x-11\)?`, num(-11),
      "f(0) = c.", [S`Every x-term is 0 at \(x=0\).`], S`\(-11\)`),
    q("range", S`What is the range of \(f(x)=-(x-6)^2+2\)?`, choice(["y ≤ 2", "y ≥ 2", "y ≤ 6", "all real numbers"], 0),
      "a < 0: the vertex is the top.", [S`Vertex \((6,2)\), opens down.`], S`\(y\le2\)`),
    q("zeros", S`How many zeros does \(f(x)=2(x-1)^2+5\) have?`, num(0),
      "Where is the vertex, and which way does it open?", [S`Vertex \((1,5)\) above the axis, opening up.`], S`\(0\)`),
  ]),

  ...hard([
    ["Two forms, one parabola", S`A parabola has zeros \(-2\) and \(8\) and y-intercept \(-32\). Write it in vertex form and state its range.`,
      [S`\(f(x)=a(x+2)(x-8)\) and \(f(0)=a(2)(-8)=-16a=-32\), so \(a=2\).`, S`Axis \(x=\frac{-2+8}{2}=3\); \(f(3)=2(5)(-5)=-50\).`, S`Vertex form \(f(x)=2(x-3)^2-50\); it opens up, so the range is \(y\ge-50\).`],
      S`\(f(x)=2(x-3)^2-50\), range \(y\ge-50\)`,
      plane({ view: { xmin: -4, xmax: 10, ymin: -55, ymax: 15 }, curves: [{ f: (x) => 2 * (x + 2) * (x - 8), color: "violet" }], vlines: [{ x: 3, color: "gray", dash: true }], points: [{ x: -2, y: 0, label: "(−2, 0)" }, { x: 8, y: 0, label: "(8, 0)" }, { x: 0, y: -32, label: "(0, −32)", color: "green" }, { x: 3, y: -50, label: "(3, −50)", color: "blue" }], step: { x: 1, y: 5 } })],
    ["A missing zero", S`For \(f(x)=-\tfrac12(x-2)(x-m)\), the vertex has x-coordinate 5. Find \(m\), the maximum value and the y-intercept.`,
      [S`The axis is halfway between the zeros: \(\frac{2+m}{2}=5\Rightarrow m=8\).`, S`\(f(5)=-\tfrac12(3)(-3)=4.5\), a maximum because \(a<0\).`, S`\(f(0)=-\tfrac12(-2)(-8)=-8\).`],
      S`\(m=8\), maximum 4.5, y-intercept \(-8\)`],
  ], [
    q("hard", S`A parabola has vertex \((4,-18)\) and \(a=2\). Find its larger zero.`, num(7),
      "Write it in vertex form and set it equal to 0.", [S`\(2(x-4)^2=18\Rightarrow(x-4)^2=9\Rightarrow x=1\) or \(7\).`], S`\(7\)`),
    q("hard", S`\(f(x)=(x+4)(x-b)\) has axis \(x=1\). Find \(b\).`, num(6),
      "The axis is the average of the zeros.", [S`\(\frac{-4+b}{2}=1\).`], S`\(6\)`),
    q("hard", S`The range of \(f(x)=a(x-1)(x-5)\) is \(y\le12\). Find \(a\).`, num(-3),
      "The vertex is on the axis x = 3, and its height is 12.", [S`\(f(3)=a(2)(-2)=-4a=12\).`], S`\(-3\)`),
  ]),

  wrapUp({
    qas: [
      ["Which form should I use?", "The one that answers the question: zeros → factored, maximum or minimum → vertex, y-intercept → standard."],
      ["How do I find the vertex from factored form?", "Average the zeros to get the axis, then substitute that x-value."],
      ["Can every quadratic be written in factored form?", "Only if it has real zeros. If the parabola never reaches the x-axis, there is no factored form."],
      ["Can a quadratic have exactly one zero?", "Yes — when the vertex is on the x-axis, e.g. 3(x − 4)². Then k = 0."],
      ["Is the domain ever restricted?", "Not for the function itself, but a context (time, length) can restrict it, as with the kicked ball."],
    ],
    summary: [
      "Factored form shows the zeros; vertex form shows the vertex; standard form shows the y-intercept.",
      "a > 0: opens up, minimum; a < 0: opens down, maximum.",
      "Axis = average of the zeros = h.",
      "Range: y ≥ k or y ≤ k; domain: all real numbers unless a context restricts it.",
    ],
    next: "3.2 moves between the forms: expanding to standard form, factoring, and using the axis to reach vertex form.",
  }),
];
