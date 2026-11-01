// 2.3 Row Echelon Form and Reduced Row Echelon Form — 20 easy + 20 medium questions
import { S, sysT, withSol, solveQ, countQ, rrefEntryQ, paramQ, freeQ, mc, num, tf, fill, ms, am, matSvg, stairSvg, rank } from "./gen2.mjs";

const isQ = (M, kind, value, why, fig = false) => tf(S`$${am(M, false)}$ is in ${kind === "REF" ? "row echelon form" : "reduced row echelon form"}.`, value, why, fig ? matSvg(M, [], false) : undefined);
const pivQ = (M, fig = false) => num(S`How many pivot columns does $${am(M, false)}$ have?`, rank(M), "Reduce to echelon form and count the leading entries.", fig ? stairSvg(M.map((r) => r.map((x) => (x === 0 ? "0" : "*"))), false) : undefined);

const easy = [
  isQ([[1, 0, 3], [0, 1, -2]], "RREF", true, "Leading 1s, each alone in its column.", true),
  isQ([[1, 4, 2], [0, 0, 0], [0, 1, 1]], "REF", false, "A zero row lies above a nonzero row."),
  isQ([[2, 1, 0], [0, 3, 1]], "REF", true, "Leading entries step to the right."),
  isQ([[2, 1, 0], [0, 3, 1]], "RREF", false, "The leading entries are 2 and 3, not 1, and the 1 above the 3 is not cleared."),
  isQ([[0, 1, 4], [1, 0, 2]], "REF", false, "Row 2 starts to the left of row 1.", true),
  isQ([[1, 5, 0, 2], [0, 0, 1, -3], [0, 0, 0, 0]], "RREF", true, "Column 2 has no pivot; that is allowed."),
  pivQ([[1, 2, 0, 3], [0, 0, 1, -1], [0, 0, 0, 0]], true),
  pivQ([[1, 0, 2, 0], [0, 1, 1, 0], [0, 0, 0, 1]]),
  pivQ([[0, 1, 2], [0, 0, 3], [0, 0, 0]]),
  num(S`A system has RREF $${am([[1, 0, 2, 5], [0, 1, -1, 3], [0, 0, 0, 0]])}$. How many free variables does it have?`, 1, "Column 3 has no pivot."),
  num(S`A system has RREF $${am([[1, -2, 0, 0, 3, 1], [0, 0, 1, 0, -1, 4], [0, 0, 0, 1, 2, -3]])}$. How many free variables does it have?`, 2, "Columns 2 and 5 have no pivot."),
  fill("An unknown whose column contains no pivot is called a ___ variable.", ["free"], "Basic variables have pivots."),
  fill("The first nonzero entry of a row is its ___ entry.", ["leading"], "Also called the pivot in an echelon form."),
  mc("Which matrix is in reduced row echelon form?", S`$${am([[1, 0, 4], [0, 1, -2]], false)}$`, [S`$${am([[1, 2, 4], [0, 1, -2]], false)}$`, S`$${am([[2, 0, 4], [0, 1, -2]], false)}$`, S`$${am([[0, 1, 4], [1, 0, -2]], false)}$`], "Leading 1s, zeros above and below."),
  mc("Which matrix is in row echelon form but not in reduced row echelon form?", S`$${am([[1, 3, 2], [0, 4, 1]], false)}$`, [S`$${am([[1, 0, 2], [0, 1, 1]], false)}$`, S`$${am([[0, 3, 2], [1, 4, 1]], false)}$`, S`$${am([[1, 3, 2], [0, 0, 0], [0, 1, 1]], false)}$`], "A staircase with a leading 4 (not 1)."),
  num(S`How many basic variables does the system with RREF $${am([[1, 0, 0, 2, 7], [0, 1, 0, -1, 3], [0, 0, 1, 4, 0]])}$ have?`, 3, "One per pivot."),
  tf("Every matrix has exactly one reduced row echelon form.", true, "The RREF is unique."),
  mc(S`An RREF of $[A\mid\vec b]$ contains the row $[\,0\ 0\ 0\mid 1\,]$. The system has:`, "no solution", ["exactly one solution", "infinitely many solutions", "a solution only if the other rows are zero"], "The row says 0 = 1."),
  num(S`A system has RREF $${am([[1, 0, 0, 4], [0, 1, 0, -2], [0, 0, 1, 1]])}$. Find $x_2$.`, -2, "Read the last column."),
  num(S`A system has RREF $${am([[1, 0, 0, 0, 3], [0, 1, 0, 0, 0], [0, 0, 1, 0, -5], [0, 0, 0, 1, 2]])}$. Find $x_3$.`, -5, "Read the last column.", matSvg([[1, 0, 0, 0, 3], [0, 1, 0, 0, 0], [0, 0, 1, 0, -5], [0, 0, 0, 1, 2]], [[0, 0], [1, 1], [2, 2], [3, 3]])),
];

const medium = [
  rrefEntryQ([[1, 3, -2, 5], [0, 2, 4, 2], [0, 0, 3, 6]], 0, 3, true, true),
  rrefEntryQ([[2, 4, 6, 8], [1, 3, 5, 6]], 1, 2, false),
  rrefEntryQ([[1, 2, 1, 4], [2, 5, 4, 11], [1, 3, 4, 8]], 2, 3),
  rrefEntryQ([[0, 2, 4, 2], [0, 1, 3, 4]], 0, 3, true, true),
  paramQ([[1, 0, 2, 3], [0, 1, -1, 1]], [2], 0),
  paramQ([[1, 2, 0, -1, 4], [0, 0, 1, 3, -2]], [1, 2], 2),
  paramQ([[1, -3, 0, 2, 0, 1], [0, 0, 1, 5, 0, -2], [0, 0, 0, 0, 1, 4]], [1, 1], 0, true),
  paramQ([[1, 0, -2, 3], [0, 1, 4, -1]], [2], 1),
  mc(S`The RREF of a system is $${am([[1, 0, 3, 2], [0, 1, -1, 4]])}$. Its general solution is:`, S`$(2,4,0)+t(-3,1,1)$`, [S`$(2,4,0)+t(3,-1,1)$`, S`$(2,4,1)+t(-3,1,0)$`, S`$(-3,1,1)+t(2,4,0)$`], "x₃ = t, x₁ = 2 − 3t, x₂ = 4 + t."),
  mc(S`The RREF of a system is $${am([[1, 2, 0, 5], [0, 0, 1, -1]])}$. Its general solution is:`, S`$(5,0,-1)+t(-2,1,0)$`, [S`$(5,0,-1)+t(2,1,0)$`, S`$(5,-1,0)+t(-2,0,1)$`, S`$(5,0,-1)+t(-2,0,1)$`], "x₂ = t free, x₁ = 5 − 2t, x₃ = −1."),
  freeQ([[1, 2, 1, 4], [2, 4, 3, 9], [1, 2, 2, 5]]),
  freeQ([[1, -1, 2, 1, 3], [2, -2, 5, 1, 7]], true),
  tf(S`If the RREF of the coefficient matrix of a consistent system has a pivot in every column, the solution is unique.`, true, "No free variables."),
  tf("A matrix in row echelon form has zeros above every pivot.", false, "Only below; zeros above the pivots are required in reduced form."),
  num(S`In the RREF of $${am([[1, 2, 1, 3], [2, 4, 3, 5], [1, 2, 0, 4]], false)}$, which column (1–4) contains the second pivot?`, 3, "Column 2 is a multiple of column 1, so the second pivot moves to column 3.", stairSvg([["1", "*", "0", "*"], ["0", "0", "1", "*"], ["0", "0", "0", "0"]], false)),
  num(S`In the RREF of $${am([[0, 0, 2, 4], [0, 1, 1, 3]], false)}$, which column contains the first pivot?`, 2, "Column 1 is zero; swap so the 1 in column 2 leads."),
  countQ([[1, 2, -1, 3], [0, 0, 1, 2], [0, 0, 0, 1]], false, S`A system reduces to $${am([[1, 2, -1, 3], [0, 0, 1, 2], [0, 0, 0, 1]])}$. How many solutions does it have?`),
  countQ([[1, 0, 3, 1], [0, 1, -2, 0], [0, 0, 0, 0]], false, S`A system reduces to $${am([[1, 0, 3, 1], [0, 1, -2, 0], [0, 0, 0, 0]])}$. How many solutions does it have?`),
  num(S`For which $a$ does the REF $${am([[1, 2, 1, 3], [0, 1, -1, 2], [0, 0, "a", 0]])}$ give infinitely many solutions?`, 0, "a = 0 leaves a zero row and a free variable.", stairSvg([["p", "*", "*", "*"], ["0", "p", "*", "*"], ["0", "0", "a", "0"]])),
  num(S`For which $b$ does the REF $${am([[1, -1, 2, 0], [0, 2, 1, 3], [0, 0, 0, "b"]])}$ give a consistent system?`, 0, "The last row must be 0 = 0."),
];

export const E = easy;
export const M = medium;
