// 2.1 Midpoint of a Line Segment — 20 hard questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "2.1 Midpoint of a Line Segment";
export const Q = [
  num(`Three points divide the segment from $(-8,-5)$ to $(8,11)$ into four equal parts. What is the $y$-coordinate of the one closest to $(8,11)$?`, 7, "Middle point $(0,3)$; then midpoint of $(0,3)$ and $(8,11)$ is $(4,7)$."),
  num(`The midpoint of $(3a,5)$ and $(a,b)$ is $(8,-1)$. Find $a+b$.`, -3, "$2a=8\\Rightarrow a=4$; $\\frac{5+b}{2}=-1\\Rightarrow b=-7$."),
  ms(`Three vertices of a parallelogram are $(1,2)$, $(5,3)$ and $(4,7)$. Select all possible fourth vertices.`, ["$(0,6)$", "$(2,-2)$", "$(8,8)$", "$(6,4)$", "$(-2,2)$"], [0, 1, 2], "Each pair of opposite vertices must share a midpoint: $A+C-B$, $A+B-C$, $B+C-A$."),
  num(`A circle has centre $(-1,4)$ and passes through $(3,1)$. What is the $x$-coordinate of the other end of the diameter through $(3,1)$?`, -5, "$2(-1)-3$."),
  num(`$A(-6,2)$, $B(10,-6)$. $M$ is the midpoint of $AB$ and $N$ the midpoint of $AM$. What is the $x$-coordinate of $N$?`, -2, "$M(2,-2)$; $N=\\left(\\frac{-6+2}{2},\\frac{2-2}{2}\\right)$."),
  num(`The midpoint of $AB$ is $(3,-2)$, $A$ is on the $x$-axis and $B$ is on the $y$-axis. What is the $y$-coordinate of $B$?`, -4, "$A(6,0)$, $B(0,-4)$."),
  tf(`Joining the midpoints of the sides of any quadrilateral always gives a parallelogram.`, true, "Each pair of opposite sides of the new figure is parallel to a diagonal of the original."),
  num(`$P$ is on the segment from $A(-2,-1)$ to $B(10,8)$ with $AP:PB=1:2$. What is the $x$-coordinate of $P$?`, 2, "$P=A+\\frac13(B-A)=(-2+4,\\ -1+3)$."),
  mc(`The ends of a diameter are $(a,3)$ and $(5,b)$, and the centre is $(1,-1)$. Find $a$ and $b$.`, "$a=-3$, $b=-5$", ["$a=3$, $b=5$", "$a=-4$, $b=-4$", "$a=-3$, $b=-1$"], "$\\frac{a+5}{2}=1$, $\\frac{3+b}{2}=-1$."),
  num(`A square has a diagonal from $(-3,1)$ to $(5,7)$. What is the $y$-coordinate of the square's centre?`, 4, "The diagonals bisect each other: $\\frac{1+7}{2}$."),
  num(`The midpoint of $(x,y)$ and $(3,-5)$ is the origin. Find $x+y$.`, 2, "$(x,y)=(-3,5)$."),
  fill(`A rhombus has vertices $(-4,0)$, $(0,3)$ and $(4,0)$. Its fourth vertex is $(0,$ ___$)$.`, ["-3"], "The diagonals bisect each other at $(0,0)$."),
  num(`A circle has centre $(2,-3)$; one end of a diameter is $(-4,5)$. What is the $y$-coordinate of the other end?`, -11, "$2(-3)-5$."),
  mc(`The midpoint of $AB$ lies on the $y$-axis. Which must be true?`, "$x_A=-x_B$", ["$y_A=-y_B$", "$x_A=x_B$", "$A$ is on the $y$-axis"], "The midpoint's $x$-coordinate $\\frac{x_A+x_B}{2}$ is $0$."),
  num(`The midpoints of the sides of $\\triangle ABC$ are $D(1,2)$ on $AB$, $E(4,3)$ on $BC$ and $F(2,5)$ on $CA$. What is the $x$-coordinate of $A$?`, -1, "$A=D+F-E=(-1,4)$."),
  tf(`The midpoint of $(a,b)$ and $(-a,-b)$ is always the origin.`, true, "$\\left(\\frac{0}{2},\\frac{0}{2}\\right)$."),
  num(`A dispatcher sends a tow truck halfway between two drivers at $(-3.5,6)$ and $(8.5,-2)$ (blocks). What is the $x$-coordinate of the meeting point?`, 2.5, "$\\frac{5}{2}$."),
  num(`$M(-1,-1)$ is the midpoint of $AB$ with $A(4,-7)$. Find the sum of the coordinates of $B$.`, -1, "$B=(-6,5)$."),
  mc(`Read the endpoints from the graph and find the midpoint.`, "$(-1,0)$", ["$(0,-1)$", "$(-1,1)$", "$(-4,3)$"], "Average $(-5,3)$ and $(3,-3)$.", planeDoc({ view: { xmin: -6, xmax: 5, ymin: -5, ymax: 5 }, segs: [{ pts: [[-5, 3], [3, -3]], color: "violet" }], points: [{ x: -5, y: 3, label: "(−5, 3)", color: "blue" }, { x: 3, y: -3, label: "(3, −3)", color: "red" }], step: { x: 1, y: 1 } })),
  num(`The midpoint of $A(2k,k+1)$ and $B(4,3k-1)$ is $(5,6)$. Find $k$.`, 3, "$\\frac{2k+4}{2}=5\\Rightarrow k=3$; check $\\frac{4k}{2}=6$ ✓"),
];
