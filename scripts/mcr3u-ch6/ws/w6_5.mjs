// MCR3U Worksheet 6.5 — Graphing Sinusoidal Functions Using Transformations (teacher edition)
import { waveT, gridW, sin, cos } from "./sinT.mjs";

const S = String.raw;
const SIN = [[0, 0], [90, 1], [180, 0], [270, -1], [360, 0]], COS = [[0, 1], [90, 0], [180, -1], [270, 0], [360, 1]];
const map = (base, a, k, d, c) => base.map(([x, y]) => [Math.round((x / k + d) * 100) / 100, Math.round((a * y + c) * 100) / 100 + 0]);
const list = (pts) => pts.map(([x, y]) => `(${x}°, ${y})`).join(", ").replace(/-/g, "−");

const EXAMPLES = [
  { title: "Down 2", q: S`Find the key points of $y=\sin x-2$.`, steps: ["Subtract 2 from each y."], ans: list(map(SIN, 1, 1, 0, -2)) },
  { title: "Vertical stretch", q: S`Find the key points of $y=3\cos x$.`, steps: ["Multiply each y by 3."], ans: list(map(COS, 3, 1, 0, 0)) },
  { title: "Compression", q: S`Find the key points of $y=\sin4x$.`, steps: ["Divide each x by 4."], ans: list(map(SIN, 1, 4, 0, 0)) },
  { title: "Phase shift", q: S`Find the key points of $y=\cos(x-45^\circ)$.`, steps: ["Add 45 to each x."], ans: list(map(COS, 1, 1, 45, 0)) },
  { title: "Reflect and lift", q: S`Find the key points of $y=-\sin x+1$.`, steps: [S`y: $-y+1$.`], ans: list(map(SIN, -1, 1, 0, 1)) },
  { title: "Stretch and translate", q: S`Graph one cycle of $y=2\sin(0.5x)-1$.`,
    fig: waveT((x) => 2 * sin(0.5 * x) - 1, { xmin: 0, xmax: 720, ymin: -4, ymax: 2 }, { x: 90, y: 1 }, { axis: -1, pts: map(SIN, 2, 0.5, 0, -1) }),
    steps: [S`x: $\frac x{0.5}=2x$; y: $2y-1$.`], ans: list(map(SIN, 2, 0.5, 0, -1)) },
  { title: "All four, cosine", q: S`Graph one cycle of $y=4\cos(3(x+20^\circ))+2$.`,
    fig: waveT((x) => 4 * cos(3 * (x + 20)) + 2, { xmin: -30, xmax: 120, ymin: -3, ymax: 7 }, { x: 15, y: 1 }, { axis: 2, pts: map(COS, 4, 3, -20, 2) }),
    steps: [S`x: $\frac x3-20$; y: $4y+2$.`], ans: list(map(COS, 4, 3, -20, 2)) },
  { title: "Reflected sine", q: S`Find the key points of $y=-2\sin(2(x-30^\circ))+3$.`, steps: [S`x: $\frac x2+30$; y: $-2y+3$.`], ans: list(map(SIN, -2, 2, 30, 3)) },
  { title: "Range and y-intercept", q: S`State the range and y-intercept of $y=2\cos2x+3$.`, steps: [S`Range $3\pm2$; at $x=0$: $2(1)+3$.`], ans: S`$1\le y\le5$; y-intercept 5` },
];

const G = gridW({ xmin: -90, xmax: 450, ymin: -5, ymax: 5 }, { x: 45, y: 1 });
const PROBLEMS = [
  { level: 1, q: S`Find the image of $(90^\circ,1)$ under $y=\sin x+5$.`, recap: "One point.", ans: "(90°, 6)" },
  { level: 1, q: S`Find the image of the cosine point $(180^\circ,-1)$ under $y=4\cos x$.`, recap: "One point.", ans: "(180°, −4)" },
  { level: 1, q: S`State the period of $y=\cos5x$.`, recap: "Period.", ans: "72°" },
  { level: 2, q: S`Find the key points of $y=3\sin x-1$ and sketch one cycle.`, recap: "Sketch.", ans: list(map(SIN, 3, 1, 0, -1)), fig: G },
  { level: 2, q: S`Find the key points of $y=\cos2x+1$.`, recap: "Key points.", ans: list(map(COS, 1, 2, 0, 1)) },
  { level: 2, q: S`Find the key points of $y=\sin(x-60^\circ)$.`, recap: "Key points.", ans: list(map(SIN, 1, 1, 60, 0)) },
  { level: 2, q: S`Find the key points of $y=-\cos x+2$.`, recap: "Key points.", ans: list(map(COS, -1, 1, 0, 2)) },
  { level: 2, q: S`State the range and y-intercept of $y=5\sin(x+30^\circ)-2$.`, recap: "Range, intercept.", ans: S`$-7\le y\le3$; $5\sin30^\circ-2=0.5$` },
  { level: 3, space: 5, q: S`Find the key points of $y=3\cos(2(x-30^\circ))-1$ and sketch one cycle.`, recap: "Sketch.", ans: list(map(COS, 3, 2, 30, -1)), fig: G },
  { level: 3, space: 4, q: S`Find the key points of $y=-2\sin\left(\frac12(x+60^\circ)\right)+4$.`, recap: "Stretch + shift.", ans: list(map(SIN, -2, 0.5, -60, 4)) },
  { level: 3, space: 4, q: S`Find the x-intercepts of $y=2\sin x-1$ for $0^\circ\le x\le360^\circ$.`, recap: "Intercepts.", ans: "30°, 150°" },
  { level: 3, space: 4, q: S`Find the x-intercepts of $y=4\cos2x+2$ for $0^\circ\le x\le360^\circ$.`, recap: "Intercepts.", ans: S`$\cos2x=-\frac12$: 60°, 120°, 240°, 300°` },
  { level: 3, space: 4, q: S`A student graphed $y=\sin(2x+60^\circ)$ by shifting $y=\sin2x$ 60° left. Explain the error and give the correct shift.`, recap: "Error analysis.", ans: S`$2x+60^\circ=2(x+30^\circ)$: shift 30° left` },
];

export const WS = {
  code: "6.5",
  title: "Graphing Sinusoidal Functions Using Transformations",
  bigideas: S`To graph $y=a\sin(k(x-d))+c$, map the five key points of one parent cycle with $(x,y)\to\left(\frac xk+d,\ ay+c\right)$, draw the axis $y=c$, join smoothly and repeat every period $\frac{360^\circ}{k}$.`,
  goals: ["List parent key points.", "Apply the mapping rule.", "Sketch one or more cycles.", "Find range and intercepts."],
  curriculum: "D2.7",
  vocab: [["Key points", "quarter-period points of one cycle"], ["Mapping", "$(x,y)\\to(\\frac xk+d,\\ ay+c)$"]],
  hook: "Give students the five parent points on cards. Ask them to move each card to graph y = sin x + 2, then y = 2 sin x.",
  concepts: [
    ["1. Parent key points", S`${waveT([(x) => sin(x), (x) => cos(x)], { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, { x: 90, y: 0.5 }, { width: 5.5, pts: SIN.map(([x, y]) => [x, y, false]) })}Sine: ${list(SIN)}.`],
    ["2. The mapping rule", "x: divide by k, then add d. y: multiply by a, then add c."],
    ["3. Check", "Substitute one image point in the equation."],
  ],
  tips: ["Factor k first.", "Divide (not multiply) by k.", "Draw the axis first.", "Quarter-period spacing.", "Smooth curves."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
