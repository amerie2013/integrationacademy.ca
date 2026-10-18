// MCR3U 6.8 — Chapter 6 Review: periodic properties, parent graphs, interpreting, transformations, key points,
// equations and models
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "6.8 Chapter 6 Review";
export const ID = "5c3e0001-0001-4001-8001-000000000608";
const S = String.raw;
const r = (d) => (d * Math.PI) / 180, dg = (x) => (x * 180) / Math.PI;
const f = (v, k = 2) => (Math.round(v * 10 ** k) / 10 ** k).toFixed(k);
const boat = (t) => 1.5 * Math.cos(r(72 * t)) + 4;
const lowW = (2 * (180 - dg(Math.acos((3 - 4) / 1.5)))) / 72;

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Chapter 6 Review",
    overview: S`This review connects the chapter: periodic properties, the graphs of sine and cosine, interpreting real graphs, the parameters a, k, d and c, sketching with key points, writing equations and solving problems with models. The examples combine skills; the practice and hard-level problems are at chapter-test level.`,
    goals: [
      "read period, axis and amplitude from graphs, tables and descriptions;",
      "state the properties of y = a sin(k(x − d)) + c and y = a cos(k(x − d)) + c;",
      "sketch a transformed sinusoid from its key points;",
      "write an equation from a graph or a description;",
      "use a model to predict and to find when it is above or below a level.",
    ],
    curriculum: "D2–D3 (connecting graphs and equations of sinusoidal functions; solving problems involving sinusoidal functions)",
    prior: [
      ["Max 12, min 4: amplitude and axis?", "4 and y = 8."],
      [S`Period of \(y=\cos3x\)?`, "120°."],
      [S`Phase shift of \(y=\sin(2x+60^\circ)\)?`, "30° left."],
    ],
    words: [
      ["6.1–6.3", "periodic properties, parent graphs, interpreting", ""],
      ["6.4–6.5", "parameters and key points", ""],
      ["6.6", "equations from graphs and properties", ""],
      ["6.7", "models and levels", ""],
    ],
  }),

  section("📌 The chapter on one page", S`
  ${table(["Skill", "Key fact"], [["Properties", "axis \\(\\frac{\\max+\\min}2\\), amplitude \\(\\frac{\\max-\\min}2\\), period = one cycle"], ["Parameters", "amplitude |a|, period 360°/|k|, phase shift d, axis y = c"], ["Sketching", "\\((x,y)\\to(\\frac xk+d,\\ ay+c)\\) for five key points"], ["Equations", "a, c from max/min; k from the period; d from a max (cos) or rising crossing (sin)"], ["Models", "k = 360/period; solve for the angle, then the time"]])}
  ${keyIdea("Most questions in this chapter start the same way: find the maximum, the minimum and the period. Everything else follows from those three numbers and one starting point.")}`),

  section("📌 Explore", S`<p>Use the explorer to check equations from the examples and problems below.</p>`),

  widget("fitSinusoid", { target: { fn: "cos", a: 2, k: 3, d: 30, c: -1 } }),

  examples([
    ["Properties from a table", S`A buoy's height (m) every 2 s is \(1.2,\ 2.0,\ 2.8,\ 2.0,\ 1.2,\ 2.0,\ 2.8\). State the period, axis and amplitude, and predict the height at 30 s.`,
      [S`The pattern repeats every 8 s; axis 2.0 m, amplitude 0.8 m.`, S`\(30=3\times8+6\): same as \(t=6\), height 2.0 m.`],
      "period 8 s; 2.0 m at 30 s"],
    ["Reading an equation", S`State the amplitude, period, phase shift, axis and range of \(y=-4\sin(3x+90^\circ)+2\).`,
      [S`Factor: \(3(x+30^\circ)\).`, S`Amplitude 4 (reflected), period 120°, 30° left, axis y = 2.`],
      S`range \(-2\le y\le6\)`],
    ["Key points", S`Find the key points of one cycle of \(y=2\cos(0.5(x+60^\circ))-1\).`,
      [S`x: \(2x-60\) gives \(-60^\circ,120^\circ,300^\circ,480^\circ,660^\circ\).`, S`y: \(2y-1\) gives \(1,-1,-3,-1,1\).`],
      "period 720°, range −3 ≤ y ≤ 1",
      plane({ view: { xmin: -90, xmax: 720, ymin: -4, ymax: 2 }, curves: [{ f: (x) => 2 * Math.cos(r(0.5 * (x + 60))) - 1, color: "violet" }], points: [[-60, 1], [120, -1], [300, -3], [480, -1], [660, 1]].map(([x, y]) => ({ x, y })), lines: [{ m: 0, b: -1, color: "green", dash: true }], step: { x: 90, y: 1 } })],
    ["An equation from a graph", "A graph has maximum (30°, 1) and the next minimum (90°, −3). Write a cosine equation.",
      [S`\(a=2\), \(c=-1\), period 120°: \(k=3\), \(d=30^\circ\).`],
      S`\(y=2\cos(3(x-30^\circ))-1\)`],
    ["A model with a level", S`A boat ramp's water depth is \(D=1.5\cos(72t)+4\) (m, t in hours). For how long in each cycle is the depth below 3 m?`,
      [S`\(1.5\cos\theta+4<3\Rightarrow\cos\theta<-\frac23\Rightarrow\theta\) between \(${f(dg(Math.acos(-2 / 3)))}^\circ\) and \(${f(360 - dg(Math.acos(-2 / 3)))}^\circ\).`, S`Divide the width by 72.`],
      S`\(\approx${f(lowW)}\) h`],
  ]),

  practice([
    q("amplitude", "A periodic graph has max 3.5 and min −0.5. What is its amplitude?", num(2),
      "(max − min)/2.", [S`\(\frac{4}{2}\).`], S`\(2\)`),
    q("period", S`What is the period of \(y=3\cos(6x)-2\)?`, num(60),
      "360 ÷ 6.", [S`\(60^\circ\).`], S`\(60^\circ\)`),
    q("phase", S`What is the phase shift of \(y=\sin(3x-45^\circ)\) (degrees, right positive)?`, num(15),
      "Factor 3.", [S`\(3(x-15^\circ)\).`], S`\(15^\circ\)`),
    q("range", S`What is the range of \(y=-0.5\sin x+4\)?`, choice([S`\(3.5\le y\le4.5\)`, S`\(-0.5\le y\le4\)`, S`\(3\le y\le5\)`, S`\(4\le y\le4.5\)`], 0),
      "4 ± 0.5.", ["Axis 4, amplitude 0.5."], S`\(3.5\le y\le4.5\)`),
    q("model", "A wheel has radius 6 m, hub 8 m and turns once every 30 s; riders board at the bottom. What is k in h = −6 cos(kt) + 8?", num(12),
      "360 ÷ 30.", [S`\(12\).`], S`\(12\)`),
  ]),

  ...hard([
    ["Two forms of one model", "A sinusoid has a maximum of 9 at x = 50° and the next minimum of 1 at x = 140°. Write a cosine equation and a sine equation.",
      [S`\(a=4\), \(c=5\), period 180°, \(k=2\).`, S`Cosine: \(d=50^\circ\). Sine: rising crossing a quarter period (45°) before the max: \(d=5^\circ\).`],
      S`\(y=4\cos(2(x-50^\circ))+5=4\sin(2(x-5^\circ))+5\)`,
      plane({ view: { xmin: -45, xmax: 360, ymin: 0, ymax: 10 }, curves: [{ f: (x) => 4 * Math.cos(r(2 * (x - 50))) + 5, color: "violet" }], points: [{ x: 50, y: 9, label: "(50°, 9)" }, { x: 140, y: 1, label: "(140°, 1)" }, { x: 5, y: 5, label: "(5°, 5)" }], step: { x: 45, y: 1 } })],
    ["A complete model", "Hours of daylight in a town vary from 9 h (day 355) to 15.4 h (day 172), with a 365-day period. Write a cosine model and use it to find the daylight on day 60.",
      [S`\(a=3.2\), \(c=12.2\), \(k=\frac{360}{365}\), \(d=172\).`, S`\(L(60)=3.2\cos\left(\frac{360}{365}(60-172)\right)+12.2\).`],
      S`\(\approx${f(3.2 * Math.cos(r((360 / 365) * (60 - 172))) + 12.2)}\) h`],
  ], [
    q("hard", S`For \(y=3\sin(2(x-30^\circ))+1\), at what x between 0° and 180° is the first maximum?`, num(75),
      "Max of sine at a quarter period after the start.", [S`\(30+\frac{180}4\).`], S`\(75^\circ\)`),
    q("hard", S`A sinusoid has period 90° and passes through a maximum at x = 20°. What is the next minimum's x-coordinate?`, num(65),
      "Half a period later.", [S`\(20+45\).`], S`\(65^\circ\)`),
    q("hard", "A Ferris wheel takes 48 s per turn, radius 10 m, hub 12 m, boarding at the bottom. For how long per turn is a rider above 17 m (2 decimals)?", num(16, 0.01),
      "−10 cos(7.5t) + 12 ≥ 17 → cos ≤ −0.5.", [S`Angles 120° to 240°: \(\frac{120}{7.5}\).`], S`\(16\) s`),
  ]),

  wrapUp({
    qas: [
      ["What are the most common errors?", "Using k as the period, forgetting to factor k, and reading the amplitude as the max."],
      ["How do I start any model question?", "Find max, min, period and one starting point."],
      ["How do I check a sketch?", "Check the axis, the range and one key point in the equation."],
      ["Why can two different equations be right?", "Sine and cosine differ only by a shift of a quarter period."],
      ["How should I study?", "Redo each lesson's hard-level problems, then check with the explorers."],
    ],
    summary: [
      "Max, min, period, start point.",
      "|a|, 360°/|k|, d, c.",
      "Key points: (x/k + d, ay + c).",
      "Models: solve for the angle, then the time.",
    ],
    next: "Chapter 7 studies discrete functions: sequences and series.",
  }),
];
