// MHF4U Worksheet 4.4 — Compound Angle Formulas (teacher edition)
import { F } from "./figT.mjs";
import { UC, ARM, TG } from "../trigfig.mjs";
const S = String.raw;

const EXAMPLES = [
  { title: "A sum for cosine", q: S`Find the exact value of $\cos\dfrac{7\pi}{12}$.`, fig: F(UC(105, "7π/12")),
    steps: [S`$\frac{7\pi}{12}=\frac\pi3+\frac\pi4$.`, S`$\cos\frac\pi3\cos\frac\pi4-\sin\frac\pi3\sin\frac\pi4=\frac12\cdot\frac{\sqrt2}2-\frac{\sqrt3}2\cdot\frac{\sqrt2}2$.`, S`$=\frac{\sqrt2-\sqrt6}4$.`], ans: S`$\frac{\sqrt2-\sqrt6}4$` },
  { title: "A difference for sine", q: S`Find the exact value of $\sin\dfrac\pi{12}$.`, fig: F(UC(15, "π/12")),
    steps: [S`$\frac\pi{12}=\frac\pi4-\frac\pi6$.`, S`$\sin\frac\pi4\cos\frac\pi6-\cos\frac\pi4\sin\frac\pi6=\frac{\sqrt2}2\cdot\frac{\sqrt3}2-\frac{\sqrt2}2\cdot\frac12$.`], ans: S`$\frac{\sqrt6-\sqrt2}4$` },
  { title: "Tangent of a sum", q: S`Find the exact value of $\tan\dfrac{7\pi}{12}$.`,
    steps: [S`$\tan\left(\frac\pi3+\frac\pi4\right)=\frac{\sqrt3+1}{1-\sqrt3}$.`, S`Multiply by $\frac{1+\sqrt3}{1+\sqrt3}$: $\frac{(1+\sqrt3)^2}{1-3}=\frac{4+2\sqrt3}{-2}$.`], ans: S`$-2-\sqrt3$` },
  { title: "Condensing sine", q: S`Evaluate $\sin\dfrac{5\pi}{18}\cos\dfrac\pi9+\cos\dfrac{5\pi}{18}\sin\dfrac\pi9$.`,
    steps: [S`Mixed terms with a plus: $\sin(a+b)$.`, S`$\frac{5\pi}{18}+\frac{2\pi}{18}=\frac{7\pi}{18}$. Not special yet, so compute: $\sin\frac{7\pi}{18}\approx0.9397$.`], ans: S`$\sin\frac{7\pi}{18}\approx0.9397$` },
  { title: "Condensing cosine", q: S`Write $\cos5x\cos2x+\sin5x\sin2x$ as one ratio.`, fig: F(TG([[(x) => Math.cos(3 * x), "violet"]], { xmin: -3.5, xmax: 3.5, ymin: -2, ymax: 2 })),
    steps: [S`Matching terms with a plus: $\cos(a-b)$.`, S`$\cos(5x-2x)$.`], ans: S`$\cos3x$` },
  { title: "Given ratios", q: S`$\sin a=\dfrac45$ in Q1 and $\sin b=\dfrac5{13}$ in Q2. Find $\cos(a+b)$.`, fig: F(ARM(-12, 5, "b: (−12, 5)")),
    steps: [S`$\cos a=\frac35$; $\cos b=-\frac{12}{13}$.`, S`$\cos a\cos b-\sin a\sin b=-\frac{36}{65}-\frac{20}{65}$.`], ans: S`$-\frac{56}{65}$` },
  { title: "Sine of a difference", q: S`$\cos a=-\dfrac35$ in Q3 and $\cos b=\dfrac{8}{17}$ in Q1. Find $\sin(a-b)$.`, fig: F(ARM(-3, -4, "a: (−3, −4)")),
    steps: [S`$\sin a=-\frac45$; $\sin b=\frac{15}{17}$.`, S`$\sin a\cos b-\cos a\sin b=\left(-\frac45\right)\frac8{17}-\left(-\frac35\right)\frac{15}{17}$.`, S`$=\frac{-32+45}{85}$.`], ans: S`$\frac{13}{85}$` },
  { title: "Proving a relation", q: S`Use a formula to show $\cos\left(x-\dfrac{3\pi}2\right)=-\sin x$.`,
    steps: [S`$\cos x\cos\frac{3\pi}2+\sin x\sin\frac{3\pi}2$.`, S`$=\cos x\cdot0+\sin x\cdot(-1)$.`], ans: S`$-\sin x$` },
  { title: "Rewriting a wave", q: S`Write $\sin x+\cos x$ in the form $\sqrt2\sin\left(x+\dfrac\pi4\right)$ and verify.`, fig: F(TG([[(x) => Math.sin(x) + Math.cos(x), "violet"], [Math.sin, "gray"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 })),
    steps: [S`$\sqrt2\left(\sin x\cos\frac\pi4+\cos x\sin\frac\pi4\right)=\sqrt2\left(\frac{\sqrt2}2\sin x+\frac{\sqrt2}2\cos x\right)$.`, S`$=\sin x+\cos x$.`], ans: S`verified: amplitude $\sqrt2$, shift $\frac\pi4$ left` },
];

const PROBLEMS = [
  { level: 1, q: S`Expand $\sin(x+y)$ and $\cos(x-y)$.`, ans: S`$\sin x\cos y+\cos x\sin y$; $\cos x\cos y+\sin x\sin y$` },
  { level: 1, q: S`Find the exact value of $\sin\dfrac{5\pi}{12}$.`, ans: S`$\frac{\sqrt6+\sqrt2}4$` },
  { level: 1, q: S`Write $\sin4x\cos x-\cos4x\sin x$ as one ratio.`, ans: S`$\sin3x$` },
  { level: 2, q: S`Find the exact value of $\cos\dfrac{11\pi}{12}$.`, ans: S`$-\frac{\sqrt6+\sqrt2}4$` },
  { level: 2, q: S`Find the exact value of $\tan\dfrac{5\pi}{12}$.`, ans: S`$2+\sqrt3$` },
  { level: 2, q: S`Evaluate $\cos\dfrac{\pi}{5}\cos\dfrac{3\pi}{10}-\sin\dfrac\pi5\sin\dfrac{3\pi}{10}$.`, ans: S`$\cos\frac\pi2=0$` },
  { level: 2, q: S`$\sin a=\dfrac7{25}$ in Q1 and $\cos b=\dfrac45$ in Q1. Find $\sin(a+b)$.`, ans: S`$\frac45$` },
  { level: 2, q: S`$\tan a=4$ and $\tan b=\dfrac13$. Find $\tan(a-b)$.`, ans: S`$\frac{11}7$` },
  { level: 3, space: 5, q: S`$\cos a=-\dfrac{15}{17}$ in Q2 and $\sin b=-\dfrac35$ in Q4. Find $\sin(a+b)$ and $\cos(a+b)$, and state the quadrant of $a+b$.`, ans: S`$\sin=\frac{77}{85}$, $\cos=-\frac{36}{85}$; Q2` },
  { level: 3, space: 5, q: S`Derive $\cos(a+b)$ from $\cos(a-b)$ by replacing $b$ with $-b$. Name the two relations you used.`, ans: S`$\cos a\cos(-b)+\sin a\sin(-b)=\cos a\cos b-\sin a\sin b$; $\cos$ even, $\sin$ odd` },
  { level: 3, space: 5, q: S`Write $\sqrt3\sin x+\cos x$ in the form $R\sin(x+\alpha)$, with $R>0$ and $0\lt\alpha\lt\frac\pi2$, and state its maximum.`, ans: S`$2\sin\left(x+\frac\pi6\right)$; max 2` },
  { level: 3, space: 5, q: S`Show that $\sin(x+y)\sin(x-y)=\sin^2x-\sin^2y$.`, ans: S`$\sin^2x\cos^2y-\cos^2x\sin^2y$, then use $\cos^2=1-\sin^2$` },
  { level: 3, space: 5, q: S`$\tan a=\dfrac13$ and $\tan b=\dfrac14$ with $a$, $b$ acute. Find $\tan(a+b)$, and show that $a+b$ is not $\frac\pi4$.`, ans: S`$\frac7{11}\ne1$` },
];

export const WS = {
  code: "4.4",
  title: "Compound Angle Formulas",
  bigideas: S`Sine and cosine do not distribute over a sum: $\sin(a+b)\ne\sin a+\sin b$. The correct formulas are $\sin(a\pm b)=\sin a\cos b\pm\cos a\sin b$ and $\cos(a\pm b)=\cos a\cos b\mp\sin a\sin b$. They give exact values at angles such as $\frac\pi{12}$, condense expanded expressions into one ratio, and combine given ratios from known quadrants.`,
  goals: ["State the sum and difference formulas.", "Find exact values with special-angle pairs.", "Condense expressions into one ratio.", "Use given ratios in known quadrants."],
  curriculum: "B3.2",
  vocab: [["Compound angle", "an angle written as a sum or difference of two angles"], ["Exact value", "written with roots and fractions, not decimals"], ["Rationalize", "clear a root from a denominator"]],
  hook: S`Use a calculator to compare $\sin\left(\frac\pi6+\frac\pi3\right)$ and $\sin\frac\pi6+\sin\frac\pi3$. Then predict: is the true value bigger or smaller than the sum? Does this always happen?`,
  concepts: [
    ["1. The formulas", S`\begin{center}\begin{tabular}{@{}l@{}}$\sin(a+b)=\sin a\cos b+\cos a\sin b$\\ $\sin(a-b)=\sin a\cos b-\cos a\sin b$\\ $\cos(a+b)=\cos a\cos b-\sin a\sin b$\\ $\cos(a-b)=\cos a\cos b+\sin a\sin b$\\ $\tan(a+b)=\frac{\tan a+\tan b}{1-\tan a\tan b}$, \quad $\tan(a-b)=\frac{\tan a-\tan b}{1+\tan a\tan b}$\end{tabular}\end{center}`],
    ["2. Where the difference formula comes from", S`Take points $P(\cos a,\sin a)$ and $Q(\cos b,\sin b)$ on the unit circle. The squared distance between them is $2-2(\cos a\cos b+\sin a\sin b)$. Rotating the picture so that $Q$ lands on $(1,0)$ moves $P$ to angle $a-b$, and the same distance becomes $2-2\cos(a-b)$. Equating the two gives $\cos(a-b)=\cos a\cos b+\sin a\sin b$. Replacing $b$ with $-b$ gives the sum formula, and $\sin x=\cos\left(\frac\pi2-x\right)$ gives the sine formulas.
${F(UC(75, "P", [{ x: Math.cos(0.5), y: Math.sin(0.5), label: "Q", color: "blue" }]), 6.5)}`],
    ["3. Choosing angle pairs", S`Write the angle in twelfths: $\frac\pi6=\frac{2\pi}{12}$, $\frac\pi4=\frac{3\pi}{12}$, $\frac\pi3=\frac{4\pi}{12}$. Then $\frac{5\pi}{12}=\frac{2\pi}{12}+\frac{3\pi}{12}$ and $\frac\pi{12}=\frac{4\pi}{12}-\frac{3\pi}{12}$.`],
    ["4. Reading backwards", S`Mixed terms ($\sin\cdot\cos$) are a sine formula. Matching terms ($\cos\cdot\cos$ and $\sin\cdot\sin$) are a cosine formula. A sum of waves such as $\sin x+\cos x$ is one wave $R\sin(x+\alpha)$, as the graph below shows.
${F(TG([[(x) => Math.sin(x) + Math.cos(x), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))}`],
  ],
  tips: ["Sine keeps the sign of the operation; cosine flips it.", "Find missing ratios with quadrant signs first.", "Use exact values until the last step.", "Do not cancel into the angle: $\\sin(a+b)$ cannot be split.", "Check an exact answer with a decimal approximation."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
