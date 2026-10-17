// 4.5 Factored Form & the Zeros — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { parDoc } from "./fig.mjs";

export const E = [
  num(`Find the positive zero of $y=(x-3)(x+5)$.`, 3, "$x-3=0$."),
  num(`Find the negative zero of $y=(x-3)(x+5)$.`, -5, "$x+5=0$."),
  num(`Find the axis of symmetry of $y=(x-2)(x-8)$ (the value of $x$).`, 5, "Halfway between 2 and 8."),
  mc(`What are the zeros of $y=(x+1)(x+7)$?`, "$-1$ and $-7$", ["$1$ and $7$", "$-1$ and $7$", "$1$ and $-7$"], "Opposite signs of the numbers in the brackets."),
  num(`Find the $y$-intercept of $y=(x-3)(x-4)$.`, 12, "$(-3)(-4)$."),
  tf(`$y=2(x-1)(x-5)$ has zeros $1$ and $5$.`, true, "The factor 2 does not change the zeros."),
  num(`Find the $y$-coordinate of the vertex of $y=(x-2)(x-4)$.`, -1, "Axis 3: $(1)(-1)$."),
  mc(`Factored form is written…`, "$y=a(x-r)(x-s)$", ["$y=a(x-h)^2+k$", "$y=ax^2+bx+c$", "$y=mx+b$"], "It shows the zeros $r$ and $s$."),
  num(`Find the axis of symmetry of $y=x(x-10)$ (the value of $x$).`, 5, "Zeros 0 and 10."),
  tf(`$y=(x+3)(x-3)$ has its axis at $x=0$.`, true, "Zeros $\\pm3$."),
  num(`Find the non-zero zero of $y=x(x+6)$.`, -6, "$x+6=0$."),
  mc(`Which parabola opens down?`, "$y=-(x-1)(x-5)$", ["$y=(x-1)(x-5)$", "$y=3(x+2)(x-4)$", "$y=x(x+1)$"], "$a<0$."),
  fill(`$y=(x-4)(x-$ ___$)$ has zeros $4$ and $9$.`, ["9"], "The second bracket gives 9."),
  num(`Find the $y$-intercept of $y=-(x+2)(x-5)$.`, 10, "$-(2)(-5)$."),
  num(`$y=(x-6)^2$ has one zero. What is it?`, 6, "Both factors give 6."),
  tf(`The vertex is halfway between the zeros (horizontally).`, true, "The axis is the midpoint."),
  num(`Find the axis of symmetry of $y=3(x+4)(x-2)$ (the value of $x$).`, -1, "$\\frac{-4+2}{2}$."),
  mc(`Which equation has zeros $2$ and $-3$ and $a=1$?`, "$y=(x-2)(x+3)$", ["$y=(x+2)(x-3)$", "$y=(x-2)(x-3)$", "$y=(x+2)(x+3)$"], "Zero 2 needs $(x-2)$."),
  num(`Find the $x$-coordinate of the vertex of $y=(x+5)(x+1)$.`, -3, "Halfway between $-5$ and $-1$."),
  mc(`Which equation could match the graph?`, "$y=(x+2)(x-4)$", ["$y=(x-2)(x+4)$", "$y=-(x+2)(x-4)$", "$y=(x+2)(x+4)$"], "Zeros $-2$ and $4$, opening up.", parDoc((x) => (x + 2) * (x - 4), [-2, 4], { xmin: -4, xmax: 6, ymin: -10, ymax: 8 }, { x: 1, y: 2 })),
];

export const M = [
  num(`Find the $y$-coordinate of the vertex of $y=(x+3)(x-5)$.`, -16, "Axis 1: $(4)(-4)$."),
  num(`Find the $y$-coordinate of the vertex of $y=-2(x-1)(x-5)$.`, 8, "Axis 3: $-2(2)(-2)$."),
  num(`Find the larger zero of $y=x^2-7x+10$.`, 5, "$(x-2)(x-5)$."),
  num(`Find the smaller zero of $y=2x^2-8x$.`, 0, "$2x(x-4)$."),
  num(`Find the positive zero of $y=x^2-25$.`, 5, "$(x-5)(x+5)$."),
  num(`A parabola has zeros $1$ and $4$ and passes through $(0,8)$. Find $a$.`, 2, "$8=a(-1)(-4)$."),
  mc(`A parabola has zeros $-1$ and $3$ and $y$-intercept $-6$. Its equation is…`, "$y=2(x+1)(x-3)$", ["$y=(x+1)(x-3)$", "$y=-2(x+1)(x-3)$", "$y=2(x-1)(x+3)$"], "$-6=a(1)(-3)$, $a=2$."),
  tf(`$y=-3(x-2)(x+2)$ has a maximum value of 12.`, true, "At $x=0$: $-3(-2)(2)=12$."),
  num(`Find the $y$-intercept of $y=4(x+1)(x-2)$.`, -8, "$4(1)(-2)$."),
  ms(`Select all parabolas with zeros $2$ and $6$.`, ["$y=(x-2)(x-6)$", "$y=-(x-2)(x-6)$", "$y=x^2-8x+12$", "$y=(x+2)(x+6)$", "$y=(x-4)^2-4$"], [0, 1, 2, 4], "$(x-4)^2-4=x^2-8x+12$."),
  num(`Find the $y$-coordinate of the vertex of $y=x^2-6x+8$.`, -1, "$(x-2)(x-4)$; axis 3."),
  num(`Find the larger zero of $y=3x^2+3x-18$.`, 2, "$3(x+3)(x-2)$."),
  fill(`$y=(2x-6)(x+1)$ has zeros $3$ and ___`, ["-1"], "$x+1=0$."),
  num(`An arch is $y=-0.5x(x-12)$. What is its maximum height?`, 18, "Axis 6: $-0.5(6)(-6)$."),
  mc(`Which form shows the zeros directly?`, "factored form", ["vertex form", "standard form", "none"], "$a(x-r)(x-s)$."),
  num(`A ball's height is $h=-5t(t-4)$. When does it land (s)?`, 4, "Zeros $0$ and $4$."),
  num(`For $h=-5t(t-4)$, what is the maximum height?`, 20, "$t=2$: $-5(2)(-2)$."),
  tf(`A parabola with zeros $0$ and $10$ has its axis at $x=5$.`, true, "The midpoint."),
  num(`A parabola has zeros $-2$ and $2$ and vertex $(0,-8)$. Find $a$.`, 2, "$-8=a(2)(-2)$."),
  num(`The graph has zeros $1$ and $7$ and vertex $y$-coordinate $-9$. Find $a$.`, 1, "$-9=a(3)(-3)$.", parDoc((x) => (x - 1) * (x - 7), [1, 7], { xmin: -1, xmax: 9, ymin: -10, ymax: 8 }, { x: 1, y: 2 })),
];
