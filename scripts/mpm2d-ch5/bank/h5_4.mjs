// 5.4 The Discriminant & the Number of Roots — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "5.4 The Discriminant & the Number of Roots";
export const Q = [
  num(`Find the positive value of $k$ for which $4x^2+kx+9=0$ has two equal roots.`, 12, "$k^2-144=0$."),
  num(`Find $k$ so that $kx^2-6x+3=0$ has exactly one root.`, 3, "$36-12k=0$."),
  mc(`For which values of $k$ does $x^2+kx+4=0$ have no real roots?`, "$-4<k<4$", ["$k<4$", "$k>4$ or $k<-4$", "$k=\\pm4$"], "$k^2-16<0$."),
  num(`What is the largest integer $m$ for which $2x^2+5x+m=0$ has real roots?`, 3, "$25-8m\\ge0\\Rightarrow m\\le3.125$."),
  tf(`$x^2+bx-1=0$ has two real roots for every value of $b$.`, true, "$D=b^2+4>0$."),
  num(`For which value of $c$ is the vertex of $y=-x^2+6x+c$ on the x-axis?`, -9, "$D=36+4c=0$."),
  ms(`Select all true statements about $3x^2-5x+4=0$.`, ["$D=-23$", "it has no real roots", "the parabola $y=3x^2-5x+4$ lies above the x-axis", "it has two irrational roots", "it has one real root"], [0, 1, 2], "$D=25-48$; the parabola opens up."),
  num(`A ball's height is $h=-4.9t^2+19.6t+2$. Find the greatest height $H$ for which $h=H$ has a real solution.`, 21.6, "$D=384.16-19.6(H-2)=0\\Rightarrow H=21.6$."),
  num(`Find the positive value of $k$ for which $x^2+(k+2)x+4=0$ has exactly one root.`, 2, "$(k+2)^2=16$."),
  mc(`The discriminant of $ax^2+bx+c$ is $0$ and $a>0$. Which is true?`, "the minimum value of $y=ax^2+bx+c$ is $0$", ["the maximum value of $y$ is $0$", "the parabola has no x-intercepts", "$c$ must be $0$"], "The vertex is on the x-axis and the parabola opens up."),
  num(`How many integer values of $k$ make $x^2+kx+3=0$ have no real roots?`, 7, "$k^2<12$: $k=-3,\\ldots,3$."),
  tf(`If $ac<0$, the parabola $y=ax^2+bx+c$ must cross the x-axis twice.`, true, "$D=b^2-4ac>0$."),
  num(`For which value of $k$ does the line $y=k$ meet $y=x^2-6x+11$ exactly once?`, 2, "The vertex is $(3,2)$; or $x^2-6x+11-k=0$ with $D=0$."),
  num(`Rearrange $(2x-3)^2=5$ to standard form and find its discriminant.`, 80, "$4x^2-12x+4=0$: $144-64$."),
  num(`Find the positive value of $k$ for which $x^2-2kx+9=0$ has exactly one root.`, 3, "$4k^2-36=0$."),
  mc(`Can a rectangle have perimeter $20$ m and area $30$ m$^2$?`, "no — $w^2-10w+30=0$ has $D<0$", ["yes, $5$ m by $6$ m", "yes, $3$ m by $10$ m", "only if it is a square"], "$D=100-120=-20$."),
  num(`What is the largest area (m$^2$) for which a rectangle with perimeter $20$ m exists? Use $w(10-w)=A$.`, 25, "$w^2-10w+A=0$ needs $100-4A\\ge0$."),
  num(`How many different real roots does $(x^2+1)(x^2-2x+1)=0$ have?`, 1, "$x^2+1=0$ has none; $(x-1)^2=0$ gives $x=1$."),
  tf(`If $b=0$ and $a$, $c$ have the same sign, $ax^2+c=0$ has no real roots.`, true, "$D=-4ac<0$."),
  num(`The parabola $y=x^2+bx+4$ touches the x-axis at a negative value of $x$, as shown. Find $b$.`, 4, "$b^2-16=0$; the vertex $x=-\\frac b2$ is negative, so $b=4$.", planeDoc({ view: { xmin: -5, xmax: 2, ymin: -1, ymax: 6 }, curves: [{ f: (x) => (x + 2) ** 2, color: "violet" }], step: { x: 1, y: 1 } })),
];
