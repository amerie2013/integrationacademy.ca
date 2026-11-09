// MCF3M 1.3 — Domain and Range: set notation, reading from graphs (closed/open ends), linear and quadratic
// functions from equations, restrictions in real contexts.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "../lib.mjs";
const S = String.raw;

export const TITLE = "1.3 Domain and Range";

export const blocks = () => [
  intro({
    icon: "📏",
    title: "Domain and Range",
    overview: S`The <b>domain</b> of a function is the set of inputs it accepts, and the <b>range</b> is the set of outputs it actually produces. For a line or a parabola written as an equation, every real \(x\) is allowed, but a parabola's outputs stop at its vertex. In a real situation the context adds limits: a ball's height model only makes sense from the throw until it lands. This lesson shows how to find and write domains and ranges from lists, graphs, equations and contexts.`,
    goals: [
      "state the domain and range of a relation given as points, a graph or an equation;",
      "write domains and ranges in set notation such as \\(\\{x\\in\\mathbb{R}\\mid -2\\le x<5\\}\\);",
      "explain why every linear function has range \\(\\mathbb{R}\\) (unless horizontal) and every quadratic has a range bounded by its vertex;",
      "find the range of \\(f(x)=a(x-h)^2+k\\) from the sign of \\(a\\) and the value of \\(k\\);",
      "explain and state restrictions on the domain and range in real-world contexts.",
    ],
    curriculum: "A2.3 (explain the meaning of domain and range, and describe the domain and range of linear and quadratic functions), A2.4 (explain any restrictions on the domain and range of a quadratic function in contexts arising from real-world applications)",
    prior: [
      [S`What is the vertex of \(y=(x-3)^2+2\)?`, S`\((3,\,2)\).`],
      [S`Does \(y=-x^2\) open up or down?`, S`Down, because the coefficient of \(x^2\) is negative.`],
      [S`What does the symbol \(\mathbb{R}\) mean?`, S`The set of all real numbers.`],
    ],
    words: [
      ["Domain", "set of all possible inputs (x-values)", "\\(\\{x\\in\\mathbb{R}\\}\\)"],
      ["Range", "set of all outputs (y-values) produced", "\\(\\{y\\in\\mathbb{R}\\mid y\\ge-4\\}\\)"],
      ["Set notation", "\\(\\{x\\in\\mathbb{R}\\mid\\text{condition}\\}\\), read “x in R such that…”", "\\(\\{x\\in\\mathbb{R}\\mid x>0\\}\\)"],
      ["Closed / open dot", "endpoint included (●, ≤) or not included (○, <)", "\\(-2\\le x<5\\)"],
      ["Restriction", "a limit on x or y forced by the situation", "time \\(t\\ge0\\), height \\(h\\ge0\\)"],
    ],
  }),

  section("📌 Reading domain and range from a graph", S`
  <p>Squash the graph onto the \(x\)-axis: the shadow it makes is the <b>domain</b>. Squash it onto the \(y\)-axis: that shadow is the <b>range</b>. A solid dot includes the endpoint (\(\le\)); an open dot leaves it out (\(<\)); an arrow means the graph keeps going.</p>
  ${table(["Function", "Domain", "Range", "Why"], [
    ["\\(y=2x-3\\)", "\\(\\{x\\in\\mathbb{R}\\}\\)", "\\(\\{y\\in\\mathbb{R}\\}\\)", "a slanted line reaches every height"],
    ["\\(y=5\\)", "\\(\\{x\\in\\mathbb{R}\\}\\)", "\\(\\{5\\}\\)", "a horizontal line has one output"],
    ["\\(y=(x-1)^2+3\\)", "\\(\\{x\\in\\mathbb{R}\\}\\)", "\\(\\{y\\in\\mathbb{R}\\mid y\\ge3\\}\\)", "opens up: the vertex is the lowest point"],
    ["\\(y=-2(x+4)^2+6\\)", "\\(\\{x\\in\\mathbb{R}\\}\\)", "\\(\\{y\\in\\mathbb{R}\\mid y\\le6\\}\\)", "opens down: the vertex is the highest point"],
  ])}
  ${keyIdea(S`For \(f(x)=a(x-h)^2+k\): the domain is always \(\{x\in\mathbb{R}\}\). If \(a>0\) the range is \(\{y\in\mathbb{R}\mid y\ge k\}\); if \(a<0\) the range is \(\{y\in\mathbb{R}\mid y\le k\}\). The \(y\)-coordinate of the vertex is the boundary.`)}
  ${plane({ view: { xmin: -4, xmax: 6, ymin: -2, ymax: 8 }, curves: [{ f: (x) => (x - 1) ** 2 + 3, color: "violet" }], lines: [{ m: 0, b: 3, color: "green", dash: true }], points: [{ x: 1, y: 3, label: "vertex (1, 3)", color: "amber" }], step: { x: 1, y: 1 } }, "y = (x − 1)² + 3: every x is allowed, but no output is below 3, so the range is y ≥ 3.")}`),

  widget("domainRangeLab", { start: "quad" }),

  section("⚠️ Common slips", S`
  ${watchOut([
    "Do not list the range from the endpoints only: a parabola on −1 ≤ x ≤ 4 can reach its vertex in between.",
    "Range uses y, domain uses x — keep the letters straight in set notation.",
    "An open dot at an end means < (or >), not ≤.",
    "For a context, the formula is often defined for all x but the situation is not (time before the throw, negative lengths).",
    "Write the smaller number first: −2 ≤ x ≤ 5, not 5 ≥ x ≥ −2 squeezed the wrong way.",
  ])}`),

  examples([
    ["From a set of points", S`State the domain and range of \(\{(-4,\,1),\,(-1,\,3),\,(0,\,1),\,(2,\,-5),\,(6,\,3)\}\). Is it a function?`,
      [S`<b>Definitions.</b> The domain is the set of first coordinates and the range is the set of second coordinates. Each value is listed once, usually in increasing order.`,
        S`<b>Domain.</b> First coordinates: \(-4,\,-1,\,0,\,2,\,6\). So \(D=\{-4,\,-1,\,0,\,2,\,6\}\).`,
        S`<b>Range.</b> Second coordinates: \(1,\,3,\,1,\,-5,\,3\). Listing each once in order: \(R=\{-5,\,1,\,3\}\).`,
        S`<b>Function?</b> No \(x\)-value repeats, so each input has one output: it is a function. The repeated outputs \(1\) and \(3\) are allowed.`,
        S`<b>Check with the graph.</b> The five plotted points sit on five different vertical lines ✓, and their heights are only \(-5\), \(1\) and \(3\) ✓`],
      S`D = {−4, −1, 0, 2, 6}, R = {−5, 1, 3}; it is a function.`,
      plane({ view: { xmin: -5, xmax: 7, ymin: -6, ymax: 5 }, points: [{ x: -4, y: 1, label: "(−4, 1)" }, { x: -1, y: 3, label: "(−1, 3)" }, { x: 0, y: 1, label: "(0, 1)" }, { x: 2, y: -5, label: "(2, −5)" }, { x: 6, y: 3, label: "(6, 3)" }], step: { x: 1, y: 1 } })],

    ["A graph with endpoints", S`The graph is the line segment from a closed dot at \((-3,\,-2)\) to an open dot at \((4,\,5)\). State the domain and range in set notation.`,
      [S`<b>Read the ends.</b> The graph starts at \(x=-3\) with a closed dot (included) and ends at \(x=4\) with an open dot (not included).`,
        S`<b>Domain.</b> Every \(x\) from \(-3\) up to, but not including, \(4\): \(\{x\in\mathbb{R}\mid -3\le x<4\}\).`,
        S`<b>Range.</b> The segment rises steadily, so its \(y\)-values run from \(-2\) (included) up to \(5\) (not included): \(\{y\in\mathbb{R}\mid -2\le y<5\}\).`,
        S`<b>Why the order matters.</b> Because the segment always increases, the lowest output is at the left end and the highest at the right end. (For a parabola this is not true; see the next example.)`,
        S`<b>Check.</b> The line through the ends has slope \(\frac{5-(-2)}{4-(-3)}=\frac77=1\), so \(y=x+1\). At \(x=-3\): \(y=-2\) ✓; as \(x\to4\): \(y\to5\) ✓`],
      S`\(D=\{x\in\mathbb{R}\mid -3\le x<4\}\), \(R=\{y\in\mathbb{R}\mid -2\le y<5\}\)`,
      plane({ view: { xmin: -5, xmax: 6, ymin: -4, ymax: 7 }, segs: [{ pts: [[-3, -2], [4, 5]], color: "violet" }], points: [{ x: -3, y: -2, label: "(−3, −2) ●", color: "violet" }, { x: 4, y: 5, label: "(4, 5) ○", color: "red" }], step: { x: 1, y: 1 } })],

    ["Range of a quadratic from its equation", S`State the domain and range of (a) \(f(x)=2(x+3)^2-7\) and (b) \(g(x)=-\tfrac12(x-4)^2+9\). Explain each range.`,
      [S`<b>Domain.</b> Any real \(x\) can be substituted into a polynomial, so both domains are \(\{x\in\mathbb{R}\}\).`,
        S`<b>(a) Range.</b> \((x+3)^2\ge0\) for every \(x\), because a square is never negative. Multiply by \(2>0\): \(2(x+3)^2\ge0\). Subtract \(7\): \(f(x)\ge-7\). The value \(-7\) is reached at \(x=-3\). So \(R=\{y\in\mathbb{R}\mid y\ge-7\}\).`,
        S`<b>(b) Range.</b> \((x-4)^2\ge0\). Multiplying by \(-\tfrac12<0\) reverses the inequality: \(-\tfrac12(x-4)^2\le0\). Add \(9\): \(g(x)\le9\), with \(9\) reached at \(x=4\). So \(R=\{y\in\mathbb{R}\mid y\le9\}\).`,
        S`<b>Shortcut.</b> The vertex \(y\)-value is the boundary and the sign of \(a\) gives the direction: up (\(\ge\)) for \(a>0\), down (\(\le\)) for \(a<0\).`,
        S`<b>Check on the graphs.</b> \(f\) has its lowest point at \((-3,\,-7)\) and \(g\) its highest at \((4,\,9)\) ✓`],
      S`both domains \(\{x\in\mathbb{R}\}\); \(R_f=\{y\in\mathbb{R}\mid y\ge-7\}\), \(R_g=\{y\in\mathbb{R}\mid y\le9\}\)`,
      plane({ view: { xmin: -7, xmax: 9, ymin: -9, ymax: 11 }, curves: [{ f: (x) => 2 * (x + 3) ** 2 - 7, color: "violet" }, { f: (x) => -0.5 * (x - 4) ** 2 + 9, color: "blue" }], points: [{ x: -3, y: -7, label: "(−3, −7)", color: "violet" }, { x: 4, y: 9, label: "(4, 9)", color: "blue" }], step: { x: 1, y: 2 } })],

    ["A parabola on a restricted domain", S`\(p(x)=(x-1)^2-4\) is graphed only for \(-2\le x\le5\). Find the range.`,
      [S`<b>Warning.</b> The range is not simply \(p(-2)\) to \(p(5)\): the vertex lies inside the interval and gives the lowest value.`,
        S`<b>Vertex.</b> \((1,\,-4)\). Since \(-2\le1\le5\), the vertex is part of the graph, so the minimum output is \(-4\).`,
        S`<b>Endpoints.</b> \(p(-2)=(-3)^2-4=5\) and \(p(5)=(4)^2-4=12\).`,
        S`<b>Largest output.</b> The larger endpoint value is \(12\) (at \(x=5\)), because \(x=5\) is farther from the axis \(x=1\) than \(x=-2\) is.`,
        S`<b>Range.</b> \(\{y\in\mathbb{R}\mid -4\le y\le12\}\). Check: the graph's lowest point is \((1,\,-4)\) and highest \((5,\,12)\) ✓`],
      S`\(R=\{y\in\mathbb{R}\mid -4\le y\le12\}\)`,
      plane({ view: { xmin: -3, xmax: 6, ymin: -6, ymax: 14 }, curves: [{ f: (x) => (x - 1) ** 2 - 4, a: -2, b: 5, color: "violet" }], points: [{ x: -2, y: 5, label: "(−2, 5)", color: "violet" }, { x: 5, y: 12, label: "(5, 12)", color: "violet" }, { x: 1, y: -4, label: "(1, −4)", color: "amber" }], step: { x: 1, y: 2 } })],

    ["Restrictions in context", S`A soccer ball is kicked from the ground. Its height is \(h(t)=-4.9t^2+19.6t\) metres after \(t\) seconds. Find a sensible domain and range.`,
      [S`<b>The formula versus the situation.</b> As an equation, \(h\) accepts every real \(t\). But time starts at the kick (\(t\ge0\)) and the model stops when the ball lands (\(h=0\)).`,
        S`<b>When does it land?</b> \(-4.9t^2+19.6t=0\Rightarrow-4.9t(t-4)=0\Rightarrow t=0\) or \(t=4\). So the domain is \(\{t\in\mathbb{R}\mid 0\le t\le4\}\).`,
        S`<b>Highest point.</b> The zeros are \(0\) and \(4\), so by symmetry the vertex is at \(t=2\): \(h(2)=-4.9(4)+19.6(2)=-19.6+39.2=19.6\) m.`,
        S`<b>Range.</b> The height goes from \(0\) up to \(19.6\) and back to \(0\): \(\{h\in\mathbb{R}\mid 0\le h\le19.6\}\).`,
        S`<b>Check.</b> Outside \(0\le t\le4\), for example \(t=5\): \(h=-122.5+98=-24.5\), a negative height — impossible, which confirms the restriction ✓`],
      S`\(D=\{t\in\mathbb{R}\mid 0\le t\le4\}\), \(R=\{h\in\mathbb{R}\mid 0\le h\le19.6\}\)`,
      plane({ view: { xmin: -0.5, xmax: 5, ymin: -2, ymax: 22 }, curves: [{ f: (t) => -4.9 * t * t + 19.6 * t, a: 0, b: 4, color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "gray" }, { x: 2, y: 19.6, label: "(2, 19.6)", color: "amber" }, { x: 4, y: 0, label: "(4, 0)", color: "gray" }], step: { x: 1, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })],
  ]),

  practice([
    q("points", S`How many elements are in the domain of \(\{(2,\,7),\,(3,\,7),\,(2,\,9),\,(5,\,0)\}\)?`, num(3), "List each x once.", [S`\(D=\{2,\,3,\,5\}\).`], S`\(3\)`),
    q("quadratic", S`What is the range of \(y=3(x-2)^2+5\)?`, choice(["y ≥ 5", "y ≤ 5", "y ≥ 2", "all real numbers"], 0), "a > 0, so the vertex (2, 5) is the minimum.", [S`Lowest output \(5\): \(\{y\in\mathbb{R}\mid y\ge5\}\).`], S`\(y\ge5\)`),
    q("quadratic", S`\(f(x)=-(x+1)^2+k\) has range \(y\le-3\). Find \(k\).`, num(-3), "The boundary of the range is the vertex y-value.", [S`\(a<0\), so the maximum is \(k=-3\).`], S`\(-3\)`),
    q("restricted", S`\(y=x^2\) on \(-3\le x\le2\). Enter the largest value in the range.`, num(9), "Compare (−3)² and 2².", [S`\(9>4\), and the minimum is \(0\) at \(x=0\). Range \(0\le y\le9\).`], S`\(9\)`),
    q("context", S`A rocket's height is \(h(t)=-5t^2+40t\) m. The domain is \(0\le t\le T\). Enter \(T\).`, num(8), "When is h = 0 again?", [S`\(-5t(t-8)=0\Rightarrow t=8\).`], S`\(8\)`),
  ]),

  ...hard([
    ["Design a function from its range", S`Write a quadratic in the form \(f(x)=a(x-h)^2+k\) that has range \(\{y\in\mathbb{R}\mid y\le6\}\), axis of symmetry \(x=-2\), and passes through \((0,\,-2)\).`,
      [S`<b>Range \(y\le6\):</b> the parabola opens down with maximum \(6\), so \(a<0\) and \(k=6\).`,
        S`<b>Axis \(x=-2\):</b> \(h=-2\), so \(f(x)=a(x+2)^2+6\).`,
        S`<b>Use \((0,\,-2)\):</b> \(-2=a(2)^2+6\Rightarrow4a=-8\Rightarrow a=-2\). (Negative, as required ✓)`,
        S`<b>Answer:</b> \(f(x)=-2(x+2)^2+6\). Check: \(f(0)=-8+6=-2\) ✓`],
      S`f(x) = −2(x + 2)² + 6`,
      plane({ view: { xmin: -6, xmax: 3, ymin: -4, ymax: 8 }, curves: [{ f: (x) => -2 * (x + 2) ** 2 + 6, color: "violet" }], lines: [{ m: 0, b: 6, color: "green", dash: true }], points: [{ x: -2, y: 6, label: "(−2, 6)", color: "amber" }, { x: 0, y: -2, label: "(0, −2)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Fencing a pen", S`A farmer has \(40\) m of fencing for three sides of a rectangular pen against a barn wall. If \(x\) is the width of each side perpendicular to the wall, the area is \(A(x)=x(40-2x)\). State the domain and range in context.`,
      [S`<b>Lengths must be positive:</b> \(x>0\) and \(40-2x>0\Rightarrow x<20\). Domain \(\{x\in\mathbb{R}\mid 0<x<20\}\).`,
        S`<b>Maximum area:</b> the zeros of \(A\) are \(0\) and \(20\), so the vertex is at \(x=10\): \(A(10)=10(20)=200\) m².`,
        S`<b>Range:</b> areas are positive and at most \(200\): \(\{A\in\mathbb{R}\mid 0<A\le200\}\). (The ends are open because \(x=0\) and \(x=20\) give no pen.)`],
      S`D: 0 < x < 20; R: 0 < A ≤ 200 (m²)`],
  ], [
    q("hard", S`\(f(x)=2(x-3)^2-8\) on \(0\le x\le4\). Enter the largest value of \(f\).`, num(10), "Check both endpoints and the vertex.", [S`\(f(0)=18-8=10\), \(f(4)=2-8=-6\), vertex \(f(3)=-8\).`, S`Largest \(=10\).`], S`\(10\)`),
    q("hard", S`For which value of \(k\) does \(y=-3x^2+k\) have the same range as \(y=-(x-5)^2+12\)?`, num(12), "Both open down: compare maxima.", [S`Both ranges are \(y\le\) (max); \(k=12\).`], S`\(12\)`),
    q("hard", S`A ball's height is \(h(t)=-5t^2+10t+15\) m. Enter the largest value of the range (in metres) for \(t\ge0\).`, num(20), "Vertex at t = 1.", [S`\(h(1)=-5+10+15=20\).`], S`\(20\)`),
    q("hard", S`\(y=-(x-2)^2+7\) on \(-1\le x\le4\). Enter the smallest value of \(y\).`, num(-2), "Opens down: the minimum is at the endpoint farther from x = 2.", [S`\(y(-1)=-9+7=-2\), \(y(4)=-4+7=3\).`, S`Minimum \(-2\).`], S`\(-2\)`),
    q("hard", S`A rectangle has perimeter \(36\) m. Enter its largest possible area (m²).`, num(81), "A(x) = x(18 − x).", [S`Zeros \(0\) and \(18\): vertex at \(x=9\), \(A=81\).`], S`\(81\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the domain of every quadratic function written as an equation?", "All real numbers, {x ∈ ℝ}; restrictions only come from a context or a stated interval."],
      ["How do I find the range of a quadratic quickly?", "Use the vertex y-value k: y ≥ k if it opens up, y ≤ k if it opens down."],
      ["What changes on a restricted interval?", "Check the endpoints AND the vertex (if it lies inside); the extreme outputs come from those."],
      ["Why can't time be negative in a model?", "The model starts at the event (t = 0); earlier times have no meaning in the situation."],
      ["How do I show an endpoint is not included?", "Use an open dot on the graph and < or > in set notation."],
    ],
    summary: [
      "Domain = all inputs; range = all outputs.",
      "Linear: D and R are ℝ (unless horizontal); quadratic: D = ℝ, R bounded by the vertex.",
      "Set notation: {x ∈ ℝ | condition}.",
      "Contexts restrict D and R to values that make sense.",
    ],
    next: "1.4 compares linear and quadratic relations using tables of values and finite differences.",
  }),
];
