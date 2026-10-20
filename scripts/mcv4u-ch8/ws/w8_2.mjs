// MCV4U Worksheet 8.2 — Equations of Planes (teacher edition)
import { svgT } from "./figT.mjs";
import { vdoc, p3, axes3, merge, line3, patch3 } from "../vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
const EXAMPLES = [
  { title: "Point and two directions", q: S`Write a vector equation of the plane through $(0,1,-2)$ with directions $[1,1,0]$ and $[2,0,3]$, and find the point with $s=2$, $t=-1$.`,
    steps: [S`$\vec r=[0,1,-2]+s[1,1,0]+t[2,0,3]$.`, S`$(0+2-2,\ 1+2,\ -2-3)$.`], ans: "(0, 3, −5)" },
  { title: "Three points", q: S`Write a vector equation of the plane through $A(1,0,1)$, $B(2,2,0)$, $C(0,1,3)$.`,
    fig: VF(merge(V3, axes3(4.6), { polys: [{ pts: [p3(1, 0, 1), p3(2, 2, 0), p3(0, 1, 3)], fill: "#dbeafe", stroke: "blue" }], points: [pt(1, 0, 1, "A", -16, 10), pt(2, 2, 0, "B", 4, 16), pt(0, 1, 3, "C")] }), 4.4),
    steps: [S`$\overrightarrow{AB}=[1,2,-1]$, $\overrightarrow{AC}=[-1,1,2]$.`], ans: S`$\vec r=[1,0,1]+s[1,2,-1]+t[-1,1,2]$` },
  { title: "A point that is not on the plane", q: S`Is $(3,4,-2)$ on the plane of Example 2?`,
    steps: [S`$1+s-t=3$, $2s+t=4$ give $s=2$, $t=0$.`, S`$z$: $1-2+0=-1\ne-2$.`], ans: "no" },
  { title: "A point that is on the plane", q: S`Is $(1,3,2)$ on the plane of Example 2?`,
    steps: [S`$s-t=0$ and $2s+t=3$ give $s=t=1$.`, S`$z$: $1-1+2=2$. ✓`], ans: "yes (s = t = 1)" },
  { title: "Two parallel lines", q: S`Find a vector equation of the plane containing $\vec r=[0,0,1]+t[1,2,0]$ and $\vec r=[2,1,1]+t[1,2,0]$.`,
    steps: [S`One direction is $[1,2,0]$; the other joins the two given points: $[2,1,0]$.`], ans: S`$\vec r=[0,0,1]+s[1,2,0]+t[2,1,0]$ (the plane $z=1$)` },
  { title: "A line and a direction", q: S`Find a vector equation of the plane containing $\vec r=[1,1,0]+t[0,1,2]$ and parallel to $[3,0,1]$.`,
    steps: [S`Use the line's point and both directions.`], ans: S`$\vec r=[1,1,0]+s[0,1,2]+t[3,0,1]$` },
  { title: "Through the origin", q: S`Find a vector equation of the plane through the origin containing $(1,2,3)$ and $(2,0,-1)$.`,
    steps: [S`Both position vectors lie in the plane.`], ans: S`$\vec r=s[1,2,3]+t[2,0,-1]$` },
  { title: "A plane parallel to a coordinate plane", q: S`Write a vector equation of the plane $x=4$.`,
    fig: VF(merge(V3, axes3(4.8), { polys: [{ ...patch3([4, 1.5, 1.5], [0, 1, 0], [0, 0, 1], 1.5), op: 0.6 }] }, { texts: [{ x: -1.2, y: 0.4, t: "x = 4", color: "blue" }] }), 4.2),
    steps: [S`It contains $(4,0,0)$ and is parallel to $\vec j$ and $\vec k$.`], ans: S`$\vec r=[4,0,0]+s[0,1,0]+t[0,0,1]$` },
  { title: "Three points on a line", q: S`Do $A(1,1,1)$, $B(2,3,4)$ and $C(3,5,7)$ determine a plane?`,
    steps: [S`$\overrightarrow{AC}=[2,4,6]=2\overrightarrow{AB}$: the points are collinear.`], ans: "no — infinitely many planes contain them" },
];

const PROBLEMS = [
  { level: 1, q: S`Write a vector equation of the plane through $(2,-1,4)$ with directions $[1,0,1]$ and $[0,1,-1]$.`, recap: S`$\vec r_0+s\vec a+t\vec b$.`, ans: S`$\vec r=[2,-1,4]+s[1,0,1]+t[0,1,-1]$` },
  { level: 1, q: S`Find the point with $s=1$, $t=1$ on $\vec r=s[1,2,0]+t[0,1,3]$.`, recap: "Add the two directions.", ans: "(1, 3, 3)" },
  { level: 1, q: S`Write parametric equations of $\vec r=[1,2,3]+s[1,1,1]+t[1,-1,0]$.`, recap: "One equation per coordinate.", ans: S`$x=1+s+t$, $y=2+s-t$, $z=3+s$` },
  { level: 2, q: S`Write a vector equation of the plane through $(1,1,0)$, $(3,0,2)$, $(0,2,1)$.`, recap: "Two vectors from the first point.", ans: S`$\vec r=[1,1,0]+s[2,-1,2]+t[-1,1,1]$` },
  { level: 2, q: S`Is $(5,-1,4)$ on $\vec r=[1,1,0]+s[2,-1,2]+t[-1,1,1]$?`, recap: "Solve two, check the third.", ans: "yes (s = 2, t = 0)" },
  { level: 2, q: S`Write a vector equation of the plane containing $\vec r=[0,1,2]+t[1,0,-1]$ and the point $(2,3,1)$.`, recap: "Line direction plus a joining vector.", ans: S`$\vec r=[0,1,2]+s[1,0,-1]+t[2,2,-1]$` },
  { level: 2, q: S`Can $[1,2,-1]$ and $[2,4,-2]$ be the two directions of a plane? Explain.`, recap: "Are they parallel?", ans: "no: the second is twice the first" },
  { level: 2, q: S`Write a vector equation of the yz-plane.`, recap: S`Through the origin, directions $\vec j$, $\vec k$.`, ans: S`$\vec r=s[0,1,0]+t[0,0,1]$` },
  { level: 3, space: 5, q: S`Show that $A(0,0,1)$, $B(1,1,2)$, $C(2,0,3)$ and $D(3,1,4)$ are coplanar.`, recap: "Write AD in terms of AB and AC.", ans: S`$\overrightarrow{AD}=\overrightarrow{AB}+\overrightarrow{AC}$` },
  { level: 3, space: 5, q: S`Write a vector equation of the plane containing the intersecting lines $\vec r=[1,0,0]+s[1,1,0]$ and $\vec r=[1,0,0]+t[0,1,1]$.`, recap: "They share the point (1, 0, 0).", ans: S`$\vec r=[1,0,0]+s[1,1,0]+t[0,1,1]$` },
  { level: 3, space: 5, q: S`Find $k$ so that $(2,k,3)$ lies on $\vec r=s[1,0,1]+t[0,1,1]$.`, recap: "x gives s; z gives t.", ans: "k = 1" },
  { level: 3, space: 5, q: S`Show that every point of $\vec r=[1,0,0]+s[1,-1,0]+t[1,0,-1]$ satisfies $x+y+z=1$.`, recap: "Add the parametric equations.", ans: S`$(1+s+t)+(-s)+(-t)=1$` },
  { level: 3, space: 5, q: S`Explain why a plane has infinitely many different vector equations.`, recap: "Choices of point and directions.", ans: "any point of the plane and any two non-parallel vectors in it can be used" },
];

export const WS = {
  code: "8.2",
  title: "Equations of Planes",
  bigideas: S`A plane is fixed by a point and two non-parallel directions: $\vec r=\vec r_0+s\vec a+t\vec b$, with parametric equations in $s$ and $t$. Three non-collinear points $A,B,C$ give the directions $\overrightarrow{AB}$ and $\overrightarrow{AC}$; a line and a point off it also determine a plane. A point lies on the plane exactly when one pair $s,t$ satisfies all three parametric equations.`,
  goals: ["Write vector and parametric equations of planes.", "Use three points or a line and a point.", "Test points.", "Recognize coplanar points."],
  curriculum: "C4.3, C4.5",
  vocab: [["Directions", "two non-parallel vectors"], ["Parameters", "s, t"], ["Coplanar", "in one plane"], ["Collinear", "on one line"]],
  hook: S`A three-legged stool never wobbles, but a four-legged chair can. Explain why using planes.`,
  concepts: [
    ["1. A point and two directions", S`$\vec r=\vec r_0+s\vec a+t\vec b$:
${VF(merge(V3, axes3(4.6), { polys: [patch3([1.5, 1.5, 1.5], [1, 0, 0.6], [0, 1, 0.3], 1.6)] }, { arrows: [{ from: p3(1.5, 1.5, 1.5), to: p3(3.1, 1.5, 2.46), vl: "a", off: 16 }, { from: p3(1.5, 1.5, 1.5), to: p3(1.5, 3.1, 1.98), vl: "b", color: "green", off: -16 }] }), 4.2)}`],
    ["2. Three points", S`$\vec a=\overrightarrow{AB}$, $\vec b=\overrightarrow{AC}$ (not parallel).`],
    ["3. Testing", S`Solve two parametric equations for $s,t$; check the third.`],
  ],
  tips: ["Directions must not be parallel.", "Collinear points: no unique plane.", "Always check the third equation.", "Many equations, one plane.", "x = 4 is a plane in 3-D."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
