// IB AA SL 12.6 — Transformations and Periodic Models: y = a sin(b(x − c)) + d and the cosine version, amplitude, period, phase shift and principal axis, finding the equation from a graph or data, modelling periodic phenomena
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "12.6 Transformations and Periodic Models";
export const ID = "1baa0012-0001-4001-8001-000000001206";
const S = String.raw;
const PI = Math.PI;
const P = (x, y, label, color = "red") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🎡",
    title: "Transformations and Periodic Models",
    overview: S`Tides, daylight hours, Ferris wheels and sound waves all repeat. Each can be modelled by stretching and shifting a sine or cosine curve: \(y=a\sin(b(x-c))+d\). The parameters have physical meanings — amplitude, period, phase shift and mean level. In this lesson you will read these from equations, find equations from graphs and data, and solve modelling problems.`,
    goals: [
      S`identify amplitude \(|a|\), period \(\frac{2\pi}{b}\), horizontal shift c and principal axis \(y=d\);`,
      "sketch transformed sine and cosine graphs;",
      "find the equation of a sinusoid from its graph;",
      "build a model from maximum and minimum values and times;",
      "use a model to predict values and solve for times.",
    ],
    curriculum: "SL 3.7 (composite functions of the form f(x) = a sin(b(x + c)) + d; transformations; real-life contexts)",
    prior: [
      [S`Period of \(y=\sin x\)?`, S`\(2\pi\).`],
      ["What does y = f(x) + 3 do?", "Moves the graph up 3."],
      ["What does y = 2f(x) do?", "Vertical stretch, factor 2."],
    ],
    words: [
      ["Amplitude", S`\(|a|=\frac{\max-\min}{2}\)`, ""],
      ["Period", S`\(\frac{2\pi}{b}\) (or \(\frac{360^\circ}{b}\))`, ""],
      ["Principal axis", S`\(y=d=\frac{\max+\min}{2}\)`, ""],
      ["Phase shift", "horizontal translation c", ""],
      ["Sinusoid", "a transformed sine or cosine curve", ""],
    ],
  }),

  section("📌 The four parameters", S`
  ${plane({ view: { xmin: -PI / 2, xmax: 2 * PI, ymin: -2, ymax: 6 }, step: { x: PI / 2, y: 1 }, curves: [{ f: Math.sin, color: "gray" }, { f: (x) => 3 * Math.sin(2 * x) + 2, color: "violet" }], lines: [{ m: 0, b: 2, color: "amber", dash: true }], points: [P(PI / 4, 5, "max (π/4, 5)"), P((3 * PI) / 4, -1, "min (3π/4, −1)", "blue")] }, "y = 3 sin 2x + 2: amplitude 3, period π, principal axis y = 2 (grey: sin x)")}
  ${table(["Parameter", "Effect", "Example y = 3 sin 2x + 2"], [["a", "vertical stretch: amplitude |a|", "3"], ["b", S`horizontal stretch: period \(\frac{2\pi}{b}\)`, S`\(\pi\)`], ["c", "horizontal shift", "0"], ["d", "vertical shift: principal axis", "y = 2"]])}
  ${plane({ view: { xmin: -PI / 2, xmax: 2 * PI, ymin: -3, ymax: 3 }, step: { x: PI / 2, y: 1 }, curves: [{ f: Math.cos, color: "gray" }, { f: (x) => 2 * Math.cos(x - PI / 3), color: "violet" }], points: [P(PI / 3, 2, "max (π/3, 2)")] }, "y = 2 cos(x − π/3): the maximum moves from 0 to π/3")}
  ${keyIdea("Amplitude = (max − min)/2; axis d = (max + min)/2; period = 2π/b; the shift c locates a key point.")}`),

  section("📌 Equations from graphs and data", S`
  <p>A graph has maximum 7 at \(x=1\) and next minimum −1 at \(x=4\). Then \(d=3\), \(a=4\), half a period is 3 so the period is 6 and \(b=\frac{2\pi}{6}=\frac{\pi}{3}\). A cosine starts at a maximum, so \(c=1\): \(y=4\cos\left(\frac{\pi}{3}(x-1)\right)+3\).</p>
  ${plane({ view: { xmin: -1, xmax: 9, ymin: -2, ymax: 8 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 4 * Math.cos((PI / 3) * (x - 1)) + 3, color: "violet" }], lines: [{ m: 0, b: 3, color: "amber", dash: true }], points: [P(1, 7, "(1, 7)"), P(4, -1, "(4, −1)", "blue"), P(7, 7, "(7, 7)")] }, "y = 4 cos(π/3 (x − 1)) + 3")}
  <p><strong>Model:</strong> the water depth in a harbour is 9.5 m at high tide (03:00) and 2.5 m at low tide (09:15). Amplitude 3.5, mean 6, period 12.5 h: \(D(t)=3.5\cos\left(\frac{2\pi}{12.5}(t-3)\right)+6\).</p>
  ${plane({ view: { xmin: 0, xmax: 24, ymin: 0, ymax: 11 }, step: { x: 3, y: 1 }, curves: [{ f: (t) => 3.5 * Math.cos(((2 * PI) / 12.5) * (t - 3)) + 6, color: "violet" }], lines: [{ m: 0, b: 6, color: "amber", dash: true }], points: [P(3, 9.5, "high 03:00"), P(9.25, 2.5, "low 09:15", "blue")], xlabel: "t (h)", ylabel: "depth (m)" }, "A tide model over one day")}
  ${watchOut([
    "Period = 2π/b, so b = 2π/period — not the other way round.",
    "In degree mode, period = 360°/b.",
    "A cosine model starts at a maximum; a negative cosine starts at a minimum; a sine model starts on the axis going up.",
    "Write y = a sin(b(x − c)) + d with b factored out before reading c.",
  ])}`),

  section("📌 Explore", S`<p>Change a, b, c and d for sine and cosine. Watch the amplitude, period, shift and principal axis in the readout.</p>`),

  widget("ibSinusoid", { init: [1.5, 3, 0, -1, 1] }),

  examples([
    ["Level 1 · Read parameters", S`State the amplitude, period and principal axis of \(y=5\sin(3x)-1\).`,
      [S`\(|a|=5\), \(\frac{2\pi}{3}\), \(y=-1\).`],
      S`\(5\); \(\frac{2\pi}{3}\); \(y=-1\)`],
    ["Level 1 · Max and min", S`Find the maximum and minimum values of \(y=2.5\cos\left(\frac{x}{2}\right)+4\) and its period.`,
      [S`\(4\pm2.5\); \(\frac{2\pi}{1/2}\).`],
      S`max \(6.5\), min \(1.5\); period \(4\pi\)`],
    ["Level 2 · From a graph", "A sine graph passes through (0, 1) going up, reaches a maximum of 4 at x = π/4, and has period π. Find its equation.",
      [S`Axis \(d=1\), amplitude 3, \(b=2\).`, S`Starts on the axis going up: no shift.`],
      S`\(y=3\sin2x+1\)`,
      plane({ view: { xmin: -PI / 4, xmax: 2 * PI, ymin: -3, ymax: 5 }, step: { x: PI / 4, y: 1 }, curves: [{ f: (x) => 3 * Math.sin(2 * x) + 1, color: "violet" }], points: [P(0, 1, "(0, 1)"), P(PI / 4, 4, "(π/4, 4)")] })],
    ["Level 2 · Degrees model", "Daylight in a city varies from 15.8 h (day 172) to 8.6 h (day 355). Write a cosine model with t in days (period 365).",
      [S`\(a=3.6\), \(d=12.2\), \(b=\frac{2\pi}{365}\), maximum at \(t=172\).`],
      S`\(L(t)=3.6\cos\left(\frac{2\pi}{365}(t-172)\right)+12.2\)`],
    ["Level 3 · Solve with the model", S`For the tide \(D(t)=3.5\cos\left(\frac{2\pi}{12.5}(t-3)\right)+6\), find the first time after 03:00 when the depth falls to 4 m.`,
      [S`\(\cos\left(\frac{2\pi}{12.5}(t-3)\right)=-\frac47\).`, S`\(\frac{2\pi}{12.5}(t-3)=\cos^{-1}\left(-\frac47\right)\approx2.179\Rightarrow t\approx3+4.335\).`],
      S`\(t\approx7.34\) (about 07:20)`],
  ]),

  practice([
    q("Level 1 · amplitude", S`The amplitude of \(y=-4\cos x+2\) is:`, num(4),
      "|a|.", ["4."], S`\(4\)`),
    q("Level 1 · period", S`The period of \(y=\sin\left(\frac{\pi x}{6}\right)\) is:`, num(12),
      "2π ÷ π/6.", ["12."], S`\(12\)`),
    q("Level 2 · axis", S`A sinusoid has maximum 13 and minimum 5. Its principal axis is y = ?`, num(9),
      "(13 + 5)/2.", ["9."], S`\(y=9\)`),
    q("Level 2 · b", S`A sinusoid has period 8. Find b (3 d.p.).`, num(PI / 4, 0.001),
      "2π/8.", [S`\(\frac{\pi}{4}\).`], S`\(\frac{\pi}{4}\)`),
    q("Level 2 · shift", S`The graph of \(y=\sin\left(x-\frac{\pi}{6}\right)\) is the graph of \(y=\sin x\) moved:`, choice([S`\(\frac{\pi}{6}\) right`, S`\(\frac{\pi}{6}\) left`, S`\(\frac{\pi}{6}\) up`, S`\(\frac{\pi}{6}\) down`], 0),
      "x − c moves right.", ["Right."], S`\(\frac{\pi}{6}\) right`),
  ]),

  ...hard([
    ["Ferris wheel", "A Ferris wheel of diameter 50 m has its centre 30 m above the ground and turns once every 8 minutes. A rider boards at the lowest point at t = 0. Write h(t) and find for how long in each turn the rider is above 45 m.",
      [S`\(h(t)=-25\cos\left(\frac{\pi}{4}t\right)+30\).`, S`\(h>45\iff\cos\left(\frac{\pi t}{4}\right)<-0.6\iff2.214<\frac{\pi t}{4}<4.069\).`, S`\(2.819<t<5.181\): about 2.36 minutes.`],
      S`\(h(t)=30-25\cos\frac{\pi t}{4}\); \(\approx2.36\) min`,
      plane({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 60 }, step: { x: 1, y: 10 }, curves: [{ f: (t) => 30 - 25 * Math.cos((PI * t) / 4), color: "violet" }], lines: [{ m: 0, b: 45, color: "amber", dash: true }], points: [P(2.819, 45, "2.82"), P(5.181, 45, "5.18")], xlabel: "t (min)", ylabel: "h (m)" }, "Above 45 m between t ≈ 2.82 and t ≈ 5.18")],
    ["Sine versus cosine", S`Show that \(y=2\sin\left(x+\frac{\pi}{2}\right)\) and \(y=2\cos x\) are the same function.`,
      [S`Shifting sine left by \(\frac{\pi}{2}\) gives cosine: \(\sin\left(x+\frac{\pi}{2}\right)=\cos x\).`, "Both have amplitude 2, period 2π and a maximum at x = 0."],
      "the same graph"],
  ], [
    q("Level 3 · model", S`A spring's height is \(h(t)=12+3\sin(4\pi t)\) cm. How many full oscillations occur in 5 seconds?`, num(10),
      "Period ½ s.", ["5 ÷ ½."], S`\(10\)`),
    q("Level 3 · from max/min", S`A sinusoid has a maximum at (2, 9) and the next minimum at (5, 1). Find b (3 d.p.).`, num(PI / 3, 0.001),
      "Half-period 3, period 6.", [S`\(\frac{2\pi}{6}\).`], S`\(\frac{\pi}{3}\)`),
    q("Level 3 · first time", S`For \(y=4\sin\left(\frac{\pi}{6}x\right)+10\), find the smallest positive x with y = 12.`, num(1),
      "sin(πx/6) = ½.", [S`\(\frac{\pi x}{6}=\frac{\pi}{6}\).`], S`\(1\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I read the period?", "Period = 2π/b (360°/b in degrees)."],
      ["How do I find a and d from data?", "a = (max − min)/2 and d = (max + min)/2."],
      ["Sine or cosine model?", "Cosine if you know when the maximum occurs; sine if you know an upward crossing of the axis."],
      ["What does c do?", "Moves the graph c units right (for x − c)."],
      ["How do I answer 'for how long' questions?", "Solve for the two crossing times in a period and subtract."],
    ],
    summary: [
      "y = a sin(b(x − c)) + d: amplitude |a|, period 2π/b, shift c, axis y = d.",
      "Use max, min and their times to build a model.",
      "Solve model equations with the methods of 12.4.",
    ],
    next: "12.7 reviews the chapter.",
  }),
];
