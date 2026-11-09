// MCF3M chapter 6 written-response questions (Part C of printed tests), each with a figure and a marking guide.
import { sDoc, sd, cd, sinF, repeat, P } from "./sfig.mjs";
import { lesson } from "../plan.mjs";
const S = String.raw;
const W = (code, difficulty, points, prompt, feedback, fig) => ({ topic: lesson(code).full, difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const f = (v) => v.toFixed(2);
const asd = (v) => (Math.asin(v) * 180) / Math.PI;
const wave = (a, d, c, o = {}) => sDoc([{ f: sinF(a, d, c), color: "violet" }], { base: false, view: { xmin: o.xmin ?? 0, xmax: o.xmax ?? 360, ymin: o.ymin ?? Math.min(-1.5, c - Math.abs(a) - 1), ymax: o.ymax ?? Math.max(1.5, c + Math.abs(a) + 1) }, step: { x: o.sx ?? 90, y: o.sy ?? 1 }, points: o.points ?? [], lines: o.lines ?? [] });
const wheel = (r, hub, T) => (t) => hub - r * cd((360 * t) / T);
const tg = (fn, view, step, o = {}) => sDoc([{ f: fn, color: "violet" }], { base: false, view, step, xlabel: o.xlabel ?? "t", ylabel: o.ylabel ?? "y", lines: o.lines ?? [], points: o.points ?? [] });

export const WRITTEN = [
  W("6.1", "medium", 4, S`The graph shows a repeating pattern. (a) State the period, axis and amplitude. (b) Find $f(53)$. (c) Explain how you used the period.`,
    S`(a) period $8$, axis $y=3$, amplitude $4$. (b) $53=6(8)+5$, so $f(53)=f(5)$; the graph falls $2$ per unit from $(4,7)$: $f(5)=5$. (c) $f(x+8)=f(x)$, remove whole periods. [2, 1, 1.]`,
    sDoc([], { base: false, segs: [repeat([[0, -1], [4, 7], [8, -1]], 8, 3)], view: { xmin: 0, xmax: 24, ymin: -2, ymax: 8 }, step: { x: 2, y: 1 } })),
  W("6.1", "hard", 5, S`High tide of $6.8$ m is at 2:10 a.m.; the next low of $1.2$ m is at 8:25 a.m. (a) Find the amplitude and the axis. (b) Find the period. (c) Predict the times of the next two high tides. (d) Sketch one cycle.`,
    S`(a) $2.8$ m, $y=4$. (b) $2\times6$ h $15$ min $=12.5$ h. (c) 2:40 p.m., 3:10 a.m. (d) smooth wave from $6.8$ down to $1.2$ and back. [1, 1, 2, 1.]`,
    tg((t) => 4 + 2.8 * cd((360 / 12.5) * (t - 2.1667)), { xmin: 0, xmax: 16, ymin: 0, ymax: 8 }, { x: 2, y: 1 }, { xlabel: "t (h)", ylabel: "d (m)" })),
  W("6.2", "medium", 4, S`(a) A radius of $12$ is rotated $145^\circ$. Find the end point and $\sin145^\circ$. (b) Solve $\sin x=0.45$ for $0^\circ\le x\le360^\circ$.`,
    S`(a) $(${f(12 * cd(145))},\ ${f(12 * sd(145))})$, $\sin145^\circ\approx${f(sd(145))}$. (b) $${f(asd(0.45))}^\circ$, $${f(180 - asd(0.45))}^\circ$. [2, 2.]`,
    wave(1, 0, 0, { sy: 0.5, lines: [{ m: 0, b: 0.45, color: "green", dash: true }] })),
  W("6.2", "hard", 5, S`(a) Solve $\sin x=-0.68$ for $0^\circ\le x\le720^\circ$. (b) Explain, using the graph, why there are four solutions. (c) Find $\sin(-490^\circ)$.`,
    S`(a) $${f(180 + asd(0.68))}^\circ$, $${f(360 - asd(0.68))}^\circ$, $${f(540 + asd(0.68))}^\circ$, $${f(720 - asd(0.68))}^\circ$. (b) two crossings per cycle, two cycles. (c) $-490+720=230$: $${f(sd(230))}$. [3, 1, 1.]`,
    wave(1, 0, 0, { xmax: 720, sy: 0.5, lines: [{ m: 0, b: -0.68, color: "green", dash: true }] })),
  W("6.3", "medium", 4, S`For $y=-3\sin x+2$: (a) state amplitude, axis and range; (b) give the key points and sketch; (c) find the maximum point.`,
    S`(a) $3$, $y=2$, $-1\le y\le5$. (b) $(0,2),(90,-1),(180,2),(270,5),(360,2)$. (c) $(270,\,5)$. [1, 2, 1.]`,
    wave(-3, 0, 2, { points: [P(90, -1, null, "red"), P(270, 5)] })),
  W("6.3", "hard", 5, S`The graph shown has the form $y=a\sin x+c$. (a) Find $a$ and $c$. (b) Solve $a\sin x+c=0$ for $0^\circ\le x\le360^\circ$. (c) For what fraction of the cycle is $y>0$?`,
    S`(a) $a=4$, $c=-2$. (b) $\sin x=0.5$: $30^\circ$, $150^\circ$. (c) $\frac{120}{360}=\frac13$. [2, 2, 1.]`,
    wave(4, 0, -2, { points: [P(90, 2), P(270, -6, null, "red")] })),
  W("6.4", "medium", 4, S`For $y=2\sin(x-45^\circ)+1$: (a) describe the transformations; (b) give the key points; (c) state the max and min points.`,
    S`(a) stretch by $2$, right $45^\circ$, up $1$. (b) $(45,1),(135,3),(225,1),(315,-1),(405,1)$. (c) max $(135,3)$, min $(315,-1)$. [1, 2, 1.]`,
    wave(2, 45, 1, { xmax: 450, points: [P(135, 3), P(315, -1, null, "red")] })),
  W("6.4", "hard", 5, S`The graph shows a sine wave. (a) Write its equation as $y=a\sin(x-d)+c$ with $a>0$. (b) Write a second equation with $a<0$. (c) Find $y$ at $x=0$.`,
    S`(a) $y=3\sin(x-30^\circ)+1$ (max $(120,4)$). (b) $y=-3\sin(x-210^\circ)+1$. (c) $3\sin(-30^\circ)+1=-0.5$. [2, 2, 1.]`,
    wave(3, 30, 1, { xmax: 420, points: [P(120, 4), P(300, -2, null, "red")] })),
  W("6.5", "medium", 4, S`A wheel has radius $12$ m, hub $14$ m, turns every $48$ s, and riders board at the bottom. (a) Sketch two turns. (b) Find the height at $t=8$ s and $t=100$ s.`,
    S`(a) $(0,2),(12,14),(24,26),(36,14),(48,2)$, repeat. (b) $8$ s $=60^\circ$: $14-12\cos60^\circ=8$ m; $100-96=4$ s $=30^\circ$: $14-12\cos30^\circ\approx${f(wheel(12, 14, 48)(100))}$ m. [2, 2.]`,
    tg(wheel(12, 14, 48), { xmin: 0, xmax: 96, ymin: 0, ymax: 28 }, { x: 12, y: 2 }, { xlabel: "t (s)", ylabel: "h (m)" })),
  W("6.5", "hard", 5, S`Harbour depth is $d(t)=3\sin(30(t-1))+6$ m, $t$ in hours after midnight. (a) Find the high and low depths and the period. (b) A ship needs at least $7.5$ m: find the safe interval in the first $12$ h. (c) How would the graph change if a storm raised every depth by $0.8$ m?`,
    S`(a) $9$ m, $3$ m, $12$ h. (b) $\sin(30(t-1))\ge0.5$: $2\le t\le6$ (2:00–6:00 a.m.). (c) shifted up $0.8$ (axis $6.8$), same amplitude and period. [1, 3, 1.]`,
    tg((t) => 3 * sd(30 * (t - 1)) + 6, { xmin: 0, xmax: 24, ymin: 0, ymax: 10 }, { x: 2, y: 1 }, { xlabel: "t (h)", ylabel: "d (m)", lines: [{ m: 0, b: 7.5, color: "green", dash: true }] })),
];
