// MCV4U Worksheet 7.1 — Cartesian Vectors (teacher edition)
import { svgT, gridT } from "./figT.mjs";
import { vdoc } from "../vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const EXAMPLES = [
  { title: "A position vector", q: S`Write the position vector of $Q(6,-2.5)$ and find its magnitude.`,
    fig: VF({ view: { xmin: -1, xmax: 7.5, ymin: -3.5, ymax: 1 }, step: 1, arrows: [{ from: [0, 0], to: [6, -2.5], vl: "OQ", off: 16 }], points: [{ x: 6, y: -2.5, label: "Q(6, −2.5)", dx: -30, dy: 18 }] }, 5),
    steps: [S`$\overrightarrow{OQ}=[6,-2.5]=6\vec i-2.5\vec j$.`, S`$\sqrt{36+6.25}=\sqrt{42.25}$.`], ans: "[6, −2.5], magnitude 6.5" },
  { title: "Between two points", q: S`Find $\overrightarrow{CD}$, its magnitude and direction for $C(-3,-4)$ and $D(2,8)$.`,
    steps: [S`$\overrightarrow{CD}=[5,12]$, $|\overrightarrow{CD}|=13$.`, S`Quadrant I: $\tan^{-1}\frac{12}5\approx67.38^\circ$.`], ans: "[5, 12], 13, at about 67.38° from the positive x-axis" },
  { title: "Combining", q: S`For $\vec u=[-4,1]$ and $\vec v=[3,-2]$, find $2\vec u+3\vec v$ and its magnitude.`,
    steps: [S`$[-8,2]+[9,-6]=[1,-4]$.`, S`$\sqrt{1+16}=\sqrt{17}$.`], ans: "[1, −4], about 4.12" },
  { title: "Equal vectors", q: S`Find $x$ and $y$ if $[x+1,\ 2y]=[4,-6]$.`,
    steps: [S`Equal vectors have equal components: $x+1=4$, $2y=-6$.`], ans: "x = 3, y = −3" },
  { title: "From magnitude and direction", q: S`Write a vector of magnitude 20 at $235^\circ$ from the positive x-axis in components.`,
    fig: VF({ view: { xmin: -13, xmax: 2, ymin: -18, ymax: 2 }, step: 2, arrows: [{ from: [0, 0], to: [-11.47, -16.38], vl: "v", label: "20", off: 16 }], arcs: [{ at: [0, 0], r: 1.6, a: 0, b: 235, label: "235°" }] }, 4),
    steps: [S`$[20\cos235^\circ,\ 20\sin235^\circ]$.`], ans: "about [−11.47, −16.38]" },
  { title: "A unit vector", q: S`Find the unit vector in the direction of $[-8,6]$.`,
    steps: [S`Magnitude 10; divide each component.`], ans: "[−0.8, 0.6]" },
  { title: "Collinear vectors", q: S`Are $[6,-9]$ and $[-4,6]$ collinear?`,
    steps: [S`$[-4,6]=-\frac23[6,-9]$.`], ans: "yes: one is −2/3 times the other" },
  { title: "Using another pair of directions", q: S`Write $[7,-4]$ as $a[1,1]+b[1,-1]$.`,
    steps: [S`$a+b=7$ and $a-b=-4$.`, S`Add: $2a=3$.`], ans: "a = 1.5, b = 5.5" },
  { title: "A midpoint", q: S`For $A(2,7)$ and $B(8,-1)$, find the midpoint $M$ and $\overrightarrow{AM}$.`,
    steps: [S`$M=\left(\frac{2+8}2,\frac{7-1}2\right)=(5,3)$.`, S`$\overrightarrow{AM}=[3,-4]$.`], ans: "M(5, 3), AM = [3, −4]" },
];

const PROBLEMS = [
  { level: 1, q: S`Find $|[9,-12]|$.`, recap: "Pythagoras.", ans: "15" },
  { level: 1, q: S`Find $\overrightarrow{AB}$ for $A(0,5)$ and $B(4,2)$.`, recap: "Head minus tail.", ans: "[4, −3]" },
  { level: 1, q: S`Find $3[2,-1]-[1,4]$.`, recap: "Component by component.", ans: "[5, −7]" },
  { level: 2, q: S`Find the direction (from the positive x-axis) of $[-5,-5\sqrt3]$.`, recap: "Quadrant III, reference 60°.", ans: "240°" },
  { level: 2, q: S`Write a vector of magnitude 8 at $300^\circ$ in components.`, recap: S`$[8\cos300^\circ,\ 8\sin300^\circ]$.`, ans: "[4, −6.93]" },
  { level: 2, q: S`Find the unit vector in the direction of $[12,-5]$.`, recap: "Divide by 13.", ans: S`$\left[\frac{12}{13},-\frac5{13}\right]$` },
  { level: 2, q: S`Find $k$ so that $[3,k]$ is parallel to $[-6,10]$.`, recap: "Same ratio of components.", ans: "k = −5" },
  { level: 2, q: S`On the grid, draw $\vec u=[-2,3]$, $\vec v=[4,1]$ and $\vec u+\vec v$ from the origin.`, recap: "Tip to tail.", ans: "u + v = [2, 4]", fig: gridT({ xmin: -3, xmax: 5, ymin: -1, ymax: 5 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`$A(-2,1)$, $B(3,0)$ and $C(5,4)$ are vertices of parallelogram $ABCD$. Find $D$.`, recap: "AD = BC.", ans: "D(0, 5)" },
  { level: 3, space: 5, q: S`Find $a$ and $b$ with $a[2,1]+b[-1,3]=[3,12]$.`, recap: "Two equations in a and b.", ans: "a = 3, b = 3" },
  { level: 3, space: 5, q: S`Find the point one third of the way from $A(1,1)$ to $B(10,7)$.`, recap: "OA + (1/3)AB.", ans: "(4, 3)" },
  { level: 3, space: 5, q: S`Use vectors to classify $\triangle ABC$ for $A(1,1)$, $B(5,3)$, $C(3,7)$.`, recap: "Compare the three side lengths.", ans: S`$AB=BC=\sqrt{20}$, $CA=\sqrt{40}$, and $20+20=40$: an isosceles right triangle (right angle at $B$)` },
  { level: 3, space: 5, q: S`Find the vector of length 10 pointing opposite to $[3,4]$.`, recap: "Unit vector, reverse, scale.", ans: "[−6, −8]" },
];

export const WS = {
  code: "7.1",
  title: "Cartesian Vectors",
  bigideas: S`A vector on a grid is written by its components: $[a,b]=a\vec i+b\vec j$. The vector from $A$ to $B$ is head minus tail. Operations work component by component; the magnitude is $\sqrt{a^2+b^2}$; the direction comes from $\tan^{-1}\left|\frac ba\right|$ placed in the right quadrant; and $[m\cos\theta,\ m\sin\theta]$ turns a magnitude and direction into components. Divide by the magnitude for a unit vector.`,
  goals: ["Write vectors in component form.", "Find vectors between points.", "Operate by components.", "Find magnitudes, directions and unit vectors."],
  curriculum: "C1.3, C2.1",
  vocab: [["Components", "$[a,b]$"], ["$\\vec i,\\ \\vec j$", "$[1,0],\\ [0,1]$"], ["AB", "B − A"], ["Unit vector", "$\\frac{\\vec v}{|\\vec v|}$"]],
  hook: S`A robot moves 3 m east and 4 m north, then 1 m east and 2 m south. Describe its total movement with one pair of numbers.`,
  concepts: [
    ["1. Components", S`$\vec v=[4,3]$ is 4 across and 3 up:
${VF({ view: { xmin: -0.5, xmax: 5, ymin: -0.5, ymax: 4 }, step: 1, arrows: [{ from: [0, 0], to: [4, 0], color: "blue", label: "4i", off: 14 }, { from: [4, 0], to: [4, 3], color: "red", label: "3j", off: -16 }, { from: [0, 0], to: [4, 3], vl: "v", off: -16 }] }, 4.2)}`],
    ["2. Head minus tail", S`$\overrightarrow{AB}=[x_2-x_1,\ y_2-y_1]$.`],
    ["3. Direction", S`Reference angle from $\tan^{-1}\left|\frac ba\right|$, then the quadrant from the signs.`],
  ],
  tips: ["AB = B − A.", "Check the quadrant.", "Divide every component for a unit vector.", "[a, b] vector, (a, b) point.", "Collinear: proportional components."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
