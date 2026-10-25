// MDM4U Worksheet 1.7 — Pascal's Triangle & Combinatorial Identities (teacher edition)
import { svgT, pascalSvg, gridSvg } from "./figT.mjs";
import { C } from "../../mdm4u/count.mjs";

const S = String.raw;
function routes(w, h, blocked = [], avoid = []) {
  const b = new Set(blocked.map((e) => e.join(","))), av = new Set(avoid.map((p) => p.join(","))), c = Array.from({ length: w + 1 }, () => Array(h + 1).fill(0));
  for (let x = 0; x <= w; x++) for (let y = 0; y <= h; y++) c[x][y] = av.has(`${x},${y}`) ? 0 : !x && !y ? 1 : (x && !b.has([x - 1, y, x, y].join(",")) ? c[x - 1][y] : 0) + (y && !b.has([x, y - 1, x, y].join(",")) ? c[x][y - 1] : 0);
  return c[w][h];
}
const closed = routes(4, 4, [[1, 2, 2, 2]]);
const twoBad = routes(5, 4, [], [[1, 1], [4, 3]]);

const EXAMPLES = [
  { title: "Building rows", q: "Write rows 0 to 6 of Pascal's triangle.", fig: svgT(pascalSvg(7), 6.2), steps: ["Start with 1; each entry is the sum of the two above; edges are 1."], ans: "row 6: 1 6 15 20 15 6 1" },
  { title: "Entries as combinations", q: "Which entry of Pascal's triangle is $\\binom{9}{4}$, and what is its value?", steps: [S`Row 9, position 4 (counting from 0): $126$.`], ans: "126" },
  { title: "Pascal's rule", q: "Write $\\binom{15}{7}$ as the sum of two combinations from row 14.", steps: [S`$\binom{15}7=\binom{14}6+\binom{14}7$.`, S`$=3003+3432=6435$.`], ans: S`$\binom{14}6+\binom{14}7=6435$` },
  { title: "Rule in reverse", q: "Simplify $\\binom{20}{11}+\\binom{20}{12}$.", steps: [S`Pascal's rule: $\binom{21}{12}$.`], ans: S`$\binom{21}{12}$` },
  { title: "Row sums", q: "Show that the entries of row 5 add to $2^5$.", steps: [S`$1+5+10+10+5+1=32=2^5$.`], ans: "32" },
  { title: "Diagonals", q: "The third diagonal of Pascal's triangle is 1, 3, 6, 10, 15, … Write these as combinations.", fig: svgT(pascalSvg(7, { hl: [[2, 2], [3, 2], [4, 2], [5, 2], [6, 2]] }), 5.6), steps: [S`They are $\binom22,\binom32,\binom42,\ldots$ — the triangular numbers $\frac{n(n-1)}2$.`], ans: S`$\binom n2$` },
  { title: "Routes", q: "How many shortest routes from A to B on a 5 by 3 grid?", fig: svgT(gridSvg(5, 3, { counts: true }), 5), steps: [S`Add from the corner: the numbers are Pascal's triangle. Or $\binom83=56$.`], ans: "56" },
  { title: "Closed street", q: "On a 4 by 4 grid the street between (1, 2) and (2, 2) is closed. How many shortest routes?", fig: svgT(gridSvg(4, 4, { counts: true, blocked: [[1, 2, 2, 2]] }), 5), steps: ["Write 0 contributions across the closed street and keep adding.", S`Check: all $\binom84=70$; routes using the closed street = (routes to (1, 2)) $\times$ (routes from (2, 2)) $=\binom31\binom42=18$; $70-18=52$.`], ans: `${closed}` },
  { title: "Avoiding two corners", q: "On a 5 by 4 grid, how many routes avoid both corner P(1, 1) and corner Q(4, 3)?", steps: [S`All: $\binom94=126$. Through P: $\binom21\binom73=70$. Through Q: $\binom73\binom21=70$. Through both: $\binom21\binom52\binom21=40$.`, S`$126-70-70+40=26$.`], ans: `${twoBad}` },
];

const PROBLEMS = [
  { level: 1, q: "Write row 8 of Pascal's triangle.", ans: "1 8 28 56 70 56 28 8 1" },
  { level: 1, q: "Express as a single combination: (a) $\\binom{7}{2}+\\binom{7}{3}$ (b) $\\binom{12}{8}+\\binom{12}{9}$.", ans: S`(a) $\binom83$ (b) $\binom{13}9$` },
  { level: 1, q: "What is the sum of the entries in row 10?", ans: "1024" },
  { level: 2, q: "How many shortest routes are there on a 6 by 6 grid (6 east, 6 north)?", ans: S`$\binom{12}6=924$` },
  { level: 2, q: "Find $n$ and $r$: $\\binom{n}{r}=\\binom{11}{4}+\\binom{11}{5}$.", ans: S`$n=12$, $r=5$` },
  { level: 2, q: "Use the grid to count the routes from A to B that pass through point P.", fig: svgT(gridSvg(5, 3, { mark: [[2, 2, "P"]] }), 4.6), ans: S`$\binom42\times\binom41=6\times4=24$`, space: 4 },
  { level: 2, q: "Show that the hockey-stick sum $\\binom{4}{4}+\\binom{5}{4}+\\binom{6}{4}+\\binom{7}{4}$ equals $\\binom{8}{5}$.", ans: S`$1+5+15+35=56=\binom85$` },
  { level: 2, q: "In which row of Pascal's triangle do the entries add up to 4096?", ans: S`$2^{12}$: row 12` },
  { level: 3, space: 4.5, q: "Prove Pascal's rule algebraically: $\\binom{n-1}{r-1}+\\binom{n-1}{r}=\\binom{n}{r}$. (Hint: common denominator $r!\\,(n-r)!$.)", ans: S`$\frac{(n-1)!\,r+(n-1)!\,(n-r)}{r!\,(n-r)!}=\frac{(n-1)!\,n}{r!\,(n-r)!}=\binom nr$` },
  { level: 3, space: 4.5, q: "On a 6 by 4 grid, how many shortest routes avoid the corner (3, 2)?", ans: S`$\binom{10}4-\binom52\binom52=210-100=110$` },
  { level: 3, space: 4.5, q: "Use the grid with two closed streets to count the shortest routes from A to B.", fig: svgT(gridSvg(4, 3, { blocked: [[1, 0, 2, 0], [2, 2, 2, 3]] }), 4.6), ans: `${routes(4, 3, [[1, 0, 2, 0], [2, 2, 2, 3]])}` },
  { level: 3, space: 4.5, q: "Explain why the alternating sum of row $n$ (for $n\\ge1$), $\\binom n0-\\binom n1+\\binom n2-\\cdots$, equals 0. Check it for row 6.", ans: S`it is $(1-1)^n=0$ by the binomial theorem, or the even-sized and odd-sized subsets are equal in number; row 6: $1-6+15-20+15-6+1=0$` },
  { level: 3, space: 5, q: "A checker starts on a corner square of a board and moves only up or right one square at a time. How many shortest paths reach the square 7 right and 5 up? How many of them pass through the square 3 right and 3 up?", ans: S`$\binom{12}5=792$; through: $\binom63\binom62=20\times15=300$` },
];

export const WS = {
  code: "1.7",
  title: "Pascal's Triangle & Combinatorial Identities",
  bigideas: S`Row $n$ of Pascal's triangle (top row = row 0) lists $\binom n0,\binom n1,\ldots,\binom nn$. Each entry is the sum of the two above it: Pascal's rule $\binom nr=\binom{n-1}{r-1}+\binom{n-1}r$. Rows sum to $2^n$. Shortest routes on a grid follow the same adding rule, so a route with $a$ east and $b$ north moves can be chosen in $\binom{a+b}a$ ways.`,
  goals: ["Build the triangle and read nCr from it.", "Use Pascal's rule, symmetry, row sums and the hockey stick.", "Count grid routes, including through or avoiding points.", "Explain identities by counting."],
  curriculum: "A2.4 (connections between combinations and Pascal's triangle; routes on a street grid in a variety of ways)",
  vocab: [["Row n", "the row beginning 1, n"], ["Pascal's rule", "$\\binom nr=\\binom{n-1}{r-1}+\\binom{n-1}r$"], ["Hockey stick", "a diagonal sum equals the entry below and beside its end"]],
  hook: "A school is 5 blocks west and 3 blocks south of a student's home. How many shortest walking routes are there? Find the answer three different ways.",
  concepts: [
    ["1. The triangle", S`${svgT(pascalSvg(6, { notation: true }), 6)}Edges are 1; inside entries are sums of the two above.`],
    ["2. Identities", S`Symmetry $\binom nr=\binom n{n-r}$; row sum $2^n$; Pascal's rule; hockey stick $\sum_{k=r}^{n}\binom kr=\binom{n+1}{r+1}$.`],
    ["3. Routes", S`Corner value = left + below. Through P: multiply the legs. Avoiding P: total $-$ through P.`],
  ],
  tips: ["Count rows and positions from 0.", "Pascal's rule needs neighbouring r values in the same row.", "Closed street: do not add across it.", "Two forbidden points: inclusion–exclusion.", "Check a route count with $\\binom{a+b}a$."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
