// 2.2 Length of a Line Segment — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

const seg = (a, b) => planeDoc({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 7 }, segs: [{ pts: [a, b], color: "violet" }], points: [{ x: a[0], y: a[1], label: `(${a[0]}, ${a[1]})`.replace(/-/g, "−"), color: "blue" }, { x: b[0], y: b[1], label: `(${b[0]}, ${b[1]})`.replace(/-/g, "−"), color: "red" }], step: { x: 1, y: 1 } });

export const E = [
  num(`Find the length from $(0,0)$ to $(3,4)$.`, 5, "$\\sqrt{9+16}$."),
  num(`Find the length from $(1,1)$ to $(4,5)$.`, 5, "$\\Delta x=3$, $\\Delta y=4$."),
  num(`Find the length from $(2,3)$ to $(2,10)$.`, 7, "Vertical: $10-3$."),
  num(`Find the length from $(-4,6)$ to $(5,6)$.`, 9, "Horizontal: $5-(-4)$."),
  num(`Find the length from $(0,0)$ to $(6,8)$.`, 10, "$\\sqrt{36+64}$."),
  mc(`Which is the length formula?`, "$\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$", ["$(x_2-x_1)+(y_2-y_1)$", "$\\frac{y_2-y_1}{x_2-x_1}$", "$\\sqrt{(x_2+x_1)^2+(y_2+y_1)^2}$"], "Pythagoras on the grid."),
  num(`Find the length from $(-1,-1)$ to $(5,7)$.`, 10, "$\\Delta x=6$, $\\Delta y=8$."),
  tf(`A length found with the distance formula can be negative.`, false, "A square root is never negative."),
  num(`Find the length from $(0,0)$ to $(5,12)$.`, 13, "$\\sqrt{25+144}$."),
  mc(`What is the exact length from $(0,0)$ to $(1,1)$?`, "$\\sqrt2$", ["$2$", "$1$", "$\\sqrt{1}$"], "$\\sqrt{1+1}$."),
  num(`Find the length from $(3,-2)$ to $(3,4)$.`, 6, "Vertical: $4-(-2)$."),
  tf(`The length from $A$ to $B$ equals the length from $B$ to $A$.`, true, "Squaring removes the sign of each difference."),
  fill(`If $\\Delta x=6$ and $\\Delta y=8$, the length is ___.`, ["10"], "$\\sqrt{36+64}$."),
  num(`Find the length from $(-7,0)$ to $(-2,0)$.`, 5, "$-2-(-7)$."),
  mc(`The length formula comes from…`, "the Pythagorean theorem", ["the slope formula", "the midpoint formula", "the area of a rectangle"], "Run and rise are the legs."),
  num(`Find the length from $(1,2)$ to $(7,10)$.`, 10, "$\\sqrt{36+64}$."),
  num(`Find the length from $(-3,-4)$ to $(0,0)$.`, 5, "$\\sqrt{9+16}$."),
  tf(`The distance from $(0,0)$ to $(3,4)$ is $7$.`, false, "$\\sqrt{9+16}=5$, not $3+4$."),
  num(`Find the length from $(2,-1)$ to $(10,5)$.`, 10, "$\\sqrt{64+36}$."),
  num(`Find the length of the segment shown.`, 5, "$\\Delta x=4$, $\\Delta y=3$.", seg([-2, -1], [2, 2])),
];

export const M = [
  num(`Find the length from $(-3,2)$ to $(1,-1)$.`, 5, "$\\sqrt{16+9}$."),
  num(`Find the length from $(-2,-5)$ to $(4,3)$.`, 10, "$\\sqrt{36+64}$."),
  num(`Find the length from $(1,-4)$ to $(-4,8)$.`, 13, "$\\sqrt{25+144}$."),
  num(`Find the length from $(0,0)$ to $(2,3)$ to two decimal places.`, 3.61, "$\\sqrt{13}\\approx3.606$.", null, 0.01),
  num(`Find the length from $(-1,2)$ to $(3,-2)$ to two decimal places.`, 5.66, "$\\sqrt{32}\\approx5.657$.", null, 0.01),
  num(`Find the perimeter of the triangle with vertices $(0,0)$, $(3,0)$, $(0,4)$.`, 12, "$3+4+5$."),
  mc(`Which point is farthest from the origin?`, "$(5,8)$", ["$(6,-7)$", "$(-8,4)$", "$(-9,1)$"], "Squared distances: $89$, $85$, $80$, $82$."),
  num(`$(k,0)$ is $10$ units from $(2,6)$, with $k>0$. Find $k$.`, 10, "$(k-2)^2=64\\Rightarrow k=10$ or $k=-6$."),
  tf(`The triangle with vertices $(0,0)$, $(4,0)$, $(2,3)$ is isosceles.`, true, "Two sides are $\\sqrt{13}$."),
  ms(`Select all segments of length $5$.`, ["$(0,0)$ to $(3,4)$", "$(1,1)$ to $(4,-3)$", "$(-2,2)$ to $(3,2)$", "$(0,0)$ to $(4,4)$", "$(2,5)$ to $(2,0)$"], [0, 1, 2, 4], "$(0,0)$ to $(4,4)$ is $\\sqrt{32}$."),
  num(`A circle has centre $(1,1)$ and passes through $(4,5)$. Find its radius.`, 5, "$\\sqrt{9+16}$."),
  num(`Find the length from $(-6,-2)$ to $(2,4)$.`, 10, "$\\sqrt{64+36}$."),
  num(`Find the perimeter of the square with vertices $(0,0)$, $(3,1)$, $(2,4)$, $(-1,3)$, to two decimals.`, 12.65, "Each side $\\sqrt{10}$; $4\\sqrt{10}\\approx12.65$.", null, 0.01),
  mc(`What is the exact length from $(-1,-1)$ to $(1,3)$?`, "$2\\sqrt5$", ["$6$", "$2\\sqrt3$", "$\\sqrt{12}$"], "$\\sqrt{4+16}=\\sqrt{20}$."),
  num(`Find the length from $(2.5,1)$ to $(-0.5,5)$.`, 5, "$\\Delta x=-3$, $\\Delta y=4$."),
  tf(`The segment from $(1,2)$ to $(4,6)$ is as long as the segment from $(-3,0)$ to $(0,4)$.`, true, "Both have $\\Delta x=3$, $\\Delta y=4$."),
  num(`A point on the $x$-axis is $5$ units from $(3,4)$. Find the smaller possible $x$-coordinate.`, 0, "$(x-3)^2+16=25\\Rightarrow x=0$ or $x=6$."),
  mc(`Which point is closest to $(2,2)$?`, "$(6,2)$", ["$(5,6)$", "$(-1,-2)$", "$(2,7)$"], "Distances $4$, $5$, $5$, $5$."),
  num(`Find the length of a diagonal of the rectangle with vertices $(0,0)$, $(8,0)$, $(8,6)$, $(0,6)$.`, 10, "$\\sqrt{64+36}$."),
  num(`Read the endpoints from the graph and find the length of the segment.`, 10, "$\\Delta x=6$, $\\Delta y=8$.", planeDoc({ view: { xmin: -5, xmax: 5, ymin: -4, ymax: 8 }, segs: [{ pts: [[-3, -2], [3, 6]], color: "violet" }], points: [{ x: -3, y: -2, label: "(−3, −2)", color: "blue" }, { x: 3, y: 6, label: "(3, 6)", color: "red" }], step: { x: 1, y: 1 } })),
];
