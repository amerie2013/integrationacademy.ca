// 2.6 Problems Involving Lines & Line Segments — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  num(`Find the shortest distance from $(3,5)$ to the line $y=1$.`, 4, "Vertical distance: $5-1$."),
  num(`Find the shortest distance from $(-2,7)$ to the line $x=4$.`, 6, "Horizontal distance: $4-(-2)$."),
  mc(`The shortest distance from a point to a line is measured…`, "along the perpendicular", ["horizontally", "to the y-intercept", "to the nearest grid point"], "Any other path is a longer hypotenuse."),
  num(`How far is $(6,-3)$ from the $x$-axis?`, 3, "Distance to $y=0$."),
  num(`How far is $(-5,2)$ from the $y$-axis?`, 5, "Distance to $x=0$."),
  mc(`What is the slope of a line perpendicular to $y=3x+1$?`, "$-\\frac13$", ["$3$", "$-3$", "$\\frac13$"], "Negative reciprocal."),
  tf(`The foot of the perpendicular is where the perpendicular from the point meets the line.`, true, "That point is closest to the given point."),
  num(`How far is $(0,0)$ from the line $y=-6$?`, 6, "Vertical distance."),
  mc(`All points the same distance from $A$ and $B$ lie on…`, "the right bisector of $AB$", ["the segment $AB$", "a circle through $A$", "the line through $A$ parallel to $AB$"], "Equidistant points form the right bisector."),
  num(`Find the shortest distance from $(2,9)$ to the line $y=4$.`, 5, "$9-4$."),
  tf(`The right bisector of any chord of a circle passes through the centre.`, true, "The centre is equidistant from the chord's ends."),
  num(`How long is the chord of $x^2+y^2=25$ on the $x$-axis?`, 10, "It is a diameter: $2r$."),
  mc(`To find the distance from a point to a slanted line, the first step is to…`, "find the slope of a perpendicular", ["find the y-intercept", "measure with a ruler", "find the midpoint"], "Then write the perpendicular line."),
  fill(`A line perpendicular to $y=-2x+5$ has slope ___.`, ["0.5", "1/2"], "Negative reciprocal of $-2$."),
  num(`Find the shortest distance from $(-3,-4)$ to the line $x=-8$.`, 5, "$-3-(-8)$."),
  tf(`You can find the shortest distance from a point to a line by measuring to the line's y-intercept.`, false, "You must measure along the perpendicular."),
  num(`How long is the chord of $x^2+y^2=100$ on the line $y=8$?`, 12, "$x^2=36$."),
  mc(`To find the foot of a perpendicular algebraically, you…`, "solve a linear system", ["find a midpoint", "use the circle equation", "add the slopes"], "Intersect the line with the perpendicular."),
  num(`How far apart are the parallel lines $y=2$ and $y=9$?`, 7, "$9-2$."),
  num(`Find the shortest distance from $P$ to the line in the graph.`, 6, "The line is $y=-1$; $5-(-1)$.", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -3, ymax: 7 }, lines: [{ m: 0, b: -1, color: "violet" }], points: [{ x: 2, y: 5, label: "P(2, 5)", color: "red" }], step: { x: 1, y: 1 } })),
];

export const M = [
  num(`The perpendicular from $(0,0)$ to $y=x+2$ meets it at $F$. What is the $x$-coordinate of $F$?`, -1, "Perpendicular $y=-x$: $x+2=-x$."),
  num(`Find the shortest distance from $(0,0)$ to $y=x+2$ (two decimals).`, 1.41, "$F(-1,1)$: $\\sqrt2$.", null, 0.01),
  num(`The perpendicular from $(5,0)$ meets $y=2x$ at $F$. What is the $y$-coordinate of $F$?`, 2, "Perpendicular $y=-\\frac12x+\\frac52$: $2x=-\\frac12x+\\frac52\\Rightarrow x=1$."),
  num(`Find the shortest distance from $(5,0)$ to $y=2x$ (two decimals).`, 4.47, "$F(1,2)$: $\\sqrt{16+4}=\\sqrt{20}$.", null, 0.01),
  num(`Find the $x$-coordinate of the point on the $x$-axis equidistant from $(0,4)$ and $(6,2)$.`, 2, "Right bisector $y=3x-6$ meets $y=0$ at $x=2$."),
  num(`How long is the chord of $x^2+y^2=13$ on the line $x=2$?`, 6, "$y=\\pm3$."),
  mc(`Which line passes through $(1,4)$ perpendicular to $y=\\frac12x$?`, "$y=-2x+6$", ["$y=2x+2$", "$y=-\\frac12x+4.5$", "$y=-2x+4$"], "Slope $-2$: $4=-2+b$."),
  num(`Find the shortest distance from $(1,3)$ to $y=-x$ (two decimals).`, 2.83, "Perpendicular $y=x+2$ meets $y=-x$ at $(-1,1)$: $\\sqrt8$.", null, 0.01),
  tf(`The distance from $(3,4)$ to the line $y=x$ is $0$.`, false, "$(3,4)$ is not on $y=x$; the distance is $\\sqrt{0.5}$."),
  num(`Find the $y$-intercept of the right bisector of the segment from $(0,0)$ to $(4,8)$.`, 5, "Midpoint $(2,4)$, slope $-\\frac12$."),
  ms(`Select all points equidistant from $A(0,0)$ and $B(6,0)$.`, ["$(3,5)$", "$(3,-2)$", "$(6,3)$", "$(3,0)$", "$(0,3)$"], [0, 1, 3], "They lie on $x=3$."),
  num(`How far is the centre of $x^2+y^2=25$ from the chord joining $(-3,4)$ and $(3,4)$?`, 4, "The chord lies on $y=4$."),
  mc(`What is the foot of the perpendicular from $(3,1)$ to $y=x-4$?`, "$(4,0)$", ["$(3,-1)$", "$(2,-2)$", "$(5,1)$"], "Perpendicular $y=-x+4$: $x-4=-x+4$."),
  num(`Find the shortest distance from $(3,1)$ to $y=x-4$ (two decimals).`, 1.41, "Foot $(4,0)$: $\\sqrt2$.", null, 0.01),
  fill(`The shortest pipe from $(5,8)$ to the road $y=3$ meets the road at $(5,$ ___$)$.`, ["3"], "Straight down to the road."),
  num(`A chord of a circle of radius $13$ is $5$ units from the centre. How long is the chord?`, 24, "Half-chord $\\sqrt{169-25}=12$."),
  tf(`Two parallel lines are the same distance apart everywhere.`, true, "That is why the distance between them is well defined."),
  num(`How far apart are the lines $x=-3$ and $x=5$?`, 8, "$5-(-3)$."),
  mc(`The point equidistant from all three vertices of a triangle is the…`, "circumcentre", ["centroid", "orthocentre", "midpoint of a side"], "It lies on all three right bisectors."),
  num(`Find the shortest distance from $P$ to the line in the graph (two decimals).`, 4.24, "Line $y=-x+2$; perpendicular $y=x$ meets it at $(1,1)$: $\\sqrt{18}$.", null, 0.01),
].map((q, i) => (i === 19 ? { ...q, fig: planeDoc({ view: { xmin: -3, xmax: 6, ymin: -3, ymax: 6 }, lines: [{ m: -1, b: 2, color: "violet" }], points: [{ x: 4, y: 4, label: "P(4, 4)", color: "red" }], step: { x: 1, y: 1 } }) } : q));
