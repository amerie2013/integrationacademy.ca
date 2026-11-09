// MCF3M 3.5 — Quadratic Models from Data: scatter plots, choosing a quadratic model, using zeros (factored form)
// or vertex (vertex form) plus a point, comparing with a curve of best fit, predicting and judging reasonableness.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, tv } from "../lib.mjs";
const S = String.raw;

export const TITLE = "3.5 Quadratic Models from Data";
const dots = (arr, color = "blue") => arr.map(([x, y]) => ({ x, y, label: "", color }));

export const blocks = () => [
  intro({
    icon: "🔬",
    title: "Quadratic Models from Data",
    overview: S`Real measurements — the path of a thrown ball, the stopping distance of a car, the profit of a business — often follow a parabola, but never exactly. To build a <b>quadratic model</b>, plot the data, decide whether a parabola fits, then use visible features to write an equation: two zeros give the factored form \(y=a(x-r)(x-s)\), and a vertex gives the vertex form \(y=a(x-h)^2+k\). One more data point finds \(a\). Technology can find a <b>curve of best fit</b>; comparing the two shows how good a hand-built model is.`,
    goals: [
      "draw a scatter plot and decide whether a quadratic model is reasonable;",
      "write a model in factored form from estimated zeros and a point;",
      "write a model in vertex form from an estimated vertex and a point;",
      "compare a hand-built model with a curve of best fit using residuals;",
      "use a model to predict, and judge when a prediction is reasonable.",
    ],
    curriculum: "A3.1 (collect data that can be modelled as a quadratic function and graph the data), A3.2 (determine the equation of the quadratic function that best models a data set, using properties such as the x-intercepts and the vertex, and compare with a curve of best fit from technology)",
    prior: [
      [S`Find \(a\) if \(y=a(x-2)(x-8)\) passes through \((5,\,18)\).`, S`\(18=a(3)(-3)\Rightarrow a=-2\).`],
      [S`Find \(a\) if \(y=a(x-1)^2+4\) passes through \((3,\,12)\).`, S`\(12=4a+4\Rightarrow a=2\).`],
      [S`What do constant second differences tell you?`, S`The data are quadratic.`],
    ],
    words: [
      ["Scatter plot", "a graph of data points", "height vs time"],
      ["Quadratic model", "an equation y = ax² + bx + c that fits data", "\\(h=-4.9t^2+20t+1\\)"],
      ["Curve of best fit", "the curve that technology finds closest to all points", "quadratic regression"],
      ["Residual", "actual value − model value", "\\(12.4-12.0=0.4\\)"],
      ["Extrapolation", "predicting outside the data's range — less reliable", "t = 10 s for data up to 4 s"],
    ],
  }),

  section("📌 From data to a model", S`
  ${table(["Visible feature", "Use", "Then"], [
    ["two x-intercepts r, s", "\\(y=a(x-r)(x-s)\\)", "substitute another data point for a"],
    ["a vertex (h, k)", "\\(y=a(x-h)^2+k\\)", "substitute another data point for a"],
    ["neither clearly visible", "finite differences or technology", "compare with a sketch"],
  ])}
  ${keyIdea(S`A good model has small <b>residuals</b> (actual − predicted) that are not all on one side. Hand-built models depend on which point you use for \(a\); a curve of best fit from technology uses every point. Predictions inside the data range (interpolation) are more reliable than outside it (extrapolation).`)}
  ${plane({ view: { xmin: -0.5, xmax: 9, ymin: -2, ymax: 18 }, curves: [{ f: (x) => -((x - 4) ** 2) + 16, a: 0, b: 8, color: "violet" }], points: dots([[0, 0.4], [1, 6.8], [2, 12.3], [3, 15.2], [4, 15.8], [5, 15.1], [6, 12.2], [7, 7.1], [8, 0.3]]), step: { x: 1, y: 2 } }, "Data close to the model y = −(x − 4)² + 16; the points lie just above and below the curve.")}`),

  widget("quadFit", {}),

  section("⚠️ Common errors", S`
  ${watchOut([
    "Use a data point that is NOT on the axis or the vertex to find a; otherwise the equation gives 0 = 0.",
    "Estimated zeros or vertices are approximations — say 'model', not 'exact equation'.",
    "Check the model with a point you did not use.",
    "Do not trust predictions far outside the data (a model ball may 'fly' forever).",
    "Look at the scatter plot first: data that keep rising faster and faster may be exponential, not quadratic.",
  ])}`),

  examples([
    ["Model from zeros", S`A small rocket's height (m) was recorded:` + tv([[0, 0], [1, 34], [2, 61], [3, 74], [4, 82], [5, 76], [6, 59], [7, 36], [8, 1]], "t (s)", "h (m)") + S`Build a model using the zeros, and test it at \(t=2\).`,
      [S`<b>Zeros.</b> The rocket starts at \(t=0\) and lands near \(t=8\). Use \(h=a\,t(t-8)\).`,
        S`<b>Find \(a\).</b> Use a middle point, \((4,\,82)\): \(82=a(4)(-4)=-16a\Rightarrow a\approx-5.1\).`,
        S`<b>Model.</b> \(h=-5.1t(t-8)\).`,
        S`<b>Test at \(t=2\).</b> \(h=-5.1(2)(-6)=61.2\); actual \(61\). Residual \(61-61.2=-0.2\) ✓ small.`,
        S`<b>Interpret.</b> Peak at \(t=4\), about \(82\) m; the model fits well inside the data.`],
      S`\(h\approx-5.1t(t-8)\)`,
      plane({ view: { xmin: -0.5, xmax: 9, ymin: -5, ymax: 95 }, curves: [{ f: (t) => -5.1 * t * (t - 8), a: 0, b: 8, color: "violet" }], points: dots([[0, 0], [1, 34], [2, 61], [3, 74], [4, 82], [5, 76], [6, 59], [7, 36], [8, 1]]), step: { x: 1, y: 10 }, xlabel: "t (s)", ylabel: "h (m)" })],

    ["Model from a vertex", S`A water fountain's jet (horizontal distance \(x\) m, height \(y\) m) passes through \((0,\,0.5)\), \((1,\,2.3)\), \((2,\,3.4)\), \((3,\,3.6)\), \((4,\,3.1)\), \((5,\,1.8)\). Build a vertex-form model.`,
      [S`<b>Vertex estimate.</b> The highest values are near \(x=3\): take the vertex as about \((2.8,\,3.7)\).`,
        S`<b>Form.</b> \(y=a(x-2.8)^2+3.7\).`,
        S`<b>Find \(a\).</b> Use \((0,\,0.5)\): \(0.5=a(7.84)+3.7\Rightarrow a=\frac{-3.2}{7.84}\approx-0.41\).`,
        S`<b>Model.</b> \(y\approx-0.41(x-2.8)^2+3.7\).`,
        S`<b>Test at \(x=5\).</b> \(-0.41(4.84)+3.7\approx1.72\); actual \(1.8\): residual \(\approx0.08\) ✓`],
      S`\(y\approx-0.41(x-2.8)^2+3.7\)`,
      plane({ view: { xmin: -0.5, xmax: 6.5, ymin: -0.5, ymax: 4.5 }, curves: [{ f: (x) => -0.41 * (x - 2.8) ** 2 + 3.7, a: 0, b: 6, color: "violet" }], points: dots([[0, 0.5], [1, 2.3], [2, 3.4], [3, 3.6], [4, 3.1], [5, 1.8]]), step: { x: 1, y: 0.5 } })],

    ["Is a parabola reasonable?", S`A cup of tea cools: temperatures (°C) at \(t=0,5,10,15,20\) min are \(90,\,72,\,58,\,48,\,40\). Is a quadratic model reasonable?`,
      [S`<b>Differences.</b> First: \(-18,-14,-10,-8\). Second: \(4,4,2\) — roughly but not exactly constant.`,
        S`<b>Shape over time.</b> A parabola opening up would eventually rise again, so the tea would heat up by itself. That is impossible.`,
        S`<b>Conclusion.</b> A quadratic fits these five points fairly well but would predict nonsense later. A cooling curve levels off at room temperature, which is an exponential pattern (chapter 7).`,
        S`<b>Lesson.</b> Check both the numbers and the physical meaning of a model.`],
      S`only for a short time; a cooling curve is better modelled by an exponential`,
      plane({ view: { xmin: -1, xmax: 45, ymin: 0, ymax: 100 }, curves: [{ f: (t) => 0.06 * (t - 30) ** 2 + 36, a: 0, b: 45, color: "red" }], points: dots([[0, 90], [5, 72], [10, 58], [15, 48], [20, 40]]), step: { x: 5, y: 10 }, xlabel: "t (min)", ylabel: "T (°C)" })],

    ["Compare with a curve of best fit", S`For the rocket data in Example 1, technology gives the curve of best fit \(h=-5.05t^2+40.6t+0.2\). Compare its prediction at \(t=6\) with the hand-built model \(h=-5.1t(t-8)\) and the actual \(59\).`,
      [S`<b>Hand-built.</b> \(-5.1(6)(-2)=61.2\); residual \(59-61.2=-2.2\).`,
        S`<b>Best fit.</b> \(-5.05(36)+40.6(6)+0.2=-181.8+243.6+0.2=62.0\); residual \(59-62.0=-3.0\).`,
        S`<b>Compare.</b> Both over-predict here, but the curve of best fit balances errors over all nine points, while the hand-built model was forced through one point.`,
        S`<b>Conclusion.</b> The two models are close (within about \(1\) m), so the hand-built model is a reasonable approximation.`],
      S`hand-built 61.2 m, best fit 62.0 m, actual 59 m; both are reasonable`,
      plane({ view: { xmin: -0.5, xmax: 9, ymin: -5, ymax: 95 }, curves: [{ f: (t) => -5.1 * t * (t - 8), a: 0, b: 8, color: "violet" }, { f: (t) => -5.05 * t * t + 40.6 * t + 0.2, a: 0, b: 8.05, color: "green" }], points: dots([[6, 59]], "red"), step: { x: 1, y: 10 }, xlabel: "t (s)", ylabel: "h (m)" })],

    ["Predict and judge", S`Stopping distance \(d\) (m) of a car at speed \(v\) (km/h) is modelled by \(d=0.006v^2+0.2v\) for \(30\le v\le110\). Predict \(d\) at \(80\) km/h and at \(160\) km/h, and comment.`,
      [S`<b>At 80 km/h.</b> \(0.006(6400)+0.2(80)=38.4+16=54.4\) m.`,
        S`<b>At 160 km/h.</b> \(0.006(25\,600)+32=153.6+32=185.6\) m.`,
        S`<b>Judge.</b> \(80\) is inside the data range (interpolation): reliable. \(160\) is far outside (extrapolation): the model may not hold (tires, brakes behave differently), so treat it with caution.`,
        S`<b>Meaning.</b> Doubling the speed from \(80\) to \(160\) more than triples the stopping distance — the \(v^2\) term dominates.`],
      S`about 54 m (reliable) and 186 m (extrapolation, less reliable)`,
      plane({ view: { xmin: 0, xmax: 170, ymin: 0, ymax: 200 }, curves: [{ f: (v) => 0.006 * v * v + 0.2 * v, a: 30, b: 110, color: "violet" }, { f: (v) => 0.006 * v * v + 0.2 * v, a: 110, b: 165, color: "gray" }], points: [{ x: 80, y: 54.4, label: "(80, 54.4)", color: "amber" }, { x: 160, y: 185.6, label: "(160, 185.6)", color: "red" }], step: { x: 20, y: 20 }, xlabel: "v", ylabel: "d" })],
  ]),

  practice([
    q("zeros", S`Data have zeros near \(x=0\) and \(x=10\) and pass through \((5,\,50)\). Enter \(a\) in \(y=ax(x-10)\).`, num(-2), "50 = a(5)(−5).", [S`\(a=-2\).`], S`\(-2\)`),
    q("vertex", S`Data have a vertex near \((3,\,20)\) and pass through \((0,\,2)\). Enter \(a\) in \(y=a(x-3)^2+20\).`, num(-2), "2 = 9a + 20.", [S`\(9a=-18\).`], S`\(-2\)`),
    q("residual", S`A model predicts \(42.5\); the actual value is \(41.3\). Enter the residual.`, num(-1.2, 1e-9), "actual − predicted.", [S`\(41.3-42.5=-1.2\).`], S`\(-1.2\)`),
    q("reasonable", S`Which prediction is least reliable for a model built from data with \(0\le x\le10\)?`, choice(["x = 25", "x = 5", "x = 9.5", "x = 0.5"], 0), "Extrapolation.", [S`\(25\) is far outside the data.`], S`\(x=25\)`),
    q("predict", S`Using \(h=-4.9t^2+19.6t+2\), predict the height (m) at \(t=2\).`, num(21.6, 0.01), "Substitute.", [S`\(-19.6+39.2+2=21.6\).`], S`\(21.6\)`),
  ]),

  ...hard([
    ["Build and use a model", S`A bridge cable hangs between towers \(80\) m apart; its lowest point, midway, is \(5\) m above the road and the towers' tops are \(45\) m high. Model the cable and find its height \(10\) m from a tower.`,
      [S`<b>Axes.</b> Put the left tower at \(x=0\): vertex \((40,\,5)\), point \((0,\,45)\).`,
        S`<b>Find \(a\).</b> \(45=a(1600)+5\Rightarrow a=0.025\).`,
        S`<b>Model.</b> \(y=0.025(x-40)^2+5\).`,
        S`<b>At \(x=10\).</b> \(0.025(900)+5=22.5+5=27.5\) m.`],
      S`y = 0.025(x − 40)² + 5; 27.5 m high 10 m from a tower`,
      plane({ view: { xmin: -2, xmax: 82, ymin: 0, ymax: 50 }, curves: [{ f: (x) => 0.025 * (x - 40) ** 2 + 5, a: 0, b: 80, color: "violet" }], points: [{ x: 40, y: 5, label: "(40, 5)", color: "amber" }, { x: 10, y: 27.5, label: "(10, 27.5)", color: "blue" }], step: { x: 10, y: 5 } })],
    ["Two choices of a", S`Projectile data have zeros at \(0\) and \(6\). Using the point \((1,\,24)\) gives one value of \(a\); using \((3,\,46)\) gives another. Find both and decide which model is better if \((5,\,25)\) is also measured.`,
      [S`<b>From \((1,\,24)\).</b> \(24=a(1)(-5)\Rightarrow a=-4.8\).`,
        S`<b>From \((3,\,46)\).</b> \(46=a(3)(-3)\Rightarrow a\approx-5.11\).`,
        S`<b>Test \((5,\,25)\).</b> Model 1: \(-4.8(5)(-1)=24\) (residual \(1\)); model 2: \(-5.11(5)(-1)\approx25.6\) (residual \(-0.6\)).`,
        S`<b>Decide.</b> Model 2 has the smaller residual at the test point, so it fits better.`],
      S`a = −4.8 or a ≈ −5.11; the second fits (5, 25) better`],
  ], [
    q("hard", S`A parabola model has zeros \(2\) and \(14\) and passes through \((8,\,72)\). Enter \(a\).`, num(-2), "72 = a(6)(−6).", [S`\(a=-2\).`], S`\(-2\)`),
    q("hard", S`For the model \(y=-2(x-2)(x-14)\), predict \(y\) at \(x=4\).`, num(40), "−2(2)(−10).", [S`\(40\).`], S`\(40\)`),
    q("hard", S`A vertex-form model \(y=a(x-6)^2+30\) passes through \((2,\,22)\). Predict \(y\) at \(x=11\).`, num(17.5, 0.01), "Find a first.", [S`\(22=16a+30\Rightarrow a=-0.5\).`, S`\(-0.5(25)+30=17.5\).`], S`\(17.5\)`),
    q("hard", S`Two models predict \(31.4\) and \(29.8\) at a point where the actual value is \(30.5\). Enter the absolute value of the smaller residual.`, num(0.7, 1e-9), "Compare |30.5 − 31.4| and |30.5 − 29.8|.", [S`\(0.9\) and \(0.7\): smaller is \(0.7\).`], S`\(0.7\)`),
    q("hard", S`A cable is modelled by \(y=0.02(x-50)^2+3\) between towers at \(x=0\) and \(x=100\). Enter the tower height.`, num(53), "x = 0.", [S`\(0.02(2500)+3=53\).`], S`\(53\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I know a parabola fits?", "The scatter plot curves like a parabola and the second differences are roughly constant — and the shape makes physical sense."],
      ["Which form should I use?", "Factored form if the zeros are visible, vertex form if the turning point is visible."],
      ["How do I find a?", "Substitute a data point that is not a zero or the vertex."],
      ["What is a residual?", "Actual minus predicted; small residuals scattered on both sides mean a good fit."],
      ["Why be careful with extrapolation?", "The pattern may change outside the data range."],
    ],
    summary: [
      "Plot, decide, then model with zeros or vertex plus one point.",
      "Check the model with other data points (residuals).",
      "Technology's curve of best fit uses all points.",
      "Interpolation is reliable; extrapolation is risky.",
    ],
    next: "3.6 reviews chapter 3.",
  }),
];
