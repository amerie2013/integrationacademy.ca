// 2.5 Rank and the Number of Solutions — 20 hard questions
import { S, sysT, withSol, sysFig, solveQ, countQ, rankQ, paramQ, mc, num, tf, ms, am, matSvg, stairSvg, linesSvg, planesSvg } from "./gen2.mjs";

export const TOPIC = "2.5 Rank and the Number of Solutions";
export const Q = [
  mc(S`For which $k$, $h$ does $${sysT([[1, 2, 3, 1], [2, "k", 6, 2], [3, 6, "k+4", "h"]])}$ have exactly one solution?`, S`$k\ne4$ and $k\ne5$`, [S`$k\ne5$`, S`$k=4$`, S`$h\ne3$`], "Rows reduce to (0, k − 4, 0 | 0) and (0, 0, k − 5 | h − 3)."),
  mc(S`For $k=5$, the system $${sysT([[1, 2, 3, 1], [2, "k", 6, 2], [3, 6, "k+4", "h"]])}$ has infinitely many solutions when:`, S`$h=3$`, [S`$h\ne3$`, S`every $h$`, S`no $h$`], "The last row is (0, 0, 0 | h − 3)."),
  mc(S`For which $a$, $b$ does $${sysT([[1, 1, 1, 2], [1, 2, "a", 3], [2, 3, 3, "b"]])}$ have no solution?`, S`$a=2$, $b\ne5$`, [S`$a\ne2$`, S`$a=2$, $b=5$`, S`$b\ne5$`], "The forward phase ends with (0, 0, 2 − a | b − 5)."),
  num(S`For $a=1$, $b=5$, solve $${sysT([[1, 1, 1, 2], [1, 2, "a", 3], [2, 3, 3, "b"]])}$ and give $x_3$.`, 0, "The last row is (0, 0, 1 | 0)."),
  mc(S`For which $a$ does $${am([[1, "a"], ["a", 4]], false)}\vec x=\vec b$ have a unique solution for every $\vec b$?`, S`$a\ne\pm2$`, [S`$a=\pm2$`, S`$a\ne2$`, S`$a=0$`], "Rank 2 unless 4 − a² = 0."),
  num(S`For which $c$ is $${sysT([[1, 1, 1, 3], [1, 2, 3, 6], [2, 3, 4, "c"]])}$ consistent?`, 9, "Row 3 − row 1 − row 2 gives (0, 0, 0 | c − 9).", planesSvg([[1, 1, 1, 3], [1, 2, 3, 6], [2, 3, 4, 9]], { center: [1, 1, 1], size: 1.1, len: 3 })),
  rankQ([[1, 2, 3, 4, 5], [2, 3, 4, 5, 6], [3, 4, 5, 6, 7], [4, 5, 6, 7, 8]], true),
  rankQ([[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 1], [1, 0, 0, 1]], true),
  rankQ([[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 1], [1, 0, 0, -1]]),
  num(S`For $A=${am([[1, 2, 1], [2, 4, 3], [3, 6, 4]], false)}$, find the consistency condition $\alpha b_1+\beta b_2+b_3=0$ and enter $\alpha$.`, -1, "Reduce: rows (0, 0, 1 | b₂ − 2b₁) and (0, 0, 1 | b₃ − 3b₁); difference b₃ − b₂ − b₁ = 0.", matSvg([[1, 2, 1, "b₁"], [2, 4, 3, "b₂"], [3, 6, 4, "b₃"]])),
  tf(S`If $m\lt n$ and $A\vec x=\vec b$ is consistent, it has infinitely many solutions.`, true, "rank ≤ m < n."),
  tf(S`If $\operatorname{rank}A=n$, then $A\vec x=\vec b$ has a solution for every $\vec b$.`, false, "Only if also rank A = m; a tall matrix can have rank n < m."),
  tf("Row-equivalent matrices have the same rank.", true, "They have the same RREF."),
  ms(S`$A$ is $3\times4$ with rank 3. Which statements are true?`, [S`$A\vec x=\vec b$ is consistent for every $\vec b$`, S`$A\vec x=\vec b$ never has a unique solution`, S`$A\vec x=\vec 0$ has nontrivial solutions`, S`$A\vec x=\vec b$ has exactly one free parameter when consistent`], [0, 1, 2, 3], "rank = m = 3 and n − rank = 1."),
  num(S`A factory uses $A=${am([[1, 2, 1], [2, 1, 3]], false)}$ (materials per unit of 3 products). Production plans using exactly $(8,7)$ have the form $(2,3,0)+t\vec v$. If $v_3=3$, find $v_1$.`, -5, "Homogeneous direction (−5/3, 1/3, 1) scaled by 3."),
  paramQ([[1, 2, 1, 8], [2, 1, 3, 7]], [0.6], 0, true),
  countQ([[1, 2, 2], [2, 3, 3], [3, 5, 6]], true, S`How many solutions does the overdetermined system $${sysT([[1, 2, 2], [2, 3, 3], [3, 5, 6]])}$ have?`),
  countQ([[1, 2, 2], [2, 3, 3], [3, 5, 5]], true, S`How many solutions does the overdetermined system $${sysT([[1, 2, 2], [2, 3, 3], [3, 5, 5]])}$ have?`),
  num(S`What is the largest number of free parameters a consistent system of 4 equations in 9 unknowns can have, if no equation is identically zero?`, 8, "Rank at least 1, so at most 9 − 1 = 8."),
  mc(S`The rank of $${am([[1, 1, 1], [1, "t", 1], [1, 1, "t"]], false)}$ is 1 exactly when:`, S`$t=1$`, [S`$t=0$`, S`$t\ne1$`, S`$t=-1$`], "R₂ − R₁ = (0, t − 1, 0), R₃ − R₁ = (0, 0, t − 1)."),
];
