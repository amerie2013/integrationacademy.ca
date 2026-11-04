// MHF4U Worksheet 4.5 — Double Angle Formulas (teacher edition)
import { F } from "./figT.mjs";
import { ARM, TG } from "../trigfig.mjs";
const S = String.raw;

const EXAMPLES = [
  { title: "From sine", q: S`$\sin x=\dfrac{5}{13}$ with $x$ in Q2. Find $\sin2x$ and $\cos2x$.`, fig: F(ARM(-12, 5, "(−12, 5)")),
    steps: [S`Q2: $\cos x=-\frac{12}{13}$.`, S`$\sin2x=2\cdot\frac5{13}\left(-\frac{12}{13}\right)=-\frac{120}{169}$.`, S`$\cos2x=1-2\cdot\frac{25}{169}=\frac{119}{169}$.`], ans: S`$-\frac{120}{169},\ \frac{119}{169}$` },
  { title: "From cosine", q: S`$\cos x=\dfrac{8}{17}$ with $x$ in Q4. Find $\sin2x$ and $\tan2x$.`, fig: F(ARM(8, -15, "(8, −15)")),
    steps: [S`Q4: $\sin x=-\frac{15}{17}$.`, S`$\sin2x=2\left(-\frac{15}{17}\right)\frac8{17}=-\frac{240}{289}$.`, S`$\cos2x=2\cdot\frac{64}{289}-1=-\frac{161}{289}$, so $\tan2x=\frac{240}{161}$.`], ans: S`$-\frac{240}{289},\ \frac{240}{161}$` },
  { title: "From tangent", q: S`$\tan x=\dfrac34$ with $x$ in Q1. Find $\tan2x$ and $\sin2x$.`, fig: F(ARM(4, 3, "(4, 3)")),
    steps: [S`$\tan2x=\frac{2\cdot\frac34}{1-\frac9{16}}=\frac{3/2}{7/16}=\frac{24}7$.`, S`$\sin x=\frac35$, $\cos x=\frac45$, so $\sin2x=\frac{24}{25}$.`], ans: S`$\frac{24}7,\ \frac{24}{25}$` },
  { title: "Condensing", q: S`Evaluate $2\sin\dfrac\pi{12}\cos\dfrac\pi{12}$.`,
    steps: [S`$\sin\left(2\cdot\frac\pi{12}\right)=\sin\frac\pi6$.`], ans: S`$\frac12$` },
  { title: "Using another form", q: S`Evaluate $2\cos^2\dfrac\pi8-1$.`,
    steps: [S`It is $\cos\left(2\cdot\frac\pi8\right)=\cos\frac\pi4$.`], ans: S`$\frac{\sqrt2}2$` },
  { title: "A general double", q: S`Write $\cos^23x-\sin^23x$ and $4\sin2x\cos2x$ as single ratios.`, fig: F(TG([[(x) => Math.cos(6 * x), "violet"]], { xmin: -2, xmax: 2, ymin: -2, ymax: 2 })),
    steps: [S`$\cos^2u-\sin^2u=\cos2u$ with $u=3x$: $\cos6x$.`, S`$4\sin2x\cos2x=2(2\sin2x\cos2x)=2\sin4x$.`], ans: S`$\cos6x$; $2\sin4x$` },
  { title: "A half angle", q: S`Find the exact value of $\sin\dfrac\pi{12}$ using $\cos\dfrac\pi6$.`,
    steps: [S`$\cos\frac\pi6=1-2\sin^2\frac\pi{12}$.`, S`$\sin^2\frac\pi{12}=\frac{1-\frac{\sqrt3}2}2=\frac{2-\sqrt3}4$.`, S`$\frac\pi{12}$ is in Q1: take the positive root.`], ans: S`$\frac{\sqrt{2-\sqrt3}}2$` },
  { title: "A double-angle graph", q: S`Rewrite $y=\sin x\cos x$ as a single sine, and state its amplitude and period.`, fig: F(TG([[(x) => Math.sin(x) * Math.cos(x), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -1, ymax: 1 }, [], { step: { x: 1, y: 0.5 } })),
    steps: [S`$\sin x\cos x=\frac12(2\sin x\cos x)=\frac12\sin2x$.`, S`Amplitude $\frac12$; period $\frac{2\pi}2=\pi$.`], ans: S`$y=\frac12\sin2x$; amplitude $\frac12$, period $\pi$` },
  { title: "Back to x", q: S`$\cos2x=\dfrac{1}{9}$ with $0\lt x\lt\dfrac\pi2$. Find $\sin x$ and $\cos x$ exactly.`,
    steps: [S`$1-2\sin^2x=\frac19\Rightarrow\sin^2x=\frac49$, so $\sin x=\frac23$.`, S`$2\cos^2x-1=\frac19\Rightarrow\cos^2x=\frac59$, so $\cos x=\frac{\sqrt5}3$.`], ans: S`$\frac23,\ \frac{\sqrt5}3$` },
];

const PROBLEMS = [
  { level: 1, q: S`State the three forms of $\cos2x$.`, ans: S`$\cos^2x-\sin^2x$, $2\cos^2x-1$, $1-2\sin^2x$` },
  { level: 1, q: S`$\sin x=0.6$ and $\cos x=0.8$. Find $\sin2x$.`, ans: S`$0.96$` },
  { level: 1, q: S`Write $2\sin5x\cos5x$ as one ratio.`, ans: S`$\sin10x$` },
  { level: 2, q: S`$\cos x=-\dfrac{4}{5}$ in Q3. Find $\sin2x$ and $\cos2x$.`, ans: S`$\frac{24}{25},\ \frac7{25}$` },
  { level: 2, q: S`$\tan x=\dfrac25$. Find $\tan2x$.`, ans: S`$\frac{20}{21}$` },
  { level: 2, q: S`Evaluate $\cos^2\dfrac\pi8-\sin^2\dfrac\pi8$.`, ans: S`$\frac{\sqrt2}2$` },
  { level: 2, q: S`Evaluate $1-2\sin^2\dfrac{\pi}{12}$.`, ans: S`$\frac{\sqrt3}2$` },
  { level: 2, q: S`$\sin x=\dfrac13$ in Q1. Find $\cos2x$ and $\sin2x$ exactly.`, ans: S`$\frac79,\ \frac{4\sqrt2}9$` },
  { level: 3, space: 5, q: S`Find the exact value of $\tan\dfrac\pi8$, using $\tan2x$ with $x=\frac\pi8$.`, ans: S`$\sqrt2-1$` },
  { level: 3, space: 5, q: S`Express $\cos3x$ in terms of $\cos x$ only.`, ans: S`$4\cos^3x-3\cos x$` },
  { level: 3, space: 5, q: S`$\sin x-\cos x=\dfrac15$. Find $\sin2x$.`, ans: S`$\frac{24}{25}$` },
  { level: 3, space: 5, q: S`$\cos2x=-\dfrac{7}{25}$ with $\dfrac\pi2\lt x\lt\pi$. Find $\sin x$, $\cos x$ and $\tan x$.`, ans: S`$\frac45,\ -\frac35,\ -\frac43$` },
  { level: 3, space: 5, q: S`Find the range of $y=\sin^2x$, by rewriting it with $\cos2x$. State the amplitude and period of the resulting wave.`, ans: S`$y=\frac12-\frac12\cos2x$; range $[0,1]$; amplitude $\frac12$, period $\pi$` },
];

export const WS = {
  code: "4.5",
  title: "Double Angle Formulas",
  bigideas: S`Setting $b=a$ in the compound angle formulas gives $\sin2x=2\sin x\cos x$, $\cos2x=\cos^2x-\sin^2x$ and $\tan2x=\frac{2\tan x}{1-\tan^2x}$. The Pythagorean identity gives two further forms of $\cos2x$: $2\cos^2x-1$ and $1-2\sin^2x$. These condense products into one ratio, reach half angles, and turn equations in $2x$ into equations in $x$.`,
  goals: ["Derive and state the double angle formulas.", "Use the three forms of $\\cos2x$.", "Find ratios of $2x$ from a ratio of $x$.", "Find exact values with half angles."],
  curriculum: "B3.2, B3.3",
  vocab: [["Double angle", "an angle of the form $2x$"], ["Half angle", "$x$ when $2x$ is known, such as $\\frac\\pi8$ from $\\frac\\pi4$"], ["Pythagorean identity", "$\\sin^2x+\\cos^2x=1$"]],
  hook: S`Graph $y=\sin2x$ and $y=2\sin x$ on one set of axes. Where do they agree? What does each do to the wave?`,
  concepts: [
    ["1. Deriving the formulas", S`$\sin2x=\sin(x+x)=\sin x\cos x+\cos x\sin x=2\sin x\cos x$.
\par $\cos2x=\cos(x+x)=\cos^2x-\sin^2x$. Replacing $\sin^2x$ with $1-\cos^2x$ gives $2\cos^2x-1$; replacing $\cos^2x$ with $1-\sin^2x$ gives $1-2\sin^2x$.
\par $\tan2x=\tan(x+x)=\frac{2\tan x}{1-\tan^2x}$.`],
    ["2. sin 2x is not 2 sin x", S`$\sin2x$ has half the period of $\sin x$ and the same height, while $2\sin x$ has the same period and twice the height.
${F(TG([[(x) => Math.sin(2 * x), "violet"], [(x) => 2 * Math.sin(x), "green"]], { xmin: -6.5, xmax: 6.5, ymin: -3, ymax: 3 }), 6.5, "sin 2x (violet) and 2 sin x (green).")}`],
    ["3. Choosing a form", S`Given only $\sin x$, use $1-2\sin^2x$. Given only $\cos x$, use $2\cos^2x-1$. Given both, any form works. Find $\sin x$ and $\cos x$ using the quadrant of $x$, not of $2x$.`],
    ["4. Half angles", S`Rearranging: $\cos^2x=\frac{1+\cos2x}2$ and $\sin^2x=\frac{1-\cos2x}2$. Take the root whose sign fits the quadrant of $x$. For $\frac\pi8$ in Q1, both are positive.`],
  ],
  tips: ["$\\sin2x\\ne2\\sin x$.", "Use the quadrant of $x$ to find the signs.", "$\\cos^2x$ means $(\\cos x)^2$.", "The formulas work for any doubling: $\\cos8x=\\cos^24x-\\sin^24x$.", "$\\tan2x$ is not defined when $\\cos2x=0$."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
