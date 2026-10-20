// MCV4U Worksheet 8.4 — Intersections of Lines in Two-Space and Three-Space (teacher edition)
import { svgT } from "./figT.mjs";
import { vdoc, p3, axes3, merge, line3 } from "../vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const L2 = (p, m, t0, t1, color = "violet") => ({ pts: [[p[0] + t0 * m[0], p[1] + t0 * m[1]], [p[0] + t1 * m[0], p[1] + t1 * m[1]]], color, w: 2.4 });
const EXAMPLES = [
  { title: "Two lines in two-space", q: S`Find the intersection of $\vec r=[2,-1]+s[1,2]$ and $\vec r=[0,4]+t[1,-1]$.`,
    fig: VF({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 5 }, step: 1, segs: [L2([2, -1], [1, 2], -0.4, 2.6), L2([0, 4], [1, -1], -0.4, 4.6, "blue")], points: [{ x: 3, y: 1, label: "(3, 1)", dx: 8, dy: 4 }] }, 4.2),
    steps: [S`$2+s=t$ and $-1+2s=4-t$.`, S`Substitute: $-1+2s=2-s\Rightarrow s=1$, $t=3$.`], ans: "(3, 1)" },
  { title: "Parallel, but distinct?", q: S`Compare $\vec r=[1,0]+s[2,3]$ and $\vec r=[0,1]+t[-4,-6]$.`,
    steps: [S`$[-4,-6]=-2[2,3]$: parallel.`, S`Is $(0,1)$ on the first? $1+2s=0\Rightarrow s=-0.5$, $y=-1.5\ne1$.`], ans: "parallel and distinct" },
  { title: "Intersecting in three-space", q: S`Find the intersection of $\vec r=[1,1,0]+s[2,0,1]$ and $\vec r=[3,-2,4]+t[0,1,-1]$.`,
    steps: [S`$x$: $s=1$. $y$: $1=-2+t\Rightarrow t=3$.`, S`$z$: $s=1$ and $4-3=1$. ✓`], ans: "(3, 1, 1)" },
  { title: "Skew lines and their distance", q: S`Show $\vec r=[0,1,0]+s[1,0,1]$ and $\vec r=[1,0,2]+t[0,1,1]$ are skew, and find the distance between them.`,
    fig: VF(merge(V3, axes3(4.6), { segs: [line3([0, 1, 0], [1, 0, 1], -1, 3, "violet", 2.6), line3([1, 0, 2], [0, 1, 1], -1.5, 2.6, "blue", 2.6)] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6.4 } }), 4.2),
    steps: [S`$x$: $s=1$; $y$: $1=t$; $z$: $1\ne2+1$. Not parallel, so skew.`, S`$\vec n=[1,0,1]\times[0,1,1]=[-1,-1,1]$; $\overrightarrow{P_1P_2}=[1,-1,2]$: $\frac{|-1+1+2|}{\sqrt3}$.`], ans: "skew; about 1.15 apart" },
  { title: "Coincident lines in space", q: S`Compare $\vec r=[1,2,3]+s[1,1,1]$ and $\vec r=[3,4,5]+t[-2,-2,-2]$.`,
    steps: [S`Parallel directions; $(3,4,5)$ is the first line's point with $s=2$.`], ans: "coincident" },
  { title: "Perpendicular directions", q: S`Find the angle between lines with directions $[2,1,-2]$ and $[1,2,2]$.`,
    steps: [S`$2+2-4=0$.`], ans: "90° (the lines may still be skew)" },
  { title: "Distance between parallel lines", q: S`Find the distance between $\vec r=t[1,0,0]$ and $\vec r=[0,3,4]+s[2,0,0]$.`,
    steps: [S`Both run parallel to the x-axis; the second passes through $(0,3,4)$.`, S`Distance from the x-axis: $\sqrt{9+16}$.`], ans: "5" },
  { title: "Using scalar equations", q: S`Solve $2x+y=7$ and $x-3y=0$.`,
    steps: [S`$x=3y\Rightarrow7y=7$.`], ans: "(3, 1)" },
  { title: "Choosing k", q: S`Find $k$ so that $\vec r=s[1,1,1]$ and $\vec r=[2,0,k]+t[0,1,0]$ intersect.`,
    steps: [S`$x$: $s=2$; $y$: $t=2$; $z$: $2=k$.`], ans: "k = 2, meeting at (2, 2, 2)" },
];

const PROBLEMS = [
  { level: 1, q: S`Find the intersection of $y=x+1$ and $y=-x+5$.`, recap: "Set equal.", ans: "(2, 3)" },
  { level: 1, q: S`Classify $\vec r=[1,2]+s[3,6]$ and $\vec r=t[1,2]$.`, recap: "Parallel? Shared point?", ans: "coincident" },
  { level: 1, q: S`How many points do skew lines share?`, recap: "Definition.", ans: "0" },
  { level: 2, q: S`Find the intersection of $\vec r=[1,1]+s[2,1]$ and $\vec r=[0,5]+t[1,-1]$.`, recap: "Two equations in s and t.", ans: "(3, 2)" },
  { level: 2, q: S`Find the intersection of $\vec r=[2,0,1]+s[1,1,0]$ and $\vec r=[0,-1,2]+t[2,1,-1]$.`, recap: "Solve x and y; check z.", ans: "(2, 0, 1)" },
  { level: 2, q: S`Decide whether $\vec r=s[1,1,0]$ and $\vec r=[0,1,1]+t[1,0,0]$ intersect.`, recap: "Check the z equation.", ans: "no — they are skew" },
  { level: 2, q: S`Find the angle between lines with directions $[1,1,0]$ and $[1,0,1]$.`, recap: S`$\cos\theta=\frac12$.`, ans: "60°" },
  { level: 2, q: S`Find the intersection of $x+2y=4$ and $3x-y=5$.`, recap: "Eliminate.", ans: "(2, 1)" },
  { level: 3, space: 5, q: S`Find the distance between $\vec r=s[1,1,0]$ and $\vec r=[0,1,1]+t[1,0,0]$.`, recap: S`$\frac{|\overrightarrow{P_1P_2}\cdot(\vec m_1\times\vec m_2)|}{|\vec m_1\times\vec m_2|}$.`, ans: "1" },
  { level: 3, space: 5, q: S`Find $k$ so that $\vec r=[1,0,k]+s[1,1,1]$ and $\vec r=t[1,2,3]$ intersect.`, recap: "Use x and y for s, t.", ans: "k = −1" },
  { level: 3, space: 5, q: S`Find the distance between $\vec r=[1,0,0]+t[0,1,0]$ and $\vec r=[3,0,4]+s[0,2,0]$.`, recap: "Parallel lines: distance between them in the xz-plane.", ans: S`$\sqrt{20}\approx4.47$` },
  { level: 3, space: 5, q: S`Show that $\vec r=s[1,2]$ and $4x-2y=3$ are parallel.`, recap: "Compare the direction with the normal.", ans: "normal [4, −2] is perpendicular to [1, 2], and (0, 0) is not on 4x − 2y = 3" },
  { level: 3, space: 5, q: S`Lines through the origin have directions $[1,1,1]$ and $[1,-1,0]$. Find the angle between them and explain why they intersect.`, recap: "Dot product; common point.", ans: "90°; both pass through the origin" },
];

export const WS = {
  code: "8.4",
  title: "Intersections of Lines in Two-Space and Three-Space",
  bigideas: S`Set the parametric equations equal with different parameters and solve. Two-space lines meet once, never (parallel) or everywhere (coincident). Three-space adds skew lines: not parallel and never meeting. Solve two coordinate equations and check the third. The distance between skew lines is $\frac{|\overrightarrow{P_1P_2}\cdot(\vec m_1\times\vec m_2)|}{|\vec m_1\times\vec m_2|}$.`,
  goals: ["Find intersections of lines.", "Recognize parallel and coincident lines.", "Identify skew lines.", "Find angles and distances between lines."],
  curriculum: "C3.1, C3.3, C4.7",
  vocab: [["Intersecting", "one point"], ["Coincident", "same line"], ["Skew", "not parallel, never meet"], ["Distance", "projection onto $\\vec m_1\\times\\vec m_2$"]],
  hook: S`Two aircraft fly straight paths at different altitudes. Their paths cross on a map. Do they collide?`,
  concepts: [
    ["1. Two-space", S`One point, none, or all:
${VF({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 5 }, step: 1, segs: [L2([2, -1], [1, 2], -0.4, 2.6), L2([0, 4], [1, -1], -0.4, 4.6, "blue")] }, 3.6)}`],
    ["2. Three-space", S`Check the third coordinate — failure with non-parallel directions means skew.`],
    ["3. Distance", S`Project $\overrightarrow{P_1P_2}$ onto $\vec m_1\times\vec m_2$.`],
  ],
  tips: ["Different parameters.", "Check every coordinate.", "Parallel: test a point.", "Skew only in 3-D.", "Acute angle."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
