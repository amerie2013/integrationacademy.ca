// 8.6 Intersections of Planes — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, p3, axes3, merge, line3, patch3 } from "../vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
const easy = [
  num(S`Find the x-coordinate of the common point of $x=1$, $y=2$, $z=3$.`, 1, "Read it off."),
  mc("Two non-parallel planes meet in:", "a line", ["a point", "nothing", "a plane"], "Direction n₁ × n₂."),
  tf("Two planes can meet in exactly one point.", false, "Two planes meet in a line, not at all, or coincide."),
  num(S`How many points do $x+y+z=1$ and $x+y+z=2$ share?`, 0, "Parallel and distinct."),
  mc(S`$2x+2y+2z=4$ and $x+y+z=2$ are:`, "coincident", ["parallel and distinct", "perpendicular", "intersecting in a line"], "One equation is twice the other."),
  fill("Three planes that all contain one common line form a ___.", ["sheaf", "Sheaf"], "Like the pages of a book."),
  tf("Three planes can have no common point even if no two of them are parallel.", true, "A triangular prism."),
  num(S`Find the z-coordinate of the common point of $x+y+z=6$, $x=1$, $y=2$.`, 3, "1 + 2 + z = 6."),
  mc(S`If $\vec n_1\cdot(\vec n_2\times\vec n_3)\ne0$, three planes:`, "meet at exactly one point", ["share a line", "have no common point", "coincide"], "Independent normals."),
  num(S`Find the y-coordinate of the common point of $x=0$, $y=x+2$, $z=0$.`, 2, "y = 0 + 2."),
  mc("The three coordinate planes (shown) meet at:", "the origin", ["the x-axis", "no point", "the point (1, 1, 1)"], "x = y = z = 0.", vdoc(merge(V3, axes3(4.6), { polys: [{ ...patch3([1.5, 1.5, 0], [1, 0, 0], [0, 1, 0], 1.5), op: 0.4 }, { ...patch3([1.5, 0, 1.5], [1, 0, 0], [0, 0, 1], 1.5, "#dcfce7", "green"), op: 0.4 }, { ...patch3([0, 1.5, 1.5], [0, 1, 0], [0, 0, 1], 1.5, "#fee2e2", "red"), op: 0.4 }] }))),
  mc(S`The planes $y=0$ and $z=0$ meet along:`, "the x-axis", ["the y-axis", "the z-axis", "the origin only"], "Points with y = z = 0."),
  tf("Getting 0 = 5 during elimination means the planes have no common point.", true, "The system is inconsistent."),
  mc("Three distinct parallel planes have:", "no common point", ["one common point", "a common line", "a common plane"], "They never meet."),
  num(S`On the line where $x=2$ and $y=3$ meet, what is the x-coordinate of every point?`, 2, "x = 2 always."),
  num("How many of these configurations have no common point: three parallel planes, two parallel planes cut by a third, a triangular prism?", 3, "All three."),
  mc(S`The planes $z=1$ and $z=2$ are:`, "parallel", ["perpendicular", "coincident", "intersecting in a line"], "Same normal, different constants."),
  mc("The three planes shown form a triangular prism. They meet in:", "no common point", ["one point", "a common line", "a common plane"], "Each pair meets in a line; the three lines are parallel.", vdoc(merge(V3, axes3(4.6), { polys: [patch3([1.5, 0, 0], [1, 0, 0], [0, 1.4, 0], 1.5, "#dbeafe", "blue", 0.45), patch3([1.5, 1, 1], [1, 0, 0], [0, 0.7, -0.7], 1.5, "#dcfce7", "green", 0.45), patch3([1.5, -1, 1], [1, 0, 0], [0, 0.7, 0.7], 1.5, "#fee2e2", "red", 0.45)] }))),
  num(S`Find the y-coordinate of the solution of $x+y=5$, $x-y=1$, $z=0$.`, 2, "x = 3, y = 2."),
  tf("Two coincident planes have infinitely many common points.", true, "They are the same plane."),
];
const medium = [
  num(S`The planes $x+y+z=2$ and $x-y+z=0$ meet in a line. What is the y-coordinate of every point on it?`, 1, "Subtract: 2y = 2."),
  num(S`Find the x-coordinate of the solution of $x+y+z=3$, $x-y+z=1$, $x+y-z=1$.`, 1, "The solution is (1, 1, 1)."),
  num(S`Find the triple product of the normals of $x=1$, $y=2$, $x+y+z=3$.`, 1, "[1, 0, 0] · ([0, 1, 0] × [1, 1, 1])."),
  mc(S`$x+y=1$, $y+z=1$ and $x-z=0$:`, "share a line (sheaf)", ["meet at one point", "have no common point", "coincide"], "The third equation is the first minus the second."),
  mc(S`$x+y+z=1$, $x+y+z=3$ and $z=0$:`, "have no common point", ["meet at one point", "share a line", "coincide"], "The first two are parallel."),
  num(S`Find the angle between the planes $x+y=0$ and $z=0$ (degrees).`, 90, "[1, 1, 0] · [0, 0, 1] = 0."),
  num(S`Solve $x=2y$, $y=3z$, $x+y+z=10$. Find $x$.`, 6, "x = 6z, y = 3z: 10z = 10."),
  tf("If the normals of three planes are coplanar, the planes have no common point.", false, "They might share a line (a sheaf)."),
  mc("The planes x = 0 and y = 0 (shown) meet along:", "the z-axis", ["the x-axis", "the y-axis", "the origin only"], "Points with x = y = 0.", vdoc(merge(V3, axes3(4.6), { polys: [{ ...patch3([0, 1.5, 1.5], [0, 1, 0], [0, 0, 1], 1.5), op: 0.45 }, { ...patch3([1.5, 0, 1.5], [1, 0, 0], [0, 0, 1], 1.5, "#dcfce7", "green"), op: 0.45 }] }))),
  num(S`Find the distance between $2x-y+2z=1$ and $2x-y+2z=7$.`, 2, "|7 − 1| / 3."),
  num(S`For which $k$ are the normals of $x+y+z=1$, $x-y+z=2$, $x+3y+kz=0$ coplanar?`, 1, "Triple product 2 − 2k."),
  num(S`Solve $x+2y=5$, $y+2z=5$, $z+2x=5$. Find $x$ (2 decimals).`, 1.67, "By symmetry x = y = z: 3x = 5.", null, 0.01),
  mc(S`$x-y=0$, $y-z=0$ and $x-z=0$:`, "share a line (sheaf)", ["meet at one point", "have no common point", "are parallel"], "The third is the sum of the first two."),
  num(S`Find $z$ for the solution of $x+y=3$, $y+z=4$, $x+z=5$.`, 3, "x + y + z = 6, so z = 6 − 3."),
  tf("The line of intersection of two planes is perpendicular to both normals.", true, "Its direction is n₁ × n₂."),
  num("The planes x = 1, y = 2 and z = 3 (shown) meet at one point. Find its y-coordinate.", 2, "Read it off.", vdoc(merge(V3, axes3(4.6), { polys: [{ ...patch3([1, 2, 3], [0, 1, 0], [0, 0, 1], 1.3), op: 0.4 }, { ...patch3([1, 2, 3], [1, 0, 0], [0, 0, 1], 1.3, "#dcfce7", "green"), op: 0.4 }, { ...patch3([1, 2, 3], [1, 0, 0], [0, 1, 0], 1.3, "#fee2e2", "red"), op: 0.4 }] }, { points: [pt(1, 2, 3, "(1, 2, 3)")] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6.4 } }))),
  mc(S`The planes $z=x$ and $z=-x$ meet along:`, "the y-axis", ["the x-axis", "the z-axis", "the line x = z"], "x = z = 0, y free."),
  num(S`The line where $x+y=4$ and $x-y=2$ meet is $(3,1,t)$. What is its x-coordinate?`, 3, "Solve for x and y; z is free."),
  mc("A triangular prism of planes means:", "each pair meets in a line, the lines are parallel, and there is no common point", ["all three meet at one point", "all three are parallel", "all three share one line"], "Inconsistent system with coplanar normals."),
  mc(S`How many solutions has $x+y+z=1$, $2x+2y+2z=2$, $3x+3y+3z=3$?`, "infinitely many (a whole plane)", ["none", "one", "infinitely many along a line"], "All three equations describe the same plane."),
];
export { easy as E, medium as M };
