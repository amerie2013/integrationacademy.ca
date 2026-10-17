// 2.2 Length of a Line Segment — 20 hard questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "2.2 Length of a Line Segment";
export const Q = [
  num(`Find the perimeter of the triangle with vertices $(-2,-1)$, $(2,2)$, $(5,-2)$, to two decimals.`, 17.07, "Sides $5$, $5$, $\\sqrt{50}\\approx7.07$.", null, 0.01),
  num(`Find the $y$-coordinate of the point on the $y$-axis equidistant from $(-4,1)$ and $(2,5)$.`, 1.5, "$16+(y-1)^2=4+(y-5)^2\\Rightarrow8y=12$."),
  num(`$(k,3)$ is $10$ units from $(-1,-3)$. Find the sum of the possible values of $k$.`, -2, "$(k+1)^2=64\\Rightarrow k=7$ or $k=-9$."),
  ms(`Select all right triangles.`, ["$(0,0)$, $(3,0)$, $(0,5)$", "$(1,1)$, $(4,5)$, $(-3,4)$", "$(0,0)$, $(2,1)$, $(4,0)$", "$(-2,0)$, $(2,0)$, $(0,2)$", "$(0,0)$, $(1,3)$, $(4,1)$"], [0, 1, 3], "Test $a^2+b^2=c^2$ with squared side lengths."),
  num(`A ship sails from $(0,0)$ 5 km east, 12 km north, then 6 km west. How far is it from its start (km, two decimals)?`, 12.04, "End $(-1,12)$: $\\sqrt{145}$.", null, 0.01),
  num(`Find the perimeter of the quadrilateral with vertices $(-3,0)$, $(0,4)$, $(3,0)$, $(0,-4)$.`, 20, "Each side is $5$."),
  tf(`$(1,2)$, $(4,6)$ and $(7,10)$ are collinear, because $AB+BC=AC$.`, true, "$5+5=10$."),
  num(`$(4,y)$ is $13$ units from $(-1,1)$. Find the larger value of $y$.`, 13, "$25+(y-1)^2=169\\Rightarrow y-1=\\pm12$."),
  num(`A circle centred at $(-5,12)$ passes through the origin. Find its radius.`, 13, "$\\sqrt{25+144}$."),
  mc(`Which point is the same distance from $(0,0)$ and $(6,0)$?`, "$(3,7)$", ["$(2,7)$", "$(6,3)$", "$(0,3)$"], "It must have $x=3$."),
  num(`One side of a square runs from $(1,2)$ to $(4,6)$. Find the area of the square.`, 25, "Side $5$."),
  fill(`One side of a square runs from $(0,0)$ to $(2,2)$. Its diagonal is ___ units long.`, ["4"], "Side $\\sqrt8$; diagonal $\\sqrt8\\cdot\\sqrt2=4$."),
  num(`Find the perimeter of $\\triangle ABC$ with $A(-4,-3)$, $B(4,3)$, $C(4,-3)$.`, 24, "$10+6+8$."),
  num(`$(2k,k)$ is $10$ units from the origin, with $k>0$. Find $k$ to two decimals.`, 4.47, "$5k^2=100\\Rightarrow k=\\sqrt{20}$.", null, 0.01),
  tf(`An equilateral triangle can have all three vertices at whole-number grid points.`, false, "Its area would be $\\frac{\\sqrt3}{4}s^2$ with $s^2$ a whole number — irrational — but a triangle with grid-point vertices always has an area that is a multiple of $\\frac12$."),
  num(`Find the distance from the midpoint of $(-2,4)$ and $(6,-2)$ to $(5,5)$.`, 5, "Midpoint $(2,1)$; $\\sqrt{9+16}$."),
  mc(`Classify the triangle $(0,0)$, $(5,0)$, $(1,3)$ by its sides.`, "isosceles", ["equilateral", "scalene", "right isosceles"], "Sides $5$, $\\sqrt{10}$, $5$."),
  num(`Find the total length of the path $(0,0)\\to(3,4)\\to(3,10)\\to(-5,4)$.`, 21, "$5+6+10$."),
  num(`$P(x,x)$ is the same distance from $(0,4)$ and $(6,0)$. Find $x$.`, 5, "$x^2+(x-4)^2=(x-6)^2+x^2\\Rightarrow4x=20$."),
  num(`Find the length $AB$ in the graph.`, 10, "$\\Delta x=8$, $\\Delta y=-6$.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -7, ymax: 3 }, segs: [{ pts: [[-4, 1], [4, -5]], color: "violet" }], points: [{ x: -4, y: 1, label: "A(−4, 1)", color: "blue" }, { x: 4, y: -5, label: "B(4, −5)", color: "red" }], step: { x: 1, y: 1 } })),
];
