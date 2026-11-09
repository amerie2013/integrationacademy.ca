// MCF3M Worksheet 6.1 — Periodic Functions (teacher edition).
import { svgT } from "../../ws/figT.mjs";
import { sDoc, sd, cd, repeat, P } from "../sfig.mjs";
const S = String.raw;
const G = (curves, o, w = 5.4) => svgT(sDoc(curves, { base: false, ...o }), w);
const beat = repeat([[0, 2], [1, 2], [1.5, 6], [2, 2], [4, 2]], 4, 4);
const beatV = { view: { xmin: 0, xmax: 16, ymin: 0, ymax: 7 }, step: { x: 1, y: 1 }, xlabel: "t (s)" };
const pend = (t) => 15 * sd(180 * t);
const wheel = (t) => 6 - 5 * cd(12 * t);
const damp = (t) => 6 * Math.exp(-0.2 * t) * cd(90 * t);

const EXAMPLES = [
  { title: "Is it periodic?", q: S`The graph shows a signal that is flat at $2$, spikes to $6$ and drops back, then stays flat. Is it periodic? If so, what is one cycle?`, fig: G([], { segs: [beat], ...beatV }),
    steps: [S`The shape from $t=0$ to $t=4$ (flat, spike, flat) appears again from $4$ to $8$, $8$ to $12$, \dots`, S`Shifting the graph $4$ s to the right lands it exactly on itself.`], ans: S`periodic; one cycle is $0\le t\le4$` },
  { title: "Properties", q: S`For the same signal, find the period, max, min, axis and amplitude.`, fig: G([], { segs: [beat], ...beatV, lines: [{ m: 0, b: 4, color: "green", dash: true, label: "y = 4" }] }),
    steps: [S`Period: spikes at $t=1.5,\ 5.5,\ 9.5$: $4$ s.`, S`Max $6$, min $2$.`, S`Axis $y=\frac{6+2}2=4$; amplitude $\frac{6-2}2=2$.`], ans: S`period $4$ s, max $6$, min $2$, axis $y=4$, amplitude $2$` },
  { title: "Predict", q: S`For the same signal find $f(37)$ and $f(41.5)$.`, fig: G([], { segs: [beat], ...beatV, points: [P(1, 2, "(1, 2)"), P(1.5, 6, "(1.5, 6)")] }),
    steps: [S`$37=9\times4+1\Rightarrow f(37)=f(1)=2$.`, S`$41.5=10\times4+1.5\Rightarrow f(41.5)=f(1.5)=6$ (a spike).`], ans: S`$f(37)=2$, $f(41.5)=6$` },
  { title: "A pendulum", q: S`A pendulum's horizontal position (cm from the rest point) is graphed for $4$ s. Read the period, the amplitude and the axis.`, fig: G([{ f: pend, color: "violet" }], { view: { xmin: 0, xmax: 4, ymin: -20, ymax: 20 }, step: { x: 0.5, y: 5 }, points: [P(0.5, 15), P(1.5, -15, null, "red")], xlabel: "t (s)", ylabel: "x (cm)" }),
    steps: [S`Peaks at $t=0.5$ and $2.5$: period $2$ s.`, S`Max $15$, min $-15$: amplitude $15$ cm.`, S`Axis $y=0$ (the rest position).`], ans: S`period $2$ s, amplitude $15$ cm, axis $y=0$` },
  { title: "Period from two peaks", q: S`A graph has consecutive maximums at $t=1.5$ s and $t=7.5$ s. How many complete cycles are in $1$ minute?`, fig: G([{ f: (t) => 3 * sd(60 * t), color: "violet" }], { view: { xmin: 0, xmax: 12, ymin: -4, ymax: 4 }, step: { x: 1.5, y: 1 }, points: [P(1.5, 3), P(7.5, 3)], xlabel: "t (s)" }),
    steps: [S`Period $7.5-1.5=6$ s.`, S`$60\div6=10$ cycles.`], ans: S`$10$ cycles` },
  { title: "Sketch a wheel", q: S`A wheel of radius $5$ m has its hub $6$ m up and turns once every $30$ s; a rider boards at the bottom. Sketch two turns and give the quarter-turn points.`, fig: G([{ f: wheel, color: "violet" }], { view: { xmin: 0, xmax: 60, ymin: 0, ymax: 12 }, step: { x: 7.5, y: 1 }, lines: [{ m: 0, b: 6, color: "green", dash: true, label: "hub" }], xlabel: "t (s)", ylabel: "h (m)" }),
    steps: [S`Min $6-5=1$ m, max $11$ m, period $30$ s.`, S`Quarter turn $7.5$ s: $(0,1)$, $(7.5,6)$, $(15,11)$, $(22.5,6)$, $(30,1)$, then repeat.`], ans: S`$(0,1),(7.5,6),(15,11),(22.5,6),(30,1)$` },
  { title: "Tide times", q: S`High tide $5.6$ m at 3:00 a.m.; the next low tide $1.0$ m at 9:10 a.m. Find amplitude, axis, period and the next high tide.`, fig: G([{ f: (t) => 3.3 + 2.3 * cd((360 / 12.333) * (t - 3)), color: "violet" }], { view: { xmin: 0, xmax: 24, ymin: 0, ymax: 7 }, step: { x: 2, y: 1 }, lines: [{ m: 0, b: 3.3, color: "green", dash: true, label: "3.3" }], xlabel: "t (h)", ylabel: "d (m)" }),
    steps: [S`Amplitude $\frac{5.6-1.0}2=2.3$ m; axis $y=3.3$.`, S`High to low is half a period: $6$ h $10$ min, so the period is $12$ h $20$ min.`, S`Next high: 3:00 a.m. $+12$ h $20$ min $=$ 3:20 p.m.`], ans: S`$2.3$ m, $y=3.3$, $12$ h $20$ min, 3:20 p.m.` },
  { title: "Not periodic", q: S`A spring's motion is shown. Explain why it is not periodic even though it goes up and down.`, fig: G([{ f: damp, color: "violet" }], { view: { xmin: 0, xmax: 16, ymin: -7, ymax: 7 }, step: { x: 2, y: 2 }, xlabel: "t (s)" }),
    steps: [S`Each peak is lower: about $6$, then $2.7$, then $1.2$, \dots`, S`No piece of the graph repeats exactly, so $f(t+p)\ne f(t)$ for every $p$.`], ans: S`not periodic (the swings shrink)` },
  { title: "Working backwards", q: S`$f$ has period $6$ and $f(2)=5$. Find $f(-10)$ and $f(32)$.`, fig: G([], { segs: [repeat([[-12, 1], [-10, 5], [-6, 1]], 6, 9)], view: { xmin: -12, xmax: 36, ymin: 0, ymax: 6 }, step: { x: 6, y: 1 }, points: [P(-10, 5, "(−10, 5)"), P(2, 5, "(2, 5)"), P(32, 5, "(32, 5)")] }),
    steps: [S`$-10+2\times6=2\Rightarrow f(-10)=5$.`, S`$32-5\times6=2\Rightarrow f(32)=5$.`], ans: S`$f(-10)=f(32)=5$` },
];

const PROBLEMS = [
  { level: 1, q: S`A graph has max $18$ and min $4$. Find the axis and amplitude.`, ans: S`$y=11$; $7$` },
  { level: 1, q: S`Consecutive minimums occur at $x=25$ and $x=85$. Find the period.`, ans: S`$60$` },
  { level: 1, q: S`$f$ has period $10$ and $f(3)=-4$. Find $f(53)$.`, ans: S`$-4$` },
  { level: 2, q: S`A blood-pressure graph peaks at $125$ and drops to $78$ every $0.8$ s. Find the amplitude, axis and the number of beats per minute.`, ans: S`$23.5$, $y=101.5$, $75$ beats` },
  { level: 2, q: S`A wheel of radius $9$ m with hub $11$ m turns every $36$ s from the bottom. Give its quarter-turn points for one turn.`, ans: S`$(0,2),(9,11),(18,20),(27,11),(36,2)$` },
  { level: 2, q: S`A lock fills from $3$ m to $11$ m in $5$ min, stays full $1$ min, drains in $4$ min, and repeats. Find the period and the depth at $t=47$ min.`, ans: S`$10$ min; $d(47)=d(7)=11-\frac{8}{4}(1)=9$ m` },
  { level: 2, q: S`Is the height of the sun above the horizon at noon each day, over several years, periodic? Explain.`, ans: S`yes, period about $365$ days` },
  { level: 2, q: S`A pendulum swings $12$ cm either side of rest with period $1.6$ s. Find its position at $t=4$ s if it starts at rest position moving right.`, ans: S`$4=2.5\times1.6$: back at rest, $0$ cm` },
  { level: 3, space: 5, q: S`High tide of $7.1$ m is at 1:40 a.m.; the next low of $1.5$ m is at 7:55 a.m. Find the amplitude, the axis, the period and the times of the next two high tides.`, ans: S`$2.8$ m, $y=4.3$, $12.5$ h; 2:10 p.m. and 2:40 a.m.` },
  { level: 3, space: 5, q: S`A wheel turns at $2.5$ rev/min, has radius $11$ m and hub $13$ m. Find the period, the max and min heights, and the height after $54$ s if the rider boards at the bottom.`, ans: S`$24$ s; $24$ m, $2$ m; $54=2(24)+6$: quarter turn, $13$ m` },
  { level: 3, space: 5, q: S`$f$ has period $7$, $f(1)=2$, $f(4)=-3$. Find $f(-27)$, $f(32)$ and $f(70)+f(71)$ given $f(0)=0$.`, ans: S`$f(-27)=f(1)=2$; $f(32)=f(4)=-3$; $f(70)+f(71)=f(0)+f(1)=2$` },
  { level: 3, space: 5, q: S`Sketch a periodic graph with period $8$, max $5$, min $-1$ that is NOT sinusoidal, and state its axis and amplitude.`, ans: S`e.g. a square wave; axis $y=2$, amplitude $3$` },
  { level: 3, space: 5, q: S`A Ferris wheel's highest point is $42$ m and lowest $3$ m; it makes $4$ turns in $10$ min. Find its radius, hub height and period.`, ans: S`$19.5$ m, $22.5$ m, $150$ s` },
];

export const WS = {
  code: "6.1",
  title: "Periodic Functions",
  bigideas: S`A periodic function repeats one cycle at regular intervals: $f(x+p)=f(x)$, where $p$ is the period. From the highest and lowest values we get the axis $y=\frac{\max+\min}2$ and the amplitude $\frac{\max-\min}2$. Knowing one cycle lets you predict any value: subtract whole periods until you are back in the first cycle.`,
  goals: ["Recognize periodic graphs.", "Find period, max, min, axis, amplitude.", "Predict values with the period.", "Sketch a periodic graph from a description."],
  curriculum: "C2.1, C2.2",
  vocab: [["Cycle", "one complete repetition"], ["Period", "length of one cycle"], ["Axis", "$y=\\frac{\\max+\\min}2$"], ["Amplitude", "$\\frac{\\max-\\min}2$"]],
  hook: S`A lighthouse beam passes your boat every $9$ s. If it passed at exactly 9:00:00, will it pass at 9:03:00?`,
  concepts: [
    ["1. Reading a periodic graph", S`Find two matching points (two peaks) for the period. The axis is midway between max and min; the amplitude is the distance from the axis to a peak.
${G([{ f: (t) => 4 + 3 * sd(45 * t), color: "violet" }], { view: { xmin: 0, xmax: 16, ymin: 0, ymax: 8 }, step: { x: 2, y: 1 }, lines: [{ m: 0, b: 4, color: "green", dash: true, label: "axis y = 4" }], points: [P(2, 7), P(10, 7)] })}`],
    ["2. Predicting", S`Because $f(x+p)=f(x)$, $f(x)=f(x-np)$ for any whole number $n$. Divide by the period and keep the remainder.`],
  ],
  tips: ["Period is horizontal.", "Peak to peak, not peak to trough.", "Amplitude is half of max $-$ min."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
