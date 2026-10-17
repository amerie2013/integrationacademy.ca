// 4.3 Transformations & Vertex Form — 20 hard questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "4.3 Transformations & Vertex Form";
export const Q = [
  num(`A parabola has vertex $(-3,6)$ and passes through $(0,-12)$. Find $a$.`, -2, "$-12=9a+6$."),
  num(`Find the larger zero of $y=-2(x+3)^2+6$ (two decimals).`, -1.27, "$(x+3)^2=3$, $x=-3+\\sqrt3$.", null, 0.01),
  mc(`Under $y=-\\frac12(x-1)^2+3$, the point $(2,4)$ of $y=x^2$ moves to…`, "$(3,1)$", ["$(1,1)$", "$(3,5)$", "$(3,-1)$"], "$(2+1,\\ -\\frac12(4)+3)$."),
  num(`$y=-(x-2)^2+k$ has zeros $-1$ and $5$. Find $k$.`, 9, "$-(3)^2+k=0$."),
  num(`$y=(x-h)^2-16$ has a zero at $x=1$, and $h>1$. Find $h$.`, 5, "$(1-h)^2=16$."),
  tf(`Every parabola can be obtained from $y=x^2$ by a vertical stretch or reflection followed by translations.`, true, "That is what vertex form expresses."),
  num(`An arch is $y=-\\frac14(x-8)^2+16$. How wide is it at ground level?`, 16, "$(x-8)^2=64$: $x=0$ and $16$."),
  ms(`Select all transformations of $y=x^2$ that keep the axis of symmetry $x=0$.`, ["reflection in the x-axis", "vertical stretch", "translation up", "translation right", "translation left"], [0, 1, 2], "Horizontal translations move the axis."),
  num(`Find the area of the triangle formed by the zeros and vertex of $y=-2(x-1)^2+8$.`, 16, "Zeros $-1$, $3$ (base 4); height 8."),
  mc(`Reflect $y=2(x+1)^2-3$ in the $x$-axis. The result is…`, "$y=-2(x+1)^2+3$", ["$y=-2(x+1)^2-3$", "$y=2(x-1)^2-3$", "$y=-2(x-1)^2+3$"], "Change the sign of every $y$-value."),
  num(`$y=3(x-2)^2+1$ is translated down 4. What is the new optimal value?`, -3, "$1-4$."),
  fill(`$y=a(x-2)^2+k$ passes through $(2,-3)$ and $(0,5)$, so $a=$ ___`, ["2"], "$k=-3$; $4a-3=5$."),
  num(`What is the smallest whole number $x$ for which $(x-3)^2-20>0$ and $x>3$?`, 8, "$(x-3)^2>20$: $x-3>4.47$."),
  tf(`$y=(2x-6)^2$ has vertex $(3,0)$.`, true, "$(2x-6)^2=4(x-3)^2$."),
  mc(`$y=(2x-6)^2$ can also be written as…`, "$y=4(x-3)^2$", ["$y=2(x-3)^2$", "$y=(x-3)^2$", "$y=4(x-6)^2$"], "Factor 2 out of the bracket, then square it."),
  num(`At $x=1$, how far apart vertically are $y=(x-1)^2+2$ and $y=-(x-1)^2+10$?`, 8, "$10-2$."),
  num(`Where do $y=(x-1)^2+2$ and $y=-(x-1)^2+10$ meet? Give the larger $x$-value.`, 3, "$2(x-1)^2=8$: $x=3$ or $-1$."),
  mc(`The mapping rule for $y=-3(x+2)^2+5$ is…`, "$(x,y)\\to(x-2,\\ -3y+5)$", ["$(x,y)\\to(x+2,\\ -3y+5)$", "$(x,y)\\to(x-2,\\ 3y-5)$", "$(x,y)\\to(-3x-2,\\ y+5)$"], "$h=-2$, $a=-3$, $k=5$."),
  num(`$y=x^2$ is stretched by 3 and translated so its vertex is $(4,-12)$. Find the sum of its zeros.`, 8, "$3(x-4)^2=12$: zeros $2$ and $6$."),
  mc(`The dashed curve is $y=x^2$. Which equation describes the solid curve?`, "$y=-(x-3)^2+2$", ["$y=(x-3)^2+2$", "$y=-(x+3)^2+2$", "$y=-(x-2)^2+3$"], "Reflected, vertex $(3,2)$.", planeDoc({ view: { xmin: -3, xmax: 6, ymin: -5, ymax: 7 }, curves: [{ f: (x) => x * x, color: "gray" }, { f: (x) => -((x - 3) ** 2) + 2, color: "violet" }], points: [{ x: 3, y: 2, label: "(3, 2)", color: "blue" }], step: { x: 1, y: 1 } })),
];
