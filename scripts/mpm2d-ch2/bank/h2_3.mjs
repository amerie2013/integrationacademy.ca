// 2.3 Equation of a Circle (centre at the origin) — 20 hard questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { circ } from "./em2_3.mjs";

export const TOPIC = "2.3 Equation of a Circle (centre at the origin)";
export const Q = [
  num(`Find the length of the chord of $x^2+y^2=25$ on the line $y=4$.`, 6, "$x^2=9$: from $(-3,4)$ to $(3,4)$."),
  num(`Find the length of the chord of $x^2+y^2=100$ on the line $x=-6$.`, 16, "$y^2=64$."),
  num(`Find the length of the chord of $x^2+y^2=72$ on the line $y=x$, to two decimals.`, 16.97, "$2x^2=72\\Rightarrow x=\\pm6$; $\\sqrt{288}$.", null, 0.01),
  num(`Two circles $x^2+y^2=25$ and $x^2+y^2=169$ form a ring. How wide is the ring?`, 8, "$13-5$."),
  num(`$(k,k)$ is on $x^2+y^2=32$ with $k>0$. Find $k$.`, 4, "$2k^2=32$."),
  ms(`A circle centred at the origin passes through $(-8,15)$. Select all other points on it.`, ["$(15,8)$", "$(0,17)$", "$(-17,0)$", "$(12,12)$", "$(10,14)$"], [0, 1, 2], "$r^2=289$; $(12,12)$ gives $288$; $(10,14)$ gives $296$."),
  num(`A router at the origin covers $15$ m. A laptop is at $(9,13)$. How many metres beyond the coverage edge is it (two decimals)?`, 0.81, "$\\sqrt{250}-15\\approx0.81$.", null, 0.01),
  tf(`The line $y=5$ touches $x^2+y^2=25$ at exactly one point.`, true, "Only $(0,5)$."),
  num(`For which positive $k$ does the line $x=k$ meet $x^2+y^2=36$ at exactly one point?`, 6, "It must touch at $(6,0)$."),
  mc(`A circle centred at the origin just touches the line $x=-4$. Its equation is…`, "$x^2+y^2=16$", ["$x^2+y^2=4$", "$x^2+y^2=-16$", "$x^2+y^2=8$"], "Radius $4$."),
  num(`$(a,2a)$ is on $x^2+y^2=45$ with $a>0$. Find $a$.`, 3, "$5a^2=45$."),
  num(`A circle centred at the origin passes through the midpoint of $(2,6)$ and $(6,8)$. Find its radius to two decimals.`, 8.06, "Midpoint $(4,7)$: $\\sqrt{65}$.", null, 0.01),
  fill(`$x^2+y^2=r^2$ passes through $(3,4)$ and $(-5,k)$. Then $k=$ ___.`, ["0"], "$r^2=25$, so $k^2=0$."),
  num(`What is the largest whole number $x$ for which $(x,0)$ is inside $x^2+y^2=50$?`, 7, "$49<50$ but $64>50$."),
  tf(`$(1,7)$, $(5,5)$ and $(-7,1)$ all lie on one circle centred at the origin.`, true, "Each gives $50$."),
  num(`A square with vertices $(5,5)$, $(-5,5)$, $(-5,-5)$, $(5,-5)$ is inscribed in $x^2+y^2=50$. Find its perimeter.`, 40, "Each side $10$."),
  mc(`Which circle has radius $2\\sqrt5$?`, "$x^2+y^2=20$", ["$x^2+y^2=10$", "$x^2+y^2=40$", "$x^2+y^2=2\\sqrt5$"], "$(2\\sqrt5)^2=20$."),
  num(`How many points with whole-number coordinates and $x=3$ lie strictly inside $x^2+y^2=25$?`, 7, "$y^2<16$: $y=-3,\\ldots,3$."),
  num(`A circle centred at the origin passes through $(-9,-12)$. How long is its diameter?`, 30, "$r=15$."),
  num(`Read the labelled point on the circle and find the radius.`, 10, "$\\sqrt{36+64}$.", planeDoc({ view: { xmin: -11, xmax: 11, ymin: -11, ymax: 11 }, curves: circ(10), points: [{ x: -6, y: 8, label: "(−6, 8)", color: "red" }], step: { x: 2, y: 2 } })),
];
