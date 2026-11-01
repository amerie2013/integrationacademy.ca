// LINALG1 7.6 — Kernel and Range; One-to-One and Onto: ker T = Nul A, range T = Col A; T is one-to-one ⇔ ker T = {0}
// ⇔ a pivot in every column, onto ⇔ a pivot in every row; the square case (both ⇔ invertible); T(u) = T(v) ⇔ u − v in
// ker T; dim ker T + dim range T = n. Every test is a row reduction written out in full.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig, steps } from "./lib.mjs";
import { kernelLine } from "./ws/fig7.mjs";
import { vecs2 } from "./ws/fig5.mjs";

export const TITLE = "7.6 Kernel and Range; One-to-One and Onto";
export const ID = "11a10001-0001-4001-8001-000000000706";

const S = String.raw;
const M = (m) => am(m, false);
const D = (m) => S`\left|\begin{array}{${"c".repeat(m[0].length)}}${m.map((r) => r.join(" & ")).join(" \\\\ ")}\end{array}\right|`;
const kerFig = sfig(kernelLine([2, 1], { raw: true, label: "ker T: all sent to 0" }), "every vector on the line along (2, 1) is sent to the zero vector");
const ranFig = sfig(vecs2([[[1, -2], "column 1 = (1, −2)", "blue"], [[-2, 4], "column 2 = (−2, 4)", "red"]], { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, { segs: [{ pts: [[-2, 4], [2, -4]], color: "violet", w: 3 }], raw: true }),
  "the range is the line spanned by the columns — not all of ℝ²");
const twoFig = sfig(vecs2([[[2, 0], "", "blue"], [[1, 1], "", "red"], [[1, -1], "u − v", "violet", [1, 1], true]], { xmin: -1, xmax: 3, ymin: -2, ymax: 2 }, { raw: true }), "T(u) = T(v) exactly when u − v lies in the kernel");

export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Kernel and Range; One-to-One and Onto",
    overview: S`Two questions decide how much a linear map \(T(\vec x)=A\vec x\) keeps and how far it reaches. <em>Does it ever send two different inputs to the same output?</em> If not, \(T\) is <strong>one-to-one</strong>. <em>Does every vector of the codomain get hit?</em> If so, \(T\) is <strong>onto</strong>. Both are answered by the pivots of \(A\): the first by the <strong>kernel</strong> \(\{\vec x: T(\vec x)=\vec 0\}\) (a pivot in every column), the second by the <strong>range</strong> (a pivot in every row). For square matrices the two questions have the same answer, which is one more face of the Invertible Matrix Theorem.`,
    goals: [
      "find the kernel and range of \\(T(\\vec x)=A\\vec x\\) as \\(\\operatorname{Nul}A\\) and \\(\\operatorname{Col}A\\);",
      "decide whether \\(T\\) is one-to-one (pivot in every column);",
      "decide whether \\(T\\) is onto (pivot in every row);",
      "use \\(T(\\vec u)=T(\\vec v)\\iff\\vec u-\\vec v\\in\\ker T\\);",
      "use \\(\\dim\\ker T+\\dim\\operatorname{range}T=n\\).",
    ],
    outcomes: "linear transformations: kernel, range, one-to-one and onto",
    prior: [
      [S`What is \(\operatorname{Nul}A\)?`, S`All solutions of \(A\vec x=\vec 0\).`],
      [S`Which columns give a basis of \(\operatorname{Col}A\)?`, S`The pivot columns of \(A\) (the original columns).`],
      [S`Rank–nullity for an \(m\times n\) matrix?`, S`\(\operatorname{rank}A+\dim\operatorname{Nul}A=n\).`],
    ],
    words: [
      ["Kernel \\(\\ker T\\)", "\\(\\{\\vec x:T(\\vec x)=\\vec 0\\}\\)", "\\(=\\operatorname{Nul}A\\)"],
      ["Range", "\\(\\{T(\\vec x)\\}\\)", "\\(=\\operatorname{Col}A\\)"],
      ["One-to-one", "different inputs, different outputs", "\\(\\ker T=\\{\\vec 0\\}\\)"],
      ["Onto", "every \\(\\vec b\\in\\mathbb R^m\\) is an output", "range \\(=\\mathbb R^m\\)"],
      ["Rank", "number of pivots", "\\(=\\dim\\operatorname{range}T\\)"],
    ],
  }),

  section("📌 Kernel and range", S`
  ${definition("kernel and range", S`For linear \(T:\mathbb R^n\to\mathbb R^m\), the <strong>kernel</strong> is \(\ker T=\{\vec x\in\mathbb R^n:T(\vec x)=\vec 0\}\) and the <strong>range</strong> is \(\{T(\vec x):\vec x\in\mathbb R^n\}\). For \(T(\vec x)=A\vec x\): \(\ker T=\operatorname{Nul}A\) (a subspace of \(\mathbb R^n\)) and range \(T=\operatorname{Col}A\) (a subspace of \(\mathbb R^m\)).`)}
  ${theorem("dimension count", S`\(\dim\ker T+\dim\operatorname{range}T=n\), the dimension of the domain.`, S`\(\dim\operatorname{range}T=\dim\operatorname{Col}A=\operatorname{rank}A\) (the pivot columns) and \(\dim\ker T=\dim\operatorname{Nul}A\) (the free variables). Each of the \(n\) columns is either a pivot column or gives a free variable.`)}
  ${kerFig}`),

  section("📌 One-to-one and onto", S`
  ${theorem("one-to-one", S`For linear \(T\): \(T(\vec u)=T(\vec v)\iff\vec u-\vec v\in\ker T\). Hence \(T\) is one-to-one \(\iff\ker T=\{\vec 0\}\iff\) the columns of \(A\) are independent \(\iff\) \(A\) has a pivot in every column.`, S`\(T(\vec u)=T(\vec v)\iff T(\vec u)-T(\vec v)=\vec 0\iff T(\vec u-\vec v)=\vec 0\) by linearity. If \(\ker T=\{\vec 0\}\), equal images force \(\vec u=\vec v\); if some \(\vec k\ne\vec 0\) lies in the kernel, \(T(\vec k)=T(\vec 0)\) with \(\vec k\ne\vec 0\). Finally \(A\vec x=\vec 0\) has only the trivial solution exactly when there are no free variables.`)}
  ${theorem("onto", S`\(T\) is onto \(\iff\operatorname{Col}A=\mathbb R^m\iff\) the columns of \(A\) span \(\mathbb R^m\iff\) \(A\) has a pivot in every row.`, S`Onto means \(A\vec x=\vec b\) is consistent for every \(\vec b\). If some row of an echelon form of \(A\) is zero, choose \(\vec b\) so the augmented column has a nonzero entry there (undo the row operations) — inconsistent. If every row has a pivot, no row \([\,0\ \cdots\ 0\mid c\,]\) can occur.`)}
  ${keyIdea(S`Count pivots. Every column ⇒ one-to-one (needs \(n\le m\)). Every row ⇒ onto (needs \(n\ge m\)). Square \(A\): one-to-one ⇔ onto ⇔ \(A\) invertible.`)}
  ${twoFig}`),

  section("📌 Explore", S`<p>Choose a \(2\times2\) matrix. When \(\det A=0\) the explorer draws the kernel (vectors crushed to \(\vec 0\)) and the range (the line every output lies on); when \(\det A\ne0\) the kernel is just \(\vec 0\) and the range is the whole plane.</p>`),
  widget("laKernel", { init: { a: 1, b: -2, c: -2, d: 4 } }),

  section("📌 Common mistakes", watchOut([
    "The kernel lives in the DOMAIN ℝⁿ; the range lives in the CODOMAIN ℝᵐ.",
    "One-to-one: pivot in every COLUMN. Onto: pivot in every ROW.",
    "A basis of the range uses the pivot columns of A itself, not of its echelon form.",
    "A wide matrix (n > m) is never one-to-one; a tall one (n < m) is never onto.",
    "T(0) = 0 always — the kernel always contains 0; the question is whether it contains anything else.",
  ])),

  examples([
    ["Kernel and range of a 2 × 3 map", S`Find bases for \(\ker T\) and the range of \(T(\vec x)=A\vec x\), \(A=${M([[1, 2, -1], [2, 4, 1]])}\). Is \(T\) one-to-one? Onto?`,
      [...steps([[1, 2, -1], [2, 4, 1]], [
          [S`Clear column 1.`, ["R2-2R1"]],
          [S`Scale the pivot in column 3.`, ["R2*1/3"]],
          [S`Clear column 3 above its pivot.`, ["R1+R2"]],
        ], { bar: false, intro: S`Row reduce \(A\)` }).steps,
        S`Pivots in columns 1 and 3; \(x_2=t\) free, \(x_1=-2t\), \(x_3=0\): \(\ker T=\operatorname{span}\{(-2,1,0)\}\). Check: \(${M([[1, 2, -1], [2, 4, 1]])}${cv(-2, 1, 0)}=${cv("-2+2+0", "-4+4+0")}=${cv(0, 0)}\) ✓.`,
        S`Range: the pivot columns of \(A\), \(\operatorname{span}\{(1,2),(-1,1)\}=\mathbb R^2\) (2 pivots, 2 rows). Count: \(\dim\ker T+\dim\operatorname{range}T=1+2=3=n\).`],
      S`\(\ker T=\operatorname{span}\{(-2,1,0)\}\), range \(=\mathbb R^2\): onto, not one-to-one`],
    ["One-to-one but not onto", S`Is \(T(\vec x)=A\vec x\), \(A=${M([[1, 0], [2, 1], [1, 3]])}\), one-to-one? Onto? If not onto, find \(\vec b\) outside the range.`,
      [...steps([[1, 0], [2, 1], [1, 3]], [
          [S`Clear column 1.`, ["R2-2R1", "R3-R1"]],
          [S`Clear column 2 below its pivot.`, ["R3-3R2"]],
        ], { bar: false, intro: S`Row reduce \(A\)` }).steps,
        S`A pivot in each column: one-to-one. Row 3 has no pivot: not onto.`,
        S`Try \(\vec b=(0,0,1)\) with the same operations: \[${am([[1, 0, 0], [2, 1, 0], [1, 3, 1]])}\xrightarrow{R_2\to R_2-2R_1,\ R_3\to R_3-R_1}${am([[1, 0, 0], [0, 1, 0], [0, 3, 1]])}\xrightarrow{R_3\to R_3-3R_2}${am([[1, 0, 0], [0, 1, 0], [0, 0, 1]])},\] whose last row is impossible. So \((0,0,1)\) is not in the range.`],
      S`one-to-one, not onto; \((0,0,1)\) is not in the range`],
    ["A square map: both or neither", S`Show that \(T(\vec x)=A\vec x\), \(A=${M([[1, 2, 0], [0, 1, 1], [1, 3, 2]])}\), is one-to-one and onto.`,
      [...steps([[1, 2, 0], [0, 1, 1], [1, 3, 2]], [
          [S`Clear column 1.`, ["R3-R1"]],
          [S`Clear column 2 below its pivot.`, ["R3-R2"]],
        ], { bar: false, intro: S`Row reduce \(A\)` }).steps,
        S`Three pivots for a \(3\times3\) matrix: a pivot in every column (one-to-one) and every row (onto).`,
        S`Equivalently \(\det A=1${D([[1, 1], [3, 2]])}-2${D([[0, 1], [1, 2]])}+0=1(2-3)-2(0-1)=1\ne0\).`],
      S`one-to-one and onto (\(A\) is invertible)`],
    ["Neither one-to-one nor onto", S`For \(A=${M([[1, -2], [-2, 4]])}\), find \(\ker T\) and the range, and describe them.`,
      [S`Row reduce: \[${M([[1, -2], [-2, 4]])}\xrightarrow{R_2\to R_2+2R_1}${M([[1, -2], [0, 0]])}.\]`,
        S`One pivot. Kernel: \(x_2=t\), \(x_1=2t\): \(\ker T=\operatorname{span}\{(2,1)\}\). Check: \(${M([[1, -2], [-2, 4]])}${cv(2, 1)}=${cv("2-2", "-4+4")}=${cv(0, 0)}\) ✓.`,
        S`Range: pivot column 1 of \(A\): \(\operatorname{span}\{(1,-2)\}\), the line \(x_2=-2x_1\). Count: \(1+1=2=n\).`],
      S`\(\ker T\) is the line along \((2,1)\); the range is the line along \((1,-2)\)`, ranFig],
    ["Two inputs, one output", S`For \(A=${M([[1, 1, 0], [0, 1, 1]])}\), find two different vectors with the same image.`,
      [S`Find the kernel: \[${M([[1, 1, 0], [0, 1, 1]])}\xrightarrow{R_1\to R_1-R_2}${M([[1, 0, -1], [0, 1, 1]])},\] so \(x_3=t\), \(x_2=-t\), \(x_1=t\): \(\ker T=\operatorname{span}\{(1,-1,1)\}\).`,
        S`Any \(\vec u\) and \(\vec v=\vec u-(1,-1,1)\) have the same image. With \(\vec u=(2,0,0)\), \(\vec v=(1,1,-1)\): \[A\vec u=${M([[1, 1, 0], [0, 1, 1]])}${cv(2, 0, 0)}=${cv(2, 0)},\qquad A\vec v=${M([[1, 1, 0], [0, 1, 1]])}${cv(1, 1, -1)}=${cv("1+1+0", "0+1-1")}=${cv(2, 0)}.\]`],
      S`e.g. \((2,0,0)\) and \((1,1,-1)\) both map to \((2,0)\)`, twoFig],
  ]),

  practice([
    q("1-1?", S`\(T:\mathbb R^4\to\mathbb R^3\) is linear. Can \(T\) be one-to-one?`, choice(["no", "yes"], 0),
      "4 columns, at most 3 pivots.", [S`At least one free variable, so \(\ker T\ne\{\vec 0\}\).`], S`no`),
    q("dimension", S`\(T:\mathbb R^5\to\mathbb R^3\) has a 2-dimensional range. Find \(\dim\ker T\).`, num(3),
      "Add to n = 5.", [S`\(5-2=3\).`], S`\(3\)`),
    q("onto?", S`Is \(T(\vec x)=${M([[1, 2, 3], [0, 0, 1]])}\vec x\) onto \(\mathbb R^2\)?`, choice(["yes", "no"], 0),
      "Pivot in every row?", [S`Pivots in columns 1 and 3 — one per row.`], S`yes`),
    q("kernel", S`\(\ker T\) for \(T(\vec x)=${M([[1, 3], [2, 6]])}\vec x\) is spanned by \((-3,k)\). Find \(k\).`, num(1),
      "x₁ = −3x₂.", [S`\(${M([[1, 3], [2, 6]])}${cv(-3, 1)}=${cv(0, 0)}\).`], S`\(1\)`),
    q("rank", S`\(A\) is \(4\times4\) and \(T(\vec x)=A\vec x\) is onto. What is \(\dim\ker T\)?`, num(0),
      "Square: onto ⇔ one-to-one.", [S`Four pivots, no free variables.`], S`\(0\)`),
  ]),

  ...hard([
    ["A parameter that breaks one-to-one", S`For which \(h\) is \(T(\vec x)=A\vec x\), \(A=${M([[1, 2, "h"], [0, 1, 1], [1, 3, 4]])}\), not one-to-one? For that \(h\), find \(\ker T\).`,
      [S`\[${M([[1, 2, "h"], [0, 1, 1], [1, 3, 4]])}\xrightarrow{R_3\to R_3-R_1}${M([[1, 2, "h"], [0, 1, 1], [0, 1, "4-h"]])}\xrightarrow{R_3\to R_3-R_2}${M([[1, 2, "h"], [0, 1, 1], [0, 0, "3-h"]])}.\]`,
        S`Column 3 has a pivot unless \(3-h=0\). So \(T\) fails to be one-to-one exactly when \(h=3\).`,
        S`For \(h=3\): \(x_3=t\), \(x_2=-t\), \(x_1=-2x_2-3x_3=2t-3t=-t\): \(\ker T=\operatorname{span}\{(-1,-1,1)\}\). Check: \[${M([[1, 2, 3], [0, 1, 1], [1, 3, 4]])}${cv(-1, -1, 1)}=${cv("-1-2+3", "0-1+1", "-1-3+4")}=${cv(0, 0, 0)}\ \checkmark\]`],
      S`\(h=3\); then \(\ker T=\operatorname{span}\{(-1,-1,1)\}\)`],
    ["Wide maps are never one-to-one", S`Prove that a linear \(T:\mathbb R^n\to\mathbb R^m\) with \(n>m\) is not one-to-one, and find a nonzero kernel vector of \(A=${M([[1, 2, 3], [4, 5, 6]])}\).`,
      [S`\(A\) is \(m\times n\) with at most \(m\) pivots (one per row). Since \(n>m\), some column has no pivot, giving a free variable and a nonzero solution of \(A\vec x=\vec 0\).`,
        ...steps([[1, 2, 3], [4, 5, 6]], [
          [S`Clear column 1.`, ["R2-4R1"]],
          [S`Scale the pivot.`, ["R2*-1/3"]],
          [S`Clear column 2 above its pivot.`, ["R1-2R2"]],
        ], { bar: false, intro: S`For the example, row reduce \(A\)` }).steps,
        S`\(x_3=t\), \(x_2=-2t\), \(x_1=t\). Check: \(${M([[1, 2, 3], [4, 5, 6]])}${cv(1, -2, 1)}=${cv("1-4+3", "4-10+6")}=${cv(0, 0)}\) ✓.`],
      S`more columns than pivots ⇒ a free variable; e.g. \((1,-2,1)\in\ker T\)`],
  ], [
    q("hard", S`\(A\) is \(4\times3\) with rank 3. \(T(\vec x)=A\vec x\) is:`, choice(["one-to-one but not onto", "onto but not one-to-one", "both", "neither"], 0),
      "Pivots: every column, not every row.", [S`3 pivots in 3 columns; 4 rows.`], "one-to-one but not onto"),
    q("hard", S`\(\dim\) of the range of \(T(\vec x)=${M([[1, 2], [2, 4], [3, 6]])}\vec x\)?`, num(1),
      "Column 2 = 2 × column 1.", [S`One pivot.`], S`\(1\)`),
    q("hard", S`\(T:\mathbb R^6\to\mathbb R^4\) is onto. Find \(\dim\ker T\).`, num(2),
      "Range = ℝ⁴.", [S`\(6-4=2\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["What are the kernel and range of T(x) = Ax?", "Nul A (in ℝⁿ) and Col A (in ℝᵐ)."],
      ["When is T one-to-one?", "When ker T = {0}: a pivot in every column."],
      ["When is T onto?", "When the range is ℝᵐ: a pivot in every row."],
      ["What if A is square?", "One-to-one ⇔ onto ⇔ A invertible."],
      ["How are the dimensions related?", "dim ker T + dim range T = n."],
    ],
    summary: [
      "ker T = Nul A, range T = Col A.",
      "T(u) = T(v) ⇔ u − v ∈ ker T.",
      "One-to-one ⇔ pivot in every column.",
      "Onto ⇔ pivot in every row.",
      "dim ker + dim range = n.",
    ],
    next: "7.7 describes a linear map in a basis adapted to it, where its matrix can become much simpler.",
  }),
];
