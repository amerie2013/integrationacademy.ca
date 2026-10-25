// 1.7 Pascal's Triangle & Combinatorial Identities — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { pascalSvg, gridSvg } from "../../mdm4u/figs.mjs";
import { C } from "../../mdm4u/count.mjs";

export const E = [
  num("What is the second entry (position 1) of row 9 of Pascal's triangle?", 9, "Row n starts 1, n."),
  num("What is the middle entry of row 4?", 6, "1 4 6 4 1."),
  num("What is the sum of the entries in row 5?", 32, "2⁵."),
  num("What is the sum of the entries in row 7?", 128, "2⁷."),
  num("How many entries are in row 10?", 11, "n + 1."),
  num("What is the entry in row 5, position 2?", C(5, 2), "₅C₂."),
  num("What is the entry in row 7, position 3?", C(7, 3), "₇C₃."),
  num("Read the highlighted entry of the triangle.", C(6, 4), "Row 6, position 4.", pascalSvg(7, { hl: [[6, 4]] })),
  num("The two green entries add to the red entry. What is the red entry?", C(5, 2), "4 + 6.", pascalSvg(6, { hl: [[5, 2]], hl2: [[4, 1], [4, 2]] })),
  num("How many shortest routes are there on a 2 by 2 grid?", 6, "₄C₂."),
  num("How many shortest routes are there on a 3 by 2 grid (3 east, 2 north)?", 10, "₅C₂.", gridSvg(3, 2)),
  mc("Which rule builds Pascal's triangle?", "each entry is the sum of the two entries above it", ["each entry is double the one above it", "each row adds 1 to every entry", "each entry is the product of the two above it"], "Pascal's rule."),
  mc("Which identity is Pascal's rule?", "$\\binom{n}{r}=\\binom{n-1}{r-1}+\\binom{n-1}{r}$", ["$\\binom{n}{r}=\\binom{n}{n-r}$", "$\\binom nr=\\frac{n!}{r!}$", "$\\binom{n}{r}=2^n$"], "Sum of the two above."),
  tf("Every row of Pascal's triangle begins and ends with 1.", true, "nC0 = nCn = 1."),
  tf("Each row of Pascal's triangle reads the same forwards and backwards.", true, "Symmetry nCr = nC(n − r)."),
  tf("The top row (a single 1) is called row 1.", false, "It is row 0."),
  num("Write $\\binom{6}{2}+\\binom{6}{3}$ as a single number.", C(7, 3), "Pascal's rule: ₇C₃."),
  num("What is the third entry (position 2) of row 6?", C(6, 2), "₆C₂."),
  num("What is the sum of the entries in row 0?", 1, "2⁰."),
  num("How many shortest routes are there from A to B on a 4 by 1 grid?", 5, "₅C₁."),
];

export const M = [
  num("Write row 7 of Pascal's triangle. What is its largest entry?", C(7, 3), "1 7 21 35 35 21 7 1."),
  num("$\\binom{9}{4}+\\binom{9}{5}=\\binom{n}{r}$. What is the value?", C(10, 5), "₁₀C₅."),
  num("In which row do the entries add to 512?", 9, "2⁹."),
  num("How many shortest routes are there on a 5 by 5 grid?", C(10, 5), "₁₀C₅."),
  num("How many shortest routes on a 4 by 4 grid pass through the corner (2, 2)?", C(4, 2) * C(4, 2), "₄C₂ × ₄C₂."),
  num("How many shortest routes on a 4 by 4 grid avoid the corner (2, 2)?", C(8, 4) - 36, "70 − 36."),
  num("Evaluate $\\binom{3}{2}+\\binom{4}{2}+\\binom{5}{2}+\\binom{6}{2}$ using the hockey stick.", C(7, 3) - 1, "₂C₂ is missing: ₇C₃ − ₂C₂ = 35 − 1."),
  num("The third diagonal (1, 3, 6, 10, …) gives $\\binom n2$. What is its 10th number?", C(11, 2), "Starting at ₂C₂, the 10th is ₁₁C₂."),
  num("What is the sum of the entries in rows 0 to 5 together?", 63, "1 + 2 + 4 + 8 + 16 + 32."),
  num("Find $n$: $\\binom{n}{4}=\\binom{n}{6}$.", 10, "Symmetry: 4 + 6 = n."),
  num("Read the grid: how many shortest routes from A to B?", C(7, 3), "₇C₃ (4 east, 3 north).", gridSvg(4, 3, { counts: true })),
  num("The highlighted entries lie on a diagonal. What is their sum? (Use the hockey stick.)", C(7, 4), "1 + 4 + 10 + 20 = ₇C₄.", pascalSvg(7, { hl2: [[3, 3], [4, 3], [5, 3], [6, 3]] })),
  ms("Which are entries of row 8? Select all.", ["8", "28", "56", "70", "36"], [0, 1, 2, 3], "1 8 28 56 70 56 28 8 1."),
  mc("Which expression equals $\\binom{12}{5}$?", "$\\binom{11}{4}+\\binom{11}{5}$", ["$\\binom{11}{5}+\\binom{11}{6}$", "$\\binom{12}{4}+\\binom{12}{6}$", "$2\\binom{11}{5}$"], "Pascal's rule."),
  tf("The sum of row 10 is 1000.", false, "2¹⁰ = 1024."),
  tf("The number of shortest routes from A to B equals the number of routes from B back to A.", true, "Same moves in reverse."),
  num("A grid is 6 blocks east and 3 blocks north. How many shortest routes start by going north?", C(8, 2), "After one N: 6 E and 2 N left."),
  num("How many subsets does a set of 6 objects have (including the empty set)?", 64, "Row 6 sum."),
  num("Evaluate $\\binom{20}{0}+\\binom{20}{1}+\\cdots+\\binom{20}{20}$ divided by $2^{18}$.", 4, "2²⁰ ÷ 2¹⁸."),
  num("What is the alternating sum $1-5+10-10+5-1$ of row 5?", 0, "Positive and negative terms cancel."),
];
