// MCF3M 6.3 — Vertical Transformations of the Sine Function: y = a sin x (stretch, reflection), y = sin x + c (shift),
// y = a sin x + c; mapping key points (x, y) → (x, ay + c); amplitude, axis, max/min, range; equation from a graph.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "../lib.mjs";
import { SG, sd, sinF, P } from "./sfig.mjs";
import { tv } from "../lib.mjs";
const S = String.raw;

export const TITLE = "6.3 Vertical Transformations of the Sine Function";
const V = (ymin, ymax, ys = 1) => ({ view: { xmin: 0, xmax: 360, ymin, ymax }, step: { x: 90, y: ys } });

export const blocks = () => [
  intro({
    icon: "↕️",
    title: "Vertical Transformations of the Sine Function",
    overview: S`The wave \(y=\sin x\) always swings between \(-1\) and \(1\) about \(y=0\). Real waves are taller, shorter, or centred higher up. Multiplying by \(a\) stretches the wave vertically (and flips it if \(a<0\)); adding \(c\) moves it up or down. In \(y=a\sin x+c\), the amplitude is \(|a|\) and the axis is \(y=c\) — so you can read the size and the centre of a wave straight from its equation.`,
    goals: [
      "describe the effect of a on y = a sin x (stretch, compression, reflection);",
      "describe the effect of c on y = sin x + c;",
      "map key points with (x, y) → (x, ay + c) and sketch y = a sin x + c;",
      "state amplitude, axis, maximum, minimum and range from the equation;",
      "write y = a sin x + c from a graph or a description.",
    ],
    curriculum: "C2.5 (determine, through investigation, the effects of a and c in y = a sin x + c and describe them as stretches, reflections and translations), C2.6 (sketch graphs of y = a sin x + c by applying transformations to y = sin x)",
    prior: [
      [S`List the five key points of \(y=\sin x\) on \(0^\circ\)–\(360^\circ\).`, S`\((0,0),(90,1),(180,0),(270,-1),(360,0)\).`],
      [S`What does \(y=f(x)+3\) do to the graph of \(y=f(x)\)?`, S`Shifts it up \(3\).`],
      [S`What does \(y=-f(x)\) do?`, S`Reflects it in the \(x\)-axis.`],
    ],
    words: [
      ["Vertical stretch", "multiplying every y-value by |a| > 1", "y = 3 sin x"],
      ["Vertical compression", "multiplying by 0 < |a| < 1", "y = 0.5 sin x"],
      ["Reflection", "a < 0 flips the wave in its axis", "y = −2 sin x"],
      ["Vertical translation", "adding c moves the wave up (c > 0) or down", "y = sin x − 2"],
      ["Amplitude / axis", "|a| / y = c", "y = −2 sin x + 1: 2 and y = 1"],
    ],
  }),

  section("📌 What a and c do", S`
  ${SG([{ f: sinF(3), color: "violet" }, { f: sinF(1, 0, 2), color: "green" }], { ...V(-4, 4), cap: "gray: y = sin x · violet: y = 3 sin x · green: y = sin x + 2" })}
  ${table(["Equation", "Amplitude", "Axis", "Max", "Min", "Range"], [
    ["\\(y=\\sin x\\)", "1", "y = 0", "1", "−1", "−1 ≤ y ≤ 1"],
    ["\\(y=3\\sin x\\)", "3", "y = 0", "3", "−3", "−3 ≤ y ≤ 3"],
    ["\\(y=\\sin x+2\\)", "1", "y = 2", "3", "1", "1 ≤ y ≤ 3"],
    ["\\(y=a\\sin x+c\\)", "|a|", "y = c", "c + |a|", "c − |a|", "c − |a| ≤ y ≤ c + |a|"],
  ])}
  ${keyIdea(S`Key points map by \((x,\,y)\to(x,\,ay+c)\): multiply the \(y\)-value by \(a\) first, then add \(c\). The \(x\)-values — and so the period \(360^\circ\) — do not change.`)}`),

  widget("sinTransform", { fn: "sin", init: { a: 2, k: 1, d: 0, c: 1 } }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "Stretch before you shift: y-value × a, THEN + c.",
    "Amplitude is |a|, never negative.",
    "If a < 0 the wave starts by going DOWN from the axis, so the maximum moves to 270°.",
    "c moves the axis, not the amplitude.",
    "The period stays 360°: a and c only change y-values.",
  ])}`),

  examples([
    ["A vertical stretch", S`Sketch \(y=3\sin x\) for \(0^\circ\le x\le360^\circ\) using key points, and state its amplitude and range.`,
      [S`<b>Map.</b> \((x,y)\to(x,3y)\).`,
        S`<b>Key points.</b> \((0,0)\), \((90,3)\), \((180,0)\), \((270,-3)\), \((360,0)\).`,
        S`<b>Properties.</b> Amplitude \(3\); axis \(y=0\); range \(-3\le y\le3\).`,
        S`<b>Check.</b> At \(x=30^\circ\): \(3\sin30^\circ=1.5\), three times \(0.5\) ✓`],
      S`amplitude 3, range −3 ≤ y ≤ 3`,
      SG([{ f: sinF(3), color: "violet" }], { ...V(-4, 4), points: [P(90, 3), P(270, -3, null, "red")] })],

    ["A vertical translation", S`Sketch \(y=\sin x-2\) and state the axis, maximum, minimum and range.`,
      [S`<b>Map.</b> \((x,y)\to(x,y-2)\).`,
        S`<b>Key points.</b> \((0,-2)\), \((90,-1)\), \((180,-2)\), \((270,-3)\), \((360,-2)\).`,
        S`<b>Properties.</b> Axis \(y=-2\); max \(-1\); min \(-3\); amplitude still \(1\).`,
        S`<b>Range.</b> \(-3\le y\le-1\) — the whole wave is below the \(x\)-axis.`],
      S`axis y = −2, max −1, min −3, range −3 ≤ y ≤ −1`,
      SG([{ f: sinF(1, 0, -2), color: "violet" }], { ...V(-4, 2), lines: [{ m: 0, b: -2, color: "green", dash: true, label: "y = −2" }] })],

    ["Reflection, stretch and shift", S`Sketch \(y=-2\sin x+1\). Give the key points, the max and min points, and the range.`,
      [S`<b>Map.</b> \((x,y)\to(x,-2y+1)\).`,
        S`<b>Key points.</b> \(0\to1\); \(1\to-1\); \(0\to1\); \(-1\to3\); \(0\to1\): \((0,1)\), \((90,-1)\), \((180,1)\), \((270,3)\), \((360,1)\).`,
        S`<b>Max and min.</b> Maximum \((270,\,3)\), minimum \((90,\,-1)\) — the reflection swapped them.`,
        S`<b>Range.</b> Amplitude \(2\), axis \(y=1\): \(-1\le y\le3\).`],
      S`max (270, 3), min (90, −1), range −1 ≤ y ≤ 3`,
      SG([{ f: sinF(-2, 0, 1), color: "violet" }], { ...V(-2, 4), lines: [{ m: 0, b: 1, color: "green", dash: true, label: "y = 1" }], points: [P(90, -1, null, "red"), P(270, 3)] })],

    ["Equation from a graph", S`A sine wave on \(0^\circ\le x\le360^\circ\) has maximum \(7\) at \(x=90^\circ\), minimum \(-1\) at \(x=270^\circ\), and passes through \((0,3)\). Write its equation in the form \(y=a\sin x+c\).`,
      [S`<b>Axis.</b> \(c=\frac{7+(-1)}2=3\).`,
        S`<b>Amplitude.</b> \(\frac{7-(-1)}2=4\).`,
        S`<b>Sign of a.</b> The max is at \(90^\circ\), like \(\sin x\), so no reflection: \(a=4\).`,
        S`<b>Equation and check.</b> \(y=4\sin x+3\): at \(x=90^\circ\), \(4+3=7\) ✓; at \(x=0\), \(3\) ✓`],
      S`y = 4 sin x + 3`,
      SG([{ f: sinF(4, 0, 3), color: "violet" }], { ...V(-2, 8), lines: [{ m: 0, b: 3, color: "green", dash: true, label: "y = 3" }], points: [P(0, 3), P(90, 7), P(270, -1, null, "red")] })],

    ["A turning wheel", S`A water wheel has radius \(3\) m and its hub is \(5\) m above the water channel floor. A paddle's height is \(h=3\sin x+5\), where \(x\) is the angle turned from the level position. Find the height after \(210^\circ\), and the angles in \(0^\circ\le x\le360^\circ\) where the paddle is \(6.5\) m up.`,
      [S`<b>Height at \(210^\circ\).</b> \(h=3\sin210^\circ+5=3(-0.5)+5=3.5\) m.`,
        S`<b>Set up.</b> \(3\sin x+5=6.5\Rightarrow\sin x=0.5\).`,
        S`<b>Solve.</b> \(x=30^\circ\) or \(x=180-30=150^\circ\).`,
        S`<b>Check.</b> \(3\sin150^\circ+5=3(0.5)+5=6.5\) ✓`],
      S`h(210°) = 3.5 m; x = 30° or 150°`,
      SG([{ f: sinF(3, 0, 5), color: "violet" }], { base: false, ...V(0, 9), lines: [{ m: 0, b: 6.5, color: "green", dash: true, label: "h = 6.5" }], points: [P(30, 6.5, "30°"), P(150, 6.5, "150°"), P(210, 3.5, "(210, 3.5)", "red")], xlabel: "x (°)", ylabel: "h (m)" })],
  ]),

  practice([
    q("amp", S`State the amplitude of \(y=-5\sin x+2\).`, num(5), "|a|.", [S`\(|-5|=5\).`], S`\(5\)`),
    q("max", S`Find the maximum value of \(y=2\sin x-3\).`, num(-1), "c + |a|.", [S`\(-3+2=-1\).`], S`\(-1\)`),
    q("min", S`Find the minimum value of \(y=4\sin x+1\).`, num(-3), "c − |a|.", [S`\(1-4=-3\).`], S`\(-3\)`),
    q("map", S`The point \((90,\,1)\) on \(y=\sin x\) maps to \((90,\,y)\) on \(y=2\sin x+5\). Find \(y\).`, num(7), "2(1) + 5.", [S`\(2(1)+5=7\).`], S`\(7\)`),
    q("range", S`Which equation has range \(1\le y\le5\)?`, choice(["y = 2 sin x + 3", "y = 3 sin x + 2", "y = 4 sin x + 1", "y = sin x + 4"], 0), "Axis 3, amplitude 2.", [S`\(3-2=1\) and \(3+2=5\).`], S`y = 2 sin x + 3`),
  ]),

  ...hard([
    ["Reflected wave from a graph", S`A sine wave has maximum \(9\), minimum \(1\), and its minimum occurs at \(x=90^\circ\). Write \(y=a\sin x+c\).`,
      [S`<b>Axis.</b> \(c=\frac{9+1}2=5\).`,
        S`<b>Amplitude.</b> \(\frac{9-1}2=4\).`,
        S`<b>Reflection.</b> \(\sin x\) has its MAX at \(90^\circ\); this wave has its MIN there, so \(a=-4\).`,
        S`<b>Check.</b> \(y=-4\sin90^\circ+5=1\) ✓`],
      S`y = −4 sin x + 5`,
      SG([{ f: sinF(-4, 0, 5), color: "violet" }], { ...V(-1, 10, 2), points: [P(90, 1, null, "red"), P(270, 9)] })],
    ["How long above a level?", S`A rider's height on a wheel is \(h=6\sin x+8\) (metres), \(x\) the angle turned. For what angles in \(0^\circ\le x\le360^\circ\) is the rider higher than \(11\) m, and what fraction of a turn is that?`,
      [S`<b>Boundary.</b> \(6\sin x+8=11\Rightarrow\sin x=0.5\Rightarrow x=30^\circ,150^\circ\).`,
        S`<b>Above.</b> Between them the wave is higher: \(30^\circ<x<150^\circ\).`,
        S`<b>Fraction.</b> \(\frac{150-30}{360}=\frac{120}{360}=\frac13\) of a turn.`],
      S`30° < x < 150°; one third of each turn`,
      SG([{ f: sinF(6, 0, 8), color: "violet" }], { base: false, ...V(0, 16, 2), lines: [{ m: 0, b: 11, color: "green", dash: true, label: "h = 11" }], points: [P(30, 11, "30°"), P(150, 11, "150°")] })],
  ], [
    q("hard", S`Find \(y\) when \(x=270^\circ\) for \(y=-3\sin x+4\).`, num(7), "sin 270° = −1.", [S`\(-3(-1)+4=7\).`], S`\(7\)`),
    q("hard", S`\(y=a\sin x+c\) has max \(10\), min \(2\) and \(a>0\). Find \(a\).`, num(4), "(10 − 2)/2.", [S`\(a=4\).`], S`\(4\)`),
    q("hard", S`For that same wave, find \(c\).`, num(6), "(10 + 2)/2.", [S`\(c=6\).`], S`\(6\)`),
    q("hard", S`Find max − min for \(y=2.5\sin x-1\).`, num(5, 0.001), "Twice the amplitude.", [S`\(2(2.5)=5\).`], S`\(5\)`),
    q("hard", S`Solve \(2\sin x+1=2\) for \(90^\circ\le x\le360^\circ\).`, num(150), "sin x = 0.5.", [S`\(x=30^\circ\) or \(150^\circ\); only \(150^\circ\) is in the interval.`], S`\(150\)`),
  ]),

  wrapUp({
    qas: [
      ["What does a do in y = a sin x + c?", "It stretches the wave vertically by |a| and reflects it if a < 0. Amplitude = |a|."],
      ["What does c do?", "It shifts the wave up or down; the axis becomes y = c."],
      ["How do I map key points?", "(x, y) → (x, ay + c): multiply, then add."],
      ["How do I find a and c from a graph?", "c = (max + min)/2, |a| = (max − min)/2; a < 0 if the wave goes down first from x = 0."],
      ["Does the period change?", "No — a and c change only y-values; the period stays 360°."],
    ],
    summary: [
      "Amplitude |a|, axis y = c.",
      "Max c + |a|, min c − |a|.",
      "a < 0 reflects: max at 270°, min at 90°.",
      "Key points: (x, y) → (x, ay + c).",
    ],
    next: "6.4 shifts the sine wave left and right: y = sin(x − d).",
  }),
];
