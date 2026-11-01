// 2.5 Rank and the Number of Solutions — 20 easy + 20 medium questions
import { S, sysT, withSol, sysFig, solveQ, countQ, rankQ, freeQ, paramQ, mc, num, tf, fill, ms, am, matSvg, stairSvg, rank } from "./gen2.mjs";

const classify = (rA, rAb, n) => mc(S`A system has $\operatorname{rank}A=${rA}$, $\operatorname{rank}[A\mid\vec b]=${rAb}$ and $n=${n}$ unknowns. How many solutions does it have?`,
  rA < rAb ? "no solution" : rA === n ? "exactly one solution" : "infinitely many solutions",
  ["no solution", "exactly one solution", "infinitely many solutions", "exactly two solutions"].filter((t) => t !== (rA < rAb ? "no solution" : rA === n ? "exactly one solution" : "infinitely many solutions")).slice(0, 3),
  "Compare the two ranks, then compare with n.");

const easy = [
  rankQ([[1, 3, -2], [2, 6, -4], [0, 1, 5]], true),
  rankQ([[1, 2, 3, 4], [2, 4, 6, 8], [3, 5, 7, 9]]),
  rankQ([[1, 0, 2], [0, 1, 3], [1, 1, 5]]),
  rankQ([[2, 4], [1, 2], [3, 6]], true),
  rankQ([[1, 1, 1], [1, 2, 3], [1, 3, 6]]),
  classify(3, 3, 5),
  classify(2, 3, 3),
  classify(3, 3, 3),
  classify(1, 1, 2),
  num(S`What is the largest possible rank of a $3\times7$ matrix?`, 3, "rank ≤ min(m, n)."),
  num(S`What is the largest possible rank of a $6\times4$ matrix?`, 4, "rank ≤ min(m, n)."),
  num(S`A consistent system has 7 unknowns and $\operatorname{rank}A=4$. How many parameters does its general solution have?`, 3, "n − rank A."),
  num(S`A consistent system has 5 unknowns and $\operatorname{rank}A=5$. How many parameters does its general solution have?`, 0, "Unique solution."),
  fill("The number of pivots in a row echelon form of A is called the ___ of A.", ["rank"], "It does not depend on the row operations used."),
  tf(S`$\operatorname{rank}[A\mid\vec b]$ can exceed $\operatorname{rank}A$ by at most 1.`, true, "The extra column holds at most one new pivot."),
  tf("A system with more unknowns than equations always has a solution.", false, "e.g. x₁ + x₂ + x₃ = 1, x₁ + x₂ + x₃ = 2."),
  tf("A system with more unknowns than equations never has exactly one solution.", true, "rank ≤ m < n leaves a free variable."),
  mc(S`$A$ is $4\times4$ with $\operatorname{rank}A=4$. The system $A\vec x=\vec b$ has:`, S`exactly one solution for every $\vec b$`, ["no solution for some b", "infinitely many solutions", "exactly one solution only for b = 0"], "rank = m = n."),
  mc(S`When is $A\vec x=\vec b$ consistent for every $\vec b\in\mathbb R^m$?`, S`when $\operatorname{rank}A=m$`, [S`when $\operatorname{rank}A=n$`, S`when $m=n$`, S`when $\operatorname{rank}A\lt m$`], "A pivot in every row of A."),
  num(S`The REF of $A$ is shown. What is $\operatorname{rank}A$?`, 2, "Two leading entries.", stairSvg([["p", "*", "*", "*"], ["0", "0", "p", "*"], ["0", "0", "0", "0"]], false)),
];

const medium = [
  rankQ([[1, 2, 0, 1], [2, 4, 1, 3], [3, 6, 1, 4], [1, 2, 1, 2]], true),
  rankQ([[1, -1, 2, 0], [2, 1, 1, 3], [3, 0, 3, 3]]),
  rankQ([[1, 2, 1], [0, 1, 1], [1, 0, 2]]),
  countQ([[1, 1, 2, 3], [2, 3, 5, 7], [1, 2, 3, 5]], true),
  countQ([[1, 2, -1, 1], [2, 3, 1, 4], [3, 5, 0, 5]]),
  freeQ([[1, 2, 1, 0, 2], [2, 4, 3, 1, 7], [1, 2, 2, 1, 5]]),
  freeQ([[1, -1, 2, 0, 1, 3], [2, -2, 5, 1, 1, 8], [-1, 1, -1, 1, -2, -1]], true),
  num(S`For which $t$ does $${am([[1, "t"], ["t", 4]], false)}$ have rank 1? Give the positive value.`, 2, "R₂ − tR₁: (0, 4 − t²)."),
  num(S`For which $t$ does $${am([[1, 3], ["t", 6]], false)}$ have rank 1?`, 2, "Row 2 must be twice row 1."),
  num(S`For which $k$ does $${am([[1, 2, 3], [2, 5, "k"], [1, 3, 4]], false)}$ have rank 2?`, 7, "R₂ − 2R₁ = (0, 1, k − 6), R₃ − R₁ = (0, 1, 1); rank 2 when k − 6 = 1."),
  mc(S`For $A=${am([[1, 2], [2, 3], [3, 5]], false)}$, $A\vec x=\vec b$ is consistent exactly when:`, S`$b_1+b_2-b_3=0$`, [S`$b_1-b_2+b_3=0$`, S`$b_3=0$`, S`always`], "Reduce [A | b]; the last row is (0, 0 | b₃ − b₁ − b₂)."),
  mc(S`For $A=${am([[1, -1], [2, 1], [1, 2]], false)}$, $A\vec x=\vec b$ is consistent exactly when:`, S`$b_1-b_2+b_3=0$`, [S`$b_1+b_2-b_3=0$`, S`$b_1=b_2=b_3$`, S`always`], "Reduce: the last row is (0, 0 | b₁ − b₂ + b₃)."),
  num(S`For $A=${am([[1, 2], [2, 3], [3, 5]], false)}$ and $\vec b=(1,2,b_3)$, find $b_3$ so that $A\vec x=\vec b$ is consistent.`, 3, "b₃ = b₁ + b₂."),
  tf(S`If $\operatorname{rank}A=\operatorname{rank}[A\mid\vec b]$, the system is consistent.`, true, "No pivot in the constant column."),
  tf(S`A $3\times5$ matrix of rank 3 gives a system consistent for every $\vec b\in\mathbb R^3$.`, true, "rank = m."),
  tf(S`A $5\times3$ system can be consistent for every $\vec b\in\mathbb R^5$.`, false, "rank ≤ 3 < 5."),
  paramQ([[1, 2, -1, 1], [2, 3, 1, 4], [3, 5, 0, 5]], [2], 0),
  num(S`The square matrix $A$ satisfies $\operatorname{rank}A=2$ and is $3\times3$. For some $\vec b$, how many solutions can $A\vec x=\vec b$ have? Enter the number of free parameters when it is consistent.`, 1, "n − rank A = 1."),
  solveQ(withSol([[1, 2, 1], [0, 1, 1], [1, 0, 2]], [2, -1, 1]), 0, true, "A has rank 3. Solve"),
  num(S`What is the rank of the matrix in the figure?`, 3, "Count pivots after reducing.", matSvg([[1, 0, 2, 1], [0, 1, 1, 0], [0, 0, 0, 3]], [[0, 0], [1, 1], [2, 3]], false)),
];

export const E = easy;
export const M = medium;
