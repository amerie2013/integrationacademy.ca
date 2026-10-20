// 8.3 Properties of Planes — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, p3, axes3, merge, patch3, tri3 } from "../vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
const easy = [
  mc(S`Which is a normal to $3x-2y+z=4$?`, S`$[3,-2,1]$`, [S`$[3,-2,4]$`, S`$[-2,1,4]$`, S`$[1,-2,3]$`], "Coefficients of x, y, z."),
  num(S`The plane $x+y+z=D$ passes through $(1,2,3)$. Find $D$.`, 6, "1 + 2 + 3."),
  num(S`Find the z-intercept of $2x+y+5z=10$.`, 2, "x = y = 0."),
  num(S`Find the x-intercept of $2x+y+5z=10$.`, 5, "y = z = 0."),
  tf("Parallel planes have parallel normals.", true, "Same orientation."),
  tf(S`The planes $x+y=1$ and $x+y=5$ are parallel.`, true, "Same normal [1, 1, 0], different constants."),
  num(S`Find the distance from the origin to the plane $z=7$.`, 7, "Straight up 7."),
  mc("Which plane is perpendicular to the z-axis?", S`$z=3$`, [S`$x=3$`, S`$x+y=3$`, S`$y=z$`], "Its normal is k."),
  fill("A vector perpendicular to a plane is called a ___ to the plane.", ["normal", "Normal", "normal vector"], "n = [A, B, C]."),
  num(S`Find the dot product of the normals of $2x+y-z=0$ and $x-y+z=3$.`, 0, "2 − 1 − 1: the planes are perpendicular."),
  num("The plane shown has intercepts 3, 2 and 6. What is its z-intercept?", 6, "Read the z-axis.", vdoc(merge(V3, axes3(4.8), { polys: [tri3(3, 2, 4.2)] }, { points: [pt(3, 0, 0, "3", -14, 12), pt(0, 2, 0, "2", 2, 16), pt(0, 0, 4.2, "6 (scaled)", 8, 0)] }))),
  num(S`The plane with normal $[1,0,0]$ through $(4,1,1)$ is $x=D$. Find $D$.`, 4, "x = 4."),
  mc(S`Which is a normal to the plane $y=2$?`, S`$[0,1,0]$`, [S`$[0,2,0]$ only`, S`$[1,0,0]$`, S`$[0,0,1]$`], "Coefficients 0, 1, 0."),
  tf("Every nonzero scalar multiple of a normal is also a normal.", true, "Same direction or the opposite."),
  num(S`Find the angle between the planes $x=0$ and $z=0$ (degrees).`, 90, "Normals i and k."),
  num(S`Find the y-intercept of $4x-2y+z=8$.`, -4, "−2y = 8."),
  mc("Which is the plane through the origin with normal [1, 2, 3]?", S`$x+2y+3z=0$`, [S`$x+2y+3z=1$`, S`$x+y+z=6$`, S`$3x+2y+z=0$`], "D = 0 for the origin."),
  mc("In the figure, the green vector is a normal. How is it related to the plane?", "it is perpendicular to every vector in the plane", ["it lies in the plane", "it is parallel to the x-axis", "its length is the plane's distance from the origin"], "Definition of a normal.", vdoc(merge(V3, axes3(4.6), { polys: [tri3(4, 3, 2)] }, { arrows: [{ from: p3(4 / 3, 1, 2 / 3), to: p3(4 / 3 + 0.9, 1 + 1.2, 2 / 3 + 1.8), vl: "n", color: "green", off: -16 }] }))),
  num(S`Find the distance from the origin to $x+y+z=3$ (2 decimals).`, 1.73, "3/√3.", null, 0.01),
  tf(S`$2x+4y-6z=2$ and $x+2y-3z=1$ are the same plane.`, true, "One equation is twice the other."),
];
const medium = [
  num(S`The plane through $(1,-1,2)$ with normal $[2,3,-1]$ is $2x+3y-z=D$. Find $D$.`, -3, "2 − 3 − 2."),
  num(S`A scalar equation of $\vec r=s[1,0,1]+t[0,1,1]$ is $x+y+cz=0$. Find $c$.`, -1, "Normal [−1, −1, 1], or [1, 1, −1]."),
  num(S`Find the angle between $x+y=3$ and $x-y=1$ (degrees).`, 90, "1 − 1 = 0."),
  num(S`Find the angle between $z=0$ and $y+z=1$ (degrees).`, 45, "Normals [0, 0, 1] and [0, 1, 1]."),
  num(S`Find the distance from $(1,2,3)$ to $2x-y+2z=3$.`, 1, "|2 − 2 + 6 − 3| / 3."),
  num(S`Find the distance between $x+2y+2z=2$ and $x+2y+2z=11$.`, 3, "|11 − 2| / 3."),
  mc(S`Which plane through the origin is parallel to $3x-y+z=4$?`, S`$3x-y+z=0$`, [S`$x-3y+z=0$`, S`$3x+y+z=0$`, S`$3x-y+z=4$`], "Same normal, D = 0."),
  num(S`Find $k$ so that $kx+y-z=2$ is perpendicular to $x+2y+3z=0$.`, 1, "k + 2 − 3 = 0."),
  mc("The plane shown has intercepts 2, 4 and 4. Which is its equation?", S`$2x+y+z=4$`, [S`$x+2y+2z=4$`, S`$2x+4y+4z=1$`, S`$x+y+z=10$`], "x/2 + y/4 + z/4 = 1, times 4.", vdoc(merge(V3, axes3(4.8), { polys: [tri3(2, 4, 4)] }, { points: [pt(2, 0, 0, "2", -14, 12), pt(0, 4, 0, "4", 2, 16), pt(0, 0, 4, "4", 8, 0)] }))),
  num(S`Find the angle between $2x-y+z=1$ and $x+y+2z=0$ (degrees).`, 60, "cos θ = 3/6."),
  tf(S`The plane $x+2y+3z=6$ passes through $(1,1,1)$.`, true, "1 + 2 + 3 = 6."),
  num(S`A plane parallel to $2x-y+2z=5$ lies 3 units from it, on the side away from the origin. It is $2x-y+2z=D$. Find $D$.`, 14, "D = 5 + 3 × 3."),
  num(S`Find the length of the normal $[2,-3,6]$.`, 7, "√(4 + 9 + 36)."),
  mc("Which plane passes through (0, 0, 0), (1, 0, 0) and (0, 1, 1)?", S`$y=z$`, [S`$x=0$`, S`$x+y+z=0$`, S`$z=0$`], "Normal [1, 0, 0] × [0, 1, 1] = [0, −1, 1]."),
  num(S`The plane $2x+y+z=4$ meets the z-axis at $(0,0,c)$. Find $c$.`, 4, "x = y = 0."),
  num("Find the distance from the origin to the plane x + y + z = 6 shown (2 decimals).", 3.46, "6/√3.", vdoc(merge(V3, axes3(4.8), { polys: [tri3(4.5, 4.5, 4.5)] }, { texts: [{ x: 4, y: 4.6, t: "x + y + z = 6 (scaled)", color: "gray" }] })), 0.01),
  tf("Perpendicular planes have perpendicular normals.", true, "The angle between planes is the angle between normals."),
  num(S`Find the angle between $x+y+z=0$ and the xy-plane (degrees, 2 decimals).`, 54.74, "cos θ = 1/√3.", null, 0.01),
  num(S`Find the distance from $(3,0,0)$ to the plane $x=1$.`, 2, "3 − 1."),
  mc(S`Which plane is perpendicular to $2x+3y-z=0$?`, S`$x-y-z=4$`, [S`$2x+3y-z=4$`, S`$x+y+z=0$`, S`$4x+6y-2z=1$`], "2 − 3 + 1 = 0."),
];
export { easy as E, medium as M };
