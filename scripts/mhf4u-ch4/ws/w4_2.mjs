// MHF4U Worksheet 4.2 — Trigonometric Ratios and Special Angles (teacher edition)
import { F } from "./figT.mjs";
import { UC, ARM } from "../trigfig.mjs";
const S = String.raw;

const EXAMPLES = [
  { title: "Quadrant 2", q: S`Find the exact value of $\sin\dfrac{2\pi}3$.`, fig: F(UC(120, "(−1/2, √3/2)")),
    steps: [S`Q2, reference angle $\frac\pi3$.`, S`$\sin\frac\pi3=\frac{\sqrt3}2$; sine is positive in Q2.`], ans: S`$\frac{\sqrt3}2$` },
  { title: "Quadrant 3", q: S`Find the exact value of $\cos\dfrac{7\pi}6$.`, fig: F(UC(210, "(−√3/2, −1/2)")),
    steps: [S`Q3, reference angle $\frac\pi6$.`, S`$\cos\frac\pi6=\frac{\sqrt3}2$; cosine is negative in Q3.`], ans: S`$-\frac{\sqrt3}2$` },
  { title: "Quadrant 4", q: S`Find the exact value of $\tan\dfrac{5\pi}3$.`, fig: F(UC(300, "(1/2, −√3/2)")),
    steps: [S`Q4, reference angle $\frac\pi3$.`, S`$\tan\frac\pi3=\sqrt3$; tangent is negative in Q4.`], ans: S`$-\sqrt3$` },
  { title: "Reciprocal ratio", q: S`Find the exact value of $\sec\dfrac{3\pi}4$.`, fig: F(UC(135, "(−√2/2, √2/2)")),
    steps: [S`$\cos\frac{3\pi}4=-\frac{\sqrt2}2$.`, S`$\sec\frac{3\pi}4=-\frac2{\sqrt2}=-\sqrt2$.`], ans: S`$-\sqrt2$` },
  { title: "On an axis", q: S`Evaluate $\csc\dfrac{3\pi}2$ and $\cot\dfrac{3\pi}2$.`, fig: F(UC(270, "(0, −1)")),
    steps: [S`At $\frac{3\pi}2$ the point is $(0,-1)$.`, S`$\csc=\frac1{-1}=-1$; $\cot=\frac xy=\frac0{-1}=0$.`], ans: S`$-1$ and $0$` },
  { title: "An exact expression", q: S`Evaluate $\cos^2\dfrac\pi6-\sin\dfrac{3\pi}2$.`,
    steps: [S`$\cos^2\frac\pi6=\frac34$.`, S`$\sin\frac{3\pi}2=-1$. The value is $\frac34+1=\frac74$.`], ans: S`$\frac74$` },
  { title: "A point on the arm", q: S`The terminal arm of $\theta$ passes through $(5,-12)$. Find all six ratios.`, fig: F(ARM(5, -12, "(5, −12)")),
    steps: [S`$r=\sqrt{25+144}=13$.`, S`$\sin\theta=-\frac{12}{13}$, $\cos\theta=\frac5{13}$, $\tan\theta=-\frac{12}5$.`, S`$\csc\theta=-\frac{13}{12}$, $\sec\theta=\frac{13}5$, $\cot\theta=-\frac5{12}$.`], ans: "see steps" },
  { title: "From one ratio", q: S`$\tan\theta=-\dfrac43$ with $\theta$ in Q2. Find $\sin\theta$ and $\cos\theta$.`, fig: F(ARM(-3, 4, "(−3, 4)")),
    steps: [S`In Q2: $x=-3$, $y=4$, $r=5$.`, S`$\sin\theta=\frac45$, $\cos\theta=-\frac35$.`], ans: S`$\frac45$, $-\frac35$` },
  { title: "All angles", q: S`Find all $\theta$ in $[0,2\pi]$ with $\sin\theta=-\dfrac12$.`, fig: F(UC(210, "7π/6", [{ x: Math.cos((11 * Math.PI) / 6), y: Math.sin((11 * Math.PI) / 6), label: "11π/6", color: "red" }])),
    steps: [S`Reference angle $\frac\pi6$.`, S`Sine is negative in Q3 and Q4: $\pi+\frac\pi6$ and $2\pi-\frac\pi6$.`], ans: S`$\frac{7\pi}6,\ \frac{11\pi}6$` },
];

const PROBLEMS = [
  { level: 1, q: S`Find the exact value of $\cos\dfrac{5\pi}3$.`, ans: S`$\frac12$` },
  { level: 1, q: S`Find the exact value of $\tan\dfrac{2\pi}3$.`, ans: S`$-\sqrt3$` },
  { level: 1, q: S`Find the exact value of $\csc\dfrac\pi2$.`, ans: S`$1$` },
  { level: 2, q: S`Evaluate $\sin\dfrac{5\pi}4\cos\dfrac{7\pi}4$.`, ans: S`$-\frac12$` },
  { level: 2, q: S`Evaluate $\sec^2\dfrac\pi6+\cot^2\dfrac\pi4$.`, ans: S`$\frac73$` },
  { level: 2, q: S`The terminal arm of $\theta$ passes through $(-8,-15)$. Find $\sin\theta$, $\cos\theta$ and $\cot\theta$.`, ans: S`$-\frac{15}{17},\ -\frac8{17},\ \frac8{15}$` },
  { level: 2, q: S`$\cos\theta=\dfrac7{25}$ with $\theta$ in Q4. Find $\sin\theta$ and $\tan\theta$.`, ans: S`$-\frac{24}{25},\ -\frac{24}7$` },
  { level: 2, q: S`Find all $\theta$ in $[0,2\pi]$ with $\tan\theta=-1$.`, ans: S`$\frac{3\pi}4,\ \frac{7\pi}4$` },
  { level: 3, space: 5, q: S`$\sin\theta=-\dfrac{20}{29}$ and $\tan\theta>0$. Find the exact values of the other five ratios.`, ans: S`$\cos=-\frac{21}{29}$, $\tan=\frac{20}{21}$, $\csc=-\frac{29}{20}$, $\sec=-\frac{29}{21}$, $\cot=\frac{21}{20}$` },
  { level: 3, space: 5, q: S`Show that $\sin^2\theta+\cos^2\theta=1$ using a point $(x,y)$ on the terminal arm with $r=\sqrt{x^2+y^2}$.`, ans: S`$\frac{y^2}{r^2}+\frac{x^2}{r^2}=\frac{x^2+y^2}{r^2}=1$` },
  { level: 3, space: 5, q: S`Find all $\theta$ in $[0,2\pi]$ with $\csc^2\theta=2$.`, ans: S`$\frac\pi4,\ \frac{3\pi}4,\ \frac{5\pi}4,\ \frac{7\pi}4$` },
  { level: 3, space: 5, q: S`A ladder of length 6 m leans so that it makes an angle $\frac\pi3$ with the ground. A second ladder of the same length makes an angle $\frac\pi4$. Find the exact difference between the heights they reach.`, ans: S`$3\sqrt3-3\sqrt2$ m` },
  { level: 3, space: 5, q: S`A point starts at $(1,0)$ and moves counterclockwise on the unit circle through $\frac{17\pi}6$. Find its exact coordinates, and explain why you may subtract $2\pi$ first.`, ans: S`$\frac{17\pi}6-2\pi=\frac{5\pi}6$: $\left(-\frac{\sqrt3}2,\frac12\right)$; adding a full turn returns to the same point` },
];

export const WS = {
  code: "4.2",
  title: "Trigonometric Ratios and Special Angles",
  bigideas: S`A point on the unit circle at angle $\theta$ has coordinates $(\cos\theta,\sin\theta)$. Two special triangles give exact ratios at $\frac\pi6$, $\frac\pi4$ and $\frac\pi3$. To evaluate at any angle, find the quadrant, find the reference angle, write the special value and attach the CAST sign. The reciprocal ratios flip the fractions: $\csc=\frac1\sin$, $\sec=\frac1\cos$, $\cot=\frac1\tan$.`,
  goals: ["State exact values at special angles in radians.", "Use reference angles and CAST.", "Evaluate reciprocal ratios.", "Find ratios from a point on the terminal arm."],
  curriculum: "B1.3, B1.4",
  vocab: [["Reference angle", "the acute angle between the terminal arm and the x-axis"], ["CAST rule", "positive ratios: Q1 all, Q2 sin, Q3 tan, Q4 cos"], ["Terminal arm", "the rotating side of an angle in standard position"], ["Reciprocal ratio", "csc, sec, cot"]],
  hook: S`Fold a square of side 1 along its diagonal. Cut an equilateral triangle of side 2 in half. What exact side lengths appear? Those two triangles produce nearly every exact value in this chapter.`,
  concepts: [
    ["1. The special values", S`\begin{center}\begin{tabular}{@{}lccccc@{}}$\theta$ & $0$ & $\frac\pi6$ & $\frac\pi4$ & $\frac\pi3$ & $\frac\pi2$\\ \hline $\sin\theta$ & $0$ & $\frac12$ & $\frac{\sqrt2}2$ & $\frac{\sqrt3}2$ & $1$\\ $\cos\theta$ & $1$ & $\frac{\sqrt3}2$ & $\frac{\sqrt2}2$ & $\frac12$ & $0$\\ $\tan\theta$ & $0$ & $\frac{\sqrt3}3$ & $1$ & $\sqrt3$ & not defined\end{tabular}\end{center}
${F(UC(45, "(√2/2, √2/2)"), 6.5, "At π/4 both coordinates equal √2/2.")}`],
    ["2. Any quadrant", S`Example: $\sin\frac{4\pi}3$. Q3, reference angle $\frac\pi3$, and sine is negative: $-\frac{\sqrt3}2$. Reference angles: Q2, $\pi-\theta$; Q3, $\theta-\pi$; Q4, $2\pi-\theta$.`],
    ["3. Terminal arm ratios", S`For $(x,y)$ on the arm with $r=\sqrt{x^2+y^2}$: $\sin\theta=\frac yr$, $\cos\theta=\frac xr$, $\tan\theta=\frac yx$, $\csc\theta=\frac ry$, $\sec\theta=\frac rx$, $\cot\theta=\frac xy$. The radius $r$ is always positive.
${F(ARM(3, 4, "(3, 4)"))}`],
    ["4. Reciprocals", S`A reciprocal ratio is not defined where the original is 0. For example, $\sec\frac\pi2$ is not defined, because $\cos\frac\pi2=0$. On a calculator: $\csc x=\frac1{\sin x}$, not $\sin^{-1}x$.`],
  ],
  tips: ["csc goes with sin, sec with cos.", "$\\sin^2\\theta$ means $(\\sin\\theta)^2$.", "Use the given sign information to fix the quadrant before finding a missing side.", "Rationalize when asked: $\\frac1{\\sqrt2}=\\frac{\\sqrt2}2$.", "Angles beyond $2\\pi$: subtract full turns first."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
