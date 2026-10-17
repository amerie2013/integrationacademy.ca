// 2.4 Medians, Right Bisectors & Altitudes — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  mc(`A median of a triangle joins a vertex to…`, "the midpoint of the opposite side", ["the opposite side at a right angle", "another vertex", "the centre of the triangle"], "Median → midpoint."),
  mc(`An altitude of a triangle is…`, "a line from a vertex perpendicular to the opposite side", ["a line from a vertex to a midpoint", "a side of the triangle", "the longest side"], "Altitude = height."),
  mc(`A right bisector of a side passes through…`, "the side's midpoint, at a right angle", ["a vertex, at a right angle", "two vertices", "the midpoint, parallel to the side"], "Right angle + bisects."),
  num(`A side has slope $2$. What is the slope of a line perpendicular to it?`, -0.5, "Negative reciprocal."),
  num(`A side has slope $-4$. What is the slope of a line perpendicular to it?`, 0.25, "$\\frac14$."),
  mc(`The three medians of a triangle meet at the…`, "centroid", ["circumcentre", "orthocentre", "midpoint"], "Medians → centroid."),
  mc(`The three right bisectors of a triangle meet at the…`, "circumcentre", ["centroid", "orthocentre", "vertex"], "Right bisectors → circumcentre."),
  mc(`The three altitudes of a triangle meet at the…`, "orthocentre", ["centroid", "circumcentre", "midpoint"], "Altitudes → orthocentre."),
  num(`Find the $x$-coordinate of the midpoint of $BC$ with $B(2,6)$, $C(4,-2)$.`, 3, "$\\frac{2+4}{2}$."),
  num(`Find the $y$-coordinate of the midpoint of $BC$ with $B(2,6)$, $C(4,-2)$.`, 2, "$\\frac{6-2}{2}$."),
  tf(`An altitude always passes through the midpoint of the opposite side.`, false, "Only in special triangles (e.g. from the apex of an isosceles triangle)."),
  tf(`A right bisector of a side does not have to pass through a vertex.`, true, "It passes through the midpoint of the side."),
  num(`The median from $A(0,0)$ goes to the midpoint $(3,6)$. What is its slope?`, 2, "$\\frac{6}{3}$."),
  num(`Find the $x$-coordinate of the centroid of $(0,0)$, $(6,0)$, $(0,9)$.`, 2, "Average: $\\frac{0+6+0}{3}$."),
  num(`Find the $y$-coordinate of the centroid of $(0,0)$, $(6,0)$, $(0,9)$.`, 3, "$\\frac{0+0+9}{3}$."),
  fill(`A side has slope $-\\frac12$. The altitude to that side has slope ___.`, ["2"], "Negative reciprocal."),
  num(`The right bisector of the segment from $(0,0)$ to $(6,0)$ is the line $x=k$. Find $k$.`, 3, "Vertical line through the midpoint $(3,0)$."),
  tf(`The circumcentre is the same distance from all three vertices.`, true, "It is the centre of the circle through them."),
  mc(`To find the centroid algebraically, you solve the equations of two…`, "medians", ["altitudes", "right bisectors", "sides"], "Medians meet at the centroid."),
  num(`Find the slope of the median from $A$ in the triangle shown.`, 1, "Midpoint of $BC$ is $(3,3)$; slope from $(-3,-3)$ is $\\frac66$.", planeDoc({ view: { xmin: -5, xmax: 7, ymin: -5, ymax: 7 }, segs: [{ pts: [[-3, -3], [5, 1], [1, 5], [-3, -3]], color: "gray" }], points: [{ x: -3, y: -3, label: "A(−3, −3)" }, { x: 5, y: 1, label: "B(5, 1)" }, { x: 1, y: 5, label: "C(1, 5)" }], step: { x: 1, y: 1 } })),
];

const T = String.raw`\(\triangle ABC\) with \(A(-2,0)\), \(B(4,4)\), \(C(6,-2)\)`.replace(/\\\(|\\\)/g, "$");
export const M = [
  mc(`For ${T}, which is the median from $A$?`, "$x-7y=-2$", ["$x+7y=-2$", "$7x-y=-14$", "$x-7y=2$"], "Midpoint of $BC$ is $(5,1)$; slope $\\frac17$."),
  num(`For ${T}, find the $y$-intercept of the right bisector of $AB$.`, 3.5, "Midpoint $(1,2)$, slope $-\\frac32$: $y=-\\frac32x+\\frac72$."),
  num(`For ${T}, find the $y$-intercept of the altitude from $C$.`, 7, "Slope $-\\frac32$ through $(6,-2)$."),
  num(`For ${T}, find the $y$-intercept of the altitude from $A$ (three decimals).`, 0.667, "$m_{BC}=-3$, so slope $\\frac13$ through $(-2,0)$: $y=\\frac13x+\\frac23$.", null, 0.001),
  num(`For ${T}, find the $x$-coordinate of the centroid (three decimals).`, 2.667, "$\\frac{-2+4+6}{3}=\\frac83$.", null, 0.001),
  num(`For ${T}, find the slope of the right bisector of $BC$ (three decimals).`, 0.333, "$m_{BC}=-3$; perpendicular $\\frac13$.", null, 0.001),
  ms(`Which lines always pass through a vertex of the triangle?`, ["a median", "an altitude", "a right bisector", "a side"], [0, 1, 3], "A right bisector passes through a midpoint, not necessarily a vertex."),
  tf(`In an isosceles triangle with $AB=AC$, the median from $A$ is also the altitude from $A$.`, true, "The symmetry line does both."),
  num(`Right triangle $O(0,0)$, $A(8,0)$, $B(0,6)$: what is the $x$-coordinate of its circumcentre?`, 4, "The midpoint of the hypotenuse, $(4,3)$."),
  num(`Right triangle $(0,0)$, $(5,0)$, $(0,7)$: what is the $y$-coordinate of its orthocentre?`, 0, "The legs are altitudes; they meet at the right angle $(0,0)$."),
  num(`Find the slope of the right bisector of the segment from $(-2,1)$ to $(4,4)$.`, -2, "Segment slope $\\frac12$."),
  fill(`The right bisector of the segment from $(-3,2)$ to $(5,2)$ is $x=$ ___.`, ["1"], "Horizontal segment, midpoint $(1,2)$."),
  mc(`Side $BC$ lies on $y=-2$. What is the altitude from $A(1,5)$?`, "$x=1$", ["$y=1$", "$y=5$", "$x=5$"], "Perpendicular to a horizontal line is vertical."),
  num(`$A(-4,0)$, $B(2,-2)$, $C(0,6)$. Find the slope of the median from $C$.`, 7, "Midpoint of $AB$ is $(-1,-1)$: $\\frac{6-(-1)}{0-(-1)}$."),
  num(`Find the $y$-coordinate of the centroid of $(-5,2)$, $(3,8)$, $(5,-4)$.`, 2, "$\\frac{2+8-4}{3}$."),
  tf(`The centroid of a triangle always lies inside the triangle.`, true, "It is the balance point."),
  mc(`In an obtuse triangle, the orthocentre lies…`, "outside the triangle", ["inside the triangle", "on the longest side", "at a vertex"], "Two altitudes meet the extended sides."),
  num(`Find the length of the median from $A(0,0)$ in the triangle with $B(4,6)$, $C(8,0)$ (two decimals).`, 6.71, "Midpoint $(6,3)$: $\\sqrt{45}$.", null, 0.01),
  num(`$A(0,0)$, $C(8,0)$ and $B(4,7)$. How long is the altitude from $B$?`, 7, "$AC$ is on the $x$-axis."),
  num(`Find the slope of the median from $B$ in the triangle shown.`, 2.5, "Midpoint of $CA$ is $(2,-1)$: $\\frac{4-(-1)}{4-2}$.", planeDoc({ view: { xmin: -4, xmax: 8, ymin: -4, ymax: 6 }, segs: [{ pts: [[-2, 0], [4, 4], [6, -2], [-2, 0]], color: "gray" }], points: [{ x: -2, y: 0, label: "A(−2, 0)" }, { x: 4, y: 4, label: "B(4, 4)" }, { x: 6, y: -2, label: "C(6, −2)" }], step: { x: 1, y: 1 } })),
];
