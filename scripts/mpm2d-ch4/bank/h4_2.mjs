// 4.2 Key Features of a Parabola — 20 hard questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { parDoc } from "./fig.mjs";

export const TOPIC = "4.2 Key Features of a Parabola";
export const Q = [
  num(`Find $b$ so that the vertex of $y=x^2+bx+10$ is at $x=-4$.`, 8, "$-\\frac b2=-4$."),
  num(`Find $k$ so that $y=x^2-8x+k$ has a vertex with $y$-coordinate 3.`, 19, "$16-32+k=3$."),
  num(`Find the $y$-coordinate of the vertex of $y=-2x^2+10x-7$.`, 5.5, "Axis $x=2.5$: $-12.5+25-7$."),
  mc(`What is the range of $y=3x^2-18x+20$?`, "$y\\ge-7$", ["$y\\le-7$", "$y\\ge3$", "$y\\ge20$"], "Vertex $(3,-7)$, opening up."),
  num(`A parabola has zeros $2$ and $8$ and maximum value $9$. Find its $y$-intercept.`, -16, "$y=a(x-2)(x-8)$; $9=a(3)(-3)\\Rightarrow a=-1$; $y(0)=-16$."),
  num(`A ball's height is $h=-5t^2+15t+20$. When does it hit the ground (s)?`, 4, "$-5(t-4)(t+1)=0$."),
  num(`What is the largest area of a rectangle with $60$ m of fencing (m²)?`, 225, "A $15$ by $15$ square."),
  tf(`The $y$-intercept of a parabola can also be its vertex.`, true, "When $b=0$, e.g. $y=x^2+3$."),
  ms(`Select all true statements about $y=-x^2+6x-9$.`, ["the vertex is $(3,0)$", "it has exactly one zero", "its range is $y\\le0$", "it opens up", "its $y$-intercept is 9"], [0, 1, 2], "$-(x-3)^2$; $y$-intercept $-9$."),
  num(`Find the distance between the zeros of $y=x^2-2x-24$.`, 10, "Zeros $6$ and $-4$."),
  num(`A parabola passes through $(-1,6)$, $(5,6)$ and $(0,1)$. Find the $y$-coordinate of its vertex.`, -3, "Axis $x=2$; $4a+k=1$, $9a+k=6$: $a=1$, $k=-3$."),
  mc(`A parabola with $a>0$ has vertex $(2,-3)$. How many zeros does it have?`, "2", ["0", "1", "it depends on b"], "A minimum below the $x$-axis."),
  num(`What is the smallest value of $x^2+4x+10$?`, 6, "At $x=-2$: $4-8+10$."),
  num(`A fountain's water follows $h=-2d^2+8d$. How far does the water travel horizontally?`, 4, "Zeros $0$ and $4$."),
  fill(`The maximum value of $y=-x^2-2x+8$ is ___`, ["9"], "At $x=-1$: $-1+2+8$."),
  num(`Find the area of the triangle formed by the zeros and the vertex of $y=x^2-6x+5$.`, 8, "Base $4$ (from 1 to 5), height $4$."),
  tf(`A parabola with vertex $(0,0)$ has $y$-intercept $0$.`, true, "The vertex is on the $y$-axis at the origin."),
  num(`For which $c$ does $y=-x^2+4x+c$ have a maximum value of 10?`, 6, "At $x=2$: $4+c=10$."),
  mc(`Which pair of points on $y=x^2-8x+7$ are mirror images across the axis?`, "$(1,0)$ and $(7,0)$", ["$(0,7)$ and $(4,-9)$", "$(2,-5)$ and $(5,-8)$", "$(3,-8)$ and $(4,-9)$"], "Axis $x=4$: $1$ and $7$ are equally far from it."),
  num(`What is the maximum value of the parabola shown?`, 4, "The vertex is $(-3,4)$.", parDoc((x) => -((x + 3) ** 2) + 4, [-5, -1], { xmin: -7, xmax: 1, ymin: -4, ymax: 6 })),
];
