// MCF3M 3.2 — Solving Quadratic Equations by Graphing: roots = x-intercepts, rearranging to = 0, two-graph
// method, 0/1/2 roots, estimating irrational roots, a context.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, roots, rootsT, hard, plane } from "../lib.mjs";
const S = String.raw;

export const TITLE = "3.2 Solving Quadratic Equations by Graphing";

export const blocks = () => [
  intro({
    icon: "📈",
    title: "Solving Quadratic Equations by Graphing",
    overview: S`A <b>quadratic equation</b> such as \(x^2-2x-8=0\) asks: for which \(x\) is the quadratic equal to zero? On the graph of \(y=x^2-2x-8\) those are exactly the points where \(y=0\) — the \(x\)-intercepts. So the <b>roots</b> of the equation are the <b>zeros</b> of the function. Graphing shows at a glance whether there are two, one or no real roots, and it gives good estimates even when the roots are not whole numbers.`,
    goals: [
      "explain why the roots of \\(ax^2+bx+c=0\\) are the \\(x\\)-intercepts of \\(y=ax^2+bx+c\\);",
      "rearrange an equation to the form \\(ax^2+bx+c=0\\) before graphing;",
      "solve \\(f(x)=k\\) by finding where \\(y=f(x)\\) meets the line \\(y=k\\);",
      "decide from a graph whether an equation has two, one or no real roots;",
      "estimate non-integer roots from a graph and check them by substitution.",
    ],
    curriculum: "A1.5 (connect the factors used in solving a quadratic equation to the x-intercepts of the graph of the corresponding quadratic relation), A1.7 (relate the real roots of a quadratic equation to the x-intercepts), A1.8 (graphing as one strategy for determining real roots)",
    prior: [
      [S`Where does \(y=(x-1)(x+3)\) cross the \(x\)-axis?`, S`At \(x=1\) and \(x=-3\).`],
      [S`Rearrange \(x^2=5x+6\) so one side is zero.`, S`\(x^2-5x-6=0\).`],
      [S`What is the vertex of \(y=(x-2)^2+1\)?`, S`\((2,\,1)\).`],
    ],
    words: [
      ["Quadratic equation", "an equation that can be written ax² + bx + c = 0, a ≠ 0", "\\(x^2-2x-8=0\\)"],
      ["Root", "a solution of the equation", "\\(x=4\\)"],
      ["Zero", "an x-value where a function equals 0", "zero of \\(y=x^2-2x-8\\)"],
      ["x-intercept", "where the graph meets the x-axis", "\\((4,\\,0)\\)"],
      ["Double root", "one root counted twice; the graph touches the axis", "\\((x-3)^2=0\\)"],
    ],
  }),

  section("📌 Roots are x-intercepts", S`
  <p>To solve \(ax^2+bx+c=0\) by graphing: (1) graph \(y=ax^2+bx+c\); (2) read the \(x\)-coordinates where the graph meets the \(x\)-axis; (3) check each value in the equation.</p>
  ${table(["Graph", "Number of real roots", "Example"], [
    ["crosses the x-axis twice", "two", "\\(x^2-2x-8=0\\): \\(x=-2,\\ 4\\)"],
    ["touches the x-axis at its vertex", "one (a double root)", "\\(x^2-6x+9=0\\): \\(x=3\\)"],
    ["does not reach the x-axis", "none", "\\(x^2+2x+5=0\\)"],
  ])}
  ${plane({ view: { xmin: -4, xmax: 7, ymin: -10, ymax: 10 }, curves: [{ f: (x) => x * x - 2 * x - 8, color: "violet" }, { f: (x) => (x - 3) ** 2, color: "blue" }, { f: (x) => x * x + 2 * x + 5, color: "red" }], points: [{ x: -2, y: 0, label: "(−2, 0)", color: "violet" }, { x: 4, y: 0, label: "(4, 0)", color: "violet" }, { x: 3, y: 0, label: "(3, 0)", color: "blue" }], step: { x: 1, y: 2 } }, "Violet: two roots. Blue: one double root. Red: no real roots.")}
  ${keyIdea(S`Always make one side zero first. To solve \(x^2=2x+3\) by graphing, either graph \(y=x^2-2x-3\) and find its zeros, or graph both \(y=x^2\) and \(y=2x+3\) and read the \(x\)-coordinates where they meet. Both give \(x=-1\) and \(x=3\).`)}`),

  widget("parabolaFeatures", { init: [1, -2, -8] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "Read the x-coordinates of the intercepts, not the y-intercept.",
    "Graphs give estimates: always substitute to check, and say 'approximately' for decimals.",
    "Rearrange before graphing: the zeros of y = x² − 4 do not solve x² − 4 = 5.",
    "When two graphs are used, the roots are the x-coordinates of the intersection points.",
    "A parabola that touches the axis still gives a real root (a double root).",
  ])}`),

  examples([
    ["Read the roots", S`Solve \(x^2+x-12=0\) using the graph of \(y=x^2+x-12\), and check by factoring.`,
      [S`<b>Connection.</b> The roots are the \(x\)-values with \(y=0\): the \(x\)-intercepts.`,
        S`<b>Read the graph.</b> The parabola crosses the \(x\)-axis at \(x=-4\) and \(x=3\).`,
        S`<b>Check by substituting.</b> \((-4)^2-4-12=0\) ✓ and \(9+3-12=0\) ✓`,
        S`<b>Check by factoring.</b> \(x^2+x-12=(x+4)(x-3)\): zeros \(-4\) and \(3\) ✓`,
        S`<b>Conclusion.</b> The factors and the intercepts give the same information.`],
      S`\(x=-4\) or \(x=3\)`,
      plane({ view: { xmin: -6, xmax: 5, ymin: -14, ymax: 10 }, curves: [{ f: (x) => x * x + x - 12, color: "violet" }], points: [{ x: -4, y: 0, label: "(−4, 0)", color: "amber" }, { x: 3, y: 0, label: "(3, 0)", color: "amber" }], step: { x: 1, y: 2 } })],

    ["Rearrange first", S`Solve \(x^2-6=x\) by graphing.`,
      [S`<b>Make one side zero.</b> Subtract \(x\): \(x^2-x-6=0\).`,
        S`<b>Graph.</b> \(y=x^2-x-6\) crosses the axis at \(x=-2\) and \(x=3\).`,
        S`<b>Second method.</b> Graph \(y=x^2-6\) and \(y=x\); they meet at \((-2,\,-2)\) and \((3,\,3)\). The \(x\)-coordinates are the same roots.`,
        S`<b>Check.</b> \(x=3\): \(9-6=3\) ✓. \(x=-2\): \(4-6=-2\) ✓`],
      S`\(x=-2\) or \(x=3\)`,
      plane({ view: { xmin: -4, xmax: 5, ymin: -7, ymax: 8 }, curves: [{ f: (x) => x * x - 6, color: "violet" }], lines: [{ m: 1, b: 0, color: "blue" }], points: [{ x: -2, y: -2, label: "(−2, −2)", color: "amber" }, { x: 3, y: 3, label: "(3, 3)", color: "amber" }], step: { x: 1, y: 1 } })],

    ["One root or none", S`Use graphs to find the number of real roots of (a) \(x^2+8x+16=0\) and (b) \(-x^2+4x-7=0\).`,
      [S`<b>(a)</b> \(y=x^2+8x+16=(x+4)^2\) has vertex \((-4,\,0)\) on the axis: it touches once. One (double) root, \(x=-4\).`,
        S`<b>(b)</b> \(y=-x^2+4x-7=-(x-2)^2-3\) has vertex \((2,\,-3)\) and opens down, so it stays below the axis. No real roots.`,
        S`<b>Check (a).</b> \(16-32+16=0\) ✓`,
        S`<b>Check (b).</b> The largest value of \(y\) is \(-3<0\), so it is never \(0\) ✓`],
      S`(a) one root, x = −4; (b) no real roots`,
      plane({ view: { xmin: -8, xmax: 5, ymin: -9, ymax: 8 }, curves: [{ f: (x) => (x + 4) ** 2, color: "violet" }, { f: (x) => -((x - 2) ** 2) - 3, color: "red" }], points: [{ x: -4, y: 0, label: "(−4, 0)", color: "amber" }, { x: 2, y: -3, label: "(2, −3)", color: "red" }], step: { x: 1, y: 1 } })],

    ["Estimate irrational roots", S`Estimate the roots of \(x^2-4x+1=0\) to one decimal place from the graph, then check.`,
      [S`<b>Graph.</b> \(y=x^2-4x+1\) has vertex \((2,\,-3)\) and crosses the axis between \(0\) and \(1\), and between \(3\) and \(4\).`,
        S`<b>Zoom with a table.</b> \(y(0.2)=0.04-0.8+1=0.24\), \(y(0.3)=0.09-1.2+1=-0.11\): the root is about \(0.27\), so \(x\approx0.3\).`,
        S`<b>Symmetry.</b> The axis is \(x=2\), so the other root is \(2+(2-0.27)\approx3.73\), i.e. \(x\approx3.7\).`,
        S`<b>Check.</b> \(y(3.7)=13.69-14.8+1=-0.11\) and \(y(3.8)=14.44-15.2+1=0.24\): the root lies between, near \(3.7\) ✓`],
      S`\(x\approx0.3\) and \(x\approx3.7\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x * x - 4 * x + 1, color: "violet" }], points: [{ x: 2 - Math.sqrt(3), y: 0, label: "(0.27, 0)", color: "amber" }, { x: 2 + Math.sqrt(3), y: 0, label: "(3.73, 0)", color: "amber" }, { x: 2, y: -3, label: "(2, −3)", color: "blue" }], step: { x: 1, y: 1 } })],

    ["When is the ball above 15 m?", S`A ball's height is \(h(t)=-5t^2+20t\) m. Use a graph to find when the ball is exactly \(15\) m high, and when it is above \(15\) m.`,
      [S`<b>Equation.</b> \(-5t^2+20t=15\). Graph \(y=h(t)\) and the line \(y=15\).`,
        S`<b>Intersections.</b> They meet at \(t=1\) and \(t=3\).`,
        S`<b>Check algebraically.</b> \(-5t^2+20t-15=0\Rightarrow t^2-4t+3=0\Rightarrow(t-1)(t-3)=0\) ✓`,
        S`<b>Above 15 m.</b> The parabola is above the line between the intersections: \(1<t<3\), a span of \(2\) s.`,
        S`<b>Check a time.</b> \(h(2)=-20+40=20>15\) ✓`],
      S`exactly 15 m at t = 1 s and t = 3 s; above 15 m for 1 < t < 3`,
      plane({ view: { xmin: -0.3, xmax: 4.5, ymin: -2, ymax: 24 }, curves: [{ f: (t) => -5 * t * t + 20 * t, a: 0, b: 4, color: "violet" }], lines: [{ m: 0, b: 15, color: "green", dash: true }], points: [{ x: 1, y: 15, label: "(1, 15)", color: "amber" }, { x: 3, y: 15, label: "(3, 15)", color: "amber" }, { x: 2, y: 20, label: "(2, 20)", color: "blue" }], step: { x: 0.5, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })],
  ]),

  practice([
    q("read", S`The graph of \(y=x^2-3x-10\) crosses the \(x\)-axis at two points. Enter both roots of \(x^2-3x-10=0\).`, roots(5, -2), "Check by factoring.", [S`\((x-5)(x+2)=0\).`], S`\(x=5,\ -2\)`),
    q("count", S`How many real roots does \(x^2+6x+10=0\) have?`, num(0), "Vertex form (x + 3)² + 1.", [S`Minimum \(1>0\): no \(x\)-intercepts.`], S`\(0\)`),
    q("count", S`How many real roots does \(4x^2-12x+9=0\) have?`, num(1), "(2x − 3)².", [S`The vertex \((1.5,\,0)\) is on the axis.`], S`\(1\)`),
    q("rearrange", S`Solve \(x^2=3x+4\) by graphing \(y=x^2\) and \(y=3x+4\). Enter both roots.`, roots(4, -1), "x² − 3x − 4 = 0.", [S`\((x-4)(x+1)=0\).`], S`\(x=4,\ -1\)`),
    q("estimate", S`Estimate the positive root of \(x^2-7=0\) to one decimal place.`, num(2.6, 0.06), "√7.", [S`\(2.6^2=6.76\), \(2.7^2=7.29\): about \(2.65\).`], S`\(\approx2.6\)`),
  ]),

  ...hard([
    ["How many intersections?", S`For which values of \(k\) does \(x^2-4x+k=0\) have two, one or no real roots? Use the graph of \(y=x^2-4x\).`,
      [S`<b>Rewrite.</b> \(x^2-4x=-k\): the roots are where \(y=x^2-4x\) meets the line \(y=-k\).`,
        S`<b>Vertex.</b> \(y=x^2-4x=(x-2)^2-4\): lowest point \((2,\,-4)\).`,
        S`<b>Count.</b> Two roots if \(-k>-4\), i.e. \(k<4\); one root if \(k=4\); none if \(k>4\).`,
        S`<b>Check.</b> \(k=4\): \(x^2-4x+4=(x-2)^2\), a double root ✓`],
      S`two roots for k < 4, one for k = 4, none for k > 4`,
      plane({ view: { xmin: -2, xmax: 6, ymin: -6, ymax: 6 }, curves: [{ f: (x) => x * x - 4 * x, color: "violet" }], lines: [{ m: 0, b: -4, color: "blue", dash: true }, { m: 0, b: -2, color: "green", dash: true }, { m: 0, b: -5, color: "red", dash: true }], points: [{ x: 2, y: -4, label: "(2, −4)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["A time interval", S`A diver's height is \(H(t)=-5t^2+10t+15\) m. When is the diver below the \(10\) m board height but still above the water?`,
      [S`<b>Board height.</b> \(H=10\Rightarrow-5t^2+10t+5=0\Rightarrow t^2-2t-1=0\); from the graph, \(t\approx2.41\) (the root \(-0.41\) is before the jump).`,
        S`<b>Water.</b> \(H=0\Rightarrow t^2-2t-3=0\Rightarrow(t-3)(t+1)=0\Rightarrow t=3\).`,
        S`<b>Interval.</b> Between about \(2.41\) s and \(3\) s.`,
        S`<b>Check.</b> \(H(2.41)=-29.04+24.1+15\approx10.06\approx10\) ✓`],
      S`about 2.41 s < t < 3 s`],
  ], [
    q("hard", S`For how many integer values of \(k\) between \(0\) and \(10\) (inclusive) does \(x^2-6x+k=0\) have two real roots?`, num(9), "y = x² − 6x has minimum −9; need −k > −9.", [S`Two roots when \(k<9\): \(k=0,1,\dots,8\).`], S`\(9\)`),
    q("hard", S`The graphs of \(y=x^2\) and \(y=x+6\) meet at two points. Enter both \(x\)-coordinates.`, roots(3, -2), "x² − x − 6 = 0.", [S`\((x-3)(x+2)=0\).`], S`\(3,\ -2\)`),
    q("hard", S`Estimate the larger root of \(x^2-2x-4=0\) to one decimal place.`, num(3.2, 0.06), "Vertex (1, −5); try 3.2 and 3.3.", [S`\(y(3.2)=-0.16\), \(y(3.3)=0.29\): about \(3.24\).`], S`\(\approx3.2\)`),
    q("hard", S`\(h(t)=-5t^2+30t\). For how many seconds is the object above \(25\) m?`, num(4), "Solve −5t² + 30t = 25.", [S`\(t^2-6t+5=0\Rightarrow t=1,\ 5\).`, S`\(5-1=4\) s.`], S`\(4\)`),
    q("hard", S`The parabola \(y=a(x-2)^2-8\) crosses the \(x\)-axis at \(x=0\). Enter its other \(x\)-intercept.`, num(4), "Symmetric about x = 2.", [S`Roots are symmetric about the axis \(x=2\): \(0\) and \(4\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["Why are roots the same as x-intercepts?", "Both are the x-values where ax² + bx + c equals 0."],
      ["What must I do before graphing an equation?", "Rearrange so one side is 0, or graph both sides and find intersections."],
      ["How can a graph show there are no real roots?", "The parabola does not reach the x-axis."],
      ["What does a double root look like?", "The vertex touches the x-axis."],
      ["Are graphical roots exact?", "Only if they land on grid values; otherwise estimate and check by substitution."],
    ],
    summary: [
      "Roots of ax² + bx + c = 0 = zeros of y = ax² + bx + c.",
      "Two, one or no real roots: cross, touch or miss the axis.",
      "f(x) = k: intersect y = f(x) with y = k.",
      "Check every graphical root by substitution.",
    ],
    next: "3.3 solves quadratic equations exactly by factoring.",
  }),
];
