// MCR3U Worksheet 7.7 — Pascal's Triangle and Binomial Expansions (teacher edition)
import { pascalT, gridRoutesT, prow } from "./seqT.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Build the triangle", q: "Write rows 0 to 8 of Pascal's triangle.", fig: pascalT(8, { hl: 8 }), steps: ["Each entry is the sum of the two above it."], ans: `row 8: ${prow(8).join(", ")}` },
  { title: "Row sums", q: "Find the sum of each row from 0 to 5 and predict the sum of row 12.", steps: ["1, 2, 4, 8, 16, 32: powers of 2."], ans: S`$2^{12}=4096$` },
  { title: "Diagonals", q: "Read the first five numbers on the third diagonal (1, 3, 6, …). What are they?", steps: ["1, 3, 6, 10, 15: the triangular numbers."], ans: "triangular numbers" },
  { title: "Expand", q: S`Expand $(a+b)^5$.`, steps: ["Row 5: 1, 5, 10, 10, 5, 1."], ans: S`$a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5$` },
  { title: "Coefficients and signs", q: S`Expand $(x-2)^4$.`, steps: [S`$x^4+4x^3(-2)+6x^2(4)+4x(-8)+16$.`], ans: S`$x^4-8x^3+24x^2-32x+16$` },
  { title: "A coefficient on the first term", q: S`Expand $(3x+1)^3$.`, steps: [S`$(3x)^3+3(3x)^2+3(3x)+1$.`], ans: S`$27x^3+27x^2+9x+1$` },
  { title: "One term", q: S`Find the term containing $x^5$ in $(x+3)^7$.`, steps: [S`Row 7: 1, 7, 21, … The $x^5$ term: $21x^5\cdot3^2$.`], ans: S`$189x^5$` },
  { title: "Routes on a grid", q: "Count the shortest routes from A to B on a 3-block by 3-block grid (right and up only).", fig: gridRoutesT(3, 3, true), steps: ["Each corner = left neighbour + lower neighbour."], ans: "20 routes" },
  { title: "Checking an expansion", q: S`Check $(x-2)^4$ from Example 5 by substituting $x=1$.`, steps: [S`$(1-2)^4=1$; $1-8+24-32+16=1$ ✓.`], ans: "both give 1" },
];

const PROBLEMS = [
  { level: 1, q: "Write row 7 of Pascal's triangle.", recap: "Row.", ans: prow(7).join(", ") },
  { level: 1, q: "What is the sum of row 10?", recap: "Sum.", ans: "1024" },
  { level: 1, q: S`How many terms are in $(x+y)^{11}$?`, recap: "Terms.", ans: "12" },
  { level: 2, q: S`Expand $(x+3)^4$.`, recap: "Expand.", ans: S`$x^4+12x^3+54x^2+108x+81$` },
  { level: 2, q: S`Expand $(2a-b)^3$.`, recap: "Signs.", ans: S`$8a^3-12a^2b+6ab^2-b^3$` },
  { level: 2, q: S`Find the coefficient of $x^3$ in $(x+1)^8$.`, recap: "Coefficient.", ans: "56" },
  { level: 2, q: "Count the shortest routes from A to B (right and up only).", recap: "Routes.", ans: "15", fig: gridRoutesT(4, 2, false) },
  { level: 2, q: "Explain why every row of Pascal's triangle is symmetric.", recap: "Explain.", ans: "the rule treats left and right the same, starting from a symmetric row" },
  { level: 3, space: 4, q: S`Expand $(x^2-3)^4$.`, recap: "Powers of x².", ans: S`$x^8-12x^6+54x^4-108x^2+81$` },
  { level: 3, space: 4, q: S`Find the coefficient of $x^4$ in $(1-2x)^7$.`, recap: "One term.", ans: S`$35\cdot16=560$` },
  { level: 3, space: 4, q: S`Use the binomial expansion to evaluate $1.01^5$ to 6 decimals without a calculator, by writing it as $(1+0.01)^5$.`, recap: "Approximation.", ans: S`$1+0.05+0.001+0.00001+\ldots\approx1.051010$` },
  { level: 3, space: 4, q: "Find the sum of the entries in rows 0 to 9 of Pascal's triangle.", recap: "Series!", ans: S`$1+2+\cdots+512=2^{10}-1=1023$` },
  { level: 3, space: 5, q: "On a 5-block by 4-block grid, how many shortest routes pass through the corner that is 2 blocks right and 2 blocks up from the start?", recap: "Routes through a point.", ans: "6 routes to that corner × 10 routes from it to the end = 60" },
];

export const WS = {
  code: "7.7",
  title: "Pascal's Triangle and Binomial Expansions",
  bigideas: S`Each entry of Pascal's triangle is the sum of the two above it. Row $n$ gives the coefficients of $(a+b)^n$; powers of $a$ go down from $n$ to 0 and powers of $b$ go up. Row sums are $2^n$, and the same rule counts routes on a grid.`,
  goals: ["Build the triangle recursively.", "Identify patterns.", "Expand binomials.", "Find single coefficients; count routes."],
  curriculum: "C1.5, C1.6",
  vocab: [["Row n", "starts 1, n, …; top row is row 0"], ["Binomial", "two-term expression"], ["Expansion", "$(a+b)^n$ as a sum"]],
  hook: "Drop a marble through a peg board where each peg sends it left or right. How many paths reach each slot at the bottom?",
  concepts: [
    ["1. Building rows", S`${pascalT(5, { width: 5 })}Row 5: 1, 5, 10, 10, 5, 1.`],
    ["2. Expanding", S`$(a+b)^n$: coefficients from row $n$, exponents of $a$ falling, of $b$ rising, each term's exponents add to $n$.`],
    ["3. Signs", S`For $(a-b)^n$ write $b$ as $-b$: the signs alternate.`],
  ],
  tips: ["Top row = row 0.", "Bracket whole terms.", "Exponents add to n.", "Check with x = 1.", "Routes: add neighbours."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
