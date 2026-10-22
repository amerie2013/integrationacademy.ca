// IB AA SL 12.5 — Graphs of Sine, Cosine and Tangent: the graphs from the unit circle, period, amplitude, range, zeros, maxima and minima, symmetry, the tangent graph and its asymptotes, reading values from graphs
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "12.5 Graphs of Sine, Cosine and Tangent";
export const ID = "1baa0012-0001-4001-8001-000000001205";
const S = String.raw;
const PI = Math.PI;
const P = (x, y, label, color = "red") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "〰️",
    title: "Graphs of Sine, Cosine and Tangent",
    overview: S`Plot the y-coordinate of the unit-circle point against the angle and you get the sine wave; the x-coordinate gives the cosine wave. Both repeat every \(2\pi\) and stay between −1 and 1. The tangent graph repeats every \(\pi\) and has vertical asymptotes where cosine is zero. In this lesson you will sketch these graphs, identify their key features and use them to read values and count solutions.`,
    goals: [
      S`sketch \(y=\sin x\), \(y=\cos x\) and \(y=\tan x\) for x in radians and degrees;`,
      "state period, amplitude, range, zeros, maxima and minima;",
      "describe the symmetry of each graph;",
      S`relate \(\cos x\) to \(\sin x\) by a translation;`,
      "use graphs to count solutions and compare functions.",
    ],
    curriculum: "SL 3.7 (the circular functions sin x, cos x, tan x: amplitude, periodic nature, and their graphs)",
    prior: [
      [S`\(\sin\frac{\pi}{2}\), \(\cos\pi\)?`, "1, −1."],
      [S`Where is \(\tan x\) not defined in \([0,2\pi]\)?`, S`\(\frac{\pi}{2},\frac{3\pi}{2}\).`],
      ["What does y = f(x − h) do to a graph?", "Moves it h to the right."],
    ],
    words: [
      ["Period", "length of one complete cycle", S`\(2\pi\) for sin`],
      ["Amplitude", "half the distance from maximum to minimum", "1 for sin"],
      ["Principal axis", "the horizontal line through the middle", S`\(y=0\)`],
      ["Asymptote", "a line the graph approaches", S`\(x=\frac{\pi}{2}\) for tan`],
      ["Periodic function", "repeats its values at regular intervals", ""],
    ],
  }),

  section("📌 Sine and cosine", S`
  ${plane({ view: { xmin: -PI, xmax: 2 * PI, ymin: -1.6, ymax: 1.6 }, step: { x: PI / 2, y: 0.5 }, curves: [{ f: Math.sin, color: "violet" }], points: [P(PI / 2, 1, "max (π/2, 1)"), P((3 * PI) / 2, -1, "min (3π/2, −1)", "blue"), P(PI, 0, "(π, 0)", "green")] }, "y = sin x: period 2π, amplitude 1, zeros at nπ")}
  ${plane({ view: { xmin: -PI, xmax: 2 * PI, ymin: -1.6, ymax: 1.6 }, step: { x: PI / 2, y: 0.5 }, curves: [{ f: Math.cos, color: "amber" }, { f: Math.sin, color: "gray" }], points: [P(0, 1, "max (0, 1)"), P(PI, -1, "min (π, −1)", "blue")] }, "y = cos x (amber) is y = sin x (grey) moved π/2 to the left")}
  ${table(["Feature", "y = sin x", "y = cos x"], [
    ["period", S`\(2\pi\)`, S`\(2\pi\)`], ["amplitude", "1", "1"], ["range", "[−1, 1]", "[−1, 1]"],
    ["zeros", S`\(n\pi\)`, S`\(\frac{\pi}{2}+n\pi\)`], ["maximum 1 at", S`\(\frac{\pi}{2}+2n\pi\)`, S`\(2n\pi\)`], ["symmetry", "odd: sin(−x) = −sin x", "even: cos(−x) = cos x"],
  ])}
  ${keyIdea("sin and cos are waves of period 2π and amplitude 1; cos x = sin(x + π/2).")}`),

  section("📌 The tangent graph", S`
  <p>\(\tan x=\frac{\sin x}{\cos x}\) is zero where \(\sin x=0\) and has vertical asymptotes where \(\cos x=0\). It repeats every π and takes every real value.</p>
  ${plane({ view: { xmin: -PI, xmax: 2 * PI, ymin: -4, ymax: 4 }, step: { x: PI / 2, y: 1 }, curves: [{ f: Math.tan, a: -PI / 2 + 0.02, b: PI / 2 - 0.02, color: "violet" }, { f: Math.tan, a: PI / 2 + 0.02, b: (3 * PI) / 2 - 0.02, color: "violet" }, { f: Math.tan, a: (3 * PI) / 2 + 0.02, b: 2 * PI, color: "violet" }, { f: Math.tan, a: -PI, b: -PI / 2 - 0.02, color: "violet" }], vlines: [{ x: -PI / 2, color: "red", dash: true }, { x: PI / 2, color: "red", dash: true }, { x: (3 * PI) / 2, color: "red", dash: true }], points: [P(PI / 4, 1, "(π/4, 1)")] }, "y = tan x: period π, asymptotes x = π/2 + nπ")}
  <p>In degrees the same graphs have period 360° (sin, cos) and 180° (tan).</p>
  ${plane({ view: { xmin: 0, xmax: 360, ymin: -1.6, ymax: 1.6 }, step: { x: 45, y: 0.5 }, curves: [{ f: (x) => Math.sin((x * PI) / 180), color: "violet" }, { f: (x) => Math.cos((x * PI) / 180), color: "amber" }], points: [P(45, Math.SQRT1_2, "45°", "green"), P(225, -Math.SQRT1_2, "225°", "green")] }, "In degrees: sin and cos cross at 45° and 225°")}
  ${watchOut([
    "Label the x-axis in multiples of π/2 (or 90°) to make sketches accurate.",
    "tan has no amplitude and no maximum or minimum.",
    "Do not join the tan branches across an asymptote.",
    "Check whether the question uses degrees or radians.",
  ])}`),

  section("📌 Explore", S`<p>Switch between sin, cos and tan. Compare their periods, ranges, zeros and asymptotes.</p>`),

  widget("ibTrigGraph", { init: 2 }),

  examples([
    ["Level 1 · Read a graph", S`Use the graph of \(y=\cos x\) to find all x in \([0,2\pi]\) with \(\cos x=0\).`,
      [S`The graph crosses the axis at \(\frac{\pi}{2}\) and \(\frac{3\pi}{2}\).`],
      S`\(\frac{\pi}{2},\ \frac{3\pi}{2}\)`],
    ["Level 1 · Features", S`State the maximum, minimum and range of \(y=\sin x\) on \([0,\pi]\).`,
      [S`It rises from 0 to 1 at \(\frac{\pi}{2}\), back to 0.`],
      "max 1, min 0, range [0, 1]"],
    ["Level 2 · Count solutions", S`How many solutions does \(\sin x=0.8\) have in \([-2\pi,2\pi]\)?`,
      [S`Two per period; the interval covers two periods.`],
      "4",
      plane({ view: { xmin: -2 * PI, xmax: 2 * PI, ymin: -1.5, ymax: 1.5 }, step: { x: PI / 2, y: 0.5 }, curves: [{ f: Math.sin, color: "violet" }], lines: [{ m: 0, b: 0.8, color: "amber", dash: true }], points: [P(Math.asin(0.8), 0.8, ""), P(PI - Math.asin(0.8), 0.8, ""), P(Math.asin(0.8) - 2 * PI, 0.8, ""), P(-PI - Math.asin(0.8), 0.8, "")] }, "Four intersections")],
    ["Level 2 · Compare", S`For which x in \([0,2\pi]\) is \(\sin x>\cos x\)?`,
      [S`They are equal at \(\frac{\pi}{4}\) and \(\frac{5\pi}{4}\); sin is above between them.`],
      S`\(\frac{\pi}{4}<x<\frac{5\pi}{4}\)`],
    ["Level 3 · Symmetry", S`Given \(\sin a=0.35\) for some a in \((0,\frac{\pi}{2})\), use symmetry of the graph to write three other values of x in \([-2\pi,2\pi]\) with \(\sin x=0.35\).`,
      [S`Symmetric about \(x=\frac{\pi}{2}\): \(\pi-a\). Period \(2\pi\): \(a-2\pi\), \(\pi-a-2\pi=-\pi-a\).`],
      S`\(\pi-a,\ a-2\pi,\ -\pi-a\)`],
  ]),

  practice([
    q("Level 1 · period", S`What is the period of \(y=\tan x\) in radians (3 d.p.)?`, num(PI, 0.001),
      "π.", ["π."], S`\(\pi\)`),
    q("Level 1 · value", S`From the graph, \(\sin\frac{3\pi}{2}\) equals:`, num(-1),
      "Minimum.", ["−1."], S`\(-1\)`),
    q("Level 2 · count", S`How many solutions has \(\cos x=-0.5\) in \([0,4\pi]\)?`, num(4),
      "Two per period.", ["4."], S`\(4\)`),
    q("Level 2 · asymptote", S`Which is an asymptote of \(y=\tan x\)?`, choice([S`\(x=\frac{3\pi}{2}\)`, S`\(x=\pi\)`, S`\(x=0\)`, S`\(y=0\)`], 0),
      "cos x = 0.", [S`\(\cos\frac{3\pi}{2}=0\).`], S`\(x=\frac{3\pi}{2}\)`),
    q("Level 2 · range", S`The range of \(y=\cos x\) on \(\left[0,\frac{2\pi}{3}\right]\) is \([k,1]\). Find k.`, num(-0.5, 0.001),
      "cos 2π/3.", ["−½."], S`\(-\frac12\)`),
  ]),

  ...hard([
    ["Intersection count with a line", S`How many solutions does \(\sin x=\frac{x}{5}\) have? Use the graphs.`,
      [S`The line \(y=\frac x5\) leaves the band \(-1\le y\le1\) when \(|x|>5\).`, S`Within \(-5\le x\le5\) the line meets the sine wave at 0 and at one point in each of \((\frac{\pi}{2},\pi)\) and its mirror image.`],
      "3",
      plane({ view: { xmin: -6.5, xmax: 6.5, ymin: -1.6, ymax: 1.6 }, step: { x: PI / 2, y: 0.5 }, curves: [{ f: Math.sin, color: "violet" }], lines: [{ m: 0.2, b: 0, color: "amber" }], points: [P(0, 0, "0"), P(2.596, 0.519, "≈ 2.60"), P(-2.596, -0.519, "≈ −2.60")] }, "Three intersections")],
    ["Odd and even", S`Show that \(f(x)=x\sin x\) is even and \(g(x)=\sin x\cos x\) is odd.`,
      [S`\(f(-x)=(-x)\sin(-x)=(-x)(-\sin x)=x\sin x=f(x)\).`, S`\(g(-x)=\sin(-x)\cos(-x)=-\sin x\cos x=-g(x)\).`],
      "shown"],
  ], [
    q("Level 3 · inequality", S`Find the total length of the intervals in \([0,2\pi]\) where \(\sin x>\frac12\) (3 d.p.).`, num((2 * PI) / 3, 0.001),
      "π/6 < x < 5π/6.", [S`\(\frac{5\pi}{6}-\frac{\pi}{6}\).`], S`\(\frac{2\pi}{3}\)`),
    q("Level 3 · count", S`How many solutions has \(\tan x=3\) in \([-\pi,3\pi]\)?`, num(4),
      "One per period of length π.", ["4."], S`\(4\)`),
    q("Level 3 · symmetry", S`If \(\cos b=0.2\) with b in \((0,\pi)\), then \(\cos(2\pi-b)\) equals:`, num(0.2, 0.001),
      "Even/periodic.", ["0.2."], S`\(0.2\)`),
  ]),

  wrapUp({
    qas: [
      ["How do the graphs come from the unit circle?", "sin x is the y-coordinate and cos x the x-coordinate as the point goes round."],
      ["What is the period of each?", "sin and cos: 2π (360°); tan: π (180°)."],
      ["Where are tan's asymptotes?", "Where cos x = 0: x = π/2 + nπ."],
      ["How are sin and cos related?", "cos x = sin(x + π/2): a horizontal translation."],
      ["How do graphs help with equations?", "Each intersection with y = k is a solution; you can count them before solving."],
    ],
    summary: [
      "sin, cos: period 2π, amplitude 1, range [−1, 1].",
      "tan: period π, asymptotes x = π/2 + nπ.",
      "sin is odd, cos is even.",
      "Intersections with y = k give solutions.",
    ],
    next: "12.6 transforms these graphs and uses them to model periodic situations.",
  }),
];
