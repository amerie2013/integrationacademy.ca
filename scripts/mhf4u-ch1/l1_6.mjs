// MHF4U 1.6 — Slopes of Tangents and Instantaneous Rate of Change: shrinking secants, difference quotients,
// centred estimates, reading tangents from graphs, zero rate at turning points
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "1.6 Slopes of Tangents and Instantaneous Rate of Change";
export const ID = "6d4f0001-0001-4001-8001-000000000106";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Slopes of Tangents and Instantaneous Rate of Change",
    overview: S`A speedometer shows how fast you are going <em>right now</em>, not on average. That is an <strong>instantaneous rate of change</strong>: the slope of the <strong>tangent</strong> line, which touches the curve at one point and points in the curve's direction there. You can approximate it with the slopes of secants over smaller and smaller intervals, using the difference quotient \(\dfrac{f(a+h)-f(a)}{h}\). In this lesson you will estimate instantaneous rates from tables, equations and graphs, and interpret them.`,
    goals: [
      "explain the difference between average and instantaneous rates of change;",
      "estimate an instantaneous rate with secants over shrinking intervals;",
      "use the difference quotient (f(a + h) − f(a))/h and centred estimates;",
      "estimate the slope of a tangent from a graph;",
      "interpret zero, positive and negative instantaneous rates.",
    ],
    curriculum: "D1.5–D1.9 (recognize instantaneous rates; approximate them with average rates over shrinking intervals; connect tangent slopes to instantaneous rates; solve problems numerically and graphically)",
    prior: [
      [S`Average rate of \(x^2\) on \([3,4]\)?`, S`\(7\).`],
      [S`Slope of the line through \((2,5)\) and \((2.1,5.41)\)?`, S`\(4.1\).`],
      [S`Simplify \(\frac{(3+h)^2-9}{h}\).`, S`\(6+h\).`],
    ],
    words: [
      ["Tangent line", "touches the curve at a point and has the curve's slope there", ""],
      ["Instantaneous rate", "the rate of change at one value of x", ""],
      ["Difference quotient", "\\(\\frac{f(a+h)-f(a)}{h}\\)", ""],
      ["Centred estimate", "\\(\\frac{f(a+h)-f(a-h)}{2h}\\)", ""],
    ],
  }),

  section("📌 From secants to a tangent", S`
  ${plane({ view: { xmin: -0.3, xmax: 3, ymin: 0, ymax: 22 }, curves: [{ f: (t) => -5 * t * t + 20 * t, a: 0, b: 3, color: "violet" }], lines: [{ m: 5, b: 10, color: "amber", label: "secant h = 1" }, { m: 9.5, b: 5.5, color: "blue" }, { m: 10, b: 5, color: "green", label: "tangent" }], points: [{ x: 1, y: 15, label: "(1, 15)" }, { x: 2, y: 20 }, { x: 1.1, y: 15.95 }], xlabel: "t (s)", ylabel: "h (m)", step: { x: 0.5, y: 2 } }, "Secants from t = 1 to t = 2, then to t = 1.1, approach the tangent at t = 1 (slope 10).")}
  ${table(["h", "1", "0.1", "0.01", "0.001"], [["\\(\\frac{h(1+h)-h(1)}{h}\\)", "5", "9.5", "9.95", "9.995"]])}
  ${keyIdea(S`The instantaneous rate of change at \(x=a\) is the slope of the tangent there. Estimate it with \(\dfrac{f(a+h)-f(a)}{h}\) for small \(h\) (the values approach a single number), or more accurately with the centred estimate \(\dfrac{f(a+h)-f(a-h)}{2h}\). A zero rate means a horizontal tangent: often a local maximum or minimum.`)}`),

  section("📌 Explore", S`<p>Pick a function and a point, then shrink the interval \(h\). Watch the dashed secant swing onto the green tangent and the slopes in the table settle down.</p>`),

  widget("tangentSlope", { init: { fn: "quad", a: 1 } }),

  section("📌 Reading a tangent from a graph", S`
  <p>Lay a ruler along the curve so it touches at the point without cutting through nearby. Pick two points on the ruler far apart and compute rise ÷ run.</p>
  ${watchOut([
    "An instantaneous rate is a slope at ONE point; you still need two points to compute an estimate.",
    "Use small h, but compute carefully — rounding f(a + h) too early ruins the estimate.",
    "A tangent may cross the curve elsewhere; what matters is the behaviour near the point.",
    "A zero instantaneous rate does not always mean a maximum or minimum (think of y = x³ at 0).",
  ])}`),

  examples([
    ["Shrinking secants", S`For \(h(t)=-5t^2+20t\), estimate the instantaneous velocity at \(t=1\).`,
      [S`\(h(1)=15\); \(h(1.1)=-6.05+22=15.95\); \(h(1.01)=-5.1005+20.2=15.0995\).`, S`\(\frac{15.95-15}{0.1}=9.5\); \(\frac{15.0995-15}{0.01}=9.95\).`, S`The values approach 10.`],
      S`about \(10\) m/s`],
    ["A centred estimate", S`Estimate the instantaneous rate of change of \(f(x)=x^3\) at \(x=2\).`,
      [S`Centred with \(h=0.001\): \(\frac{2.001^3-1.999^3}{0.002}\).`, S`\(2.001^3\approx8.012006\), \(1.999^3\approx7.988006\); difference \(\approx0.024\).`, S`\(\frac{0.024}{0.002}=12\).`],
      S`about \(12\)`,
      plane({ view: { xmin: 0, xmax: 3, ymin: -2, ymax: 20 }, curves: [{ f: (x) => x ** 3, color: "violet" }], lines: [{ m: 12, b: -16, color: "green", label: "tangent, slope 12" }], points: [{ x: 2, y: 8, label: "(2, 8)" }], step: { x: 0.5, y: 2 } })],
    ["Exponential growth", S`For \(P(t)=100(2)^t\), estimate the growth rate at \(t=2\).`,
      [S`\(P(2)=400\). With \(h=0.001\): \(\frac{100(2^{2.001})-400}{0.001}\).`, S`\(2^{2.001}\approx4.0027731\), so the quotient is \(\approx277.3\).`],
      S`about \(277\) per hour`,
      plane({ view: { xmin: -0.3, xmax: 3.5, ymin: -50, ymax: 1100 }, curves: [{ f: (t) => 100 * 2 ** t, a: 0, b: 3.4, color: "red" }], lines: [{ m: 277.3, b: 400 - 2 * 277.3, color: "green", label: "tangent" }], points: [{ x: 2, y: 400, label: "(2, 400)" }], xlabel: "t (h)", ylabel: "P", step: { x: 0.5, y: 100 } })],
    ["A zero rate", S`Estimate the instantaneous rate of change of \(f(x)=x^3-3x\) at \(x=1\). What does it tell you?`,
      [S`Centred, \(h=0.01\): \(f(1.01)=1.030301-3.03=-1.999699\); \(f(0.99)=0.970299-2.97=-1.999701\).`, S`\(\frac{-1.999699-(-1.999701)}{0.02}=\frac{0.000002}{0.02}=0.0001\approx0\).`],
      S`about 0: a horizontal tangent — a local minimum at \((1,-2)\)`,
      plane({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 }, curves: [{ f: (x) => x ** 3 - 3 * x, color: "violet" }], lines: [{ m: 0, b: -2, color: "green", label: "tangent y = −2" }], points: [{ x: 1, y: -2, label: "(1, −2)" }, { x: -1, y: 2, label: "(−1, 2)" }], step: { x: 1, y: 1 } })],
    ["A sinusoid", S`Estimate the instantaneous rate of change of \(y=3\sin x\) at \(x=\tfrac\pi3\).`,
      [S`\(\frac\pi3\approx1.0472\). With \(h=0.001\): \(\frac{3\sin(1.0482)-3\sin(1.0472)}{0.001}\approx1.499\).`, S`So the curve rises about 1.5 units per radian there.`],
      S`about \(1.5\)`],
  ]),

  practice([
    q("parabola", S`Estimate the instantaneous rate of change of \(f(x)=x^2\) at \(x=3\).`, num(6, 0.01),
      "Try h = 0.01, 0.001.", [S`\(\frac{3.001^2-9}{0.001}=6.001\).`], S`\(6\)`),
    q("velocity", S`A ball's height is \(h(t)=-5t^2+30t\). Estimate its instantaneous velocity at \(t=2\) (m/s).`, num(10, 0.01),
      "Use a small h.", [S`\(\frac{h(2.001)-h(2)}{0.001}\approx9.995\to10\).`], S`\(10\)`),
    q("speedometer", "A car's speedometer shows…", choice(["the instantaneous rate of change of distance", "the average speed for the trip", "the total distance", "the average rate over the last hour"], 0),
      "Right now.", ["It shows speed at that moment."], "instantaneous rate"),
    q("vertex", S`What is the slope of the tangent at the vertex of a parabola?`, num(0),
      "The tangent there is horizontal.", [S`A turning point has a horizontal tangent.`], S`\(0\)`),
    q("exponential", S`Estimate the instantaneous rate of change of \(y=2^x\) at \(x=1\), to two decimal places.`, num(1.39, 0.01),
      "h = 0.001.", [S`\(\frac{2^{1.001}-2}{0.001}\approx1.386\).`], S`\(1.39\)`),
  ]),

  ...hard([
    ["An exact tangent slope", S`Show that the average rate of change of \(f(x)=x^2\) on \([a,a+h]\) is \(2a+h\). Use it to find the equation of the tangent at \(x=3\).`,
      [S`\(\frac{(a+h)^2-a^2}{h}=\frac{2ah+h^2}{h}=2a+h\).`, S`As \(h\to0\), the slope approaches \(2a\); at \(a=3\) it is 6.`, S`Through \((3,9)\): \(y-9=6(x-3)\Rightarrow y=6x-9\).`],
      S`\(y=6x-9\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -3, ymax: 20 }, curves: [{ f: (x) => x * x, color: "violet" }], lines: [{ m: 6, b: -9, color: "green", label: "y = 6x − 9" }], points: [{ x: 3, y: 9, label: "(3, 9)" }], step: { x: 1, y: 2 } })],
    ["Average equals instantaneous", S`At which point on \([1,5]\) is the instantaneous rate of change of \(f(x)=x^2\) equal to its average rate of change on \([1,5]\)?`,
      [S`Average: \(\frac{25-1}{4}=6\).`, S`Instantaneous at \(x=a\) is \(2a\) (challenge 1), so \(2a=6\Rightarrow a=3\).`],
      S`at \(x=3\): the tangent there is parallel to the secant`],
  ], [
    q("hard", S`Find the instantaneous rate of change of \(f(x)=x^3\) at \(x=-1\).`, num(3, 0.01),
      "Use a small centred interval.", [S`\(\frac{(-0.999)^3-(-1.001)^3}{0.002}\approx3\).`], S`\(3\)`),
    q("hard", S`The tangent to \(y=x^2\) at \(x=3\) is \(y=6x+b\). Find \(b\).`, num(-9),
      "It passes through (3, 9).", [S`\(9=18+b\).`], S`\(-9\)`),
    q("hard", S`At what x does \(f(x)=x^2-4x\) have instantaneous rate of change 2?`, num(3),
      "The rate at x = a is 2a − 4.", [S`\(2a-4=2\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["How is a tangent different from a secant?", "A secant joins two points of the curve; a tangent touches it at one point and has the curve's direction there."],
      ["Why do smaller intervals give better estimates?", "Over a tiny interval the curve is almost straight, so the secant slope is almost the slope at the point."],
      ["Why use a centred estimate?", "It balances the error on each side and usually gives a more accurate value for the same h."],
      ["When are average and instantaneous speed the same?", "When the speed is constant (a linear distance–time graph) — every secant and tangent has the same slope."],
      ["What does a zero instantaneous rate mean?", "A horizontal tangent. It is often a local maximum or minimum, but y = x³ at 0 shows it doesn't have to be."],
    ],
    summary: [
      "Instantaneous rate = slope of the tangent.",
      "Estimate with (f(a + h) − f(a))/h, h → 0.",
      "Centred: (f(a + h) − f(a − h))/(2h).",
      "Rate 0: horizontal tangent (often a max or min).",
    ],
    next: "1.7 reviews the whole chapter.",
  }),
];
