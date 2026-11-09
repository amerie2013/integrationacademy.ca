// MCF3M 6.4 — Horizontal Translations of the Sine Function: y = sin(x − d), phase shift, combining with a and c:
// y = a sin(x − d) + c; mapping (x, y) → (x + d, ay + c); equation from a graph; a wheel boarding at the bottom.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "../lib.mjs";
import { SG, sinF, P } from "./sfig.mjs";
const S = String.raw;

export const TITLE = "6.4 Horizontal Translations of the Sine Function";
const V = (xmin, xmax, ymin, ymax, ys = 1) => ({ view: { xmin, xmax, ymin, ymax }, step: { x: 90, y: ys } });

export const blocks = () => [
  intro({
    icon: "↔️",
    title: "Horizontal Translations of the Sine Function",
    overview: S`Two Ferris-wheel riders on the same wheel follow the same wave — one is just a little behind the other. Sliding a wave left or right is a <b>horizontal translation</b>, also called a <b>phase shift</b>. In \(y=\sin(x-d)\) the wave moves \(d\) units to the right (left if \(d<0\)). Together with the vertical changes from 6.3, \(y=a\sin(x-d)+c\) can match any sine wave of period \(360^\circ\).`,
    goals: [
      "describe the effect of d in y = sin(x − d) as a horizontal translation (phase shift);",
      "map key points with (x, y) → (x + d, ay + c);",
      "sketch y = a sin(x − d) + c and state its properties;",
      "write an equation from a graph using the position of a maximum;",
      "use a phase shift to model a wheel that starts at the bottom.",
    ],
    curriculum: "C2.5 (determine the effect of d in y = sin(x − d) and describe it as a horizontal translation), C2.6 (sketch graphs of y = a sin(x − d) + c by applying transformations), C3.2 (identify sinusoidal functions arising from real-world applications)",
    prior: [
      [S`What does \(y=f(x-3)\) do to the graph of \(y=f(x)\)?`, S`Shifts it \(3\) right.`],
      [S`State the amplitude and axis of \(y=-2\sin x+1\).`, S`\(2\); \(y=1\).`],
      [S`Where is the maximum of \(y=\sin x\) on \(0^\circ\)–\(360^\circ\)?`, S`\((90,\,1)\).`],
    ],
    words: [
      ["Horizontal translation", "sliding the graph left or right", "y = sin(x − 60°)"],
      ["Phase shift", "the horizontal translation d of a sinusoid", "60° right"],
      ["y = sin(x − d)", "d > 0: right; d < 0: left", "sin(x + 45°): 45° left"],
      ["General form", "y = a sin(x − d) + c", "amplitude |a|, shift d, axis y = c"],
      ["Mapping rule", "(x, y) → (x + d, ay + c)", "(90, 1) → (90 + d, a + c)"],
    ],
  }),

  section("📌 Sliding the wave", S`
  ${SG([{ f: sinF(1, 60), color: "violet" }, { f: sinF(1, -45), color: "green" }], { ...V(-90, 450, -1.5, 1.5, 0.5), cap: "gray: y = sin x · violet: y = sin(x − 60°), 60° right · green: y = sin(x + 45°), 45° left" })}
  <p>In \(y=\sin(x-60^\circ)\), the \(y\)-value that \(\sin x\) had at \(x=90^\circ\) now appears at \(x=150^\circ\): you need \(x-60=90\). Everything happens \(60^\circ\) later, so the graph moves right.</p>
  ${table(["Equation", "Shift", "Key points"], [
    ["\\(y=\\sin(x-60^\\circ)\\)", "60° right", "(60, 0), (150, 1), (240, 0), (330, −1), (420, 0)"],
    ["\\(y=\\sin(x+45^\\circ)\\)", "45° left", "(−45, 0), (45, 1), (135, 0), (225, −1), (315, 0)"],
    ["\\(y=a\\sin(x-d)+c\\)", "d right", "(x, y) → (x + d, ay + c)"],
  ])}
  ${keyIdea(S`The sign inside is the opposite of the direction: \(x-d\) moves RIGHT by \(d\), \(x+d\) moves LEFT. The amplitude, axis and period do not change with \(d\).`)}`),

  widget("keyPointMapper", { fn: "sin", init: { a: 1, k: 1, d: 60, c: 0 } }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "y = sin(x − 30°) moves RIGHT 30°, not left.",
    "y = sin(x + 30°) has d = −30°.",
    "Add d to the x-values; multiply and add for the y-values.",
    "The phase shift moves the maximum from 90° to 90° + d.",
    "Shifting by 360° gives the same graph, so many values of d can work; use the one asked for.",
  ])}`),

  examples([
    ["Shift right", S`Sketch \(y=\sin(x-60^\circ)\) for \(0^\circ\le x\le420^\circ\). Give the maximum and minimum points and the zeros.`,
      [S`<b>Map.</b> \((x,y)\to(x+60,\,y)\).`,
        S`<b>Key points.</b> \((60,0)\), \((150,1)\), \((240,0)\), \((330,-1)\), \((420,0)\).`,
        S`<b>Max and min.</b> Max \((150,\,1)\), min \((330,\,-1)\).`,
        S`<b>Zeros.</b> \(60^\circ\), \(240^\circ\), \(420^\circ\). Check: \(\sin(150-60)=\sin90^\circ=1\) ✓`],
      S`max (150, 1), min (330, −1), zeros 60°, 240°, 420°`,
      SG([{ f: sinF(1, 60), color: "violet" }], { ...V(0, 450, -1.5, 1.5, 0.5), points: [P(150, 1), P(330, -1, null, "red"), P(60, 0, "60°"), P(240, 0, "240°")] })],

    ["Shift left", S`Sketch \(y=\sin(x+45^\circ)\) and find \(y\) at \(x=0^\circ\).`,
      [S`<b>Rewrite.</b> \(x+45=x-(-45)\), so \(d=-45\): \(45^\circ\) left.`,
        S`<b>Key points.</b> \((-45,0)\), \((45,1)\), \((135,0)\), \((225,-1)\), \((315,0)\).`,
        S`<b>At \(x=0\).</b> \(\sin45^\circ\approx0.71\).`,
        S`<b>Check.</b> The max moved from \(90^\circ\) to \(45^\circ\), \(45^\circ\) earlier ✓`],
      S`max (45, 1), min (225, −1); y(0) ≈ 0.71`,
      SG([{ f: sinF(1, -45), color: "violet" }], { ...V(-90, 360, -1.5, 1.5, 0.5), points: [P(45, 1), P(225, -1, null, "red"), P(0, 0.71, "(0, 0.71)", "green")] })],

    ["All three transformations", S`Sketch \(y=2\sin(x-30^\circ)+1\) and state the amplitude, phase shift, axis, maximum and minimum points, and range.`,
      [S`<b>Read the equation.</b> \(a=2\), \(d=30\), \(c=1\): amplitude \(2\), \(30^\circ\) right, axis \(y=1\).`,
        S`<b>Map.</b> \((x,y)\to(x+30,\,2y+1)\): \((30,1)\), \((120,3)\), \((210,1)\), \((300,-1)\), \((390,1)\).`,
        S`<b>Max and min.</b> \((120,\,3)\) and \((300,\,-1)\).`,
        S`<b>Range.</b> \(-1\le y\le3\). Check: \(2\sin(120-30)+1=3\) ✓`],
      S`amplitude 2, 30° right, axis y = 1, max (120, 3), min (300, −1), range −1 ≤ y ≤ 3`,
      SG([{ f: sinF(2, 30, 1), color: "violet" }], { ...V(0, 420, -2, 4), lines: [{ m: 0, b: 1, color: "green", dash: true, label: "y = 1" }], points: [P(120, 3), P(300, -1, null, "red")] })],

    ["Equation from a graph", S`A sine wave has a maximum at \((150,\,5)\) and the next minimum at \((330,\,-1)\). Write it as \(y=a\sin(x-d)+c\) with \(a>0\).`,
      [S`<b>Axis and amplitude.</b> \(c=\frac{5+(-1)}2=2\), \(a=\frac{5-(-1)}2=3\).`,
        S`<b>Phase shift.</b> \(\sin x\) peaks at \(90^\circ\); this wave peaks at \(150^\circ\): \(d=150-90=60\).`,
        S`<b>Equation.</b> \(y=3\sin(x-60^\circ)+2\).`,
        S`<b>Check the minimum.</b> \(3\sin(330-60)+2=3\sin270^\circ+2=-1\) ✓`],
      S`y = 3 sin(x − 60°) + 2`,
      SG([{ f: sinF(3, 60, 2), color: "violet" }], { ...V(0, 420, -2, 6), lines: [{ m: 0, b: 2, color: "green", dash: true, label: "y = 2" }], points: [P(150, 5), P(330, -1, null, "red")] })],

    ["A wheel that starts at the bottom", S`A Ferris wheel has radius \(8\) m and hub height \(10\) m. A rider boards at the bottom. Explain why \(h=8\sin(x-90^\circ)+10\) models the height after turning \(x\) degrees, and find the height after \(150^\circ\).`,
      [S`<b>Size and centre.</b> Amplitude \(8\) (radius), axis \(h=10\) (hub).`,
        S`<b>Start.</b> At \(x=0\): \(8\sin(-90^\circ)+10=-8+10=2\) m — the bottom ✓`,
        S`<b>Top.</b> The max is at \(90+90=180^\circ\): half a turn later, \(18\) m ✓`,
        S`<b>After \(150^\circ\).</b> \(8\sin60^\circ+10\approx16.93\) m.`],
      S`h(0) = 2 m (bottom), h(180) = 18 m (top), h(150) ≈ 16.93 m`,
      SG([{ f: sinF(8, 90, 10), color: "violet" }], { base: false, ...V(0, 720, 0, 20, 2), lines: [{ m: 0, b: 10, color: "green", dash: true, label: "hub 10 m" }], points: [P(0, 2), P(180, 18), P(150, 16.93, "(150, 16.93)", "red")], xlabel: "x (°)", ylabel: "h (m)" })],
  ]),

  practice([
    q("max", S`Find the \(x\)-coordinate of the maximum of \(y=\sin(x-40^\circ)\) in \(0^\circ\le x\le360^\circ\).`, num(130), "90° + 40°.", [S`\(130^\circ\).`], S`\(130\)`),
    q("zero", S`Find the first positive zero of \(y=\sin(x+30^\circ)\).`, num(150), "Zeros at −30°, 150°, 330°.", [S`\(180-30=150^\circ\).`], S`\(150\)`),
    q("d", S`Write \(y=\sin(x+75^\circ)\) as \(y=\sin(x-d)\). Find \(d\).`, num(-75), "x + 75 = x − (−75).", [S`\(d=-75\): \(75^\circ\) left.`], S`\(-75\)`),
    q("maxv", S`Find the maximum value of \(y=3\sin(x-20^\circ)-1\).`, num(2), "c + |a|.", [S`\(-1+3=2\).`], S`\(2\)`),
    q("which", S`Which equation is \(y=\sin x\) moved \(50^\circ\) right?`, choice(["y = sin(x − 50°)", "y = sin(x + 50°)", "y = sin x − 50", "y = sin x + 50"], 0), "Opposite sign inside.", [S`\(x-50\) moves right.`], S`y = sin(x − 50°)`),
  ]),

  ...hard([
    ["Half a turn is a reflection", S`Use key points to show that \(y=\sin(x-180^\circ)\) has the same graph as \(y=-\sin x\).`,
      [S`<b>Shift right 180°.</b> \((0,0)\to(180,0)\), \((90,1)\to(270,1)\), \((180,0)\to(360,0)\), \((270,-1)\to(450,-1)\); one period back gives \((90,-1)\).`,
        S`<b>Reflect.</b> \(y=-\sin x\): \((0,0),(90,-1),(180,0),(270,1),(360,0)\).`,
        S`<b>Compare.</b> Both have max \(1\) at \(270^\circ\), min \(-1\) at \(90^\circ\), zeros at \(0,180,360\): the same graph.`],
      S`sin(x − 180°) = −sin x`,
      SG([{ f: sinF(1, 180), color: "violet" }], { ...V(0, 360, -1.5, 1.5, 0.5), points: [P(90, -1, null, "red"), P(270, 1)] })],
    ["High on the wheel", S`For the rider \(h=8\sin(x-90^\circ)+10\), find the angles \(0^\circ\le x\le360^\circ\) where the rider is at least \(14\) m up.`,
      [S`<b>Boundary.</b> \(8\sin(x-90)+10=14\Rightarrow\sin(x-90)=0.5\).`,
        S`<b>Solve for the angle inside.</b> \(x-90=30\) or \(150\).`,
        S`<b>Back to x.</b> \(x=120^\circ\) or \(240^\circ\); the top (\(180^\circ\)) lies between, so \(120^\circ\le x\le240^\circ\).`],
      S`120° ≤ x ≤ 240°`,
      SG([{ f: sinF(8, 90, 10), color: "violet" }], { base: false, ...V(0, 360, 0, 20, 2), lines: [{ m: 0, b: 14, color: "green", dash: true, label: "h = 14" }], points: [P(120, 14, "120°"), P(240, 14, "240°")] })],
  ], [
    q("hard", S`Find the \(x\)-coordinate of the minimum of \(y=2\sin(x-45^\circ)+3\) in \(0^\circ\le x\le360^\circ\).`, num(315), "270° + 45°.", [S`\(315^\circ\).`], S`\(315\)`),
    q("hard", S`Find \(y\) at \(x=0\) for \(y=\sin(x+120^\circ)\) (two decimals).`, num(0.87, 0.011), "sin 120°.", [S`\(\sin120^\circ\approx0.87\).`], S`\(0.87\)`),
    q("hard", S`Where in \(0^\circ\le x\le360^\circ\) is the maximum of \(y=-\sin(x-30^\circ)+2\)?`, num(300), "Reflection: max where sin is −1.", [S`\(x-30=270\Rightarrow x=300^\circ\).`], S`\(300\)`),
    q("hard", S`Find the smallest positive \(d\) so that \(y=\sin(x-d)\) has a maximum at \(x=400^\circ\).`, num(310), "90 + d = 400.", [S`\(d=310^\circ\).`], S`\(310\)`),
    q("hard", S`Find \(y\) at \(x=90^\circ\) for \(y=4\sin(x-60^\circ)+1\).`, num(3), "sin 30° = 0.5.", [S`\(4(0.5)+1=3\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["What does d do in y = sin(x − d)?", "It moves the wave d units right (left if d < 0)."],
      ["Why does x − 60° move the graph right?", "You need x − 60 = 90 to reach the peak, so the peak happens at x = 150°: 60° later."],
      ["What is the mapping rule?", "(x, y) → (x + d, ay + c)."],
      ["How do I find d from a graph?", "d = (x of a maximum) − 90° when a > 0."],
      ["How do I model a wheel boarding at the bottom?", "h = r sin(x − 90°) + hub: the minimum is at x = 0."],
    ],
    summary: [
      "y = a sin(x − d) + c: amplitude |a|, phase shift d, axis y = c.",
      "x − d: right; x + d: left.",
      "(x, y) → (x + d, ay + c).",
      "d does not change amplitude, axis or period.",
    ],
    next: "6.5 uses sinusoidal functions to model real data.",
  }),
];
