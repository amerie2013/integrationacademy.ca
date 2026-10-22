// IB AA SL Worksheet 12.3 — Trigonometric Identities (teacher edition)
import { F, svgT } from "./figT.mjs";
import { figDoc, unitPoint } from "../figs12.mjs";

const S = String.raw;
const PI = Math.PI;

const EXAMPLES = [
  { title: "Pythagorean identity", q: S`Simplify $5-5\cos^2x$.`,
    steps: [S`$5(1-\cos^2x)$.`], ans: S`$5\sin^2x$` },
  { title: "Tangent", q: S`Simplify $\cos x\tan x$.`,
    steps: [S`$\cos x\cdot\frac{\sin x}{\cos x}$.`], ans: S`$\sin x$` },
  { title: "Find cos", q: S`$\sin\theta=\frac{20}{29}$, θ obtuse. Find $\cos\theta$.`,
    steps: [S`$\cos^2\theta=\frac{441}{841}$; negative.`], ans: S`$-\frac{21}{29}$` },
  { title: "sin 2θ", q: S`$\sin\theta=\frac{4}{5}$, θ acute. Find $\sin2\theta$.`,
    fig: svgT(figDoc({ items: unitPoint(Math.asin(0.8), { label: "θ", quadrants: false }) }), 4.2),
    steps: [S`$\cos\theta=\frac35$; $2\cdot\frac45\cdot\frac35$.`], ans: S`$\frac{24}{25}$` },
  { title: "cos 2θ", q: S`$\cos\theta=\frac13$. Find $\cos2\theta$.`,
    steps: [S`$2\left(\frac19\right)-1$.`], ans: S`$-\frac79$` },
  { title: "Expand and simplify", q: S`Simplify $(\cos x-\sin x)^2$.`,
    steps: [S`$\cos^2x-2\sin x\cos x+\sin^2x$.`], ans: S`$1-\sin2x$` },
  { title: "Prove", q: S`Prove $\frac{\sin2x}{\sin x}=2\cos x$.`,
    steps: [S`$\frac{2\sin x\cos x}{\sin x}$.`], ans: "proved" },
  { title: "Graph check", q: S`Use graphs to check that $\cos^2x-\sin^2x=\cos2x$.`,
    fig: F({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.4, ymax: 1.4 }, curves: [{ f: (x) => Math.cos(x) ** 2 - Math.sin(x) ** 2 }, { f: (x) => Math.cos(2 * x), color: "amber" }], step: { x: PI / 2, y: 0.5 } }, 5.4),
    steps: ["The curves coincide."], ans: "identity" },
  { title: "Exact double angle", q: S`Find the exact value of $2\sin\frac{\pi}{12}\cos\frac{\pi}{12}$.`,
    steps: [S`$\sin\frac{\pi}{6}$.`], ans: S`$\frac12$` },
];

const PROBLEMS = [
  { level: 1, q: S`Simplify $\sin^2x+\cos^2x+2$.`, recap: "Identity.", ans: "3" },
  { level: 1, q: S`Simplify $\frac{\sin x}{\cos x}$.`, recap: "Definition.", ans: S`$\tan x$` },
  { level: 1, q: S`If $\sin x=0.5$, find $\cos2x$.`, recap: S`$1-2\sin^2x$.`, ans: "0.5" },
  { level: 2, q: S`$\cos\theta=-\frac{8}{17}$, θ in quadrant 2. Find $\sin\theta$ and $\tan\theta$.`, recap: "8-15-17.", ans: S`$\frac{15}{17}$; $-\frac{15}{8}$` },
  { level: 2, q: S`$\sin\theta=\frac{1}{3}$, θ acute. Find $\sin2\theta$ exactly.`, recap: "Find cos first.", ans: S`$\frac{4\sqrt2}{9}$` },
  { level: 2, q: S`Simplify $\frac{1-\cos2x}{2}$.`, recap: S`$1-2\sin^2x$.`, ans: S`$\sin^2x$` },
  { level: 2, q: S`Simplify $4\sin x\cos x$.`, recap: "Double angle.", ans: S`$2\sin2x$` },
  { level: 2, q: "Sketch y = sin²x and y = ½(1 − cos 2x) on the grid. What do you notice?", recap: "Identity.", ans: "same curve",
    fig: F({ view: { xmin: 0, xmax: 2 * PI, ymin: -0.5, ymax: 1.5 }, step: { x: PI / 2, y: 0.5 } }, 5) },
  { level: 3, space: 4, q: S`Prove $\frac{\cos2x}{\cos x+\sin x}=\cos x-\sin x$.`, recap: "Difference of squares.", ans: S`$\frac{(\cos x-\sin x)(\cos x+\sin x)}{\cos x+\sin x}$` },
  { level: 3, space: 4, q: S`Prove $\tan x+\frac{1}{\tan x}=\frac{2}{\sin2x}$.`, recap: "Common denominator.", ans: S`$\frac{\sin^2x+\cos^2x}{\sin x\cos x}=\frac{1}{\sin x\cos x}=\frac2{\sin2x}$` },
  { level: 3, space: 4, q: S`$\tan\theta=2$, θ acute. Find $\sin2\theta$ and $\cos2\theta$.`, recap: S`Triangle 1, 2, $\sqrt5$.`, ans: S`$\frac45$; $-\frac35$` },
  { level: 3, space: 4, q: S`Express $\cos^4x-\sin^4x$ in terms of $\cos2x$.`, recap: "Difference of squares.", ans: S`$\cos2x$` },
  { level: 3, space: 4, q: S`Find the maximum and minimum values of $3\sin x\cos x+1$.`, recap: S`$\frac32\sin2x+1$.`, ans: S`max $2.5$, min $-0.5$` },
];

export const WS = {
  code: "12.3",
  title: "Trigonometric Identities",
  bigideas: S`An identity holds for every value. $\sin^2\theta+\cos^2\theta=1$ comes from the unit circle; $\tan\theta=\frac{\sin\theta}{\cos\theta}$. Double angles: $\sin2\theta=2\sin\theta\cos\theta$ and $\cos2\theta=\cos^2\theta-\sin^2\theta=2\cos^2\theta-1=1-2\sin^2\theta$. To prove an identity, transform one side into the other.`,
  goals: ["Use the Pythagorean identity.", "Use double angle identities.", "Simplify expressions.", "Prove identities."],
  curriculum: "SL 3.6",
  vocab: [["Identity", "true for all x"], ["Double angle", S`$2\theta$ formulas`], ["Proof", "one side to the other"]],
  hook: "Is sin 2x the same as 2 sin x? Test a few values before deciding.",
  concepts: [
    ["1. Pythagorean", S`${svgT(figDoc({ items: unitPoint(0.8, { label: "θ", quadrants: false }) }), 4.2)} Legs cos θ, sin θ.`],
    ["2. Double angle", "Three forms of cos 2θ."],
    ["3. Proofs", "Work on one side."],
  ],
  tips: ["sin² x = (sin x)².", "sin 2x ≠ 2 sin x.", "Choose the right cos 2x.", "Factorise.", "Check with a graph."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
