// MCV4U Worksheet 8.5 — Intersections of Lines and Planes (teacher edition)
import { svgT } from "./figT.mjs";
import { vdoc, p3, axes3, merge, line3, patch3 } from "../vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
const EXAMPLES = [
  { title: "One point", q: S`Find where $\vec r=[2,0,1]+t[1,-1,3]$ meets $x+2y-z=3$.`,
    steps: [S`$(2+t)+2(-t)-(1+3t)=3\Rightarrow1-4t=3\Rightarrow t=-0.5$.`], ans: "(1.5, 0.5, −0.5)" },
  { title: "Parallel to the plane", q: S`Does $\vec r=[1,1,0]+t[2,0,-1]$ meet $x+3y+2z=1$? How far apart are they?`,
    steps: [S`$\vec m\cdot\vec n=2-2=0$; the point gives $1+3=4\ne1$.`, S`Distance $\frac{|4-1|}{\sqrt{14}}$.`], ans: "parallel; about 0.80 apart" },
  { title: "In the plane", q: S`Show that the same line lies in $x+3y+2z=4$.`,
    steps: [S`Substituting gives $4=4$ for every $t$.`], ans: "the line lies in the plane" },
  { title: "Distance to a plane", q: S`Find the distance from $(3,2,-1)$ to $x-2y+2z=5$.`,
    steps: [S`$\frac{|3-4-2-5|}{3}=\frac83$.`], ans: "about 2.67" },
  { title: "Foot of the perpendicular", q: S`Find the point of $2x+y+2z=6$ closest to $(4,3,2)$, and the distance.`,
    fig: VF(merge(V3, axes3(4.6), { polys: [patch3([2, 2, 0], [1, -2, 0], [0, 2, -1], 1.2)] }, { segs: [{ pts: [p3(4, 3, 2), p3(2, 2, 0)], color: "red", dash: true, w: 2.2 }] }, { points: [pt(4, 3, 2, "(4, 3, 2)", -60, -4), pt(2, 2, 0, "foot", 8, 14)] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.4 } }), 4.4),
    steps: [S`Line $(4+2t,\ 3+t,\ 2+2t)$: $15+9t=6\Rightarrow t=-1$.`, S`Foot $(2,2,0)$; distance $|t||\vec n|=3$.`], ans: "(2, 2, 0); distance 3" },
  { title: "Angle with a plane", q: S`Find the angle between a line with direction $[1,2,2]$ and the plane $z=0$.`,
    steps: [S`$\sin\phi=\frac{|[1,2,2]\cdot[0,0,1]|}{3\times1}=\frac23$.`], ans: "about 41.81°" },
  { title: "An axis meets a plane", q: S`Where does the z-axis meet $3x-y+4z=8$?`,
    steps: [S`$x=y=0\Rightarrow4z=8$.`], ans: "(0, 0, 2)" },
  { title: "A simple reflection", q: S`Reflect $(1,1,1)$ in the plane $z=3$.`,
    steps: [S`The point is 2 below the plane; the image is 2 above it.`], ans: "(1, 1, 5)" },
  { title: "Choosing k", q: S`Find $k$ so that $\vec r=t[1,k,2]$ meets $x+y+z=8$ at $t=2$.`,
    steps: [S`$2(1+k+2)=8$.`], ans: "k = 1" },
];

const PROBLEMS = [
  { level: 1, q: S`Where does $\vec r=t[2,1,1]$ meet $x+y+z=12$?`, recap: "4t = 12.", ans: "(6, 3, 3)" },
  { level: 1, q: S`Find the distance from the origin to $2x-y+2z=6$.`, recap: "|−6| / 3.", ans: "2" },
  { level: 1, q: S`Where does the x-axis meet $3x+2y-z=9$?`, recap: "y = z = 0.", ans: "(3, 0, 0)" },
  { level: 2, q: S`Find where $\vec r=[1,2,0]+t[1,0,1]$ meets $2x-y+z=6$.`, recap: "Substitute, solve for t.", ans: "(3, 2, 2)" },
  { level: 2, q: S`Show that $\vec r=[0,0,1]+t[1,1,1]$ is parallel to $x-y=2$, and find the distance between them.`, recap: "m · n = 0; distance from (0, 0, 1).", ans: S`$\frac{2}{\sqrt2}\approx1.41$` },
  { level: 2, q: S`Find the distance from $(2,-1,3)$ to $2x+3y-6z=-4$.`, recap: "Write ... + 4 = 0.", ans: S`$\frac{13}7\approx1.86$` },
  { level: 2, q: S`Find the foot of the perpendicular from the origin to $x+y+z=3$.`, recap: "Line t[1, 1, 1].", ans: "(1, 1, 1)" },
  { level: 2, q: S`Find the angle between a line with direction $[1,0,1]$ and the plane $y=0$.`, recap: "Is the line parallel to the plane?", ans: "0° — the line is parallel to the plane" },
  { level: 3, space: 5, q: S`Reflect $(2,3,0)$ in the plane $x+y+z=2$.`, recap: "Find the foot, then go as far again.", ans: "foot (1, 2, −1); image (0, 1, −2)" },
  { level: 3, space: 5, q: S`Find $k$ so that $\vec r=[1,k,0]+t[1,1,1]$ lies in the plane $x-y=1$.`, recap: "m · n = 0 and the point is on the plane.", ans: "k = 0" },
  { level: 3, space: 5, q: S`Find the angle between a line with direction $[2,1,2]$ and the plane $x+y+z=0$.`, recap: S`$\sin\phi=\frac{|\vec m\cdot\vec n|}{|\vec m||\vec n|}$.`, ans: "about 74.21°" },
  { level: 3, space: 5, q: S`Find where $\vec r=[0,2,4]+t[1,1,-1]$ crosses $x+y+z=0$.`, recap: "6 + t = 0.", ans: "(−6, −4, 10)" },
  { level: 3, space: 5, q: S`Find the distance between the line $\vec r=[1,1,0]+t[1,-1,0]$ and the parallel plane $x+y+2z=6$.`, recap: "Distance from any point of the line.", ans: S`$\frac{4}{\sqrt6}\approx1.63$` },
];

export const WS = {
  code: "8.5",
  title: "Intersections of Lines and Planes",
  bigideas: S`Substitute a line's parametric equations into a plane's scalar equation to get one equation in $t$: one solution (one point), no solution (parallel), or every $t$ (the line lies in the plane). If $\vec m\cdot\vec n=0$ the line is parallel to the plane or in it. A line from $P$ along the normal meets the plane at the foot of the perpendicular, which gives the distance and reflections. The angle with a plane satisfies $\sin\phi=\frac{|\vec m\cdot\vec n|}{|\vec m||\vec n|}$.`,
  goals: ["Find where a line meets a plane.", "Recognize parallel lines and lines in a plane.", "Find distances and feet of perpendiculars.", "Find angles and reflections."],
  curriculum: "C4.7",
  vocab: [["Substitution", "line into plane"], ["Parallel", "$\\vec m\\cdot\\vec n=0$"], ["Foot of perpendicular", "closest point"], ["Line–plane angle", "uses sine"]],
  hook: S`A laser beam travels in a straight line toward a tilted mirror. How would you find the exact spot where it hits?`,
  concepts: [
    ["1. Substitute", S`One equation in $t$ decides everything:
${VF(merge(V3, axes3(4.6), { polys: [patch3([1.5, 1.5, 0.5], [1, -1, 0], [2, 0, -1], 1)] }, { segs: [line3([1, -1, 2], [2, 1, -1], -0.9, 3, "red", 2.6)] }), 4)}`],
    ["2. Parallel test", S`$\vec m\cdot\vec n=0$: parallel or in the plane.`],
    ["3. Closest point", S`Intersect the plane with $\vec r=\overrightarrow{OP}+t\vec n$.`],
  ],
  tips: ["Substitute all three coordinates.", "0t = c: none; 0t = 0: all.", "Line–plane angle uses sine.", "Distances are never negative.", "Check the foot is on the plane."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
