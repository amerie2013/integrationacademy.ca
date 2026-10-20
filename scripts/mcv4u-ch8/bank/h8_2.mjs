// 8.2 Equations of Planes — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { vdoc, p3, axes3, merge, line3, patch3, tri3 } from "../vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
export const TOPIC = "8.2 Equations of Planes";
export const Q = [
  tf("The points A(1, 0, 0), B(0, 1, 0), C(0, 0, 1) and D(1, 1, −1) are coplanar.", true, "AD = AB − AC."),
  num("Find k so that A(1, 1, 1), B(2, 1, 0), C(1, 2, 2) and D(k, 0, 0) are coplanar.", 1, "AD = s AB + t AC gives t = −1, s = 0, so k − 1 = 0."),
  mc("The plane shown has intercepts 2, 3 and 6. Which equation do all its points satisfy?", S`$3x+2y+z=6$`, [S`$2x+3y+6z=6$`, S`$x+y+z=11$`, S`$6x+3y+2z=6$`], "x/2 + y/3 + z/6 = 1, times 6.", vdoc(merge(V3, axes3(4.6), { polys: [tri3(2, 3, 6 * 0.7)] }, { points: [pt(2, 0, 0, "2", -14, 12), pt(0, 3, 0, "3", 2, 16), pt(0, 0, 4.2, "6", 8, 0)] }))),
  tf(S`The origin lies on $\vec r=[1,1,1]+s[1,0,1]+t[0,1,1]$.`, false, "x and y force s = t = −1, but then z = −1."),
  num(S`The plane contains $\vec r=[1,2,0]+t[1,0,1]$ and $\vec r=[1,2,0]+s[0,1,1]$. Find the z-coordinate of its point with $s=t=1$.`, 2, "0 + 1 + 1."),
  mc("How many different vector equations does a plane have?", "infinitely many", ["one", "two", "three"], "Choices of point and of directions."),
  num(S`The point $(4,3,3)$ lies on $\vec r=[1,1,1]+s[1,2,0]+t[1,0,1]$. Find $s+t$.`, 3, "z gives t = 2, then x gives s = 1."),
  mc(S`Does the line $\vec r=t[1,1,1]$ lie in the plane $\vec r=s[1,0,1]+u[0,1,0]$?`, "yes", ["no", "only at the origin", "it cannot be decided"], "[1, 1, 1] = [1, 0, 1] + [0, 1, 0], and both pass through the origin."),
  num("The plane shown contains the y-axis and the point (1, 0, 2), so z = 2x on it. Find z at a point with x = 1.5.", 3, "z = 2x.", vdoc(merge(V3, axes3(4.6), { polys: [patch3([0.8, 1, 1.6], [1, 0, 2], [0, 1, 0], 1.2)] }, { points: [pt(1, 0, 2, "(1, 0, 2)")] }))),
  tf("Parametric equations of a plane involve three parameters.", false, "Two: s and t."),
  num(S`Find the distance between the parallel planes $\vec r=s\vec i+t\vec j$ and $\vec r=[0,0,4]+s\vec i+t\vec j$.`, 4, "z = 0 and z = 4.", vdoc(merge(V3, axes3(4.4), { polys: [{ ...patch3([1.2, 1.2, 0], [1, 0, 0], [0, 1, 0], 1.4), op: 0.5 }, { ...patch3([1.2, 1.2, 4], [1, 0, 0], [0, 1, 0], 1.4, "#dcfce7", "green"), op: 0.5 }] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6.4 } }))),
  num(S`For which $k$ does $\vec r=s[1,2,3]+t[2,k,6]$ fail to describe a plane?`, 4, "[2, k, 6] = 2[1, 2, 3] when k = 4."),
  mc("Which plane contains the z-axis?", S`$\vec r=s[0,0,1]+t[1,1,0]$`, [S`$\vec r=[1,0,0]+s[0,0,1]+t[0,1,0]$`, S`$\vec r=s[1,0,0]+t[0,1,0]$`, S`$\vec r=[0,0,1]+s[1,0,0]+t[0,1,0]$`], "It passes through the origin and contains k."),
  num(S`The point $(0,0,5)$ lies on $\vec r=[0,0,1]+s[1,0,0]+t[0,0,2]$. Find $t$.`, 2, "1 + 2t = 5."),
  num("Every point of the plane through (1, 0, 0), (0, 1, 0) and (0, 0, 1) (shown) has the same value of x + y + z. What is it?", 1, "Check any vertex.", vdoc(merge(V3, axes3(4.4), { polys: [tri3(2, 2, 2)] }, { texts: [{ x: 3.4, y: 3.8, t: "drawn at scale 2", color: "gray" }] }))),
  tf("Three different points on the x-axis determine a unique plane.", false, "They are collinear."),
  num("A plane is to contain a given line and a point off the line. Besides the line's direction, how many more direction vectors are needed?", 1, "The vector from the line to the point."),
  num(S`The plane $\vec r=s[1,0,0]+t[0,1,2]$ meets the line $x=0$, $z=6$. Find the y-coordinate there.`, 3, "z = 2t = 6, so y = t = 3."),
  mc("Which is a vector equation of the plane x = y?", S`$\vec r=s[1,1,0]+t[0,0,1]$`, [S`$\vec r=s[1,0,0]+t[0,1,0]$`, S`$\vec r=s[1,-1,0]+t[0,0,1]$`, S`$\vec r=t[1,1,1]$`], "Points with equal x and y, any z."),
  num(S`How many points do the plane $\vec r=s\vec i+t\vec j$ and the line $\vec r=[0,0,1]+u[1,1,1]$ share?`, 1, "z = 1 + u = 0 at u = −1."),
];
