// 5.4 The Discriminant & the Number of Roots — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  num(`Find the discriminant of $x^2+5x+2=0$.`, 17, "$25-8$."),
  num(`Find the discriminant of $x^2-6x+9=0$.`, 0, "$36-36$."),
  mc(`How many real roots does $x^2+x+5=0$ have?`, "none", ["one", "two", "infinitely many"], "$D=1-20=-19$."),
  mc(`If the discriminant is positive, the equation has…`, "two real roots", ["one real root", "no real roots", "only negative roots"], "$D>0$."),
  tf(`If $D=0$, the vertex of $y=ax^2+bx+c$ is on the x-axis.`, true, "One zero: the vertex touches the axis."),
  num(`Find the discriminant of $2x^2-3x-2=0$.`, 25, "$9+16$."),
  num(`How many real roots does $x^2-4=0$ have?`, 2, "$D=0+16=16>0$."),
  mc(`The discriminant of $ax^2+bx+c=0$ is…`, "$b^2-4ac$", ["$b^2+4ac$", "$\\sqrt{b^2-4ac}$", "$-\\frac{b}{2a}$"], "The part under the root."),
  num(`How many x-intercepts does $y=x^2+2x+1$ have?`, 1, "$D=4-4=0$."),
  tf(`$D<0$ means the roots are negative numbers.`, false, "It means there are no real roots."),
  num(`Find the discriminant of $3x^2+2x+1=0$.`, -8, "$4-12$."),
  mc(`$x^2-10x+25=0$ has…`, "one real root", ["two real roots", "no real roots", "two non-real roots and one real root"], "$D=100-100=0$."),
  fill(`If $D=49$, the roots are ___ (rational or irrational).`, ["rational"], "$49$ is a perfect square."),
  num(`How many real roots does $2x^2+3x+5=0$ have?`, 0, "$D=9-40=-31$."),
  ms(`Select all equations with two real roots.`, ["$x^2-5=0$", "$x^2+5=0$", "$x^2+4x+4=0$", "$x^2-3x-1=0$", "$x^2+x+1=0$"], [0, 3], "Need $D>0$."),
  num(`Find the discriminant of $-x^2+4x-3=0$.`, 4, "$16-4(-1)(-3)=16-12$."),
  tf(`$x^2+7x-2=0$ has two real roots.`, true, "$D=49+8=57>0$."),
  mc(`The graph of $y=ax^2+bx+c$ is shown. What can you say about its discriminant?`, "it is negative", ["it is positive", "it is zero", "it cannot be found"], "The parabola does not meet the x-axis.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -2, ymax: 10 }, curves: [{ f: (x) => (x - 1) ** 2 + 2, color: "violet" }], step: { x: 1, y: 2 } })),
  num(`How many different real roots does $9x^2+6x+1=0$ have?`, 1, "$D=36-36=0$."),
  mc(`Another parabola $y=ax^2+bx+c$ is shown. What is the sign of $b^2-4ac$?`, "it is positive", ["it is negative", "it is zero", "it equals the y-intercept"], "Two x-intercepts.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -6, ymax: 6 }, curves: [{ f: (x) => -(x * x) + 4, color: "violet" }], step: { x: 1, y: 2 } })),
];

export const M = [
  num(`Find the discriminant of $5x^2-3x-2=0$.`, 49, "$9+40$."),
  mc(`Describe the roots of $2x^2+5x+1=0$.`, "two irrational real roots", ["two rational real roots", "one real root", "no real roots"], "$D=25-8=17$, not a perfect square."),
  mc(`Describe the roots of $6x^2-x-1=0$.`, "two rational real roots", ["two irrational real roots", "one real root", "no real roots"], "$D=1+24=25$."),
  num(`Find the positive value of $k$ for which $x^2+kx+36=0$ has exactly one root.`, 12, "$k^2-144=0$."),
  num(`Find $k$ so that $x^2-8x+k=0$ has exactly one root.`, 16, "$64-4k=0$."),
  num(`What is the largest integer $k$ for which $x^2+6x+k=0$ has two real roots?`, 8, "$36-4k>0\\Rightarrow k<9$."),
  tf(`$x^2+2x+k=0$ has no real roots when $k>1$.`, true, "$4-4k<0\\Rightarrow k>1$."),
  num(`How many x-intercepts does $y=-3x^2+6x-3$ have?`, 1, "$D=36-36=0$."),
  num(`How many x-intercepts does $y=2x^2-x+4$ have?`, 0, "$D=1-32$."),
  mc(`For which values of $k$ does $x^2-4x+k=0$ have two real roots?`, "$k<4$", ["$k>4$", "$k=4$", "$k<-4$"], "$16-4k>0$."),
  num(`Find the discriminant of $x^2=3x+5$.`, 29, "$x^2-3x-5=0$: $9+20$."),
  tf(`For integer $a$, $b$, $c$, if $D$ is a perfect square then $ax^2+bx+c$ factors over the integers.`, true, "The roots are rational."),
  num(`For what value of $c$ does $y=x^2+10x+c$ touch the x-axis at exactly one point?`, 25, "$100-4c=0$."),
  ms(`Select all equations with no real roots.`, ["$x^2+3=0$", "$x^2-3x+3=0$", "$x^2-3x-3=0$", "$2x^2+x+1=0$", "$x^2+4x+4=0$"], [0, 1, 3], "Need $D<0$."),
  num(`Find the discriminant of $(x-2)(x+5)=0$ after expanding.`, 49, "$x^2+3x-10=0$: $9+40$."),
  mc(`A ball's height is $h=-5t^2+20t$. Can it reach $25$ m?`, "no — the equation has no real roots", ["yes, once", "yes, twice", "yes, at $t=0$"], "$-5t^2+20t-25=0\\Rightarrow t^2-4t+5=0$: $D=-4$."),
  num(`Find the positive value of $b$ for which $x^2+bx+9=0$ has exactly one root.`, 6, "$b^2-36=0$."),
  tf(`$2x^2-4x+3=0$ has two real roots.`, false, "$D=16-24=-8$."),
  num(`How many times does the line $y=4$ meet $y=x^2+2x+5$?`, 1, "$x^2+2x+1=0$: $D=0$."),
  num(`The graph of $y=x^2-4x+c$ touches the x-axis, as shown. Find $c$.`, 4, "$D=16-4c=0$.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 6 }, curves: [{ f: (x) => (x - 2) ** 2, color: "violet" }], points: [{ x: 2, y: 0, label: "(2, 0)", color: "amber" }] })),
];
