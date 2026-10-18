// MCR3U Worksheet 6.2 — Graphs of Sine and Cosine (teacher edition)
import { waveT, gridW, sin, cos, f } from "./sinT.mjs";

const S = String.raw;
const V = { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, ST = { x: 45, y: 0.5 };

const EXAMPLES = [
  { title: "A table for cosine", q: S`Make a table of $\cos x$ for $x=0^\circ,45^\circ,\ldots,360^\circ$ and sketch the graph.`,
    fig: waveT((x) => cos(x), V, ST, { pts: [0, 45, 90, 135, 180, 225, 270, 315, 360].map((x) => [x, Math.round(cos(x) * 100) / 100, false]) }),
    steps: [S`$1,\ 0.71,\ 0,\ -0.71,\ -1,\ -0.71,\ 0,\ 0.71,\ 1$.`], ans: "a wave starting and ending at its maximum" },
  { title: "Properties of cosine", q: S`List the key properties of $y=\cos x$.`, steps: [S`Period 360°, amplitude 1, axis $y=0$, range $-1\le y\le1$.`, "Zeros 90°, 270°; max (0°, 1), (360°, 1); min (180°, −1)."], ans: "as listed" },
  { title: "Increasing and decreasing", q: S`On $0^\circ\le x\le360^\circ$, where is $y=\sin x$ increasing?`, steps: ["It rises from the min at 270° up to the max at 90° of the next cycle."], ans: "0° to 90° and 270° to 360°" },
  { title: "A negative angle", q: S`Evaluate $\sin(-30^\circ)$ using the graph or the period.`, steps: [S`$-30^\circ+360^\circ=330^\circ$; $\sin330^\circ=-\frac12$.`], ans: S`$-\frac12$` },
  { title: "Solving over two cycles", q: S`Solve $\cos x=-\frac12$ for $0^\circ\le x\le720^\circ$.`,
    fig: waveT((x) => cos(x), { xmin: 0, xmax: 720, ymin: -1.5, ymax: 1.5 }, { x: 90, y: 0.5 }, { lines: [{ m: 0, b: -0.5, color: "amber", dash: true }], pts: [[120, -0.5, "120°"], [240, -0.5, "240°"], [480, -0.5, "480°"], [600, -0.5, "600°"]] }),
    steps: ["In 0°–360°: 120° and 240° (cosine negative in Q2, Q3).", "Add 360°."], ans: "120°, 240°, 480°, 600°" },
  { title: "Counting maximums", q: S`How many times does $\sin x=1$ for $0^\circ\le x\le1080^\circ$?`, steps: ["Once per cycle at 90°, 450°, 810°."], ans: "3" },
  { title: "A large angle", q: S`Evaluate $\cos1000^\circ$ to 4 decimals.`, steps: [S`$1000-720=280$: $\cos280^\circ$.`], ans: S`$\approx${f(cos(280), 4)}$` },
  { title: "Sine and cosine are shifts", q: S`Check that $\sin x=\cos(x-90^\circ)$ at $x=0^\circ,90^\circ,180^\circ$.`, steps: [S`$0=\cos(-90^\circ)$; $1=\cos0^\circ$; $0=\cos90^\circ$.`], ans: "true at all three" },
  { title: "Where is sine positive?", q: S`For which $x$ in $0^\circ<x<360^\circ$ is $\sin x>0$?`, steps: ["The graph is above the axis between its zeros 0° and 180°."], ans: S`$0^\circ<x<180^\circ$` },
];

const PROBLEMS = [
  { level: 1, q: S`Evaluate $\cos360^\circ$.`, recap: "Value.", ans: "1" },
  { level: 1, q: S`Evaluate $\sin450^\circ$.`, recap: "Large angle.", ans: "1" },
  { level: 1, q: S`List the zeros of $y=\cos x$ for $0^\circ\le x\le360^\circ$.`, recap: "Zeros.", ans: "90°, 270°" },
  { level: 2, q: S`On $0^\circ\le x\le360^\circ$, where is $y=\cos x$ increasing?`, recap: "Increasing.", ans: "180° to 360°" },
  { level: 2, q: S`Solve $\sin x=-\frac1{\sqrt2}$ for $0^\circ\le x\le720^\circ$.`, recap: "Two cycles.", ans: "225°, 315°, 585°, 675°" },
  { level: 2, q: S`Evaluate $\sin(-150^\circ)$.`, recap: "Negative angle.", ans: S`$-\frac12$` },
  { level: 2, q: S`Evaluate $\cos(-420^\circ)$.`, recap: "Negative, large.", ans: S`$\cos300^\circ=\frac12$` },
  { level: 2, q: S`Sketch $y=\sin x$ and $y=\cos x$ on the same axes for $0^\circ\le x\le360^\circ$ and mark where they cross.`, recap: "Sketch both.", ans: "they cross at 45° and 225°", fig: gridW(V, ST) },
  { level: 3, space: 4, q: S`Solve $\sin x=\cos x$ for $0^\circ\le x\le720^\circ$.`, recap: "tan x = 1.", ans: "45°, 225°, 405°, 585°" },
  { level: 3, space: 4, q: S`For which $x$ in $0^\circ\le x\le360^\circ$ is $\cos x<\sin x$?`, recap: "Compare graphs.", ans: S`$45^\circ<x<225^\circ$` },
  { level: 3, space: 4, q: S`Use the unit circle to explain why the graph of $y=\sin x$ is symmetric about $x=90^\circ$, i.e. $\sin(180^\circ-x)=\sin x$.`, recap: "Explain symmetry.", ans: "points at x and 180° − x are mirror images across the y-axis: same height" },
  { level: 3, space: 4, q: S`How many solutions does $\sin x=0.2$ have for $-360^\circ\le x\le360^\circ$?`, recap: "Count.", ans: "4" },
  { level: 3, space: 4, q: S`A point starts at $(1,0)$ and turns counterclockwise 1000° around the unit circle. Find its coordinates to 4 decimals.`, recap: "Coordinates.", ans: S`$(\cos1000^\circ,\sin1000^\circ)\approx(${f(cos(1000), 4)},\ ${f(sin(1000), 4)})$` },
];

export const WS = {
  code: "6.2",
  title: "Graphs of Sine and Cosine",
  bigideas: S`On the unit circle, $\sin x$ is the y-coordinate and $\cos x$ the x-coordinate of the point at angle $x$. Graphed against $x$, both are waves with period 360°, amplitude 1 and axis $y=0$. The cosine graph is the sine graph shifted 90° left.`,
  goals: ["Build both graphs from the unit circle.", "State their key properties.", "Use periodicity for any angle.", "Solve equations from the graphs."],
  curriculum: "D2.3, D2.4",
  vocab: [["Zero", "where the graph meets $y=0$"], ["Periodicity", "$\\sin(x+360^\\circ)=\\sin x$"], ["Phase relation", "$\\cos x=\\sin(x+90^\\circ)$"]],
  hook: "Tape a dot to the rim of a bicycle wheel and turn it slowly while a student plots the dot's height against the angle turned.",
  concepts: [
    ["1. The two graphs", S`${waveT([(x) => sin(x), (x) => cos(x)], { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, ST, { width: 5.5 })}Sine (violet) starts at 0; cosine (amber) starts at 1.`],
    ["2. Key points", "Sine: (0°,0), (90°,1), (180°,0), (270°,−1), (360°,0). Cosine: (0°,1), (90°,0), (180°,−1), (270°,0), (360°,1)."],
    ["3. Solving", S`For $\sin x=k$ with $-1<k<1$ there are two solutions per cycle; find them in 0°–360° and add multiples of 360°.`],
  ],
  tips: ["Mark the x-axis every 90°.", "Sine starts at 0, cosine at 1.", "Use the period for big angles.", "Two solutions per cycle.", "Draw smooth curves, not zigzags."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
