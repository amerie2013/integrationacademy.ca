// MCR3U 7.7 — Pascal's Triangle and Binomial Expansions: building the triangle, patterns (row sums, diagonals),
// expanding (a + b)ⁿ, finding one coefficient, counting routes on a grid
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";

export const TITLE = "7.7 Pascal's Triangle and Binomial Expansions";
export const ID = "bccefc2b-f527-4d77-bb44-0ab580b0f908";
const S = String.raw;
const row = (n) => { const r = [1]; for (let k = 1; k <= n; k++) r.push((r[k - 1] * (n - k + 1)) / k); return r; };

export const blocks = () => [
  intro({
    icon: "🔺",
    title: "Pascal's Triangle and Binomial Expansions",
    overview: S`Pascal's triangle starts with 1 at the top; every other entry is the sum of the two entries above it. Its rows hide many patterns — powers of 2, the natural numbers, the triangular numbers — and they give the coefficients for expanding a binomial \((a+b)^n\). In this lesson you will build the triangle, find patterns recursively, expand binomials efficiently and find a single term without expanding everything.`,
    goals: [
      "build Pascal's triangle with the recursive rule;",
      "identify patterns such as row sums and diagonals;",
      "expand (a + b)ⁿ using row n;",
      "expand binomials such as (2x − 3)⁴ with coefficients and signs;",
      "find one term or coefficient, and count routes on a grid.",
    ],
    curriculum: "C1.5 (determine, through investigation, recursive patterns in the Fibonacci sequence, in related sequences and in Pascal's triangle, and represent the patterns in a variety of ways), C1.6 (determine the relationship between Pascal's triangle and the expansion of binomials, and apply the relationship to expand binomials raised to whole-number exponents)",
    prior: [
      [S`Expand \((x+y)^2\).`, S`\(x^2+2xy+y^2\).`],
      [S`Evaluate \((-3)^3\).`, "−27."],
      [S`Simplify \((2x)^3\).`, S`\(8x^3\).`],
    ],
    words: [
      ["Row n", "the row starting 1, n, …; the top row is row 0", ""],
      ["Recursive rule", "each entry = sum of the two entries above it", ""],
      ["Binomial", "an expression with two terms, such as \\(2x-3\\)", ""],
      ["Binomial expansion", "\\((a+b)^n\\) written as a sum of terms", ""],
    ],
  }),

  section("📌 The triangle and the expansion", S`
  ${table(["Row", "Entries", "Sum", "(a + b)ⁿ"], [0, 1, 2, 3, 4, 5].map((n) => [String(n), row(n).join("  "), String(2 ** n), n === 0 ? "1" : n === 1 ? "a + b" : n === 2 ? "a² + 2ab + b²" : n === 3 ? "a³ + 3a²b + 3ab² + b³" : n === 4 ? "a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴" : "…"]))}
  ${plane({ view: { xmin: -6.5, xmax: 6.5, ymin: -0.5, ymax: 6.5 }, points: [0, 1, 2, 3, 4, 5].flatMap((n) => row(n).map((v, k) => ({ x: 2 * k - n, y: 6 - n, label: String(v) }))), step: { x: 1, y: 1 } }, "each entry is the sum of the two above it")}
  ${keyIdea(S`In \((a+b)^n\): the coefficients are row \(n\); the powers of \(a\) go down from \(n\) to 0 while the powers of \(b\) go up from 0 to \(n\); there are \(n+1\) terms.`)}`),

  section("📌 Explore", S`<p>Choose a row and expand \((px+q)^n\). Then switch on "shade odd numbers" and look at the pattern.</p>`),

  widget("pascalLab", { init: 4 }),

  section("📌 Watch out", watchOut([
    "The top row is row 0, so (a + b)ⁿ uses row n.",
    "Raise the WHOLE term to the power: (2x)³ = 8x³.",
    "A negative second term makes the signs alternate.",
    "The exponents in every term add to n.",
  ])),

  examples([
    ["Building rows", "Write rows 0 to 6 of Pascal's triangle.",
      [S`<b>Rule.</b> Each row starts and ends with 1. Every other entry is the sum of the two entries just above it.`,
        S`<b>Build.</b> ${tv(["row", "entries"], ["0", "1"], ["1", "1, 1"], ["2", "1, 2, 1"], ["3", "1, 3, 3, 1"], ["4", "1, 4, 6, 4, 1"], ["5", "1, 5, 10, 10, 5, 1"], ["6", "1, 6, 15, 20, 15, 6, 1"])}`,
        S`<b>Example of the rule.</b> In row 6, \(15=5+10\) and \(20=10+10\).`,
        S`<b>Check.</b> The entries of row \(n\) add to \(2^n\): \(1+6+15+20+15+6+1=64=2^6\) ✓`],
      "row 6: 1, 6, 15, 20, 15, 6, 1",
      plane({ bare: true, view: { xmin: -4, xmax: 4, ymin: -7, ymax: 1 }, points: [0, 1, 2, 3, 4, 5, 6].flatMap((n) => row(n).map((v, k) => ({ x: k - n / 2, y: -n, label: String(v), color: n === 6 ? "amber" : "blue" }))) })],
    ["A simple expansion", S`Expand \((x+y)^4\).`,
      [S`<b>Coefficients.</b> The exponent 4 means row 4: \(1,4,6,4,1\).`,
        S`<b>Powers.</b> The power of \(x\) falls from 4 to 0 while the power of \(y\) rises from 0 to 4. In each term, the powers add to 4.`,
        S`<b>Build.</b> \(1x^4y^0+4x^3y^1+6x^2y^2+4x^1y^3+1x^0y^4\).`,
        S`<b>Simplify.</b> \(x^4+4x^3y+6x^2y^2+4xy^3+y^4\).`,
        S`<b>Check with \(x=y=1\).</b> \(2^4=16\), and \(1+4+6+4+1=16\) ✓`],
      S`\(x^4+4x^3y+6x^2y^2+4xy^3+y^4\)`,
      plane({ view: { xmin: -0.5, xmax: 5, ymin: 0, ymax: 8 }, points: row(4).map((v, k) => ({ x: k, y: v, label: String(v) })), step: { x: 1, y: 1 }, xlabel: "k", ylabel: "coefficient" }, "The coefficients of row 4 are symmetric.")],
    ["Coefficients and signs", S`Expand \((2x-3)^3\).`,
      [S`<b>Set up.</b> Use row 3: \(1,3,3,1\), with \(a=2x\) and \(b=-3\). Keep the sign with the 3.`,
        S`<b>Write the terms.</b> \(1(2x)^3+3(2x)^2(-3)+3(2x)(-3)^2+1(-3)^3\).`,
        S`<b>Powers first.</b> \((2x)^3=8x^3\), \((2x)^2=4x^2\), \((-3)^2=9\), \((-3)^3=-27\).`,
        S`<b>Multiply.</b> \(8x^3+3(4x^2)(-3)+3(2x)(9)-27=8x^3-36x^2+54x-27\).`,
        S`<b>Check with \(x=1\).</b> \((2-3)^3=-1\), and \(8-36+54-27=-1\) ✓`],
      S`\(8x^3-36x^2+54x-27\)`,
      plane({ view: { xmin: -1, xmax: 4, ymin: -30, ymax: 30 }, curves: [{ f: (x) => (2 * x - 3) ** 3, color: "violet" }], points: [{ x: 1.5, y: 0, label: "(1.5, 0)", color: "amber" }, { x: 1, y: -1, label: "(1, −1)" }, { x: 0, y: -27, label: "(0, −27)" }], step: { x: 1, y: 5 } })],
    ["One coefficient", S`Find the coefficient of \(x^2\) in \((x+2)^5\).`,
      [S`<b>Row.</b> Row 5: \(1,5,10,10,5,1\).`,
        S`<b>Which term?</b> The powers of \(x\) go \(5,4,3,2,1,0\). So \(x^2\) is the fourth term, with coefficient 10 from the row.`,
        S`<b>The other factor.</b> The powers must add to 5, so it has \(2^3\).`,
        S`<b>Multiply.</b> \(10\cdot x^2\cdot2^3=80x^2\).`,
        S`<b>Check by listing.</b> \((x+2)^5=x^5+10x^4+40x^3+80x^2+80x+32\). With \(x=1\): \(3^5=243\), and the coefficients add to 243 ✓`],
      "80",
      plane({ view: { xmin: -0.5, xmax: 6, ymin: 0, ymax: 90 }, points: [[5, 1], [4, 10], [3, 40], [2, 80], [1, 80], [0, 32]].map(([x, y]) => ({ x, y, label: x === 2 ? "x²: 80" : String(y), color: x === 2 ? "amber" : "blue" })), step: { x: 1, y: 10 }, xlabel: "power of x", ylabel: "coefficient" })],
    ["Patterns", "Describe three patterns in Pascal's triangle.",
      [S`<b>Row sums.</b> \(1,2,4,8,16,\ldots\): each is \(2^n\), since each entry is used twice to build the next row.`,
        S`<b>Second diagonal.</b> \(1,2,3,4,\ldots\): the natural numbers.`,
        S`<b>Third diagonal.</b> \(1,3,6,10,\ldots\): the triangular numbers. Each one is a running total of the second diagonal.`,
        S`<b>Check.</b> \(1+2+3+4=10\), and 10 is the next entry on the third diagonal ✓`],
      "row sums 2ⁿ; natural numbers; triangular numbers",
      plane({ bare: true, view: { xmin: -4, xmax: 4, ymin: -7, ymax: 1 }, points: [0, 1, 2, 3, 4, 5, 6].flatMap((n) => row(n).map((v, k) => ({ x: k - n / 2, y: -n, label: String(v), color: k === 1 ? "green" : k === 2 ? "amber" : "blue" }))) }, "green: natural numbers; amber: triangular numbers")],
  ]),

  practice([
    q("entry", "What is the third entry of row 6 (1, 6, ?, …)?", num(15),
      "Add the two entries above it in row 5 (1, 5, 10, …).", [S`\(5+10\).`], S`\(15\)`),
    q("row sum", "What is the sum of the entries in row 8?", num(256),
      "2ⁿ.", [S`\(2^8\).`], S`\(256\)`),
    q("coefficient", S`What is the coefficient of \(x^3\) in \((x+1)^5\)?`, num(10),
      "Row 5.", ["1, 5, 10, 10, 5, 1: the x³ term is the third."], S`\(10\)`),
    q("terms", S`How many terms are in the expansion of \((a+b)^9\)?`, num(10),
      "n + 1.", [S`\(9+1\).`], S`\(10\)`),
    q("expand", S`Which is \((x-1)^3\)?`, choice([S`\(x^3-3x^2+3x-1\)`, S`\(x^3+3x^2+3x+1\)`, S`\(x^3-1\)`, S`\(x^3-3x^2-3x-1\)`], 0),
      "Row 3 with alternating signs.", [S`\(b=-1\).`], S`\(x^3-3x^2+3x-1\)`),
  ]),

  ...hard([
    ["A four-term power", S`Expand \((3x-y)^4\).`,
      [S`Row 4: 1, 4, 6, 4, 1 with \(a=3x\), \(b=-y\).`, S`\(81x^4+4(27x^3)(-y)+6(9x^2)y^2+4(3x)(-y)^3+y^4\).`],
      S`\(81x^4-108x^3y+54x^2y^2-12xy^3+y^4\)`],
    ["Counting routes", "On a street grid, how many shortest routes go from one corner to the opposite corner of a 4-block by 3-block rectangle (moving only right or up)?",
      ["Each intersection's count is the sum of the counts from the left and from below — exactly Pascal's rule.", "Reading the triangle, the corner is in row 7, position 3."],
      "35 routes",
      plane({ view: { xmin: -0.5, xmax: 4.8, ymin: -0.5, ymax: 3.8 }, segs: [...[0, 1, 2, 3].map((y) => ({ pts: [[0, y], [4, y]], color: "gray" })), ...[0, 1, 2, 3, 4].map((x) => ({ pts: [[x, 0], [x, 3]], color: "gray" }))], points: [0, 1, 2, 3].flatMap((y) => [0, 1, 2, 3, 4].map((x) => ({ x, y, label: String(row(x + y)[y]) }))), step: { x: 1, y: 1 } })],
  ], [
    q("hard", S`Find the coefficient of \(x^4\) in \((2x-1)^6\).`, num(240),
      "Row 6, term with (2x)⁴(−1)².", [S`\(15\cdot16\cdot1\).`], S`\(240\)`),
    q("hard", S`Find the coefficient of the middle term of \((x+2)^4\).`, num(24),
      "6 · x² · 2².", [S`\(6\cdot4\).`], S`\(24\)`),
    q("hard", "How many shortest routes are there across a 5-block by 2-block grid (right and up only)?", num(21),
      "Row 7, position 2.", [S`1, 7, 21, …`], S`\(21\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is the top row called row 0?", "So that row n matches the power n in (a + b)ⁿ."],
      ["Why do the row sums double?", "Each entry is used twice in building the next row."],
      ["How do I handle (2x − 3)ⁿ?", "Use the row's coefficients with a = 2x and b = −3, raising each whole term to its power."],
      ["How do I find just one term?", "Pick the position in row n whose powers match the term you want."],
      ["What is the link to routes on a grid?", "The number of ways to reach a corner is the sum of the ways to reach the two neighbours — Pascal's rule."],
    ],
    summary: [
      "Entry = sum of the two above.",
      "Row n gives (a + b)ⁿ's coefficients.",
      "Powers of a go down, powers of b go up.",
      "Row sums 2ⁿ.",
    ],
    next: "7.8 reviews the chapter.",
  }),
];
