// MCF3M 6.6 — Chapter 6 Review: periodic properties, y = sin x, y = a sin(x − d) + c, sinusoidal models.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard } from "../lib.mjs";
import { SG, sd, cd, sinF, repeat, P } from "./sfig.mjs";
const S = String.raw;

export const TITLE = "6.6 Chapter 6 Review";
const saw = repeat([[0, 1], [3, 7], [5, 1]], 5, 4);
const wheel = (r, hub, T) => (t) => hub - r * cd((360 * t) / T);

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 6 Review",
    overview: S`Chapter 6 started with any repeating pattern and narrowed down to the sine wave. You can now read a periodic graph (period, axis, amplitude), graph \(y=\sin x\), transform it to \(y=a\sin(x-d)+c\), and use sinusoidal models for wheels, tides, daylight and springs. This review mixes all of these; every example asks you to connect a graph, an equation and a situation.`,
    goals: [
      "find period, max, min, axis and amplitude of periodic graphs;",
      "use key properties and symmetry of y = sin x;",
      "graph and describe y = a sin(x − d) + c;",
      "write equations from graphs;",
      "solve problems with sinusoidal models.",
    ],
    curriculum: "C2.1–C2.6, C3.1–C3.6 (chapter 6 review)",
    prior: [
      [S`Axis and amplitude from max \(M\) and min \(m\)?`, S`\(y=\frac{M+m}2\); \(\frac{M-m}2\).`],
      [S`Key points of \(y=\sin x\)?`, S`\((0,0),(90,1),(180,0),(270,-1),(360,0)\).`],
      [S`Mapping rule for \(y=a\sin(x-d)+c\)?`, S`\((x,y)\to(x+d,\,ay+c)\).`],
    ],
    words: [
      ["Period", "length of one cycle", "360° for sin x"],
      ["Amplitude", "|a| = (max − min)/2", "radius of a wheel"],
      ["Axis", "y = c = (max + min)/2", "hub height"],
      ["Phase shift", "d: right if positive", "y = sin(x − 60°)"],
      ["Sinusoidal model", "a sine-shaped periodic function of time", "tides"],
    ],
  }),

  section("📌 Summary", S`
  ${table(["Lesson", "Key idea"], [
    ["6.1", "periodic: f(x + p) = f(x); axis (max + min)/2; amplitude (max − min)/2"],
    ["6.2", "sin x = y/r; y = sin x has period 360°, range −1 ≤ y ≤ 1"],
    ["6.3", "y = a sin x + c: amplitude |a|, axis y = c, a < 0 reflects"],
    ["6.4", "y = sin(x − d): d right; (x, y) → (x + d, ay + c)"],
    ["6.5", "models: radius ↔ amplitude, hub ↔ axis, time per turn ↔ period"],
  ])}
  ${keyIdea(S`For any sine wave, find the axis and amplitude from the max and min first; then find the phase shift from where a maximum is (\(d=x_{\max}-90^\circ\) when \(a>0\)).`)}`),

  widget("fitSinusoid", { target: { fn: "sin", a: 3, k: 1, d: 45, c: 2 } }),

  examples([
    ["Reading a periodic graph", S`A pattern rises from \(1\) to \(7\) in \(3\) s, falls back to \(1\) in \(2\) s, and repeats. Find the period, the axis and the amplitude, and \(f(23)\).`,
      [S`<b>Period.</b> \(3+2=5\) s.`,
        S`<b>Axis and amplitude.</b> \(y=\frac{7+1}2=4\); \(\frac{7-1}2=3\).`,
        S`<b>Remove periods.</b> \(23=4\times5+3\Rightarrow f(23)=f(3)\).`,
        S`<b>Read.</b> \(t=3\) is the top of the rise: \(f(23)=7\).`],
      S`period 5 s, axis y = 4, amplitude 3, f(23) = 7`,
      SG([], { base: false, segs: [saw], view: { xmin: 0, xmax: 20, ymin: 0, ymax: 8 }, step: { x: 1, y: 1 }, lines: [{ m: 0, b: 4, color: "green", dash: true, label: "y = 4" }], xlabel: "t (s)" })],

    ["Sine of any angle", S`Find \(\sin240^\circ\) and solve \(\sin x=-\frac{\sqrt3}2\) for \(0^\circ\le x\le360^\circ\).`,
      [S`<b>Related angle.</b> \(240=180+60\), below the axis: \(\sin240^\circ=-\sin60^\circ\approx-0.87\).`,
        S`<b>Equation.</b> \(\sin x\approx-0.87\) needs related angle \(60^\circ\) where sine is negative.`,
        S`<b>Solutions.</b> \(180+60=240^\circ\) and \(360-60=300^\circ\).`,
        S`<b>Check.</b> Both points lie on the trough of the wave, symmetric about \(270^\circ\) ✓`],
      S`sin 240° ≈ −0.87; x = 240° or 300°`,
      SG([{ f: sd, color: "violet" }], { base: false, view: { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, step: { x: 60, y: 0.5 }, lines: [{ m: 0, b: -0.87, color: "green", dash: true }], points: [P(240, -0.87, "240°"), P(300, -0.87, "300°")] })],

    ["Graph a transformed wave", S`Graph \(y=-3\sin(x-45^\circ)+2\) for \(45^\circ\le x\le405^\circ\). State the max and min points and the range.`,
      [S`<b>Map.</b> \((x,y)\to(x+45,\,-3y+2)\).`,
        S`<b>Key points.</b> \((45,2)\), \((135,-1)\), \((225,2)\), \((315,5)\), \((405,2)\).`,
        S`<b>Max and min.</b> Max \((315,\,5)\); min \((135,\,-1)\) (reflection swaps them).`,
        S`<b>Range.</b> \(-1\le y\le5\).`],
      S`max (315, 5), min (135, −1), range −1 ≤ y ≤ 5`,
      SG([{ f: sinF(-3, 45, 2), color: "violet" }], { view: { xmin: 0, xmax: 420, ymin: -2, ymax: 6 }, step: { x: 45, y: 1 }, lines: [{ m: 0, b: 2, color: "green", dash: true, label: "y = 2" }], points: [P(135, -1, null, "red"), P(315, 5)] })],

    ["Equation from a graph", S`A wave has a minimum at \((20,\,-4)\) and the next maximum at \((200,\,6)\). Write it as \(y=a\sin(x-d)+c\) with \(a>0\).`,
      [S`<b>Axis and amplitude.</b> \(c=\frac{6+(-4)}2=1\), \(a=\frac{6-(-4)}2=5\).`,
        S`<b>Shift.</b> With \(a>0\), the max of \(\sin\) at \(90^\circ\) moves to \(200^\circ\): \(d=110\).`,
        S`<b>Equation.</b> \(y=5\sin(x-110^\circ)+1\).`,
        S`<b>Check the minimum.</b> At \(x=20\): \(5\sin(-90^\circ)+1=-4\) ✓`],
      S`y = 5 sin(x − 110°) + 1`,
      SG([{ f: sinF(5, 110, 1), color: "violet" }], { base: false, view: { xmin: 0, xmax: 400, ymin: -5, ymax: 7 }, step: { x: 40, y: 1 }, points: [P(20, -4, null, "red"), P(200, 6)] })],

    ["A model problem", S`A wheel of radius \(6\) m, hub \(8\) m, turns once every \(48\) s; the rider boards at the bottom. Sketch one turn and find the total time per turn the rider is above \(11\) m.`,
      [S`<b>Graph.</b> \((0,2)\), \((12,8)\), \((24,14)\), \((36,8)\), \((48,2)\).`,
        S`<b>Above \(11\) m.</b> \(11\) is \(3\) m above the hub, i.e. \(\frac36=\frac12\) of the radius: that happens \(60^\circ\) either side of the top (\(\cos60^\circ=0.5\)).`,
        S`<b>Angle range.</b> From \(120^\circ\) to \(240^\circ\) past the bottom: \(120^\circ\) of the turn.`,
        S`<b>Time.</b> \(\frac{120}{360}\times48=16\) s, from \(t=16\) to \(t=32\) s.`],
      S`16 s per turn (16 s to 32 s)`,
      SG([{ f: wheel(6, 8, 48), color: "violet" }], { base: false, view: { xmin: 0, xmax: 48, ymin: 0, ymax: 16 }, step: { x: 4, y: 2 }, lines: [{ m: 0, b: 11, color: "green", dash: true, label: "h = 11" }], points: [P(16, 11, "(16, 11)"), P(32, 11, "(32, 11)")], xlabel: "t (s)", ylabel: "h (m)" })],
  ]),

  practice([
    q("amp", S`Find the amplitude of a wave with max \(13\) and min \(-3\).`, num(8), "(13 + 3)/2.", [S`\(8\).`], S`\(8\)`),
    q("axis", S`Find \(k\) if the axis of \(y=-4\sin(x+30^\circ)-2\) is \(y=k\).`, num(-2), "c.", [S`\(-2\).`], S`\(-2\)`),
    q("shift", S`Find the \(x\)-coordinate of the maximum of \(y=\sin(x-75^\circ)\) in \(0^\circ\le x\le360^\circ\).`, num(165), "90 + 75.", [S`\(165^\circ\).`], S`\(165\)`),
    q("sin", S`Find \(\sin210^\circ\).`, num(-0.5, 0.001), "Below the axis, related angle 30°.", [S`\(-0.5\).`], S`\(-0.5\)`),
    q("model", S`A wheel's height graph has period \(30\) s. How many full turns does it make in \(4\) minutes?`, num(8), "240 ÷ 30.", [S`\(8\).`], S`\(8\)`),
  ]),

  ...hard([
    ["Two descriptions, one wave", S`Show that \(y=2\sin(x-90^\circ)+3\) has its minimum at \(x=0^\circ\), and find all \(x\) in \(0^\circ\le x\le360^\circ\) with \(y=4\).`,
      [S`<b>Minimum.</b> \(2\sin(-90^\circ)+3=1=c-|a|\) ✓`,
        S`<b>Equation.</b> \(\sin(x-90)=0.5\Rightarrow x-90=30\) or \(150\).`,
        S`<b>Solutions.</b> \(x=120^\circ\) or \(240^\circ\).`],
      S`min (0, 1); x = 120° or 240°`,
      SG([{ f: sinF(2, 90, 3), color: "violet" }], { base: false, view: { xmin: 0, xmax: 360, ymin: 0, ymax: 6 }, step: { x: 60, y: 1 }, lines: [{ m: 0, b: 4, color: "green", dash: true, label: "y = 4" }], points: [P(0, 1), P(120, 4, "120°"), P(240, 4, "240°")] })],
    ["Changing a tide", S`A tide is \(d(t)=2.5\sin(30t)+6\). A storm surge raises the water by \(1.2\) m and increases the swing by \(20\%\). Write the new model and give its max and min.`,
      [S`<b>Amplitude.</b> \(2.5\times1.2=3\).`,
        S`<b>Axis.</b> \(6+1.2=7.2\).`,
        S`<b>Model.</b> \(d(t)=3\sin(30t)+7.2\); max \(10.2\) m, min \(4.2\) m. The period (\(12\) h) is unchanged.`],
      S`d(t) = 3 sin(30t) + 7.2; max 10.2 m, min 4.2 m`],
  ], [
    q("hard", S`A wave has max at \((110,\,9)\) and min \(-3\). Find \(d\) for \(y=a\sin(x-d)+c\), \(a>0\).`, num(20), "110 − 90.", [S`\(d=20\).`], S`\(20\)`),
    q("hard", S`Find the minimum value of \(y=-2.5\sin(x-10^\circ)+4\).`, num(1.5, 0.001), "4 − 2.5.", [S`\(1.5\).`], S`\(1.5\)`),
    q("hard", S`\(f\) has period \(8\) and \(f(3)=-1\). Find \(f(-29)\).`, num(-1), "Add 4 periods.", [S`\(-29+32=3\).`], S`\(-1\)`),
    q("hard", S`A wheel of radius \(10\) m, hub \(12\) m, \(40\) s per turn, rider boards at the bottom. Height at \(t=10\) s?`, num(12), "Quarter turn.", [S`Level with the hub: \(12\) m.`], S`\(12\)`),
    q("hard", S`How many solutions does \(3\sin x+1=2\) have for \(0^\circ\le x\le720^\circ\)?`, num(4), "sin x = 1/3, two per cycle.", [S`\(4\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the first step for any periodic graph?", "Find max and min; then the axis and amplitude follow."],
      ["How do I find d?", "d = x-coordinate of a maximum − 90° (when a > 0)."],
      ["What does a negative a do?", "Reflects the wave in its axis: the max moves to 270° + d."],
      ["How do I solve sin x = k on 0°–360°?", "Find the related angle; place it in the two quadrants where sine has the right sign."],
      ["What do the parts of a wheel model mean?", "Radius = amplitude, hub = axis, time per turn = period, boarding point = start."],
    ],
    summary: [
      "Axis (max + min)/2; amplitude (max − min)/2.",
      "y = sin x: period 360°, range −1 ≤ y ≤ 1.",
      "y = a sin(x − d) + c: (x, y) → (x + d, ay + c).",
      "Models: predict by substitution and the period.",
    ],
    next: "Chapter 7 turns to exponential functions.",
  }),
];
