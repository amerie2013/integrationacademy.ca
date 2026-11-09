// 7.4 Exponential Functions and Their Graphs — 20 hard questions
import { mc, ms, num, tf, eDoc, P, n2, n4, eg } from "./ek.mjs";
const S = String.raw;

export const TOPIC = "7.4 Exponential Functions and Their Graphs";
export const Q = [
  num(S`$y=a\cdot b^x$ passes through $(1,\,10)$ and $(3,\,250)$. Enter $a$.`, 2, "b² = 25, b = 5, a = 2."),
  n4(S`$y=a\cdot b^x$ passes through $(2,\,36)$ and $(4,\,16)$. Enter $b$ (four decimals).`, Math.round((2 / 3) * 10000) / 10000, "b² = 16/36."),
  num(S`For the function through $(2,\,36)$ and $(4,\,16)$, enter $a$.`, 81, "36 ÷ (4/9)."),
  mc("Which equation matches the graph?", S`$y=3(2)^x$`, [S`$y=2(3)^x$`, S`$y=3^x$`, S`$y=6^x$`], "y-int 3, doubles.", eg((x) => 3 * 2 ** x, { xmin: -2, xmax: 3.2, ymin: -2, ymax: 26 }, { x: 1, y: 2 }, { points: [P(0, 3, "(0, 3)"), P(1, 6, "(1, 6)"), P(3, 24, "(3, 24)")] })),
  num("The graph shows y = a·bˣ through (0, 81) and (2, 9). Enter y at x = 3.", 3, "b = 1/3.", eg((x) => 81 * (1 / 3) ** x, { xmin: -0.5, xmax: 4, ymin: -5, ymax: 90 }, { x: 0.5, y: 10 }, { points: [P(0, 81, "(0, 81)"), P(2, 9, "(2, 9)")] })),
  num(S`For which smallest integer $x>0$ is $3^x>x^4$ beyond the crossing near $x=7$? (Use a table.)`, 8, "x = 7: 2187 < 2401; x = 8: 6561 > 4096."),
  ms(S`Select every exponential relation (equal $x$-steps).`, ["5, 15, 45, 135", "2, 5, 8, 11", "64, 16, 4, 1", "1, 2, 4, 7", "0.2, 1, 5, 25"], [0, 2, 4], "Constant ratio."),
  tf(S`If $f(x)=b^x$, then $f(x+1)=b\cdot f(x)$.`, true, "b^(x+1) = b·bˣ."),
  tf(S`$y=-3^x$ has range $y>0$.`, false, "y < 0."),
  n2(S`Evaluate $y=1.8^{x}$ at $x=2.5$ (two decimals).`, 1.8 ** 2.5, "Calculator."),
  num(S`Solve $9^{x}=27$ (decimal).`, 1.5, "3^(2x) = 3³."),
  num(S`Solve $\left(\frac12\right)^{x}=32$.`, -5, "2^(−x) = 2⁵."),
  mc("The graph shows y = 2ˣ and y = x² for x ≥ 0. On which interval is x² larger?", "2 < x < 4", ["0 < x < 2", "x > 4", "never"], "Between the crossings.", eDoc([{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => x * x, color: "green" }], { view: { xmin: 0, xmax: 5, ymin: 0, ymax: 30 }, step: { x: 1, y: 5 }, points: [P(2, 4, "(2, 4)"), P(4, 16, "(4, 16)")] })),
  num(S`A table has $x=0,2,4,6$ and $y=3,\ 12,\ 48,\ 192$. Enter the growth factor per unit of $x$.`, 2, "Ratio per 2 steps is 4."),
  num(S`For that table, enter $y$ at $x=5$.`, 96, "3 × 2⁵."),
  mc("Which statement about y = bˣ (b > 1) and y = (1/b)ˣ is correct?", "they are reflections in the y-axis", ["they are reflections in the x-axis", "they never meet", "both are decreasing"], "(1/b)ˣ = b^(−x).", eDoc([{ f: (x) => 2.5 ** x, color: "violet" }, { f: (x) => 0.4 ** x, color: "green" }], { view: { xmin: -3, xmax: 3, ymin: -1, ymax: 12 }, step: { x: 1, y: 1 }, points: [P(0, 1, "(0, 1)")] })),
  num(S`A function $y=a\cdot b^x$ has $y(0)=12$ and $y(-1)=48$. Enter $b$.`, 0.25, "12/48."),
  n4(S`The second differences of an exponential table with ratio $2$ starting $1,\ 2,\ 4,\ 8,\ 16$ are $1,\ 2,\ 4$. Enter the next one.`, 8, "They also double."),
  num(S`How many integer $x$-values satisfy $2^x<100$ and $x\ge0$?`, 7, "x = 0..6."),
  num(S`For $y=5^x$, by what factor does $y$ change when $x$ decreases by $2$? Enter as a decimal.`, 0.04, "5⁻² = 1/25.", null),
];
