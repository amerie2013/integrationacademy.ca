// 7.7 Pascal's Triangle and Binomial Expansions — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { pascalD, gridD, prow } from "./fig.mjs";

const S = String.raw;
const C = (n, k) => prow(n)[k];

export const E = [
  num("What is the second entry of row 9 (1, ?, …)?", 9, "Row n starts 1, n."),
  num("What is the third entry of row 5?", 10, "1, 5, 10, …"),
  num("What is the middle entry of row 4?", 6, "1, 4, 6, 4, 1."),
  num("What is the sum of row 6?", 64, "2⁶."),
  num("What is the sum of row 0?", 1, "2⁰."),
  num("How many entries are in row 12?", 13, "n + 1."),
  num(S`How many terms are in \((x+y)^7\)?`, 8, "n + 1."),
  num(S`What is the coefficient of \(x^4y\) in \((x+y)^5\)?`, 5, "Row 5: 1, 5, …"),
  num(S`What is the coefficient of \(x^2\) in \((x+1)^4\)?`, 6, "Row 4."),
  num(S`What is the last term of \((x+2)^4\)?`, 16, "2⁴."),
  mc(S`Which is \((a+b)^3\)?`, S`\(a^3+3a^2b+3ab^2+b^3\)`, [S`\(a^3+b^3\)`, S`\(a^3+2a^2b+2ab^2+b^3\)`, S`\(a^3+3ab+b^3\)`], "Row 3: 1, 3, 3, 1."),
  mc("How is each entry of Pascal's triangle (other than the 1s) found?", "add the two entries above it", ["multiply the two entries above it", "double the entry above", "add the whole row above"], "Pascal's rule."),
  tf("Every row of Pascal's triangle reads the same forwards and backwards.", true, "Rows are symmetric."),
  tf(S`\((x+y)^2=x^2+y^2\).`, false, "It is x² + 2xy + y²."),
  num(S`What is the coefficient of \(x\) in \((x-1)^3\)?`, 3, "x³ − 3x² + 3x − 1."),
  num(S`What is the constant term of \((x-1)^5\)?`, -1, "(−1)⁵."),
  num(S`In \((x+y)^6\), what do the exponents in each term add to?`, 6, "Always n."),
  num("Rows 0 to 6 are shown. What number replaces the question mark in row 6?", C(6, 3), "10 + 10.", pascalD(6, [[6, 3]])),
  num("Rows 0 to 5 are shown. What number replaces the question mark in row 5?", C(5, 2), "4 + 6.", pascalD(5, [[5, 2]])),
  num("On the 2-block by 2-block grid, count the shortest routes from A to B (right and up only).", C(4, 2), "6 routes: row 4, middle.", gridD(2, 2)),
];

export const M = [
  num(S`Find the coefficient of \(x^3\) in \((x+2)^5\).`, C(5, 2) * 4, "10 · 2²."),
  num(S`Find the coefficient of \(x^2\) in \((x-3)^4\).`, C(4, 2) * 9, "6 · (−3)²."),
  num(S`Find the coefficient of \(x^3\) in \((2x+1)^4\).`, C(4, 1) * 8, "4 · (2x)³."),
  num(S`Find the coefficient of \(x\) in \((3x-2)^3\).`, C(3, 2) * 3 * 4, "3 · 3x · (−2)² = 36x."),
  num(S`Find the constant term of \((2x+3)^4\).`, 81, "3⁴."),
  num(S`Find the coefficient of \(x^4\) in \((x+1)^{10}\).`, C(10, 6), "Row 10: 1, 10, 45, 120, 210, …"),
  num(S`Find the sum of the coefficients of \((x+1)^7\).`, 128, "Substitute x = 1: 2⁷."),
  num(S`Find the sum of the coefficients of \((2x-1)^5\).`, 1, "Substitute x = 1: 1⁵."),
  mc(S`Which is \((x-2)^3\)?`, S`\(x^3-6x^2+12x-8\)`, [S`\(x^3-6x^2-12x-8\)`, S`\(x^3-8\)`, S`\(x^3+6x^2+12x+8\)`], "Row 3 with b = −2."),
  mc(S`Which is \((2a+b)^3\)?`, S`\(8a^3+12a^2b+6ab^2+b^3\)`, [S`\(2a^3+6a^2b+6ab^2+b^3\)`, S`\(8a^3+3a^2b+3ab^2+b^3\)`, S`\(6a^3+12a^2b+6ab^2+b^3\)`], "(2a)³ = 8a³, 3(2a)²b = 12a²b, …"),
  ms("Which patterns appear in Pascal's triangle? Select all.", ["row sums are powers of 2", "the second diagonal is 1, 2, 3, 4, …", "the third diagonal is the triangular numbers", "every entry is odd", "rows are symmetric"], [0, 1, 2, 4], "Many entries are even (e.g. 2, 6)."),
  tf("The entries of row 7, other than the 1s, are all divisible by 7.", true, "7, 21, 35, 35, 21, 7."),
  tf(S`The expansion of \((x-y)^4\) has all positive coefficients.`, false, "The signs alternate."),
  num("How many shortest routes cross a 4-block by 3-block grid (right and up only)?", C(7, 3), "Row 7, position 3."),
  num("How many shortest routes cross a 5-block by 5-block grid?", C(10, 5), "Row 10, middle."),
  num("What is the sum of rows 0 to 6 of Pascal's triangle?", 127, "1 + 2 + … + 64."),
  num(S`In \((x+y)^8\), which term number (1st, 2nd, …) contains \(x^5y^3\)?`, 4, "Powers of y go 0, 1, 2, 3."),
  num(S`Find the middle term's coefficient of \((x+1)^6\).`, 20, "Row 6: 1, 6, 15, 20, …"),
  num("Rows 0 to 8 are shown. Find the hidden entry in row 8.", C(8, 3), "21 + 35.", pascalD(8, [[8, 3]])),
  num("On the 3-block by 2-block grid, how many shortest routes lead from A to B?", C(5, 2), "Row 5, position 2.", gridD(3, 2)),
];
