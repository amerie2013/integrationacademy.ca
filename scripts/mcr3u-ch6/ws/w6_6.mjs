// MCR3U Worksheet 6.6 — Equations of Sinusoidal Functions (teacher edition)
import { waveT, sin, cos } from "./sinT.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Sine from a graph", q: "Write a sine equation for the graph.",
    fig: waveT((x) => 3 * sin(x) + 3, { xmin: 0, xmax: 360, ymin: -1, ymax: 7 }, { x: 45, y: 1 }, { axis: 3, pts: [[0, 3], [90, 6], [270, 0]] }),
    steps: [S`Max 6, min 0: $a=3$, $c=3$. Period 360°: $k=1$.`, "It rises through the axis at x = 0: d = 0."], ans: S`$y=3\sin x+3$` },
  { title: "Cosine for the same graph", q: "Write a cosine equation for the graph in Example 1.", steps: ["A maximum at 90°: d = 90°."], ans: S`$y=3\cos(x-90^\circ)+3$` },
  { title: "Reading the period", q: "A graph has a max of 2 at x = 0° and the next min of −2 at x = 60°. Write its equation.", steps: [S`Max to min is half a period: period 120°, $k=3$.`, S`$a=2$, $c=0$, cosine from the max.`], ans: S`$y=2\cos3x$` },
  { title: "From properties", q: "Write a cosine equation with amplitude 5, period 180°, phase shift 30° left and axis y = 2.", steps: [S`$k=2$, $d=-30^\circ$.`], ans: S`$y=5\cos(2(x+30^\circ))+2$` },
  { title: "From a max and min", q: "A sinusoid has a max at (20°, 10) and the next min at (80°, 4). Write a cosine equation.", steps: [S`$a=3$, $c=7$; half period 60°, period 120°, $k=3$; $d=20^\circ$.`], ans: S`$y=3\cos(3(x-20^\circ))+7$` },
  { title: "Starting at a minimum", q: "A graph has a min of −5 at x = 0° and the next max of 1 at x = 90°. Write a cosine equation with d = 0.",
    fig: waveT((x) => -3 * cos(2 * x) - 2, { xmin: 0, xmax: 360, ymin: -6, ymax: 2 }, { x: 45, y: 1 }, { axis: -2, pts: [[0, -5], [90, 1]] }),
    steps: [S`$|a|=3$, $c=-2$, period 180°, $k=2$.`, "Starting at a min: a = −3."], ans: S`$y=-3\cos2x-2$` },
  { title: "Sine from a maximum", q: "A sinusoid has period 240° and a maximum at x = 60°. Where should a sine equation start?", steps: ["The rising axis crossing is a quarter period (60°) before the max."], ans: "d = 0°" },
  { title: "From a description", q: "A quantity ranges from 2 to 14 and repeats every 30 s. Write a cosine model if it is at its max at t = 0.", steps: [S`$a=6$, $c=8$, $k=\frac{360}{30}=12$.`], ans: S`$y=6\cos(12t)+8$` },
  { title: "Checking an equation", q: S`Check that $y=3\cos(3(x-20^\circ))+7$ passes through $(80^\circ,4)$.`, steps: [S`$3\cos180^\circ+7=-3+7=4$.`], ans: "it does" },
];

const PROBLEMS = [
  { level: 1, q: "A sinusoid has max 9 and min −3. Find a (positive).", recap: "a.", ans: "6" },
  { level: 1, q: "For the same sinusoid (max 9, min −3), find c.", recap: "c.", ans: "3" },
  { level: 1, q: "A sinusoid has period 40°. Find k.", recap: "k.", ans: "9" },
  { level: 2, q: "Write a cosine equation for the graph.", recap: "Graph → equation.", ans: S`$y=3\cos2x+1$`,
    fig: waveT((x) => 3 * cos(2 * x) + 1, { xmin: 0, xmax: 360, ymin: -3, ymax: 5 }, { x: 45, y: 1 }, { pts: [[0, 4], [90, -2]] }) },
  { level: 2, q: "A sine graph has amplitude 2 and period 360°, rises through the axis y = 0 at x = 30°. Write its equation.", recap: "Sine.", ans: S`$y=2\sin(x-30^\circ)$` },
  { level: 2, q: "Write a sine equation with amplitude 0.5, period 120°, phase shift 10° right and axis y = −1.", recap: "Properties.", ans: S`$y=0.5\sin(3(x-10^\circ))-1$` },
  { level: 2, q: "A sinusoid has a max at (15°, 5) and the next min at (45°, −1). Write a cosine equation.", recap: "Max/min.", ans: S`$y=3\cos(6(x-15^\circ))+2$` },
  { level: 2, q: "A sinusoid has range −4 ≤ y ≤ 10, period 720° and a max at x = 0°. Write a cosine equation.", recap: "Range + period.", ans: S`$y=7\cos(0.5x)+3$` },
  { level: 3, space: 5, q: "A sinusoid has a max at (40°, 6) and the next min at (100°, −2). Write a cosine equation AND a sine equation.", recap: "Both forms.", ans: S`$y=4\cos(3(x-40^\circ))+2=4\sin(3(x-10^\circ))+2$`,
    fig: waveT((x) => 4 * cos(3 * (x - 40)) + 2, { xmin: -20, xmax: 260, ymin: -3, ymax: 7 }, { x: 20, y: 1 }, { pts: [[40, 6], [100, -2]] }) },
  { level: 3, space: 5, q: "A graph has a min at (−30°, 1) and the next max at (60°, 9). Write a cosine equation.", recap: "Starting at a min.", ans: S`period 180°: $y=-4\cos(2(x+30^\circ))+5$` },
  { level: 3, space: 4, q: S`Explain why $y=2\sin x$ and $y=-2\sin(x-180^\circ)$ have the same graph.`, recap: "Explain.", ans: "shifting sine by half a period flips it; the extra reflection flips it back" },
  { level: 3, space: 4, q: "A quantity has a max of 12 at t = 0 h and the next min of 2 at t = 6 h. Write a model with t in hours.", recap: "Model.", ans: S`period 12 h, $k=30$: $y=5\cos(30t)+7$` },
  { level: 3, space: 4, q: "A sinusoid passes through (0°, 3) going up, has max 5, min 1 and period 180°. Write its equation.", recap: "Sine.", ans: S`$y=2\sin2x+3$` },
];

export const WS = {
  code: "6.6",
  title: "Equations of Sinusoidal Functions",
  bigideas: S`From max and min: $|a|=\frac{\max-\min}2$, $c=\frac{\max+\min}2$. From the period: $k=\frac{360^\circ}{\text{period}}$. For $d$, use a maximum (cosine) or a rising axis crossing (sine). Every sinusoid has many correct equations.`,
  goals: ["Find a and c.", "Find k from the period.", "Choose d.", "Write sine and cosine forms."],
  curriculum: "D2.8",
  vocab: [["a, c", "from max and min"], ["k", "$\\frac{360^\\circ}{\\text{period}}$"], ["d", "starting point"]],
  hook: "Show a graph with no equation. Ask students to find three numbers they can read straight off it (max, min, period).",
  concepts: [
    ["1. Four numbers", S`${waveT((x) => 2 * cos(2 * (x - 45)) + 1, { xmin: 0, xmax: 360, ymin: -2, ymax: 4 }, { x: 45, y: 1 }, { axis: 1, width: 5.5, pts: [[45, 3], [135, -1]] })}Max (45°, 3), min (135°, −1): $a=2$, $c=1$, $k=2$, $d=45^\circ$.`],
    ["2. Choosing d", "Cosine: d at a max. Sine: d at a rising axis crossing (a quarter period before a max)."],
    ["3. Many answers", "Add or subtract a full period to d, or switch functions with a new d."],
  ],
  tips: ["Max to min is HALF a period.", "Check one more point.", "Use −a for a min start.", "k = 360 ÷ period.", "Write units in models."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
