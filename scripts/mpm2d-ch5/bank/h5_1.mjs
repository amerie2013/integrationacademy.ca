// 5.1 Solving Quadratic Equations by Factoring — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { parDoc, triDoc, frameDoc } from "./fig.mjs";

export const TOPIC = "5.1 Solving Quadratic Equations by Factoring";
export const Q = [
  num(`Find the larger root of $6x^2-7x-20=0$.`, 2.5, "$(3x+4)(2x-5)=0$."),
  num(`Solve $x(x-3)=2(x+7)$. Enter the smaller root.`, -2, "$x^2-5x-14=(x-7)(x+2)=0$."),
  num(`Solve $(x+2)^2=3x+10$. Enter the larger root.`, 2, "$x^2+x-6=(x+3)(x-2)=0$."),
  ms(`Select all real roots of $x^3-9x=0$.`, ["$0$", "$3$", "$-3$", "$9$", "$-9$"], [0, 1, 2], "$x(x-3)(x+3)=0$."),
  num(`$x=3$ is a root of $x^2+kx-12=0$. Find $k$.`, 1, "$9+3k-12=0$."),
  num(`$x=3$ is a root of $x^2+kx-12=0$. Find the other root.`, -4, "With $k=1$: $(x+4)(x-3)=0$."),
  num(`The product of two consecutive positive integers is $156$. Find the larger integer.`, 13, "$n(n+1)=156\\Rightarrow(n+13)(n-12)=0$."),
  num(`A rectangle has perimeter $26$ m and area $40$ m$^2$. Find its length (the longer side) in metres.`, 8, "$w(13-w)=40\\Rightarrow(w-5)(w-8)=0$."),
  num(`The right triangle shown has hypotenuse $10$. Find the shorter leg $x$.`, 6, "$x^2+(x+2)^2=100\\Rightarrow x^2+2x-48=0\\Rightarrow(x+8)(x-6)=0$.", triDoc("x", "x + 2", "10")),
  mc(`Which equation with integer coefficients has the roots $-\\frac23$ and $4$?`, "$3x^2-10x-8=0$", ["$3x^2+10x-8=0$", "$2x^2-11x-12=0$", "$3x^2-14x+8=0$"], "$(3x+2)(x-4)=3x^2-10x-8$."),
  num(`Find the sum of the roots of $2x^2-11x+12=0$.`, 5.5, "$(2x-3)(x-4)=0$: $1.5+4$."),
  tf(`A quadratic equation with roots $0$ and $5$ could be $3x^2=15x$.`, true, "$3x(x-5)=0$."),
  num(`How many different real roots does $(x^2-4)(x+2)=0$ have?`, 2, "$x=2$ or $x=-2$ (the root $-2$ repeats)."),
  num(`A ball's height is $h=-5t^2+20t$ metres. At what later time is it $15$ m high?`, 3, "$t^2-4t+3=0$: $t=1$ or $3$."),
  num(`A $8$ m by $5$ m garden has a path of uniform width $x$ around it. The total area is $108$ m$^2$. Find $x$.`, 2, "$(8+2x)(5+2x)=108\\Rightarrow2x^2+13x-34=0\\Rightarrow(2x+17)(x-2)=0$.", frameDoc("8 m", "5 m", "x", "garden")),
  num(`$y=x^2+bx-15$ has a zero at $x=5$. Find $b$.`, -2, "$25+5b-15=0$."),
  mc(`The graph of a parabola is shown. Which equation has the same roots?`, "$x^2-3x-4=0$", ["$x^2+3x-4=0$", "$x^2-4x-1=0$", "$x^2+3x+4=0$"], "Roots $-1$ and $4$: $(x+1)(x-4)=x^2-3x-4$.", parDoc((x) => -2 * (x + 1) * (x - 4), [-1, 4], { xmin: -3, xmax: 6, ymin: -6, ymax: 14 }, { x: 1, y: 2 })),
  num(`Solve $x^4-13x^2+36=0$. Enter the largest root.`, 3, "$(x^2-4)(x^2-9)=0$: $\\pm2$, $\\pm3$."),
  tf(`The equation $(x-a)(x-b)=0$ always has two different roots.`, false, "If $a=b$ there is one (double) root."),
  num(`Two numbers differ by $7$ and their product is $60$. Find the larger number if both are positive.`, 12, "$x(x+7)=60\\Rightarrow(x+12)(x-5)=0$: $5$ and $12$."),
];
