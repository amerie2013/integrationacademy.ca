// LINALG1 3.4 — Matrix–Vector Multiplication: Ax as a combination of the columns of A, the row (dot-product) view,
// the size rule, linearity (A(x + y) = Ax + Ay, A(kx) = kAx, (A + B)x = Ax + Bx), Aeⱼ = column j, and Ix = x.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig, vec } from "./lib.mjs";
import { vfig } from "./vecfig.mjs";
import { rowPic } from "./ws/fig3.mjs";

export const TITLE = "3.4 Matrix–Vector Multiplication";
export const ID = "11a10001-0001-4001-8001-000000000304";

const S = String.raw;
const M = (m) => am(m, false);
const colFig = vfig({ view: { xmin: -2, xmax: 6, ymin: -1, ymax: 6 }, step: 1, width: 300,
  arrows: [{ from: [0, 0], to: [2, 1], color: "blue", w: 2.8, label: "a₁" }, { from: [0, 0], to: [-1, 2], color: "red", w: 2.8, label: "a₂" }, { from: [0, 0], to: [4, 2], color: "blue", w: 1.6, dash: true }, { from: [4, 2], to: [3, 4], color: "red", w: 1.6, dash: true }, { from: [0, 0], to: [3, 4], color: "green", w: 3, label: "Ax" }] },
  "A = [a₁ a₂] with a₁ = (2, 1), a₂ = (−1, 2) and x = (2, 1): Ax = 2a₁ + a₂ = (3, 4)");
const rowFig = sfig(rowPic([[[[1, -2, 3], [0, 4, -1]], { row: 1, label: "A" }], [[[2], [1], [-1]], { col: 0, label: "x" }], "=", [[[-3], [5]], { cells: [[1, 0, "#bbf7d0"]], label: "Ax" }]]), "entry 2 of Ax = (row 2 of A) · x = 0(2) + 4(1) + (−1)(−1) = 5");

export const blocks = () => [
  intro({
    icon: "✖️",
    title: "Matrix–Vector Multiplication",
    overview: S`Multiplying a matrix by a vector is the single most important operation in linear algebra. If the columns of \(A\) are \(\vec a_1,\dots,\vec a_n\), then \(A\vec x\) is the linear combination \(x_1\vec a_1+\dots+x_n\vec a_n\) — the entries of \(\vec x\) are the weights. Computed row by row, each entry is a dot product. This lesson defines the product, gives the size rule, proves that it is linear, and shows two useful facts: \(A\vec e_j\) is the \(j\)-th column of \(A\), and \(I\vec x=\vec x\).`,
    goals: [
      "compute \\(A\\vec x\\) as a combination of the columns of \\(A\\);",
      "compute \\(A\\vec x\\) row by row with dot products;",
      "decide when \\(A\\vec x\\) is defined and what size it has;",
      "prove and use \\(A(\\vec x+\\vec y)=A\\vec x+A\\vec y\\), \\(A(k\\vec x)=kA\\vec x\\), \\((A+B)\\vec x=A\\vec x+B\\vec x\\);",
      "use \\(A\\vec e_j=\\vec a_j\\) to read off or reconstruct a matrix.",
    ],
    outcomes: "matrix algebra: the matrix–vector product and its properties",
    prior: [
      [S`Compute \(3(1,2)-(4,0)\).`, S`\((-1,6)\).`],
      [S`Compute \((2,-1,3)\cdot(1,4,2)\).`, S`\(2-4+6=4\).`],
      [S`What is the standard basis vector \(\vec e_2\) in \(\mathbb R^3\)?`, S`\((0,1,0)\).`],
    ],
    words: [
      ["Columns of \\(A\\)", "\\(A=[\\,\\vec a_1\\ \\cdots\\ \\vec a_n\\,]\\), each \\(\\vec a_j\\in\\mathbb R^m\\)", "\\(\\vec a_1\\) is column 1"],
      ["\\(A\\vec x\\)", "\\(x_1\\vec a_1+\\dots+x_n\\vec a_n\\)", "a vector in \\(\\mathbb R^m\\)"],
      ["Row view", "entry \\(i\\) of \\(A\\vec x\\) = (row \\(i\\))\\(\\cdot\\vec x\\)", "dot products"],
      ["Size rule", "\\((m\\times n)\\) times \\(\\mathbb R^n\\) gives \\(\\mathbb R^m\\)", "inner numbers match"],
      ["Linear", "respects sums and scalar multiples", "\\(A(2\\vec x)=2A\\vec x\\)"],
    ],
  }),

  section("📌 The definition: a combination of columns", S`
  ${definition("matrix–vector product", S`Let \(A=[\,\vec a_1\ \cdots\ \vec a_n\,]\) be \(m\times n\) and \(\vec x=(x_1,\dots,x_n)\in\mathbb R^n\). Then \[A\vec x=x_1\vec a_1+x_2\vec a_2+\dots+x_n\vec a_n\in\mathbb R^m.\]`)}
  <p>The product is defined only when the number of <strong>columns</strong> of \(A\) equals the number of entries of \(\vec x\). The result has one entry per <strong>row</strong> of \(A\).</p>
  <div style="text-align:center;">${colFig}</div>`),

  section("📌 The row view", S`
  <p>Entry \(i\) of \(x_1\vec a_1+\dots+x_n\vec a_n\) is \(a_{i1}x_1+\dots+a_{in}x_n\) — the dot product of row \(i\) of \(A\) with \(\vec x\):</p>
  \[(A\vec x)_i=a_{i1}x_1+a_{i2}x_2+\dots+a_{in}x_n.\]
  ${rowFig}
  ${keyIdea(S`Column view: \(A\vec x\) is a combination of the columns (good for understanding). Row view: each entry is a dot product (good for computing). They always agree.`)}`),

  section("📌 Properties", S`
  ${theorem("linearity", S`For \(m\times n\) matrices \(A,B\), vectors \(\vec x,\vec y\in\mathbb R^n\) and a scalar \(k\): (1) \(A(\vec x+\vec y)=A\vec x+A\vec y\); (2) \(A(k\vec x)=k(A\vec x)\); (3) \((A+B)\vec x=A\vec x+B\vec x\); (4) \((kA)\vec x=k(A\vec x)\).`, S`(1) \(A(\vec x+\vec y)=\sum_j(x_j+y_j)\vec a_j=\sum_jx_j\vec a_j+\sum_jy_j\vec a_j\). (2) \(\sum_j(kx_j)\vec a_j=k\sum_jx_j\vec a_j\). (3) The columns of \(A+B\) are \(\vec a_j+\vec b_j\), so \((A+B)\vec x=\sum_jx_j(\vec a_j+\vec b_j)=A\vec x+B\vec x\). (4) is similar.`)}
  ${theorem("extracting columns", S`If \(\vec e_j\) is the \(j\)-th standard basis vector of \(\mathbb R^n\), then \(A\vec e_j=\vec a_j\), the \(j\)-th column of \(A\). In particular \(I_n\vec x=\vec x\) for every \(\vec x\).`, S`\(\vec e_j\) has \(x_j=1\) and every other entry 0, so \(A\vec e_j=1\cdot\vec a_j\). For \(I_n\) the columns are \(\vec e_1,\dots,\vec e_n\), so \(I_n\vec x=x_1\vec e_1+\dots+x_n\vec e_n=\vec x\).`)}`),

  section("📌 Explore", S`<p>Set the four entries of \(A\) and the weights \(x_1,x_2\). The green arrow \(A\vec x\) is reached by walking \(x_1\) copies of the blue column and then \(x_2\) copies of the red column.</p>`),
  widget("laMatVec", { init: { a: 2, b: -1, c: 1, d: 2 } }),

  section("📌 Common mistakes", watchOut([
    "Ax is defined only when A has as many COLUMNS as x has entries.",
    "The weights x₁, x₂, … multiply the columns, not the rows.",
    "An m × n matrix times a vector gives a vector with m entries.",
    "Ax is a vector, not a number — keep every entry.",
    "Aeⱼ is column j of A, not row j.",
  ])),

  examples([
    ["The column view", S`Compute \(A\vec x\) for \(A=${M([[1, -2, 3], [0, 4, -1]])}\) and \(\vec x=(2,1,-1)\).`,
      [S`\(A\vec x=2${cv(1, 0)}+1${cv(-2, 4)}+(-1)${cv(3, -1)}\).`, S`\(=${cv("2-2-3", "0+4+1")}=${cv(-3, 5)}\).`, S`Row check: \((1,-2,3)\cdot(2,1,-1)=2-2-3=-3\) ✓; \((0,4,-1)\cdot(2,1,-1)=0+4+1=5\) ✓.`],
      S`\(A\vec x=(-3,5)\)`, rowFig],
    ["The row view", S`Compute \(A\vec x\) for \(A=${M([[2, 1], [-1, 3], [4, 0]])}\) and \(\vec x=(3,-2)\).`,
      [S`\(A\) is \(3\times2\) and \(\vec x\in\mathbb R^2\): defined, result in \(\mathbb R^3\).`, S`Entry 1: \(2(3)+1(-2)=4\). Entry 2: \(-1(3)+3(-2)=-9\). Entry 3: \(4(3)+0(-2)=12\).`, S`Column check: \(3(2,-1,4)-2(1,3,0)=(6-2,\ -3-6,\ 12-0)=(4,-9,12)\) ✓.`],
      S`\(A\vec x=(4,-9,12)\)`],
    ["When is it defined?", S`\(A\) is \(2\times3\). For which of \(\vec x\in\mathbb R^2\), \(\vec y\in\mathbb R^3\), \(\vec z\in\mathbb R^5\) is the product with \(A\) defined, and what are the sizes?`,
      [S`\(A\) has 3 columns, so only a vector with 3 entries can be multiplied: \(A\vec y\) is defined, \(A\vec x\) and \(A\vec z\) are not.`, S`\(A\vec y\) has one entry per row of \(A\): it lies in \(\mathbb R^2\).`],
      S`only \(A\vec y\), which is in \(\mathbb R^2\)`],
    ["Checking linearity", S`For \(A=${M([[1, 2], [3, -1]])}\), \(\vec x=(1,1)\), \(\vec y=(2,-1)\), verify \(A(\vec x+\vec y)=A\vec x+A\vec y\).`,
      [S`\(\vec x+\vec y=(3,0)\), so \(A(\vec x+\vec y)=3${cv(1, 3)}+0${cv(2, -1)}=${cv(3, 9)}\).`, S`\(A\vec x=${cv("1+2", "3-1")}=${cv(3, 2)}\) and \(A\vec y=${cv("2-2", "6+1")}=${cv(0, 7)}\).`, S`\(A\vec x+A\vec y=${cv(3, 9)}\) ✓.`],
      S`both sides equal \((3,9)\)`, colFig],
    ["Rebuilding a matrix from its columns", S`A \(2\times2\) matrix has \(A\vec e_1=(3,1)\) and \(A\vec e_2=(-1,4)\). Find \(A\) and \(A(2,5)\).`,
      [S`\(A\vec e_j\) is column \(j\): \(A=${M([[3, -1], [1, 4]])}\).`, S`\((2,5)=2\vec e_1+5\vec e_2\), so by linearity \(A(2,5)=2A\vec e_1+5A\vec e_2=2(3,1)+5(-1,4)=(6-5,\ 2+20)=(1,22)\).`],
      S`\(A=${M([[3, -1], [1, 4]])}\); \(A(2,5)=(1,22)\)`],
  ]),

  practice([
    q("compute", S`Compute \(${M([[1, 2], [0, -1]])}${cv(3, 4)}\).`, vec(11, -4),
      "Row by row.", [S`\(1(3)+2(4)=11\); \(0(3)-1(4)=-4\).`], S`\((11,-4)\)`),
    q("size", S`\(A\) is \(5\times3\). How many entries does \(A\vec x\) have?`, num(5),
      "One per row.", [S`\(A\vec x\in\mathbb R^5\).`], S`\(5\)`),
    q("defined?", S`A \(3\times4\) matrix can be multiplied by a vector in:`, choice([S`\(\mathbb R^4\)`, S`\(\mathbb R^3\)`, S`\(\mathbb R^7\)`, S`\(\mathbb R^{12}\)`], 0),
      "Number of columns.", [S`4 columns need 4 entries.`], S`\(\mathbb R^4\)`),
    q("column", S`For \(A=${M([[2, 7, -1], [0, 5, 3]])}\), \(A\vec e_3=\)?`, vec(-1, 3),
      "Column 3.", [S`\(A\vec e_3=\vec a_3\).`], S`\((-1,3)\)`),
    q("identity", S`\(I_3\,(4,-2,9)=\)?`, vec(4, -2, 9),
      "The identity leaves vectors unchanged.", [S`\(I\vec x=\vec x\).`], S`\((4,-2,9)\)`),
  ]),

  ...hard([
    ["Finding a matrix from its action", S`A \(2\times2\) matrix satisfies \(A(1,1)=(3,5)\) and \(A(1,-1)=(1,-1)\). Find \(A\).`,
      [S`\(\vec e_1=\tfrac12(1,1)+\tfrac12(1,-1)\) and \(\vec e_2=\tfrac12(1,1)-\tfrac12(1,-1)\).`, S`By linearity \(A\vec e_1=\tfrac12(3,5)+\tfrac12(1,-1)=(2,2)\) and \(A\vec e_2=\tfrac12(3,5)-\tfrac12(1,-1)=(1,3)\).`, S`So \(A=${M([[2, 1], [2, 3]])}\). Check: \(A(1,1)=(2+1,\ 2+3)=(3,5)\) ✓.`],
      S`\(A=${M([[2, 1], [2, 3]])}\)`],
    ["Equal products need not mean equal matrices", S`Give \(2\times2\) matrices \(A\ne B\) and a vector \(\vec x\ne\vec 0\) with \(A\vec x=B\vec x\). Then explain why \(A\vec x=B\vec x\) for <em>every</em> \(\vec x\) forces \(A=B\).`,
      [S`\(A=${M([[1, 0], [0, 0]])}\), \(B=${M([[1, 0], [0, 5]])}\), \(\vec x=(1,0)\): both give \((1,0)\).`, S`If \(A\vec x=B\vec x\) for every \(\vec x\), take \(\vec x=\vec e_j\): column \(j\) of \(A\) equals column \(j\) of \(B\), for every \(j\).`],
      S`one vector is not enough; all vectors (or just \(\vec e_1,\dots,\vec e_n\)) force \(A=B\)`],
  ], [
    q("hard", S`\(A\vec x=(2,1)\) and \(A\vec y=(0,-3)\). Find \(A(3\vec x-2\vec y)\).`, vec(6, 9),
      "Linearity.", [S`\(3(2,1)-2(0,-3)=(6,3+6)\).`], S`\((6,9)\)`),
    q("hard", S`For which \(k\) is \(${M([[1, "k"], [2, 6]])}${cv(3, -1)}=${cv(0, 0)}\)?`, num(3),
      "Row 1 gives 3 − k = 0.", [S`Row 2: \(6-6=0\) ✓ for any \(k\); row 1 needs \(k=3\).`], S`\(3\)`),
    q("hard", S`\(A\) is \(2\times3\) with \(A\vec e_1=(1,0)\), \(A\vec e_2=(2,1)\), \(A\vec e_3=(0,4)\). Find \(A(1,1,1)\).`, vec(3, 5),
      "Sum of the columns.", [S`\((1,0)+(2,1)+(0,4)\).`], S`\((3,5)\)`),
  ]),

  wrapUp({
    qas: [
      ["What is Ax?", "x₁a₁ + … + xₙaₙ: the combination of the columns of A with weights from x."],
      ["How do I compute it quickly?", "Entry i is the dot product of row i of A with x."],
      ["When is it defined?", "When A has as many columns as x has entries; the result has one entry per row of A."],
      ["Which rules hold?", "A(x + y) = Ax + Ay, A(kx) = kAx, (A + B)x = Ax + Bx, (kA)x = k(Ax)."],
      ["What is Aeⱼ?", "Column j of A; in particular Ix = x."],
    ],
    summary: [
      "Ax = x₁a₁ + … + xₙaₙ ∈ ℝᵐ.",
      "(Ax)ᵢ = (row i) · x.",
      "(m × n)·ℝⁿ → ℝᵐ.",
      "Linear in x and in A.",
      "Aeⱼ = aⱼ; Ix = x.",
    ],
    next: "3.5 rewrites every linear system as one matrix equation Ax = b and reads consistency off the columns.",
  }),
];
