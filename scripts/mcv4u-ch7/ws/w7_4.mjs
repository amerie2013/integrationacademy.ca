// MCV4U Worksheet 7.4 — Vectors in Three-Space (teacher edition)
import { svgT } from "./figT.mjs";
import { vdoc, p3, axes3, box3, merge } from "../vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const EXAMPLES = [
  { title: "Plotting a point", q: S`Plot $A(4,-2,1)$ and find $|\overrightarrow{OA}|$.`,
    fig: VF(merge(V3, axes3(4.8, 2.6), { segs: box3(4, -2, 1) }, { arrows: [{ from: [0, 0], to: p3(4, -2, 1), vl: "OA", color: "red", off: 16 }], points: [{ x: p3(4, -2, 1)[0], y: p3(4, -2, 1)[1], label: "A(4, −2, 1)", dx: -40, dy: 18 }] }, { view: { xmin: -5.2, xmax: 5.6, ymin: -3.2, ymax: 5.6 } }), 4.6),
    steps: [S`4 along x, $-2$ along y (to the left), 1 up.`, S`$\sqrt{16+4+1}=\sqrt{21}$.`], ans: "about 4.58" },
  { title: "Octants", q: S`Describe where $(3,-1,-2)$ lies.`,
    steps: [S`x positive (in front), y negative (left), z negative (below the xy-plane).`], ans: "the octant with x > 0, y < 0, z < 0" },
  { title: "A distance", q: S`Find the distance from $P(-1,3,2)$ to $Q(5,1,-1)$.`,
    steps: [S`$\overrightarrow{PQ}=[6,-2,-3]$.`, S`$\sqrt{36+4+9}$.`], ans: "7" },
  { title: "Operations", q: S`For $\vec u=[2,0,-1]$ and $\vec v=[-1,3,4]$, find $\vec u+2\vec v$ and its magnitude.`,
    steps: [S`$[2-2,\ 0+6,\ -1+8]=[0,6,7]$.`, S`$\sqrt{36+49}=\sqrt{85}$.`], ans: "[0, 6, 7], about 9.22" },
  { title: "Dot product and angle", q: S`Find the angle between $[1,-1,2]$ and $[3,2,1]$.`,
    steps: [S`Dot product $3-2+2=3$; magnitudes $\sqrt6$ and $\sqrt{14}$.`, S`$\cos\theta=\frac{3}{\sqrt{84}}\approx0.3273$.`], ans: "about 70.89°" },
  { title: "Direction angles", q: S`Find the direction angles of $[1,2,2]$.`,
    steps: [S`Magnitude 3: $\cos\alpha=\frac13$, $\cos\beta=\cos\gamma=\frac23$.`], ans: S`$\alpha\approx70.53^\circ$, $\beta=\gamma\approx48.19^\circ$` },
  { title: "A unit vector", q: S`Find the unit vector in the direction of $[-3,0,4]$.`,
    steps: [S`Magnitude 5; divide.`], ans: "[−0.6, 0, 0.8]" },
  { title: "A midpoint", q: S`Find the midpoint of $(2,5,-1)$ and $(6,-3,7)$.`,
    steps: [S`Average each coordinate.`], ans: "(4, 1, 3)" },
  { title: "Perpendicular in space", q: S`Are $[2,-3,1]$ and $[4,3,1]$ perpendicular?`,
    fig: VF(merge(V3, axes3(4.4), { arrows: [{ from: [0, 0], to: p3(2, -3, 1), vl: "a", off: 16 }, { from: [0, 0], to: p3(4, 3, 1).map((z) => z * 0.8), vl: "b", color: "blue", off: -16 }] }, { view: { xmin: -5, xmax: 5, ymin: -3.4, ymax: 5 } }), 4.4),
    steps: [S`$8-9+1=0$.`], ans: "yes" },
];

const PROBLEMS = [
  { level: 1, q: S`Find $|[2,-3,6]|$.`, recap: "√(4 + 9 + 36).", ans: "7" },
  { level: 1, q: S`Find $\overrightarrow{AB}$ for $A(1,0,2)$ and $B(4,4,2)$.`, recap: "Head minus tail.", ans: "[3, 4, 0]" },
  { level: 1, q: S`Find $[1,2,3]\cdot[-1,0,2]$.`, recap: "−1 + 0 + 6.", ans: "5" },
  { level: 2, q: S`Find the distance between $(3,-2,1)$ and $(-1,2,3)$.`, recap: "√(16 + 16 + 4).", ans: "6" },
  { level: 2, q: S`Find the angle between $[1,0,1]$ and $[0,1,1]$.`, recap: S`$\cos\theta=\frac12$.`, ans: "60°" },
  { level: 2, q: S`Find $k$ so that $[k,2,-1]\perp[3,-1,k]$.`, recap: "3k − 2 − k = 0.", ans: "k = 1" },
  { level: 2, q: S`Find the direction cosines of $[2,-1,2]$.`, recap: "Divide by 3.", ans: S`$\frac23,\ -\frac13,\ \frac23$` },
  { level: 2, q: S`Sketch the point $(2,3,3)$ on the axes with its guide box.`, recap: "x, then y, then z.", ans: "a corner of the box 2 by 3 by 3", fig: VF(merge(V3, axes3(4.8)), 4.6) },
  { level: 3, space: 5, q: S`Show that $A(2,1,1)$, $B(4,3,2)$, $C(1,3,3)$ form an isosceles triangle, and find $\angle A$.`, recap: "Lengths, then a dot product.", ans: S`$AB=AC=3$, $BC=\sqrt{10}$; $\cos A=\frac49$, $\angle A\approx63.61^\circ$` },
  { level: 3, space: 5, q: S`Find the vector of length 10 in the direction of $[2,-2,1]$.`, recap: "Unit vector times 10.", ans: S`$\frac{10}{3}[2,-2,1]\approx[6.67,-6.67,3.33]$` },
  { level: 3, space: 5, q: S`A vector makes $60^\circ$ with both the x- and y-axes. What angle can it make with the z-axis?`, recap: "Squares of the cosines add to 1.", ans: "45° or 135°" },
  { level: 3, space: 5, q: S`Find the point on the z-axis that is equally far from $(1,2,3)$ and $(-1,0,5)$.`, recap: "Use (0, 0, z) and equal squared distances.", ans: "(0, 0, 3)" },
  { level: 3, space: 5, q: S`Find $c$ so that $[1,c,2]$ makes a $60^\circ$ angle with the z-axis.`, recap: S`$\frac{2}{\sqrt{5+c^2}}=\frac12$.`, ans: S`$c=\pm\sqrt{11}\approx\pm3.32$` },
];

export const WS = {
  code: "7.4",
  title: "Vectors in Three-Space",
  bigideas: S`Three perpendicular axes (right-handed) give every point coordinates $(x,y,z)$ and every vector three components $[a,b,c]=a\vec i+b\vec j+c\vec k$. Distances and magnitudes use $\sqrt{a^2+b^2+c^2}$; operations and the dot product gain a third term. The direction angles $\alpha$, $\beta$, $\gamma$ with the axes have cosines $\frac a{|\vec v|}$, $\frac b{|\vec v|}$, $\frac c{|\vec v|}$, whose squares add to 1.`,
  goals: ["Plot points in three-space.", "Find distances and magnitudes.", "Operate on three-space vectors.", "Find angles and direction angles."],
  curriculum: "C1.4, C2.1, C2.4",
  vocab: [["$\\vec k$", "$[0,0,1]$"], ["Magnitude", "$\\sqrt{a^2+b^2+c^2}$"], ["Direction cosines", "$\\frac a{|\\vec v|},\\frac b{|\\vec v|},\\frac c{|\\vec v|}$"], ["Octant", "sign pattern of x, y, z"]],
  hook: S`A drone hovers 30 m above a point 40 m east and 120 m north of you. How far away is it?`,
  concepts: [
    ["1. Plotting", S`The point $(3,4,2)$ is a corner of a box:
${VF(merge(V3, axes3(4.8), { segs: box3(3, 4, 2) }, { points: [{ x: p3(3, 4, 2)[0], y: p3(3, 4, 2)[1], label: "(3, 4, 2)" }] }), 4.4)}`],
    ["2. Formulas", S`$|\vec v|=\sqrt{a^2+b^2+c^2}$; $\vec a\cdot\vec b=a_1b_1+a_2b_2+a_3b_3$.`],
    ["3. Direction angles", S`$\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1$.`],
  ],
  tips: ["x comes toward you in sketches.", "Square all three components.", "Direction angles are with positive axes.", "Midpoints: average each coordinate.", "Right-handed axes."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
