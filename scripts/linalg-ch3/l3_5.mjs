// LINALG1 3.5 — Linear Systems as Ax = b: writing a system as one matrix equation, consistency ⇔ b is a combination
// of the columns, solutions as weights, the general solution p + h through linearity, and the matrices-equal theorem
// (Ax = Bx for every x forces A = B).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sys, steps, sfig, vec } from "./lib.mjs";
import { vfig } from "./vecfig.mjs";
import { rowPic } from "./ws/fig3.mjs";

export const TITLE = "3.5 Linear Systems as Ax = b";
export const ID = "11a10001-0001-4001-8001-000000000305";

const S = String.raw;
const M = (m) => am(m, false);
const eqFig = sfig(rowPic([[[[2, -1, 3], [1, 0, 4]], { label: "A" }], [[["x₁"], ["x₂"], ["x₃"]], { label: "x" }], "=", [[[5], [-2]], { label: "b" }]]), "the system 2x₁ − x₂ + 3x₃ = 5, x₁ + 4x₃ = −2 as one matrix equation");
const consFig = vfig({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 5 }, step: 1, width: 290,
  arrows: [{ from: [0, 0], to: [1, 2], color: "blue", w: 2.8, label: "a₁" }, { from: [0, 0], to: [3, 1], color: "red", w: 2.8, label: "a₂" }, { from: [0, 0], to: [2, 4], color: "blue", w: 1.6, dash: true }, { from: [2, 4], to: [5, 5], color: "red", w: 1.6, dash: true }, { from: [0, 0], to: [5, 5], color: "green", w: 3, label: "b" }] },
  "b = (5, 5) = 2a₁ + 1a₂, so x = (2, 1) solves Ax = b");
const shiftFig = vfig({ view: { xmin: -3, xmax: 4, ymin: -3, ymax: 4 }, step: 1, width: 280,
  segs: [{ pts: [[-3, -3], [4, 4]], color: "violet", w: 2.2, dash: true }, { pts: [[-3, -1], [3, 5]], color: "red", w: 2.6 }],
  arrows: [{ from: [0, 0], to: [-1, 1], color: "amber", w: 2.4, label: "p" }] },
  "solutions of Ax = 0 (dashed) and of Ax = b (red): the same line shifted by a particular solution p");

export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Linear Systems as Ax = b",
    overview: S`With the matrix–vector product, every linear system — however many equations and unknowns — becomes the single equation \(A\vec x=\vec b\). This short notation carries real meaning: \(A\vec x\) is a combination of the columns of \(A\), so the system is consistent exactly when \(\vec b\) is a combination of the columns, and a solution is a list of weights that produce \(\vec b\). Linearity of \(A\vec x\) then explains, in one line, why every solution is a particular solution plus a solution of \(A\vec x=\vec 0\). Finally, we see that two matrices that act the same way on every vector must be equal.`,
    goals: [
      "write a linear system as \\(A\\vec x=\\vec b\\) and back;",
      "decide consistency by asking whether \\(\\vec b\\) is a combination of the columns;",
      "solve \\(A\\vec x=\\vec b\\) by row reduction and interpret the solution as weights;",
      "use linearity to describe all solutions as \\(\\vec p+\\vec h\\);",
      "state and use the matrices-equal theorem.",
    ],
    outcomes: "matrix algebra: matrix form of linear systems",
    prior: [
      [S`Compute \(${M([[1, 2], [3, -1]])}${cv(2, 1)}\).`, S`\((4,5)\) (3.4).`],
      [S`What does a row \([\,0\ \ 0\mid 3\,]\) in an echelon form mean?`, S`The system is inconsistent (2.3).`],
      [S`Every solution of a consistent system = particular solution + what?`, S`A solution of the homogeneous system (2.6).`],
    ],
    words: [
      ["Matrix form", "\\(A\\vec x=\\vec b\\)", "coefficient matrix \\(A\\), unknowns \\(\\vec x\\), constants \\(\\vec b\\)"],
      ["Consistent", "has at least one solution", "\\(\\vec b\\) is a combination of the columns"],
      ["Weights", "the entries of a solution \\(\\vec x\\)", "\\(\\vec b=x_1\\vec a_1+\\dots\\)"],
      ["Particular solution", "one solution \\(\\vec p\\) of \\(A\\vec x=\\vec b\\)", "\\(A\\vec p=\\vec b\\)"],
      ["Homogeneous solution", "a solution \\(\\vec h\\) of \\(A\\vec x=\\vec 0\\)", "\\(A\\vec h=\\vec 0\\)"],
    ],
  }),

  section("📌 One equation for the whole system", S`
  <p>The system \(a_{i1}x_1+\dots+a_{in}x_n=b_i\) (\(i=1,\dots,m\)) says that row \(i\) of \(A\) dotted with \(\vec x\) equals \(b_i\) — exactly the definition of \(A\vec x=\vec b\), where \(A=[a_{ij}]\) is the coefficient matrix, \(\vec x=(x_1,\dots,x_n)\) and \(\vec b=(b_1,\dots,b_m)\).</p>
  ${eqFig}
  ${theorem("three readings of Ax = b", S`(1) Every linear system can be written as \(A\vec x=\vec b\). (2) It is consistent if and only if \(\vec b\) is a linear combination of the columns of \(A\). (3) \(\vec x=(x_1,\dots,x_n)\) is a solution if and only if \(x_1\vec a_1+\dots+x_n\vec a_n=\vec b\).`, S`(1) is the row view of \(A\vec x\). (3) is the column view: \(A\vec x=x_1\vec a_1+\dots+x_n\vec a_n\). (2) follows from (3): a solution exists iff some weights produce \(\vec b\).`)}
  <div style="text-align:center;">${consFig}</div>`),

  section("📌 All solutions: particular plus homogeneous", S`
  ${theorem("structure of the solution set", S`If \(A\vec p=\vec b\), then the solutions of \(A\vec x=\vec b\) are exactly the vectors \(\vec p+\vec h\) with \(A\vec h=\vec 0\).`, S`If \(A\vec h=\vec 0\) then \(A(\vec p+\vec h)=A\vec p+A\vec h=\vec b+\vec 0=\vec b\). Conversely, if \(A\vec x=\vec b\), put \(\vec h=\vec x-\vec p\): \(A\vec h=A\vec x-A\vec p=\vec b-\vec b=\vec 0\).`)}
  <div style="text-align:center;">${shiftFig}</div>
  ${keyIdea(S`The proof is two lines long because of linearity — compare Section 2.6, where the same fact took a computation with every equation.`)}`),

  section("📌 The matrices-equal theorem", S`
  <p>For numbers, \(ax=bx\) with \(x\ne0\) gives \(a=b\). For matrices this fails: \(${M([[1, 2], [3, 4]])}${cv(1, 0)}=${M([[1, 5], [3, 0]])}${cv(1, 0)}=${cv(1, 3)}\), yet the matrices differ. One vector is not enough — but all of them are:</p>
  ${theorem("matrices equal theorem", S`If \(A\) and \(B\) are \(m\times n\) and \(A\vec x=B\vec x\) for every \(\vec x\in\mathbb R^n\), then \(A=B\).`, S`Take \(\vec x=\vec e_j\): \(A\vec e_j\) is column \(j\) of \(A\) and \(B\vec e_j\) is column \(j\) of \(B\). So every column of \(A\) equals the corresponding column of \(B\).`)}`),

  section("📌 Explore", S`<p>Pick a matrix and adjust the weights \(x_1,x_2\) until the green arrow \(A\vec x\) reaches a target vector \(\vec b\) of your choice — you are solving \(A\vec x=\vec b\). If the two columns are parallel, only targets on their line can be reached.</p>`),
  widget("laMatVec", { init: { a: 1, b: 3, c: 2, d: 1 } }),

  section("📌 Common mistakes", watchOut([
    "A is the coefficient matrix only — the constants form b, not a column of A.",
    "Missing unknowns still get a 0 entry in A.",
    "Consistency is about b being a combination of the COLUMNS of A.",
    "Ap = b and Ah = 0 give A(p + h) = b — not A(p + h) = 2b.",
    "Ax = Bx for one x does not mean A = B.",
  ])),

  examples([
    ["From a system to Ax = b", S`Write \(${sys([[2, -1, 3, 5], [1, 0, 4, -2]])}\) as \(A\vec x=\vec b\), and decide whether \((1,0,-\tfrac34)\) is a solution.`,
      [S`\(A=${M([[2, -1, 3], [1, 0, 4]])}\) (the \(x_2\)-coefficient of equation 2 is 0), \(\vec x=(x_1,x_2,x_3)\), \(\vec b=(5,-2)\).`, S`\((1,0,-\tfrac34)\): row 2 gives \(1+0+4(-\tfrac34)=-2\) ✓, but row 1 gives \(2-0-\tfrac94=-\tfrac14\ne5\). So it is not a solution of the system.`],
      S`\(A=${M([[2, -1, 3], [1, 0, 4]])}\), \(\vec b=(5,-2)\)`, eqFig],
    ["Is b a combination of the columns?", S`Solve \(A\vec x=\vec b\) for \(A=${M([[1, 2], [3, 1], [2, -1]])}\) and \(\vec b=(4,7,3)\), and interpret.`,
      [...steps([[1, 2, 4], [3, 1, 7], [2, -1, 3]], [
        [S`Clear column 1.`, ["R2-3R1", "R3-2R1"]],
        [S`Rows 2 and 3 are equal; subtract.`, ["R3-R2"]],
      ]).steps,
        S`Consistent: \(-5x_2=-5\), \(x_2=1\); \(x_1=4-2=2\).`, S`So \(\vec b=2\vec a_1+1\vec a_2=2(1,3,2)+(2,1,-1)=(4,7,3)\) ✓: the solution is the list of weights.`],
      S`\(\vec x=(2,1)\): \(\vec b=2\vec a_1+\vec a_2\)`],
    ["From a solution to b", S`\(\vec x=(1,-1,2)\) solves \(A\vec x=\vec b\) with \(A=${M([[1, 0, 2], [2, 1, -1], [0, 3, 1]])}\). Find \(\vec b\).`,
      [S`\(\vec b=A\vec x=1${cv(1, 2, 0)}-1${cv(0, 1, 3)}+2${cv(2, -1, 1)}\).`, S`\(=${cv("1-0+4", "2-1-2", "0-3+2")}=${cv(5, -1, -1)}\).`],
      S`\(\vec b=(5,-1,-1)\)`],
    ["Particular plus homogeneous", S`Solve \(A\vec x=\vec b\) for \(A=${M([[1, -1, 2], [2, -2, 5]])}\), \(\vec b=(3,8)\), and identify \(\vec p\) and the homogeneous part.`,
      [...steps([[1, -1, 2, 3], [2, -2, 5, 8]], [
        [S`Clear column 1.`, ["R2-2R1"]],
        [S`Clear above the pivot of column 3 (RREF).`, ["R1-2R2"]],
      ]).steps,
        S`Free \(x_2=t\): \(x_1=-1+t\), \(x_3=2\). So \(\vec x=(-1,0,2)+t(1,1,0)\).`, S`\(\vec p=(-1,0,2)\): \(A\vec p=(-1-0+4,\ -2-0+10)=(3,8)\) ✓. \(\vec h=t(1,1,0)\): \(A(1,1,0)=(1-1,\ 2-2)=\vec 0\) ✓.`],
      S`\(\vec x=(-1,0,2)+t(1,1,0)\)`, shiftFig],
    ["One vector is not enough", S`\(A=${M([[1, 2], [3, 4]])}\), \(B=${M([[1, 5], [3, 0]])}\). Find a nonzero \(\vec x\) with \(A\vec x=B\vec x\), and one with \(A\vec x\ne B\vec x\).`,
      [S`\(A\vec x=B\vec x\iff(A-B)\vec x=\vec 0\), with \(A-B=${M([[0, -3], [0, 4]])}\).`, S`\((A-B)\vec x=(-3x_2,\ 4x_2)=\vec 0\) exactly when \(x_2=0\): e.g. \(\vec x=(1,0)\).`, S`For \(\vec e_2=(0,1)\): \(A\vec e_2=(2,4)\) but \(B\vec e_2=(5,0)\) — the columns differ, as the theorem predicts.`],
      S`\((1,0)\) agrees; \((0,1)\) does not`],
  ]),

  practice([
    q("b", S`The system \(x_1-x_2=4,\ 3x_1+2x_2=-1\) is \(A\vec x=\vec b\). Find \(\vec b\).`, vec(4, -1),
      "The constants.", [S`\(\vec b=(4,-1)\).`], S`\((4,-1)\)`),
    q("entry of A", S`For \(x_1+5x_3=2,\ 4x_2-x_3=0\), find \(a_{12}\) of the coefficient matrix.`, num(0),
      "x₂ is missing in equation 1.", [S`Row 1 is \((1,0,5)\).`], S`\(0\)`),
    q("consistent?", S`\(A\vec x=\vec b\) is consistent exactly when:`, choice([S`\(\vec b\) is a combination of the columns of \(A\)`, S`\(\vec b\) is a combination of the rows of \(A\)`, S`\(A\) is square`, S`\(\vec b=\vec 0\)`], 0),
      "Column view.", [S`\(A\vec x=x_1\vec a_1+\dots\).`], "b is a combination of the columns"),
    q("compute b", S`\(\vec x=(2,-1)\) solves \(A\vec x=\vec b\) with \(A=${M([[3, 1], [0, 2]])}\). Find \(\vec b\).`, vec(5, -2),
      "b = Ax.", [S`\(2(3,0)-1(1,2)\).`], S`\((5,-2)\)`),
    q("another solution", S`\(A\vec p=\vec b\) and \(A\vec h=\vec 0\). Then \(A(\vec p-3\vec h)=\)`, choice([S`\(\vec b\)`, S`\(-2\vec b\)`, S`\(\vec 0\)`, S`\(\vec b-3\vec h\)`], 0),
      "Linearity.", [S`\(\vec b-3\vec 0\).`], S`\(\vec b\)`),
  ]),

  ...hard([
    ["When is every b reachable?", S`For which \(k\) is \(A\vec x=\vec b\) consistent for every \(\vec b\in\mathbb R^2\), where \(A=${M([[1, "k"], [3, 6]])}\)? For the other \(k\), describe the reachable \(\vec b\).`,
      [S`\(R_2\to R_2-3R_1\): \(${M([[1, "k"], [3, 6]])}\longrightarrow${M([[1, "k"], [0, "6-3k"]])}\).`, S`\(k\ne2\): two pivots, the columns are independent and span \(\mathbb R^2\): every \(\vec b\) works.`, S`\(k=2\): both columns are multiples of \((1,3)\), so only \(\vec b\) on the line through \((1,3)\) are reachable: \(b_2=3b_1\).`],
      S`\(k\ne2\); for \(k=2\) only \(\vec b=t(1,3)\)`],
    ["Uniqueness through the homogeneous system", S`Prove: if \(A\vec x=\vec 0\) has only the trivial solution, then \(A\vec x=\vec b\) has at most one solution. Illustrate with \(A=${M([[1, 2], [3, 4]])}\).`,
      [S`If \(A\vec u=A\vec v=\vec b\), then \(A(\vec u-\vec v)=\vec 0\), so \(\vec u-\vec v=\vec 0\).`, S`For \(${M([[1, 2], [3, 4]])}\): \(R_2-3R_1\) gives \((0,-2)\), two pivots, so \(A\vec x=\vec 0\) has only \(\vec 0\) — and every \(A\vec x=\vec b\) has exactly one solution.`],
      S`at most one solution`],
  ], [
    q("hard", S`\(A\vec x=(1,2)\) has the solution \((3,0,1)\), and \(A(1,1,-1)=\vec 0\). Give the solution of \(A\vec x=(1,2)\) whose first entry is 5.`, vec(5, 2, -1),
      "p + t h.", [S`\((3,0,1)+t(1,1,-1)\) with \(3+t=5\): \(t=2\).`], S`\((5,2,-1)\)`),
    q("hard", S`\(A\) and \(B\) are \(2\times2\), \(A\vec e_1=B\vec e_1\) and \(A\vec e_2=B\vec e_2\). Must \(A=B\)?`, choice(["yes", "no"], 0),
      "Columns.", [S`Equal first and second columns.`], "yes"),
    q("hard", S`For which \(h\) is \(${M([[1, 2], [2, 4]])}\vec x=${cv(3, "h")}\) consistent?`, num(6),
      "Row 2 is twice row 1.", [S`\(\vec b\) must be a multiple of \((1,2)\): \(h=6\).`], S`\(6\)`),
  ]),

  wrapUp({
    qas: [
      ["How is a system written as Ax = b?", "A is the coefficient matrix, x the unknowns, b the constants; row i of Ax = b is equation i."],
      ["When is Ax = b consistent?", "Exactly when b is a linear combination of the columns of A."],
      ["What is a solution, in column language?", "A list of weights x₁, …, xₙ with x₁a₁ + … + xₙaₙ = b."],
      ["What do all solutions look like?", "p + h, where p is one solution and h runs over the solutions of Ax = 0."],
      ["When are two matrices equal?", "When Ax = Bx for every x — testing on e₁, …, eₙ compares the columns."],
    ],
    summary: [
      "System ⇔ Ax = b.",
      "Consistent ⇔ b ∈ span of the columns.",
      "Solution = weights of the columns.",
      "Solutions = p + (solutions of Ax = 0).",
      "Ax = Bx for all x ⇒ A = B.",
    ],
    next: "3.6 multiplies two matrices: AB is A applied to each column of B.",
  }),
];
