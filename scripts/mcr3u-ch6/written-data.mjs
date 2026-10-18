// MCR3U chapter 6 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
import { waveD, cos, sin, acos, rd } from "./bank/fig.mjs";

const T = {
  1: "6.1 Periodic Functions and Their Properties", 2: "6.2 Graphs of Sine and Cosine", 3: "6.3 Interpreting Sinusoidal Graphs",
  4: "6.4 Transformations of Sinusoidal Functions", 5: "6.5 Graphing Sinusoidal Functions Using Transformations", 6: "6.6 Equations of Sinusoidal Functions", 7: "6.7 Solving Problems with Sinusoidal Models",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const TS = { xlabel: "t (s)", ylabel: "h (m)" };
const above = (360 - 2 * acos(-0.4)) / 4; // wheel W(7): −15cos(4t)+17 ≥ 23


export const WRITTEN = [
  W(1, "medium", 4, S`The graph shows the water level in a tank that is filled and drained by a pump. (a) Explain why the function is periodic and state its period. (b) State the maximum, minimum, axis and amplitude. (c) Predict the level at $t=47$ min.`,
    S`(a) The pattern repeats exactly every 8 min. (b) Max 9, min 1, axis $y=5$, amplitude 4. (c) $47=5\times8+7$: same as $t=7$, level 3. [1, 2, 1.]`,
    waveD([], { xmin: 0, xmax: 24, ymin: 0, ymax: 10 }, { x: 2, y: 1 }, { xlabel: "t (min)", ylabel: "level (m)", segs: [0, 8, 16].map((s) => ({ pts: [[s, 1], [s + 4, 9], [s + 8, 1]], color: "violet" })) })),
  W(2, "medium", 4, S`(a) Complete the graphs of $y=\sin x$ and $y=\cos x$ for $0^\circ\le x\le360^\circ$ and list their zeros. (b) Use the graphs to explain why $\cos x=\sin(x+90^\circ)$. (c) Solve $\cos x=\frac12$ for $0^\circ\le x\le720^\circ$.`,
    S`(a) sin: 0°, 180°, 360°; cos: 90°, 270°. (b) Each cosine value appears on the sine graph 90° later, i.e. cosine is sine shifted 90° left. (c) 60°, 300°, 420°, 660°. [1, 1, 2.]`,
    waveD([(x) => sin(x), (x) => cos(x)], { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, { x: 45, y: 0.5 })),
  W(2, "hard", 5, S`(a) Solve $\sin x=\cos x$ for $0^\circ\le x\le720^\circ$ and mark the solutions on the graph. (b) For which $x$ in $0^\circ\le x\le360^\circ$ is $\sin x>\cos x$? (c) Explain, using the unit circle, why $\sin(-x)=-\sin x$ but $\cos(-x)=\cos x$.`,
    S`(a) $\tan x=1$: 45°, 225°, 405°, 585°. (b) $45^\circ<x<225^\circ$. (c) Reflecting the point in the x-axis changes the sign of y but not x. [2, 2, 1.]`,
    waveD([(x) => sin(x), (x) => cos(x)], { xmin: 0, xmax: 720, ymin: -1.5, ymax: 1.5 }, { x: 90, y: 0.5 })),
  W(3, "medium", 4, S`The graph shows a rider's height on a Ferris wheel. (a) Find the radius, the height of the hub and the time for one turn. (b) When is the rider at the top during the first 2 min? (c) The ride lasts 3 turns: state the domain and range.`,
    S`(a) Radius 16 m, hub 18 m, 40 s. (b) $t=20,\ 60,\ 100$ s. (c) $0\le t\le120$; $2\le h\le34$. [2, 1, 1.]`,
    waveD((t) => 18 - 16 * cos(9 * t), { xmin: 0, xmax: 120, ymin: 0, ymax: 36 }, { x: 10, y: 4 }, TS)),
  W(3, "hard", 5, S`A water wheel of radius 3 m has its centre 1.2 m above the water and turns once every 18 s. A paddle starts level with the centre, rising. Its height is $h=1.2+3\sin(20t)$. (a) Explain each number in the equation. (b) Find the lowest point of the paddle. (c) For how long in each turn is the paddle under water?`,
    S`(a) 1.2 = centre height, 3 = radius, 20 = 360/18 (degrees per second). (b) $-1.8$ m (1.8 m below the surface). (c) Under water when $\sin(20t)<-0.4$: $20t$ from $${rd(180 + (Math.asin(0.4) * 180) / Math.PI, 1)}^\circ$ to $${rd(360 - (Math.asin(0.4) * 180) / Math.PI, 1)}^\circ$, so $\approx${rd((180 - 2 * (Math.asin(0.4) * 180) / Math.PI) / 20, 2)}$ s. [2, 1, 2.]`,
    waveD((t) => 1.2 + 3 * sin(20 * t), { xmin: 0, xmax: 36, ymin: -3, ymax: 5 }, { x: 3, y: 1 }, { ...TS, axis: 0 })),
  W(4, "medium", 4, S`For $y=-3\cos(2x-60^\circ)+1$: (a) rewrite the bracket in the form $k(x-d)$; (b) state the amplitude, period, phase shift and axis; (c) state the range and the maximum value, and where the first maximum after 0° occurs.`,
    S`(a) $2(x-30^\circ)$. (b) 3 (reflected), 180°, 30° right, $y=1$. (c) $-2\le y\le4$; max 4 when $\cos=-1$: $2(x-30^\circ)=180^\circ\Rightarrow x=120^\circ$. [1, 2, 1.]`,
    waveD((x) => -3 * cos(2 * x - 60) + 1, { xmin: 0, xmax: 360, ymin: -3, ymax: 5 }, { x: 30, y: 1 }, { axis: 1 })),
  W(4, "hard", 5, S`The grey graph is $y=\sin x$; the violet graph is a transformation of it. (a) Describe the transformations in order. (b) Write its equation. (c) A student says the period is 120° "because k = 120". Explain the error.`,
    S`(a) Horizontal compression by $\frac13$, 15° right, vertical stretch by 2, 1 down. (b) $y=2\sin(3(x-15^\circ))-1$. (c) k = 3; the period is 360°/k = 120° — the student confused k with the period. [2, 2, 1.]`,
    waveD([{ f: (x) => sin(x), color: "gray" }, { f: (x) => 2 * sin(3 * (x - 15)) - 1, color: "violet" }], { xmin: 0, xmax: 360, ymin: -4, ymax: 2 }, { x: 15, y: 1 })),
  W(5, "medium", 4, S`(a) List the five key points of one cycle of $y=\cos x$. (b) Map them onto $y=2\cos(3(x+20^\circ))-1$. (c) Sketch one cycle and state the domain and range.`,
    S`(a) (0°,1), (90°,0), (180°,−1), (270°,0), (360°,1). (b) (−20°,1), (10°,−1), (40°,−3), (70°,−1), (100°,1). (c) Domain all real x; range $-3\le y\le1$. [1, 2, 1.]`,
    waveD((x) => 2 * cos(3 * (x + 20)) - 1, { xmin: -30, xmax: 120, ymin: -4, ymax: 2 }, { x: 15, y: 1 }, { axis: -1, pts: [[-20, 1], [10, -1], [40, -3], [70, -1], [100, 1]] })),
  W(5, "hard", 5, S`(a) Sketch two cycles of $y=-4\sin\left(\frac12(x-30^\circ)\right)+2$ using key points. (b) Find its x-intercepts in the first cycle. (c) Explain why the order "divide by k, then add d" matters when mapping x-coordinates.`,
    S`(a) Key points (30°,2), (210°,−2), (390°,2), (570°,6), (750°,2); period 720°. (b) $\sin(\frac12(x-30^\circ))=\frac12$: $\frac12(x-30^\circ)=30^\circ,150^\circ\Rightarrow x=90^\circ,330^\circ$. (c) The bracket is $k(x-d)$: x is shifted after being stretched. [2, 2, 1.]`,
    waveD((x) => -4 * sin(0.5 * (x - 30)) + 2, { xmin: 0, xmax: 1440, ymin: -3, ymax: 7 }, { x: 180, y: 1 }, { axis: 2 })),
  W(6, "medium", 4, S`(a) Write a cosine equation for the graph. (b) Write a sine equation for the same graph. (c) Check one of your equations at a point you did not use.`,
    S`(a) Max (20°, 7), min (80°, 1): $a=3$, $c=4$, period 120°, $k=3$: $y=3\cos(3(x-20^\circ))+4$. (b) Rising axis crossing at $20^\circ-30^\circ=-10^\circ$: $y=3\sin(3(x+10^\circ))+4$. (c) e.g. $x=50^\circ$: $3\cos90^\circ+4=4$ ✓. [2, 1, 1.]`,
    waveD((x) => 3 * cos(3 * (x - 20)) + 4, { xmin: -30, xmax: 240, ymin: 0, ymax: 8 }, { x: 15, y: 1 }, { pts: [[20, 7], [80, 1]] })),
  W(6, "hard", 5, S`A sinusoid has a minimum at $(-15^\circ,-6)$ and the next maximum at $(45^\circ,2)$. (a) Find its amplitude, axis and period. (b) Write a cosine equation with $a<0$. (c) Write a cosine equation with $a>0$ and explain why both are correct.`,
    S`(a) Amplitude 4, axis $y=-2$, period 120°. (b) $y=-4\cos(3(x+15^\circ))-2$. (c) $y=4\cos(3(x-45^\circ))-2$: one starts at the min, the other at the max — they are the same curve. [2, 1, 2.]`,
    waveD((x) => -4 * cos(3 * (x + 15)) - 2, { xmin: -60, xmax: 180, ymin: -7, ymax: 3 }, { x: 15, y: 1 }, { pts: [[-15, -6], [45, 2]] })),
  W(7, "medium", 4, S`A Ferris wheel has radius 15 m, its hub is 17 m above the ground, and it turns once every 90 s. Riders board at the bottom. (a) Write a model $h(t)$. (b) Find the height after 1 min. (c) For how long per turn is a rider above 23 m?`,
    S`(a) $h=-15\cos(4t)+17$. (b) $-15\cos240^\circ+17=24.5$ m. (c) $\cos(4t)\le-0.4$: $4t$ from $${rd(acos(-0.4), 1)}^\circ$ to $${rd(360 - acos(-0.4), 1)}^\circ$, so $\approx${rd(above, 1)}$ s. [1, 1, 2.]`,
    waveD((t) => -15 * cos(4 * t) + 17, { xmin: 0, xmax: 180, ymin: 0, ymax: 34 }, { x: 15, y: 4 }, { ...TS, lines: [{ m: 0, b: 23, color: "amber", dash: true }] })),
  W(7, "hard", 5, S`A town has 16.1 h of daylight on day 172 and 8.3 h on day 355. (a) Write a cosine model $L(t)$, t in days. (b) Predict the daylight on day 60. (c) For how many days a year are there at least 13.2 h of daylight? (d) How would the model change for a town farther north with longer summer days and shorter winter days?`,
    S`(a) $L=3.9\cos\left(\frac{360}{365}(t-172)\right)+12.2$. (b) $\approx${rd(3.9 * cos((360 / 365) * (60 - 172)) + 12.2, 2)}$ h. (c) $3.9\cos\theta+12.2\ge13.2\Rightarrow\cos\theta\ge\frac1{3.9}\approx0.256\Rightarrow|\theta|\le${rd(acos(1 / 3.9), 1)}^\circ$; in days $2\times${rd(acos(1 / 3.9), 1)}\times\frac{365}{360}\approx${rd((2 * acos(1 / 3.9) * 365) / 360, 0)}$ days. (d) a larger amplitude; the axis and period stay about the same. [1, 1, 2, 1.]`,
    waveD((t) => 3.9 * cos((360 / 365) * (t - 172)) + 12.2, { xmin: 0, xmax: 365, ymin: 6, ymax: 18 }, { x: 30, y: 2 }, { xlabel: "day", ylabel: "hours", lines: [{ m: 0, b: 13.2, color: "amber", dash: true }] })),
];

