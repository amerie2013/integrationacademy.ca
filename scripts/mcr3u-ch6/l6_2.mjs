// MCR3U 6.2 — Graphs of Sine and Cosine: from the unit circle to y = sin x and y = cos x, key properties,
// periodicity, the phase relation between them, solving from the graph
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "6.2 Graphs of Sine and Cosine";
export const ID = "c5473508-8315-46c6-9ac1-59c0b737c1f9";
const S = String.raw;
const r = (d) => (d * Math.PI) / 180;
const sinG = (more = {}) => plane({ view: { xmin: -90, xmax: 720, ymin: -1.6, ymax: 1.6 }, curves: [{ f: (x) => Math.sin(r(x)), color: "violet" }, ...(more.curves ?? [])], lines: more.lines ?? [], points: more.points ?? [], step: { x: 90, y: 0.5 } }, more.cap ?? "");

export const blocks = () => [
  intro({
    icon: "〰️",
    title: "Graphs of Sine and Cosine",
    overview: S`As a point travels around the unit circle, its y-coordinate is \(\sin x\) and its x-coordinate is \(\cos x\). Plotting these against the angle gives two smooth waves. In this lesson you will build the graphs of \(y=\sin x\) and \(y=\cos x\) from the unit circle, list their key properties, and use the graphs to find every angle with a given value.`,
    goals: [
      "build the graphs of y = sin x and y = cos x from the unit circle;",
      "state the period, amplitude, axis, domain, range, zeros and maximums;",
      "relate the two graphs by a horizontal shift of 90°;",
      "evaluate sin and cos of large or negative angles using the period;",
      "solve equations such as sin x = 0.5 over several cycles using the graph.",
    ],
    curriculum: "D2.3 (make connections between the sine ratio and the sine function and between the cosine ratio and the cosine function by graphing the relationship between angles from 0° to 360° and the corresponding sine ratios or cosine ratios, and defining this relationship as the function f(x) = sin x or f(x) = cos x), D2.4 (sketch the graphs of f(x) = sin x and f(x) = cos x for angle measures expressed in degrees, and determine and describe their key properties)",
    prior: [
      [S`What is \(\sin150^\circ\)?`, S`\(\frac12\).`],
      [S`What is \(\cos180^\circ\)?`, S`\(-1\).`],
      ["On the unit circle, what is the point at 90°?", "(0, 1)."],
    ],
    words: [
      ["Sinusoidal function", "a function whose graph has the shape of a sine wave", ""],
      ["Zero", "an x-value where the graph crosses the axis y = 0", ""],
      ["Phase shift", "a horizontal translation of a sinusoidal graph", ""],
      ["Periodicity", "\\(\\sin(x+360^\\circ)=\\sin x\\), \\(\\cos(x+360^\\circ)=\\cos x\\)", ""],
    ],
  }),

  section("📌 The two parent graphs", S`
  ${sinG({ curves: [{ f: (x) => Math.cos(r(x)), color: "amber" }], cap: "y = sin x (violet) and y = cos x (amber)" })}
  ${table(["Property", "y = sin x", "y = cos x"], [["Period", "360°", "360°"], ["Amplitude / axis", "1, y = 0", "1, y = 0"], ["Range", "\\(-1\\le y\\le1\\)", "\\(-1\\le y\\le1\\)"], ["Zeros (0°–360°)", "0°, 180°, 360°", "90°, 270°"], ["Maximum", "(90°, 1)", "(0°, 1), (360°, 1)"], ["Minimum", "(270°, −1)", "(180°, −1)"]])}
  ${keyIdea(S`The cosine graph is the sine graph shifted 90° to the left: \(\cos x=\sin(x+90^\circ)\). Both repeat every 360°, so \(\sin(x+360^\circ k)=\sin x\) for any integer \(k\).`)}`),

  section("📌 Explore", S`<p>Turn the angle past 360°. The red segment on the circle is the value being plotted: its height for sine, its horizontal position for cosine.</p>`),

  widget("unitWave", { fn: "sin" }),

  section("📌 Watch out", watchOut([
    "Sine starts at 0 going up; cosine starts at its maximum.",
    "The domain is all real numbers — angles can be larger than 360° or negative.",
    "A horizontal line y = k with −1 < k < 1 meets each full cycle twice.",
    "Label the x-axis in degrees every 90° so the key points land on gridlines.",
  ])),

  examples([
    ["A table of values", S`Complete a table of \(\sin x\) for \(x=0^\circ,30^\circ,\ldots,180^\circ\) and describe the pattern.`,
      [S`\(0,\ 0.5,\ 0.87,\ 1,\ 0.87,\ 0.5,\ 0\).`, "The values rise to 1 at 90° and fall symmetrically back to 0."],
      "symmetric about x = 90°"],
    ["Properties of y = sin x", "State the domain, range, period, amplitude, axis and the zeros of y = sin x between 0° and 720°.",
      [S`Domain \(\mathbb R\); range \(-1\le y\le1\); period 360°; amplitude 1; axis \(y=0\).`, "Zeros every 180°."],
      "zeros 0°, 180°, 360°, 540°, 720°"],
    ["Cosine as a shifted sine", S`Show that \(\cos0^\circ=\sin90^\circ\) and \(\cos90^\circ=\sin180^\circ\), and explain the pattern.`,
      [S`Both pairs are equal (1 and 0).`, S`Every point of the cosine graph appears on the sine graph 90° later: \(\cos x=\sin(x+90^\circ)\).`],
      "cosine = sine shifted 90° left"],
    ["Solving from the graph", S`Find every \(x\) from 0° to 720° with \(\sin x=0.5\).`,
      [S`In one cycle: \(30^\circ\) and \(150^\circ\).`, "Add 360° to each for the second cycle."],
      S`\(30^\circ,150^\circ,390^\circ,510^\circ\)`,
      sinG({ lines: [{ m: 0, b: 0.5, color: "amber", dash: true }], points: [30, 150, 390, 510].map((x) => ({ x, y: 0.5, label: `${x}°` })) })],
    ["Large and negative angles", S`Evaluate \(\sin750^\circ\) and \(\cos(-60^\circ)\).`,
      [S`\(750^\circ-720^\circ=30^\circ\): \(\sin30^\circ=0.5\).`, S`\(-60^\circ+360^\circ=300^\circ\): \(\cos300^\circ=0.5\).`],
      S`\(0.5\) and \(0.5\)`],
  ]),

  practice([
    q("value", S`Evaluate \(\sin270^\circ\).`, num(-1),
      "Bottom of the unit circle.", [S`The point \((0,-1)\).`], S`\(-1\)`),
    q("periodic", S`Evaluate \(\cos540^\circ\).`, num(-1),
      "Subtract 360°.", [S`\(\cos180^\circ\).`], S`\(-1\)`),
    q("max", S`Where does \(y=\cos x\) reach its maximum between 0° and 360°?`, choice(["at 0° and 360°", "at 90°", "at 180°", "at 270°"], 0),
      "Cosine starts at the top.", [S`\(\cos0^\circ=1\).`], "0° and 360°"),
    q("zeros", S`How many zeros does \(y=\sin x\) have from 0° to 720° inclusive?`, num(5),
      "Every 180°.", ["0°, 180°, 360°, 540°, 720°."], S`\(5\)`),
    q("value", S`Evaluate \(\sin405^\circ\) to 4 decimals.`, num(Math.sin(r(45)), 0.0001),
      "405° − 360°.", [S`\(\sin45^\circ\).`], S`\(\approx0.7071\)`),
  ]),

  ...hard([
    ["Where the graphs cross", S`Find where \(y=\sin x\) and \(y=\cos x\) intersect for \(0^\circ\le x\le360^\circ\), and the y-values there.`,
      [S`\(\sin x=\cos x\Rightarrow\tan x=1\).`, S`\(x=45^\circ\) (both \(\frac1{\sqrt2}\)) and \(x=225^\circ\) (both \(-\frac1{\sqrt2}\)).`],
      S`\((45^\circ,\frac1{\sqrt2})\), \((225^\circ,-\frac1{\sqrt2})\)`,
      plane({ view: { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (x) => Math.sin(r(x)), color: "violet" }, { f: (x) => Math.cos(r(x)), color: "amber" }], points: [{ x: 45, y: Math.SQRT1_2, label: "45°" }, { x: 225, y: -Math.SQRT1_2, label: "225°" }], step: { x: 45, y: 0.5 } })],
    ["A water wheel", "A water wheel of radius 1 m has its centre at the water surface. A nail starts at the 3 o'clock position and turns counterclockwise. How far below the surface is it after turning 210°, and through what angles (0°–360°) is it under water?",
      [S`Its height is \(\sin\theta\): \(\sin210^\circ=-0.5\).`, S`Under water when \(\sin\theta<0\): \(180^\circ<\theta<360^\circ\).`],
      "0.5 m below; from 180° to 360°"],
  ], [
    q("hard", S`How many solutions does \(\cos x=0.3\) have for \(0^\circ\le x\le720^\circ\)?`, num(4),
      "Two per cycle.", ["Two cycles, two crossings each."], S`\(4\)`),
    q("hard", S`Evaluate \(\cos1110^\circ\) to 4 decimals.`, num(Math.cos(r(30)), 0.0001),
      "Remove three full turns.", [S`\(1110-1080=30\).`], S`\(\approx0.8660\)`),
    q("hard", S`Find the smallest positive \(x\) with \(\sin x=-1\).`, num(270),
      "Bottom of the circle.", [S`\((0,-1)\) is at 270°.`], S`\(270^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is the period 360°?", "After one full turn the point is back where it started, so the values repeat."],
      ["Why is the range −1 to 1?", "The unit circle has radius 1, so x and y can never be larger than 1 in size."],
      ["How are sine and cosine related?", "cos x = sin(x + 90°): the cosine wave is the sine wave moved 90° left."],
      ["How do I solve sin x = k over two cycles?", "Find the two solutions in 0°–360° (CAST or the graph), then add 360°."],
      ["What does a negative angle mean?", "Turning clockwise; use the period to find an equivalent angle between 0° and 360°."],
    ],
    summary: [
      "y = sin x: starts at (0, 0), max (90°, 1).",
      "y = cos x: starts at (0, 1), min (180°, −1).",
      "Period 360°, amplitude 1, axis y = 0.",
      "cos x = sin(x + 90°).",
    ],
    next: "6.3 interprets sinusoidal graphs from real situations.",
  }),
];
