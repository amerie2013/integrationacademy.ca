// MCF3M Worksheet 6.5 — Sinusoidal Models (teacher edition). Numbers computed in code.
import { svgT } from "../../ws/figT.mjs";
import { sDoc, sd, cd, repeat, P } from "../sfig.mjs";
import { tv } from "../../lib.mjs";
const S = String.raw;
const f = (v) => v.toFixed(2);
const G = (curves, o, w = 5.4) => svgT(sDoc(curves, { base: false, ...o }), w);
const wheel = (r, hub, T) => (t) => hub - r * cd((360 * t) / T);
const tide = (t) => 2 * sd(30 * t) + 4.5;
const temp = (m) => 14 * sd(30 * (m - 4)) + 6;
const pedal = (t) => 18 * sd(240 * t) + 32;
const buoy = (t) => 2.2 + 1.2 * sd(72 * (t - 0.75));
const tabT = (rows) => `\\begin{center}\\begin{tabular}{|c|${"c|".repeat(rows.length)}}\\hline $t$ & ${rows.map((r) => r[0]).join(" & ")}\\\\\\hline $y$ & ${rows.map((r) => r[1]).join(" & ")}\\\\\\hline\\end{tabular}\\end{center}`;

const EXAMPLES = [
  { title: "Build a wheel model", q: S`A wheel has radius $20$ m, hub $23$ m and turns once every $120$ s; riders board at the bottom. State the max, min and period, and find the height at $t=40$ s.`, fig: G([{ f: wheel(20, 23, 120), color: "violet" }], { view: { xmin: 0, xmax: 240, ymin: 0, ymax: 46 }, step: { x: 30, y: 5 }, points: [P(40, 33, "(40, 33)", "red"), P(60, 43)], xlabel: "t (s)", ylabel: "h (m)" }),
    steps: [S`Max $23+20=43$ m, min $3$ m, period $120$ s.`, S`At $40$ s the wheel has turned $\frac{40}{120}\times360=120^\circ$ from the bottom.`, S`$h=23-20\cos120^\circ=23+10=33$ m.`], ans: S`max $43$ m, min $3$ m, period $120$ s; $h(40)=33$ m` },
  { title: "Change the wheel", q: S`The same wheel slows to $150$ s per turn. Separately, a new wheel has radius $25$ m and hub $28$ m at $120$ s per turn. Describe each change to the graph.`, fig: G([{ f: wheel(20, 23, 120), color: "gray" }, { f: wheel(20, 23, 150), color: "violet" }, { f: wheel(25, 28, 120), color: "green" }], { view: { xmin: 0, xmax: 240, ymin: 0, ymax: 56 }, step: { x: 30, y: 5 }, xlabel: "t (s)", ylabel: "h (m)" }),
    steps: [S`Slower: period $120\to150$ s, waves wider; heights unchanged (violet).`, S`Bigger: amplitude $20\to25$, axis $23\to28$, max $53$ m; min still $3$ m; period unchanged (green).`], ans: S`slower $\Rightarrow$ longer period; bigger $\Rightarrow$ larger amplitude and higher axis` },
  { title: "Tide model", q: S`$d(t)=2\sin(30t)+4.5$ m, $t$ in hours after midnight. Find max, min, period, $d(5)$, and the times in the first $12$ h when $d=3.5$.`, fig: G([{ f: tide, color: "violet" }], { view: { xmin: 0, xmax: 24, ymin: 0, ymax: 8 }, step: { x: 2, y: 1 }, lines: [{ m: 0, b: 3.5, color: "green", dash: true }], points: [P(5, 5.5, "(5, 5.5)"), P(7, 3.5, "(7, 3.5)", "red"), P(11, 3.5, "(11, 3.5)", "red")], xlabel: "t (h)", ylabel: "d (m)" }),
    steps: [S`Max $6.5$ m, min $2.5$ m, period $\frac{360}{30}=12$ h.`, S`$d(5)=2\sin150^\circ+4.5=5.5$ m.`, S`$\sin(30t)=-0.5\Rightarrow30t=210$ or $330\Rightarrow t=7$ or $11$.`], ans: S`$6.5$, $2.5$, $12$ h; $5.5$ m; 7:00 and 11:00` },
  { title: "Monthly temperature", q: S`The mean temperature in month $m$ ($m=1$ is January) is $T(m)=14\sin(30(m-4))+6$ °C. Find the warmest and coldest months and $T(10)$.`, fig: G([{ f: temp, color: "violet" }], { view: { xmin: 0, xmax: 13, ymin: -10, ymax: 22 }, step: { x: 1, y: 4 }, points: [P(7, 20, "(7, 20)"), P(1, -8, "(1, −8)", "red"), P(10, 6, "(10, 6)", "green")], xlabel: "month", ylabel: "T (°C)" }),
    steps: [S`Max when $30(m-4)=90\Rightarrow m=7$ (July): $20$ °C.`, S`Min when $30(m-4)=-90\Rightarrow m=1$ (January): $-8$ °C.`, S`$T(10)=14\sin180^\circ+6=6$ °C.`], ans: S`July $20$ °C, January $-8$ °C, $T(10)=6$ °C` },
  { title: "Pedal height", q: S`A pedal's height is $h(t)=18\sin(240t)+32$ cm. Find the period, the max and min heights and $h(2)$.`, fig: G([{ f: pedal, color: "violet" }], { view: { xmin: 0, xmax: 3, ymin: 0, ymax: 55 }, step: { x: 0.375, y: 5 }, points: [P(2, +f(pedal(2)), `(2, ${f(pedal(2))})`, "red")], xlabel: "t (s)", ylabel: "h (cm)" }),
    steps: [S`Period $\frac{360}{240}=1.5$ s.`, S`Max $50$ cm, min $14$ cm.`, S`$h(2)=18\sin480^\circ+32=18\sin120^\circ+32\approx${f(pedal(2))}$ cm.`], ans: S`$1.5$ s; $50$ and $14$ cm; $\approx${f(pedal(2))}$ cm` },
  { title: "Sinusoidal or not?", q: S`Which table could be sinusoidal? Table A: $t=0,1,2,3,4,5,6$: $y=4,7,4,1,4,7,4$. Table B: $y=0,2,4,0,2,4,0$.`, fig: G([{ f: (t) => 4 + 3 * sd(90 * t), color: "violet" }], { points: [0, 1, 2, 3, 4, 5, 6].map((t) => P(t, Math.round(4 + 3 * sd(90 * t)), false)), segs: [{ pts: [[0, 0], [1, 2], [2, 4], [2.01, 0], [3, 2], [4, 4], [4.01, 0], [5, 2], [6, 4]], color: "green" }], view: { xmin: 0, xmax: 6, ymin: -1, ymax: 8 }, step: { x: 1, y: 1 } }),
    steps: [S`A rises and falls symmetrically about $y=4$ with period $4$: sinusoidal shape (violet).`, S`B climbs steadily then drops suddenly (a sawtooth): periodic but not sinusoidal (green).`], ans: S`A sinusoidal; B periodic, not sinusoidal` },
  { title: "Reading a buoy graph", q: S`A buoy's height graph peaks at $t=2$ s and $t=7$ s at $3.4$ m, with troughs at $1.0$ m. Find the period, amplitude and axis, and the height at $t=22$ s.`, fig: G([{ f: buoy, color: "violet" }], { view: { xmin: 0, xmax: 15, ymin: 0, ymax: 4 }, step: { x: 1, y: 0.5 }, points: [P(2, 3.4), P(7, 3.4)], xlabel: "t (s)", ylabel: "h (m)" }),
    steps: [S`Period $7-2=5$ s; amplitude $\frac{3.4-1.0}2=1.2$ m; axis $y=2.2$.`, S`$22=2+4\times5$: a peak, so $h(22)=3.4$ m.`], ans: S`$5$ s, $1.2$ m, $y=2.2$, $3.4$ m` },
  { title: "Household voltage", q: S`A voltage is $V=170\sin(21\,600t)$ volts, $t$ in seconds. Find the peak voltage and the period, and the number of cycles per second.`, fig: G([{ f: (t) => 170 * sd(21600 * t), color: "violet" }], { view: { xmin: 0, xmax: 0.05, ymin: -200, ymax: 200 }, step: { x: 1 / 120, y: 50 }, xlabel: "t (s)", ylabel: "V" }),
    steps: [S`Amplitude $170$ V.`, S`Period $\frac{360}{21\,600}=\frac1{60}$ s.`, S`$60$ cycles per second.`], ans: S`$170$ V; $\frac1{60}$ s; $60$` },
  { title: "Time above a level", q: S`For the wheel in Example 1 (radius $20$, hub $23$, $120$ s), how long per turn is a rider above $33$ m?`, fig: G([{ f: wheel(20, 23, 120), color: "violet" }], { view: { xmin: 0, xmax: 120, ymin: 0, ymax: 46 }, step: { x: 20, y: 5 }, lines: [{ m: 0, b: 33, color: "green", dash: true, label: "33 m" }], points: [P(40, 33, "(40, 33)"), P(80, 33, "(80, 33)")], xlabel: "t (s)", ylabel: "h (m)" }),
    steps: [S`$33$ m is $10$ m above the hub, half the radius: $60^\circ$ either side of the top.`, S`From $120^\circ$ to $240^\circ$ past the bottom: $t=40$ s to $80$ s.`, S`$40$ s per turn.`], ans: S`$40$ s` },
];

const PROBLEMS = [
  { level: 1, q: S`A wheel has radius $14$ m and hub $16$ m. Find the max and min heights.`, ans: S`$30$ m, $2$ m` },
  { level: 1, q: S`A tide graph has highs $12.4$ h apart. What is its period?`, ans: S`$12.4$ h` },
  { level: 1, q: S`$d(t)=3\sin(30t)+5$. Find $d(3)$ and $d(9)$.`, ans: S`$8$; $2$` },
  { level: 2, q: S`A wheel turns once every $90$ s from the bottom, radius $10$ m, hub $12$ m. Give the quarter-turn points.`, ans: S`$(0,2),(22.5,12),(45,22),(67.5,12),(90,2)$` },
  { level: 2, q: S`For the wheel in the previous question, find $h(30)$.`, ans: S`$120^\circ$: $12-10\cos120^\circ=17$ m` },
  { level: 2, q: S`$T(m)=12\sin(30(m-4))+8$. Find the warmest month and its temperature.`, ans: S`July ($m=7$), $20$ °C` },
  { level: 2, q: S`A spring has $h(t)=5\sin(90t)+30$ cm. Find the period and $h(7)$.`, ans: S`$4$ s; $h(7)=5\sin630^\circ+30=25$ cm` },
  { level: 2, q: S`How does a wheel's graph change if the boarding platform is raised $1$ m and the hub raised $1$ m?`, ans: S`whole graph up $1$ m (axis $+1$)` },
  { level: 3, space: 5, q: S`With $d(t)=2\sin(30t)+4.5$, a ship needs at least $5.5$ m. Find the safe interval in $0\le t\le12$.`, ans: S`$\sin(30t)\ge0.5$: $1\le t\le5$` },
  { level: 3, space: 5, q: S`Wheel A: radius $8$ m, hub $10$ m, $40$ s. Wheel B: radius $12$ m, hub $14$ m, $60$ s. Both riders board at the bottom at $t=0$. Who is higher at $t=20$ s?`, ans: S`A: top, $18$ m; B: $120^\circ$, $14+6=20$ m; B` },
  { level: 3, space: 5, q: S`A pendulum's distance from a wall is $d(t)=20\sin(180t)+50$ cm. Find the closest and farthest distances and the first time it is $60$ cm away.`, ans: S`$30$ and $70$ cm; $\sin(180t)=0.5$: $t=\frac16$ s` },
  { level: 3, space: 5, q: S`Daylight in a city varies from $7.9$ h to $16.5$ h. Find the amplitude and axis, and explain what happens to both for a city closer to the equator.`, ans: S`$4.3$ h, $12.2$ h; amplitude smaller, axis about $12$ h` },
  { level: 3, space: 5, q: S`A wheel of radius $18$ m and hub $20$ m turns once every $72$ s, boarding at the bottom. For how many seconds per turn is the rider below $11$ m?`, ans: S`$11$ is $9$ below the hub: within $60^\circ$ of the bottom: $\frac{120}{360}\times72=24$ s` },
];

export const WS = {
  code: "6.5",
  title: "Sinusoidal Models",
  bigideas: S`Sinusoidal functions model smooth repeating changes over time. For a turning wheel: amplitude $=$ radius, axis $=$ hub height, period $=$ time per turn, and the boarding point sets where the graph starts. For a given model such as $d(t)=a\sin(kt)+c$: max $c+|a|$, min $c-|a|$, period $\frac{360}{k}$. Predict by substituting $t$, and find times by solving for the angle first.`,
  goals: ["Build a wheel model.", "Read features from a model or graph.", "Predict and solve for times.", "Describe the effect of changed conditions."],
  curriculum: "C3.1, C3.2, C3.5, C3.6",
  vocab: [["Sinusoidal", "smooth sine-shaped periodic function"], ["Period", "time for one cycle"], ["Amplitude", "radius / half the range"], ["Axis", "average level"]],
  hook: S`On a wheel, are you above the hub for exactly half of each ride? Above the halfway point between hub and top for a third? Why?`,
  concepts: [
    ["1. From situation to graph", S`Max = hub $+$ radius; min = hub $-$ radius; period = time per turn; quarter-turn points.
${G([{ f: wheel(10, 12, 60), color: "violet" }], { view: { xmin: 0, xmax: 120, ymin: 0, ymax: 24 }, step: { x: 15, y: 4 }, lines: [{ m: 0, b: 12, color: "green", dash: true, label: "hub" }], xlabel: "t (s)", ylabel: "h (m)" })}`],
    ["2. Using a model", S`Substitute for heights; solve $\sin(\text{angle})=k$ for times. For $y=a\sin(kt)+c$, period $=\frac{360}{k}$.`],
  ],
  tips: ["Period is a time.", "Boarding at the bottom $\\Rightarrow$ start at the minimum.", "Use the period to reduce large $t$."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
