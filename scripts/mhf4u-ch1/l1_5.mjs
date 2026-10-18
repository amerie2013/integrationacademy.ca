// MHF4U 1.5 — Slopes of Secants and Average Rate of Change: Δy/Δx from equations, tables and graphs; zero,
// constant and changing rates; interpreting signs and units (polynomial, exponential and sinusoidal examples)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "1.5 Slopes of Secants and Average Rate of Change";
export const ID = "22ecd156-551f-4549-958b-994dd499fe7c";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📐",
    title: "Slopes of Secants and Average Rate of Change",
    overview: S`A <strong>rate of change</strong> compares how much the dependent variable changes with how much the independent variable changes. Over an interval, the <strong>average rate of change</strong> is \(\dfrac{\Delta y}{\Delta x}=\dfrac{f(b)-f(a)}{b-a}\): the slope of the <strong>secant</strong> line through the two endpoints. In this lesson you will compute average rates from equations, tables and graphs; recognize when a rate is zero, constant or changing; and interpret the sign and the units in context.`,
    goals: [
      "explain a rate of change as a comparison of two changes, with units;",
      "calculate an average rate of change from an equation, a table or a graph;",
      "connect the average rate of change to the slope of a secant;",
      "distinguish zero, constant and changing rates of change;",
      "interpret average rates of change in real situations.",
    ],
    curriculum: "D1.1–D1.4, D1.7 (rates of change in real-world applications; zero, constant and changing rates; calculate and interpret average rates of change from tables, graphs and equations; connect secant slopes to average rates)",
    prior: [
      [S`Slope through \((1,4)\) and \((3,10)\)?`, S`\(\frac{10-4}{3-1}=3\).`],
      [S`If \(f(x)=x^2\), find \(f(5)-f(2)\).`, S`\(25-4=21\).`],
      [S`Units of a slope with \(y\) in m and \(x\) in s?`, S`m/s.`],
    ],
    words: [
      ["Rate of change", "change in y ÷ change in x", "km/h, \\$/item"],
      ["Average rate of change", "\\(\\frac{f(b)-f(a)}{b-a}\\) over \\([a,b]\\)", ""],
      ["Secant", "a line through two points of a curve", ""],
      ["Interval", "\\([a,b]\\): all x from a to b", ""],
    ],
  }),

  section("📌 Average rate = slope of a secant", S`
  ${plane({ view: { xmin: -0.5, xmax: 4.5, ymin: -3, ymax: 24 }, curves: [{ f: (t) => -5 * t * t + 20 * t, a: 0, b: 4, color: "violet" }], lines: [{ m: 10, b: 0, color: "amber", label: "slope 10" }, { m: -10, b: 40, color: "green", label: "slope −10" }], points: [{ x: 0, y: 0, label: "(0, 0)" }, { x: 2, y: 20, label: "(2, 20)" }, { x: 4, y: 0, label: "(4, 0)" }], xlabel: "t (s)", ylabel: "h (m)", step: { x: 0.5, y: 4 } }, "A ball: h = −5t² + 20t. Average velocity is 10 m/s on the way up [0, 2] and −10 m/s on the way down [2, 4].")}
  ${keyIdea(S`Average rate of change on \([a,b]\): \(\dfrac{\Delta y}{\Delta x}=\dfrac{f(b)-f(a)}{b-a}\), in units of (y-units) per (x-unit). Positive: \(f\) increased overall; negative: decreased; zero: same value at both ends. For a linear function the rate is constant; for any other function it depends on the interval.`)}`),

  section("📌 Explore", S`<p>Pick a function and drag the two points. The secant's slope is the average rate of change on that interval. Find an interval where it is zero even though the function changed in between.</p>`),

  widget("secantLab", { init: { fn: "quad", a: 1, b: 3 } }),

  section("📌 Tables and graphs", S`
  ${table(["Year", "2014", "2016", "2018", "2020", "2022"], [["Members", "120", "150", "210", "330", "570"]])}
  <p>From 2014 to 2022 the average rate is \(\frac{570-120}{8}=56.25\) members per year, but from 2014 to 2016 it was only 15 and from 2020 to 2022 it was 120: the rate is <em>changing</em> (increasing).</p>
  ${watchOut([
    "Subtract in the same order on top and bottom: (f(b) − f(a)) ÷ (b − a).",
    "Always state units: “per hour”, “per year”, “m/s”.",
    "A zero average rate does not mean the function stayed constant.",
    "Only linear functions have the same average rate on every interval.",
  ])}`),

  examples([
    ["A thrown ball", S`For \(h(t)=-5t^2+20t\) (m, s), find the average velocity on \([0,2]\) and on \([2,4]\).`,
      [S`\(h(0)=0\), \(h(2)=20\), \(h(4)=0\).`, S`\([0,2]\): \(\frac{20-0}{2}=10\) m/s. \([2,4]\): \(\frac{0-20}{2}=-10\) m/s.`],
      S`10 m/s upward, then −10 m/s (downward)`],
    ["A doubling population", S`A colony is \(P(t)=100(2)^t\) after \(t\) hours. Find the average rate of growth on \([1,3]\) and on \([3,4]\).`,
      [S`\(P(1)=200\), \(P(3)=800\), \(P(4)=1600\).`, S`\([1,3]\): \(\frac{800-200}{2}=300\) per hour. \([3,4]\): \(\frac{1600-800}{1}=800\) per hour.`],
      S`300 /h, then 800 /h — the rate increases`,
      plane({ view: { xmin: -0.3, xmax: 4.5, ymin: -50, ymax: 1700 }, curves: [{ f: (t) => 100 * 2 ** t, a: 0, b: 4.3, color: "red" }], lines: [{ m: 300, b: -100, color: "amber" }], points: [{ x: 1, y: 200, label: "(1, 200)" }, { x: 3, y: 800, label: "(3, 800)" }, { x: 4, y: 1600, label: "(4, 1600)" }], xlabel: "t (h)", ylabel: "P", step: { x: 1, y: 200 } })],
    ["A constant rate", S`A plan costs \(C(n)=25+4n\) dollars for \(n\) gigabytes. Find the average rate of change on \([0,5]\) and on \([10,20]\).`,
      [S`\(\frac{45-25}{5}=4\) and \(\frac{105-65}{10}=4\).`, S`Linear: the rate is the same on every interval.`],
      S`4 dollars per GB on any interval`],
    ["From a graph", S`The graph of \(f(x)=0.5x^2+1.5\) passes through \((1,2)\) and \((5,14)\). Find the average rate of change on \([1,5]\).`,
      [S`\(\frac{14-2}{5-1}=\frac{12}{4}=3\).`, S`This is the slope of the secant through the two points.`],
      S`\(3\)`,
      plane({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 16 }, curves: [{ f: (x) => 0.5 * x * x + 1.5, color: "violet" }], lines: [{ m: 3, b: -1, color: "amber", label: "secant" }], points: [{ x: 1, y: 2, label: "(1, 2)" }, { x: 5, y: 14, label: "(5, 14)" }], step: { x: 1, y: 2 } })],
    ["Zero is not 'no change'", S`For \(y=3\sin x\), find the average rate of change on \([0,\pi]\) and on \([0,\tfrac\pi2]\).`,
      [S`\([0,\pi]\): \(\frac{0-0}{\pi}=0\), although \(y\) rose to 3 and fell back.`, S`\([0,\tfrac\pi2]\): \(\frac{3-0}{\pi/2}=\frac6\pi\approx1.91\).`],
      S`\(0\) and about \(1.91\)`,
      plane({ view: { xmin: -0.3, xmax: 3.5, ymin: -1, ymax: 4 }, curves: [{ f: (x) => 3 * Math.sin(x), a: 0, b: Math.PI, color: "blue" }], lines: [{ m: 0, b: 0, color: "amber" }, { m: 6 / Math.PI, b: 0, color: "green" }], points: [{ x: 0, y: 0, label: "(0, 0)" }, { x: Math.PI, y: 0, label: "(π, 0)" }, { x: Math.PI / 2, y: 3, label: "(π/2, 3)" }], step: { x: 0.5, y: 1 } })],
  ]),

  practice([
    q("equation", S`Find the average rate of change of \(f(x)=x^2\) on \([1,4]\).`, num(5),
      "(f(4) − f(1)) ÷ 3.", [S`\(\frac{16-1}{3}=5\).`], S`\(5\)`),
    q("velocity", S`A ball's height is \(h(t)=-4.9t^2+30t\) (m). Find its average velocity on \([1,3]\) (m/s).`, num(10.4, 0.01),
      "h(1) = 25.1, h(3) = 45.9.", [S`\(\frac{45.9-25.1}{2}=10.4\).`], S`\(10.4\)`),
    q("table", S`A town had 42 thousand people in 2010 and 58 thousand in 2018. Find the average rate of change in thousands per year.`, num(2),
      "16 ÷ 8.", [S`\(\frac{58-42}{8}\).`], S`\(2\)`),
    q("constant", "Which kind of function has the same average rate of change on every interval?", choice(["linear", "quadratic", "exponential", "sinusoidal"], 0),
      "Constant slope.", ["Only a straight line has constant slope."], "linear"),
    q("exponential", S`Find the average rate of change of \(y=2^x\) on \([0,3]\), to two decimal places.`, num(2.33, 0.01),
      "(8 − 1) ÷ 3.", [S`\(\frac73\approx2.33\).`], S`\(2.33\)`),
  ]),

  ...hard([
    ["Find the interval", S`The average rate of change of \(f(x)=x^2\) on \([1,b]\) is 7. Find \(b\).`,
      [S`\(\frac{b^2-1}{b-1}=\frac{(b-1)(b+1)}{b-1}=b+1\) (for \(b\ne1\)).`, S`\(b+1=7\Rightarrow b=6\). Check: \(\frac{36-1}{5}=7\) ✓.`],
      S`\(b=6\)`],
    ["Comparing intervals for decay", S`A sample's mass halves every 10 s: \(m(t)=80\left(\tfrac12\right)^{t/10}\) g. Compare the average rate of change on \([0,30]\) with the rates on \([0,10]\), \([10,20]\) and \([20,30]\).`,
      [S`\(m(0)=80\), \(m(10)=40\), \(m(20)=20\), \(m(30)=10\).`, S`\([0,30]\): \(\frac{10-80}{30}\approx-2.33\) g/s. The three parts: \(-4\), \(-2\), \(-1\) g/s.`, S`The decay slows down; the 30-s average hides that.`],
      S`about \(-2.33\) g/s overall; \(-4\), \(-2\), \(-1\) g/s in the parts`,
      plane({ view: { xmin: -2, xmax: 34, ymin: -5, ymax: 90 }, curves: [{ f: (t) => 80 * 0.5 ** (t / 10), a: 0, b: 32, color: "red" }], points: [[0, 80], [10, 40], [20, 20], [30, 10]].map(([x, y]) => ({ x, y, label: `(${x}, ${y})` })), xlabel: "t (s)", ylabel: "m (g)", step: { x: 5, y: 10 } })],
  ], [
    q("hard", S`Find the average rate of change of \(f(x)=x^3\) on \([1,3]\).`, num(13),
      "(27 − 1) ÷ 2.", [S`\(\frac{26}{2}\).`], S`\(13\)`),
    q("hard", S`The average rate of change of \(f(x)=x^2+2x\) on \([0,b]\) is 10. Find \(b\).`, num(8),
      "Simplify (b² + 2b)/b.", [S`\(b+2=10\).`], S`\(8\)`),
    q("hard", S`Find the average rate of change of \(y=3\sin x\) on \([0,\tfrac\pi2]\), to two decimal places.`, num(1.91, 0.01),
      "3 ÷ (π/2).", [S`\(\frac6\pi\approx1.91\).`], S`\(1.91\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the difference between change and rate of change?", "Change is Δy (e.g. 450 members). Rate of change divides by Δx (450 members ÷ 8 years = 56.25 members per year)."],
      ["Why is the average rate a secant slope?", "Both are (f(b) − f(a)) ÷ (b − a): rise over run between the two endpoints."],
      ["What does a negative average rate mean?", "The function's value at the end of the interval is lower than at the start: it decreased overall."],
      ["Can two different intervals give the same average rate?", "Yes — for a linear function every interval does; for others it can happen by coincidence."],
      ["What does an average rate hide?", "Everything in between: a ball's average velocity on [0, 4] is 0 even though it rose 20 m and fell back."],
    ],
    summary: [
      "Average rate on [a, b] = (f(b) − f(a)) ÷ (b − a).",
      "It is the slope of the secant through the endpoints.",
      "Constant only for linear functions.",
      "State units; interpret the sign.",
    ],
    next: "1.6 shrinks the interval to find the rate of change at a single instant.",
  }),
];
