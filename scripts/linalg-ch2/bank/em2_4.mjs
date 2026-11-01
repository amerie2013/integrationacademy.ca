// 2.4 Gaussian and Gauss–Jordan Elimination — 20 easy + 20 medium questions
import { S, sysT, withSol, sysFig, solveQ, countQ, rrefEntryQ, paramQ, freeQ, mc, num, tf, fill, ms, am, matSvg, stairSvg } from "./gen2.mjs";

const easy = [
  solveQ([[1, 2, 5], [3, 4, 11]], 0, true, "Use Gaussian elimination to solve"),
  solveQ([[1, 3, 11], [2, -1, 1]], 1, false, "Use Gaussian elimination to solve"),
  solveQ([[2, 1, 7], [4, 3, 17]], 0, true, "Use Gaussian elimination to solve"),
  solveQ([[1, -1, 0], [3, 2, 15]], 1, false, "Use Gaussian elimination to solve"),
  num(S`Back-substitute in the REF $${am([[2, -1, 3, 7], [0, 4, -2, 2], [0, 0, 5, 10]])}$ and give $x_2$.`, 1.5, "x₃ = 2, then 4x₂ − 4 = 2.", undefined, 0.001),
  num(S`Back-substitute in the REF $${am([[1, 2, 3, 14], [0, 1, 2, 8], [0, 0, 1, 3]])}$ and give $x_1$.`, 1, "x₃ = 3, x₂ = 2, x₁ = 14 − 4 − 9."),
  num(S`Back-substitute in the REF $${am([[1, -1, 2, 5], [0, 2, 1, 3], [0, 0, -3, 3]])}$ and give $x_1$.`, 9, "x₃ = −1, x₂ = 2, x₁ = 5 + 2 + 2.", stairSvg([["p", "*", "*", "*"], ["0", "p", "*", "*"], ["0", "0", "p", "*"]])),
  mc(S`What is a sensible first operation of Gaussian elimination on $${am([[0, 1, 2, 1], [3, 1, 0, 4], [1, 2, 1, 3]])}$?`, S`$R_1\leftrightarrow R_3$`, [S`$R_2\to R_2-3R_1$`, S`$R_1\to\tfrac10R_1$`, S`$R_3\to R_3-R_1$`], "The pivot position holds 0; swap a row with a 1 there."),
  mc(S`In Gaussian elimination on $${am([[1, 2, 3], [4, 5, 6]])}$, which operation creates the zero below the first pivot?`, S`$R_2\to R_2-4R_1$`, [S`$R_2\to R_2+4R_1$`, S`$R_1\to R_1-4R_2$`, S`$R_2\to 4R_2-R_1$`], "Subtract (4/1) times the pivot row."),
  tf("Gauss–Jordan elimination ends with the reduced row echelon form.", true, "The backward phase clears entries above the pivots."),
  tf("Gaussian elimination and Gauss–Jordan elimination can give different solution sets for the same system.", false, "Both use row operations, which never change the solutions."),
  tf("In the backward phase of Gauss–Jordan elimination you work from the lowest pivot upward.", true, "Clearing above a lower pivot does not disturb higher columns."),
  tf("If a pivot position contains 0, Gaussian elimination must stop.", false, "Swap with a lower row, or move one column right if the column has no nonzero entry."),
  fill("Choosing the pivot of largest absolute value in its column is called partial ___.", ["pivoting"], "It limits rounding errors."),
  fill("Solving a row echelon form from the last equation upward is called back ___.", ["substitution"], "Gaussian elimination ends with it."),
  num(S`Partial pivoting is used on a matrix whose first column is $(2,-7,5)$. In which row (1, 2 or 3) is the first pivot?`, 2, "Largest absolute value: |−7| = 7."),
  num(S`Partial pivoting is used on a matrix whose first column is $(-3,1,-4,2)$. Which row holds the first pivot?`, 3, "|−4| is largest."),
  mc(S`After the forward phase a system reads $${am([[1, 2, -1, 3], [0, 1, 2, 4], [0, 0, 0, 0]])}$. It has:`, "infinitely many solutions", ["exactly one solution", "no solution", "exactly three solutions"], "Column 3 has no pivot and the zero row is harmless."),
  countQ([[1, 1, 1, 3], [1, 2, 3, 6], [2, 3, 4, 10]], true),
  countQ([[1, 2, 4], [2, 4, 8]]),
];

const medium = [
  solveQ(withSol([[1, 3, -1], [2, 5, 1], [-1, -2, 3]], [2, 0, -1]), 0, true, "Use Gaussian elimination to solve"),
  solveQ(withSol([[2, -2, 4], [1, 0, 3], [3, -1, 5]], [1, -1, 0]), 1, false, "Use Gauss–Jordan elimination to solve"),
  solveQ(withSol([[1, 2, 1], [2, 4, 3], [1, 3, 5]], [4, -1, 1]), 2, false, "Solve (a swap will be needed)"),
  solveQ(withSol([[3, 2, -1], [2, -1, 3], [1, 1, 1]], [2, 0, 1]), 0, true, "Solve without fractions"),
  solveQ(withSol([[1, 1, 1], [2, -1, 1], [1, 2, -1]], [3, 1, -2]), 2, false, "Use Gaussian elimination to solve"),
  solveQ(withSol([[0, 1, 2], [1, 0, 1], [2, 1, 0]], [1, 1, 1]), 0, false, "Solve (start with a swap)"),
  paramQ([[1, -2, 1, 3, 2], [2, -4, 3, 5, 7], [-1, 2, 1, -5, 4]], [1, 1], 0),
  paramQ([[1, 1, 2, 0, 1], [2, 2, 5, 1, 3], [1, 1, 3, 1, 2]], [0, 1], 2, true),
  paramQ([[1, 2, 0, -1, 4], [2, 4, 1, 1, 11], [0, 0, 1, 3, 3]], [1, 1], 0),
  countQ([[1, 1, -2, 1], [3, 2, 1, 5], [4, 3, -1, 7]], true),
  countQ([[1, -1, 2, 3], [2, 1, 1, 9], [3, 0, 3, 12]]),
  countQ([[2, 1, -1, 1], [1, 1, 1, 6], [3, 2, 0, 7]]),
  mc(S`For which $k$ does $x+y+z=1,\ x+2y+3z=2,\ x+3y+kz=h$ have exactly one solution?`, S`$k\ne5$`, [S`$k=5$`, S`$k\ne5$ and $h=3$`, S`every $k$`], "The forward phase ends with (0, 0, k − 5 | h − 3)."),
  num(S`For $k=5$, the system $x+y+z=1,\ x+2y+3z=2,\ x+3y+kz=h$ has infinitely many solutions for exactly one $h$. Find it.`, 3, "The last row (0, 0, 0 | h − 3) must vanish."),
  num(S`For which $k$ does $x+y+z=2,\ x+2y-z=1,\ 2x+3y+kz=h$ fail to have a unique solution?`, 0, "The last row becomes (0, 0, k | h − 3)."),
  num(S`For $k=0$ and $h=3$, the system $x+y+z=2,\ x+2y-z=1,\ 2x+3y+kz=h$ has infinitely many solutions. Find $x$ when $z=1$.`, 0, "y = −1 + 2z = 1, x = 2 − y − z = 0."),
  rrefEntryQ([[1, -1, 2, 3], [2, 1, 1, 9], [1, 2, -1, 6]], 0, 3, true, true),
  rrefEntryQ([[2, 4, 2, 8], [1, 3, 4, 9], [1, 1, -2, -1]], 1, 2),
  num(S`How many multiplications and divisions does the forward phase use on a $3\times4$ augmented matrix with nonzero pivots (one division per multiplier, one multiplication per updated entry)?`, 11, "Pass 1: 2 × (1 + 3) = 8; pass 2: 1 × (1 + 2) = 3."),
  num(S`How many row operations of the form $R_i\to R_i+cR_j$ does the forward phase use on a $5\times5$ matrix with nonzero pivots and no swaps?`, 10, "4 + 3 + 2 + 1."),
];

export const E = easy;
export const M = medium;
