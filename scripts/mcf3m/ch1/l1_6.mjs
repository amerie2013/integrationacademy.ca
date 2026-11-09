// MCF3M 1.6 — Graphing Quadratics in Vertex Form: combining a, h and k, the mapping rule (x, y) → (x + h, ay + k),
// the step pattern, equation from vertex + point, domain/range and a context.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane } from "../lib.mjs";
const S = String.raw;

export const TITLE = "1.6 Graphing Quadratics in Vertex Form";
const P0 = { f: (x) => x * x, color: "gray" };

export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Graphing Quadratics in Vertex Form",
    overview: S`The equation \(f(x)=a(x-h)^2+k\) is called <b>vertex form</b> because the vertex \((h,\,k)\) can be read straight from it. Combining the three transformations from 1.5 gives a fast and reliable way to sketch any parabola: plot the vertex, then step out from it using the pattern \(1,\,3,\,5\) multiplied by \(a\). Working backwards, a vertex and one more point are enough to find the equation of a parabola, including parabolas that model real arches and jumps.`,
    goals: [
      "state the vertex, axis of symmetry, direction of opening, and stretch factor from \\(a(x-h)^2+k\\);",
      "apply the mapping rule \\((x,\\,y)\\to(x+h,\\,ay+k)\\) to key points of \\(y=x^2\\);",
      "sketch \\(y=a(x-h)^2+k\\) with the step pattern \\(a,\\,3a,\\,5a\\);",
      "state the domain and range, and the number of \\(x\\)-intercepts, from vertex form;",
      "determine the equation of a parabola from its vertex and one other point, including in context.",
    ],
    curriculum: "A2.6 (sketch graphs of g(x) = a(x − h)² + k by applying one or more transformations to the graph of f(x) = x²), A2.4 (restrictions on domain and range in context), A3.2 (determine the equation of a quadratic model using the vertex and transformations)",
    prior: [
      [S`What does \(h=-3\) do to \(y=x^2\)?`, S`Moves it \(3\) units left; the bracket is \((x+3)\).`],
      [S`Map \((2,\,4)\) under \(y=-x^2\).`, S`\((2,\,-4)\).`],
      [S`Solve \(4=a(2)^2\).`, S`\(a=1\).`],
    ],
    words: [
      ["Vertex form", "\\(y=a(x-h)^2+k\\)", "\\(y=2(x-1)^2-8\\)"],
      ["Vertex", "\\((h,\\,k)\\), the turning point", "\\((1,\\,-8)\\)"],
      ["Axis of symmetry", "the vertical line \\(x=h\\)", "\\(x=1\\)"],
      ["Mapping rule", "\\((x,\\,y)\\to(x+h,\\,ay+k)\\)", "\\((2,4)\\to(3,\\,0)\\)"],
      ["Step pattern", "from the vertex: over 1, 2, 3 → up a, 4a, 9a", "a = 2: up 2, 8, 18"],
    ],
  }),

  section("📌 One rule for all three transformations", S`
  <p>Apply the stretch/reflection first (multiply \(y\) by \(a\)), then the translations (add \(h\) to \(x\) and \(k\) to \(y\)). In one line, the <b>mapping rule</b> is</p>
  <p style="text-align:center;font-size:1.15em;">\((x,\,y)\ \to\ (x+h,\ a\,y+k)\)</p>
  ${table(["Point of y = x²", "Multiply y by a = 2", "Then shift h = 1, k = −8"], [
    ["\\((0,\\,0)\\)", "\\((0,\\,0)\\)", "\\((1,\\,-8)\\) vertex"],
    ["\\((\\pm1,\\,1)\\)", "\\((\\pm1,\\,2)\\)", "\\((2,\\,-6)\\), \\((0,\\,-6)\\)"],
    ["\\((\\pm2,\\,4)\\)", "\\((\\pm2,\\,8)\\)", "\\((3,\\,0)\\), \\((-1,\\,0)\\)"],
  ])}
  ${keyIdea(S`<b>Step pattern.</b> For \(y=x^2\), moving \(1,\,2,\,3\) units from the vertex raises the graph by \(1,\,4,\,9\). For \(y=a(x-h)^2+k\) those rises become \(a,\,4a,\,9a\): equivalently, consecutive steps of \(a,\,3a,\,5a\).`)}
  ${plane({ view: { xmin: -4, xmax: 6, ymin: -9, ymax: 6 }, curves: [P0, { f: (x) => 2 * (x - 1) ** 2 - 8, color: "violet" }], vlines: [{ x: 1, color: "green", dash: true }], points: [{ x: 1, y: -8, label: "(1, −8)", color: "amber" }, { x: 2, y: -6, label: "(2, −6)", color: "violet" }, { x: 3, y: 0, label: "(3, 0)", color: "violet" }, { x: -1, y: 0, label: "(−1, 0)", color: "violet" }], step: { x: 1, y: 1 } }, "y = 2(x − 1)² − 8 from y = x²: stretch by 2, right 1, down 8.")}`),

  widget("funcTransform", { parent: "x2", parents: ["x2"], show: ["a", "d", "c"], init: { a: 2, k: 1, d: 1, c: -3 } }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "Read h with the opposite sign: y = −(x + 5)² + 2 has vertex (−5, 2).",
    "Multiply by a BEFORE adding k: (2, 4) → (2 + h, 4a + k), not (2 + h, 4 + k)·a.",
    "a stretches vertical distances from the vertex, not from the x-axis.",
    "Opening up with k > 0 means NO x-intercepts; opening down with k > 0 means two.",
    "To find a, use a point that is not the vertex.",
  ])}`),

  examples([
    ["Read the features", S`For \(f(x)=-3(x+2)^2+5\), state the vertex, axis of symmetry, direction of opening, stretch factor, domain, range and number of \(x\)-intercepts.`,
      [S`<b>Match the form.</b> Compare with \(a(x-h)^2+k\): \(x+2=x-(-2)\), so \(a=-3\), \(h=-2\), \(k=5\).`,
        S`<b>Vertex and axis.</b> Vertex \((h,\,k)=(-2,\,5)\); axis of symmetry \(x=-2\).`,
        S`<b>Shape.</b> \(a<0\): opens down; \(|a|=3\): vertical stretch by \(3\) (narrower than \(y=x^2\)).`,
        S`<b>Domain and range.</b> \(D=\{x\in\mathbb{R}\}\); the vertex is a maximum, so \(R=\{y\in\mathbb{R}\mid y\le5\}\).`,
        S`<b>\(x\)-intercepts.</b> The highest point is above the \(x\)-axis and the graph opens down, so it crosses the axis <b>twice</b>.`,
        S`<b>Check.</b> \(f(-1)=-3(1)^2+5=2\) and \(f(-3)=2\): symmetric about \(x=-2\) ✓. \(f(0)=-12+5=-7<0\), so the graph has indeed crossed the axis ✓`],
      S`vertex (−2, 5), axis x = −2, opens down, stretch 3, D = ℝ, R: y ≤ 5, two x-intercepts`,
      plane({ view: { xmin: -6, xmax: 2, ymin: -8, ymax: 7 }, curves: [{ f: (x) => -3 * (x + 2) ** 2 + 5, color: "violet" }], vlines: [{ x: -2, color: "green", dash: true }], points: [{ x: -2, y: 5, label: "(−2, 5)", color: "amber" }, { x: -1, y: 2, label: "(−1, 2)", color: "violet" }, { x: -3, y: 2, label: "(−3, 2)", color: "violet" }, { x: 0, y: -7, label: "(0, −7)", color: "blue" }], step: { x: 1, y: 1 } })],

    ["Sketch with the mapping rule", S`Sketch \(g(x)=\tfrac12(x-3)^2-2\) by mapping the five key points of \(y=x^2\).`,
      [S`<b>Parameters.</b> \(a=\tfrac12\), \(h=3\), \(k=-2\). Rule: \((x,\,y)\to\left(x+3,\ \tfrac12y-2\right)\).`,
        S`<b>Map.</b> \((0,0)\to(3,\,-2)\); \((1,1)\to(4,\,-1.5)\); \((-1,1)\to(2,\,-1.5)\); \((2,4)\to(5,\,0)\); \((-2,4)\to(1,\,0)\).`,
        S`<b>Interpret.</b> Vertex \((3,\,-2)\), opens up, compressed by \(\tfrac12\) (wider). The points \((1,\,0)\) and \((5,\,0)\) are the \(x\)-intercepts.`,
        S`<b>Check by substituting.</b> \(g(5)=\tfrac12(2)^2-2=2-2=0\) ✓, \(g(4)=\tfrac12-2=-1.5\) ✓`,
        S`<b>Extra point.</b> For a wider view: \((\pm3,\,9)\to(6,\,2.5)\) and \((0,\,2.5)\), so the \(y\)-intercept is \(2.5\) ✓`],
      S`vertex (3, −2); points (2, −1.5), (4, −1.5), (1, 0), (5, 0); y-intercept 2.5`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -3, ymax: 4 }, curves: [{ f: (x) => 0.5 * (x - 3) ** 2 - 2, color: "violet" }], points: [{ x: 3, y: -2, label: "(3, −2)", color: "amber" }, { x: 4, y: -1.5, label: "(4, −1.5)", color: "violet" }, { x: 1, y: 0, label: "(1, 0)", color: "violet" }, { x: 5, y: 0, label: "(5, 0)", color: "violet" }, { x: 0, y: 2.5, label: "(0, 2.5)", color: "blue" }], step: { x: 1, y: 1 } })],

    ["Order of transformations in words", S`Describe, in order, the transformations that take \(y=x^2\) to \(y=-2(x-4)^2+7\), and give the image of \((-1,\,1)\).`,
      [S`<b>Stretch/reflection first.</b> \(a=-2\): a vertical stretch by a factor of \(2\) and a reflection in the \(x\)-axis. The point becomes \((-1,\,-2)\).`,
        S`<b>Horizontal translation.</b> \(h=4\): \(4\) units right. The point becomes \((3,\,-2)\).`,
        S`<b>Vertical translation.</b> \(k=7\): \(7\) units up. The point becomes \((3,\,5)\).`,
        S`<b>Same answer in one line.</b> \((x,\,y)\to(x+4,\,-2y+7)\): \((-1,\,1)\to(3,\,-2+7)=(3,\,5)\) ✓`,
        S`<b>Check by substituting.</b> \(-2(3-4)^2+7=-2+7=5\) ✓`,
        S`<b>Why the order.</b> Translating up first and then stretching would also stretch the \(7\) to \(-14\) — a different graph. Stretch before shifting.`],
      S`stretch by 2, reflect in the x-axis, right 4, up 7; (−1, 1) → (3, 5)`,
      plane({ view: { xmin: -2, xmax: 8, ymin: -4, ymax: 9 }, curves: [P0, { f: (x) => -2 * (x - 4) ** 2 + 7, color: "violet" }], points: [{ x: -1, y: 1, label: "(−1, 1)", color: "gray" }, { x: 3, y: 5, label: "(3, 5)", color: "amber" }, { x: 4, y: 7, label: "(4, 7)", color: "violet" }], step: { x: 1, y: 1 } })],

    ["Equation from vertex and a point", S`A parabola has vertex \((-1,\,-6)\) and passes through \((1,\,2)\). Find its equation in vertex form and its \(y\)-intercept.`,
      [S`<b>Start from the vertex.</b> \(h=-1\), \(k=-6\): \(y=a(x+1)^2-6\). Only \(a\) is unknown.`,
        S`<b>Substitute the other point.</b> \((1,\,2)\): \(2=a(1+1)^2-6=4a-6\).`,
        S`<b>Solve.</b> \(4a=8\Rightarrow a=2\). So \(y=2(x+1)^2-6\).`,
        S`<b>\(y\)-intercept.</b> \(x=0\): \(2(1)^2-6=-4\).`,
        S`<b>Check.</b> Symmetric point of \((1,\,2)\) across \(x=-1\) is \((-3,\,2)\): \(2(-2)^2-6=2\) ✓`],
      S`\(y=2(x+1)^2-6\); y-intercept \(-4\)`,
      plane({ view: { xmin: -5, xmax: 3, ymin: -7, ymax: 5 }, curves: [{ f: (x) => 2 * (x + 1) ** 2 - 6, color: "violet" }], points: [{ x: -1, y: -6, label: "(−1, −6)", color: "amber" }, { x: 1, y: 2, label: "(1, 2)", color: "blue" }, { x: -3, y: 2, label: "(−3, 2)", color: "violet" }, { x: 0, y: -4, label: "(0, −4)", color: "violet" }], step: { x: 1, y: 1 } })],

    ["A bridge arch", S`A parabolic arch spans \(40\) m at ground level and is \(16\) m high at its centre. Place the origin at the left foot and find its equation, then find the height \(5\) m from either foot.`,
      [S`<b>Set up.</b> Feet at \((0,\,0)\) and \((40,\,0)\); the centre is halfway, \(x=20\), so the vertex is \((20,\,16)\): \(h(x)=a(x-20)^2+16\).`,
        S`<b>Find \(a\).</b> Use \((0,\,0)\): \(0=a(0-20)^2+16=400a+16\Rightarrow a=-\tfrac{16}{400}=-0.04\).`,
        S`<b>Equation.</b> \(h(x)=-0.04(x-20)^2+16\), domain \(0\le x\le40\), range \(0\le h\le16\).`,
        S`<b>Height at 5 m.</b> \(h(5)=-0.04(-15)^2+16=-0.04(225)+16=-9+16=7\) m. By symmetry \(h(35)=7\) m too.`,
        S`<b>Check.</b> \(h(40)=-0.04(400)+16=0\) ✓ (right foot).`],
      S`\(h(x)=-0.04(x-20)^2+16\); 7 m high, 5 m from each foot`,
      plane({ view: { xmin: -2, xmax: 42, ymin: -2, ymax: 20 }, curves: [{ f: (x) => -0.04 * (x - 20) ** 2 + 16, a: 0, b: 40, color: "violet" }], points: [{ x: 20, y: 16, label: "(20, 16)", color: "amber" }, { x: 5, y: 7, label: "(5, 7)", color: "blue" }, { x: 35, y: 7, label: "(35, 7)", color: "blue" }], step: { x: 5, y: 2 }, xlabel: "x (m)", ylabel: "h (m)" })],
  ]),

  practice([
    q("features", S`Enter the \(y\)-coordinate of the vertex of \(y=4(x-7)^2-11\).`, num(-11), "Vertex (h, k).", [S`Vertex \((7,\,-11)\).`], S`\(-11\)`),
    q("features", S`How many \(x\)-intercepts does \(y=-\tfrac13(x+2)^2-4\) have?`, num(0), "Opens down from a vertex below the axis.", [S`Maximum \(-4<0\): the graph never reaches the \(x\)-axis.`], S`\(0\)`),
    q("map", S`Under \(y=3(x+1)^2-5\), the point \((2,\,4)\) of \(y=x^2\) maps to \((p,\,q)\). Enter \(q\).`, num(7), "(x, y) → (x − 1, 3y − 5).", [S`\(3(4)-5=7\), so \((1,\,7)\).`], S`\(7\)`),
    q("equation", S`A parabola has vertex \((2,\,1)\) and passes through \((4,\,13)\). Enter its equation.`, expr("3*(x-2)^2+1", false), "y = a(x − 2)² + 1; substitute (4, 13).", [S`\(13=4a+1\Rightarrow a=3\).`], S`\(y=3(x-2)^2+1\)`),
    q("range", S`Which is the range of \(y=-(x-6)^2+2\)?`, choice(["y ≤ 2", "y ≥ 2", "y ≤ 6", "y ≥ −6"], 0), "Opens down; maximum is k.", [S`\(\{y\in\mathbb{R}\mid y\le2\}\).`], S`\(y\le2\)`),
  ]),

  ...hard([
    ["A basketball shot", S`A ball leaves a player's hands at \((0,\,2)\) (metres) and reaches its maximum height of \(4.5\) m at a horizontal distance of \(5\) m. The rim is \(3.05\) m high and \(8.5\) m away. Does the ball pass through the rim height at the rim's distance?`,
      [S`<b>Vertex form:</b> \(h(x)=a(x-5)^2+4.5\).`,
        S`<b>Use \((0,\,2)\):</b> \(2=25a+4.5\Rightarrow a=-0.1\).`,
        S`<b>At \(x=8.5\):</b> \(h=-0.1(3.5)^2+4.5=-0.1(12.25)+4.5=-1.225+4.5=3.275\) m.`,
        S`<b>Compare:</b> \(3.275>3.05\): at the rim's distance the ball is about \(0.23\) m above the rim, so this shot is slightly long.`],
      S`h(x) = −0.1(x − 5)² + 4.5 gives 3.275 m at 8.5 m: about 0.23 m above the rim`,
      plane({ view: { xmin: -0.5, xmax: 11, ymin: -0.5, ymax: 5.5 }, curves: [{ f: (x) => -0.1 * (x - 5) ** 2 + 4.5, a: 0, b: 11, color: "violet" }], lines: [{ m: 0, b: 3.05, color: "red", dash: true }], points: [{ x: 0, y: 2, label: "(0, 2)", color: "blue" }, { x: 5, y: 4.5, label: "(5, 4.5)", color: "amber" }, { x: 8.5, y: 3.275, label: "(8.5, 3.28)", color: "red" }], step: { x: 1, y: 1 }, xlabel: "x (m)", ylabel: "h (m)" })],
    ["Which k gives a given intercept?", S`For \(y=2(x-3)^2+k\), find \(k\) so that \(x=1\) is an \(x\)-intercept, and then find the other intercept.`,
      [S`<b>Substitute \((1,\,0)\):</b> \(0=2(1-3)^2+k=8+k\Rightarrow k=-8\).`,
        S`<b>Symmetry:</b> the axis is \(x=3\); \(x=1\) is \(2\) units left, so the other intercept is \(2\) units right, \(x=5\).`,
        S`<b>Check:</b> \(2(5-3)^2-8=0\) ✓`],
      S`k = −8; the other x-intercept is x = 5`],
  ], [
    q("hard", S`A parabola has vertex \((-3,\,8)\) and \(y\)-intercept \(-10\). Enter \(a\).`, num(-2), "Substitute (0, −10).", [S`\(-10=a(3)^2+8\Rightarrow9a=-18\Rightarrow a=-2\).`], S`\(-2\)`),
    q("hard", S`\(y=a(x-h)^2+k\) passes through \((1,\,5)\), \((5,\,5)\) and \((3,\,-3)\), where \((3,-3)\) is the vertex. Enter \(a\).`, num(2), "Axis x = 3; use (1, 5).", [S`\(5=a(1-3)^2-3\Rightarrow4a=8\Rightarrow a=2\).`], S`\(2\)`),
    q("hard", S`An arch \(h(x)=-0.5(x-6)^2+18\) (metres) stands on the ground. Enter the width of its base.`, num(12), "Solve h(x) = 0.", [S`\((x-6)^2=36\Rightarrow x=0\) or \(x=12\).`, S`Width \(=12\) m.`], S`\(12\)`),
    q("hard", S`\(y=a(x+1)^2+k\) passes through \((1,\,5)\) and \((3,\,29)\). Enter \(k\).`, num(-3), "Two equations in a and k.", [S`\(4a+k=5\), \(16a+k=29\Rightarrow12a=24\Rightarrow a=2\), \(k=-3\).`], S`\(-3\)`),
    q("hard", S`An arch \(h(x)=-0.5(x-6)^2+k\) (metres) is \(12\) m wide at its base. Enter its height \(k\).`, num(18), "The feet are at x = 0 and x = 12.", [S`\(h(0)=0\Rightarrow-0.5(36)+k=0\Rightarrow k=18\).`], S`\(18\)`),
  ]),

  wrapUp({
    qas: [
      ["What can I read directly from vertex form?", "The vertex (h, k), axis x = h, direction (sign of a) and stretch factor |a|."],
      ["What is the mapping rule?", "(x, y) → (x + h, ay + k): multiply y by a, then translate."],
      ["How do I sketch quickly?", "Plot the vertex, then step out 1, 2, 3 units and go up a, 4a, 9a (down if a < 0)."],
      ["How do I find the equation from a graph?", "Read the vertex, write y = a(x − h)² + k, substitute another point to find a."],
      ["How do I know the number of x-intercepts without solving?", "Compare the direction of opening with the sign of k: up with k < 0 or down with k > 0 gives two; k = 0 gives one; otherwise none."],
    ],
    summary: [
      "Vertex form y = a(x − h)² + k: vertex (h, k), axis x = h.",
      "Transform in order: stretch/reflect, then translate.",
      "Step pattern from the vertex: a, 3a, 5a.",
      "Vertex + one point determines the parabola.",
    ],
    next: "1.7 reviews the whole chapter with mixed problems.",
  }),
];
