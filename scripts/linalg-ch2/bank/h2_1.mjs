// 2.1 Systems of Linear Equations — 20 hard questions
import { S, sysT, withSol, sysFig, solveQ, countQ, paramQ, mc, num, tf, ms, linesSvg, planesSvg } from "./gen2.mjs";

export const TOPIC = "2.1 Systems of Linear Equations";
export const Q = [
  solveQ(withSol([[1, 1, 1, 1], [1, -1, 1, -1], [2, 1, -1, 1], [1, 2, 1, -1]], [1, 0, 2, -1]), 3),
  solveQ(withSol([[2, 1, 0, 1], [1, 0, 1, 2], [0, 1, 1, -1], [1, 1, 0, 0]], [2, -1, 1, 1]), 0),
  mc(S`For which $a$, $b$ does $x_1+ax_2=2,\ 3x_1+6x_2=b$ have infinitely many solutions?`, S`$a=2,\ b=6$`, [S`$a=2,\ b\ne6$`, S`$a\ne2$`, S`$a=3,\ b=6$`], "Subtract 3 times the first: (6 − 3a)x₂ = b − 6."),
  mc(S`For which $k$ does $kx_1+x_2=1,\ x_1+kx_2=1$ have no solution?`, S`$k=-1$`, [S`$k=1$`, S`$k=0$`, S`no value of $k$`], "(1 − k²)x₂ = 1 − k: zero left side and nonzero right side only for k = −1."),
  num(S`For which $k$ does $kx_1+x_2=1,\ x_1+kx_2=1$ have infinitely many solutions?`, 1, "k = 1 makes the equations identical."),
  num(S`For $k=3$, the system $kx_1+x_2=1,\ x_1+kx_2=1$ has one solution. Find $x_1$.`, 0.25, "x₁ = x₂ = 1/(1 + k).", undefined, 0.001),
  countQ([[1, 1, 0, 0], [0, 1, 1, 0], [1, 0, -1, 1]], true, S`The planes $x_1+x_2=0$, $x_2+x_3=0$, $x_1-x_3=1$ (no two parallel) have how many common points?`),
  tf(S`If a linear system has two different solutions $\vec p$ and $\vec q$, then $2\vec p-\vec q$ is also a solution.`, true, "It is (1 − t)p + tq with t = −1."),
  tf(S`If $\vec p$ and $\vec q$ solve a linear system with some nonzero constant, then $\vec p+\vec q$ is also a solution.`, false, "Each equation would give 2bᵢ instead of bᵢ."),
  ms("Which are possible numbers of solutions of a system of 3 linear equations in 2 unknowns?", ["0", "1", "2", "infinitely many"], [0, 1, 3], "Only 0, 1 or infinitely many are ever possible."),
  num(S`The system $x_1+x_2+x_3=6,\ x_2+x_3=5,\ x_3=k$ satisfies $x_1=x_2$. Find $k$.`, 4, "x₁ = 1 and x₂ = 5 − k."),
  num(S`A system has the solutions $(1,0,2)$ and $(3,4,-2)$. Find $x_2$ of the solution whose first component is $7$.`, 12, "Solutions (1,0,2) + t(2,4,−4); 1 + 2t = 7 gives t = 3.", planesSvg([[1, 0, 0, 1]], { center: [1, 0, 2], size: 0.01, len: 3, line: { p: [1, 0, 2], d: [2, 4, -4], t0: -0.3, t1: 1.3 } })),
  paramQ([[1, 2, 0, 1, 4], [0, 0, 1, -1, 2]], [1, 1], 0, true),
  paramQ([[1, -1, 0, 3], [0, 0, 1, -2]], [5], 0),
  mc("Three lines in the plane, no two parallel, can have:", "no common point or exactly one common point", ["always exactly one common point", "infinitely many common points", "exactly three common points"], "Each pair meets once; the three meeting points may or may not coincide.", linesSvg([[1, 1, 4], [1, -1, 0], [1, 3, 9]], { xmin: -1, xmax: 5, ymin: -1, ymax: 5 })),
  num(S`A café sells small coffees at 2 dollars and large at 3 dollars. 150 coffees brought in 380 dollars. How many large coffees were sold?`, 80, "x + y = 150, 2x + 3y = 380."),
  num(S`Tickets cost 8 dollars (adult) and 5 dollars (student). 200 tickets brought in 1270 dollars. How many adult tickets were sold?`, 90, "a + s = 200, 8a + 5s = 1270."),
  num(S`Find $a$ so that $(1,2)$ solves both $ax_1+bx_2=8$ and $bx_1-ax_2=-1$.`, 2, "a + 2b = 8 and b − 2a = −1."),
  tf(S`A system of 2 linear equations in 3 unknowns can have exactly one solution.`, false, "Two planes never meet in a single point."),
  mc(S`The three planes in the figure are $x_1=1$, $x_2=1$ and $x_1+x_2=2$. Their solution set is:`, "a line", ["a point", "empty", "a plane"], "The third equation is the sum of the first two; x₃ is free.", planesSvg([[1, 0, 0, 1], [0, 1, 0, 1], [1, 1, 0, 2]], { center: [1, 1, 1], size: 1.2, len: 3, line: { p: [1, 1, 0], d: [0, 0, 1], t0: -0.5, t1: 2 } })),
];
