// 8.6 Intersections of Planes — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { vdoc, p3, axes3, merge, line3, patch3 } from "../vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
export const TOPIC = "8.6 Intersections of Planes";
export const Q = [
  num(S`Solve $2x+y-z=3$, $x-y+2z=0$, $3x+2y+z=5$. Find $y$.`, 1, "The unique solution is (1, 1, 0)."),
  num(S`For which $k$ do $x+y+z=3$, $x-y=1$, $2x+kz=4$ form a sheaf?`, 1, "The sum of the first two is 2x + z = 4."),
  num("The three planes shown form a triangular prism. What is the triple product of their normals?", 0, "Prism normals are coplanar.", vdoc(merge(V3, axes3(4.6), { polys: [patch3([1.5, 0, 0], [1, 0, 0], [0, 1.4, 0], 1.5, "#dbeafe", "blue", 0.45), patch3([1.5, 1, 1], [1, 0, 0], [0, 0.7, -0.7], 1.5, "#dcfce7", "green", 0.45), patch3([1.5, -1, 1], [1, 0, 0], [0, 0.7, 0.7], 1.5, "#fee2e2", "red", 0.45)] }))),
  num(S`The planes $2x-y+z=5$ and $x+y-z=1$ meet in a line. What is the x-coordinate of every point on it?`, 2, "Adding gives 3x = 6."),
  num(S`Find the angle between that line of intersection (direction $[0,1,1]$) and the z-axis (degrees).`, 45, "cos θ = 1/√2."),
  tf(S`Three planes with normals $[1,0,0]$, $[0,1,0]$ and $[1,1,0]$ can meet in a line.`, true, "The normals are coplanar; a consistent system gives a sheaf."),
  num(S`Find the distance from the origin to the line where $x=1$ and $y=1$ meet (2 decimals).`, 1.41, "The closest point is (1, 1, 0).", null, 0.01),
  mc(S`$x+y+z=1$, $x+y+z=2$ and $x+y+z=3$ are:`, "three parallel planes", ["a sheaf", "a prism", "one point"], "Same normal, different constants."),
  num("Two parallel planes are both cut by a third plane (shown). How many lines of intersection are formed?", 2, "One with each parallel plane.", vdoc(merge(V3, axes3(4.6), { polys: [patch3([0.3, 0.3, 0.4], [1, -1, 0], [1, 0, -1], 1.5, "#dbeafe", "blue", 0.45), patch3([1, 1, 1], [1, -1, 0], [1, 0, -1], 1.5, "#dbeafe", "blue", 0.45), patch3([1, 0.75, 0.5], [1, 0, -1], [1, 1, 0], 1.2, "#dcfce7", "green", 0.45)] }))),
  num(S`Find $z$ for the solution of $x+y=1$, $y+z=2$, $x+z=5$.`, 3, "x + y + z = 4, so z = 4 − 1."),
  num(S`For which value of $k$ do $x+y=1$, $y+z=1$, $x+kz=0$ fail to meet in a single point?`, -1, "Triple product k + 1."),
  tf("Elimination giving 0 = 0 always means the planes share a line.", false, "They could also all be the same plane."),
  num(S`The planes $x=y$ and $y=2z$ meet in a line that crosses $x+y+z=10$. Find the x-coordinate there.`, 4, "x = y = 2z: 5z = 10."),
  mc("Three planes whose normals are coplanar, with no two parallel, and an inconsistent system form:", "a triangular prism", ["a sheaf", "one point", "three parallel planes"], "Each pair meets in a line, but there is no common point."),
  mc("The planes y = 0 and z = 0 (shown) meet along a line with direction:", S`$[1,0,0]$`, [S`$[0,1,0]$`, S`$[0,0,1]$`, S`$[1,1,1]$`], "[0, 1, 0] × [0, 0, 1] = [1, 0, 0].", vdoc(merge(V3, axes3(4.6), { polys: [{ ...patch3([1.5, 0, 1.5], [1, 0, 0], [0, 0, 1], 1.5), op: 0.45 }, { ...patch3([1.5, 1.5, 0], [1, 0, 0], [0, 1, 0], 1.5, "#dcfce7", "green"), op: 0.45 }] }, { segs: [line3([0, 0, 0], [1, 0, 0], -0.8, 3.6, "red", 3)] }))),
  num(S`Find the distance between the vertical line $x=1$, $y=2$ and the z-axis (2 decimals).`, 2.24, "√(1 + 4).", null, 0.01),
  num("How many distinct lines do the three planes of a triangular prism form, pair by pair?", 3, "One for each pair."),
  num(S`Solve $x+y+z=0$, $x+2y+3z=0$, $x+4y+9z=0$. Find $x$.`, 0, "The triple product is 2 ≠ 0, so the only solution is (0, 0, 0)."),
  tf(S`Two distinct planes with normals $[1,2,3]$ and $[2,4,6]$ meet in a line.`, false, "Parallel normals: the planes are parallel."),
  num("Find the angle between the planes x + y = 1 and y + z = 2 shown (degrees).", 60, "cos θ = 1/2.", vdoc(merge(V3, axes3(4.6), { polys: [patch3([0.5, 0.5, 1], [1, -1, 0], [0, 0, 1], 1.5, "#dbeafe", "blue", 0.45), patch3([1, 1, 1], [1, 0, 0], [0, 1, -1], 1.5, "#dcfce7", "green", 0.45)] }))),
];
