// 4.2 Key Features of a Parabola — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { parDoc } from "./fig.mjs";

export const E = [
  mc(`The turning point of a parabola is called the…`, "vertex", ["axis", "zero", "intercept"], "Its maximum or minimum point."),
  num(`Find the axis of symmetry of $y=x^2-6x+1$ (the value of $x$).`, 3, "$-\\frac{-6}{2}$."),
  num(`Find the $y$-intercept of $y=2x^2-5x+7$.`, 7, "Set $x=0$."),
  mc(`A parabola with $a=-2$…`, "opens down and has a maximum", ["opens up and has a minimum", "opens down and has a minimum", "is a straight line"], "$a<0$."),
  tf(`Every parabola has two zeros.`, false, "It can have two, one or none."),
  num(`A parabola has zeros $2$ and $10$. Find its axis (the value of $x$).`, 6, "Halfway."),
  mc(`The domain of $y=ax^2+bx+c$ is…`, "all real numbers", ["$x\\ge0$", "$y\\ge0$", "the zeros"], "Any $x$ can be substituted."),
  num(`Find the $y$-coordinate of the vertex of $y=x^2-4$.`, -4, "Vertex $(0,-4)$."),
  num(`Find the positive zero of $y=x^2-16$.`, 4, "$x^2=16$."),
  tf(`The $y$-intercept is the value of $y$ when $x=0$.`, true, "Where the graph meets the $y$-axis."),
  mc(`Does $y=3x^2+2x-1$ have a maximum or a minimum?`, "minimum", ["maximum", "neither", "both"], "$a=3>0$."),
  num(`Find the axis of symmetry of $y=x^2+12x$ (the value of $x$).`, -6, "$-\\frac{12}{2}$."),
  fill(`The axis of symmetry of $y=x^2-2x+5$ is $x=$ ___`, ["1"], "$-\\frac{-2}{2}$."),
  num(`Find the $x$-coordinate of the vertex of $y=-x^2+8x$.`, 4, "$-\\frac{8}{2(-1)}$."),
  tf(`The range of $y=x^2+3$ is $y\\ge3$.`, true, "Minimum value 3."),
  mc(`$(1,4)$ and $(5,4)$ are on a parabola. Its axis is…`, "$x=3$", ["$x=4$", "$x=2$", "$y=4$"], "Halfway between 1 and 5."),
  num(`Find the optimal value of $y=x^2-10x+30$.`, 5, "At $x=5$: $25-50+30$."),
  mc(`The zeros of a parabola are also called its…`, "x-intercepts", ["y-intercepts", "vertices", "axes"], "Where $y=0$."),
  num(`Find the $y$-intercept of $y=-x^2+3x-9$.`, -9, "The constant term."),
  mc(`What is the vertex of the parabola shown?`, "$(2,-1)$", ["$(-1,2)$", "$(2,1)$", "$(1,0)$"], "The lowest point.", parDoc((x) => (x - 2) ** 2 - 1, [1, 3], { xmin: -1, xmax: 5, ymin: -2, ymax: 6 })),
];

export const M = [
  num(`Find the $y$-coordinate of the vertex of $y=2x^2-8x+3$.`, -5, "Axis $x=2$: $8-16+3$."),
  num(`Find the $y$-coordinate of the vertex of $y=-3x^2-6x+1$.`, 4, "Axis $x=-1$: $-3+6+1$."),
  mc(`What is the range of $y=-x^2+4x$?`, "$y\\le4$", ["$y\\ge4$", "$y\\le2$", "all real numbers"], "Vertex $(2,4)$, opening down."),
  num(`Find the larger zero of $y=x^2-5x-14$.`, 7, "$(x-7)(x+2)$."),
  num(`Find the axis of symmetry of $y=4x^2+16x-3$ (the value of $x$).`, -2, "$-\\frac{16}{8}$."),
  tf(`$y=-2x^2+3$ has two zeros.`, true, "It opens down from a maximum of 3 above the axis."),
  num(`$(-5,8)$ and $(1,8)$ are on a parabola. Find its axis (the value of $x$).`, -2, "$\\frac{-5+1}{2}$."),
  ms(`Select all features of $y=x^2-4x+3$.`, ["vertex $(2,-1)$", "zeros 1 and 3", "$y$-intercept 3", "a maximum value", "axis $x=-2$"], [0, 1, 2], "$a>0$ gives a minimum; axis $x=2$."),
  num(`A ball's height is $h=-5t^2+20t$. Find its maximum height (m).`, 20, "$t=2$: $-20+40$."),
  num(`For $h=-4.9t^2+19.6t+1$, when is the height greatest (s)?`, 2, "$t=-\\frac{19.6}{2(-4.9)}$."),
  mc(`Find the vertex of $y=x^2+2x+5$.`, "$(-1,4)$", ["$(1,8)$", "$(-1,6)$", "$(-2,5)$"], "$1-2+5=4$."),
  num(`How many zeros does $y=x^2+2x+5$ have?`, 0, "The minimum value 4 is above the axis."),
  fill(`A parabola has zeros $-3$ and $7$. Its axis is $x=$ ___`, ["2"], "Halfway."),
  num(`For which $c$ does $y=x^2+6x+c$ touch the $x$-axis at exactly one point?`, 9, "Vertex $y=9-18+c=0$."),
  tf(`The axis of symmetry passes through the vertex.`, true, "The vertex is on the axis."),
  num(`Find the $y$-coordinate of the vertex of $y=0.5x^2-2x+1$.`, -1, "Axis $x=2$: $2-4+1$."),
  mc(`Which parabola has a maximum value of 5?`, "$y=-(x-1)^2+5$", ["$y=(x-1)^2+5$", "$y=-x^2-5$", "$y=5x^2$"], "Opens down with vertex height 5."),
  num(`A parabola with $a=1$ has zeros $-2$ and $3$. Find its $y$-intercept.`, -6, "$(x+2)(x-3)$ at $x=0$."),
  num(`A company's profit is $P=-x^2+14x-24$. Find the maximum profit.`, 25, "$x=7$: $-49+98-24$."),
  num(`Use the graph to find the axis of symmetry (the value of $x$).`, 2, "The zeros are $-1$ and $5$.", parDoc((x) => (x + 1) * (x - 5), [-1, 5], { xmin: -3, xmax: 7, ymin: -10, ymax: 8 }, { x: 1, y: 2 })),
];
