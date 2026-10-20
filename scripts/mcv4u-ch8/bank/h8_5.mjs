// 8.5 Intersections of Lines and Planes — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { vdoc, p3, axes3, merge, line3, patch3 } from "../vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
export const TOPIC = "8.5 Intersections of Lines and Planes";
export const Q = [
  num(S`Reflect $(1,2,3)$ in the plane $x+y+z=0$. Find the x-coordinate of the image.`, -3, "Foot at t = −2: (−1, 0, 1); image at t = −4.", vdoc(merge(V3, axes3(4.4), { polys: [patch3([-1, 0, 1], [1, -1, 0], [1, 0, -1], 1.4)] }, { segs: [{ pts: [p3(1, 2, 3), p3(-3, -2, -1)], color: "red", dash: true, w: 2.2 }] }, { points: [pt(1, 2, 3, "(1, 2, 3)"), pt(-1, 0, 1, "foot", 8, 14), pt(-3, -2, -1, "image", -50, 14)] }, { view: { xmin: -4.6, xmax: 5, ymin: -3, ymax: 5.4 } }))),
  num(S`The line through $(1,0,0)$ perpendicular to $2x-y+2z=11$ meets the plane. Find the y-coordinate there.`, -1, "(1 + 2t, −t, 2t): 9t + 2 = 11, t = 1."),
  num("Find the angle between a line with direction [1, 2, 2] and the plane x + y = 0 (shown) (degrees).", 45, "sin φ = 3/(3√2).", vdoc(merge(V3, axes3(4.4), { polys: [patch3([1, -1, 1.5], [1, -1, 0], [0, 0, 1], 1.6)] }, { segs: [line3([0, 0, 0], [1, 2, 2], -0.5, 1.4, "red", 2.8)] }))),
  num(S`Find $k$ so that $\vec r=[1,k,1]+t[1,0,-1]$ lies in $x+y+z=4$.`, 2, "m · n = 0; then 1 + k + 1 = 4."),
  num(S`Find the distance from $(2,1,-1)$ to the plane through $(1,0,0)$, $(0,1,0)$, $(0,0,1)$ (2 decimals).`, 0.58, "x + y + z = 1: |2 + 1 − 1 − 1| / √3.", null, 0.005),
  tf("If a line is perpendicular to a plane, its direction is parallel to the plane's normal.", true, "Both are perpendicular to the plane."),
  num(S`For which $t$ does $\vec r=t[3,-1,2]$ meet $2x+y+z=14$?`, 2, "6t − t + 2t = 14."),
  mc("A line that never meets a plane must be:", "parallel to the plane", ["perpendicular to the plane", "skew to the plane", "longer than the plane"], "Otherwise the equation in t has a solution."),
  num("Find the distance between the line r = [0, 0, 4] + t[1, 0, 0] and the plane z = 1 (shown).", 3, "The line stays at height 4.", vdoc(merge(V3, axes3(4.4), { polys: [{ ...patch3([1.5, 1.5, 1], [1, 0, 0], [0, 1, 0], 1.6), op: 0.6 }] }, { segs: [line3([0, 0, 4], [1, 0, 0], -1.5, 4.5, "red", 2.8)] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6 } }))),
  num(S`Find the angle between a line with direction $[1,-1,2]$ and the plane $2x+y+z=0$ (degrees).`, 30, "sin φ = 3/6."),
  num(S`Find the distance from the origin to the plane through $(2,0,0)$, $(0,2,0)$, $(0,0,2)$ (2 decimals).`, 1.15, "x + y + z = 2: 2/√3.", null, 0.01),
  tf("The foot of the perpendicular from P is the point of the plane closest to P.", true, "Any other point is farther (Pythagoras)."),
  num(S`Find the x-coordinate where $\vec r=[1,1,1]+t[1,1,1]$ meets $x+y+z=12$.`, 4, "3 + 3t = 12, t = 3."),
  mc(S`If $P+t_0\vec n$ is the foot of the perpendicular from $P$, the reflection of $P$ in the plane is:`, S`$P+2t_0\vec n$`, [S`$P-t_0\vec n$`, S`$2P$`, S`$t_0\vec n$`], "Go as far again past the foot."),
  num("Reflect (3, 0, 0) in the plane x = 1 (shown). Find the x-coordinate of the image.", -1, "3 is 2 past the plane; the image is 2 on the other side.", vdoc(merge(V3, axes3(4.4), { polys: [{ ...patch3([1, 1.5, 1.5], [0, 1, 0], [0, 0, 1], 1.5), op: 0.6 }] }, { points: [pt(3, 0, 0, "(3, 0, 0)", -70, 14)] }))),
  num(S`Find the distance between the line $\vec r=[1,2,3]+t[1,1,-2]$ and the plane $x+y+z=0$ (2 decimals).`, 3.46, "m · n = 0, so parallel; |6| / √3.", null, 0.01),
  num(S`The line $x=2+t$, $y=1-t$, $z=2t$ meets $x+y+z=7$. Find the z-coordinate.`, 4, "3 + 2t = 7."),
  tf("Substitution giving 0t = 7 means the line lies in the plane.", false, "No t works: the line is parallel and does not touch the plane."),
  num(S`Find the distance from $(1,-1,2)$ to $3x-4z=0$.`, 1, "|3 − 8| / 5."),
  mc("The angle φ between a line and a plane satisfies:", S`$\sin\phi=\frac{|\vec m\cdot\vec n|}{|\vec m||\vec n|}$`, [S`$\cos\phi=\frac{|\vec m\cdot\vec n|}{|\vec m||\vec n|}$`, S`$\tan\phi=\vec m\cdot\vec n$`, S`$\phi=90^\circ$ always`], "It is 90° minus the angle with the normal."),
];
