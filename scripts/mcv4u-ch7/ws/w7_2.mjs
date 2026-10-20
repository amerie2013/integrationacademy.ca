// MCV4U Worksheet 7.2 — The Dot Product (teacher edition)
import { svgT } from "./figT.mjs";
import { vdoc, pol } from "../vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const EXAMPLES = [
  { title: "From magnitudes and an angle", q: S`$|\vec a|=8$, $|\vec b|=3$, and the angle between them is $135^\circ$. Find $\vec a\cdot\vec b$.`,
    steps: [S`$8\times3\times\cos135^\circ$.`], ans: "about −16.97" },
  { title: "The angle from components", q: S`Find the angle between $[-2,5]$ and $[4,1]$.`,
    fig: VF({ view: { xmin: -3, xmax: 5, ymin: -0.8, ymax: 5.8 }, step: 1, arrows: [{ from: [0, 0], to: [-2, 5], vl: "a", off: -16 }, { from: [0, 0], to: [4, 1], vl: "b", color: "blue", off: 16 }], arcs: [{ at: [0, 0], r: 1, a: 14.04, b: 111.8, label: "97.8°" }] }, 4.6),
    steps: [S`Dot product $-8+5=-3$; magnitudes $\sqrt{29}$ and $\sqrt{17}$.`, S`$\cos\theta=\frac{-3}{\sqrt{29}\sqrt{17}}\approx-0.1351$.`], ans: "about 97.77°" },
  { title: "Perpendicular?", q: S`Are $[8,2]$ and $[-1,4]$ perpendicular?`,
    steps: [S`$-8+8=0$.`], ans: "yes" },
  { title: "Solving for perpendicular", q: S`Find $k$ so that $[k,2]\perp[k,-8]$.`,
    steps: [S`$k^2-16=0$.`], ans: "k = 4 or k = −4" },
  { title: "A difference of squares", q: S`$|\vec a|=5$ and $|\vec b|=3$. Find $(\vec a+\vec b)\cdot(\vec a-\vec b)$.`,
    steps: [S`Expand: $\vec a\cdot\vec a-\vec a\cdot\vec b+\vec b\cdot\vec a-\vec b\cdot\vec b=|\vec a|^2-|\vec b|^2$.`], ans: "25 − 9 = 16" },
  { title: "A vector with itself", q: S`Find $[3,-1]\cdot[3,-1]$ and compare with $|[3,-1]|$.`,
    steps: [S`$9+1=10$, and $|[3,-1]|=\sqrt{10}$.`], ans: S`$10=|\vec a|^2$` },
  { title: "The angle with an axis", q: S`Use a dot product with $\vec i$ to find the angle between $[1,\sqrt3]$ and the x-axis.`,
    steps: [S`$[1,\sqrt3]\cdot[1,0]=1$, $|[1,\sqrt3]|=2$: $\cos\theta=\frac12$.`], ans: "60°" },
  { title: "Building a perpendicular", q: S`Find a vector perpendicular to $[5,-2]$.`,
    fig: VF({ view: { xmin: -1, xmax: 6, ymin: -3, ymax: 5.6 }, step: 1, arrows: [{ from: [0, 0], to: [5, -2], vl: "a", off: 16 }, { from: [0, 0], to: [2, 5], vl: "n", color: "blue", off: -16 }] }, 3.8),
    steps: [S`Swap the components and change one sign: $[2,5]$. Check: $10-10=0$.`], ans: "[2, 5] (or any multiple)" },
  { title: "A length from dot products", q: S`$|\vec a|=4$, $|\vec b|=6$ and $\vec a\cdot\vec b=-3$. Find $|\vec a-\vec b|$.`,
    steps: [S`$|\vec a-\vec b|^2=|\vec a|^2-2\vec a\cdot\vec b+|\vec b|^2=16+6+36$.`], ans: S`$\sqrt{58}\approx7.62$` },
];

const PROBLEMS = [
  { level: 1, q: S`Find $[4,-1]\cdot[2,6]$.`, recap: "8 − 6.", ans: "2" },
  { level: 1, q: S`$|\vec a|=5$, $|\vec b|=2$, angle $60^\circ$. Find $\vec a\cdot\vec b$.`, recap: S`$10\cos60^\circ$.`, ans: "5" },
  { level: 1, q: S`Find $\vec i\cdot\vec j$.`, recap: "Perpendicular unit vectors.", ans: "0" },
  { level: 2, q: S`Find the angle between $[3,1]$ and $[-1,2]$.`, recap: S`$\cos\theta=\frac{-1}{\sqrt{10}\sqrt5}$.`, ans: "about 98.13°" },
  { level: 2, q: S`Find $k$ so that $[6,k]\perp[3,-9]$.`, recap: "18 − 9k = 0.", ans: "k = 2" },
  { level: 2, q: S`If $\vec a\cdot\vec b=4$, find $(2\vec a)\cdot(3\vec b)$.`, recap: "Scalars come out.", ans: "24" },
  { level: 2, q: S`Is the triangle with vertices $O$, $A(4,1)$ and $B(-1,4)$ right-angled at $O$?`, recap: "Dot OA with OB.", ans: "yes: [4, 1] · [−1, 4] = 0" },
  { level: 2, q: S`$|\vec a|=3$, $|\vec b|=2$, $\vec a\cdot\vec b=1$. Find $(\vec a+2\vec b)\cdot(\vec a-\vec b)$.`, recap: "Expand like algebra.", ans: "9 + 1 − 8 = 2" },
  { level: 3, space: 5, q: S`Find every unit vector perpendicular to $[3,4]$.`, recap: "Perpendicular direction, then length 1.", ans: S`$\left[-\frac45,\frac35\right]$ and $\left[\frac45,-\frac35\right]$` },
  { level: 3, space: 5, q: S`Prove that the diagonals of a rhombus are perpendicular.`, recap: S`Diagonals $\vec a+\vec b$ and $\vec a-\vec b$ with $|\vec a|=|\vec b|$.`, ans: S`$(\vec a+\vec b)\cdot(\vec a-\vec b)=|\vec a|^2-|\vec b|^2=0$` },
  { level: 3, space: 5, q: S`Find $\angle BAC$ for $A(1,1)$, $B(6,2)$, $C(3,5)$.`, recap: "Use AB and AC.", ans: "about 52.13°" },
  { level: 3, space: 5, q: S`Find $x$ so that the angle between $[x,1]$ and $[1,1]$ is $45^\circ$.`, recap: S`$\frac{x+1}{\sqrt{x^2+1}\sqrt2}=\frac{1}{\sqrt2}$.`, ans: "x = 0" },
  { level: 3, space: 5, q: S`Explain why $(\vec a\cdot\vec b)\vec c$ makes sense but $(\vec a\cdot\vec b)\cdot\vec c$ does not.`, recap: "What kind of object is a · b?", ans: "a · b is a scalar: it can multiply c, but a dot product needs two vectors" },
];

export const WS = {
  code: "7.2",
  title: "The Dot Product",
  bigideas: S`$\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta=a_1b_1+a_2b_2$ is a scalar. It is positive for acute angles, 0 for perpendicular vectors and negative for obtuse angles, and $\cos\theta=\frac{\vec a\cdot\vec b}{|\vec a||\vec b|}$ gives the angle between two vectors. It is commutative and distributive, scalars factor out, and $\vec a\cdot\vec a=|\vec a|^2$ — so expressions like $|\vec a-\vec b|^2$ expand like algebra.`,
  goals: ["Compute dot products both ways.", "Find angles between vectors.", "Test for perpendicular vectors.", "Expand with the properties."],
  curriculum: "C2.4, C2.5",
  vocab: [["Dot product", "$|\\vec a||\\vec b|\\cos\\theta$"], ["Components", "$a_1b_1+a_2b_2$"], ["Orthogonal", "dot product 0"], ["$\\vec a\\cdot\\vec a$", "$|\\vec a|^2$"]],
  hook: S`Two vectors have lengths 3 and 4. What is the largest their dot product can be? The smallest? When is it 0?`,
  concepts: [
    ["1. Geometry", S`$\vec a\cdot\vec b=|\vec b|\times$ (the part of $\vec a$ along $\vec b$):
${VF({ view: { xmin: -0.5, xmax: 6.5, ymin: -0.8, ymax: 4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [6, 0], vl: "b", off: 16 }, { from: [0, 0], to: pol(4.5, 42), vl: "a", off: -16 }], segs: [{ pts: [pol(4.5, 42), [3.34, 0]], dash: true }], arcs: [{ at: [0, 0], r: 1.1, a: 0, b: 42, label: "θ" }] }, 4.2)}`],
    ["2. Components", S`$[a_1,a_2]\cdot[b_1,b_2]=a_1b_1+a_2b_2$.`],
    ["3. Angle", S`$\cos\theta=\frac{\vec a\cdot\vec b}{|\vec a||\vec b|}$, with $0^\circ\le\theta\le180^\circ$.`],
  ],
  tips: ["The answer is a number.", "Zero means perpendicular.", "a · a = |a|².", "Scalars factor out.", "Angle between 0° and 180°."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
