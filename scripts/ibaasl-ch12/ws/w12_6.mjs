// IB AA SL Worksheet 12.6 — Transformations and Periodic Models (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const PI = Math.PI;
const f2 = (v) => v.toFixed(2);

const EXAMPLES = [
  { title: "Read the parameters", q: S`State the amplitude, period and principal axis of $y=6\cos\left(\frac{x}{3}\right)+2$.`,
    steps: [S`$|a|=6$, $\frac{2\pi}{1/3}=6\pi$, $y=2$.`], ans: S`6; $6\pi$; $y=2$` },
  { title: "Max and min", q: S`Find the maximum and minimum of $y=-2\sin(4x)+5$.`,
    steps: [S`$5\pm2$.`], ans: "7 and 3" },
  { title: "Sketch", q: S`Sketch $y=2\sin\left(x-\frac\pi4\right)$ for $0\le x\le2\pi$.`,
    fig: F({ view: { xmin: 0, xmax: 2 * PI, ymin: -2.5, ymax: 2.5 }, curves: [{ f: (x) => 2 * Math.sin(x - PI / 4) }, { f: Math.sin, color: "gray" }], points: [pt((3 * PI) / 4, 2, false, "red")], step: { x: PI / 4, y: 1 } }, 5.6),
    steps: [S`Shift right $\frac\pi4$, stretch by 2.`], ans: S`max at $\frac{3\pi}4$` },
  { title: "Period from b", q: S`Find b so that $y=\sin(bx)$ has period 20.`,
    steps: [S`$\frac{2\pi}b=20$.`], ans: S`$\frac{\pi}{10}$` },
  { title: "Equation from a graph", q: "A cosine graph has a maximum at (0, 8) and the next minimum at (π, 2). Find its equation.",
    fig: F({ view: { xmin: -0.5, xmax: 2 * PI, ymin: 0, ymax: 9 }, curves: [{ f: (x) => 3 * Math.cos(x) + 5 }], points: [pt(0, 8, "", "red"), pt(PI, 2, "", "blue")], step: { x: PI / 2, y: 1 } }, 5.6),
    steps: [S`$a=3$, $d=5$, period $2\pi$.`], ans: S`$y=3\cos x+5$` },
  { title: "Sine from data", q: "A sine graph rises through (1, 4), reaches a max of 10 and has period 8. Find its equation.",
    steps: [S`$d=4$, $a=6$, $b=\frac\pi4$, $c=1$.`], ans: S`$y=6\sin\left(\frac\pi4(x-1)\right)+4$` },
  { title: "Daylight model", q: "Daylight varies between 7.8 h and 16.2 h over a 365-day year, with the maximum on day 175. Write a cosine model.",
    steps: [S`$a=4.2$, $d=12$, $b=\frac{2\pi}{365}$, $c=175$.`], ans: S`$L=4.2\cos\left(\frac{2\pi}{365}(t-175)\right)+12$` },
  { title: "Using a model", q: S`For $T(t)=8\sin\left(\frac{\pi}{12}(t-9)\right)+18$ (°C, hours after midnight), find the maximum temperature and when it occurs.`,
    steps: [S`Max $26$ when $\frac\pi{12}(t-9)=\frac\pi2$.`], ans: "26 °C at 15:00" },
  { title: "Time above a level", q: S`For the same model, for how long each day is T above 22 °C?`,
    steps: [S`$\sin\left(\frac\pi{12}(t-9)\right)>0.5$: $\frac\pi6<\frac\pi{12}(t-9)<\frac{5\pi}6$, so $11<t<19$.`], ans: "8 hours" },
];

const PROBLEMS = [
  { level: 1, q: S`State the amplitude of $y=0.5\sin x-3$.`, recap: "|a|.", ans: "0.5" },
  { level: 1, q: S`State the period of $y=\cos\left(\frac{\pi x}{4}\right)$.`, recap: "2π/b.", ans: "8" },
  { level: 1, q: S`State the principal axis of $y=7\sin(2x)+1$.`, recap: "y = d.", ans: S`$y=1$` },
  { level: 2, q: S`Find the max and min of $y=3-5\cos x$.`, recap: S`$3\pm5$.`, ans: S`$8$ and $-2$` },
  { level: 2, q: "A sinusoid has max 12 and min 4. Find a and d.", recap: "Half-range, mean.", ans: "a = 4, d = 8" },
  { level: 2, q: "A sinusoid has a maximum at x = 2 and the next maximum at x = 14. Find b.", recap: "Period 12.", ans: S`$\frac{\pi}6$` },
  { level: 2, q: S`Describe the transformations from $y=\sin x$ to $y=3\sin(2x)-1$.`, recap: "Stretches and shift.", ans: S`vertical ×3, horizontal ×½, down 1` },
  { level: 2, q: S`Sketch $y=2\cos(2x)+1$ for $0\le x\le2\pi$ on the grid.`, recap: "Period π.", ans: "max 3, min −1, period π",
    fig: F({ view: { xmin: 0, xmax: 2 * PI, ymin: -2, ymax: 4 }, step: { x: PI / 2, y: 1 } }, 5) },
  { level: 3, space: 4, q: "A Ferris wheel has diameter 40 m, centre 24 m above the ground and turns every 10 minutes. A rider starts at the bottom. Write h(t) and find the height after 2 minutes.", recap: "Negative cosine.", ans: S`$h=24-20\cos\left(\frac\pi5t\right)$; $h(2)\approx${f2(24 - 20 * Math.cos((2 * PI) / 5))}$ m` },
  { level: 3, space: 4, q: "A tide has high water 7.4 m at 02:00 and low water 1.8 m at 08:15. Write a cosine model and find the depth at 05:00.", recap: "Period 12.5 h.", ans: S`$D=2.8\cos\left(\frac{2\pi}{12.5}(t-2)\right)+4.6$; $D(5)\approx${f2(2.8 * Math.cos(((2 * PI) / 12.5) * 3) + 4.6)}$ m` },
  { level: 3, space: 4, q: S`For $h(t)=24-20\cos\left(\frac\pi5t\right)$, for how many minutes per turn is the rider above 34 m?`, recap: "cos < −½.", ans: S`$\frac{10}3\approx3.33$ min` },
  { level: 3, space: 4, q: S`Find $a$, $b$, $d$ if $y=a\sin(bx)+d$ has range $[-1,9]$ and period $\frac{\pi}{2}$ ($a,b>0$).`, recap: "Range and period.", ans: "a = 5, b = 4, d = 4" },
  { level: 3, space: 4, q: S`Explain why $y=\sin\left(x+\frac\pi2\right)$ and $y=\cos x$ have the same graph.`, recap: "Shift.", ans: S`shifting sine $\frac\pi2$ left gives cosine` },
];

export const WS = {
  code: "12.6",
  title: "Transformations and Periodic Models",
  bigideas: S`$y=a\sin(b(x-c))+d$ (or cos): amplitude $|a|$, period $\frac{2\pi}{b}$, horizontal shift c, principal axis $y=d$. From data: $a=\frac{\max-\min}2$, $d=\frac{\max+\min}2$, $b=\frac{2\pi}{\text{period}}$, c from the time of a max (cosine) or an upward axis crossing (sine). Solve model equations as in 12.4.`,
  goals: ["Read parameters.", "Sketch sinusoids.", "Find equations.", "Model and solve."],
  curriculum: "SL 3.7",
  vocab: [["Amplitude", "|a|"], ["Period", S`$\frac{2\pi}{b}$`], ["Principal axis", "y = d"]],
  hook: "Plot the hours of daylight in your city across a year. What function fits the shape?",
  concepts: [
    ["1. Parameters", S`${F({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.5, ymax: 5.5 }, curves: [{ f: (x) => 3 * Math.sin(2 * x) + 2 }, { f: Math.sin, color: "gray" }], step: { x: PI / 2, y: 1 } }, 4.6)} a, b, c, d.`],
    ["2. From data", "Max, min, period, start."],
    ["3. Models", "Predict and solve."],
  ],
  tips: ["b = 2π/period.", "Factor out b.", "cos starts at a max.", "Units of time.", "Check with a sketch."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
