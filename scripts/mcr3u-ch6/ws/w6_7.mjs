// MCR3U Worksheet 6.7 — Solving Problems with Sinusoidal Models (teacher edition)
import { waveT, gridW, cos, acos, f } from "./sinT.mjs";

const S = String.raw;
const w = (t) => -20 * cos(3 * t) + 22;
const k2 = 360 / 12.4, tide = (t) => 3 * cos(k2 * (t - 4)) + 5;
const day = (t) => 4 * cos((360 / 365) * (t - 172)) + 12.2;
const tideBelow = (360 - 2 * acos(-0.5)) / k2;
const p6 = (t) => 3.2 * cos(28.8 * (t - 1)) + 4.2;
const p7 = (t) => 16 * cos((360 / 365) * (t - 200)) + 12;
const p10 = (2 * acos(1.8 / 3.2)) / 28.8;

const EXAMPLES = [
  { title: "A Ferris wheel model", q: "A wheel of radius 20 m has its hub 22 m high and turns once every 120 s. Riders board at the bottom. Write a model and find the height at t = 40 s.",
    fig: waveT(w, { xmin: 0, xmax: 240, ymin: 0, ymax: 45 }, { x: 30, y: 5 }, { axis: 22, xlabel: "t (s)", ylabel: "h (m)", pts: [[40, w(40), "t = 40"]] }),
    steps: [S`$a=20$, $c=22$, $k=3$; bottom start: $h=-20\cos(3t)+22$.`, S`$h(40)=-20\cos120^\circ+22$.`], ans: "32 m" },
  { title: "A tide model", q: "High tide is 8 m at 4:00; the next low tide is 2 m at 10:12. Write a model and find the depth at 7:00.",
    steps: [S`$a=3$, $c=5$; half period 6.2 h, period 12.4 h, $k=\frac{360}{12.4}\approx${f(k2)}$.`, S`$D=3\cos(${f(k2)}(t-4))+5$; at $t=7$.`], ans: S`$\approx${f(tide(7))}$ m` },
  { title: "Daylight", q: "Daylight varies from 16.2 h (day 172) to 8.2 h. Write a cosine model and find the daylight on day 30.",
    steps: [S`$a=4$, $c=12.2$, $k=\frac{360}{365}$, $d=172$.`, S`$L(30)=4\cos\left(\frac{360}{365}(30-172)\right)+12.2$.`], ans: S`$\approx${f(day(30))}$ h` },
  { title: "A thermostat", q: "A room's temperature varies between 19°C and 23°C on a 2-hour cycle, warmest at t = 0.5 h. Write a model.", steps: [S`$a=2$, $c=21$, $k=180$, $d=0.5$.`], ans: S`$T=2\cos(180(t-0.5))+21$` },
  { title: "Changing conditions", q: "The wheel in Example 1 is changed to turn once every 90 s and its hub is lowered by 1 m. Write the new model.", steps: [S`$k=4$; $c=21$; $a$ unchanged.`], ans: S`$h=-20\cos(4t)+21$` },
  { title: "Above a level", q: "In Example 1, for how long per turn is the rider above 32 m?", steps: [S`$\cos(3t)\le-\frac12$: $3t$ from 120° to 240°.`, "t from 40 s to 80 s."], ans: "40 s per turn" },
  { title: "Below a level", q: "In Example 2, for how long per cycle is the depth below 3.5 m?", steps: [S`$3\cos\theta+5<3.5\Rightarrow\cos\theta<-\frac12$: θ from 120° to 240°.`, S`$\frac{120}{${f(k2)}}$.`], ans: S`$\approx${f(tideBelow)}$ h` },
  { title: "Checking the fit", q: "In Example 3, the measured daylight on day 355 was 8.3 h. How close is the model?", steps: [S`$L(355)=4\cos\left(\frac{360}{365}(183)\right)+12.2\approx${f(day(355))}$.`], ans: "within about 0.1 h" },
  { title: "Far-away predictions", q: "Use Example 3 to predict the daylight on day 400 (in the following year).", steps: [S`$400-365=35$: same as day 35.`], ans: S`$\approx${f(day(35))}$ h` },
];

const PROBLEMS = [
  { level: 1, q: S`Find the maximum of $y=6\sin(20t)+9$.`, recap: "Max.", ans: "15" },
  { level: 1, q: S`Find the period of $y=2\cos(12t)$.`, recap: "Period.", ans: "30" },
  { level: 1, q: S`Evaluate $y=-5\cos(60t)+8$ at $t=3$.`, recap: "Evaluate.", ans: "13" },
  { level: 2, q: "A wheel has radius 9 m, hub 11 m and turns once every 36 s; riders board at the bottom. Write a model and find h(9).", recap: "Model.", ans: S`$h=-9\cos(10t)+11$; $h(9)=11$ m` },
  { level: 2, q: "For the wheel in Problem 4, find h(24).", recap: "Evaluate.", ans: S`$-9\cos240^\circ+11=15.5$ m` },
  { level: 2, q: "High tide is 7.4 m at 1:00 and the next low tide is 1.0 m at 7:15. Write a model and find the depth at 10:00.", recap: "Tide.", ans: S`$D=3.2\cos(28.8(t-1))+4.2$; $D(10)\approx${f(p6(10))}$ m` },
  { level: 2, q: "Daily highs vary from 28°C (day 200) to −4°C. Write a model and estimate the high on day 100.", recap: "Temperature.", ans: S`$T=16\cos\left(\frac{360}{365}(t-200)\right)+12$; $\approx${f(p7(100), 1)}$°C` },
  { level: 2, q: "In a Ferris wheel model, which parameter changes if the radius increases? Explain.", recap: "Conditions.", ans: "a (the amplitude) — and c too if the boarding height must stay the same" },
  { level: 3, space: 4, q: "For the wheel in Problem 4, how long per turn is the rider above 15.5 m?", recap: "Above a level.", ans: S`$\cos(10t)\le-\frac12$: 120° to 240°, 12 s` },
  { level: 3, space: 5, q: "For the tide in Problem 6, for how many hours per cycle is the depth at least 6 m?", recap: "Above a level.", ans: S`$\cos\theta\ge0.5625$: $\approx${f(p10)}$ h`,
    fig: waveT(p6, { xmin: 0, xmax: 24, ymin: 0, ymax: 9 }, { x: 2, y: 1 }, { lines: [{ m: 0, b: 6, color: "amber", dash: true }], xlabel: "t (h)", ylabel: "D (m)" }) },
  { level: 3, space: 5, q: "A spring moves between 8 cm and 20 cm above a table, period 2 s, starting at the bottom. Write a model and find the height at t = 1.25 s.", recap: "Spring.", ans: S`$h=-6\cos(180t)+14$; $h(1.25)\approx${f(-6 * cos(225) + 14)}$ cm` },
  { level: 3, space: 4, q: "Explain why a daylight model uses a period of 365 (days) and not 12.", recap: "Units.", ans: "t is measured in days; one cycle is one year = 365 days" },
  { level: 3, space: 5, q: "Design a model for a Ferris wheel that takes 3 min per turn, with a max height of 40 m and a min of 2 m, boarding at the bottom (t in seconds). Sketch two turns.", recap: "Design.", ans: S`$h=-19\cos(2t)+21$`,
    fig: gridW({ xmin: 0, xmax: 360, ymin: 0, ymax: 45 }, { x: 30, y: 5 }, { xlabel: "t (s)", ylabel: "h (m)" }) },
];

export const WS = {
  code: "6.7",
  title: "Solving Problems with Sinusoidal Models",
  bigideas: S`Build a model from max, min, period and a start point: $a$ and $c$ from max/min, $k=\frac{360}{\text{period}}$, cosine from a max, $-a\cos$ from a bottom start. Use it to predict, to see how changed conditions change parameters, and to find when it is above or below a level.`,
  goals: ["Write models from descriptions.", "Predict values.", "Explain parameter changes.", "Solve level problems."],
  curriculum: "D3.1, D3.3, D3.4",
  vocab: [["Model", "equation for a real situation"], ["Threshold", "a level of interest"], ["Fit", "how close the model is to data"]],
  hook: "Show a tide table for a harbour. Ask when a boat needing 3 m of water can safely leave.",
  concepts: [
    ["1. From words to a model", S`${waveT((t) => -6 * cos(12 * t) + 8, { xmin: 0, xmax: 60, ymin: 0, ymax: 16 }, { x: 5, y: 2 }, { axis: 8, width: 5.5, xlabel: "t", ylabel: "h" })}Radius 6, hub 8, 30 s per turn, bottom start.`],
    ["2. Level problems", "Set model = level, solve for the angle in one cycle, convert to time."],
    ["3. Changing conditions", "Faster → k; bigger → a; higher → c; later start → d."],
  ],
  tips: ["k = 360/period.", "Bottom start → −a cos.", "Convert clock times to hours.", "Two crossings per cycle.", "Check against data."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
