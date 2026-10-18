// MCR3U Worksheet 5.2 — Angles from 0° to 360° (teacher edition)
import { armT, acos, atan, f } from "./trigT.mjs";
import { planeT } from "./figT.mjs";

const S = String.raw;
const circle = (pts, o = {}) => planeT({
  view: { xmin: -1.4, xmax: 1.4, ymin: -1.4, ymax: 1.4 }, step: { x: 0.5, y: 0.5 },
  curves: [{ f: (x) => Math.sqrt(Math.max(0, 1 - x * x)), a: -1, b: 1, color: "gray" }, { f: (x) => -Math.sqrt(Math.max(0, 1 - x * x)), a: -1, b: 1, color: "gray" }],
  segs: pts.map(([a]) => ({ pts: [[0, 0], [Math.cos((a * Math.PI) / 180), Math.sin((a * Math.PI) / 180)]], color: "violet" })),
  points: pts.map(([a, label]) => ({ x: Math.cos((a * Math.PI) / 180), y: Math.sin((a * Math.PI) / 180), label })),
  vlines: o.vlines,
}, 6, o.cap ?? "");

const EXAMPLES = [
  { title: "Ratios from a point in Quadrant 3", q: "The point (−5, −12) is on the terminal arm of θ. Find sin θ, cos θ, tan θ and θ.",
    fig: armT(-5, -12, "(−5, −12)"),
    steps: [S`$r=\sqrt{25+144}=13$: $\sin\theta=-\frac{12}{13}$, $\cos\theta=-\frac5{13}$, $\tan\theta=\frac{12}5$.`, S`Related angle $\tan^{-1}\frac{12}5\approx${f(atan(12 / 5), 1)}^\circ$; Quadrant 3: $\theta=180^\circ+${f(atan(12 / 5), 1)}^\circ$.`], ans: S`$\theta\approx${f(180 + atan(12 / 5), 1)}^\circ$` },
  { title: "A point in Quadrant 4", q: "Find θ if (8, −6) is on its terminal arm.", steps: [S`$r=10$; related angle $\tan^{-1}\frac68\approx${f(atan(0.75), 1)}^\circ$.`, S`Quadrant 4: $360^\circ-${f(atan(0.75), 1)}^\circ$.`], ans: S`$\approx${f(360 - atan(0.75), 1)}^\circ$` },
  { title: "Related acute angles", q: "Find the related acute angle of 200°, 310° and 95°.", steps: [S`$200-180=20$; $360-310=50$; $180-95=85$.`], ans: S`$20^\circ$, $50^\circ$, $85^\circ$` },
  { title: "Exact value in Quadrant 3", q: S`Find $\sin210^\circ$ exactly.`, steps: [S`Related $30^\circ$; sine is negative in Quadrant 3.`], ans: S`$-\frac12$` },
  { title: "Two exact values", q: S`Find $\cos315^\circ$ and $\tan120^\circ$ exactly.`, steps: [S`$315^\circ$: related $45^\circ$, Q4, cosine positive: $\frac1{\sqrt2}$.`, S`$120^\circ$: related $60^\circ$, Q2, tangent negative: $-\sqrt3$.`], ans: S`$\frac1{\sqrt2}$, $-\sqrt3$` },
  { title: "Solving with a special value", q: S`Solve $\cos\theta=-\frac{\sqrt3}2$, $0^\circ\le\theta\le360^\circ$.`,
    fig: circle([[150, "150°"], [210, "210°"]], { vlines: [{ x: -Math.sqrt(3) / 2, color: "amber", dash: true }] }),
    steps: [S`Related $30^\circ$; cosine negative in Q2 and Q3.`, S`$180^\circ-30^\circ$ and $180^\circ+30^\circ$.`], ans: S`$150^\circ$, $210^\circ$` },
  { title: "Solving with a calculator", q: S`Solve $\tan\theta=2.5$, $0^\circ\le\theta\le360^\circ$.`, steps: [S`$\tan^{-1}2.5\approx${f(atan(2.5), 1)}^\circ$ (Q1).`, S`Tangent is also positive in Q3: add $180^\circ$.`], ans: S`$\approx${f(atan(2.5), 1)}^\circ$, $${f(180 + atan(2.5), 1)}^\circ$` },
  { title: "One ratio and a quadrant", q: S`$\cos\theta=-\frac7{25}$ and θ is in Quadrant 3. Find $\sin\theta$ and $\tan\theta$.`, steps: [S`$x=-7$, $r=25$: $y=\pm24$; Quadrant 3 gives $y=-24$.`], ans: S`$\sin\theta=-\frac{24}{25}$, $\tan\theta=\frac{24}7$` },
  { title: "Angles on the axes", q: S`Evaluate $\sin270^\circ$, $\cos180^\circ$ and $\tan180^\circ$.`, steps: [S`Use the points $(0,-1)$ and $(-1,0)$ on the unit circle.`], ans: S`$-1$, $-1$, $0$` },
];

const PROBLEMS = [
  { level: 1, q: "Find the related acute angle of 155°.", recap: "Related angle.", ans: S`$25^\circ$` },
  { level: 1, q: S`Is $\cos250^\circ$ positive or negative? Explain with CAST.`, recap: "Sign.", ans: "negative (Q3: only tan positive)" },
  { level: 1, q: S`The point $(-1,\sqrt3)$ is on the terminal arm of θ. Find θ.`, recap: "Angle from a point.", ans: S`$120^\circ$` },
  { level: 2, q: "The point (−9, 12) is on the terminal arm of θ. Find the three primary ratios.", recap: "Three ratios.", ans: S`$r=15$: $\frac45$, $-\frac35$, $-\frac43$`, fig: armT(-9, 12, "(−9, 12)") },
  { level: 2, q: S`Find $\sin225^\circ$ exactly.`, recap: "Exact, Q3.", ans: S`$-\frac1{\sqrt2}$` },
  { level: 2, q: S`Solve $\sin\theta=\frac{\sqrt3}2$, $0^\circ\le\theta\le360^\circ$.`, recap: "Special sine.", ans: S`$60^\circ$, $120^\circ$` },
  { level: 2, q: S`Solve $\cos\theta=-0.65$, $0^\circ\le\theta\le360^\circ$ (1 decimal).`, recap: "Calculator cosine.", ans: S`$\approx${f(acos(-0.65), 1)}^\circ$, $${f(360 - acos(-0.65), 1)}^\circ$` },
  { level: 2, q: S`Evaluate exactly: $\cos240^\circ+\sin150^\circ$.`, recap: "Exact sum.", ans: S`$-\frac12+\frac12=0$` },
  { level: 3, space: 4, q: S`$\tan\theta=-\frac8{15}$ and $\sin\theta>0$. Find $\sin\theta$, $\cos\theta$ and θ.`, recap: "Ratio + sign.", ans: S`Q2: $\sin\theta=\frac8{17}$, $\cos\theta=-\frac{15}{17}$, $\theta\approx${f(180 - atan(8 / 15), 1)}^\circ$` },
  { level: 3, space: 4, q: S`Solve $4\sin^2\theta-3=0$, $0^\circ\le\theta\le360^\circ$.`, recap: "Squared sine.", ans: S`$\sin\theta=\pm\frac{\sqrt3}2$: $60^\circ,120^\circ,240^\circ,300^\circ$` },
  { level: 3, space: 5, q: S`Solve $2\cos^2\theta-\cos\theta-1=0$, $0^\circ\le\theta\le360^\circ$.`, recap: "Factor a quadratic.", ans: S`$(2\cos\theta+1)(\cos\theta-1)=0$: $0^\circ,120^\circ,240^\circ,360^\circ$` },
  { level: 3, space: 4, q: S`Using the points $(x,y)$ and $(-x,y)$, explain why $\sin(180^\circ-\theta)=\sin\theta$ but $\cos(180^\circ-\theta)=-\cos\theta$.`, recap: "Explain symmetry.", ans: S`reflecting in the y-axis keeps $y$ (and $r$), changes the sign of $x$`,
    fig: circle([[35, "θ"], [145, "180° − θ"]]) },
  { level: 3, space: 4, q: "A point P moves on a circle of radius 10 centred at the origin. Find its exact coordinates when the arm OP is at 150°.", recap: "Point on a circle.", ans: S`$(10\cos150^\circ,10\sin150^\circ)=(-5\sqrt3,\,5)$` },
];

export const WS = {
  code: "5.2",
  title: "Angles from 0° to 360°",
  bigideas: S`For any angle in standard position with $(x,y)$ on the terminal arm and $r=\sqrt{x^2+y^2}$: $\sin\theta=\frac yr$, $\cos\theta=\frac xr$, $\tan\theta=\frac yx$. The value equals the ratio of the related acute angle, with the sign given by CAST.`,
  goals: ["Find ratios from a point on the terminal arm.", "Use related angles and CAST.", "Find exact values beyond 90°.", "Solve for the angles with a given ratio."],
  curriculum: "D1.2, D1.3",
  vocab: [["Standard position", "vertex at origin, initial arm on positive x-axis"], ["Related acute angle", "angle between terminal arm and x-axis"], ["CAST", "Q4 cos, Q1 all, Q2 sin, Q3 tan positive"]],
  hook: "Spin a pointer on a dial to 150°. Ask: what is its height compared with when it is at 30°? (Same — so sin 150° = sin 30°.)",
  concepts: [
    ["1. Terminal arm", S`${armT(-4, 3, "(−4, 3)", { width: 5 })}$r$ is always positive; $x$ and $y$ carry the signs.`],
    ["2. Related angle", S`Q1: $\theta$; Q2: $180^\circ-\theta$; Q3: $\theta-180^\circ$; Q4: $360^\circ-\theta$.`],
    ["3. Two solutions", S`Each nonzero value of a ratio occurs in two quadrants. Find the related angle from the absolute value, then place it.`],
  ],
  tips: ["r is never negative.", "Measure the related angle to the x-axis.", "Calculator inverses give one angle only.", "Check the axes separately.", "Sketch the arm every time."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
