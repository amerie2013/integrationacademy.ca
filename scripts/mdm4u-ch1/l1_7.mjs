// MDM4U 1.7 — Pascal's Triangle & Combinatorial Identities: building the triangle, entries as nCr, Pascal's rule
// nCr = (n−1)C(r−1) + (n−1)Cr, row sums 2ⁿ, the hockey-stick pattern, and counting routes on grids (with obstacles
// and required points)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, pascalSvg, gridSvg } from "./lib.mjs";
import { C, t, n } from "../mdm4u/count.mjs";

export const TITLE = "1.7 Pascal's Triangle & Combinatorial Identities";
export const ID = "243301a6-6935-411d-9724-fce40242c8ec";
const S = String.raw;

/** shortest routes on a w × h grid avoiding removed edges, by Pascal's rule */
function routes(w, h, blocked = []) {
  const b = new Set(blocked.map((e) => e.join(","))), c = Array.from({ length: w + 1 }, () => Array(h + 1).fill(0));
  for (let x = 0; x <= w; x++) for (let y = 0; y <= h; y++) c[x][y] = !x && !y ? 1 : (x && !b.has([x - 1, y, x, y].join(",")) ? c[x - 1][y] : 0) + (y && !b.has([x, y - 1, x, y].join(",")) ? c[x][y - 1] : 0);
  return c[w][h];
}
const blockedEx = routes(5, 3, [[2, 1, 3, 1]]);

export const blocks = () => [
  intro({
    icon: "🔺",
    title: "Pascal's Triangle & Combinatorial Identities",
    overview: S`<strong>Pascal's triangle</strong> starts with 1 at the top; each row begins and ends with 1, and every other entry is the sum of the two entries just above it. Row \(n\) (counting the top as row 0) lists the combinations \(\binom n0,\binom n1,\ldots,\binom nn\). The building rule is <strong>Pascal's rule</strong>: \[\binom nr=\binom{n-1}{r-1}+\binom{n-1}{r}.\] The triangle hides many identities, and it counts routes on a street grid.`,
    goals: [
      "build Pascal's triangle and identify the entry in row n, position r, as nCr;",
      "state and explain Pascal's rule;",
      "use row sums (2ⁿ), symmetry and the hockey-stick pattern;",
      "count shortest routes on a grid with Pascal's triangle and with combinations;",
      "count routes that avoid an obstacle or pass through a given point.",
    ],
    curriculum: "A2.4 (make connections between combinations and Pascal's triangle, e.g. nC2 and diagonal 3); A2.4 sample problem (routes on a street grid in a variety of ways)",
    prior: [
      ["Evaluate ₅C₂.", "10."],
      ["How many arrangements of EEENN?", "5!/(3! 2!) = 10."],
      ["Evaluate 2⁶.", "64."],
    ],
    words: [
      ["Row n", "the row that starts 1, n, … (the top 1 is row 0)", "row 4: 1 4 6 4 1"],
      ["Pascal's rule", "nCr = (n−1)C(r−1) + (n−1)Cr", "₆C₂ = ₅C₁ + ₅C₂ = 5 + 10"],
      ["Diagonal", "an entry line running down-left or down-right", "diagonal 3: 1, 3, 6, 10, … = nC2"],
      ["Shortest route", "a route that only moves toward the destination", "only east and north"],
    ],
  }),

  section("📌 Building the triangle", S`
  ${fig(pascalSvg(9, { hl: [[6, 2]], hl2: [[5, 1], [5, 2]], sums: true }), "15 = 5 + 10 (Pascal's rule); each row sums to a power of 2")}
  ${fig(pascalSvg(5, { notation: true, hl: [[4, 2]] }), "the same triangle written as combinations: row n, position r is \\(\\binom nr\\)")}
  ${table(["Pattern", "In symbols", "Why"], [["edges are 1", "\\(\\binom n0=\\binom nn=1\\)", "one way to choose none / all"], ["symmetry", "\\(\\binom nr=\\binom n{n-r}\\)", "take r = leave n − r"], ["row sum", "\\(\\binom n0+\\binom n1+\\cdots+\\binom nn=2^n\\)", "every subset of n objects"], ["Pascal's rule", "\\(\\binom nr=\\binom{n-1}{r-1}+\\binom{n-1}r\\)", "see below"]])}`),

  section("📌 Why Pascal's rule works", S`
  <p>Choose \(r\) people from \(n\), and look at one particular person, Zoe. Either Zoe is chosen — then pick the other \(r-1\) from the remaining \(n-1\): \(\binom{n-1}{r-1}\) — or Zoe is not chosen — then pick all \(r\) from the remaining \(n-1\): \(\binom{n-1}r\). The two cases cannot overlap, so add.</p>
  <p><strong>Hockey stick:</strong> add down a diagonal and the total sits just below and to the side of the last entry: \(1+3+6+10=20=\binom63\).</p>
  ${fig(pascalSvg(7, { hl2: [[2, 2], [3, 2], [4, 2], [5, 2]], hl: [[6, 3]] }), "1 + 3 + 6 + 10 = 20: the hockey-stick pattern")}
  ${keyIdea(S`Pascal's rule is the additive principle: split the selections into “contains a particular object” and “does not”.`)}`),

  section("📌 Routes on a grid", S`
  <p>To walk from A to B, 4 blocks east and 3 blocks north, using only shortest routes: the number of routes to each corner is the sum of the routes to the corner on its left and the corner below it — Pascal's rule again.</p>
  ${fig(gridSvg(4, 3, { counts: true }), "35 routes = \\(\\binom73\\): choose which 3 of the 7 moves go north")}
  <p>With an obstacle, write 0 at the blocked corner (or skip the closed street) and keep adding.</p>
  ${fig(gridSvg(5, 3, { counts: true, blocked: [[2, 1, 3, 1]] }), `street between (2, 1) and (3, 1) closed: ${blockedEx} routes`)}
  ${keyIdea(S`A grid route with \(a\) moves east and \(b\) moves north: \(\binom{a+b}a=\frac{(a+b)!}{a!\,b!}\). Through a point P: (routes A→P) × (routes P→B).`)}`),

  section("📌 Explore", S`<p>Change the grid size; the corner numbers are Pascal's triangle on its side. Choose a corner to avoid and compare with the complement.</p>`),

  widget("pascalPaths", { init: [5, 3] }),

  section("📌 Watch out", watchOut([
    "The top 1 is row 0, and the first entry of each row is position 0: row 6, position 2 is ₆C₂ = 15.",
    "Pascal's rule adds the two entries directly above: same position and one to the left in the previous row.",
    "Routes through a point: multiply the two legs. Routes avoiding a point: total − through.",
    "Only count shortest routes (no backtracking) unless the question says otherwise.",
  ])),

  examples([
    ["Reading the triangle", "Write row 7 of Pascal's triangle and use it to give ₇C₃.",
      [S`Row 6 is 1 6 15 20 15 6 1. Add neighbours: 1, 7, 21, 35, 35, 21, 7, 1.`, S`Position 3: \(\binom73=35\).`],
      "row 7: 1 7 21 35 35 21 7 1; ₇C₃ = 35"],
    ["Pascal's rule", "Write ₁₂C₅ + ₁₂C₆ as a single combination.",
      [S`Pascal's rule with \(n=13,\ r=6\): \(\binom{12}5+\binom{12}6=\binom{13}6\).`, S`\(=1716\).`],
      "₁₃C₆ = 1716"],
    ["Row sums", "What is the sum of the entries in row 11 of Pascal's triangle? What does it count?",
      [S`\(2^{11}=2048\).`, S`It is the number of subsets of a set of 11 objects (including the empty set).`],
      "2048"],
    ["Grid routes", "How many shortest routes go from A to B on a grid 6 blocks east and 4 blocks north?",
      [S`10 moves, 6 E and 4 N: \(\binom{10}4=210\).`],
      "210",
      fig(gridSvg(6, 4, { path: "RRURRURURU" }), "one of the 210 routes")],
    ["Through a point", "On the same 6 × 4 grid, how many routes pass through P, which is 2 east and 1 north of A?",
      [S`A→P: 2 E, 1 N: \(\binom31=3\).`, S`P→B: 4 E, 3 N: \(\binom73=35\).`, S`\(3\times35=105\).`],
      "105",
      fig(gridSvg(6, 4, { mark: [[2, 1, "P"]] }))],
  ]),

  practice([
    q("entry", "What is the entry in row 8, position 3, of Pascal's triangle?", num(C(8, 3)), "₈C₃.", [S`\(\frac{8\times7\times6}{6}\).`], "56"),
    q("rule", "₉C₄ + ₉C₅ equals ₙCᵣ for which value of ₙCᵣ? Enter the number.", num(C(10, 5)), "Pascal's rule: ₁₀C₅.", [S`\(\binom{10}5=252\).`], "252"),
    q("sum", "What is the sum of row 9?", num(512), "2⁹.", [S`\(2^9\).`], "512"),
    q("routes", "How many shortest routes on a grid 3 blocks east and 3 blocks north?", num(20), "₆C₃.", [S`\(\binom63\).`], "20"),
    q("symmetry", "Which equals ₂₀C₁₇?", choice(["₂₀C₃", "₂₀C₁₇ only", "₁₇C₃", "₂₀C₁"], 0), "Take 17 = leave 3.", [S`\(\binom{20}{17}=\binom{20}3\).`], "₂₀C₃"),
  ]),

  ...hard([
    ["Avoiding a point", "On a 5 × 4 grid (5 east, 4 north), how many shortest routes from A to B avoid the corner Q at (3, 2)?",
      [S`All routes: \(\binom94=126\).`, S`Through Q: \(\binom52\cdot\binom31=10\times3=30\).`, S`Avoiding Q: \(126-30=96\).`],
      `${C(9, 4) - C(5, 2) * C(3, 1)}`,
      fig(gridSvg(5, 4, { mark: [[3, 2, "Q"]] }))],
    ["The hockey stick", "Show that ₂C₂ + ₃C₂ + ₄C₂ + ₅C₂ + ₆C₂ = ₇C₃ and evaluate it.",
      [S`\(1+3+6+10+15=35\).`, S`\(\binom73=35\) ✓. By Pascal's rule, \(\binom33+\binom32=\binom43\), then \(\binom43+\binom42=\binom53\), and so on down the diagonal.`],
      "35"],
  ], [
    q("hard", "How many shortest routes on a 4 × 4 grid pass through the centre point (2, 2)?", num(C(4, 2) * C(4, 2)), "Two legs, each 2 E and 2 N.", [S`\(\binom42\times\binom42=6\times6\).`], "36"),
    q("hard", "Evaluate ₃C₃ + ₄C₃ + ₅C₃ + ₆C₃ + ₇C₃ + ₈C₃ using the hockey stick.", num(C(9, 4)), "The sum is ₉C₄.", [S`\(1+4+10+20+35+56=126=\binom94\).`], "126"),
    q("hard", "A rook moves from the bottom-left to the top-right corner of a chessboard (7 moves right, 7 up, one square at a time). How many shortest paths?", num(C(14, 7)), "14 moves, choose 7 to be right.", [S`\(\binom{14}7\).`], "3432"),
  ]),

  wrapUp({
    qas: [
      ["Why do the rows of Pascal's triangle give combinations?", "Both follow the same rule: edges are 1, and each entry is the sum of the two above (Pascal's rule)."],
      ["Why does row n add up to 2ⁿ?", "The row counts subsets of every size from a set of n objects; each object is in or out, 2ⁿ subsets in total."],
      ["How do grid routes connect to Pascal?", "Routes to a corner = routes to the corner on its left + routes to the corner below, so the corner numbers build Pascal's triangle."],
      ["How do I handle a closed street or a forbidden corner?", "Put 0 there (or skip the closed edge) and keep adding, or subtract the routes through it from the total."],
      ["What is the hockey-stick identity?", "A sum down a diagonal, rCr + (r+1)Cr + … + nCr, equals (n+1)C(r+1): the entry just below and beside the last one."],
    ],
    summary: [
      "Row n, position r = nCr (top row is row 0).",
      "Pascal's rule: nCr = (n−1)C(r−1) + (n−1)Cr.",
      "Row sum 2ⁿ; symmetry nCr = nC(n−r).",
      "Grid routes: (a + b)C a; through P multiply, avoid P subtract.",
    ],
    next: "1.8 uses row n of Pascal's triangle to expand (a + b)ⁿ: the binomial theorem.",
  }),
];
