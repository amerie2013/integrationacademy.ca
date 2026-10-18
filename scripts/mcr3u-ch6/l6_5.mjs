// MCR3U 6.5 — Graphing Sinusoidal Functions Using Transformations: the five key points, (x, y) → (x/k + d, ay + c),
// order of transformations, several cycles, domain and range, intercepts
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "6.5 Graphing Sinusoidal Functions Using Transformations";
export const ID = "5c3e0001-0001-4001-8001-000000000605";
const S = String.raw;
const r = (d) => (d * Math.PI) / 180;
const G = (fn, pts, view, step = { x: 45, y: 1 }, more = {}) => plane({ view, curves: [{ f: fn, color: "violet" }], lines: more.lines ?? [], points: pts.map(([x, y]) => ({ x, y, label: `(${x}°, ${y})`.replace(/-/g, "−") })), step }, more.cap ?? "");
const map = (base, a, k, d, c) => base.map(([x, y]) => [Math.round((x / k + d) * 100) / 100, Math.round((a * y + c) * 100) / 100 + 0]);
const COS = [[0, 1], [90, 0], [180, -1], [270, 0], [360, 1]], SIN = [[0, 0], [90, 1], [180, 0], [270, -1], [360, 0]];

export const blocks = () => [
  intro({
    icon: "✏️",
    title: "Graphing Sinusoidal Functions Using Transformations",
    overview: S`You do not need a table of values to graph \(y=a\sin(k(x-d))+c\). Take the five key points of one cycle of the parent graph — the start, the maximum, the middle, the minimum and the end — and move each one with the mapping \((x,y)\to\left(\frac xk+d,\ ay+c\right)\). Join them with a smooth wave and repeat the cycle as often as needed.`,
    goals: [
      "list the five key points of y = sin x and y = cos x;",
      "apply (x, y) → (x/k + d, ay + c) to each key point;",
      "sketch one or more cycles and the axis;",
      "state the domain and range of the transformed function;",
      "find intercepts and maximum points of the transformed graph.",
    ],
    curriculum: "D2.7 (sketch graphs of y = af(k(x − d)) + c by applying one or more transformations to the graphs of f(x) = sin x and f(x) = cos x, and state the domain and range of the transformed functions)",
    prior: [
      [S`Which five points describe one cycle of \(y=\sin x\)?`, "(0°, 0), (90°, 1), (180°, 0), (270°, −1), (360°, 0)."],
      [S`What is the period of \(y=\sin3x\)?`, "120°."],
      [S`Where is the axis of \(y=2\cos x-4\)?`, "y = −4."],
    ],
    words: [
      ["Key points", "start, max, middle, min, end of one parent cycle (quarter-period apart)", ""],
      ["Mapping rule", "\\((x,y)\\to\\left(\\frac xk+d,\\ ay+c\\right)\\)", ""],
      ["Quarter period", "the horizontal gap between key points: \\(\\frac{360^\\circ}{4k}\\)", ""],
      ["Cycle", "one complete wave, from start to end", ""],
    ],
  }),

  section("📌 The method", S`
  ${table(["Step", "What to do"], [["1", "Write the equation as \\(a\\sin(k(x-d))+c\\) (factor k)"], ["2", "List the parent key points"], ["3", "x-values: divide by k, then add d"], ["4", "y-values: multiply by a, then add c"], ["5", "Draw the axis y = c, plot, join smoothly, extend"]])}
  ${G((x) => 2 * Math.sin(r(x)) + 1, map(SIN, 2, 1, 0, 1), { xmin: -30, xmax: 390, ymin: -2, ymax: 4 }, { x: 45, y: 1 }, { lines: [{ m: 0, b: 1, color: "green", dash: true }], cap: "y = 2 sin x + 1: key points (0°, 1), (90°, 3), (180°, 1), (270°, −1), (360°, 1)" })}
  ${keyIdea("Horizontal changes act on x in the order k then d; vertical changes act on y in the order a then c. The key points are always a quarter period apart.")}`),

  section("📌 Explore", S`<p>Watch each parent key point travel to its image as you change a, k, d and c. The table shows the mapping rule at work.</p>`),

  widget("keyPointMapper", { fn: "sin", init: { a: 3, k: 2, d: 30, c: 1 } }),

  section("📌 Watch out", watchOut([
    "Divide x by k — do not multiply.",
    "Factor k before using d: sin(2x + 60°) = sin(2(x + 30°)), so d = −30°.",
    "Draw the axis first; it keeps the wave symmetric.",
    "A smooth curve: no sharp points at the maximum or minimum.",
  ])),

  examples([
    ["Vertical changes only", S`Sketch \(y=2\sin x+1\) for \(0^\circ\le x\le360^\circ\).`,
      ["Keep x; multiply y by 2, add 1 (see the box above)."],
      S`range \(-1\le y\le3\)`],
    ["Horizontal compression", S`Find the key points of \(y=\cos2x\) for one cycle.`,
      ["Divide each x by 2; y unchanged."],
      S`\((0^\circ,1),(45^\circ,0),(90^\circ,-1),(135^\circ,0),(180^\circ,1)\)`],
    ["Two translations", S`Find the key points of \(y=\sin(x+90^\circ)-2\).`,
      [S`\(d=-90^\circ\): subtract 90 from each x.`, "Subtract 2 from each y."],
      S`\((-90^\circ,-2),(0^\circ,-1),(90^\circ,-2),(180^\circ,-3),(270^\circ,-2)\)`],
    ["All four transformations", S`Sketch one cycle of \(y=-3\cos(2(x-45^\circ))+1\).`,
      [S`x: \(\frac x2+45\) gives \(45^\circ,90^\circ,135^\circ,180^\circ,225^\circ\).`, S`y: \(-3y+1\) gives \(-2,1,4,1,-2\).`],
      S`range \(-2\le y\le4\)`,
      G((x) => -3 * Math.cos(r(2 * (x - 45))) + 1, map(COS, -3, 2, 45, 1), { xmin: 0, xmax: 270, ymin: -3, ymax: 5 }, { x: 45, y: 1 }, { lines: [{ m: 0, b: 1, color: "green", dash: true }] })],
    ["Several cycles", S`How many cycles of \(y=4\sin\frac x2\) fit in \(0^\circ\le x\le1440^\circ\), and what is the range?`,
      [S`Period \(\frac{360^\circ}{1/2}=720^\circ\): \(1440\div720=2\) cycles.`, "Amplitude 4, axis y = 0."],
      S`2 cycles; range \(-4\le y\le4\)`],
  ]),

  practice([
    q("image y", S`The parent point \((90^\circ,1)\) of \(y=\sin x\) maps onto \(y=2\sin3x+4\). What is the image's y-coordinate?`, num(6),
      "ay + c.", [S`\(2(1)+4\).`], S`\(6\)`),
    q("image x", S`For the same mapping onto \(y=2\sin3x+4\), what is the image's x-coordinate (degrees)?`, num(30),
      "x ÷ k.", [S`\(90\div3\).`], S`\(30^\circ\)`),
    q("max", S`Where is the first maximum of \(y=\sin(x-40^\circ)\) to the right of 0°?`, num(130),
      "Shift (90°, 1) right 40°.", [S`\(90+40\).`], S`\(130^\circ\)`),
    q("range", S`What is the range of \(y=-2\cos x+3\)?`, choice([S`\(1\le y\le5\)`, S`\(-2\le y\le3\)`, S`\(-5\le y\le-1\)`, S`\(-1\le y\le5\)`], 0),
      "c ± |a|.", [S`\(3\pm2\).`], S`\(1\le y\le5\)`),
    q("cycles", S`How many complete cycles of \(y=\sin4x\) are there from 0° to 360°?`, num(4),
      "Period 90°.", [S`\(360\div90\).`], S`\(4\)`),
  ]),

  ...hard([
    ["A horizontal stretch and a shift", S`Find the key points of one cycle of \(y=4\sin\left(\frac13(x+90^\circ)\right)-2\).`,
      [S`x: \(3x-90\) gives \(-90^\circ,180^\circ,450^\circ,720^\circ,990^\circ\).`, S`y: \(4y-2\) gives \(-2,2,-2,-6,-2\).`],
      "period 1080°, range −6 ≤ y ≤ 2",
      G((x) => 4 * Math.sin(r((x + 90) / 3)) - 2, map(SIN, 4, 1 / 3, -90, -2), { xmin: -180, xmax: 1080, ymin: -7, ymax: 3 }, { x: 90, y: 1 })],
    ["x-intercepts", S`Find the x-intercepts of \(y=2\cos2x+1\) for \(0^\circ\le x\le360^\circ\).`,
      [S`\(\cos2x=-\frac12\Rightarrow2x=120^\circ,240^\circ,480^\circ,600^\circ\).`],
      S`\(x=60^\circ,120^\circ,240^\circ,300^\circ\)`],
  ], [
    q("hard", S`The cosine key point \((180^\circ,-1)\) maps onto \(y=-2\cos(4(x-30^\circ))+5\). What is the image's x-coordinate?`, num(75),
      "x/k + d.", [S`\(180\div4+30\).`], S`\(75^\circ\)`),
    q("hard", S`At what x (between 0° and 180°) does \(y=5-3\sin2x\) reach its maximum?`, num(135),
      "The max happens where sin 2x = −1.", [S`\(2x=270^\circ\).`], S`\(135^\circ\)`),
    q("hard", S`How many x-intercepts does \(y=2\sin x+1\) have for \(0^\circ\le x\le360^\circ\)?`, num(2),
      "sin x = −½.", ["210° and 330°."], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Why only five points?", "They mark every quarter of a cycle — enough to fix the shape exactly."],
      ["Why divide x by k?", "k compresses horizontally by a factor 1/k, so each x-value shrinks."],
      ["Does the order matter?", "Yes: for x, apply k before d; for y, apply a before c."],
      ["How do I draw more cycles?", "Add the period to each key point's x-coordinate."],
      ["How do I check my sketch?", "Test one point, e.g. the y-intercept, in the equation."],
    ],
    summary: [
      "Five key points per cycle.",
      "(x, y) → (x/k + d, ay + c).",
      "Axis y = c; range c ± |a|.",
      "Points are a quarter period apart.",
    ],
    next: "6.6 works backwards: from a graph or properties to an equation.",
  }),
];
