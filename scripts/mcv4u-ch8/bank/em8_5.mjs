// 8.5 Intersections of Lines and Planes — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, p3, axes3, merge, line3, patch3 } from "../vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
const easy = [
  num(S`For which $t$ does $\vec r=t[1,1,1]$ meet $x+y+z=9$?`, 3, "3t = 9."),
  num(S`The line $x=0$, $y=0$, $z=t$ meets $x+y+2z=8$. Find the z-coordinate.`, 4, "2t = 8."),
  mc(S`If $\vec m\cdot\vec n\ne0$, a line and a plane:`, "meet at exactly one point", ["are parallel", "the line lies in the plane", "are skew"], "The equation in t has one solution."),
  tf("A line can meet a plane at exactly two points.", false, "One point, none, or infinitely many."),
  num(S`Find the distance from the origin to $z=-4$.`, 4, "|−4|."),
  num(S`Where does the x-axis meet $2x+y+z=10$? Give the x-coordinate.`, 5, "y = z = 0."),
  mc(S`Substituting a line into a plane gives $0t=0$. The line:`, "lies in the plane", ["is parallel to the plane, not touching", "meets the plane once", "is perpendicular to the plane"], "Every t works."),
  tf(S`If $\vec m\cdot\vec n=0$, the line is parallel to the plane or lies in it.`, true, "The direction is perpendicular to the normal."),
  fill("The point of a plane closest to a point P is the foot of the ___ from P.", ["perpendicular", "Perpendicular"], "Drop a line along the normal."),
  num("Find the distance from (1, 2, 3) to the plane z = 0.", 3, "|z|."),
  num("The line from (0, 0, 4) with direction [1, 1, −2] (shown) meets z = 0. Find the x-coordinate there.", 2, "4 − 2t = 0 at t = 2.", vdoc(merge(V3, axes3(4.6), { polys: [{ ...patch3([1.5, 1.5, 0], [1, 0, 0], [0, 1, 0], 1.6), op: 0.5 }] }, { segs: [line3([0, 0, 4], [1, 1, -2], -0.2, 2.6, "red", 2.8)] }, { points: [pt(0, 0, 4, "(0, 0, 4)")] }))),
  num(S`Find the distance from the origin to $x+y+z=6$ (2 decimals).`, 3.46, "6/√3.", null, 0.01),
  num(S`Where does the y-axis meet $4x-2y+z=6$? Give the y-coordinate.`, -3, "−2y = 6."),
  tf("The angle between a line and a plane perpendicular to it is 90°.", true, "The line runs along the normal."),
  num("Find the distance from (5, 0, 0) to the plane x = 2.", 3, "5 − 2."),
  mc(S`The line $x=t$, $y=t$, $z=1$ and the plane $z=0$ are:`, "parallel", ["intersecting once", "the line lies in the plane", "perpendicular"], "z is always 1."),
  num(S`For which $t$ does $\vec r=[1,0,0]+t[1,0,0]$ meet $x=4$?`, 3, "1 + t = 4."),
  num("Find the distance from (1, 1, 7) to the plane z = 2 shown.", 5, "7 − 2.", vdoc(merge(V3, axes3(4.4), { polys: [{ ...patch3([1.2, 1.2, 2], [1, 0, 0], [0, 1, 0], 1.5), op: 0.6 }] }, { segs: [{ pts: [p3(1, 1, 7 * 0.7), p3(1, 1, 2)], color: "red", dash: true, w: 2 }] }, { points: [pt(1, 1, 4.9, "(1, 1, 7)")] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6 } }))),
  num(S`Find the angle between a line with direction $[0,0,1]$ and the plane $z=5$ (degrees).`, 90, "Along the normal."),
  num(S`Find the angle between a line with direction $[1,0,0]$ and the plane $z=0$ (degrees).`, 0, "Parallel to the plane."),
];
const medium = [
  num(S`Find the x-coordinate where $\vec r=[1,2,3]+t[1,-1,2]$ meets $2x+y-z=5$.`, -3, "1 − t = 5, so t = −4."),
  num(S`$\vec r=t[1,1,1]$ is parallel to $x-y=3$. Find the distance between them (2 decimals).`, 2.12, "|0 − 3| / √2.", null, 0.01),
  num(S`Find the distance from $(1,1,1)$ to $2x+2y+z=1$ (2 decimals).`, 1.33, "|2 + 2 + 1 − 1| / 3.", null, 0.01),
  num(S`Find the x-coordinate of the foot of the perpendicular from $(2,2,2)$ to $x+y+z=3$.`, 1, "6 + 3t = 3 at t = −1."),
  num(S`Find the angle between a line with direction $[1,0,1]$ and the plane $z=0$ (degrees).`, 45, "sin φ = 1/√2."),
  tf(S`$\vec r=[1,1,1]+t[1,-1,0]$ lies in the plane $x+y=2$.`, true, "m · n = 0 and (1, 1, 1) satisfies x + y = 2."),
  num(S`Find $k$ so that $\vec r=t[1,2,k]$ is parallel to $x+y+z=1$.`, -3, "1 + 2 + k = 0."),
  num("The line through (0, 0, 3) with direction [1, 1, −1] (shown) meets x + y + z = 1. Find the z-coordinate there.", 5, "3 + t = 1 at t = −2.", vdoc(merge(V3, axes3(4.4), { polys: [patch3([0.33, 0.33, 0.33], [1, -1, 0], [1, 0, -1], 1.6)] }, { segs: [line3([0, 0, 3], [1, 1, -1], -2.2, 1.6, "red", 2.8)] }, { view: { xmin: -5, xmax: 5, ymin: -2.8, ymax: 7 } }))),
  num(S`Reflect $(0,0,4)$ in the plane $z=1$. Find the z-coordinate of the image.`, -2, "4 is 3 above; the image is 3 below."),
  mc("The foot of the perpendicular from P to a plane always lies:", "on the plane", ["on the normal through the origin", "on the x-axis", "between P and the origin"], "It is the plane's closest point to P."),
  num(S`Find the distance from $(3,4,0)$ to $3x+4y=0$.`, 5, "25/5."),
  num(S`Find the angle between a line with direction $[1,1,1]$ and the plane $x=0$ (degrees, 2 decimals).`, 35.26, "sin φ = 1/√3.", null, 0.01),
  tf(S`If $P+t\vec n$ lies on the plane, the distance from $P$ to the plane is $|t||\vec n|$.`, true, "That is how far P moved along the normal."),
  num(S`The line $x=1+t$, $y=2t$, $z=3$ meets $x+y=7$. Find the y-coordinate.`, 4, "1 + 3t = 7, t = 2."),
  num(S`Find the distance between the plane $2x-y+2z=3$ and the parallel line $\vec r=[0,0,3]+t[1,2,0]$.`, 1, "|6 − 3| / 3."),
  num("Find the distance from (4, 4, 4) to the plane x + y + z = 3 shown (2 decimals).", 5.2, "|12 − 3| / √3.", vdoc(merge(V3, axes3(4.4), { polys: [patch3([1, 1, 1], [1, -1, 0], [1, 0, -1], 1.6)] }, { points: [pt(4, 4, 4, "(4, 4, 4)")] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 7 } })), 0.01),
  mc("The line through P perpendicular to a plane has direction:", "the plane's normal", ["any vector in the plane", "the position vector of P", "the zero vector"], "Perpendicular to the plane means along n."),
  num(S`The foot of the perpendicular from the origin to $2x+y+2z=18$ is $t[2,1,2]$. Find its x-coordinate.`, 4, "9t = 18, t = 2."),
  tf("A line parallel to a plane stays the same distance from it everywhere.", true, "It never approaches the plane."),
  num(S`Find the angle between a line with direction $[1,2,4]$ and the plane $z=0$ (degrees, 2 decimals).`, 60.79, "sin φ = 4/√21.", null, 0.01),
];
export { easy as E, medium as M };
