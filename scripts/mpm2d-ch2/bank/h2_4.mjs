// 2.4 Medians, Right Bisectors & Altitudes — 20 hard questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "2.4 Medians, Right Bisectors & Altitudes";
const T = "$\\triangle PQR$ with $P(-3,-1)$, $Q(5,3)$, $R(1,7)$";
export const Q = [
  num(`For ${T}, find the $x$-coordinate of the orthocentre (three decimals).`, 2.333, "Altitudes $y=-2x+9$ (from $R$) and $y=x+2$ (from $P$) meet at $\\left(\\frac73,\\frac{13}{3}\\right)$.", null, 0.001),
  num(`For ${T}, find the $y$-coordinate of the circumcentre (three decimals).`, 2.333, "Right bisectors $y=-2x+3$ and $y=x+2$ meet at $\\left(\\frac13,\\frac73\\right)$.", null, 0.001),
  num(`For ${T}, find the $y$-coordinate of the centroid.`, 3, "$\\frac{-1+3+7}{3}$."),
  tf(`In every triangle that is not equilateral, the centroid, circumcentre and orthocentre lie on one straight line.`, true, "This is the Euler line."),
  num(`For ${T}, find the radius of the circle through $P$, $Q$ and $R$ (two decimals).`, 4.71, "Circumcentre $\\left(\\frac13,\\frac73\\right)$; $r^2=\\left(\\frac{10}{3}\\right)^2\\cdot2=\\frac{200}{9}$.", null, 0.01),
  mc(`Triangle $A(0,0)$, $B(6,0)$, $C(3,5)$. What is the median from $C$?`, "$x=3$", ["$y=3$", "$y=\\frac53x$", "$x=6$"], "The midpoint of $AB$ is $(3,0)$, directly below $C$."),
  num(`The median from $A(0,0)$ to $BC$, with $B(4,k)$ and $C(6,2)$, has slope $1$. Find $k$.`, 8, "Midpoint $\\left(5,\\frac{k+2}{2}\\right)$ must have $\\frac{k+2}{2}=5$."),
  num(`Find the length of the altitude from $A(2,8)$ to $BC$ with $B(-2,0)$, $C(6,4)$ (two decimals).`, 5.37, "Altitude $y=-2x+12$ meets $BC$ ($y=\\frac12x+1$) at $(4.4,3.2)$; $\\sqrt{28.8}$.", null, 0.01),
  num(`Find the area of $\\triangle ABC$ with $A(2,8)$, $B(-2,0)$, $C(6,4)$ using base $BC$ and the altitude from $A$.`, 24, "$\\frac12\\sqrt{80}\\sqrt{28.8}=\\frac12\\sqrt{2304}=24$."),
  ms(`Which points are always inside a triangle?`, ["the centroid", "the circumcentre", "the orthocentre", "the intersection of two medians"], [0, 3], "The circumcentre and orthocentre can be outside an obtuse triangle."),
  num(`The centroid of $(a,0)$, $(0,6)$, $(9,3)$ is $(4,3)$. Find $a$.`, 3, "$\\frac{a+9}{3}=4$."),
  num(`Find the $x$-intercept of the right bisector of the segment from $(2,-3)$ to $(6,5)$.`, 6, "Midpoint $(4,1)$, slope $-\\frac12$: $y=-\\frac12x+3$."),
  tf(`The right bisector of the hypotenuse of any right triangle passes through the right-angle vertex.`, false, "Only if the triangle is isosceles."),
  num(`Triangle $A(0,0)$, $B(10,0)$, $C(4,6)$. Find the $y$-coordinate of the orthocentre.`, 4, "Altitude from $C$: $x=4$; altitude from $A$ ($\\perp BC$, slope $1$): $y=x$."),
  fill(`Triangle $A(0,0)$, $B(10,0)$, $C(4,6)$: the circumcentre has $x=$ ___.`, ["5"], "The right bisector of $AB$ is $x=5$."),
  num(`Triangle $A(0,0)$, $B(10,0)$, $C(4,6)$: find the $y$-coordinate of the circumcentre.`, 1, "Right bisector of $AC$: through $(2,3)$, slope $-\\frac23$; at $x=5$, $y=1$."),
  mc(`Which kind of triangle has its circumcentre on one of its sides?`, "a right triangle", ["an acute triangle", "an obtuse triangle", "an equilateral triangle"], "The circumcentre is the midpoint of the hypotenuse."),
  num(`The median from $A$ lies on $y=2x+1$ and passes through the midpoint $(3,k)$ of $BC$. Find $k$.`, 7, "$2(3)+1$."),
  num(`Find the $y$-coordinate of the centroid of $(-4,0)$, $(4,0)$, $(0,8)$ (three decimals).`, 2.667, "$\\frac83$.", null, 0.001),
  num(`In the triangle shown, how long is the altitude from $C$?`, 6, "$AB$ is on the $x$-axis and $C$ is 6 units above it.", planeDoc({ view: { xmin: -1, xmax: 11, ymin: -1, ymax: 7 }, segs: [{ pts: [[0, 0], [10, 0], [4, 6], [0, 0]], color: "gray" }, { pts: [[4, 6], [4, 0]], color: "red" }], points: [{ x: 0, y: 0, label: "A(0, 0)" }, { x: 10, y: 0, label: "B(10, 0)" }, { x: 4, y: 6, label: "C(4, 6)" }], step: { x: 1, y: 1 } })),
];
