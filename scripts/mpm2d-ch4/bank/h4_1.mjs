// 4.1 Introducing Quadratic Relations — 20 hard questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "4.1 Introducing Quadratic Relations";
export const Q = [
  num(`For which $k$ is the table $y: 1,4,k,16$ (for $x=0,1,2,3$) quadratic?`, 9, "Second differences $k-7$ and $20-2k$ must be equal."),
  num(`The quadratic $y=ax^2+bx+c$ has values $0,-1,0,3$ at $x=0,1,2,3$. Find $a+b+c$.`, -1, "$a=1$, $c=0$, $b=-2$; or $y(1)=-1$."),
  num(`For $y=x^2$ with $x$-values $0,3,6,9$, what is the constant second difference?`, 18, "$2ad^2=2(1)(9)$."),
  mc(`Heights (m) at $t=0,\\ldots,5$ s are $1,11,17,19,17,11$. Which model fits?`, "$h=-2(t-3)^2+19$", ["$h=-4(t-3)^2+19$", "$h=-2(t-3)^2+17$", "$h=2(t-3)^2+19$"], "Second difference $-4$ gives $a=-2$; vertex $(3,19)$."),
  num(`Using $h=-2(t-3)^2+19$, predict the height at $t=6$ s.`, 1, "$-18+19$."),
  num(`Using $h=-2(t-3)^2+19$, when does the object reach the ground after $t=3$? (two decimals)`, 6.08, "$(t-3)^2=9.5$, $t=3+\\sqrt{9.5}$.", null, 0.01),
  tf(`If the third differences of a table are constant, the relation is quadratic.`, false, "Constant third differences indicate a cubic."),
  num(`A quadratic has $y=5,4,7$ at $x=0,1,2$. Find $y$ at $x=3$.`, 14, "Second difference 4: next first difference 7."),
  ms(`Select all relations with constant, non-zero second differences.`, ["$y=(x-3)^2$", "$y=2x+7$", "$y=x(x+1)$", "$y=5-x^2$", "$y=2^x$"], [0, 2, 3], "Quadratics only; $2x+7$ has second differences 0."),
  num(`Rectangles have perimeter $30$ m. What is the largest possible area (m²)?`, 56.25, "$A=w(15-w)$, largest at $w=7.5$."),
  num(`A farmer fences three sides of a rectangle against a wall with $40$ m of fence. What is the largest area (m²)?`, 200, "$A=x(40-2x)$, largest at $x=10$."),
  mc(`Data for a falling object have second differences of $-9.8$ (steps of 1 s). What is $a$?`, "$-4.9$", ["$-9.8$", "$-19.6$", "$4.9$"], "$2a=-9.8$."),
  num(`The table $y: 6,2,0,0,2,6$ (for $x=0,\\ldots,5$) is quadratic. Find $a$.`, 1, "Second differences 2."),
  fill(`For the table $y: 6,2,0,0,2,6$ (for $x=0,\\ldots,5$), the zeros are $x=2$ and $x=$ ___`, ["3"], "$y=0$ at $x=2$ and $x=3$."),
  num(`A quadratic passes through $(0,0)$, has second difference 6, and $y=5$ at $x=1$. Find $y$ at $x=4$.`, 56, "$a=3$, $b=2$: $48+8$."),
  tf(`Two different quadratic relations can have the same second difference.`, true, "Only $a$ is fixed; $b$ and $c$ can differ."),
  num(`The number of handshakes among $n$ people is $\\frac{n(n-1)}{2}$. How many for 10 people?`, 45, "$\\frac{10\\times9}{2}$."),
  mc(`Handshake counts $0,1,3,6,10$ for $1,2,3,4,5$ people form a relation that is…`, "quadratic", ["linear", "exponential", "neither"], "First differences $1,2,3,4$; second differences $1$."),
  num(`What is the second difference of the handshake counts $0,1,3,6,10$?`, 1, "First differences $1,2,3,4$."),
  num(`Estimate the maximum $y$-value of the data shown.`, 12, "The points peak at $(4,12)$, symmetric about $x=4$.", planeDoc({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 14 }, points: [[1, 3], [2, 8], [3, 11], [4, 12], [5, 11], [6, 8]].map(([x, y]) => ({ x, y, color: "blue" })), step: { x: 1, y: 2 } })),
];
