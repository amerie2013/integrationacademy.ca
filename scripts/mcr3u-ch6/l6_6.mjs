// MCR3U 6.6 — Equations of Sinusoidal Functions: from a graph, from properties, from a max and a min point;
// sine and cosine forms of the same graph
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "6.6 Equations of Sinusoidal Functions";
export const ID = "5c3e0001-0001-4001-8001-000000000606";
const S = String.raw;
const r = (d) => (d * Math.PI) / 180;
const G = (fn, view, pts, step, more = {}) => plane({ view, curves: [{ f: fn, color: "violet" }], lines: more.lines ?? [], points: pts, step }, more.cap ?? "");

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Equations of Sinusoidal Functions",
    overview: S`Given a sinusoidal graph or a description of one, you can write its equation by finding four numbers. The maximum and minimum give \(a\) and \(c\); the period gives \(k\); a convenient starting point gives \(d\). Because sine and cosine are shifts of each other, every sinusoidal graph has many correct equations — pick the one that is easiest to read.`,
    goals: [
      "find a and c from the maximum and minimum;",
      "find k from the period: k = 360°/period;",
      "choose a starting point for d (axis crossing for sine, maximum for cosine);",
      "write an equation from a list of properties;",
      "write both a sine and a cosine equation for the same graph.",
    ],
    curriculum: "D2.8 (represent a sinusoidal function with an equation, given its graph or its properties)",
    prior: [
      ["Max 7, min −1: amplitude and axis?", "4 and y = 3."],
      ["Period 120°: what is k?", "3."],
      [S`Where does \(y=\cos x\) have its first maximum?`, "x = 0°."],
    ],
    words: [
      ["a", "\\(\\pm\\frac{\\max-\\min}2\\)", ""],
      ["c", "\\(\\frac{\\max+\\min}2\\)", ""],
      ["k", "\\(\\frac{360^\\circ}{\\text{period}}\\)", ""],
      ["d", "x-coordinate of a starting point: rising axis crossing (sine) or a maximum (cosine)", ""],
    ],
  }),

  section("📌 Four numbers from a graph", S`
  ${table(["Step", "Read", "Gives"], [["1", "max and min", "\\(|a|=\\frac{\\max-\\min}2\\), \\(c=\\frac{\\max+\\min}2\\)"], ["2", "one period", "\\(k=\\frac{360^\\circ}{\\text{period}}\\)"], ["3a", "a maximum (cosine)", "d = its x-coordinate, a > 0"], ["3b", "a rising axis crossing (sine)", "d = its x-coordinate, a > 0"]])}
  ${G((x) => 3 * Math.sin(r(2 * x)) + 2, { xmin: -45, xmax: 405, ymin: -2, ymax: 6 }, [{ x: 0, y: 2, label: "(0°, 2)" }, { x: 45, y: 5, label: "(45°, 5)" }, { x: 135, y: -1, label: "(135°, −1)" }], { x: 45, y: 1 }, { lines: [{ m: 0, b: 2, color: "green", dash: true }], cap: "max 5, min −1, period 180°" })}
  ${keyIdea(S`For the graph above: \(a=3\), \(c=2\), \(k=2\). Sine starting at \((0^\circ,2)\): \(y=3\sin2x+2\). Cosine starting at the maximum \((45^\circ,5)\): \(y=3\cos(2(x-45^\circ))+2\). Both are correct.`)}`),

  section("📌 Explore", S`<p>Find an equation whose graph lies exactly on the dashed curve. Then switch between sine and cosine and find a second equation.</p>`),

  widget("fitSinusoid", { target: { fn: "sin", a: 3, k: 2, d: 45, c: 1 } }),

  section("📌 Watch out", watchOut([
    "k comes from the period, not from the distance between a max and a min (that is half a period).",
    "With cosine, start at a maximum; with sine, start where the graph crosses the axis going UP.",
    "If you start a cosine at a minimum, use a negative a.",
    "Check your equation with one more point from the graph.",
  ])),

  examples([
    ["From a graph (sine)", "Write a sine equation for the graph in the box above.",
      [S`\(a=\frac{5-(-1)}2=3\), \(c=2\).`, S`Period 180°: \(k=2\). Rising axis crossing at \(x=0\): \(d=0\).`],
      S`\(y=3\sin2x+2\)`],
    ["From a graph (cosine)", "A graph has a maximum of 4 at x = 60°, a minimum of −2, and period 240°. Write a cosine equation.",
      [S`\(a=3\), \(c=1\), \(k=\frac{360}{240}=1.5\).`, S`Maximum at 60°: \(d=60^\circ\).`],
      S`\(y=3\cos(1.5(x-60^\circ))+1\)`,
      G((x) => 3 * Math.cos(r(1.5 * (x - 60))) + 1, { xmin: -60, xmax: 420, ymin: -3, ymax: 5 }, [{ x: 60, y: 4, label: "(60°, 4)" }, { x: 180, y: -2, label: "(180°, −2)" }, { x: 300, y: 4, label: "(300°, 4)" }], { x: 60, y: 1 }, { lines: [{ m: 0, b: 1, color: "green", dash: true }] })],
    ["From properties", "Write the equation of a sine function with amplitude 2, period 720°, phase shift 90° right and axis y = −3.",
      [S`\(a=2\), \(k=\frac{360}{720}=0.5\), \(d=90^\circ\), \(c=-3\).`],
      S`\(y=2\sin(0.5(x-90^\circ))-3\)`],
    ["Same graph, two equations", S`Show that \(y=3\sin2x+2\) and \(y=3\cos(2(x-45^\circ))+2\) agree at \(x=0^\circ\) and \(x=45^\circ\).`,
      [S`At 0°: \(2\) and \(3\cos(-90^\circ)+2=2\).`, S`At 45°: \(3\sin90^\circ+2=5\) and \(3\cos0^\circ+2=5\).`],
      "they agree (they are the same graph)"],
    ["From a max and the next min", "A sinusoid has a maximum at (30°, 8) and the next minimum at (120°, 2). Write a cosine equation.",
      [S`\(a=3\), \(c=5\). Max to min is half a period: period 180°, \(k=2\).`, S`Cosine starting at the max: \(d=30^\circ\).`],
      S`\(y=3\cos(2(x-30^\circ))+5\)`],
  ]),

  practice([
    q("a", "A sinusoid has max 11 and min 3. What is its amplitude?", num(4),
      "(max − min)/2.", [S`\(\frac{11-3}2\).`], S`\(4\)`),
    q("c", "For the same sinusoid (max 11, min 3), what is c?", num(7),
      "(max + min)/2.", [S`\(\frac{11+3}2\).`], S`\(7\)`),
    q("k", "A sinusoid has period 120°. What is k?", num(3),
      "360° ÷ period.", [S`\(360\div120\).`], S`\(3\)`),
    q("k", "A sinusoid has period 1080°. What is k? Enter a decimal.", num(1 / 3, 0.001),
      "360 ÷ 1080.", [S`\(\frac13\).`], S`\(\approx0.333\)`),
    q("equation", "Which equation has a maximum of 2 at x = 0° and a minimum of −2 at x = 180°?", choice([S`\(y=2\cos x\)`, S`\(y=2\sin x\)`, S`\(y=\cos2x\)`, S`\(y=-2\cos x\)`], 0),
      "Cosine starts at its maximum.", ["a = 2, period 360°."], S`\(y=2\cos x\)`),
  ]),

  ...hard([
    ["From two points", "A sinusoid has a maximum at (45°, 7) and the next minimum at (135°, −1). Write a sine equation and a cosine equation.",
      [S`\(a=4\), \(c=3\), period \(2\times90^\circ=180^\circ\), \(k=2\).`, S`Sine: the rising axis crossing is a quarter period before the max: \(45^\circ-45^\circ=0^\circ\).`, S`Cosine: start at the max, \(d=45^\circ\).`],
      S`\(y=4\sin2x+3\) or \(y=4\cos(2(x-45^\circ))+3\)`,
      G((x) => 4 * Math.sin(r(2 * x)) + 3, { xmin: -45, xmax: 315, ymin: -2, ymax: 8 }, [{ x: 45, y: 7, label: "(45°, 7)" }, { x: 135, y: -1, label: "(135°, −1)" }], { x: 45, y: 1 })],
    ["Starting at a minimum", "A graph has a minimum of −4 at x = 0° and a maximum of 6 at x = 90°. Write a cosine equation using d = 0.",
      [S`\(|a|=5\), \(c=1\); min to max is half a period: period 180°, \(k=2\).`, S`Starting at a minimum means a reflected cosine: \(a=-5\).`],
      S`\(y=-5\cos2x+1\)`],
  ], [
    q("hard", "Consecutive maximums occur at x = 20° and x = 80°. What is k?", num(6),
      "Period 60°.", [S`\(360\div60\).`], S`\(6\)`),
    q("hard", "A cosine model has its maximum at x = −30°. Using the d closest to 0, what is d?", num(-30),
      "d is the x-coordinate of the max.", [S`\(y=a\cos(k(x+30^\circ))+c\).`], S`\(-30\)`),
    q("hard", S`A sinusoid has range \(-7\le y\le3\). What is \(c\)?`, num(-2),
      "Midpoint of the range.", [S`\(\frac{-7+3}2\).`], S`\(-2\)`),
  ]),

  wrapUp({
    qas: [
      ["Why are there many correct equations?", "Shifting by a whole period, or switching between sine and cosine with a different d, gives the same graph."],
      ["Which is easier, sine or cosine?", "Cosine when you can see a maximum; sine when you can see the axis crossing going up."],
      ["How do I get k from max and min x-values?", "Max to the next min is half a period: period = 2 × that distance."],
      ["When is a negative?", "When you start a cosine at a minimum, or a sine at a falling axis crossing."],
      ["How do I check?", "Substitute an extra point from the graph into your equation."],
    ],
    summary: [
      "|a| = (max − min)/2; c = (max + min)/2.",
      "k = 360°/period.",
      "d: max (cosine) or rising axis crossing (sine).",
      "Check with a second point.",
    ],
    next: "6.7 builds and uses sinusoidal models for real situations.",
  }),
];
