// IB AA SL 3.7 — Applications of Quadratics: projectiles, maximum area, maximum revenue, parabolic arches, time above a height
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, hard, plane } from "./lib.mjs";

export const TITLE = "3.7 Applications of Quadratics";
export const ID = "1baa0003-0001-4001-8001-000000000307";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🏹",
    title: "Applications of Quadratics",
    overview: S`Quadratic functions model thrown objects, the area of fenced regions, the revenue from changing a price and the shape of arches. The vertex gives a maximum or minimum, the roots give start and end points, and solving \(f(x)=k\) answers "when" questions. In this lesson you will build quadratic models from situations and use them to answer questions in context.`,
    goals: [
      "use a quadratic model for the height of a projectile: maximum height, time of flight, time above a given height;",
      "set up and maximise an area function;",
      "set up and maximise a revenue function when a price changes;",
      "find the equation of a parabolic arch from its dimensions;",
      "interpret answers in context, including a sensible domain.",
    ],
    curriculum: "SL 2.6, 2.7 (quadratic functions and equations in context), SL 2.5/2.4 (domain and range of a model; maximum and minimum)",
    prior: [
      [S`Find the vertex of \(y=-5t^2+20t\).`, S`\((2,20)\).`],
      [S`Solve \(x(40-x)=0\).`, S`\(x=0\) or \(x=40\).`],
      [S`Expand \((12+x)(300-20x)\).`, S`\(3600+60x-20x^2\).`],
    ],
    words: [
      ["Projectile", "an object moving under gravity: \\(h(t)=-4.9t^2+v_0t+h_0\\)", "a thrown ball"],
      ["Maximum", "the vertex of a downward parabola", "highest point"],
      ["Time of flight", "the positive root of \\(h(t)=0\\)", "\\(t\\approx4.08\\) s"],
      ["Revenue", "price × number sold", "\\(R=pq\\)"],
      ["Optimise", "find the maximum or minimum value", "largest area"],
    ],
  }),

  section("📌 The vertex answers 'how high' and 'how large'", S`
  ${table(["Question", "Use"], [
    ["greatest height / area / revenue", "the vertex (k-value)"],
    ["when or where it occurs", S`the vertex (h-value), \(x=-\frac{b}{2a}\)`],
    ["start or end (lands, no area)", S`the roots of \(f(x)=0\)`],
    [S`when it equals a value \(k\)`, S`solve \(f(x)=k\)`],
  ])}
  ${plane({ view: { xmin: -0.3, xmax: 4.6, ymin: -2, ymax: 24 }, step: { x: 0.5, y: 2 }, curves: [{ f: (t) => -4.9 * t * t + 19.6 * t + 1.5, a: 0, b: 4.075, color: "violet" }], points: [P(2, 21.1, "(2, 21.1)", "amber"), P(0, 1.5, "(0, 1.5)", "green"), P(4.075, 0, "(4.08, 0)")], xlabel: "t (s)", ylabel: "h (m)" }, "h(t) = −4.9t² + 19.6t + 1.5: launched from 1.5 m, highest 21.1 m at 2 s, lands after about 4.08 s")}
  ${keyIdea(S`In context, always ask which part of the parabola is real: time and lengths cannot be negative, so the domain is usually between two roots.`)}`),

  section("📌 Areas, revenue and arches", S`
  <p><strong>Area:</strong> with 80 m of fence around a rectangle of width \(x\), the length is \(40-x\), so \(A=x(40-x)\), maximised halfway between the roots 0 and 40.</p>
  <p><strong>Revenue:</strong> if each price increase of 1 loses 20 sales, then \(R=(12+x)(300-20x)\), again a downward parabola.</p>
  ${plane({ view: { xmin: -2, xmax: 42, ymin: -2, ymax: 13 }, step: { x: 4, y: 2 }, curves: [{ f: (x) => -(x * (x - 40)) / 40, a: 0, b: 40, color: "violet" }], lines: [{ m: 0, b: 5, color: "green", dash: true }], points: [P(20, 10, "(20, 10)", "amber"), P(20 - Math.sqrt(200), 5, "(5.86, 5)", "green"), P(20 + Math.sqrt(200), 5, "(34.14, 5)", "green")], xlabel: "x (m)", ylabel: "y (m)" }, "An arch 40 m wide and 10 m high: y = −x(x − 40)/40")}
  ${watchOut([
    "Define the variable clearly (width in metres, number of 1-dollar increases, time in seconds).",
    "Answer the question asked: 'what price' is 12 + x, not x.",
    "Reject roots that make no sense (negative time, negative width).",
    "Give units and sensible rounding (3 s.f. unless told otherwise).",
  ])}`),

  section("📌 Explore", S`<p>Fence three sides of a rectangle against a wall. Move the width: the area rises and then falls. The maximum is always at a quarter of the fence length.</p>`),

  widget("ibQuadApps", { init: [60] }),

  examples([
    ["Level 1 · Maximum height", S`A ball's height is \(h(t)=-4.9t^2+19.6t+1.5\) m. Find its maximum height.`,
      [S`\(t=-\frac{19.6}{2(-4.9)}=2\) s.`, S`\(h(2)=-19.6+39.2+1.5=21.1\) m.`],
      "21.1 m after 2 s"],
    ["Level 2 · Time of flight", S`For the same ball, when does it hit the ground?`,
      [S`\(-4.9t^2+19.6t+1.5=0\).`, S`\(t=\dfrac{19.6\pm\sqrt{19.6^2+4(4.9)(1.5)}}{9.8}\approx\dfrac{19.6\pm20.34}{9.8}\).`, S`Only the positive root makes sense: \(t\approx4.08\) s.`],
      S`\(t\approx4.08\) s`],
    ["Level 2 · Maximum area", S`80 m of fence encloses a rectangle. Find the largest possible area.`,
      [S`Width \(x\), length \(40-x\): \(A=x(40-x)\).`, S`Roots 0 and 40, so the vertex is at \(x=20\).`, S`\(A=20\times20=400\) m² (a square).`],
      "400 m²",
      plane({ view: { xmin: -2, xmax: 42, ymin: -20, ymax: 460 }, step: { x: 4, y: 50 }, curves: [{ f: (x) => x * (40 - x), a: 0, b: 40, color: "violet" }], points: [P(20, 400, "(20, 400)", "amber")], xlabel: "x (m)", ylabel: "A (m²)" })],
    ["Level 2 · Maximum revenue", S`Concert tickets cost 12 and 300 are sold. Each 1 increase in price loses 20 sales. Find the price that maximises revenue.`,
      [S`\(R=(12+x)(300-20x)\); roots \(x=-12\) and \(x=15\).`, S`Vertex at \(x=\frac{-12+15}{2}=1.5\).`, S`Price \(13.50\); revenue \(13.5\times270=3645\).`],
      "13.50, revenue 3645"],
    ["Level 3 · A parabolic arch", S`An arch is 40 m wide at the base and 10 m high. Find its equation (origin at one foot) and its width at a height of 5 m.`,
      [S`\(y=ax(x-40)\); at \(x=20\): \(a(20)(-20)=10\Rightarrow a=-\frac1{40}\).`, S`\(-\frac{x(x-40)}{40}=5\Rightarrow x^2-40x+200=0\Rightarrow x=20\pm\sqrt{200}\).`, S`Width \(=2\sqrt{200}\approx28.3\) m.`],
      S`\(y=-\frac{x(x-40)}{40}\); about 28.3 m`],
  ]),

  practice([
    q("Level 1 · maximum height", S`\(h(t)=-5t^2+20t\). Find the maximum height.`, num(20),
      "Vertex at t = 2.", [S`\(-20+40\).`], S`\(20\)`),
    q("Level 1 · time of maximum", S`\(h(t)=-5t^2+30t+2\). At what time is the height greatest?`, num(3),
      "t = −b/(2a).", [S`\(\frac{30}{10}\).`], S`\(3\)`),
    q("Level 2 · numbers", "Two numbers add to 20. What is the largest possible product?", num(100),
      "x(20 − x) is greatest at x = 10.", [S`\(10\times10\).`], S`\(100\)`),
    q("Level 2 · area", "A rectangle has perimeter 36 cm. What is its largest possible area (cm²)?", num(81),
      "x(18 − x).", [S`\(x=9\): \(81\).`], S`\(81\)`),
    q("Level 2 · landing", S`\(h(t)=-5t^2+15t\). When does the object land?`, num(3),
      "Solve h(t) = 0, t > 0.", [S`\(-5t(t-3)=0\).`], S`\(3\)`),
  ]),

  ...hard([
    ["A riverside field", S`A farmer has 150 m of fence to enclose a rectangular field along a straight river (no fence needed on the river side). Find the dimensions giving the greatest area.`,
      [S`Width \(x\) (two sides), length \(150-2x\): \(A=x(150-2x)\).`, S`Roots 0 and 75, so the vertex is at \(x=37.5\).`, S`Length \(75\) m; area \(37.5\times75=2812.5\) m².`],
      "37.5 m by 75 m, 2812.5 m²",
      plane({ view: { xmin: -3, xmax: 80, ymin: -100, ymax: 3200 }, step: { x: 5, y: 500 }, curves: [{ f: (x) => x * (150 - 2 * x), a: 0, b: 75, color: "violet" }], points: [P(37.5, 2812.5, "(37.5, 2812.5)", "amber")], xlabel: "x (m)", ylabel: "A" })],
    ["Time above a height", S`A ball's height is \(h(t)=-4.9t^2+14t+2\) m. For how long is it more than 10 m high?`,
      [S`\(-4.9t^2+14t+2=10\Rightarrow4.9t^2-14t+8=0\).`, S`\(t=\dfrac{14\pm\sqrt{196-156.8}}{9.8}\approx0.790\) and \(2.067\).`, S`It is above 10 m between these times: about \(1.28\) s.`],
      "about 1.28 s",
      plane({ view: { xmin: -0.2, xmax: 3.3, ymin: -1, ymax: 14 }, step: { x: 0.5, y: 2 }, curves: [{ f: (t) => -4.9 * t * t + 14 * t + 2, a: 0, b: 3, color: "violet" }], lines: [{ m: 0, b: 10, color: "green", dash: true }], points: [P(0.79, 10, "(0.79, 10)", "green"), P(2.067, 10, "(2.07, 10)", "green")], xlabel: "t", ylabel: "h" })],
  ], [
    q("Level 3 · best price", S`Revenue is \(R=(20+x)(400-10x)\), where \(20+x\) is the price. Find the price that maximises revenue.`, num(30),
      "Roots −20 and 40.", [S`\(x=10\): price \(30\).`], S`\(30\)`),
    q("Level 3 · maximum height", S`\(h(t)=-4.9t^2+24.5t\). Find the maximum height (3 d.p.).`, num(30.625, 0.001),
      "Vertex at t = 2.5.", [S`\(-4.9(6.25)+61.25\).`], S`\(30.625\)`),
    q("Level 3 · numbers", "Two positive numbers differ by 6 and have product 91. Find the smaller one.", num(7),
      "x(x + 6) = 91.", [S`\(x^2+6x-91=0\Rightarrow(x+13)(x-7)=0\).`], S`\(7\)`),
  ]),

  wrapUp({
    qas: [
      ["Why −4.9t²?", "Gravity causes a downward acceleration of about 9.8 m/s², and half of that is the coefficient in the height formula."],
      ["How do I set up an area problem?", "Name one side x, express the other side using the fixed perimeter, and multiply."],
      ["What if the model gives a non-integer price or number of items?", "Round sensibly and check nearby whole values if only whole numbers make sense."],
      ["Do I need the vertex or the roots?", "Vertex for maximum/minimum; roots for start/end; f(x) = k for 'when is it equal to…'."],
      ["Can I use a GDC?", "Yes on Paper 2: maximum, zero and intersect functions answer most of these questions."],
    ],
    summary: [
      "Maximum or minimum: vertex, x = −b/(2a).",
      "Start and end: roots; f(x) = k for a given level.",
      "Area and revenue problems are products of two linear factors.",
      "Restrict the domain and reject impossible roots.",
    ],
    next: "3.8 reviews linear functions, transformations and quadratics.",
  }),
];
