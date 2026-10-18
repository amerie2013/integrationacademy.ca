// 5.6 Linear–Quadratic Systems (enrichment) — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "5.6 Linear–Quadratic Systems";
export const Q = [
  num(`Find $k$ so that $y=-x+k$ is tangent to $y=x^2+3x$.`, -4, "$x^2+4x-k=0$: $16+4k=0$."),
  num(`Find the positive slope $m$ for which $y=mx-4$ is tangent to $y=x^2$.`, 4, "$x^2-mx+4=0$: $m^2-16=0$."),
  mc(`For which $k$ does $y=x+k$ meet $y=x^2$ at two points?`, "$k>-\\frac14$", ["$k<-\\frac14$", "$k>0$ only", "$k=-\\frac14$"], "$x^2-x-k=0$: $1+4k>0$."),
  num(`A ball follows $y=-0.1x^2+3x$ and lands on a hill $y=0.2x$ (metres). At what $x$ does it land?`, 28, "$-0.1x^2+2.8x=0$."),
  num(`A ball follows $y=-0.1x^2+3x$ and lands on a hill $y=0.2x$. At what height does it land (m)?`, 5.6, "$0.2\\times28$."),
  num(`Solve $y=2x^2-5x+1$ and $y=x-3$. Enter the $y$-coordinate of the point with the larger $x$.`, -1, "$2x^2-6x+4=0\\Rightarrow x^2-3x+2=0$: $x=2$, $y=-1$."),
  tf(`A vertical line $x=a$ meets the parabola $y=x^2+bx+c$ exactly once.`, true, "Each $x$ gives one $y$."),
  num(`Find the distance between the points where $y=x^2$ meets $y=4$.`, 4, "$(-2,4)$ and $(2,4)$."),
  num(`Find $c$ so that $y=x^2+c$ is tangent to $y=2x$.`, 1, "$x^2-2x+c=0$: $4-4c=0$."),
  ms(`Select all true statements about $y=x^2-4x+3$ and $y=x-1$.`, ["the combined equation is $x^2-5x+4=0$", "they meet at $(1,0)$ and $(4,3)$", "the line is tangent", "the combined discriminant is $9$", "one intersection point is on the x-axis"], [0, 1, 3, 4], "$(x-1)(x-4)=0$."),
  num(`How many intersection points do $y=x^2-6x+9$ and $y=-2$ have?`, 0, "The minimum of the parabola is $0$."),
  num(`$y=x^2$ and $y=x+2$ meet at the points shown. Find the distance between them to two decimal places.`, 4.24, "$\\sqrt{3^2+3^2}=\\sqrt{18}$.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x * x, color: "violet" }], lines: [{ m: 1, b: 2, color: "blue" }], points: [{ x: 2, y: 4, label: "(2, 4)", color: "red" }, { x: -1, y: 1, label: "(−1, 1)", color: "red" }], step: { x: 1, y: 1 } }), 0.01),
  mc(`For which slopes $m$ does $y=mx$ miss $y=x^2+2$ completely?`, "$-2\\sqrt2<m<2\\sqrt2$", ["$m>2\\sqrt2$", "$m=\\pm2\\sqrt2$", "$m<-2\\sqrt2$ or $m>2\\sqrt2$"], "$x^2-mx+2=0$: $m^2-8<0$."),
  num(`Find the $x$-coordinate of the midpoint of the two points where $y=x^2-3x+1$ meets $y=x+6$.`, 2, "$x^2-4x-5=0$: $x=5$, $x=-1$."),
  num(`Find $k$ so that $y=kx^2$ is tangent to $y=2x-1$.`, 1, "$kx^2-2x+1=0$: $4-4k=0$."),
  tf(`Two different lines can both be tangent to $y=x^2$ at the same point.`, false, "At each point there is only one tangent line."),
  num(`Revenue is $R=-x^2+40x$ and cost is $C=10x+125$. Find the larger break-even value of $x$.`, 25, "$-x^2+30x-125=0\\Rightarrow(x-5)(x-25)=0$."),
  num(`Revenue is $R=-x^2+40x$ and cost is $C=10x+125$. Find the smaller break-even value of $x$.`, 5, "$x=5$ or $25$."),
  num(`Find the product of the $x$-coordinates where $y=x^2-2x$ meets $y=2x-3$.`, 3, "$x^2-4x+3=0$: $1\\times3$."),
  num(`The line $y=2x+k$ is tangent to $y=x^2-1$. Find $k$.`, -2, "$x^2-2x-1-k=0$: $4+4(1+k)=0$."),
];
