// 2.3 Row Echelon Form and Reduced Row Echelon Form — 20 hard questions
import { S, sysT, solveQ, rrefEntryQ, paramQ, freeQ, mc, num, tf, ms, am, matSvg, stairSvg, planesSvg } from "./gen2.mjs";

export const TOPIC = "2.3 Row Echelon Form and Reduced Row Echelon Form";
export const Q = [
  num(S`How many different RREF patterns (with $*$ for arbitrary entries) does a $2\times3$ matrix have?`, 7, "Pivot columns {1,2}, {1,3}, {2,3}; one pivot in column 1, 2 or 3; or none.", stairSvg([["?", "?", "?"], ["?", "?", "?"]], false)),
  num(S`How many different RREF patterns does a $2\times2$ matrix have?`, 4, "Identity, [1 * / 0 0], [0 1 / 0 0], zero."),
  mc(S`Which RREF has exactly the solutions $\vec x=(1,2,0,0)+s(-1,1,1,0)+t(2,0,0,1)$?`, S`$${am([[1, 0, 1, -2, 1], [0, 1, -1, 0, 2]])}$`, [S`$${am([[1, 0, -1, 2, 1], [0, 1, 1, 0, 2]])}$`, S`$${am([[1, 0, 1, 2, 1], [0, 1, -1, 0, 2]])}$`, S`$${am([[1, 0, 1, -2, 1], [0, 1, 1, 0, 2]])}$`], "x₁ = 1 − s + 2t means x₁ + x₃ − 2x₄ = 1; x₂ = 2 + s means x₂ − x₃ = 2."),
  paramQ([[1, 0, 2, 0, -1, 3], [0, 1, -1, 0, 2, 1], [0, 0, 0, 1, 1, -2]], [1, -1], 0, true),
  paramQ([[1, 0, 2, 0, -1, 3], [0, 1, -1, 0, 2, 1], [0, 0, 0, 1, 1, -2]], [2, 1], 3),
  num(S`For which $a$ does $${am([[1, 0, "a", 1], [0, 1, 2, 0], [0, 0, "a-2", "a-2"]])}$ have infinitely many solutions?`, 2, "a = 2 makes the last row zero."),
  num(S`For $a=3$ in $${am([[1, 0, "a", 1], [0, 1, 2, 0], [0, 0, "a-2", "a-2"]])}$, find $x_1$.`, -2, "x₃ = 1, x₁ = 1 − 3."),
  tf(S`If $[A\mid\vec b]$ has a pivot in its last column, then $A\vec x=\vec b$ is inconsistent.`, true, "That row of the RREF is [0 … 0 | 1]."),
  tf("Two matrices with the same pivot positions are row equivalent.", false, "e.g. [1 0 / 0 1 | 1] style RREFs with different entries in free columns differ; the whole RREF must agree."),
  tf("If a consistent system has 5 unknowns and its RREF has 3 nonzero rows, the general solution has 2 parameters.", true, "5 − 3."),
  mc(S`A consistent system has 6 unknowns and its RREF has pivots in columns 1, 2, 4 and 5. Which variables are free?`, S`$x_3$ and $x_6$`, [S`$x_1$, $x_2$, $x_4$, $x_5$`, S`$x_3$ only`, S`$x_6$ only`], "Columns without pivots.", stairSvg([["1", "0", "*", "0", "0", "*"], ["0", "1", "*", "0", "0", "*"], ["0", "0", "0", "1", "0", "*"], ["0", "0", "0", "0", "1", "*"]], false)),
  rrefEntryQ([[2, 4, -2, 6], [0, 1, 3, -1], [0, 0, 2, 4]], 0, 3, true, true),
  rrefEntryQ([[1, 1, 2, 0, 1], [2, 2, 5, 1, 3], [1, 1, 3, 1, 2]], 0, 3, true),
  ms("Which statements about echelon forms are true?", ["A matrix can have many row echelon forms.", "The pivot positions are the same in every REF of a matrix.", "The RREF can depend on the order of the row operations.", "Every nonzero matrix has at least one pivot."], [0, 1, 3], "The RREF is unique, so its pivots are fixed."),
  freeQ([[1, 2, 0, 1, 0, 3], [2, 4, 1, 4, 1, 9], [1, 2, 1, 3, 2, 8]], true),
  num(S`The RREF of a system in $x_1,\dots,x_4$ is $${am([[1, 0, -1, 2, 3], [0, 1, 2, -1, 1], [0, 0, 0, 0, 0]])}$. Find $x_1$ for the solution with $x_2=0$ and $x_4=0$.`, 3.5, "x₂ = 1 − 2x₃ + x₄ = 0 gives x₃ = ½; then x₁ = 3 + x₃ − 2x₄.", undefined, 0.001),
  mc("A 3 × 3 coefficient matrix has an RREF with exactly two pivots. Which is true for every right-hand side?", "the system has no solution or infinitely many", ["the system always has infinitely many solutions", "the system always has exactly one solution", "the system is always inconsistent"], "One free variable if consistent; for some b it is inconsistent.", planesSvg([[1, 0, 1, 1], [0, 1, 1, 1]], { center: [0.5, 0.5, 0.5], size: 1.3, len: 3, line: { p: [1, 1, 0], d: [-1, -1, 1], t0: -0.5, t1: 1.3 } })),
  num(S`What is the smallest number of nonzero entries the RREF of a $3\times5$ matrix with three pivots can have?`, 3, "Three leading 1s, everything else 0 (e.g. pivots in columns 1–3 and zero columns 4–5)."),
  tf(S`The RREF of $${am([[2, 4], [1, 2]], false)}$ is $${am([[1, 2], [0, 0]], false)}$.`, true, "Row 1 is twice row 2."),
  mc(S`For which $(a,b)$ is $${am([[1, 2, 1, 3], [0, 1, -1, 2], [0, 0, "a", "b"]])}$ inconsistent?`, S`$a=0,\ b\ne0$`, [S`$a\ne0$`, S`$a=0,\ b=0$`, S`$b=0$`], "Only a row [0 0 0 | b ≠ 0] is inconsistent.", stairSvg([["p", "*", "*", "*"], ["0", "p", "*", "*"], ["0", "0", "a", "b"]])),
];
