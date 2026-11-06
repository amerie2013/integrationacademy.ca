// MCR3U 6.4 — Transformations of Sinusoidal Functions: roles of a, k, d, c in y = a sin(k(x − d)) + c and
// y = a cos(k(x − d)) + c; amplitude, period, phase shift, axis, domain and range from an equation
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";

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
      [S`<b>Read it.</b> The 3 multiplies every output of \(\sin x\). So it is a vertical stretch by 3.`,
        S`<b>What changes.</b> The amplitude becomes 3. Each height is 3 times as far from the axis. ${tv(["\\(x\\)", "\\(0^\\circ\\)", "\\(90^\\circ\\)", "\\(180^\\circ\\)", "\\(270^\\circ\\)", "\\(360^\\circ\\)"], ["\\(\\sin x\\)", "0", "1", "0", "\\(-1\\)", "0"], ["\\(3\\sin x\\)", "0", "3", "0", "\\(-3\\)", "0"])}`,
        S`<b>What stays.</b> The zeros and the period (\(360^\circ\)) do not change, because \(x\) is not altered.`,
        S`<b>Range.</b> \(-1\le\sin x\le1\), so multiplying by 3 gives \(-3\le y\le3\).`],
      S`vertical stretch by 3; range \(-3\le y\le3\)`,
      G([{ f: (x) => 3 * Math.sin(r(x)), color: "violet" }], { points: [{ x: 90, y: 3, label: "(90°, 3)", color: "amber" }, { x: 270, y: -3, label: "(270°, −3)", color: "amber" }], cap: "gray y = sin x, violet y = 3 sin x" })],
    ["Horizontal stretch and compression", S`Find the period of \(y=\sin2x\) and of \(y=\cos\frac x2\).`,
      [S`<b>Rule.</b> For \(y=\sin kx\), one cycle ends when \(kx=360^\circ\), so the period is \(\frac{360^\circ}{k}\).`,
        S`<b>First.</b> \(k=2\): \(\frac{360^\circ}2=180^\circ\). The input runs twice as fast, so the graph is compressed.`,
        S`<b>Second.</b> \(k=\frac12\): \(\frac{360^\circ}{1/2}=720^\circ\). The input runs at half speed, so the graph is stretched.`,
        S`<b>Check.</b> \(\sin2(180^\circ)=\sin360^\circ=0\), the end of one cycle ✓. \(\cos\frac{720^\circ}2=\cos360^\circ=1\) ✓`],
      S`\(180^\circ\) and \(720^\circ\)`,
      plane({ view: { xmin: 0, xmax: 720, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (x) => Math.sin(r(2 * x)), color: "violet" }, { f: (x) => Math.cos(r(x / 2)), color: "blue" }], points: [{ x: 180, y: 0, label: "(180°, 0)", color: "violet" }, { x: 720, y: 1, label: "(720°, 1)", color: "blue" }], step: { x: 90, y: 0.5 } }, "violet y = sin 2x, blue y = cos(x/2)")],
    ["Translations", S`Describe \(y=\sin(x-60^\circ)\) and \(y=\cos x+2\).`,
      [S`<b>First function.</b> Inside the bracket, \(x-60^\circ\) is a phase shift. The input must be \(60^\circ\) larger to give the same output, so the graph moves \(60^\circ\) right.`,
        S`<b>Key point.</b> The sine maximum at \((90^\circ,1)\) moves to \((150^\circ,1)\). Check: \(\sin(150^\circ-60^\circ)=\sin90^\circ=1\) ✓`,
        S`<b>Second function.</b> Outside, \(+2\) raises every output by 2, so the axis becomes \(y=2\).`,
        S`<b>Range.</b> \(-1\le\cos x\le1\), so \(1\le y\le3\).`],
      "60° right; 2 up (axis y = 2, range 1 ≤ y ≤ 3)",
      G([{ f: (x) => Math.sin(r(x - 60)), color: "violet" }, { f: (x) => Math.cos(r(x)) + 2, color: "blue" }], { view: { xmin: -90, xmax: 450, ymin: -2, ymax: 4 }, step: { x: 30, y: 0.5 }, points: [{ x: 150, y: 1, label: "max (150°, 1)" }, { x: 0, y: 3, label: "(0°, 3)", color: "blue" }], cap: "gray sin x, violet sin(x − 60°), blue cos x + 2" })],
    ["All four at once", S`State the properties of \(y=-2\cos(3(x+30^\circ))-1\).`,
      [S`<b>Match the form</b> \(y=a\cos(k(x-d))+c\): \(a=-2\), \(k=3\), \(d=-30^\circ\), \(c=-1\).`,
        S`<b>Amplitude.</b> \(|a|=2\). The minus sign is a reflection in the axis, so the curve starts at a minimum instead of a maximum.`,
        S`<b>Period.</b> \(\frac{360^\circ}3=120^\circ\).`,
        S`<b>Phase shift and axis.</b> \(30^\circ\) left, and axis \(y=-1\).`,
        S`<b>Range.</b> \(-1-2\le y\le-1+2\), so \(-3\le y\le1\).`,
        S`<b>Check.</b> At \(x=-30^\circ\): \(-2\cos0^\circ-1=-3\), the minimum ✓`],
      S`amplitude 2 (reflected), period \(120^\circ\), \(30^\circ\) left, axis \(y=-1\), range \(-3\le y\le1\)`,
      plane({ view: { xmin: -90, xmax: 240, ymin: -4, ymax: 2 }, curves: [{ f: (x) => -2 * Math.cos(r(3 * (x + 30))) - 1, color: "violet" }], lines: [{ m: 0, b: -1, color: "green", dash: true }], points: [{ x: -30, y: -3, label: "(−30°, −3)", color: "amber" }, { x: 30, y: 1, label: "(30°, 1)" }, { x: 90, y: -3, label: "(90°, −3)" }], step: { x: 30, y: 1 } })],
    ["Factor k first", S`Find the phase shift of \(y=\sin(2x-90^\circ)\).`,
      [S`<b>Why factor?</b> The form is \(\sin(k(x-d))\), where \(d\) is measured after \(k\) is taken out. Reading \(90^\circ\) directly would be wrong.`,
        S`<b>Factor.</b> \(2x-90^\circ=2(x-45^\circ)\). So \(k=2\) and \(d=45^\circ\).`,
        S`<b>Conclude.</b> The phase shift is \(45^\circ\) right.`,
        S`<b>Check.</b> The cycle starts where the inside is 0: \(2x-90^\circ=0\) gives \(x=45^\circ\) ✓. The figure shows the start of the cycle at \((45^\circ,0)\).`],
      "45° right",
      plane({ view: { xmin: -45, xmax: 315, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (x) => Math.sin(r(2 * x - 90)), color: "violet" }], points: [{ x: 45, y: 0, label: "(45°, 0)", color: "amber" }, { x: 90, y: 1, label: "(90°, 1)" }, { x: 225, y: 0, label: "(225°, 0)" }], step: { x: 45, y: 0.5 } })],
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
