// 2.1 Midpoint of a Line Segment — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

const seg = (a, b, extra = []) => planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, segs: [{ pts: [a, b], color: "violet" }], points: [{ x: a[0], y: a[1], label: `(${a[0]}, ${a[1]})`.replace(/-/g, "−"), color: "blue" }, { x: b[0], y: b[1], label: `(${b[0]}, ${b[1]})`.replace(/-/g, "−"), color: "red" }, ...extra], step: { x: 1, y: 1 } });

export const E = [
  num(`Find the $x$-coordinate of the midpoint of $(2,4)$ and $(8,10)$.`, 5, "$\\frac{2+8}{2}$."),
  num(`Find the $y$-coordinate of the midpoint of $(2,4)$ and $(8,10)$.`, 7, "$\\frac{4+10}{2}$."),
  mc(`What is the midpoint of $(0,0)$ and $(10,6)$?`, "$(5,3)$", ["$(10,6)$", "$(5,6)$", "$(3,5)$"], "Half of each coordinate."),
  num(`Find the $x$-coordinate of the midpoint of $(-4,1)$ and $(6,5)$.`, 1, "$\\frac{-4+6}{2}$."),
  num(`Find the $y$-coordinate of the midpoint of $(-3,-7)$ and $(1,-1)$.`, -4, "$\\frac{-7+(-1)}{2}$."),
  tf(`The midpoint of a segment always lies on the segment.`, true, "It is halfway along it."),
  mc(`Which is the midpoint formula?`, "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$", ["$\\left(\\frac{x_2-x_1}{2},\\frac{y_2-y_1}{2}\\right)$", "$(x_1+x_2,\\ y_1+y_2)$", "$\\left(\\frac{x_1+y_1}{2},\\frac{x_2+y_2}{2}\\right)$"], "Average the x-coordinates and the y-coordinates."),
  num(`Find the $x$-coordinate of the midpoint of $(-5,2)$ and $(-1,2)$.`, -3, "$\\frac{-5+(-1)}{2}$."),
  num(`Find the $y$-coordinate of the midpoint of $(3,0)$ and $(3,8)$.`, 4, "$\\frac{0+8}{2}$."),
  tf(`The midpoint changes if you swap the two endpoints.`, false, "Addition does not depend on order."),
  fill(`The midpoint of $(1,1)$ and $(7,5)$ is $(4,$ ___$)$.`, ["3"], "$\\frac{1+5}{2}$."),
  num(`Find the $x$-coordinate of the midpoint of $(-2,3)$ and $(3,-3)$.`, 0.5, "$\\frac{-2+3}{2}=\\frac12$."),
  mc(`The centre of a circle is the midpoint of…`, "any diameter", ["any chord", "any radius", "the circumference"], "A diameter passes through the centre."),
  num(`$M(4,2)$ is the midpoint of $AB$ with $A(2,1)$. What is the $x$-coordinate of $B$?`, 6, "$2(4)-2$."),
  num(`$M(4,2)$ is the midpoint of $AB$ with $A(2,1)$. What is the $y$-coordinate of $B$?`, 3, "$2(2)-1$."),
  tf(`The midpoint of $(-6,4)$ and $(6,-4)$ is the origin.`, true, "$\\left(\\frac{0}{2},\\frac{0}{2}\\right)$."),
  mc(`To bisect a segment means to…`, "cut it into two equal parts", ["make it twice as long", "draw it at a right angle", "extend it past an endpoint"], "Bi = two."),
  num(`Find the $x$-coordinate of the midpoint of $(10,-2)$ and $(-4,8)$.`, 3, "$\\frac{10+(-4)}{2}$."),
  num(`Find the $y$-coordinate of the midpoint of $(10,-2)$ and $(-4,8)$.`, 3, "$\\frac{-2+8}{2}$."),
  mc(`What is the midpoint of the segment shown?`, "$(-1,1)$", ["$(1,-1)$", "$(-1,2)$", "$(-2,1)$"], "Average $(-4,-2)$ and $(2,4)$.", seg([-4, -2], [2, 4])),
];

export const M = [
  num(`Find the $x$-coordinate of the midpoint of $(-7,3)$ and $(2,-8)$.`, -2.5, "$\\frac{-5}{2}$."),
  num(`Find the $y$-coordinate of the midpoint of $(-7,3)$ and $(2,-8)$.`, -2.5, "$\\frac{3+(-8)}{2}$."),
  mc(`$M(-1,2)$ is the midpoint of $AB$ with $A(3,-4)$. Find $B$.`, "$(-5,8)$", ["$(1,-1)$", "$(-4,6)$", "$(5,-10)$"], "$B=2M-A$."),
  num(`$M(0,-3)$ is the midpoint of $AB$ with $A(-4,5)$. What is the $y$-coordinate of $B$?`, -11, "$2(-3)-5$."),
  num(`A diameter of a circle joins $(-9,4)$ and $(3,-6)$. What is the $x$-coordinate of the centre?`, -3, "$\\frac{-9+3}{2}$."),
  num(`$ABCD$ is a parallelogram with $A(1,1)$, $B(5,2)$, $C(6,6)$. What is the $y$-coordinate of $D$?`, 5, "$D=A+C-B=(2,5)$."),
  ms(`Select all segments whose midpoint is $(2,1)$.`, ["$(0,0)$ and $(4,2)$", "$(-1,3)$ and $(5,-1)$", "$(2,0)$ and $(2,2)$", "$(1,1)$ and $(3,2)$", "$(4,1)$ and $(0,-1)$"], [0, 1, 2], "$(1,1),(3,2)$ gives $(2,1.5)$; $(4,1),(0,-1)$ gives $(2,0)$."),
  num(`The midpoint of $(k,4)$ and $(6,-2)$ is $(1,1)$. Find $k$.`, -4, "$\\frac{k+6}{2}=1$."),
  tf(`The diagonals of $ABCD$ with $A(0,0)$, $B(4,0)$, $C(5,3)$, $D(1,3)$ bisect each other.`, true, "Both diagonals have midpoint $(2.5,1.5)$."),
  num(`Find the $y$-coordinate of the point one quarter of the way from $(0,0)$ to $(8,12)$.`, 3, "Midpoint $(4,6)$; midpoint of the first half $(2,3)$."),
  mc(`In the right triangle $(0,0)$, $(6,0)$, $(0,8)$, what is the midpoint of the hypotenuse?`, "$(3,4)$", ["$(3,0)$", "$(0,4)$", "$(2,2.7)$"], "Hypotenuse from $(6,0)$ to $(0,8)$."),
  fill(`A circle has centre $(2,-1)$ and one end of a diameter at $(5,3)$. The other end is $(-1,$ ___$)$.`, ["-5"], "$2(-1)-3$."),
  num(`$M(a,3)$ is the midpoint of $(1,5)$ and $(7,1)$. Find $a$.`, 4, "$\\frac{1+7}{2}$."),
  mc(`In which quadrilateral do the diagonals always bisect each other?`, "parallelogram", ["trapezoid", "kite", "any quadrilateral"], "A rectangle, rhombus and square are special parallelograms."),
  num(`Find the $x$-coordinate of the midpoint of $\\left(\\frac12,3\\right)$ and $\\left(\\frac52,7\\right)$.`, 1.5, "$\\frac{3}{2}$."),
  tf(`If $M$ is the midpoint of $AB$, then $AM=MB$.`, true, "That is what midpoint means."),
  num(`Find the $x$-coordinate of the midpoint of $(-3.5,2)$ and $(1.5,-6)$.`, -1, "$\\frac{-2}{2}$."),
  mc(`$ABCD$ is a parallelogram. Use the graph to find $D$.`, "$(-2,2)$", ["$(-2,3)$", "$(10,0)$", "$(2,-2)$"], "$D=A+C-B=(-3+4-3,\\ -2+3+1)$.", planeDoc({ view: { xmin: -5, xmax: 6, ymin: -4, ymax: 5 }, segs: [{ pts: [[-3, -2], [3, -1], [4, 3]], color: "green" }], points: [{ x: -3, y: -2, label: "A(−3, −2)" }, { x: 3, y: -1, label: "B(3, −1)" }, { x: 4, y: 3, label: "C(4, 3)" }], step: { x: 1, y: 1 } })),
  num(`$(0.5,-1)$ is the midpoint of $AB$ with $A(-2,3)$. What is the $x$-coordinate of $B$?`, 3, "$2(0.5)-(-2)$."),
  num(`$(0.5,-1)$ is the midpoint of $AB$ with $A(-2,3)$. What is the $y$-coordinate of $B$?`, -5, "$2(-1)-3$."),
];
