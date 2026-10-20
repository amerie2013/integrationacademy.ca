// MCV4U Worksheet 7.6 — Applications of the Dot Product and Cross Product (teacher edition)
import { svgT } from "./figT.mjs";
import { vdoc, pol, p3, axes3, merge } from "../vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const EXAMPLES = [
  { title: "Torque", q: S`A 35 N force acts at the end of a 0.3 m wrench, at $60^\circ$ to the handle. Find the torque.`,
    fig: VF({ view: { xmin: -0.6, xmax: 7.4, ymin: -0.8, ymax: 4.2 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [5, 0], vl: "r", label: "0.3 m", off: 16, w: 5 }, { from: [5, 0], to: pol(3.5, 60, [5, 0]), vl: "F", label: "35 N", color: "red", off: -16 }], arcs: [{ at: [5, 0], r: 1, a: 0, b: 60, label: "60°" }] }, 4.6),
    steps: [S`$|\vec\tau|=0.3\times35\times\sin60^\circ$.`], ans: "about 9.09 N·m" },
  { title: "A torque vector", q: S`$\vec r=[0,0.4,0]$ m and $\vec F=[20,0,15]$ N. Find $\vec\tau=\vec r\times\vec F$.`,
    steps: [S`$[0.4(15)-0(0),\ 0(20)-0(15),\ 0(0)-0.4(20)]=[6,0,-8]$.`], ans: "[6, 0, −8] N·m, magnitude 10 N·m" },
  { title: "Area of a triangle", q: S`Find the area of $\triangle ABC$ for $A(2,0,1)$, $B(0,3,1)$, $C(1,1,4)$.`,
    steps: [S`$\overrightarrow{AB}=[-2,3,0]$, $\overrightarrow{AC}=[-1,1,3]$; cross product $[9,6,1]$.`, S`Half of $\sqrt{118}$.`], ans: "about 5.43" },
  { title: "Volume", q: S`Find the volume of the parallelepiped on $\vec a=[1,2,0]$, $\vec b=[0,1,3]$, $\vec c=[2,0,1]$.`,
    steps: [S`$\vec b\times\vec c=[1,6,-2]$.`, S`$\vec a\cdot(\vec b\times\vec c)=1+12+0$.`], ans: "13 cubic units" },
  { title: "Coplanar?", q: S`Are $[1,0,2]$, $[2,1,1]$ and $[3,1,3]$ coplanar?`,
    steps: [S`$[2,1,1]\times[3,1,3]=[2,-3,-1]$; dot with $[1,0,2]$: $2+0-2=0$.`], ans: "yes ([3, 1, 3] is the sum of the other two)" },
  { title: "Work in space", q: S`$\vec F=[4,1,-2]$ N moves an object from $(1,0,0)$ to $(5,3,-1)$. Find the work.`,
    steps: [S`$\vec d=[4,3,-1]$; $16+3+2$.`], ans: "21 J" },
  { title: "Height of a parallelepiped", q: S`For the parallelepiped in Example 4, find the height above the face spanned by $\vec b$ and $\vec c$.`,
    steps: [S`Base area $|\vec b\times\vec c|=\sqrt{41}$.`, S`Height $=\frac{13}{\sqrt{41}}$.`], ans: "about 2.03" },
  { title: "The best pull", q: S`What is the greatest torque from a 30 N force on a 0.5 m wrench?`,
    steps: [S`Pull at $90^\circ$: $0.5\times30$.`], ans: "15 N·m" },
  { title: "A parallelogram in space", q: S`Find the area of the parallelogram with vertices $(0,0,0)$, $(3,0,0)$, $(1,2,2)$, $(4,2,2)$.`,
    fig: VF(merge(V3, axes3(4.6), { polys: [{ pts: [p3(0, 0, 0), p3(3, 0, 0), p3(4, 2, 2), p3(1, 2, 2)], fill: "#ede9fe", stroke: "violet" }] }), 4.2),
    steps: [S`Sides $[3,0,0]$ and $[1,2,2]$; cross product $[0,-6,6]$.`], ans: S`$\sqrt{72}\approx8.49$` },
];

const PROBLEMS = [
  { level: 1, q: S`A 50 N force acts perpendicular to a 0.2 m wrench. Find the torque.`, recap: "r F.", ans: "10 N·m" },
  { level: 1, q: S`Find the volume of the box on $[3,0,0]$, $[0,2,0]$, $[0,0,5]$.`, recap: "Triple product.", ans: "30" },
  { level: 1, q: S`Find the work done by $\vec F=[2,0,1]$ over $\vec d=[3,4,5]$.`, recap: "Dot product.", ans: "11 J" },
  { level: 2, q: S`An 80 N force acts on a 0.25 m wrench at $40^\circ$ to the handle. Find the torque.`, recap: S`$0.25\times80\sin40^\circ$.`, ans: "about 12.86 N·m" },
  { level: 2, q: S`Find the area of the triangle with vertices $(1,0,0)$, $(0,2,0)$, $(0,0,3)$.`, recap: "Two edge vectors from one vertex.", ans: S`cross product $[6,3,2]$: area $3.5$` },
  { level: 2, q: S`Find the volume of the parallelepiped on $[1,1,1]$, $[1,2,0]$, $[0,1,2]$.`, recap: S`$[1,2,0]\times[0,1,2]=[4,-2,1]$.`, ans: "3" },
  { level: 2, q: S`Are $[1,2,1]$, $[0,1,1]$ and $[1,3,2]$ coplanar?`, recap: "Triple product.", ans: "yes: the triple product is 0" },
  { level: 2, q: S`$\vec r=[0.3,0,0]$ m and $\vec F=[0,0,-40]$ N. Find $\vec\tau=\vec r\times\vec F$.`, recap: "Use the formula.", ans: "[0, 12, 0] N·m" },
  { level: 3, space: 5, q: S`A 50 N force on a 0.4 m wrench gives a torque of 12 N·m. At what angle to the handle is it applied?`, recap: S`$\sin\theta=\frac{12}{20}$.`, ans: "about 36.87° (or 143.13°)" },
  { level: 3, space: 5, q: S`Find $k$ so that $[1,k,0]$, $[0,1,1]$ and $[2,0,1]$ are coplanar.`, recap: S`$[0,1,1]\times[2,0,1]=[1,2,-2]$.`, ans: "k = −0.5" },
  { level: 3, space: 5, q: S`A tetrahedron has the same three edges from one corner as the parallelepiped in Example 4. Its volume is one sixth of the parallelepiped's. Find it.`, recap: "13 ÷ 6.", ans: "about 2.17" },
  { level: 3, space: 5, q: S`Use $\frac{|\overrightarrow{OP}\times\vec d|}{|\vec d|}$ to find the distance from $P(1,2,3)$ to the x-axis, and check it another way.`, recap: S`$\vec d=[1,0,0]$.`, ans: S`$|[0,3,-2]|=\sqrt{13}\approx3.61$; also $\sqrt{2^2+3^2}$` },
  { level: 3, space: 5, q: S`Explain why $|\vec a\cdot(\vec b\times\vec c)|\le|\vec a||\vec b||\vec c|$, and when equality holds.`, recap: "Volume ≤ product of edge lengths.", ans: "the volume of a slanted box is at most that of the rectangular box with the same edges; equality when the vectors are mutually perpendicular" },
];

export const WS = {
  code: "7.6",
  title: "Applications of the Dot Product and Cross Product",
  bigideas: S`Choose the product by the question. Work and projections (how much along) use the dot product. Torque $\vec\tau=\vec r\times\vec F$, areas $|\vec a\times\vec b|$ and perpendicular directions (how much across) use the cross product. The scalar triple product $\vec a\cdot(\vec b\times\vec c)$ is the volume of the parallelepiped (up to sign) and is 0 exactly when the three vectors are coplanar.`,
  goals: ["Find torques.", "Find areas in three-space.", "Find volumes with the triple product.", "Test coplanarity; find work."],
  curriculum: "C2.6, C2.8",
  vocab: [["Torque", "$\\vec r\\times\\vec F$"], ["Area", "$|\\vec a\\times\\vec b|$"], ["Volume", "$|\\vec a\\cdot(\\vec b\\times\\vec c)|$"], ["Coplanar", "triple product 0"]],
  hook: S`Why is it easier to loosen a stuck bolt with a longer wrench? Where on the handle should you push, and in what direction?`,
  concepts: [
    ["1. Torque", S`Only the part of $\vec F$ perpendicular to $\vec r$ turns the bolt: $|\vec\tau|=|\vec r||\vec F|\sin\theta$.`],
    ["2. Areas and volumes", S`Parallelogram $|\vec a\times\vec b|$; triangle half; parallelepiped $|\vec a\cdot(\vec b\times\vec c)|$:
${VF(merge(V3, axes3(4.6), { segs: [[[0, 0, 0], [2.5, 0, 0]], [[0, 0, 0], [0.6, 3, 0]], [[0, 0, 0], [0.4, 0.8, 2.6]], [[2.5, 0, 0], [3.1, 3, 0]], [[0.6, 3, 0], [3.1, 3, 0]], [[2.5, 0, 0], [2.9, 0.8, 2.6]], [[0.4, 0.8, 2.6], [2.9, 0.8, 2.6]], [[0.6, 3, 0], [1, 3.8, 2.6]], [[0.4, 0.8, 2.6], [1, 3.8, 2.6]], [[3.1, 3, 0], [3.5, 3.8, 2.6]], [[2.9, 0.8, 2.6], [3.5, 3.8, 2.6]], [[1, 3.8, 2.6], [3.5, 3.8, 2.6]]].map((l) => ({ pts: l.map((p) => p3(...p)), color: "gray", w: 1.3 })) }), 4.2)}`],
    ["3. Work", S`$W=\vec F\cdot\vec d$.`],
  ],
  tips: ["Torque: r × F in that order.", "Triangle = half the parallelogram.", "Volume = |triple product|.", "Work is a scalar; torque a vector.", "Coplanar ⇔ triple product 0."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
