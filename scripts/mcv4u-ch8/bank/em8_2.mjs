// 8.2 Equations of Planes — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, p3, axes3, merge, patch3, tri3 } from "../vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
const easy = [
  num(S`Find the x-coordinate of the point with $s=1$, $t=1$ on $\vec r=[1,0,0]+s[1,1,0]+t[0,1,1]$.`, 2, "1 + 1 + 0."),
  num(S`Find the y-coordinate of the point with $s=1$, $t=1$ on $\vec r=[1,0,0]+s[1,1,0]+t[0,1,1]$.`, 2, "0 + 1 + 1."),
  num(S`Find the z-coordinate of the point with $s=1$, $t=1$ on $\vec r=[1,0,0]+s[1,1,0]+t[0,1,1]$.`, 1, "0 + 0 + 1."),
  mc("What is the least number of points, not all on one line, that determine a plane?", "3", ["2", "4", "1"], "Two points only give a line."),
  tf("Two parallel vectors can serve as the two direction vectors of a plane.", false, "They only describe a line."),
  mc("Which is a vector equation of the xy-plane?", S`$\vec r=s[1,0,0]+t[0,1,0]$`, [S`$\vec r=s[1,0,0]+t[0,0,1]$`, S`$\vec r=t[0,0,1]$`, S`$\vec r=s[0,1,0]+t[0,0,1]$`], "Through the origin with directions i and j."),
  num(S`What is the z-coordinate of every point on $\vec r=[0,0,5]+s[1,0,0]+t[0,1,0]$?`, 5, "Neither direction changes z."),
  tf("A plane has exactly one vector equation.", false, "Any point and any two non-parallel directions in it work."),
  fill(S`In $\vec r=\vec r_0+s\vec a+t\vec b$, $s$ and $t$ are called ___.`, ["parameters", "Parameters"], "Each pair gives one point."),
  num(S`Find the x-coordinate of the point with $s=t=0$ on $\vec r=[3,-1,2]+s[1,2,0]+t[0,1,1]$.`, 3, "That is r₀."),
  num("The plane shown passes through r₀ = (1, 1, 1) with a direction a = [1, 0, 0]. Find the x-coordinate of the point with s = 1, t = 0.", 2, "1 + 1.", vdoc(merge(V3, axes3(4.6), { polys: [patch3([1, 1, 1], [1, 0, 0], [0, 1, 0.5], 1.3)] }, { arrows: [{ from: p3(1, 1, 1), to: p3(2, 1, 1), vl: "a", off: 16 }] }))),
  mc("Three collinear points:", "do not determine a unique plane", ["determine exactly one plane", "determine no plane", "always lie in the xy-plane"], "Infinitely many planes contain a line."),
  num(S`For $A(0,0,0)$ and $B(1,2,3)$, what is the x-component of $\overrightarrow{AB}$?`, 1, "1 − 0."),
  tf("The plane x = 0 is the yz-plane.", true, "Every point has x = 0."),
  num(S`Find the y-coordinate of the point with $s=2$, $t=-1$ on $\vec r=[0,1,0]+s[1,1,0]+t[0,3,1]$.`, 0, "1 + 2 − 3."),
  mc(S`Which point lies on $\vec r=s[1,0,0]+t[0,1,0]$?`, "(2, 3, 0)", ["(2, 3, 1)", "(0, 0, 4)", "(1, 1, 1)"], "z must be 0."),
  num("How many parameters appear in a vector equation of a plane?", 2, "s and t."),
  tf("The plane through A(1, 0, 0), B(0, 1, 0) and C(0, 0, 1) shown contains the origin.", false, "Every point of it satisfies x + y + z = 1.", vdoc(merge(V3, axes3(4.6), { polys: [tri3(1, 1, 1)] }, { points: [pt(1, 0, 0, "A", -14, 14), pt(0, 1, 0, "B", 2, 16), pt(0, 0, 1, "C")] }))),
  num(S`Find the x-coordinate of the point with $s=-1$, $t=2$ on $\vec r=[2,2,2]+s[1,0,0]+t[0,0,1]$.`, 1, "2 − 1."),
  tf("Any three points determine exactly one plane.", false, "Not if they are collinear."),
];
const medium = [
  tf(S`$(3,1,4)$ lies on $\vec r=[1,0,1]+s[1,1,1]+t[1,0,2]$.`, true, "s = 1, t = 1 works in all three coordinates."),
  num(S`The point $(4,2,3)$ lies on $\vec r=[0,0,1]+s[2,1,0]+t[0,0,1]$. Find $t$.`, 2, "s = 2 from x; then 1 + t = 3."),
  mc("Which is a vector equation of the plane through (1, 1, 1), (2, 3, 1) and (1, 1, 4)?", S`$\vec r=[1,1,1]+s[1,2,0]+t[0,0,3]$`, [S`$\vec r=[1,1,1]+s[2,3,1]+t[1,1,4]$`, S`$\vec r=s[1,2,0]+t[0,0,3]$`, S`$\vec r=[1,1,1]+t[1,2,3]$`], "Use AB and AC from A."),
  num(S`Find $k$ so that $(k,0,0)$ lies on $\vec r=[1,1,0]+s[1,1,0]+t[0,0,1]$.`, 0, "y: s = −1; then x = 0."),
  tf("The points (0, 0, 0), (1, 0, 0), (0, 1, 0) and (1, 1, 5) are coplanar.", false, "The first three are in the xy-plane; the fourth is not."),
  num("What is the z-coordinate of every point of the plane through (0, 0, 2), (1, 0, 2) and (0, 1, 2)?", 2, "It is the plane z = 2.", vdoc(merge(V3, axes3(4.4), { polys: [patch3([1.2, 1.2, 2], [1, 0, 0], [0, 1, 0], 1.4)] }, { points: [pt(0, 0, 2, "(0, 0, 2)", 8, -6), pt(1, 0, 2, "(1, 0, 2)", -70, 14), pt(0, 1, 2, "(0, 1, 2)", 6, -6)] }))),
  mc("Which is a vector equation of the plane containing the x-axis and the point (0, 1, 1)?", S`$\vec r=s[1,0,0]+t[0,1,1]$`, [S`$\vec r=s[1,0,0]+t[0,1,0]$`, S`$\vec r=[0,1,1]+t[1,0,0]$`, S`$\vec r=s[0,1,0]+t[0,0,1]$`], "Directions i and the vector to (0, 1, 1)."),
  num(S`The point $(5,1,3)$ lies on $\vec r=[1,1,3]+s[2,0,0]+t[0,1,0]$. Find $s$.`, 2, "1 + 2s = 5."),
  tf(S`$[1,1,0]$ and $[-2,-2,0]$ can be the two directions of a plane.`, false, "They are parallel."),
  num(S`Find the y-coordinate of the point with $s=t=0.5$ on $\vec r=s[2,2,0]+t[0,2,2]$.`, 2, "1 + 1."),
  mc("Which pair of points, together with the origin, does NOT determine a plane?", "(1, 2, 3) and (2, 4, 6)", ["(1, 0, 0) and (0, 1, 0)", "(1, 1, 0) and (0, 1, 1)", "(1, 2, 3) and (3, 2, 1)"], "The origin and those two points are collinear."),
  mc("How many planes contain two given distinct points?", "infinitely many", ["exactly one", "exactly two", "none"], "Two points determine only a line."),
  num(S`Where does the plane $\vec r=[1,0,0]+s[0,1,0]+t[0,0,1]$ meet the x-axis? Give the x-coordinate.`, 1, "It is the plane x = 1."),
  tf(S`The plane $\vec r=s[1,0,0]+t[0,1,1]$ contains $(0,2,2)$.`, true, "s = 0, t = 2."),
  num(S`Find $k$ so that $(1,k,3)$ lies on $\vec r=s[1,0,1]+t[0,1,1]$.`, 2, "s = 1, then t = 2."),
  tf("The points A(0, 0, 0), B(2, 0, 0), C(0, 2, 0) and D(2, 2, 0) shown are coplanar.", true, "All lie in the xy-plane.", vdoc(merge(V3, axes3(4.4), { polys: [{ pts: [p3(0, 0, 0), p3(2, 0, 0), p3(2, 2, 0), p3(0, 2, 0)], fill: "#dbeafe", stroke: "blue" }], points: [pt(0, 0, 0, "A", -14, -4), pt(2, 0, 0, "B", -16, 12), pt(2, 2, 0, "D", 6, 14), pt(0, 2, 0, "C", 4, -6)] }))),
  mc("Which is a vector equation of the plane through (0, 0, 3) parallel to the xy-plane?", S`$\vec r=[0,0,3]+s[1,0,0]+t[0,1,0]$`, [S`$\vec r=[0,0,3]+t[0,0,1]$`, S`$\vec r=s[1,0,0]+t[0,1,0]$`, S`$\vec r=[0,0,3]+s[1,0,0]+t[0,0,1]$`], "Point (0, 0, 3), directions i and j."),
  num(S`A plane passes through $A(1,2,3)$ with directions $[1,0,-1]$ and $[0,1,-1]$. Find the z-coordinate of its point with $s=t=1$.`, 1, "3 − 1 − 1."),
  mc("How many points does a line share with a plane that contains it?", "infinitely many", ["one", "two", "none"], "Every point of the line is in the plane."),
  tf(S`If $\overrightarrow{OD}=\overrightarrow{OA}+\overrightarrow{AB}+\overrightarrow{AC}$, then $D$ lies on the plane through $A$, $B$ and $C$.`, true, "s = t = 1."),
];
export { easy as E, medium as M };
