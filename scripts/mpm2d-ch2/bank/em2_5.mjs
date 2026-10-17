// 2.5 Verifying Geometric Properties — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

const quad = (pts, labels = "ABCD") => planeDoc({ view: { xmin: -5, xmax: 7, ymin: -4, ymax: 6 }, segs: [{ pts: [...pts, pts[0]], color: "green" }], points: pts.map((p, i) => ({ x: p[0], y: p[1], label: labels[i] })), step: { x: 1, y: 1 } });

export const E = [
  mc(`To show that two sides are parallel, compare their…`, "slopes (equal)", ["lengths (equal)", "midpoints (same)", "slopes (product −1)"], "Parallel lines have equal slopes."),
  mc(`To show that two sides are perpendicular, check that…`, "their slopes multiply to −1", ["their slopes are equal", "their lengths are equal", "they share a midpoint"], "Negative reciprocals."),
  mc(`To show that two sides are equal, compare their…`, "lengths", ["slopes", "midpoints", "intercepts"], "Use the length formula."),
  mc(`To show that two diagonals bisect each other, compare their…`, "midpoints", ["slopes", "lengths", "equations"], "Same midpoint means each cuts the other in half."),
  tf(`Every square is a rectangle.`, true, "A square has four right angles."),
  tf(`Every rhombus is a square.`, false, "A rhombus need not have right angles."),
  num(`What is the product of the slopes $2$ and $-\\frac12$?`, -1, "$2\\times\\left(-\\frac12\\right)$."),
  mc(`A parallelogram with one right angle is a…`, "rectangle", ["rhombus", "trapezoid", "kite"], "Then all four angles are right angles."),
  mc(`A quadrilateral with exactly one pair of parallel sides is a…`, "trapezoid", ["parallelogram", "kite", "rhombus"], "Definition of a trapezoid."),
  num(`Find the slope of $AB$ with $A(0,0)$ and $B(4,2)$.`, 0.5, "$\\frac24$."),
  tf(`Sides with slopes $\\frac34$ and $\\frac34$ are parallel.`, true, "Equal slopes."),
  mc(`A triangle with exactly two equal sides is…`, "isosceles", ["equilateral", "scalene", "right"], "Iso = equal."),
  num(`Find the length of $AB$ with $A(0,0)$ and $B(0,7)$.`, 7, "Vertical segment."),
  tf(`In a parallelogram, opposite sides are equal in length.`, true, "A property of every parallelogram."),
  mc(`A triangle has sides $\\sqrt{20}$, $\\sqrt{20}$ and $\\sqrt{40}$. It is…`, "an isosceles right triangle", ["equilateral", "scalene", "an obtuse triangle"], "$20+20=40$ and two equal sides."),
  fill(`Two lines are perpendicular when the product of their slopes is ___.`, ["-1"], "Negative reciprocals."),
  num(`Find the squared length of the segment from $(1,1)$ to $(3,4)$.`, 13, "$4+9$."),
  mc(`The diagonals of a rhombus are always…`, "perpendicular", ["equal", "parallel", "horizontal"], "They cross at right angles."),
  tf(`A kite has two pairs of equal opposite sides.`, false, "A kite's equal sides are adjacent."),
  mc(`What shape is $ABCD$ in the graph?`, "rhombus", ["square", "rectangle", "trapezoid"], "All sides $\\sqrt{13}$; slopes $-\\frac32$ and $\\frac32$ are not perpendicular.", quad([[0, 3], [2, 0], [0, -3], [-2, 0]])),
];

export const M = [
  mc(`Classify the triangle $(0,0)$, $(4,0)$, $(4,3)$.`, "right scalene", ["isosceles", "equilateral", "acute scalene"], "Sides $4$, $3$, $5$; a horizontal and a vertical side."),
  mc(`Classify $ABCD$ with $A(0,0)$, $B(4,1)$, $C(5,4)$, $D(1,3)$ as precisely as possible.`, "parallelogram", ["rectangle", "rhombus", "square"], "Slopes $\\frac14$, $3$, $\\frac14$, $3$; sides $\\sqrt{17}$ and $\\sqrt{10}$; no right angle."),
  num(`For $A(0,0)$, $B(4,1)$, $C(5,4)$, find the product of the slopes of $AB$ and $BC$.`, 0.75, "$\\frac14\\times3$ — not $-1$, so no right angle at $B$."),
  mc(`Classify $(-2,1)$, $(1,-2)$, $(4,1)$, $(1,4)$ as precisely as possible.`, "square", ["rectangle only", "rhombus only", "parallelogram only"], "Slopes $-1$ and $1$ alternate; all sides $\\sqrt{18}$."),
  tf(`The triangle $(0,0)$, $(2,4)$, $(6,2)$ has a right angle at $(2,4)$.`, true, "Slopes $2$ and $-\\frac12$."),
  ms(`Select all properties of the diagonals of a square.`, ["they are equal", "they are perpendicular", "they bisect each other", "they are parallel"], [0, 1, 2], "Square = rectangle + rhombus."),
  num(`Find the $x$-coordinate of the point where the diagonals of the parallelogram $(1,1)$, $(5,2)$, $(6,5)$, $(2,4)$ cross.`, 3.5, "Midpoint of $(1,1)$ and $(6,5)$."),
  mc(`Classify $(0,0)$, $(6,0)$, $(4,3)$, $(1,3)$.`, "trapezoid", ["parallelogram", "isosceles trapezoid", "kite"], "One pair of horizontal sides; legs $\\sqrt{10}$ and $\\sqrt{13}$ are unequal."),
  num(`Side $BC$ of a triangle runs from $(2,6)$ to $(8,-2)$. How long is the midsegment parallel to $BC$?`, 5, "$BC=10$; half of it."),
  tf(`If the diagonals of a quadrilateral bisect each other, it is a parallelogram.`, true, "This is a test for parallelograms."),
  num(`In a triangle, $B(1,5)$ and $C(7,2)$. What is the slope of the midsegment parallel to $BC$?`, -0.5, "Same as $BC$: $\\frac{-3}{6}$."),
  mc(`A quadrilateral with four equal sides and a right angle is a…`, "square", ["rhombus", "rectangle", "kite"], "Rhombus + right angle."),
  num(`Find the length of diagonal $AC$ of a rectangle with $A(0,0)$ and $C(6,8)$.`, 10, "$\\sqrt{36+64}$."),
  fill(`Kite $WXYZ$ has $W(0,4)$, $X(3,0)$, $Y(0,-6)$, $Z(-3,0)$. $WX=5$, so $ZW=$ ___.`, ["5"], "$\\sqrt{9+16}$."),
  tf(`The triangle $(-1,0)$, $(1,0)$, $(0,\\sqrt3)$ is equilateral.`, true, "Each side is $2$."),
  mc(`Which pair of slopes gives perpendicular lines?`, "$\\frac23$ and $-\\frac32$", ["$\\frac23$ and $\\frac32$", "$-\\frac23$ and $-\\frac32$", "$\\frac23$ and $-\\frac23$"], "Product $-1$."),
  num(`Find the perimeter of the rhombus $(0,3)$, $(4,0)$, $(0,-3)$, $(-4,0)$.`, 20, "Each side $5$."),
  mc(`An isosceles triangle has base vertices $(-3,0)$ and $(3,0)$. Which could be the third vertex?`, "$(0,5)$", ["$(1,5)$", "$(-2,4)$", "$(3,3)$"], "It must be on the right bisector $x=0$."),
  num(`$ABCD$ is a parallelogram with $A(0,0)$, $B(5,0)$, $C(7,3)$. What is the slope of side $DA$?`, 1.5, "$D(2,3)$; slope $\\frac32$, same as $BC$."),
  mc(`Classify the quadrilateral in the graph as precisely as possible.`, "parallelogram", ["rectangle", "rhombus", "trapezoid"], "Slopes $-\\frac15$, $2$, $-\\frac15$, $2$; sides $\\sqrt{26}$ and $\\sqrt{20}$.", quad([[-3, -1], [2, -2], [4, 2], [-1, 3]])),
];
