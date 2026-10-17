// 2.5 Verifying Geometric Properties — 20 hard questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "2.5 Verifying Geometric Properties";
export const Q = [
  mc(`Classify $(1,-2)$, $(5,1)$, $(2,5)$, $(-2,2)$ as precisely as possible.`, "square", ["rhombus only", "rectangle only", "kite"], "Sides $(4,3)$, $(-3,4)$, …: slopes $\\frac34$, $-\\frac43$; all lengths $5$."),
  num(`Find the area of the square $(1,-2)$, $(5,1)$, $(2,5)$, $(-2,2)$.`, 25, "Side $5$."),
  num(`$A(0,0)$, $B(6,0)$, $C(k,4)$, $D(1,4)$ form a parallelogram $ABCD$. Find $k$.`, 7, "$C=B+D-A$."),
  num(`Triangle $A(0,0)$, $B(6,0)$, $C(k,5)$ has $CA=CB$. Find $k$.`, 3, "$C$ is on the right bisector of $AB$."),
  num(`$A(-2,1)$, $B(1,3)$, $C(5,k)$ and $AB\\perp BC$. Find $k$.`, -3, "$m_{AB}=\\frac23$, so $\\frac{k-3}{4}=-\\frac32$."),
  ms(`For $A(-2,-1)$, $B(4,-3)$, $C(5,0)$, $D(-1,2)$, select all true statements.`, ["$ABCD$ is a parallelogram", "$ABCD$ is a rectangle", "$ABCD$ is a rhombus", "$ABCD$ is a square", "its diagonals are equal"], [0, 1, 4], "Slopes $-\\frac13$, $3$ alternate; sides $\\sqrt{40}$, $\\sqrt{10}$; diagonals both $\\sqrt{50}$."),
  num(`Triangle $A(-4,2)$, $B(6,8)$, $C(2,-4)$. Find the length of the segment joining the midpoints of $AB$ and $AC$ (two decimals).`, 6.32, "Midpoints $(1,5)$ and $(-1,-1)$: $\\sqrt{40}$ — half of $BC=\\sqrt{160}$.", null, 0.01),
  tf(`Joining the midpoints of the sides of a rectangle gives a rhombus.`, true, "The rectangle's diagonals are equal, so the new sides are equal."),
  num(`A rhombus has diagonals from $(0,-4)$ to $(0,4)$ and from $(-3,0)$ to $(3,0)$. Find its area.`, 24, "$\\frac{d_1d_2}{2}=\\frac{8\\times6}{2}$."),
  mc(`A quadrilateral's diagonals are equal and bisect each other but are not perpendicular. It is a…`, "rectangle", ["square", "rhombus", "kite"], "Bisecting → parallelogram; equal → rectangle; not perpendicular → not a square."),
  num(`$(x,5)$ makes a right angle with $(0,0)$ and $(10,0)$ at $(x,5)$. Find $x$.`, 5, "$\\frac5x\\cdot\\frac{5}{x-10}=-1\\Rightarrow x^2-10x+25=0$."),
  fill(`Parallelogram $ABCD$ has $A(-1,-2)$, $B(3,-1)$, $D(0,2)$. The $y$-coordinate of $C$ is ___.`, ["5"], "$C=B+D-A=(4,5)$."),
  num(`A triangle has perimeter $30$. What is the perimeter of the triangle formed by joining the midpoints of its sides?`, 15, "Each midsegment is half the parallel side."),
  tf(`A quadrilateral with perpendicular diagonals must be a rhombus.`, false, "A kite also has perpendicular diagonals."),
  mc(`Classify $(-2,0)$, $(2,0)$, $(3,3)$, $(-3,3)$.`, "isosceles trapezoid", ["parallelogram", "rectangle", "kite"], "Two horizontal sides; legs both $\\sqrt{10}$ with slopes $3$ and $-3$."),
  num(`$ABCD$ is a rhombus with $A(0,0)$, $B(3,4)$, $C(8,4)$. Find the $y$-coordinate of $D$.`, 0, "$D=A+C-B=(5,0)$; all sides $5$."),
  num(`Triangle $(0,0)$, $(8,0)$, $(2,6)$: find the length of the midsegment parallel to the side from $(8,0)$ to $(2,6)$ (two decimals).`, 4.24, "That side is $\\sqrt{72}$; half is $\\sqrt{18}$.", null, 0.01),
  ms(`In which quadrilaterals do the diagonals always bisect each other?`, ["parallelogram", "rectangle", "rhombus", "kite", "isosceles trapezoid"], [0, 1, 2], "Only the parallelogram family."),
  num(`What is the product of the slopes of the diagonals of a rhombus with no vertical diagonal?`, -1, "They are perpendicular."),
  mc(`Classify $WXYZ$ in the graph.`, "kite", ["rhombus", "parallelogram", "trapezoid"], "$WX=ZW=5$ and $XY=YZ=\\sqrt{80}$.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -7, ymax: 6 }, segs: [{ pts: [[0, 5], [4, 2], [0, -6], [-4, 2], [0, 5]], color: "green" }], points: [{ x: 0, y: 5, label: "W" }, { x: 4, y: 2, label: "X" }, { x: 0, y: -6, label: "Y" }, { x: -4, y: 2, label: "Z" }], step: { x: 1, y: 1 } })),
];
