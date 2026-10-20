// MCV4U Worksheet 8.6 — Intersections of Planes (teacher edition)
import { svgT } from "./figT.mjs";
import { vdoc, p3, axes3, merge, line3, patch3 } from "../vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const EXAMPLES = [
  { title: "Two planes", q: S`Find the line of intersection of $x+2y-z=4$ and $2x-y+z=3$.`,
    fig: VF(merge(V3, axes3(4.6), { polys: [patch3([2, 1, 0], [1, 0, 1], [0, 1, 2], 1.2, "#dbeafe", "blue", 0.5), patch3([2, 1, 0], [1, 2, 0], [0, 1, 1], 1.2, "#dcfce7", "green", 0.5)] }, { segs: [line3([2, 1, 0], [1, -3, -5], -0.5, 0.7, "red", 3)] }), 4.2),
    steps: [S`Direction $[1,2,-1]\times[2,-1,1]=[1,-3,-5]$.`, S`With $z=0$: $x+2y=4$, $2x-y=3\Rightarrow x=2,\ y=1$.`], ans: S`$\vec r=[2,1,0]+t[1,-3,-5]$` },
  { title: "Coincident planes", q: S`Compare $3x-y+z=2$ and $-6x+2y-2z=-4$.`,
    steps: [S`The second equation is $-2$ times the first.`], ans: "the same plane" },
  { title: "Three planes, one point", q: S`Solve $x+y-z=1$, $2x-y+z=5$, $x+2y+z=9$.`,
    steps: [S`Add the first two: $3x=6\Rightarrow x=2$.`, S`Then $y-z=-1$ and $2y+z=7\Rightarrow y=2,\ z=3$.`], ans: "(2, 2, 3)" },
  { title: "A sheaf", q: S`Solve $x+y+z=3$, $x-y=1$, $2x+z=4$.`,
    steps: [S`The third equation is the sum of the first two.`, S`Let \(x=t\): \(y=t-1\), \(z=4-2t\).`], ans: S`the line $\vec r=[0,-1,4]+t[1,1,-2]$` },
  { title: "A triangular prism", q: S`Show that $x+y+z=3$, $x-y=1$, $2x+z=6$ have no common point.`,
    steps: [S`Adding the first two gives $2x+z=4$, contradicting $2x+z=6$.`, S`No normals are parallel, but they are coplanar: a triangular prism.`], ans: "no solution — triangular prism" },
  { title: "Two parallel planes and a third", q: S`Describe $x+y+z=1$, $x+y+z=4$, $x-y=0$.`,
    steps: [S`The first two are parallel and distinct.`], ans: "no common point; the third plane cuts each of the others in a line" },
  { title: "Three parallel planes", q: S`Describe $z=0$, $z=1$, $2z=6$.`,
    steps: [S`All normals are multiples of $\vec k$, with different constants.`], ans: "three parallel planes, no common point" },
  { title: "The triple product test", q: S`Use the normals to confirm that the planes in Example 3 meet in one point.`,
    steps: [S`$[2,-1,1]\times[1,2,1]=[-3,-1,5]$; dot with $[1,1,-1]$: $-3-1-5=-9$.`], ans: "−9 ≠ 0, so exactly one point" },
  { title: "Angle between two planes", q: S`Find the angle between the planes in Example 1.`,
    steps: [S`$|\vec n_1\cdot\vec n_2|=|2-2-1|=1$; $|\vec n_1||\vec n_2|=6$.`], ans: "about 80.41°" },
];

const PROBLEMS = [
  { level: 1, q: S`Find the common point of $x=2$, $y=-1$, $z=4$.`, recap: "Read it off.", ans: "(2, −1, 4)" },
  { level: 1, q: S`Classify $2x+4y-6z=2$ and $x+2y-3z=1$.`, recap: "Is one a multiple of the other?", ans: "coincident" },
  { level: 1, q: S`Describe the intersection of $x+y=1$ and $x-y=3$ in three-space.`, recap: "z is free.", ans: "the vertical line x = 2, y = −1" },
  { level: 2, q: S`Find the line of intersection of $x-y+z=2$ and $2x+y-z=1$.`, recap: "Cross the normals; set z = 0.", ans: S`$\vec r=[1,-1,0]+t[0,1,1]$` },
  { level: 2, q: S`Solve $x+y+z=4$, $x-y+z=2$, $x+y-z=0$.`, recap: "Combine pairs.", ans: "(1, 1, 2)" },
  { level: 2, q: S`Find the triple product of the normals of $x+2y+3z=1$, $y+4z=2$, $z=3$.`, recap: "Upper triangular.", ans: "1 (so one point)" },
  { level: 2, q: S`Are $2x-y+3z=1$ and $4x-2y+6z=5$ parallel, coincident or intersecting?`, recap: "Compare normals and constants.", ans: "parallel and distinct" },
  { level: 2, q: S`Solve $x+y+z=6$, $x-y=0$, $y-z=0$.`, recap: "x = y = z.", ans: "(2, 2, 2)" },
  { level: 3, space: 5, q: S`For which $k$ do $x+y+z=2$, $x+2y+3z=5$, $2x+3y+kz=7$ form a sheaf? What happens if the third constant is 8 instead?`, recap: "Coplanar normals; compare with the sum of the first two.", ans: "k = 4 (third = sum of first two); with 8, no solution — a prism" },
  { level: 3, space: 5, q: S`Classify $x+y+z=1$, $2x+2y+2z=3$, $x-z=0$.`, recap: "Look for parallel planes.", ans: "two parallel planes cut by a third: no common point" },
  { level: 3, space: 5, q: S`Find the distance between $x-2y+2z=1$ and $x-2y+2z=10$.`, recap: "|10 − 1| / 3.", ans: "3" },
  { level: 3, space: 5, q: S`Find the line of intersection of $x=2z$ and $y=3z$.`, recap: "Let z = t.", ans: S`$\vec r=t[2,3,1]$` },
  { level: 3, space: 5, q: S`Explain why three planes whose normals satisfy $\vec n_1\cdot(\vec n_2\times\vec n_3)=0$ cannot meet in exactly one point.`, recap: "Coplanar normals.", ans: "the normals lie in one plane, so the planes all contain a common direction (perpendicular to that plane); any common point would extend to a common line" },
];

export const WS = {
  code: "8.6",
  title: "Intersections of Planes",
  bigideas: S`Two non-parallel planes meet in a line with direction $\vec n_1\times\vec n_2$; parallel planes never meet; coincident planes coincide. Three planes meet in one point exactly when $\vec n_1\cdot(\vec n_2\times\vec n_3)\ne0$; otherwise they share a line or a plane, or have no common point (parallel planes or a triangular prism). Elimination finds the solutions: $0=0$ signals infinitely many, $0=c$ none.`,
  goals: ["Find the line of intersection of two planes.", "Solve three-plane systems.", "Name the configuration.", "Use the triple product of normals."],
  curriculum: "C3.2, C3.3, C4.4",
  vocab: [["Line of intersection", "direction $\\vec n_1\\times\\vec n_2$"], ["Sheaf", "three planes through one line"], ["Prism", "pairs meet, no common point"], ["Triple product", "$\\vec n_1\\cdot(\\vec n_2\\times\\vec n_3)$"]],
  hook: S`Look at the corner of a room: two walls and the floor. In how many points do they all meet? What about the pages of an open book?`,
  concepts: [
    ["1. Two planes", S`A line (not parallel), none (parallel), or all (coincident).`],
    ["2. Three planes", S`Point, line, plane, or none:
${VF(merge(V3, axes3(4.6), { polys: [patch3([1.5, 0, 0], [1, 0, 0], [0, 1.4, 0], 1.5, "#dbeafe", "blue", 0.45), patch3([1.5, 1, 1], [1, 0, 0], [0, 0.7, -0.7], 1.5, "#dcfce7", "green", 0.45), patch3([1.5, -1, 1], [1, 0, 0], [0, 0.7, 0.7], 1.5, "#fee2e2", "red", 0.45)] }), 4)}`],
    ["3. The test", S`$\vec n_1\cdot(\vec n_2\times\vec n_3)\ne0\iff$ exactly one point.`],
  ],
  tips: ["Direction of the line: cross the two normals.", "0 = 0: infinitely many.", "0 = c: no solution.", "Check answers in all equations.", "Coplanar normals: no unique point."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
