// MCR3U Worksheet 6.1 — Periodic Functions and Their Properties (teacher edition)
import { waveT, gridW, sin } from "./sinT.mjs";

const S = String.raw;
const buoy = [0.6, 1.4, 2.2, 1.4];
const saw = [];
for (let k = 0; k < 4; k++) saw.push([4 * k, 0], [4 * k + 4, 8]);

const EXAMPLES = [
  { title: "Recognising periodic situations", q: "Which are periodic? (a) the height of a piston in a running engine, (b) a person's age, (c) the angle of a clock's minute hand measured from 12.",
    steps: ["(a) repeats every engine cycle; (c) climbs from 0° to 360° and starts again every hour.", "(b) only increases — no repeat."], ans: "(a) and (c)" },
  { title: "Properties from a graph", q: "The graph shows a periodic function. State its period, maximum, minimum, axis and amplitude.",
    fig: waveT((x) => 3 * sin(30 * x) + 4, { xmin: 0, xmax: 36, ymin: 0, ymax: 8 }, { x: 3, y: 1 }, { axis: 4, pts: [[3, 7], [15, 7], [9, 1]] }),
    steps: [S`Maximums at $x=3$ and $x=15$: period 12.`, S`Max 7, min 1: axis $y=4$, amplitude 3.`], ans: S`period 12, axis $y=4$, amplitude 3` },
  { title: "Properties from a table", q: S`A buoy's height (m) every 0.5 s: $0.6, 1.4, 2.2, 1.4, 0.6, 1.4, 2.2, 1.4, 0.6$.`,
    steps: [S`The pattern returns to 0.6 every 4 readings: period $4\times0.5=2$ s.`, S`Max 2.2, min 0.6: axis 1.4 m, amplitude 0.8 m.`], ans: "period 2 s, axis 1.4 m, amplitude 0.8 m" },
  { title: "Extrapolating", q: "Use Example 3 to predict the buoy's height at t = 13.5 s.",
    steps: [S`$13.5=6\times2+1.5$: same as $t=1.5$.`, S`At $t=1.5$ the height is 1.4 m.`], ans: "1.4 m" },
  { title: "A periodic graph that is not a wave", q: "A printer head moves steadily from 0 cm to 8 cm in 4 s, then jumps back to 0 and repeats. Sketch two cycles and state the period.",
    fig: waveT([], { xmin: 0, xmax: 16, ymin: -1, ymax: 9 }, { x: 2, y: 1 }, { segs: [{ pts: saw.slice(0, 2), color: "violet" }, { pts: saw.slice(2, 4), color: "violet" }, { pts: saw.slice(4, 6), color: "violet" }, { pts: saw.slice(6, 8), color: "violet" }] }),
    steps: ["Straight rise for 4 s, then a drop: a sawtooth.", "It repeats exactly, so it is periodic (but not sinusoidal)."], ans: "period 4 s" },
  { title: "Range from axis and amplitude", q: S`A periodic function has axis $y=-2$ and amplitude 5. State its range.`, steps: [S`$-2-5$ to $-2+5$.`], ans: S`$-7\le y\le3$` },
  { title: "Rate from a period", q: "An ECG shows a heartbeat peak every 0.75 s. What is the heart rate in beats per minute?", steps: [S`$60\div0.75$.`], ans: "80 beats per minute" },
  { title: "Oscillating but not periodic", q: "A plucked guitar string vibrates with smaller and smaller swings. Is its displacement periodic?", steps: ["Each swing is smaller than the one before, so no part repeats exactly."], ans: "no (it is damped)" },
  { title: "Seasons", q: "A city's average monthly temperature has a maximum of 24°C in July and a minimum of −6°C in January. State the period, axis and amplitude, and predict the July average 5 years from now.",
    steps: ["One cycle per year: 12 months.", S`Axis $\frac{24+(-6)}2=9$°C, amplitude 15°C.`, "July repeats every 12 months."], ans: "12 months, 9°C, 15°C; about 24°C" },
];

const PROBLEMS = [
  { level: 1, q: "A periodic graph has max 30 and min 10. Find its amplitude.", recap: "Amplitude.", ans: "10" },
  { level: 1, q: "Consecutive peaks occur at t = 4 s and t = 10 s. What is the period?", recap: "Period.", ans: "6 s" },
  { level: 1, q: "Is the distance of a child on a swing from the ground periodic? Explain.", recap: "Periodic?", ans: "yes (approximately) — each swing repeats" },
  { level: 2, q: "State the period, axis, amplitude and range of the function graphed.", recap: "Read a graph.", ans: S`period 8, axis $y=3$, amplitude 2, range $1\le y\le5$`,
    fig: waveT((x) => 2 * sin(45 * x) + 3, { xmin: 0, xmax: 16, ymin: 0, ymax: 6 }, { x: 1, y: 1 }) },
  { level: 2, q: S`Values every 1 s: $5, 9, 5, 1, 5, 9, 5, 1$. Find the period, axis and amplitude.`, recap: "Read a table.", ans: S`period 4 s, axis 5, amplitude 4` },
  { level: 2, q: S`A function has period 9 and $f(4)=-3$. Find $f(58)$.`, recap: "Extrapolate.", ans: S`$58-4=54=6\times9$: $-3$` },
  { level: 2, q: S`A periodic function has axis $y=6$ and amplitude 2.5. State its range.`, recap: "Range.", ans: S`$3.5\le y\le8.5$` },
  { level: 2, q: "A lighthouse beam sweeps past a boat every 12 s. How many times does it sweep past in one hour?", recap: "Count cycles.", ans: "300" },
  { level: 3, space: 4, q: S`A periodic function has period 15, $f(2)=8$ and $f(9)=-1$. Find $f(-13)$ and $f(54)$.`, recap: "Both directions.", ans: S`$f(-13)=f(2)=8$; $f(54)=f(9)=-1$` },
  { level: 3, space: 5, q: "Sketch a periodic function with period 6, maximum 5 and minimum −1 that starts at its minimum at t = 0. Show two cycles.", recap: "Sketch from properties.", ans: "minimums at t = 0, 6, 12; maximums at t = 3, 9; axis y = 2",
    fig: gridW({ xmin: 0, xmax: 13, ymin: -2, ymax: 6 }, { x: 1, y: 1 }) },
  { level: 3, space: 4, q: "A ball is dropped and each bounce reaches 70% of the previous height. Explain why its height is not a periodic function, even though it goes up and down.", recap: "Explain.", ans: "the maximum heights shrink, so no cycle repeats exactly" },
  { level: 3, space: 4, q: "High tide occurs at 02:10. The tide has a period of 12 h 25 min. When are the next two high tides?", recap: "Time arithmetic.", ans: "14:35 and 03:00 the next day" },
  { level: 3, space: 4, q: S`A sinusoidal function has period 8, amplitude 3 and axis $y=2$, with a maximum at $t=1$. Find $f(5)$, $f(3)$ and $f(9)$.`, recap: "Use symmetry.", ans: S`$f(5)=-1$ (half a period later: min); $f(3)=2$ (on the axis); $f(9)=5$ (one period later: max)` },
];

export const WS = {
  code: "6.1",
  title: "Periodic Functions and Their Properties",
  bigideas: S`A function is periodic if its values repeat at regular intervals: $f(x+p)=f(x)$. The period $p$ is the length of one cycle; the axis is $y=\frac{\max+\min}2$; the amplitude is $\frac{\max-\min}2$. Removing whole periods lets you predict values far away.`,
  goals: ["Recognise periodic behaviour.", "Read period, axis and amplitude.", "State the range.", "Predict values by extrapolating."],
  curriculum: "D2.1, D2.2",
  vocab: [["Cycle", "one complete repeat"], ["Period", "length of one cycle"], ["Axis / amplitude", "$\\frac{\\max+\\min}2$ / $\\frac{\\max-\\min}2$"]],
  hook: "Play a short sound clip (or show a heartbeat monitor). Ask students what repeats, how often, and how they could measure it.",
  concepts: [
    ["1. Reading a periodic graph", S`${waveT((x) => 2 * sin(60 * x) + 1, { xmin: 0, xmax: 12, ymin: -2, ymax: 4 }, { x: 1, y: 1 }, { axis: 1, width: 5.5 })}Period 6 (peak to peak), axis $y=1$, amplitude 2.`],
    ["2. Not every wave is periodic", "Damped motion (a slowing spring) oscillates but never repeats exactly."],
    ["3. Extrapolating", S`If the period is $p$, then $f(x)=f(x-p)=f(x-2p)=\cdots$. Divide, keep the remainder, read the value.`],
  ],
  tips: ["Amplitude is half of max − min.", "Period is horizontal.", "Check that the WHOLE pattern repeats.", "Keep the units.", "Use remainders for far-away values."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
