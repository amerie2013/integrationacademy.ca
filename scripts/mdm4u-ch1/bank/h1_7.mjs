// 1.7 Pascal's Triangle & Combinatorial Identities — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { pascalSvg, gridSvg } from "../../mdm4u/figs.mjs";
import { C } from "../../mdm4u/count.mjs";

/** shortest routes on a w × h grid avoiding closed edges [x1,y1,x2,y2] and corners [x,y] */
function routes(w, h, blocked = [], avoid = []) {
  const b = new Set(blocked.map((e) => e.join(","))), av = new Set(avoid.map((p) => p.join(","))), c = Array.from({ length: w + 1 }, () => Array(h + 1).fill(0));
  for (let x = 0; x <= w; x++) for (let y = 0; y <= h; y++) c[x][y] = av.has(`${x},${y}`) ? 0 : !x && !y ? 1 : (x && !b.has([x - 1, y, x, y].join(",")) ? c[x - 1][y] : 0) + (y && !b.has([x, y - 1, x, y].join(",")) ? c[x][y - 1] : 0);
  return c[w][h];
}
const oddCount = (rows) => { let c = 0; for (let n = 0; n < rows; n++) for (let r = 0; r <= n; r++) if (C(n, r) % 2) c++; return c; };

export const TOPIC = "1.7 Pascal's Triangle & Combinatorial Identities";
export const Q = [
  num("How many shortest routes on a 6 by 4 grid avoid both corners (2, 1) and (4, 3)?", routes(6, 4, [], [[2, 1], [4, 3]]), "Inclusion–exclusion: all − through P − through Q + through both."),
  num("How many shortest routes on a 5 by 5 grid pass through (1, 1) AND (4, 4)?", C(2, 1) * C(6, 3) * C(2, 1), "Three legs: ₂C₁ × ₆C₃ × ₂C₁."),
  num("The grid has two closed streets (red dashes). How many shortest routes from A to B?", routes(5, 3, [[1, 1, 2, 1], [3, 2, 3, 3]]), "Add corner by corner, skipping the closed streets.", gridSvg(5, 3, { blocked: [[1, 1, 2, 1], [3, 2, 3, 3]] })),
  num("The grid shows a lake: the corner marked L cannot be used. How many shortest routes avoid it?", routes(6, 3, [], [[3, 1]]), "All ₉C₃ − through L (₄C₁ × ₅C₂).", gridSvg(6, 3, { mark: [[3, 1, "L"]] })),
  num("Evaluate $\\binom{10}{0}+\\binom{10}{2}+\\binom{10}{4}+\\cdots+\\binom{10}{10}$ (the even positions).", 512, "Even and odd positions each sum to half of 2¹⁰."),
  num("Find $\\binom{4}{4}+\\binom{5}{4}+\\binom{6}{4}+\\cdots+\\binom{12}{4}$.", C(13, 5), "Hockey stick: ₁₃C₅."),
  num("Simplify $\\binom{n}{r}+2\\binom{n}{r+1}+\\binom{n}{r+2}$ to a single combination and evaluate it for $n=8$, $r=2$.", C(10, 4), "Apply Pascal's rule twice: ₙ₊₂C_{r+2}."),
  num("How many odd numbers are there in rows 0 to 7 of Pascal's triangle?", oddCount(8), "Each of rows 0–7 has 2^(number of 1s in n's binary form) odd entries: 1 + 2 + 2 + 4 + 2 + 4 + 4 + 8."),
  num("Solve $\\binom{n}{2}+\\binom{n}{3}=\\binom{11}{3}$.", 10, "Pascal's rule: the left side is ₙ₊₁C₃."),
  num("Solve $\\binom{15}{r}=\\binom{15}{2r-3}$ for $r\\ne3$.", 6, "r + (2r − 3) = 15."),
  num("The highlighted entries are the sum of a row. Which power of 2 is it? Enter the sum.", 2 ** 7, "Row 7 sums to 2⁷.", pascalSvg(8, { hl: Array.from({ length: 8 }, (_, r) => [7, r]) })),
  num("The six green entries surround the red entry 20. What is the sum of the six green entries?", C(5, 2) + C(5, 3) + C(6, 2) + C(6, 4) + C(7, 3) + C(7, 4), "Above: 10, 10; beside: 15, 15; below: 35, 35.", pascalSvg(8, { hl: [[6, 3]], hl2: [[5, 2], [5, 3], [6, 2], [6, 4], [7, 3], [7, 4]] })),
  num("A rook moves only right or up on a chessboard from the bottom-left corner to the top-right corner. How many shortest paths avoid the centre square (3, 3)? (Squares 0–7.)", routes(7, 7, [], [[3, 3]]), "All ₁₄C₇ − through (3, 3): ₆C₃ × ₈C₄."),
  num("How many shortest routes on a 3 by 3 by 3 cube grid (3 moves in each of x, y, z) are there?", 9 * 8 * 7 * 6 * 5 * 4 / (6 * 6), "Arrange XXXYYYZZZ: 9!/(3! 3! 3!)."),
  ms("Which identities are true? Select all.", ["$\\binom{n}{1}+\\binom{n}{2}=\\binom{n+1}{2}$", "$\\sum_{r=0}^{n}\\binom nr=2^n$", "$\\binom{2n}{n}=2\\binom{2n-1}{n}$", "$\\binom{n}{r}=\\binom{n}{r-1}$ for all r", "$\\binom 52^2=\\binom{10}{4}$"], [0, 1, 2], "Check each with small numbers."),
  mc("On a 5 by 5 grid, which corner has the most shortest routes from A passing through it, among (1, 4), (2, 3), (3, 3), (4, 1)?", "(3, 3)", ["(1, 4)", "(2, 3)", "(4, 1)"], `Through (x, y): ₓ₊ᵧCₓ × (10 − x − y)C(5 − x): ${[[1, 4], [2, 3], [3, 3], [4, 1]].map(([x, y]) => C(x + y, x) * C(10 - x - y, 5 - x)).join(", ")}.`),
  tf("The entries of row 11 are all odd.", false, "Only rows 2ᵏ − 1 (1, 3, 7, 15, …) are all odd."),
  tf("Every entry in row p (p a prime) other than the two 1s is divisible by p.", true, "e.g. row 7: 7, 21, 35 are multiples of 7."),
  num("In how many ways can you walk from A to B on a 4 by 3 grid if you must use the street from (2, 1) to (3, 1)?", C(3, 1) * C(3, 2), "Routes to (2, 1): ₃C₁ = 3; from (3, 1) to (4, 3) is 1 east and 2 north: ₃C₁ = 3; 3 × 3."),
  num("What is the sum of the entries of rows 0 to 9 of Pascal's triangle?", 2 ** 10 - 1, "1 + 2 + 4 + … + 2⁹ = 2¹⁰ − 1."),
];
