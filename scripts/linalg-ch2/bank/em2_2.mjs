// 2.2 Augmented Matrices and Elementary Row Operations — 20 easy + 20 medium questions
import { S, sysT, withSol, sysFig, solveQ, countQ, entryQ, opQ, rrefEntryQ, mc, num, tf, fill, ms, am, matSvg } from "./gen2.mjs";

/** "what does the matrix become?" — the result of R_i → R_i + c R_j, as a choice of rows */
function resultQ(M, i, j, c) {
  const row = M[i].map((x, k) => x + c * M[j][k]);
  const wrong1 = M[i].map((x, k) => x - c * M[j][k]), wrong2 = M[j].map((x, k) => x + c * M[i][k]), wrong3 = row.map((x, k) => (k === row.length - 1 ? M[i][k] : x)); // forgot the constant
  const t = (r) => S`$(${r.join(",\ ")})$`;
  const sg = c < 0 ? "-" : "+", mag = Math.abs(c) === 1 ? "" : Math.abs(c);
  return mc(S`Apply $R_${i + 1}\to R_${i + 1}${sg}${mag}R_${j + 1}$ to $${am(M)}$. What is the new row ${i + 1}?`, t(row), [t(wrong1), t(wrong2), t(wrong3)], `Add ${c} times row ${j + 1} to row ${i + 1}, entry by entry, including the constant.`);
}

const easy = [
  entryQ([[2, 0, -1, 5], [1, 4, 1, 0], [0, -3, 2, 7]], 2, 1),
  entryQ([[2, 0, -1, 5], [1, 4, 1, 0], [0, -3, 2, 7]], 0, 1),
  entryQ([[1, -1, 0, 3, 2], [0, 2, 5, -1, 4]], 1, 4, ["x_1", "x_2", "x_3", "x_4"]),
  entryQ([[3, 1, -2], [1, -5, 0]], 1, 2),
  num(S`How many columns does the augmented matrix of 3 equations in 5 unknowns have?`, 6, "One column per unknown plus one for the constants."),
  num(S`The augmented matrix of a system is $3\times7$. How many unknowns does the system have?`, 6, "n + 1 = 7.", matSvg([[1, 0, 2, 0, 1, 3, 4], [0, 1, 1, 0, 2, 0, 1], [0, 0, 0, 1, 1, 1, 2]])),
  opQ([[1, 2, 3], [4, 5, 6]], { t: "add", i: 1, j: 0, c: -4 }),
  opQ([[0, 1, 2], [3, 1, 4]], { t: "swap", i: 0, j: 1 }),
  opQ([[2, 4, 6], [1, 3, 5]], { t: "scale", i: 0, c: 3 }),
  opQ([[1, 1, 2, 3], [0, 1, 1, 2], [2, 0, 1, 5]], { t: "add", i: 2, j: 0, c: -2 }),
  opQ([[1, 3, 1], [-2, 1, 4]], { t: "add", i: 1, j: 0, c: 2 }),
  tf(S`Multiplying a row by $0$ is an elementary row operation.`, false, "The scalar must be nonzero; otherwise the operation cannot be undone."),
  tf(S`$R_2\to R_2+5R_1$ is an elementary row operation.`, true, "Adding a multiple of another row."),
  tf(S`$R_2\to 3R_1$ is an elementary row operation.`, false, "It replaces row 2 by a multiple of a different row: equation 2 is lost."),
  tf("Row operations never change the solution set of a system.", true, "Each operation keeps all solutions and can be undone."),
  mc(S`Which operation undoes $R_3\to R_3-4R_1$?`, S`$R_3\to R_3+4R_1$`, [S`$R_3\to R_3-4R_1$`, S`$R_1\to R_1+4R_3$`, S`$R_3\to\tfrac14R_3$`], "Add back what was subtracted."),
  mc(S`Which operation undoes $R_2\to-3R_2$?`, S`$R_2\to-\tfrac13R_2$`, [S`$R_2\to3R_2$`, S`$R_2\to R_2+3R_1$`, S`$R_2\leftrightarrow R_1$`], "Divide by the same nonzero number."),
  fill("Two matrices related by a sequence of row operations are called row ___.", ["equivalent"], "Written A ∼ B."),
  fill("In the augmented matrix, each row corresponds to one ___.", ["equation"], "Columns correspond to unknowns."),
  entryQ([[1, 2, -1, 4], [2, 0, 3, 1], [0, 1, 1, -2]], 1, 1, undefined),
];
easy[19] = num(S`After $R_2\to R_2-2R_1$, what is the entry in row 2, column 2 of $${am([[1, 2, -1, 4], [2, 0, 3, 1], [0, 1, 1, -2]])}$?`, -4, "0 − 2·2.", matSvg([[1, 2, -1, 4], [2, 0, 3, 1], [0, 1, 1, -2]], [], true, 1));

const medium = [
  solveQ(withSol([[1, 2, 1], [2, 5, 3], [1, 1, 2]], [1, 0, 2]), 2, true, "Use row operations to solve"),
  solveQ(withSol([[1, -1, 1], [2, 1, -1], [1, 2, 1]], [1, 1, 1]), 0, false, "Use row operations to solve"),
  solveQ(withSol([[1, 1, 0], [0, 1, 1], [1, 0, 1]], [2, -1, 3]), 1, true, "Use row operations to solve"),
  solveQ(withSol([[3, 1, 2], [1, 0, 1], [2, 1, 0]], [1, 2, -1]), 2, false, "Use row operations to solve"),
  countQ([[1, 2, -1, 1], [3, 7, -1, 5], [2, 5, 0, 3]]),
  countQ([[1, -1, 2, 3], [2, -2, 4, 6], [1, 1, 0, 1]], true),
  countQ([[1, 2, 3], [2, 4, 7]]),
  resultQ([[1, 2, -1, 3], [3, 1, 2, 4]], 1, 0, -3),
  resultQ([[2, -1, 0, 5], [1, 3, 2, 1]], 0, 1, -2),
  resultQ([[1, 0, 4, 2], [-2, 1, 1, 3]], 1, 0, 2),
  rrefEntryQ([[1, 2, 5], [3, 4, 11]], 0, 2, true, true),
  rrefEntryQ([[2, 4, 2], [1, 3, 4]], 1, 2),
  num(S`For which $h$ is the system with augmented matrix $${am([[1, -2, "h"], [-3, 6, 9]])}$ consistent?`, -3, "R₂ + 3R₁ gives (0, 0 | 9 + 3h)."),
  num(S`For which $h$ is the system with augmented matrix $${am([[2, 6, 4], [-1, -3, "h"]])}$ consistent?`, -2, "R₂ + ½R₁ gives (0, 0 | h + 2)."),
  num(S`For which $k$ does $${am([[1, 2, 3], [4, "k", 12]])}$ describe infinitely many solutions?`, 8, "Row 2 must be 4 times row 1."),
  num(S`For which $k$ is $${am([[1, 3, 2], [2, "k", 5]])}$ inconsistent?`, 6, "R₂ − 2R₁: (0, k − 6 | 1); inconsistent when k = 6."),
  tf(S`If $A\sim B$ and $B\sim C$, then $A\sim C$.`, true, "Do the two sequences of operations one after the other."),
  tf(S`$${am([[1, 2], [3, 4]], false)}$ and $${am([[1, 0], [0, 1]], false)}$ are row equivalent.`, true, "R₂ − 3R₁, then −½R₂, then R₁ − 2R₂."),
  num(S`After $R_3\to R_3-2R_1$ and then $R_3\to R_3+R_2$, what is the last entry of row 3 of $${am([[1, 1, 2, 4], [0, 1, -1, 1], [2, 1, 3, 9]])}$?`, 2, "Row 3: (2,1,3 | 9) − 2(1,1,2 | 4) = (0,−1,−1 | 1); add row 2: (0,0,−2 | 2)."),
  num(S`Two row operations reduce $${am([[1, 2, 7], [2, 5, 16]])}$ to triangular form. Find $x_1$.`, 3, "R₂ − 2R₁: (0, 1 | 2), so x₂ = 2 and x₁ = 7 − 4.", matSvg([[1, 2, 7], [0, 1, 2]], [[0, 0], [1, 1]])),
];

export const E = easy;
export const M = medium;
