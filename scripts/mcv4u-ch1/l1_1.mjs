// MCV4U 1.1 — Rates of Change and the Slope of a Curve: real-world rates, average rate as a secant slope,
// instantaneous rate as a tangent slope, estimating tangent slopes from graphs and secants, and points with no tangent
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "1.1 Rates of Change and the Slope of a Curve";
export const ID = "4432b35e-2f50-4a65-9397-3a95e13be7b2";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📈",
    title: "Rates of Change and the Slope of a Curve",
    overview: S`Calculus is the mathematics of change. A <strong>rate of change</strong> compares how much one quantity changes with how much another changes — metres per second, dollars per item, degrees per minute. Over an interval, the <strong>average rate of change</strong> is the slope of the <em>secant</em> joining two points on the graph. At a single moment, the <strong>instantaneous rate of change</strong> is the slope of the <em>tangent</em> — and it can be estimated by secants whose endpoints squeeze together. This lesson builds those ideas from graphs and tables; the rest of the course makes them exact.`,
    goals: [
      "describe real-world rates of change in words, tables, graphs and equations;",
      "calculate average rates of change as slopes of secants;",
      "estimate instantaneous rates of change from tangents drawn on a graph;",
      "approximate a tangent slope with secants that approach the point;",
      "recognize points where no tangent (and no instantaneous rate) exists.",
    ],
    curriculum: "A1.1 (real-world applications of rates of change), A1.2 (average rate ↔ secant slope; instantaneous rate ↔ tangent slope, for smooth functions), A1.3 (approximate an instantaneous rate using secants that approach the point)",
    prior: [
      [S`Slope through \((2,5)\) and \((6,13)\)?`, S`\(\frac{8}{4}=2\).`],
      [S`A car goes 150 km in 2 h. Average speed?`, S`75 km/h.`],
      [S`Is the slope of \(y=x^2\) the same everywhere?`, S`No — it gets steeper as \(|x|\) grows.`],
    ],
    words: [
      ["Secant", "a line through two points of a curve", ""],
      ["Tangent", "the line that touches a smooth curve at a point and matches its direction there", ""],
      ["Average rate of change", "\\(\\dfrac{\\Delta y}{\\Delta x}=\\dfrac{f(b)-f(a)}{b-a}\\)", "secant slope"],
      ["Instantaneous rate of change", "the rate at one instant", "tangent slope"],
    ],
  }),

  section("📌 Secants and tangents", S`
  ${plane({ view: { xmin: 0, xmax: 4.2, ymin: 0, ymax: 24 }, curves: [{ f: (t) => -4.9 * t * t + 19.6 * t + 1.5, a: 0, b: 4.05, color: "violet" }, { f: (t) => 16.2 + 4.9 * (t - 1), color: "amber" }, { f: (t) => 16.2 + 9.8 * (t - 1), color: "green" }], points: [{ x: 1, y: 16.2, label: "A(1, 16.2)", color: "red" }, { x: 2, y: 21.1, label: "B(2, 21.1)", color: "red" }], step: { x: 0.5, y: 4 }, xlabel: "t (s)", ylabel: "h (m)" }, "A ball's height: the amber secant AB has slope 4.9 m/s (average velocity on [1, 2]); the green tangent at A has slope 9.8 m/s (velocity at t = 1).")}
  ${table(["Idea", "Geometric meaning", "Formula / method"], [
    ["average rate on [a, b]", "slope of the secant through (a, f(a)) and (b, f(b))", "\\(\\frac{f(b)-f(a)}{b-a}\\)"],
    ["instantaneous rate at a", "slope of the tangent at (a, f(a))", "draw the tangent, or use shrinking secants"],
    ["units", "rise units ÷ run units", "m/s, $/item, °C/min"],
  ])}
  ${keyIdea(S`For a smooth curve (continuous, no corners), as the second point \(B\) slides toward \(A\), the secant \(AB\) turns into the tangent at \(A\), and the average rate becomes the instantaneous rate.`)}`),

  section("📌 Explore", S`<p>Pick a model and move the endpoints \(a\) and \(b\). Compare the amber secant with the green tangent, and slide \(b\) toward \(a\) to watch the average rate approach the instantaneous rate.</p>`),

  widget("rateReader", { init: { model: "cool", a: 5, b: 25 } }),

  section("📌 When there is no tangent", S`
  <p>At a sharp corner the secants from the left and from the right approach different slopes, so there is no single tangent and no instantaneous rate of change.</p>
  ${watchOut([
    "Subtract in the same order on top and bottom: (f(b) − f(a))/(b − a).",
    "An average rate of 0 does not mean nothing changed in between — only that the endpoints are level.",
    "A tangent drawn by eye gives an estimate; read two points far apart on the line for its slope.",
    "Always state units: a rate without units has no meaning in context.",
    "At a corner (like y = |x| at 0) the instantaneous rate does not exist.",
  ])}`),

  examples([
    ["Average speed from a table", S`A cyclist's distance from a light is 0, 4, 12, 24, 40, 60 m at \(t=0,1,2,3,4,5\) s. Find the average speed on \([1,4]\) and on \([4,5]\).`,
      [S`\([1,4]\): \(\frac{40-4}{4-1}=12\) m/s.`, S`\([4,5]\): \(\frac{60-40}{1}=20\) m/s.`],
      S`12 m/s, then 20 m/s: the cyclist is speeding up`,
      plane({ view: { xmin: -0.3, xmax: 5.5, ymin: -2, ymax: 65 }, segs: [{ pts: [[1, 4], [4, 40]], color: "amber" }], points: [{ x: 0, y: 0, color: "blue" }, { x: 1, y: 4, color: "blue" }, { x: 2, y: 12, color: "blue" }, { x: 3, y: 24, color: "blue" }, { x: 4, y: 40, color: "blue" }, { x: 5, y: 60, color: "blue" }], step: { x: 1, y: 10 }, xlabel: "t (s)", ylabel: "d (m)" })],
    ["Tangent slope from a graph", S`The tangent to \(y=6-\tfrac12x^2\) at \(x=1\) is drawn. Use two points on it to estimate the instantaneous rate of change at \(x=1\).`,
      [S`The tangent passes through \((1,5.5)\) and \((3,3.5)\).`, S`Slope \(\frac{3.5-5.5}{3-1}=-1\).`],
      S`about \(-1\)`,
      plane({ view: { xmin: -3, xmax: 4, ymin: -2, ymax: 8 }, curves: [{ f: (x) => 6 - 0.5 * x * x, color: "violet" }, { f: (x) => 6.5 - x, color: "green" }], points: [{ x: 1, y: 5.5, label: "(1, 5.5)", color: "red" }, { x: 3, y: 3.5, label: "(3, 3.5)", color: "green" }], step: { x: 1, y: 1 } })],
    ["Secants that close in", S`A stone's height is \(h(t)=-5t^2+25t\) m. Estimate its velocity at \(t=1\) using secants ending at \(t=2,\ 1.5,\ 1.1,\ 1.01\).`,
      [S`\(h(1)=20\). \(t=2\): \(\frac{30-20}{1}=10\). \(t=1.5\): \(\frac{26.25-20}{0.5}=12.5\).`, S`\(t=1.1\): \(\frac{21.45-20}{0.1}=14.5\). \(t=1.01\): \(\frac{20.1495-20}{0.01}=14.95\).`],
      S`the slopes approach 15 m/s`],
    ["A corner", S`Explain why \(f(x)=|x-2|+1\) has no instantaneous rate of change at \(x=2\).`,
      [S`Secants from the left all have slope \(-1\); secants from the right all have slope \(+1\).`, S`They don't approach one value, so there is no tangent at \((2,1)\).`],
      S`left slope \(-1\) ≠ right slope \(1\): no tangent`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.abs(x - 2) + 1, color: "violet" }], points: [{ x: 2, y: 1, label: "(2, 1)", color: "red" }], step: { x: 1, y: 1 } })],
    ["Reading the sign of the rate", S`Weekly sales follow the graph shown, peaking at week 6. When is the instantaneous rate of change positive, zero and negative?`,
      [S`Rising before week 6: positive. At the peak the tangent is horizontal: zero. Falling after week 6: negative.`],
      S`positive for \(t\lt6\); 0 at \(t=6\); negative for \(t>6\)`,
      plane({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 45 }, curves: [{ f: (t) => 40 - (t - 6) ** 2, a: 0, b: 12, color: "violet" }, { f: () => 40, a: 4, b: 8, color: "green" }], points: [{ x: 6, y: 40, label: "peak (6, 40)", color: "red" }], step: { x: 1, y: 5 }, xlabel: "week", ylabel: "sales (k)" })],
  ]),

  practice([
    q("average speed", S`For the cyclist above (0, 4, 12, 24, 40, 60 m at \(t=0,\ldots,5\) s), find the average speed over all 5 s.`, num(12),
      "(60 − 0) ÷ 5.", [S`\(\frac{60}{5}\).`], S`\(12\) m/s`),
    q("secant", S`Find the slope of the secant through \((1,3)\) and \((4,15)\).`, num(4),
      "Rise over run.", [S`\(\frac{12}{3}\).`], S`\(4\)`),
    q("maximum", S`What is the instantaneous rate of change at the highest point of a smooth curve?`, choice(["0", "positive", "negative", "it does not exist"], 0),
      "The tangent at a peak is horizontal.", ["Horizontal tangent: slope 0."], "0"),
    q("estimate", S`Estimate the slope of the tangent to \(y=x^2\) at \(x=3\) using the secant from \(x=3\) to \(x=3.001\) (round to a whole number).`, num(6),
      "(9.006001 − 9) ÷ 0.001.", [S`\(6.001\approx6\).`], S`\(6\)`),
    q("units", S`Volume is in litres and time in minutes. What are the units of the rate of change of volume?`, choice(["L/min", "min/L", "L", "L·min"], 0),
      "Output per input.", ["Litres per minute."], "L/min"),
  ]),

  ...hard([
    ["A corner on a parabola", S`Show that \(y=|x^2-4|\) has no tangent at \(x=2\).`,
      [S`For \(x\) just above 2, \(y=x^2-4\): secants from \((2,0)\) to \((2+h,\ (2+h)^2-4)\) have slope \(\frac{4h+h^2}{h}=4+h\to4\).`, S`For \(x\) just below 2, \(y=4-x^2\): the secant from \((2,0)\) to \((2-h,\ 4-(2-h)^2)\) has slope \(\frac{(4-(2-h)^2)-0}{-h}=\frac{4h-h^2}{-h}=-4+h\to-4\).`, S`The one-sided slopes \(-4\) and \(4\) differ: a corner, so no tangent.`],
      S`left slope \(-4\), right slope \(4\): no tangent at \(x=2\)`,
      plane({ view: { xmin: -3.5, xmax: 3.5, ymin: -1, ymax: 6 }, curves: [{ f: (x) => Math.abs(x * x - 4), color: "violet" }], points: [{ x: 2, y: 0, label: "(2, 0)", color: "red" }, { x: -2, y: 0, label: "(−2, 0)", color: "red" }], step: { x: 1, y: 1 } })],
    ["Secants from one side and both sides", S`For \(f(x)=x^2+x\), compute the secant slopes on \([2,3]\), \([2,2.1]\), \([2,2.01]\) and on the centred interval \([1.9,2.1]\). What is the instantaneous rate at \(x=2\)?`,
      [S`\([2,3]\): \(\frac{12-6}{1}=6\). \([2,2.1]\): \(\frac{6.51-6}{0.1}=5.1\). \([2,2.01]\): \(\frac{6.0501-6}{0.01}=5.01\).`, S`\([1.9,2.1]\): \(\frac{6.51-5.51}{0.2}=5\) exactly.`],
      S`the instantaneous rate at \(x=2\) is 5`],
  ], [
    q("hard", S`For \(h(t)=-5t^2+25t\), find the average velocity on \([1,1.01]\).`, num(14.95, 0.001),
      "h(1.01) = 20.1495.", [S`\(\frac{20.1495-20}{0.01}\).`], S`\(14.95\) m/s`),
    q("hard", S`For \(y=|x-3|\), what is the slope of every secant from \((3,0)\) to a point on the left?`, num(-1),
      "Left of 3, y = 3 − x.", [S`Slope of \(3-x\).`], S`\(-1\)`),
    q("hard", S`Estimate the instantaneous rate of change of \(f(x)=x^2+x\) at \(x=2\).`, num(5, 0.01),
      "Use a centred interval.", [S`\(\frac{f(2.01)-f(1.99)}{0.02}=5\).`], S`\(5\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the difference between average and instantaneous rate?", "Average rate describes a whole interval (secant slope); instantaneous rate describes one moment (tangent slope)."],
      ["Why do shrinking secants work?", "For a smooth curve, the secant through A and a nearby point B is almost the tangent; the closer B is, the better the estimate."],
      ["Why is a centred interval often better?", "Errors on the left and right tend to cancel, so (f(a + h) − f(a − h))/(2h) is usually closer than a one-sided secant."],
      ["When does a tangent not exist?", "At corners, cusps, breaks and vertical tangents — wherever the secant slopes don't settle on one finite value."],
      ["How will we find exact instantaneous rates?", "With limits (1.3–1.4) and the derivative (1.5): the limit of secant slopes as the interval shrinks to 0."],
    ],
    summary: [
      "Average rate = secant slope = Δy/Δx.",
      "Instantaneous rate = tangent slope.",
      "Shrinking secants approach the tangent.",
      "No tangent at a corner.",
    ],
    next: "1.2 computes rates of change exactly from equations using the difference quotient.",
  }),
];
