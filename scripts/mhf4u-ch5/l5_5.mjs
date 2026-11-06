// MHF4U 5.5 — Trigonometric Models and Rates of Change (NEW): building sinusoidal models, solving for times, and
// average and instantaneous rates of change
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, hard, plane } from "./lib.mjs";
import { PI } from "./trigfig.mjs";

export const TITLE = "5.5 Trigonometric Models and Rates of Change";
export const ID = "6d4f0005-0001-4001-8001-000000000505";

const S = String.raw;
const lab = (x, y, label, color = "blue") => ({ x, y, label, color });
const M = (f, view, step, points = [], labels = {}, more = []) => plane({ view, curves: [{ f, a: view.xmin, b: view.xmax, color: "violet" }, ...more], points, step, ...labels });
export const blocks = () => [
  intro({
    icon: "🎡",
    title: "Trigonometric Models and Rates of Change",
    overview: S`Tides, Ferris wheels, daylight hours and springs all repeat. A sinusoidal model turns their behaviour into an equation: the axis is the average level, the amplitude is the size of the swing, and the period is the time for one cycle. Once you have a model you can find when something happens by solving an equation, and how fast it is changing by using a secant or a very short interval.`,
    goals: [
      "build a sinusoidal model from a description or a graph;",
      "interpret amplitude, period and axis in context;",
      "solve for the times when a condition is met;",
      "find average rates of change on an interval;",
      "estimate instantaneous rates of change, and say where they are greatest.",
    ],
    curriculum: "B2.7 (solve problems using trigonometric models), D1.4, D1.8 (rates of change in context)",
    prior: [
      [S`Period of \(\sin\left(\frac\pi6t\right)\)?`, S`\(12\).`],
      [S`Axis of a wave with max 8 and min 2?`, S`\(y=5\).`],
      [S`Average rate of \(f\) on \([a,b]\)?`, S`\(\frac{f(b)-f(a)}{b-a}\).`],
    ],
    words: [
      ["Model", "an equation describing a real situation", ""],
      ["Axis", "the average level", "mean water depth"],
      ["Average rate", "slope of a secant", ""],
      ["Instantaneous rate", "slope of the tangent", ""],
    ],
  }),

  section("📌 Building a model", S`
  ${table(["Quantity", "How to find it", "Ferris wheel: radius 15 m, centre 17 m, 60 s per turn"], [
    ["|a|", "(max − min)/2", "15"],
    ["c", "(max + min)/2", "17"],
    ["k", "2π/period", "π/30"],
    ["d", "time of a known point", "starts at the bottom: use −cos"],
  ])}
  ${M((t) => -15 * Math.cos((PI / 30) * t) + 17, { xmin: 0, xmax: 120, ymin: 0, ymax: 35 }, { x: 15, y: 5 }, [lab(30, 32, "(30, 32)")], { xlabel: "t (s)", ylabel: "h (m)" })}
  ${keyIdea(S`The rate of change of a sinusoid is greatest at the axis and 0 at each maximum and minimum. For \(y=a\sin(kt)+c\), the greatest rate is \(|a|k\).`)}`),

  section("📌 Explore", S`<p>Choose a data set and fit a sinusoid by adjusting the sliders. Decide on the axis and amplitude first, then the period, then the shift.</p>`),

  widget("modelLab", { dataset: "tide" }),

  section("📌 Rates on a wave", S`
  <p>Use a short interval to estimate an instantaneous rate: \(\frac{f(a+0.001)-f(a)}{0.001}\). Include units, and read the sign: positive means rising.</p>
  ${watchOut([
    "Use radians in the rate calculation; set the calculator accordingly.",
    "Convert times to the model's units before substituting.",
    "Choose sine or cosine using the start of the story.",
    "An answer outside the domain of the story is rejected.",
    "A model gives approximations; real data will not fit exactly.",
  ])}`),

  examples([
    ["A tide", S`Water depth is \(d(t)=3\sin\left(\dfrac\pi6t\right)+5\) m, with \(t\) in hours. Find the maximum depth, the period and when the depth is at least \(6.5\) m in the first 12 h.`,
      [S`<b>Maximum.</b> Axis plus amplitude: \(5+3=8\) m.`,
        S`<b>Period.</b> \(\dfrac{2\pi}{\pi/6}=12\) h.`,
        S`<b>Inequality.</b> \(3\sin\frac\pi6t+5\ge6.5\) gives \(\sin\frac\pi6t\ge\frac12\).`,
        S`<b>Angles.</b> Sine is at least \(\frac12\) from \(\frac\pi6\) to \(\frac{5\pi}6\): \(\frac\pi6\le\frac\pi6t\le\frac{5\pi}6\).`,
        S`<b>Solve.</b> Multiply by \(\frac6\pi\): \(1\le t\le5\).`,
        S`<b>Check.</b> \(d(3)=8\ge6.5\), and \(d(6)=5\lt6.5\) ✓`],
      S`8 m; 12 h; \(1\le t\le5\)`,
      M((t) => 3 * Math.sin((PI / 6) * t) + 5, { xmin: 0, xmax: 24, ymin: 0, ymax: 10 }, { x: 3, y: 2 }, [lab(1, 6.5, "(1, 6.5)"), lab(5, 6.5, "(5, 6.5)")], { xlabel: "t (h)", ylabel: "d (m)" }, [{ f: () => 6.5, color: "green" }])],
    ["A Ferris wheel", S`A wheel of radius 20 m has its centre 22 m above ground, and turns once every 80 s. A rider starts at the bottom. Write \(h(t)\), and find \(h(20)\).`,
      [S`<b>Parameters.</b> Amplitude is the radius, 20. The axis is the centre height, 22.`,
        S`<b>k.</b> \(k=\frac{2\pi}{80}=\frac\pi{40}\).`,
        S`<b>Starting point.</b> The rider starts at a min, and \(-\cos\) starts at a min: \(h(t)=-20\cos\left(\frac\pi{40}t\right)+22\).`,
        S`<b>Evaluate.</b> \(h(20)=-20\cos\frac\pi2+22=22\) m.`,
        S`<b>Check.</b> \(h(0)=2\) is the bottom, and 20 s is a quarter turn, level with the centre ✓`],
      S`\(h(t)=-20\cos\left(\frac\pi{40}t\right)+22\); 22 m`,
      M((t) => -20 * Math.cos((PI / 40) * t) + 22, { xmin: 0, xmax: 160, ymin: 0, ymax: 45 }, { x: 20, y: 5 }, [lab(20, 22, "(20, 22)")], { xlabel: "t (s)", ylabel: "h (m)" })],
    ["Average rate of change", S`For \(d(t)=3\sin\left(\dfrac\pi6t\right)+5\), find the average rate of change on \([0,3]\) and on \([3,6]\).`,
      [S`<b>Values.</b> \(d(0)=5\), \(d(3)=3\sin\frac\pi2+5=8\), \(d(6)=3\sin\pi+5=5\).`,
        S`<b>First.</b> \(\frac{8-5}{3-0}=1\) m/h.`,
        S`<b>Second.</b> \(\frac{5-8}{6-3}=-1\) m/h.`,
        S`<b>Meaning.</b> The tide rises on average for 3 h and then falls at the same rate. The curve is symmetric about the peak ✓`],
      S`\(1\) m/h and \(-1\) m/h`,
      M((t) => 3 * Math.sin((PI / 6) * t) + 5, { xmin: 0, xmax: 12, ymin: 0, ymax: 10 }, { x: 1, y: 2 }, [lab(0, 5, "(0, 5)"), lab(3, 8, "(3, 8)"), lab(6, 5, "(6, 5)")], { xlabel: "t (h)", ylabel: "d (m)", segs: [{ pts: [[0, 5], [3, 8]], color: "amber" }, { pts: [[3, 8], [6, 5]], color: "red" }] })],
    ["Instantaneous rate", S`Estimate how fast the tide \(d(t)\) is rising at \(t=0\) and at \(t=2\).`,
      [S`<b>Method.</b> Use a very short interval, \(h=0.001\).`,
        S`<b>At \(t=0\).</b> \(\dfrac{d(0.001)-d(0)}{0.001}\approx1.57\) m/h.`,
        S`<b>At \(t=2\).</b> \(\dfrac{d(2.001)-d(2)}{0.001}\approx0.79\) m/h.`,
        S`<b>Meaning.</b> The rate is greatest at the axis, \(t=0\). It shrinks towards the peak at \(t=3\) ✓`],
      S`about \(1.57\) m/h and \(0.79\) m/h`,
      M((t) => 3 * Math.sin((PI / 6) * t) + 5, { xmin: 0, xmax: 12, ymin: 0, ymax: 10 }, { x: 1, y: 2 }, [lab(0, 5, "t = 0"), lab(2, 3 * Math.sin(PI / 3) + 5, "t = 2")], { xlabel: "t (h)", ylabel: "d (m)" })],
    ["Daylight", S`Hours of daylight are \(L(n)=3.5\sin\left(\dfrac{2\pi}{365}(n-80)\right)+12\) on day \(n\). Find the longest day length and the day it occurs.`,
      [S`<b>Maximum.</b> Axis plus amplitude: \(12+3.5=15.5\) h.`,
        S`<b>When.</b> Sine is 1 when its input is \(\frac\pi2\): \(\frac{2\pi}{365}(n-80)=\frac\pi2\).`,
        S`<b>Solve.</b> \(n-80=\frac{365}4=91.25\), so \(n\approx171\).`,
        S`<b>Check.</b> A sine peaks a quarter period after its start: \(80+91.25\approx171\), which is about June 20 ✓`],
      S`15.5 h, near day 171`,
      M((n) => 3.5 * Math.sin(((2 * PI) / 365) * (n - 80)) + 12, { xmin: 0, xmax: 365, ymin: 6, ymax: 18 }, { x: 50, y: 2 }, [lab(171, 15.5, "(171, 15.5)")], { xlabel: "day", ylabel: "hours" })],
  ]),

  practice([
    q("max", S`\(h(t)=4\cos\left(\dfrac\pi5t\right)+9\). Find the maximum height.`, num(13),
      "c + |a|.", [S`\(9+4\).`], S`\(13\)`),
    q("period", S`Find the period of \(h(t)=4\cos\left(\dfrac\pi5t\right)+9\).`, num(10),
      "2π/k.", [S`\(\frac{2\pi}{\pi/5}\).`], S`\(10\)`),
    q("value", S`Evaluate \(h(5)\) for \(h(t)=4\cos\left(\dfrac\pi5t\right)+9\).`, num(5),
      "cos π = −1.", [S`\(-4+9\).`], S`\(5\)`),
    q("rate", S`Find the average rate of change of \(h(t)=4\cos\left(\dfrac\pi5t\right)+9\) on \([0,5]\).`, num(-1.6, 0.001),
      "(h(5) − h(0))/5.", [S`\(\frac{5-13}5\).`], S`\(-1.6\)`),
    q("build", S`A spring oscillates between 4 cm and 16 cm. What is its amplitude?`, num(6),
      "(max − min)/2.", [S`\(\frac{16-4}2\).`], S`\(6\)`),
  ]),

  ...hard([
    ["Time above a height", S`A wheel has \(h(t)=-12\cos\left(\dfrac\pi{30}t\right)+14\) m. For how long in one 60 s turn is a rider above 20 m?`,
      [S`\(-12\cos\frac\pi{30}t+14>20\Rightarrow\cos\frac\pi{30}t\lt-\frac12\).`, S`\(\frac{2\pi}3\lt\frac\pi{30}t\lt\frac{4\pi}3\Rightarrow20\lt t\lt40\).`],
      S`20 s`,
      M((t) => -12 * Math.cos((PI / 30) * t) + 14, { xmin: 0, xmax: 60, ymin: 0, ymax: 30 }, { x: 10, y: 5 }, [lab(20, 20, "(20, 20)"), lab(40, 20, "(40, 20)")], { xlabel: "t (s)", ylabel: "h (m)" }, [{ f: () => 20, color: "green" }])],
    ["Greatest rate", S`Find the greatest rate of change of \(y=8\sin\left(\dfrac\pi4t\right)+10\), and when it first occurs for \(t\ge0\). Check with a short interval.`,
      [S`Greatest at the axis going up: \(t=0\).`, S`Rate \(=|a|k=8\cdot\frac\pi4=2\pi\approx6.28\).`, S`Check: \(\frac{8\sin(\pi/4\cdot0.001)}{0.001}\approx6.28\).`],
      S`\(2\pi\approx6.28\) per unit time, at \(t=0\)`],
  ], [
    q("hard", S`A tide has a high of 11 m at \(t=2\) h and the next low of 3 m at \(t=8\) h. Find \(d(5)\).`, num(7),
      "t = 5 is midway: the axis.", [S`The axis is \(\frac{11+3}2\).`], S`\(7\)`),
    q("hard", S`For the same tide, what is \(k\)? (3 decimals)`, num(0.524, 0.002),
      "The period is 12 h.", [S`\(\frac{2\pi}{12}=\frac\pi6\).`], S`\(0.524\)`),
    q("hard", S`For \(y=5\cos(2t)\), estimate the rate of change at \(t=\dfrac\pi4\) (1 decimal).`, num(-10, 0.1),
      "At the axis, going down.", [S`\(|a|k=10\), with negative sign.`], S`\(-10\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I choose between sine and cosine?", "Cosine fits a story that starts at a max (or −cosine at a min); sine fits one that starts on the axis going up."],
      ["Why is the rate greatest at the axis?", "The curve is steepest there, and flat at the peaks."],
      ["What units do rates have?", "Output units per input unit: metres per hour, for example."],
      ["What if the data isn't a perfect wave?", "Fit the axis and amplitude from averages; use technology for regression."],
      ["Why are models only approximate?", "Real systems have noise and other effects; a sinusoid captures the main repeating pattern."],
    ],
    summary: [
      "Amplitude = (max − min)/2; axis = (max + min)/2; k = 2π/period.",
      "Solve an equation to find times.",
      "Average rate is a secant slope; instantaneous rate uses a short interval.",
      "The greatest rate occurs at the axis and equals |a|k.",
    ],
    next: "5.6 reviews the whole chapter.",
  }),
];
