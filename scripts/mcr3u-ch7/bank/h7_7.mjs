// 7.7 Pascal's Triangle and Binomial Expansions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { pascalD, gridD, prow } from "./fig.mjs";

const S = String.raw;
const C = (n, k) => prow(n)[k];

export const TOPIC = "7.7 Pascal's Triangle and Binomial Expansions";
export const Q = [
  num(S`Find the coefficient of \(x^5\) in \((2x-1)^7\).`, C(7, 2) * 32, "21 · (2x)⁵ · (−1)²."),
  num(S`Find the coefficient of \(x^3\) in \((1-3x)^6\).`, C(6, 3) * -27, "20 · (−3x)³."),
  num(S`Find the coefficient of \(x^2y^3\) in \((2x+y)^5\).`, C(5, 3) * 4, "10 · (2x)² y³."),
  num(S`Find the coefficient of \(x^6\) in \((x^2+2)^5\).`, C(5, 2) * 4, "(x²)³ term: 10 · 2²."),
  num(S`Find the constant term in \(\left(x+\frac1x\right)^6\).`, C(6, 3), "x³ · (1/x)³: middle term 20."),
  num(S`Find the coefficient of \(x^4\) in \(\left(x^2-\frac2x\right)^5\).`, C(5, 2) * 4, "10 · (x²)³ · (−2/x)² = 10 · 4x⁴ = 40x⁴."),
  num(S`Use \((1+0.02)^4\) to find \(1.02^4\) to 6 decimals.`, Math.round(1.02 ** 4 * 1e6) / 1e6, "1 + 0.08 + 0.0024 + 0.000032 + …", null, 0.000001),
  num(S`The sum of the coefficients of \((ax+1)^4\) is 81 with \(a>0\). Find \(a\).`, 2, "(a + 1)⁴ = 81."),
  num(S`In \((x+k)^5\), the coefficient of \(x^3\) is 90 with \(k>0\). Find \(k\).`, 3, "10k² = 90."),
  num("How many shortest routes cross a 6-block by 4-block grid?", C(10, 4), "Row 10, position 4."),
  num("On a 4-block by 4-block grid, how many shortest routes pass through the centre corner (2, 2)?", C(4, 2) * C(4, 2), "6 × 6.", gridD(4, 4)),
  num("What is the sum of the entries of rows 0 to 10?", 2047, "2¹¹ − 1."),
  num("What is the sum of the entries in the 3rd diagonal (1, 3, 6, 10, …) from row 2 to row 8?", 1 + 3 + 6 + 10 + 15 + 21 + 28, "The hockey-stick pattern: it equals the entry below-right, 84."),
  tf(S`\((x+y)^n\) always has \(n+1\) terms.`, true, "Powers of y go from 0 to n."),
  tf("All the entries in row 8 except the 1s are even.", true, "8, 28, 56, 70, 56, 28, 8."),
  ms(S`Which are terms of \((x-2)^5\)? Select all.`, [S`\(x^5\)`, S`\(-10x^4\)`, S`\(40x^3\)`, S`\(-80x^2\)`, S`\(-32\)`, S`\(32\)`], [0, 1, 2, 3, 4], "Coefficients 1, −10, 40, −80, 80, −32."),
  mc(S`Which is \((x^2-y)^4\)?`, S`\(x^8-4x^6y+6x^4y^2-4x^2y^3+y^4\)`, [S`\(x^8+4x^6y+6x^4y^2+4x^2y^3+y^4\)`, S`\(x^6-4x^4y+6x^3y^2-4xy^3+y^4\)`, S`\(x^8-4x^6y-6x^4y^2-4x^2y^3+y^4\)`], "Row 4 with alternating signs; (x²)⁴ = x⁸."),
  num("What number replaces the question mark (row 10)?", C(10, 4), "84 + 126.", pascalD(10, [[10, 4]])),
  num("On the 5-block by 4-block grid, how many shortest routes lead from A to B?", C(9, 4), "Row 9, position 4.", gridD(5, 4)),
  num("The triangle shows rows 0 to 7. What is the sum of the row containing the question mark?", 128, "Row 7: 2⁷.", pascalD(7, [[7, 2]])),
];
