// 2.6 Problems Involving Lines & Line Segments — 20 hard questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "2.6 Problems Involving Lines & Line Segments";
export const Q = [
  num(`Find the shortest distance from $(7,6)$ to $3x+4y=12$.`, 6.6, "Perpendicular through $(7,6)$, intersect, measure: $\\frac{|21+24-12|}{5}=\\frac{33}{5}$."),
  num(`Find the shortest distance from $(-1,-2)$ to $4x-3y=-8$.`, 2, "$\\frac{|-4+6+8|}{5}$."),
  num(`Find the shortest distance from $(2,3)$ to $x+y=10$ (two decimals).`, 3.54, "Perpendicular $y=x+1$ meets the line at $(4.5,5.5)$: $\\sqrt{12.5}$.", null, 0.01),
  num(`Find the $x$-coordinate of the point on $y=2x+1$ closest to $(6,3)$.`, 2, "Perpendicular $y=-\\frac12x+6$: $2x+1=-\\frac12x+6$."),
  num(`Find the distance between the parallel lines $y=x+1$ and $y=x-5$ (two decimals).`, 4.24, "From $(0,1)$: foot $(3,-2)$; $\\sqrt{18}$.", null, 0.01),
  num(`Find the radius of the circle through $(0,0)$, $(6,0)$ and $(0,8)$.`, 5, "Circumcentre $(3,4)$."),
  num(`Find the area of the triangle $(0,0)$, $(4,8)$, $(8,2)$.`, 28, "Base from $(0,0)$ to $(4,8)$ is $\\sqrt{80}$; height from $(8,2)$ to $y=2x$ is $\\frac{14}{\\sqrt5}$; $\\frac12\\cdot\\sqrt{80}\\cdot\\frac{14}{\\sqrt5}=28$."),
  ms(`Select all points exactly $5$ units from the line $y=2$.`, ["$(0,7)$", "$(3,-3)$", "$(5,2)$", "$(-1,7)$", "$(2,5)$"], [0, 1, 3], "$y=7$ or $y=-3$."),
  num(`How long is the chord of $x^2+y^2=58$ on the line $x=3$?`, 14, "$y^2=49$."),
  num(`$(-7,1)$ and $(1,7)$ lie on $x^2+y^2=50$. How far is the chord joining them from the centre?`, 5, "Midpoint $(-3,4)$; $\\sqrt{9+16}$."),
  tf(`The distance from $(a,b)$ to the $x$-axis is $|b|$.`, true, "The perpendicular is vertical."),
  num(`Find the $y$-coordinate of the point on the $y$-axis equidistant from $(-2,-1)$ and $(4,3)$.`, 2.5, "Right bisector $y=-\\frac32x+\\frac52$."),
  mc(`A swimmer moves along $y=-x+6$. A lifeguard is at the origin. Where is the swimmer closest to the lifeguard?`, "$(3,3)$", ["$(0,6)$", "$(6,0)$", "$(2,4)$"], "Perpendicular $y=x$ meets the path at $(3,3)$."),
  num(`A swimmer moves along $y=-x+6$; a lifeguard is at the origin. What is the closest distance (two decimals)?`, 4.24, "$\\sqrt{9+9}$.", null, 0.01),
  fill(`The distance from $(4,k)$ to the line $y=1$ is $6$, with $k>1$. Then $k=$ ___.`, ["7"], "$k-1=6$."),
  num(`The distance from $(k,0)$ to the line $x=2$ is $5$, with $k<2$. Find $k$.`, -3, "$2-k=5$."),
  num(`$(5,5)$ and $(7,-1)$ lie on $x^2+y^2=50$. Find the slope of the right bisector of the chord joining them (three decimals).`, 0.333, "Chord slope $-3$; bisector $y=\\frac13x$ passes through the centre.", null, 0.001),
  mc(`Which line is exactly $3$ units from the origin?`, "$y=3$", ["$y=x+3$", "$x+y=3$", "$y=3x$"], "$y=x+3$ is $\\frac{3}{\\sqrt2}$ away; $y=3x$ passes through the origin."),
  num(`Find the $y$-intercept of the line of points equidistant from $(1,1)$ and $(5,5)$.`, 6, "Midpoint $(3,3)$, slope $-1$."),
  num(`Use the graph: how far is $P$ from the line, measured along the perpendicular (two decimals)?`, 4.47, "Line $y=\\frac12x+2$; perpendicular $y=-2x+2$ meets it at $(0,2)$; $\\sqrt{4+16}$.", planeDoc({ view: { xmin: -5, xmax: 5, ymin: -2, ymax: 8 }, lines: [{ m: 0.5, b: 2, color: "violet" }], points: [{ x: -2, y: 6, label: "P(−2, 6)", color: "red" }], step: { x: 1, y: 1 } }), 0.01),
];
