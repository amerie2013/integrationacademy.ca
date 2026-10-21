// 3.2 Linear Functions and Models — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill, mx } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const E = [
  mx(S`A line has gradient 3 and y-intercept $-2$. Write $y$ in terms of $x$.`, "3*x-2", "y = mx + c."),
  num(S`What is the y-intercept of $y=4x-9$?`, -9, "Put x = 0."),
  num(S`What is the x-intercept of $y=2x-8$?`, 4, "0 = 2x − 8."),
  mx(S`A line passes through $(0,5)$ with gradient $-1$. Write $y$ in terms of $x$.`, "-x+5", "c = 5, m = −1."),
  num(S`A line with gradient 2 passes through $(1,6)$. What is its y-intercept?`, 4, "6 = 2(1) + c."),
  num(S`What is the x-intercept of $3x+5y=15$?`, 5, "Put y = 0."),
  num(S`What is the y-intercept of $3x+5y=15$?`, 3, "Put x = 0."),
  tf(S`The line $y-4=2(x-1)$ passes through $(1,4)$.`, true, "Point–gradient form y − y₁ = m(x − x₁)."),
  mc(S`Which is the general form of $y=2x+3$?`, S`$2x-y+3=0$`, [S`$2x+y+3=0$`, S`$2x-y-3=0$`, S`$y-2x-3=1$`], "Move everything to one side."),
  mx("Write the equation of the line shown as y = mx + c (give y in terms of x).", "2*x-1", "Through (0, −1) with gradient 2.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -4, ymax: 6 }, lines: [{ m: 2, b: -1 }], points: [P(0, -1), P(2, 3)] })),
  mx("Write the equation of the line shown (give y in terms of x).", "-2*x+6", "Intercepts (0, 6) and (3, 0): gradient −2.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 8 }, lines: [{ m: -2, b: 6 }], points: [P(0, 6), P(3, 0)] })),
  mx(S`Write the line parallel to $y=5x-3$ through the origin (give $y$ in terms of $x$).`, "5*x", "Same gradient, c = 0."),
  num("A phone plan costs 20 per month plus 0.10 per minute. What is the cost for 300 minutes?", 50, "20 + 30."),
  num(S`Find the x-coordinate where $y=x+1$ meets $y=7-x$.`, 3, "x + 1 = 7 − x."),
  tf(S`The point $(2,5)$ lies on $y=3x-1$.`, true, "3(2) − 1 = 5."),
  fill(S`In $y=mx+c$, the number $c$ is the ___.`, ["y-intercept", "y intercept", "vertical intercept"], "The value of y when x = 0."),
  num(S`The cost of $n$ items is $C=12+4n$. What is the cost of each extra item?`, 4, "The gradient."),
  num(S`What is the y-intercept of the line through $(2,3)$ and $(4,7)$?`, -1, "Gradient 2: 3 = 2(2) + c."),
  mc(S`The horizontal line through $(3,-4)$ is:`, S`$y=-4$`, [S`$x=3$`, S`$x=-4$`, S`$y=3$`], "Every point has y = −4."),
  num(S`The point $(k,11)$ lies on $y=2x+1$. Find $k$.`, 5, "2k + 1 = 11."),
];

export const M = [
  mx(S`Find the line through $(-1,4)$ and $(3,-4)$ (give $y$ in terms of $x$).`, "-2*x+2", "m = −8/4 = −2; y − 4 = −2(x + 1)."),
  num(S`A line is perpendicular to $y=3x+1$ and passes through $(6,0)$. What is its y-intercept?`, 2, "y = −x/3 + 2."),
  mx(S`Write $6x-3y+12=0$ in the form $y=mx+c$ (give $y$ in terms of $x$).`, "2*x+4", "3y = 6x + 12."),
  num(S`Find the area of the triangle formed by $3x+4y=24$ and the two axes.`, 24, "Intercepts 8 and 6: ½ × 8 × 6."),
  num(S`Solve $3x+2y=12$ and $x-y=-1$. Give $y$.`, 3, "x = y − 1: 3y − 3 + 2y = 12 → y = 3."),
  num(S`Costs are $C=200+6q$ and revenue is $R=14q$. Find the break-even quantity.`, 25, "14q = 200 + 6q."),
  num("The graph shows a taxi fare F (dollars) against distance d (km). What is the fare for 10 km?", 21.5, "F = 3.5 + 1.8d.", planeDoc({ view: { xmin: -0.5, xmax: 12, ymin: -1, ymax: 26 }, lines: [{ m: 1.8, b: 3.5 }], points: [P(0, 3.5), P(5, 12.5)], step: { x: 1, y: 2 }, xlabel: "d", ylabel: "F" }), 1e-9),
  num(S`The graph shows $y=0.5x+1$ and $y=-x+4$. Find the x-coordinate of the intersection.`, 2, "1.5x = 3.", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 6 }, lines: [{ m: 0.5, b: 1 }, { m: -1, b: 4, color: "green" }] })),
  num(S`A line parallel to $3x+y=7$ passes through $(2,5)$. What is its y-intercept?`, 11, "y = −3x + c with 5 = −6 + c."),
  num(S`For which $a$ is $ax+4y=8$ parallel to $y=-0.5x$?`, 2, "Gradient −a/4 = −0.5."),
  tf(S`The lines $2x+3y=6$ and $4x+6y=9$ do not intersect.`, true, "Same gradient −2/3, different intercepts."),
  ms("Which lines pass through (1, 2)? Select all.", [S`$y=2x$`, S`$x+y=3$`, S`$y=3x-2$`, S`$y-2=5(x-1)$`], [0, 1, 3], "y = 3x − 2 gives 1 at x = 1."),
  num("Water at 20 °C heats at 6 °C per minute. After how many minutes does it reach 80 °C?", 10, "20 + 6t = 80."),
  num("A car worth 24 000 loses 3000 in value each year. What is it worth after 5 years?", 9000, "24 000 − 15 000."),
  num(S`For which $k$ are $y=kx+1$ and $y=(3-k)x+5$ parallel?`, 1.5, "k = 3 − k.", null, 1e-9),
  num(S`$F=1.8C+32$ converts Celsius to Fahrenheit. What is $C$ when $F=50$?`, 10, "1.8C = 18."),
  num(S`A line through $(-2,-3)$ has gradient $0.5$. What is its x-intercept?`, 4, "y = 0.5x − 2."),
  mc("A line has x-intercept 3 and y-intercept −6. Its equation is:", S`$y=2x-6$`, [S`$y=-2x-6$`, S`$y=2x+3$`, S`$y=-0.5x-6$`], "Gradient 6/3 = 2."),
  num(S`Plan A costs $25+0.2m$ and plan B costs $40+0.05m$ for $m$ minutes. For how many minutes are they equal?`, 100, "0.15m = 15."),
  num(S`Find the y-coordinate where $x+2y=10$ meets $y=2x$.`, 4, "x + 4x = 10 → x = 2."),
];
