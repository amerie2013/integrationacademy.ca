// MCR3U 6.4 — Transformations of Sinusoidal Functions: roles of a, k, d, c in y = a sin(k(x − d)) + c and
// y = a cos(k(x − d)) + c; amplitude, period, phase shift, axis, domain and range from an equation
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "6.4 Transformations of Sinusoidal Functions";
export const ID = "cbd68624-8f56-402e-99d2-8bd920810662";
const S = String.raw;
const r = (d) => (d * Math.PI) / 180;
const G = (curves, o = {}) => plane({ view: o.view ?? { xmin: -90, xmax: 720, ymin: -4, ymax: 4 }, curves: [{ f: (x) => Math.sin(r(x)), color: "gray" }, ...curves], lines: o.lines ?? [], points: o.points ?? [], step: o.step ?? { x: 90, y: 1 } }, o.cap ?? "");

export const blocks = () => [
  intro({
    icon: "🎛️",
    title: "Transformations of Sinusoidal Functions",
    overview: S`Every sinusoidal function can be written as \(y=a\sin(k(x-d))+c\) or \(y=a\cos(k(x-d))+c\). The four parameters do the same jobs as for any function you have transformed: \(a\) stretches vertically, \(k\) stretches horizontally, \(d\) shifts left or right, and \(c\) shifts up or down. For sinusoids they have special names — amplitude, period, phase shift and axis.`,
    goals: [
      "describe the effect of each of a, k, d and c on y = sin x and y = cos x;",
      "state the amplitude |a| and the period 360°/|k|;",
      "state the phase shift d and the axis y = c;",
      "find the domain, range, maximum and minimum from the equation;",
      "factor k out of the bracket before reading the phase shift.",
    ],
    curriculum: "D2.5 (determine the roles of the parameters a, k, d and c in functions of the form y = af(k(x − d)) + c, where f(x) = sin x or cos x, and describe these roles in terms of transformations), D2.6 (determine the amplitude, period, phase shift, domain and range of sinusoidal functions whose equations are given in the form f(x) = a sin(k(x − d)) + c or f(x) = a cos(k(x − d)) + c)",
    prior: [
      [S`How does \(y=(x-3)^2+1\) compare with \(y=x^2\)?`, "3 right, 1 up."],
      [S`What does \(y=f(2x)\) do to the graph of \(f\)?`, "Horizontal compression by a factor ½."],
      [S`What is the period of \(y=\sin x\)?`, "360°."],
    ],
    words: [
      ["Amplitude", "\\(|a|\\)", ""],
      ["Period", "\\(\\frac{360^\\circ}{|k|}\\)", ""],
      ["Phase shift", "\\(d\\): right if \\(d>0\\), left if \\(d<0\\)", ""],
      ["Axis", "\\(y=c\\); range \\(c-|a|\\le y\\le c+|a|\\)", ""],
    ],
  }),

  section("📌 What each parameter does", S`
  ${table(["Parameter", "Transformation", "Property"], [["a", "vertical stretch by |a|; reflection in the axis if a < 0", "amplitude |a|"], ["k", "horizontal stretch/compression by 1/|k|", "period 360°/|k|"], ["d", "horizontal translation", "phase shift d"], ["c", "vertical translation", "axis y = c"]])}
  ${G([{ f: (x) => 3 * Math.sin(r(x)), color: "violet" }, { f: (x) => Math.sin(r(2 * x)), color: "amber" }], { cap: "y = 3 sin x (violet, amplitude 3) and y = sin 2x (amber, period 180°) against y = sin x (grey)" })}
  ${keyIdea(S`Always write the bracket as \(k(x-d)\). In \(y=\sin(2x-60^\circ)\), factor first: \(\sin(2(x-30^\circ))\) — the phase shift is 30°, not 60°.`)}`),

  section("📌 Explore", S`<p>Move one slider at a time and predict before you look. Then try to make a graph with amplitude 2, period 180°, phase shift 45° right and axis y = 1.</p>`),

  widget("sinTransform", { fn: "sin", init: { a: 2, k: 1, d: 0, c: 0 } }),

  section("📌 Watch out", watchOut([
    "The period is 360° ÷ k — a larger k means a shorter period.",
    "In sin(x + 45°), d = −45°: the shift is LEFT.",
    "A negative a flips the graph, but the amplitude is still |a|.",
    "Factor k out before reading d.",
  ])),

  examples([
    ["Vertical stretch", S`Describe \(y=3\sin x\) and state its range.`,
      ["Vertical stretch by 3: amplitude 3."],
      S`range \(-3\le y\le3\)`],
    ["Horizontal stretch and compression", S`Find the period of \(y=\sin2x\) and of \(y=\cos\frac x2\).`,
      [S`\(\frac{360^\circ}2=180^\circ\) (compression).`, S`\(\frac{360^\circ}{1/2}=720^\circ\) (stretch).`],
      S`\(180^\circ\) and \(720^\circ\)`],
    ["Translations", S`Describe \(y=\sin(x-60^\circ)\) and \(y=\cos x+2\).`,
      ["The first is shifted 60° right.", "The second is shifted 2 up: axis y = 2, range 1 ≤ y ≤ 3."],
      "60° right; 2 up",
      G([{ f: (x) => Math.sin(r(x - 60)), color: "violet" }], { view: { xmin: -90, xmax: 450, ymin: -2, ymax: 2 }, step: { x: 30, y: 0.5 }, points: [{ x: 150, y: 1, label: "max (150°, 1)" }] })],
    ["All four at once", S`State the properties of \(y=-2\cos(3(x+30^\circ))-1\).`,
      [S`Amplitude 2 (reflected); period \(\frac{360^\circ}3=120^\circ\).`, S`Phase shift 30° left; axis \(y=-1\).`],
      S`range \(-3\le y\le1\)`],
    ["Factor k first", S`Find the phase shift of \(y=\sin(2x-90^\circ)\).`,
      [S`\(2x-90^\circ=2(x-45^\circ)\).`],
      "45° right"],
  ]),

  practice([
    q("amplitude", S`What is the amplitude of \(y=-5\sin x+2\)?`, num(5),
      "|a|.", [S`\(|-5|\).`], S`\(5\)`),
    q("period", S`What is the period of \(y=\cos4x\) (degrees)?`, num(90),
      "360° ÷ k.", [S`\(360\div4\).`], S`\(90^\circ\)`),
    q("phase", S`In \(y=\sin(x+45^\circ)\), what is the value of \(d\)?`, num(-45),
      "x − d = x + 45°.", [S`\(d=-45^\circ\): 45° left.`], S`\(-45\)`),
    q("max", S`What is the maximum value of \(y=4\sin x-1\)?`, num(3),
      "c + |a|.", [S`\(-1+4\).`], S`\(3\)`),
    q("period", S`What is the period of \(y=\sin\frac x3\)?`, choice(["1080°", "120°", "360°", "3°"], 0),
      "k = ⅓.", [S`\(360\div\frac13\).`], "1080°"),
  ]),

  ...hard([
    ["Factor, then read", S`State the amplitude, period, phase shift, axis and range of \(y=2\sin(3x-180^\circ)+5\).`,
      [S`\(3x-180^\circ=3(x-60^\circ)\).`, S`Amplitude 2, period 120°, phase shift 60° right, axis y = 5.`],
      S`range \(3\le y\le7\)`,
      plane({ view: { xmin: 0, xmax: 360, ymin: 0, ymax: 8 }, curves: [{ f: (x) => 2 * Math.sin(r(3 * x - 180)) + 5, color: "violet" }], lines: [{ m: 0, b: 5, color: "green", dash: true }], points: [{ x: 60, y: 5, label: "start (60°, 5)" }], step: { x: 30, y: 1 } })],
    ["Locating a maximum", S`For \(y=-0.5\cos(0.5(x-90^\circ))+3\), find all the properties and the first maximum to the right of \(x=90^\circ\).`,
      [S`Amplitude 0.5, period 720°, shift 90° right, axis y = 3, range \(2.5\le y\le3.5\).`, S`Because \(a<0\), the maximum occurs where \(\cos=-1\): \(0.5(x-90^\circ)=180^\circ\Rightarrow x=450^\circ\).`],
      S`max \((450^\circ,3.5)\)`],
  ], [
    q("hard", S`What is the period of \(y=\sin(5x+100^\circ)\)?`, num(72),
      "Only k matters for the period.", [S`\(360\div5\).`], S`\(72^\circ\)`),
    q("hard", S`What is the phase shift of \(y=\cos(4x-120^\circ)\) (degrees, right positive)?`, num(30),
      "Factor out 4.", [S`\(4(x-30^\circ)\).`], S`\(30^\circ\) right`),
    q("hard", S`What is the minimum value of \(y=-3\cos2x+7\)?`, num(4),
      "c − |a|.", [S`\(7-3\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["Why does a bigger k give a shorter period?", "The graph completes a cycle k times as fast, so each cycle is 360°/k wide."],
      ["How do I tell left from right?", "Write the bracket as (x − d): d positive means right, negative means left."],
      ["What if a is negative?", "The graph is reflected in its axis; the amplitude is still |a|."],
      ["Does c change the period?", "No — c only moves the graph up or down (the axis)."],
      ["Why factor k?", "The shift d is measured on x, and k multiplies everything inside the bracket."],
    ],
    summary: [
      "Amplitude |a|; period 360°/|k|.",
      "Phase shift d; axis y = c.",
      "Range c − |a| ≤ y ≤ c + |a|.",
      "Factor k before reading d.",
    ],
    next: "6.5 uses these transformations to sketch graphs by mapping key points.",
  }),
];
