// MCR3U Worksheet 6.4 — Transformations of Sinusoidal Functions (teacher edition)
import { waveT, sin, cos } from "./sinT.mjs";

const S = String.raw;
const V = { xmin: -90, xmax: 450, ymin: -5, ymax: 5 }, ST = { x: 45, y: 1 };

const EXAMPLES = [
  { title: "Vertical stretch", q: S`Describe $y=4\cos x$.`, steps: ["Every y-value of y = cos x is multiplied by 4."], ans: S`amplitude 4, range $-4\le y\le4$` },
  { title: "Vertical compression", q: S`Describe $y=0.5\sin x$.`, steps: ["Every y-value is halved."], ans: S`amplitude 0.5, range $-0.5\le y\le0.5$` },
  { title: "Horizontal compression", q: S`Find the period of $y=\sin3x$.`, fig: waveT([(x) => sin(x), (x) => sin(3 * x)], { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, { x: 30, y: 0.5 }), steps: [S`$\frac{360^\circ}3$: three cycles fit where one used to.`], ans: "120°" },
  { title: "Horizontal stretch", q: S`Find the period of $y=\cos\frac x4$.`, steps: [S`$\frac{360^\circ}{1/4}$.`], ans: "1440°" },
  { title: "Phase shift", q: S`Describe $y=\sin(x+30^\circ)$.`, steps: [S`$x-d=x+30^\circ\Rightarrow d=-30^\circ$.`], ans: "30° left" },
  { title: "Vertical translation", q: S`Describe $y=\cos x-3$.`, steps: ["Every point moves down 3."], ans: S`axis $y=-3$, range $-4\le y\le-2$` },
  { title: "Reflection", q: S`Compare $y=-\sin x$ with $y=\sin x$.`, steps: ["Reflected in the x-axis: it starts at 0 going DOWN."], ans: "same amplitude and period; reflected" },
  { title: "All four parameters", q: S`State the properties of $y=3\sin(2(x-45^\circ))+1$.`,
    fig: waveT([(x) => sin(x), (x) => 3 * sin(2 * (x - 45)) + 1], V, ST, { axis: 1 }),
    steps: [S`Amplitude 3, period 180°, phase shift 45° right, axis $y=1$.`], ans: S`range $-2\le y\le4$` },
  { title: "Factor first", q: S`Find the phase shift of $y=\cos(3x+90^\circ)$.`, steps: [S`$3x+90^\circ=3(x+30^\circ)$.`], ans: "30° left" },
];

const PROBLEMS = [
  { level: 1, q: S`State the amplitude of $y=-7\cos x$.`, recap: "Amplitude.", ans: "7" },
  { level: 1, q: S`State the period of $y=\sin6x$.`, recap: "Period.", ans: "60°" },
  { level: 1, q: S`State the axis of $y=\sin x+9$.`, recap: "Axis.", ans: "y = 9" },
  { level: 2, q: S`State the amplitude, period, phase shift, axis and range of $y=2\cos(x-60^\circ)-3$.`, recap: "All properties.", ans: S`2; 360°; 60° right; $y=-3$; $-5\le y\le-1$` },
  { level: 2, q: S`State the period of $y=\sin(0.25x)$.`, recap: "Small k.", ans: "1440°" },
  { level: 2, q: S`State the phase shift of $y=\cos(2x-50^\circ)$.`, recap: "Factor.", ans: "25° right" },
  { level: 2, q: S`State the range of $y=-1.5\sin4x+0.5$.`, recap: "Range.", ans: S`$-1\le y\le2$` },
  { level: 2, q: S`Find the maximum value of $y=6\cos(x+20^\circ)-10$.`, recap: "Max.", ans: S`$-4$` },
  { level: 3, space: 4, q: "Write the equation of a sine function with amplitude 3, period 90°, phase shift 15° left and axis y = −2.", recap: "Write from properties.", ans: S`$y=3\sin(4(x+15^\circ))-2$` },
  { level: 3, space: 4, q: S`State all the properties of $y=-4\sin(0.5x+45^\circ)+1$.`, recap: "Factor 0.5.", ans: S`$0.5(x+90^\circ)$: amplitude 4 (reflected), period 720°, 90° left, axis $y=1$, range $-3\le y\le5$` },
  { level: 3, space: 4, q: S`Explain why the graph of $y=\sin(x+360^\circ)$ is identical to the graph of $y=\sin x$.`, recap: "Explain.", ans: "a shift of one full period lands every cycle on the next one" },
  { level: 3, space: 4, q: S`For which positive value of $k$ does $y=\sin kx$ show exactly 3 complete cycles from 0° to 360°?`, recap: "Find k.", ans: S`$k=3$ (period 120°)`,
    fig: waveT((x) => sin(3 * x), { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, { x: 30, y: 0.5 }) },
  { level: 3, space: 5, q: S`List, in a correct order, the transformations that map $y=\sin x$ onto $y=-2\sin(3x-60^\circ)+4$.`, recap: "Sequence.", ans: S`horizontal compression by $\frac13$; 20° right; vertical stretch by 2 and reflection in the x-axis; 4 up` },
];

export const WS = {
  code: "6.4",
  title: "Transformations of Sinusoidal Functions",
  bigideas: S`In $y=a\sin(k(x-d))+c$ or $y=a\cos(k(x-d))+c$: amplitude $|a|$ (reflection if $a<0$), period $\frac{360^\circ}{|k|}$, phase shift $d$, axis $y=c$, range $c-|a|\le y\le c+|a|$. Factor $k$ out of the bracket before reading $d$.`,
  goals: ["Describe the role of each parameter.", "State amplitude, period, phase shift, axis.", "Find domain and range.", "Write an equation from properties."],
  curriculum: "D2.5, D2.6",
  vocab: [["Amplitude", "$|a|$"], ["Period", "$\\frac{360^\\circ}{|k|}$"], ["Phase shift", "$d$"]],
  hook: S`Show $y=\sin x$ and $y=\sin2x$ on the same screen. Ask: did the wave get taller, shorter, wider or narrower? By how much?`,
  concepts: [
    ["1. Vertical: a and c", S`${waveT([(x) => sin(x), (x) => 2 * sin(x) + 1], { xmin: 0, xmax: 360, ymin: -2, ymax: 4 }, { x: 45, y: 1 }, { axis: 1, width: 5.5 })}$y=2\sin x+1$: amplitude 2, axis $y=1$.`],
    ["2. Horizontal: k and d", S`$k$ changes the period to $\frac{360^\circ}k$; $d$ slides the graph. $\cos(x-90^\circ)=\sin x$.`],
    ["3. Factor k", S`$\sin(2x-60^\circ)=\sin(2(x-30^\circ))$: the shift is 30°.`],
  ],
  tips: ["Bigger k, shorter period.", "x + d means left.", "Amplitude is never negative.", "Factor k.", "Range: c ± |a|."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
